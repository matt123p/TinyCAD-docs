---
layout: default
---
# TinyCAD v4 - Symboles et bibliothèques
{: #tinycad-v4---symbols--libraries}

Cette section couvre l’utilisation des symboles et les flux de travail liés aux bibliothèques, notamment l’importation,
la modification et la gestion des bibliothèques personnalisées.

## Pages
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

- Retour au [sommaire de la v4](../CONTENTS/)
