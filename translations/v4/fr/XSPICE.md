---
layout: default
---
# XSPICE et simulation numérique
{: #xspice-and-digital-simulation}

XSPICE étend ngspice avec des modèles de code et un système de simulation piloté par événements, coordonné avec le solveur analogique. Il est utile pour les portes, les horloges, le stockage et les systèmes mixtes analogiques/numériques. Consultez la [présentation officielle de XSPICE](https://ngspice.sourceforge.io/xspice.html) pour en savoir plus sur l’architecture en amont.

**XSPICE est pris en charge dans TinyCAD Desktop, mais pas dans les versions pour navigateur.** Le moteur natif de Desktop comprend les bibliothèques de modèles de code fournies.

*Consultation des résultats enregistrés :* un navigateur peut tout de même ouvrir un dessin contenant une acquisition XSPICE antérieure. Vous pouvez ainsi examiner les résultats enregistrés ; l’exécution de la simulation nécessite Desktop.

## Choisir le bon modèle logique
{: #choose-the-right-logic-model}

| Approche | Fonctionnement | Utilisation |
| --- | --- | --- |
| **Logique numérique** et **Blocs fonctionnels** fournis | Modèles SPICE comportementaux analogiques portables, avec alimentations et seuils configurés | Études au niveau système dans le navigateur et dans Desktop |
| Symboles/modèles du tutoriel XSPICE | Logique pilotée par événements, délais, stockage et ponts analogiques/numériques explicites | Simulation mixte native dans Desktop |

Des portes d’apparence similaire peuvent donc avoir des contrats de modélisation différents. Ne remplacez pas l’une par l’autre uniquement en vous fondant sur leur apparence. Aucune de ces approches ne permet d’exécuter le micrologiciel d’une carte ESP32, Raspberry Pi ou Arduino représentée en image. L’intégration TinyCAD n’est pas un environnement général d’exécution de HDL ou de logiciels embarqués.

## Nœuds analogiques et numériques
{: #analogue-and-digital-nodes}

Les nœuds analogiques transportent des tensions/courants à valeurs continues. Les nœuds d’événements numériques transportent des états. Un **pont ADC** applique des seuils pour convertir une entrée analogique en états numériques ; un **pont DAC** reconvertit un état numérique en niveau de sortie analogique. Ces ponts décrivent la conversion entre domaines du simulateur, et pas nécessairement un dispositif ADC/DAC physique complet.

Vérifiez les seuils, les niveaux d’alimentation et la charge de sortie. Une tension située entre les seuils logiques valides peut produire un état inconnu. Le stockage peut rester inconnu tant que les conditions d’horloge/réinitialisation ne l’ont pas établi. Un état inconnu constitue une information de diagnostic utile ; le remplacer par un 0 supposé peut masquer un véritable problème de synchronisation ou d’initialisation.

Le délai de propagation rend le temps important. Des portes présentant des délais de chemin différents peuvent provoquer un aléa, même si la table de vérité statique semble correcte. Choisissez un pas maximal d’analyse transitoire qui permette de résoudre la réponse analogique et les temporisations que vous souhaitez mesurer. Ne déduisez pas un délai d’événement à partir d’un affichage trop grossier.

## Suivre le cours sur le numérique
{: #run-the-digital-course}

1. Dans Desktop, choisissez **Fichier → Ouvrir un exemple (File → Open Example) → Tutoriel XSPICE et simulation numérique**.
2. Ouvrez le dessin indiqué dans la leçon. Les symboles, les déclarations de modèles de code et les résultats conservés sont inclus.
3. Lisez l’explication avec **Affichage → Afficher l’explication (View → View Explanation)**, puis sélectionnez sa feuille Simulation.
4. Choisissez **Exécuter (Run)** pour lancer une nouvelle acquisition native, puis comparez les états et les temporisations avec ceux de la leçon.
5. Enregistrez une copie avant de modifier les seuils, les délais, la réinitialisation ou la temporisation de l’horloge.

Le [tutoriel XSPICE en six chapitres](../XSPICE-Tutorial/) couvre les ponts et le premier lancement, les portes et les tables de vérité, les aléas, les bascules, les compteurs et le filtrage mixte. Il comprend des schémas de circuit, des graphiques de solveur et des ressources téléchargeables.

## Références en amont
{: #upstream-reference}

Consultez la [documentation et le manuel officiels de ngspice](https://ngspice.sourceforge.io/docs.html) pour connaître la syntaxe des modèles de code et les ports pris en charge. Le [guide pratique XSPICE](https://ngspice.sourceforge.io/xspicehowto.html) traite du développement de modèles de code, et la page [Utilisation de XSPICE](https://ngspice.sourceforge.io/xspiceusage.html) propose d’autres exemples et informations générales. Ces ressources décrivent ngspice dans son ensemble. TinyCAD utilise ses modules natifs fournis ; il ne charge pas de modèles de code compilés arbitraires fournis par l’utilisateur au moyen d’une pièce jointe à un dessin.
