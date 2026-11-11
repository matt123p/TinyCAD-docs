#!/usr/bin/env node
const fs = require('node:fs');
const path = require('node:path');
const assert = require('node:assert/strict');
const YAML = require('yaml');
const { createProject } = require('./lib/translations');
const root = path.resolve(__dirname, '..');
const config = YAML.parse(fs.readFileSync(path.join(root, 'docs/_config.yml'), 'utf8'));
const origin = config.url + (config.baseurl || '');
const absolute = route => origin + route;
const tags = (html, name) => [...html.matchAll(new RegExp(`<${name}\\b[^>]*>`, 'g'))].map(match =>
  Object.fromEntries([...match[0].matchAll(/([\w-]+)="([^"]*)"/g)].map(attr => [attr[1], attr[2]])));
const canonical = html => tags(html, 'link').filter(link => link.rel === 'canonical');
const alternates = html => tags(html, 'link').filter(link => link.rel === 'alternate' && link.hreflang);

async function check() {
  const remote = process.argv[2];
  async function read(route) {
    if (remote) {
      const response = await fetch(remote.replace(/\/$/, '') + route, { signal: AbortSignal.timeout(30000) });
      assert.equal(response.status, 200, route);
      return response.text();
    }
    const file = route.endsWith('/') ? route + 'index.html' : route;
    return fs.readFileSync(path.join(root, '_site', file), 'utf8');
  }
  const sitemap = await read('/sitemap.xml');
  assert.match(sitemap, /^<\?xml/);
  assert.match(sitemap, /<urlset xmlns="http:\/\/www.sitemaps.org\/schemas\/sitemap\/0.9">/);
  const locations = [...sitemap.matchAll(/<loc>(.*?)<\/loc>/g)].map(match => match[1]);
  assert.ok(locations.length > 0);
  const urls = new Set(locations);
  assert.equal(urls.size, locations.length, 'Sitemap URLs must be unique');
  for (const url of urls) {
    assert.ok(url.startsWith(absolute('/v3/')) || url.startsWith(absolute('/v4/')), url);
    assert.ok(!url.includes('/assets/'), url);
  }
  assert.ok((await read('/robots.txt')).includes(`Sitemap: ${absolute('/sitemap.xml')}`));
  const homepage = await read('/');
  assert.match(homepage, /http-equiv="refresh"/);
  assert.equal(canonical(homepage)[0].href, absolute('/v4/'));

  const routes = remote ? ['/v4/Wires/', '/v4/fr/Wires/', '/v4/ja/Wires/', '/v3/'] : [];
  const expected = new Map();
  if (!remote) {
    const project = createProject(root);
    for (const file of project.pages) {
      const source = file === 'index.md' ? '/v4/' : `/v4/${file.slice(0, -3)}/`;
      expected.set(source, source);
      for (const language of Object.keys(project.config.languages)) {
        const local = source.replace('/v4/', `/v4/${language}/`);
        expected.set(local, project.current(language, file) ? local : source);
      }
    }
    for (const file of fs.readdirSync(path.join(root, 'docs/v3')).filter(file => file.endsWith('.md'))) {
      const route = file === 'index.md' ? '/v3/' : `/v3/${file.slice(0, -3)}/`;
      expected.set(route, route);
    }
    routes.push(...expected.keys());
    assert.deepEqual([...urls].sort(), [...expected].filter(([route, target]) => route === target).map(([route]) => absolute(route)).sort());
  }
  const pages = new Map();
  for (const route of routes) {
    const html = await read(route);
    pages.set(route, html);
    const links = canonical(html);
    assert.equal(links.length, 1, route);
    const target = expected.get(route) || (urls.has(absolute(route)) ? route : route.replace(/\/v4\/[^/]+\//, '/v4/'));
    assert.equal(links[0].href, absolute(target), route);
    assert.match(html, /<title>[^<]*TinyCAD[^<]*Manual<\/title>/, route);
    const description = tags(html, 'meta').find(meta => meta.name === 'description')?.content;
    assert.ok(description && description !== config.description, route);
    assert.ok(!description.includes('{{') && !description.includes('{%'), route);
    assert.equal(urls.has(absolute(route)), route === target, route);
    if (route !== target) assert.equal(alternates(html).length, 0, route);
    else if (route.startsWith('/v4/')) {
      const links = alternates(html);
      assert.ok(links.some(link => link.href === absolute(route)), route);
      assert.ok(links.some(link => link.hreflang === 'x-default'), route);
      for (const link of links) assert.ok(urls.has(link.href), link.href);
    }
  }
  if (!remote) {
    for (const [route, html] of pages) {
      for (const link of alternates(html).filter(link => link.hreflang !== 'x-default')) {
        const counterpart = pages.get(link.href.slice(origin.length));
        assert.ok(counterpart, link.href);
        assert.deepEqual(alternates(counterpart), alternates(html), `Reciprocal links: ${route}`);
        if (alternates(html).filter(entry => entry.hreflang !== 'x-default').length > 1) {
          assert.ok(tags(html, 'a').some(anchor => anchor.hreflang === link.hreflang && anchor.href === (config.baseurl || '') + link.href.slice(origin.length)), `Crawlable language link: ${route}`);
        }
      }
    }
    const en = pages.get('/v4/Wires/');
    const fr = pages.get('/v4/fr/Wires/');
    if (expected.get('/v4/fr/Wires/') === '/v4/fr/Wires/') {
      assert.notEqual(tags(en, 'meta').find(m => m.name === 'description').content, tags(fr, 'meta').find(m => m.name === 'description').content);
    }
  }
  console.log(`SEO checks passed for ${routes.length} ${remote ? 'deployed sample' : 'built'} pages and ${urls.size} sitemap entries.`);
}
check().catch(error => { console.error(error); process.exitCode = 1; });
