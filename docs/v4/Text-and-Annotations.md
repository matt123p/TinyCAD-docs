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


## Drawing lines & polygons

You can draw a collection of lines.  To end drawing right-click.

You can convert this to a polygon by selecting "Close Polygon" in the context menu.  Once converted
to a polygon you can change the fill.

{% include video-player.html
	src="/v4/images/video/Video 7.mp4"
	width=1620
	height=924
	caption="Video walkthrough showing how to draw and edit a polygon."
%}


- Back to [Drawing](../User-guide/)
- Back to [v4 contents](../CONTENTS/)
