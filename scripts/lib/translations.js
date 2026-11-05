const fs = require('node:fs');
const path = require('node:path');
const crypto = require('node:crypto');
const YAML = require('yaml');
const MarkdownIt = require('markdown-it');
const markdown = new MarkdownIt({ html: true });
const normalize = (text) => text.replace(/\r\n?/g, '\n');
const hash = (text) => crypto.createHash('sha256').update(normalize(text)).digest('hex');
const read = (file) => normalize(fs.readFileSync(file, 'utf8'));
const UI = {
  manualTitle: 'TinyCAD Manual', contents: 'Contents', skip: 'Skip to main content',
  primary: 'Primary', editPage: 'Edit this page on GitHub', visitSite: 'Visit tinycad.net',
  language: 'Language', fallback: 'This page is not yet translated. The current English version is shown.',
  stale: 'The English source has changed. The current English version is shown until this translation is updated.',
  openSearch: 'Open search', closeSearch: 'Close search', searchPlaceholder: 'Search this manual...',
  searchLabel: 'Search this manual', search: 'Search', noResults: 'No results found.',
  searchError: 'Search could not parse that query.', searchUnavailable: 'Search is temporarily unavailable.',
  playVideo: 'Play video', pauseVideo: 'Pause video', play: 'Play', pause: 'Pause',
  restartVideo: 'Restart video', restart: 'Restart', videoPosition: 'Video position',
  videoControls: 'Video playback controls', videoFallback: 'Your browser does not support the video tag.',
  openVideo: 'Open the video directly',
};
function splitPage(raw) {
  const match = normalize(raw).match(/^---\n([\s\S]*?)\n---\n?/);
  return { frontMatter: match ? YAML.parse(match[1]) || {} : {}, body: match ? normalize(raw).slice(match[0].length) : normalize(raw) };
}
function atomicWrite(file, text) {
  fs.mkdirSync(path.dirname(file), { recursive: true });
  const temp = `${file}.tmp`;
  fs.writeFileSync(temp, text);
  fs.renameSync(temp, file);
}
function createProject(root) {
  const config = JSON.parse(read(path.join(root, 'scripts/translation-config.json')));
  const sourceDir = path.join(root, 'docs/v4');
  const cacheDir = path.join(root, 'translations/v4');
  const manifestFile = path.join(cacheDir, 'manifest.json');
  const manifest = fs.existsSync(manifestFile) ? JSON.parse(read(manifestFile)) : { version: 1, entries: {} };
  if (manifest.version !== 1 || !manifest.entries) throw new Error('Unsupported translation manifest');
  const pages = fs.readdirSync(sourceDir).filter((f) => f.endsWith('.md')).sort();
  const navigation = YAML.parse(read(path.join(root, 'docs/_data/navigation.yml'))).v4;
  const interfaceSource = { ...UI };
  function visit(entries) {
    for (const entry of entries) {
      interfaceSource[`nav:${entry.url}`] = entry.title;
      if (entry.children) visit(entry.children);
    }
  }
  visit(navigation);
  const fingerprint = (source, language) => hash(JSON.stringify({ source: normalize(source), language, config, engine: 1 }));
  const source = (file) => file === 'interface.json' ? JSON.stringify(interfaceSource, null, 2) + '\n' : read(path.join(sourceDir, file));
  const cachePath = (language, file) => path.join(cacheDir, language, file);
  const key = (language, file) => `${language}/${file}`;
  const current = (language, file) => {
    const entry = manifest.entries[key(language, file)];
    return !!entry && entry.fingerprint === fingerprint(source(file), language) && fs.existsSync(cachePath(language, file));
  };
  return { root, config, sourceDir, cacheDir, manifestFile, manifest, pages, navigation, interfaceSource, fingerprint, source, cachePath, key, current };
}
// Preserve the English heading IDs so existing fragment links survive translation.
function headingIds(body) {
  const counts = new Map();
  let fenced = false;
  return body.split('\n').map((line) => {
    if (/^\s*(```|~~~)/.test(line)) fenced = !fenced;
    if (fenced) return line;
    const heading = line.match(/^(#{1,6})\s+(.+?)\s*#*$/);
    if (!heading || /\{:\s*#/.test(line)) return line;
    const text = heading[2].replace(/<[^>]*>/g, '').replace(/\[([^\]]+)\]\([^)]*\)/g, '$1').replace(/[`*_]/g, '');
    let id = text.replace(/^[^a-zA-Z]+/, '').replace(/[^a-zA-Z0-9 -]/g, '').replace(/ /g, '-').toLowerCase();
    if (!id) id = 'section';
    const count = counts.get(id) || 0;
    counts.set(id, count + 1);
    if (count) id += `-${count}`;
    return `${heading[1]} ${heading[2]}\n{: #${id}}`;
  }).join('\n');
}
function validationError(message) {
  return Object.assign(new Error(message), { code: 'TRANSLATION_VALIDATION' });
}
function structure(body) {
  function signature(tokens) {
    // Translation naturally changes wrapping and the number of text nodes.
    // Compare markup only, while retaining heading/list/link/table structure.
    return tokens.filter((t) => !['text', 'softbreak'].includes(t.type)).map((t) => `${t.type}:${t.tag}:${t.nesting}:${JSON.stringify(t.attrs || [])}${t.children ? '[' + signature(t.children) + ']' : ''}`).join('|');
  }
  return signature(markdown.parse(body, {}));
}
function protectPage(raw) {
  const { frontMatter, body } = splitPage(raw);
  const literals = [];
  const protect = (text) => {
    const token = `TCADPROTECTED${literals.length.toString().padStart(5, '0')}TOKEN`;
    literals.push(text);
    return token;
  };
  const captions = [];
  let masked = headingIds(body);
  // Largest syntactic constructs first, before inline expressions.
  masked = masked.replace(/^([ \t]*)(`{3,}|~{3,})[^\n]*\n[\s\S]*?^\1\2[^\n]*(?:\n|$)/gm, protect);
  masked = masked.replace(/`+[^`\n]*`+/g, protect);
  masked = masked.replace(/{%[\s\S]*?%}/g, (tag) => {
    const caption = tag.match(/\bcaption="((?:\\.|[^"\\])*)"/);
    if (!caption) return protect(tag);
    const marker = `TCADCAPTION${captions.length}TOKEN`;
    captions.push({ text: caption[1], marker });
    return protect(tag.replace(caption[0], `caption="${marker}"`));
  });
  masked = masked.replace(/{{[\s\S]*?}}|<!--[^]*?-->|<[^>]+>|\{:[^}\n]*\}/g, protect);
  masked = masked.replace(/\]\(([^\n]*?)\)/g, protect);
  masked = masked.replace(/^\[[^\]]+\]:[^\n]+$/gm, protect);
  const strings = [masked, ...captions.map((c) => c.text)];
  return {
    strings,
    restore(translated) {
      if (!Array.isArray(translated) || translated.length !== strings.length || translated.some((s) => typeof s !== 'string' || !s.trim())) throw validationError('Incomplete page translation');
      let result = translated[0];
      const found = result.match(/TCADPROTECTED\d{5}TOKEN/g) || [];
      const expected = masked.match(/TCADPROTECTED\d{5}TOKEN/g) || [];
      if (JSON.stringify(found) !== JSON.stringify(expected)) throw validationError('Translation changed or reordered protected markup');
      // Link destinations can contain protected Liquid expressions.
      for (let pass = 0; pass <= literals.length && /TCADPROTECTED\d{5}TOKEN/.test(result); pass++) {
        result = result.replace(/TCADPROTECTED(\d{5})TOKEN/g, (_, index) => literals[Number(index)]);
      }
      captions.forEach((caption, i) => {
        // Liquid quoted attributes cannot contain unescaped quotation marks.
        result = result.replace(caption.marker, () => translated[i + 1].replace(/["\n\r]/g, (c) => c === '"' ? '&quot;' : ' '));
      });
      if (/TCAD(?:PROTECTED|CAPTION)/.test(result)) throw validationError('Unresolved translation placeholder');
      if (structure(headingIds(body)) !== structure(result)) throw validationError('Translation changed Markdown structure');
      return `---\n${YAML.stringify(frontMatter)}---\n${result.trim()}\n`;
    },
  };
}
function protectInterface(source) {
  const data = JSON.parse(source);
  const keys = Object.keys(data);
  return { strings: keys.map((k) => data[k]), restore(strings) {
    if (!Array.isArray(strings) || strings.length !== keys.length || strings.some((s) => typeof s !== 'string' || !s.trim() || /[<>]/.test(s))) throw validationError('Incomplete interface translation');
    return JSON.stringify(Object.fromEntries(keys.map((k, i) => [k, strings[i]])), null, 2) + '\n';
  } };
}
module.exports = { UI, normalize, hash, read, splitPage, atomicWrite, createProject, protectPage, protectInterface, headingIds, validationError };
