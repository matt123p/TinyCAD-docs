---
layout: default
---
# TinyCAD v4 - Simboli e librerie
{: #tinycad-v4---symbols--libraries}

Questa sezione illustra l’uso dei simboli e i flussi di lavoro delle librerie, inclusi l’importazione,
la modifica e la gestione di librerie personalizzate.

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

- Torna a [contenuti di v4](../CONTENTS/)
