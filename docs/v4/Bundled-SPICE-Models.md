---
layout: default
---

# Bundled SPICE models

TinyCAD includes an offline catalog of SPICE models. Use a bundled model to simulate a component with ngspice, compare candidate devices, or start a Custom model from a known working definition. Models are available in both TinyCAD Web and the Desktop App. The picker runs locally after the application has loaded.

## Start with a modelled symbol

Open **Standard → SPICE essentials** in the side panel, or use **Simulation → SPICE components** on the toolbar. Choose **More…** to browse the full symbol library. All 29 SPICE essentials symbols have a bundled model and a preset pin mapping. Most use a **TinyCAD Basic** model. The LM358 and LM324 use complete OpenJellyBean package models.

Place a symbol, select it on the drawing and open **SPICE** in the bottom **Symbol** panel. **Bundled** shows the linked model and its source. Ordinary symbol fields such as **Value**, **Wiper** and **Initial Voltage** still control TinyCAD Basic models that use those fields. For example, set a resistor's **Value** to `10k` to simulate 10 kΩ with its default **Ideal resistor** model.

![The placed symbol’s SPICE tab shows Bundled selected and links to the TinyCAD Basic yellow LED model.](/v4/Images/simulation/bundled-spice-properties.png)

To try this in a complete circuit, choose **Open Example → SPICE tutorial → divider** and select one of the resistors. Its **SPICE** tab shows the **Ideal resistor** link. Change the resistor value, then run the example's Operating Point setup again. The retained result represents the circuit before your edit.

## Choose and attach a model

1. Open the symbol's **SPICE** tab. Select **Bundled**, then **Find SPICE model…**.
2. Enter a part number, alias, model ID or device family. Clear the search field to see the available choices for that symbol.
3. Select a row. The details below the table show the model description, source, terminal order and any adjustable parameters. Expand **View SPICE definition** to see the instance template and any model cards or subcircuits it uses. Select the source link for the original definition or the upstream archive and member filename.
4. Review the pin mapping and set any parameter overrides. Choose **Select SPICE model**. In a drawing, this changes the selected placement and can be undone.

![Find SPICE model dialog for a yellow LED. The selected circsim model shows its source and verified anode and cathode pin numbers.](/v4/Images/simulation/bundled-spice-picker.png)

**SPICE essentials symbols** list only models with verified mappings for that symbol's pin layout. Some symbols have just the Basic default. For example, a yellow LED offers its Basic model and the circsim yellow LED. A stock NPN transistor can use the generic model or an alternative such as OpenJellyBean's `2N3904_OJ`, with the collector, base and emitter already mapped to pins 3, 1 and 2.

**Other symbols**, including older placements without the library identity, can browse the full catalog for their edition. Review the suggested matches and select a distinct physical pin for each model terminal. Include supply pins, even when hidden on the schematic. Use the symbol's verified package pinout and the model's terminal order. Leave physical pins that the model omits outside the mapping. A temporary symbol with the wrong number or function of pins needs correction before it can represent the device.

![Manual pin mapping for a 741 symbol in a custom library, with the five circsim LM741 terminals assigned to physical pins 3, 2, 6, 7 and 4.](/v4/Images/simulation/bundled-spice-pin-mapping.png)

The example maps the circsim `LM741` model to a 741 symbol using pins 3 (non-inverting), 2 (inverting), 6 (output), 7 (positive supply) and 4 (negative supply). The model omits offset-null pins. For a multi-part library symbol, TinyCAD offers the pin numbers shared by the parts that will use the template. Choose a complete package model when your symbol and simulation need the full package.

If the picker shows **No models match this search**, clear the search or try a broader term. A tagged symbol may offer only its verified choices. To use another model, check the device's pinout and use an appropriate [custom library symbol](../Custom-symbol-libraries/) or a Custom definition.

## Choose the right level of detail

| What you want to learn | Which model to start with |
| --- | --- |
| Check a divider, an RC time constant, or basic circuit behaviour | Use TinyCAD Basic. Ideal models are useful when parasitics and tolerances are outside the question. |
| Explore bias, gain, diode forward drop, or switching with a particular part | Search for the exact part or a documented equivalent. Review the description and model assumptions at your voltage, current, temperature and frequency. |
| Explore a substitute when an exact model is unavailable | Use a documented drop-in candidate or a generic model for the device family. Verify the package pin functions, supply polarity and operating limits separately. Record which behaviours you are approximating. |
| Investigate a limit such as noise, input common-mode range, thermal drift, or a process corner | Check whether the model explicitly covers the effect. Use a suitable manufacturer or process model as a [Custom definition](../SPICE-output/#models-templates-and-pin-order) when needed. |

Bundled models describe typical behaviour. For example, the circsim 741 represents nominal gain, bandwidth, slew rate, offset and supply current. It uses a high-impedance input stage. The circsim yellow LED models electrical behaviour around a fit of 2.10 V at 20 mA. Light output, device ratings and worst-case behaviour need their own evidence.

## Set a library default or edit a Custom copy

- **For future placements**, open an editable `.tclib` library and select the symbol. Open its **SPICE** tab and use the same model picker. Save the library. The chosen definition becomes the default for future placements from that entry. Existing placements keep their saved definitions.
- **For a single placement**, select it on your schematic and change its **SPICE** properties. This is useful for comparing two models side by side in the same drawing.
- **To edit the model text**, select **Custom** on a linked symbol. TinyCAD copies the instance template and any required definitions into editable fields with the mapped pins. For models with definitions, the local copy uses names scoped to the placement so it can run alongside the bundled original. For an ideal resistor, the instance template is sufficient on its own.

Switching back to **Bundled** restores the linked model. Switch to **Custom** again to retrieve your edits. The selected mode determines which definition is used, and both settings survive save and reopen. **Remove attached model** removes the link and restores the previous template if one was saved.

A supported [KiCad SPICE import](../Importing-Symbols-from-KiCAD/#import-spice-models-with-symbols) appears under **Custom**. If you want to keep that imported definition for future placements, import into an editable library and save it.

## Run, save and share

1. Connect the mapped pins and supplies, including a connection to SPICE ground **0**.
2. Create or open a [Simulation sheet](../Simulation/), select the analysis in **Setup**, and choose **Run**. The active bundled models are resolved automatically. Use **Setup → SPICE models** to attach extra files required by a Custom model.
3. Open **Diagnostics → Generate circuit text** to inspect the expanded instance lines and model references. Check the pin order and supply nets if a result looks wrong.

Drawings retain each model's revision, mapped pins and parameter settings, with one saved copy of each referenced pack. Save the drawing to share the circuit and its model definitions. Desktop-only XSPICE models still require the Desktop engine to run. **Generate Spice NetList** embeds the referenced bundled definitions in SPICE output. See [SPICE models and netlist output](../SPICE-output/#inspect-and-export-a-spice-netlist) for export options and the difference between a simulation deck and a drawing.

## Catalog contents and sources

TinyCAD Web includes 97 catalog models. The Desktop App adds three definitions that require native XSPICE. Use the link on each model's details for the precise model source. TinyCAD ships the licence notices with the packs, and those notices are also available in **About TinyCAD**.

| Pack | Models | Examples |
| --- | ---: | --- |
| TinyCAD Basic | 20 | Ideal resistors, capacitors and inductors, independent sources, potentiometer and transformer templates, generic semiconductors, 741, and resonators |
| OpenJellyBean | 42 | BJTs, MOSFETs, JFETs, signal and Schottky diodes, zeners, LEDs, op-amp channels and packages, and a potentiometer |
| circsim | 15 | LM741, yellow LED, LM393, LM339, NE5532, NE555, optocouplers, regulators and power MOSFETs |
| Spice_Files | 14 | Generic diodes and LEDs, rectifier bridge, optocouplers, switch, relay, 16 MHz crystal and 10:1 transformer |
| ngspice special models | 1 | ICL8038 waveform generator |
| ngspice special models (Desktop) | 3 | LTC1044HV voltage inverter, LR8 regulator and its helper op-amp |
| SkyWater SKY130 | 1 | Nominal integrated PNP transistor with a substrate terminal |
| GlobalFoundries GF180MCU | 3 | Nominal MIM capacitors at 1.0, 1.5 and 2.0 fF/µm² |
| IHP SG13G2 | 1 | Nominal pnpMPA integrated PNP transistor |

The foundry entries are selected nominal models. Full process kits provide separate model trees, corners and simulator setup. See the [catalog reference](https://github.com/matt123p/TinyCADv4/blob/main/docs/bundled-spice-models.md#catalog-sources) for source inventory, licences and verified alternatives for SPICE essentials.

## Ask the Desktop AI assistant

When you explicitly ask for SPICE support, the [Desktop AI assistant](../AI-Assistant/) can search the local catalog, inspect model text and sources, and review the mapping to your symbol. It can attach a model to a placed component or save a model as the default when adding a new library part. It asks before replacing an existing Custom template. For ordinary schematic or symbol work it preserves the supplied defaults.

For a read-only comparison, try: “Find a bundled SPICE model for Q1. Compare its terminal order and limitations with the intended part. Leave the drawing as it is.”

To request an edit, try: “Attach the bundled 2N3904 model to Q1 after checking its physical pin mapping. Show me the source and any assumptions.”
