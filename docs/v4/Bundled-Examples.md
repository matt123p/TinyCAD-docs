---
layout: default
---

# Bundled examples

Bundled examples are editable drawings supplied with TinyCAD. They show how to use the libraries, explain connection choices and provide circuits for the [simulation tutorials](../Simulation-Tutorials/). You do not need to download their symbols separately.

## Open an example

<div class="manual-tabset" data-tabset="product-mode" data-tabset-label="Choose your TinyCAD product" data-default-tab="Browser" markdown="1">

### Browser

Choose **Open Example** at the right of the dark title bar. After opening an example with instructions, **Explanation** appears beside it. Use that button to show or hide the explanation panel.

### Desktop App

Choose **File → Open Example**, below **Open Recent**. Use **View → View Explanation** to show or hide the current example's instructions. The command is unavailable when the drawing has no associated explanation.

</div>

1. Choose a group: **Examples**, **SPICE tutorial**, or **XSPICE and digital tutorial**.
2. Select a drawing to see its preview and description. This selection does not yet replace your current drawing.
3. Choose **Open drawing**. If you have unsaved changes, respond to the save prompt before continuing.
4. Read the explanation, inspect the connections and change the editable copy. Use **Save As** to keep your version.

Use **Search groups and examples** to find a named item. Clear the search and choose **All groups** if a filter hides a group you need.

{% include video-player.html src="/v4/videos/simulation/examples.mp4" poster="/v4/videos/simulation/examples.jpg" caption="Open the network example and show its explanation beside the drawing." %}

## Equipment and layout examples

Choose the **Examples** group for these seven drawings.

| Drawing | What it demonstrates | Things to try |
| --- | --- | --- |
| **Transistor amplifier** | The original AMP.dsn transistor amplifier schematic | Follow its bias and signal paths. For a modelled, runnable reconstruction, use [SPICE tutorial chapter 7](../SPICE-Tutorial-07/). |
| **Small office network** | Router, PoE switch, patch panel and blank panel in a rack, with an ISP terminal, access point and desktop switch | Trace the rack uplink and office cable runs; add another matching 1U panel. |
| **ESP32 climate and display station** | Controller, sensor and display module connections | Follow the labelled power and signal pins, then adapt the chosen modules. |
| **Home solar and battery plan** | Solar generation, storage and home-energy equipment on an A3 page | Trace power paths separately from monitoring/control links. |
| **Two-person podcast studio** | Microphones, mixer/interface, recording computer and monitoring | Follow microphone inputs, recording output and headphone feeds. |
| **DC load and waveform bench** | Physical supply, load, waveform generator, oscilloscope and meter connections | Distinguish complete instrument cables from individual conductors. |
| **DC motor and limit-control bench** | A motor driver, geared motor, control connections and limit switches | Trace motor power separately from PWM/direction and limit signals. |

The six equipment layouts include explanations of their connections, assumptions and possible extensions. They are physical/system drawings, without SPICE models. The original amplifier is also a drawing example; opening it does not automatically turn it into a runnable simulation.

Open sockets can be intentional. Wires touching other endpoints or sockets form real connections, so inspect those carefully when adapting a layout. Embedded graphics and pins make these examples portable, but they do not replace the actual device's wiring documentation.

## Simulation examples

### SPICE tutorial

This group follows the [eleven-chapter SPICE course](../SPICE-Tutorial/). It starts with a voltage divider, then covers sources, RC charging, AC filters, diode rectification, a reconstructed transistor amplifier and design investigations. The **Start here — using the tutorials** entry opens the first divider and explains the workflow.

The drawings embed their symbols, model text, analysis settings and retained reference results. A waveform may therefore be visible **before your first run**. Choose **Run** to make a fresh acquisition for your current circuit and settings. Follow the chapter's expected values and make the suggested changes to see why the result changes.

### XSPICE and digital tutorial

Use **TinyCAD Desktop** for this group. The [six-chapter XSPICE course](../XSPICE-Tutorial/) covers logic truth tables, propagation delay, hazards, flip-flops, counters, analogue/digital bridges and unknown states. XSPICE is not supported in browser builds. A browser can still open drawings containing saved XSPICE results for viewing.

There are 28 distinct simulation drawings across the two tutorial groups. The extra “Start here” entry points to the same divider used in the first SPICE chapter. Each lesson links to downloadable `.dzn` drawings and companion `.cir` netlists as an alternative to opening the bundled copy. Open `.dzn` files in TinyCAD; `.cir` files are text for inspecting or using with a compatible external simulator.

## Keep your experiments

The bundled original is unchanged when you edit its open copy. Reopening the same bundled example provides a fresh starting point. Save your own drawing under a new name to preserve changes, and save simulation results when you want to retain numerical evidence.

The **Explanation** panel and **Simulation charts** are independent. Closing one does not require closing the other. In Desktop, charts are available through **View → Show Charts**; in both products, use **Simulation → Show charts** on the toolbar.

When distributing a saved drawing, include any separate notes your reader needs. The bundled explanation is associated with opening the example; do not rely on it being restored after a saved copy is opened independently. The drawing's own embedded text notes remain part of the file.

Continue with [your first simulation](../Simulation/#run-your-first-simulation) or [the tutorial start guide](../Tutorial-Start-Here/).
