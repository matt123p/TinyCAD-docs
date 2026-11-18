---
layout: default
---
# TinyCAD - Geavanceerd
{: #tinycad---advanced}

Deze sectie behandelt geavanceerde bewerkings-, validatie- en uitvoerworkflows.

Zie ook [Simulatie en SPICE](../Simulation/) voor geïntegreerde-circuitanalyse, en [SPICE-modellen en netlistuitvoer](../SPICE-output/) voor modelsjablonen en export naar externe simulators.

## Pagina's
{: #pages}

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

- Terug naar [v4-inhoud](../CONTENTS/)
