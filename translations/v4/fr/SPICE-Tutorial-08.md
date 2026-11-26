---
layout: default
title: 8. Measuring amplifier gain and bandwidth
---
# 8. Mesure du gain et de la bande passante d’un amplificateur
{: #measuring-amplifier-gain-and-bandwidth}

[Précédent](/v4/SPICE-Tutorial-07/) · [Sommaire](/v4/Simulation-Tutorials/) · [Suivant](/v4/SPICE-Tutorial-09/)

Les exemples de ce chapitre sont fournis avec TinyCAD. Choisissez **Open Example (Ouvrir un exemple) → Tutoriel SPICE**, sélectionnez l’exemple indiqué, puis choisissez **Open Drawing (Ouvrir le schéma)**. Aucun téléchargement n’est nécessaire.

Ouvrez **amp-ac**. Il s’agit de l’amplificateur reconstruit, avec une
amplitude CA de 1 sur VIN et un balayage CA de 1 Hz à 100 MHz, à 60 points par décade.
La limite supérieure étendue rend visible l’atténuation du modèle générique du transistor ;
elle ne permet pas d’établir que le matériel d’origine se comporte avec précision en RF.

Sélectionnez **Voltage gain**, la trace calculée enregistrée OUT/IN. Affichez le module en dB
et la phase. Dans vos notes, distinguez les tensions de nœud du gain sans dimension.

![Gain et phase calculés de l’amplificateur](/v4/Images/simulation-tutorials/spice/amp-ac-results.png)

## Interpréter le résultat avant de l’expliquer
{: #read-the-result-before-explaining-it}

Avec RL = 8 Ω et le réglage électrique de R6 à 0,5, le gain de référence à 1 kHz est
d’environ **0,892 V/V**, soit **−0,995 dB**, avec une phase approximativement inversée.
Le module maximal échantillonné est également d’environ 0,892. Les fréquences de coupure à mi-puissance
par rapport à ce maximum se situent près de **24 Hz** et **2,9 MHz** ; ces valeurs arrondies reflètent
le balayage échantillonné et le modèle générique choisi.

Il ne s’agit pas de fréquences de coupure à gain unité. La bande passante à −3 dB se mesure par rapport
au gain de bande passante ou au gain maximal de l’amplificateur, et pas nécessairement par rapport à 1 V/V. Dans
la mesure de bande passante nommée de TinyCAD, sélectionnez OUT et IN, et définissez le gain de référence sur
`peak` pour étudier cette réponse en forme de passe-bande. Une mesure de bande passante
nécessite que les deux fréquences de coupure se trouvent dans la plage de fréquences acquise.

## Pourquoi le gain en tension global est inférieur à un
{: #why-the-overall-voltage-gain-is-below-one}

VIN est mesuré avant le potentiomètre de volume. La tension au curseur est davantage réduite
par l’impédance d’entrée finie de l’amplificateur. Q1 fournit ensuite un gain en tension inverseur.
Q2 attaque une charge très faible de 8 Ω par l’intermédiaire de C2, et son impédance de sortie finie
provoque une atténuation supplémentaire. Le rapport global inclut tous les étages.

Comparez BASE/IN, COLLECTOR/BASE et OUT/COLLECTOR comme rapports calculés distincts.
Ils répondent à des questions différentes. Un étage peut fournir un gain en tension alors que
le trajet complet entre l’entrée et la charge présente un gain inférieur à l’unité. Un suiveur d’émetteur
peut tout de même fournir un gain en courant utile, même lorsque son gain en tension est inférieur à un.

## Déterminer les causes des limites aux basses et hautes fréquences
{: #find-the-causes-of-the-low--and-high-frequency-limits}

C1 et C2 sont des condensateurs de liaison en série. Leur réactance augmente aux basses
fréquences, ce qui atténue le signal. La résistance effective de C2 comprend à la fois
la charge et l’impédance de sortie de l’étage ; utiliser uniquement `1/(2π × 8 Ω × C2)`
ne décrit pas entièrement le circuit chargé. Aux hautes fréquences, les capacités des transistors
et leur temps de transit dans le modèle réduisent la réponse et modifient la phase.

Essayez les modifications contrôlées suivantes, en rétablissant la valeur d’origine après chacune :

1. Faites passer RL de 8 Ω à 80 Ω. Comparez le gain en bande passante et la fréquence de coupure basse.
2. Doublez C2. Vérifiez si la fréquence de coupure basse se déplace autant que prévu si C2
   est prédominant ; C1 et le chargement peuvent également intervenir.
3. Modifiez le réglage électrique de R6. Notez séparément le gain de IN et celui de BASE,
   afin de ne pas confondre l’atténuation due au volume avec le gain de l’étage transistorisé.
4. Augmentez le nombre de points par décade près d’une fréquence de coupure et vérifiez que celle-ci
   s’est stabilisée avant de donner davantage de chiffres significatifs.

L’analyse CA prédit la réponse à une perturbation suffisamment faible autour du point de
polarisation. Elle ne limite pas l’amplitude de sortie à l’excursion disponible de l’alimentation.
Le chapitre suivant utilise une entrée transitoire d’amplitude finie pour déterminer à partir de quel point
la prédiction en petit signal ne décrit plus la forme d’onde réelle.

## Télécharger les circuits de la leçon
{: #download-the-lesson-circuits}

Les mêmes exemples sont déjà disponibles dans **Open Example (Ouvrir un exemple)**. Pour obtenir une copie indépendante, téléchargez un schéma `.dzn` et utilisez **File (Fichier) → Open (Ouvrir)** dans TinyCAD. Le fichier complémentaire `.cir` est du texte SPICE destiné à l’inspection ou à un simulateur externe compatible, et non un schéma TinyCAD. Les circuits XSPICE nécessitent Desktop pour exécuter de nouvelles simulations.

| Exemple | Schéma | Liste de connexions |
| --- | --- | --- |
| amp-ac | [Schéma TinyCAD](/v4/examples/simulation-tutorials/spice/amp-ac.dzn) | [Texte SPICE](/v4/examples/simulation-tutorials/spice/amp-ac.cir) |
