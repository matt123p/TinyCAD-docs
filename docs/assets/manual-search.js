(function () {
  var SEARCH_SCRIPT_SELECTOR = 'script[data-manual-search]';
  var SEARCH_BOX_ID = 'manual-search-box';
  var SEARCH_FORM_ID = 'manual-search-form';
  var SEARCH_INPUT_ID = 'manual-search-input';
  var SEARCH_RESULTS_ID = 'manual-search-results';
  var SEARCH_RESULT_LIMIT = 10;

  function getSearchVersion() {
    var configuredVersion = document.body && document.body.getAttribute('data-manual-search-version');
    if (configuredVersion === 'v3' || configuredVersion === 'v4') {
      return configuredVersion;
    }

    var match = window.location.pathname.match(/\/(v3|v4)(?:\/|$)/);
    return match ? match[1] : null;
  }

  function getAssetUrl(fileName) {
    var script = document.querySelector(SEARCH_SCRIPT_SELECTOR);
    if (!script || !script.src) {
      return '/assets/' + fileName;
    }

    return new URL(fileName, script.src).toString();
  }

  function loadScript(src) {
    return new Promise(function (resolve, reject) {
      var existing = document.querySelector('script[src="' + src + '"]');
      if (existing) {
        if (existing.getAttribute('data-loaded') === 'true') {
          resolve();
          return;
        }

        existing.addEventListener('load', resolve, { once: true });
        existing.addEventListener('error', reject, { once: true });
        return;
      }

      var script = document.createElement('script');
      script.src = src;
      script.async = true;
      script.addEventListener('load', function () {
        script.setAttribute('data-loaded', 'true');
        resolve();
      }, { once: true });
      script.addEventListener('error', reject, { once: true });
      document.head.appendChild(script);
    });
  }

  function loadLunr() {
    if (window.lunr) {
      return Promise.resolve();
    }

    return loadScript('https://cdn.jsdelivr.net/npm/lunr/lunr.min.js');
  }

  function loadIndex(version) {
    var globalName = version === 'v3' ? 'LUNR_INDEX_V3' : 'LUNR_INDEX_V4';
    if (window[globalName]) {
      return Promise.resolve(window[globalName]);
    }

    return loadScript(getAssetUrl('lunr-index-' + version + '.js')).then(function () {
      return window[globalName] || null;
    });
  }

  function escapeHtml(value) {
    return String(value || '')
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
  }

  function createSearchUi() {
    if (document.getElementById(SEARCH_BOX_ID)) {
      return;
    }

    var searchContainer = document.createElement('div');
    searchContainer.id = SEARCH_BOX_ID;
    searchContainer.className = 'manual-search-container';
    searchContainer.innerHTML = [
      '<form id="' + SEARCH_FORM_ID + '" autocomplete="off" role="search">',
      '  <input id="' + SEARCH_INPUT_ID + '" type="search" placeholder="Search this manual..." aria-label="Search this manual">',
      '  <button type="submit" aria-label="Search">',
      '    <i class="bi bi-search" aria-hidden="true"></i>',
      '  </button>',
      '</form>',
      '<div id="' + SEARCH_RESULTS_ID + '" hidden tabindex="-1" aria-live="polite"></div>'
    ].join('');

    var navbar = document.querySelector('.manual-navbar-inner');
    if (navbar) {
      navbar.appendChild(searchContainer);
    }
  }

  function setStatus(resultsNode, message, className) {
    resultsNode.innerHTML = '<div class="' + className + '">' + escapeHtml(message) + '</div>';
    resultsNode.hidden = false;
  }

  function clearResults(resultsNode) {
    resultsNode.innerHTML = '';
    resultsNode.hidden = true;
  }

  function getNormalizedTerms(index, queryText) {
    if (!window.lunr || !index || !index.searchPipeline) {
      return queryText
        .trim()
        .split(/\s+/)
        .map(function (term) { return term.trim(); })
        .filter(Boolean);
    }

    return index.searchPipeline.run(lunr.tokenizer(queryText))
      .map(function (token) { return token.toString(); })
      .filter(Boolean);
  }

  function buildQuery(index, queryText) {
    var searchText = queryText.trim();
    var directMatches = [];

    if (!searchText) {
      return [];
    }

    try {
      directMatches = index.search(searchText);
    } catch (error) {
      directMatches = [];
    }

    if (directMatches.length) {
      return directMatches;
    }

    var terms = getNormalizedTerms(index, searchText);

    if (!terms.length) {
      return [];
    }

    return index.query(function (query) {
      terms.forEach(function (term) {
        query.term(term, {
          boost: 20
        });

        query.term(term, {
          wildcard: lunr.Query.wildcard.TRAILING,
          boost: 10,
          presence: lunr.Query.presence.REQUIRED
        });
      });
    });
  }

  function renderResults(resultsNode, matches, indexPayload) {
    if (!matches.length) {
      setStatus(resultsNode, 'No results found.', 'manual-search-no-results');
      return;
    }

    var docsById = Object.create(null);
    indexPayload.docs.forEach(function (doc) {
      docsById[String(doc.id)] = doc;
    });

    resultsNode.innerHTML = matches.slice(0, SEARCH_RESULT_LIMIT).map(function (match) {
      var doc = docsById[String(match.ref)];
      if (!doc) {
        return '';
      }

      return [
        '<div class="manual-search-result">',
        '  <a href="' + escapeHtml(doc.url) + '">' + escapeHtml(doc.title) + '</a>',
        '  <div class="manual-search-snippet">' + escapeHtml(doc.snippet || '') + '</div>',
        '</div>'
      ].join('');
    }).join('');
    resultsNode.hidden = false;
  }

  function setupSearch(version, indexPayload) {
    if (!window.lunr || !indexPayload || !indexPayload.indexData || !Array.isArray(indexPayload.docs)) {
      return;
    }

    createSearchUi();

    var form = document.getElementById(SEARCH_FORM_ID);
    var input = document.getElementById(SEARCH_INPUT_ID);
    var resultsNode = document.getElementById(SEARCH_RESULTS_ID);
    var index = lunr.Index.load(indexPayload.indexData);
    var lastQuery = '';

    if (!form || !input || !resultsNode) {
      return;
    }

    function runSearch(queryText) {
      var query = queryText.trim();
      if (!query) {
        clearResults(resultsNode);
        return;
      }

      if (query === lastQuery) {
        return;
      }

      lastQuery = query;

      try {
        renderResults(resultsNode, buildQuery(index, query), indexPayload);
      } catch (error) {
        setStatus(resultsNode, 'Search could not parse that query.', 'manual-search-status');
      }
    }

    form.addEventListener('submit', function (event) {
      event.preventDefault();
      runSearch(input.value);
      if (!resultsNode.hidden) {
        resultsNode.focus();
      }
    });

    input.addEventListener('input', function () {
      if (!input.value.trim()) {
        lastQuery = '';
      }
      runSearch(input.value);
    });

    document.addEventListener('click', function (event) {
      var container = document.getElementById(SEARCH_BOX_ID);
      if (container && !container.contains(event.target)) {
        clearResults(resultsNode);
      }
    });

    document.addEventListener('keydown', function (event) {
      if (event.key === 'Escape') {
        clearResults(resultsNode);
      }
    });

    input.setAttribute('data-manual-search-ready', version);
  }

  function init() {
    var version = getSearchVersion();
    if (!version) {
      return;
    }

    loadLunr()
      .then(function () { return loadIndex(version); })
      .then(function (indexPayload) { setupSearch(version, indexPayload); })
      .catch(function () {
        createSearchUi();
        var resultsNode = document.getElementById(SEARCH_RESULTS_ID);
        if (resultsNode) {
          setStatus(resultsNode, 'Search is temporarily unavailable.', 'manual-search-status');
        }
      });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init, { once: true });
  } else {
    init();
  }
})();