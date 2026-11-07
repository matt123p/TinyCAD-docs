---
layout: default
---

# Plugins

Plugins extend TinyCAD with extra panels, symbol-editor tabs, pages, menu commands,
toolbars, component libraries, and information stored with a drawing or library.
The plugin manager works in the browser and the desktop app.

This page describes the plugin system being developed on the **feature/plugins**
branch. It is listed under **Unreleased** in the [changelog](../Changelog/).

## Open the plugin manager

Choose **File > Plugins…**. In the browser, **File** is the document-shaped button
at the left of the drawing toolbar. In the desktop app, use the native **File**
menu. The Plugins command has a puzzle-piece icon.

![The browser File menu with the puzzle-piece Plugins command.](../images/plugins/file-menu.png)

TinyCAD ships without example plugins or a default example repository. On a new
installation, both **Installed** and **Available** are empty until you add a source.

![The Available view of a new installation, with an empty plugin list and Add and Developer mode controls.](../images/plugins/manager-empty.png)

The dialog keeps its size while you search or select plugins. The list on the
left and the details on the right scroll independently. **Installed** and
**Available** use the same layout.

| Control | What it does |
|---|---|
| **Search plugins** | Filter the current list by name, plugin ID, or description. |
| **Source** | Choose one saved source or **All sources**. Selecting a repository loads its catalog. |
| **Add** | Save a GitHub repository URL and load its plugins. |
| **Remove** | Forget the selected source and its catalog. Its installed plugins remain installed. Select a particular source first; Remove is disabled for All sources. |
| **Refresh** | Reload source catalogs and, in Installed, check for plugin updates. |
| **Developer mode** | Add a local server, a local folder, or a particular GitHub tag/commit. |

## Add a repository

1. Select **Add**.
2. Enter the publisher's repository URL, in the form
   `https://github.com/owner/repository`.
3. Select **Add source**.
4. In **Available**, select a plugin from the list. One repository can contain
   several plugins; choose and install each plugin you want.

Use the repository URL itself. Choose an explicit tag or commit through
**Developer mode**, rather than pasting a `/tree/...` URL into Add.

![The Add plugin repository dialog with its GitHub repository URL field.](../images/plugins/add-repository.png)

Repository sources and loaded catalogs are remembered when you close the manager
or restart TinyCAD. Adding a repository does not install or run its plugins.

## Inspect and install a plugin

Select a plugin on the left to see its description on the right. Use **Version**
to choose a compatible version. The **Description**, **Changelog**, and
**Full documentation** tabs show that version's Markdown documentation before
you install it. Links between Markdown pages work within the plugin package.

![Two explicitly imported example plugins in Available, with Circuit Inspector selected and its description on the right.](../images/plugins/manager-available.png)

*The examples in this screenshot were imported manually from a source checkout.
They are not supplied with the TinyCAD application.*

Select **Install**, read the requested permissions, then select **Continue** if
you want to grant them and run the plugin. For example, a plugin may request
access to read the drawing, change symbols, or store its own notes in the file.
Review these requests for each plugin you install.

![The installation confirmation for Circuit Inspector, including its requested permissions.](../images/plugins/install-permissions.png)

An installed plugin can add choices to the left or bottom panel, a tab when
editing a symbol, its own main view, menu commands, or toolbar controls. Its
available controls depend on what the plugin declares and on whether you are
editing a drawing or a library. The built-in drawing and panel choices remain
available.

## Updates and rollback

For GitHub repositories with published releases, TinyCAD uses their release
catalogs and packages. Without releases it can use source versions; a particular
GitHub tag or commit is also available through Developer mode.

Select a plugin in **Installed** and expand **Plugin settings**:

| Setting | Behavior for release plugins |
|---|---|
| **Automatic** updates | Install compatible new versions automatically at a safe editing point. This is the default for release installations. |
| **Manual** updates | Check for new versions and let you choose when to install them. |
| **Pinned to this version** | Keep the selected version until you change the policy. |
| **Stable releases** channel | Use stable releases. |
| **Include prereleases** channel | Also consider prerelease versions. |
| **Rollback** | Restore a retained previous package. Rollback pins the chosen version and pauses automatic updates. |

The **Include prereleases** checkbox below the list controls source browsing;
refresh the source after changing it. An installed plugin's **Channel** is a
separate setting.

Use **Refresh** in Installed to check now. A newly available version can be
selected from **Version**, then installed with **Update**. Updates needing
additional permissions or a newer plugin-data schema require review. Finish an
active edit, plugin form, command, or save before replacing a running plugin.

TinyCAD retains the previous five package snapshots for rollback. Restoring a
package does not undo changes that a plugin has already made to a drawing. Use
the drawing's Undo command for supported edits, and save versions of important
files before running a plugin that changes them.

## Disable, retry, or uninstall

Select the plugin in **Installed**, then use:

- **Disable** to stop the plugin and remove its contributed controls.
- **Enable / retry** to enable a disabled plugin or retry one that reported an error.
- **Uninstall** to remove the installation. TinyCAD asks for confirmation.

Removing a source with **Remove** does not uninstall its plugins. To remove a
plugin, use **Uninstall** in its details instead.

Plugin information already saved in drawings and libraries is preserved when the
plugin is disabled, uninstalled, or unavailable. Open document sessions also stay
available when a plugin that supplied a project page is disabled.

Some plugins provide an application page. **Plugin settings** can include an
option to use that page at startup. Desktop plugins with native-tool permission
can also provide **Configure native tool**; select the executable you want that
plugin to use.

## Development sources and examples

Use **Developer mode** to add a local folder or server. These sources use manual
reloads instead of release auto-updates. A browser folder installation shows
**Reload from folder…**, which asks you to select the same folder again. The
desktop app remembers the selected folder and shows **Reload from source**.

![An installed development copy of Circuit Inspector, with manual reload and rollback in Plugin settings.](../images/plugins/manager-installed.png)

*This screenshot shows a manually imported development plugin after a reload.
Release installations also offer the update-policy and channel settings described
above.*

The standalone [Circuit Inspector and Project Home examples](https://github.com/matt123p/TinyCADv4/tree/feature/plugins/examples/plugins)
are in the TinyCAD source repository. Circuit Inspector demonstrates panels,
reports, notes, and a component library. Project Home manages multiple open
drawings with independent undo/save state; a persistent project-file format is
still future work.

See [Plugin development](../Plugin-development/) for folder/server setup, the
example catalog, and instructions for writing your own plugin.

## Local storage and recovery

Installed packages are cached locally. The desktop app uses TinyCAD's application
data folder. In the browser, package contents and saved sources use IndexedDB;
installed-version choices and update policies use localStorage. Browser
installations belong to that site and browser profile, so another profile or
cleared site storage starts separately. An already cached package can load
without its repository or development server being online.

If a plugin causes problems, open the manager and disable it. For browser
recovery, add `?plugins=safe` to the TinyCAD URL, or `&plugins=safe` if the URL
already has a query string. Safe start lets you inspect documentation and manage
packages without running plugin code. Remove that query parameter and reload to
run enabled plugins again. Save open drawings before reloading the browser.

- Back to [v4 contents](../CONTENTS/)
