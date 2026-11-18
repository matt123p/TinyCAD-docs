---
layout: default
title: 3. Propagation delay and logic hazards
---
# 3. Délai de propagation et aléas logiques
{: #propagation-delay-and-logic-hazards}

[Précédent](/v4/XSPICE-Tutorial-02/) · [Sommaire](/v4/Simulation-Tutorials/) · [Suivant](/v4/XSPICE-Tutorial-04/)

Les exemples de ce chapitre sont fournis avec TinyCAD. Choisissez **Ouvrir un exemple (Open Example) → XSPICE and digital tutorial**, sélectionnez l’exemple nommé, puis choisissez **Ouvrir le dessin (Open Drawing)**. Aucun téléchargement n’est nécessaire.

Ouvrez **logic-hazard**. À l’intérieur de X1, une copie de A est reliée
directement à une porte AND. Une autre passe par un inverseur avant d’atteindre
l’autre entrée de la porte AND. L’expression booléenne est `A AND NOT A`, qui vaut toujours zéro
une fois les transitoires terminés. Néanmoins, le transitoire peut contenir une impulsion.

![Impulsions d’aléa calculées](/v4/images/simulation-tutorials/xspice/logic-hazard-results.png)

L’inverseur a un délai de 100 ns et la porte AND un délai de 10 ns. Lors d’un front montant
d’entrée, le chemin direct passe à l’état haut tandis que le chemin inversé reste à l’état haut
jusqu’à la réponse de l’inverseur. Pendant un court intervalle, les deux entrées de la porte AND sont à l’état haut,
ce qui fait apparaître une impulsion positive en sortie. Dans ce modèle volontairement
simple, sa largeur est d’environ 100 ns. Lors du front d’entrée opposé, les deux chemins traversent une période
pendant laquelle les deux entrées de la porte AND sont à l’état bas ; la même impulsion positive n’est donc pas produite.

## Mesurer plutôt que déduire le temps à partir des pixels
{: #measure-rather-than-infer-timing-from-pixels}

Exécutez le transitoire enregistré de 3 µs avec un pas maximal de 2 ns. Zoomez sur un front montant
près de 0,5 µs. Utilisez un seuil de 2,5 V pour mesurer le franchissement du seuil par l’entrée, le franchissement par la sortie
et la largeur de l’impulsion de sortie. La mesure **Délai (Delay)** de TinyCAD calcule le premier franchissement montant de la sortie moins le premier franchissement montant de la référence dans la fenêtre sélectionnée. La mesure **Largeur d’impulsion (Pulse width)** nécessite une impulsion complète dans cette fenêtre.

Le délai total entre l’entrée analogique et la sortie analogique comprend le franchissement du seuil,
le délai du pont ADC, le délai de la porte et le temps de transition du DAC. Il n’est pas identique au paramètre `rise_delay`
d’une seule porte. Choisissez des seuils concordants pour comparer les mesures
et indiquez l’intervalle utilisé.

## Distinguer trois grandeurs temporelles différentes
{: #separate-three-different-time-quantities}

| Grandeur | Signification |
| --- | --- |
| Délai de propagation | Temps entre un événement déclencheur à l’entrée et l’événement de sortie qui en résulte |
| Temps de montée/descente | Temps nécessaire à une transition analogique entre les niveaux spécifiés |
| Période | Temps entre les répétitions de la forme d’onde |

Une transition idéale pilotée par événements peut être instantanée dans son domaine numérique,
tandis que le pont DAC produit une pente analogique finie. Un pas de temps plus petit sur le graphique ne réduit pas le délai de propagation configuré de la porte.

Doublez le délai de l’inverseur à 200 ns dans une copie du modèle de X1, puis relancez la simulation. L’impulsion
devrait s’élargir en conséquence. Augmentez ensuite considérablement le pas maximal et
comparez la résolution du graphique. Le solveur peut toujours insérer des points liés aux événements,
mais un réglage grossier n’est pas une méthode fiable pour mesurer des fronts analogiques courts.
Rétablissez 2 ns et vérifiez que la largeur mesurée est stable.

Il s’agit d’une démonstration d’aléa, et non d’un générateur d’impulsions physiques recommandé.
Les délais logiques réels varient selon le procédé, la tension, la température et la charge. Une impulsion
qui apparaît de façon fiable dans une simulation à délai fixe peut disparaître ou changer de largeur
dans le matériel. Utilisez ce test pour détecter la sensibilité temporelle, puis choisissez une
conception avec des exigences temporelles explicites et des modèles adaptés.

## Télécharger les circuits de la leçon
{: #download-the-lesson-circuits}

Les mêmes exemples sont déjà disponibles dans **Ouvrir un exemple (Open Example)**. Pour en obtenir une copie indépendante, téléchargez un schéma `.dzn` et utilisez **Fichier (File) → Ouvrir (Open)** dans TinyCAD. Le fichier complémentaire `.cir` est du texte SPICE destiné à l’inspection ou à un simulateur externe compatible, et non un dessin TinyCAD. Les circuits XSPICE nécessitent Desktop pour être exécutés à nouveau.

| Exemple | Schéma | Liste de connexions |
| --- | --- | --- |
| logic-hazard | [Dessin TinyCAD](/v4/examples/simulation-tutorials/xspice/logic-hazard.dzn) | [Texte SPICE](/v4/examples/simulation-tutorials/xspice/logic-hazard.cir) |
