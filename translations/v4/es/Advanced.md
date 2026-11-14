---
layout: default
---
# TinyCAD - Avanzado
{: #tinycad---advanced}

En esta sección se describen los flujos de trabajo avanzados de edición, validación y salida.

Consulte también [Simulación y SPICE](../Simulation/) para el análisis de circuitos integrados, y [Modelos SPICE y salida de listas de conexiones](../SPICE-output/) para plantillas de modelos y la exportación a simuladores externos.

## Páginas
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

- Volver al [contenido de v4](../CONTENTS/)
