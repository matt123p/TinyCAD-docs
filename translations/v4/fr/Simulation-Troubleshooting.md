---
layout: default
---
# Dépannage de la simulation
{: #simulation-troubleshooting}

Lisez l’état d’acquisition et la sortie de diagnostic avant de modifier les paramètres. Distinguez **une simulation qui a échoué**, **une simulation valide au comportement inattendu** et **une mesure indisponible à partir du résultat sélectionné**. Chacune nécessite des vérifications différentes.

## La simulation ne démarre pas
{: #the-simulation-will-not-start}

| Symptôme | Vérification |
| --- | --- |
| Masse manquante / circuit flottant | Connectez un symbole d’alimentation ou une étiquette de valeur **0**. Une étiquette GND distincte ne correspond pas automatiquement au nœud 0. Vérifiez les retours des sources et les sous-circuits isolés. |
| Modèle de composant manquant | Sélectionnez le symbole et vérifiez **SPICE**. Utilisez un composant de bibliothèque modélisé ou [associez une définition incluse ou personnalisée](../Bundled-SPICE-Models/). |
| Aucun modèle ne correspond à la recherche | Effacez la recherche ou essayez un alias de composant ou une famille de dispositifs. Un symbole SPICE essentials n’affiche que ses modèles vérifiés. |
| Attributs manquants ou brochage incorrect | Examinez les propriétés SPICE du composant et l’ordre réel des bornes du modèle. Les substitutions d’instance peuvent modifier les valeurs par défaut. |
| Modèle/fichier include introuvable | Associez le texte du modèle et ses dépendances à la feuille Simulation en utilisant des noms de fichiers logiques correspondants. Un chemin absolu local ou une URL Web n’est pas récupéré automatiquement. |
| Directives d’analyse dans un composant | Supprimez les textes hérités `.op`, `.tran`, `.ac`, `.end` et de contrôle d’exécution des attributs du composant. La feuille Simulation intégrée gère les paramètres d’analyse. |
| Modèle XSPICE indisponible dans le navigateur | Ouvrez le dessin dans Desktop pour lancer une nouvelle simulation native. Il reste possible d’examiner les résultats enregistrés dans le navigateur. |
| Source ou plage non valide | Vérifiez les champs de forme d’onde, les temps PWL croissants, les valeurs de début/fin, le sens de balayage et les grandeurs positives de fréquence/temps. |

## Le résultat est incorrect ou le solveur ne converge pas
{: #a-result-is-wrong-or-the-solver-does-not-converge}

**Commencez par inspecter le circuit.** Un fil qui dépasse l’extrémité d’un autre fil ou une broche inutilisée peut créer une connexion accidentelle. Vérifiez les jonctions en T, les extrémités réelles des broches, les étiquettes de réseau et les alimentations masquées. Une sonde de courant ou un ampèremètre placé aux bornes d’une source peut la court-circuiter. Utilisez la netlist générée pour déterminer ce que le simulateur a reçu.

Vérifiez l’orientation et l’ordre des broches des modèles : polarité des diodes, collecteur/base/émetteur des BJT, broches d’alimentation des amplificateurs opérationnels et ordre des broches des sous-circuits. Utilisez des références uniques et significatives, puis vérifiez que la référence de source dans un réglage de balayage/bruit/transfert désigne bien la source voulue.

Vérifiez le point de fonctionnement CC avec Operating Point avant d’examiner l’AC. Les boucles de sources idéales, les nœuds flottants, les transitions idéales abruptes et les paramètres de modèle déraisonnables peuvent rendre un circuit difficile, voire impossible, à résoudre. Ajoutez une résistance justifiée physiquement ou des temps de transition finis lorsque cela correspond à l’expérience réelle. Réduisez un circuit complexe au plus petit sous-ensemble qui échoue avant de modifier les options numériques.

Vérifiez les suffixes numériques : **dans le texte SPICE, 1M signifie 1 milli-unité, et non un méga-unité** ; utilisez `1Meg` pour méga. Vérifiez séparément la température, la valeur CC de la source et les paramètres transitoires/AC. L’amplitude transitoire d’une source ne devient pas automatiquement son amplitude AC petit signal.

## La forme d’onde semble incomplète
{: #the-waveform-looks-incomplete}

- Augmentez la durée de la simulation transitoire si le démarrage n’est pas stabilisé ou si la période requise se situe en dehors de la simulation.
- Réduisez le pas maximal pour résoudre les fronts rapides ou les impulsions étroites. Le zoom de l’affichage ne peut pas recréer les échantillons manquants.
- Vérifiez le réglage sélectionné, l’acquisition, le tracé de résultat, la visibilité de la légende, les unités et l’échelle des axes.
- Pour l’AC, utilisez suffisamment de points autour d’une résonance étroite et le rapport entrée/sortie approprié.
- Si la simulation a été interrompue ou a échoué, vérifiez les données réellement disponibles ; une trace partielle ne constitue pas une expérience achevée.

## Les graphiques ou les relevés des sondes sont obsolètes
{: #charts-or-probe-readings-are-stale}

La modification du câblage, des valeurs, du texte du modèle ou des paramètres nécessite une nouvelle **simulation (Run)**. Les acquisitions enregistrées décrivent leurs entrées d’origine. La sélection d’un historique n’annule pas les modifications du dessin. Un tutoriel inclus peut s’ouvrir avec un résultat de référence conservé, avant même que vous lanciez une simulation.

Utilisez **Simulation → Afficher les graphiques (Show charts)**, ou dans Desktop **View → Show Charts**, si le panneau est masqué. La suppression d’un graphique de sonde automatique le laisse supprimé jusqu’à ce que vous l’ajoutiez de nouveau explicitement. Une fenêtre détachée du graphique revient au panneau lorsqu’elle est fermée.

## Une mesure est indisponible
{: #a-measurement-is-unavailable}

Vérifiez son association au signal, son unité, sa fenêtre, son seuil et les niveaux initial et final explicites. Les mesures temporelles nécessitent des franchissements/cycles complets. Une mesure de stabilisation doit se terminer dans la bande finale déclarée. Une mesure de coupure nécessite le franchissement demandé et la référence de gain ; la bande passante nécessite deux franchissements. Une résonance située à la limite du balayage n’est pas résolue. Les vecteurs de courant/puissance de dispositifs non pris en charge ne sont pas devinés.

Une exigence indisponible n’est pas satisfaite. Exportez les conditions et l’état d’échec avec les rapports d’étude, et laissez visibles les cas de tolérance non convergents. Si une étude ne contient aucune exigence évaluable, elle ne fournit aucune estimation de rendement.

## Enregistrer et reproduire une investigation
{: #saving-and-reproducing-an-investigation}

Conservez ensemble le dessin, les modèles associés, les paramètres d’analyse, les paramètres des sources, la température et les acquisitions pertinentes. Si vous avez enregistré le fichier sans résultats numériques ou les avez supprimés pour réduire sa taille, relancez la simulation pour rétablir les graphiques. Les instantanés conservés des valeurs scalaires/rapports ne recréent pas les tableaux de formes d’onde manquants.

Un rapport reproductible indique les hypothèses du modèle, le moteur, la fenêtre de mesure et les conditions. Comparez les résultats aux [valeurs attendues du tutoriel](../Simulation-Tutorials/) et au [manuel officiel de ngspice](https://ngspice.sourceforge.io/docs.html) pour isoler un problème lié au langage du simulateur.
