---
layout: default
---
# TinyCAD - Avancé
{: #tinycad---advanced}

Cette section couvre les workflows avancés de modification, de validation et de sortie.

Voir aussi [Simulation et SPICE](../Simulation/) pour l’analyse de circuits intégrés, et [Modèles SPICE et sortie de netlist](../SPICE-output/) pour les modèles et l’exportation vers un simulateur externe.

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
