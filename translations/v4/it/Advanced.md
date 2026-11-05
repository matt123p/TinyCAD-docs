---
layout: default
---
# TinyCAD v4 - Avanzate
{: #tinycad-v4---advanced}

Questa sezione tratta i flussi di lavoro avanzati di modifica, convalida e generazione degli output.

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

- Torna a [indice v4](../CONTENTS/)
