---
layout: default
---

# Text & Annotations

Text and annotation tools are for documentation and visual clarity.

These objects are **not electrical** and are ignored by netlisting and design
rule checks.

## Text vs labels

- Use **Text** for notes, callouts, titles, and manufacturing instructions.
- Use **Labels** for electrically active net names.

If you use text where a label is required, the net will not connect.

## Annotation objects

TinyCAD supports common annotation shapes, including:

- text,
- lines,
- rectangles,
- ellipses,
- arcs,
- polygons.

Use these to group blocks, highlight areas, and add explanatory notes without
changing circuit connectivity.

## Editing behavior

- Text can be edited and resized after placement.
- Shapes can be selected, moved, resized, and styled.
- Polygon/polyline handles can be added, moved, or removed.
- You can adjust drawing order (Z-order) for overlapping annotations.

## Style guidance

- Keep annotation style consistent across sheets.
- Prefer concise notes near the relevant circuitry.
- Use design details/title information for global metadata and text for local
	guidance.

- Back to [Drawing](../User-guide/)
- Back to [v4 contents](../CONTENTS/)
