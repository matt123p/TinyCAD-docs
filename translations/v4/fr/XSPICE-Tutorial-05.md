---
layout: default
title: 5. Counters and divided clocks
---
# 5. Compteurs et horloges divisées
{: #counters-and-divided-clocks}

[Précédent](/v4/XSPICE-Tutorial-04/) · [Sommaire](/v4/Simulation-Tutorials/) · [Suivant](/v4/XSPICE-Tutorial-06/)

Les exemples de ce chapitre sont fournis avec TinyCAD. Choisissez **Open Example → XSPICE and digital tutorial**, sélectionnez l’exemple indiqué, puis choisissez **Open Drawing**. Aucun téléchargement n’est nécessaire.

Ouvrez **logic-counter**. X1 contient quatre bascules D. La sortie inversée de chacune est renvoyée à son entrée D, de sorte qu’elle bascule à chaque impulsion d’horloge. La première étape reçoit CLK ; les étapes suivantes sont cadencées par la sortie inversée de l’étape précédente. Cela forme un compteur binaire asynchrone croissant.

![Circuit de test d’un compteur quatre bits](/v4/Images/simulation-tutorials/xspice/logic-counter-circuit.png)
![Sorties d’horloge divisée calculées](/v4/Images/simulation-tutorials/xspice/logic-counter-results.png)

La période d’entrée est de 1 µs. La réinitialisation efface les étapes au démarrage, et le premier front de comptage survient vers 0,5 µs. Exécutez l’analyse transitoire enregistrée de 18 µs. Lisez chaque valeur une fois le transitoire de propagation terminé, par exemple à 0,8 µs, 1,8 µs, 2,8 µs, et ainsi de suite.

La séquence décimale attendue est :

```text
1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 0
```

Pour l’ordre des bits Q3 Q2 Q1 Q0, les quatre premières valeurs sont 0001, 0010, 0011 et 0100.
Convertissez à l’aide de `count = Q0 + 2Q1 + 4Q2 + 8Q3`, en interprétant dans ce graphique une tension stabilisée supérieure à 2,5 V comme un niveau logique 1.

## Division de fréquence
{: #frequency-division}

Q0 bascule une fois par cycle d’entrée, sa période complète s’étend donc sur deux cycles d’entrée. Q1 divise par quatre, Q2 par huit et Q3 par seize.

| Sortie | Période | Fréquence |
| --- | --- | --- |
| Q0 | 2 µs | 500 kHz |
| Q1 | 4 µs | 250 kHz |
| Q2 | 8 µs | 125 kHz |
| Q3 | 16 µs | 62,5 kHz |

L’acquisition fournie de 18 µs montre le rebouclage, mais peut ne pas contenir deux fronts montants complets de Q3 après la réinitialisation. Prolongez la durée à 35 µs avant de demander une mesure de fréquence sur le premier cycle complet pour cette sortie. Une fréquence indisponible est appropriée lorsque l’acquisition ne contient pas suffisamment d’éléments.

## Importance du compteur asynchrone à propagation
{: #why-ripple-matters}

Les bits ne changent pas simultanément. Chaque étape réagit après la transition de sortie de l’étape précédente. Zoomez sur la transition de sept à huit : des combinaisons intermédiaires temporaires de bits apparaissent pendant la propagation de la retenue. Un décodeur combinatoire connecté à ces bits pourrait donc produire des glitches.

Cette architecture diffère de celle d’un compteur synchrone, dans lequel toutes les étapes partagent la même horloge. Une séquence de comptage correcte une fois stabilisée ne rend pas le compteur asynchrone à propagation adapté à toutes les applications sensibles aux délais. Utilisez cet exemple pour distinguer le comptage fonctionnel du comportement temporel des transitions.

Essayez de doubler la période d’horloge. La séquence de comptage reste la même, mais toutes les fréquences de sortie sont divisées par deux ; les délais de propagation configurés restent fixes. Déplacez ensuite la réinitialisation au milieu de l’exécution et vérifiez que tous les bits sont effacés avant la reprise du comptage normal. Notez le moment de la réinitialisation et laissez suffisamment de temps aux ponts de réinitialisation et DAC pour se stabiliser avant d’échantillonner un état.

Pour tester une conception, définissez à la fois une exigence fonctionnelle (comptage stabilisé correct) et une exigence temporelle (délai de stabilisation maximal autorisé après l’horloge). Elles répondent à des questions différentes et doivent être vérifiées indépendamment.

## Télécharger les circuits de la leçon
{: #download-the-lesson-circuits}

Les mêmes exemples sont déjà disponibles dans **Open Example**. Pour obtenir une copie indépendante, téléchargez un schéma `.dzn` et utilisez **File → Open** dans TinyCAD. Le fichier compagnon `.cir` est un texte SPICE destiné à l’inspection ou à un simulateur externe compatible, et non un schéma TinyCAD. Les circuits XSPICE nécessitent Desktop pour être exécutés à nouveau.

| Exemple | Schéma | Netlist |
| --- | --- | --- |
| logic-counter | [Schéma TinyCAD](/v4/examples/simulation-tutorials/xspice/logic-counter.dzn) | [Texte SPICE](/v4/examples/simulation-tutorials/xspice/logic-counter.cir) |
