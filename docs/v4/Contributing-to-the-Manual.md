---
layout: default
---

# Contributing to the TinyCAD Manual

This manual is published with GitHub Pages. If you find an error, missing step, unclear 
screenshot, or outdated information, you can propose a fix with a Pull Request (PR).

This guide covers two workflows:

- **Quick edits in your browser** (best for small text fixes)
- **Local editing and preview** (best for larger changes)

## Before you start

You will need:

- A GitHub account
- For local editing: Git, Node.js, Ruby, and Bundler

Repository details:

- **Source repo:** `https://github.com/matt123p/TinyCAD-docs`
- **Published site:** GitHub Pages output from this repo
- **Docs source folder:** `docs/`
- **v4 pages:** `docs/v4/`

## Option A: Quick edit in GitHub (no local setup)

Use this method for typo fixes, short clarifications, or link updates.

### 1) Open the page source on GitHub

1. Go to the TinyCAD docs repository:
   `https://github.com/matt123p/TinyCAD-docs`
2. Browse to the page you want to edit in `docs/v4/`.
3. Open the Markdown file (for example `Rulers.md`).

### 2) Start editing

1. Click the pencil icon (**Edit this file**).
2. If prompted, GitHub will help you create a fork automatically.
3. Make your changes in Markdown.

### 3) Commit your change

1. Scroll to **Commit changes**.
2. Use a clear commit message, for example:
  `docs(v4): clarify ruler units in Rulers`
3. Choose **Create a new branch for this commit**.
4. Click **Propose changes**.

### 4) Open a Pull Request

1. Click **Compare & pull request**.
2. Set base repository to `matt123p/TinyCAD-docs` and base branch to `main`.
3. Fill in the PR title and description (template below).
4. Submit the PR.


## Option B: Local edit + preview (recommended for bigger changes)

Use this method when you need to edit multiple files, check links, or preview formatting.

### 1) Fork and clone

1. Fork `matt123p/TinyCAD-docs` on GitHub.
2. Clone your fork:

```bash
git clone https://github.com/<your-username>/TinyCAD-docs.git
cd TinyCAD-docs
```

3. Add the upstream remote:

```bash
git remote add upstream https://github.com/matt123p/TinyCAD-docs.git
```

### 2) Install dependencies

This repo provides npm scripts that run Bundler + Jekyll for you:

```bash
npm install
npm run bundle:install
```

### 3) Create a branch for your change

```bash
git checkout -b docs/v4-fix-rulers
```

Branch naming ideas:

- `docs/fix-typo-...`
- `docs/v4-update-...`
- `docs/add-...`

### 4) Make your edits

Most user-facing pages are under:

- `docs/v4/*.md` (v4 manual pages)
- `docs/v3/*.md` (v3 manual pages)
- `docs/_data/navigation.yml` (left navigation)

If you add a new page, also update navigation so users can discover it.

### 5) Preview site locally

```bash
npm run serve
```

Then open the local URL shown in terminal (typically `http://127.0.0.1:4000`).

Check:

- Heading structure is readable
- Internal links work
- Navigation includes your new/renamed page
- Images load correctly

### 6) Commit and push

```bash
git add .
git commit -m "docs(v4): improve Rulers instructions"
git push -u origin docs/v4-fix-rulers
```

### 7) Create the PR

1. Open your fork on GitHub.
2. Click **Compare & pull request** for your branch.
3. Target `matt123p/TinyCAD-docs:main`.
4. Complete PR title/description and submit.

## Writing quality checklist

Before opening a PR, quickly verify:

- The scope is focused (one topic/issue per PR)
- Instructions are accurate for current TinyCAD behavior
- Language is clear and concise
- Link targets resolve
- Page is linked from navigation when needed
- Existing style and terminology are preserved

## Reusable browser/desktop tabsets

When a page needs different instructions for TinyCAD in the browser and the
desktop app, use the shared tabset component instead of inventing page-specific
markup.

```md
<div class="manual-tabset" data-tabset="product-mode" data-tabset-label="Choose your TinyCAD product" data-default-tab="Browser" markdown="1">

### Browser

Browser-specific content.

### Desktop App

Desktop-specific content.

</div>
```

Notes:

- `data-tabset` is the sync/storage key. Reuse the same value to keep multiple
  tabsets on the same page in sync.
- `data-default-tab` sets the tab selected on first visit.
- Keep each tab heading at the same level (`###` in the example above).

## Suggested PR template

Copy/paste this into your PR description:

```md
## Summary
-

## What changed
-

## Why
-

## Validation
- [ ] Previewed locally with `npm run serve`
- [ ] Checked navigation and links
- [ ] Confirmed formatting on rendered page

## Screenshots (if relevant)
-
```

## Keeping your fork up to date

If your PR is open for a while, sync your branch with the latest `main`:

```bash
git fetch upstream
git checkout main
git merge upstream/main
git push origin main

git checkout docs/v4-fix-rulers
git merge main
git push
```

## Common issues and fixes

- **PR shows unrelated file changes**
  - Create a fresh branch from updated `main` and cherry-pick only your commit(s).
- **Navigation item missing**
  - Update `docs/_data/navigation.yml` and ensure URL matches page permalink path.
- **Page renders oddly**
  - Check heading levels, list indentation, and fenced code block markers.
- **Link works locally but not on Pages**
  - Prefer relative links used elsewhere in this repo and keep page names consistent.

## After submission

Maintainers may request updates. Add follow-up commits to the same branch/PR;
the PR updates automatically. Once approved and merged, your changes will appear
on the published manual after GitHub Pages rebuilds.

Thanks for improving the TinyCAD documentation.

- Back to [v4 contents](../CONTENTS/)