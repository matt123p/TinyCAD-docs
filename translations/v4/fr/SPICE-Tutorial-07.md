---
layout: default
title: 7. Rebuilding AMP.DSN and checking its bias
---
# 7. Reconstruire AMP.DSN et vérifier sa polarisation
{: #rebuilding-ampdsn-and-checking-its-bias}

[Précédent](/v4/SPICE-Tutorial-06/) · [Sommaire](/v4/Simulation-Tutorials/) · [Suivant](/v4/SPICE-Tutorial-08/)

Les exemples de ce chapitre sont fournis avec TinyCAD. Choisissez **Open Example → SPICE tutorial**, sélectionnez l’exemple indiqué, puis choisissez **Open Drawing**. Aucun téléchargement n’est nécessaire.

Ouvrez **amp-bias**. Ce schéma reconstruit la topologie de
`D:\Projects\TinyCAD\examples\AMP.DSN`, intitulé **Transistor Amplifier** et
attribué à l’origine à Matt Pyne, en 1995. Il utilise des composants de la
bibliothèque SPICE essentials de TinyCAD et des sources de simulation configurables.

![AMP.DSN reconstruit avec des composants de simulation](/v4/Images/simulation-tutorials/spice/amp-bias-circuit.png)

## Éléments préservés et modélisés
{: #what-was-preserved-and-what-was-modelled}

| Composant d’origine | Composant reconstruit et rôle |
| --- | --- |
| R1, annotation 470 Ω, 0,5 W | Résistance d’émetteur de Q2 de 470 Ω ; la puissance nominale ne constitue pas une limite thermique simulée |
| R2, 1 kΩ | Résistance de collecteur de Q1 |
| R3, 100 kΩ ; R4, 10 kΩ | Diviseur de polarisation de base de Q1 |
| R5, 220 Ω | Résistance de dégénérescence d’émetteur de Q1 |
| R6, potentiomètre logarithmique de 10 kΩ | Potentiomètre de 10 kΩ, répartition électrique `Wiper = 0.5` |
| C1, 100 µF ; C2, 470 µF | Condensateurs idéaux de liaison à l’entrée et à la sortie |
| Q1, ZTX650 ; Q2, BC140 | Les deux utilisent le modèle générique intégré `TC_NPN` |
| Entrée phono J1 | Source configurable VIN, référencée au nœud 0 |
| T1, haut-parleur de 8 Ω | RL = 8 Ω, charge électrique résistive |
| Rails 12 V / 0 V | Source indépendante de 12 V VCC et nœud SPICE 0 |

La loi logarithmique du potentiomètre mécanique d’origine ne définit pas une
répartition de résistance unique pour chaque position de l’axe. Ici, 0.5 correspond
à une répartition **électrique** de 5 kΩ/5 kΩ, et ne prétend pas représenter la
position médiane du bouton d’origine. La résistance de source de VIN est idéale.
Le modèle du haut-parleur ne tient pas compte de l’inductance, de la résonance ni
du rendement acoustique ; il ne permet donc pas de prédire le niveau de pression
sonore.

Les deux instances de transistor intègrent le modèle de la bibliothèque :

```spice
.model TC_NPN NPN(Is=1e-14 Bf=200 Vaf=100 Cje=10p Cjc=5p Tf=500p)
```

Il s’agit de paramètres de modèle illustratifs, et non de modèles constructeur
pour ZTX650 ou BC140. Leur utilisation est délibérée et visible dans les
propriétés SPICE du composant. Pour obtenir les performances exactes de ces
composants d’origine, il faudrait des modèles de composants validés ainsi que,
pour toute comparaison avec du matériel, des informations sur les parasites et
le comportement thermique.

## Comprendre les deux étages
{: #understand-the-two-stages}

Q1 est un étage à émetteur commun. Sa tension de collecteur diminue lorsque le
courant de collecteur augmente : il inverse donc le signal. R5 assure une
contre-réaction par dégénérescence d’émetteur : cette contre-réaction négative
réduit la sensibilité du gain et améliore la linéarité. R2 convertit les variations
de courant en variations de tension de collecteur.

Q2 est un suiveur d’émetteur. Son collecteur est relié à VCC et son émetteur
alimente R1 ainsi que, par l’intermédiaire de C2, la charge du haut-parleur. Il
fournit un courant de commande plutôt qu’un gain de tension important
supplémentaire. C1 et C2 isolent les niveaux continus de fonctionnement entre
les étages et les connexions externes.

## Exécuter le point de fonctionnement avant d’appliquer un signal
{: #run-operating-point-before-applying-a-signal}

Les valeurs de référence à 27°C sont les suivantes :

| Grandeur | Valeur de référence |
| --- | --- |
| BASE, base de Q1 | 1.0235 V |
| Émetteur de Q1, entre Q1 et R5 | 0.3582 V |
| COLLECTOR, collecteur de Q1 / base de Q2 | 10.2800 V |
| ÉMETTEUR, émetteur de Q2 | 9.5476 V |
| OUT, après C2 | 0 V |
| Courant fourni par VCC | 22.044 mA |
| Puissance d’alimentation | 264.533 mW |

OUT est à zéro en continu, car C2 bloque la tension continue de l’émetteur et
RL ramène la sortie à la masse. Une polarisation de sortie nulle ne signifie donc
pas que l’amplificateur n’est pas alimenté. Le courant d’émetteur de Q1 est
approximativement `0.3582 / 220 = 1.628 mA` ; le courant de repos dans la résistance
d’émetteur de Q2 est `9.5476 / 470 = 20.31 mA`.

La polarisation de l’étage de sortie est élevée par rapport au rail de 12 V et le
courant de repos est modeste pour 8 Ω. Cela laisse déjà présager des limites
asymétriques pour l’excursion du signal. Les deux chapitres suivants vérifient
cette prévision, au lieu de supposer qu’un circuit appelé amplificateur doit
présenter un gain en tension élevé ou fournir une puissance audio importante.

## Télécharger les circuits de la leçon
{: #download-the-lesson-circuits}

Les mêmes exemples sont déjà accessibles dans **Open Example**. Pour obtenir
une copie indépendante, téléchargez un schéma `.dzn` et ouvrez-le
dans TinyCAD avec **File → Open**. Le fichier compagnon `.cir`
est du texte SPICE destiné à l’inspection ou à un simulateur externe compatible,
et non un schéma TinyCAD. Les circuits XSPICE nécessitent Desktop pour effectuer
de nouvelles simulations.

| Exemple | Schéma | Netlist |
| --- | --- | --- |
| amp-bias | [Schéma TinyCAD](/v4/examples/simulation-tutorials/spice/amp-bias.dzn) | [Texte SPICE](/v4/examples/simulation-tutorials/spice/amp-bias.cir) |
