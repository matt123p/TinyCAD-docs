---
layout: default
---
# Dessins à plusieurs feuilles
{: #multiple-sheet-drawings}

Un dessin TinyCAD peut contenir plusieurs feuilles de schéma dans **un seul fichier**. Chaque feuille dispose de sa propre zone de dessin et d’un onglet sous la zone de travail. Utilisez les onglets pour travailler sur une feuille à la fois ; ensemble, les feuilles de schéma décrivent un circuit.

## Pourquoi utiliser plusieurs feuilles ?
{: #why-use-multiple-sheets}

Les feuilles multiples permettent d’organiser un dessin en sections compréhensibles plutôt que de tout réduire sur une seule page surchargée. Par exemple :

| Feuille | Contenu possible |
| --- | --- |
| **Alimentation** | Connecteur d’entrée, protection, régulateurs et rails d’alimentation |
| **Commande** | Processeur, horloge, réinitialisation et connexions de programmation |
| **Capteurs** | Entrées de mesure et circuits d’interface associés |
| **Sorties** | Pilotes, relais, moteurs, afficheurs ou connecteurs externes |

Cela facilite le dessin, la vérification et l’impression de chaque section à une taille lisible. Vous pouvez regrouper les composants associés, donner à chaque page un objectif clair et ordonner les pages selon une séquence de lecture utile. Pour un petit projet, une seule feuille peut rester plus claire.

Une feuille fait partie du dessin courant ; ce n’est ni un fichier distinct ni un onglet de navigateur. L’ouverture de deux fichiers de dessin sans rapport ne les connecte pas, même s’ils contiennent des libellés identiques.

## Créer et changer de feuille
{: #create-and-switch-sheets}

1. Ouvrez votre dessin et repérez les onglets de feuille sous la zone de travail.
2. Choisissez **+** à côté des onglets. Son infobulle indique **Add new sheet** (Ajouter une nouvelle feuille).
3. Saisissez un **Sheet Name** (Nom de la feuille), par exemple `Control`, puis choisissez **Add** (Ajouter).
4. La nouvelle feuille devient active. Placez-y des composants et des fils, ou déplacez-y les éléments sélectionnés depuis une autre feuille avec Couper et Coller.
5. Sélectionnez l’onglet d’une feuille pour y revenir. Changer de feuille ne supprime pas son contenu.

Utilisez des noms distincts et descriptifs pour que les personnes qui lisent le schéma puissent trouver la section recherchée.

## Renommer une feuille
{: #rename-a-sheet}

1. Sélectionnez l’onglet de la feuille.
2. Ouvrez le petit menu en forme de flèche à côté de son nom.
3. Choisissez **Rename** (Renommer), saisissez le nouveau **Sheet Name** (Nom de la feuille), puis choisissez **Rename** (Renommer) dans la boîte de dialogue.

Le renommage modifie le nom de la page. Il ne renomme pas les références des composants ni les libellés de nets, et ne modifie pas les connexions électriques.

## Modifier l’ordre des feuilles
{: #change-the-sheet-order}

Faites glisser un onglet de feuille sur un autre pour le déplacer à cet emplacement. Vous pouvez également sélectionner un onglet, ouvrir son menu en forme de flèche et choisir **Move left** (Déplacer à gauche) ou **Move right** (Déplacer à droite) pour le déplacer d’une position à la fois.

La réorganisation modifie la séquence des pages, pas les composants ni les connexions du circuit. Utilisez-la pour placer d’abord la section d’alimentation, regrouper les fonctions associées ou placer les pages complémentaires après le circuit principal. Faites glisser l’**onglet** pour réorganiser les pages ; faire glisser un composant déplace ce composant.

## Vidéo : organiser les feuilles et les relier avec des libellés
{: #video-organise-sheets-and-connect-them-with-labels}

La démonstration commence par **Open Example → SPICE tutorial → divider** (Ouvrir un exemple → Tutoriel SPICE → Diviseur). Elle renomme la feuille Circuit en Power, crée Control, réorganise les onglets, puis déplace R2 vers Control. Des libellés OUT identiques et des connexions de masse nommées 0 reconnectent le diviseur entre les deux feuilles de schéma. La vue Netlist confirme que R1 et R2 partagent le net OUT.

{% include video-player.html src="/v4/videos/simulation/multiple-sheets.mp4" poster="/v4/videos/simulation/multiple-sheets.jpg" caption="Créez, renommez et réorganisez les feuilles, puis utilisez des libellés identiques pour relier un diviseur entre Power et Control." %}

L’exemple contient également une feuille Simulation marquée d’une horloge. Cette feuille stocke les paramètres et les résultats d’analyse ; elle est différente d’une page de schéma. Toutes les feuilles de schéma contribuent toujours au même circuit simulé.

## Établir des connexions entre les feuilles
{: #make-connections-between-sheets}

Un fil ne peut pas se prolonger physiquement sur une autre page. Utilisez plutôt des **libellés électriquement actifs portant le même nom** aux points que vous souhaitez relier. TinyCAD considère ces points comme appartenant à un même net sur toutes les feuilles de schéma du dessin.

Par exemple, une sortie de régulateur portant le libellé `+3V3` sur Power peut alimenter une entrée de processeur portant le libellé `+3V3` sur Control. Un signal portant le libellé `RESET` peut relier un circuit de réinitialisation sur une feuille à un processeur sur une autre. Les libellés doivent être attachés aux fils ou aux broches concernés.

### Placer un libellé de net partagé
{: #place-a-shared-net-label}

1. Sur la première feuille, tracez le fil local jusqu’à la broche du composant comme d’habitude.
2. Sélectionnez l’outil **Label** (Libellé) et placez son point de connexion électrique sur ce fil ou cette broche. Un texte placé à proximité ne suffit pas.
3. Modifiez le texte du libellé pour lui donner un nom explicite, comme `RESET` ou `I2C_SDA`. Sélectionnez le texte du libellé pour le modifier ; remplacez le texte par défaut `Label`.
4. Passez à l’autre feuille et placez un autre Label (Libellé) sur le fil ou la broche qui doit rejoindre le même net.
5. Saisissez **exactement le même nom**, en respectant l’orthographe, les espaces et la casse.
6. Répétez l’opération sur les autres feuilles partout où ce même net électrique est nécessaire.

Utilisez l’outil [Label](../Labels/) (Libellé), et non l’outil [Text](../Text/) (Texte). Une note indiquant RESET documente le dessin ; un libellé Label indiquant RESET établit une connexion électrique.

### Exemple détaillé : un diviseur sur deux feuilles
{: #worked-example-a-divider-on-two-sheets}

Répartissez le diviseur 5 V classique entre une section d’alimentation et une section de charge :

| Feuille | Composants | Connexions partagées |
| --- | --- | --- |
| **Power** | V1 = 5 V et R1 = 1 kΩ | Le fil de sortie de R1 porte le libellé **OUT** ; le retour de V1 est connecté à la masse **0**. |
| **Control** | R2 = 1 kΩ | La broche supérieure de R2 porte le libellé **OUT** et sa broche inférieure est connectée à un symbole d’alimentation de masse nommé **0**. |

OUT relie R1 à R2 d’une feuille à l’autre. Les noms de masse identiques relient le retour de R2 à la masse 0 de Power. Aucun fil n’est dessiné entre les pages, mais le circuit électrique reste V1 → R1 → R2 → retour. Avec les valeurs d’origine, la tension de sortie au point de fonctionnement reste de 2,5 V.

La vidéo déplace R2 avec **Cut and Paste** (Couper et Coller), en conservant sa référence au lieu de créer un second R2. Lorsque vous ajoutez des composants, veillez à ce que les références soient uniques dans tout le dessin afin que les netlists et les rapports identifient le composant voulu.

## Les noms des libellés s’appliquent à tout le dessin
{: #label-names-apply-to-the-whole-drawing}

Les noms partagés sont utiles, mais ils permettent aussi de relier accidentellement des sections sans rapport. Un libellé appelé `OUT` sur trois feuilles différentes relie les trois emplacements ; il n’est pas propre à chaque page. Utilisez des noms plus précis, comme `SENSOR_OUT` et `AUDIO_OUT`, lorsque les signaux doivent rester séparés.

Les noms des feuilles et l’ordre des onglets n’assurent pas l’isolation électrique. La forme d’un libellé n’est également qu’une convention visuelle : les styles de libellé simple, d’entrée, de sortie et bidirectionnel portant le même nom appartiennent au même net. Choisissez les formes pour aider les lecteurs à suivre le sens prévu du signal, et les noms pour définir la connectivité.

Les [symboles d’alimentation](../Power-symbols/) fournissent également des connexions d’alimentation nommées et partagées. Veillez à utiliser des noms cohérents : `+3V3` et `3V3` sont des noms différents. Pour SPICE, utilisez une connexion réelle au nœud **0** ; un net distinct nommé GND n’est pas automatiquement la référence de masse du simulateur.

## Vérifier les connexions entre feuilles
{: #check-the-cross-sheet-connections}

Utilisez le menu de mode du panneau de liste inférieur pour passer de **Symbols** (Symboles) à **Netlist** (Liste de connexions). Repérez le libellé partagé et inspectez les références des composants connectés ainsi que leurs numéros de broche. La colonne Sheet indique l’élément principal représenté par la ligne ; la colonne Symbols peut inclure des composants provenant d’autres feuilles du même net. Dans l’exemple, OUT comprend R1 et R2.

Si la connexion est absente, vérifiez le point d’attache du libellé ainsi que son texte exact sur les deux pages. Si des composants sans rapport partagent un net, recherchez ailleurs dans le dessin un nom de libellé réutilisé. [Design Rules Check](../Design-Rules-Check/) (Vérification des règles de conception) peut aider à repérer des problèmes électriques, mais ne peut pas déterminer si vous vouliez séparer deux nets portant le même nom.

Consultez [Netlist Editor](../Netlist-Editor/) (Éditeur de netlist) et [Labels](../Labels/) (Libellés) pour plus de détails. Dans un dessin de simulation, relancez l’analyse après toute modification du circuit afin que le résultat tienne compte de toutes les feuilles de schéma à jour.

## Enregistrer le dessin complet
{: #save-the-complete-drawing}

**Save** (Enregistrer) enregistre toutes les feuilles ensemble. Les dessins ordinaires utilisent `.dsn` ; les dessins contenant du contenu de simulation utilisent [`.dzn`](../Simulation/#dzn-simulation-drawings). Il n’est pas nécessaire d’enregistrer chaque feuille séparément.

- Retour à [Drawing](../User-guide/) (Dessin)
