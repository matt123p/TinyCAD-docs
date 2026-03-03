---
layout: default
---

# TinyCAD v4 - Developer Guide

This page describes how to work on the TinyCAD v4 codebase in the `TinyCAD-for-the-Web` repository.

## Tools needed to build

- **Git** (to clone, branch, and submit changes)
- **Node.js 20.x** (the CI workflows build with Node 20)
- **npm** (comes with Node.js)

Optional but recommended:

- **Visual Studio Code** (or another TypeScript/React-friendly editor)
- Platform packaging tools only if you need signed store-ready installers

## How to build

### 1) Clone and install dependencies

```bash
git clone https://github.com/matt123p/TinyCAD-for-the-Web.git
cd TinyCAD-for-the-Web
npm ci
```

`npm ci` is preferred because it matches the lockfile and mirrors CI.

### 2) Run locally (development)

- Google Drive mode:

```bash
npm run start:ga
```

- Local filesystem mode:

```bash
npm run start:fs
```

- Desktop (Electron) mode:

```bash
npm run dev
```

### 3) Create production builds

- Browser build (Google Drive variant):

```bash
npm run build:ga
```

- Browser build (filesystem variant):

```bash
npm run build:fs
```

- Desktop installers/packages (Electron Builder):

```bash
npm run dist
```

Build outputs are written to `dist/` (web) and `release/` (desktop packages).

### Environment variables

For Google Drive mode and analytics, provide values via local environment variables (for example in `.env.local`):

- `GOOGLE_CLIENT_ID_DEV`
- `GOOGLE_CLIENT_ID_PROD`
- `GOOGLE_ANALYTICS_ID`

## How to debug

### Browser modes (`start:ga` / `start:fs`)

1. Start a dev server with `npm run start:ga` or `npm run start:fs`.
2. Open the app in your browser (Parcel serves it on localhost in development).
3. Use browser DevTools (`F12`) for console, network, and source-level debugging.

### Electron mode (`npm run dev`)

1. Run `npm run dev`.
2. Parcel serves the renderer on `http://localhost:1234` and Electron starts after that.
3. In development mode, TinyCAD automatically opens Electron DevTools.
4. Use the terminal running Electron for main-process logs/errors.

## How to submit changes (GitHub pull requests)

1. Fork `matt123p/TinyCAD-for-the-Web` on GitHub.
2. Create a branch from `main` for your change.
3. Make your changes and test locally (run the relevant build/dev commands above).
4. Commit with a clear message and push your branch to your fork.
5. Open a Pull Request targeting `main`.

When you open a PR, GitHub Actions will run browser and desktop build workflows. Keep PRs focused and include enough detail in the PR description for reviewers to reproduce and verify the change.

- Back to [v4 contents](../CONTENTS/)