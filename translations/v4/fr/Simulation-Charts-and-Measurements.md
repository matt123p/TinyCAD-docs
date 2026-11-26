---
layout: default
---
# Graphiques, mesures et Circuit Explorer
{: #charts-measurements-and-circuit-explorer}

Après une [exécution de simulation](../Simulation/), utilisez les graphiques pour explorer la forme d’onde et les mesures nommées pour consigner des grandeurs reproductibles. Circuit Explorer ajoute le réglage temporaire, les exécutions répétées, les exigences et les rapports d’étude.

Ouvrez **Feuille de simulation → Configuration**, puis faites défiler jusqu’à **Circuit Explorer**. Utilisez **Ajouter des outils** pour ajouter Mesures, Réglage / balayage, Exigences, Superposition CC ou Laboratoire d’analyse, selon les besoins. Les outils configurés apparaissent dans la liste de gauche. **Masquer l’outil** masque ses commandes tout en conservant ses paramètres enregistrés. Les graphiques restent dans le panneau séparé à droite.

## Afficher et organiser les graphiques
{: #show-and-arrange-charts}

Dans le navigateur et dans Desktop, choisissez **Simulation → Afficher les graphiques** dans la barre d’outils. Desktop propose aussi **Affichage → Afficher les graphiques**. Faites glisser le bord gauche du panneau **Graphiques de simulation** à droite pour le redimensionner. Sélectionnez une configuration et une acquisition ; utilisez **Exécuter** ou **Arrêter** sans quitter le schéma.

Les graphiques de sonde sont ajoutés automatiquement. Sans sondes, une configuration reçoit un graphique de sortie. Utilisez **Ajouter un graphique** pour ajouter une autre sonde ou une vue personnalisée, puis **Choisir les signaux**. Les titres des graphiques sont modifiables. Une analyse à plusieurs tracés, comme le bruit, comporte un sélecteur de tracé de résultat.

Cliquez sur les entrées de légende pour masquer les courbes. La tension, le courant et les autres unités utilisent des axes étiquetés ; ne lisez pas un courant sur l’échelle de tension. Les données AC complexes peuvent afficher les parties réelle/imaginaire, le module, les dB ou la phase. Le module de sortie en dB ne représente pas automatiquement un gain de transfert, sauf si l’entrée est normalisée de manière appropriée.

Utilisez la molette/le pincement pour zoomer, faites glisser pour déplacer la vue, utilisez **Maj-clic-glisser** pour sélectionner une région et **Ajuster** pour rétablir la vue. Les curseurs numériques permettent d’inspecter les positions des échantillons. Les résultats volumineux utilisent des données d’affichage réduites pour offrir une vue d’ensemble réactive ; le zoom affine cette vue. Les références épinglées compatibles apparaissent en superposition sous forme de pointillés.

### Détacher et exporter
{: #pop-out-and-export}

**Détacher le graphique** ouvre une fenêtre indépendante dans les deux produits. Plusieurs graphiques peuvent être détachés. La fermeture d’une fenêtre détachée ramène le graphique dans le panneau ; × sur un graphique ancré supprime le graphique. Les graphiques détachés partagent les données de résultat actuelles et ne lancent pas de simulations distinctes.

**Télécharger le CSV** exporte tous les échantillons conservés des signaux sélectionnés ainsi que leur échelle, y compris les valeurs imaginaires. L’export est indépendant du zoom d’affichage ou de l’échantillonnage. Les graphiques principaux proposent également un téléchargement **PNG**. Joignez la configuration, l’acquisition et les unités sélectionnées au rapport afin que le lecteur sache quelle expérience les données décrivent.

## Essayer l’étude RC préparée
{: #try-the-prepared-rc-investigation}

Téléchargez [RC low-pass.dzn](../examples/simulation/rc-low-pass.dzn), ouvrez-le via **Fichier → Ouvrir**, puis exécutez-le. Ce fichier compagnon est distinct de l’exemple de tutoriel fourni nommé **rc-ac**. Il comprend des définitions préparées de mesures, d’exigences et de réglage.

Avec R1 = 1 kΩ et C = 1 µF, la fréquence de coupure nominale est d’environ 159,15 Hz. **Mesures** comprend la coupure, le gain à 100 Hz et la phase à la fréquence de coupure idéale ; **Exigences** vérifie que la fréquence de coupure se situe entre 150 et 170 Hz.

![Commandes de réglage de Circuit Explorer dans le schéma RC compagnon](../Images/simulation/explorer-tuning.png)

## Régler sans modifier le circuit enregistré
{: #tune-without-changing-the-saved-circuit}

Dans **Réglage / balayage**, sélectionnez un composant et une propriété numérique, puis **Ajouter une commande de réglage**. La sélection d’un composant dans le schéma le présélectionne dans le sélecteur. Vous pouvez également associer des paramètres de source/instrument pris en charge et des paramètres nommés de configuration. Le texte arbitraire, les expressions et le contenu des fichiers de modèle ne peuvent pas être utilisés comme cibles de curseur.

Les commandes prennent en charge les unités, les limites, les échelles linéaires/logarithmiques et l’arrondi aux valeurs préférentielles E12/E24/E96. Après une modification, une exécution est planifiée au bout d’environ 500 ms. Les valeurs temporaires sont distinctes des valeurs enregistrées des composants.

- **Annuler le réglage** revient à la dérogation temporaire précédente.
- **Réinitialiser** restaure les valeurs et l’acquisition d’origine.
- **Appliquer** écrit les dérogations dans le dessin en une seule modification annulable.

Une propriété numérique n’influe sur le circuit que si le gabarit SPICE du composant l’utilise effectivement. Ne supposez pas que la modification d’un attribut inutilisé change le modèle.

### Balayages à une variable
{: #one-variable-sweeps}

Développez **Balayage à une variable** et choisissez une commande. Utilisez 2 à 100 points linéaires/logarithmiques ou 1 à 100 valeurs explicites, séparées par des espaces ou des points-virgules. **Exécuter le balayage** lance l’analyse sélectionnée pour chaque valeur. **Annuler** arrête la planification de nouveaux cas et conserve les résultats déjà obtenus.

Le fichier RC compagnon prépare les valeurs 1 kΩ, 2,2 kΩ, 4,7 kΩ, 6,8 kΩ et 10 kΩ. Leurs fréquences de coupure idéales sont respectivement d’environ 159,15, 72,34, 33,86, 23,41 et 15,92 Hz. Comparez les superpositions ou une mesure nommée en fonction de la valeur du paramètre. Cela diffère de l’[analyse de balayage CC](../Simulation-Analyses/#dc-sweep), qui fait varier une source indépendante dans le cadre d’une analyse CC.

Les définitions de balayage, les valeurs, les unités, l’état d’exécution et les mesures capturées sont enregistrés dans `.dzn`. **Balayage enregistré** permet de revenir à un groupe. La suppression des résultats bruts supprime les superpositions de formes d’onde, mais les tableaux de valeurs scalaires capturées et les métadonnées du rapport peuvent être conservés. Jusqu’à 100 groupes de balayage sont conservés, sous réserve des limites habituelles d’acquisition et de données.

## Définir des mesures nommées
{: #define-named-measurements}

Dans **Mesures**, ajoutez un nom, sélectionnez un signal/composant et développez ses paramètres. Définissez une fenêtre temporelle/fréquentielle pertinente ainsi que les niveaux ou références nécessaires. Les associations aux composants/sondes utilisent l’identité de la feuille et la référence afin de pouvoir être conservées après réouverture.

![Mesures préparées de coupure, de gain et de phase](../Images/simulation/explorer-measurements.png)

| Mesure | Interprétation |
| --- | --- |
| Valeur, minimum, maximum, crête à crête | Valeur du signal à une position, ou valeurs extrêmes dans la fenêtre choisie |
| Moyenne, RMS, RMS de l’ondulation | Grandeurs transitoires pondérées dans le temps ; le RMS de l’ondulation élimine la moyenne |
| Intégrale | Aire dans le temps ; l’intégration de watts donne des joules |
| Temps de montée/descente | Première transition complète de 10 à 90 % entre les niveaux bas/haut déclarés |
| Période, fréquence, rapport cyclique, largeur d’impulsion | Premier cycle/impulsion complet utilisant un seuil explicite ou le niveau médian de la fenêtre |
| Retard | Premier franchissement montant de la sortie moins le premier franchissement de référence, au même seuil |
| Dépassement/sous-dépassement | Écart par rapport aux niveaux initial/final déclarés et à l’amplitude du saut |
| Temps d’établissement | Dernière entrée dans la bande de tolérance autour de la valeur finale, mesurée à partir du début de la fenêtre |
| Constante de temps | Premier franchissement de initial + (final − initial) × (1 − 1/e), mesuré à partir du début de la fenêtre |
| Gain/phase AC | Rapport complexe sortie/entrée à la fréquence choisie |
| Coupure/bande passante | Franchissements à mi-puissance, −3,0103 dB par rapport à la référence de gain choisie |
| Résonance | Plus grand pic de module à l’intérieur de la plage ; un maximum à la limite ne constitue pas une résonance déterminée |
| Mesures de réponse supplémentaires | Ondulation de bande passante, atténuation de bande coupée, module de l’impédance de port et retard de groupe |

L’intégration transitoire tient compte des pas de temps inégaux et des extrémités de fenêtre interpolées. Le RMS inclut la composante continue ; le RMS de l’ondulation l’élimine. Le retard peut être négatif lorsque le franchissement de sortie précède celui de référence. Les mesures temporelles nécessitent qu’une partie suffisante de la transition ou du cycle concerné se trouve dans la fenêtre.

Déclarez les niveaux initial/final pour les mesures de saut. Un niveau final incorrect rend les mesures de temps d’établissement et de dépassement trompeuses. Un échantillon final non établi, un franchissement manquant, une association ambiguë, une unité incompatible ou une fenêtre non valide entraîne l’état **indisponible**, et non une valeur zéro inventée.

Pour la coupure, utilisez un gain de référence linéaire explicite ou **crête**. Une référence unitaire convient au simple filtre RC, mais un amplificateur de gain 20 nécessite une autre référence. La bande passante nécessite deux franchissements valides ; l’interpolation fréquentielle est logarithmique. Un pic arbitraire à la limite du balayage ne permet pas de conclure à une résonance.

## Exigences et superpositions CC
{: #requirements-and-dc-overlays}

Utilisez **Exigences** pour tester une mesure nommée avec **au moins**, **au plus** ou une plage **entre** bornes incluses. Les unités doivent correspondre. Les résultats sont **réussi**, **échoué** ou **indisponible** ; une mesure indisponible ne constitue pas une exigence satisfaite.

![Exigence de fréquence de coupure RC avec une plage acceptable explicite](../Images/simulation/explorer-requirements.png)

Sélectionnez une mesure disponible pour examiner les éléments justificatifs et la mise en évidence applicable dans le schéma. Conservez les définitions de mesure, les fenêtres et les seuils avec les résultats exportés. La mise en évidence bidirectionnelle générale des sondes n’est pas complète pour tous les types de signaux ou de modèles.

La superposition CC du schéma nécessite une acquisition du point de fonctionnement récente et terminée. La tension est référencée à 0 ; le sens du courant suit l’ordre des bornes configuré. La puissance consommée est positive, donc une source qui fournit de la puissance peut avoir une puissance négative. Le courant d’une résistance idéale peut être déduit de V/R ; les courants des composants non pris en charge sont omis plutôt qu’inventés.

## Laboratoire d’analyse
{: #analysis-lab}

![Flux de travail du laboratoire d’analyse dans Circuit Explorer](../Images/simulation/analysis-lab.png)

### Réponse fréquentielle et réponse d’amplificateur
{: #frequency-and-amplifier-response}

Choisissez l’entrée/la sortie, la plage de fréquences et la fréquence de lecture. Exécutez l’analyse AC pour examiner le gain, la phase, la coupure, la bande passante, la résonance, le facteur Q du passe-bande et le retard de groupe. Le facteur Q du passe-bande signifie `f₀ / half-power bandwidth`. Les calculs de fonction de transfert utilisent une excitation explicitement nommée. L’impédance de port nécessite une configuration d’essai en tension/courant délibérée ; un rapport de nœuds arbitraire ne constitue pas une mesure de gain de boucle.

### Tolérances et coins
{: #tolerance-and-corners}

Une étude Monte Carlo répète les exécutions avec les distributions de composants configurées : distribution uniforme bornée à ± tolérance ou distribution normale non bornée spécifiée par l’écart type. Définissez une graine aléatoire non signée et entre 2 et 100 cas. La réutilisation de la graine et de la configuration rend l’échantillonnage reproductible. Les groupes entièrement corrélés positivement partagent un tirage normalisé et doivent utiliser un seul type de distribution.

Les valeurs échantillonnées non positives de résistance physique, de capacité, d’inductance ou de fréquence sont des cas échoués. Examinez les échecs au lieu de les exclure silencieusement. La moyenne, l’écart type d’échantillon et les histogrammes décrivent les résultats échantillonnés, et non toutes les pièces susceptibles d’être fabriquées.

La recherche des coins énumère jusqu’à six variables indépendantes, soit 64 coins. Elle ignore les groupes de corrélation Monte Carlo. Le pire résultat observé signalé ne prouve pas qu’il s’agit du pire cas global entre les coins. Le rendement est indicatif et repose sur les hypothèses de modèle/distribution saisies ; une étude sans exigence évaluable ne fournit aucune estimation de rendement.

### Cas de test
{: #test-cases}

Capturez une analyse, des paramètres, des définitions de tracé/mesure/exigence et des associations sous forme de cas. Attribuez aux cas des températures ou des dérogations de paramètres, d’excitation et de charge différentes, puis exécutez la suite. Les cas partagent le **schéma et les modèles actuels** ; il ne s’agit pas de révisions historiques indépendantes du circuit. Chaque exécution consigne l’identité de ses entrées.

Les rapports JSON contiennent les conditions, les résultats et l’historique de l’étude. Les études s’exécutent séquentiellement et peuvent être annulées ; les cas échoués ou non convergés restent visibles. Les définitions, la graine, les conditions des cas et les références de groupes sont conservées dans `.dzn`. Les 100 derniers groupes d’étude sont conservés dans les limites normales de résultats.

### Puissance, rendement et contraintes
{: #power-efficiency-and-stress}

Choisissez les signaux de puissance de composants pris en charge ainsi que des limites explicites de tension, de courant ou de puissance de crête. Les mesures Moyenne/RMS/Intégrale fournissent la puissance moyenne, le courant efficace et l’énergie. Le rendement nécessite une frontière d’entrée d’alimentation correctement signée et une frontière de charge utile consommatrice. Les courants de composants non pris en charge ou ambigus rendent le résultat indisponible.

L’AC petits signaux ne constitue pas un essai de contraintes à grands signaux. Une limite numérique saisie dans TinyCAD n’ajoute ni modèle thermique de boîtier, ni tenue aux impulsions, ni mécanisme de protection. Utilisez des conditions transitoires et des modèles adaptés à la question, et consignez leurs hypothèses dans le rapport.

## Limites actuelles
{: #current-limits}

Les flux de travail implémentés ne comprennent pas l’analyse FFT/de distorsion harmonique, l’injection automatique de défauts, les balayages multidimensionnels sans restriction, l’optimisation automatique ni le mode coopératif Live/Pause. Lors de l’examen des résultats, tenez compte de l’état réel de l’exécution (terminée/arrêtée/échouée) et de la disponibilité effective des données. Consultez la section [dépannage](../Simulation-Troubleshooting/) lorsqu’une mesure ou une acquisition est indisponible.
