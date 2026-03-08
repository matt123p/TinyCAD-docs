---
layout: default
---

# VHDL output

VHDL output in TinyCAD v4 works the same way as in v3. TinyCAD uses your schematic connectivity, symbol pin definitions, and VHDL-oriented symbols to generate a VHDL description of the design.

VHDL export is available in the desktop app. The browser version does not currently create VHDL files.

## What VHDL is used for

VHDL stands for Very High Speed Integrated Circuit Hardware Description Language. It is used to describe digital hardware such as logic gates, counters, state machines, buses, and larger reusable blocks.

VHDL is commonly used for:

- simulating digital logic before building hardware
- describing reusable design blocks with defined inputs and outputs
- building hierarchical FPGA or ASIC designs from smaller modules
- passing a design into downstream synthesis or verification tools

In practice, a VHDL design usually defines:

- an **entity**: the block's external ports
- an **architecture**: the internal logic or structure

TinyCAD's VHDL support is most useful when you want to capture the structure of a digital design as a schematic and export that structure in VHDL form.

## Preparing the schematic

To create VHDL output, build the schematic with symbols from the VHDL library. These symbols are designed so TinyCAD can understand which pins are inputs, outputs, and named connections.

You can also find VHDL-oriented symbols on [tinycad.net](https://www.tinycad.net/Search?key=%23vhdl).

Use the symbols as you would any other TinyCAD symbols, but pay particular attention to naming:

- For top-level inputs and outputs, use the VHDL library symbols and give each one the required signal name.
- Internal wires should be named consistently anywhere the same signal must connect.
- Pin names, directions, and pin numbers on custom symbols must be correct.

TinyCAD names connected wires automatically, but explicit labels are still the clearest way to control exported signal names.

## How TinyCAD pairs symbols with VHDL

TinyCAD can be used for hierarchical VHDL-oriented design without relying on TinyCAD's multi-file hierarchical schematic feature.

The expected workflow is:

1. Create or collect the VHDL files that define the behavior of your reusable blocks.
2. Create matching TinyCAD symbols for those blocks in a project library.
3. Give each symbol the same name as the corresponding VHDL file or design unit.
4. Make sure each symbol pin has the correct pin name, direction, and a unique pin number.

Each time you place one of those symbols in the schematic, TinyCAD can pair the symbol instance with the VHDL block of the same name.

This makes it practical to build larger designs out of smaller VHDL-defined modules while still drawing the top-level structure as a schematic.

## Working with buses

For VHDL output, do not use TinyCAD's BUS drawing feature as the logical definition of the bus. Instead, define buses by naming wires directly.

Examples:

- `A(7:0)` defines an 8-bit bus named `A`
- `A(3)` refers to one bit of that bus
- `A(7:4)` refers to a slice of that bus

Use the same naming style on input and output symbols when they represent buses.

For bus ranges of the form `A(i:j)`, keep `i` higher than `j`.

You may still draw a bus join for readability, but for VHDL export the important part is the wire naming, not the visual bus artwork.

## Generating the VHDL file

When the schematic is ready, run the Create VHDL command in TinyCAD.

TinyCAD automatically runs a design rules check as part of the export process. You can also run the design rules check first yourself if you want to catch wiring or symbol issues before generating output.

## Practical checklist

Before exporting, verify the following:

- top-level inputs and outputs are named exactly as you want them in VHDL
- custom symbols have the correct pin directions
- pin numbers are unique on every symbol
- shared nets that should connect really do share the same name
- buses are named with VHDL-style ranges such as `DATA(15:0)`

If the generated VHDL is not what you expected, the cause is usually an incorrect pin definition, a missing wire name, or inconsistent bus naming.

## Example designs

The TinyCAD source tree includes a small VHDL example based on a 4-bit processor design. Reviewing those files is a useful way to understand the expected symbol naming and project structure.

The example is available in the [TinyCAD VHDL examples repository folder](https://github.com/matt123p/TinyCAD/tree/master/examples/vhdl).

- Back to [Advanced](../Advanced/)
- Back to [v4 contents](../CONTENTS/)