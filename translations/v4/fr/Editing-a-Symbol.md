---
layout: default
---
# Modification d’un symbole
{: #editing-a-symbol}

## Fonctionnement des symboles dans TinyCAD
{: #how-symbols-work-in-tinycad}

Les symboles sont créés à partir des objets standard disponibles dans la barre d’outils. Ils peuvent contenir
n’importe lequel de ces objets, à l’exception d’autres symboles.

Si le symbole contient des objets dotés de fonctions spéciales (comme un élément d’alimentation
ou un fil), ces objets seront alors traités comme des annotations.

Toutes leurs fonctions spéciales sont perdues lorsqu’ils sont utilisés dans un symbole. Seules les **broches** définissent
les points de connexion électrique.

Résumé :
- un symbole est un graphique réutilisable accompagné d’attributs
- la connectivité électrique est définie par les **broches**
- et les symboles sont enregistrés dans des **bibliothèques** (`.tclib`)

## Avant de commencer
{: #before-you-start}

Cette page suppose qu’une bibliothèque est déjà ouverte pour modification. Les étapes pour
ouvrir ou créer une bibliothèque dépendent du fait que vous utilisiez TinyCAD Web ou
l’application de bureau ; commencez donc par [Bibliothèques de symboles personnalisées](../Custom-symbol-libraries/).

Pour parcourir les bibliothèques et placer des symboles plutôt que les modifier, consultez [Utilisation des bibliothèques de symboles](../Using-Symbol-Libraries/).

## Ouvrir ou créer le symbole
{: #open-or-create-the-symbol}

1. Ouvrez la bibliothèque.
2. Pour modifier un symbole existant, cliquez dessus dans la liste des symboles de la bibliothèque.
3. Pour créer un nouveau symbole, cliquez sur le bouton `+` dans la liste des symboles.
4. Le symbole sélectionné ou nouvellement créé est chargé dans la zone de dessin de l’éditeur.

Vous pouvez ensuite modifier les graphiques, les broches et les attributs du symbole.

{% include video-player.html
	src="/v4/images/video/Video 12.mp4"
	width=1532
	height=978
	caption="Vidéo explicative montrant comment modifier une bibliothèque."
%}


## Dessiner la forme du symbole (graphiques)
{: #drawing-the-symbol-shape-graphics}

Utilisez les outils de dessin standard pour créer le contour du symbole :

- lignes/polylignes pour les bords du corps,
- rectangles/ellipses/arcs pour les contours de boîtier courants,
- texte pour les marquages internes facultatifs.

Veillez à ce que le symbole reste lisible au niveau de zoom normal du schéma. Les formes simples sont généralement
plus efficaces que les dessins très décoratifs.

## Ajouter des broches
{: #adding-pins}

Les broches sont la seule partie d’un symbole qui soit électriquement active.

Pour chaque broche, définissez :

- **Numéro de broche** (obligatoire et unique au sein d’un composant),
- **Nom de broche** (facultatif, mais fortement recommandé),
- **Type électrique** (obligatoire pour un DRC précis),
- **Style/forme de broche** (style visuel),
- **Visibilité** du texte du nom/numéro de broche, selon les besoins.

Placez soigneusement les broches sur la grille afin de faciliter le câblage dans le schéma.

{% include video-player.html
	src="/v4/images/video/Video 13.mp4"
	width=1532
	height=978
	caption="Vidéo explicative montrant comment ajouter des broches."
%}


## Panneau Broche
{: #pin-panel}

Vous pouvez modifier les broches dans le panneau **Broche**, dans la zone du **panneau inférieur**.

Les modifications du panneau Broche sont **appliquées immédiatement** : chaque changement de champ déclenche une action de mise à jour immédiate
de la broche (aucune étape OK/Appliquer distincte).

Sections du panneau Broche :

1. **Nom**
	- Case à cocher Afficher (`show_name`)
	- Champ de texte du nom (`name`)
	- Case à cocher Centrer sur la broche (`centre_name`)
2. **Numéro**
	- Case à cocher Afficher (`show_number`)
	- Champ de texte du numéro (`number`)
	- Champ numérique du décalage (`number_pos`)
3. **Type**
	- Liste déroulante Forme (`which`)
	- Liste déroulante Électrique (`elec`)
	- Champ numérique Longueur (`length`, plage de l’interface : 5..50)

Remarques :

- La forme contrôle l’apparence du symbole et certains comportements visuels spéciaux.
- Les formes `Cross` et les types électriques `Not Connected` dessinent tous deux un marqueur en croix.
- Les styles de forme `Power` et `Hidden` sont rendus avec la couleur des broches masquées.

## Types électriques des broches et comportement du DRC
{: #pin-electrical-types-and-drc-behavior}

Il est essentiel de sélectionner le type électrique approprié. Le DRC utilise ces types pour détecter
les erreurs de connexion.

Valeurs actuelles dans le code source de TinyCAD v4 (`elec`) :

- `0` Entrée
- `1` Sortie
- `2` Trois états
- `3` Collecteur ouvert
- `4` Passif
- `5` Entrée/Sortie
- `6` Non connecté
- `7` Libre
- `8` Non spécifié
- `9` Entrée d’alimentation
- `10` Sortie d’alimentation
- `11` Émetteur ouvert

Recommandations générales :

- Indiquez **Sortie** pour les signaux réellement pilotés.
- Indiquez **Entrée** pour les signaux uniquement récepteurs.
- Utilisez **Entrée d’alimentation/Sortie d’alimentation** lorsque la logique de pilotage de l’alimentation est importante pour le DRC.
- Utilisez **Non connecté** uniquement pour les broches qui doivent intentionnellement être considérées comme non connectées.
- Utilisez **Libre**/**Non spécifié** avec prudence et de manière cohérente dans toute une bibliothèque.

Conséquences pratiques pour le DRC :

- Un type de broche incorrect peut provoquer de fausses erreurs DRC (ou masquer des erreurs réelles).
- Les noms des broches d’alimentation doivent correspondre aux noms d’alimentation prévus pour permettre le comportement automatique.

## Broches d’alimentation et broches masquées
{: #power-and-hidden-pins}

Les broches d’alimentation et les broches masquées sont affichées lors de la modification du symbole, mais sont généralement
masquées lorsque le symbole est placé dans un dessin.

Pour les **broches d’alimentation** en particulier :

- Le nom de la broche sert de nom de réseau d’alimentation.
- La connectivité est automatique lorsque les noms d’alimentation correspondent.
- Les fils ne sont normalement pas dessinés directement jusqu’à ces broches d’alimentation masquées dans la
	vue du symbole placé.

Pour les **broches masquées** :

- Elles restent électriquement actives.
- Utilisez-les lorsque vous souhaitez dessiner vous-même la forme de broche et les étiquettes de broche.

## Symboles à plusieurs unités (unités par boîtier)
{: #multi-part-symbols-parts-per-package}

TinyCAD prend en charge les composants comportant plusieurs unités logiques dans un même boîtier (par
exemple, des portes quadruples).

Deux types de symboles à plusieurs unités sont utilisés :

1. Symboles à plusieurs unités **homogènes** :
	 - les unités partagent le même contour,
	 - elles diffèrent généralement uniquement par leurs numéros de broche.
2. Symboles à plusieurs unités **hétérogènes** :
	 - les unités peuvent avoir des contours différents,
	 - elles peuvent également avoir des jeux/fonctions de broches différents.

Utilisez le type homogène lorsque les unités sont interchangeables ; utilisez le type hétérogène lorsque chaque unité
remplit une fonction distincte.

### Flux de travail pour les symboles à plusieurs unités
{: #multi-part-workflow}

1. Décidez d’abord si le symbole sera homogène ou hétérogène.
2. Définissez le nombre d’unités par boîtier.

Pour les unités homogènes :
- La première unité définit la forme du symbole et la disposition des broches

Pour les unités hétérogènes :
- Vous pouvez dessiner une forme différente pour chaque unité

## Attributs et propriétés du symbole
{: #symbol-attributes-and-properties}

Vous pouvez modifier les attributs du symbole dans le panneau **Symbole**, dans le **panneau inférieur**.

En plus des graphiques et des broches, définissez soigneusement les attributs du symbole :

- Nom principal du symbole (et alias, le cas échéant),
- Format **Ref** par défaut (par exemple `U?`, `R?`, `C?`),
- **Nom/Valeur** par défaut,
- Attributs/paramètres supplémentaires (par exemple le boîtier/l’empreinte, les champs du
	modèle de simulation ou les métadonnées propres au projet).

## Enregistrer, dupliquer, renommer, supprimer
{: #save-duplicate-rename-delete}

Actions courantes de gestion des symboles lors de la modification d’une bibliothèque :

- **Enregistrer/mettre à jour** le symbole actuel pour enregistrer les modifications.
- **Dupliquer** pour créer des variantes (recommandé plutôt que de modifier
	de manière destructive un symbole de base).
- **Renommer** pour uniformiser les noms.
- **Supprimer** les symboles obsolètes (annulez la suppression en cas d’erreur).

Utilisez la duplication pour créer des variantes de boîtier/valeur qui partagent les mêmes graphiques, mais diffèrent par leurs
valeurs par défaut.

## Liste de vérification avant la publication d’un symbole
{: #validation-checklist-before-publishing-a-symbol}

Avant d’utiliser largement un symbole, vérifiez les points suivants :

1. Les broches sont alignées sur la grille et faciles à câbler.
2. Les numéros de broche sont complets et uniques pour chaque unité.
3. Les types électriques sont correctement définis pour toutes les broches.
4. Le comportement des broches d’alimentation/masquées est intentionnel.
5. La configuration des unités multiples (le cas échéant) est correcte.
6. Les valeurs par défaut du nom/de la référence sont appropriées.
7. Le symbole reste lisible au niveau de zoom normal du dessin.

Placez ensuite le symbole dans un schéma de test et lancez le DRC.

## Conseils de dépannage
{: #troubleshooting-tips}

- **Les fils ne se connectent pas au symbole :** vérifiez le placement de l’extrémité de la broche et
	son alignement sur la grille.
- **Erreurs DRC inattendues :** vérifiez le type électrique de chaque broche.
- **Comportement incorrect d’une unité dans un symbole à plusieurs unités :** revérifiez la sélection de l’unité et la
	numérotation des broches de chaque unité.
- **L’alimentation ne se connecte pas automatiquement :** vérifiez que les noms des broches d’alimentation correspondent aux noms de réseau
	prévus.

## Pages connexes
{: #related-pages}

- [Bibliothèques de symboles personnalisées](../Custom-symbol-libraries/)
- [Utilisation des bibliothèques de symboles](../Using-Symbol-Libraries/)
- [Symboles](../Symbols/)
- [Vérification des règles de conception](../Design-Rules-Check/)

- Retour à [Symboles et bibliothèques](../Symbols-and-Libraries/)
- Retour à [Sommaire de la v4](../CONTENTS/)
