---
layout: default
---
# Sortie VHDL
{: #vhdl-output}

La sortie VHDL dans TinyCAD v4 fonctionne comme dans la version 3. TinyCAD utilise la connectivité de votre schéma, les définitions des broches des symboles et les symboles orientés VHDL pour générer une description VHDL de la conception.

L’exportation VHDL est disponible dans l’application de bureau. La version navigateur ne crée actuellement pas de fichiers VHDL.

## À quoi sert le VHDL
{: #what-vhdl-is-used-for}

VHDL signifie Very High Speed Integrated Circuit Hardware Description Language (langage de description matérielle pour circuits intégrés à très haute vitesse). Il sert à décrire du matériel numérique tel que des portes logiques, des compteurs, des machines à états, des bus et des blocs réutilisables de plus grande taille.

Le VHDL est couramment utilisé pour :

- simuler la logique numérique avant de construire le matériel
- décrire des blocs de conception réutilisables dont les entrées et les sorties sont définies
- construire des conceptions FPGA ou ASIC hiérarchiques à partir de modules plus petits
- transmettre une conception aux outils de synthèse ou de vérification en aval

En pratique, une conception VHDL définit généralement :

- une **entité** : les ports externes du bloc
- une **architecture** : la logique ou la structure interne

La prise en charge du VHDL par TinyCAD est particulièrement utile lorsque vous souhaitez représenter la structure d’une conception numérique sous forme de schéma et exporter cette structure au format VHDL.

## Préparer le schéma
{: #preparing-the-schematic}

Pour créer une sortie VHDL, construisez le schéma avec des symboles de la bibliothèque VHDL. Ces symboles sont conçus pour permettre à TinyCAD de reconnaître les broches qui sont des entrées, des sorties et des connexions nommées.

Vous trouverez également des symboles orientés VHDL sur [tinycad.net](https://www.tinycad.net/Search?key=%23vhdl).

Utilisez ces symboles comme n’importe quels autres symboles TinyCAD, en accordant une attention particulière à leur nommage :

- Pour les entrées et sorties de niveau supérieur, utilisez les symboles de la bibliothèque VHDL et attribuez à chacun le nom de signal requis.
- Les fils internes doivent porter le même nom partout où le même signal doit être connecté.
- Les noms, les directions et les numéros des broches des symboles personnalisés doivent être corrects.

TinyCAD nomme automatiquement les fils connectés, mais les étiquettes explicites restent le moyen le plus clair de contrôler les noms de signaux exportés.

## Comment TinyCAD associe les symboles au VHDL
{: #how-tinycad-pairs-symbols-with-vhdl}

TinyCAD permet de concevoir des systèmes hiérarchiques orientés VHDL sans recourir à sa fonctionnalité de schémas hiérarchiques à plusieurs fichiers.

Le flux de travail prévu est le suivant :

1. Créez ou rassemblez les fichiers VHDL qui définissent le comportement de vos blocs réutilisables.
2. Créez des symboles TinyCAD correspondants pour ces blocs dans une bibliothèque de projet.
3. Donnez à chaque symbole le même nom qu’au fichier VHDL ou à l’unité de conception correspondante.
4. Vérifiez que chaque broche du symbole possède le nom et la direction corrects, ainsi qu’un numéro de broche unique.

Chaque fois que vous placez l’un de ces symboles dans le schéma, TinyCAD peut associer l’instance du symbole au bloc VHDL portant le même nom.

Cela permet de construire facilement des conceptions de plus grande taille à partir de modules plus petits définis en VHDL, tout en dessinant la structure de niveau supérieur sous forme de schéma.

## Utiliser des bus
{: #working-with-buses}

Pour la sortie VHDL, ne définissez pas le bus logique au moyen de la fonctionnalité de dessin de BUS de TinyCAD. Définissez plutôt les bus en nommant directement les fils.

Exemples :

- `A(7:0)` définit un bus de 8 bits nommé `A`
- `A(3)` désigne un bit de ce bus
- `A(7:4)` désigne une tranche de ce bus

Utilisez le même style de nommage sur les symboles d’entrée et de sortie lorsqu’ils représentent des bus.

Pour les plages de bus de la forme `A(i:j)`, veillez à ce que `i` soit supérieur à `j`.

Vous pouvez tout de même dessiner une jonction de bus pour améliorer la lisibilité, mais pour l’exportation VHDL, le nommage des fils est essentiel, et non la représentation graphique du bus.

## Générer le fichier VHDL
{: #generating-the-vhdl-file}

Lorsque le schéma est prêt, exécutez la commande Créer VHDL (Create VHDL) dans TinyCAD.

TinyCAD effectue automatiquement une vérification des règles de conception dans le cadre du processus d’exportation. Vous pouvez également lancer cette vérification vous-même au préalable si vous souhaitez repérer les problèmes de câblage ou de symboles avant de générer la sortie.

## Liste de vérification pratique
{: #practical-checklist}

Avant l’exportation, vérifiez les points suivants :

- les entrées et sorties de niveau supérieur portent exactement les noms souhaités en VHDL
- les directions des broches des symboles personnalisés sont correctes
- les numéros de broches sont uniques pour chaque symbole
- les réseaux qui doivent être connectés partagent bien le même nom
- les bus sont nommés avec des plages au format VHDL, telles que `DATA(15:0)`

Si le VHDL généré ne correspond pas à vos attentes, la cause est généralement une définition de broche incorrecte, un nom de fil manquant ou un nommage incohérent des bus.

## Exemples de conceptions
{: #example-designs}

Le code source de TinyCAD comprend un petit exemple VHDL basé sur la conception d’un processeur 4 bits. L’examen de ces fichiers est un bon moyen de comprendre le nommage attendu des symboles et la structure du projet.

L’exemple est disponible dans le [dossier du dépôt des exemples VHDL de TinyCAD](https://github.com/matt123p/TinyCAD/tree/master/examples/vhdl).

- Retour à [Avancé](../Advanced/)
- Retour à [contenu de la version 4](../CONTENTS/)
