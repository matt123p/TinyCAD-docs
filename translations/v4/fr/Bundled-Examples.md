---
layout: default
---
# Exemples intégrés
{: #bundled-examples}

Les exemples intégrés sont des schémas modifiables fournis avec TinyCAD. Ils montrent comment utiliser les bibliothèques, expliquent les choix de connexion et proposent des circuits pour les [tutoriels de simulation](../Simulation-Tutorials/). Vous n’avez pas besoin de télécharger leurs symboles séparément.

## Ouvrir un exemple
{: #open-an-example}

<div class="manual-tabset" data-tabset="product-mode" data-tabset-label="Choose your TinyCAD product" data-default-tab="Browser" markdown="1">

### Navigateur
{: #browser}

Choisissez **Ouvrir un exemple (Open Example)** à droite de la barre de titre sombre. Après l’ouverture d’un exemple accompagné d’instructions, **Explication (Explanation)** apparaît à côté. Utilisez ce bouton pour afficher ou masquer le panneau d’explication.

### Application de bureau
{: #desktop-app}

Choisissez **Fichier → Ouvrir un exemple (File → Open Example)**, sous **Ouvrir les éléments récents (Open Recent)**. Utilisez **Affichage → Afficher l’explication (View → View Explanation)** pour afficher ou masquer les instructions de l’exemple actuel. Cette commande n’est pas disponible lorsque le schéma n’a pas d’explication associée.

</div>

1. Choisissez un groupe : **Exemples (Examples)**, **Tutoriel SPICE (SPICE tutorial)** ou **Tutoriel XSPICE et numérique (XSPICE and digital tutorial)**.
2. Sélectionnez un schéma pour afficher son aperçu et sa description. Cette sélection ne remplace pas encore votre schéma actuel.
3. Choisissez **Ouvrir le schéma (Open drawing)**. Si vous avez des modifications non enregistrées, répondez à la demande d’enregistrement avant de continuer.
4. Lisez l’explication, examinez les connexions et modifiez la copie. Utilisez **Enregistrer sous (Save As)** pour conserver votre version.

Utilisez **Rechercher des groupes et des exemples (Search groups and examples)** pour trouver un élément par son nom. Effacez la recherche et choisissez **Tous les groupes (All groups)** si un filtre masque un groupe dont vous avez besoin.

{% include video-player.html src="/v4/videos/simulation/examples.mp4" poster="/v4/videos/simulation/examples.jpg" caption="Ouvrez l’exemple de réseau et affichez son explication à côté du schéma." %}

## Exemples d’équipements et d’implantations
{: #equipment-and-layout-examples}

Choisissez le groupe **Exemples (Examples)** pour accéder à ces sept schémas.

| Schéma | Ce qu’il illustre | Essais possibles |
| --- | --- | --- |
| **Amplificateur à transistor** | Le schéma original d’amplificateur à transistor AMP.dsn | Suivez les chemins de polarisation et de signal. Pour une reconstitution modélisée et exécutable, utilisez le [chapitre 7 du tutoriel SPICE](../SPICE-Tutorial-07/). |
| **Réseau de petit bureau** | Routeur, commutateur PoE, panneau de brassage et panneau vierge dans une baie, avec un terminal FAI, un point d’accès et un commutateur de bureau | Suivez la liaison montante de la baie et le câblage du bureau ; ajoutez un autre panneau 1U correspondant. |
| **Station climatique et d’affichage ESP32** | Connexions du contrôleur, du capteur et du module d’affichage | Suivez les broches d’alimentation et de signal identifiées, puis adaptez les modules choisis. |
| **Installation solaire et batterie domestique** | Production solaire, stockage et équipements énergétiques domestiques sur une page A3 | Suivez séparément les chemins d’alimentation et les liaisons de surveillance/commande. |
| **Studio de podcast pour deux personnes** | Microphones, mélangeur/interface, ordinateur d’enregistrement et système d’écoute | Suivez les entrées microphone, la sortie d’enregistrement et les départs casque. |
| **Banc de charge CC et de formes d’onde** | Connexions d’une alimentation, d’une charge, d’un générateur de formes d’onde, d’un oscilloscope et d’un multimètre | Distinguez les câbles complets des instruments des conducteurs individuels. |
| **Banc de moteur CC et de commande par fins de course** | Un pilote de moteur, un moteur à engrenages, des connexions de commande et des interrupteurs de fin de course | Suivez séparément l’alimentation du moteur et les signaux PWM/de direction et de fin de course. |

Les six implantations d’équipements comprennent des explications sur leurs connexions, leurs hypothèses et les extensions possibles. Il s’agit de schémas physiques/système, sans modèles SPICE. L’amplificateur d’origine est également un exemple de schéma ; son ouverture ne le transforme pas automatiquement en simulation exécutable.

Les prises ouvertes peuvent être intentionnelles. Les fils qui touchent d’autres extrémités ou prises établissent de véritables connexions ; examinez-les donc attentivement lorsque vous adaptez une implantation. Les graphiques et les broches intégrés rendent ces exemples faciles à transporter, mais ils ne remplacent pas la documentation de câblage de l’appareil réel.

## Exemples de simulation
{: #simulation-examples}

### Tutoriel SPICE
{: #spice-tutorial}

Ce groupe suit le [cours SPICE en onze chapitres](../SPICE-Tutorial/). Il commence par un diviseur de tension, puis aborde les sources, la charge d’un circuit RC, les filtres CA, le redressement par diode, un amplificateur à transistor reconstitué et des études de conception. L’entrée **Commencez ici — utiliser les tutoriels (Start here — using the tutorials)** ouvre le premier diviseur et explique le déroulement du travail.

Les schémas intègrent leurs symboles, le texte des modèles, les paramètres d’analyse et les résultats de référence conservés. Une forme d’onde peut donc être visible **avant votre premier lancement**. Choisissez **Exécuter (Run)** pour effectuer une nouvelle acquisition avec votre circuit et vos paramètres actuels. Suivez les valeurs attendues du chapitre et apportez les modifications suggérées pour comprendre pourquoi le résultat change.

### Tutoriel XSPICE et numérique
{: #xspice-and-digital-tutorial}

Utilisez **TinyCAD Desktop** pour ce groupe. Le [cours XSPICE en six chapitres](../XSPICE-Tutorial/) couvre les tables de vérité logique, le délai de propagation, les aléas, les bascules, les compteurs, les interfaces analogique/numérique et les états indéterminés. XSPICE n’est pas pris en charge dans les versions navigateur. Un navigateur peut néanmoins ouvrir, pour consultation, des schémas contenant des résultats XSPICE enregistrés.

Les deux groupes de tutoriels comprennent 28 schémas de simulation distincts. L’entrée supplémentaire « Commencez ici » renvoie au même diviseur que celui utilisé dans le premier chapitre SPICE. Chaque leçon renvoie vers des schémas `.dzn` téléchargeables et des netlists `.cir` associées, comme alternative à l’ouverture de la copie intégrée. Ouvrez les fichiers `.dzn` dans TinyCAD ; les fichiers `.cir` sont des fichiers texte à consulter ou à utiliser avec un simulateur externe compatible.

## Conserver vos essais
{: #keep-your-experiments}

La copie intégrée d’origine reste inchangée lorsque vous modifiez la copie ouverte. La réouverture du même exemple intégré fournit un nouveau point de départ. Enregistrez votre propre schéma sous un nouveau nom pour préserver les modifications, et enregistrez les résultats de simulation si vous souhaitez conserver des preuves numériques.

Le panneau **Explication (Explanation)** et les **Graphiques de simulation (Simulation charts)** sont indépendants. Fermer l’un n’oblige pas à fermer l’autre. Dans Desktop, les graphiques sont accessibles via **Affichage → Afficher les graphiques (View → Show Charts)** ; dans les deux produits, utilisez **Simulation → Afficher les graphiques (Simulation → Show charts)** dans la barre d’outils.

Lorsque vous distribuez un schéma enregistré, incluez toutes les notes séparées dont le lecteur pourrait avoir besoin. L’explication intégrée est associée à l’ouverture de l’exemple ; ne comptez pas la voir restaurée à l’ouverture indépendante d’une copie enregistrée. Les notes textuelles intégrées au schéma font toujours partie du fichier.

Poursuivez avec [votre première simulation](../Simulation/#run-your-first-simulation) ou [le guide de démarrage du tutoriel](../Tutorial-Start-Here/).
