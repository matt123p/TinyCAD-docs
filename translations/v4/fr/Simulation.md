---
layout: default
---
# Simulation et SPICE
{: #simulation-and-spice}

TinyCAD peut exécuter des simulations de circuits électroniques, tracer les résultats et mesurer le comportement des circuits sans quitter le dessin. Le moteur intégré est **ngspice**. Le navigateur et l’application Desktop comprennent tous deux un moteur ; vous n’avez pas besoin d’installer ngspice séparément pour le flux de travail intégré.

Vous débutez en simulation ? Commencez par le [cours SPICE guidé](../SPICE-Tutorial/). Pour obtenir rapidement un premier résultat, suivez les étapes du diviseur ci-dessous. Cette référence explique les commandes et la manière d’interpréter leurs résultats.

## Calculs effectués par un simulateur de circuits
{: #what-a-circuit-simulator-calculates}

SPICE signifie *Simulation Program with Integrated Circuit Emphasis*. Un simulateur résout un modèle mathématique d’un circuit connecté : les résistances relient tension et courant, les condensateurs et les inductances stockent de l’énergie, et les modèles de semi-conducteurs décrivent les comportements non linéaires. Il peut déterminer le point de fonctionnement en continu, calculer les formes d’onde au cours du temps et étudier la réponse en fréquence aux petits signaux.

Un schéma fournit la **connectivité** ; un modèle SPICE fournit le **comportement** ; une analyse précise **ce qu’il faut calculer**. Ces trois éléments doivent être corrects. Une représentation réaliste d’un amplificateur ou d’un processeur ne signifie pas qu’elle contient un modèle de simulation. À l’inverse, un simple triangle ou rectangle peut contenir un modèle comportemental utile.

La simulation permet de vérifier une idée, de comparer des valeurs de composants et de comprendre une réponse inattendue. Le résultat dépend du modèle et des conditions que vous fournissez. Les fils idéaux n’ont pas de résistance ni d’inductance parasites ; un modèle générique de transistor ne constitue pas une spécification complète de tous les transistors. Le chargement, l’impédance d’alimentation, les tolérances et la température ne sont pris en compte que dans la mesure où les modèles choisis les représentent.

## Moteurs du navigateur et de Desktop
{: #browser-and-desktop-engines}

| Fonctionnalité | Navigateur | Application Desktop |
| --- | --- | --- |
| SPICE analogique, graphiques, mesures et exploration | ngspice WebAssembly intégré, exécuté dans un worker | ngspice natif intégré, via un processus auxiliaire |
| Bibliothèques portables de logique numérique modélisée / blocs fonctionnels / capteurs et interfaces | Oui | Oui |
| Modèles de code XSPICE pilotés par événements | Non pris en charge¹ | Oui, bibliothèques natives de modèles de code intégrées |
| Fenêtres détachées des graphiques | Oui | Oui |
| Fenêtres détachées des instruments virtuels | Non | Oui |

¹ Les versions pour navigateur peuvent ouvrir un dessin contenant des résultats XSPICE enregistrés pour les afficher. L’exécution de XSPICE nécessite Desktop.

Les calculs sont exécutés localement dans le navigateur ou le moteur Desktop. La recherche en ligne dans les bibliothèques est une fonctionnalité distincte. Le moteur intégré actuel est basé sur ngspice 47 ; l’historique des exécutions indique le moteur et la version utilisés pour une acquisition. Consultez le manuel amont correspondant pour vérifier la syntaxe des modèles ou les différences entre moteurs.

## Exécuter votre première simulation
{: #run-your-first-simulation}

1. Dans le navigateur, ouvrez **Open Example** dans la barre de titre, ou dans Desktop, **File → Open Example**.
2. Sélectionnez **SPICE tutorial → divider → Open drawing**.
3. Examinez le circuit : une source de 5 V alimente deux résistances de 1 kΩ en série. **OUT** est leur point milieu, et le fil du bas est la masse **0**.
4. Sélectionnez la feuille **divider Simulation** dans la bande des feuilles. Son icône en forme d’horloge la distingue d’une feuille de schéma. Ouvrez **Setup** et laissez **Operating Point** sélectionné.
5. Choisissez **Run**. Une fois l’exécution terminée, ouvrez **History** et sélectionnez la nouvelle acquisition terminée.
6. Ouvrez **Data**. Le point milieu est à **2.5 V**. Le courant de la source est de **−2.5 mA**, car la référence du courant d’une source de tension dans ngspice est dirigée vers sa borne positive ; dans ce circuit, une source qui fournit du courant en a donc un courant négatif.
7. Modifiez une résistance, puis exécutez à nouveau la simulation. Comparez le nouveau résultat à l’acquisition d’origine.

{% include video-player.html src="/v4/videos/simulation/first-simulation.mp4" poster="/v4/videos/simulation/first-simulation.jpg" caption="Ouvrez le diviseur intégré, examinez sa configuration et lancez une nouvelle acquisition ngspice dans le navigateur. Le tableau Data confirme 2.5 V sur OUT et −2.5 mA dans la source." %}

L’exemple comprend une acquisition de référence conservée. Si vous voyez immédiatement un résultat après l’ouverture, cela ne signifie pas qu’un nouveau calcul a été exécuté. **History** distingue ces éléments enregistrés de l’acquisition que vous créez avec Run.

## Créer une nouvelle simulation
{: #build-a-new-simulation}

1. Placez des composants modélisés depuis **Standard → SPICE essentials**, ou utilisez le sous-menu **Simulation → SPICE components** de la barre d’outils. **More…** ouvre la collection complète SPICE essentials.
2. Reliez les broches avec des fils et attribuez des libellés lisibles aux nœuds importants. Incluez une connexion réelle à la masse **0** : **Simulation → SPICE → Insert Ground** fournit le symbole d’alimentation adéquat.
3. Ajoutez une excitation avec **Simulation → SPICE → Insert Source**. Définissez son type (tension ou courant) et sa forme d’onde. Ajoutez des [sondes](../Simulation-Sources-and-Instruments/#probes-and-ground) si vous souhaitez disposer de graphiques pratiques.
4. Choisissez **Simulation → Simulate** pour ajouter une **Simulation sheet**.
5. Sélectionnez une analyse et ses paramètres dans **Setup**. Définissez des paramètres ou joignez le texte d’un modèle personnalisé si votre circuit en a besoin.
6. Choisissez les signaux, lancez l’exécution et examinez le panneau **Simulation charts**, ainsi que les vues **Data**, **History** et **Diagnostics** de la feuille. Corrigez les erreurs de câblage ou de modèle signalées avant de vous fier aux valeurs.

Sur une feuille Simulation, **Run** et **Stop** apparaissent dans la barre d’outils principale. La feuille s’ouvre sur **Setup**. **History** et **Diagnostics** apparaissent après une exécution ; **Measurements** et **Data** apparaissent lorsque des données numériques sont disponibles. Les outils Circuit Explorer se trouvent sous les paramètres d’analyse dans Setup ; ajoutez uniquement ceux dont vous avez besoin avec **Add tools**.

Toutes les feuilles de schéma d’un dessin forment **un seul circuit**. Chaque feuille Simulation possède une configuration distincte : analyse, paramètres, modèles joints, sélections de signaux, instructions et historique des exécutions. L’ajout d’une seconde feuille Simulation ne crée pas un second circuit schématique isolé. Il permet d’étudier le même circuit d’une autre manière, par exemple avec une analyse AC à côté d’une analyse transitoire.

Utilisez un nom de configuration distinct pour chaque étude. La duplication d’une configuration copie ses définitions, mais pas ses acquisitions. Une seule acquisition peut être exécutée à la fois ; les balayages et les études exécutent leurs cas l’un après l’autre.

## Masse, connexions et modèles
{: #ground-connections-and-models}

La référence de tension de SPICE est le nœud **0**. Un symbole d’alimentation ou un libellé de réseau portant exactement cette valeur établit la référence. Le mot **GND** seul est un nom de réseau ordinaire, sauf si vous le reliez aussi au nœud 0. Les circuits flottants, les broches d’alimentation non alimentées des modèles et les retours de source non connectés sont des problèmes fréquents lors des premières exécutions.

Les fils doivent rejoindre les broches au niveau de leurs points de connexion. Un texte placé à proximité ne constitue pas une connexion. Un fil touchant l’extrémité d’un autre fil ou la borne d’un composant peut créer une jonction même si ce n’était pas votre intention. Utilisez la [connectivité des fils](../Wires/) et la netlist générée pour résoudre les ambiguïtés des dessins.

Chaque composant simulé doit avoir un gabarit, un modèle et une correspondance de broches valides. Utilisez les propriétés **SPICE** du composant placé pour les examiner. Consultez [Modèles SPICE et sortie de netlist](../SPICE-output/) avant de joindre des modèles de fabricants ou d’adapter un symbole destiné uniquement au dessin.

## Setup, Run et Stop
{: #setup-run-and-stop}

**Run** lance une nouvelle acquisition à partir du circuit et de la configuration actuels. Les graphiques peuvent se mettre à jour pendant l’arrivée des données. **Stop** termine l’acquisition et conserve les données déjà reçues ; son état et sa disponibilité indiquent ce qui a été conservé. Ce n’est pas une commande de pause/reprise. Lancez une nouvelle exécution pour effectuer un nouveau calcul.

Les modifications apportées au circuit, aux modèles ou à la configuration rendent le résultat précédent historique. TinyCAD signale les résultats qui doivent être recalculés plutôt que de présenter les anciennes valeurs comme des mesures du circuit modifié. L’historique consigne l’identité du circuit et des paramètres, le moteur, l’heure et le résultat. La sélection d’une acquisition antérieure sélectionne des éléments de preuve antérieurs ; elle ne restaure pas l’ancien schéma comme le ferait une annulation.

## Enregistrer et partager les résultats
{: #save-and-share-results}

Enregistrez le dessin pour conserver son circuit, ses modèles, ses configurations et ses résultats acquis. TinyCAD utilise automatiquement **`.dzn`** lorsqu’un dessin contient des composants, des paramètres ou des résultats de simulation. **Save without results** conserve les définitions de simulation et les métadonnées numériques/de rapport capturées, tout en omettant les tableaux numériques des formes d’onde ; les graphiques qui nécessitent ces tableaux requièrent alors une nouvelle acquisition.

Les données numériques conservées sont limitées à 64 Mio par exécution et à 256 Mio par dessin, avec jusqu’à 1 000 exécutions par configuration. Les études longues avec un pas de temps fin peuvent atteindre ces limites. Exportez les graphiques et les données CSV importants, et supprimez les résultats dont vous n’avez plus besoin. Enregistrez les modèles joints avec le dessin afin que son destinataire n’ait pas besoin de vos chemins de fichiers locaux.

## Dessins de simulation `.dzn`
{: #dzn-simulation-drawings}
{: #dzn-simulation-drawings}

**`.dzn` est le format de dessin compressé de TinyCAD, pris en charge à partir de TinyCAD v4.** Il regroupe le schéma, les symboles intégrés, les feuilles Simulation, les paramètres des sources, le texte des modèles joints et les acquisitions conservées dans un seul fichier basé sur ZIP. Les données numériques des formes d’onde sont stockées efficacement dans le conteneur, y compris les résultats AC complexes. Vous l’ouvrez et l’enregistrez avec les commandes habituelles **File → Open**, **Save** et **Save As** ; aucune extraction manuelle n’est nécessaire.

Les dessins ordinaires utilisent le format XML **`.dsn`**. TinyCAD choisit automatiquement `.dzn` lorsque du contenu de simulation est présent, notamment des sources, des sondes, des instruments virtuels, des attributs SPICE, une masse nommée `0`, des feuilles Simulation ou des résultats. **Save without results** utilise toujours `.dzn` lorsque la configuration de simulation est conservée : cette commande supprime les grands tableaux des formes d’onde, pas les définitions des expériences.

Utilisez **Save without results** pour créer une copie plus légère à partager lorsque le destinataire peut réexécuter la simulation. Conservez les résultats si vous souhaitez que le destinataire puisse examiner votre acquisition, vos mesures et les détails du moteur sans la relancer. Une acquisition enregistrée décrit le circuit au moment de son exécution ; elle ne remplace pas une nouvelle exécution après une modification.

TinyCAD v3 ne peut pas ouvrir les fichiers `.dzn`. Modifier l’extension en `.dsn` ne convertit pas le format et ne rend pas les nouveaux enregistrements de simulation compatibles avec v3. Conservez une copie originale lorsque vous échangez un dessin avec une version antérieure de TinyCAD. Un export `.cir` est du texte SPICE destiné à un simulateur ; il diffère des deux formats de dessin TinyCAD.

## Poursuivre avec la référence
{: #continue-with-the-reference}

- [Analyses et paramètres](../Simulation-Analyses/) — DC, transitoire, AC, bruit, fonction de transfert et pôles-zéros.
- [Sources, sondes et instruments virtuels](../Simulation-Sources-and-Instruments/) — excitations, connexions de mesure et chargement.
- [Graphiques, mesures et Circuit Explorer](../Simulation-Charts-and-Measurements/) — réglage, balayages, exigences et études.
- [Modèles SPICE et sortie de netlist](../SPICE-output/) — gabarits, fichiers de modèles et simulation externe.
- [XSPICE et simulation numérique](../XSPICE/) — modèles Desktop événementiels et à signaux mixtes.
- [Dépannage](../Simulation-Troubleshooting/) — diagnostic de la connectivité, des modèles et des problèmes numériques.
- [Tutoriels](../Simulation-Tutorials/) — cours SPICE et XSPICE complets existants, avec dessins exécutables.

Pour consulter la référence du langage et des composants du simulateur, utilisez la [documentation officielle de ngspice](https://ngspice.sourceforge.io/docs.html), le [manuel d’utilisation PDF](https://ngspice.sourceforge.io/docs/ngspice-manual.pdf) et le [manuel HTML](https://ngspice.sourceforge.io/docs/ngspice-html-manual/manual.xhtml). Le manuel décrit ngspice dans son ensemble ; TinyCAD propose les flux de travail intégrés pris en charge et décrits ici, et non un interpréteur de commandes sans restriction.
