---
layout: default
title: "Simulation tutorials for TinyCAD"
---

# Simulation tutorials

Start with [How to use these tutorials and open the bundled examples](/v4/Tutorial-Start-Here/),
then continue to [SPICE: overview and your first simulation](/v4/SPICE-Tutorial-01/).
For event-driven logic, start with the separate [XSPICE and digital course](/v4/XSPICE-Tutorial-01/).

There is a shared introductory chapter, eleven SPICE chapters and six XSPICE
chapters. The complete courses, runnable drawings, images and recordings are included in this manual. All tutorial examples are bundled with TinyCAD; no
tutorial download is needed. Choose **Open Example** in the browser title bar, or **File → Open Example** in Desktop, select
**SPICE tutorial** or **XSPICE and digital tutorial**, select the example named
in the chapter, then choose **Open Drawing**. This opens an editable copy;
use **Save As** to keep your experiments and open the embedded example again
to start afresh. Drawings include embedded symbols, model definitions,
analysis settings and a retained reference acquisition.

## SPICE

1. [Overview and first run](/v4/SPICE-Tutorial-01/)
2. [DC voltage, current and power](/v4/SPICE-Tutorial-02/)
3. [Signal generators and stimuli](/v4/SPICE-Tutorial-03/)
4. [Transient analysis and RC charging](/v4/SPICE-Tutorial-04/)
5. [Frequency response and filters](/v4/SPICE-Tutorial-05/)
6. [Diodes, rectification and ripple](/v4/SPICE-Tutorial-06/)
7. [Rebuilding AMP.DSN](/v4/SPICE-Tutorial-07/)
8. [Amplifier gain and bandwidth](/v4/SPICE-Tutorial-08/)
9. [Amplifier output, clipping and power](/v4/SPICE-Tutorial-09/)
10. [Sweeps, noise and design investigations](/v4/SPICE-Tutorial-10/)
11. [How TinyCAD implements SPICE: engines, symbols and workflow](/v4/SPICE-Tutorial-11/)

## Video walkthroughs

Five short videos demonstrate the steps where seeing the controls helps most.
The videos use TinyCAD in the browser with bundled ngspice. Play them in the
lesson's embedded player, or use these links in a Markdown viewer:

| Lesson | Demonstration |
| --- | --- |
| 1 | [Open, run and change a divider](/v4/videos/simulation-tutorials/spice/first-run.mp4) |
| 3 | [Source settings and waveform preview](/v4/videos/simulation-tutorials/spice/source-settings.mp4) |
| 4 | [RC charging, timestep and time constant](/v4/videos/simulation-tutorials/spice/rc-transient.mp4) |
| 5 | [AC magnitude, dB, phase and cutoff](/v4/videos/simulation-tutorials/spice/ac-response.mp4) |
| 6 | [Measure settled rectifier ripple](/v4/videos/simulation-tutorials/spice/rectifier-ripple.mp4) |

The videos supplement the written instructions and figures. Use the chapter
text for equations, assumptions and expected values. Desktop menus differ from the browser; use File → Open Example there.

## XSPICE and digital simulation

1. [Models, bridges and first run](/v4/XSPICE-Tutorial-01/)
2. [Gates and truth tables](/v4/XSPICE-Tutorial-02/)
3. [Propagation delay and hazards](/v4/XSPICE-Tutorial-03/)
4. [Flip-flops, clocks and reset](/v4/XSPICE-Tutorial-04/)
5. [Counters and divided clocks](/v4/XSPICE-Tutorial-05/)
6. [Mixed-signal filtering and unknown states](/v4/XSPICE-Tutorial-06/)

XSPICE examples require TinyCAD Desktop's native engine. The ordinary SPICE
examples use analogue models, but numerical qualification of this bundle was
performed with bundled native ngspice 47. A successful native run is not a
claim that every browser/version combination has been tested.

Circuit figures are rendered from reopened TinyCAD drawings. Result figures
are plots of actual solver data, not hand-drawn expected waveforms. Captions
identify application screenshots separately. Small numerical differences from
the printed values are normal when model, temperature, timestep or engine
version changes.


## Manual reference

For current controls, models, analysis settings, charts and troubleshooting, see [Simulation](/v4/Simulation/) and [Bundled examples](/v4/Bundled-Examples/). Desktop access is **File → Open Example** and **View → View Explanation**.

## Analogue drawing downloads

Use the bundled example browser, or download a drawing here and open it in TinyCAD. Netlists are provided separately as text.

| Example | Drawing | Netlist |
| --- | --- | --- |
| amp-ac | [TinyCAD drawing](/v4/examples/simulation-tutorials/spice/amp-ac.dzn) | [SPICE text](/v4/examples/simulation-tutorials/spice/amp-ac.cir) |
| amp-bias | [TinyCAD drawing](/v4/examples/simulation-tutorials/spice/amp-bias.dzn) | [SPICE text](/v4/examples/simulation-tutorials/spice/amp-bias.cir) |
| amp-clipping | [TinyCAD drawing](/v4/examples/simulation-tutorials/spice/amp-clipping.dzn) | [SPICE text](/v4/examples/simulation-tutorials/spice/amp-clipping.cir) |
| amp-small-signal | [TinyCAD drawing](/v4/examples/simulation-tutorials/spice/amp-small-signal.dzn) | [SPICE text](/v4/examples/simulation-tutorials/spice/amp-small-signal.cir) |
| controlled-source | [TinyCAD drawing](/v4/examples/simulation-tutorials/spice/controlled-source.dzn) | [SPICE text](/v4/examples/simulation-tutorials/spice/controlled-source.cir) |
| dc-sweep | [TinyCAD drawing](/v4/examples/simulation-tutorials/spice/dc-sweep.dzn) | [SPICE text](/v4/examples/simulation-tutorials/spice/dc-sweep.cir) |
| divider | [TinyCAD drawing](/v4/examples/simulation-tutorials/spice/divider.dzn) | [SPICE text](/v4/examples/simulation-tutorials/spice/divider.cir) |
| rc-ac | [TinyCAD drawing](/v4/examples/simulation-tutorials/spice/rc-ac.dzn) | [SPICE text](/v4/examples/simulation-tutorials/spice/rc-ac.cir) |
| rc-noise | [TinyCAD drawing](/v4/examples/simulation-tutorials/spice/rc-noise.dzn) | [SPICE text](/v4/examples/simulation-tutorials/spice/rc-noise.cir) |
| rc-pz | [TinyCAD drawing](/v4/examples/simulation-tutorials/spice/rc-pz.dzn) | [SPICE text](/v4/examples/simulation-tutorials/spice/rc-pz.cir) |
| rc-step | [TinyCAD drawing](/v4/examples/simulation-tutorials/spice/rc-step.dzn) | [SPICE text](/v4/examples/simulation-tutorials/spice/rc-step.cir) |
| rc-tf | [TinyCAD drawing](/v4/examples/simulation-tutorials/spice/rc-tf.dzn) | [SPICE text](/v4/examples/simulation-tutorials/spice/rc-tf.cir) |
| rectifier | [TinyCAD drawing](/v4/examples/simulation-tutorials/spice/rectifier.dzn) | [SPICE text](/v4/examples/simulation-tutorials/spice/rectifier.cir) |
| source-current | [TinyCAD drawing](/v4/examples/simulation-tutorials/spice/source-current.dzn) | [SPICE text](/v4/examples/simulation-tutorials/spice/source-current.cir) |
| source-dc | [TinyCAD drawing](/v4/examples/simulation-tutorials/spice/source-dc.dzn) | [SPICE text](/v4/examples/simulation-tutorials/spice/source-dc.cir) |
| source-exponential | [TinyCAD drawing](/v4/examples/simulation-tutorials/spice/source-exponential.dzn) | [SPICE text](/v4/examples/simulation-tutorials/spice/source-exponential.cir) |
| source-fm | [TinyCAD drawing](/v4/examples/simulation-tutorials/spice/source-fm.dzn) | [SPICE text](/v4/examples/simulation-tutorials/spice/source-fm.cir) |
| source-pulse | [TinyCAD drawing](/v4/examples/simulation-tutorials/spice/source-pulse.dzn) | [SPICE text](/v4/examples/simulation-tutorials/spice/source-pulse.cir) |
| source-pwl | [TinyCAD drawing](/v4/examples/simulation-tutorials/spice/source-pwl.dzn) | [SPICE text](/v4/examples/simulation-tutorials/spice/source-pwl.cir) |
| source-sine | [TinyCAD drawing](/v4/examples/simulation-tutorials/spice/source-sine.dzn) | [SPICE text](/v4/examples/simulation-tutorials/spice/source-sine.cir) |
| source-triangle | [TinyCAD drawing](/v4/examples/simulation-tutorials/spice/source-triangle.dzn) | [SPICE text](/v4/examples/simulation-tutorials/spice/source-triangle.cir) |

## XSPICE drawing downloads

Use the bundled example browser, or download a drawing here and open it in TinyCAD. Netlists are provided separately as text.

| Example | Drawing | Netlist |
| --- | --- | --- |
| logic-buffer | [TinyCAD drawing](/v4/examples/simulation-tutorials/xspice/logic-buffer.dzn) | [SPICE text](/v4/examples/simulation-tutorials/xspice/logic-buffer.cir) |
| logic-counter | [TinyCAD drawing](/v4/examples/simulation-tutorials/xspice/logic-counter.dzn) | [SPICE text](/v4/examples/simulation-tutorials/xspice/logic-counter.cir) |
| logic-dff | [TinyCAD drawing](/v4/examples/simulation-tutorials/xspice/logic-dff.dzn) | [SPICE text](/v4/examples/simulation-tutorials/xspice/logic-dff.cir) |
| logic-filter | [TinyCAD drawing](/v4/examples/simulation-tutorials/xspice/logic-filter.dzn) | [SPICE text](/v4/examples/simulation-tutorials/xspice/logic-filter.cir) |
| logic-hazard | [TinyCAD drawing](/v4/examples/simulation-tutorials/xspice/logic-hazard.dzn) | [SPICE text](/v4/examples/simulation-tutorials/xspice/logic-hazard.cir) |
| logic-nand | [TinyCAD drawing](/v4/examples/simulation-tutorials/xspice/logic-nand.dzn) | [SPICE text](/v4/examples/simulation-tutorials/xspice/logic-nand.cir) |
| logic-unknown | [TinyCAD drawing](/v4/examples/simulation-tutorials/xspice/logic-unknown.dzn) | [SPICE text](/v4/examples/simulation-tutorials/xspice/logic-unknown.cir) |
