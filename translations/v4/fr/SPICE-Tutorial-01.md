---
layout: default
title: "1. SPICE: overview and your first simulation"
---
# 1. SPICE : aperçu et votre première simulation
{: #spice-overview-and-your-first-simulation}

[Comment utiliser les tutoriels](/v4/Tutorial-Start-Here/) · [Contenu du cours](/v4/Simulation-Tutorials/) · [Suivant : mesures en courant continu](/v4/SPICE-Tutorial-02/)

Les exemples de ce chapitre sont fournis avec TinyCAD. Choisissez **Ouvrir un exemple (Open Example) → SPICE tutorial**, sélectionnez l’exemple indiqué, puis choisissez **Ouvrir le schéma (Open Drawing)**. Aucun téléchargement n’est nécessaire.

SPICE calcule le comportement électrique d’un circuit décrit par des composants
connectés et leurs modèles mathématiques. Il peut déterminer un point de
polarisation en courant continu, suivre les tensions et les courants au cours du
temps, ou calculer la réponse en fréquence en petit signal. Il ne déduit pas un
modèle électrique du dessin d’un composant. Un symbole de résistance nécessite
une valeur de résistance et un modèle SPICE ; un transistor nécessite en plus des
paramètres décrivant son comportement.

Ce cours commence par des circuits que l’on peut vérifier à la main. Les chapitres
suivants recréent le `AMP.DSN` d’origine de TinyCAD et en étudient les limites. Le but
est d’apprendre à poser une question précise, à choisir l’analyse appropriée et à
évaluer si le résultat est cohérent.

Pour un guide du moteur, des bibliothèques de symboles et des commandes, voir
[Comment TinyCAD implémente SPICE](/v4/SPICE-Tutorial-11/). Il explique la différence
entre ngspice et XSPICE et vous accompagne dans la création de votre propre simulation.

## Ouvrir et exécuter le premier circuit
{: #open-and-run-the-first-circuit}

Ouvrez **divider**. Sa source de 5 V alimente deux résistances de 1 kΩ
en série. L’étiquette `OUT` désigne leur jonction ; `IN` désigne l’alimentation.


1. Choisissez **Ouvrir un exemple (Open Example) → SPICE tutorial**, sélectionnez **divider**, puis choisissez **Ouvrir le schéma (Open Drawing)**.
2. Sélectionnez sa feuille Simulation. L’analyse enregistrée est **Point de fonctionnement (Operating Point)**.
3. Choisissez **Exécuter (Run)**. Si les graphiques sont masqués, utilisez **Simulation → Afficher les graphiques (Show charts)**.
4. Examinez `in`, `out` et `v1#branch`. Un point de fonctionnement contient une seule valeur
   par signal ; un affichage numérique est donc plus utile qu’un graphique temporel.
5. Sélectionnez R2 sur la feuille Circuit, remplacez **Value** par `1k` au lieu de `2k`, puis relancez
   la simulation. Rétablissez `1k` avant de continuer, ou rouvrez **divider** depuis **Ouvrir un exemple (Open Example)**.

L’acquisition de référence fournie vous permet d’examiner immédiatement les
résultats. Après une modification, relancez la simulation : les résultats
conservés décrivent le circuit au moment de l’acquisition.
L’enregistrement conserve la configuration et les résultats conservés ; **Enregistrer sans résultats (Save without results)** crée une copie plus légère à partager tout en conservant le circuit et les paramètres de simulation.

Les graphiques du point de fonctionnement ne contiennent qu’un seul point ; utilisez les données numériques pour obtenir des valeurs précises.

## Vidéo : ouvrir, exécuter et modifier un diviseur
{: #video-open-run-and-change-a-divider}

Ouverture de l’exemple intégré, vérification des valeurs en courant continu, modification de R2 et lancement d’une nouvelle acquisition.

{% include video-player.html src="/v4/videos/simulation-tutorials/spice/first-run.mp4" poster="/v4/videos/simulation-tutorials/spice/first-run.jpg" caption="Ouvrir, exécuter et modifier un diviseur." %}

[Regarder ou télécharger la vidéo](/v4/videos/simulation-tutorials/spice/first-run.mp4).

### Circuit et résultats de référence
{: #circuit-and-reference-results}

![Circuit diviseur de tension généré à partir du schéma enregistré](/v4/Images/simulation-tutorials/spice/divider-circuit.png)

## Prédire le résultat
{: #predict-the-answer}

Le courant est `I = 5 / (1000 + 1000) = 2.5 mA`. La résistance inférieure présente donc
`VOUT = I × 1000 = 2.5 V`. Lorsque R2 passe à 2 kΩ, l’équation du diviseur donne
`VOUT = 5 × 2000 / (1000 + 2000) = 3.333 V`.

![Résultats calculés du point de fonctionnement](/v4/Images/simulation-tutorials/spice/divider-results.png)

Le courant de la source est de −2,5 mA. Il ne s’agit pas d’une erreur de câblage : SPICE définit le courant d’une source comme entrant par sa borne positive. Selon cette convention, une source qui fournit de l’énergie présente un courant négatif. Le chapitre 2 utilise ce signe pour calculer correctement la puissance.

## Quatre principes fondamentaux
{: #four-foundations}

- **La masse est le nœud `0`.** Les tensions sont des différences ; le solveur a besoin d’une référence.
  Un fil étiqueté `GND` ne le remplace pas, sauf s’il est réellement connecté
  à la masse SPICE. Utilisez l’outil **Insérer une masse (Insert Ground)** de TinyCAD.
- **La connectivité est électrique.** Un point de jonction relie les branches. Des fils qui se
  croisent sans connexion ne sont pas nécessairement reliés. Des étiquettes de réseau
  identiques connectent des points éloignés ; une note textuelle placée à proximité ne le fait pas.
- **Les unités et les préfixes sont importants.** Utilisez `1k`, `10u`, `100n` et `1Meg` dans les valeurs SPICE.
  Dans SPICE, `m` signifie milli, et non méga. Les commandes de source de TinyCAD acceptent également
  des valeurs avec unité, comme `1kHz` et `5ms`.
- **La portée des modèles est limitée.** Une résistance idéale ne présente ni inductance
  parasite ni défaillance thermique, sauf si ces effets sont explicitement modélisés.

## Choisir l’analyse qui répond à la question
{: #choose-the-analysis-that-answers-the-question}

| Question | Analyse |
| --- | --- |
| Vers quelles tensions et quels courants continus le circuit se stabilise-t-il ? | Point de fonctionnement (Operating Point) |
| Que se passe-t-il après un échelon ou pendant une forme d’onde ? | Transitoire (Transient) |
| Comment le gain en petit signal varie-t-il avec la fréquence ? | CA (AC) |
| Comment la solution en courant continu évolue-t-elle lorsqu’une source change ? | Balayage en courant continu (DC sweep) |
| Quel bruit atteint une sortie sur une bande de fréquences ? | Bruit (Noise) |
| Quels sont le gain en petit signal en courant continu et les résistances des ports ? | Fonction de transfert (Transfer function) |
| Où se trouvent les pôles et les zéros du système linéarisé ? | Pôles-zéros (Pole-zero) |

Une simulation convergée n’est que le début de la validation. Vérifiez la polarité,
les unités, le chargement et le type d’analyse à l’aide d’une estimation simple.

Pour en savoir plus : le [tutoriel officiel ngspice pour débutants](https://ngspice.sourceforge.io/ngspice-tutorial.html)
propose une introduction complémentaire fondée sur les netlists.

## Télécharger les circuits de la leçon
{: #download-the-lesson-circuits}

Les mêmes exemples sont déjà disponibles dans **Ouvrir un exemple (Open Example)**. Pour en obtenir une copie indépendante, téléchargez un schéma `.dzn` et utilisez **Fichier (File) → Ouvrir (Open)** dans TinyCAD. Le fichier complémentaire `.cir` est du texte SPICE à consulter ou à utiliser avec un simulateur externe compatible ; ce n’est pas un schéma TinyCAD. Les circuits XSPICE nécessitent Desktop pour lancer de nouvelles simulations.

| Exemple | Schéma | Netlist |
| --- | --- | --- |
| divider | [Schéma TinyCAD](/v4/examples/simulation-tutorials/spice/divider.dzn) | [Texte SPICE](/v4/examples/simulation-tutorials/spice/divider.cir) |
