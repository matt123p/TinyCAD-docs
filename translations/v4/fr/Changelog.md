---
layout: default
---
# Journal des modifications de TinyCAD
{: #tinycad-changelog}


## v4.0.11
{: #v4011}
{: #v4011}

Cette version ajoute des notes Markdown mises en forme, une sortie vectorielle SVG et des commandes d’acheminement des fils.

- [Zones de texte Markdown](../Text/#markdown-text-boxes) : notes mises en forme avec listes, listes de tâches et blocs de code ; le même moteur de rendu vectoriel pour le dessin, l’export SVG et le PDF.
- La mise en forme du texte source en direct laisse les marqueurs modifiables visibles et suit la police de base choisie, avec un placement du curseur, une sélection et un retour à la ligne correspondants.
- [Modes d’acheminement des fils](../Wires/#wire-routing-modes) : un sélecteur compact pour l’acheminement à 90°, à 45° et libre, qui conserve un aperçu actif.
- Le bouton de loupe n’apparaît qu’après une entrée tactile sur la zone de dessin.

## v4.0.10 — 6 novembre 2026
{: #v4010--6-november-2026}
{: #v4010}

- La barre d’outils de l’éditeur reste visible lorsque les panneaux de bibliothèque ou de schéma nécessitent davantage d’espace vertical.

## v4.0.9 — 4 novembre 2026
{: #v409--4-november-2026}

### Ajouts
{: #added}

- [Commandes tactiles](../Touch-controls/), notamment l’édition directe, le panoramique à deux doigts
  et le zoom par pincement, ainsi qu’une loupe avec les commandes Click, Drag/Drop, Menu et Close
  pour un placement précis.
- [Panneau de bibliothèque redimensionnable et tri des symboles](../Using-Symbol-Libraries/),
  y compris le classement alphabétique des résultats de recherche.
- [Masquage temporaire des objets sélectionnés](../User-guide/#temporarily-hiding-objects)
  et une commande permettant de restaurer tous les objets masqués sur la feuille active.
- Traduction polonaise de l’interface et traduction du texte de la boîte de dialogue Remplacer le symbole.

### Corrections
{: #fixed}

- [La visibilité de la grille et l’aimantation](../Snap-to-Grid/) fonctionnent indépendamment, et
  le déplacement au clavier respecte la désactivation de l’aimantation.
- Les images bitmap s’affichent dans les symboles de bibliothèque placés.
- [Échap annule les actions de dessin et de placement](../Shortcuts/), y compris lorsque
  les commandes de la barre d’outils ont le focus.
- L’annulation de la boîte de dialogue des modifications non enregistrées de l’application de bureau efface la demande de fermeture en attente.
- Le zoom par pincement sur la zone de dessin ne se cumule plus avec le zoom de la page du navigateur.
- Amélioration du positionnement de la loupe tactile, du retour du pointeur, de la gestion des gestes et du glissement.
- Amélioration du comportement de la boîte de dialogue À propos sur ordinateur et macOS.

### Packaging et maintenance
{: #packaging-and-maintenance}

- Mise à jour des dépendances pour corriger des vulnérabilités de sécurité.
- Suppression des paquets Linux ARMv7, car l’environnement d’exécution Electron prend en charge Linux x64
  et ARM64. Les paquets Snap ciblent x64 ; les paquets Debian ciblent x64 et ARM64.

[Téléchargements de la version](https://github.com/matt123p/TinyCADv4/releases/tag/v4.0.9)
· [Modifications du code source](https://github.com/matt123p/TinyCADv4/compare/v4.0.8...v4.0.9)

## v4.0.8 — 3 mai 2026
{: #v408--3-may-2026}

- Correction de la rotation des symboles d’alimentation lors de l’enregistrement et de la réouverture d’un dessin.
- Conservation des types de nets des fils lors de l’enregistrement et du chargement, afin de garder les couleurs des fils cohérentes.

[Téléchargements de la version](https://github.com/matt123p/TinyCADv4/releases/tag/v4.0.8)
· [Modifications du code source](https://github.com/matt123p/TinyCADv4/compare/v4.0.7...v4.0.8)

## v4.0.7 — 13 avril 2026
{: #v407--13-april-2026}

- Correction de l’impression dans l’application de bureau.
- Amélioration du comportement du zoom par pincement pour éviter tout zoom incontrôlé.
- Ajout du rendu côté serveur des symboles de bibliothèque.
- Automatisation de l’étiquetage des builds de production et de la création des versions GitHub.

[Téléchargements de la version](https://github.com/matt123p/TinyCADv4/releases/tag/v4.0.7)
· [Modifications du code source](https://github.com/matt123p/TinyCADv4/compare/4.0.6...v4.0.7)

## v4.0.6 — 29 mars 2026
{: #v406--29-march-2026}

Cette version comprend les modifications de développement apportées sous la version 4.0.5 ; il n’existe
pas de tag 4.0.5 distinct ni de version GitHub publiée.

### Ajouts
{: #added-1}

- Acheminement automatique des fils.
- Remplacer le symbole pour convertir un composant existant en un autre symbole de bibliothèque.
- Défilement automatique lors du glissement près du bord du dessin.
- Sélection d’un fil entier par double-clic et sélection au-delà des jonctions et des raccords en T par triple-clic.
- Une option pour désactiver l’indicateur de connexion des étiquettes.

### Corrections et améliorations
{: #fixed-and-improved}

- Les dossiers de bibliothèque s’ouvrent par défaut et se développent lors d’une recherche.
- Amélioration de l’édition de texte, des raccourcis du presse-papiers, des touches de navigation et des
  accélérateurs clavier lorsque le dessin a le focus.
- Correction de la sélection par Ctrl-clic, du glissement de plusieurs objets sélectionnés et des commandes de réglage.
- Les rectangles de dessin et de sélection peuvent être tracés dans les deux sens.
- Correction de la fermeture sur macOS et réduction du chargement en double des bibliothèques sur macOS.
- Correction du positionnement des étiquettes, de la traduction du sélecteur de couleurs et du traitement en arrière-plan de la netlist.
- Correction des noms des builds de l’installeur Windows et d’AppX.

[Téléchargements de la version](https://github.com/matt123p/TinyCADv4/releases/tag/4.0.6)
· [Modifications du code source](https://github.com/matt123p/TinyCADv4/compare/4.0.4...4.0.6)

## v4.0.4 — tag source, 19 mars 2026
{: #v404--source-tag-19-march-2026}

- Ajout de [dossiers de bibliothèque](../Library-Folders/) pour organiser les bibliothèques de symboles.
- Ajout de la traduction néerlandaise de l’interface.
- Ajout des artefacts de build pour navigateur et du déploiement sur GitHub Pages.
- Correction du packaging Snap.

[Modifications du code source](https://github.com/matt123p/TinyCADv4/compare/4.0.3...4.0.4)

## v4.0.3 — tag source, 15 mars 2026
{: #v403--source-tag-15-march-2026}

- Adaptation de la gestion du démarrage sur macOS afin de résoudre un problème au démarrage.

Le tag source est 4.0.3, bien que les métadonnées de son paquet indiquent toujours 4.0.2.

[Modifications du code source](https://github.com/matt123p/TinyCADv4/compare/4.0.2...4.0.3)

## v4.0.2 — 14 mars 2026
{: #v402--14-march-2026}

- Correction de la boîte de dialogue de fermeture en présence de modifications non enregistrées sous Linux.
- Ajout de paquets Debian x64 en complément des builds ARM existants.
- Mise à jour des outils de build et de la configuration du packaging.

[Téléchargements de la version](https://github.com/matt123p/TinyCADv4/releases/tag/4.0.2)
· [Modifications du code source](https://github.com/matt123p/TinyCADv4/compare/4.0.1...4.0.2)

## v4.0.1 — premier tag source, 13 mars 2026
{: #v401--initial-source-tag-13-march-2026}

Le premier instantané du code source contient déjà la réécriture de TinyCAD pour une utilisation dans le navigateur et sur ordinateur,
avec l’édition de schémas, les bibliothèques de symboles, la prise en charge des fichiers `.dsn` et `.tclib` existants, ainsi que des flux d’exportation. Les développements antérieurs ne sont pas
consignés dans ce dépôt.

[Instantané initial du code source](https://github.com/matt123p/TinyCADv4/tree/4.0.1)

- Retour au [sommaire de la v4](../CONTENTS/)
