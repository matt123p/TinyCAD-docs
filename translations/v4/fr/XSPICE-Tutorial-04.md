---
layout: default
title: 4. D flip-flops, clocks and reset
---
# 4. Bascules D, horloges et réinitialisation
{: #d-flip-flops-clocks-and-reset}

[Précédent](/v4/XSPICE-Tutorial-03/) · [Sommaire](/v4/Simulation-Tutorials/) · [Suivant](/v4/XSPICE-Tutorial-05/)

Les exemples de ce chapitre sont inclus avec TinyCAD. Choisissez **Ouvrir un exemple (Open Example) → XSPICE and digital tutorial**, sélectionnez l’exemple indiqué, puis choisissez **Ouvrir le schéma (Open Drawing)**. Aucun téléchargement n’est nécessaire.

Ouvrez **logic-dff**. Il fournit des signaux de test analogiques distincts
pour D, CLK et RESET. À l’intérieur de X1, des ponts alimentent une bascule D XSPICE ;
Q et NQ sont reconverties en sorties analogiques pour l’affichage des courbes.

![Circuit de test de la bascule D](/v4/Images/simulation-tutorials/xspice/logic-dff-circuit.png)
![Horloge, données, réinitialisation et Q calculés](/v4/Images/simulation-tutorials/xspice/logic-dff-results.png)

Lancez la simulation transitoire de 8 µs. À chaque front montant de l’horloge, Q capture D, puis conserve
cet état entre les fronts. NQ en est le complément une fois le temps de propagation écoulé. Le
premier front montant de l’horloge se situe vers 0,5 µs. D est déjà à l’état haut ; Q passe donc à l’état haut
après le délai horloge-sortie du modèle. Dans cet exemple déclenché sur front montant, les fronts descendants de l’horloge ne capturent pas de nouvelles
données.

## Lire l’interface réelle du modèle
{: #read-the-actual-model-interface}

L’instance interne est :

```spice
Aff dd dc NULL dr dq dn flip
.model flip d_dff(ic=0 clk_delay=20n reset_delay=20n
+ rise_delay=5n fall_delay=5n)
```

Ses ports sont les données, l’horloge, la mise à 1 asynchrone, la réinitialisation asynchrone, la sortie et
la sortie inversée. `NULL` laisse l’entrée de mise à 1 facultative inutilisée. L’état initial
est explicitement fixé à zéro. L’ordre des ports fait partie du contrat du modèle ; la position des broches sur
le bloc visible ne le définit pas à elle seule.

## Tester la réinitialisation asynchrone
{: #test-asynchronous-reset}

RESET passe à l’état haut vers 6 µs pendant environ 0,5 µs. Q est remise à zéro sans attendre le prochain
front montant de l’horloge. Tant que la réinitialisation est active, examinez la sortie avant d’interpréter
le comportement de l’horloge. Une fois la réinitialisation relâchée, les fronts d’horloge suivants reprennent la capture des données. Cet exemple teste la réinitialisation indépendamment de la forme d’onde D normale.

Utilisez une courte fenêtre de mesure autour du premier front de capture pour mesurer
le délai horloge-Q à 2,5 V. Le délai analogique mesuré inclut les ponts,
pas seulement `clk_delay`. Utilisez une autre fenêtre autour de la réinitialisation pour examiner la
remise à zéro asynchrone. Évitez de demander à une seule mesure du premier front de résumer plusieurs
événements déclencheurs différents.

## État initial et hypothèses de setup/hold
{: #initial-state-and-setuphold-assumptions}

Le fait de définir `ic=0` rend ce tutoriel reproductible. Dans une conception dont l’état réel à la mise sous tension
n’est pas spécifié, supposer un zéro initial commode peut masquer l’absence d’une exigence de
réinitialisation. Essayez une impulsion de réinitialisation explicite au démarrage et comparez-la au fait de
s’appuyer sur le réglage de condition initiale du modèle.

Ensuite, déplacez une transition des données à proximité d’un front d’horloge. Observez comment le modèle
fonctionnel ordonne les événements, mais ne considérez pas un résultat numérique sans anomalie comme la preuve qu’un
composant réel respecte les temps de setup et de hold. Ce modèle fonctionnel simple n’est pas un modèle de métastabilité au niveau transistor et ne permet pas d’établir une
probabilité de résolution de la métastabilité. Les contraintes temporelles du fabricant et un modèle de composant
adapté restent des entrées distinctes pour une analyse électrique des temps.

Un cas de test consigné utile contient la forme d’onde des données, la convention de front d’horloge,
la polarité et le timing de la réinitialisation, l’hypothèse d’état initial, la séquence capturée attendue
et le seuil de mesure. Ces informations sont plus utiles qu’une simple capture d’écran de Q.

## Télécharger les circuits de la leçon
{: #download-the-lesson-circuits}

Les mêmes exemples sont déjà disponibles dans **Ouvrir un exemple (Open Example)**. Pour obtenir une copie indépendante, téléchargez un dessin `.dzn` et utilisez **Fichier → Ouvrir (File → Open)** dans TinyCAD. Le fichier compagnon `.cir` est du texte SPICE destiné à être consulté ou utilisé avec un simulateur externe compatible ; ce n’est pas un dessin TinyCAD. Les circuits XSPICE nécessitent la version Desktop pour lancer de nouvelles simulations.

| Exemple | Dessin | Netlist |
| --- | --- | --- |
| logic-dff | [Dessin TinyCAD](/v4/examples/simulation-tutorials/xspice/logic-dff.dzn) | [Texte SPICE](/v4/examples/simulation-tutorials/xspice/logic-dff.cir) |
