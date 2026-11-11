const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const { execFileSync } = require('node:child_process');
const root = path.resolve(__dirname, '../..');
const assets = path.join(root, 'docs/assets');
const project = require('../lib/translations').createProject(root);
const languages = ['en', ...Object.keys(require('../translation-config.json').languages)];

test.before(() => execFileSync(process.execPath, ['scripts/build-search-index.js'], { cwd: root }));

// Execute the real browser loader and matcher. Only the script element/network
// boundary is replaced so tests use generated local assets without a web server.
function browser(language = 'en') {
  const scripts = [], requests = [];
  const context = { URL, Promise, console, location: { pathname: '/manual/v4/' } };
  context.window = context;
  const attrs = { 'data-manual-language': language, 'data-manual-search-version': 'v4' };
  context.document = {
    readyState: 'loading', body: { getAttribute: key => attrs[key] || null },
    addEventListener() {},
    querySelector(selector) {
      if (selector === 'script[data-manual-search]') return { src: 'https://manual.test/manual/assets/manual-search.js' };
      return scripts.find(script => selector === 'script[src="' + script.src + '"]') || null;
    },
    createElement() {
      const events = {}, data = {};
      return { addEventListener: (name, handler) => { events[name] = handler; },
        setAttribute: (key, value) => { data[key] = value; }, getAttribute: key => data[key], events };
    },
    head: { appendChild(script) {
      scripts.push(script); requests.push(script.src);
      try {
        const url = new URL(script.src);
        assert.equal(url.origin, 'https://manual.test');
        assert.ok(url.pathname.startsWith('/manual/assets/'));
        vm.runInContext(fs.readFileSync(path.join(assets, path.basename(url.pathname)), 'utf8'), context);
        script.events.load();
      } catch (error) { script.events.error(error); }
    } },
  };
  vm.createContext(context);
  const source = fs.readFileSync(path.join(assets, 'manual-search.js'), 'utf8');
  const marker = "  if (document.readyState === 'loading') {";
  assert.ok(source.includes(marker));
  vm.runInContext(source.replace(marker,
    '  window.searchTest = { loadIndex, loadLunr, buildQuery, translatedMatches, renderResults };\n' + marker), context);
  return { context, requests, setLanguage: value => { attrs['data-manual-language'] = value; } };
}

test('each language has separate, matching JS and JSON indexes with local result URLs', async () => {
  for (const language of languages) {
    const { context, requests } = browser(language);
    const payload = await context.searchTest.loadIndex('v4');
    const json = JSON.parse(fs.readFileSync(path.join(assets, `manual-index-v4-${language}.json`), 'utf8'));
    assert.equal(JSON.stringify(payload), JSON.stringify(json));
    assert.equal(payload.language, language);
    assert.equal(payload.version, 'v4');
    assert.equal(payload.docs.length, project.pages.length);
    const prefix = language === 'en' ? '/v4/' : `/v4/${language}/`;
    assert.ok(payload.docs.every(doc => doc.url.startsWith(prefix)));
    if (language === 'en') assert.ok(payload.docs.every(doc => !/^\/v4\/(?:nl|fr|es|de|it|ja|pl|zh-CN)\//.test(doc.url)));
    assert.equal(requests.length, 1);
    assert.equal(new URL(requests[0]).pathname, `/manual/assets/manual-index-v4-${language}.js`);
  }
});

test('localized terms find translated notes and return links in that language', async () => {
  const queries = { en: 'Markdown', nl: 'tekstvakken', fr: 'zones de texte', de: 'Textfelder',
    es: 'cuadros de texto', it: 'caselle di testo', pl: 'pola tekstowe', ja: '見出し', 'zh-CN': '文本框' };
  for (const language of languages) {
    const { context } = browser(language);
    const payload = await context.searchTest.loadIndex('v4');
    const target = language === 'en' ? '/v4/Text/' : `/v4/${language}/Text-and-Annotations/`;
    const wanted = payload.docs.find(doc => doc.url === target);
    const query = language === 'en' || project.current(language, 'Text-and-Annotations.md') ? queries[language] : wanted.title;
    let matches;
    if (payload.engine === 'lunr') {
      await context.searchTest.loadLunr();
      matches = context.searchTest.buildQuery(context.lunr.Index.load(payload.indexData), query);
    } else matches = context.searchTest.translatedMatches(query, payload);
    assert.ok(matches.some(match => String(match.ref) === String(wanted.id)), language + ': ' + queries[language]);
    const results = {};
    context.searchTest.renderResults(results, matches, payload);
    assert.ok(results.innerHTML.includes(target), language + ': result links');
  }
});

test('a language change cannot reuse another language payload and mismatches fail closed', async () => {
  const { context, setLanguage, requests } = browser('en');
  const en = await context.searchTest.loadIndex('v4');
  setLanguage('fr');
  const fr = await context.searchTest.loadIndex('v4');
  assert.equal(en.language, 'en'); assert.equal(fr.language, 'fr');
  setLanguage('en');
  assert.equal(await context.searchTest.loadIndex('v4'), en);
  assert.equal(requests.length, 2);
  context.MANUAL_INDEXES_V4.en = fr;
  await assert.rejects(context.searchTest.loadIndex('v4'), /mismatch/);
});

test('Japanese/Chinese and canonically equivalent or full-width queries are searchable', async () => {
  for (const language of ['ja', 'zh-CN']) {
    const { context } = browser(language);
    const payload = await context.searchTest.loadIndex('v4');
    assert.ok(context.searchTest.translatedMatches('Ｍａｒｋｄｏｗｎ', payload).length);
  }
  const { context } = browser('fr');
  const matches = context.searchTest.translatedMatches('Re\u0301glage', {
    language: 'fr', docs: [{ id: 1, title: 'Réglage', content: 'Réglage de la grille' }],
  });
  assert.equal(matches.length, 1);
});

test('English and v3 load Lunr locally, and legacy JSON is freshly generated', async () => {
  const { context, requests } = browser('fr');
  await context.searchTest.loadLunr();
  const payload = await context.searchTest.loadIndex('v3');
  assert.ok(context.lunr.Index.load(payload.indexData).search('wire').length);
  assert.ok(payload.docs.every(doc => doc.url.startsWith('/v3/')));
  assert.ok(requests.some(url => url.endsWith('/assets/lunr.min.js')));
  for (const version of ['v3', 'v4']) {
    const json = JSON.parse(fs.readFileSync(path.join(assets, `lunr-index-${version}.json`), 'utf8'));
    assert.ok(json.indexData && json.docs.length);
  }
});
