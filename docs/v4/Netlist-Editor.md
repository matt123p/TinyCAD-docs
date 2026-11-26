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

![Netlist view below the divider schematic, with the OUT row highlighted](../Images/netlist-editor/netlist-overview.png)

In this bundled divider example, the `OUT` row connects `R1.2` to `R2.1`.
Hovering over that row highlights the connection in the drawing.

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

With the **Netlist** view open, click a wire on the schematic to highlight its net's row. Use the **Type** list on that row to choose an existing type. To create a type with its own wire style, open **Netlist Types** and define the style first.

A net type is a reusable set of drawing styles. Assign the same type to several nets to give them the same appearance. Editing that type updates every net using it. You can also give nets of a type their own label and power symbol colours, or store notes as attributes. Styling changes the drawing's appearance while preserving its electrical connections.

## Example – Make the divider's OUT wire green and thicker

Open the bundled `divider` drawing from **Open Example** → **SPICE tutorial** and zoom in on the circuit. In the bottom panel, switch from **Symbols** to **Netlist**. The **OUT** label identifies the net between pins **R1.2** and **R2.1**. It starts with the `default` type and normal wire thickness.

![Divider before styling, showing the thin blue OUT wire between R1 and R2](../Images/netlist-editor/netlist-wire-before.png)

### Create the wire style

1. Click **Netlist Types**, click **Add**, and name the new type `control`.
2. In the `control` row, set **Wire thickness** to `4`. A value of `1` gives the normal line thickness. Press **Tab** to commit the value.
3. In the same row, click the **Wire colour** cell. Tick **Override colour** and enter `007F5F` in the **Hex** field for green. The preview shows the wire with both settings.
4. Click **OK** in the colour picker. Check the green swatch and the thickness value on the `control` row, then click **OK** in **Netlist Types** to save the type.

![Wire colour picker for control, with Override colour ticked and the green wire visible in the preview](../Images/netlist-editor/netlist-wire-colour.png)

![Netlist Types showing the green Wire colour swatch and Wire thickness of 4 on the control row](../Images/netlist-editor/netlist-wire-type.png)

### Apply the style to OUT

1. Click the wire just above **R2** on the schematic. TinyCAD highlights the **OUT** row in the **Netlist** panel.
2. Open the **Type** list on the highlighted row and choose `control`.
3. Click a blank area of the schematic to clear the selection. The wire between **R1.2** and **R2.1** is now green and thicker. Choose `default` in the **Type** list to restore the normal wire style.

![Selected OUT wire on the schematic and its highlighted Netlist row with control selected](../Images/netlist-editor/netlist-wire-assignment.png)

![Divider after styling, showing the thicker green OUT wire between R1 and R2](../Images/netlist-editor/netlist-wire-after.png)

Use **Save As** to keep your edited copy of the example.

### Watch the walkthrough

{% include video-player.html src="/v4/videos/netlist-editor/netlist-editor.webm" type="video/webm" poster="/v4/Images/netlist-editor/netlist-walkthrough-start.png" caption="Switch to Netlist, create a green wire style, then click the OUT wire to find its row and apply the style." %}

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

The `default` type has a fixed name and a wire thickness of `1`. TinyCAD uses the colours on this row as the drawing's normal net colours. Nets without a type assignment use `default`.

## How to duplicate a type

This is useful when you want something similar to an existing type.

1. Select the type row.
2. Click `Duplicate`.
3. Rename the copy and adjust its colours or thickness.
4. Click `OK`.

## Label and power symbol colours

Use the **Wire**, **Label** and **Power** tabs in the colour picker to edit each colour independently. For a custom type, enable **Override colour** on each tab you want to customise. A tab with the override cleared uses the drawing's default colour for that item.

## How to add attributes

Attributes are simple name/value entries saved with the type.

To add them:

1. Click the `Attributes` cell for the type.
2. Click `Add Attribute`, then enter the attribute name and value. Repeat for any additional entries.
3. Save the attributes.
4. Click `OK` in the main dialog.

![Attributes editor with purpose and notes entries for the control type](../Images/netlist-editor/netlist-attributes.png)

These example entries describe the type's purpose and add a wiring note. They belong to the type and can be shared by every net assigned to it.

At the moment, these attributes are mainly stored with the drawing. They are useful for keeping extra type information, even if they are not yet used by every output format.


## Related pages

- [Generate Netlist](../Generate-Netlist/)
- [Bill Of Materials](../Bill-Of-Materials/)
- [Design Rules Check](../Design-Rules-Check/)
- [SPICE output](../SPICE-output/)
- [VHDL output](../VHDL-output/)

- Back to [Advanced](../Advanced/)
- Back to [v4 contents](../)
