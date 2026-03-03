---
layout: default
---

# Wires

Wires are the electrically active connections in a TinyCAD schematic.

If you need connectivity for DRC, netlisting, SPICE/PCB export, or cross-sheet
linking, use wire objects (not annotation lines).

## Why wires matter

- Wires define electrical nets.
- Wires snap to symbol pins and other valid connection points.
- TinyCAD uses wire connectivity for rule checking and generated outputs.

Using annotation lines instead of wires may look correct visually, but the
circuit will be electrically disconnected to tools.

## Placing wires

1. Select the Wire tool.
2. Click to start from a valid connection point.
3. Click to place corners/segments as needed.
4. End on another valid connection point.
5. Right-click to finish wiring mode.

## Snapping and junctions

- Wires are magnetic to pins and existing wires.
- Junctions are added automatically where needed.
- Crossing wires are not connected unless a junction is present.

This helps avoid accidental opens or shorts in dense schematics.

## Editing wires

Wires are not edited like text objects, but they can be:

- moved,
- dragged,
- deleted.

## Wires and multi-sheet drawings

Wires connect within a sheet. To connect between sheets, place labels with the
same name on the relevant wires on each sheet.

- Back to [Drawing](../User-guide/)
- Back to [v4 contents](../CONTENTS/)
