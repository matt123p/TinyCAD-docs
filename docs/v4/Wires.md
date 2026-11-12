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

## Wire routing modes
{: #wire-routing-modes}

In TinyCAD v4.0.11, use the selector beside Wire to choose how new segments are drawn.

| Mode | Behaviour |
|---|---|
| **90°** | Horizontal and vertical routing. |
| **45°** | Routing constrained to TinyCAD's 45° directions. |
| **Free** | Straight segments at any angle. |

Choosing a mode activates Wire and keeps any active wire preview. You can change modes before placing the next segment. Grid snapping remains a separate setting. For automatic routing between two connection points, use the neighbouring [Point-to-Point Wire tool](#auto-routing).

![Wire toolbar selector showing the 90°, 45° and Free choices.](../images/wire-routing-modes.png)

## Placing wires
{: #placing-wires}

1. Select the Wire tool.
2. Click to start from a valid connection point - although this isn't strictly necessary.  You can place a wire anywhere.  You can tell if the connection point is valid because a red circle will indicate the connection.
3. Click to place corners/segments as needed.
4. End on another valid connection point OR
5. Right-click to finish wiring mode.


{% include video-player.html
	src="/v4/images/video/Video 4.mp4"
	width=1602
	height=696
	caption="Video walkthrough showing how to place wires."
%}

<p>
	<a href="/v4/examples/Simple%20Drawing.dsn" class="btn btn-primary" download>
		<i class="bi bi-download me-1" aria-hidden="true"></i>&nbsp;Download
	</a>
</p>


## Auto-routing with Point-to-Point Wire
{: #auto-routing}

**Point-to-Point Wire** chooses a route between two connection points, placing
the wire segments for you. It is useful for everyday mouse work and especially
on a touchscreen, where tapping two endpoints is easier than placing every corner.

1. Select **Point-to-Point Wire**, beside the Wire mode selector in the toolbar.
2. Click or tap the starting symbol pin or an existing wire. A red circle marks
   a valid connection point.
3. Move to the destination pin or wire to preview the automatic route.
4. Click or tap the destination to place the complete connection. TinyCAD selects
   the new wire segments and leaves the routing tool. Select **Point-to-Point
   Wire** again to make another connection.

Unlike the ordinary Wire tool, both endpoints must be valid connection points;
clicking empty space does not place a corner. Right-click to cancel an unfinished
route. If you want to choose the corners yourself, use [Wire](#placing-wires).

Try the [auto-route example drawing](../examples/Auto-route%20example.dsn).
The resistor and LED are on the grid, with the connection between them left open.

First, select Point-to-Point Wire and choose R1's right-hand pin.

![1. Start with R1 and D1 disconnected. The red circle marks the starting pin on R1.](../images/wire-auto-route-start.png){: width="435" style="max-width: 50%;"}

Next, point at D1's top pin. The preview shows the route and its corner before
you commit it.

![2. Preview the automatic route to D1. The red circle marks the destination pin.](../images/wire-auto-route.png){: width="435" style="max-width: 50%;"}

Finally, click or tap D1's pin. TinyCAD places all the segments in one operation.

![3. Confirm the destination to place the complete connection, including its corner.](../images/wire-auto-route-complete.png){: width="435" style="max-width: 50%;"}

On a touchscreen, you can tap the two endpoints directly. For small or crowded
pins, use the [loupe](../Touch-controls/#precise-placement-with-the-loupe): aim
at each endpoint and press **Click**. You do not need to drag along the route or
tap its corners. Check the completed connection and adjust its segments if needed.

## Snapping and junctions

- Wires are magnetic to pins and existing wires.
- Junctions are added automatically where needed.
- Crossing wires are not connected unless a junction is present.

## Editing wires

To edit a wire, simply click on it.  Now you can either drag the entire wire segment by dragging the wire itself or you can move the ends of the wire by dragging the move boxes.

- Back to [Drawing](../User-guide/)
- Back to [v4 contents](../CONTENTS/)
