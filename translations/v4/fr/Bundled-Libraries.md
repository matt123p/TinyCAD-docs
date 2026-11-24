---
layout: default
---
# Bibliothèques fournies
{: #bundled-libraries}

Les bibliothèques fournies sont des collections de symboles prêts à être placés, proposées avec TinyCAD dans le navigateur et l’application de bureau. Elles couvrent aussi bien les plans d’équipement que les circuits électroniques. Vous pouvez les utiliser sans vous connecter, télécharger un fichier de bibliothèque ni configurer un dossier de bibliothèques.

## Rechercher et placer un composant
{: #find-and-place-a-component}

1. Ouvrez le panneau des bibliothèques à gauche. S’il est réduit, utilisez son bouton de développement.
2. Sélectionnez **Standard**. **Online** recherche dans la collection en ligne ; **My Libraries** contient vos propres fichiers de bibliothèque.
3. Utilisez **Choose a standard library** pour sélectionner une collection. TinyCAD charge une bibliothèque standard à la fois et mémorise votre choix sur cet appareil.
4. Parcourez la liste ou saisissez un nom ou une description dans **Search libraries...**. Chaque résultat comporte un aperçu graphique. Sélectionnez un résultat pour afficher son aperçu agrandi et sa description.
5. Faites glisser l’aperçu du composant sur le dessin. Positionnez-le sur la grille ; appuyez sur **Escape** ou faites un clic droit lorsque vous avez terminé de placer des copies.

Changer de bibliothèque sélectionnée ne supprime pas les composants déjà placés. Leurs définitions sont intégrées au dessin ; une personne qui l’ouvre n’a donc pas besoin de charger les mêmes bibliothèques. Les bibliothèques standard sont en lecture seule ; utilisez [bibliothèques personnalisées](../Custom-symbol-libraries/) lorsque vous souhaitez gérer vos propres définitions de symboles.

{% include video-player.html src="/v4/videos/simulation/libraries.mp4" poster="/v4/videos/simulation/libraries.jpg" caption="Choisissez une bibliothèque fournie, recherchez un commutateur à huit ports et faites-le glisser sur un dessin." %}

## Bibliothèques d’équipements et de disposition
{: #equipment-and-layout-libraries}

Ces bibliothèques représentent la disposition physique des équipements, cartes, borniers et prises. Elles vous aident à expliquer **ce qui est connecté à quoi**. Elles ne comprennent ni micrologiciel exécutable, ni simulation mécanique, ni modèles SPICE.

| Bibliothèque | Contenu | Utilisation typique |
| --- | --- | --- |
| **Disposition réseau** — 47 symboles | Routeurs grand public, commutateurs et points d’accès ; commutateurs, routeurs, pare-feu, panneaux de brassage et panneaux vierges 19 pouces correspondants | Câblage de bureau, réseaux domestiques et plans de baie |
| **Processeurs embarqués et maison connectée** — 44 symboles | Dix cartes de commande, 26 modules de capteurs/actionneurs et huit écrans | Prototypage d’une station de capteurs, d’une installation domotique ou d’un projet embarqué |
| **Audio et musique** — 99 symboles | Microphones, mélangeurs, interfaces, instruments, MIDI, ordinateurs, connecteurs, casques, haut-parleurs, amplificateurs et équipements de scène | Concerts, studios, podcasts, enregistrement à domicile, églises et établissements scolaires |
| **Test et mesure** — 78 symboles | Alimentations, charges, oscilloscopes, multimètres, instruments RF, sondes, acquisition de données, chauffages, relais, commandes, pompes et appareils de banc | Connexions de laboratoire et montages expérimentaux |
| **Moteurs et mouvement** — 66 symboles | Moteurs CC et sans balais, moteurs pas à pas, servomoteurs, cartes pilotes, codeurs, interrupteurs de fin de course, solénoïdes, actionneurs électriques/pneumatiques et pièces mécaniques | Robotique, automatisation et câblage de commande de mouvement |
| **Énergie solaire et batteries** — 52 symboles | Panneaux, champs, onduleurs, batteries, chargeurs de VE, équipements de secours, protections, surveillance et charges domestiques | Système énergétique domestique conceptuel et liaisons d’alimentation/commande |

### Disposition réseau
{: #network-layout}

Les points de connexion Ethernet sont centrés dans les prises. Un point représente un **câble entier**, et non huit conducteurs Ethernet individuels. Les commutateurs de bureau couvrent 4, 5, 8, 16 et 24 ports cuivre, y compris des options PoE et mixtes cuivre/fibre. Les dispositions en baie comprennent des configurations de 8/16/24/48 ports avec deux ou quatre cages SFP+ pour les liaisons montantes, ainsi que des configurations de planification génériques supplémentaires de 10 et 32 ports cuivre. Considérez-les comme des choix de symboles disponibles, et non comme une affirmation que toutes les configurations sont aussi courantes. Lisez le nom du symbole et les étiquettes de la face avant pour choisir le nombre de ports et la configuration de liaison montante dont vous avez besoin.

Les panneaux 19 pouces 1U ont une taille commune. Conservez leur échelle par défaut et empilez-les verticalement à **120 unités de dessin** pour former une baie. L’[exemple de réseau de petit bureau](../Bundled-Examples/#equipment-and-layout-examples) présente quatre panneaux correspondants ainsi que des câbles plus longs vers un point d’accès et un commutateur de bureau. Tracez chaque cordon de brassage jusqu’au point de connexion de sa prise ; le dessin du panneau ne connecte pas automatiquement les prises entre elles.

### Processeurs embarqués et maison connectée
{: #embedded-processors-and-smart-home}

Les cartes de commande comprennent les ESP32 DevKitC V4, ESP32-S3 DevKitC-1, NodeMCU ESP8266, LOLIN D1 mini, Raspberry Pi 3/4/5 et les variantes Arduino Uno/Nano/Mega. Les modules de capteurs comprennent des capteurs de température, d’humidité, de lumière, de pression et de contact, ainsi que des détecteurs infrarouges passifs, auxquels s’ajoutent des sorties comme les avertisseurs sonores. Le PCB, les pastilles des connecteurs et les étiquettes des broches restent visibles ; une petite icône de fonction identifie le capteur au lieu d’un rectangle de circuit intégré anonyme.

Les options d’affichage comprennent un LCD1602 I2C et un OLED 128×64, un écran LCD SPI Waveshare de 1,8 pouce et un écran LCD tactile capacitif Waveshare de 2,8 pouces, un écran tactile UART Nextion de 2,8 pouces et des ensembles d’écrans à encre électronique Waveshare de 2,13/2,9/4,2 pouces. Chaque symbole associe deux vues d’un **seul appareil** : la face de l’écran à gauche et les contacts arrière/du connecteur à droite. Seuls les contacts arrière sont des points de connexion électrique. Des connecteurs répétés peuvent exposer les mêmes signaux matériels ; ils ne constituent pas des canaux indépendants supplémentaires. Suivez les étiquettes et la révision indiquée.

Vérifiez la révision de carte indiquée avant le câblage. Sur les connecteurs Raspberry Pi, **les numéros de broches physiques et les noms GPIO BCM sont deux systèmes de numérotation différents**. La position des broches de la carte est utile pour un schéma de câblage, mais le dessin ne constitue ni une empreinte de PCB ni un dessin de fabrication. Les rails d’alimentation, niveaux logiques, limites de courant et résistances de rappel doivent toujours être vérifiés dans la documentation du module réel.

### Connexions audio, de laboratoire et de mouvement
{: #audio-laboratory-and-motion-connections}

Pour les schémas audio, la plupart des prises représentent des câbles entiers. Étiquetez les liaisons de microphone, de ligne, de haut-parleur, de casque et de MIDI afin d’en préciser la fonction. Un connecteur dessiné ne garantit pas que deux appareils sont compatibles en matière de niveaux, de câblage symétrique ou d’alimentation fantôme.

Les symboles de laboratoire et de mouvement distinguent les conducteurs électriques individuels, les câbles complets et les tuyaux de fluide. Par exemple, les connexions BNC/USB représentent des câbles, tandis que les bornes d’alimentation, logiques et moteur d’un pilote de moteur sont des conducteurs distincts. Les pièces purement mécaniques peuvent ne comporter aucune borne électrique. Fiez-vous aux étiquettes des broches et à la description du symbole, plutôt que de supposer que chaque élément visible constitue une connexion.

**Les symboles d’équipements de test et de mesure sont des illustrations destinées aux schémas de montage.** Pour les instruments qui acquièrent des signaux simulés, utilisez **Simulation → Équipements de laboratoire** ; voir [sources et instruments virtuels](../Simulation-Sources-and-Instruments/).

Les symboles solaires représentent des câbles entiers ou des liaisons logiques. Ils décrivent l’architecture du système ; ils ne précisent pas les bornes de raccordement de chaque installation, les caractéristiques nominales des câbles ni un dispositif de protection complet.

## Bibliothèques avec modèles de simulation
{: #libraries-with-simulation-models}

Utilisez ces collections si vous souhaitez [exécuter une simulation de circuit](../Simulation/).

| Bibliothèque | Contenu | Objectif de modélisation |
| --- | --- | --- |
| **Notions essentielles de SPICE** — 29 symboles | Composants passifs, sources, diodes, LED, transistors, transformateur, résonateurs, 741, LM358 et LM324 | Composants analogiques avec un [modèle fourni et une affectation de broches prédéfinie](../Bundled-SPICE-Models/) |
| **Logique numérique** — 28 symboles | Portes logiques, compteurs et éléments de stockage | Comportement logique configurable réalisé à l’aide de modèles SPICE analogiques portables |
| **Blocs fonctionnels** — 17 symboles | ADC/DAC, interfaces de communication, machines à états et blocs d’E/S programmables | Explorer le comportement au niveau système sans implémenter un circuit intégré complet |
| **Capteurs et interfaces** — 10 symboles | Capteurs modélisés, point de test, commutateur analogique et modulateur AM | Relier une excitation configurée à une sortie électrique |

Ces modèles sont des approximations destinées à explorer le comportement. Ils ne garantissent pas les performances d’un appareil d’un fabricant donné. Les blocs fonctionnels de microcontrôleur, d’API ou de FPGA n’exécutent ni micrologiciel ni HDL. La bibliothèque **Logique numérique** utilise des modèles comportementaux analogiques et peut s’exécuter dans le navigateur ; le [cours XSPICE distinct](../XSPICE-Tutorial/) utilise le moteur événementiel de Desktop.

Lisez les propriétés, les unités et l’affectation des broches de chaque modèle. Les modèles logiques peuvent comporter des broches d’alimentation cachées nommées **VCC** et **VSS**. Fournissez les réseaux d’alimentation correspondants et connectez **VSS** à la masse SPICE **0**. Une étiquette contenant le mot GND ne crée pas à elle seule le nœud 0.

## Rendre le câblage sans ambiguïté
{: #make-wiring-unambiguous}

Laissez la grille activée et terminez les fils sur les véritables points de connexion. Un fil qui touche une prise sans rapport ou l’extrémité d’un autre fil peut créer une connexion électrique. Faites passer les fils à distance de ces points ; une ligne apparemment nette ne suffit pas à établir le réseau voulu.

Les prises d’équipement inutilisées peuvent rester ouvertes. Certains avertissements du vérificateur de circuit concernant des fils qui pénètrent dans les contours physiques des panneaux sont normaux pour ces dessins, mais les courts-circuits et jonctions involontaires doivent être corrigés. Voir [Fils](../Wires/) pour la connectivité électrique et [Exemples fournis](../Bundled-Examples/) pour des dispositions illustrées utilisant ces collections.
