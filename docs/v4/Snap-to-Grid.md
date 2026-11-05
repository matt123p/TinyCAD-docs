---
layout: default
---

# Snap to Grid

Snap to Grid makes the mouse position snap to the nearest grid point while you
draw or place items. This keeps symbols and wires aligned, and helps ensure
connections land exactly on valid connection points.

## Why it matters

- Keeps wire ends and symbol pins connected - if you do not use the Snap to Grid then you run
    the risk of wires not connecting to pins.
- It avoids visual misalignment that can look correct but be electrically
	unconnected to TinyCAD tools.

For normal schematic work, Snap to Grid should stay enabled.

## Showing the grid and enabling snapping

Open the **Settings** toolbar menu, then choose **Settings** to change these
independent options:

- **Show the grid** controls the visible grid dots. Turning it off does not disable snapping.
- **Snap to grid** controls alignment while placing and moving objects. Turning it off does not hide the grid.

Grid dots may be suppressed when zoomed out too far to display them clearly.

![Settings dialog with separate Show the grid and Snap to grid checkboxes.](../images/grid-settings.png)

With objects selected, the arrow keys move them by the grid spacing when snapping
is enabled. With snapping disabled, they move in small steps without being
rounded back onto the grid. Hold **Ctrl** for small steps regardless of the snap
setting. With no selection, the arrow keys pan the view.

## Grid spacing

TinyCAD supports 3 grid spacing modes:

- **Normal grid spacing**: best for most schematic editing.
- **Fine grid spacing**: higher point density (twice as many points), useful
	for annotation and symbol drawing.
- **User grid spacing**: custom spacing value entered in the settings dialog,
	in mm or inches depending on current units.

It is recommend that you stick to **Fine grid** for all drawings.

- Back to [Drawing](../User-guide/)
- Back to [v4 contents](../CONTENTS/)
