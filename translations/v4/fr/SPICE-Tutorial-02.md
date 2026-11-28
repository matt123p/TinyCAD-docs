---
layout: default
title: 2. Measuring DC voltage, current and power
---
# 2. Mesurer la tension continue, le courant et la puissance
{: #measuring-dc-voltage-current-and-power}

[Précédent](/v4/SPICE-Tutorial-01/) · [Sommaire](/v4/Simulation-Tutorials/) · [Suivant](/v4/SPICE-Tutorial-03/)

Les exemples de ce chapitre sont fournis avec TinyCAD. Choisissez **Ouvrir un exemple (Open Example) → Tutoriel SPICE (SPICE tutorial)**, sélectionnez l’exemple indiqué, puis choisissez **Ouvrir le dessin (Open Drawing)**. Aucun téléchargement n’est nécessaire.

Ouvrez **divider**. Conservez la source nominale de 5 V et les deux
résistances de 1 kΩ. L’objectif est de distinguer la tension de nœud, la tension aux bornes d’un composant,
le courant qui le traverse et la puissance qu’il absorbe.

## Mesures de tension
{: #voltage-measurements}

`out` désigne la tension de OUT par rapport au nœud 0. La tension aux bornes de R1 est
`VIN − VOUT`, qui vaut également 2,5 V dans ce cas. Cette égalité est fortuite : après avoir remplacé
R2 par une résistance de 2 kΩ, R1 présente une tension de 1,667 V tandis que R2 présente 3,333 V.

Utilisez **Simulation → SPICE → Insérer une sonde (Insert Probe)** pour mesurer la tension d’un nœud. Une sonde différentielle
mesure la tension de sa borne positive moins celle de sa borne négative. Reliez sa
pointe positive à IN et sa pointe négative à OUT pour mesurer R1. Inverser les pointes
inverse le résultat. Une sonde différentielle est particulièrement utile lorsque aucune des deux
bornes n’est reliée à la masse, par exemple pour un condensateur de couplage ou une sortie de pont.

## Mesures de courant
{: #current-measurements}

Utilisez une sonde de courant en série en coupant un fil et en insérant la sonde dans le
circuit. Elle est modélisée par une source de tension de zéro volt : le courant la traverse sans
chute de tension idéale. La connecter aux bornes de l’alimentation provoquerait un court-circuit.
Le courant positif de la sonde suit l’ordre de ses bornes positive et négative.
Les courants de branche des sources, tels que `v1#branch`, sont également directement disponibles.

Dans ce diviseur, le courant circule de V1 à travers R1 et R2 vers la masse. Le courant dans
les deux résistances est de 2,5 mA ; le courant de branche de V1 est de −2,5 mA, car elle fournit
ce courant par sa borne positive.

## Puissance et vérification du bilan énergétique
{: #power-and-an-energy-balance-check}

Utilisez la convention récepteur : `P = V × I`, le courant entrant par la borne
à laquelle la tension est définie comme positive. Une puissance positive est absorbée ; une puissance négative
est fournie.

| Composant | Calcul | Résultat nominal |
| --- | --- | --- |
| R1 | `(2.5 V)² / 1 kΩ` | +6,25 mW |
| R2 | `(2.5 V)² / 1 kΩ` | +6,25 mW |
| V1 | `5 V × (−2.5 mA)` | −12,5 mW |
| Somme | Source et charges | 0 W |

Ce bilan est un outil de débogage utile. Un facteur de 1000 indique souvent une
erreur de préfixe. Un signe incorrect indique souvent une orientation de sonde inversée.
Une charge supplémentaire inexpliquée peut révéler une jonction involontaire ou un branchement de mesure.

Les commandes **Mesures (Measurements)** de TinyCAD permettent de sélectionner la tension, le courant et
la puissance d’un composant lorsque son modèle les prend en charge. Si un vecteur de courant pris en charge
n’est pas disponible, il est signalé comme indisponible ; il ne faut pas l’interpréter comme une consommation nulle.

## Balayer la tension d’alimentation
{: #sweep-the-supply}

Ouvrez **dc-sweep**. Le **balayage continu (DC sweep)** enregistré utilise V1,
avec une valeur de départ de 0 V, une valeur d’arrêt de 10 V et un incrément de 0,5 V. Lancez la simulation et tracez OUT.

![Courbe de transfert continu calculée](/v4/Images/simulation-tutorials/spice/dc-sweep-results.png)

L’axe horizontal représente la valeur de la source balayée, et non le temps. Les valeurs attendues sont
0 V, 2,5 V et 5 V pour des tensions d’alimentation de 0 V, 5 V et 10 V. La pente est de 0,5 V/V.
Ce test est utile pour vérifier les réseaux de polarisation et les interfaces de capteurs avant
d’ajouter des signaux dépendant du temps.

## Étudier l’effet de charge
{: #investigate-loading}

Ajoutez une autre résistance de 1 kΩ entre OUT et la masse. R2 et la nouvelle charge sont en parallèle,
leur résistance équivalente est donc de 500 Ω. La sortie attendue est maintenant
de `5 × 500 / (1000 + 500) = 1.667 V`. Un diviseur de tension n’est pas une source de tension
idéale : sa tension de sortie change lorsqu’il fournit du courant.

Pour établir une liste de vérification des mesures, consignez les noms des nœuds, le sens de référence, les unités,
les paramètres de la source et le type d’analyse. Ces informations permettent de reproduire un résultat et
aident un autre lecteur à distinguer une modification du circuit d’une modification du tracé.

## Télécharger les circuits de la leçon
{: #download-the-lesson-circuits}

Les mêmes exemples sont déjà disponibles dans **Ouvrir un exemple (Open Example)**. Pour obtenir une copie indépendante, téléchargez un dessin `.dzn` et utilisez **Fichier → Ouvrir (File → Open)** dans TinyCAD. Le fichier compagnon `.cir` est du texte SPICE destiné à l’inspection ou à un simulateur externe compatible, et non un dessin TinyCAD. Les circuits XSPICE nécessitent Desktop pour lancer de nouvelles simulations.

| Exemple | Dessin | Liste de connexions |
| --- | --- | --- |
| divider | [Dessin TinyCAD](/v4/examples/simulation-tutorials/spice/divider.dzn) | [Texte SPICE](/v4/examples/simulation-tutorials/spice/divider.cir) |
