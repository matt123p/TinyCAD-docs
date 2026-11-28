---
layout: default
---
# Symboles
{: #symbols}

Les symboles sont les éléments de base d’un schéma TinyCAD. Vous placez des symboles depuis des bibliothèques, définissez leurs attributs, puis reliez leurs broches pour créer un circuit électriquement valide.

Le sélecteur de bibliothèques à gauche propose trois sources : **Standard** pour les bibliothèques fournies, **Online** pour la recherche sur TinyCAD.net et **My Libraries** pour vos propres fichiers de bibliothèque.

L’[assistant IA (AI assistant)](../AI-Assistant/) peut également trouver ou créer un symbole à partir d’une fiche technique et le placer directement dans le dessin. Ouvrez une bibliothèque personnalisée pour la modifier si vous souhaitez qu’il crée des composants réutilisables.

## Trouver un symbole
{: #find-a-symbol}

### Utiliser les bibliothèques fournies
{: #use-the-bundled-libraries}

Sélectionnez **Standard**, puis choisissez une collection dans **Choose a standard library**. Parcourez ses composants ou saisissez un nom dans **Search libraries...** pour filtrer la collection sélectionnée. Vous pouvez changer de collection sans supprimer les symboles déjà placés dans votre dessin.

Les [bibliothèques fournies](../Bundled-Libraries/) comprennent des composants de circuit modélisés ainsi que du matériel physique destiné aux schémas de réseaux, systèmes embarqués, audio, laboratoire, commande de mouvement et énergie solaire. Elles sont fournies avec TinyCAD dans le navigateur et dans l’application de bureau ; aucun compte, téléchargement séparé ni importation de bibliothèque n’est nécessaire. Consultez le guide des bibliothèques pour connaître le contenu et l’objet de chaque collection.

### Rechercher en ligne
{: #search-online}

Si les collections fournies ne contiennent pas ce dont vous avez besoin, sélectionnez **Online** et saisissez le nom d’un composant ou sa référence dans **Search libraries...**. TinyCAD recherche dans la collection de symboles TinyCAD.net et affiche les symboles correspondants avec un aperçu graphique. La recherche en ligne nécessite une connexion Internet.

Sélectionnez un résultat pour consulter son aperçu et sa description, puis faites glisser son graphisme dans votre dessin. Il n’est pas nécessaire de télécharger une bibliothèque séparément au préalable. Vérifiez que les noms et numéros des broches correspondent au composant et au boîtier que vous comptez utiliser.

### Si vous ne trouvez pas le symbole souhaité
{: #if-you-cannot-find-the-symbol-you-want}

Utilisez les [bibliothèques de symboles personnalisées (Custom Symbol Libraries)](../Custom-symbol-libraries/) pour créer une bibliothèque `.tclib` ou en ouvrir une que vous possédez déjà. Vos bibliothèques sont accessibles depuis **My Libraries** dans le sélecteur.

Vous pouvez dessiner un nouveau symbole ou adapter une copie d’un symbole existant approprié ; consultez [Modifier un symbole (Editing a Symbol)](../Editing-a-Symbol/) pour en savoir plus sur ses éléments graphiques, ses broches et ses propriétés. Vous pouvez également [importer des symboles depuis KiCad](../Importing-Symbols-from-KiCAD/) dans une bibliothèque personnalisée. Les bibliothèques fournies sont en lecture seule ; conservez donc vos propres définitions dans une bibliothèque personnalisée.

## Placer le symbole choisi
{: #place-the-chosen-symbol}

1. Choisissez **Standard**, **Online** ou **My Libraries**, puis parcourez ou recherchez dans cette source.
2. Sélectionnez un résultat pour consulter son aperçu agrandi et sa description.
3. Faites glisser le graphisme du symbole depuis la liste ou l’aperçu vers le dessin, puis positionnez-le sur la grille.
4. Appuyez sur **Escape** ou faites un clic droit lorsque vous avez terminé de placer des copies.

La vidéo ci-dessous montre comment trouver et placer un symbole. Pour en savoir plus sur la navigation dans le sélecteur et sa gestion, consultez [Utiliser les bibliothèques de symboles (Using Symbol Libraries)](../Using-Symbol-Libraries/).

{% include video-player.html
	src="/v4/Images/video/Video 6.mp4"
	width=1280
	height=822
	caption="Présentation vidéo montrant comment trouver et placer un symbole."
%}



## Orientation lors du placement
{: #orientation-while-placing}

Lors du placement d’un symbole, définissez son orientation à l’aide des boutons de rotation et de retournement de la barre d’outils.

<img src="/v4/Images/media/image5.png" alt="Rotate and flip controls used to change symbol orientation" />


## Modifier et déplacer le texte des symboles
{: #editing-and-moving-symbol-text}

Après le placement, vous pouvez déplacer le symbole entier en le faisant glisser.

Vous pouvez également déplacer indépendamment les champs de texte du symbole (par exemple la valeur, le nom ou la référence) en sélectionnant le symbole et en faisant glisser chaque champ vers un emplacement plus adapté.

Vous pouvez modifier le texte en cliquant dessus.

{% include video-player.html
	src="/v4/Images/video/Video 1.mp4"
	width=284
	height=248
	caption="Présentation vidéo montrant comment modifier et repositionner le texte d’un symbole."
%}

## Attributs des symboles dans un schéma
{: #symbol-attributes-in-a-schematic}

Les symboles placés comprennent généralement les attributs principaux suivants :

- **Nom/Valeur** : la nature du composant (par exemple `10k`, `100nF`, type de dispositif)
- **Référence** : identifiant unique dans la feuille ou le projet (par exemple `R1`, `U3`)
- **Boîtier** (facultatif) : identifiant d’empreinte/boîtier utilisé dans les flux d’exportation en aval

Les champs de référence doivent rester uniques. Les outils TinyCAD peuvent aider à générer automatiquement ou à réannoter les références au besoin.

Vous pouvez ajouter des attributs supplémentaires pour les métadonnées du projet, le flux PCB ou les métadonnées de simulation, selon les besoins.

## Pages connexes
{: #related-pages}

- [Fils (Wires)](../Wires/)
- [Étiquettes (Labels)](../Labels/)
- [Non-connectés (No Connects)](../No-Connects/)
- [Modifier un symbole (Editing a Symbol)](../Editing-a-Symbol/)

- Retour à [Dessin (Drawing)](../User-guide/)
- Retour au [sommaire de la v4](../CONTENTS/)
