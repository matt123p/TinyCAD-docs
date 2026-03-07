---
layout: default
---

# Power Symbols

Power symbols indicate connection to named power nets such as `GND`, `+5V`,
`VCC`, or `+3V3`.

All power symbols with the same name are considered electrically connected.

{% include video-player.html
	src="/v4/images/video/Video 5.mp4"
	width=1596
	height=700
	caption="Video walkthrough showing how to place power symbols."
%}


## How power symbols work

- Net connectivity is based on the **power name**.
- The **shape** is visual only and does not change connectivity.
- Orientation/shape choices are for readability and drafting style.

Use consistent names throughout the design to avoid split power nets.

## Placement rules

1. Select the Power tool.
2. Choose orientation, shape, and name.
3. Place the symbol and connect at the end of the symbol pin.

Connect wires to the power symbol pin end (not just near the graphic) so the
connection is recognized.

## Hidden power pins on symbols

Some library symbols use hidden power pins (for example many logic families).
These pins connect automatically to matching power net names.

Use the same names expected by the symbol library (for example `VCC`/`GND` when
required) so automatic power connections work correctly.

## Editing and styles

You can change the shape of a power symbol by selecting it and then selecting a new shape in
the toolbar.

## Multi-sheet behavior

Power net names are global within the design context used for netlisting.
Consistent naming across sheets ensures the intended power connectivity.

- Back to [Drawing](../User-guide/)
- Back to [v4 contents](../CONTENTS/)
