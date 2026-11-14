---
layout: default
---
# TinyCAD - Dessin
{: #tinycad---drawing}

Cette section présente les principales opérations de dessin, notamment la
configuration du premier dessin, les étiquettes, les bus, les connexions non
raccordées, les annotations et l’impression.

Pour réorganiser un circuit existant, consultez [Réorganisation de la disposition](../Layout-Tidy-Up/). Cette section présente les périmètres de mise en page automatique, les réglages de force et la façon d’annuler un résultat avec Annuler.

## Masquer temporairement des objets
{: #temporarily-hiding-objects}

Pour accéder aux objets situés sous une partie encombrée du dessin :

1. Sélectionnez les objets que vous souhaitez écarter.
2. Ouvrez le menu contextuel du dessin (clic droit ou appui prolongé sur un écran
   tactile), puis choisissez **Masquer la sélection (Hide selected)**.
3. Une fois terminé, ouvrez le menu contextuel et choisissez **Afficher tous les objets masqués (Show all hidden objects)**
   pour restaurer tous les objets masqués de la feuille active.

Les objets masqués ne peuvent pas être sélectionnés sur le canevas tant qu’ils
sont masqués. Le masquage est un réglage d’affichage temporaire : il ne supprime
pas les objets et n’enregistre pas d’indicateur de masquage dans le fichier de
dessin. Les objets masqués participent toujours à la connectivité électrique et
aux listes de connexions, et apparaissent toujours dans les sorties imprimées et PDF.

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
