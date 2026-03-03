---
layout: default
---

# Snap to Grid

In v4, **Snap to Grid works the same way as in v3**.

Snap to Grid makes the mouse position snap to the nearest grid point while you
draw or place items. This keeps symbols and wires aligned, and helps ensure
connections land exactly on valid connection points.

## Why it matters

- It makes alignment easier and cleaner.
- It helps wire ends and symbol pins land on the same point.
- It avoids visual misalignment that can look correct but be electrically
	unconnected to TinyCAD tools.

For normal schematic work, Snap to Grid should stay enabled.

## If Snap to Grid is off

When Snap to Grid is disabled, it becomes much harder to place a wire endpoint
exactly on a symbol connection point. If the points do not coincide exactly,
the drawing may look untidy and special tools can treat that point as
unconnected.

## Grid spacing

TinyCAD supports the same grid spacing modes as v3:

- **Normal grid spacing**: best for most schematic editing.
- **Fine grid spacing**: higher point density (twice as many points), useful
	for annotation and symbol drawing.
- **User grid spacing**: custom spacing value entered in the settings dialog,
	in mm or inches depending on current units.

## Related setting: Show Grid

Show Grid controls whether grid points are displayed. At some zoom levels, very
fine grid points may not be visible until you zoom in.

- Back to [Drawing](../User-guide/)
- Back to [v4 contents](../CONTENTS/)
