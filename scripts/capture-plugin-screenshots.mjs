import { createServer } from 'node:http';
import { readFile, mkdir, mkdtemp, cp, rm, writeFile } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import path from 'node:path';
import { createRequire } from 'node:module';
import { fileURLToPath } from 'node:url';

// Build the app with `npm run build:fs`, then run this script from TinyCAD-docs:
// node scripts/capture-plugin-screenshots.mjs ../TinyCADv4
const docsRoot = fileURLToPath(new URL('../', import.meta.url));
const appRoot = path.resolve(process.argv[2] || path.join(docsRoot, '../TinyCADv4'));
const dist = path.join(appRoot, 'dist');
const output = path.join(docsRoot, 'docs/v4/images/plugins');
const require = createRequire(path.join(appRoot, 'package.json'));
const { chromium, expect } = require('@playwright/test');
const temporary = await mkdtemp(path.join(tmpdir(), 'tinycad-plugin-docs-'));
const examples = path.join(temporary, 'plugins');
await cp(path.join(appRoot, 'examples/plugins'), examples, { recursive: true });
await mkdir(output, { recursive: true });
const mime = { '.html': 'text/html', '.js': 'text/javascript', '.css': 'text/css', '.json': 'application/json', '.wasm': 'application/wasm', '.png': 'image/png', '.svg': 'image/svg+xml', '.ico': 'image/x-icon', '.ttf': 'font/ttf', '.woff': 'font/woff', '.woff2': 'font/woff2' };
const server = createServer(async (request, response) => {
  try {
    const pathname = decodeURIComponent(new URL(request.url, 'http://localhost').pathname);
    const file = path.resolve(dist, '.' + (pathname === '/' ? '/index.html' : pathname));
    if (!file.startsWith(dist + path.sep)) { response.writeHead(403); response.end(); return; }
    const bytes = await readFile(file);
    response.writeHead(200, { 'Content-Type': mime[path.extname(file)] || 'application/octet-stream' }); response.end(bytes);
  } catch { response.writeHead(404); response.end(); }
});
let browser;
try {
  await new Promise(resolve => server.listen(0, '127.0.0.1', resolve));
  browser = await chromium.launch({ headless: true, args: ['--no-sandbox'] });
  const context = await browser.newContext({ viewport: { width: 1440, height: 1000 }, deviceScaleFactor: 1, locale: 'en-US', colorScheme: 'light' });
  const page = await context.newPage(); const errors = []; page.on('pageerror', error => errors.push(error.message));
  await page.goto('http://127.0.0.1:' + server.address().port + '/');
  const capture = async (locator, name) => {
    await locator.screenshot({ path: path.join(output, name + '.png'), animations: 'disabled' });
    console.log('Captured ' + name + '.png');
  };
  const manager = page.getByRole('dialog', { name: 'Plugin manager', exact: true });
  const sourceDialog = () => page.locator('.plugin-source-dialog');
  await page.getByRole('button', { name: 'File', exact: true }).click();
  const menu = page.getByRole('menu'); const pluginMenuItem = page.getByRole('menuitem', { name: 'Plugins…', exact: true });
  await expect(pluginMenuItem.locator('svg')).toHaveCount(1); await pluginMenuItem.hover();
  const box = await menu.boundingBox();
  const x = Math.max(0, Math.floor(box.x) - 10);
  await page.screenshot({ path: path.join(output, 'file-menu.png'), animations: 'disabled', clip: { x, y: 0, width: Math.max(400, Math.ceil(box.width) + 20), height: Math.ceil(box.y + box.height + 12) } });
  console.log('Captured file-menu.png');
  await pluginMenuItem.click(); await expect(manager).toBeVisible();
  await expect(page.getByRole('button', { name: 'Add', exact: true })).toBeEnabled();
  await page.getByRole('tab', { name: 'Available', exact: true }).click();
  await expect(page.getByRole('listbox', { name: 'Plugins', exact: true }).getByRole('option')).toHaveCount(0);
  expect(await page.getByRole('combobox', { name: 'Plugin source', exact: true }).locator('option').allTextContents()).toEqual(['All sources']);
  await capture(manager, 'manager-empty');
  await page.getByRole('button', { name: 'Add', exact: true }).click();
  await expect(page.getByLabel('GitHub repository URL', { exact: true })).toBeVisible();
  await capture(sourceDialog(), 'add-repository');
  await page.getByRole('button', { name: 'Cancel', exact: true }).click();
  await page.getByRole('button', { name: 'Developer mode', exact: true }).click();
  await capture(sourceDialog(), 'developer-server');
  await page.getByRole('combobox', { name: 'Development source', exact: true }).selectOption('directory');
  await capture(sourceDialog(), 'developer-folder');
  const chooser = page.waitForEvent('filechooser');
  await page.getByRole('button', { name: 'Choose folder', exact: true }).click(); await (await chooser).setFiles(examples);
  await page.getByRole('option', { name: 'Circuit Inspector', exact: true }).click();
  await expect(page.locator('.plugin-markdown')).toContainText('Inspect the current schematic');
  await expect(page.getByRole('button', { name: 'Install', exact: true })).toBeEnabled();
  await capture(manager, 'manager-available');
  await page.getByRole('button', { name: 'Install', exact: true }).click();
  const permissions = page.getByRole('dialog', { name: 'Install plugin', exact: true });
  await expect(permissions).toBeVisible(); await capture(permissions, 'install-permissions');
  await page.getByRole('button', { name: 'Continue', exact: true }).click();
  await expect(page.getByRole('button', { name: 'Uninstall', exact: true })).toBeEnabled();
  // A real, harmless source edit creates a second cached snapshot for rollback.
  const ui = path.join(examples, 'inspector/ui.js');
  await writeFile(ui, (await readFile(ui, 'utf8')) + '\n// Documentation screenshot: manual reload snapshot.\n');
  const reloadChooser = page.waitForEvent('filechooser');
  await page.getByRole('button', { name: 'Reload from folder…', exact: true }).click(); await (await reloadChooser).setFiles(examples);
  await page.getByRole('button', { name: 'Continue', exact: true }).click();
  await expect(page.getByRole('button', { name: 'Uninstall', exact: true })).toBeEnabled();
  if (!await page.locator('details.plugin-settings').evaluate(node => node.open)) await page.getByText('Plugin settings', { exact: true }).click();
  await expect(page.getByRole('combobox', { name: 'Circuit Inspector rollback', exact: true })).toBeVisible();
  await expect(page.locator('.plugin-markdown')).toContainText('Inspect the current schematic');
  await page.getByRole('searchbox', { name: 'Search plugins', exact: true }).focus();
  await capture(manager, 'manager-installed');
  expect(errors).toEqual([]);
  console.log('Screenshots use a clean browser profile and explicitly imported local examples; application source files were not modified.');
} finally {
  if (browser) await browser.close();
  server.closeAllConnections(); await new Promise(resolve => server.close(resolve));
  await rm(temporary, { recursive: true, force: true });
}
