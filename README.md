# TinyCAD Manual

Source for the [TinyCAD documentation](https://docs.tinycad.net/), published with
Jekyll and GitHub Pages. This repository contains the current TinyCAD v4 manual,
the legacy v3 manual, and cached translations of the v4 manual.

- [TinyCAD website](https://www.tinycad.net/)
- [TinyCAD v4 application source](https://github.com/matt123p/TinyCADv4)
- [Contributing to the manual](docs/v4/Contributing-to-the-Manual.md)

## Local setup

You need Git, Node.js 24, Ruby 3.2 or newer, and Bundler 4.0.7. Native Ruby gems
also require a compiler and development headers.

On Ubuntu, install the Ruby dependencies with:

```bash
sudo apt-get update
sudo apt-get install ruby ruby-dev build-essential pkg-config libyaml-dev libssl-dev zlib1g-dev
sudo gem install bundler -v 4.0.7 --no-document
```

Clone the repository and install its dependencies:

```bash
git clone https://github.com/matt123p/TinyCAD-docs.git
cd TinyCAD-docs
npm ci
bundle config set --local path .bundle/gems
npm run bundle:install
```

Local Ruby configuration and gems are stored in the ignored `.bundle/` directory.
The Ruby lockfile supports Windows and Linux.

## Preview and build

```bash
npm run serve
```

Open [http://127.0.0.1:4000/](http://127.0.0.1:4000/). The preview prepares saved
translations and search indexes, then starts Jekyll with live reload. Stop it
with **Ctrl+C** before starting another preview; the default web and live-reload
ports are `4000` and `35729`.

To produce the static site without starting a server:

```bash
npm run build
```

The generated site is written to `_site/`, which is ignored by Git. Neither
previewing nor building requests translations or requires an OpenAI API key.

## Search engine metadata

The Jekyll generator in `docs/_plugins/manual_seo.rb` derives page titles and
descriptions from each page's heading and opening paragraph. Set `title` or
`description` in front matter to override them. Titles distinguish v3 and v4.
The production origin is configured in `docs/_config.yml`.

The build publishes `/sitemap.xml` and `/robots.txt`. Current translations get
self-referencing canonicals, reciprocal `hreflang` annotations, and ordinary
language links. English fallback routes canonicalize to their English source
and are excluded from the sitemap and language alternates.

Run `npm run check:seo` after building to check metadata, sitemap coverage,
fallback handling, and reciprocal links. Run
`npm run check:seo -- https://docs.tinycad.net` to smoke-test a deployment.
Both checks also run in the deployment workflow.

After deployment, the site owner should submit
`https://docs.tinycad.net/sitemap.xml` to Google Search Console and Bing Webmaster
Tools, then inspect English, French, and Japanese pages for indexing and selected
canonicals. These account actions are separate from the site build.

## Repository structure

| Path | Purpose |
|---|---|
| `docs/v4/*.md` | English source for the v4 manual |
| `docs/v3/` | Legacy v3 manual |
| `docs/_data/navigation.yml` | Manual navigation |
| `docs/_layouts/`, `docs/_includes/` | Shared Jekyll templates |
| `docs/assets/` | Shared styles and browser scripts |
| `docs/v4/images/`, `docs/v4/examples/` | Shared v4 media and example drawings |
| `translations/v4/<language>/` | Saved translated Markdown and interface labels |
| `translations/v4/manifest.json` | Translation cache fingerprints |
| `scripts/` | Translation, preparation, search, and validation tools |
| `.github/workflows/` | Publishing and translation Actions |

Edit English pages in `docs/v4/`. When adding a page, add it to the navigation.
Edit translations in `translations/v4/` if you want to make a human correction.
Files under `docs/v4/<language>/` are generated for previews and builds; do not
edit or commit them.

## Contributing to the manual

Corrections, clearer instructions, updated screenshots, and missing examples are
welcome. You can contribute through GitHub without installing TinyCAD or the
manual's build tools.

### Quick edits in your browser

1. Sign in to GitHub and open the page in `docs/v4/`, or use **Edit this page on
   GitHub** in the published manual.
2. Click the pencil icon, make your Markdown changes, and create a branch or fork
   when prompted.
3. Propose the change as a pull request to `matt123p/TinyCAD-docs`, targeting `main`.
   Explain what changed and why.

### Larger changes with a local preview

1. Fork this repository, clone your fork, and follow [Local setup](#local-setup).
2. Create a focused branch, such as `docs/v4-fix-rulers`.
3. Edit the relevant English pages in `docs/v4/`. Add new pages to
   `docs/_data/navigation.yml` so readers can find them.
4. Preview with `npm run serve` and run the [checks](#checks). Confirm that headings,
   links, navigation, images, and videos render correctly.
5. Commit and push your branch, then open a pull request to
   `matt123p/TinyCAD-docs:main`.

Keep each pull request focused, check instructions against current TinyCAD
behavior, and preserve the manual's terminology and formatting. Include screenshots
when they help reviewers assess a visual change. Maintainers may request changes;
add follow-up commits to the same branch. Merged changes are published by the
GitHub Pages workflow.

These steps are adapted from [Contributing to the TinyCAD Manual](docs/v4/Contributing-to-the-Manual.md),
which also covers reusable browser/desktop tabsets, a pull request template, and
keeping your fork up to date. See the [translation guide](translations/README.md)
for corrections to translated pages.

## Translations

The v4 manual supports Dutch, French, Spanish, German, Italian, Japanese, Polish,
and Simplified Chinese alongside the English source. The v3 manual is excluded
from translation.

To generate translations locally, set `OPENAI_API_KEY` in your environment or
create a `.secrets` file in the repository root:

```dotenv
OPENAI_API_KEY=your-api-key
```

The secrets file is gitignored. Keep API credentials out of commits.

```bash
# Inspect pending work without making API requests.
npm run translate:status

# Generate only missing or stale translations.
npm run translate

# Limit work to one language and page.
npm run translate -- --languages nl --page Buses.md
```

Completed translations are saved immediately and reused on subsequent runs.
Source or translation-configuration changes invalidate the affected cache
entries. Rejected responses retry up to three times before the command reports
the page and continues with the remaining work. Missing or stale translations
use the current English page as a fallback when previewing or building.

Commit the translated files and manifest together. After generating translations,
restart the preview or rerun `npm run prepare:translations` and
`npm run build:search-index` to refresh an existing preview.

See the [translation guide](translations/README.md) for cache behavior, human
corrections, model configuration, recovery, and language selection.

## Multilingual search

The build generates a separate v4 search index for English and each enabled
language: `/assets/manual-index-v4-<language>.js` and the matching `.json` file.
The page selects its own language index and validates its language/version.
Result links remain in that language, including routes showing an English fallback.
Translated indexes use Unicode-normalized substring matching, including Japanese
and Chinese; English and v3 use the locally bundled Lunr engine without a CDN.
The legacy `/assets/lunr-index-v3.json` and `/assets/lunr-index-v4.json` files are
also regenerated for existing English integrations. Generated indexes are ignored
by Git and recreated by the site build.

## Checks

```bash
npm run test:translations
npm run test:search
npm run prepare:translations
npm run build:search-index
npm run check:links
npm run build
```

The translation tests use mocked responses and do not spend API credits. Link
checks cover internal page, image, and video references.

## GitHub Actions and publishing

The **Deploy GitHub Pages** workflow builds and publishes pushes to `main`. It
can also be started manually. Configure the repository's Pages publishing source
to use GitHub Actions. The optional `GOOGLE_ANALYTICS_ID` repository secret enables
analytics in production builds.

The manually triggered **translate** workflow requires the repository Actions
secret **OPENAI_API_KEY**. It accepts a language selection, optional page names,
and an explicit force-regeneration option. It validates and commits saved
translations back to the selected branch. Successful runs that commit changes
to `main` then start the Pages workflow; runs on a feature branch leave the
translations there for review before merging.

## Licence

The manual is published under
[Creative Commons Attribution–NonCommercial 4.0](https://creativecommons.org/licenses/by-nc/4.0/).
See the [manual licence page](docs/v4/Licence.md) for details.
