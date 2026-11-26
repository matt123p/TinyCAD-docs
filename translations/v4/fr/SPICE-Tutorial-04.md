---
layout: default
title: "4. Transient analysis: charging a capacitor"
---
# 4. Analyse transitoire : charge d’un condensateur
{: #transient-analysis-charging-a-capacitor}

[Précédent](/v4/SPICE-Tutorial-03/) · [Sommaire](/v4/Simulation-Tutorials/) · [Suivant](/v4/SPICE-Tutorial-05/)

Les exemples de ce chapitre sont fournis avec TinyCAD. Choisissez **Ouvrir un exemple (Open Example) → Tutoriel SPICE (SPICE tutorial)**, sélectionnez l’exemple indiqué, puis choisissez **Ouvrir le schéma (Open Drawing)**. Aucun téléchargement n’est nécessaire.

Ouvrez **rc-step**. Une source passe de 0 à 1 V à travers
une résistance de 1 kΩ, puis un condensateur de 1 µF. La simulation transitoire enregistrée dure 5 ms, avec un pas maximal
de 5 µs. Tracez IN et OUT ensemble.


## Vidéo : charge d’un condensateur RC et constante de temps
{: #video-rc-charging-and-time-constant}

Affiner le pas de temps maximal et mesurer OUT à 1 ms ainsi que la constante de temps RC.

{% include video-player.html src="/v4/videos/simulation-tutorials/spice/rc-transient.mp4" poster="/v4/videos/simulation-tutorials/spice/rc-transient.jpg" caption="Charge RC et constante de temps." %}

[Regarder ou télécharger la vidéo](/v4/videos/simulation-tutorials/spice/rc-transient.mp4).

### Circuit et résultats de référence
{: #circuit-and-reference-results}

![Circuit de charge RC](/v4/Images/simulation-tutorials/spice/rc-step-circuit.png)

![Courbe calculée de charge du condensateur](/v4/Images/simulation-tutorials/spice/rc-step-results.png)

## Pourquoi la sortie évolue progressivement au lieu de faire un saut
{: #why-the-output-curves-rather-than-jumps}

Le courant du condensateur est `i = C × dv/dt`. Immédiatement après le changement de l’entrée, la tension du
condensateur est encore proche de 0 V ; presque toute la tension d’entrée se retrouve donc aux bornes de R1. Le
courant initial est approximativement `1 V / 1 kΩ = 1 mA`. À mesure que le condensateur se charge,
la tension aux bornes de la résistance et le courant diminuent. La sortie se rapproche de 1 V au lieu de l’atteindre instantanément.

La constante de temps est `τ = R × C = 1 ms`. Pour un échelon idéal et un condensateur initialement
 déchargé, `VOUT(t) = 1 − exp(−t/τ)` volts.

| Temps après l’échelon | Valeur attendue de OUT |
| --- | --- |
| 1 ms = 1τ | 0,632 V |
| 2 ms = 2τ | 0,865 V |
| 3 ms = 3τ | 0,950 V |
| 5 ms = 5τ | 0,993 V |

La source fournie monte en 1 µs ; attendez-vous donc à une légère différence par rapport à l’équation de l’échelon instantané. Utilisez le curseur du graphique ou une mesure **Valeur (Value)** à 1 ms. Une mesure **Constante de temps (Time constant)** avec une valeur initiale de 0 V et une valeur finale de 1 V devrait donner environ 1 ms. Une mesure **Temps de montée (Rise time)** utilise l’intervalle de 10 à 90 % : sa valeur attendue est `ln(9) × τ ≈ 2.197 ms`, et non 1 ms.

## La durée et le pas maximal répondent à des questions différentes
{: #duration-and-maximum-step-answer-different-questions}

La durée détermine combien de temps dure l’expérience. Le pas maximal limite l’espacement entre les points temporels du solveur. Celui-ci peut utiliser des pas plus petits près des fronts ou lors d’événements non linéaires. Le nombre d’échantillons n’est donc pas nécessairement égal à la durée divisée par le pas maximal.

Si la durée est trop courte, la stabilisation n’est pas visible. Si le pas de temps est trop grand, les fronts et les pics risquent d’être mal mesurés, même si le graphique semble plausible. Réduisez le pas maximal de 5 µs à 2,5 µs et comparez la mesure à 1 ms ; un résultat stable devrait très peu varier. Il s’agit d’une vérification de la convergence de la mesure, et pas seulement de vérifier que le solveur indique une réussite.

## Conditions initiales et énergie
{: #initial-conditions-and-energy}

Normalement, SPICE calcule un point de fonctionnement en continu avant de démarrer l’analyse transitoire.
Cocher **conditions initiales (initial conditions)** demande d’utiliser la méthode alternative de démarrage avec conditions initiales
(`uic`). Utilisez-la délibérément, avec des conditions initiales appropriées pour les condensateurs et les inductances ; ce n’est pas une solution universelle aux problèmes de convergence.
Cet exemple n’en a pas besoin, car la valeur initiale de l’entrée est nulle.

À 1 V, le condensateur emmagasine `E = ½CV² = 0.5 µJ`. Pendant la charge, R1 dissipe
de l’énergie et la source fournit à la fois l’énergie emmagasinée et l’énergie dissipée. La puissance instantanée et l’énergie cumulée sont des mesures différentes : intégrez la puissance sur l’intervalle choisi pour obtenir des joules.

Essayez 2,2 kΩ, prévoyez une constante de temps de 2,2 ms et prolongez la durée à 11 ms. Rétablissez ensuite R1 et divisez C1 par deux : la constante de temps devrait être divisée par deux. Ces modifications illustrent comment concevoir une expérience qui distingue l’effet d’un composant d’un artefact de tracé.

## Télécharger les circuits de la leçon
{: #download-the-lesson-circuits}

Les mêmes exemples sont déjà disponibles dans **Ouvrir un exemple (Open Example)**. Pour en obtenir une copie indépendante, téléchargez un schéma `.dzn` et utilisez **Fichier (File) → Ouvrir (Open)** dans TinyCAD. Le fichier complémentaire `.cir` est un texte SPICE destiné à être consulté ou utilisé dans un simulateur externe compatible, et non un schéma TinyCAD. Les circuits XSPICE nécessitent Desktop pour lancer de nouvelles simulations.

| Exemple | Schéma | Liste de connexions |
| --- | --- | --- |
| rc-step | [Schéma TinyCAD](/v4/examples/simulation-tutorials/spice/rc-step.dzn) | [Texte SPICE](/v4/examples/simulation-tutorials/spice/rc-step.cir) |
