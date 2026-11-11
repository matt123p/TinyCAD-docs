---
layout: default
---
# Journal des modifications de TinyCAD
{: #tinycad-v4-changelog}


## v4.0.11
{: #v4011}

Cette version ajoute des notes Markdown mises en forme, une sortie SVG vectorielle et des commandes de routage des fils.

- [Zones de texte Markdown](../Text-and-Annotations/#markdown-text-boxes): notes mises en forme avec listes, listes de tâches et blocs de code ; même moteur de rendu vectoriel pour le dessin, l’exportation SVG et le PDF.
- La mise en forme en direct de la source conserve les marqueurs modifiables et suit la police de base choisie, avec un curseur, une sélection et des retours à la ligne adaptés.
- [Modes de routage des fils](../Wires/#wire-routing-modes): sélecteur compact pour les routages à 90°, à 45° et libre, conservant l’aperçu en cours.
- Le bouton de loupe apparaît uniquement après une interaction tactile avec le canevas de dessin.

## v4.0.10 — 6 novembre 2026
{: #v4010}

- Garder la barre d’outils de l’éditeur visible lorsque les panneaux de bibliothèque ou de schéma nécessitent davantage d’espace vertical.

## v4.0.9 — 4 novembre 2026
{: #v409--4-november-2026}

### Ajouts
{: #added}

- [Commandes tactiles](../Touch-controls/), notamment l’édition directe, le panoramique à deux doigts
  et le zoom par pincement, ainsi qu’une loupe avec les commandes Cliquer (Click), Glisser/Déposer (Drag/Drop), Menu et Fermer (Close)
  pour un placement précis.
- [Panneau de bibliothèque redimensionnable et tri des symboles](../Using-Symbol-Libraries/),
  avec notamment le tri alphabétique des résultats de recherche.
- [Masquage temporaire des objets sélectionnés](../User-guide/#temporarily-hiding-objects)
  et commande permettant de restaurer tous les objets masqués sur la feuille active.
- Traduction de l’interface en polonais et traduction du texte de la boîte de dialogue Remplacer le symbole.

### Corrections
{: #fixed}

- [La visibilité de la grille et l’aimantation](../Snap-to-Grid/) fonctionnent indépendamment, et
  le déplacement au clavier respecte la désactivation de l’aimantation.
- Les images bitmap s’affichent dans les symboles de bibliothèque placés.
- [La touche Échap annule les actions de dessin et de placement](../Shortcuts/), y compris lorsque
  les commandes de la barre d’outils ont le focus.
- L’annulation de la demande de confirmation des modifications non enregistrées sur ordinateur de bureau efface la demande de quitter l’application en attente.
- Le zoom par pincement du canevas ne se cumule plus avec le zoom de la page du navigateur.
- Amélioration du positionnement de la loupe tactile, du retour du pointeur, de la gestion des gestes et du glissement.
- Amélioration du comportement de la boîte de dialogue À propos sur ordinateur de bureau et sous macOS.

### Empaquetage et maintenance
{: #packaging-and-maintenance}

- Mise à jour des dépendances pour corriger des vulnérabilités de sécurité.
- Suppression des paquets Linux ARMv7, car l’environnement d’exécution Electron prend en charge Linux x64
  et ARM64. Les paquets Snap ciblent x64 ; les paquets Debian ciblent x64 et ARM64.

[Téléchargements de la version](https://github.com/matt123p/TinyCADv4/releases/tag/v4.0.9)
· [Modifications du code source](https://github.com/matt123p/TinyCADv4/compare/v4.0.8...v4.0.9)

## v4.0.8 — 3 mai 2026
{: #v408--3-may-2026}

- Correction de la rotation des symboles d’alimentation lors de l’enregistrement et de la réouverture d’un dessin.
- Conservation des types de réseau des fils lors de l’enregistrement et du chargement, afin de maintenir la cohérence des couleurs des fils.

[Téléchargements de la version](https://github.com/matt123p/TinyCADv4/releases/tag/v4.0.8)
· [Modifications du code source](https://github.com/matt123p/TinyCADv4/compare/v4.0.7...v4.0.8)

## v4.0.7 — 13 avril 2026
{: #v407--13-april-2026}

- Correction de l’impression dans l’application de bureau.
- Amélioration du comportement du zoom par pincement pour éviter un zoom incontrôlé.
- Ajout du rendu côté serveur des symboles de bibliothèque.
- Automatisation du balisage des versions de production et de la création des versions GitHub.

[Téléchargements de la version](https://github.com/matt123p/TinyCADv4/releases/tag/v4.0.7)
· [Modifications du code source](https://github.com/matt123p/TinyCADv4/compare/4.0.6...v4.0.7)

## v4.0.6 — 29 mars 2026
{: #v406--29-march-2026}

Cette version inclut les modifications de développement effectuées sous la version 4.0.5 ; il n’existe
pas de balise 4.0.5 distincte ni de version GitHub publiée.

### Ajouts
{: #added-1}

- Routage automatique des fils.
- Remplacer le symbole (Replace Symbol) pour changer un composant existant en un autre symbole de bibliothèque.
- Défilement automatique lors du glissement à proximité du bord du dessin.
- Sélection par double-clic d’un fil complet et sélection au-delà des jonctions et des embranchements en T par triple-clic.
- Option permettant de désactiver l’indicateur de connexion des étiquettes.

### Corrections et améliorations
{: #fixed-and-improved}

- Les dossiers de bibliothèque sont ouverts par défaut et se déploient lors d’une recherche.
- Amélioration de l’édition de texte, des raccourcis du presse-papiers, des touches de navigation et des
  accélérateurs clavier lorsque le dessin a le focus.
- Correction de la sélection par Ctrl-clic, du déplacement de plusieurs objets sélectionnés et des commandes de réglage.
- Les rectangles de dessin et de sélection peuvent être tracés dans les deux sens.
- Correction de la fermeture sous macOS et réduction du chargement en double des bibliothèques sous macOS.
- Correction du positionnement des étiquettes, de la traduction du sélecteur de couleurs et du traitement en arrière-plan de la netlist.
- Correction des noms des programmes d’installation Windows et des versions AppX.

[Téléchargements de la version](https://github.com/matt123p/TinyCADv4/releases/tag/4.0.6)
· [Modifications du code source](https://github.com/matt123p/TinyCADv4/compare/4.0.4...4.0.6)

## v4.0.4 — balise de code source, 19 mars 2026
{: #v404--source-tag-19-march-2026}

- Ajout de [dossiers de bibliothèque](../Library-Folders/) pour organiser les bibliothèques de symboles.
- Ajout de la traduction de l’interface en néerlandais.
- Ajout des artefacts de compilation pour navigateur et du déploiement sur GitHub Pages.
- Correction de l’empaquetage Snap.

[Modifications du code source](https://github.com/matt123p/TinyCADv4/compare/4.0.3...4.0.4)

## v4.0.3 — balise de code source, 15 mars 2026
{: #v403--source-tag-15-march-2026}

- Ajustement de la gestion du démarrage sous macOS pour résoudre un problème au démarrage.

La balise de code source est 4.0.3, bien que les métadonnées de son paquet indiquent toujours 4.0.2.

[Modifications du code source](https://github.com/matt123p/TinyCADv4/compare/4.0.2...4.0.3)

## v4.0.2 — 14 mars 2026
{: #v402--14-march-2026}

- Correction de la boîte de dialogue de fermeture signalant des modifications non enregistrées sous Linux.
- Ajout de paquets Debian x64 en complément des compilations ARM existantes.
- Mise à jour des outils de compilation et de la configuration de l’empaquetage.

[Téléchargements de la version](https://github.com/matt123p/TinyCADv4/releases/tag/4.0.2)
· [Modifications du code source](https://github.com/matt123p/TinyCADv4/compare/4.0.1...4.0.2)

## v4.0.1 — première balise de code source, 13 mars 2026
{: #v401--initial-source-tag-13-march-2026}

Le premier instantané du code source contient déjà la réécriture de TinyCAD pour une utilisation dans le navigateur et
sur ordinateur de bureau, avec l’édition de schémas, les bibliothèques de symboles, la prise en charge des fichiers
`.dsn` et `.tclib` existants et les processus d’exportation. Le développement antérieur n’est
pas consigné dans ce dépôt.

[Instantané initial du code source](https://github.com/matt123p/TinyCADv4/tree/4.0.1)

- Retour au [contenu de v4](../CONTENTS/)
