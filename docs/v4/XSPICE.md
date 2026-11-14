---
layout: default
---

# XSPICE and digital simulation

XSPICE extends ngspice with code models and an event-driven simulation system coordinated with the analogue solver. It is useful for gates, clocks, storage and mixed analogue/digital systems. See the official [XSPICE overview](https://ngspice.sourceforge.io/xspice.html) for the upstream architecture.

**XSPICE is supported in TinyCAD Desktop and is not supported in browser builds.** Desktop’s native engine includes the bundled code-model libraries.

*Viewing saved results:* a browser can still open a drawing containing an earlier XSPICE acquisition. This lets you inspect its saved results; running the simulation requires Desktop.

## Choose the right logic model

| Approach | How it works | Where to use it |
| --- | --- | --- |
| Bundled **Digital logic** and **Functional blocks** | Portable analogue behavioural SPICE models with configured supplies and thresholds | Browser and Desktop system-level investigations |
| XSPICE tutorial symbols/models | Event-driven logic, delays, storage and explicit analogue/digital bridges | Desktop native mixed-signal simulation |

A visually similar gate can therefore have a different modelling contract. Do not substitute one for the other solely by appearance. Neither approach makes an ESP32, Raspberry Pi or Arduino board picture execute firmware. The TinyCAD integration is not a general HDL or embedded-software execution environment.

## Analogue and digital nodes

Analogue nodes carry continuously valued voltages/currents. Digital event nodes carry states. An **ADC bridge** applies thresholds to map analogue input into digital states; a **DAC bridge** maps a digital state back into an analogue output level. These bridges describe simulator-domain conversion, not necessarily a complete physical ADC/DAC device.

Check thresholds, supply levels and output loading. A voltage between valid logic thresholds can produce an unknown state. Storage can remain unknown until clock/reset conditions establish it. An unknown state is useful diagnostic information; replacing it with an assumed 0 can hide a real timing or initialisation problem.

Propagation delay makes time matter. Gates with different path delays can produce a hazard even when a static truth table looks correct. Choose a transient maximum step that resolves the analogue response and the timing you want to measure. Do not infer an event delay from a coarse display alone.

## Run the digital course

1. In Desktop choose **File → Open Example → XSPICE and digital tutorial**.
2. Open the drawing named in the lesson. Symbols, code-model declarations and retained results are included.
3. Read the explanation through **View → View Explanation** and select its Simulation sheet.
4. Choose **Run** for a fresh native acquisition, then compare the states and timings with the lesson.
5. Save a copy before changing thresholds, delays, reset or clock timing.

The [six-chapter XSPICE tutorial](../XSPICE-Tutorial/) covers bridges and first run, gates and truth tables, hazards, flip-flops, counters and mixed-signal filtering. It includes circuit diagrams, solver plots and downloadable companions.

## Upstream reference

Use the official [ngspice documentation and manual](https://ngspice.sourceforge.io/docs.html) for code-model syntax and supported ports. The [XSPICE HOWTO](https://ngspice.sourceforge.io/xspicehowto.html) discusses code-model development, and [XSPICE usage](https://ngspice.sourceforge.io/xspiceusage.html) provides further examples and background. Those resources describe ngspice as a whole. TinyCAD uses its bundled native modules; it does not load arbitrary user-supplied compiled code models through a drawing attachment.
