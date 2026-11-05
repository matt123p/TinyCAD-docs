---
layout: default
---
# Importation de symboles depuis KiCAD
{: #importing-symbols-from-kicad}

L’importation de symboles depuis une bibliothèque de symboles KiCAD est une nouvelle fonctionnalité de TinyCAD v4.

## Présentation de KiCad
{: #kicad-background}

[KiCad](https://www.kicad.org/) est une suite populaire de conception électronique open source. Son éditeur de symboles stocke les symboles schématiques dans des fichiers de bibliothèque de symboles. Dans les versions actuelles de KiCad, ces bibliothèques de symboles utilisent généralement le format moderne `.kicad_sym` fondé sur les expressions S.

## Éléments importables par TinyCAD
{: #what-tinycad-can-import}

TinyCAD importe actuellement des symboles depuis :

- les fichiers `.kicad_sym`

Le fichier doit être un fichier de bibliothèque de symboles KiCad dont la racine est `kicad_symbol_lib`. En pratique, cela signifie que :

- Pris en charge : les bibliothèques de symboles KiCad modernes enregistrées au format `.kicad_sym`
- Non pris en charge : les anciennes bibliothèques de symboles KiCad `.lib`
- Non pris en charge : les empreintes KiCad, les fichiers PCB, les projets, les schémas ou les autres fichiers qui ne contiennent pas de symboles

## Emplacement de la commande dans l’interface
{: #where-the-command-is-in-the-ui}

La commande d’importation s’appelle **Import KiCad Symbols** (Importer des symboles KiCad).

Selon la manière dont vous utilisez TinyCAD, vous la trouverez à l’un des emplacements suivants :

- Application de bureau (Electron) : **File > Import > KiCad Symbols...** (Fichier > Importer > Symboles KiCad...)
- Mode navigateur/système de fichiers : menu **File** (Fichier) de la barre d’outils, puis **Import KiCad Symbols** (Importer des symboles KiCad)

Après avoir sélectionné un fichier `.kicad_sym`, TinyCAD lit tous les symboles de cette bibliothèque, puis affiche l’une des deux boîtes de dialogue d’importation selon ce que vous modifiez à ce moment-là.

## Deux modes d’importation
{: #two-import-modes}

Le comportement de l’importation dépend de si vous modifiez un schéma ou une bibliothèque.

### Importation dans un schéma
{: #import-into-a-design}

Utilisez cette méthode si vous souhaitez placer un symbole KiCad dans le schéma actuel sans l’enregistrer au préalable dans une bibliothèque TinyCAD.

Déroulement :

- TinyCAD ouvre la boîte de dialogue **Import Symbol** (Importer un symbole).
- Vous pouvez choisir un symbole dans le fichier `.kicad_sym` sélectionné.
- Lorsque vous cliquez sur **Insert** (Insérer), TinyCAD insère directement ce symbole dans le dessin actuel.
- Le symbole est inséré à la position actuelle du pointeur de la souris.
- Cette opération n’ajoute **pas** le symbole à l’une de vos bibliothèques `.tclib` externes.

C’est la méthode la plus rapide lorsque vous n’avez besoin d’un symbole que pour le schéma actuel.

### Importation dans une bibliothèque
{: #import-into-a-library}

Utilisez cette méthode si vous souhaitez conserver les symboles KiCad importés en tant que symboles réutilisables d’une bibliothèque TinyCAD.

Déroulement :

- Vous devez d’abord ouvrir une bibliothèque TinyCAD pour la modifier.
- TinyCAD ouvre la boîte de dialogue **Import KiCad Symbols** (Importer des symboles KiCad).
- Tous les symboles importés sont présélectionnés.
- Vous pouvez cocher ou décocher les symboles, ou utiliser **Select all** (Tout sélectionner).
- En cliquant sur **Import selected** (Importer la sélection), vous fusionnez ces symboles dans la bibliothèque TinyCAD actuelle.
- TinyCAD ouvre automatiquement dans l’éditeur de bibliothèque le dernier symbole importé.
- Vous enregistrez ensuite la bibliothèque comme d’habitude.

C’est la méthode à privilégier si vous souhaitez réutiliser les symboles importés dans plusieurs dessins.

## Procédure : importer dans un schéma
{: #step-by-step-import-into-a-design}

1. Ouvrez le schéma sur lequel vous souhaitez travailler.
2. Lancez **Import KiCad Symbols** (Importer des symboles KiCad) depuis le menu File (Fichier).
3. Choisissez un fichier `.kicad_sym` KiCad.
4. Dans la boîte de dialogue **Import Symbol** (Importer un symbole), cliquez sur le symbole souhaité.
5. Consultez la brève ligne de métadonnées affichée pour chaque symbole :
   - le préfixe de référence, par exemple `U?`
   - le nombre d’unités pour les symboles multi-unités
6. Cliquez sur **Insert** (Insérer).
7. Le symbole est placé dans le dessin actuel à la position actuelle du pointeur de la souris.
8. Après l’importation, ajustez au besoin le texte, la visibilité des broches ou les éléments graphiques.

## Procédure : importer dans une bibliothèque
{: #step-by-step-import-into-a-library}

1. Ouvrez ou créez une bibliothèque TinyCAD pour la modifier.
2. Si vous utilisez l’application de bureau, voici une méthode courante :
   - ouvrez le panneau **Libraries** (Bibliothèques)
   - utilisez **Add** (Ajouter) pour charger une bibliothèque existante, ou **New** (Nouvelle) pour en créer une
   - ouvrez cette bibliothèque en mode édition
3. Lancez **Import KiCad Symbols** (Importer des symboles KiCad).
4. Choisissez un fichier `.kicad_sym` KiCad.
5. Dans la boîte de dialogue **Import KiCad Symbols** (Importer des symboles KiCad), laissez tous les symboles sélectionnés ou décochez ceux dont vous ne voulez pas.
6. Cliquez sur **Import selected** (Importer la sélection).
7. Examinez les symboles importés dans l’éditeur de bibliothèque.
8. Enregistrez la bibliothèque.

## Fonctionnalités des symboles prises en charge
{: #supported-symbol-features}

TinyCAD importe actuellement les fonctionnalités suivantes des symboles KiCad :

- Noms des symboles, préfixes de référence et descriptions
- Propriétés supplémentaires des symboles sous forme d’attributs TinyCAD
- État masqué ou visible des champs courants tels que Value et Reference
- Broches, notamment leurs noms, numéros, longueurs, types électriques et plusieurs formes
- Symboles multi-unités
- Symboles hérités utilisant le mécanisme `extends` de KiCad
- Variantes de style De Morgan, importées en tant que symbole distinct avec ` (De Morgan)` ajouté au nom
- Éléments graphiques de base utilisés dans le corps des symboles :
  - rectangles
  - cercles
  - polylignes
  - arcs
  - courbes de Bézier
  - texte
- Styles de trait et modes de remplissage de base lorsqu’un équivalent existe dans TinyCAD

## Éléments qui ne fonctionneront pas ou qui peuvent différer
{: #what-will-not-work-or-may-not-match-exactly}

L’importateur est utile, mais il ne s’agit pas d’un outil complet de conversion de KiCad vers TinyCAD. Voici les principales limites de l’implémentation actuelle.

### Limites liées au format de fichier
{: #file-format-limits}

- Seuls les fichiers `.kicad_sym` sont acceptés.
- Si le fichier est vide, mal formé ou n’est pas une bibliothèque de symboles KiCad, l’importation échoue.

### Limites des éléments graphiques et de la mise en page
{: #graphics-and-layout-limits}

- Seuls les éléments graphiques primitifs énumérés ci-dessus sont importés.
- Tout contenu de symbole KiCad qui ne fait pas partie des éléments pris en charge est ignoré.
- Les symboles de bibliothèque importés sont repositionnés pour tenir sur la page TinyCAD avec une marge et tenter de rester alignés sur la grille de TinyCAD.
- Certains éléments géométriques peuvent présenter de légères différences, car KiCad et TinyCAD utilisent des modèles de dessin internes différents.
- Les arcs KiCad sont approximés à l’aide de points de courbe TinyCAD.

### Limites du texte et du style
{: #text-and-styling-limits}

- La famille de polices n’est pas conservée ; le texte importé utilise les paramètres de police de TinyCAD.
- Les détails précis de mise en page du texte, tels que l’alignement, ne sont pas entièrement conservés.
- La rotation du texte est ramenée au modèle d’orientation plus simple de TinyCAD, au lieu de préserver tous les angles possibles.
- La couleur du texte des broches n’est pas conservée.

### Différences de comportement des symboles
{: #symbol-behavior-differences}

- L’importation dans un schéma insère le symbole uniquement dans le dessin actuel. Elle ne crée ni ne met à jour d’entrée réutilisable dans une bibliothèque `.tclib`.
- L’importation dans une bibliothèque crée des entrées réutilisables dans une bibliothèque TinyCAD, mais vous devez ensuite enregistrer la bibliothèque.
- Si les noms des symboles importés entrent en conflit avec des noms existants dans la bibliothèque de destination, TinyCAD renomme automatiquement les nouvelles entrées en ajoutant un suffixe numérique.
- Si un symbole KiCad comporte une variante De Morgan, TinyCAD l’importe comme entrée de symbole distincte plutôt que comme bascule de style dynamique.

## Conseils pratiques
{: #practical-advice}

- Si vous n’avez besoin d’un symbole qu’une seule fois, importez-le dans le schéma.
- Si vous pensez réutiliser le symbole, importez-le dans une bibliothèque.
- Commencez par une petite bibliothèque `.kicad_sym` afin de vérifier l’aspect des tracés, du texte et de la disposition des broches dans TinyCAD.
- Après l’importation, vérifiez soigneusement les parties multi-unités et les variantes De Morgan.
- Si un symbole semble incorrect, ouvrez-le dans l’éditeur de bibliothèque TinyCAD et ajustez manuellement le placement du texte, les tracés ou les attributs.

## Résumé
{: #summary}

L’importation KiCad de TinyCAD vise à intégrer rapidement dans TinyCAD les bibliothèques de symboles KiCad modernes, en particulier les symboles schématiques standard constitués de broches, de texte et d’éléments graphiques simples. Elle fonctionne au mieux avec les fichiers `.kicad_sym` et est particulièrement pratique si vous souhaitez :

- insérer directement un symbole dans le dessin actuel, ou
- transférer des symboles KiCad sélectionnés dans une bibliothèque TinyCAD pour les réutiliser

Pour les symboles plus complexes, prévoyez une courte retouche manuelle après l’importation.

## Pages connexes
{: #related-pages}

- [Modification d’un symbole](../Editing-a-Symbol/)
- [Utilisation des bibliothèques de symboles](../Using-Symbol-Libraries/)

- Retour à [Symboles et bibliothèques](../Symbols-and-Libraries/)
- Retour à [Sommaire de la v4](../CONTENTS/)
