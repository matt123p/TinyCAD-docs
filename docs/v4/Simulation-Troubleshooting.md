---
layout: default
---

# Simulation troubleshooting

Read the acquisition status and diagnostic output before changing settings. Distinguish **a run that failed**, **a valid run with unexpected behaviour**, and **a measurement unavailable from the selected result**. They call for different checks.

## The simulation will not start

| Symptom | Check |
| --- | --- |
| Missing ground / floating circuit | Connect a power symbol or label with value **0**. A separate GND label is not automatically node 0. Check source returns and isolated subcircuits. |
| Missing component model | Use a modelled library part or supply a template and model. Equipment pictures are not simulation models. |
| Missing attributes or invalid pin mapping | Inspect the component's SPICE properties and actual model terminal order. Instance overrides can change the defaults. |
| Model/include not found | Attach model text and its dependencies to the Simulation sheet using matching logical filenames. A local absolute path or web URL is not fetched automatically. |
| Analysis directives in a component | Remove legacy `.op`, `.tran`, `.ac`, `.end` and run-control text from component attributes. The integrated Simulation sheet owns analysis settings. |
| XSPICE model unavailable in browser | Open the drawing in Desktop for a fresh native run. Inspecting saved results in the browser is still possible. |
| Invalid source or range | Check waveform fields, increasing PWL times, start/stop values, sweep direction and positive frequency/time quantities. |

## A result is wrong or the solver does not converge

**Inspect the circuit first.** A line past a wire endpoint or an unused socket can create an accidental connection. Check T-junctions, actual pin tips, net labels and hidden supplies. A current probe or meter placed across a source can short it. Use the generated netlist to establish what the simulator received.

Check model orientation and order: diode polarity, BJT collector/base/emitter, op-amp supply pins and subcircuit pin order. Use meaningful unique references, and confirm that the source reference in a sweep/noise/transfer setup points to the intended source.

Verify DC bias with Operating Point before investigating AC. Ideal source loops, floating nodes, abrupt ideal transitions and unreasonable model parameters can make a circuit difficult or impossible to solve. Add physically justified resistance or finite edge times when those describe the real experiment. Reduce a complex circuit to the smallest failing section before altering numerical options.

Check numeric suffixes: **1M in SPICE text is 1 milli-unit, not one mega-unit**; use `1Meg` for mega. Review temperature, source DC value and transient/AC settings separately. A source's transient amplitude does not automatically become its small-signal AC amplitude.

## The waveform looks incomplete

- Increase transient duration if startup has not settled or the required cycle is outside the run.
- Reduce maximum step to resolve fast edges or narrow pulses. Display zoom cannot recreate missing samples.
- Check the selected setup, acquisition, result plot, legend visibility, units and axis range.
- For AC, use enough points near a narrow resonance and the correct input/output ratio.
- If the run was stopped or failed, inspect actual data availability; a partial trace is not a completed experiment.

## Charts or probe readings are stale

Editing wiring, values, model text or setup requires another **Run**. Saved acquisitions describe their original inputs. History selection does not undo the drawing. A bundled tutorial may open with a retained reference result before you run anything yourself.

Use **Simulation → Show charts**, or Desktop **View → Show Charts**, if the panel is hidden. Removing an automatic probe chart keeps it removed until you explicitly add it again. A chart pop-out returns to the panel when closed.

## A measurement is unavailable

Check its signal binding, unit, window, threshold and explicit initial/final levels. Timing needs complete crossings/cycles. A settling measurement must end inside the declared final band. Cutoff needs the requested crossing and gain reference; bandwidth needs two crossings. A resonance at the sweep boundary is unresolved. Unsupported device current/power vectors are not guessed.

An unavailable requirement is not a pass. Export the conditions and failure status with study reports, and keep nonconverged tolerance cases visible. When a study has no evaluable requirements, it has no yield estimate.

## Saving and reproducing an investigation

Keep the drawing, model attachments, analysis settings, source settings, temperature and relevant acquisition together. If you saved without numerical results or removed them to reduce file size, rerun to restore charts. Retained scalar/report snapshots do not recreate the missing waveform arrays.

A reproducible report states its model assumptions, engine, measurement window and conditions. Compare with the [tutorial's expected values](../Simulation-Tutorials/) and the official [ngspice manual](https://ngspice.sourceforge.io/docs.html) when isolating a simulator-language issue.
