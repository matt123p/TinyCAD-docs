---
layout: default
---

# TinyCAD v4 Changelog


## Unreleased

- [Plugin management](../Plugins/) from **File > Plugins**, with searchable
  Installed/Available lists, saved GitHub sources, versioned Markdown
  documentation, release updates, disable/uninstall, and rollback.
- [Plugin development](../Plugin-development/) from local folders, loopback
  servers, or explicit GitHub tags/commits. Working examples live separately in
  `examples/plugins` in the application source repository; they are not shipped
  or registered by default.

## v4.0.9 — 4 November 2026

### Added

- [Touch controls](../Touch-controls/), including direct editing, two-finger pan
  and pinch zoom, and a magnifying loupe with Click, Drag/Drop, Menu and Close
  controls for precise placement.
- [Resizable library panel and symbol sorting](../Using-Symbol-Libraries/),
  including alphabetical ordering of search results.
- [Temporary hiding of selected objects](../User-guide/#temporarily-hiding-objects)
  and a command to restore all hidden objects on the current sheet.
- Polish interface translation and translated text in the Replace Symbol dialog.

### Fixed

- [Grid visibility and snapping](../Snap-to-Grid/) work independently, and
  keyboard movement respects disabled snapping.
- Bitmap images render in placed library symbols.
- [Escape cancels drawing and placement actions](../Shortcuts/), including when
  toolbar controls have focus.
- Cancelling the desktop unsaved-changes prompt clears the pending quit.
- Canvas pinch zoom no longer compounds with browser page zoom.
- Improved touch-loupe positioning, pointer feedback, gesture handling and dragging.
- Improved desktop and macOS About dialog behavior.

### Packaging and maintenance

- Updated dependencies to address security vulnerabilities.
- Removed Linux ARMv7 packages because the Electron runtime supports Linux x64
  and ARM64. Snap packages target x64; Debian packages target x64 and ARM64.

[Release downloads](https://github.com/matt123p/TinyCADv4/releases/tag/v4.0.9)
· [Source changes](https://github.com/matt123p/TinyCADv4/compare/v4.0.8...v4.0.9)

## v4.0.8 — 3 May 2026

- Fixed power-symbol rotation when saving and reopening a drawing.
- Preserved wire net types when saving and loading, keeping wire colours consistent.

[Release downloads](https://github.com/matt123p/TinyCADv4/releases/tag/v4.0.8)
· [Source changes](https://github.com/matt123p/TinyCADv4/compare/v4.0.7...v4.0.8)

## v4.0.7 — 13 April 2026

- Fixed printing in the desktop application.
- Improved pinch-zoom behavior to prevent uncontrolled zooming.
- Added server-side rendering of library symbols.
- Automated tagging of production builds and creation of GitHub releases.

[Release downloads](https://github.com/matt123p/TinyCADv4/releases/tag/v4.0.7)
· [Source changes](https://github.com/matt123p/TinyCADv4/compare/4.0.6...v4.0.7)

## v4.0.6 — 29 March 2026

This release includes the development changes made under version 4.0.5; there is
no separate 4.0.5 tag or published GitHub release.

### Added

- Automatic wire routing.
- Replace Symbol for changing an existing component to another library symbol.
- Automatic scrolling while dragging near the edge of the drawing.
- Double-click selection of a complete wire and triple-click selection beyond
  junctions and tees.
- An option to turn off the label connection indicator.

### Fixed and improved

- Library folders open by default and expand when searching.
- Improved text editing, clipboard shortcuts, navigation keys and keyboard
  accelerators while the drawing has focus.
- Fixed Ctrl-click selection, dragging multiple selected objects, and spin controls.
- Drawing and selection rectangles can be dragged in either direction.
- Fixed quitting on macOS and reduced duplicate library loading on macOS.
- Fixed label positioning, colour-picker translation and netlist background processing.
- Corrected Windows installer and AppX build names.

[Release downloads](https://github.com/matt123p/TinyCADv4/releases/tag/4.0.6)
· [Source changes](https://github.com/matt123p/TinyCADv4/compare/4.0.4...4.0.6)

## v4.0.4 — source tag, 19 March 2026

- Added [library folders](../Library-Folders/) to organise symbol libraries.
- Added Dutch interface translation.
- Added browser build artifacts and deployment to GitHub Pages.
- Fixed Snap packaging.

[Source changes](https://github.com/matt123p/TinyCADv4/compare/4.0.3...4.0.4)

## v4.0.3 — source tag, 15 March 2026

- Adjusted macOS startup handling to address a startup problem.

The source tag is 4.0.3, although its package metadata still reports 4.0.2.

[Source changes](https://github.com/matt123p/TinyCADv4/compare/4.0.2...4.0.3)

## v4.0.2 — 14 March 2026

- Fixed the unsaved-changes close dialog on Linux.
- Added x64 Debian packages alongside the existing ARM builds.
- Updated build tooling and packaging configuration.

[Release downloads](https://github.com/matt123p/TinyCADv4/releases/tag/4.0.2)
· [Source changes](https://github.com/matt123p/TinyCADv4/compare/4.0.1...4.0.2)

## v4.0.1 — initial source tag, 13 March 2026

The first source snapshot already contains the TinyCAD rewrite for browser and
desktop use, with schematic editing, symbol libraries, support for existing
`.dsn` and `.tclib` files, and export workflows. Earlier development is not
recorded in this repository.

[Initial source snapshot](https://github.com/matt123p/TinyCADv4/tree/4.0.1)

- Back to [v4 contents](../CONTENTS/)
