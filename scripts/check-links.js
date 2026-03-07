#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const repoRoot = path.resolve(__dirname, '..');
const docsRoot = path.join(repoRoot, 'docs');
const sourceExtensions = new Set(['.md', '.html']);
const pageExtensions = new Set(['.md', '.html']);
const skippedDirectoryNames = new Set(['.git', 'node_modules', '_site', '.jekyll-cache']);
const ignoredSchemes = ['http://', 'https://', 'mailto:', 'tel:', 'javascript:', 'data:'];

function toPosixPath(value) {
  return value.split(path.sep).join('/');
}

function normalizeUrlPath(value) {
  let normalized = value.replace(/\\/g, '/');

  if (!normalized.startsWith('/')) {
    normalized = `/${normalized}`;
  }

  normalized = path.posix.normalize(normalized);

  if (!normalized.startsWith('/')) {
    normalized = `/${normalized}`;
  }

  return normalized;
}

function safeDecode(value) {
  try {
    return decodeURIComponent(value);
  } catch {
    return value;
  }
}

function addLookupEntry(map, key, value) {
  const lookupKey = key.toLowerCase();
  const existing = map.get(lookupKey);

  if (existing) {
    existing.add(value);
    return;
  }

  map.set(lookupKey, new Set([value]));
}

function walkDirectory(directoryPath, callback) {
  const entries = fs.readdirSync(directoryPath, { withFileTypes: true });

  for (const entry of entries) {
    if (skippedDirectoryNames.has(entry.name)) {
      continue;
    }

    const absolutePath = path.join(directoryPath, entry.name);

    if (entry.isDirectory()) {
      callback(absolutePath, true);
      walkDirectory(absolutePath, callback);
      continue;
    }

    callback(absolutePath, false);
  }
}

function isPageFile(relativePath) {
  const extension = path.posix.extname(relativePath).toLowerCase();

  if (!pageExtensions.has(extension)) {
    return false;
  }

  return !relativePath.split('/').some((segment) => segment.startsWith('_'));
}

function getPageRoute(relativePath) {
  const directoryName = path.posix.dirname(relativePath);
  const fileName = path.posix.basename(relativePath);
  const parsedPath = path.posix.parse(relativePath);

  if (parsedPath.name === 'index') {
    if (directoryName === '.') {
      return '/';
    }

    return normalizeUrlPath(`/${directoryName}/`);
  }

  if (directoryName === '.') {
    return normalizeUrlPath(`/${parsedPath.name}/`);
  }

  return normalizeUrlPath(`/${directoryName}/${parsedPath.name}/`);
}

function getBaseUrl(relativePath) {
  if (isPageFile(relativePath)) {
    return getPageRoute(relativePath);
  }

  const directoryName = path.posix.dirname(relativePath);

  if (directoryName === '.') {
    return '/';
  }

  return normalizeUrlPath(`/${directoryName}/`);
}

function getLineNumber(content, index) {
  let lineNumber = 1;

  for (let position = 0; position < index; position += 1) {
    if (content.charCodeAt(position) === 10) {
      lineNumber += 1;
    }
  }

  return lineNumber;
}

function shouldIgnoreTarget(target) {
  if (!target) {
    return true;
  }

  if (target.startsWith('#')) {
    return true;
  }

  if (target.includes('{{') || target.includes('}}') || target.includes('{%') || target.includes('%}')) {
    return true;
  }

  const lowerTarget = target.toLowerCase();
  return ignoredSchemes.some((scheme) => lowerTarget.startsWith(scheme)) || lowerTarget.startsWith('//');
}

function cleanTarget(rawTarget) {
  let target = rawTarget.trim();

  if ((target.startsWith('<') && target.endsWith('>')) || (target.startsWith('"') && target.endsWith('"')) || (target.startsWith("'") && target.endsWith("'"))) {
    target = target.slice(1, -1).trim();
  }

  return target;
}

function resolveTarget(target, baseUrl) {
  const url = new URL(target, `https://tinycad.local${baseUrl}`);
  return normalizeUrlPath(safeDecode(url.pathname));
}

function getContentsAlias(resolvedPath) {
  const trimmedPath = resolvedPath.endsWith('/') && resolvedPath !== '/'
    ? resolvedPath.slice(0, -1)
    : resolvedPath;
  const baseName = path.posix.basename(trimmedPath);

  if (baseName.toLowerCase() !== 'contents') {
    return null;
  }

  const parentDirectory = path.posix.dirname(trimmedPath);
  return normalizeUrlPath(parentDirectory === '/' ? '/' : `${parentDirectory}/`);
}

function collectReferences(content) {
  const references = [];
  const patterns = [
    {
      kind: 'markdown',
      regex: /!?\[[^\]]*\]\(([^)\n]+)\)/g,
    },
    {
      kind: 'html',
      regex: /\b(?:href|src)\s*=\s*(["'])(.*?)\1/g,
      valueIndex: 2,
    },
    {
      kind: 'reference',
      regex: /^\[[^\]]+\]:\s*(\S+)/gm,
    },
  ];

  for (const pattern of patterns) {
    for (const match of content.matchAll(pattern.regex)) {
      const rawTarget = match[pattern.valueIndex || 1];
      const target = cleanTarget(rawTarget);

      if (shouldIgnoreTarget(target)) {
        continue;
      }

      references.push({
        target,
        kind: pattern.kind,
        line: getLineNumber(content, match.index || 0),
      });
    }
  }

  return references;
}

function createLookup() {
  return {
    exact: new Set(),
    lower: new Map(),
  };
}

function registerPath(lookup, value) {
  lookup.exact.add(value);
  addLookupEntry(lookup.lower, value, value);
}

function findMatch(lookup, value) {
  if (lookup.exact.has(value)) {
    return { matched: true, caseMismatch: false };
  }

  const caseInsensitiveMatches = lookup.lower.get(value.toLowerCase());

  if (caseInsensitiveMatches && caseInsensitiveMatches.size > 0) {
    return {
      matched: false,
      caseMismatch: true,
      actual: [...caseInsensitiveMatches].sort()[0],
    };
  }

  return { matched: false, caseMismatch: false };
}

const files = [];
const directories = [];

walkDirectory(docsRoot, (absolutePath, isDirectory) => {
  const relativePath = toPosixPath(path.relative(docsRoot, absolutePath));

  if (isDirectory) {
    directories.push(relativePath);
    return;
  }

  files.push(relativePath);
});

const fileLookup = createLookup();
const directoryLookup = createLookup();
const routeLookup = createLookup();

registerPath(directoryLookup, '/');

for (const relativeDirectory of directories) {
  registerPath(directoryLookup, normalizeUrlPath(`/${relativeDirectory}/`));
}

for (const relativeFile of files) {
  const rawFilePath = normalizeUrlPath(`/${relativeFile}`);
  registerPath(fileLookup, rawFilePath);

  if (isPageFile(relativeFile)) {
    const route = getPageRoute(relativeFile);
    registerPath(routeLookup, route);

    if (route !== '/' && route.endsWith('/')) {
      registerPath(routeLookup, route.slice(0, -1));
    }
  }
}

const issues = [];

for (const relativeFile of files) {
  const extension = path.posix.extname(relativeFile).toLowerCase();

  if (!sourceExtensions.has(extension)) {
    continue;
  }

  const absoluteFile = path.join(docsRoot, relativeFile);
  const content = fs.readFileSync(absoluteFile, 'utf8');
  const baseUrl = getBaseUrl(relativeFile);
  const references = collectReferences(content);

  for (const reference of references) {
    const resolvedPath = resolveTarget(reference.target, baseUrl);
    const candidates = [];
    const contentsAlias = getContentsAlias(resolvedPath);

    candidates.push({ value: resolvedPath, lookup: routeLookup, type: 'page' });
    candidates.push({ value: resolvedPath, lookup: fileLookup, type: 'file' });

    if (!resolvedPath.endsWith('/')) {
      candidates.push({ value: `${resolvedPath}/`, lookup: routeLookup, type: 'page' });
      candidates.push({ value: `${resolvedPath}/`, lookup: directoryLookup, type: 'directory' });
    } else {
      candidates.push({ value: resolvedPath.slice(0, -1) || '/', lookup: routeLookup, type: 'page' });
      candidates.push({ value: resolvedPath, lookup: directoryLookup, type: 'directory' });
    }

    if (contentsAlias) {
      candidates.push({ value: contentsAlias, lookup: routeLookup, type: 'page' });
      candidates.push({ value: contentsAlias, lookup: directoryLookup, type: 'directory' });

      if (contentsAlias !== '/') {
        candidates.push({ value: contentsAlias.slice(0, -1), lookup: routeLookup, type: 'page' });
      }
    }

    let matched = false;
    let caseMismatch = null;

    for (const candidate of candidates) {
      const result = findMatch(candidate.lookup, candidate.value);

      if (result.matched) {
        matched = true;
        break;
      }

      if (!caseMismatch && result.caseMismatch) {
        caseMismatch = {
          expected: candidate.value,
          actual: result.actual,
        };
      }
    }

    if (matched) {
      continue;
    }

    if (caseMismatch) {
      issues.push({
        type: 'case-mismatch',
        file: relativeFile,
        line: reference.line,
        target: reference.target,
        resolvedPath,
        actual: caseMismatch.actual,
      });
      continue;
    }

    issues.push({
      type: 'missing',
      file: relativeFile,
      line: reference.line,
      target: reference.target,
      resolvedPath,
    });
  }
}

issues.sort((left, right) => {
  if (left.file !== right.file) {
    return left.file.localeCompare(right.file);
  }

  if (left.line !== right.line) {
    return left.line - right.line;
  }

  return left.target.localeCompare(right.target);
});

if (issues.length === 0) {
  console.log('No broken internal links, images, or videos found.');
  process.exit(0);
}

console.error(`Found ${issues.length} internal link issue${issues.length === 1 ? '' : 's'}:`);

for (const issue of issues) {
  if (issue.type === 'case-mismatch') {
    console.error(`- ${issue.file}:${issue.line} -> ${issue.target} resolves to ${issue.resolvedPath} but the on-disk casing is ${issue.actual}`);
    continue;
  }

  console.error(`- ${issue.file}:${issue.line} -> ${issue.target} resolves to missing path ${issue.resolvedPath}`);
}

process.exit(1);