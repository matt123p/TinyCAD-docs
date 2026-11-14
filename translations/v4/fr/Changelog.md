---
layout: default
---
# Journal des modifications de TinyCAD
{: #tinycad-changelog}


## À venir
{: #unreleased}
{: #unreleased}

### Ajouts
{: #added}

- [Simulation intégrée](../Simulation/) utilisant ngspice local dans le navigateur et l’application de bureau, avec analyses du point de fonctionnement, transitoire, AC, balayage DC, bruit, fonction de transfert et pôles-zéros. [XSPICE](../XSPICE/) événementiel est pris en charge dans l’application de bureau.
- [Sources, sondes et instruments virtuels](../Simulation-Sources-and-Instruments/), notamment oscilloscopes, multimètres, générateurs de fonctions et alimentations de laboratoire.
- [Explorateur de circuits](../Simulation-Charts-and-Measurements/) pour le réglage, les balayages, les mesures nommées, les exigences, les superpositions DC, les études de tolérance, les cas de test et l’étude de puissance et des contraintes.
- [Dessins `.dzn` compressés](../Simulation/#dzn-simulation-drawings) regroupant le circuit, les modèles, les paramètres de simulation et les résultats facultatifs. L’historique des exécutions et l’exportation des résultats facilitent la comparaison et le partage ; l’enregistrement sans résultats crée une copie plus légère.
- [Bibliothèques intégrées](../Bundled-Libraries/) pour les topologies réseau, les cartes embarquées et les modules domotiques, l’audio, le matériel de laboratoire, les moteurs et la commande de mouvement, ainsi que la planification solaire et sur batterie, en plus des collections de modèles SPICE, logiques, fonctionnels et de capteurs. Sélectionnez-les dans l’onglet Standard du sélecteur de bibliothèques.
- [Sept exemples de dessins modifiables](../Bundled-Examples/) couvrant l’amplificateur à transistors d’origine, le réseau de bureau, la station climatique et d’affichage ESP32, la maison solaire et sur batterie, le studio de podcast, l’établi de laboratoire et l’établi de commande moteur, avec symboles intégrés et explications.
- [Tutoriels SPICE et XSPICE ](../Simulation-Tutorials/) : onze chapitres analogiques et six numériques, comprenant 28 dessins exécutables distincts, des définitions de modèles, des paramètres d’analyse et des acquisitions de référence conservées.
- [Réorganisation de la disposition](../Layout-Tidy-Up/) de feuilles entières ou d’éléments sélectionnés, avec niveaux de force Faible/Moyen/Élevé, annulation, vérification des connexions et annulation en une étape.

### Modifications
{: #changed}

- Les commandes Ouvrir un exemple et Explication se trouvent dans la barre de titre du navigateur. Dans l’application de bureau, elles sont accessibles via Fichier → Ouvrir un exemple et Affichage → Afficher l’explication.
- Le menu Affichage de l’application de bureau comprend Afficher les graphiques ; le menu Simulation de la barre d’outils conserve son option d’affichage des graphiques.
- La disposition automatique se trouve à côté de Simulation dans la barre d’outils et est également accessible depuis le menu Outils de l’application de bureau.

### Corrections
{: #fixed}

- Rétablissement des aperçus déplaçables des illustrations de composants dans les résultats des sélecteurs Standard, Mes bibliothèques et En ligne.
- Réduction des illustrations des contrôleurs embarqués, capteurs et afficheurs à des tailles pratiques pour la mise en page, tout en préservant l’identité des broches et la position des câblages.
- Prévention des connexions indésirables créées par les changements de disposition aux extrémités de fils, aux coudes ou aux connecteurs ; amélioration des sorties de broches et suppression des détours inutiles.
- Suppression des petites cases d’étiquettes de bornes qui chevauchent le texte dans les symboles de laboratoire et de commande de mouvement, et mise à jour des exemples concernés.
- Amélioration des rapports d’erreur et des diagnostics de simulation, des exécutions d’amplificateur dans le navigateur, des fenêtres détachées des graphiques et des panneaux indépendants d’explication des exemples.

### Manuel
{: #manual}

- Ajout de guides pour trouver et utiliser les bibliothèques et exemples intégrés, et remplacement de la description SPICE limitée à l’exportation par le processus de simulation intégrée.
- Ajout de références sur les analyses, les modèles, les instruments, les graphiques, les mesures et le dépannage, avec des liens vers la documentation officielle de ngspice et XSPICE.
- Inclusion des cours existants complets, des dessins/netlists téléchargeables et de dix visites guidées vidéo sur les bibliothèques, les exemples, la réorganisation de la disposition, les connexions multifeuilles et SPICE.
- Précisions sur les [différences entre fonctionnalités](../Feature-Differences/), notamment `.dzn` et la compatibilité des zones de texte Markdown, ainsi que la prise en charge de XSPICE dans le navigateur.
- Mise à jour du manuel dans les huit langues prises en charge, notamment la navigation, les nouvelles pages de référence, le texte des tutoriels et les sous-titres vidéo.

## v4.0.11
{: #v4011}
{: #v4011}

Cette version ajoute les notes Markdown mises en forme, la sortie vectorielle SVG et des commandes de routage des fils.

- [Zones de texte Markdown](../Text/#markdown-text-boxes) : notes mises en forme avec listes, listes de tâches et blocs de code ; même moteur de rendu vectoriel pour le dessin, l’exportation SVG et le PDF.
- Le formatage dynamique du texte source laisse visibles les marqueurs modifiables et suit la police de base choisie, avec un positionnement correspondant du curseur, de la sélection et des retours à la ligne.
- [Modes de routage des fils](../Wires/#wire-routing-modes) : sélecteur compact pour les routages à 90°, 45° et libre, qui préserve l’aperçu actif.
- Le bouton Loupe apparaît uniquement après une interaction tactile sur la zone de dessin.

## v4.0.10 — 6 novembre 2026
{: #v4010--6-november-2026}
{: #v4010}

- Maintien de la visibilité de la barre d’outils de l’éditeur lorsque les panneaux de bibliothèque ou de schéma nécessitent davantage d’espace vertical.

## v4.0.9 — 4 novembre 2026
{: #v409--4-november-2026}

### Ajouts
{: #added-1}

- [Commandes tactiles](../Touch-controls/), notamment la modification directe, le déplacement avec deux doigts
  et le zoom par pincement, ainsi qu’une loupe avec les commandes Cliquer, Glisser/Déposer, Menu et Fermer
  pour un positionnement précis.
- [Panneau de bibliothèque redimensionnable et tri des symboles](../Using-Symbol-Libraries/),
  avec notamment le classement alphabétique des résultats de recherche.
- [Masquage temporaire des objets sélectionnés](../User-guide/#temporarily-hiding-objects)
  et commande permettant de rétablir tous les objets masqués sur la feuille active.
- Traduction polonaise de l’interface et traduction du texte de la boîte de dialogue Remplacer le symbole.

### Corrections
{: #fixed-1}

- [La visibilité de la grille et l’aimantation](../Snap-to-Grid/) fonctionnent indépendamment, et
  le déplacement au clavier respecte la désactivation de l’aimantation.
- Les images bitmap s’affichent dans les symboles de bibliothèque placés.
- [La touche Échap annule les actions de dessin et de placement](../Shortcuts/), y compris lorsque
  le focus est sur les commandes de la barre d’outils.
- L’annulation de l’invite de modifications non enregistrées de l’application de bureau efface la demande de fermeture en attente.
- Le zoom par pincement sur la zone de dessin ne se cumule plus avec le zoom de la page du navigateur.
- Amélioration du positionnement de la loupe tactile, du retour du pointeur, de la gestion des gestes et du glissement.
- Amélioration du comportement de la boîte de dialogue À propos dans l’application de bureau et sous macOS.

### Empaquetage et maintenance
{: #packaging-and-maintenance}

- Mise à jour des dépendances afin de corriger des failles de sécurité.
- Suppression des paquets Linux ARMv7, car l’environnement d’exécution Electron prend en charge Linux x64
  et ARM64. Les paquets Snap ciblent x64 ; les paquets Debian ciblent x64 et ARM64.

[Téléchargements de la version](https://github.com/matt123p/TinyCADv4/releases/tag/v4.0.9)
· [Modifications du code source](https://github.com/matt123p/TinyCADv4/compare/v4.0.8...v4.0.9)

## v4.0.8 — 3 mai 2026
{: #v408--3-may-2026}

- Correction de la rotation des symboles d’alimentation lors de l’enregistrement et de la réouverture d’un dessin.
- Préservation des types de réseaux des fils lors de l’enregistrement et du chargement, afin de conserver la cohérence des couleurs des fils.

[Téléchargements de la version](https://github.com/matt123p/TinyCADv4/releases/tag/v4.0.8)
· [Modifications du code source](https://github.com/matt123p/TinyCADv4/compare/v4.0.7...v4.0.8)

## v4.0.7 — 13 avril 2026
{: #v407--13-april-2026}

- Correction de l’impression dans l’application de bureau.
- Amélioration du comportement du zoom par pincement afin d’éviter les zooms incontrôlés.
- Ajout du rendu côté serveur des symboles de bibliothèque.
- Automatisation de l’étiquetage des versions de production et de la création des versions GitHub.

[Téléchargements de la version](https://github.com/matt123p/TinyCADv4/releases/tag/v4.0.7)
· [Modifications du code source](https://github.com/matt123p/TinyCADv4/compare/4.0.6...v4.0.7)

## v4.0.6 — 29 mars 2026
{: #v406--29-march-2026}

Cette version comprend les modifications de développement effectuées sous la version 4.0.5 ; il n’existe
ni étiquette 4.0.5 distincte ni version GitHub publiée.

### Ajouts
{: #added-2}

- Routage automatique des fils.
- Remplacer le symbole pour convertir un composant existant en un autre symbole de bibliothèque.
- Défilement automatique lors du glissement près du bord du dessin.
- Sélection d’un fil entier par double-clic et sélection au-delà des jonctions et des raccords en T par triple-clic.
- Option permettant de désactiver l’indicateur de connexion des étiquettes.

### Corrections et améliorations
{: #fixed-and-improved}

- Les dossiers de bibliothèques s’ouvrent par défaut et se déploient lors d’une recherche.
- Amélioration de la modification du texte, des raccourcis du presse-papiers, des touches de navigation et des accélérateurs clavier lorsque le dessin a le focus.
- Correction de la sélection par Ctrl-clic, du déplacement de plusieurs objets sélectionnés et des commandes rotatives.
- Les rectangles de dessin et de sélection peuvent être tracés dans les deux sens.
- Correction de la fermeture sous macOS et réduction du chargement redondant des bibliothèques sous macOS.
- Correction du positionnement des étiquettes, de la traduction du sélecteur de couleurs et du traitement en arrière-plan des listes de connexions.
- Correction des noms des installateurs Windows et des versions AppX.

[Téléchargements de la version](https://github.com/matt123p/TinyCADv4/releases/tag/4.0.6)
· [Modifications du code source](https://github.com/matt123p/TinyCADv4/compare/4.0.4...4.0.6)

## v4.0.4 — étiquette du code source, 19 mars 2026
{: #v404--source-tag-19-march-2026}

- Ajout de [dossiers de bibliothèques](../Library-Folders/) pour organiser les bibliothèques de symboles.
- Ajout de la traduction néerlandaise de l’interface.
- Ajout des artefacts de compilation pour le navigateur et du déploiement sur GitHub Pages.
- Correction de l’empaquetage Snap.

[Modifications du code source](https://github.com/matt123p/TinyCADv4/compare/4.0.3...4.0.4)

## v4.0.3 — étiquette du code source, 15 mars 2026
{: #v403--source-tag-15-march-2026}

- Ajustement du démarrage sous macOS afin de résoudre un problème de lancement.

L’étiquette du code source est 4.0.3, bien que les métadonnées du paquet indiquent encore 4.0.2.

[Modifications du code source](https://github.com/matt123p/TinyCADv4/compare/4.0.2...4.0.3)

## v4.0.2 — 14 mars 2026
{: #v402--14-march-2026}

- Correction de la boîte de dialogue de fermeture signalant des modifications non enregistrées sous Linux.
- Ajout de paquets Debian x64 en complément des compilations ARM existantes.
- Mise à jour des outils de compilation et de la configuration de l’empaquetage.

[Téléchargements de la version](https://github.com/matt123p/TinyCADv4/releases/tag/4.0.2)
· [Modifications du code source](https://github.com/matt123p/TinyCADv4/compare/4.0.1...4.0.2)

## v4.0.1 — première étiquette du code source, 13 mars 2026
{: #v401--initial-source-tag-13-march-2026}

Le premier instantané du code source contient déjà la réécriture de TinyCAD pour une utilisation dans le navigateur et sur ordinateur,
avec l’édition de schémas, des bibliothèques de symboles, la prise en charge des fichiers existants
`.dsn` et `.tclib`, ainsi que des flux d’exportation. Le développement antérieur n’est pas
consigné dans ce dépôt.

[Instantané initial du code source](https://github.com/matt123p/TinyCADv4/tree/4.0.1)

- Retour au [sommaire de la v4](../CONTENTS/)
