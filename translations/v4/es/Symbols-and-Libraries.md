---
layout: default
---
# TinyCAD - Símbolos y bibliotecas
{: #tinycad-v4---symbols--libraries}

Esta sección abarca el uso de símbolos y los flujos de trabajo de bibliotecas, incluida la importación,
la edición y la gestión de bibliotecas personalizadas.

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
