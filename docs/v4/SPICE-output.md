---
layout: default
---

# SPICE models and netlist output

TinyCAD supports both [integrated ngspice simulation](../Simulation/) and SPICE netlist export for an external simulator. Both depend on the component's SPICE templates and pin mapping. A symbol's appearance alone does not describe its electrical behaviour.

## Models, templates and pin order

A resistor can use a native SPICE element. A transistor may need a `.model`; a more complex device can use a `.subckt`. A placed symbol's SPICE settings connect its physical pin numbers to the terminals expected by that model. Inspect the **SPICE** tab in symbol properties; instance attributes can override symbol defaults.

Templates use:

- **`%(pin)`** for the connected net of the specified TinyCAD pin number.
- **`$(attribute)`** for a component attribute.
- **`refnum`** as a specially handled reference suffix so the template's SPICE device prefix is preserved.

For example, a resistor template may be:

```text
R$(refnum) %(1) %(2) $(NAME)
```

For reference R3, nets 7 and 9, and NAME `10k`, it produces:

```spice
R3 7 9 10k
```

The underlying model-template attribute is **`$$SPICE`**; prologue text is **`$$SPICE_PROLOG`**. A template can reorder pins: do not assume schematic pin 1 is SPICE's first terminal. A BJT element expects **collector, base, emitter**. If a symbol numbers base 1, emitter 2 and collector 3, the template must substitute `%(3) %(1) %(2)` in that order. A subcircuit uses the order declared on its `.subckt` line, which can differ from a device package.

Read the actual symbol and model together. Supply pins, hidden pins, transistor variants and op-amp models are frequent sources of mismatches. A generic 741-style behavioural model is not a complete manufacturer-qualified 741 macro-model.

## Use a model in integrated simulation

1. Start with a modelled symbol from a [bundled simulation library](../Bundled-Libraries/#libraries-with-simulation-models), or add an appropriate SPICE template to a custom symbol.
2. Confirm that each template references existing attributes and the correct pins.
3. On the Simulation sheet, attach any required model **text** and give attachments logical filenames. Typical text-file extensions are `.lib`, `.cir` and `.mod`.
4. Resolve `.include` and `.lib` dependencies through those attachments. Keep required definitions with the drawing.
5. Connect ground **0**, set the analysis on **Setup**, then run and inspect diagnostics.

The managed engine does not fetch a model from a website or read an arbitrary absolute path on your computer. Supply the dependencies explicitly. It also does not execute arbitrary shell commands, `.control` scripts, startup files, externally supplied native modules or file-backed device dependencies. A vendor model using simulator-specific syntax may need adaptation; “SPICE compatible” does not guarantee identical dialects.

TinyCAD's integrated Simulation sheet owns the analysis commands and final `.end`. **A legacy RUN symbol is not required.** Move the old analysis settings into Setup and delete a legacy RUN symbol when adapting an export-oriented drawing. Remove analysis statements and `.end` from any remaining component attributes; those commands are rejected in the integrated component-template path.

Check a vendor model's licence before redistributing it. Inspect its documented pin order, units, model assumptions and supported simulator. Keep the manufacturer's documentation alongside your modelling notes.

## Inspect and export a SPICE netlist

A netlist is a text description of devices and the nodes connecting them. Ground is named `0`. Typical content has model/setup definitions, component lines, analysis directives and a final `.end`. Useful checks include:

- Does each component reference the intended model and value?
- Do connected pins share the expected net names?
- Are the supply/return nets present, including 0?
- Is the semiconductor or subcircuit terminal order correct?
- Are all model definitions and included text available to the selected engine?

For the integrated setup, open **Simulation sheet → Diagnostics → Generate circuit text**, inspect the expanded deck, then choose **Export circuit** to save `simulation.cir`. This includes the managed analysis.

For legacy template-based export, use the separate **Generate Spice NetList** command in the browser File menu or Desktop Tools menu. It is separate from the PCB-oriented [Generate Netlist](../Generate-Netlist/) dialog. The exported analysis/run directives must suit the external engine. A companion tutorial `.cir` file can also be inspected directly. **Open a `.dzn` drawing in TinyCAD; a `.cir` netlist is not a TinyCAD drawing file.**

### Legacy export templates

The export-oriented template system supports a per-instance model body plus per-symbol prologue and epilogue. Identical prologues/epilogues are deduplicated. Priorities range from 0 to 9: prologues run low to high; epilogues are arranged with priority 0 last.

Older drawings may use a no-pin **RUN** symbol whose prologue/epilogue supplies analysis and ending directives for an exported deck. This is an export convention, not an instruction to add RUN to an integrated Simulation sheet. Review those statements before running the exported file in a separate simulator.

### Conditional templates

For export-oriented/custom templates, the supported conditional forms include:

```text
?( defined(attribute), true text, false text )
?( not_defined(attribute), true text, false text )
?( empty(attribute), true text, false text )
?( not_empty(attribute), true text, false text )
?( connected(pin), true text, false text )
?( not_connected(pin), true text, false text )
```

Conditionals can be nested. Inspect the expanded deck rather than judging a complex template only from its source text.

## Numerical notation and portability

In SPICE text **`M` is milli**, just like `m`; use **`Meg`** for mega. `1k`, `100n` and `10u` are common values. Use explicit model parameters and references instead of relying on a simulator's unspecified defaults.

External ngspice command-line documentation covers a broader environment than TinyCAD's integrated engine. For complete element syntax, models, analyses and compatibility notes, see the official [ngspice documentation](https://ngspice.sourceforge.io/docs.html) and [user manual](https://ngspice.sourceforge.io/docs/ngspice-manual.pdf). Continue with [how TinyCAD implements SPICE](../SPICE-Tutorial-11/) for a worked explanation of engines, symbols and netlists.
