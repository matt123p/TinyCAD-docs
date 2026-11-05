---
layout: default
---
# TinyCAD v4 - Dessin
{: #tinycad-v4---drawing}

Cette section couvre le flux de travail essentiel du dessin, notamment la
configuration du premier dessin, les étiquettes, les bus, les non-connexions,
les annotations et l’impression.

## Masquer temporairement des objets
{: #temporarily-hiding-objects}

Pour accéder aux objets situés sous une zone encombrée du dessin :

1. Sélectionnez les objets que vous souhaitez mettre de côté.
2. Ouvrez le menu contextuel du dessin (clic droit ou appui prolongé sur un écran tactile)
   et choisissez **Masquer les objets sélectionnés (Hide selected)**.
3. Une fois terminé, ouvrez le menu contextuel et choisissez **Afficher tous les objets masqués (Show all hidden objects)**
   pour restaurer tous les objets masqués sur la feuille actuelle.

Les objets masqués ne peuvent pas être sélectionnés sur le canevas tant qu’ils sont
masqués. Le masquage est un réglage d’affichage temporaire : il ne supprime pas les
objets et n’enregistre pas d’indicateur de masquage dans le fichier de dessin. Les
objets masqués participent toujours à la connectivité électrique et aux listes de
réseaux, et apparaissent toujours dans les sorties imprimées et PDF.

Pour les gestes sur écran tactile et le placement précis, voir [Commandes tactiles](../Touch-controls/).

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

- Retour à la [table des matières v4](../CONTENTS/)
