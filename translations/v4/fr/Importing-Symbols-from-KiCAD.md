---
layout: default
---
# Importation de symboles depuis KiCAD
{: #importing-symbols-from-kicad}

L’importation de symboles depuis une bibliothèque de symboles KiCAD est une nouvelle fonctionnalité de TinyCAD v4.

## Présentation de KiCad
{: #kicad-background}

[KiCad](https://www.kicad.org/) est une suite de conception électronique open source populaire. Son éditeur de symboles enregistre les symboles schématiques dans des fichiers de bibliothèque de symboles. Dans les versions actuelles de KiCad, ces bibliothèques de symboles utilisent généralement le format moderne `.kicad_sym` fondé sur les expressions S.

## Ce que TinyCAD peut importer
{: #what-tinycad-can-import}

TinyCAD importe actuellement les symboles depuis les fichiers suivants :

- fichiers `.kicad_sym`

Le fichier doit être un fichier de bibliothèque de symboles KiCad dont la racine est `kicad_symbol_lib`. En pratique, cela signifie que :

- Pris en charge : bibliothèques de symboles KiCad modernes enregistrées au format `.kicad_sym`
- Non pris en charge : bibliothèques de symboles KiCad héritées `.lib`
- Non pris en charge : empreintes KiCad, fichiers PCB, projets, schémas ou autres fichiers qui ne contiennent pas de symboles

## Emplacement de la commande dans l’interface
{: #where-the-command-is-in-the-ui}

La commande d’importation s’appelle **Importer des symboles KiCad (Import KiCad Symbols)**.

Selon le mode d’exécution de TinyCAD, vous la trouverez à l’un des emplacements suivants :

- Application de bureau (Electron) : **Fichier (File) > Importer (Import) > Symboles KiCad (KiCad Symbols)...**
- Mode navigateur/système de fichiers : menu **Fichier (File)** de la barre d’outils, puis **Importer des symboles KiCad (Import KiCad Symbols)**

Sélectionnez une bibliothèque `.kicad_sym` ainsi que tous les fichiers SPICE associés dont elle a besoin. TinyCAD lit la bibliothèque et affiche la boîte de dialogue d’importation pour le dessin actuel ou l’éditeur de bibliothèques.

## Deux modes d’importation
{: #two-import-modes}

Le comportement de l’importation varie selon que vous modifiez un dessin ou une bibliothèque.

### Importer dans un dessin
{: #import-into-a-design}

Utilisez cette méthode si vous souhaitez placer un symbole KiCad dans le schéma actuel sans l’enregistrer d’abord dans une bibliothèque TinyCAD.

Voici ce qui se passe :

- TinyCAD ouvre une boîte de dialogue **Importer un symbole (Import Symbol)**.
- Vous pouvez choisir un symbole dans le fichier `.kicad_sym` sélectionné.
- Lorsque vous cliquez sur **Insérer (Insert)**, TinyCAD insère directement ce symbole dans le dessin actuel.
- Le symbole est inséré à la position actuelle de la souris.
- Cette opération n’ajoute **pas** le symbole à l’une de vos bibliothèques `.tclib` externes.

C’est la méthode la plus rapide si vous n’avez besoin d’un symbole que pour le dessin actuel.

### Importer dans une bibliothèque
{: #import-into-a-library}

Utilisez cette méthode si vous souhaitez conserver les symboles KiCad importés comme symboles réutilisables d’une bibliothèque TinyCAD.

Voici ce qui se passe :

- Vous devez d’abord ouvrir une bibliothèque TinyCAD en mode édition.
- TinyCAD ouvre une boîte de dialogue **Importer des symboles KiCad (Import KiCad Symbols)**.
- Tous les symboles importés sont présélectionnés.
- Vous pouvez cocher ou décocher des symboles, ou utiliser **Tout sélectionner (Select all)**.
- En cliquant sur **Importer la sélection (Import selected)**, vous fusionnez ces symboles dans la bibliothèque TinyCAD actuelle.
- TinyCAD ouvre automatiquement le dernier symbole importé dans l’éditeur de bibliothèques.
- Vous enregistrez ensuite la bibliothèque comme d’habitude.

C’est la bonne méthode si vous souhaitez réutiliser les symboles importés dans plusieurs dessins.

## Étapes : importer dans un dessin
{: #step-by-step-import-into-a-design}

1. Ouvrez le schéma sur lequel vous souhaitez travailler.
2. Lancez **Importer des symboles KiCad (Import KiCad Symbols)** depuis le menu Fichier.
3. Choisissez un fichier `.kicad_sym` KiCad.
4. Dans la boîte de dialogue **Importer un symbole (Import Symbol)**, cliquez sur le symbole souhaité.
5. Consultez la petite ligne de métadonnées affichée pour chaque symbole :
   - le préfixe de référence, par exemple `U?`
   - le nombre de parties, pour les symboles à plusieurs unités
6. Cliquez sur **Insérer (Insert)**.
7. Le symbole est placé dans le dessin actuel à la position actuelle de la souris.
8. Après l’importation, ajustez au besoin le texte, la visibilité des broches ou les éléments graphiques.

## Étapes : importer dans une bibliothèque
{: #step-by-step-import-into-a-library}

1. Ouvrez une bibliothèque TinyCAD existante ou créez-en une pour la modifier.
2. Si vous utilisez l’application de bureau, voici une méthode courante :
   - ouvrez le panneau **Bibliothèques (Libraries)**
   - utilisez **Ajouter (Add)** pour charger une bibliothèque existante, ou **Nouveau (New)** pour en créer une
   - ouvrez cette bibliothèque en mode édition
3. Lancez **Importer des symboles KiCad (Import KiCad Symbols)**.
4. Choisissez un fichier `.kicad_sym` KiCad.
5. Dans la boîte de dialogue **Importer des symboles KiCad (Import KiCad Symbols)**, laissez tous les symboles sélectionnés ou décochez ceux dont vous ne voulez pas.
6. Cliquez sur **Importer la sélection (Import selected)**.
7. Vérifiez les symboles importés dans l’éditeur de bibliothèques.
8. Enregistrez la bibliothèque.

## Importer des modèles SPICE avec les symboles
{: #import-spice-models-with-symbols}

TinyCAD lit les modèles SPICE pris en charge intégrés dans une bibliothèque de symboles KiCad moderne. Pour les modèles enregistrés séparément, sélectionnez les fichiers de modèles en même temps que le fichier `.kicad_sym` dans le sélecteur de fichiers. Incluez également tous les fichiers de modèles référencés par `.include`.

Si une définition SPICE n’a pas pu être importée, la boîte de dialogue affiche **Modèle SPICE ignoré (SPICE model skipped)** avec la raison. Vous pouvez tout de même importer le dessin et les propriétés du symbole. Ouvrez les paramètres **SPICE → Personnalisé (Custom)** du symbole importé pour examiner le modèle d’instance et le texte de modèle éventuel dans **Préambule (Prologue)**. TinyCAD utilise les affectations de broches et les substitutions de paramètres KiCad pour construire la définition.

Les entrées prises en charge comprennent les symboles à une seule unité associés à des cartes de modèle ou à des sous-circuits standard, les résistances, condensateurs et inductances idéaux, ainsi que les sources de tension ou de courant continu. Pour une définition SPICE KiCad héritée, ouvrez-la et enregistrez-la d’abord dans une version récente de KiCad. Si vous avez besoin d’un autre modèle, utilisez le [sélecteur de modèles fourni](../Bundled-SPICE-Models/).

## Fonctionnalités de symboles prises en charge
{: #supported-symbol-features}

TinyCAD importe actuellement les fonctionnalités de symboles KiCad suivantes :

- Noms des symboles, préfixes de référence et descriptions
- Propriétés de symbole supplémentaires sous forme d’attributs TinyCAD
- État masqué ou visible des champs courants tels que Valeur et Référence
- Broches, y compris leurs noms, numéros, longueur, type électrique et plusieurs formes
- Symboles à plusieurs unités
- Symboles hérités utilisant le mécanisme `extends` de KiCad
- Variantes de style De Morgan, importées comme symbole séparé dont le nom est complété par ` (De Morgan)`
- Éléments graphiques de base utilisés dans les corps des symboles :
  - rectangles
  - cercles
  - lignes polygonales
  - arcs
  - courbes de Bézier
  - texte
- Styles de ligne de base et états de remplissage lorsqu’ils ont un équivalent dans TinyCAD

## Ce qui ne fonctionnera pas ou risque de ne pas correspondre exactement
{: #what-will-not-work-or-may-not-match-exactly}

L’importateur est utile, mais il ne s’agit pas d’un moteur complet de conversion de KiCad vers TinyCAD. Voici les principales limites de l’implémentation actuelle.

### Limites du format de fichier
{: #file-format-limits}

- Seuls les fichiers `.kicad_sym` sont acceptés.
- Si le fichier est vide, mal formé ou ne constitue pas une bibliothèque de symboles KiCad, l’importation échoue.

### Limites des graphiques et de la mise en page
{: #graphics-and-layout-limits}

- Seuls les primitives graphiques répertoriées ci-dessus sont importées.
- Tout contenu de symbole KiCad qui ne relève pas de ces primitives prises en charge est ignoré.
- Les symboles de bibliothèque importés sont repositionnés pour être placés sur la page TinyCAD avec une marge et pour rester alignés autant que possible sur la grille de TinyCAD.
- Certaines formes géométriques peuvent présenter de légères différences, car KiCad et TinyCAD utilisent des modèles de dessin internes différents.
- Les arcs KiCad sont approximés par des points de courbe TinyCAD.

### Limites du texte et de la mise en forme
{: #text-and-styling-limits}

- La famille de polices n’est pas conservée ; le texte importé utilise les paramètres de police de TinyCAD.
- Les détails précis de mise en page du texte, comme la justification, ne sont pas entièrement conservés.
- La rotation du texte est ramenée au modèle d’orientation plus simple de TinyCAD au lieu de conserver tous les angles possibles.
- La couleur du texte des broches n’est pas conservée.

### Différences de comportement des symboles
{: #symbol-behavior-differences}

- L’importation dans un dessin insère le symbole uniquement dans le dessin actuel. Elle ne crée ni ne met à jour d’entrée réutilisable dans une bibliothèque `.tclib`.
- L’importation dans une bibliothèque crée des entrées TinyCAD réutilisables, mais vous devez ensuite enregistrer la bibliothèque.
- Si les noms des symboles importés sont en conflit avec des noms existants dans la bibliothèque de destination, TinyCAD renomme automatiquement les nouvelles entrées en leur ajoutant un suffixe numérique.
- Si un symbole KiCad comporte une variante De Morgan, TinyCAD l’importe comme entrée de symbole distincte plutôt que comme option de style dynamique.

## Conseils pratiques
{: #practical-advice}

- Si vous n’avez besoin d’un symbole qu’une seule fois, importez-le dans le dessin.
- Si vous prévoyez de réutiliser le symbole, importez-le dans une bibliothèque.
- Commencez par une petite bibliothèque `.kicad_sym` afin de vérifier le rendu des tracés, du texte et de la position des broches dans TinyCAD.
- Après l’importation, vérifiez attentivement les composants à plusieurs unités et les variantes De Morgan.
- Si un symbole ne s’affiche pas correctement, ouvrez-le dans l’éditeur de bibliothèques TinyCAD et corrigez manuellement la position du texte, les tracés ou les attributs.

## Résumé
{: #summary}

L’importation KiCad de TinyCAD vise à intégrer rapidement dans TinyCAD les bibliothèques de symboles KiCad modernes, en particulier les symboles schématiques standard composés de broches, de texte et d’éléments graphiques simples. Elle fonctionne mieux avec les fichiers `.kicad_sym` et est particulièrement pratique si vous souhaitez :

- placer directement un symbole dans le dessin actuel, ou
- transférer des symboles KiCad sélectionnés dans une bibliothèque TinyCAD pour les réutiliser

Pour tout élément plus complexe, prévoyez une brève retouche manuelle après l’importation.

## Pages connexes
{: #related-pages}

- [Modifier un symbole](../Editing-a-Symbol/)
- [Utiliser les bibliothèques de symboles](../Using-Symbol-Libraries/)

- Retour à [Symboles et bibliothèques](../Symbols-and-Libraries/)
- Retour au [sommaire de la v4](../CONTENTS/)
