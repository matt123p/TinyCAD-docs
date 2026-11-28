---
layout: default
---
# Analyses et paramètres de simulation
{: #simulation-analyses-and-settings}

Choisissez une analyse dans l’onglet **Setup** (Configuration) d’une [feuille de simulation](../Simulation/). Sélectionnez-la en fonction de la question à laquelle vous souhaitez répondre. Une onde sinusoïdale dans le domaine temporel et un balayage fréquentiel AC sont deux expériences différentes, même si elles utilisent le même symbole de source.

| Analyse | Question | Résultat principal |
| --- | --- | --- |
| **Operating Point** (Point de fonctionnement) | Quelles sont les tensions et les courants de polarisation en continu ? | Valeurs scalaires |
| **Transient** (Transitoire) | Que se passe-t-il après un changement ou au cours de cycles répétés ? | Signaux en fonction du temps |
| **AC** | Comment un petit signal varie-t-il avec la fréquence ? | Signaux complexes en fonction de la fréquence |
| **DC sweep** (Balayage continu) | Comment le comportement en continu varie-t-il lorsqu’une source indépendante varie ? | Signaux en fonction de la valeur de la source |
| **Noise** (Bruit) | Quel bruit atteint la sortie choisie ? | Tracés du bruit spectral et intégré |
| **Transfer Function** (Fonction de transfert) | Quel est le transfert continu petit signal depuis une source nommée ? | Gain et résistance d’entrée/de sortie |
| **Pole-Zero** (Pôles-zéros) | Où se trouvent les pôles et les zéros du transfert configuré ? | Résultats complexes des pôles/zéros |

## Point de fonctionnement
{: #operating-point}

Le point de fonctionnement détermine une solution continue en régime établi. Les condensateurs idéaux sont des circuits ouverts et les inductances idéales sont des courts-circuits en continu. Les composants non linéaires, tels que les diodes et les transistors, sont résolus à leurs conditions de polarisation. Vérifiez cette analyse avant de tenter de calculer la réponse en fréquence d’un amplificateur à transistors : un transistor mal polarisé sera linéarisé autour d’un état incorrect.

Utilisez **Data** (Données) pour consulter les tensions de nœud et les courants de branche. La tension est relative à la masse 0. Le signe du courant suit l’ordre des bornes déclaré par le composant ; un courant d’alimentation négatif peut simplement signifier que la source fournit de la puissance. Le [tutoriel sur le continu](../SPICE-Tutorial-02/) présente les tensions, les courants et la puissance.

![Résultats scalaires de tension et de courant de l’exécution récente du point de fonctionnement du diviseur](../Images/simulation/simulation-data.png)

## Transitoire : comportement dans le temps
{: #transient-behaviour-over-time}

Réglez **Duration** (Durée) assez longue pour inclure l’événement et la partie de la réponse que vous devez mesurer. Réglez **Maximum step** (Pas maximal) assez petit pour résoudre la caractéristique significative la plus rapide. Pour une impulsion, il peut s’agir de son front plutôt que de sa période de répétition. Un affichage d’aspect régulier ne peut pas restituer des transitions que le solveur n’a pas résolues.

Pour un circuit RC en charge, la constante de temps est `τ = R × C`. Environ cinq constantes de temps suffisent à montrer l’essentiel de la réponse d’établissement d’un système du premier ordre. Pour mesurer l’ondulation ou la valeur efficace, simulez suffisamment de cycles pour atteindre un régime établi et mesurez une fenêtre plus tardive afin de ne pas inclure involontairement le démarrage.

Le solveur utilise des pas de temps adaptatifs. Le pas maximal limite leur taille ; il ne garantit pas une grille d’échantillonnage régulièrement espacée. Les algorithmes de mesure tiennent compte des instants d’échantillonnage réels. Le zoom du graphique modifie l’affichage, et non le pas de temps d’acquisition.

Par défaut, une simulation transitoire commence par déterminer un point de fonctionnement continu. L’option de conditions initiales qui ignore cette étape correspond à **UIC** dans SPICE. Utilisez-la délibérément lorsque l’état initial spécifié fait partie de l’expérience ; ce n’est pas une solution générale à un circuit mal connecté. Consultez [la charge d’un circuit RC](../SPICE-Tutorial-04/) et [le redressement et l’ondulation](../SPICE-Tutorial-06/).

## AC : réponse fréquentielle petit signal
{: #ac-small-signal-frequency-response}

L’analyse AC détermine d’abord le point de fonctionnement, linéarise les composants non linéaires autour de celui-ci, puis calcule la réponse à une perturbation sinusoïdale de faible amplitude. Elle ne balaie **pas** une sinusoïde transitoire de grande amplitude jusqu’à l’écrêtage. Utilisez l’analyse transitoire pour l’écrêtage, la distorsion et les excursions de grand signal.

Définissez les fréquences de début et de fin ainsi que le nombre de points par décade. Un balayage logarithmique est utile pour étudier plusieurs ordres de grandeur. Augmentez la résolution fréquentielle autour d’une résonance étroite ou de fréquences de coupure rapprochées.

Définissez l’**AC amplitude** (amplitude AC) et la phase de la source séparément des paramètres de sa forme d’onde transitoire. Une amplitude AC de **1 V** avec une phase de **0°** facilite l’interprétation du transfert en tension à entrée unique. Une amplitude sinusoïdale transitoire ne suffit pas à activer une excitation AC. Pour une entrée générale, calculez le rapport complexe `V(out) / V(in)` ; la tension de sortie seule ne représente pas toujours le gain.

![Paramètres du balayage AC pour le filtre RC fourni](../Images/simulation/ac-setup.png)

Pour un filtre passe-bas du premier ordre avec R = 1 kΩ et C = 1 µF, `fc = 1 / (2πRC) ≈ 159.15 Hz`. À cette fréquence, un filtre à bande passante unitaire a un gain d’environ 0,707, soit −3,0103 dB, et une phase d’environ −45°. Le [tutoriel sur les filtres](../SPICE-Tutorial-05/) présente le module, le gain en dB et la phase.

![Résultats AC réels d’une exécution récente dans le navigateur de l’exemple RC](../Images/simulation/ac-charts.png)

## Balayage continu
{: #dc-sweep}

Choisissez la **source reference** (référence de source), par exemple `V1`, puis saisissez les valeurs de début, de fin et de pas. La référence identifie une source indépendante de tension ou de courant ; ce n’est pas une étiquette de réseau. Choisissez un pas qui fait évoluer le balayage du début vers la fin.

Un balayage continu résout une succession de conditions de polarisation. Il est utile pour tracer la courbe I–V d’une diode ou la courbe de transfert statique d’un amplificateur. Il ne modélise ni la vitesse de variation de la source ni la charge stockée pendant une rampe. Pour cela, fournissez une forme d’onde variant dans le temps et utilisez l’analyse transitoire.

Cette analyse diffère du **balayage à une variable de Circuit Explorer**, qui exécute plusieurs fois une analyse sélectionnée en faisant varier un composant numérique ou un paramètre de configuration. Par exemple, balayez R1 sur cinq valeurs tout en répétant une analyse AC pour comparer les fréquences de coupure des filtres.

## Bruit
{: #noise}

Spécifiez la source d’entrée et les nœuds de sortie/de référence, puis la plage de fréquences et la résolution. La sortie est une différence de tension ; vérifiez la référence choisie. L’analyse du bruit utilise les contributions de bruit petit signal autour du point de fonctionnement. Elle nécessite des modèles de composants prenant en charge le bruit ; un bloc comportemental idéal sans bruit ne reçoit pas automatiquement le spectre de bruit d’un composant physique.

Sélectionnez le tracé de résultat approprié : la densité **spectrale** et le bruit **intégré** sont des grandeurs différentes. Tenez compte des unités affichées ; une densité d’amplitude en V/√Hz n’est pas une tension tant qu’elle n’a pas été intégrée sur une bande passante définie. Consultez [les études de conception](../SPICE-Tutorial-10/).

## Fonction de transfert et pôles-zéros
{: #transfer-function-and-pole-zero}

**Transfer Function** (Fonction de transfert, `.tf`) utilise une source indépendante explicitement nommée et un port de sortie pour calculer le gain petit signal en continu et les résistances d’entrée/de sortie. Il ne s’agit pas du balayage fréquentiel complet d’une analyse AC. Vérifiez la référence de la source et assurez-vous que la sortie est mesurée par rapport au bon nœud.

L’analyse **Pole-Zero** étudie les pôles et les zéros du transfert petit signal configuré. Le choix du port et du transfert est important : cette analyse ne recherche pas tous les comportements possibles d’un schéma. Interprétez les résultats dans le plan complexe conjointement avec les résultats AC et transitoires, au lieu de les considérer comme un substitut à un modèle correctement polarisé.

## Température, unités et paramètres
{: #temperature-units-and-parameters}

La température de configuration est en **°C**. Elle influe sur les composants dont les modèles prennent en compte la dépendance à la température ; elle n’ajoute pas de physique thermique à un composant idéal. Les paramètres de configuration nommés permettent de réutiliser une valeur numérique dans les expressions SPICE et les paramètres d’exploration compatibles.

Les commandes numériques acceptent la notation d’ingénierie, par exemple `5ms`, `10us` et `1kHz`. Dans le **texte SPICE**, les suffixes suivent les règles de SPICE : `k` signifie kilo, `u` micro, `n` nano et **`m` ou `M` signifie milli**. Écrivez **`Meg`** pour méga, par exemple `1Meg` pour un mégaohm. Ne supposez pas que `1M` signifie un million.

Un calcul direct de constante de temps ou de fréquence de coupure constitue une vérification utile. Il ne dispense pas de tenir compte des charges : la résistance de sortie d’un générateur, la résistance d’entrée d’un appareil de mesure ou l’étage suivant peuvent modifier la réponse réelle.

Pour connaître la syntaxe complète des analyses et le comportement des modèles, consultez le [manuel officiel de ngspice](https://ngspice.sourceforge.io/docs.html). Pour les commandes de TinyCAD, poursuivez avec [sources et instruments](../Simulation-Sources-and-Instruments/) ou [graphiques et mesures](../Simulation-Charts-and-Measurements/).
