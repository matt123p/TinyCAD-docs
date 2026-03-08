---
layout: default
---

# Generate Netlist

TinyCAD can generate a netlist file for use in PCB layout and other downstream tools.

A netlist is a text description of two main things:

- which component instances are in the design
- which pins are connected together on each net

TinyCAD reads the schematic connectivity from your drawing and writes that information in the output format you choose.

## What a generated netlist is for

The generated netlist is mainly used to move a finished schematic into another tool, especially a PCB layout program.

Typical uses include:

- importing the circuit into a PCB tool
- checking that PCB connectivity matches the schematic
- reviewing component references and net names in a plain-text format

TinyCAD does not place the PCB for you. It exports the connectivity data so another tool can use it.

## Before generating the netlist

Netlist export depends on the schematic being electrically connected in the way TinyCAD expects.  It is good practice to run [Design Rules Check](../Design-Rules-Check/) first.

## The `Package` attribute

For PCB export, many destination tools need each component to carry a footprint or package name.

In TinyCAD this is usually stored as a symbol attribute named `Package`.

When the netlist is exported, TinyCAD writes that attribute into the output so the PCB program can map the schematic symbol to the correct footprint.

The same symbol may use different package values in different parts of a design, so check the attribute on the placed component, not only in the library default.

## How to generate the netlist

1. Open the design you want to export.
2. Run the netlist export command from TinyCAD's export tools in the UI.
3. Choose the output format required by your destination tool.
4. Choose the filename and save the exported file.


## Formats in the Generate Netlist dialog

The dialog currently offers these formats:

- `PADS-PCB`
- `PADS-PCB-WITH-VALUE`
- `Eagle SCR`
- `Protel`
- `gEDA PCB`

## What the formats mean

### PADS-PCB

Creates a PADS-style netlist file.

### PADS-PCB-WITH-VALUE

Creates a PADS-style netlist file and also includes the part value where available.

### Eagle SCR

Creates an Eagle script file.

### Protel

Creates a Protel-style netlist file.

### gEDA PCB

Creates a gEDA PCB netlist file.

## SPICE and VHDL

SPICE and VHDL exports are handled separately from the main `Generate Netlist` dialog.

If you need those, use:

- `Generate Spice NetList`
- `Create VHDL File`

These commands still generate the net data first, but they use their own dedicated exporters.

## What file name is used

TinyCAD uses the current drawing name and changes the file extension to match the export format.

Examples:

- `.net`
- `.scr`
- `.cir`
- `.vhdl`


## What to check after export

Because netlists are text files, they are easy to inspect in a text editor.

Review at least these points:

- component references are present and unique
- expected net names appear in the file
- package or footprint values are present where required
- no obvious parts or connections are missing

If the result looks wrong, the cause is usually in the schematic data rather than the export step itself.

## Common causes of incorrect netlists

- a drawing line was used instead of a wire
- a wire stops near a pin but is not actually snapped to it
- a component is missing a reference
- a required `Package` attribute is missing or inconsistent
- labels that were meant to connect do not match exactly

## Related pages

- [Netlist Editor](../Netlist-Editor/)
- [Design Rules Check](../Design-Rules-Check/)
- [SPICE output](../SPICE-output/)

- Back to [Advanced](../Advanced/)
- Back to [v4 contents](../CONTENTS/)