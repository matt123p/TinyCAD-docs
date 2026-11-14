---
layout: default
---
# Dépannage de la simulation
{: #simulation-troubleshooting}

Lisez l’état d’acquisition et la sortie de diagnostic avant de modifier les paramètres. Distinguez **une exécution ayant échoué**, **une exécution valide au comportement inattendu** et **une mesure indisponible à partir du résultat sélectionné**. Ces situations nécessitent des vérifications différentes.

## La simulation ne démarre pas
{: #the-simulation-will-not-start}

| Symptôme | Vérification |
| --- | --- |
| Masse manquante / circuit flottant | Connectez un symbole d’alimentation ou une étiquette dont la valeur est **0**. Une étiquette GND distincte ne correspond pas automatiquement au nœud 0. Vérifiez les retours des sources et les sous-circuits isolés. |
| Modèle de composant manquant | Utilisez un composant de bibliothèque doté d’un modèle, ou fournissez un modèle et un gabarit. Les images d’équipement ne sont pas des modèles de simulation. |
| Attributs manquants ou correspondance des broches non valide | Examinez les propriétés SPICE du composant ainsi que l’ordre réel des bornes du modèle. Les substitutions d’instance peuvent modifier les valeurs par défaut. |
| Modèle/fichier inclus introuvable | Joignez le texte du modèle et ses dépendances à la feuille Simulation en utilisant des noms de fichiers logiques correspondants. Un chemin absolu local ou une URL web n’est pas récupéré automatiquement. |
| Directives d’analyse dans un composant | Supprimez les textes obsolètes `.op`, `.tran`, `.ac`, `.end` et de contrôle d’exécution des attributs du composant. La feuille Simulation intégrée gère les paramètres d’analyse. |
| Modèle XSPICE indisponible dans le navigateur | Ouvrez le dessin dans Desktop pour lancer une nouvelle simulation native. Il reste possible d’examiner les résultats enregistrés dans le navigateur. |
| Source ou plage non valide | Vérifiez les champs de forme d’onde, les temps PWL croissants, les valeurs de début/fin, le sens du balayage ainsi que les grandeurs positives de fréquence/temps. |

## Le résultat est incorrect ou le solveur ne converge pas
{: #a-result-is-wrong-or-the-solver-does-not-converge}

**Examinez d’abord le circuit.** Un fil qui dépasse l’extrémité d’un autre fil ou une prise inutilisée peut créer une connexion accidentelle. Vérifiez les jonctions en T, les extrémités réelles des broches, les étiquettes de réseau et les alimentations masquées. Une sonde de courant ou un ampèremètre placé aux bornes d’une source peut la court-circuiter. Utilisez la netlist générée pour déterminer ce que le simulateur a reçu.

Vérifiez l’orientation et l’ordre des modèles : polarité de la diode, collecteur/base/émetteur du BJT, broches d’alimentation de l’amplificateur opérationnel et ordre des broches du sous-circuit. Utilisez des références uniques et explicites, et vérifiez que la référence de source dans une configuration de balayage/bruit/transfert désigne bien la source voulue.

Vérifiez la polarisation continue avec le point de fonctionnement avant d’examiner l’AC. Les boucles de sources idéales, les nœuds flottants, les transitions idéales abruptes et les paramètres de modèle irréalistes peuvent rendre un circuit difficile, voire impossible, à résoudre. Ajoutez une résistance justifiée physiquement ou des temps de transition finis lorsque cela correspond à l’expérience réelle. Réduisez un circuit complexe à la plus petite section qui échoue avant de modifier les options numériques.

Vérifiez les suffixes numériques : **dans le texte SPICE, 1M correspond à 1 milli-unité, et non à un méga-unité** ; utilisez `1Meg` pour méga. Examinez séparément la température, la valeur continue de la source et les paramètres transitoires/AC. L’amplitude transitoire d’une source ne devient pas automatiquement son amplitude AC petit signal.

## La forme d’onde semble incomplète
{: #the-waveform-looks-incomplete}

- Augmentez la durée de l’analyse transitoire si le régime de démarrage n’est pas stabilisé ou si le cycle requis se situe hors de la durée d’exécution.
- Réduisez le pas maximal pour résoudre les fronts rapides ou les impulsions étroites. Le zoom d’affichage ne peut pas recréer les échantillons manquants.
- Vérifiez la configuration sélectionnée, l’acquisition, le tracé de résultat, la visibilité de la légende, les unités et la plage des axes.
- Pour l’AC, utilisez suffisamment de points près d’une résonance étroite et le rapport entrée/sortie approprié.
- Si l’exécution a été arrêtée ou a échoué, vérifiez la disponibilité réelle des données ; une trace partielle ne constitue pas une expérience achevée.

## Les graphiques ou les relevés des sondes sont obsolètes
{: #charts-or-probe-readings-are-stale}

Toute modification du câblage, des valeurs, du texte du modèle ou de la configuration nécessite une nouvelle **exécution (Run)**. Les acquisitions enregistrées décrivent leurs entrées d’origine. La sélection de l’historique n’annule pas les modifications du dessin. Un tutoriel fourni peut s’ouvrir avec un résultat de référence conservé, avant même que vous lanciez votre propre simulation.

Utilisez **Simulation → Afficher les graphiques (Show charts)**, ou dans Desktop **View → Afficher les graphiques (Show Charts)**, si le panneau est masqué. La suppression d’un graphique de sonde automatique le laisse supprimé jusqu’à ce que vous l’ajoutiez de nouveau explicitement. Un graphique détaché revient dans le panneau à sa fermeture.

## Une mesure est indisponible
{: #a-measurement-is-unavailable}

Vérifiez son association au signal, son unité, sa fenêtre, son seuil et les niveaux initial/final explicitement définis. La mesure du temps nécessite des croisements/cycles complets. Une mesure de stabilisation doit se terminer à l’intérieur de la bande finale déclarée. La fréquence de coupure nécessite le croisement demandé et la référence de gain ; la bande passante nécessite deux croisements. Une résonance à la limite du balayage n’est pas résolue. Les vecteurs de courant/puissance des dispositifs non pris en charge ne sont pas devinés.

Une exigence indisponible ne constitue pas une réussite. Exportez les conditions et l’état d’échec avec les rapports d’étude, et laissez visibles les cas de tolérance non convergents. Si une étude ne comporte aucune exigence évaluable, elle ne fournit aucune estimation de rendement.

## Enregistrer et reproduire une investigation
{: #saving-and-reproducing-an-investigation}

Conservez ensemble le dessin, les modèles joints, les paramètres d’analyse, les paramètres de source, la température et les acquisitions pertinentes. Si vous avez enregistré sans les résultats numériques ou les avez supprimés pour réduire la taille du fichier, relancez la simulation pour restaurer les graphiques. Les instantanés conservés de valeurs scalaires et de rapports ne recréent pas les tableaux de formes d’onde manquants.

Un rapport reproductible indique les hypothèses du modèle, le moteur, la fenêtre de mesure et les conditions. Pour isoler un problème de langage du simulateur, comparez avec les [valeurs attendues du tutoriel](../Simulation-Tutorials/) et le [manuel officiel de ngspice](https://ngspice.sourceforge.io/docs.html).
