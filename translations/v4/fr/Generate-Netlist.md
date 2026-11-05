---
layout: default
---
# Générer une netlist
{: #generate-netlist}

TinyCAD peut générer un fichier de netlist à utiliser pour la conception de circuits imprimés et d’autres outils en aval.

Une netlist est une description textuelle de deux éléments principaux :

- les instances de composants présentes dans la conception
- les broches reliées entre elles sur chaque net

TinyCAD lit les connexions électriques du schéma et écrit ces informations dans le format de sortie de votre choix.

## À quoi sert une netlist générée
{: #what-a-generated-netlist-is-for}

La netlist générée sert principalement à transférer un schéma terminé vers un autre outil, en particulier un logiciel de conception de circuits imprimés.

Voici quelques utilisations courantes :

- importer le circuit dans un outil de conception de circuits imprimés
- vérifier que les connexions du circuit imprimé correspondent au schéma
- examiner les références des composants et les noms de nets dans un format texte brut

TinyCAD ne réalise pas le routage du circuit imprimé à votre place. Il exporte les données de connectivité pour qu’un autre outil puisse les utiliser.

## Avant de générer la netlist
{: #before-generating-the-netlist}

L’exportation de la netlist dépend de connexions électriques conformes aux attentes de TinyCAD dans le schéma. Il est recommandé d’exécuter [Vérification des règles de conception](../Design-Rules-Check/) au préalable.

## L’attribut `Package`
{: #the-package-attribute}

Pour l’exportation vers un outil de conception de circuits imprimés, de nombreux outils de destination ont besoin que chaque composant comporte un nom d’empreinte ou de boîtier.

Dans TinyCAD, cette information est généralement stockée sous la forme d’un attribut de symbole nommé `Package`.

Lors de l’exportation de la netlist, TinyCAD écrit cet attribut dans le fichier de sortie afin que le logiciel de conception de circuits imprimés puisse associer le symbole du schéma à l’empreinte appropriée.

Un même symbole peut utiliser différentes valeurs de boîtier selon les parties d’une conception. Vérifiez donc l’attribut du composant placé, et pas seulement la valeur par défaut de la bibliothèque.

## Générer la netlist
{: #how-to-generate-the-netlist}

1. Ouvrez la conception à exporter.
2. Lancez la commande d’exportation de netlist depuis les outils d’exportation de l’interface de TinyCAD.
3. Choisissez le format de sortie requis par l’outil de destination.
4. Choisissez le nom du fichier et enregistrez le fichier exporté.


## Formats de la boîte de dialogue Générer une netlist
{: #formats-in-the-generate-netlist-dialog}

La boîte de dialogue propose actuellement les formats suivants :

- `PADS-PCB`
- `PADS-PCB-WITH-VALUE`
- `Eagle SCR`
- `Protel`
- `gEDA PCB`

## Signification des formats
{: #what-the-formats-mean}

### PADS-PCB
{: #pads-pcb}

Crée un fichier de netlist au format PADS.

### PADS-PCB-WITH-VALUE
{: #pads-pcb-with-value}

Crée un fichier de netlist au format PADS et inclut également la valeur du composant, lorsqu’elle est disponible.

### Eagle SCR
{: #eagle-scr}

Crée un fichier de script Eagle.

### Protel
{: #protel}

Crée un fichier de netlist au format Protel.

### gEDA PCB
{: #geda-pcb}

Crée un fichier de netlist gEDA PCB.

## SPICE et VHDL
{: #spice-and-vhdl}

Les exportations SPICE et VHDL sont gérées séparément de la boîte de dialogue principale `Generate Netlist`.

Si vous en avez besoin, utilisez :

- `Generate Spice NetList`
- `Create VHDL File`

Ces commandes génèrent toujours d’abord les données des nets, mais elles utilisent leurs propres outils d’exportation dédiés.

## Nom de fichier utilisé
{: #what-file-name-is-used}

TinyCAD utilise le nom du dessin actif et modifie l’extension du fichier pour l’adapter au format d’exportation.

Exemples :

- `.net`
- `.scr`
- `.cir`
- `.vhdl`


## Points à vérifier après l’exportation
{: #what-to-check-after-export}

Les netlists étant des fichiers texte, elles sont faciles à examiner dans un éditeur de texte.

Vérifiez au moins les points suivants :

- les références des composants sont présentes et uniques
- les noms de nets attendus apparaissent dans le fichier
- les valeurs de boîtier ou d’empreinte sont présentes lorsqu’elles sont requises
- aucune pièce ni connexion ne semble manquer

Si le résultat semble incorrect, la cause se trouve généralement dans les données du schéma plutôt que dans l’étape d’exportation elle-même.

## Causes fréquentes de netlists incorrectes
{: #common-causes-of-incorrect-netlists}

- une ligne de dessin a été utilisée à la place d’un fil
- un fil s’arrête près d’une broche sans y être réellement raccordé
- il manque une référence à un composant
- un attribut `Package` requis est manquant ou incohérent
- des étiquettes censées établir une connexion ne correspondent pas exactement

## Pages connexes
{: #related-pages}

- [Éditeur de netlist](../Netlist-Editor/)
- [Vérification des règles de conception](../Design-Rules-Check/)
- [Sortie SPICE](../SPICE-output/)

- Retour à [Fonctions avancées](../Advanced/)
- Retour au [sommaire de la v4](../CONTENTS/)
