---
layout: default
---
# Sources, sondes et instruments virtuels
{: #sources-probes-and-virtual-instruments}

Le menu **Simulation** de la barre d’outils contient les outils d’insertion **SPICE** et **Équipement de laboratoire**. Choisissez un outil et placez-le sur un schéma. Cliquez avec le bouton droit ou appuyez sur Échap pour annuler le placement. Les outils sélectionnés depuis une feuille Simulation basculent vers un schéma pour le placement ; leurs définitions sont intégrées au dessin.

## Sources indépendantes
{: #independent-sources}

Choisissez **Simulation → SPICE → Insérer une source (Insert Source)**. Son éditeur s’ouvre avant le placement. Sélectionnez une tension ou un courant, ainsi qu’un type de signal. Sélectionnez le corps d’une source déjà placée pour rouvrir son éditeur inférieur.

| Type de signal | Utilité | Paramètres à vérifier |
| --- | --- | --- |
| CC | Polarisation et alimentation constante | Valeur CC et polarité |
| Sinusoïdal | Entrée analogique périodique | Décalage, amplitude de crête, fréquence, phase, retard et amortissement |
| Carré/impulsion | Commutation et temporisation | Niveaux bas/haut, retard, temps de montée/descente, largeur d’impulsion et période |
| Triangulaire | Rampe répétitive | Niveaux, période et durée de rampe |
| Linéaire par morceaux (PWL) | Séquence prescrite | Paires temps/valeur croissantes, une paire par ligne |
| Exponentiel | Transition façonnée | Niveaux, retards et constantes de temps |
| FM | Modulation de fréquence | Paramètres de la porteuse et de la modulation |

![Éditeur de source sinusoïdale et aperçu de la forme d’onde](../images/simulation/source-settings.png)

L’aperçu reflète les paramètres numériques de la forme d’onde. Utilisez-le pour repérer un décalage, une crête ou une temporisation inattendus avant l’exécution. Des paramètres non valides empêchent le démarrage. L’icône d’une source change en fonction de sa forme d’onde, et une source de courant conserve sa flèche de direction.

**L’amplitude et la phase CA sont des paramètres distincts** pour l’analyse fréquentielle des petits signaux. Elles sont indépendantes de l’amplitude sinusoïdale transitoire. La polarisation CC de la source et la forme d’onde transitoire doivent également être choisies délibérément. Voir [les analyses](../Simulation-Analyses/) et [le tutoriel sur les sources](../SPICE-Tutorial-03/).

Les nouvelles sources et sondes utilisent un écart compact de 8 mm entre les bornes. Les anciens grands contrôles proposent l’option **Utiliser un symbole compact (Use compact symbol)** dans leur éditeur inférieur. La conversion conserve la première borne ancrée et prolonge les connexions existantes jusqu’aux bornes redimensionnées en une seule modification annulable. Vérifiez ces connexions après avoir changé la taille.

## Sondes et masse
{: #probes-and-ground}

| Outil dans **Simulation → SPICE** | Connexion | Signification |
| --- | --- | --- |
| **Insérer une sonde (Insert Probe)** | Une pointe sur un réseau | Tension par rapport à la masse 0 |
| **Insérer une sonde différentielle (Insert Differential Probe)** | + et − sur deux réseaux | `V(+) − V(−)` |
| **Insérer une sonde de courant (Insert Current Probe)** | En série dans une branche | Courant de + vers − |
| **Insérer une masse (Insert Ground)** | Sur le réseau de référence du circuit | Connecte le symbole d’alimentation Terre avec la valeur 0 |

L’insertion d’une sonde ou d’une masse s’aligne sur un fil et le divise au point de connexion. Vérifiez l’emplacement réel de la pointe et la polarité. Une sonde de courant est une **source de tension idéale de zéro volt** : elle doit être en série. La placer aux bornes d’une alimentation crée un court-circuit. Supprimez ou interrompez le fil parallèle d’origine lors de l’insertion d’une mesure en série.

Les panneaux de sonde permettent de sélectionner l’acquisition et le mode d’affichage. Les signaux du point de fonctionnement peuvent afficher des valeurs scalaires ; les résultats CA complexes peuvent être affichés sous forme réelle, en module, en dB et en phase. Si le résultat requis est absent ou correspond à un circuit modifié, le panneau explique pourquoi il est indisponible ou nécessite une nouvelle exécution.

### Sources commandées
{: #controlled-sources}

**Insérer une source commandée (Insert Controlled Source)** permet d’ajouter une source de tension commandée en tension (**E**) ou une source de courant commandée en tension (**G**). Les broches de sortie sont +/−, numérotées 1/2 ; les broches de commande sont C+/C−, numérotées 3/4. Connectez les deux côtés de l’entrée de commande et vérifiez la caractéristique de transfert dans l’éditeur. Un port de commande n’est pas une borne de sortie d’alimentation.

## Équipement de laboratoire virtuel
{: #virtual-laboratory-equipment}

Choisissez ces outils dans **Simulation → Équipement de laboratoire (Lab Equipment)**. Ce sont des modèles opérationnels dotés de commandes d’acquisition. Les illustrations portant des noms similaires dans **Standard → Test et mesure (Test & Measurement)** servent à représenter la disposition d’un banc physique et n’effectuent pas de mesures de simulation.

Pour un circuit déjà câblé, téléchargez [Virtual laboratory.dzn](../examples/simulation/virtual-laboratory.dzn) et choisissez **Fichier → Ouvrir (File → Open)**. Il s’agit d’un fichier de démonstration complémentaire, et non d’une entrée nommée dans le navigateur d’exemples fourni.

### Oscilloscope
{: #oscilloscope}

L’oscilloscope comporte deux voies différentielles : **1 A+**, **2 A−**, **3 B+**, **4 B−**. Connectez chaque entrée négative ainsi que son entrée positive. La charge d’entrée par défaut est de **1 MΩ** ; elle peut affecter un circuit à haute impédance.

Utilisez les réglages temps/div et volts/div avec l’affichage de dix divisions horizontales sur huit divisions verticales. Les modes de déclenchement sont **Auto**, **Normal** et **Single**. **Acquérir (Acquire)** demande dix divisions temporelles de données transitoires, avec un pas maximal d’environ temps/div divisé par 100. Modifier l’échelle d’affichage après une exécution ne crée pas de nouvelle acquisition et ne permet pas de récupérer les fronts manquants.

Le couplage CA supprime la moyenne pondérée dans le temps du signal affiché ; il ne s’agit pas d’un modèle physique d’entrée analogique passe-haut. Le couplage GND affiche zéro tandis que la charge de l’instrument reste connectée. Les commandes de temps et de niveau de l’oscilloscope aident à examiner les données ; elles ne transforment pas une exécution sous-échantillonnée en mesure de temporisation valide.

### Multimètre
{: #multimeter}

Utilisez **VΩ et COM** pour mesurer la tension ou la résistance, et **A et COM** pour mesurer le courant. La mesure du courant doit se faire en série. L’entrée de tension par défaut est de **10 MΩ** ; le mode courant utilise une **résistance de charge de 1 Ω** et une source de détection de zéro volt. Le changement de mode modifie donc la charge du circuit et nécessite une nouvelle exécution.

Le mode CC affiche la grandeur continue ou moyenne correspondante. Le mode CA utilise la valeur efficace pondérée dans le temps, après suppression de la composante continue. Une valeur hors plage affiche **OL**. Ces comportements d’instrument sont modélisés, sans simulation de défaillance du fusible ou de surchauffe.

La mesure de résistance est un test temporaire distinct, effectué hors tension. Les sources indépendantes sont supprimées et les connexions de l’instrument sont déconnectées pendant le test. Le réseau pris en charge comprend les éléments R/C/L et les sondes : les condensateurs sont ouverts en CC et les inductances sont des courts-circuits. Les composants actifs ou les modèles non pris en charge rendent le test de résistance indisponible. Ne l’interprétez pas comme une mesure de résistance en circuit d’un appareil électronique quelconque sous tension.

### Générateur de fonctions
{: #function-generator}

Le générateur fournit des formes d’onde sinusoïdales, impulsionnelles/carrées, triangulaires et PWL, avec des réglages d’amplitude, de décalage, de fréquence et de temporisation. Son aperçu montre la forme d’onde **à vide**. Sa **résistance de sortie de 50 Ω** par défaut signifie qu’une charge connectée peut réduire l’amplitude à ses bornes.

La sortie désactivée est approximée par un port ouvert avec une fuite de **1 TΩ**. L’amplitude CA des petits signaux reste distincte de l’amplitude transitoire. Vérifiez si l’amplitude requise est une valeur de crête, crête à crête ou efficace avant de comparer la forme d’onde programmée à une valeur mesurée.

### Alimentation de laboratoire
{: #bench-supply}

Réglez la tension, la limite de courant, la résistance de sortie, l’activation et, éventuellement, le temps de rampe. Le modèle utilise une limitation de courant comportementale progressive et une résistance finie ; le panneau indique les valeurs mesurées de V/I et le fonctionnement **CV/CC**. Une limite de courant inférieure à la demande de la charge réduit la tension fournie.

Elle peut fournir ou absorber du courant dans la même limite. Il ne s’agit ni d’un modèle d’alimentation à découpage d’un fabricant ni d’un modèle thermique. La sortie désactivée est approximée par une fuite de 1 TΩ. Le rampage agit sur l’analyse transitoire ; le point de fonctionnement CC utilise la tension finale programmée.

Les propriétés numériques du générateur et de l’alimentation peuvent être liées à [Circuit Explorer](../Simulation-Charts-and-Measurements/) pour un réglage temporaire ou des conditions de test. La version Desktop peut afficher les panneaux d’instruments dans des fenêtres séparées ; le détachement des graphiques est disponible dans les deux produits.

## La charge fait partie de l’expérience
{: #loading-is-part-of-the-experiment}

Une sonde de tension parfaite et une entrée d’oscilloscope chargée ne produisent pas le même circuit. Avant de comparer les résultats, tenez compte de l’impédance du générateur, de la résistance de charge du multimètre, de la charge d’entrée de l’oscilloscope et des retours partagés. Utilisez une mesure différentielle lorsque aucune des deux extrémités du signal n’est reliée à la masse. Si l’exécution échoue après l’ajout d’un instrument, vérifiez son câblage et son mode avant de modifier les paramètres du solveur.
