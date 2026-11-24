---
layout: default
---
# Simulation et SPICE
{: #simulation-and-spice}

TinyCAD peut exécuter des simulations de circuits électroniques, tracer les résultats et mesurer le comportement des circuits sans quitter le dessin. Le moteur intégré est **ngspice**. Le navigateur et l’application de bureau comprennent tous deux un moteur ; aucune installation séparée de ngspice n’est nécessaire pour le flux de travail intégré.

Vous débutez en simulation ? Commencez par le [cours SPICE guidé](../SPICE-Tutorial/). Pour obtenir rapidement un premier résultat, suivez les étapes ci-dessous sur le diviseur. Cette référence explique les commandes et comment interpréter leurs résultats.

## Ce que calcule un simulateur de circuits
{: #what-a-circuit-simulator-calculates}

SPICE signifie *Simulation Program with Integrated Circuit Emphasis* (programme de simulation axé sur les circuits intégrés). Un simulateur résout le modèle mathématique d’un circuit connecté : les résistances relient tension et courant, les condensateurs et les inductances stockent de l’énergie, et les modèles de semi-conducteurs décrivent des comportements non linéaires. Il peut déterminer le point de polarisation en courant continu, calculer des formes d’onde au cours du temps et étudier la réponse fréquentielle en petit signal.

Un schéma fournit la **connectivité** ; un modèle SPICE fournit le **comportement** ; une analyse précise **ce qu’il faut calculer**. Ces trois éléments doivent être corrects. Une représentation réaliste d’un amplificateur ou d’un processeur ne signifie pas qu’il contient un modèle de simulation. À l’inverse, un simple triangle ou rectangle peut contenir un modèle comportemental utile.

La simulation est utile pour vérifier une idée, comparer des valeurs de composants et comprendre une réponse inattendue. Son résultat dépend du modèle et des conditions que vous fournissez. Les fils idéaux n’ont aucune résistance ni inductance parasite ; un modèle générique de transistor ne constitue pas une spécification complète pour tous les transistors. Le chargement, l’impédance d’alimentation, les tolérances et la température ne sont pris en compte que dans la mesure où les modèles choisis les représentent.

## Moteurs du navigateur et de l’application de bureau
{: #browser-and-desktop-engines}

| Fonctionnalité | Navigateur | Application de bureau |
| --- | --- | --- |
| SPICE analogique, graphiques, mesures et exploration | ngspice WebAssembly intégré, exécuté dans un worker | ngspice natif intégré, via un processus auxiliaire |
| Bibliothèques portables modélisées Digital logic / Functional blocks / Sensors and interfaces | Oui | Oui |
| Modèles de code XSPICE pilotés par événements | Non pris en charge¹ | Oui, bibliothèques natives de modèles de code intégrées |
| Fenêtres détachées de graphiques | Oui | Oui |
| Fenêtres détachées d’instruments virtuels | Non | Oui |

¹ Les versions pour navigateur peuvent ouvrir un dessin contenant des résultats XSPICE enregistrés afin de les consulter. L’exécution de XSPICE nécessite l’application de bureau.

Les calculs sont exécutés localement dans le navigateur ou le moteur de l’application de bureau. La recherche de bibliothèques en ligne est une fonctionnalité distincte. Le moteur intégré actuel est basé sur ngspice 47 ; l’historique des exécutions indique le moteur et la version utilisés pour une acquisition. Consultez le manuel amont correspondant pour vérifier la syntaxe des modèles ou les différences entre moteurs.

## Exécuter votre première simulation
{: #run-your-first-simulation}

1. Ouvrez **Open Example** dans la barre de titre du navigateur, ou **File → Open Example** dans l’application de bureau.
2. Sélectionnez **SPICE tutorial → divider → Open drawing**.
3. Examinez le circuit : une source de 5 V alimente deux résistances de 1 kΩ en série. **OUT** est leur point milieu, et le fil inférieur est la masse **0**.
4. Sélectionnez la **feuille de simulation divider** dans la barre des feuilles. Son icône en forme d’horloge la distingue d’une feuille de schéma. Ouvrez **Setup** et laissez **Operating Point** sélectionné.
5. Choisissez **Run**. Une fois l’exécution terminée, ouvrez **History** et sélectionnez la nouvelle acquisition terminée.
6. Ouvrez **Data**. Le point milieu est à **2,5 V**. Le courant de la source est de **−2,5 mA**, car le sens de référence du courant d’une source de tension dans ngspice est dirigé vers sa borne positive ; dans ce circuit, une source qui fournit du courant a un courant négatif.
7. Modifiez une résistance, puis relancez la simulation. Comparez le nouveau résultat à l’acquisition d’origine.

{% include video-player.html src="/v4/videos/simulation/first-simulation.mp4" poster="/v4/videos/simulation/first-simulation.jpg" caption="Ouvrez le diviseur intégré, examinez sa configuration et lancez une nouvelle acquisition ngspice dans le navigateur. Le tableau Data confirme 2,5 V sur OUT et −2,5 mA dans la source." %}

L’exemple comprend une acquisition de référence conservée. Si un résultat s’affiche immédiatement après l’ouverture, cela ne signifie pas qu’un nouveau calcul a été effectué. **History** distingue ces données enregistrées de l’acquisition que vous créez avec Run.

## Créer une nouvelle simulation
{: #build-a-new-simulation}

1. Placez des composants modélisés depuis **Standard → SPICE essentials**, ou utilisez le sous-menu **Simulation → SPICE components** de la barre d’outils. **More…** ouvre la collection complète SPICE essentials. Ses symboles possèdent déjà un [modèle intégré et un mappage des broches](../Bundled-SPICE-Models/).
2. Reliez les broches avec des fils et attribuez des libellés lisibles aux nœuds importants. Incluez une connexion réelle à la masse **0** : **Simulation → SPICE → Insert Ground** fournit le symbole d’alimentation approprié.
3. Ajoutez une excitation avec **Simulation → SPICE → Insert Source**. Définissez son type (tension/courant) et sa forme d’onde. Ajoutez des [sondes](../Simulation-Sources-and-Instruments/#probes-and-ground) si vous souhaitez créer facilement des graphiques.
4. Choisissez **Simulation → Simulate** pour ajouter une **feuille de simulation**.
5. Choisissez une analyse et ses paramètres dans **Setup**. Définissez les paramètres ou joignez du texte de modèle personnalisé si votre circuit en a besoin.
6. Choisissez les signaux, lancez la simulation et examinez le panneau **Simulation charts**, ainsi que les vues **Data**, **History** et **Diagnostics** de la feuille. Corrigez les erreurs de câblage ou de modèle signalées avant de vous fier aux valeurs.

Sur une feuille de simulation, **Run** et **Stop** apparaissent dans la barre d’outils principale. La feuille s’ouvre sur **Setup**. **History** et **Diagnostics** apparaissent lorsqu’elle contient une exécution ; **Measurements** et **Data** apparaissent lorsque des données numériques sont disponibles. Les outils Circuit Explorer se trouvent sous les paramètres d’analyse dans Setup ; ajoutez uniquement ceux dont vous avez besoin avec **Add tools**.

Toutes les feuilles de schéma d’un dessin constituent **un seul circuit**. Chaque feuille de simulation possède sa propre configuration : analyse, paramètres, modèles joints, sélection des signaux, instructions et historique des exécutions. Ajouter une deuxième feuille de simulation ne crée pas un deuxième circuit de schéma indépendant. Cela permet d’étudier le même circuit d’une autre manière, par exemple avec une analyse AC à côté d’une analyse transitoire.

Utilisez un nom de configuration distinct pour chaque étude. La duplication d’une configuration copie ses définitions, mais pas ses acquisitions. Une seule acquisition s’exécute à la fois ; les balayages et les études exécutent leurs cas de manière séquentielle.

## Masse, connexions et modèles
{: #ground-connections-and-models}

La référence de tension SPICE est le nœud **0**. Un symbole d’alimentation ou un libellé de réseau portant exactement cette valeur définit la référence. Le mot **GND** seul est un nom de réseau ordinaire, à moins de le relier également au nœud 0. Les circuits flottants, les broches d’alimentation de modèle non alimentées et les retours de source non connectés sont des problèmes fréquents lors des premières exécutions.

Les fils doivent aboutir aux points de connexion des broches. Un texte placé à proximité ne constitue pas une connexion. Un fil qui touche l’extrémité d’un autre fil ou la borne d’un composant peut créer une jonction même si ce n’était pas votre intention. Utilisez la [connectivité des fils](../Wires/) et la netlist générée pour résoudre les ambiguïtés du dessin.

Chaque composant simulé nécessite un modèle, un modèle de composant et un mappage des broches valides. Utilisez les propriétés **SPICE** du composant placé pour les examiner. Consultez [Modèles SPICE et sortie de netlist](../SPICE-output/) avant de joindre des modèles de fabricant ou d’adapter un symbole destiné uniquement au dessin.

## Configuration, exécution et arrêt
{: #setup-run-and-stop}

**Run** démarre une nouvelle acquisition à partir du circuit et de la configuration actuels. Les graphiques peuvent se mettre à jour à mesure que les données arrivent. **Stop** interrompt l’acquisition et conserve les données déjà reçues ; l’état de l’exécution et la disponibilité indiquent ce qui a été conservé. Ce n’est pas une commande de pause/reprise. Lancez une nouvelle exécution pour effectuer un nouveau calcul.

Les modifications du circuit, des modèles ou de la configuration rendent le résultat précédent historique. TinyCAD signale les résultats qui nécessitent une nouvelle exécution au lieu de présenter d’anciennes valeurs comme des mesures du circuit modifié. L’historique consigne l’identité du circuit et des paramètres, le moteur, l’heure et le résultat. Sélectionner une acquisition antérieure revient à sélectionner des données antérieures ; cela ne restaure pas l’ancien schéma comme le ferait une commande d’annulation.

## Enregistrer et partager les résultats
{: #save-and-share-results}

Enregistrez le dessin pour conserver son circuit, ses modèles, ses configurations et ses résultats acquis. TinyCAD utilise automatiquement **`.dzn`** lorsqu’un dessin contient des composants, des paramètres ou des résultats de simulation. **Save without results** conserve les définitions de simulation et les métadonnées scalaires/de rapport capturées, mais omet les tableaux numériques des formes d’onde ; les graphiques qui nécessitent ces tableaux exigent alors une nouvelle acquisition.

Les données numériques conservées sont limitées à 64 Mio par exécution et à 256 Mio par dessin, avec un maximum de 1 000 exécutions par configuration. Les études longues avec un pas de temps fin peuvent atteindre ces limites. Exportez les graphiques importants et les données CSV, puis supprimez les résultats dont vous n’avez plus besoin. Enregistrez les modèles joints avec le dessin afin que son destinataire n’ait pas besoin d’accéder à vos chemins de fichiers locaux.

## Dessins de simulation `.dzn`
{: #dzn-simulation-drawings}
{: #dzn-simulation-drawings}

**`.dzn` est le format de dessin compressé de TinyCAD, pris en charge à partir de TinyCAD v4.** Il regroupe le schéma, les symboles intégrés, les feuilles de simulation, les paramètres des sources, le texte des modèles joints et toutes les acquisitions conservées dans un seul fichier basé sur ZIP. Les données numériques des formes d’onde sont stockées efficacement dans le conteneur, y compris les résultats AC complexes. Vous l’ouvrez et l’enregistrez au moyen des commandes habituelles **File → Open**, **Save** et **Save As** ; aucune extraction manuelle n’est nécessaire.

Les dessins ordinaires utilisent le format XML **`.dsn`**. TinyCAD choisit automatiquement `.dzn` lorsque du contenu de simulation est présent, notamment des sources, des sondes, des instruments virtuels, des attributs SPICE, une masse nommée `0`, des feuilles de simulation ou des résultats. **Save without results** utilise tout de même `.dzn` lorsqu’il conserve la configuration de simulation : cette commande supprime les grands tableaux des formes d’onde, et non les définitions de l’expérience.

Utilisez **Save without results** pour créer une copie plus légère à partager lorsque le destinataire peut relancer la simulation. Conservez les résultats si vous souhaitez que le destinataire puisse consulter votre acquisition, vos mesures et les détails du moteur sans la relancer. Une acquisition enregistrée décrit le circuit tel qu’il était au moment de l’exécution ; elle ne remplace pas une nouvelle exécution après une modification.

TinyCAD v3 ne peut pas ouvrir les fichiers `.dzn`. Modifier leur extension en `.dsn` ne convertit pas le format et ne rend pas les nouveaux enregistrements de simulation compatibles avec v3. Conservez une copie originale lorsque vous échangez une conception avec une ancienne version de TinyCAD. Un export `.cir` est du texte SPICE destiné à un simulateur ; il est différent des deux formats de dessin TinyCAD.

## Poursuivre avec la documentation de référence
{: #continue-with-the-reference}

- [Analyses et paramètres](../Simulation-Analyses/) — DC, transitoire, AC, bruit, fonction de transfert et pôles-zéros.
- [Sources, sondes et instruments virtuels](../Simulation-Sources-and-Instruments/) — excitations, connexions de mesure et chargement.
- [Graphiques, mesures et Circuit Explorer](../Simulation-Charts-and-Measurements/) — réglage, balayages, exigences et études.
- [Modèles SPICE intégrés](../Bundled-SPICE-Models/) — trouver, joindre et personnaliser un modèle.
- [Modèles SPICE et sortie de netlist](../SPICE-output/) — modèles, fichiers de modèle et simulation externe.
- [XSPICE et simulation numérique](../XSPICE/) — modèles événementiels et mixtes dans l’application de bureau.
- [Dépannage](../Simulation-Troubleshooting/) — diagnostiquer les problèmes de connectivité, de modèles et de calcul numérique.
- [Tutoriels](../Simulation-Tutorials/) — les cours SPICE et XSPICE complets existants, avec des dessins exécutables.

Pour consulter la référence du langage et des composants du simulateur, utilisez la [documentation officielle de ngspice](https://ngspice.sourceforge.io/docs.html), le [manuel utilisateur PDF](https://ngspice.sourceforge.io/docs/ngspice-manual.pdf) et le [manuel HTML](https://ngspice.sourceforge.io/docs/ngspice-html-manual/manual.xhtml). Ce manuel décrit ngspice dans son ensemble ; TinyCAD expose les flux de travail intégrés pris en charge décrits ici, et non un interpréteur de commandes sans restriction.
