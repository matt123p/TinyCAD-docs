const { test } = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const os = require('node:os');
const path = require('node:path');
const YAML = require('yaml');
const { createProject, protectPage, splitPage, read } = require('../lib/translations');
const { run, requestTranslation } = require('../translate');
const { prepare, rewriteLinks } = require('../prepare-translations');
const repo = path.resolve(__dirname, '../..');
function fixture(t) {
  const root = fs.mkdtempSync(path.join(os.tmpdir(), 'tinycad-translations-'));
  t.after(() => fs.rmSync(root, { recursive: true, force: true }));
  for (const directory of ['scripts', 'docs/v4', 'docs/_data']) fs.mkdirSync(path.join(root, directory), { recursive: true });
  fs.copyFileSync(path.join(repo, 'scripts/translation-config.json'), path.join(root, 'scripts/translation-config.json'));
  fs.copyFileSync(path.join(repo, 'docs/_data/navigation.yml'), path.join(root, 'docs/_data/navigation.yml'));
  for (const file of ['index.md', 'User-guide.md', 'Touch-controls.md', 'Using-Symbol-Libraries.md']) fs.copyFileSync(path.join(repo, 'docs/v4', file), path.join(root, 'docs/v4', file));
  return root;
}
const identity = async (strings) => strings;

test('every current v4 page round-trips protected markup, including nested Liquid links', () => {
  const p = createProject(repo);
  for (const page of p.pages) {
    const input = protectPage(p.source(page));
    const output = input.restore(input.strings);
    assert.doesNotMatch(output, /TCAD(?:PROTECTED|CAPTION)/, page);
    assert.ok(output.includes('layout: default'), page);
  }
});
test('protected code, destinations, Liquid and original anchors survive translated prose', () => {
  const raw = '---\nlayout: default\n---\n# A Heading\n\nA [link](../Symbols/#a) and `Ctrl-C`.\n\n{% include video-player.html src="/v4/images/a.mp4" caption="A video" %}\n\n```js\nconsole.log("A code");\n```\n';
  const input = protectPage(raw);
  const translated = input.strings.map((s) => s.replace('A Heading', 'Un titre').replace('A video', 'Une vidéo'));
  const output = input.restore(translated);
  assert.match(output, /# Un titre\n\{: #a-heading\}/);
  assert.match(output, /\[link\]\(\.\.\/Symbols\/#a\)/);
  assert.match(output, /caption="Une vidéo"/);
  assert.match(output, /console.log\("A code"\)/);
  assert.throws(() => input.restore([translated[0].replace(/TCADPROTECTED\d+TOKEN/, ''), ...translated.slice(1)]), /protected markup/);
  assert.throws(() => input.restore([translated[0] + '\n# Extra heading', ...translated.slice(1)]), /Markdown structure/);
});
test('cache reuse needs no key; line endings do not invalidate; only changed pages regenerate', async (t) => {
  const root = fixture(t);
  let calls = 0;
  const translate = async (s) => { calls++; return s; };
  const args = ['--languages', 'fr'];
  await run(root, args, { translate });
  assert.equal(calls, 5);
  await run(root, args); // A cached run never reads or requires a key.
  assert.equal(calls, 5);
  const file = path.join(root, 'docs/v4/User-guide.md');
  fs.writeFileSync(file, read(file).replace(/\n/g, '\r\n'));
  await run(root, args, { translate });
  assert.equal(calls, 5);
  fs.appendFileSync(file, '\nNew English text.\n');
  await run(root, args, { translate });
  assert.equal(calls, 6);
});
test('manual translation edits persist, but a model/prompt/glossary change invalidates cache', async (t) => {
  const root = fixture(t);
  await run(root, ['--languages', 'fr'], { translate: identity });
  const cached = path.join(root, 'translations/v4/fr/User-guide.md');
  fs.appendFileSync(cached, '\nHuman correction.\n');
  await run(root, ['--languages', 'fr']);
  assert.match(read(cached), /Human correction/);
  const config = path.join(root, 'scripts/translation-config.json');
  const data = JSON.parse(read(config));
  data.promptVersion++;
  fs.writeFileSync(config, JSON.stringify(data));
  assert.equal(createProject(root).current('fr', 'User-guide.md'), false);
});
test('failed runs keep completed units and resume without regenerating them', async (t) => {
  const root = fixture(t);
  let calls = 0;
  await assert.rejects(run(root, ['--languages', 'fr'], { translate: async (s) => {
    if (++calls === 3) throw new Error('Simulated interruption');
    return s;
  } }), /interruption/);
  const p = createProject(root);
  assert.equal(Object.keys(p.manifest.entries).length, 2);
  calls = 0;
  await run(root, ['--languages', 'fr'], { translate: async (s) => { calls++; return s; } });
  assert.equal(calls, 3);
});
test('invalid output is never cached', async (t) => {
  const root = fixture(t);
  assert.equal(await run(root, ['--languages', 'fr'], { translate: async () => [] }), 1);
  assert.equal(fs.existsSync(path.join(root, 'translations/v4/manifest.json')), false);
});
test('dry runs do not create files or request translations; inputs reject unknown paths', async (t) => {
  const root = fixture(t);
  assert.equal(await run(root, ['--dry-run', '--languages', 'fr']), 0);
  assert.equal(fs.existsSync(path.join(root, 'translations')), false);
  await assert.rejects(run(root, ['--languages', '../xx']), /Languages must/);
  await assert.rejects(run(root, ['--page', '../../.secrets']), /Unknown v4/);
});
test('partial and stale previews use current English, localized routes and shared assets', async (t) => {
  const root = fixture(t);
  await run(root, ['--languages', 'fr', '--page', 'User-guide.md'], { translate: identity });
  const p = createProject(root);
  const before = p.pages.map((file) => p.source(file));
  const result = prepare(root);
  assert.deepEqual(result.enabled, ['fr']);
  assert.equal(result.count, 4);
  let translated = splitPage(read(path.join(root, 'docs/v4/fr/User-guide.md')));
  assert.equal(translated.frontMatter.permalink, '/v4/fr/User-guide/');
  assert.equal(translated.frontMatter.manual_fallback, false);
  assert.match(translated.body, /\(\/v4\/fr\/Touch-controls\/\)/);
  assert.match(translated.body, /page.manual_navigation/);
  let fallback = splitPage(read(path.join(root, 'docs/v4/fr/Touch-controls.md')));
  assert.equal(fallback.frontMatter.lang, 'en');
  assert.equal(fallback.frontMatter.manual_fallback, true);
  assert.match(fallback.body, /\(\/v4\/images\/touch-loupe.png\)/);
  fs.appendFileSync(path.join(root, 'docs/v4/User-guide.md'), '\nUpdated source.\n');
  prepare(root);
  translated = splitPage(read(path.join(root, 'docs/v4/fr/User-guide.md')));
  assert.equal(translated.frontMatter.manual_stale, true);
  assert.match(translated.body, /Updated source/);
  assert.deepEqual(p.pages.filter((f) => f !== 'User-guide.md').map((f) => p.source(f)), p.pages.map((f, i) => f === 'User-guide.md' ? null : before[i]).filter(Boolean));
});
test('link rewriting preserves external targets, code examples and English fragment IDs', () => {
  const routes = new Set(['/v4/', '/v4/User-guide/']);
  const input = '[Back](../CONTENTS/) [Page](../User-guide/#temporarily-hiding-objects) [External](https://example.com)\n\n```md\n[Example](../User-guide/)\n```\n';
  const output = rewriteLinks(input, 'Touch-controls.md', 'ja', routes);
  assert.match(output, /\(\/v4\/ja\/\)/);
  assert.match(output, /\(\/v4\/ja\/User-guide\/#temporarily-hiding-objects\)/);
  assert.match(output, /\(https:\/\/example.com\)/);
  assert.match(output, /\[Example\]\(\.\.\/User-guide\/\)/);
});
test('Responses request uses Luna, strict output schema, and retries rate limits', async () => {
  const config = createProject(repo).config;
  let requests = 0;
  const result = await requestTranslation(['Hello'], 'fr', config, {
    apiKey: 'test-only-not-a-real-key', sleep: async () => {},
    fetchImpl: async (url, options) => {
      requests++;
      const body = JSON.parse(options.body);
      assert.equal(url, 'https://api.openai.com/v1/responses');
      assert.equal(body.model, 'gpt-6-luna');
      assert.equal(body.store, false);
      assert.equal(body.text.format.strict, true);
      if (requests === 1) return { ok: false, status: 429, headers: new Headers() };
      return { ok: true, json: async () => ({ status: 'completed', output: [{ type: 'message', content: [{ type: 'output_text', text: '{"strings":["Bonjour"]}' }] }] }) };
    },
  });
  assert.deepEqual(result, ['Bonjour']);
  assert.equal(requests, 2);
  await assert.rejects(requestTranslation(['Hello'], 'fr', config, { apiKey: 'test', fetchImpl: async () => ({ ok: true, json: async () => ({ status: 'incomplete' }) }) }), /incomplete/);
});
test('workflow commits only durable translations and explicitly dispatches Pages', () => {
  const workflow = YAML.parse(read(path.join(repo, '.github/workflows/translate.yml')));
  assert.equal(workflow.name, 'translate');
  assert.ok(workflow.on.workflow_dispatch);
  assert.equal(workflow.permissions.contents, 'write');
  const steps = workflow.jobs.translate.steps;
  assert.ok(steps.some((s) => s.run?.includes('git add -- translations/v4/')));
  assert.ok(steps.some((s) => s.run?.includes('gh workflow run pages.yml --ref main')));
  const pages = YAML.parse(read(path.join(repo, '.github/workflows/pages.yml')));
  assert.equal(pages.jobs.build.steps.filter((s) => s.run === 'npm run build').length, 1);
});

test('Liquid layouts render localized navigation and language links without changing v3 navigation', async (t) => {
  const { Liquid } = require('liquidjs');
  const root = fixture(t);
  await run(root, ['--languages', 'fr', '--page', 'User-guide.md'], { translate: async (strings) => strings.map((s) => s === 'Contents' ? 'Sommaire' : s === 'Language' ? 'Langue' : s) });
  prepare(root);
  const engine = new Liquid();
  engine.registerFilter('jsonify', (value) => JSON.stringify(value ?? null));
  engine.registerFilter('relative_url', (value) => value);
  const template = read(path.join(repo, 'docs/_layouts/default.html')).replace(/{%-?\s*include\s+\S+\s*-?%}/g, '');
  const navigation = YAML.parse(read(path.join(root, 'docs/_data/navigation.yml')));
  const site = { data: { navigation, versions: { versions: [{ id: 'v4', label: 'TinyCAD v4', path: '/v4/' }, { id: 'v3', label: 'TinyCAD v3', path: '/v3/' }] }, manual_languages: [{ code: 'en', label: 'English' }, { code: 'fr', label: 'Français' }] }, github_edit_base_url: 'https://github.com/example/docs/blob/main' };
  const page = splitPage(read(path.join(root, 'docs/v4/fr/User-guide.md'))).frontMatter;
  page.url = page.permalink;
  page.path = 'v4/fr/User-guide.md';
  const html = await engine.parseAndRender(template, { page, site, content: '<h1>Dessin</h1>' });
  assert.match(html, /Sommaire/);
  assert.match(html, /aria-label="Langue"/);
  assert.match(html, /href="\/v4\/fr\/User-guide\/"/);
  assert.match(html, /value="\/v4\/User-guide\/" lang="en"/);
  assert.match(html, /data-manual-language="fr"/);
  assert.doesNotMatch(html, /var manualUi =\s*\|\|/);
  assert.match(html, /\/docs\/v4\/User-guide.md/);
  const v3 = await engine.parseAndRender(template, { page: { url: '/v3/' }, site, content: '<h1>v3</h1>' });
  assert.doesNotMatch(v3, /manual-language-control/);
  assert.match(v3, /href="\/v3\/Drawing-a-design\/"/);
  assert.match(v3, /manual-sidebar-scroll-v3'/);
});


test('Buses prose can be rewrapped without changing its Markdown structure', () => {
  const p = createProject(repo);
  const input = protectPage(p.source('Buses.md'));
  const rewrapped = input.strings.map((text) => text
    .replace('Buses\nimprove readability', 'Buses improve readability')
    .replace('**wires and net\nlabels**', '**draden en netlabels**')
    .replace('net\nidentity for tools.', 'net identity for tools.'));
  assert.doesNotThrow(() => input.restore(rewrapped));
});
test('validation retries a page with feedback and caches only the accepted response', async (t) => {
  const root = fixture(t);
  let calls = 0;
  const result = await run(root, ['--languages', 'fr', '--page', 'User-guide.md'], {
    translate: async (strings, language, config, feedback) => {
      calls++;
      if (calls === 2) return [strings[0] + '\n# Unexpected heading', ...strings.slice(1)];
      if (calls === 3) assert.match(feedback, /Markdown structure/);
      return strings;
    },
  });
  assert.equal(result, 0);
  assert.equal(calls, 3);
  assert.equal(createProject(root).current('fr', 'User-guide.md'), true);
});
test('a repeatedly rejected page does not stop later pages or languages', async (t) => {
  const root = fixture(t);
  let rejected = 0;
  const result = await run(root, ['--languages', 'fr,de'], {
    translate: async (strings, language) => {
      if (language === 'fr' && strings[0].includes('# TinyCAD v4 - Drawing')) {
        rejected++;
        return [strings[0] + '\n# Unexpected heading', ...strings.slice(1)];
      }
      return strings;
    },
  });
  assert.equal(result, 1);
  assert.equal(rejected, 3);
  const p = createProject(root);
  assert.equal(p.current('fr', 'User-guide.md'), false);
  assert.equal(p.current('fr', 'index.md'), true);
  assert.equal(p.current('de', 'User-guide.md'), true);
  assert.equal(Object.keys(p.manifest.entries).length, 9);
});
