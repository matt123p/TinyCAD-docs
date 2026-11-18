---
layout: default
title: "10. Design investigations: sweeps, tolerances, noise and diagnosis"
---
# 10. Études de conception : balayages, tolérances, bruit et diagnostic
{: #design-investigations-sweeps-tolerances-noise-and-diagnosis}

[Précédent](/v4/SPICE-Tutorial-09/) · [Sommaire](/v4/Simulation-Tutorials/) · [Suivant : SPICE dans TinyCAD](/v4/SPICE-Tutorial-11/)

Les exemples de ce chapitre sont fournis avec TinyCAD. Choisissez **Open Example → SPICE tutorial**, sélectionnez l’exemple indiqué, puis choisissez **Open Drawing**. Aucun téléchargement n’est nécessaire.

Un rapport de simulation utile consigne la question, la version du circuit et du modèle,
l’analyse, l’excitation, la fenêtre de mesure et le critère d’acceptation. Un graphique convaincant
sans ces détails est difficile à reproduire.

## Balayages de paramètres et tolérances
{: #parameter-sweeps-and-tolerances}

Revenez à **rc-ac**. Dans **Tune / sweep**, exécutez le balayage préparé
pour les valeurs de R1 de 1 kΩ, 2,2 kΩ et 4,7 kΩ. Les fréquences de coupure attendues sont de 159,15, 72,34 et
33,86 Hz. Il s’agit d’un balayage de paramètres : il permet d’étudier l’effet de choix délibérés de composants
sur la réponse. Il diffère du **balayage DC** du chapitre 2, qui fait varier
la valeur DC d’une source indépendante au cours d’une analyse.

Pour les tolérances, utilisez **Analysis lab → Tolerance studies**. Définissez les liaisons de R1 et C1,
choisissez une distribution et une valeur d’initialisation, puis ajoutez une exigence sur la fréquence de coupure. Avec
des valeurs indépendantes limitées à ±5 %, les coins extrêmes RC donnent environ
144,36–176,35 Hz. Un échantillon Monte Carlo n’atteint pas nécessairement l’un ou l’autre de ces coins.
L’écart type d’une distribution normale n’est pas une limite stricte de ±. Consignez
la convention choisie et indiquez si les variables sont corrélées.

TinyCAD peut conserver les conditions des cas de test ainsi que les définitions de mesures et d’exigences.
N’utilisez **Apply** que si vous souhaitez que les réglages temporaires deviennent une modification réelle du schéma.
Enregistrez une révision distincte du circuit lorsque vous modifiez la topologie ou le texte du modèle ;
un hachage d’acquisition est un identifiant, pas une révision de schéma récupérable.

## Bruit : un type de résultat différent
{: #noise-a-different-kind-of-output}

Ouvrez **rc-noise**. L’exemple demande le bruit de sortie sur OUT,
rapporté à la source d’entrée indépendante V1, de 1 Hz à 100 kHz à 27 °C.
La source idéale est sans bruit ; R1 contribue au bruit thermique, filtré par C1.

![Densité spectrale de bruit de sortie calculée](/v4/images/simulation-tutorials/spice/rc-noise-results.png)

Le bruit total de sortie est d’environ **64,2 nV RMS** sur cette bande. Pour un
circuit RC idéal intégré de zéro à une fréquence infinie, le bruit quadratique moyen du condensateur vaut `kT/C`, soit environ 64,4 nV RMS à 300,15 K et 1 µF.
La bande de simulation finie explique la faible différence. La densité spectrale
s’exprime en V/√Hz ; son intégrale se calcule à partir de la densité au carré et de la largeur de bande fréquentielle,
puis on en extrait la racine carrée. Il ne s’agit pas de la somme arithmétique des
échantillons de densité affichés. Le bruit total rapporté à l’entrée est un résultat différent.

## Fonctions de transfert et pôles
{: #transfer-functions-and-poles}

Ouvrez **rc-tf**. Son résultat de transfert en petit signal DC est de
1 V/V, la résistance de sortie est de 1 kΩ et la résistance d’entrée est effectivement infinie,
car le condensateur est ouvert en DC. Une résistance d’entrée imprimée très élevée, telle que `1e20`,
correspond à un résultat numérique de circuit ouvert, et non à une résistance physique de 100 exaohms mesurée.

Ouvrez **rc-pz**. Le pôle est d’environ **−1000 rad/s**,
ce qui correspond à `s = −1/(RC)`. Divisez sa valeur absolue par `2π` pour obtenir 159,15 Hz. Un pôle
dans le demi-plan gauche du plan complexe s représente une décroissance dans ce système linéaire.
L’absence de zéro fini est attendue pour cette fonction de transfert passe-bas du premier ordre.

Ces analyses portent sur le modèle linéarisé. Elles ne remplacent pas
les essais transitoires pour vérifier l’écrêtage, la commutation ou le démarrage. Un gain arbitraire entre sortie et entrée n’est pas non plus
équivalent au gain de boucle de rétroaction ; les mesures de stabilité nécessitent une configuration de test de boucle délibérée.

## Liste pratique de mesures
{: #a-practical-measurement-menu}

| Tâche | Grandeurs adaptées |
| --- | --- |
| Conditionnement de capteur | Gain, décalage, bruit, fréquence de coupure, temps d’établissement |
| Interface d’impulsions | Temps de montée/descente, délai, largeur d’impulsion, rapport cyclique |
| Amplificateur | Polarisation, gain/phase, bande passante, sortie RMS, puissance, écrêtage |
| Étage de puissance | Ondulation, courant de crête, puissance moyenne, énergie, rendement |
| Variation des composants | Superposition des balayages, valeurs extrêmes observées, résultats des exigences |

TinyCAD propose également un oscilloscope virtuel, un multimètre, un générateur de fonctions et
une alimentation de laboratoire limitée en courant sous **Lab Equipment**. Leurs impédances et
limites sont importantes : par exemple, la résistance de sortie du générateur de fonctions est normalement de 50 Ω.
Ils offrent une autre méthode pour étudier les mêmes questions électriques.

## Diagnostiquer une exécution échouée ou peu plausible
{: #diagnose-a-failed-or-implausible-run}

Vérifiez d’abord la masse, les courts-circuits involontaires et les nœuds flottants. Vérifiez le brochage des composants
et les noms des modèles. Pour l’analyse AC, vérifiez l’amplitude AC de la source indépendante ;
pour les transitoires, vérifiez la durée, le pas maximal et les fronts finis de l’excitation. Consultez
le journal du solveur et confirmez que l’exécution a atteint le temps de fin demandé. Une forme d’onde partielle
ne constitue pas un résultat complet.

Essayez un point de fonctionnement plus simple ou un test d’étage isolé avant de modifier les réglages numériques.
Documentez toute résistance de fuite, résistance de source ou capacité parasite ajoutée :
elle modifie le circuit tout en aidant à la convergence. Exportez le fichier CSV
si un calcul spécialisé est nécessaire, et conservez les unités et les colonnes complexes.

Pour aller plus loin : le [tutoriel sur le langage de contrôle ngspice](https://ngspice.sourceforge.io/ngspice-control-language-tutorial.html)
présente l’automatisation en ligne de commande. Le modèle de document de TinyCAD n’exécute volontairement pas les scripts `.control` arbitraires ; utilisez les commandes d’analyse et d’étude prises en charge,
ou exportez une netlist pour un flux de travail ngspice distinct.

## Télécharger les circuits de la leçon
{: #download-the-lesson-circuits}

Les mêmes exemples sont déjà disponibles dans **Open Example**. Pour en obtenir une copie indépendante, téléchargez un dessin `.dzn` et utilisez **File → Open** dans TinyCAD. Le fichier `.cir` associé est du texte SPICE destiné à l’inspection ou à un simulateur externe compatible, et non un dessin TinyCAD. Les circuits XSPICE nécessitent Desktop pour lancer de nouvelles simulations.

| Exemple | Dessin | Netlist |
| --- | --- | --- |
| rc-ac | [Dessin TinyCAD](/v4/examples/simulation-tutorials/spice/rc-ac.dzn) | [Texte SPICE](/v4/examples/simulation-tutorials/spice/rc-ac.cir) |
| dc-sweep | [Dessin TinyCAD](/v4/examples/simulation-tutorials/spice/dc-sweep.dzn) | [Texte SPICE](/v4/examples/simulation-tutorials/spice/dc-sweep.cir) |
| rc-noise | [Dessin TinyCAD](/v4/examples/simulation-tutorials/spice/rc-noise.dzn) | [Texte SPICE](/v4/examples/simulation-tutorials/spice/rc-noise.cir) |
| rc-tf | [Dessin TinyCAD](/v4/examples/simulation-tutorials/spice/rc-tf.dzn) | [Texte SPICE](/v4/examples/simulation-tutorials/spice/rc-tf.cir) |
| rc-pz | [Dessin TinyCAD](/v4/examples/simulation-tutorials/spice/rc-pz.dzn) | [Texte SPICE](/v4/examples/simulation-tutorials/spice/rc-pz.cir) |
