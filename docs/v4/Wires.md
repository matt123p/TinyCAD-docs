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
2. Click to start from a valid connection point - although this isn't strictly necessary.  You can place a wire anywhere.  You can tell if the connection point is valid because a red circle will indicate the connection.
3. Click to place corners/segments as needed.
4. End on another valid connection point OR
5. Right-click to finish wiring mode.

## Snapping and junctions

- Wires are magnetic to pins and existing wires.
- Junctions are added automatically where needed.
- Crossing wires are not connected unless a junction is present.

## Editing wires

To edit a wire, simply click on it.  Now you can either drag the entire wire segment by dragging the wire itself or you can move the ends of the wire by dragging the move boxes.

- Back to [Drawing](../User-guide/)
- Back to [v4 contents](../CONTENTS/)
