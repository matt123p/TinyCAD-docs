---
layout: default
---

# SPICE output

SPICE support in TinyCAD v4 works the same way as v3: TinyCAD generates a SPICE text file from your schematic using symbol-level templates.

## What SPICE is used for

SPICE (Simulation Program with Integrated Circuit Emphasis) is a family of circuit simulation formats and tools. A SPICE simulator lets you test circuit behavior before building hardware, for example:

- DC operating points and bias conditions
- Transient (time-domain) behavior
- AC/frequency response
- Parameter sweeps and "what-if" analysis

TinyCAD does not run the simulation itself. Instead, it exports a SPICE file that you run in your chosen SPICE engine.

## SPICE file format and general layout

Different SPICE engines vary slightly, but most SPICE files follow the same overall shape:

1. Optional header/comments
2. Device/model includes and definitions
3. Circuit element lines (one line per component instance)
4. Analysis/control commands
5. End marker (commonly `.end`)

In practice, this means your exported file usually has:

- "Setup" text at the top (models, includes, options)
- A body containing generated components and their connected nets
- "Run" or analysis text at the bottom

TinyCAD's SPICE generation is designed to map directly onto this layout.

## How TinyCAD generates SPICE

TinyCAD uses a string template system on each SPICE-enabled symbol. Each symbol can define:

- **Model template**: inserted for every instance of that component in the schematic
- **Prologue template**: inserted near the top of the file, once per component type
- **Epilogue template**: inserted near the bottom of the file, once per component type

Open these fields from symbol properties in the symbol library editor (SPICE tab).

### Template expansion

Templates can include:

- `%(pin)` for pin/net substitutions
- `$(attribute)` for symbol attribute substitutions

Example model template for a resistor:

`R$(refnum) %(1) %(2) $(NAME)`

If the resistor instance is reference `R3`, connected between nets `7` and `9`, with `NAME=10K`, TinyCAD writes:

`R3 7 9 10K`

`refnum` is handled specially so the SPICE device letter in the template is preserved.

### Prologue/epilogue order and deduplication

- Prologues and epilogues are deduplicated when identical
- Each has a priority (`0` to `9`)
- Prologues are written from low to high priority
- Epilogues are written so priority `0` appears last in the file

This makes it possible to control where setup and analysis text appears.

## Required schematic setup for SPICE export

To generate a valid SPICE file, your drawing must include:

- SPICE-enabled symbols for the simulated circuit
- A special **RUN** symbol
- A net named **0** (SPICE ground)

### RUN symbol

The RUN symbol is a normal TinyCAD symbol with no pins and no model template, but with prologue/epilogue text used to inject simulation control statements.

Set RUN prologue and epilogue priorities to `0` so its text appears at the very start and very end of the generated file.

Use one RUN symbol per simulation circuit.

### The `0` net

SPICE requires ground to be net `0`.

In TinyCAD, create this by naming a connection `0` using either:

- A net label, or
- A power symbol with value `0`

## Creating the SPICE output

After the symbols, RUN node, and `0` net are in place, generate the SPICE output from TinyCAD's SPICE export command in the UI.

Export options are intentionally minimal because run-time behavior is expected to be controlled through your RUN symbol templates.

## Advanced template conditionals

For more advanced symbols, template conditionals are supported (same behavior as v3), including tests for:

- Attribute present/not present
- Attribute empty/not empty
- Pin connected/not connected

Conditional syntax:

- `?( defined(attributename), true string, false string )`
- `?( not_defined(attributename), true string, false string )`
- `?( empty(attributename), true string, false string )`
- `?( not_empty(attributename), true string, false string )`
- `?( connected(pinnumber), true string, false string )`
- `?( not_connected(pinnumber), true string, false string )`

Conditionals can be nested.

- Back to [Advanced](../Advanced/)
- Back to [v4 contents](../CONTENTS/)
