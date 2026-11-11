---
layout: default
---
# TinyCAD - Simboli e librerie
{: #tinycad---symbols--libraries}

Questa sezione illustra l’uso dei simboli e i flussi di lavoro delle librerie, inclusi l’importazione,
la modifica e la gestione delle librerie personalizzate.

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

- Torna ai [contenuti v4](../CONTENTS/)
