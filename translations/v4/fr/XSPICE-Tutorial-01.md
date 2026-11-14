---
layout: default
title: 1. XSPICE and digital simulation
---
# 1. XSPICE et simulation numérique
{: #xspice-and-digital-simulation}

[Comment utiliser les tutoriels](/v4/Tutorial-Start-Here/) · [Contenu du cours](/v4/Simulation-Tutorials/) · [Suivant : portes logiques](/v4/XSPICE-Tutorial-02/)

Les exemples de ce chapitre sont fournis avec TinyCAD. Choisissez **Open Example → XSPICE and digital tutorial**, sélectionnez l’exemple indiqué, puis choisissez **Open Drawing**. Aucun téléchargement n’est nécessaire.

XSPICE étend ngspice avec des modèles de code et un système de simulation
à événements discrets. Un circuit analogique est résolu en termes de tensions et de courants ; un réseau numérique à événements discrets propage les changements d’état logique au moyen de modèles fonctionnels. La simulation mixte coordonne les deux. Cela peut rendre la simulation d’une fonction logique beaucoup plus simple que celle d’une réalisation au niveau des transistors, mais ne fournit pas les mêmes informations sur le courant d’alimentation, les contraintes sur les transistors ou la temporisation physique.

Utilisez **TinyCAD Desktop** pour ce cours. Son moteur natif intégré comprend les modèles de code requis. Le moteur TinyCAD pour navigateur/WASM ne prend pas en charge XSPICE. Les modèles fournis sont intégrés aux schémas, mais les bibliothèques exécutables de modèles de code proviennent toujours de l’installation du moteur natif.

[Comment TinyCAD implémente SPICE](/v4/SPICE-Tutorial-11/) explique comment les moteurs, les définitions de symboles et la feuille Simulation s’articulent.

## Premier lancement : un tampon à événements discrets
{: #first-run-an-event-driven-buffer}

Ouvrez **logic-buffer**. Exécutez la simulation transitoire de 8 µs enregistrée et tracez A et Y. A est un signal de 0 à 5 V, de période 1 µs. Y le suit avec un léger retard de propagation et des fronts de sortie de durée finie.

![Circuit de test du tampon XSPICE](/v4/images/simulation-tutorials/xspice/logic-buffer-circuit.png)
![Entrée et sortie calculées du tampon](/v4/images/simulation-tutorials/xspice/logic-buffer-results.png)

X1 est un sous-circuit intégré qui comporte trois étages internes explicites :

```text
Analogue A → adc_bridge → digital d_buffer → dac_bridge → analogue Y
```

Le schéma présente délibérément des bornes analogiques : le système de graphiques standard de TinyCAD peut ainsi tracer l’entrée et la sortie en volts. À l’intérieur de X1, le tampon est un véritable modèle XSPICE à événements discrets, et non une expression de seuil de tension qui prétend simuler une porte logique numérique. Ouvrez les propriétés SPICE de X1 pour examiner les étages.

## Signification des ponts
{: #what-the-bridges-mean}

Le pont ADC interprète les tensions d’entrée jusqu’à 1 V comme un état bas et celles à partir de 3 V comme un état haut. L’intervalle entre les deux est indéfini. Il s’agit d’une interface de domaine logique, et non d’un ADC multibit échantillonné doté d’une horloge, d’une résolution et d’un code de quantification.

Le pont DAC convertit l’état bas en 0 V, l’état haut en 5 V et l’état indéfini en 2,5 V pour observation. Ses temps de transition à la montée et à la descente sont de 5 ns. Une sortie de 2,5 V dans ce cours peut donc représenter un état numérique inconnu ; il ne s’agit pas nécessairement d’un signal analogique valide à mi-alimentation. Ces seuils et tensions sont des choix pédagogiques, et non les caractéristiques d’un dispositif TTL ou CMOS particulier.

La sortie idéale du pont ne comporte aucune broche d’alimentation modélisée. N’en déduisez pas la consommation réelle d’une puce logique. Pour étudier la puissance, utilisez un modèle comportant une alimentation explicite et un comportement de dispositif approprié.

## Une répartition utile du niveau de détail de la modélisation
{: #a-useful-division-of-modelling-detail}

Utilisez les portes à événements discrets pour vérifier les tables de vérité, les séquences d’horloge et la temporisation fonctionnelle. Utilisez des modèles de transistors ou de fabricants pour étudier la charge électrique et le comportement des dispositifs, à condition que ces modèles prennent en charge l’effet recherché. Utilisez des interfaces explicites lors du passage entre domaines analogique et numérique. Un symbole d’apparence similaire ne permet pas de déterminer le type de modèle qu’il contient.

Pour une première expérience, faites passer la période d’entrée de 1 µs à 2 µs, puis relancez la simulation. La fréquence de répétition est divisée par deux ; le retard de propagation spécifié du modèle devrait rester essentiellement inchangé. La période et le retard de propagation sont des propriétés indépendantes.

Références : [Présentation de XSPICE](https://ngspice.sourceforge.io/xspice.html),
[exemples XSPICE officiels et HOWTO](https://ngspice.sourceforge.io/xspicehowto.html).

## Télécharger les circuits de la leçon
{: #download-the-lesson-circuits}

Les mêmes exemples sont déjà disponibles dans **Open Example**. Pour en obtenir une copie indépendante, téléchargez un schéma `.dzn` et utilisez **File → Open** dans TinyCAD. Le document compagnon `.cir` est un texte SPICE destiné à l’inspection ou à un simulateur externe compatible, et non un schéma TinyCAD. Pour exécuter de nouvelles simulations de circuits XSPICE, utilisez Desktop.

| Exemple | Schéma | Liste de connexions |
| --- | --- | --- |
| logic-buffer | [Schéma TinyCAD](/v4/examples/simulation-tutorials/xspice/logic-buffer.dzn) | [Texte SPICE](/v4/examples/simulation-tutorials/xspice/logic-buffer.cir) |
