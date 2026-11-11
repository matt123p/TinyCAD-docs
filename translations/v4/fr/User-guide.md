---
layout: default
---
# TinyCAD - Dessin
{: #tinycad---drawing}

Cette section présente les principales étapes du dessin, notamment la
configuration du premier dessin, les étiquettes, les bus, les connexions
absentes, les annotations et l’impression.

## Masquer temporairement des objets
{: #temporarily-hiding-objects}

Pour accéder aux objets situés sous une zone encombrée du dessin :

1. Sélectionnez les objets que vous souhaitez écarter.
2. Ouvrez le menu contextuel du dessin (clic droit ou appui long sur un écran tactile)
   et choisissez **Masquer la sélection**.
3. Une fois terminé, ouvrez le menu contextuel et choisissez **Afficher tous les objets masqués**
   pour rétablir tous les objets masqués sur la feuille active.

Les objets masqués ne peuvent pas être sélectionnés sur la zone de dessin tant qu’ils sont masqués. Le masquage est un
paramètre d’affichage temporaire : il ne supprime pas les objets et n’enregistre pas d’indicateur de masquage dans le
fichier de dessin. Les objets masqués participent toujours à la connectivité électrique et aux
listes de connexions, et apparaissent toujours dans les sorties imprimées et PDF.

Pour les gestes tactiles et le placement précis, consultez [Commandes tactiles](../Touch-controls/).

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

- Retour au [sommaire v4](../CONTENTS/)
