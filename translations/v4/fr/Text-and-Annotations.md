---
layout: default
---
# Texte et annotations
{: #text--annotations}

Les outils de texte et d’annotation servent à documenter le schéma et à en améliorer la lisibilité.

Ces objets ne sont **pas électriques** et sont ignorés lors de la génération de la netlist et des vérifications des règles de conception.

## Texte et étiquettes
{: #text-vs-labels}

- Utilisez **Texte** pour les notes, les légendes, les titres et les instructions de fabrication.
- Utilisez les **étiquettes** pour les noms de nets actifs sur le plan électrique.

Si vous utilisez du texte à la place d’une étiquette, le net ne sera pas connecté.

## Objets d’annotation
{: #annotation-objects}

TinyCAD prend en charge les formes d’annotation courantes, notamment :

- le texte,
- les lignes,
- les rectangles,
- les ellipses,
- les arcs,
- les polygones.

Utilisez-les pour regrouper des blocs, mettre des zones en évidence et ajouter des notes explicatives sans
modifier la connectivité du circuit.


## Tracer des lignes et des polygones
{: #drawing-lines--polygons}

Vous pouvez tracer une série de lignes. Pour terminer le tracé, cliquez avec le bouton droit.

Vous pouvez convertir ces lignes en polygone en sélectionnant « Fermer le polygone » (Close Polygon) dans le menu contextuel. Une fois converti
en polygone, vous pouvez modifier le remplissage.

{% include video-player.html
	src="/v4/images/video/Video 7.mp4"
	width=1620
	height=924
	caption="Vidéo de démonstration montrant comment tracer et modifier un polygone."
%}


- Retour à [Dessin](../User-guide/)
- Retour à [Sommaire de v4](../CONTENTS/)
