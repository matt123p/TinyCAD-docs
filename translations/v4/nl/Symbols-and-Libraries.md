---
layout: default
---
# TinyCAD v4 - Symbolen en bibliotheken
{: #tinycad-v4---symbols--libraries}

In dit gedeelte komen het gebruik van symbolen en bibliotheekworkflows aan bod, waaronder het importeren en bewerken van symbolen en het beheren van aangepaste bibliotheken.

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
