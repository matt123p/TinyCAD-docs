---
layout: default
---

# Simulation and SPICE

TinyCAD can run electronic circuit simulations, plot the results and measure circuit behaviour without leaving the drawing. The integrated engine is **ngspice**. Both the browser and Desktop App include an engine; you do not need a separate ngspice installation for the integrated workflow.

New to simulation? Start with the [guided SPICE course](../SPICE-Tutorial/). For a quick first result, follow the divider steps below. This reference explains the controls and how to interpret their results.

## What a circuit simulator calculates

SPICE means *Simulation Program with Integrated Circuit Emphasis*. A simulator solves a mathematical model of a connected circuit: resistors relate voltage and current, capacitors and inductors store energy, and semiconductor models describe nonlinear behaviour. It can find DC bias, calculate waveforms over time and investigate small-signal frequency response.

A schematic provides **connectivity**; a SPICE model provides **behaviour**; an analysis specifies **what to calculate**. All three must be correct. A realistic picture of an amplifier or processor does not imply that it contains a simulation model. Conversely, a simple triangle or rectangle can contain a useful behavioural model.

Simulation is useful for checking an idea, comparing component values and understanding an unexpected response. Its result depends on the model and conditions you supply. Ideal wires have no accidental resistance or inductance; a generic transistor model is not a full specification for every transistor. Loading, supply impedance, tolerances and temperature appear only to the extent that the chosen models represent them.

## Browser and Desktop engines

| Capability | Browser | Desktop App |
| --- | --- | --- |
| Analogue SPICE, charts, measurements and exploration | Bundled WebAssembly ngspice in a worker | Bundled native ngspice through a helper process |
| Portable modelled Digital logic / Functional blocks / Sensors and interfaces libraries | Yes | Yes |
| Event-driven XSPICE code models | Not supported¹ | Yes, bundled native code-model libraries |
| Chart pop-out windows | Yes | Yes |
| Virtual-instrument pop-out windows | No | Yes |

¹ Browser builds can open a drawing containing saved XSPICE results for viewing. XSPICE execution requires Desktop.

Calculation runs locally in the browser or Desktop engine. Online library search is a separate feature. The current bundled engine is based on ngspice 47; run history identifies the engine/build used for an acquisition. Use the matching upstream manual when checking model syntax or differences between engines.

## Run your first simulation

1. Open **Open Example** in the browser title bar, or **File → Open Example** in Desktop.
2. Select **SPICE tutorial → divider → Open drawing**.
3. Inspect the circuit: a 5 V source supplies two 1 kΩ resistors in series. **OUT** is their midpoint, and the bottom wire is ground **0**.
4. Select the **divider Simulation sheet** in the sheet strip. Its clock-like icon distinguishes it from a schematic sheet. Open **Setup** and leave **Operating Point** selected.
5. Choose **Run**. When it finishes, open **History** and select the new completed acquisition.
6. Open **Data**. The midpoint is **2.5 V**. The source current is **−2.5 mA** because ngspice's voltage-source current reference points into its positive terminal; a supplying source has negative current in this circuit.
7. Change a resistor, then run again. Compare the new result with the original acquisition.

{% include video-player.html src="/v4/videos/simulation/first-simulation.mp4" poster="/v4/videos/simulation/first-simulation.jpg" caption="Open the bundled divider, inspect its setup and run a fresh browser ngspice acquisition. The Data table confirms 2.5 V at OUT and −2.5 mA through the source." %}

The example includes a retained reference acquisition. Seeing a result immediately after opening it does not mean a new calculation has run. **History** separates that saved evidence from the acquisition you create with Run.

## Build a new simulation

1. Place modelled components from **Standard → SPICE essentials**, or use the toolbar's **Simulation → SPICE components** submenu. **More…** opens the full SPICE essentials collection.
2. Connect the pins with wires and give important nodes readable labels. Include a real connection to ground **0**: **Simulation → SPICE → Insert Ground** supplies the correct power symbol.
3. Add a stimulus with **Simulation → SPICE → Insert Source**. Set its voltage/current type and waveform. Add [probes](../Simulation-Sources-and-Instruments/#probes-and-ground) if you want convenient charts.
4. Choose **Simulation → Simulate** to add a **Simulation sheet**.
5. Select an analysis and its settings on **Setup**. Set parameters or attach custom model text if your circuit needs them.
6. Choose signals, run, and inspect the **Simulation charts** panel plus the sheet’s **Data**, **History** and **Diagnostics** views. Correct reported wiring or model errors before relying on the values.

On a Simulation sheet, **Run** and **Stop** appear on the main toolbar. The sheet starts with **Setup**. **History** and **Diagnostics** appear when it has a run; **Measurements** and **Data** appear when numerical data is available. Circuit Explorer tools are below the analysis settings in Setup; add only the tools you need through **Add tools**.

All schematic sheets in a drawing form **one circuit**. Each Simulation sheet owns a separate setup: analysis, parameters, attached models, signal selections, instructions and run history. Adding a second Simulation sheet does not create an isolated second schematic circuit. It lets you investigate the same circuit another way, such as an AC analysis beside a transient analysis.

Use a distinct setup name for each investigation. Duplicating a setup copies its definitions without copying its acquisitions. Only one acquisition runs at a time; sweeps and studies run their cases sequentially.

## Ground, connections and models

SPICE's voltage reference is node **0**. A power symbol or net label with that exact value establishes the reference. The word **GND** alone is an ordinary net name unless you also connect it to node 0. Floating circuits, unpowered model supply pins and unconnected source returns are common first-run problems.

Wires must meet pins at their connection points. Nearby text is not a connection. A wire touching another wire's endpoint or a component socket can create a junction even when you did not intend one. Use [wire connectivity](../Wires/) and the generated netlist to resolve ambiguous drawings.

Each simulated component needs a valid template, model and pin mapping. Use the placed component's **SPICE** properties to inspect them. See [SPICE models and netlist output](../SPICE-output/) before attaching vendor models or adapting a drawing-only symbol.

## Setup, Run and Stop

**Run** starts a new acquisition using the current circuit and setup. Charts can update while data arrives. **Stop** terminates the acquisition and keeps data that has already arrived; the run's status and availability tell you what was retained. It is not a pause/resume control. Start another run to calculate again.

Circuit, model or setup edits make the previous result historical. TinyCAD marks results that need rerunning rather than presenting old values as measurements of the edited circuit. History records the circuit/settings identity, backend, time and outcome. Selecting an earlier acquisition selects earlier evidence; it does not restore the old schematic as an undo operation.

## Save and share results

Save the drawing to retain its circuit, models, setups and acquired results. TinyCAD automatically uses **`.dzn`** when a drawing contains simulation components, settings or results. **Save without results** keeps the simulation definitions and captured scalar/report metadata while omitting numerical waveform arrays; charts requiring those arrays then need a new acquisition.

Retained numerical data is limited to 64 MiB per run and 256 MiB per drawing, with up to 1,000 runs per setup. Long, fine-timestep studies can reach these limits. Export important plots and CSV data, and remove results you no longer need. Save model attachments with the drawing so a recipient does not need your local file paths.

## `.dzn` simulation drawings
{: #dzn-simulation-drawings}

**`.dzn` is TinyCAD’s compressed drawing format, supported by TinyCAD v4 onwards.** It packages the schematic, embedded symbols, Simulation sheets, source settings, attached model text and any retained acquisitions into one ZIP-based file. Numerical waveform data is stored efficiently in the container, including complex AC results. You open and save it through the normal **File → Open**, **Save** and **Save As** commands; no manual extraction is needed.

Ordinary drawings use the XML **`.dsn`** format. TinyCAD automatically chooses `.dzn` when simulation content is present, including sources, probes, virtual instruments, SPICE attributes, ground named `0`, Simulation sheets or results. **Save without results** still uses `.dzn` when it keeps the simulation setup: it removes the large waveform arrays, not the experiment definitions.

Use **Save without results** for a smaller sharing copy when the recipient can run the simulation again. Keep results when you want the recipient to inspect your acquisition, measurements and engine details without rerunning it. A saved acquisition describes the circuit at the time it ran; it is not a substitute for rerunning after an edit.

TinyCAD v3 cannot open `.dzn` files. Changing the extension to `.dsn` does not convert the format or make new simulation records compatible with v3. Keep an original copy when exchanging a design with an older TinyCAD version. A `.cir` export is SPICE text for a simulator; it is different from both TinyCAD drawing formats.

## Continue with the reference

- [Analyses and settings](../Simulation-Analyses/) — DC, transient, AC, noise, transfer function and pole-zero.
- [Sources, probes and virtual instruments](../Simulation-Sources-and-Instruments/) — stimuli, measurement connections and loading.
- [Charts, measurements and Circuit Explorer](../Simulation-Charts-and-Measurements/) — tuning, sweeps, requirements and studies.
- [SPICE models and netlist output](../SPICE-output/) — templates, model files and external simulation.
- [XSPICE and digital simulation](../XSPICE/) — Desktop event-driven and mixed-signal models.
- [Troubleshooting](../Simulation-Troubleshooting/) — diagnose connectivity, models and numerical problems.
- [Tutorials](../Simulation-Tutorials/) — the complete existing SPICE and XSPICE courses with runnable drawings.

For the simulator's own language and device reference, use the official [ngspice documentation](https://ngspice.sourceforge.io/docs.html), [user manual PDF](https://ngspice.sourceforge.io/docs/ngspice-manual.pdf) and [HTML manual](https://ngspice.sourceforge.io/docs/ngspice-html-manual/manual.xhtml). The manual describes ngspice as a whole; TinyCAD exposes the supported integrated workflows described here rather than an unrestricted command shell.
