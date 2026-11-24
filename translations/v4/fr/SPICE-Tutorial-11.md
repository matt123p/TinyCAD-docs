---
layout: default
title: 11. How TinyCAD implements SPICE
---
# 11. Comment TinyCAD implémente SPICE
{: #how-tinycad-implements-spice}

[Précédent : études de conception](/v4/SPICE-Tutorial-10/) · [Sommaire](/v4/Simulation-Tutorials/) · [Cours XSPICE](/v4/XSPICE-Tutorial-01/)

TinyCAD fournit l’éditeur de schémas, les paramètres de simulation, les instruments, les graphiques
et les mesures. **ngspice** est le moteur de résolution des circuits qui les sous-tend.
Vous dessinez et configurez l’expérience dans TinyCAD ; TinyCAD la traduit en texte de circuit
SPICE, exécute ngspice et présente les résultats renvoyés.

Les exemples de ce chapitre sont fournis avec TinyCAD. Choisissez **Ouvrir un exemple (Open Example) →
Tutoriel SPICE (SPICE tutorial)**, sélectionnez **divider** ou **rc-ac**, puis choisissez **Ouvrir le dessin (Open Drawing)**.
Pour la démonstration numérique, utilisez **Ouvrir un exemple (Open Example) → Tutoriel XSPICE et numérique (XSPICE and digital tutorial) →
logic-buffer → Ouvrir le dessin (Open Drawing)**. Aucun téléchargement de tutoriel ou de modèle n’est nécessaire.

## SPICE, ngspice et XSPICE
{: #spice-ngspice-and-xspice}

SPICE décrit les circuits sous forme de composants, de nœuds connectés et de modèles mathématiques de dispositifs.
Une analyse du point de fonctionnement résout leurs équations en courant continu. L’analyse transitoire
suit leur comportement au fil du temps simulé. L’analyse AC linéarise
le circuit autour de son point de polarisation afin de calculer la réponse fréquentielle aux petits signaux.
Le choix de l’analyse fait donc partie de la définition de l’expérience.

ngspice est un simulateur de circuits à signaux mixtes open source, dérivé de Berkeley
SPICE. TinyCAD intègre son moteur au lieu de vous demander d’installer et d’exécuter
un simulateur distinct en ligne de commande. Le moteur utilisé pour valider ces tutoriels
est **ngspice 47** ; la vue **Diagnostics** d’une exécution identifie son backend et sa version.
Consultez la [présentation officielle de ngspice](https://ngspice.sourceforge.io/presentation.html)
pour connaître l’historique du projet en amont.

**XSPICE est une extension intégrée à ngspice**, et non une autre application à
lancer. Elle ajoute des modèles de code, notamment des blocs analogiques fonctionnels et de la logique
numérique dont les événements sont coordonnés avec le solveur analogique. Un changement d’état
numérique peut donc influer sur un circuit analogique au cours de la même simulation. La
[présentation officielle de XSPICE](https://ngspice.sourceforge.io/xspice.html)
décrit cette distinction.

| Environnement TinyCAD | Fonctionnement du moteur | Exemples à utiliser |
| --- | --- | --- |
| Bureau | Processus de solveur natif distinct, avec bibliothèques de modèles de code XSPICE intégrées | SPICE analogique et cours XSPICE |
| Navigateur | ngspice compilé en WebAssembly, exécuté dans un processus de travail Web distinct | SPICE analogique et modèles comportementaux analogiques compatibles ; cette version n’inclut pas XSPICE |

TinyCAD choisit le backend adapté à son environnement. Il n’est pas nécessaire de rechercher un
exécutable ngspice ni de sélectionner un simulateur externe pour les exemples intégrés.
Un dessin XSPICE peut contenir ses définitions de modèles, mais il a toujours besoin des
bibliothèques natives de modèles de code fournies avec la version Bureau. Copier le dessin dans le
navigateur n’ajoute pas cette capacité au moteur.

## Du dessin au résultat
{: #from-drawing-to-result}

Les principales étapes sont les suivantes :

1. **Déterminer les connexions électriques.** TinyCAD détermine quelles broches de composants
   partagent un réseau à partir des fils, des jonctions et des étiquettes de réseau. Un croisement de fils n’est pas une
   connexion, sauf si le dessin relie effectivement les réseaux. Des étiquettes de réseau identiques
   connectent des points éloignés ; un texte placé près d’un fil ne le fait pas.
2. **Développer les définitions des composants.** Chaque symbole simulé fournit un modèle SPICE.
   TinyCAD y substitue sa référence, les noms des nœuds connectés et les valeurs,
   puis inclut les définitions requises des dispositifs ou sous-circuits.
3. **Ajouter l’expérience.** La feuille Simulation fournit l’analyse,
   la température, les paramètres, les modèles joints et les signaux demandés. TinyCAD
   recherche les modèles manquants, les broches non résolues, les références en double et les autres
   erreurs de configuration détectables avant de soumettre le circuit.
4. **Exécuter ngspice.** Le solveur calcule les tensions, les courants et les autres grandeurs demandées.
   Il renvoie les données et un journal de diagnostic ; TinyCAD les regroupe dans
   une acquisition associée aux paramètres et à l’identité du moteur utilisés pour l’exécution.
5. **Examiner et mesurer.** TinyCAD présente des graphiques, des données numériques et des mesures calculées.
   Par exemple, une mesure de fréquence de coupure est dérivée des données AC ;
   ce n’est pas un autre composant inséré dans le schéma.

Cela explique pourquoi un dessin d’apparence correcte ne suffit pas : un transistor a besoin
d’un modèle et d’une correspondance correcte des broches, tandis que deux fils doivent être connectés électriquement,
même si leurs extrémités semblent proches au niveau de zoom actuel.

## Quels symboles utiliser ?
{: #which-symbols-should-i-use}

Ouvrez l’**icône en forme d’impulsion** de la barre d’outils. Son texte au survol est **Simulation**.
Dans les instructions ci-dessous, **Simulation → …** désigne le menu de cette icône.

| Besoin | Où le trouver | Points à vérifier |
| --- | --- | --- |
| Résistance, condensateur, inductance, diode, LED, transistor NPN/PNP ou amplificateur opérationnel 741 | **Simulation → Composants SPICE (SPICE components)**, ou bibliothèque **Éléments essentiels SPICE (SPICE essentials)** | Valeur, polarité, alimentations et hypothèses de modèle |
| Source indépendante de tension/courant | **Simulation → SPICE → Insérer une source (Insert Source)** | Type de source, forme du signal, unités et sens de connexion |
| Nœud de référence | **Simulation → SPICE → Insérer une masse (Insert Ground)** | Connectez-la électriquement ; la référence SPICE est le nœud `0` |
| Observation de tension | **Insérer une sonde (Insert Probe)** ou **Insérer une sonde différentielle (Insert Differential Probe)** dans le sous-menu SPICE | Une tension à une seule extrémité est mesurée par rapport à la masse ; une sonde différentielle mesure entre ses bornes |
| Observation du courant de branche | **Simulation → SPICE → Insérer une sonde de courant (Insert Current Probe)** | Insérez-la en série et vérifiez le sens positif |
| Source commandée | **Simulation → SPICE → Insérer une source commandée (Insert Controlled Source)** | Bornes de commande, bornes de sortie et gain/transconductance |
| Instruments de laboratoire | **Simulation → Équipement de laboratoire (Lab Equipment)** | Réglages de l’oscilloscope, du multimètre, du générateur de fonctions et de l’alimentation de laboratoire ; leur charge et leurs limites sont importantes |
| Logique modélisée ordinaire | Bibliothèque **Logique numérique (Digital logic)** | Ces modèles SPICE portables configurables sont distincts des exemples XSPICE à événements ; vérifiez les broches d’alimentation et les propriétés du modèle |
| Logique XSPICE à événements | Exemples intégrés du **tutoriel XSPICE et numérique (XSPICE and digital tutorial)** | Utilisez la version Bureau et conservez dans le modèle les ponts analogique/numérique |

La bibliothèque Éléments essentiels SPICE fournit des exemples préconfigurés de dispositifs courants.
Un transistor générique ou un modèle de type 741 est utile pour apprendre, mais
son comportement simulé ne correspond pas automatiquement aux spécifications d’une pièce particulière
d’un fabricant. Les chapitres sur les amplificateurs documentent explicitement les modèles génériques
substitués aux dispositifs `AMP.DSN` d’origine.

Un symbole provenant d’une autre bibliothèque peut être uniquement destiné au dessin. Sélectionnez le symbole placé
et examinez l’onglet **SPICE** de ses propriétés. Il lui faut un modèle SPICE valide
et toutes les définitions de modèles référencées par ce modèle. Un nom, un boîtier ou une
illustration identiques n’ajoutent pas ces définitions. De même, une étiquette nommée `VCC` nomme un
réseau ; elle ne crée pas une tension d’alimentation. Connectez une source réelle à ce réseau.

## Exécuter une expérience existante
{: #run-an-existing-experiment}

1. Choisissez **Ouvrir un exemple (Open Example) → Tutoriel SPICE (SPICE tutorial) → divider → Ouvrir le dessin (Open Drawing)**.
2. Sélectionnez sa feuille **Simulation**. Sous **Configuration (Setup)**, l’analyse enregistrée est
   **Mesure DC — Point de fonctionnement (Measure DC — Operating Point)**. Le circuit utilise une source de 5 V et deux
   résistances de 1 kΩ.
3. Choisissez **Exécuter (Run)**. Utilisez **Simulation → Afficher les graphiques (Show charts)** si le panneau de graphiques est masqué.
4. Examinez `in`, `out` et `v1#branch`. Attendez-vous à **5 V**, **2,5 V** et
   **−2,5 mA**, respectivement. Le courant de la source est défini comme entrant dans la borne
   positive ; une source qui fournit de la puissance a donc ici un courant négatif.
5. Remplacez R2 par `2k` sur la feuille du circuit et exécutez de nouveau. Attendez-vous à ce que OUT passe à
   environ **3,333 V**. Une acquisition antérieure conservée décrit toujours
   le circuit précédent ; la modification d’une valeur ne réécrit pas ses résultats.

![Feuille Simulation de TinyCAD montrant l’analyse AC du circuit RC et le résultat de fréquence de coupure](/v4/images/simulation-tutorials/spice/tinycad-ac-setup.png)

Cette capture d’écran de l’application montre la vue **Configuration (Setup)** de **rc-ac**,
un autre exemple intégré. Son filtre de 1 kΩ/1 µF a une fréquence de coupure proche de **159,15 Hz**. Ouvrez-le
pour comparer une expérience dans le domaine fréquentiel au point unique en courant continu du diviseur.

**Exécuter (Run)** lance une acquisition de durée finie avec l’analyse sélectionnée. **Arrêter (Stop)** interrompt
le solveur et conserve les échantillons acceptés ; ces échantillons constituent un résultat partiel,
et non la preuve que la durée demandée est écoulée. Ces versions ne proposent pas
de pause/reprise ni de solveur actif indéfiniment. Utilisez **Historique (History)** pour examiner les exécutions précédentes
et **Diagnostics** pour lire le journal du solveur.

Pour une démonstration, regardez [ouvrir, exécuter et modifier un diviseur](/v4/videos/simulation-tutorials/spice/first-run.mp4)
et [réponse AC et fréquence de coupure](/v4/videos/simulation-tutorials/spice/ac-response.mp4). Les deux vidéos montrent les commandes réelles du bureau,
des acquisitions natives terminées et des résultats numériques, avec des sous-titres.

## Créer votre première simulation
{: #build-your-own-first-simulation}

Placez deux résistances depuis **Simulation → Composants SPICE (SPICE components)**, une source avec **Insérer une source (Insert Source)**
et une masse avec **Insérer une masse (Insert Ground)**. Organisez-les en diviseur : le positif de la source
vers R1, R1 vers R2, puis R2 vers le négatif de la source et la masse. Donnez aux deux résistances
la valeur `1k`, réglez la source sur 5 V CC, et étiquetez l’alimentation `IN` ainsi que le point milieu `OUT`.
Assurez-vous que chaque composant a une référence unique, telle que R1, R2 et V1.

Choisissez **Simulation → Simuler (Simulate)** pour créer une feuille Simulation. Sélectionnez
**Mesure DC — Point de fonctionnement (Measure DC — Operating Point)** sous **Configuration (Setup)**, puis **Exécuter (Run)**. Vous devriez obtenir
les mêmes valeurs que dans l’exemple de diviseur intégré. En cas d’échec, comparez les connexions,
les paramètres de la source et les propriétés SPICE avec cet exemple fonctionnel.

Pour une expérience transitoire, sélectionnez **Dans le temps — Transitoire (Over time — Transient)**, réglez la durée
et le pas maximal, puis configurez une source variant dans le temps. Pour une analyse AC, sélectionnez
**Réponse fréquentielle — AC (Frequency response — AC)**, réglez la plage de fréquences et le nombre de points par décennie,
et donnez à la source d’entrée une **amplitude AC** non nulle, généralement 1 V. Sa fréquence sinusoïdale
et son amplitude transitoire ne définissent pas le balayage AC. TinyCAD propose également
les analyses de balayage DC, de bruit, de fonction de transfert et de pôles-zéros ; les chapitres précédents
indiquent quand chacune est utile.

## Examiner le texte SPICE généré et ajouter des modèles
{: #inspect-the-generated-spice-and-add-models}

Après avoir exécuté le diviseur, ouvrez **Diagnostics → Générer le texte du circuit (Generate circuit text)**.
Les lignes importantes ressemblent à ceci ; TinyCAD ajoute également des directives de température et d’enregistrement
des signaux :

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
La feuille Simulation de TinyCAD gère `.op`, `.tran`, `.ac` et les autres commandes d’analyse ; ne collez pas ces commandes ni `.end` dans les propriétés SPICE d’un composant.

Pour une pièce déjà présente dans le catalogue de TinyCAD, utilisez [Modèles SPICE intégrés](../Bundled-SPICE-Models/) pour choisir une définition et vérifier la correspondance des broches. Pour un fichier externe requis par une définition personnalisée, développez **Configuration (Setup) → Modèles SPICE (SPICE models)**. Choisissez un
fichier `.lib`, `.cir` ou `.mod`, ou saisissez son nom de fichier et le texte du modèle. Dans les deux
cas, choisissez **Enregistrer le modèle (Save model)** pour le joindre. Utilisez un nom de fichier simple, tel que
`device.lib`. Configurez ensuite le
modèle SPICE du symbole pour instancier le dispositif ou le `.SUBCKT` approprié,
et incluez la pièce jointe si nécessaire, par exemple avec `.include device.lib`
dans son prologue. Joindre un fichier ne suffit pas à l’associer à un symbole.

Vérifiez l’ordre des bornes du modèle par rapport aux **numéros de broches** du symbole,
et non par rapport à la position apparente des broches sur la page. Un modèle de transistor à trois bornes
et un sous-circuit de fabricant peuvent utiliser des ordres de nœuds différents. Vérifiez également toute référence
à des modèles imbriqués : les fichiers inclus doivent aussi être joints à la feuille Simulation.
Les définitions et pièces jointes de modèles sont conservées avec le dessin enregistré.

TinyCAD prend en charge le texte de modèle intégré, mais pas les scripts de commandes ngspice arbitraires ni
les modules exécutables externes. Les blocs `.control`, les commandes shell, le chargement de modules externes
et les stimuli/modèles provenant de fichiers sont exclus de ce flux de travail. Utilisez
les commandes de source et les analyses prises en charge, ou exportez le circuit pour une
expérience ngspice distincte en ligne de commande. Un modèle de fabricant écrit pour un autre
dialecte SPICE peut nécessiter une adaptation avant d’être accepté par ngspice.

## Comment les simulations numériques s’intègrent-elles ?
{: #how-digital-simulations-fit-in}

Ouvrez **Tutoriel XSPICE et numérique (XSPICE and digital tutorial) → logic-buffer** dans la version Bureau. Son modèle X1
contient un pont analogique-numérique, un tampon à événements et un
pont numérique-analogique. La source ordinaire pilote l’entrée analogique ;
les ponts rendent les états logiques visibles sous forme de tensions dans les graphiques de TinyCAD.

![Signaux d’entrée et de sortie calculés du tampon XSPICE intégré](/v4/images/simulation-tutorials/xspice/logic-buffer-results.png)

Exécutez la simulation transitoire enregistrée. Attendez-vous à des impulsions de 0 à 5 V d’une période de 1 µs et à une transition de sortie
décalée d’environ 20 ns, avec des fronts finis. Zoomez pour examiner
le délai. Cette figure trace les résultats réels du solveur issus de l’exemple.

Les nœuds numériques du modèle ne sont pas des nœuds de tension ordinaires. Les seuils des ponts
et leur représentation d’un état indéfini sont des choix de modélisation délibérés.
Une porte comportementale construite à partir d’expressions SPICE analogiques peut sembler similaire sur un
graphique, mais elle utilise une méthode de simulation différente. Poursuivez avec la
[présentation de XSPICE ](/v4/XSPICE-Tutorial-01/) pour les ponts, la synchronisation, le stockage et
les circuits à signaux mixtes.

## Enregistrer, comparer et dépanner
{: #save-compare-and-troubleshoot}

Enregistrez votre expérience avec **Enregistrer sous (Save As)** pour conserver une copie modifiable de l’exemple intégré.
TinyCAD peut conserver les acquisitions avec le dessin ; **Enregistrer sans les résultats (Save without
results)** garde le circuit et la configuration tout en omettant ces résultats enregistrés.
Utilisez les exportations **Données (Data)** pour obtenir des données CSV, JSON ou SPICE raw si une analyse
supplémentaire est nécessaire. Notez l’acquisition, le modèle et la fenêtre de mesure utilisés.

| Symptôme | Première vérification |
| --- | --- |
| Informations SPICE manquantes | Utilisez un symbole modélisé ou configurez son onglet SPICE |
| Modèle ou sous-circuit manquant | Nom du modèle, fichiers joints, instruction include et ordre des bornes |
| Circuit flottant ou masse manquante | Masse SPICE connectée et chemins de retour CC appropriés |
| Étiquette d’alimentation, mais aucune tension d’alimentation | Connectez une source de tension ou une alimentation de laboratoire au réseau étiqueté |
| Réponse AC vide/nulle | Amplitude AC d’entrée et signaux sélectionnés |
| Modèle XSPICE indisponible dans le navigateur | Exécutez l’exemple dans TinyCAD Desktop |
| Tracé ne correspondant pas aux valeurs modifiées | Exécutez de nouveau la simulation et sélectionnez la nouvelle acquisition |
| Erreur de convergence ou forme d’onde incomplète | Lisez Diagnostics, simplifiez le circuit et vérifiez les fronts du stimulus, le pas de temps et la validité du modèle |

Le [manuel ngspice](https://ngspice.sourceforge.io/docs.html) est la référence
pour la sémantique des dispositifs et des modèles. Les commandes de TinyCAD déterminent lesquelles de ces
capacités sont disponibles dans son flux de travail intégré.

## Télécharger les circuits des leçons
{: #download-the-lesson-circuits}

Les mêmes exemples sont déjà disponibles dans **Ouvrir un exemple (Open Example)**. Pour en obtenir une copie indépendante, téléchargez un dessin `.dzn` et utilisez **Fichier (File) → Ouvrir (Open)** dans TinyCAD. Le fichier `.cir` associé est du texte SPICE destiné à l’inspection ou à un simulateur externe compatible, et non un dessin TinyCAD. Les circuits XSPICE nécessitent la version Bureau pour de nouvelles exécutions.

| Exemple | Dessin | Netlist |
| --- | --- | --- |
| divider | [Dessin TinyCAD](/v4/examples/simulation-tutorials/spice/divider.dzn) | [Texte SPICE](/v4/examples/simulation-tutorials/spice/divider.cir) |
| logic-buffer | [Dessin TinyCAD](/v4/examples/simulation-tutorials/xspice/logic-buffer.dzn) | [Texte SPICE](/v4/examples/simulation-tutorials/xspice/logic-buffer.cir) |
