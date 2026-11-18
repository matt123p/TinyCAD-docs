---
layout: default
title: 11. How TinyCAD implements SPICE
---
# 11. Comment TinyCAD implémente SPICE
{: #how-tinycad-implements-spice}

[Précédent : études de conception](/v4/SPICE-Tutorial-10/) · [Sommaire](/v4/Simulation-Tutorials/) · [Cours XSPICE](/v4/XSPICE-Tutorial-01/)

TinyCAD fournit l’éditeur de schémas, les paramètres de simulation, les instruments, les graphiques
et les mesures. **ngspice** est le moteur de résolution de circuits qui les sous-tend.
Vous dessinez et configurez l’expérience dans TinyCAD ; TinyCAD la traduit en
texte de circuit SPICE, exécute ngspice et présente les résultats obtenus.

Les exemples de ce chapitre sont fournis avec TinyCAD. Choisissez **Ouvrir un exemple (Open Example) →
Tutoriel SPICE (SPICE tutorial)**, sélectionnez **divider** ou **rc-ac**, puis choisissez **Ouvrir le dessin (Open Drawing)**.
Pour la démonstration numérique, utilisez **Ouvrir un exemple (Open Example) → Tutoriel XSPICE et logique numérique (XSPICE and digital tutorial) →
logic-buffer → Ouvrir le dessin (Open Drawing)**. Aucun téléchargement de tutoriel ni de modèle n’est nécessaire.

## SPICE, ngspice et XSPICE
{: #spice-ngspice-and-xspice}

SPICE décrit les circuits sous forme de composants, de nœuds connectés et de modèles mathématiques de dispositifs.
Une analyse du point de fonctionnement résout leurs équations en courant continu. L’analyse transitoire
suit leur comportement au fil du temps simulé. L’analyse AC linéarise
le circuit autour de son point de polarisation pour calculer la réponse fréquentielle en petits signaux.
Le choix de l’analyse fait donc partie de la définition de l’expérience.

ngspice est un simulateur de circuits à signaux mixtes libre, issu de Berkeley
SPICE. TinyCAD intègre son moteur plutôt que de vous demander d’installer et d’exécuter
un simulateur en ligne de commande séparé. Le moteur utilisé pour valider ces tutoriels
est **ngspice 47** ; la vue **Diagnostics** d’une exécution indique son moteur et sa compilation.
Consultez la [présentation officielle de ngspice](https://ngspice.sourceforge.io/presentation.html)
pour en savoir plus sur le projet en amont.

**XSPICE est une extension intégrée à ngspice**, et non une autre application
à lancer. Elle ajoute des modèles de code, notamment des blocs analogiques fonctionnels et une logique numérique
dont les événements sont coordonnés avec le solveur analogique. Un changement d’état numérique
peut donc affecter un circuit analogique au cours de la même simulation. L’[introduction officielle à XSPICE](https://ngspice.sourceforge.io/xspice.html)
explique cette distinction.

| Environnement TinyCAD | Fonctionnement du moteur | Exemples à utiliser |
| --- | --- | --- |
| Bureau | Processus solveur natif distinct, avec bibliothèques de modèles de code XSPICE intégrées | SPICE analogique et cours XSPICE |
| Navigateur | ngspice compilé en WebAssembly et exécuté dans un processus de travail web distinct | SPICE analogique et modèles comportementaux analogiques compatibles ; cette version n’inclut pas XSPICE |

TinyCAD choisit le moteur adapté à son environnement. Il n’est pas nécessaire de trouver un
exécutable ngspice ni de sélectionner un simulateur externe pour les exemples fournis.
Un schéma XSPICE peut contenir ses définitions de modèle, mais il nécessite toujours les
bibliothèques natives de modèles de code fournies avec la version Bureau. Copier le schéma dans
le navigateur n’ajoute pas cette capacité au moteur.

## Du dessin au résultat
{: #from-drawing-to-result}

Les principales étapes sont les suivantes :

1. **Déterminer les connexions électriques.** TinyCAD détermine quelles broches de composants
   partagent un réseau à partir des fils, des jonctions et des étiquettes de réseau. Un croisement de fils n’est pas une
   connexion à moins que le dessin ne relie effectivement les réseaux. Des étiquettes de réseau identiques
   relient des points éloignés ; un texte placé près d’un fil ne le fait pas.
2. **Développer les définitions des composants.** Chaque symbole simulé fournit un modèle SPICE.
   TinyCAD y substitue sa référence, les noms de nœuds connectés et les valeurs,
   puis inclut les définitions requises des dispositifs ou sous-circuits.
3. **Ajouter l’expérience.** La feuille Simulation fournit l’analyse,
   la température, les paramètres, les modèles joints et les signaux demandés. TinyCAD
   recherche les modèles manquants, les broches non résolues, les références en double et les autres
   erreurs de configuration détectables avant de soumettre le circuit.
4. **Exécuter ngspice.** Le solveur calcule les tensions, les courants et les autres grandeurs
   demandées. Il renvoie des données et un journal de diagnostic ; TinyCAD les rassemble dans
   une acquisition associée aux paramètres et à l’identité du moteur de l’exécution.
5. **Examiner et mesurer.** TinyCAD présente des graphiques, des données numériques et des mesures
   calculées. Par exemple, une mesure de fréquence de coupure est dérivée des données AC ;
   ce n’est pas un autre composant inséré dans le schéma.

Cela explique pourquoi un dessin d’apparence correcte ne suffit pas : un transistor nécessite
un modèle et une correspondance correcte des broches, tandis que deux fils doivent être électriquement connectés
même si leurs extrémités semblent proches au niveau de zoom actuel.

## Quels symboles utiliser ?
{: #which-symbols-should-i-use}

Ouvrez l’**icône en forme d’impulsion** de la barre d’outils. Son texte au survol est **Simulation**.
Dans les instructions ci-dessous, **Simulation → …** désigne le menu de cette icône.

| Besoin | Emplacement | Éléments à vérifier |
| --- | --- | --- |
| Résistance, condensateur, inductance, diode, LED, transistor NPN/PNP ou amplificateur opérationnel 741 | **Simulation → Composants SPICE (SPICE components)**, ou bibliothèque **Essentiels SPICE (SPICE essentials)** | Valeur, polarité, alimentations et hypothèses de modèle |
| Source indépendante de tension/courant | **Simulation → SPICE → Insérer une source (Insert Source)** | Type de source, forme du signal, unités et sens de connexion |
| Nœud de référence | **Simulation → SPICE → Insérer une masse (Insert Ground)** | Reliez-la électriquement ; le nœud de référence SPICE est `0` |
| Observation de tension | **Insérer une sonde (Insert Probe)** ou **Insérer une sonde différentielle (Insert Differential Probe)** dans le sous-menu SPICE | Une tension référencée à la masse est relative à celle-ci ; une sonde différentielle mesure entre ses bornes |
| Observation du courant de branche | **Simulation → SPICE → Insérer une sonde de courant (Insert Current Probe)** | Insérez-la en série et vérifiez le sens positif |
| Source dépendante | **Simulation → SPICE → Insérer une source commandée (Insert Controlled Source)** | Bornes de commande, bornes de sortie et gain/transconductance |
| Instruments de banc | **Simulation → Équipement de laboratoire (Lab Equipment)** | Paramètres de l’oscilloscope, du multimètre, du générateur de fonctions et de l’alimentation de laboratoire ; leur charge et leurs limites sont importantes |
| Logique modélisée ordinaire | Bibliothèque **Logique numérique (Digital logic)** | Ces modèles SPICE portables et configurables sont distincts des exemples XSPICE à événements ; vérifiez les broches d’alimentation et les propriétés du modèle |
| Logique XSPICE à événements | Exemples intégrés du **Tutoriel XSPICE et logique numérique (XSPICE and digital tutorial)** | Utilisez la version Bureau et conservez les ponts analogique/numérique dans le modèle |

La bibliothèque Essentiels SPICE fournit des exemples préconfigurés de dispositifs courants.
Un transistor générique ou un modèle de type 741 est utile pour apprendre, mais
son comportement simulé ne correspond pas automatiquement aux spécifications d’une pièce
particulière d’un fabricant. Les chapitres sur les amplificateurs documentent explicitement les
modèles génériques substitués aux composants d’origine `AMP.DSN`.

Un symbole provenant d’une autre bibliothèque peut n’être destiné qu’au dessin. Sélectionnez le symbole placé
et examinez l’onglet **SPICE** de ses propriétés. Il lui faut un modèle SPICE valide
et toutes les définitions de modèle auxquelles celui-ci fait référence. Un nom, un boîtier ou une
illustration identique n’ajoute pas ces définitions. De même, une étiquette nommée `VCC` désigne un
réseau ; elle ne crée pas de tension d’alimentation. Connectez une source réelle à ce réseau.

## Exécuter une expérience existante
{: #run-an-existing-experiment}

1. Choisissez **Ouvrir un exemple (Open Example) → Tutoriel SPICE (SPICE tutorial) → divider → Ouvrir le dessin (Open Drawing)**.
2. Sélectionnez sa feuille **Simulation**. Dans **Configuration (Setup)**, l’analyse enregistrée est
   **Mesure CC — Point de fonctionnement (Measure DC — Operating Point)**. Le circuit utilise une source de 5 V et deux
   résistances de 1 kΩ.
3. Choisissez **Exécuter (Run)**. Utilisez **Simulation → Afficher les graphiques (Show charts)** si le panneau des graphiques est masqué.
4. Examinez `in`, `out` et `v1#branch`. Attendez-vous à **5 V**, **2.5 V** et
   **−2.5 mA**, respectivement. Le courant d’une source est défini comme entrant dans sa borne
   positive ; une source qui fournit de la puissance a donc ici un courant négatif.
5. Remplacez R2 par `2k` sur la feuille du circuit et relancez l’exécution. Attendez-vous à ce que OUT atteigne
   environ **3.333 V**. Une acquisition antérieure conservée décrit toujours
   l’ancien circuit ; modifier une valeur ne réécrit pas ses résultats.

![Feuille Simulation de TinyCAD avec l’analyse AC RC et le résultat de fréquence de coupure](/v4/images/simulation-tutorials/spice/tinycad-ac-setup.png)

Cette capture de l’application montre la vue **Configuration (Setup)** de **rc-ac**, un autre
exemple intégré. Son filtre de 1 kΩ/1 µF a une fréquence de coupure proche de **159.15 Hz**. Ouvrez-le
pour comparer une expérience dans le domaine fréquentiel au point CC unique du diviseur.

**Exécuter (Run)** démarre une acquisition finie avec l’analyse sélectionnée. **Arrêter (Stop)** met fin
au solveur et conserve les échantillons acceptés ; ces échantillons constituent un résultat partiel,
et non la preuve que la durée demandée est écoulée. Ces versions ne proposent pas
de pause/reprise ni de solveur perpétuellement actif. Utilisez **Historique (History)** pour examiner les
exécutions précédentes et **Diagnostics** pour lire le journal du solveur.

Pour une démonstration, regardez [ouvrir, exécuter et modifier un diviseur](/v4/videos/simulation-tutorials/spice/first-run.mp4)
et [réponse AC et fréquence de coupure](/v4/videos/simulation-tutorials/spice/ac-response.mp4). Les deux montrent les véritables
commandes de la version Bureau, des acquisitions natives terminées et des résultats numériques, avec sous-titres.

## Créer votre première simulation
{: #build-your-own-first-simulation}

Placez deux résistances depuis **Simulation → Composants SPICE (SPICE components)**, une source avec **Insérer une source (Insert Source)**
et une masse avec **Insérer une masse (Insert Ground)**. Disposez-les en diviseur : le positif de la source
vers R1, R1 vers R2, et R2 de retour au négatif de la source et à la masse. Donnez aux deux résistances
la valeur `1k`, réglez la source sur 5 V CC et étiquetez l’alimentation `IN` et le point milieu `OUT`.
Assurez-vous que chaque composant possède une référence unique, telle que R1, R2 et V1.

Choisissez **Simulation → Simuler (Simulate)** pour créer une feuille Simulation. Sélectionnez
**Mesure CC — Point de fonctionnement (Measure DC — Operating Point)** dans **Configuration (Setup)**, puis **Exécuter (Run)**. Vous devriez obtenir
les mêmes valeurs que pour le diviseur intégré. En cas d’échec, comparez les connexions,
les paramètres de la source et les propriétés SPICE avec cet exemple fonctionnel.

Pour une expérience transitoire, sélectionnez **Au cours du temps — Transitoire (Over time — Transient)**, réglez la durée
et le pas maximal, puis configurez une source variant dans le temps. Pour l’analyse AC, sélectionnez
**Réponse en fréquence — AC (Frequency response — AC)**, réglez la plage de fréquences et le nombre de points par décade,
et attribuez à la source d’entrée une **amplitude AC** non nulle, généralement 1 V. Sa fréquence sinusoïdale
et son amplitude transitoire ne définissent pas le balayage AC. TinyCAD propose également les analyses de balayage
CC, de bruit, de fonction de transfert et de pôles-zéros ; les chapitres précédents
indiquent dans quels cas chacune est utile.

## Examiner le SPICE généré et ajouter des modèles
{: #inspect-the-generated-spice-and-add-models}

Après avoir exécuté le diviseur, ouvrez **Diagnostics → Générer le texte du circuit (Generate circuit text)**.
Les lignes importantes ressemblent à ceci ; TinyCAD ajoute également la température et les directives de signaux enregistrés :

```spice
R1 IN OUT 1k
R2 OUT 0 1k
V1 IN 0 DC 5 AC 0 0
.op
.end
```

`R1 IN OUT 1k` signifie une résistance de 1 kΩ entre les nœuds IN et OUT. `0` est le
nœud de référence. Ce texte rend explicites les connexions et la polarité de la source.
Utilisez **Exporter le circuit (Export circuit)** si vous devez examiner ou exécuter la netlist séparément.
La feuille Simulation de TinyCAD gère `.op`, `.tran`, `.ac` et les autres commandes
d’analyse ; ne les collez pas, pas plus que `.end`, dans les propriétés SPICE d’un composant.

Pour un modèle de dispositif supplémentaire, développez **Configuration (Setup) → Modèles SPICE (SPICE models)**. Choisissez un
fichier `.lib`, `.cir` ou `.mod`, ou saisissez son nom de fichier et le texte du modèle. Dans les deux
cas, choisissez **Enregistrer le modèle (Save model)** pour le joindre. Utilisez un nom de fichier simple comme
`device.lib`. Configurez ensuite le modèle SPICE du
symbole pour instancier le dispositif ou le sous-circuit approprié `.SUBCKT`,
et incluez le fichier joint si nécessaire, par exemple avec `.include device.lib`
dans son préambule. Joindre un fichier ne le met pas à lui seul en correspondance avec un symbole.

Vérifiez l’ordre des bornes du modèle par rapport aux **numéros de broches** du symbole,
et non selon la position apparente des broches sur la page. Un modèle de transistor à trois bornes
et un sous-circuit de fabricant peuvent utiliser des ordres de nœuds différents. Vérifiez également les références
aux modèles imbriqués : les fichiers inclus doivent eux aussi être joints à la feuille Simulation.
Les définitions de modèle et les fichiers joints sont enregistrés avec le dessin.

TinyCAD prend en charge le texte de modèle intégré, mais pas les scripts de commande ngspice arbitraires ni
les modules exécutables externes. Les blocs `.control`, les commandes shell, le chargement de modules externes
et les stimuli/modèles reposant sur des fichiers sont exclus de ce flux de travail. Utilisez
les commandes de source et les analyses prises en charge, ou exportez le circuit pour une
expérience ngspice distincte en ligne de commande. Un modèle de fabricant écrit pour un autre
dialecte SPICE peut nécessiter une adaptation avant d’être accepté par ngspice.

## Intégration des simulations numériques
{: #how-digital-simulations-fit-in}

Ouvrez **Tutoriel XSPICE et logique numérique (XSPICE and digital tutorial) → logic-buffer** dans la version Bureau. Son modèle X1
contient un pont analogique-numérique, un tampon à événements et un pont
numérique-analogique. La source ordinaire pilote l’entrée analogique ;
les ponts rendent les états logiques accessibles sous forme de tensions dans les graphiques de TinyCAD.

![Entrées et sorties calculées du tampon XSPICE intégré](/v4/images/simulation-tutorials/xspice/logic-buffer-results.png)

Lancez l’analyse transitoire enregistrée. Attendez-vous à des impulsions de 0–5 V d’une période de 1 µs et à une transition
à la sortie retardée d’environ 20 ns, avec des fronts finis. Zoomez pour examiner
le retard. Cette figure représente les résultats réels du solveur pour cet exemple.

Les nœuds numériques du modèle ne sont pas des nœuds de tension ordinaires. Les seuils des ponts
et leur représentation d’un état indéfini sont des choix de modélisation délibérés.
Une porte comportementale construite à partir d’expressions SPICE analogiques peut sembler similaire sur un
graphique, mais emploie une méthode de simulation différente. Poursuivez avec la
[présentation de XSPICE](/v4/XSPICE-Tutorial-01/) pour les ponts, la temporisation, le stockage et
les circuits à signaux mixtes.

## Enregistrer, comparer et résoudre les problèmes
{: #save-compare-and-troubleshoot}

Enregistrez votre expérience avec **Enregistrer sous (Save As)** pour conserver une copie modifiable de l’exemple intégré.
TinyCAD peut conserver les acquisitions avec le dessin ; **Enregistrer sans
résultats (Save without results)** garde le circuit et la configuration tout en omettant les résultats enregistrés.
Utilisez les exports **Données (Data)** pour obtenir des données CSV, JSON ou SPICE raw lorsque des analyses
supplémentaires sont nécessaires. Notez l’acquisition, le modèle et la fenêtre de mesure utilisés.

| Symptôme | Première vérification |
| --- | --- |
| Informations SPICE manquantes | Utilisez un symbole modélisé ou configurez son onglet SPICE |
| Modèle ou sous-circuit manquant | Nom du modèle, fichiers joints, instruction include et ordre des bornes |
| Circuit flottant ou masse manquante | Une masse SPICE connectée et des chemins de retour CC adaptés |
| Étiquette d’alimentation sans tension d’alimentation | Connectez une source de tension ou une alimentation de laboratoire au réseau étiqueté |
| Réponse AC vide/nulle | Amplitude AC d’entrée et signaux sélectionnés |
| Modèle XSPICE indisponible dans le navigateur | Exécutez l’exemple dans TinyCAD Bureau |
| Graphique ne correspondant pas aux valeurs modifiées | Relancez l’exécution et sélectionnez la nouvelle acquisition |
| Erreur de convergence ou forme d’onde incomplète | Lisez Diagnostics, simplifiez le circuit et vérifiez les fronts du stimulus, le pas de temps et la validité du modèle |

Le [manuel ngspice](https://ngspice.sourceforge.io/docs.html) est la référence
pour la sémantique des dispositifs et des modèles. Les commandes de TinyCAD déterminent lesquelles de ces
fonctionnalités sont accessibles par son flux de travail intégré.

## Télécharger les circuits de la leçon
{: #download-the-lesson-circuits}

Les mêmes exemples sont déjà disponibles dans **Ouvrir un exemple (Open Example)**. Pour obtenir une copie indépendante, téléchargez un dessin `.dzn` et utilisez **Fichier → Ouvrir (File → Open)** dans TinyCAD. Le fichier compagnon `.cir` est un texte SPICE destiné à l’examen ou à un simulateur externe compatible, et non un dessin TinyCAD. Les circuits XSPICE nécessitent la version Bureau pour être exécutés à nouveau.

| Exemple | Dessin | Netlist |
| --- | --- | --- |
| divider | [Dessin TinyCAD](/v4/examples/simulation-tutorials/spice/divider.dzn) | [Texte SPICE](/v4/examples/simulation-tutorials/spice/divider.cir) |
| logic-buffer | [Dessin TinyCAD](/v4/examples/simulation-tutorials/xspice/logic-buffer.dzn) | [Texte SPICE](/v4/examples/simulation-tutorials/xspice/logic-buffer.cir) |
