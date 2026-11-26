---
layout: default
title: 3. Choosing and configuring signal generators
---
# 3. Choisir et configurer les générateurs de signaux
{: #choosing-and-configuring-signal-generators}

[Précédent](/v4/SPICE-Tutorial-02/) · [Sommaire](/v4/Simulation-Tutorials/) · [Suivant](/v4/SPICE-Tutorial-04/)

Les exemples de ce chapitre sont fournis avec TinyCAD. Choisissez **Ouvrir un exemple (Open Example) → Tutoriel SPICE (SPICE tutorial)**, sélectionnez l’exemple indiqué, puis choisissez **Ouvrir le schéma (Open Drawing)**. Aucun téléchargement n’est nécessaire.

Un stimulus décrit ce qui pilote le circuit. Sélectionnez le corps d’une source sur la feuille
Circuit pour ouvrir ses paramètres. **Type de signal (Signal type)** modifie la forme d’onde et
affiche les paramètres correspondants. L’aperçu montre la forme d’onde programmée ;
la simulation calcule ce qui se produit lorsque le circuit charge cette source.

Chaque schéma ci-dessous est prêt pour une simulation transitoire de 5 ms. Chaque source de tension
alimente une charge de 1 kΩ. Utilisez-les pour découvrir un paramètre à la fois avant d’appliquer une forme d’onde
à un circuit plus complexe.

| Schéma | Stimulus enregistré | Comportement attendu |
| --- | --- | --- |
| **source-dc** (CC) | 5 V | 5 V constants et courant de charge de 5 mA |
| **source-sine** (Sinusoïdal) | Décalage de 1 V, amplitude de crête de 2 V, 1 kHz | −1 à +3 V, période de 1 ms |
| **source-pulse** (Impulsion) | 0–5 V, montée/descente de 10 µs, plateau haut de 300 µs, période de 1 ms | Impulsions répétées avec des fronts finis |
| **source-triangle** (Triangulaire) | −1 à +1 V, période de 1 ms | Rampes linéaires montantes et descendantes |
| **source-pwl** (Linéaire par segments) | 0 V jusqu’à 1 ms, rampe jusqu’à 3 V à 2 ms, maintien jusqu’à 3 ms, descente terminée à 4 ms | Séquence programmée de démarrage et d’arrêt |
| **source-exponential** (Exponentiel) | 0–5 V, début de la montée à 1 ms, début de la descente à 3 ms | Transitions exponentielles avec des constantes de temps de 300 µs et 500 µs |
| **source-fm** (FM) | Amplitude de 1 V, porteuse de 5 kHz, modulation de 500 Hz, indice 2 | Amplitude constante avec une fréquence instantanée variable |
| **source-current** (Impulsion de courant) | 0–1 mA dans une charge de retour de 1 kΩ | Environ 0 à −1 V avec l’orientation de la source fournie |


Ces graphiques sont les résultats de simulation des fichiers fournis. Le résultat de la source de courant est
négatif, car la source fait circuler le courant de OUT vers la masse, et la
résistance fournit son chemin de retour. Inversez la source si une tension de charge positive
est nécessaire. Une source de courant idéale impose le courant ; le réseau détermine
sa tension aux bornes. Elle ne possède aucune limite automatique de tension de conformité.

## Vidéo : paramètres de la source et aperçu de la forme d’onde
{: #video-source-settings-and-waveform-preview}

Modification du décalage, de l’amplitude de crête et de la fréquence du signal sinusoïdal, puis relance de la simulation transitoire.

{% include video-player.html src="/v4/videos/simulation-tutorials/spice/source-settings.mp4" poster="/v4/videos/simulation-tutorials/spice/source-settings.jpg" caption="Paramètres de la source et aperçu de la forme d’onde." %}

[Regarder ou télécharger la vidéo](/v4/videos/simulation-tutorials/spice/source-settings.mp4).

### Circuit et résultats de référence
{: #circuit-and-reference-results}

![Exemples de formes d’onde mesurées](/v4/Images/simulation-tutorials/spice/source-waveforms.png)

## Amplitude, décalage et temporisation
{: #amplitude-offset-and-timing}

Pour un signal sinusoïdal, `v(t) = offset + amplitude × sin(2πft + phase)` avant de tenir compte du retard facultatif
et de l’amortissement. L’amplitude est une valeur de **crête**, et non une valeur crête à crête ou
RMS. Un signal sinusoïdal de crête 2 V et de décalage nul a une valeur crête à crête de 4 V et une valeur RMS de 1,414 V. Avec un décalage de 1 V, sa valeur RMS totale devient `sqrt(1² + 2²/2) = 1.732 V`.

La largeur d’impulsion décrit le plateau haut ; les fronts finis influent sur la largeur mesurée
à un seuil donné. Pour l’impulsion fournie, la durée au-dessus de 2,5 V est d’environ
310 µs, soit un rapport cyclique d’environ 31 %. Évitez les fronts de durée nulle lors de l’étude d’un
circuit analogique. Ils introduisent une bande passante illimitée et compliquent les calculs
numériques sans représenter un générateur réel.

Les données linéaires par segments utilisent une paire temps/valeur croissante par ligne. Elles sont utiles
pour les rampes d’alimentation, les profils de capteur et les séquences de test non périodiques. Une source
exponentielle impose une forme d’onde exponentielle ; elle n’ajoute pas de réseau RC physique.

## L’excitation CA est un paramètre distinct
{: #ac-excitation-is-a-separate-setting}

**Amplitude CA (AC amplitude)** et **Phase CA (AC phase)** pilotent l’analyse de réponse en fréquence CA. Le champ de fréquence du signal sinusoïdal ne définit pas la plage de fréquence d’un balayage CA. De même, une
amplitude CA de 1 V ne crée pas un signal sinusoïdal transitoire de 1 V. Gardez ces distinctions
à l’esprit lorsque la même source d’entrée est utilisée pour des études de polarisation, CA et transitoires.

Une source indépendante idéale a une impédance de sortie nulle s’il s’agit d’une source de tension,
et une impédance de sortie infinie s’il s’agit d’une source de courant. **Équipement de laboratoire
(Lab Equipment) → Générateur de fonctions (Function generator)** de TinyCAD comprend plutôt une résistance de sortie configurable (normalement
50 Ω). Une charge adaptée de 50 Ω reçoit la moitié de la tension à vide du générateur.

## Sources commandées et applications pratiques
{: #controlled-sources-and-practical-uses}

Le menu d’insertion SPICE propose également une source de tension commandée en tension et
une source de courant commandée en tension. La première implémente `Vout = gain × Vcontrol` ;
la seconde implémente `Iout = transconductance × Vcontrol`. Leurs bornes de commande
et leurs bornes de sortie sont distinctes. Ouvrez **controlled-source** pour accéder à une source de tension commandée en tension, prête à être simulée, de gain 2. Une entrée de crête 1 V produit une sortie de crête 2 V sur une charge de 1 kΩ. La source idéale ne modélise ni l’écrêtage ni la puissance d’alimentation.

Les sources commandées peuvent représenter un amplificateur idéal,
un transducteur ou une charge dépendante, mais ne présentent aucune limitation d’alimentation ni de bande passante
à moins que le modèle ne les inclue explicitement.

Essayez de ne modifier que l’amplitude du signal sinusoïdal, puis uniquement son décalage. Prévoyez le nouveau
minimum, le nouveau maximum et la valeur RMS avant de relancer la simulation. Doublez ensuite la
fréquence et divisez par deux le pas de temps maximal pour vérifier que la forme d’onde affichée reste correctement résolue.

Référence : la syntaxe des sources et les définitions des formes d’onde sont décrites dans le
[manuel ngspice](https://ngspice.sourceforge.io/docs.html).

## Télécharger les circuits de la leçon
{: #download-the-lesson-circuits}

Les mêmes exemples sont déjà disponibles dans **Ouvrir un exemple (Open Example)**. Pour obtenir une copie indépendante, téléchargez un schéma `.dzn` et utilisez **Fichier (File) → Ouvrir (Open)** dans TinyCAD. Le fichier complémentaire `.cir` est du texte SPICE à consulter ou à utiliser avec un simulateur externe compatible ; ce n’est pas un schéma TinyCAD. Les circuits XSPICE nécessitent Desktop pour lancer de nouvelles simulations.

| Exemple | Schéma | Netlist |
| --- | --- | --- |
| source-dc | [Schéma TinyCAD](/v4/examples/simulation-tutorials/spice/source-dc.dzn) | [Texte SPICE](/v4/examples/simulation-tutorials/spice/source-dc.cir) |
| source-current | [Schéma TinyCAD](/v4/examples/simulation-tutorials/spice/source-current.dzn) | [Texte SPICE](/v4/examples/simulation-tutorials/spice/source-current.cir) |
| source-sine | [Schéma TinyCAD](/v4/examples/simulation-tutorials/spice/source-sine.dzn) | [Texte SPICE](/v4/examples/simulation-tutorials/spice/source-sine.cir) |
| source-pulse | [Schéma TinyCAD](/v4/examples/simulation-tutorials/spice/source-pulse.dzn) | [Texte SPICE](/v4/examples/simulation-tutorials/spice/source-pulse.cir) |
| source-triangle | [Schéma TinyCAD](/v4/examples/simulation-tutorials/spice/source-triangle.dzn) | [Texte SPICE](/v4/examples/simulation-tutorials/spice/source-triangle.cir) |
| source-pwl | [Schéma TinyCAD](/v4/examples/simulation-tutorials/spice/source-pwl.dzn) | [Texte SPICE](/v4/examples/simulation-tutorials/spice/source-pwl.cir) |
| source-exponential | [Schéma TinyCAD](/v4/examples/simulation-tutorials/spice/source-exponential.dzn) | [Texte SPICE](/v4/examples/simulation-tutorials/spice/source-exponential.cir) |
| source-fm | [Schéma TinyCAD](/v4/examples/simulation-tutorials/spice/source-fm.dzn) | [Texte SPICE](/v4/examples/simulation-tutorials/spice/source-fm.cir) |
| controlled-source | [Schéma TinyCAD](/v4/examples/simulation-tutorials/spice/controlled-source.dzn) | [Texte SPICE](/v4/examples/simulation-tutorials/spice/controlled-source.cir) |
