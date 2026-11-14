---
layout: default
---
# Symboles
{: #symbols}

Les symboles sont les éléments de base d’un schéma TinyCAD. Vous placez des symboles depuis des bibliothèques, définissez leurs attributs, puis reliez leurs broches pour créer une conception électriquement valide.

Le sélecteur de bibliothèques à gauche propose trois sources : **Standard** pour les bibliothèques fournies, **En ligne** pour la recherche sur TinyCAD.net et **Mes bibliothèques** pour vos propres fichiers de bibliothèque.

## Rechercher un symbole
{: #find-a-symbol}

### Utiliser les bibliothèques fournies
{: #use-the-bundled-libraries}

Sélectionnez **Standard**, puis choisissez une collection dans **Choisir une bibliothèque standard**. Parcourez ses composants ou saisissez un nom dans **Rechercher dans les bibliothèques...** pour filtrer la collection sélectionnée. Vous pouvez changer de collection sans supprimer les symboles déjà placés dans votre dessin.

Les [bibliothèques fournies](../Bundled-Libraries/) comprennent des composants de circuit modélisés ainsi que des équipements physiques pour les schémas de réseau, de systèmes embarqués, audio, de laboratoire, de commande de mouvement et solaires. Elles sont fournies avec TinyCAD, dans le navigateur comme dans l’application de bureau ; aucun compte, téléchargement distinct ou importation de bibliothèque n’est nécessaire. Consultez le guide des bibliothèques pour connaître le contenu et l’objectif de chaque collection.

### Rechercher en ligne
{: #search-online}

Si les collections fournies ne contiennent pas ce dont vous avez besoin, sélectionnez **En ligne** et saisissez le nom d’un composant ou sa référence dans **Rechercher dans les bibliothèques...**. TinyCAD effectue une recherche dans la collection de symboles TinyCAD.net et affiche les symboles correspondants avec des aperçus graphiques. La recherche en ligne nécessite une connexion Internet.

Sélectionnez un résultat pour examiner son aperçu et sa description, puis faites glisser son graphique dans votre dessin. Il n’est pas nécessaire de télécharger une bibliothèque distincte au préalable. Vérifiez que les noms et numéros de broches correspondent au composant et au boîtier que vous comptez utiliser.

### Si vous ne trouvez pas le symbole voulu
{: #if-you-cannot-find-the-symbol-you-want}

Utilisez [Bibliothèques de symboles personnalisées](../Custom-symbol-libraries/) pour créer une bibliothèque `.tclib` ou en ouvrir une que vous possédez déjà. Vos bibliothèques sont accessibles via **Mes bibliothèques** dans le sélecteur.

Vous pouvez dessiner un nouveau symbole ou adapter une copie d’un symbole existant approprié ; consultez [Modifier un symbole](../Editing-a-Symbol/) pour en savoir plus sur ses éléments graphiques, ses broches et ses propriétés. Vous pouvez également [importer des symboles depuis KiCad](../Importing-Symbols-from-KiCAD/) dans une bibliothèque personnalisée. Les bibliothèques fournies sont en lecture seule ; conservez donc vos propres définitions dans une bibliothèque personnalisée.

## Placer le symbole choisi
{: #place-the-chosen-symbol}

1. Choisissez **Standard**, **En ligne** ou **Mes bibliothèques**, puis parcourez ou recherchez dans cette source.
2. Sélectionnez un résultat pour examiner son aperçu agrandi et sa description.
3. Faites glisser le graphique du symbole depuis la liste ou l’aperçu vers le dessin, puis positionnez-le sur la grille.
4. Appuyez sur **Échap** ou cliquez avec le bouton droit lorsque vous avez terminé de placer des copies.

La vidéo ci-dessous montre comment rechercher et placer un symbole. Pour en savoir plus sur la navigation et la gestion du sélecteur, consultez [Utiliser les bibliothèques de symboles](../Using-Symbol-Libraries/).

{% include video-player.html
	src="/v4/images/video/Video 6.mp4"
	width=1280
	height=822
	caption="Présentation vidéo montrant comment rechercher et placer un symbole."
%}



## Orientation lors du placement
{: #orientation-while-placing}

Lors du placement d’un symbole, définissez son orientation à l’aide des boutons de rotation et de retournement de la barre d’outils.

<img src="/v4/images/media/image5.png" alt="Rotate and flip controls used to change symbol orientation" />


## Modifier et déplacer le texte d’un symbole
{: #editing-and-moving-symbol-text}

Après le placement, vous pouvez déplacer le symbole entier en le faisant glisser.

Vous pouvez également déplacer indépendamment les champs de texte du symbole (par exemple, valeur/nom/référence) en sélectionnant le symbole et en faisant glisser chaque champ vers un emplacement plus approprié.

Vous pouvez modifier le texte en cliquant dessus.

{% include video-player.html
	src="/v4/images/video/Video 1.mp4"
	width=284
	height=248
	caption="Présentation vidéo montrant comment modifier et repositionner le texte d’un symbole."
%}

## Attributs des symboles dans un schéma
{: #symbol-attributes-in-a-schematic}

Les symboles placés comportent généralement les attributs clés suivants :

- **Nom/Valeur** : nature du composant (par exemple `10k`, `100nF`, type de composant)
- **Référence** : désignateur unique dans la feuille/le projet (par exemple `R1`, `U3`)
- **Boîtier** (facultatif) : identifiant d’empreinte/de boîtier utilisé dans les flux d’exportation en aval

Les champs de référence doivent rester uniques. Les outils TinyCAD peuvent aider à générer automatiquement ou à réannoter les références au besoin.

Vous pouvez ajouter des attributs supplémentaires pour les métadonnées du projet, le flux PCB ou les métadonnées de simulation, selon vos besoins.

## Pages associées
{: #related-pages}

- [Fils](../Wires/)
- [Étiquettes](../Labels/)
- [Absence de connexion](../No-Connects/)
- [Modifier un symbole](../Editing-a-Symbol/)

- Retour à [Dessin](../User-guide/)
- Retour à [Sommaire de la v4](../CONTENTS/)
