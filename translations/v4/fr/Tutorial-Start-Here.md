---
layout: default
title: "Start here: how to use these tutorials"
---
# Commencez ici : comment utiliser ces tutoriels
{: #start-here-how-to-use-these-tutorials}

[Sommaire](/v4/Simulation-Tutorials/) · [Suivant : votre première simulation SPICE](/v4/SPICE-Tutorial-01/)

Ces tutoriels associent des explications à des circuits que vous pouvez exécuter et modifier dans
TinyCAD. **Les exemples sont déjà inclus avec TinyCAD.** Vous n’avez pas besoin de
télécharger une archive ZIP de tutoriel, de rechercher un dessin sur votre disque ni d’installer un programme
SPICE distinct pour suivre les leçons.

Commencez par le cours SPICE si la simulation est nouvelle pour vous. Il débute par la tension,
le courant et des circuits simples, puis aborde les formes d’onde, les filtres, les amplificateurs
et les études de conception. Le cours XSPICE distinct traite de la logique pilotée par événements
et de la simulation mixte. Utilisez **TinyCAD Desktop** pour ce cours ; le moteur du navigateur
ne comprend pas XSPICE.

## Rechercher et ouvrir les exemples intégrés
{: #find-and-open-the-bundled-examples}

1. Ouvrez TinyCAD et recherchez **Ouvrir un exemple** (Open Example) à droite de la barre de titre du navigateur, ou **Fichier → Ouvrir un exemple** (File → Open Example) dans Desktop. L’icône représente un
   dossier ouvert. Cela ouvre le navigateur d’exemples.
2. Choisissez **Tutoriel SPICE** pour les leçons analogiques, ou **Tutoriel XSPICE et numérique**
   pour les leçons numériques. Les groupes apparaissent également dans la zone de navigation du navigateur.
3. Dans la liste **Dessins** du groupe, sélectionnez l’exemple nommé dans la leçon.
   Pour votre première expérience, sélectionnez **divider** dans **Tutoriel SPICE**.
4. Lisez sa description et examinez l’aperçu du circuit. La sélection de l’exemple
   affiche ses détails ; elle ne remplace pas encore votre dessin.
5. Choisissez **Ouvrir le dessin** au bas du navigateur. TinyCAD ouvre une
   copie modifiable de l’exemple. Si vous avez des modifications non enregistrées, répondez à la
   demande d’enregistrement avant de continuer.

L’instruction abrégée **Ouvrir un exemple → Tutoriel SPICE → divider → Ouvrir le dessin**
correspond à ces mêmes étapes. Un nom tel que **divider**, **rc-ac** ou **logic-counter**
est le nom de l’exemple dans ce navigateur, et non un nom de fichier à rechercher.

Utilisez **Rechercher des groupes et des exemples** pour trouver un exemple par son nom. Si un filtre masque
ce qu’il vous faut, effacez la recherche et utilisez **Tous les groupes** pour revenir à la liste des groupes.
**Ouvrir le dessin** devient disponible après la sélection d’un exemple.
L’entrée **Commencez ici — utiliser les tutoriels** affiche également ce guide et
ouvre le même premier circuit diviseur.

Regardez [ouvrir, exécuter et modifier un diviseur](/v4/videos/simulation-tutorials/spice/first-run.mp4) pour voir une démonstration
avec sous-titres de ces étapes et de vos deux premières acquisitions.

## Suivre une leçon avec son circuit
{: #follow-a-lesson-alongside-its-circuit}

Gardez le chapitre ouvert dans votre manuel ou votre lecteur Markdown pendant que vous travaillez dans
TinyCAD. Le navigateur d’exemples affiche également la description de la leçon associée.
Chaque chapitre commence par nommer les exemples intégrés qu’il utilise. Certains chapitres en utilisent
plusieurs : par exemple, le chapitre sur le générateur de signaux propose des exemples distincts de sources
pour étudier une forme d’onde à la fois.

Suivez cette procédure pour chaque expérience :

1. **Lisez la question.** Déterminez ce que vous étudiez : une tension continue,
   un temps de charge, une fréquence de coupure, un état logique ou une autre grandeur.
2. **Examinez le circuit.** Repérez sa source, la masse, les valeurs des composants et les signaux nommés.
   Les étiquettes telles que IN et OUT identifient des nœuds électriques ; les références
   telles que R1 et C1 identifient des composants.
3. **Vérifiez la configuration enregistrée.** Sélectionnez la feuille **Simulation** et examinez
   **Configuration** (Setup). Les exemples contiennent déjà les paramètres d’analyse et les modèles
   nécessaires à la leçon.
4. **Prévoyez le résultat**, à l’aide de l’explication ou de l’équation du chapitre.
5. **Choisissez Exécuter** (Run), puis comparez la nouvelle acquisition aux valeurs
   et aux graphiques attendus. Examinez les nombres ainsi que la forme de la trace.
6. **Modifiez un seul élément** comme le suggère la leçon, prévoyez l’effet et exécutez
   à nouveau. Notez le paramètre modifié et le résultat obtenu.

Après avoir ouvert un exemple, choisissez **Explication** (Explanation) dans la barre de titre du navigateur, ou **Affichage → Afficher l’explication** (View → View Explanation) dans Desktop pour afficher ses
instructions à côté du dessin. Le panneau d’explication se trouve à côté des graphiques de simulation
et peut être redimensionné ou fermé indépendamment. Choisissez de nouveau
**Explication** dans la barre de titre du navigateur, ou **Affichage → Afficher l’explication** (View → View Explanation) dans Desktop pour le rouvrir.

L’icône en forme d’impulsion de la barre d’outils porte l’info-bulle **Simulation**. Chaque fois qu’une
leçon indique **Simulation → Afficher les graphiques** ou **Simulation → Composants SPICE**, ouvrez
le menu de cette icône. La **feuille Simulation** est un onglet distinct du dessin ; elle
contient la configuration de l’expérience et les vues des résultats.

![TinyCAD avec le premier circuit diviseur et son panneau de graphiques de simulation](/v4/images/simulation-tutorials/spice/tinycad-first-run.png)

Cette capture d’écran de l’application montre le diviseur après son ouverture, avec les onglets de feuille
sous le circuit et le panneau de graphiques à droite. Les principaux points de départ
sont le circuit, la feuille Simulation et **Exécuter** (Run).

## Comprendre les résultats attendus
{: #understand-the-expected-outputs}

Les images des circuits montrent la disposition et les connexions à repérer. Les graphiques de résultats
montrent les données de référence calculées par le solveur. Les captures d’écran de l’application montrent où
travailler dans TinyCAD. La taille de votre fenêtre, le zoom et les couleurs des graphiques peuvent différer ; comparez
les valeurs du circuit, les signaux, les unités et les paramètres d’analyse.

Dans l’exemple **divider** non modifié, la source est de 5 V et les deux résistances valent
1 kΩ. Après une exécution du point de fonctionnement, attendez-vous à IN = **5 V**, OUT = **2,5 V** et
au courant de la source `v1#branch` = **−2,5 mA**. Un point de fonctionnement fournit une seule valeur par
signal ; il ne produit donc pas de forme d’onde variable dans le temps. La première leçon explique
le signe du courant et le calcul du diviseur de tension.

Les dessins comprennent des acquisitions de référence conservées ; les résultats peuvent donc être déjà
visibles avant que vous choisissiez **Exécuter**. Il s’agit de résultats enregistrés lors d’une exécution précédente.
Après avoir modifié le circuit ou ses paramètres, relancez la simulation et examinez la nouvelle
acquisition. De petits écarts numériques sont normaux ; un écart important invite à vérifier les valeurs des composants,
les hypothèses des modèles, les unités et les fenêtres de mesure.

## Conserver les expériences et revenir à l’original
{: #keep-experiments-and-return-to-the-original}

Les exemples intégrés s’ouvrent sous forme de copies modifiables. Utilisez **Enregistrer sous** (Save As) pour enregistrer votre travail
sous un nom explicite, par exemple un diviseur dont la résistance inférieure a été modifiée.
L’enregistrement de votre copie ne modifie pas l’exemple inclus d’origine.

Pour réinitialiser une expérience, ouvrez de nouveau l’exemple nommé à l’aide de **Ouvrir un exemple**.
Enregistrez les modifications que vous souhaitez conserver lorsque le programme vous le demande. Cela restaure le circuit,
les paramètres et les résultats de référence conservés d’origine. Procédez de la même façon
lorsqu’un chapitre passe à un autre exemple.

L’enregistrement normal peut conserver les résultats acquis avec le dessin. **Enregistrer sans
résultats** conserve le circuit et les paramètres, mais omet les résultats enregistrés ; relancez la simulation
lorsque vous en aurez de nouveau besoin.

## Choisir votre parcours dans le contenu
{: #choose-your-route-through-the-material}

| Votre objectif | Où commencer |
| --- | --- |
| Apprendre la simulation depuis le début | [Chapitre SPICE 1](/v4/SPICE-Tutorial-01/), puis suivez les chapitres dans l’ordre |
| Comprendre les moteurs, symboles et commandes de TinyCAD | [Comment TinyCAD implémente SPICE](/v4/SPICE-Tutorial-11/) |
| Choisir une forme d’onde d’entrée | [Générateurs de signaux](/v4/SPICE-Tutorial-03/) |
| Étudier l’amplificateur AMP.DSN reconstruit | [Polarisation de l’amplificateur](/v4/SPICE-Tutorial-07/), puis gain et puissance |
| Apprendre la simulation numérique pilotée par événements | [Chapitre XSPICE 1](/v4/XSPICE-Tutorial-01/), avec Desktop |

Les liens en haut de chaque chapitre permettent de revenir au sommaire ou de passer à la leçon suivante.
Vous pouvez revenir à un exemple précédent à tout moment. Si une expérience échoue,
lisez sa vue **Diagnostics** et comparez-la avec un exemple intégré fraîchement ouvert
avant d’apporter d’autres modifications.

## Commandes actuelles de l’explorateur de circuit
{: #current-circuit-explorer-controls}

Choisissez la feuille Simulation, ouvrez **Configuration** (Setup) et faites défiler jusqu’à **Explorateur de circuit** (Circuit Explorer). Utilisez **Ajouter des outils** (Add tools) pour ajouter Mesures, Réglage / balayage, Exigences, Superposition CC ou Laboratoire d’analyse. Les outils configurés apparaissent à gauche ; le panneau de graphiques reste une vue distincte. **Exécuter** (Run) et **Arrêter** (Stop) se trouvent dans la barre d’outils principale lorsqu’une feuille Simulation est sélectionnée. Consultez [Graphiques, mesures et explorateur de circuit](/v4/Simulation-Charts-and-Measurements/) pour la référence actuelle.
