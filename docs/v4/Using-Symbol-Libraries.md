---
layout: default
---

# Using Symbol Libraries

## What is a symbol library?

In circuit design, a **symbol library** is a collection of schematic symbols stored in a single file. Each symbol represents an electronic component such as a resistor, capacitor, IC, connector, transistor, or any other part, as a standardised graphic with defined electrical connection points.

TinyCAD symbol libraries use the `.tclib` file format. A single library file can contain dozens or hundreds of related symbols, typically grouped by category or purpose. For example, you might have one library for passive components, another for logic ICs, and another for connectors.

## What are symbol libraries used for?

Symbol libraries serve several key purposes in schematic capture:

- **Reuse across designs.** Once a symbol is defined in a library, it can be placed in any schematic without recreating it. This saves time and ensures consistency across projects.
- **Standardised representation.** Libraries enforce a common visual style and pin configuration for each component. Every instance of a 555 timer or an op-amp looks the same and has the same pin definitions, reducing misinterpretation.
- **Electrical correctness.** Each symbol carries pin information — pin names, numbers, and electrical types (input, output, power, passive, etc.). This data drives downstream processes such as netlist generation, design rule checks, and export to PCB layout tools.
- **Organisation.** Grouping symbols into libraries by function, manufacturer, or project makes it easy to find the right part. TinyCAD lets you load only the libraries you need for a given design.
- **Sharing and collaboration.** Library files can be shared between team members or downloaded from the community, so everyone works with the same verified symbol definitions.

## Built-in and custom libraries

TinyCAD ships with a set of built-in libraries covering common component families. For parts not included, you can:

- Create your own [custom symbol libraries](../Custom-symbol-libraries/)
- [Import symbols from KiCAD](../Importing-Symbols-from-KiCAD/) libraries
- Download additional libraries from the TinyCAD.net website

## Typical workflow

In practice, working with symbol libraries usually follows this sequence:

1. Load or add the libraries you want available in the current TinyCAD session.
2. Browse, search, and preview symbols from those libraries.
3. Place symbols into the drawing.
4. If a symbol definition needs to change, edit the library rather than editing the placed instance.

This page covers steps 1 to 3. For library-file management, see [Custom Symbol Libraries](../Custom-symbol-libraries/). For changing the symbol definition itself, see [Editing a Symbol](../Editing-a-Symbol/).

## Loading libraries

Before you can place a symbol, its library must be available in TinyCAD.

- Built-in libraries are available as part of TinyCAD.
- Custom libraries must be added or opened before they can be browsed.
- The exact steps differ between TinyCAD Web and the desktop application.

Use [Custom Symbol Libraries](../Custom-symbol-libraries/) for the product-specific steps to add, open, refresh, create, and edit library files.

## Browsing, searching, and previewing

To use symbols from a library, the library must first be loaded in your TinyCAD session. Once loaded:

1. Open the symbol picker.
2. Expand a library to browse its contents, or use the search box to find a symbol by name or description.
3. Click a symbol to preview it.
4. Select the symbol to make it the active placement tool, then click in your drawing to place instances.

For more on placing and configuring symbols once selected, see [Symbols](../Symbols/).

## Placing symbols in a drawing

Once a symbol is selected from the library browser, it becomes the active placement tool.

For the actual placement workflow, including how symbols behave once selected, see [Symbols](../Symbols/).

Remember that placing a symbol in a drawing does **not** edit the library definition. If you need to change the graphics, pins, or attributes for future use, edit the symbol in its library instead. See [Editing a Symbol](../Editing-a-Symbol/).

## Related tasks

- Use [Custom Symbol Libraries](../Custom-symbol-libraries/) to add, open, create, and manage `.tclib` files.
- Use [Editing a Symbol](../Editing-a-Symbol/) to change a symbol's graphics, pins, and attributes.
- Use [Symbols](../Symbols/) for placement details once a symbol has been chosen.

## Pages

{% assign current_version = page.url | split: '/' | slice: 1, 1 | first -%}
{% assign section = nil -%}
{% for entry in site.data.navigation[current_version] -%}
    {% if entry.url == page.url -%}
        {% assign section = entry -%}
        {% break -%}
    {% endif -%}
{% endfor -%}
{% if section and section.children %}
{% for child in section.children -%}
- [{{ child.title }}]({{ child.url | relative_url }})
{% endfor %}
{% endif %}

- Back to [v4 contents](../CONTENTS/)
