---
layout: default
---
# TinyCAD - Symbolen en bibliotheken
{: #tinycad---symbols--libraries}

In dit gedeelte worden het gebruik van symbolen en bibliotheekworkflows behandeld, waaronder het importeren,
bewerken en beheren van aangepaste bibliotheken.

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

- Terug naar [inhoud v4](../CONTENTS/)
