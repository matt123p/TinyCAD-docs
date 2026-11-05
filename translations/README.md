# Translating the v4 manual

English source remains in `docs/v4/*.md`. Translation generation is an explicit
operation; normal builds and local previews never call OpenAI. The v3 manual is
not translated or changed by these scripts.

## Credentials

Use Node.js 24, then run `npm ci`. Set `OPENAI_API_KEY` in your environment or
create `.secrets` in the repository root (the parent workspace directory is also
accepted):

```dotenv
OPENAI_API_KEY=your-api-key
```

The environment takes precedence. `.secrets` is parsed as dotenv data, never
executed as a shell script. `.secrets` and `.secrets.*` are gitignored. Do not put
the key in translation files, workflow inputs, or the website.

## Local preview prerequisites

Translation generation requires Node.js 24. The Jekyll preview also requires
Ruby 3.2 or newer, Bundler 4.0.7, and native gem build dependencies. On Ubuntu:

```bash
sudo apt-get update
sudo apt-get install ruby ruby-dev build-essential pkg-config libyaml-dev libssl-dev zlib1g-dev
sudo gem install bundler -v 4.0.7 --no-document
bundle config set --local path .bundle/gems
```

The `.bundle/` directory holds local configuration and gems and is gitignored.
`npm run serve` and `npm run build` install the locked gems before cleaning or
building the site. The lockfile supports Windows and Linux.

## Local translation and preview

```bash
# List missing/stale work without an API key or changes to files.
npm run translate:status

# Update all eight supported languages; reuse unchanged translations.
npm run translate

# Translate just French, or a selection of pages/languages.
npm run translate -- --languages fr
npm run translate -- --languages fr,de --page User-guide.md,Touch-controls.md

# Limit the number of API requests for an initial trial. The interface is one unit.
npm run translate -- --languages fr --page User-guide.md --limit 2

# Build/preview the saved translations without an API key (Ruby/Bundler required).
npm run serve
```

A language appears in the v4 language menu after its first page is translated.
English URLs stay unchanged. For example, the French drawing guide is at
`/v4/fr/User-guide/`. Each enabled language has all v4 routes: missing or stale
translations show the current English content with a notice. Links stay within
the selected language, and screenshots, videos and example downloads are shared
with the English manual. Screenshots and videos themselves are not translated.

`npm run serve` prepares translations before starting Jekyll. After updating a
translation while the preview server is running, rerun `npm run prepare:translations`
and `npm run build:search-index`, or restart the preview server.

## GitHub Action

1. Add the repository Actions secret **OPENAI_API_KEY**.
2. Commit/push this implementation so GitHub discovers the **translate** workflow.
3. Open **Actions → translate → Run workflow**, select the branch, and choose
   `all` or language codes (`nl,fr,es,de,it,ja,pl,zh-CN`). Optionally select pages.
4. The workflow saves valid completed translations, checks their links, and
   commits **only `translations/v4/`** back to the selected branch. A push to a
   protected branch may require repository policy changes; completed translations
   are also uploaded as a workflow artifact for recovery.
5. A successful run that commits to `main` explicitly starts the existing Pages
   workflow. GitHub's default workflow token does not trigger push workflows, so
   this explicit dispatch is necessary. Running on a feature branch commits the
   translations there for local review before merging.

The workflow has `contents: write` for its commit and `actions: write` to dispatch
Pages. Runs on the same branch are serialized. It never force-pushes: if somebody
pushes to the branch during translation, the push may be rejected; recover the
saved artifact rather than discard completed work. API failures preserve each
previously completed unit, and valid partial work is committed. Rerun the Action
to resume. Publishing only starts after a successful translation run.

## Durable cache and human edits

Commit these together:

- `translations/v4/<language>/*.md`: readable translated pages, including stable
  English heading IDs for cross-page fragment links.
- `translations/v4/<language>/interface.json`: translated navigation and interface
  labels.
- `translations/v4/manifest.json`: source/configuration fingerprints.

Generated files under `docs/v4/<language>/`, the language-menu data and translated
search data are ignored by Git. They are recreated locally and in GitHub Actions
from the committed cache, without credentials. Do not edit those generated files.

A cache entry is reused when its English source, target language, model,
translation configuration and prompt version match. Line-ending differences
between Windows and Linux do not invalidate it. Source changes regenerate only
the affected pages. Navigation/label changes invalidate the interface unit.
Model, glossary or prompt changes in `scripts/translation-config.json` invalidate
affected cache entries. The default API model is `gpt-6-luna`.

You can correct cached Markdown or interface JSON by hand; those edits survive
ordinary translation runs. If the English source changes, the corresponding
translation is regenerated, replacing those edits. Use `--force` (or the Action's
force input) only when you intend to replace existing translations. Bump
`promptVersion` when changing the translation instructions in the script.

Code, Liquid tags, HTML tags, link targets, and original heading IDs are protected
with placeholders. Translated video captions are restored separately. Invalid,
truncated, or structurally changed results are rejected before caching. Harmless
prose rewrapping is allowed. A rejected result is retried up to three times with
validation feedback. If it still fails, the command continues with the remaining
pages and languages, then reports the failed items and exits unsuccessfully.
Successful translations remain cached; rerunning retries only missing/stale work.
Authentication, network, and filesystem errors still stop the run. Review
terminology and accuracy before publication; structural validation is not a
linguistic quality check.

## Checks

```bash
npm run test:translations
npm run prepare:translations
npm run build:search-index
npm run check:links
npm run build
```

`node scripts/translate.js --check` exits unsuccessfully if any requested
translation is missing or stale. Use `--languages` and `--page` to narrow this
check. It never makes API calls. It is deliberately separate from normal builds
so partially translated previews can use the English fallback.

Translated search uses language-specific text data and Unicode-normalized
substring matching, supporting Japanese and Chinese without English stemming.
English and v3 retain their existing Lunr search behavior.
