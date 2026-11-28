---
layout: default
title: 6. Mixed-signal filtering and unknown states
---
# 6. Filtrage mixte analogique-numérique et états indéfinis
{: #mixed-signal-filtering-and-unknown-states}

[Précédent](/v4/XSPICE-Tutorial-05/) · [Contenu du cours](/v4/Simulation-Tutorials/)

Les exemples de ce chapitre sont fournis avec TinyCAD. Choisissez **Ouvrir un exemple (Open Example) → XSPICE and digital tutorial**, sélectionnez l’exemple indiqué, puis choisissez **Ouvrir le schéma (Open Drawing)**. Aucun téléchargement n’est nécessaire.

Ouvrez **logic-filter**. Un train d’impulsions de 0 à 5 V et de 10 kHz
passe par le tampon XSPICE et le pont CNA, puis attaque un filtre passe-bas
physique SPICE de 1 kΩ/1 µF. Le plateau haut dure 25 µs sur une période de
100 µs, soit un rapport cyclique nominal d’environ 25 %. Les fronts d’entrée
non instantanés font légèrement varier le rapport cyclique précis défini par
le seuil.

![Circuit de filtre mixte numérique et analogique](/v4/Images/simulation-tutorials/xspice/logic-filter-circuit.png)
![Signal PWM calculé et sortie filtrée](/v4/Images/simulation-tutorials/xspice/logic-filter-results.png)

Lancez l’analyse transitoire de 5 ms. Tracez A, Y et FILTERED. Le chemin
numérique préserve la fonction impulsionnelle ; le réseau RC en fait la moyenne
tout en conservant une certaine ondulation.
La moyenne à long terme tend vers `5 V × 0.25 ≈ 1.25 V`. Comme τ = 1 ms,
le démarrage prend plusieurs millisecondes.

## Mesurer honnêtement une acquisition de durée finie
{: #measure-the-finite-acquisition-honestly}

Sur la fenêtre de 4 à 5 ms, la moyenne filtrée de référence est d’environ
**1,242 V**, avec une **ondulation crête à crête d’environ 0,108 V** (environ
1,187–1,295 V). Elle n’a pas encore tout à fait atteint la moyenne idéale à
long terme. Augmentez la durée à 10 ms et comparez la dernière fenêtre de 1 ms.
Une constante de temps de filtrage plus longue réduit l’ondulation, mais
augmente le temps d’établissement, comme dans les leçons sur les circuits RC
analogiques.

Ce modèle est utile pour comprendre la conversion PWM-tension. Il ne constitue
pas un modèle complet de sortie de microcontrôleur : le pont CNA présente une
capacité de commande de sortie idéalisée et ne définit pas explicitement de
limite pour le courant d’alimentation. Ajoutez une résistance de sortie
appropriée ou un modèle de composant lorsque le courant de charge et les pertes
de l’étage de sortie sont importants.

## Étudier un niveau logique indéfini
{: #explore-an-undefined-logic-level}

Ouvrez **logic-unknown**. Son entrée PWL est maintenue à
0 V, puis à 2 V, puis à 5 V. Lancez une simulation de 3 µs et examinez le plateau
intermédiaire.

![Représentation analogique calculée d’un état numérique indéfini](/v4/Images/simulation-tutorials/xspice/logic-unknown-results.png)

Les seuils bas et haut du pont CAN sont de 1 V et 3 V. Le plateau de 2 V se
trouve entre les deux : l’entrée événementielle est donc indéfinie. Cet état
indéfini se propage dans le tampon. Le pont CNA le convertit en **2,5 V**, car
son paramètre `out_undef` demande explicitement ce niveau d’affichage.

N’interprétez pas ces 2,5 V comme une prédiction selon laquelle une porte
physique se stabiliserait à mi-alimentation. Il s’agit d’un codage choisi pour
rendre visible l’état indéfini sur un graphique analogique. Le modèle ne
reproduit pas non plus le papillonnement de seuil provoqué par le bruit ni les
phénomènes physiques de métastabilité. Un récepteur d’entrée réel peut
nécessiter une hystérésis, une famille de seuils spécifiée et un modèle
électrique plus détaillé.

## Liste de vérification pour les circuits mixtes
{: #a-mixed-signal-checklist}

Avant de faire confiance à une expérience, déterminez quelles connexions
transportent des tensions et des courants et lesquelles transportent des
événements. Repérez chaque conversion entre domaines. Notez les seuils, la
conversion des états indéfinis, les délais de propagation, les durées des fronts
de sortie et les conditions initiales. Vérifiez à la fois la fonction en régime
établi et le comportement pendant les transitions. Utilisez une durée
d’acquisition suffisante pour inclure les cycles ou la période d’établissement
nécessaires à la mesure.

La même approche s’applique à un comparateur qui attaque une logique numérique,
à une horloge divisée qui commande un interrupteur ou à une forme d’onde logique
qui attaque un filtre analogique. Des applications XSPICE plus complexes,
notamment des boucles à verrouillage de phase et des exemples delta-sigma, sont
référencées dans le [guide HOWTO XSPICE officiel](https://ngspice.sourceforge.io/xspicehowto.html).
Commencez par valider séparément chaque domaine et chaque interface avant
d’assembler le système complet.

Vous avez maintenant utilisé des portes logiques fonctionnelles, étudié les
aléas, le stockage, la remise à zéro, le comptage et un chemin mixte analogique
et numérique. Pour l’électricité de puissance, le comportement non linéaire des
amplificateurs et la réponse en fréquence, revenez au [cours SPICE](/v4/SPICE-Tutorial-01/).

## Télécharger les circuits des leçons
{: #download-the-lesson-circuits}

Les mêmes exemples sont déjà disponibles dans **Ouvrir un exemple (Open Example)**. Pour obtenir une copie indépendante, téléchargez un schéma `.dzn` et utilisez **Fichier → Ouvrir (File → Open)** dans TinyCAD. Le fichier complémentaire `.cir` est un texte SPICE à examiner ou à utiliser dans un simulateur externe compatible ; ce n’est pas un schéma TinyCAD. Les circuits XSPICE nécessitent la version Desktop pour lancer de nouvelles simulations.

| Exemple | Schéma | Liste de connexions |
| --- | --- | --- |
| logic-filter | [Schéma TinyCAD](/v4/examples/simulation-tutorials/xspice/logic-filter.dzn) | [Texte SPICE](/v4/examples/simulation-tutorials/xspice/logic-filter.cir) |
| logic-unknown | [Schéma TinyCAD](/v4/examples/simulation-tutorials/xspice/logic-unknown.dzn) | [Texte SPICE](/v4/examples/simulation-tutorials/xspice/logic-unknown.cir) |
