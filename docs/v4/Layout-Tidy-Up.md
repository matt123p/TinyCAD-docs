---
layout: default
---

# Layout tidy-up

**Auto-layout** tidies an existing schematic by adjusting component positions, wires and labels. Use it to make a crowded circuit easier to read, reduce unnecessary bends, or improve the spacing of references and values.

It works on the **current schematic sheet**, in both the browser and Desktop App. It preserves the existing electrical connections; it does not infer which connections you meant to draw or create a circuit from scratch.

## Open Auto-layout

In either product, choose **Auto-layout** on the toolbar, immediately beside **Simulation**. In Desktop you can also choose **Tools → Auto-layout**.

Select a schematic sheet first. The tool is not available while editing a library or viewing a Simulation sheet.

## Choose what to tidy

The dialog's **Apply to** setting offers:

- **Whole sheet** — tidy the supported circuit items on the current sheet.
- **Selected Items** — tidy only the selected circuit items, keeping items outside the selection fixed and preserving connections at its boundary.

To work on a small area, select its components together with the wires and labels you want adjusted before opening the dialog. Selected Items is the default when the selection contains a supported circuit item. It is disabled if the selection contains only unsupported objects, such as note boxes or drawing shapes, or if nothing is selected.

A selection can include symbols, wires, net labels, power symbols, no-connect markers and junctions. A component outside the selection does not move merely because it is connected to a selected component.

## Choose the strength

**Strength** controls how much component placement may change:

| Strength | What can change |
| --- | --- |
| **Low** | Keeps large components fixed; smaller components, wires and labels can still move. |
| **Medium** | Allows up to two large components to move, as well as smaller components, wires and labels. This is the default. |
| **High** | Allows all eligible components to move, together with wires and labels. |

Start with Low when you want to preserve the main arrangement. Use Medium or High when the circuit needs more room to reorganise. Low is not a labels-only option: it can also change small-component positions and wire routes.

“Large” is determined from symbol geometry and pin count, rather than its electrical importance. Changing strength does not rotate, resize or replace components, or change their references, values or model settings.

## Run and review the result

1. Open a drawing, or an editable copy of a [bundled example](../Bundled-Examples/).
2. Select the area to tidy if you want to limit the operation.
3. Open **Auto-layout**, choose **Apply to** and **Strength**, then choose **Go**.
4. Wait while **Arranging layout…** is displayed. A successful result is applied immediately and the dialog closes.
5. Inspect the result. Use **Undo** to revert the entire tidy-up in one step if you prefer the original arrangement.

{% include video-player.html src="/v4/videos/simulation/layout-tidy-up.mp4" poster="/v4/videos/simulation/layout-tidy-up.jpg" caption="Open Auto-layout, choose the scope and strength, tidy the amplifier example, then undo the change." %}

**Cancel** stops the calculation and closes the dialog without applying changes. If the sheet changes while the tool is running, the result is discarded; run it again for the current sheet.

**No layout improvements were found** means that the tool found no acceptable changes within the chosen scope and strength. It leaves the drawing unchanged. You can close the dialog, select a different area, try another strength or make a manual adjustment.

## What the tool improves

Auto-layout looks for several kinds of improvement:

- More readable positions for component reference/value text, keeping fields together and clear of nearby artwork, wires and other text.
- Better positions for plain net labels along their supporting wires, with related labels aligned where possible.
- Simpler orthogonal wire routes, shorter unnecessary detours and clearer exits from component pins.
- More compact placement of connected components and regular spacing of repeated components.
- Ordered parallel routes for related wires when their connections and available space permit it.

It does not redesign note boxes, buses, shaped port flags, library artwork or page furniture. Some dense or unusual symbols still need manual attention. A longer wire can be the better result when it provides room for a label or keeps a connection clear.

## Check connections before tidying

Auto-layout treats the drawing's **existing connectivity as the starting point**. It checks both electrical net membership and physical wire connections before accepting changes. Named net labels cannot hide a broken physical wire in those checks.

A wire passing through another wire's endpoint or a socket can make an electrical connection even without a visible junction dot. If that contact is accidental, correct it before running Auto-layout: the tool cannot decide that an existing connection was a drawing mistake. It does not move ambiguous junctions to join previously separate nets.

After tidying, inspect branches, pin connections and the routes around unused sockets. Use [Design Rules Check](../Design-Rules-Check/) as appropriate, and compare the circuit with your intended connections. If a simulation drawing is marked as changed, [run it again](../Simulation/) before treating old results as measurements of the current drawing.

## Auto-layout or Point-to-Point Wire?

Use **Auto-layout** to tidy geometry that is already in the schematic. Use [Point-to-Point Wire](../Wires/#auto-routing) when you want to create a new routed connection between two endpoints. The ordinary [Wire tool](../Wires/#placing-wires) lets you choose individual corners yourself.

See also [Snap to Grid](../Snap-to-Grid/), [Labels](../Labels/) and [Page Size](../Page-Size/).
