---
layout: default
---

# Editing a Symbol

## How symbols work in TinyCAD

Symbols are created from normal objects found on the Toolbar. They may contain
any of these objects except other symbols.

If the symbol does contain any objects with special functions (such as a power
item or a wire) then those objects will be treated as though they were
annotation.

All their special functions are lost when used in a symbol. Only **pins** define
electrical connection points.

Summary:
- a symbol is a reusable graphic plus attributes
- electrical connectivity is defined by **pins**
- and symbols are stored in **libraries** (`.tclib`)

## Before you start

This page assumes you already have a library open for editing. The steps for
opening or creating a library depend on whether you are using TinyCAD Web or
the desktop application, so start with [Custom Symbol Libraries](../Custom-symbol-libraries/).

If you are looking for browsing and placement rather than editing, see [Using Symbol Libraries](../Using-Symbol-Libraries/).

## Open or create the symbol

1. Open the library.
2. To edit an existing symbol, click it in the library symbol list.
3. To create a new symbol, click the `+` button in the symbol list.
4. The selected or new symbol loads into the editor canvas.

You can then modify the graphics, pins, and symbol attributes.

{% include video-player.html
	src="/v4/images/video/Video 12.mp4"
	width=1532
	height=978
	caption="Video walkthrough showing how to edit a library."
%}


## Drawing the symbol shape (graphics)

Use standard drawing tools to create the symbol outline:

- lines/polylines for body edges,
- rectangles/ellipses/arcs for common package outlines,
- text for optional internal markings.

Keep the symbol readable at normal schematic zoom. Simple shapes usually work
better than highly decorative artwork.

## Adding pins

Pins are the only electrically active part of a symbol.

For each pin, set:

- **Pin number** (required and unique within a part),
- **Pin name** (optional but strongly recommended),
- **Electrical type** (required for accurate DRC),
- **Pin style/shape** (visual style),
- **Visibility** for pin name/number text as needed.

Place pins carefully on-grid so wiring in the schematic is straightforward.

{% include video-player.html
	src="/v4/images/video/Video 13.mp4"
	width=1532
	height=978
	caption="Video walkthrough showing how to add pins."
%}


## Pin panel

You can edit pins in the **Pin** panel in the **bottom panel** area.

The Pin panel edits are **live**: every field change dispatches an immediate
pin update action (no separate OK/Apply step).

Pin panel sections:

1. **Name**
	- Show checkbox (`show_name`)
	- Name text field (`name`)
	- Centre on pin checkbox (`centre_name`)
2. **Number**
	- Show checkbox (`show_number`)
	- Number text field (`number`)
	- Offset numeric field (`number_pos`)
3. **Type**
	- Shape dropdown (`which`)
	- Electrical dropdown (`elec`)
	- Length numeric field (`length`, UI range 5..50)

Notes:

- Shape controls symbol appearance and some special visual behaviors.
- `Cross` shape and `Not Connected` electrical type both draw a cross marker.
- `Power` and `Hidden` shape styles are rendered using hidden-pin coloring.

## Pin electrical types and DRC behavior

Selecting correct electrical type is essential. DRC uses these types to detect
connection mistakes.

Current values in TinyCAD v4 source (`elec`):

- `0` Input
- `1` Output
- `2` Tristate
- `3` Open Collector
- `4` Passive
- `5` Input/Output
- `6` Not Connected
- `7` Free
- `8` Unspecified
- `9` Power Input
- `10` Power Output
- `11` Open Emitter

General guidance:

- Mark real driven signals as **Output**.
- Mark receiver-only signals as **Input**.
- Use **Power Input/Power Output** where power-drive semantics matter for DRC.
- Use **Not Connected** only for intentionally unconnected pin semantics.
- Use **Free**/**Unspecified** cautiously and consistently across a library.

Practical DRC implications:

- Incorrect pin typing can cause false DRC errors (or hide real ones).
- Power pin names must match intended supply names for automatic behavior.

## Power and hidden pins

Power and hidden pins are shown while editing the symbol, but are typically
hidden when the symbol is placed in a drawing.

For **power pins** specifically:

- The pin name acts as the supply net name.
- Connectivity is automatic when supply names match.
- Wires are normally not drawn directly to these hidden power pins in the
	placed symbol view.

For **hidden pins**:

- They are still electrically active.
- Use them where you wish to draw your own pin shape and pin labels.

## Multi-part symbols (parts per package)

TinyCAD supports devices with multiple logical units in one package (for
example, quad gates).

Two multi-part styles are used:

1. **Homogeneous** multi-part symbols:
	 - parts share the same outline,
	 - usually differ by pin numbers only.
2. **Heterogeneous** multi-part symbols:
	 - parts can have different outlines,
	 - parts can also have different pin sets/functions.

Use homogeneous when parts are interchangeable; use heterogeneous when each part
has a distinct function.

### Multi-part workflow

1. Decide homogeneous vs heterogeneous first.
2. Set the number of parts per package.

For homogeneous parts:
- The first part defines the shape of the symbol and the layout of the pins

For heterogeneous parts:
- You can draw a different shape per part

## Symbol attributes and properties

You can edit the symbol's attributes in the **Symbol** panel in the **bottom panel**.

In addition to graphics and pins, define symbol attributes carefully:

- Primary symbol name (and aliases if used),
- Default **Ref** format (for example `U?`, `R?`, `C?`),
- Default **Name/Value**,
- Additional attributes/parameters (for example package/footprint, simulation
	model fields, or project-specific metadata).

## Save, duplicate, rename, delete

Common symbol management actions in library editing:

- **Save/update** the current symbol to write changes.
- **Duplicate** to create variants (recommended instead of editing a base symbol
	destructively).
- **Rename** when standardizing naming.
- **Delete** obsolete symbols (undo if deleted accidentally).

Use duplication for package/value variants that share graphics but differ in
defaults.

## Validation checklist before publishing a symbol

Before using a symbol broadly, check:

1. Pins are on-grid and easy to wire.
2. Pin numbers are complete and unique per part.
3. Electrical types are set correctly for all pins.
4. Power/hidden pin behavior is intentional.
5. Multi-part setup (if any) is correct.
6. Name/reference defaults are sensible.
7. Symbol appearance is readable at normal drawing zoom.

Then place the symbol in a test schematic and run DRC.

## Troubleshooting tips

- **Wires do not connect to symbol:** check pin endpoint placement and grid
	alignment.
- **Unexpected DRC errors:** verify electrical type on every pin.
- **Wrong part behavior in multi-part symbols:** re-check part selection and pin
	numbering for each part.
- **Power not auto-connecting:** verify supply pin names match intended net
	names.

## Related pages

- [Custom symbol libraries](../Custom-symbol-libraries/)
- [Using Symbol Libraries](../Using-Symbol-Libraries/)
- [Symbols](../Symbols/)
- [Design Rules Check](../Design-Rules-Check/)

- Back to [Symbols & Libraries](../Symbols-and-Libraries/)
- Back to [v4 contents](../CONTENTS/)
