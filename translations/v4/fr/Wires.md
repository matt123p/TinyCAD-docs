---
layout: default
---
# Fils
{: #wires}

Les fils sont les connexions électriquement actives d’un schéma TinyCAD.

Pour assurer la connectivité nécessaire à la vérification DRC, à la génération de listes de connexions, à l’export SPICE/PCB ou à la liaison entre feuilles,
utilisez des objets fil (et non des lignes d’annotation).

## Pourquoi les fils sont importants
{: #why-wires-matter}

- Les fils définissent les réseaux électriques.
- Les fils s’alignent sur les broches des symboles et les autres points de connexion valides.
- TinyCAD utilise la connectivité des fils pour la vérification des règles et la génération des fichiers de sortie.

L’utilisation de lignes d’annotation à la place des fils peut sembler correcte à l’écran, mais le circuit sera électriquement déconnecté pour les outils.

## Modes de routage des fils
{: #wire-routing-modes}

Dans TinyCAD v4.0.11, utilisez le sélecteur à côté de Fil (Wire) pour choisir comment tracer les nouveaux segments.

| Mode | Comportement |
|---|---|
| **90°** | Routage horizontal et vertical. |
| **45°** | Routage limité aux directions à 45° de TinyCAD. |
| **Libre (Free)** | Segments droits suivant n’importe quel angle. |

Choisir un mode active l’outil Fil et conserve l’aperçu de fil en cours. Vous pouvez changer de mode avant de placer le segment suivant. L’accrochage à la grille reste un réglage distinct. L’outil de câblage point à point voisin est indépendant de ce sélecteur.

![Sélecteur de la barre d’outils des fils affichant les choix 90°, 45° et Libre (Free).](../images/wire-routing-modes.png)

## Placer des fils
{: #placing-wires}

1. Sélectionnez l’outil Fil.
2. Cliquez sur un point de connexion valide pour commencer — bien que ce ne soit pas strictement nécessaire. Vous pouvez placer un fil n’importe où. Un cercle rouge indique qu’il s’agit d’un point de connexion valide.
3. Cliquez pour placer les angles et les segments nécessaires.
4. Terminez sur un autre point de connexion valide OU
5. Cliquez avec le bouton droit pour quitter le mode de câblage.


{% include video-player.html
	src="/v4/images/video/Video 4.mp4"
	width=1602
	height=696
	caption="Présentation vidéo montrant comment placer des fils."
%}

<p>
	<a href="/v4/examples/Simple%20Drawing.dsn" class="btn btn-primary" download>
		<i class="bi bi-download me-1" aria-hidden="true"></i>&nbsp;Télécharger
	</a>
</p>


## Alignement et jonctions
{: #snapping-and-junctions}

- Les fils s’aimantent aux broches et aux fils existants.
- Les jonctions sont ajoutées automatiquement lorsque nécessaire.
- Les fils qui se croisent ne sont pas connectés en l’absence de jonction.

## Modifier des fils
{: #editing-wires}

Pour modifier un fil, cliquez simplement dessus. Vous pouvez alors faire glisser tout le segment en faisant glisser le fil lui-même, ou déplacer ses extrémités en faisant glisser les poignées de déplacement.

- Retour à [Dessin](../User-guide/)
- Retour à [Sommaire de la v4](../CONTENTS/)
