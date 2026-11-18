---
layout: default
---

# Sources, probes and virtual instruments

The toolbar's **Simulation** menu contains **SPICE** insertion tools and **Lab Equipment**. Choose a tool and place it on a schematic. Right-click or press Escape to cancel placement. Tools selected from a Simulation sheet switch to a schematic for placement; their definitions are embedded in the drawing.

## Independent sources

Choose **Simulation → SPICE → Insert Source**. Its editor opens before placement. Select voltage or current and a signal type. Select the body of a placed source to reopen its bottom editor.

| Signal type | Useful for | Settings to check |
| --- | --- | --- |
| DC | Bias and a steady supply | DC value and polarity |
| Sine | A periodic analogue input | Offset, peak amplitude, frequency, phase, delay and damping |
| Square/pulse | Switching and timing | Low/high levels, delay, rise/fall time, pulse width and period |
| Triangle | A repeating ramp | Levels, period and ramp timing |
| Piecewise-linear (PWL) | A prescribed sequence | Increasing time/value pairs, one pair per line |
| Exponential | A shaped transition | Levels, delays and time constants |
| FM | Frequency modulation | Carrier and modulation settings |

![The sine source editor and waveform preview](../images/simulation/source-settings.png)

The preview reflects the numerical waveform settings. Use it to catch an unexpected offset, peak or timing before running. Invalid settings prevent startup. A source's icon changes with its waveform, and a current source retains its direction arrow.

**AC amplitude and phase are separate settings** for small-signal frequency analysis. They are independent of transient sine amplitude. Source DC bias and the transient waveform must also be chosen deliberately. See [analyses](../Simulation-Analyses/) and [the source tutorial](../SPICE-Tutorial-03/).

New sources and probes use a compact 8 mm terminal span. Older large controls offer **Use compact symbol** in their bottom editor. The conversion keeps the first terminal anchored and extends existing connections to the resized terminals as one undoable edit. Inspect those connections after changing size.

## Probes and ground

| Tool in **Simulation → SPICE** | Connection | Meaning |
| --- | --- | --- |
| **Insert Probe** | One tip on a net | Voltage relative to ground 0 |
| **Insert Differential Probe** | + and − on two nets | `V(+) − V(−)` |
| **Insert Current Probe** | In series with a branch | Current from + toward − |
| **Insert Ground** | On the circuit's reference net | Connects the Earth power symbol with value 0 |

Probe/ground insertion snaps to a wire and splits it at the connection point. Check the actual tip location and polarity. A current probe is an **ideal zero-volt voltage source**: it must be in series. Putting it across a supply creates a short circuit. Remove or break the original parallel wire when inserting a series measurement.

Probe panels select the acquisition and display mode. Operating-point signals can show scalar readings; complex AC results can show real, magnitude, dB and phase views. If the required result is absent or belongs to an edited circuit, the panel explains why it is unavailable or needs rerunning.

### Controlled sources

**Insert Controlled Source** provides a voltage-controlled voltage source (**E**) or voltage-controlled current source (**G**). Output pins are +/−, numbered 1/2; control pins are C+/C−, numbered 3/4. Connect both sides of the control input and check the transfer characteristic in the editor. A control port is not an output supply terminal.

## Virtual laboratory equipment

Choose these from **Simulation → Lab Equipment**. They are operational models with acquisition controls. The similarly named pictures in **Standard → Test & Measurement** are for physical bench-layout drawings and do not perform simulation measurements.

For a ready-wired circuit, download [Virtual laboratory.dzn](../examples/simulation/virtual-laboratory.dzn) and use **File → Open**. This is a companion demonstration file, rather than a named entry in the bundled example browser.

### Oscilloscope

The scope has two differential channels: **1 A+**, **2 A−**, **3 B+**, **4 B−**. Connect each negative input as well as its positive input. The default input load is **1 MΩ**; it can affect a high-impedance circuit.

Use time/div and volts/div with the ten-horizontal by eight-vertical division display. Trigger modes are **Auto**, **Normal** and **Single**. **Acquire** requests ten time divisions of transient data with maximum step approximately time/div divided by 100. Changing the display scale after a run does not create a new acquisition or resolve missing edges.

AC coupling removes the time-weighted mean from the displayed signal; it is not a physical analogue high-pass input model. GND coupling displays zero while the instrument load remains connected. Scope time/level controls help examine data; they do not turn an undersampled run into a valid timing measurement.

### Multimeter

Use **VΩ and COM** for voltage or resistance, and **A and COM** for current. Current measurement must be in series. The default voltage input is **10 MΩ**; current mode uses a **1 Ω burden resistance** and a zero-volt sensing source. Changing mode therefore changes circuit loading and requires a fresh run.

DC displays the relevant steady/mean quantity. AC uses time-weighted RMS with DC removed. An out-of-range value shows **OL**. These are modelled instrument behaviours, without fuse or thermal failure simulation.

Resistance testing is a separate temporary, unpowered test. Independent sources are suppressed and instrument connections are disconnected for the test. The supported network is R/C/L and probes: capacitors are open at DC and inductors are shorts. Active components or unsupported templates make the resistance test unavailable. Do not interpret it as an in-circuit resistance reading of an arbitrary powered electronic device.

### Function generator

The generator provides sine, pulse/square, triangle and PWL waveforms with amplitude, offset, frequency and timing controls. Its preview is the **open-circuit** waveform. Its default **50 Ω output resistance** means a connected load can reduce terminal amplitude.

Output Off approximates an open port with **1 TΩ** leakage. Small-signal AC amplitude remains separate from transient amplitude. Check whether the required amplitude is peak, peak-to-peak or RMS before comparing the programmed waveform with a measured value.

### Bench supply

Set voltage, current limit, output resistance, enable and optional ramp time. The model uses a smooth behavioural current limit and finite resistance; the panel indicates measured V/I and **CV/CC** operation. Reducing current limit below a load's demand reduces the supplied voltage.

It can source or sink within the same limit. This is not a vendor switching-supply model or a thermal model. Disabled output uses a 1 TΩ leakage approximation. Ramping affects transient analysis; the DC operating point uses the final programmed voltage.

Generator and supply numeric properties can be bound to [Circuit Explorer](../Simulation-Charts-and-Measurements/) for temporary tuning or test conditions. Desktop can pop instrument panels into separate windows; chart pop-outs are available in both products.

## Loading is part of the experiment

A perfect voltage probe and a loaded scope input do not produce the same circuit. Before comparing results, account for generator impedance, meter burden, scope input loading and shared returns. Use a differential measurement when neither end of the signal is ground. If the run fails after adding an instrument, inspect its wiring and mode before changing solver settings.
