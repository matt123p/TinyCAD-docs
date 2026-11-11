---
layout: default
---
# TinyCAD - Referentie
{: #tinycad-v4---reference}

Dit gedeelte is het startpunt voor referentiemateriaal dat momenteel is overgezet uit
de oude onlinehandleiding.

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
