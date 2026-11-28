---
layout: default
title: 6. Diodes, rectification and ripple
---
# 6. Diodes, redressement et ondulation
{: #diodes-rectification-and-ripple}

[Précédent](/v4/SPICE-Tutorial-05/) · [Sommaire](/v4/Simulation-Tutorials/) · [Suivant](/v4/SPICE-Tutorial-07/)

Les exemples de ce chapitre sont fournis avec TinyCAD. Choisissez **Open Example → SPICE tutorial**, sélectionnez l’exemple indiqué, puis choisissez **Open Drawing**. Aucun téléchargement n’est nécessaire.

Ouvrez **rectifier**. Une sinusoïde de 5 V crête à 50 Hz alimente une
diode, un condensateur réservoir de 100 µF et une charge de 1 kΩ. Exécutez la simulation transitoire enregistrée de 200 ms et tracez IN et OUT.


## Suivre le courant pendant un cycle
{: #follow-the-current-through-a-cycle}

Lorsque la tension d’entrée dépasse suffisamment la tension du condensateur, la diode
conduit et rétablit la charge du condensateur. Après le pic d’entrée, la
diode se bloque. Le condensateur alimente alors la charge et sa tension baisse
jusqu’à l’intervalle de recharge suivant. Les alternances négatives de l’entrée ne forcent pas le
condensateur à devenir négatif, car la diode bloque la conduction inverse à ces tensions.

La diode n’est pas un interrupteur idéal présentant une chute fixe de 0,7 V. Son modèle `TC_D`
intégré comprend une loi courant/tension non linéaire et une résistance série. La chute directe
varie en fonction du courant, de la température et des paramètres du modèle. Le tutoriel utilise
un modèle générique, qui ne garantit pas les performances d’une diode achetée.

## Mesurer sur une fenêtre stabilisée
{: #measure-a-settled-window}

Les premiers cycles incluent le démarrage. Pour une mesure d’ondulation reproductible, utilisez
**De = 160 ms** et **À = 200 ms**. La simulation de référence donne :

| Mesure sur OUT | Résultat approximatif |
| --- | --- |
| Tension moyenne | 3,90 V |
| Minimum | 3,56 V |
| Maximum | 4,24 V |
| Ondulation crête à crête | 0,684 V |
| Valeur efficace totale | 3,908 V |

La moyenne correspond au niveau continu. La valeur efficace totale inclut ce niveau ainsi que l’ondulation.
La **valeur efficace de l’ondulation** élimine la moyenne avant le calcul de la valeur efficace ; il s’agit donc d’une
quantité différente. Une valeur efficace totale élevée n’implique pas une forte ondulation alternative.

L’estimation approximative `ΔV ≈ Iload / (f × C)` donne environ 0,78 V en utilisant 3,9 mA,
50 Hz et 100 µF. L’écart avec les 0,684 V simulés est instructif :
elle suppose un courant de charge presque constant et une recharge instantanée, alors que
le courant dans la résistance varie et que la diode conduit pendant un intervalle fini.

## Vidéo : mesurer l’ondulation stabilisée d’un redresseur
{: #video-measuring-settled-rectifier-ripple}

Définir une fenêtre de mesure de 160 à 200 ms et comparer la tension moyenne à l’ondulation crête à crête.

{% include video-player.html src="/v4/videos/simulation-tutorials/spice/rectifier-ripple.mp4" poster="/v4/videos/simulation-tutorials/spice/rectifier-ripple.jpg" caption="Mesure de l’ondulation stabilisée d’un redresseur." %}

[Regarder ou télécharger la vidéo](/v4/videos/simulation-tutorials/spice/rectifier-ripple.mp4).

### Circuit et résultats de référence
{: #circuit-and-reference-results}

![Redresseur mono-alternance et condensateur réservoir](/v4/Images/simulation-tutorials/spice/rectifier-circuit.png)

![Ondulation au démarrage et en régime établi calculée](/v4/Images/simulation-tutorials/spice/rectifier-results.png)

## Expériences révélant les compromis
{: #experiments-that-reveal-the-trade-offs}

Doublez C1 pour obtenir 200 µF. L’ondulation devrait diminuer, mais la recharge se fait par des impulsions plus courtes
et plus concentrées. Divisez la résistance de charge par deux, à 500 Ω : la charge prélève
davantage de courant, la tension moyenne baisse et l’ondulation augmente. Pour examiner le courant de la diode,
demandez la mesure du courant du composant, si elle est prise en charge, ou insérez une sonde de courant en série
dans le trajet de la diode. Réduisez le pas de temps maximal pour vérifier que
les pics de conduction courts sont correctement résolus.

La source utilisée ici est idéale. Un transformateur, un générateur ou une alimentation pratique possède une
impédance qui modifie le courant de recharge et la chute de tension. Ajoutez une résistance en série
pour explorer cet effet. La puissance des composants et le courant de crête sont des résultats de simulation
utiles, mais ce modèle simple ne prédit pas automatiquement l’échauffement du condensateur, les caractéristiques de surtension
ni la température de jonction de la diode.

## Pourquoi l’analyse AC n’est pas le premier test à effectuer
{: #why-ac-analysis-is-not-the-right-first-test}

Le comportement principal est une excursion non linéaire importante, au cours de laquelle la conduction s’active
et se désactive. Une analyse AC petit signal autour d’un point de polarisation ne peut pas reproduire
le redressement, le démarrage ni l’ondulation. Utilisez l’analyse transitoire pour ces questions.
En revanche, les balayages DC sont utiles pour tracer la caractéristique statique courant/tension
d’une diode. Choisissez l’analyse en fonction de la question physique, plutôt que de celle qui produit le graphique le plus facile.

## Télécharger les circuits de la leçon
{: #download-the-lesson-circuits}

Les mêmes exemples sont déjà disponibles dans **Open Example**. Pour en obtenir une copie indépendante, téléchargez un dessin `.dzn` et utilisez **File → Open** dans TinyCAD. Le `.cir` associé est un texte SPICE à examiner ou à utiliser dans un simulateur externe compatible, et non un dessin TinyCAD. Les circuits XSPICE nécessitent Desktop pour de nouvelles exécutions.

| Exemple | Dessin | Liste de connexions |
| --- | --- | --- |
| rectifier | [Dessin TinyCAD](/v4/examples/simulation-tutorials/spice/rectifier.dzn) | [Texte SPICE](/v4/examples/simulation-tutorials/spice/rectifier.cir) |
