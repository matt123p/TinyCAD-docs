---
layout: default
---

# Editing a Symbol

## How symbols work in TinyCAD

Symbols are created from normal objects found on the Toolbar. They may contain
any of these objects except other symbols.

If the symbol does contain any objects with special functions (such as a power
item or a wire) then these object will be treated as though they were
annotation. 

All their special functions are lost when used in a symbol, only **pins** define
electrical connection points.

Summary:
- a symbol is a reusable graphic plus atributes
- electrical connectivity is defined by **pins**
- and symbols are stored in **libraries** (`.tclib`)

## Before you start

You must be editing a library in order to edit symbols.  So make sure you have opened a library
for editing.  How you do this depends on which version of TinyCAD you are using.  See 
[Custom symbol libraries](../Custom-symbol-libraries/) for more details.

> **Screenshot needed 2:** Library loaded, showing symbol list in side panel.

## Open an existing symbol for editing

1. Open the library.
2. In the library symbol list, click the symbol you want to edit.
3. The symbol loads into the editor canvas.

You can then modify graphics, pins, and symbol atributes.

> **Screenshot needed 3:** Selecting a symbol in the library panel and loading it in the editor.

## Create a new symbol

Click the `+ (new)` in the symbol list.  You will then be presented with a blank drawing area
to draw your new symbol.

> **Screenshot needed 4:** Creating a new symbol from the symbol-list `+` button.

## Drawing the symbol shape (graphics)

Use standard drawing tools to create the symbol outline:

- lines/polylines for body edges,
- rectangles/ellipses/arcs for common package outlines,
- text for optional internal markings.

> **Screenshot needed 5:** Symbol body being drawn on-grid (without pins yet).

## Adding pins

Pins are the only electrically active part of a symbol.

For each pin, set:

- **Pin number** (required and unique within a part),
- **Pin name** (optional but strongly recommended),
- **Electrical type** (required for accurate DRC),
- **Pin style/shape** (visual style),
- **Visibility** for pin name/number text as needed.


> **Screenshot needed 6:** Pin tool/pin properties panel with number, name, and electrical type fields.
>
> **Screenshot needed 7:** Example symbol with visible pin names and numbers.

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

> **Screenshot needed 8:** Bottom Pin Properties panel visible with Name, Number, and Type sections.
>
> **Screenshot needed 9:** Live editing example (changing shape/electrical type and seeing immediate update).

Notes:

- Shape controls symbol appearance and some special visual behaviors.
- `Cross` shape and `Not Connected` electrical type both draw a cross marker.
- `Power` and `Hidden` shape styles are rendered using hidden-pin coloring.

> **Screenshot needed 10:** Shape dropdown expanded, showing all shape options.
>
> **Screenshot needed 11:** Example canvas showing several different pin shapes side by side.

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

> **Screenshot needed 12:** Electrical dropdown expanded, showing all electrical types.
>
> **Screenshot needed 13:** DRC example showing an error caused by mismatched pin typing.

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

> **Screenshot needed 14:** Symbol editor view showing visible power/hidden pins before placement.
>
> **Screenshot needed 15:** Same symbol placed in a schematic with those pins hidden.

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

> **Screenshot needed 16:** Setting number of parts per package.
>
> **Screenshot needed 17:** Editing different parts of a multi-part symbol (tabbed part selector).
>
> **Screenshot needed 18:** Homogeneous example (same shape, different pin numbers).
>
> **Screenshot needed 19:** Heterogeneous example (different shape/function per part).

## Symbol atributes and properties

You can edit the Symbol's attributes in the **Symbol** panel in the **bottom panel**.

In addition to graphics/pins, define symbol atributes carefully:

- Primary symbol name (and aliases if used),
- Default **Ref** format (for example `U?`, `R?`, `C?`),
- Default **Name/Value**,
- Additional attributes/parameters (for example package/footprint, simulation
	model fields, or project-specific metadata).

> **Screenshot needed 20:** Symbol properties panel with Name, Ref, and extra attributes.

## Save, duplicate, rename, delete

Common symbol management actions in library editing:

- **Save/update** the current symbol to write changes.
- **Duplicate** to create variants (recommended instead of editing a base symbol
	destructively).
- **Rename** when standardizing naming.
- **Delete** obsolete symbols (undo if deleted accidentally).

Use duplication for package/value variants that share graphics but differ in
defaults.

> **Screenshot needed 21:** Symbol context menu showing duplicate/rename/delete actions.

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
