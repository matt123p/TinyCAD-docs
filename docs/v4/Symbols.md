---
layout: default
---

# Symbols

Symbols are the core building blocks of a TinyCAD schematic. You place symbols from libraries, set their attributes, then wire their pins to build an electrically valid design.

You can use your own Symbols or download symbols directly from the TinyCAD.net web-site.

See also:

- [Using Symbol Libraries](../Using-Symbol-Libraries/)
- [Custom symbol libraries](../Custom-symbol-libraries/)

## Find and place symbols

1. Open the symbol picker.
2. Browse libraries or search by name/description text.
3. Select the symbol to make it the current placement tool.
4. Click in the drawing to place instances.
5. Right-click to end placement for that symbol.

If search does not find a part, verify the correct libraries are loaded first.

## Orientation while placing

When placing a symbol, set orientation by using the rotate and flip buttons on the toolbar.

<img src="/v4/images/media/image5.png" alt="Rotate and flip controls used to change symbol orientation" style="width: 1.98958in; height: 0.73958in;" />


## Editing and moving symbol text

After placement, you can move the entire symbol by dragging it.

You can also move symbol text fields (for example value/name/reference) independently by selecting the symbol and dragging each field to a better location.

You can edit the text by clicking on it.

{% include video-player.html
	src="/v4/images/video/Video 1.mp4"
	width=284
	height=248
	caption="Video walkthrough showing how to edit and reposition symbol text."
%}



## Symbol attributes in a schematic

Placed symbols usually include these key attributes:

- **Name/Value**: what the part is (for example `10k`, `100nF`, device type)
- **Reference**: unique designator in the sheet/project (for example `R1`, `U3`)
- **Package** (optional): footprint/package identifier used in downstream export flows

Reference fields must remain unique. TinyCAD tools can help auto-generate or re-annotate references when needed.

You can add extra attributes for project metadata, PCB flow, or simulation metadata as required.

## Common mistakes to avoid

- Using annotation polylines instead of wire objects for electrical connections
- Leaving duplicate references uncorrected
- Assuming non-pin graphics create connectivity (only pins/wires/nets do)

## Related pages

- [Wires](../Wires/)
- [Labels](../Labels/)
- [No Connects](../No-Connects/)
- [Editing a Symbol](../Editing-a-Symbol/)

- Back to [Drawing](../User-guide/)
- Back to [v4 contents](../CONTENTS/)
