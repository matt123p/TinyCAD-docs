---
layout: default
---

# TinyCAD - Advanced

This section covers advanced editing, validation, and output workflows.

See also [Simulation and SPICE](../Simulation/) for integrated circuit analysis, and [SPICE models and netlist output](../SPICE-output/) for model templates and external simulator export.

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