---
layout: default
title: "5. AC analysis: gain, phase and an RC filter"
---
# 5. Analyse AC : gain, phase et filtre RC
{: #ac-analysis-gain-phase-and-an-rc-filter}

[Précédent](/v4/SPICE-Tutorial-04/) · [Sommaire](/v4/Simulation-Tutorials/) · [Suivant](/v4/SPICE-Tutorial-06/)

Les exemples de ce chapitre sont inclus avec TinyCAD. Choisissez **Open Example → SPICE tutorial**, sélectionnez l’exemple nommé, puis choisissez **Open Drawing**. Aucun téléchargement n’est nécessaire.

Ouvrez **rc-ac**. Il utilise le même réseau de 1 kΩ/1 µF que la leçon sur la charge, mais pose une autre question : quelle part d’un petit signal sinusoïdal atteint OUT à chaque fréquence ?

La source a une amplitude AC de 1 V. Le balayage AC enregistré s’étend de 1 Hz à 100 kHz, avec 100 points par décade. Lancez-le, sélectionnez la trace dérivée **OUT / IN**, puis affichez le module, les décibels et la phase. Utilisez un axe de fréquence logarithmique.


## Vidéo : réponse AC et fréquence de coupure
{: #video-ac-response-and-cutoff}

Vérification de la configuration AC, lecture de la fréquence de coupure et basculement entre le module, les décibels et la phase.

{% include video-player.html src="/v4/videos/simulation-tutorials/spice/ac-response.mp4" poster="/v4/videos/simulation-tutorials/spice/ac-response.jpg" caption="Réponse AC et fréquence de coupure." %}

[Regarder ou télécharger la vidéo](/v4/videos/simulation-tutorials/spice/ac-response.mp4).

### Circuit et résultats de référence
{: #circuit-and-reference-results}

![Réponse en module et en phase calculée](/v4/images/simulation-tutorials/spice/rc-ac-results.png)

## Interpréter le résultat complexe
{: #interpret-the-complex-result}

L’analyse AC linéarise le circuit à son point de fonctionnement DC et résout les amplitudes complexes. Il ne s’agit pas d’une simulation transitoire dans laquelle un générateur sinusoïdal change progressivement de fréquence. Pour ce circuit,

`H(jω) = VOUT / VIN = 1 / (1 + jωRC)`.

Le module indique le rapport d’amplitude ; la phase indique le décalage temporel relatif au cours d’un cycle. Ici, la sortie est en retard sur l’entrée. La fréquence de coupure est
`fc = 1 / (2πRC) = 159.155 Hz`. À cette fréquence, le module vaut `1/√2 = 0.7071`
et la phase est de −45°. Le gain en tension en décibels est `20 log10(|H|)`, soit −3.0103 dB à la fréquence de coupure.

| Fréquence | Gain approximatif | Phase approximative |
| --- | --- | --- |
| 10 Hz | 0.9980, −0.017 dB | −3.60° |
| 159.155 Hz | 0.7071, −3.01 dB | −45° |
| 1 kHz | 0.1572, −16.07 dB | −80.96° |

La mesure **Cutoff** enregistrée utilise OUT par rapport à IN et un gain de référence de 1. Elle devrait renvoyer environ 159.15 Hz. L’interpolation des échantillons peut faire varier les derniers chiffres par rapport au résultat de l’équation.

## Éviter trois erreurs courantes
{: #avoid-three-common-mistakes}

Premièrement, tracer uniquement la composante réelle ne revient pas à tracer l’amplitude. Pour un résultat complexe, utilisez le module ou les décibels. Deuxièmement, un gain de −3 dB ne correspond pas à un rapport de tension de −3 : les décibels expriment logarithmiquement un module positif. Troisièmement, le signe moins d’un gain réel inverseur concerne la phase, et non un module négatif.

Avec une valeur AC de 1, la tension de sortie est numériquement égale au gain dans ce cas simple. Néanmoins, tracer OUT/IN est plus robuste : cela exprime toujours le gain lorsque l’amplitude d’entrée change. Le résultat AC d’un amplificateur non linéaire reste un résultat petit signal, même si l’amplitude AC est définie à une valeur élevée. Il ne prédit ni l’écrêtage ni la puissance de sortie physique.

## Comparer les choix de composants
{: #compare-component-choices}

Dans **Tune / sweep**, la commande de R1 fournie propose un balayage par liste de 1 kΩ, 2.2 kΩ et 4.7 kΩ. Lancez le balayage et comparez les courbes et le tableau des fréquences de coupure.
Les fréquences de coupure attendues sont 159.15, 72.34 et 33.86 Hz. Le réglage temporaire ne modifie pas la résistance enregistrée tant que vous n’utilisez pas **Apply**.

Un filtre RC peut supprimer l’ondulation de commutation avant un ADC ou réduire le bruit haute fréquence d’un capteur. Il ralentit également le signal utile. Comparez la réponse en fréquence de ce chapitre au temps de charge plus long dû à l’augmentation de R1 au chapitre précédent : ce sont deux aspects du même compromis physique.

Référence : l’[exemple AC du tutoriel ngspice pour débutants](https://ngspice.sourceforge.io/ngspice-tutorial.html) distingue également l’excitation AC de la forme d’onde de la source transitoire.

## Télécharger les circuits de la leçon
{: #download-the-lesson-circuits}

Les mêmes exemples sont déjà disponibles dans **Open Example**. Pour obtenir une copie indépendante, téléchargez un dessin `.dzn` et utilisez **File → Open** dans TinyCAD. Le fichier `.cir` compagnon est du texte SPICE destiné à l’inspection ou à un simulateur externe compatible, et non un dessin TinyCAD. Les circuits XSPICE nécessitent Desktop pour effectuer de nouveaux calculs.

| Exemple | Dessin | Netlist |
| --- | --- | --- |
| rc-ac | [Dessin TinyCAD](/v4/examples/simulation-tutorials/spice/rc-ac.dzn) | [Texte SPICE](/v4/examples/simulation-tutorials/spice/rc-ac.cir) |
