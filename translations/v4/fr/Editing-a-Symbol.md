---
layout: default
---
# Modifier un symbole
{: #editing-a-symbol}

Pour générer un symbole à partir d’une fiche technique ou ajouter plusieurs composants à une bibliothèque ouverte, consultez le [guide de l’assistant IA.](../AI-Assistant/) Vous pouvez affiner ses résultats à l’aide des outils d’édition de cette page.

## Fonctionnement des symboles dans TinyCAD
{: #how-symbols-work-in-tinycad}

Les symboles sont créés à partir d’objets standard disponibles dans la barre d’outils. Ils peuvent contenir
n’importe lequel de ces objets, à l’exception d’autres symboles.

Si le symbole contient des objets dotés de fonctions spéciales (comme un élément d’alimentation
ou un fil), ces objets seront alors traités comme des annotations.

Toutes leurs fonctions spéciales sont perdues lorsqu’ils sont utilisés dans un symbole. Seules les **broches** définissent
les points de connexion électrique.

Résumé :
- un symbole est un dessin réutilisable accompagné d’attributs
- la connectivité électrique est définie par les **broches**
- et les symboles sont stockés dans des **bibliothèques** (`.tclib`)

## Avant de commencer
{: #before-you-start}

Cette page suppose qu’une bibliothèque est déjà ouverte pour modification. Les étapes pour
ouvrir ou créer une bibliothèque dépendent de l’utilisation de TinyCAD Web ou de
l’application de bureau ; commencez donc par [Bibliothèques de symboles personnalisées](../Custom-symbol-libraries/).

Si vous souhaitez parcourir les symboles et les placer plutôt que les modifier, consultez [Utiliser les bibliothèques de symboles](../Using-Symbol-Libraries/).

## Ouvrir ou créer le symbole
{: #open-or-create-the-symbol}

1. Ouvrez la bibliothèque.
2. Pour modifier un symbole existant, cliquez dessus dans la liste des symboles de la bibliothèque.
3. Pour créer un symbole, cliquez sur le bouton `+` dans la liste des symboles.
4. Le symbole sélectionné ou nouveau se charge sur le canevas de l’éditeur.

Vous pouvez ensuite modifier les éléments graphiques, les broches et les attributs du symbole.

{% include video-player.html
	src="/v4/images/video/Video 12.mp4"
	width=1532
	height=978
	caption="Tutoriel vidéo montrant comment modifier une bibliothèque."
%}


## Dessiner la forme du symbole (éléments graphiques)
{: #drawing-the-symbol-shape-graphics}

Utilisez les outils de dessin standard pour créer le contour du symbole :

- lignes/polylignes pour les bords du boîtier,
- rectangles/ellipses/arcs pour les contours courants des boîtiers,
- texte pour les marquages internes facultatifs.

Veillez à ce que le symbole reste lisible au niveau de zoom normal du schéma. Les formes simples donnent généralement
un meilleur résultat que les dessins très décoratifs.

## Ajouter des broches
{: #adding-pins}

Les broches sont la seule partie électriquement active d’un symbole.

Pour chaque broche, définissez :

- **Numéro de broche** (obligatoire et unique dans un composant),
- **Nom de broche** (facultatif, mais vivement recommandé),
- **Type électrique** (obligatoire pour un DRC précis),
- **Style/forme de broche** (apparence visuelle),
- **Visibilité** du texte du nom/numéro de broche selon les besoins.

Placez soigneusement les broches sur la grille afin que le câblage du schéma soit simple.

{% include video-player.html
	src="/v4/images/video/Video 13.mp4"
	width=1532
	height=978
	caption="Tutoriel vidéo montrant comment ajouter des broches."
%}


## Panneau des broches
{: #pin-panel}

Vous pouvez modifier les broches dans le panneau **Broche**, dans la zone du **panneau inférieur**.

Les modifications du panneau des broches sont **immédiates** : chaque changement de champ déclenche une action de mise à jour
immédiate de la broche (sans étape distincte OK/Appliquer).

Sections du panneau des broches :

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
	- Champ numérique de longueur (`length`, plage de l’interface : 5..50)

Remarques :

- La forme détermine l’apparence du symbole et certains comportements visuels particuliers.
- Les formes `Cross` et le type électrique `Not Connected` affichent tous deux une marque en croix.
- Les styles de forme `Power` et `Hidden` sont affichés avec la couleur des broches masquées.

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

- Définissez les signaux réellement pilotés comme **Sortie**.
- Définissez les signaux uniquement récepteurs comme **Entrée**.
- Utilisez **Entrée d’alimentation/Sortie d’alimentation** lorsque les règles de pilotage de l’alimentation sont importantes pour le DRC.
- Utilisez **Non connecté** uniquement pour les broches intentionnellement non connectées.
- Utilisez **Libre**/**Non spécifié** avec prudence et de manière cohérente dans toute une bibliothèque.

Conséquences pratiques pour le DRC :

- Un type de broche incorrect peut provoquer de fausses erreurs DRC (ou masquer de vraies erreurs).
- Les noms des broches d’alimentation doivent correspondre aux noms d’alimentation prévus pour permettre le comportement automatique.

## Broches d’alimentation et broches masquées
{: #power-and-hidden-pins}

Les broches d’alimentation et les broches masquées sont visibles lors de la modification du symbole, mais sont généralement
masquées lorsque le symbole est placé dans un dessin.

Pour les **broches d’alimentation** en particulier :

- Le nom de la broche sert de nom de réseau d’alimentation.
- La connectivité est automatique lorsque les noms d’alimentation correspondent.
- Les fils ne sont généralement pas dessinés directement jusqu’à ces broches d’alimentation masquées dans la
	vue du symbole placé.

Pour les **broches masquées** :

- Elles restent électriquement actives.
- Utilisez-les lorsque vous souhaitez dessiner vous-même la forme des broches et leurs libellés.

## Symboles multiparties (parties par boîtier)
{: #multi-part-symbols-parts-per-package}

TinyCAD prend en charge les composants comportant plusieurs unités logiques dans un même boîtier (par
exemple, des portes quadruples).

Deux styles de symboles multiparties sont utilisés :

1. Symboles multiparties **homogènes** :
	 - les parties partagent le même contour,
	 - elles ne diffèrent généralement que par leurs numéros de broches.
2. Symboles multiparties **hétérogènes** :
	 - les parties peuvent avoir des contours différents,
	 - les parties peuvent également avoir des ensembles/fonctions de broches différents.

Utilisez le style homogène lorsque les parties sont interchangeables ; utilisez le style hétérogène lorsque chaque partie
remplit une fonction distincte.

### Procédure multipartie
{: #multi-part-workflow}

1. Décidez d’abord entre le style homogène et le style hétérogène.
2. Définissez le nombre de parties par boîtier.

Pour les parties homogènes :
- La première partie définit la forme du symbole et la disposition des broches

Pour les parties hétérogènes :
- Vous pouvez dessiner une forme différente pour chaque partie

## Attributs et propriétés du symbole
{: #symbol-attributes-and-properties}

Vous pouvez modifier les attributs du symbole dans le panneau **Symbole**, dans le **panneau inférieur**.

En plus des éléments graphiques et des broches, définissez soigneusement les attributs du symbole :

- Nom principal du symbole (et alias, le cas échéant),
- Format **Réf** par défaut (par exemple `U?`, `R?`, `C?`),
- **Nom/Valeur** par défaut,
- Attributs/paramètres supplémentaires (par exemple le boîtier/empreinte, les champs du
	modèle de simulation ou les métadonnées propres au projet).

## Enregistrer, dupliquer, renommer, supprimer
{: #save-duplicate-rename-delete}

Actions courantes de gestion des symboles lors de la modification d’une bibliothèque :

- **Enregistrer/mettre à jour** le symbole actuel pour enregistrer les modifications.
- **Dupliquer** pour créer des variantes (recommandé plutôt que de modifier
	de manière destructive un symbole de base).
- **Renommer** lors de la normalisation des noms.
- **Supprimer** les symboles obsolètes (annulez la suppression si elle était accidentelle).

Utilisez la duplication pour les variantes de boîtier/valeur qui partagent les mêmes éléments graphiques, mais dont les
valeurs par défaut diffèrent.

## Liste de vérification avant de publier un symbole
{: #validation-checklist-before-publishing-a-symbol}

Avant d’utiliser largement un symbole, vérifiez que :

1. Les broches sont sur la grille et faciles à câbler.
2. Les numéros de broches sont complets et uniques pour chaque partie.
3. Les types électriques sont correctement définis pour toutes les broches.
4. Le comportement des broches d’alimentation/masquées est intentionnel.
5. La configuration multipartie (le cas échéant) est correcte.
6. Les valeurs par défaut du nom/de la référence sont pertinentes.
7. L’apparence du symbole est lisible au niveau de zoom normal du dessin.

Placez ensuite le symbole dans un schéma de test et lancez le DRC.

## Conseils de dépannage
{: #troubleshooting-tips}

- **Les fils ne se connectent pas au symbole :** vérifiez l’emplacement des extrémités des broches et
	leur alignement sur la grille.
- **Erreurs DRC inattendues :** vérifiez le type électrique de chaque broche.
- **Comportement incorrect d’une partie dans un symbole multipartie :** revérifiez la sélection de la partie et la numérotation des broches
	pour chaque partie.
- **Connexion automatique de l’alimentation absente :** vérifiez que les noms des broches d’alimentation correspondent aux noms de réseau
	prévus.

## Pages associées
{: #related-pages}

- [Bibliothèques de symboles personnalisées](../Custom-symbol-libraries/)
- [Utiliser les bibliothèques de symboles](../Using-Symbol-Libraries/)
- [Symboles](../Symbols/)
- [Vérification des règles de conception](../Design-Rules-Check/)

- Retour à [Symboles et bibliothèques](../Symbols-and-Libraries/)
- Retour au [contenu de la v4](../CONTENTS/)
