---
layout: default
---
# TinyCAD - Avanzate
{: #tinycad---advanced}

Questa sezione illustra i flussi di lavoro avanzati per la modifica, la convalida e la generazione degli output.

Vedere anche [Simulazione e SPICE](../Simulation/) per l’analisi dei circuiti integrati e [Modelli SPICE e generazione dell’output netlist](../SPICE-output/) per i modelli e l’esportazione verso simulatori esterni.

## Pagine
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

- Torna ai [contenuti della v4](../CONTENTS/)
