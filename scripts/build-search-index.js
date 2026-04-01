const fs = require('fs');
const path = require('path');
const lunr = require('lunr');

const ROOT_DIR = path.resolve(__dirname, '..');
const DOCS_DIR = path.join(ROOT_DIR, 'docs');
const ASSETS_DIR = path.join(DOCS_DIR, 'assets');
const VERSION_DIRS = ['v3', 'v4'];

function walkMarkdownFiles(directory) {
  const entries = fs.readdirSync(directory, { withFileTypes: true });
  const files = [];

  entries.forEach((entry) => {
    const fullPath = path.join(directory, entry.name);
    if (entry.isDirectory()) {
      files.push(...walkMarkdownFiles(fullPath));
      return;
    }

    if (entry.isFile() && entry.name.toLowerCase().endsWith('.md')) {
      files.push(fullPath);
    }
  });

  return files.sort();
}

function stripFrontMatter(content) {
  if (!content.startsWith('---\n') && !content.startsWith('---\r\n')) {
    return { body: content, frontMatter: '' };
  }

  const normalized = content.replace(/\r\n/g, '\n');
  const end = normalized.indexOf('\n---\n', 4);
  if (end === -1) {
    return { body: content, frontMatter: '' };
  }

  return {
    frontMatter: normalized.slice(4, end),
    body: normalized.slice(end + 5)
  };
}

function parseFrontMatter(frontMatter) {
  const values = Object.create(null);
  frontMatter.split('\n').forEach((line) => {
    const match = line.match(/^([A-Za-z0-9_-]+):\s*(.*)$/);
    if (!match) {
      return;
    }

    values[match[1]] = match[2].trim().replace(/^['"]|['"]$/g, '');
  });
  return values;
}

function decodeHtmlEntities(value) {
  return value
    .replace(/&nbsp;/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&#(\d+);/g, (_, code) => String.fromCharCode(Number(code)));
}

function stripMarkdown(markdown) {
  return decodeHtmlEntities(
    markdown
      .replace(/\{[%{][\s\S]*?[%}]\}/g, ' ')
      .replace(/```[\s\S]*?```/g, ' ')
      .replace(/`([^`]+)`/g, '$1')
      .replace(/!\[([^\]]*)\]\([^)]*\)/g, '$1')
      .replace(/\[([^\]]+)\]\([^)]*\)/g, '$1')
      .replace(/<[^>]+>/g, ' ')
      .replace(/^#{1,6}\s+/gm, '')
      .replace(/^>\s?/gm, '')
      .replace(/^[-*+]\s+/gm, '')
      .replace(/^\d+\.\s+/gm, '')
      .replace(/\|/g, ' ')
      .replace(/[*_~]+/g, ' ')
      .replace(/\s+/g, ' ')
      .trim()
  );
}

function getTitle(filePath, frontMatterValues, body) {
  if (frontMatterValues.title) {
    return frontMatterValues.title;
  }

  const headingMatch = body.match(/^#\s+(.+)$/m);
  if (headingMatch) {
    return headingMatch[1].trim();
  }

  const basename = path.basename(filePath, '.md');
  if (basename.toLowerCase() === 'index') {
    return path.basename(path.dirname(filePath));
  }

  return basename.replace(/-/g, ' ');
}

function getUrl(version, filePath) {
  const relativePath = path.relative(path.join(DOCS_DIR, version), filePath).replace(/\\/g, '/');
  if (relativePath.toLowerCase() === 'index.md') {
    return '/' + version + '/';
  }

  return '/' + version + '/' + relativePath.replace(/\.md$/i, '/') ;
}

function buildDocuments(version) {
  const versionDir = path.join(DOCS_DIR, version);
  return walkMarkdownFiles(versionDir).map((filePath, index) => {
    const raw = fs.readFileSync(filePath, 'utf8');
    const { frontMatter, body } = stripFrontMatter(raw);
    const frontMatterValues = parseFrontMatter(frontMatter);
    const title = stripMarkdown(getTitle(filePath, frontMatterValues, body));
    const content = stripMarkdown(body);
    const snippet = content.slice(0, 220);

    return {
      id: index,
      url: getUrl(version, filePath),
      title,
      content,
      snippet
    };
  });
}

function buildIndexPayload(documents) {
  const index = lunr(function () {
    this.ref('id');
    this.field('title');
    this.field('content');

    documents.forEach((document) => {
      this.add({
        id: document.id,
        title: document.title,
        content: document.content
      });
    });
  });

  return {
    indexData: index.toJSON(),
    docs: documents.map(({ id, url, title, snippet }) => ({ id, url, title, snippet }))
  };
}

function writeIndex(version, payload) {
  const globalName = version === 'v3' ? 'LUNR_INDEX_V3' : 'LUNR_INDEX_V4';
  const outputPath = path.join(ASSETS_DIR, 'lunr-index-' + version + '.js');
  const source = 'window.' + globalName + ' = ' + JSON.stringify(payload) + ';\n';
  fs.writeFileSync(outputPath, source, 'utf8');
}

function main() {
  VERSION_DIRS.forEach((version) => {
    const documents = buildDocuments(version);
    writeIndex(version, buildIndexPayload(documents));
    console.log('Generated Lunr index for ' + version + ' (' + documents.length + ' documents)');
  });
}

main();