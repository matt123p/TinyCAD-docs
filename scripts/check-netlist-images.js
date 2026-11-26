const assert = require('node:assert/strict');
const fs = require('node:fs/promises');
const path = require('node:path');

const site = path.resolve(__dirname, '../_site');
const route = '/v4/Netlist-Editor/';
const remote = process.argv[2];
const page = new URL(route, remote || 'https://manual.local');

async function fetchPageFile(url) {
  const response = await fetch(url, { signal: AbortSignal.timeout(30000) });
  assert.equal(response.status, 200, `HTTP ${response.status} for ${url.pathname}`);
  return response;
}

async function check() {
  if (!remote) {
    const entries = await fs.readdir(path.join(site, 'v4'));
    assert.deepEqual(entries.filter(name => name.toLowerCase() === 'images'), ['Images'],
      'Expected one /v4/Images/ directory for the guide and its assets');
    await fs.access(path.join(site, 'v4/Images/index.html'));
  }

  const html = remote
    ? await (await fetchPageFile(page)).text()
    : await fs.readFile(path.join(site, route, 'index.html'), 'utf8');
  const screenshots = [...html.matchAll(/<img\b[^>]*\bsrc="([^"]+)"/g)]
    .map(match => new URL(match[1], page))
    .filter(url => url.origin === page.origin && url.pathname.includes('/netlist-editor/'));
  const poster = html.match(/<video\b[^>]*\bposter="([^"]+)"/);
  assert.ok(screenshots.length && poster, 'Expected Netlist Editor screenshots and a video poster');

  const images = [...screenshots, new URL(poster[1], page)];
  await Promise.all(images.map(async url => {
    assert.equal(url.origin, page.origin, url.href);
    assert.ok(url.pathname.startsWith('/v4/Images/netlist-editor/'), url.pathname);
    if (remote) {
      const response = await fetchPageFile(url);
      assert.match(response.headers.get('content-type') || '', /^image\//, url.pathname);
      await response.body?.cancel();
    } else {
      const file = await fs.stat(path.join(site, decodeURIComponent(url.pathname)));
      assert.ok(file.isFile() && file.size > 0, url.pathname);
    }
  }));
  console.log(`Checked ${screenshots.length} Netlist Editor screenshots and the video poster.`);
}

check().catch(error => {
  console.error(error);
  process.exitCode = 1;
});
