---
layout: default
---

# Multiple Sheet Drawings

A TinyCAD drawing can contain several schematic sheets in **one file**. Each sheet has its own drawing area and a tab below the canvas. Use the tabs to work on one sheet at a time; together, the schematic sheets describe one circuit.

## Why use multiple sheets?

Multiple sheets let you organise a design around understandable sections instead of shrinking everything onto one crowded page. For example:

| Sheet | What it might contain |
| --- | --- |
| **Power** | Input connector, protection, regulators and supply rails |
| **Control** | Processor, clock, reset and programming connections |
| **Sensors** | Measurement inputs and their interface circuits |
| **Outputs** | Drivers, relays, motors, displays or external connectors |

This makes each section easier to draw, review and print at a readable size. You can keep related components together, give each page a clear purpose, and arrange the pages in a useful reading order. For a small design, a single sheet may still be clearer.

A sheet is part of the current drawing, not a separate file or browser tab. Opening two unrelated drawing files does not connect them, even if they contain identical labels.

## Create and switch sheets

1. Open your drawing and find the sheet tabs below the canvas.
2. Choose **+** beside the tabs. Its tooltip is **Add new sheet**.
3. Enter a **Sheet Name**, such as `Control`, and choose **Add**.
4. The new sheet becomes active. Place components and wires there, or move selected items from another sheet using Cut and Paste.
5. Select any sheet's tab to return to it. Switching sheets does not discard its contents.

Use distinct, descriptive names so someone reading the schematic can find the section they need.

## Rename a sheet

1. Select the sheet's tab.
2. Open the small arrow menu beside its name.
3. Choose **Rename**, enter the new **Sheet Name**, then choose **Rename** in the dialog.

Renaming changes the page name. It does not rename component references or net labels, and does not change electrical connections.

## Change the sheet order

Drag a sheet tab onto another tab to move it to that position. You can also select a tab, open its arrow menu, and choose **Move left** or **Move right** to move it one position at a time.

Reordering changes the page sequence, not the components or the circuit's connections. Use it to place the power section first, group related functions, or put supporting pages after the main circuit. Drag the **tab** when you want to reorder pages; dragging a component moves that component instead.

## Video: organise sheets and connect them with labels

The walkthrough starts with **Open Example → SPICE tutorial → divider**. It renames the Circuit sheet to Power, creates Control, reorders the tabs, then moves R2 to Control. Matching OUT labels and ground connections named 0 reconnect the divider across the two schematic sheets. The Netlist view confirms that R1 and R2 share the OUT net.

{% include video-player.html src="/v4/videos/simulation/multiple-sheets.mp4" poster="/v4/videos/simulation/multiple-sheets.jpg" caption="Create, rename and reorder sheets, then use matching labels to connect a divider across Power and Control." %}

The example also contains a clock-marked Simulation sheet. That sheet stores analysis settings and results; it is different from a schematic page. All schematic sheets still contribute to the same simulated circuit.

## Make connections between sheets

A wire cannot physically continue onto another page. Instead, use **electrically active labels with the same name** on the points you want to connect. TinyCAD treats those points as one net across all schematic sheets in the drawing.

For example, a regulator output labelled `+3V3` on Power can supply a processor input labelled `+3V3` on Control. A signal labelled `RESET` can connect a reset circuit on one sheet to a processor on another. The labels must be attached to the intended wires or pins.

### Place a shared net label

1. On the first sheet, draw the local wire to the component pin as usual.
2. Select the **Label** tool and place its electrical connection point on that wire or pin. Text drawn nearby is not enough.
3. Edit the label text to a clear name, such as `RESET` or `I2C_SDA`. Select the label text to edit it; replace the default `Label` text.
4. Switch to the other sheet and place another Label on the wire or pin that should join the same net.
5. Enter the **exact same name**, including spelling, spaces and letter case.
6. Repeat on further sheets wherever that same electrical net is needed.

Use the [Label tool](../Labels/), rather than the [Text tool](../Text/). A note reading RESET documents the drawing; a Label reading RESET makes an electrical connection.

### Worked example: a divider on two sheets

Split the ordinary 5 V divider into a supply section and a load section:

| Sheet | Components | Shared connections |
| --- | --- | --- |
| **Power** | V1 = 5 V and R1 = 1 kΩ | R1's output wire is labelled **OUT**; V1's return connects to ground **0**. |
| **Control** | R2 = 1 kΩ | R2's upper pin is labelled **OUT** and its lower pin connects to a ground power symbol named **0**. |

OUT joins R1 to R2 across the sheets. The matching ground names join R2's return to ground 0 on Power. There is no wire drawn between the pages, but the electrical circuit is still V1 → R1 → R2 → return. With the original values, its operating-point output remains 2.5 V.

The video moves R2 with **Cut and Paste**, preserving its reference instead of making a second R2. When adding more components, keep references unique across the drawing so netlists and reports identify the intended part.

## Label names apply to the whole drawing

Shared names are useful, but they also make it easy to join unrelated sections accidentally. A label called `OUT` on three different sheets connects all three locations; it is not local to each page. Use more specific names such as `SENSOR_OUT` and `AUDIO_OUT` when the signals should remain separate.

Sheet names and tab order do not provide electrical isolation. A label's shape is also only a visual convention: plain, input, output and bidirectional label styles with the same name belong to the same net. Choose shapes to help readers follow the intended signal direction, and names to define connectivity.

[Power symbols](../Power-symbols/) provide shared named supply connections too. Keep names consistent: `+3V3` and `3V3` are different names. For SPICE, use a real connection to node **0**; a separate net named GND is not automatically the simulator's ground reference.

## Check the cross-sheet connections

Use the lower list panel's mode menu to switch from **Symbols** to **Netlist**. Find the shared label and inspect the connected component references and pin numbers. The Sheet column names the main item represented by the row; the Symbols column can include parts from other sheets on that same net. In the example, OUT includes both R1 and R2.

If the connection is missing, check the label's attachment point and its exact text on both pages. If unrelated parts share a net, look for a reused label name elsewhere in the drawing. [Design Rules Check](../Design-Rules-Check/) can help identify electrical issues, but it cannot decide whether you intended two identically named nets to be separate.

See [Netlist Editor](../Netlist-Editor/) and [Labels](../Labels/) for more detail. In a simulation drawing, run the analysis again after changing the circuit so the result reflects all current schematic sheets.

## Save the complete drawing

**Save** saves all sheets together. Ordinary drawings use `.dsn`; drawings containing simulation content use [`.dzn`](../Simulation/#dzn-simulation-drawings). You do not need to save each sheet separately.

- Back to [Drawing](../User-guide/)
