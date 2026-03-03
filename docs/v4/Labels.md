---
layout: default
---

# Labels

Labels are electrically active net names. Any wires with the same label name are
treated as connected, even when no physical wire is drawn between them.

Use labels to:

- connect points that are far apart on the same sheet,
- reduce visual clutter in dense schematics,
- connect nets across sheets in the same drawing,
- link hierarchical symbol pins to internal nets.

## How labels work

- A label connects to the wire beneath it.
- Connectivity is based on the **label text**, not location.
- Label **shape** is only a visual style and does not change connectivity,
	netlisting, or DRC behavior.
- Use the same name everywhere you intend one electrical net.

## Label naming guidelines

- Use clear net names such as `RESET`, `SCL`, `+5V`, `ADC_IN0`.
- Keep naming consistent across the whole design.
- Avoid accidental variations (`GND` vs `GN D`, `CLK` vs `Clk`) because these
	create different nets.
- If your naming includes numbers, repeated placement can increment/decrement
	numeric suffixes using Repeat Direction name options.

## Label shapes and why to use them

TinyCAD provides multiple label shapes in the label tool options. Choose shape
for readability and drafting style; all shapes are electrically equivalent.

Typical reasons to use different shapes:

- separate frequently reused nets from one-off local nets,
- make off-sheet or cross-block connections stand out visually,
- indicate signal direction or intent for human readers,
- match your team or company schematic style.

Practical rule: pick a small set of shapes and use them consistently so readers
can quickly scan the diagram.

## Placing and editing labels

1. Select the Label tool.
2. Enter the net name.
3. Choose orientation/shape as needed.
4. Place the label on the target wire.
5. Repeat for every location that should connect to that net.


## Labels with multi-sheet drawings

In a multi-sheet drawing file, labels are the normal way to connect nets between
sheets.

- Same label name on different sheets means the same electrical net.
- This cross-sheet linking is used when generating netlists.
- Use stable, unambiguous names for shared nets (`+3V3`, `GND`, `I2C_SDA`,
	`I2C_SCL`, etc.).

Recommended workflow:

1. Define common net names up front.
2. Reuse those exact names on each sheet.
3. Run DRC/netlist checks to catch naming mistakes early.

- Back to [Drawing](../User-guide/)
- Back to [v4 contents](../CONTENTS/)
