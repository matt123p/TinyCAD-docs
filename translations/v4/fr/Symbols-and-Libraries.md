---
layout: default
---
# TinyCAD - Symboles et bibliothèques
{: #tinycad---symbols--libraries}

Cette section traite de l’utilisation des symboles et des flux de travail liés aux bibliothèques, notamment l’importation,
la modification et la gestion de bibliothèques personnalisées.

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
