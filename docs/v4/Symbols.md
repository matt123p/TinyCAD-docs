---
layout: default
---

# Symbols

Symbols are the core building blocks of a TinyCAD schematic. You place symbols from libraries, set their attributes, then wire their pins to build an electrically valid design.

The library picker on the left offers three sources: **Standard** for bundled libraries, **Online** for TinyCAD.net search, and **My Libraries** for your own library files.

The [AI assistant](../AI-Assistant/) can also find or create a symbol from a datasheet and place it directly in the drawing. Open a custom library for editing when you want it to build reusable library components.

## Find a symbol

### Use the bundled libraries

Select **Standard**, then choose a collection from **Choose a standard library**. Browse its components or type a name into **Search libraries...** to filter the selected collection. You can switch collections without removing symbols already placed in your drawing.

The [bundled libraries](../Bundled-Libraries/) include modelled circuit components as well as physical equipment for network, embedded, audio, laboratory, motion-control and solar layouts. They are supplied with TinyCAD in both the browser and Desktop App; no account, separate download or library import is needed. See the library guide for the contents and purpose of each collection.

### Search online

If the bundled collections do not contain what you need, select **Online** and enter a component name or part number in **Search libraries...**. TinyCAD searches the TinyCAD.net symbol collection and shows matching symbols with artwork previews. Online search requires an internet connection.

Select a result to inspect its preview and description, then drag its artwork into your drawing. You do not need to download a separate library first. Check that the pin names and numbers match the component and package you intend to use.

### If you cannot find the symbol you want

Use [Custom Symbol Libraries](../Custom-symbol-libraries/) to create a `.tclib` library or open one you already have. Your libraries are available through **My Libraries** in the picker.

You can draw a new symbol or adapt a copy of a suitable existing one; see [Editing a Symbol](../Editing-a-Symbol/) for its graphics, pins and properties. You can also [import symbols from KiCad](../Importing-Symbols-from-KiCAD/) into a custom library. Bundled libraries are read-only, so keep your own definitions in a custom library.

## Place the chosen symbol

1. Choose **Standard**, **Online** or **My Libraries**, then browse or search that source.
2. Select a result to inspect its larger preview and description.
3. Drag the symbol's artwork from the list or preview onto the drawing, then position it on the grid.
4. Press **Escape** or right-click when you have finished placing copies.

The video below demonstrates finding and placing a symbol. For more on browsing and managing the picker, see [Using Symbol Libraries](../Using-Symbol-Libraries/).

{% include video-player.html
	src="/v4/Images/video/Video 6.mp4"
	width=1280
	height=822
	caption="Video walkthrough showing how to find and place a symbol."
%}



## Orientation while placing

When placing a symbol, set orientation by using the rotate and flip buttons on the toolbar.

<img src="/v4/Images/media/image5.png" alt="Rotate and flip controls used to change symbol orientation" />


## Editing and moving symbol text

After placement, you can move the entire symbol by dragging it.

You can also move symbol text fields (for example value/name/reference) independently by selecting the symbol and dragging each field to a better location.

You can edit the text by clicking on it.

{% include video-player.html
	src="/v4/Images/video/Video 1.mp4"
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

## Related pages

- [Wires](../Wires/)
- [Labels](../Labels/)
- [No Connects](../No-Connects/)
- [Editing a Symbol](../Editing-a-Symbol/)

- Back to [Drawing](../User-guide/)
- Back to [v4 contents](../CONTENTS/)
