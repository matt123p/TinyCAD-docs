---
layout: default
---
# TinyCAD - Dessin
{: #tinycad---drawing}

L'[assistant IA (AI assistant)](../AI-Assistant/) peut créer un circuit ou ajouter des composants au dessin ouvert à partir d'instructions écrites. Ses modifications restent modifiables et peuvent être annulées.

Cette section couvre le flux de travail essentiel du dessin, notamment la configuration du premier dessin,
les étiquettes, les bus, les connexions non raccordées, les annotations et l'impression.

Pour réorganiser un circuit existant, consultez [Mise en page](../Layout-Tidy-Up/). Cette section couvre les portées de la disposition automatique, les paramètres de force et l'annulation d'un résultat avec Undo.

Pour les logos, les images de référence et les schémas numérisés, consultez [Images](../Images/). Cette section couvre le copier-coller, l'importation de fichiers, le redimensionnement, le rapport hauteur/largeur fixe et le rognage des pixels.

## Masquer temporairement des objets
{: #temporarily-hiding-objects}

Pour accéder aux objets situés sous une partie encombrée d'un dessin :

1. Sélectionnez les objets que vous souhaitez écarter.
2. Ouvrez le menu contextuel du dessin (clic droit ou appui long sur un écran tactile)
   et choisissez **Masquer la sélection (Hide selected)**.
3. Lorsque vous avez terminé, ouvrez le menu contextuel et choisissez **Afficher tous les objets masqués (Show all hidden objects)**
   pour rétablir tous les objets masqués sur la feuille actuelle.

Les objets masqués ne peuvent pas être sélectionnés sur le canevas tant qu'ils sont masqués. Le masquage est un
paramètre d'affichage temporaire : il ne supprime pas les objets et n'enregistre pas d'indicateur de masquage dans le
fichier de dessin. Les objets masqués continuent de participer à la connectivité électrique et aux
listes de réseaux, et apparaissent toujours dans les sorties imprimées et PDF.

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
