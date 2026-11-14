---
layout: default
---

# Charts, measurements and Circuit Explorer

After a [simulation run](../Simulation/), use charts to explore the waveform and named measurements to record repeatable quantities. Circuit Explorer adds temporary tuning, repeated runs, requirements and study reports.

Open the **Simulation sheet → Setup**, then scroll to **Circuit Explorer**. Use **Add tools** to add Measurements, Tune / sweep, Requirements, DC overlay or Analysis lab when needed. Configured tools appear in the list on the left. **Hide tool** hides its controls while keeping its saved settings. Charts remain in the separate right-hand panel.

## Show and arrange charts

In both browser and Desktop, choose **Simulation → Show charts** on the toolbar. Desktop also provides **View → Show Charts**. Drag the left edge of the right-hand **Simulation charts** panel to resize it. Select a setup and acquisition; use **Run** or **Stop** without leaving the schematic.

Probe charts are added automatically. Without probes, a setup receives an output chart. Use **Add chart** for another probe or a custom view, then **Choose signals**. Chart titles are editable. A multi-plot analysis, such as noise, has a result-plot selector.

Click legend entries to hide traces. Voltage, current and other units use labelled axes; do not read a current from the voltage scale. Complex AC data can display real/imaginary parts, magnitude, dB or phase. Output magnitude in dB is not automatically a transfer gain unless the input is appropriately normalised.

Use wheel/pinch to zoom, drag to pan, **Shift-drag** for a region and **Fit** to restore the view. Numeric cursors inspect sample positions. Large results use reduced display data for a responsive overview; zooming refines that view. Compatible pinned baselines appear as dashed overlays.

### Pop out and export

**Pop out chart** opens an independent window in either product. Several charts can be detached. Closing a pop-out returns it to the panel; × on a docked chart removes the chart. Detached charts share the current result data and do not start separate simulations.

**Download CSV** exports all retained samples for the selected signals and their scale, including imaginary values. It is independent of display zoom or sampling. Main charts also offer a **PNG** download. Keep the selected setup, acquisition and units with a report so another reader knows which experiment the data describes.

## Try the prepared RC investigation

Download [RC low-pass.dzn](../examples/simulation/rc-low-pass.dzn), open it through **File → Open**, and run it. This companion file is separate from the bundled tutorial example named **rc-ac**. It includes prepared measurement, requirement and tuning definitions.

With R1 = 1 kΩ and C = 1 µF, the nominal corner is about 159.15 Hz. **Measurements** includes cutoff, gain at 100 Hz and phase at the ideal corner; **Requirements** checks cutoff against 150–170 Hz.

![Circuit Explorer tuning controls in the RC companion drawing](../images/simulation/explorer-tuning.png)

## Tune without changing the saved circuit

In **Tune / sweep**, select a component and a numeric property, then **Add tuning control**. Selecting a schematic component preselects it in the chooser. You can also bind supported source/instrument settings and named setup parameters. Arbitrary text, expressions and model-file contents are not slider targets.

Controls support units, bounds, linear/logarithmic scales and E12/E24/E96 preferred-value snapping. After a change, a run is scheduled after about 500 ms. Temporary values are separate from the saved component values.

- **Undo tuning** returns to the preceding temporary override.
- **Reset** restores the original values and acquisition.
- **Apply** writes the overrides into the drawing as one undoable edit.

A numeric property only affects the circuit when the component's SPICE template actually uses it. Do not assume that changing an unused attribute changes the model.

### One-variable sweeps

Expand **One-variable sweep** and choose a control. Use 2–100 linear/logarithmic points or 1–100 explicit values, separated by spaces or semicolons. **Run sweep** runs the selected analysis for each value. **Cancel** stops scheduling more cases and preserves completed results.

The RC companion prepares 1 kΩ, 2.2 kΩ, 4.7 kΩ, 6.8 kΩ and 10 kΩ. Their ideal cutoffs are approximately 159.15, 72.34, 33.86, 23.41 and 15.92 Hz. Compare overlays or a named metric against the parameter value. This is different from the [DC sweep analysis](../Simulation-Analyses/#dc-sweep), which varies an independent source within a DC analysis.

Sweep definitions, values, units, run status and captured metrics are saved in `.dzn`. **Saved sweep** revisits a group. Removing raw results removes waveform overlays, but captured scalar tables and report metadata can remain. Up to 100 sweep groups are retained, subject to the normal acquisition and data limits.

## Define named measurements

In **Measurements**, add a name, select a signal/component and expand its settings. Set a meaningful time/frequency window and any required levels or references. Component/probe bindings use sheet identity plus reference so they can survive reopening.

![Prepared cutoff, gain and phase measurements](../images/simulation/explorer-measurements.png)

| Measurement | Interpretation |
| --- | --- |
| Value, minimum, maximum, peak-to-peak | A signal value at a position, or extrema within the chosen window |
| Mean, RMS, ripple RMS | Time-weighted transient quantities; ripple RMS removes the mean |
| Integral | Area over time; integrating watts gives joules |
| Rise/fall time | First complete 10–90% transition between declared low/high levels |
| Period, frequency, duty cycle, pulse width | First complete cycle/pulse using an explicit threshold or the window's midpoint level |
| Delay | First output rising crossing minus first reference crossing, at the same threshold |
| Overshoot/undershoot | Excursion relative to declared initial/final levels and step magnitude |
| Settling time | Last entry into the final-value tolerance band, measured from window start |
| Time constant | First crossing of initial + (final − initial) × (1 − 1/e), measured from window start |
| AC gain/phase | Complex output/input ratio at the chosen frequency |
| Cutoff/bandwidth | Half-power crossings, −3.0103 dB relative to the chosen gain reference |
| Resonance | Largest interior magnitude peak; a boundary maximum is not a resolved resonance |
| Additional response metrics | Passband ripple, stopband attenuation, port-impedance magnitude and group delay |

Transient integration respects unequal timesteps and interpolated window endpoints. RMS includes DC; ripple RMS removes it. Delay can be negative when the output crossing precedes the reference. Timing metrics need enough of the relevant transition or cycle inside the window.

Declare initial/final levels for step metrics. A wrong final level makes settling and overshoot misleading. An unsettled final sample, missing crossing, ambiguous binding, mismatched unit or invalid window produces **unavailable**, not a fabricated zero.

For cutoff, use an explicit linear reference gain or **peak**. A unity reference is suitable for the simple RC filter, but an amplifier with gain 20 needs a different reference. Bandwidth requires two valid crossings; frequency interpolation is logarithmic. An arbitrary peak at the edge of the sweep does not establish a resonance.

## Requirements and DC overlays

Use **Requirements** to test a named measurement against **at least**, **at most**, or an inclusive **between** range. Units must match. Outcomes are **pass**, **fail** or **unavailable**; an unavailable metric is not a passing requirement.

![The RC cutoff requirement with an explicit acceptable range](../images/simulation/explorer-requirements.png)

Select an available measurement to inspect its evidence and applicable schematic highlighting. Keep measurement definitions, windows and thresholds with exported results. General two-way probe highlighting is not complete for every type of signal or model.

The DC schematic overlay needs a fresh, completed operating-point acquisition. Voltage is relative to 0; current direction follows the configured terminal order. Consumed power is positive, so a supplying source can have negative power. Ideal resistor current can be derived from V/R; unsupported device currents are omitted rather than invented.

## Analysis lab

![Analysis lab workflows in Circuit Explorer](../images/simulation/analysis-lab.png)

### Frequency and amplifier response

Choose input/output, frequency range and readout frequency. Run AC to inspect gain, phase, cutoff, bandwidth, resonance, band-pass Q and group delay. Band-pass Q means `f₀ / half-power bandwidth`. Transfer-function calculations use an explicitly named stimulus. Port impedance needs a deliberate voltage/current test configuration; an arbitrary node ratio is not a loop-gain measurement.

### Tolerance and corners

A Monte Carlo study repeats runs with configured component distributions: bounded uniform ± tolerance or an unbounded normal distribution specified by standard deviation. Set an unsigned random seed and 2–100 cases. Reusing the seed and setup makes the sampling repeatable. Fully positively correlated groups share a standardised draw and must use one distribution type.

Non-positive sampled physical resistance, capacitance, inductance or frequency values are failed cases. Inspect failures instead of silently excluding them. Mean, sample standard deviation and histograms describe the sampled results, not every possible manufactured part.

Corner search enumerates up to six independent variables, or 64 corners. It ignores Monte Carlo correlation groups. The reported worst observed result is not proof of a global worst case between corners. Yield is illustrative under the entered model/distribution assumptions; a study with no evaluable requirements has no yield estimate.

### Test cases

Capture an analysis, parameters, trace/measurement/requirement definitions and bindings as a case. Give cases different temperatures or parameter, stimulus and load overrides, then run the suite. Cases share the **current schematic and models**; they are not independent historical circuit revisions. Each run records its input identity.

JSON reports contain conditions, outcomes and study history. Studies run sequentially and can be cancelled; failed or nonconverged cases remain visible. Definitions, seed, case conditions and group references persist in `.dzn`. The last 100 study groups are retained within normal result limits.

### Power, efficiency and stress

Choose supported component power signals and explicit limits for peak voltage, current or power. Mean/RMS/Integral measurements provide average power, current RMS and energy. Efficiency needs a correctly signed supplying-input boundary and a consuming useful-load boundary. Unsupported or ambiguous device currents make the result unavailable.

Small-signal AC is not a large-signal stress test. A numeric limit entered in TinyCAD does not add a package thermal model, pulse rating or protection mechanism. Use transient conditions and models appropriate to the question, and keep their assumptions with the report.

## Current limits

The implemented workflows do not include FFT/harmonic distortion analysis, automatic fault injection, unrestricted multidimensional sweeps, automatic optimisation or cooperative Live/Pause. Use the completed/stopped/failed run status and actual data availability when reviewing results. See [troubleshooting](../Simulation-Troubleshooting/) when a metric or acquisition is unavailable.
