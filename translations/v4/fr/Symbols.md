---
layout: default
---
# Symboles
{: #symbols}

Les symboles sont les éléments constitutifs essentiels d’un schéma TinyCAD. Vous placez des symboles depuis des bibliothèques, définissez leurs attributs, puis reliez leurs broches pour créer une conception électriquement valide.

Vous pouvez utiliser vos propres symboles ou télécharger des symboles directement depuis le site Web TinyCAD.net.

Voir aussi :

- [Utilisation des bibliothèques de symboles](../Using-Symbol-Libraries/)
- [Bibliothèques de symboles personnalisées](../Custom-symbol-libraries/)

## Rechercher et placer des symboles
{: #find-and-place-symbols}

1. Saisissez le nom du symbole souhaité dans la zone de recherche
2. Sélectionnez les symboles pour les afficher, puis choisissez celui que vous voulez
3. Faites glisser le symbole depuis l’aperçu vers votre dessin

{% include video-player.html
	src="/v4/images/video/Video 6.mp4"
	width=1280
	height=822
	caption="Vidéo de démonstration montrant comment rechercher et placer un symbole."
%}



## Orientation lors du placement
{: #orientation-while-placing}

Lors du placement d’un symbole, définissez son orientation à l’aide des boutons de rotation et de retournement de la barre d’outils.

<img src="/v4/images/media/image5.png" alt="Rotate and flip controls used to change symbol orientation" />


## Modification et déplacement du texte des symboles
{: #editing-and-moving-symbol-text}

Après le placement, vous pouvez déplacer le symbole entier en le faisant glisser.

Vous pouvez également déplacer séparément les champs de texte du symbole (par exemple la valeur, le nom ou la référence) en sélectionnant le symbole et en faisant glisser chaque champ vers un emplacement mieux adapté.

Vous pouvez modifier le texte en cliquant dessus.

{% include video-player.html
	src="/v4/images/video/Video 1.mp4"
	width=284
	height=248
	caption="Vidéo de démonstration montrant comment modifier et repositionner le texte d’un symbole."
%}

## Attributs des symboles dans un schéma
{: #symbol-attributes-in-a-schematic}

Les symboles placés comprennent généralement ces attributs principaux :

- **Nom/Valeur** : désignation du composant (par exemple `10k`, `100nF`, type de dispositif)
- **Référence** : repère unique dans la feuille/le projet (par exemple `R1`, `U3`)
- **Boîtier** (facultatif) : identifiant d’empreinte/de boîtier utilisé dans les flux d’exportation en aval

Les champs de référence doivent rester uniques. Les outils TinyCAD peuvent aider à générer automatiquement ou à renuméroter les références si nécessaire.

Vous pouvez ajouter des attributs supplémentaires pour les métadonnées du projet, le flux PCB ou les métadonnées de simulation, selon vos besoins.

## Pages associées
{: #related-pages}

- [Fils](../Wires/)
- [Étiquettes](../Labels/)
- [Non connectés](../No-Connects/)
- [Modification d’un symbole](../Editing-a-Symbol/)

- Retour à [Dessin](../User-guide/)
- Retour à [Sommaire de la v4](../CONTENTS/)
