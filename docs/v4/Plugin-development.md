---
layout: default
---

# Plugin development

Develop a plugin from a local folder or loopback HTTP server before publishing a
GitHub release. Development installs use the same manifest checks, permission
review, and isolated runtime as published plugins. You can reload changes without
changing the version number.

These instructions and source links target TinyCAD's **feature/plugins** branch.
For installation and everyday management, see [Plugins](../Plugins/).

## Try the standalone examples

The examples are source code in
[`examples/plugins`](https://github.com/matt123p/TinyCADv4/tree/feature/plugins/examples/plugins).
They are excluded from TinyCAD's browser and desktop builds, and no example
repository is registered by default.

| Example | Demonstrates |
|---|---|
| **Circuit Inspector** | Left/bottom panels, a connectivity report, notes saved with a drawing or symbol, and a small component-library provider. |
| **Project Home** | A main application page and multiple open drawings with separate save state and undo history. Persistent project files are not implemented by this example. |

From a TinyCAD source checkout, choose **File > Plugins > Developer mode**,
select **Local folder**, and choose `examples/plugins`. The catalog lets you
select individual examples. Choosing `examples/plugins/inspector` or
`examples/plugins/project` loads just that plugin.

## Load a local folder

Choose **Local folder** in the Development source list, then **Choose folder**.
Select either a folder containing `tinycad-plugin.json`, or one containing a
`tinycad-plugins.json` catalog that lists several source packages. Select the
plugin in Available and install it explicitly.

![Developer mode with Local folder selected and the Choose folder button.](../images/plugins/developer-folder.png)

The desktop app remembers the selected directory. In the browser, the selected
files are imported as a snapshot; **Reload from folder…** asks you to select the
same folder again, including after restarting TinyCAD.

## Load a local server

Choose **Local server**, enter the URL, and select **Add source**. Supported hosts
are `localhost`, `127.0.0.1`, and `[::1]`, over HTTP or HTTPS. You can enter a
folder URL, a `tinycad-plugins.json` catalog URL, or a single
`tinycad-plugin.json` URL.

![Developer mode with Local server selected and a localhost URL.](../images/plugins/developer-server.png)

For example, after installing the TinyCAD source checkout's npm dependencies, run
one of these commands from its root directory:

```sh
# Both examples, with a catalog for individual selection:
npm run plugins:serve -- examples/plugins

# Just Circuit Inspector on another port:
npm run plugins:serve -- examples/plugins/inspector 8081
```

Add `http://127.0.0.1:8080/` or `http://127.0.0.1:8081/` respectively. You can pass
your own plugin directory instead of the example directory.

This helper binds to loopback, sends browser CORS and no-cache headers, and serves
only the catalog, manifests, and declared plugin resources. It rejects symlinks.
Other servers work if they allow CORS without credentials; a browser may also
request local-network permission. Redirects, embedded credentials, URL queries,
and fragments are not accepted for a development source.

## Build and reload

Build your JavaScript bundles before importing or reloading. TinyCAD does not run
npm, install dependencies, or run build scripts from a plugin directory.

1. Save and rebuild your controller/UI bundles.
2. Select your plugin in **Installed**.
3. Choose **Reload from source**, or **Reload from folder…** in the browser.
4. Review the permissions and continue.

The host re-reads the manifest and its declared files, restarts the runtime at a
safe editing point, and caches the new snapshot. Neither a version bump nor an
updated catalog is needed for these development reloads. Finish unsaved plugin
forms, running commands, and active edits/saves before replacing the plugin.

The previous five snapshots remain available under **Plugin settings > Rollback**.
The content hash distinguishes snapshots with the same version. Startup uses the
installed cached snapshot even when the directory or server is unavailable. A
missing cache requires an explicit reload. Changing to a different source root,
or between a development source and GitHub, requires uninstalling the old copy
before installing from the new source.

## A minimal plugin

Give each plugin its own directory and manifest. Bundle dependencies into the
controller and UI entry points; runtime imports of TinyCAD internals or npm
packages are not supported.

```text
hello/
  tinycad-plugin.json
  controller.js
  ui.js
  README.md
  CHANGELOG.md
  docs/
    README.md
```

This manifest adds a **Hello** choice to the left panel:

```json
{
  "manifestVersion": 1,
  "id": "org.example.hello",
  "name": "Hello",
  "description": "A small example of a plugin panel.",
  "version": "1.0.0",
  "apiVersion": "^1.0.0",
  "platforms": ["browser", "electron"],
  "readme": "README.md",
  "changelog": "CHANGELOG.md",
  "documentation": "docs/README.md",
  "controller": "controller.js",
  "ui": "ui.js",
  "files": [
    "controller.js", "ui.js", "README.md", "CHANGELOG.md", "docs/README.md"
  ],
  "permissions": [],
  "contributes": {
    "panels": [
      {
        "id": "org.example.hello.panel",
        "title": "Hello",
        "surface": "hello",
        "location": "left"
      }
    ]
  }
}
```

Create the controller entry point:

```js
// controller.js
export function activate(api) {
  // Register handlers here when the plugin declares commands or providers.
}
```

Create the UI entry point:

```js
// ui.js
export function mount(root, api, context) {
  const heading = document.createElement('h2');
  heading.textContent = 'Hello from my plugin';
  root.append(heading);
}
```

Add content to all three Markdown files, import the `hello` folder, install it,
and choose **Hello** in the left-panel selector. TinyCAD passes `api` to the entry
points; a runtime SDK import is unnecessary.

Plugin and contribution IDs must belong to your plugin namespace. List every
runtime/documentation resource in `files`. Paths are relative to the package and
must remain inside it.

## Extension points and the host API

Declare contributions in the manifest, then implement their handlers or UI
surfaces. The [manifest types](https://github.com/matt123p/TinyCADv4/blob/feature/plugins/src/plugins/types.ts),
[manifest schema](https://github.com/matt123p/TinyCADv4/blob/feature/plugins/schemas/tinycad-plugin.schema.json),
and [SDK types](https://github.com/matt123p/TinyCADv4/blob/feature/plugins/src/plugins/api.ts)
are the implementation contracts.

| Contribution or API | Purpose |
|---|---|
| `panels` | Add choices to the left or bottom panel. |
| `symbolEditorTabs` | Add a tab when editing a symbol. |
| `mainViews` | Add application or document views in the main editor area. |
| `commands`, `menus`, `toolbars`, `toolbarItems` | Declare actions and place them in supported slots. Logical menu slots are adapted to browser and desktop menus; contributions can specify platforms. |
| `libraryProviders` | Search and resolve symbols through an additional component source. |
| `documents`, `editor`, `symbols`, `netlists` | Read snapshots/context or request supported host operations. |
| `extensionData` | Store the plugin's namespaced information with a document, sheet, symbol definition/instance, library, or library name. |
| `settings`, `resources`, `events` | Save plugin preferences, read declared resources, and subscribe to host events. |
| `views`, `ui` | Open views, report status, track unsaved forms, or request an edit preview. |
| `network`, `desktop` | Use granted network access or a configured desktop tool. |

Controllers and UI surfaces run in isolated workers/frames and communicate through
the host. They do not receive Redux, model classes, Node.js, Electron, or the
parent document. Request the permissions your operations need in the manifest;
installations and permission expansion are reviewed in the manager.

Use document session IDs and revisions from snapshots for edits. An accepted
batch is one undo step; invalid operations or revision conflicts reject the
batch. Keep portable plugin data in `extensionData` and local preferences in
`settings`. Declare the data schemas your plugin uses. Host persistence preserves
plugin data even when the plugin is unavailable.

Call `ui.setDirty(true)` for an unaccepted form draft, then clear it after saving
or discarding the draft. Declare/export commands before another plugin can invoke
them. Desktop tools require `desktop.tools` permission and a user-configured
executable; the plugin receives a tool ID and supplies stdin to the host adapter.

See the [full author guide](https://github.com/matt123p/TinyCADv4/blob/feature/plugins/docs/plugin-api.md)
for transactions, permissions, condition expressions, lifecycle, and API examples.

## Descriptions and Markdown documentation

Every manifest/catalog entry includes a short `description` and Markdown paths
for `readme`, `changelog`, and `documentation`. These paths are relative to the
plugin package, not the repository root. Include all linked pages and supported
images in `files`.

The manager shows the selected version's Description, Changelog, and Full
documentation before installation, without activating plugin code. Relative page
links work within the package; external HTTPS links open through the host.
Raw HTML, executable Markdown/MDX, and embedded scripts are disabled. Cached
packages retain their version's documentation for offline use.

## Multiple plugins and GitHub releases

At the root of a plugin repository, `tinycad-plugins.json` lists the available
plugins. Each has its own manifest, version, description, documentation, and
package. Users choose which plugins to install.

The [standalone example catalog](https://github.com/matt123p/TinyCADv4/blob/feature/plugins/examples/plugins/tinycad-plugins.json)
uses source entries pointing to `inspector/tinycad-plugin.json` and
`project/tinycad-plugin.json`. To use that layout in another repository, put the
contents of `examples/plugins` at its root. Importing the example folder locally
does not require publishing it.

For release distribution:

1. Build each plugin and put its manifest and declared files at the root of a ZIP
   package.
2. Create a release catalog with one `releaseAsset` entry per plugin, naming its
   ZIP and SHA-256 digest.
3. Attach `tinycad-plugins.json` and the ZIPs to a published GitHub release.
4. Add the repository URL in TinyCAD and inspect/install the released versions.

Repositories with published releases stay in release mode; an invalid release
catalog is reported rather than silently switching to development code. Explicit
GitHub tags/commits can be selected through **Developer mode**. A repository
without releases can use the catalog at the selected source commit.

Publish changed production content under a new semantic version. The same-version
content changes allowed by development reloads are not accepted for GitHub
production packages. Compatible release updates can be automatic; new permissions
or data-schema upgrades require review. Rollback restores package/settings
snapshots and does not reverse file-data migrations.

In the TinyCAD checkout, `npm run plugins:catalog` refreshes the **example** source
catalog and `npm run plugins:package` generates release artifacts for the **two
provided examples** in `plugin-release/`. These commands do not publish a release
or add examples to the TinyCAD application. For your own plugin, create packages
and a catalog matching the [catalog schema](https://github.com/matt123p/TinyCADv4/blob/feature/plugins/schemas/tinycad-plugins.schema.json).

- Back to [Plugins](../Plugins/)
- Back to [v4 contents](../CONTENTS/)
