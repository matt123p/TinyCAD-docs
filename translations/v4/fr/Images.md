---
layout: default
---
# Images
{: #images}

Ajoutez des images à un dessin pour les logos, les images de référence ou les schémas numérisés. Vous pouvez coller une image depuis le Presse-papiers ou sélectionner un fichier à l’aide de **Fichier → Importer → Image…** dans TinyCAD Desktop comme dans l’application Web.

Les images sont des illustrations sur la feuille. Elles ne créent ni composants, ni broches, ni connexions électriques. Pour convertir l’image d’un circuit en symboles et fils modifiables, utilisez plutôt l’[assistant IA de Desktop](../AI-Assistant/).

## Copier et coller
{: #copy-and-paste}

1. Dans une autre application, copiez l’image elle-même plutôt que son nom de fichier ou un lien. Par exemple, utilisez **Copier l’image** dans un navigateur ou copiez une sélection dans un éditeur d’images.
2. Revenez dans TinyCAD et cliquez dans la zone de dessin afin de ne pas modifier un champ de texte.
3. Appuyez sur **Ctrl+V** (**Cmd+V** sous macOS).
4. Sélectionnez l’image collée et faites-la glisser jusqu’à la position souhaitée.

Les images du Presse-papiers au format PNG ou JPEG sont prises en charge. Si une image ne peut pas être collée, enregistrez-la dans un fichier et utilisez plutôt la commande Importer. Vous pouvez également copier et coller des images déjà placées dans un dessin TinyCAD.

## Importer depuis un fichier
{: #import-from-a-file}

1. Ouvrez **Fichier → Importer → Image…**. Dans l’application Web, ouvrez le menu **Fichier** à l’aide de l’icône de document dans la barre d’outils.
2. Sélectionnez un fichier image et confirmez dans le sélecteur de fichiers.
3. L’image apparaît sur la feuille active. Sélectionnez-la pour la déplacer, la redimensionner ou la rogner.

Les fichiers PNG et JPEG sont directement incorporés. Les autres formats que le navigateur peut décoder, tels que GIF, WebP, BMP et SVG, sont convertis en PNG. Les images importées restent des images fixes ; l’animation n’est pas conservée. La prise en charge des formats dépend du navigateur ou du moteur de navigateur inclus dans TinyCAD Desktop. Un fichier illisible ou non pris en charge provoque une erreur.

Vous pouvez également faire glisser un fichier PNG ou JPEG sur le dessin pour le placer à l’endroit où vous le déposez.

## Déplacer et redimensionner
{: #move-and-resize}

Cliquez sur une image pour la sélectionner. Faites glisser son corps pour la déplacer, ou faites glisser une poignée d’angle ou de bord pour la redimensionner.

La barre des propriétés en bas affiche une section **Image** lorsqu’une image est sélectionnée. Activez **Conserver les proportions** pour conserver son rapport largeur/hauteur actuel pendant le redimensionnement. Désactivez cette option pour redimensionner indépendamment la largeur et la hauteur. Le déplacement de l’image ne modifie pas ses proportions.

**Rétablir les proportions** restaure les proportions d’origine de la partie visible de l’image, en tenant compte de tout rognage. La largeur et la position du coin supérieur gauche restent inchangées ; la hauteur est ajustée. La case à cocher Conserver les proportions conserve son état actuel. Vous pouvez annuler le rétablissement.

## Rogner les bords
{: #clip-the-edges}

Utilisez **Rognage gauche (px)**, **Rognage droit (px)**, **Rognage haut (px)** et **Rognage bas (px)** dans les propriétés de l’image pour masquer les bordures ou les parties indésirables d’une image.

- Les valeurs sont des nombres entiers de pixels mesurés dans l’image d’origine, indépendamment de sa taille affichée ou de la grille du dessin.
- Par exemple, régler **Rognage gauche (px)** sur **20** masque les 20 pixels les plus à gauche de l’image source.
- Le rognage conserve les pixels restants à leur échelle et à leur position actuelles ; la limite visible se déplace vers l’intérieur au lieu d’étirer l’image.
- Au moins un pixel doit rester dans chaque direction. Les commandes limitent chaque bord en conséquence.
- Réglez un bord sur **0** pour le restaurer. Le rognage ne supprime aucun pixel de l’image originale incorporée.

**Annuler** et **Rétablir** s’appliquent à l’insertion d’images et aux modifications de propriétés, ainsi qu’aux déplacements et redimensionnements.

## Enregistrement et sortie
{: #saving-and-output}

Les images sont incorporées dans le fichier de dessin ; le fichier original n’a donc pas besoin de rester à son emplacement d’importation. Enregistrez le dessin normalement pour conserver ses images, ses paramètres de proportions fixes et son rognage. Ces paramètres sont conservés à la réouverture et également dans les dessins `.dzn` compressés.

Le rognage s’applique à chaque image placée ; des copies distinctes peuvent donc montrer différentes parties d’une même image. L’image visible est incluse dans les sorties imprimées, PDF et SVG.

- Retour à [Dessin](../User-guide/)
- Retour à [Sommaire de v4](../CONTENTS/)
