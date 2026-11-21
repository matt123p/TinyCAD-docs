---
layout: default
---
# Journal des modifications de TinyCAD
{: #tinycad-changelog}


## Non publié
{: #unreleased}

### Ajouté
{: #unreleased-added}

- [Modèles SPICE fournis](../SPICE-output/) avec recherche hors ligne, descriptions des modèles, liens vers les sources et correspondance des broches. Les 29 symboles essentiels SPICE disposent tous de modèles par défaut liés, notamment les passifs de base ainsi que les boîtiers LM358 et LM324 d’OpenJellyBean.
- L’[assistant IA de bureau](../AI-Assistant/) peut examiner les modèles et définir une définition liée ou personnalisée lorsque vous lui demandez de prendre en charge SPICE.
- L’[importation de symboles KiCad](../Importing-Symbols-from-KiCAD/) peut transférer dans TinyCAD les modèles SPICE intégrés ou associés pris en charge, sous forme de définitions personnalisées modifiables.

### Modifié
{: #unreleased-changed}

- Les composants standard des tutoriels SPICE et XSPICE utilisent des modèles liés et conservent leurs résultats de simulation d’origine.
- Les placements de bibliothèques standard affichent le champ Nom modifiable. Les dessins d’équipements et de réseaux fournis comprennent des notes mises en forme en Markdown.

## v4.1.1 — 20 novembre 2026
{: #v411}

- Correction du démarrage de Linux Snap grâce à l’intégration des bibliothèques d’exécution Electron et à l’utilisation de XWayland sur les bureaux Wayland.

[Téléchargements de la version](https://github.com/matt123p/TinyCADv4/releases/tag/v4.1.1)

## v4.1.0 — 18 novembre 2026
{: #v410}

### Ajouts
{: #added}

- [Édition assistée par l’IA des symboles, bibliothèques et circuits](../AI-Assistant/), y compris les fiches techniques/images jointes, la recherche de symboles intégrée et en ligne, les modifications directes du document actif, les changements annulables, les paramètres de fournisseur/modèle et les connexions locales à Ollama.

- [Simulation intégrée](../Simulation/) avec ngspice local dans le navigateur et l’application de bureau, prenant en charge les analyses du point de fonctionnement, transitoire, CA, balayage CC, bruit, fonction de transfert et pôles-zéros. [XSPICE](../XSPICE/) événementiel est pris en charge dans l’application de bureau.
- [Sources, sondes et instruments virtuels](../Simulation-Sources-and-Instruments/), notamment des oscilloscopes, multimètres, générateurs de fonctions et alimentations de laboratoire.
- [Circuit Explorer](../Simulation-Charts-and-Measurements/) pour le réglage, les balayages, les mesures nommées, les exigences, les superpositions CC, les études de tolérance, les cas de test et les analyses de puissance/contraintes.
- [Dessins `.dzn` compressés](../Simulation/#dzn-simulation-drawings) qui regroupent le circuit, les modèles, les paramètres de simulation et, en option, les résultats. L’historique d’exécution et l’exportation des résultats facilitent la comparaison et le partage ; l’enregistrement sans résultats crée une copie plus légère.
- [Bibliothèques intégrées](../Bundled-Libraries/) pour les réseaux, les cartes embarquées et les modules domotiques, l’audio, l’équipement de laboratoire, les moteurs/le mouvement et la planification solaire/des batteries, ainsi que des collections modélisées SPICE, logiques, fonctionnelles et de capteurs. Sélectionnez-les dans l’onglet Standard du sélecteur de bibliothèques.
- [Sept exemples de dessins modifiables](../Bundled-Examples/), couvrant l’amplificateur à transistor d’origine, un réseau de bureau, une station climatique/affichage ESP32, une maison solaire/à batterie, un studio de podcast, un banc de laboratoire et un banc de commande de moteur, avec symboles intégrés et explications.
- [Tutoriels SPICE et XSPICE](../Simulation-Tutorials/) : onze chapitres analogiques et six numériques, avec 28 dessins exécutables distincts, définitions de modèles, paramètres d’analyse et acquisitions de référence conservées.
- [Réorganisation de la mise en page](../Layout-Tidy-Up/) pour des feuilles entières ou des éléments sélectionnés, avec un niveau d’intensité Faible/Moyen/Élevé, l’annulation, la vérification des connexions et une annulation en une étape.

### Modifications
{: #changed}

- Ouvrir un exemple et Explication se trouvent dans la barre de titre du navigateur. L’application de bureau propose Fichier → Ouvrir un exemple et Affichage → Afficher l’explication.
- Le menu Affichage de l’application de bureau comprend Afficher les graphiques ; le menu Simulation de la barre d’outils conserve son bouton d’affichage des graphiques.
- La mise en page automatique se trouve à côté de Simulation dans la barre d’outils et est également accessible dans le menu Outils de l’application de bureau.

### Corrections
{: #fixed}

- Rétablir les aperçus déplaçables des illustrations des composants dans les résultats des sélecteurs Standard, Mes bibliothèques et En ligne.
- Réduire les illustrations des contrôleurs embarqués, capteurs et écrans à des dimensions pratiques pour la mise en page, tout en préservant l’identité des broches et la position des fils.
- Empêcher les changements de mise en page de créer des connexions indésirables aux extrémités des fils, aux coudes ou aux prises ; améliorer les sorties de broches et supprimer les détours inutiles.
- Supprimer les petites cases d’étiquettes de bornes qui chevauchent le texte dans les symboles de laboratoire et de commande de mouvement, et mettre à jour les exemples concernés.
- Améliorer les rapports d’erreurs et les diagnostics de simulation, les exécutions d’amplificateurs dans le navigateur, les fenêtres détachées des graphiques et les panneaux indépendants d’explication des exemples.

- Application de la couleur d’arrière-plan de la page lorsque les règles sont masquées et correction d’un plantage lors de la sélection d’une broche masquée.

### Manuel
{: #manual}

- Ajouter un [guide des images](../Images/) couvrant le copier-coller, l’importation de fichiers et la conversion de format, le rapport hauteur/largeur fixe, le rognage des pixels et l’enregistrement des images avec le dessin.

- Ajouter un [guide complet de l’assistant IA ](../AI-Assistant/), couvrant la création de symboles/bibliothèques et de circuits, la configuration du fournisseur avec captures d’écran, Ollama local, les pièces jointes au document, des exemples de requêtes et la vérification des résultats générés.

- Ajouter des guides pour trouver et utiliser les bibliothèques et exemples intégrés, et remplacer la description SPICE limitée à l’exportation par le flux de travail de simulation intégrée.
- Ajouter des références sur les analyses, les modèles, les instruments, les graphiques, les mesures et le dépannage, avec des liens vers la documentation officielle de ngspice et XSPICE.
- Inclure les cours existants complets, les dessins/netlists téléchargeables et dix tutoriels vidéo couvrant les bibliothèques, les exemples, la réorganisation de la mise en page, les connexions multi-feuilles et SPICE.
- Clarifier les [différences entre fonctionnalités](../Feature-Differences/), notamment `.dzn` et la compatibilité des zones de texte Markdown ainsi que la prise en charge de XSPICE dans le navigateur.
- Mettre à jour le manuel dans les huit langues prises en charge, y compris la navigation, les nouvelles pages de référence, le texte des tutoriels et les sous-titres des vidéos.

[Téléchargements de la version](https://github.com/matt123p/TinyCADv4/releases/tag/v4.1.0)

## v4.0.11
{: #v4011}
{: #v4011}

Cette version ajoute des notes Markdown mises en forme, une sortie vectorielle SVG et des commandes de routage des fils.

- [Zones de texte Markdown](../Text/#markdown-text-boxes) : notes mises en forme avec listes, listes de tâches et blocs de code ; même moteur de rendu vectoriel pour le dessin, l’exportation SVG et le PDF.
- Le formatage dynamique du code source laisse visibles les marqueurs modifiables et suit la police de base choisie, avec un positionnement du curseur, une sélection et un retour à la ligne correspondants.
- [Modes de routage des fils](../Wires/#wire-routing-modes) : sélecteur compact pour le routage à 90°, à 45° et libre, qui conserve l’aperçu actif.
- Le bouton de loupe apparaît uniquement après une interaction tactile sur la zone de dessin.

## v4.0.10 — 6 novembre 2026
{: #v4010--6-november-2026}
{: #v4010}

- Garder visible la barre d’outils de l’éditeur lorsque les panneaux de bibliothèque ou de schéma nécessitent davantage d’espace vertical.

## v4.0.9 — 4 novembre 2026
{: #v409--4-november-2026}

### Ajouts
{: #added-1}

- [Commandes tactiles](../Touch-controls/), notamment l’édition directe, le déplacement avec deux doigts
  et le zoom par pincement, ainsi qu’une loupe avec les commandes Cliquer, Glisser/Déposer, Menu et Fermer
  pour un placement précis.
- [Panneau de bibliothèque redimensionnable et tri des symboles](../Using-Symbol-Libraries/),
  y compris le classement alphabétique des résultats de recherche.
- [Masquage temporaire des objets sélectionnés](../User-guide/#temporarily-hiding-objects)
  et une commande pour restaurer tous les objets masqués sur la feuille active.
- Traduction polonaise de l’interface et traduction du texte de la boîte de dialogue Remplacer le symbole.

### Corrections
{: #fixed-1}

- [L’affichage de la grille et l’aimantation](../Snap-to-Grid/) fonctionnent indépendamment, et
  les déplacements au clavier respectent la désactivation de l’aimantation.
- Les images bitmap s’affichent dans les symboles de bibliothèque placés.
- [Échap annule les opérations de dessin et de placement](../Shortcuts/), y compris lorsque
  les commandes de la barre d’outils ont le focus.
- L’annulation de la boîte de dialogue des modifications non enregistrées de l’application de bureau efface la demande de fermeture en attente.
- Le zoom par pincement sur le canevas ne se cumule plus avec le zoom de la page du navigateur.
- Amélioration du positionnement de la loupe tactile, du retour visuel du pointeur, de la gestion des gestes et du glissement.
- Amélioration du comportement de la boîte de dialogue À propos sous Windows et macOS.

### Empaquetage et maintenance
{: #packaging-and-maintenance}

- Mise à jour des dépendances afin de corriger des failles de sécurité.
- Suppression des paquets Linux ARMv7, car l’environnement d’exécution Electron prend en charge Linux x64
  et ARM64. Les paquets Snap ciblent x64 ; les paquets Debian ciblent x64 et ARM64.

[Téléchargements de la version](https://github.com/matt123p/TinyCADv4/releases/tag/v4.0.9)
· [Modifications des sources](https://github.com/matt123p/TinyCADv4/compare/v4.0.8...v4.0.9)

## v4.0.8 — 3 mai 2026
{: #v408--3-may-2026}

- Correction de la rotation des symboles d’alimentation lors de l’enregistrement et de la réouverture d’un dessin.
- Préservation des types de réseau des fils lors de l’enregistrement et du chargement, afin de conserver la cohérence des couleurs des fils.

[Téléchargements de la version](https://github.com/matt123p/TinyCADv4/releases/tag/v4.0.8)
· [Modifications des sources](https://github.com/matt123p/TinyCADv4/compare/v4.0.7...v4.0.8)

## v4.0.7 — 13 avril 2026
{: #v407--13-april-2026}

- Correction de l’impression dans l’application de bureau.
- Amélioration du comportement du zoom par pincement pour éviter un zoom incontrôlé.
- Ajout du rendu côté serveur des symboles de bibliothèque.
- Automatisation de l’étiquetage des versions de production et de la création des versions GitHub.

[Téléchargements de la version](https://github.com/matt123p/TinyCADv4/releases/tag/v4.0.7)
· [Modifications des sources](https://github.com/matt123p/TinyCADv4/compare/4.0.6...v4.0.7)

## v4.0.6 — 29 mars 2026
{: #v406--29-march-2026}

Cette version comprend les modifications de développement apportées sous la version 4.0.5 ; il n’existe
pas d’étiquette 4.0.5 distincte ni de version GitHub publiée.

### Ajouts
{: #added-2}

- Routage automatique des fils.
- Remplacer le symbole pour substituer à un composant existant un autre symbole de bibliothèque.
- Défilement automatique lors du glissement à proximité du bord du dessin.
- Sélection par double-clic d’un fil complet et par triple-clic au-delà des jonctions
  et des embranchements en T.
- Option permettant de désactiver l’indicateur de connexion des étiquettes.

### Corrections et améliorations
{: #fixed-and-improved}

- Les dossiers de bibliothèque s’ouvrent par défaut et se déploient lors d’une recherche.
- Amélioration de l’édition de texte, des raccourcis du presse-papiers, des touches de navigation et des
  accélérateurs clavier lorsque le dessin a le focus.
- Correction de la sélection avec Ctrl-clic, du glissement de plusieurs objets sélectionnés et des commandes rotatives.
- Les rectangles de dessin et de sélection peuvent être tracés dans les deux sens.
- Correction de la fermeture sous macOS et réduction du chargement en double des bibliothèques sous macOS.
- Correction du positionnement des étiquettes, de la traduction du sélecteur de couleur et du traitement en arrière-plan de la netlist.
- Correction des noms de compilation de l’installateur Windows et d’AppX.

[Téléchargements de la version](https://github.com/matt123p/TinyCADv4/releases/tag/4.0.6)
· [Modifications des sources](https://github.com/matt123p/TinyCADv4/compare/4.0.4...4.0.6)

## v4.0.4 — étiquette source, 19 mars 2026
{: #v404--source-tag-19-march-2026}

- Ajout de [dossiers de bibliothèque](../Library-Folders/) pour organiser les bibliothèques de symboles.
- Ajout de la traduction néerlandaise de l’interface.
- Ajout des artefacts de compilation du navigateur et du déploiement sur GitHub Pages.
- Correction de l’empaquetage Snap.

[Modifications des sources](https://github.com/matt123p/TinyCADv4/compare/4.0.3...4.0.4)

## v4.0.3 — étiquette source, 15 mars 2026
{: #v403--source-tag-15-march-2026}

- Ajustement de la gestion du démarrage sous macOS afin de corriger un problème au démarrage.

L’étiquette source est 4.0.3, bien que les métadonnées du paquet indiquent toujours 4.0.2.

[Modifications des sources](https://github.com/matt123p/TinyCADv4/compare/4.0.2...4.0.3)

## v4.0.2 — 14 mars 2026
{: #v402--14-march-2026}

- Correction de la boîte de dialogue de fermeture signalant des modifications non enregistrées sous Linux.
- Ajout de paquets Debian x64 aux compilations ARM existantes.
- Mise à jour des outils de compilation et de la configuration de l’empaquetage.

[Téléchargements de la version](https://github.com/matt123p/TinyCADv4/releases/tag/4.0.2)
· [Modifications des sources](https://github.com/matt123p/TinyCADv4/compare/4.0.1...4.0.2)

## v4.0.1 — première étiquette source, 13 mars 2026
{: #v401--initial-source-tag-13-march-2026}

Le premier instantané source contient déjà la réécriture de TinyCAD destinée au navigateur et à
l’application de bureau, avec l’édition de schémas, les bibliothèques de symboles, la prise en charge des fichiers
`.dsn` et `.tclib` existants, ainsi que les flux d’exportation. Les développements antérieurs ne sont
pas consignés dans ce dépôt.

[Instantané source initial](https://github.com/matt123p/TinyCADv4/tree/4.0.1)

- Retour au [sommaire de la v4](../CONTENTS/)
