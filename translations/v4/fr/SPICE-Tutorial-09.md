---
layout: default
title: 9. Amplifier waveform, clipping and power usage
---
# 9. Forme d’onde de l’amplificateur, écrêtage et consommation électrique
{: #amplifier-waveform-clipping-and-power-usage}

[Précédent](/v4/SPICE-Tutorial-08/) · [Sommaire](/v4/Simulation-Tutorials/) · [Suivant](/v4/SPICE-Tutorial-10/)

Les exemples de ce chapitre sont fournis avec TinyCAD. Choisissez **Open Example → SPICE tutorial**, sélectionnez l’exemple indiqué, puis choisissez **Open Drawing**. Aucun téléchargement n’est nécessaire.

Ouvrez **amp-small-signal**. VIN fournit une sinusoïde de
10 mV crête à 1 kHz. Le transitoire dure 12 ms, avec un pas maximal de 2 µs.
Comparez IN et OUT, puis mesurez les quatre dernières périodes, de 8 ms à 12 ms.

![Formes d’onde mesurées de l’amplificateur petit signal](/v4/Images/simulation-tutorials/spice/amp-small-signal-results.png)

Le résultat AC prévoit environ 8,92 mV crête en OUT, inversés par rapport à l’entrée.
Le transitoire donne approximativement −8,87 à +8,99 mV sur la fenêtre de mesure,
avec une valeur **RMS de 6,304 mV**. La faible différence entre les crêtes positive et négative
reflète le modèle non linéaire et les effets transitoires résiduels.

## Calculer la puissance de charge et la consommation de l’alimentation
{: #calculate-load-power-and-supply-consumption}

Pour RL purement résistive, la puissance instantanée est `pL(t) = vOUT(t)² / 8`.
La puissance moyenne de charge est donc égale à `VOUT,RMS² / 8`, contributions continues comprises
sur l’intervalle sélectionné. Avec le faible signal d’entrée, elle est d’environ **4,97 µW**.

La puissance fournie par l’alimentation est `−12 × mean(i(VCC))`, soit environ **264,61 mW**.
La majeure partie de la puissance est consommée par le circuit polarisé, même lorsque le signal audio est infime.
Le rapport entre la puissance de charge et celle de l’alimentation n’est que d’environ **0,00188 %** pour ce signal d’entrée.
Il s’agit du rendement électrique pour la frontière et la fenêtre choisies, et non d’un
rendement acoustique ou d’une caractéristique générale du circuit.

Dans TinyCAD, ajoutez des mesures de puissance pour les composants VCC et RL, puis choisissez **Mean**
avec From/To réglés sur 8 ms et 12 ms. Une source qui fournit de la puissance a une puissance absorbée négative ; prenez l’opposé pour obtenir la puissance d’entrée fournie. L’**Integral** de la puissance donne
l’énergie en joules. Une mesure de courant ou de puissance indisponible pour un modèle ne doit pas être
remplacée par une valeur zéro supposée.

## Augmenter le signal d’entrée jusqu’à ce que la prédiction linéaire ne soit plus valable
{: #increase-input-until-the-linear-prediction-fails}

Ouvrez **amp-clipping**. Seule l’amplitude de VIN change,
passant à 500 mV crête. Une extrapolation linéaire prévoirait environ 446 mV crête en OUT
dans les deux directions. La forme d’onde calculée ne présente pas ce résultat.

![Sortie calculée asymétrique en grand signal](/v4/Images/simulation-tutorials/spice/amp-clipping-results.png)

Dans la même fenêtre de 8 à 12 ms, la sortie s’étend approximativement de
**−0,162 à +0,389 V**, avec une valeur **RMS de 0,2126 V**. La consommation de l’alimentation est d’environ
**315,23 mW** ; la puissance totale dissipée dans les charges résistives est de **5,65 mW**, soit un rendement électrique d’environ **1,79 %**
sur cette fenêtre. La valeur moyenne de sortie est d’environ
31 mV pour cette acquisition de durée finie. Pour calculer la puissance de charge due uniquement au signal alternatif, soustrayez la valeur moyenne
avant de mettre au carré : utilisez la valeur RMS de l’ondulation, et non la valeur RMS totale.

Le suiveur d’émetteur peut fournir activement du courant, mais son chemin de rappel vers le bas est
limité par son réseau de polarisation. La très faible résistance de charge met en évidence cette
asymétrie. Ne concluez pas que toute région d’apparence plate correspond simplement à un « écrêtage sur le rail d’alimentation » : examinez EMITTER, COLLECTOR et les courants des composants pour identifier le mécanisme.

## Rendre la mesure fiable
{: #make-the-measurement-defensible}

Utilisez des périodes complètes, indiquez la fenêtre temporelle et excluez le démarrage si vous étudiez le régime établi. Répétez la simulation avec une durée plus longue pour vérifier si la valeur moyenne et la puissance sur la fenêtre se stabilisent. Réduisez le pas maximal et comparez les extrema et la valeur RMS ; les échantillons du solveur ne sont généralement pas espacés régulièrement, il faut donc utiliser des calculs pondérés dans le temps.
Une moyenne arithmétique de toutes les valeurs échantillonnées peut fausser le résultat en surpondérant les bords, où le solveur prend davantage d’échantillons.

Les formes d’onde déformées ne peuvent pas être converties de la valeur de crête à la valeur RMS à l’aide de `peak/√2`.
Cette formule s’applique à une sinusoïde. De même, la puissance électrique des transistors ne permet pas de prédire automatiquement leur température : la résistance thermique, les conditions ambiantes et les modèles dépendant de la température sont des informations supplémentaires.

Essayez d’augmenter RL à 80 Ω et comparez la symétrie de la forme d’onde, le gain en tension et la puissance fournie. Une excursion en tension plus grande ne signifie pas nécessairement une puissance supérieure,
car la résistance de charge a également changé.

## Télécharger les circuits de la leçon
{: #download-the-lesson-circuits}

Les mêmes exemples sont déjà disponibles dans **Open Example**. Pour en obtenir une copie indépendante, téléchargez un dessin `.dzn` et utilisez **File → Open** dans TinyCAD. Le fichier `.cir` associé est du texte SPICE destiné à l’inspection ou à un simulateur externe compatible, et non un dessin TinyCAD. Les circuits XSPICE nécessitent Desktop pour lancer de nouvelles simulations.

| Exemple | Dessin | Liste de connexions |
| --- | --- | --- |
| amp-small-signal | [Dessin TinyCAD](/v4/examples/simulation-tutorials/spice/amp-small-signal.dzn) | [Texte SPICE](/v4/examples/simulation-tutorials/spice/amp-small-signal.cir) |
| amp-clipping | [Dessin TinyCAD](/v4/examples/simulation-tutorials/spice/amp-clipping.dzn) | [Texte SPICE](/v4/examples/simulation-tutorials/spice/amp-clipping.cir) |
