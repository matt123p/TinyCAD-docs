---
layout: default
---
# Modifier un symbole
{: #editing-a-symbol}

Pour générer un symbole à partir d’une fiche technique ou ajouter plusieurs composants à une bibliothèque ouverte, consultez le [guide de l’assistant IA ](../AI-Assistant/). Vous pouvez affiner ses résultats à l’aide des outils de modification présentés sur cette page.

## Fonctionnement des symboles dans TinyCAD
{: #how-symbols-work-in-tinycad}

Les symboles sont créés à partir d’objets standard disponibles dans la barre d’outils. Ils peuvent contenir
n’importe lequel de ces objets, à l’exception d’autres symboles.

Si le symbole contient des objets dotés de fonctions spéciales (comme un élément d’alimentation
ou un fil), ces objets seront traités comme des annotations.

Toutes leurs fonctions spéciales sont perdues lorsqu’ils sont utilisés dans un symbole. Seules les **broches** définissent
les points de connexion électrique.

En résumé :
- un symbole est un élément graphique réutilisable accompagné d’attributs
- la connectivité électrique est définie par les **broches**
- et les symboles sont stockés dans des **bibliothèques** (`.tclib`)

## Avant de commencer
{: #before-you-start}

Cette page suppose qu’une bibliothèque est déjà ouverte pour modification. Les étapes pour
ouvrir ou créer une bibliothèque dépendent de l’utilisation de TinyCAD Web ou de
l’application de bureau ; commencez donc par consulter [Bibliothèques de symboles personnalisées](../Custom-symbol-libraries/).

Pour parcourir et placer des symboles plutôt que les modifier, consultez [Utiliser les bibliothèques de symboles](../Using-Symbol-Libraries/).

## Ouvrir ou créer le symbole
{: #open-or-create-the-symbol}

1. Ouvrez la bibliothèque.
2. Pour modifier un symbole existant, cliquez dessus dans la liste des symboles de la bibliothèque.
3. Pour créer un symbole, cliquez sur le bouton `+` dans la liste des symboles.
4. Le symbole sélectionné ou nouvellement créé est chargé sur le canevas de l’éditeur.

Vous pouvez ensuite modifier le graphisme, les broches et les attributs du symbole.

{% include video-player.html
	src="/v4/images/video/Video 12.mp4"
	width=1532
	height=978
	caption="Démonstration vidéo expliquant comment modifier une bibliothèque."
%}


## Dessiner la forme du symbole (graphisme)
{: #drawing-the-symbol-shape-graphics}

Utilisez les outils de dessin standard pour créer le contour du symbole :

- lignes/polylignes pour les bords du corps,
- rectangles/ellipses/arcs pour les contours courants de boîtier,
- texte pour les marquages internes facultatifs.

Veillez à ce que le symbole reste lisible au niveau de zoom normal du schéma. Les formes simples sont généralement
plus efficaces qu’un graphisme très décoratif.

## Ajouter des broches
{: #adding-pins}

Les broches sont la seule partie d’un symbole qui soit électriquement active.

Pour chaque broche, définissez :

- **Numéro de broche** (obligatoire et unique pour un élément),
- **Nom de broche** (facultatif, mais vivement recommandé),
- **Type électrique** (obligatoire pour un contrôle DRC précis),
- **Style/forme de broche** (aspect visuel),
- **Visibilité** du texte du nom/numéro de broche selon les besoins.

Placez soigneusement les broches sur la grille afin de faciliter le câblage dans le schéma.

{% include video-player.html
	src="/v4/images/video/Video 13.mp4"
	width=1532
	height=978
	caption="Démonstration vidéo expliquant comment ajouter des broches."
%}


## Panneau Broche
{: #pin-panel}

Vous pouvez modifier les broches dans le panneau **Broche** de la zone du **panneau inférieur**.

Les modifications apportées dans le panneau Broche sont **appliquées en direct** : chaque changement de champ déclenche immédiatement
une action de mise à jour de la broche (aucune étape distincte de validation/application).

Sections du panneau Broche :

1. **Nom**
	- Case à cocher Afficher (`show_name`)
	- Champ de texte Nom (`name`)
	- Case à cocher Centrer sur la broche (`centre_name`)
2. **Numéro**
	- Case à cocher Afficher (`show_number`)
	- Champ de texte Numéro (`number`)
	- Champ numérique Décalage (`number_pos`)
3. **Type**
	- Liste déroulante Forme (`which`)
	- Liste déroulante Électrique (`elec`)
	- Champ numérique Longueur (`length`, plage de l’interface : 5..50)

Remarques :

- La forme détermine l’apparence du symbole et certains comportements visuels particuliers.
- Les formes `Cross` et le type électrique `Not Connected` dessinent tous deux un marqueur en croix.
- Les styles de forme `Power` et `Hidden` sont rendus avec la couleur des broches masquées.

## Types électriques des broches et comportement DRC
{: #pin-electrical-types-and-drc-behavior}

Le choix du type électrique approprié est essentiel. Le DRC utilise ces types pour détecter
les erreurs de connexion.

Valeurs actuelles dans le code source de TinyCAD v4 (`elec`) :

- `0` Entrée
- `1` Sortie
- `2` Trois états
- `3` Collecteur ouvert
- `4` Passif
- `5` Entrée/Sortie
- `6` Non connectée
- `7` Libre
- `8` Non spécifié
- `9` Entrée d’alimentation
- `10` Sortie d’alimentation
- `11` Émetteur ouvert

Conseils généraux :

- Définissez les signaux réellement pilotés comme **Sortie**.
- Définissez les signaux uniquement récepteurs comme **Entrée**.
- Utilisez **Entrée d’alimentation/Sortie d’alimentation** lorsque la sémantique de pilotage de l’alimentation est importante pour le DRC.
- Utilisez **Non connectée** uniquement pour les broches intentionnellement non connectées.
- Utilisez **Libre**/**Non spécifié** avec prudence et de manière cohérente dans toute une bibliothèque.

Conséquences pratiques pour le DRC :

- Un type de broche incorrect peut provoquer de fausses erreurs DRC (ou masquer des erreurs réelles).
- Les noms des broches d’alimentation doivent correspondre aux noms d’alimentation prévus pour assurer le comportement automatique.

## Broches d’alimentation et broches masquées
{: #power-and-hidden-pins}

Les broches d’alimentation et les broches masquées sont visibles lors de la modification du symbole, mais elles sont généralement
masquées lorsque le symbole est placé dans un dessin.

Pour les **broches d’alimentation** en particulier :

- Le nom de la broche sert de nom de réseau d’alimentation.
- La connectivité est automatique lorsque les noms d’alimentation correspondent.
- Les fils ne sont normalement pas tracés directement jusqu’à ces broches d’alimentation masquées dans la
	vue du symbole placé.

Pour les **broches masquées** :

- Elles restent électriquement actives.
- Utilisez-les lorsque vous souhaitez dessiner vous-même la forme des broches et leurs libellés.

## Symboles multiparties (éléments par boîtier)
{: #multi-part-symbols-parts-per-package}

TinyCAD prend en charge les composants comportant plusieurs unités logiques dans un même boîtier (par
exemple, des portes quadruples).

Deux types de symboles multiparties sont utilisés :

1. Symboles multiparties **homogènes** :
	 - les éléments partagent le même contour,
	 - ils diffèrent généralement uniquement par les numéros de broches.
2. Symboles multiparties **hétérogènes** :
	 - les éléments peuvent avoir des contours différents,
	 - les éléments peuvent également avoir des jeux de broches/fonctions différents.

Utilisez le type homogène lorsque les éléments sont interchangeables ; utilisez le type hétérogène lorsque chaque élément
remplit une fonction distincte.

### Procédure multipartie
{: #multi-part-workflow}

1. Déterminez d’abord si le symbole sera homogène ou hétérogène.
2. Définissez le nombre d’éléments par boîtier.

Pour les éléments homogènes :
- Le premier élément définit la forme du symbole et la disposition des broches

Pour les éléments hétérogènes :
- Vous pouvez dessiner une forme différente pour chaque élément

## Attributs et propriétés du symbole
{: #symbol-attributes-and-properties}

Vous pouvez modifier les attributs du symbole dans le panneau **Symbole**, dans le **panneau inférieur**.

Outre le graphisme et les broches, définissez soigneusement les attributs du symbole :

- Nom principal du symbole (et alias, le cas échéant),
- Format **Réf** par défaut (par exemple `U?`, `R?`, `C?`),
- **Nom/Valeur** par défaut,
- Attributs/paramètres supplémentaires (par exemple, boîtier/empreinte, champs de
	modèle de simulation ou métadonnées propres au projet).

## Définir un modèle SPICE
{: #set-a-spice-model}

Sélectionnez le symbole dans une bibliothèque modifiable et ouvrez son onglet **SPICE**. Choisissez **Fourni → Rechercher un modèle SPICE…** pour lier un modèle et vérifier la correspondance de ses broches, ou **Personnalisé** pour modifier le modèle d’instance et le texte du modèle. Enregistrez la bibliothèque pour appliquer cette valeur par défaut aux placements futurs. Consultez [Modèles SPICE fournis](../Bundled-SPICE-Models/#set-a-library-default-or-edit-a-custom-copy) pour en savoir plus sur le sélecteur, le choix des modèles et les copies personnalisées.

## Enregistrer, dupliquer, renommer, supprimer
{: #save-duplicate-rename-delete}

Actions courantes de gestion des symboles lors de la modification d’une bibliothèque :

- **Enregistrer/mettre à jour** le symbole actuel pour écrire les modifications.
- **Dupliquer** pour créer des variantes (recommandé plutôt que de modifier
	de manière destructive un symbole de base).
- **Renommer** pour uniformiser les noms.
- **Supprimer** les symboles obsolètes (annulez la suppression en cas d’erreur).

Utilisez la duplication pour créer des variantes de boîtier/valeur qui partagent le même graphisme, mais diffèrent par leurs
valeurs par défaut.

## Liste de vérification avant la publication d’un symbole
{: #validation-checklist-before-publishing-a-symbol}

Avant d’utiliser largement un symbole, vérifiez les points suivants :

1. Les broches sont sur la grille et faciles à câbler.
2. Les numéros de broches sont complets et uniques pour chaque élément.
3. Les types électriques sont correctement définis pour toutes les broches.
4. Le comportement des broches d’alimentation/masquées est intentionnel.
5. La configuration multipartie (le cas échéant) est correcte.
6. Les valeurs par défaut du nom/de la référence sont pertinentes.
7. Le symbole reste lisible au niveau de zoom normal du dessin.

Placez ensuite le symbole dans un schéma de test et lancez le DRC.

## Conseils de dépannage
{: #troubleshooting-tips}

- **Les fils ne se connectent pas au symbole :** vérifiez le positionnement des extrémités des broches et leur
	alignement sur la grille.
- **Erreurs DRC inattendues :** vérifiez le type électrique de chaque broche.
- **Comportement incorrect d’un élément dans un symbole multipartie :** revérifiez la sélection de l’élément et la numérotation des broches
	pour chaque élément.
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
