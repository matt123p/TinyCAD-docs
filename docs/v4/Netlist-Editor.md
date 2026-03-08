---
layout: default
---

# Netlist Editor

The `Netlist Editor` is a new feature for TinyCAD v4.

Use this feature when you want to:

- see how TinyCAD has grouped your wires and labels into nets
- find where a net is used in the drawing
- give a net a type
- change how a group of nets looks on the schematic

## What the Netlist view is

The `Netlist Editor` is a live list of the nets in your drawing.

A net is an electrical connection. TinyCAD works this out from your:

- wires
- pins
- labels
- power symbols

The list is live and updates automatically whilst you edit the schematic.

## How to open it

1. Look at the bottom panel of the editor.
2. If you are seeing `Symbols`, use the mode button and switch to `Netlist`.

If another panel is open because something is selected, clear the selection first.

## What each column means

- `Net`: the net name or internal net number
- `Sheet`: the sheet where the main item for that row was found
- `Connections`: how many pin connections are on that net
- `Labels`: labels found on that net
- `Type`: the netlist type assigned to that net
- `Symbols`: connected parts and pins on that net

## How to use the Netlist view

### Find a net

Use the search box to filter the list.

You can search by:

- net name
- sheet name
- label text
- symbol reference
- type name

### Highlight a net in the drawing

Move the mouse over a row.

TinyCAD highlights the matching net items in the schematic so you can see where that net is.

### Jump to a net in the drawing

Click a row.

TinyCAD jumps to the related item in the correct sheet.

## How to assign a type to a net

Each row has a `Type` field.

To assign a type:

1. Click in the `Type` field for the net.
2. Pick an existing type from the list, or type a new name.
3. Click away from the field to apply the change.


## What a net type is

A net type is a reusable label for a group of nets.

You can use it to:

- organize nets into categories
- give matching nets the same colors
- make certain nets thicker in the drawing
- store extra notes as attributes

Examples of possible type names:

- `power`
- `control`
- `logic`
- `analog`
- `high_current`

## How to open Netlist Types

1. Open the bottom bar `Netlist` view.
2. Click `Netlist Types`.

This opens the editor for all available type definitions.

## What you can do in Netlist Types

In the `Netlist Types` window you can:

- add a new type
- duplicate an existing type
- rename a type
- delete a type
- change wire color
- change label color
- change power symbol color
- change wire thickness
- add your own attributes
- preview the result before saving

## The default type

There is always a `default` type.

Important things to know:

- it cannot be renamed
- it cannot be deleted
- its colors are the normal drawing colors

If you change the colors on the `default` row, you are changing the normal net colors used by the drawing.

## How to create a new type

1. Open `Netlist Types`.
2. Click `Add`.
3. Enter a name.
4. Set the colors and wire thickness you want.
5. Click `OK` to save.

After that, you can assign the new type to nets from the bottom `Netlist` view.

## How to duplicate a type

This is useful when you want something similar to an existing type.

1. Select the type row.
2. Click `Duplicate`.
3. Change the new name.
4. Edit any colors or settings you want.
5. Click `OK`.

## How to change colors

Each type can have separate colors for:

- wires
- labels
- power items

To change a color:

1. Click the color cell in the row.
2. Pick the color in the color dialog.
3. Close the color dialog.
4. Click `OK` in the main `Netlist Types` window.

Non-default types can either use their own color or fall back to the default drawing color.

## How to change wire thickness

1. Find the type row.
2. Change the `Wire Thickness` value.
3. Click `OK`.

This affects how wires on nets of that type are drawn on the schematic.

## How to add attributes

Attributes are simple name/value entries saved with the type.

To add them:

1. Click the `Attributes` cell for the type.
2. Add or edit the attribute names and values.
3. Save the attributes.
4. Click `OK` in the main dialog.

At the moment, these attributes are mainly stored with the drawing. They are useful for keeping extra type information, even if they are not yet used by every output format.


## Related pages

- [Generate Netlist](../Generate-Netlist/)
- [Bill Of Materials](../Bill-Of-Materials/)
- [Design Rules Check](../Design-Rules-Check/)
- [SPICE output](../SPICE-output/)
- [VHDL output](../VHDL-output/)

- Back to [Advanced](../Advanced/)
- Back to [v4 contents](../CONTENTS/)
