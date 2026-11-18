---
layout: default
---

# Simulation analyses and settings

Choose an analysis in the **Setup** tab of a [Simulation sheet](../Simulation/). Select it according to the question you want to answer. A time-domain sine wave and an AC frequency sweep are different experiments, even when they use the same source symbol.

| Analysis | Question | Main output |
| --- | --- | --- |
| **Operating Point** | What are the DC bias voltages and currents? | Scalar values |
| **Transient** | What happens after a change, or over repeated cycles? | Signals against time |
| **AC** | How does a small signal change with frequency? | Complex signals against frequency |
| **DC sweep** | How does DC behaviour change as one independent source varies? | Signals against source value |
| **Noise** | What noise reaches the chosen output? | Spectral and integrated noise plots |
| **Transfer Function** | What is the small-signal DC transfer from a named source? | Gain and input/output resistance |
| **Pole-Zero** | Where are the poles and zeros of the configured transfer? | Complex pole/zero results |

## Operating point

Operating point finds a steady DC solution. Ideal capacitors are open circuits and ideal inductors are shorts at DC. Nonlinear devices, such as diodes and transistors, are solved at their bias conditions. Check this analysis before attempting a transistor amplifier's frequency response: an incorrectly biased transistor will be linearised around the wrong state.

Use **Data** for node voltages and branch currents. Voltage is relative to ground 0. Current sign follows the device's declared terminal order; a negative supply current can simply mean that it is delivering power. The [DC tutorial](../SPICE-Tutorial-02/) works through voltage, current and power.

![Scalar voltage and current results from the divider's fresh operating-point run](../images/simulation/simulation-data.png)

## Transient: behaviour over time

Set **Duration** long enough to include the event and the part of the response you need to measure. Set **Maximum step** small enough to resolve the fastest significant feature. For a pulse, that may be its edge rather than its repetition period. A smooth-looking display cannot recover transitions the solver did not resolve.

For a charging RC circuit, the time constant is `τ = R × C`. About five time constants shows most of a first-order settling response. For ripple or RMS, simulate enough cycles to reach a steady condition and measure a later window rather than including startup unintentionally.

The solver uses adaptive timesteps. Maximum step limits its step size; it does not promise an evenly spaced sample grid. Measurement algorithms account for actual sample times. Chart zoom changes the display, not the acquisition timestep.

By default, a transient run first finds a DC operating point. The initial-conditions option that skips this step corresponds to SPICE **UIC**. Use it deliberately when the specified initial state is part of the experiment; it is not a general repair for an incorrectly connected circuit. See [RC charging](../SPICE-Tutorial-04/) and [rectification and ripple](../SPICE-Tutorial-06/).

## AC: small-signal frequency response

AC analysis first finds the operating point, linearises nonlinear devices there, and calculates the response to a small sinusoidal perturbation. It does **not** sweep a large transient sine through clipping. Use transient analysis for clipping, distortion and large-signal excursions.

Set start and stop frequencies and points per decade. A logarithmic sweep is useful when investigating several orders of magnitude. Increase frequency resolution around a narrow resonance or closely spaced corners.

Set the source's **AC amplitude** and phase separately from its transient waveform settings. An AC amplitude of **1 V** with phase **0°** makes a single-input voltage transfer easy to interpret. A transient sine amplitude by itself does not enable an AC stimulus. For a general input, calculate the complex ratio `V(out) / V(in)`; output voltage alone is not always gain.

![AC sweep settings for the bundled RC filter](../images/simulation/ac-setup.png)

For a first-order low-pass with R = 1 kΩ and C = 1 µF, `fc = 1 / (2πRC) ≈ 159.15 Hz`. At that frequency, a unity-passband filter has gain about 0.707, or −3.0103 dB, and phase about −45°. The [filter tutorial](../SPICE-Tutorial-05/) shows magnitude, dB and phase.

![Actual AC results from a fresh browser run of the RC example](../images/simulation/ac-charts.png)

## DC sweep

Choose the **source reference**, such as `V1`, and enter start, stop and step values. The reference identifies an independent voltage/current source; it is not a net label. Choose a step that moves from start toward stop.

A DC sweep solves a succession of bias conditions. It is useful for a diode I–V curve or an amplifier's static transfer curve. It does not model how quickly the source changes or charge stored during a ramp. For that, supply a time-varying waveform and use transient analysis.

This analysis differs from a **Circuit Explorer one-variable sweep**, which repeatedly runs a selected analysis while changing a numeric component or setup parameter. For example, sweep R1 through five values while repeating an AC analysis to compare filter corners.

## Noise

Specify the input source and output/reference nodes, then the frequency range and resolution. The output is a voltage difference; check the chosen reference. Noise analysis uses small-signal noise contributions around the operating point. It needs noise-capable device models; an ideal noiseless behavioural block is not automatically given a physical device's noise spectrum.

Select the correct result plot: **spectral** density and **integrated** noise are different quantities. Respect the plotted units; an amplitude density in V/√Hz is not a voltage until integrated over a defined bandwidth. See [design investigations](../SPICE-Tutorial-10/).

## Transfer function and pole-zero

**Transfer Function** (`.tf`) uses an explicitly named independent source and an output port to calculate small-signal DC gain and input/output resistance. It is not the full frequency sweep of an AC analysis. Check the source reference and whether the output is measured relative to the correct node.

**Pole-Zero** analysis investigates the configured small-signal transfer's poles and zeros. The port and transfer choices matter: it is not a search for every possible behaviour of a schematic. Interpret the complex-plane results alongside AC and transient results rather than treating them as a substitute for a correctly biased model.

## Temperature, units and parameters

Setup temperature is in **°C**. It affects devices whose models implement temperature dependence; it does not add thermal physics to an ideal part. Named setup parameters let you reuse a numeric value in compatible SPICE expressions and exploration bindings.

Numeric controls accept engineering notation such as `5ms`, `10us` and `1kHz`. In **SPICE text**, suffixes follow SPICE rules: `k` is kilo, `u` micro, `n` nano and **`m` or `M` means milli**. Write **`Meg`** for mega, such as `1Meg` for one megohm. Do not assume `1M` means one million.

A raw time constant or corner-frequency calculation is a useful check. It is not a substitute for considering loading: a generator's output resistance, meter input resistance or following stage can change the actual response.

For complete analysis syntax and model behaviour, refer to the official [ngspice manual](https://ngspice.sourceforge.io/docs.html). For TinyCAD's controls, continue with [sources and instruments](../Simulation-Sources-and-Instruments/) or [charts and measurements](../Simulation-Charts-and-Measurements/).
