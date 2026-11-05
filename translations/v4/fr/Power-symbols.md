---
layout: default
---
# Symboles d’alimentation
{: #power-symbols}

Les symboles d’alimentation indiquent une connexion à des réseaux d’alimentation nommés tels que `GND`, `+5V`,
`VCC` ou `+3V3`.

Tous les symboles d’alimentation portant le même nom sont considérés comme connectés électriquement.

{% include video-player.html
	src="/v4/images/video/Video 5.mp4"
	width=1596
	height=700
	caption="Vidéo explicative montrant comment placer des symboles d’alimentation."
%}

<p>
	<a href="/v4/examples/Simple%20Drawing.dsn" class="btn btn-primary" download>
		<i class="bi bi-download me-1" aria-hidden="true"></i>&nbsp;Télécharger
	</a>
</p>

## Fonctionnement des symboles d’alimentation
{: #how-power-symbols-work}

- La connectivité des réseaux dépend du **nom d’alimentation**.
- La **forme** est purement visuelle et ne modifie pas la connectivité.
- Les choix d’orientation et de forme servent à améliorer la lisibilité et le style de dessin.

Utilisez des noms cohérents dans toute la conception afin d’éviter la division des réseaux d’alimentation.

## Règles de placement
{: #placement-rules}

1. Sélectionnez l’outil Alimentation (Power).
2. Choisissez l’orientation, la forme et le nom.
3. Placez le symbole et connectez-vous à l’extrémité de sa broche.

Raccordez les fils à l’extrémité de la broche du symbole d’alimentation (et pas simplement à proximité du dessin) afin que la
connexion soit reconnue.

## Broches d’alimentation cachées sur les symboles
{: #hidden-power-pins-on-symbols}

Certains symboles de bibliothèque utilisent des broches d’alimentation cachées (par exemple, de nombreuses familles logiques).
Ces broches se connectent automatiquement aux noms de réseaux d’alimentation correspondants.

Utilisez les mêmes noms que ceux attendus par la bibliothèque de symboles (par exemple `VCC`/`GND` lorsque
cela est nécessaire) pour que les connexions automatiques d’alimentation fonctionnent correctement.

## Modification et styles
{: #editing-and-styles}

Vous pouvez modifier la forme d’un symbole d’alimentation en le sélectionnant, puis en choisissant une nouvelle forme dans
la barre d’outils.

## Comportement multi-feuille
{: #multi-sheet-behavior}

Les noms des réseaux d’alimentation sont globaux dans le contexte de conception utilisé pour la génération de la netlist.
Une nomenclature cohérente entre les feuilles garantit la connectivité d’alimentation voulue.

- Retour au [Dessin](../User-guide/)
- Retour à la [table des matières v4](../CONTENTS/)
