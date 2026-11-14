---
layout: default
title: Simulation tutorials for TinyCAD
---
# Tutoriels de simulation
{: #simulation-tutorials}

Commencez par [Comment utiliser ces tutoriels et ouvrir les exemples fournis](/v4/Tutorial-Start-Here/),
puis poursuivez avec [SPICE : aperçu et première simulation](/v4/SPICE-Tutorial-01/).
Pour la logique événementielle, commencez par le [cours distinct sur XSPICE et le numérique](/v4/XSPICE-Tutorial-01/).

Il existe un chapitre d’introduction commun, onze chapitres SPICE et six chapitres
XSPICE. Les cours complets, les schémas exécutables, les images et les enregistrements sont inclus dans ce manuel. Tous les exemples des tutoriels sont fournis avec TinyCAD ; aucun
téléchargement de tutoriel n’est nécessaire. Choisissez **Ouvrir un exemple (Open Example)** dans la barre de titre du navigateur, ou **Fichier → Ouvrir un exemple (File → Open Example)** dans Desktop, sélectionnez
**Tutoriel SPICE** ou **Tutoriel XSPICE et numérique**, sélectionnez l’exemple nommé
dans le chapitre, puis choisissez **Ouvrir le schéma (Open Drawing)**. Cela ouvre une copie modifiable ;
utilisez **Enregistrer sous (Save As)** pour conserver vos essais et rouvrez l’exemple intégré
pour repartir de zéro. Les schémas comprennent des symboles intégrés, des définitions de modèles,
des paramètres d’analyse et une acquisition de référence conservée.

## SPICE
{: #spice}

1. [Aperçu et première exécution](/v4/SPICE-Tutorial-01/)
2. [Tension, courant et puissance en continu](/v4/SPICE-Tutorial-02/)
3. [Générateurs de signaux et stimuli](/v4/SPICE-Tutorial-03/)
4. [Analyse transitoire et charge d’un circuit RC](/v4/SPICE-Tutorial-04/)
5. [Réponse en fréquence et filtres](/v4/SPICE-Tutorial-05/)
6. [Diodes, redressement et ondulation](/v4/SPICE-Tutorial-06/)
7. [Reconstruction de AMP.DSN](/v4/SPICE-Tutorial-07/)
8. [Gain et bande passante d’un amplificateur](/v4/SPICE-Tutorial-08/)
9. [Sortie, écrêtage et puissance d’un amplificateur](/v4/SPICE-Tutorial-09/)
10. [Balayages, bruit et études de conception](/v4/SPICE-Tutorial-10/)
11. [Comment TinyCAD implémente SPICE : moteurs, symboles et flux de travail](/v4/SPICE-Tutorial-11/)

## Parcours vidéo
{: #video-walkthroughs}

Cinq courtes vidéos présentent les étapes pour lesquelles il est particulièrement utile de voir les commandes.
Les vidéos utilisent TinyCAD dans le navigateur avec ngspice fourni. Lancez-les dans le
lecteur intégré à la leçon, ou utilisez ces liens dans un lecteur Markdown :

| Leçon | Démonstration |
| --- | --- |
| 1 | [Ouvrir, exécuter et modifier un diviseur](/v4/videos/simulation-tutorials/spice/first-run.mp4) |
| 3 | [Paramètres de source et aperçu de la forme d’onde](/v4/videos/simulation-tutorials/spice/source-settings.mp4) |
| 4 | [Charge RC, pas de temps et constante de temps](/v4/videos/simulation-tutorials/spice/rc-transient.mp4) |
| 5 | [Module CA, dB, phase et fréquence de coupure](/v4/videos/simulation-tutorials/spice/ac-response.mp4) |
| 6 | [Mesurer l’ondulation stabilisée du redresseur](/v4/videos/simulation-tutorials/spice/rectifier-ripple.mp4) |

Les vidéos complètent les instructions écrites et les figures. Consultez le texte du chapitre
pour les équations, les hypothèses et les valeurs attendues. Les menus de Desktop diffèrent de ceux du navigateur ; utilisez Fichier → Ouvrir un exemple.

## Simulation XSPICE et numérique
{: #xspice-and-digital-simulation}

1. [Modèles, interfaces et première exécution](/v4/XSPICE-Tutorial-01/)
2. [Portes et tables de vérité](/v4/XSPICE-Tutorial-02/)
3. [Retard de propagation et aléas](/v4/XSPICE-Tutorial-03/)
4. [Bascules, horloges et réinitialisation](/v4/XSPICE-Tutorial-04/)
5. [Compteurs et horloges divisées](/v4/XSPICE-Tutorial-05/)
6. [Filtrage mixte analogique-numérique et états inconnus](/v4/XSPICE-Tutorial-06/)

Les exemples XSPICE nécessitent le moteur natif de TinyCAD Desktop. Les exemples SPICE classiques
utilisent des modèles analogiques, mais la qualification numérique de ce lot a été
effectuée avec ngspice 47 natif fourni. Une exécution native réussie ne signifie pas
que toutes les combinaisons de navigateurs et de versions ont été testées.

Les figures des circuits sont générées à partir de schémas TinyCAD rouverts. Les figures de résultats
sont des tracés de données réelles du solveur, et non des formes d’onde attendues dessinées à la main. Les légendes
distinguent les captures d’écran de l’application. De légères différences numériques par rapport aux valeurs imprimées sont normales lorsque le modèle, la température, le pas de temps ou la version du moteur change.


## Référence du manuel
{: #manual-reference}

Pour les commandes actuelles, les modèles, les paramètres d’analyse, les graphiques et le dépannage, consultez [Simulation](/v4/Simulation/) et [Exemples fournis](/v4/Bundled-Examples/). Dans Desktop, accédez à **Fichier → Ouvrir un exemple (File → Open Example)** et **Affichage → Afficher l’explication (View → View Explanation)**.

## Téléchargements de schémas analogiques
{: #analogue-drawing-downloads}

Utilisez le navigateur d’exemples intégré ou téléchargez un schéma ici et ouvrez-le dans TinyCAD. Les netlists sont fournies séparément sous forme de texte.

| Exemple | Schéma | Netlist |
| --- | --- | --- |
| amp-ac | [Schéma TinyCAD](/v4/examples/simulation-tutorials/spice/amp-ac.dzn) | [Texte SPICE](/v4/examples/simulation-tutorials/spice/amp-ac.cir) |
| amp-bias | [Schéma TinyCAD](/v4/examples/simulation-tutorials/spice/amp-bias.dzn) | [Texte SPICE](/v4/examples/simulation-tutorials/spice/amp-bias.cir) |
| amp-clipping | [Schéma TinyCAD](/v4/examples/simulation-tutorials/spice/amp-clipping.dzn) | [Texte SPICE](/v4/examples/simulation-tutorials/spice/amp-clipping.cir) |
| amp-small-signal | [Schéma TinyCAD](/v4/examples/simulation-tutorials/spice/amp-small-signal.dzn) | [Texte SPICE](/v4/examples/simulation-tutorials/spice/amp-small-signal.cir) |
| controlled-source | [Schéma TinyCAD](/v4/examples/simulation-tutorials/spice/controlled-source.dzn) | [Texte SPICE](/v4/examples/simulation-tutorials/spice/controlled-source.cir) |
| dc-sweep | [Schéma TinyCAD](/v4/examples/simulation-tutorials/spice/dc-sweep.dzn) | [Texte SPICE](/v4/examples/simulation-tutorials/spice/dc-sweep.cir) |
| divider | [Schéma TinyCAD](/v4/examples/simulation-tutorials/spice/divider.dzn) | [Texte SPICE](/v4/examples/simulation-tutorials/spice/divider.cir) |
| rc-ac | [Schéma TinyCAD](/v4/examples/simulation-tutorials/spice/rc-ac.dzn) | [Texte SPICE](/v4/examples/simulation-tutorials/spice/rc-ac.cir) |
| rc-noise | [Schéma TinyCAD](/v4/examples/simulation-tutorials/spice/rc-noise.dzn) | [Texte SPICE](/v4/examples/simulation-tutorials/spice/rc-noise.cir) |
| rc-pz | [Schéma TinyCAD](/v4/examples/simulation-tutorials/spice/rc-pz.dzn) | [Texte SPICE](/v4/examples/simulation-tutorials/spice/rc-pz.cir) |
| rc-step | [Schéma TinyCAD](/v4/examples/simulation-tutorials/spice/rc-step.dzn) | [Texte SPICE](/v4/examples/simulation-tutorials/spice/rc-step.cir) |
| rc-tf | [Schéma TinyCAD](/v4/examples/simulation-tutorials/spice/rc-tf.dzn) | [Texte SPICE](/v4/examples/simulation-tutorials/spice/rc-tf.cir) |
| rectifier | [Schéma TinyCAD](/v4/examples/simulation-tutorials/spice/rectifier.dzn) | [Texte SPICE](/v4/examples/simulation-tutorials/spice/rectifier.cir) |
| source-current | [Schéma TinyCAD](/v4/examples/simulation-tutorials/spice/source-current.dzn) | [Texte SPICE](/v4/examples/simulation-tutorials/spice/source-current.cir) |
| source-dc | [Schéma TinyCAD](/v4/examples/simulation-tutorials/spice/source-dc.dzn) | [Texte SPICE](/v4/examples/simulation-tutorials/spice/source-dc.cir) |
| source-exponential | [Schéma TinyCAD](/v4/examples/simulation-tutorials/spice/source-exponential.dzn) | [Texte SPICE](/v4/examples/simulation-tutorials/spice/source-exponential.cir) |
| source-fm | [Schéma TinyCAD](/v4/examples/simulation-tutorials/spice/source-fm.dzn) | [Texte SPICE](/v4/examples/simulation-tutorials/spice/source-fm.cir) |
| source-pulse | [Schéma TinyCAD](/v4/examples/simulation-tutorials/spice/source-pulse.dzn) | [Texte SPICE](/v4/examples/simulation-tutorials/spice/source-pulse.cir) |
| source-pwl | [Schéma TinyCAD](/v4/examples/simulation-tutorials/spice/source-pwl.dzn) | [Texte SPICE](/v4/examples/simulation-tutorials/spice/source-pwl.cir) |
| source-sine | [Schéma TinyCAD](/v4/examples/simulation-tutorials/spice/source-sine.dzn) | [Texte SPICE](/v4/examples/simulation-tutorials/spice/source-sine.cir) |
| source-triangle | [Schéma TinyCAD](/v4/examples/simulation-tutorials/spice/source-triangle.dzn) | [Texte SPICE](/v4/examples/simulation-tutorials/spice/source-triangle.cir) |

## Téléchargements de schémas XSPICE
{: #xspice-drawing-downloads}

Utilisez le navigateur d’exemples intégré ou téléchargez un schéma ici et ouvrez-le dans TinyCAD. Les netlists sont fournies séparément sous forme de texte.

| Exemple | Schéma | Netlist |
| --- | --- | --- |
| logic-buffer | [Schéma TinyCAD](/v4/examples/simulation-tutorials/xspice/logic-buffer.dzn) | [Texte SPICE](/v4/examples/simulation-tutorials/xspice/logic-buffer.cir) |
| logic-counter | [Schéma TinyCAD](/v4/examples/simulation-tutorials/xspice/logic-counter.dzn) | [Texte SPICE](/v4/examples/simulation-tutorials/xspice/logic-counter.cir) |
| logic-dff | [Schéma TinyCAD](/v4/examples/simulation-tutorials/xspice/logic-dff.dzn) | [Texte SPICE](/v4/examples/simulation-tutorials/xspice/logic-dff.cir) |
| logic-filter | [Schéma TinyCAD](/v4/examples/simulation-tutorials/xspice/logic-filter.dzn) | [Texte SPICE](/v4/examples/simulation-tutorials/xspice/logic-filter.cir) |
| logic-hazard | [Schéma TinyCAD](/v4/examples/simulation-tutorials/xspice/logic-hazard.dzn) | [Texte SPICE](/v4/examples/simulation-tutorials/xspice/logic-hazard.cir) |
| logic-nand | [Schéma TinyCAD](/v4/examples/simulation-tutorials/xspice/logic-nand.dzn) | [Texte SPICE](/v4/examples/simulation-tutorials/xspice/logic-nand.cir) |
| logic-unknown | [Schéma TinyCAD](/v4/examples/simulation-tutorials/xspice/logic-unknown.dzn) | [Texte SPICE](/v4/examples/simulation-tutorials/xspice/logic-unknown.cir) |
