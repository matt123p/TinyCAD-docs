# Web and desktop FAQ

## Is it still free to use?

Yes. TinyCAD for the web is free to use.

## Where are drawings saved?

There are two modes:

- Local-file mode: drawings are stored locally on your computer/browser
- Google Drive mode: drawings are stored in your Google Drive

## What are the requirements?

You can run TinyCAD web in local-file mode or Google Drive mode.

### Local files

You must have:

- An up-to-date Chrome (recommended) or Edge browser
- Firefox/Safari are not supported for local-file mode

### Google Drive

You must have:

- A Google account
- An up-to-date browser; Chrome is recommended, Firefox is supported
- Edge/Safari may work, but were not part of original testing

## Why Google? Will other cloud services be supported?

You do not have to use Google Drive; local-file mode is available.

Cloud integrations require separate implementation effort per provider and there
is no single standard API. OneDrive integration was evaluated as non-trivial.
Historically, GitHub was considered as a possible next service.

## Feature differences: TinyCAD web vs desktop

| Feature | TinyCAD for the Web | Desktop TinyCAD | Notes |
|---|---|---|---|
| Load/Save TinyCAD `.dsn` files | Yes | Yes | TinyCAD web aims for full file-format compatibility with desktop |
| Load/Edit TinyCAD library `.tclib` files | Yes | Yes | See [custom libraries](../advanced/custom-symbol-libraries.md) |
| Import symbols from TinyCAD.net | Search directly in web app (copy/paste also works) | Search online, then copy/paste into desktop | |
| Multi-sheet drawings | Yes | Yes | |
| Printing | Export to PDF for printing | Direct printing via OS printer driver | |
| Export to image | SVG | PNG | Free SVG→PNG converters are available online |
| Labels | Yes | Yes | |
| Buses | Yes | Yes | |
| Shapes and annotations | Yes | Yes | |
| Search drawing | Yes | Yes | |
| Design Rules Check | Yes | Yes | |
| Generate netlist | Yes | Yes | |
| Set style across multiple items | Yes | No | Web app supports selecting multiple annotation items and applying shared style/fill |
| Auto junction placement | Yes | Yes | |
| Undo/Redo | Yes | Yes | |
| Windows support | Full support in Chrome | Full support as installed app | |
| Mac/Linux support | Full support in Chrome | Partial support via Wine compatibility | |
| Chrome OS support | Full support in Chrome | No | |
| Phone/Tablet support | Partial (mouse needed for full workflow) | No | |
| Installation required | No | Yes (installer package) | |
| Multi-file hierarchical drawings | No | Yes | |
| SPICE simulation file output | No | Yes | |

## Keyboard shortcuts

Using keyboard shortcuts instead of toolbar clicks speeds up drawing.

**Note:** These differ from desktop shortcuts because browser applications do
not expose F-keys in the same way.

| Key | Action |
|---|---|
| `W` | Wire tool |
| `N` | No Connect |
| `P` | Power |
| `L` | Label |
| `T` | Text |
| `B` | Bus |
| `S` | Shape (rectangle/ellipse/line) |
| `+` | Zoom in |
| `=` | Zoom in |
| `-` | Zoom out |
| `_` | Zoom out |
| Left Arrow | Rotate clockwise (left) |
| Right Arrow | Rotate counter-clockwise (right) |
| `Ctrl-F` | Find |
| `Ctrl-P` | Print |
| `Ctrl-C` | Copy |
| `Ctrl-X` | Cut |
| `Ctrl-V` | Paste |
| `Del` | Delete |
| `Ctrl-Z` | Undo |
| `Ctrl-Y` | Redo |

Some shortcuts can be intercepted by the browser and trigger browser actions
instead.

- Back to [FAQ](index.md)
- Back to [v4 contents](../CONTENTS.md)
