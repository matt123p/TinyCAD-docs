---
layout: default
---
# Bibliothèques fournies
{: #bundled-libraries}

Les bibliothèques fournies sont des collections de symboles prêts à placer, incluses avec TinyCAD dans le navigateur et l'application de bureau. Elles couvrent aussi bien les plans d'équipement que les circuits électroniques. Vous pouvez les utiliser sans vous connecter, télécharger de fichier de bibliothèque ni configurer de dossier de bibliothèque.

## Trouver et placer un composant
{: #find-and-place-a-component}

1. Ouvrez le panneau des bibliothèques à gauche. S'il est réduit, utilisez son bouton de développement.
2. Sélectionnez **Standard**. **En ligne** recherche dans la collection en ligne ; **Mes bibliothèques** contient vos propres fichiers de bibliothèque.
3. Utilisez **Choisir une bibliothèque standard** pour sélectionner une collection. TinyCAD charge une bibliothèque standard à la fois et mémorise votre choix sur cet appareil.
4. Parcourez la liste ou saisissez un nom ou une description dans **Rechercher dans les bibliothèques...**. Chaque résultat comporte un aperçu du dessin. Sélectionnez un résultat pour examiner son aperçu agrandi et sa description.
5. Faites glisser l'aperçu du composant sur le dessin. Positionnez-le sur la grille ; appuyez sur **Échap** ou faites un clic droit lorsque vous avez fini de placer des copies.

Changer de bibliothèque sélectionnée ne supprime pas les composants déjà placés. Leurs définitions sont intégrées au dessin : la personne qui l'ouvre n'a donc pas besoin de charger les mêmes bibliothèques. Les bibliothèques standard sont en lecture seule ; utilisez les [bibliothèques personnalisées](../Custom-symbol-libraries/) si vous souhaitez gérer vos propres définitions de symboles.

{% include video-player.html src="/v4/videos/simulation/libraries.mp4" poster="/v4/videos/simulation/libraries.jpg" caption="Choisissez une bibliothèque fournie, recherchez un commutateur à huit ports et faites-le glisser sur un dessin." %}

## Bibliothèques d'équipement et d'agencement
{: #equipment-and-layout-libraries}

Ces bibliothèques montrent la disposition physique des équipements, cartes, borniers et prises. Elles vous aident à expliquer **ce qui est connecté à quoi**. Elles ne comprennent pas de micrologiciel exécutable, de simulation mécanique ni de modèles SPICE.

| Bibliothèque | Contenu | Utilisation typique |
| --- | --- | --- |
| **Agencement réseau** — 47 symboles | Routeurs, commutateurs et points d'accès grand public ; commutateurs, routeurs, pare-feu, panneaux de brassage et panneaux vierges correspondants au format 19 pouces | Câblage de bureau, réseaux domestiques et plans de baie |
| **Processeurs embarqués et maison connectée** — 44 symboles | Dix cartes de commande, 26 modules de capteurs/actionneurs et huit écrans | Prototypage d'une station de capteurs, d'un système domotique ou d'un projet embarqué |
| **Audio et musique** — 99 symboles | Microphones, mélangeurs, interfaces, instruments, MIDI, ordinateurs, connecteurs, casques, haut-parleurs, amplificateurs et équipements de scène | Concerts, studios, podcasts, enregistrement à domicile, églises et écoles |
| **Test et mesure** — 78 symboles | Alimentations, charges, oscilloscopes, multimètres, instruments RF, sondes, acquisition de données, chauffages, relais, commandes, pompes et appareils de laboratoire | Raccordements de laboratoire et montages expérimentaux |
| **Moteurs et mouvement** — 66 symboles | Moteurs CC et sans balais, moteurs pas à pas, servomoteurs, cartes de commande, codeurs, interrupteurs de fin de course, solénoïdes, actionneurs électriques/pneumatiques et pièces mécaniques | Robotique, automatisation et câblage de commande de mouvement |
| **Énergie solaire et batteries** — 52 symboles | Panneaux, réseaux de panneaux, onduleurs, batteries, chargeurs de VE, équipements de secours, protection, surveillance et charges domestiques | Système énergétique domestique conceptuel et ses liaisons d'alimentation/commande |

### Agencement réseau
{: #network-layout}

Les points de connexion Ethernet sont centrés dans les prises. Un point représente un **câble complet**, et non huit conducteurs Ethernet individuels. Les commutateurs de bureau couvrent les configurations de 4, 5, 8, 16 et 24 ports cuivre, y compris PoE et options mixtes cuivre/fibre. Les agencements de baie comprennent des configurations de 8/16/24/48 ports avec des liaisons montantes SFP+ à deux ou quatre cages, ainsi que d'autres agencements génériques de planification à 10 et 32 ports cuivre. Considérez-les comme des choix de symboles disponibles, et non comme l'affirmation que tous les agencements sont aussi courants. Lisez le nom du symbole et les étiquettes de la face avant pour choisir le nombre de ports et la configuration de liaison montante dont vous avez besoin.

Les panneaux 1U de 19 pouces ont une taille commune. Conservez leur échelle par défaut et empilez-les à **120 unités de dessin** à la verticale pour former une baie. L'[exemple de réseau de petit bureau](../Bundled-Examples/#equipment-and-layout-examples) montre quatre panneaux correspondants et des liaisons plus longues vers un point d'accès et un commutateur de bureau. Tracez chaque cordon de brassage jusqu'au point de connexion de sa prise ; le dessin du panneau ne connecte pas automatiquement les prises entre elles.

### Processeurs embarqués et maison connectée
{: #embedded-processors-and-smart-home}

Les cartes de commande comprennent les ESP32 DevKitC V4, ESP32-S3 DevKitC-1, NodeMCU ESP8266, LOLIN D1 mini, Raspberry Pi 3/4/5 et différentes variantes Arduino Uno/Nano/Mega. Les modules de capteurs comprennent des capteurs de température, d'humidité, de lumière, de pression, tactiles et infrarouges passifs, ainsi que des sorties telles que des avertisseurs sonores. Le PCB, les pastilles de connecteur et les étiquettes des broches restent visibles ; une petite icône de fonction identifie le capteur au lieu d'un rectangle de puce anonyme.

Les options d'affichage comprennent un LCD1602 I2C et un OLED 128×64, un écran LCD SPI Waveshare de 1,8 pouce et un écran LCD tactile capacitif Waveshare de 2,8 pouces, un écran tactile UART Nextion de 2,8 pouces, ainsi que des ensembles d'écrans à encre électronique Waveshare de 2,13/2,9/4,2 pouces. Chaque symbole associe deux vues d'**un seul appareil** : la face de l'écran à gauche et les contacts arrière/du connecteur à droite. Seuls les contacts arrière sont des points de connexion électrique. Des connecteurs répétés peuvent exposer les mêmes signaux matériels ; ils ne constituent pas des canaux indépendants supplémentaires. Suivez les étiquettes et la révision indiquée.

Vérifiez la révision de la carte indiquée avant de câbler. Sur les connecteurs Raspberry Pi, **les numéros des broches physiques et les noms GPIO BCM sont deux systèmes de numérotation différents**. La position des broches de la carte aide à réaliser un schéma de câblage, mais le dessin n'est ni une empreinte de PCB ni un dessin de fabrication. Les rails d'alimentation, niveaux logiques, limites de courant et résistances de rappel doivent toujours être vérifiés dans la documentation du module réel.

### Connexions audio, de laboratoire et de mouvement
{: #audio-laboratory-and-motion-connections}

Pour les schémas audio, la plupart des prises représentent des câbles complets. Étiquetez les liaisons de microphone, de ligne, de haut-parleur, de casque et MIDI pour en indiquer clairement la fonction. Le dessin d'un connecteur ne garantit pas que deux appareils ont des niveaux compatibles, un câblage symétrique ou les mêmes exigences d'alimentation fantôme.

Les symboles de laboratoire et de mouvement distinguent les conducteurs électriques individuels, les câbles complets et les tuyaux de fluide. Par exemple, les connexions BNC/USB représentent des câbles, tandis que les bornes d'alimentation, de logique et de moteur d'un pilote de moteur sont des conducteurs distincts. Les pièces purement mécaniques peuvent ne comporter aucune borne électrique. Fiez-vous aux étiquettes des broches et à la description du symbole plutôt que de supposer que tout élément visible est une connexion.

**Les symboles d'équipements de test et de mesure sont des illustrations destinées aux schémas de montage.** Pour les instruments qui acquièrent des signaux simulés, utilisez **Simulation → Équipement de laboratoire (Lab Equipment)** ; voir [sources et instruments virtuels](../Simulation-Sources-and-Instruments/).

Les symboles solaires représentent des câbles complets ou des liaisons logiques. Ils décrivent l'architecture du système ; ils ne spécifient ni les bornes d'installation individuelles, ni les caractéristiques nominales des câbles, ni un système de protection complet.

## Bibliothèques avec modèles de simulation
{: #libraries-with-simulation-models}

Utilisez ces collections si vous souhaitez [simuler un circuit](../Simulation/).

| Bibliothèque | Contenu | Objectif de modélisation |
| --- | --- | --- |
| **SPICE essentiels** — 27 symboles | Composants passifs, sources, diodes, LED, transistors, transformateur et amplificateur de type 741 | Ensemble de départ de composants analogiques modélisés |
| **Logique numérique** — 28 symboles | Portes logiques, compteurs et éléments de stockage | Comportement logique configurable mis en œuvre au moyen de modèles SPICE analogiques portables |
| **Blocs fonctionnels** — 17 symboles | ADC/DAC, interfaces de communication, machines à états et blocs d'E/S programmables | Explorer le comportement au niveau système sans implémenter une puce complète |
| **Capteurs et interfaces** — 10 symboles | Capteurs modélisés, point de test, commutateur analogique et modulateur AM | Relier une excitation configurée à une sortie électrique |

Ces modèles sont des approximations destinées à explorer le comportement. Ils ne garantissent pas les performances d'un appareil d'un fabricant donné. Les blocs fonctionnels de microcontrôleur, d'automate programmable ou de FPGA n'exécutent ni micrologiciel ni HDL. La bibliothèque **Logique numérique** utilise des modèles comportementaux analogiques et peut fonctionner dans le navigateur ; le [cours XSPICE](../XSPICE-Tutorial/) distinct utilise le moteur événementiel de Desktop.

Lisez les propriétés, les unités et le brochage de chaque modèle. Les modèles logiques peuvent comporter des broches d'alimentation cachées nommées **VCC** et **VSS**. Fournissez les réseaux d'alimentation correspondants et connectez **VSS** à la masse SPICE **0**. Une étiquette contenant le mot GND ne crée pas à elle seule le nœud 0.

## Éviter toute ambiguïté dans le câblage
{: #make-wiring-unambiguous}

Laissez la grille activée et terminez les fils aux véritables points de connexion. Un fil touchant une prise sans rapport ou l'extrémité d'un autre fil peut créer une connexion électrique. Faites passer les fils à distance de ces points ; une ligne apparemment nette ne suffit pas à établir le réseau voulu.

Les prises d'équipement inutilisées peuvent rester ouvertes. Certains avertissements du vérificateur de circuit concernant des fils qui pénètrent dans les contours des panneaux physiques sont attendus pour ces dessins, mais les courts-circuits et jonctions involontaires doivent être corrigés. Voir [Fils](../Wires/) pour la connectivité électrique et [Exemples fournis](../Bundled-Examples/) pour des agencements détaillés utilisant ces collections.
