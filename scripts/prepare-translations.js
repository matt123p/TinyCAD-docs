#!/usr/bin/env node
const fs = require('node:fs');
const path = require('node:path');
const YAML = require('yaml');
const { createProject, splitPage, read, atomicWrite, headingIds, UI } = require('./lib/translations');

const sourceRoute = (file) => file === 'index.md' ? '/v4/' : `/v4/${file.replace(/\.md$/, '')}/`;
const localRoute = (route, language) => language === 'en' ? route : route.replace(/^\/v4\//, `/v4/${language}/`);
function rewriteLinks(body, file, language, routes) {
  function target(url) {
    if (/^(?:[a-z]+:|\/\/|#|{{|{%)/i.test(url)) return url;
    const parsed = new URL(url, `https://manual.local${sourceRoute(file)}`);
    let route = decodeURI(parsed.pathname);
    if (route === '/v4/CONTENTS/') route = '/v4/';
    if (route.endsWith('.md')) route = route.replace(/\.md$/, '/');
    if (routes.has(route)) route = localRoute(route, language);
    return route + parsed.search + parsed.hash;
  }
  // Protect examples: links inside code blocks must remain literal code.
  const code = [];
  let result = body.replace(/^([ \t]*)(`{3,}|~{3,})[^\n]*\n[\s\S]*?^\1\2[^\n]*(?:\n|$)/gm, (text) => `TCADCODE${code.push(text) - 1}TOKEN`);
  result = result.replace(/\]\(([^\n]*?)\)/g, (all, raw) => {
    const match = raw.match(/^(<[^>]+>|.*?)(\s+["'][^]*["'])?$/);
    const dest = match[1].replace(/^<|>$/g, '');
    return `](${target(dest)}${match[2] || ''})`;
  });
  result = result.replace(/\b(href|src)=(['"])(.*?)\2/g, (_, attr, quote, url) => `${attr}=${quote}${target(url)}${quote}`);
  result = result.replace(/^(\[[^\]]+\]:\s*)(\S+)/gm, (_, prefix, url) => prefix + target(url));
  return result.replace(/TCADCODE(\d+)TOKEN/g, (_, index) => code[Number(index)]);
}
function prepare(root) {
  const project = createProject(root);
  const languages = Object.keys(project.config.languages);
  const enabled = languages.filter((language) => project.pages.some((file) => fs.existsSync(project.cachePath(language, file))));
  const routes = new Set(project.pages.map(sourceRoute));
  const languageData = [{ code: 'en', label: 'English' }, ...enabled.map((code) => ({ code, label: project.config.languages[code] }))];
  atomicWrite(path.join(root, 'docs/_data/manual_languages.json'), JSON.stringify(languageData, null, 2) + '\n');
  let count = 0;
  for (const language of languages) {
    const destination = path.join(project.sourceDir, language);
    // This directory is reserved for generated files, never translation source.
    fs.rmSync(destination, { recursive: true, force: true });
    if (!enabled.includes(language)) continue;
    const ui = project.current(language, 'interface.json') ? JSON.parse(read(project.cachePath(language, 'interface.json'))) : {};
    const strings = { ...UI, ...ui };
    function nav(entries) {
      return entries.map((entry) => ({ ...entry, title: ui[`nav:${entry.url}`] || entry.title,
        url: localRoute(entry.url, language), ...(entry.children ? { children: nav(entry.children) } : {}),
      }));
    }
    for (const file of project.pages) {
      const cached = fs.existsSync(project.cachePath(language, file));
      const current = project.current(language, file);
      const input = current ? read(project.cachePath(language, file)) : project.source(file);
      const { frontMatter, body } = splitPage(input);
      const title = body.match(/^#\s+(.+)$/m)?.[1] || frontMatter.title || file.replace(/\.md$/, '');
      const data = { ...frontMatter, title, lang: current ? language : 'en', manual_language: language,
        manual_source: `v4/${file}`, manual_source_url: sourceRoute(file),
        manual_ui: strings, manual_navigation: nav(project.navigation),
        manual_fallback: !current, manual_stale: cached && !current,
        permalink: localRoute(sourceRoute(file), language),
      };
      let translatedBody = rewriteLinks(current ? body : headingIds(body), file, language, routes);
      translatedBody = translatedBody.replace(/site\.data\.navigation\[current_version\]/g, 'page.manual_navigation');
      atomicWrite(path.join(destination, file), `---\n${YAML.stringify(data)}---\n${translatedBody}`);
      count++;
    }
  }
  console.log(`Prepared ${count} v4 translated/fallback pages (${enabled.length} languages); no API calls.`);
  return { enabled, count };
}
if (require.main === module) prepare(path.resolve(__dirname, '..'));
module.exports = { prepare, rewriteLinks, sourceRoute, localRoute };
