---
layout: default
title: 2. Gates and truth tables
---
# 2. Portes et tables de vérité
{: #gates-and-truth-tables}

[Précédent](/v4/XSPICE-Tutorial-01/) · [Sommaire](/v4/Simulation-Tutorials/) · [Suivant](/v4/XSPICE-Tutorial-03/)

Les exemples de ce chapitre sont fournis avec TinyCAD. Choisissez **Ouvrir un exemple (Open Example) → XSPICE et tutoriel numérique**, sélectionnez l’exemple indiqué, puis choisissez **Ouvrir le dessin (Open Drawing)**. Aucun téléchargement n’est nécessaire.

Ouvrez **logic-nand**. X1 contient des ponts ADC,
une porte NAND XSPICE à deux entrées et un pont de sortie DAC. Des sources d’impulsions indépendantes sollicitent
A et B à des fréquences différentes. Lancez le transitoire de 8 µs et affichez A, B et Y.

![Circuit de test NAND](/v4/Images/simulation-tutorials/xspice/logic-nand-circuit.png)
![Formes d’onde NAND calculées](/v4/Images/simulation-tutorials/xspice/logic-nand-results.png)

La fonction booléenne est `Y = NOT(A AND B)`:

| A | B | Y stabilisé |
| --- | --- | --- |
| 0 | 0 | 1 |
| 0 | 1 | 1 |
| 1 | 0 | 1 |
| 1 | 1 | 0 |

Dans la représentation analogique tracée, zéro correspond à environ 0 V et un
à environ 5 V. La sortie ne passe à l’état bas que lorsque les deux entrées sont
à l’état haut. Observez le milieu de chaque intervalle stable, et non l’instant exact où
une entrée franchit un seuil. La porte a des délais de propagation de 20 ns à la montée et à la descente ; les ponts et leurs fronts finis ajoutent des délais supplémentaires.

## Réaliser une expérience délibérée sur la table de vérité
{: #run-a-deliberate-truth-table-experiment}

Utilisez les curseurs du graphique pour repérer un intervalle stable pour chaque ligne. Notez les valeurs de A, B et Y
une fois la sortie stabilisée. Si une combinaison d’entrées très brève ne se produit que
pendant le changement de deux entrées, n’utilisez pas cette transition comme preuve d’une ligne stable
de la table de vérité. Pour une vérification manuelle sans ambiguïté, réglez les deux sources sur une tension continue (DC) de
0 V ou 5 V, relancez le transitoire et testez individuellement les quatre combinaisons.

Dans le modèle SPICE intégré à X1, les instructions principales sont :

```spice
Ag [da db] dy ng
.model ng d_nand(rise_delay=20n fall_delay=20n)
```

Les crochets regroupent un vecteur de ports d’entrée. `da`, `db` et `dy` sont des
nœuds internes pilotés par événements. Ce ne sont pas des réseaux électriques ordinaires sur lesquels on peut
raccorder directement une résistance. Les ponts relient ces nœuds internes
aux bornes analogiques visibles dans le dessin.

Pour expérimenter avec une autre fonction, faites une copie du dessin et modifiez
le type de modèle dans le prologue SPICE de X1 pour une porte compatible, telle que `d_and`.
Conservez une interface de ports vecteur/scalaires compatible. La table de vérité de AND doit
être l’inverse du résultat NAND une fois les transitions stabilisées.

## Ce que cet exemple ne démontre pas
{: #what-this-example-does-not-establish}

Le modèle ne représente pas un circuit intégré en boîtier identifié, ni ses diodes ESD, ses limites de fan-out,
ses pointes de courant d’alimentation ou les temps du fabricant en fonction de la charge. Le délai de 20 ns est
un paramètre d’entrée de cette expérience. Une table de vérité correcte démontre le fonctionnement logique
pour les états testés, mais pas la compatibilité électrique avec une autre puce.

En cas de problème, vérifiez d’abord les niveaux des sources enregistrés, puis les seuils des ponts,
puis le modèle de porte et l’ordre des ports. Une entrée maintenue à 2 V est indéfinie
avec ces réglages de pont et ne peut être affectée à aucune valeur booléenne simplement
parce qu’elle est plus proche d’un des rails.

Les définitions de modèle et les conventions de ports sont documentées dans le chapitre des modèles de code XSPICE
du [manuel ngspice](https://ngspice.sourceforge.io/docs.html).

## Télécharger les circuits de la leçon
{: #download-the-lesson-circuits}

Les mêmes exemples sont déjà disponibles dans **Ouvrir un exemple (Open Example)**. Pour en obtenir une copie indépendante, téléchargez un dessin `.dzn` et utilisez **Fichier → Ouvrir (File → Open)** dans TinyCAD. Le fichier `.cir` associé contient du texte SPICE à examiner ou à utiliser avec un simulateur externe compatible ; ce n’est pas un dessin TinyCAD. L’exécution de nouveaux circuits XSPICE nécessite Desktop.

| Exemple | Dessin | Liste de connexions |
| --- | --- | --- |
| logic-nand | [Dessin TinyCAD](/v4/examples/simulation-tutorials/xspice/logic-nand.dzn) | [Texte SPICE](/v4/examples/simulation-tutorials/xspice/logic-nand.cir) |
