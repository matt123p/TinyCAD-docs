---
layout: default
---
# Étiquettes
{: #labels}

Les étiquettes sont des noms de réseau actifs électriquement. Tous les fils portant le même nom d’étiquette sont considérés comme connectés, même si aucun fil physique ne les relie.

Utilisez des étiquettes pour :

- connecter des points éloignés sur la même feuille,
- réduire l’encombrement visuel dans les schémas denses,
- connecter des réseaux entre les feuilles d’un même dessin,
- relier les broches de symboles hiérarchiques aux réseaux internes.

## Fonctionnement des étiquettes
{: #how-labels-work}

- Une étiquette se connecte au fil situé en dessous.
- La connectivité dépend du **texte de l’étiquette**, et non de son emplacement.
- La **forme** de l’étiquette est uniquement un style visuel et ne modifie ni la connectivité, ni la génération de la liste de connexions, ni le comportement du DRC.
- Utilisez le même nom partout où vous souhaitez désigner un seul réseau électrique.

## Conseils pour nommer les étiquettes
{: #label-naming-guidelines}

- Utilisez des noms de réseau explicites, tels que `RESET`, `SCL`, `+5V`, `ADC_IN0`.
- Veillez à utiliser une convention de nommage cohérente dans l’ensemble de la conception.
- Évitez les variations accidentelles (`GND` par rapport à `GN D`, `CLK` par rapport à `Clk`), car elles créent des réseaux distincts.
- Si vos noms contiennent des nombres, les options de nom « Repeat Direction » (direction de répétition) peuvent incrémenter ou décrémenter les suffixes numériques lors du placement répété.

## Formes des étiquettes et raisons de les utiliser
{: #label-shapes-and-why-to-use-them}

TinyCAD propose plusieurs formes d’étiquettes dans les options de l’outil Étiquette (Label). Choisissez la forme pour améliorer la lisibilité et respecter le style de dessin ; toutes les formes sont électriquement équivalentes.

Voici quelques raisons courantes d’utiliser différentes formes :

- distinguer les réseaux réutilisés fréquemment des réseaux locaux utilisés une seule fois,
- faire ressortir visuellement les connexions hors feuille ou entre blocs,
- indiquer le sens ou la fonction d’un signal aux lecteurs,
- respecter le style de schéma de votre équipe ou de votre entreprise.

Règle pratique : choisissez un petit nombre de formes et utilisez-les de manière cohérente afin que les lecteurs puissent parcourir rapidement le schéma.

## Placement et modification des étiquettes
{: #placing-and-editing-labels}

1. Sélectionnez l’outil Étiquette (Label).
2. Saisissez le nom du réseau.
3. Choisissez l’orientation et la forme selon vos besoins.
4. Placez l’étiquette sur le fil cible.
5. Répétez l’opération pour chaque emplacement qui doit être connecté à ce réseau.


## Étiquettes dans les dessins à plusieurs feuilles
{: #labels-with-multi-sheet-drawings}

Dans un fichier de dessin comportant plusieurs feuilles, les étiquettes sont le moyen habituel de connecter les réseaux entre les feuilles.

- Un même nom d’étiquette sur différentes feuilles désigne le même réseau électrique.
- Cette liaison entre feuilles est utilisée lors de la génération des listes de connexions.
- Utilisez des noms stables et sans ambiguïté pour les réseaux partagés (`+3V3`, `GND`, `I2C_SDA`,
	`I2C_SCL`, etc.).

Flux de travail recommandé :

1. Définissez à l’avance les noms de réseau communs.
2. Réutilisez exactement ces mêmes noms sur chaque feuille.
3. Effectuez des vérifications DRC et des contrôles de liste de connexions afin de détecter rapidement les erreurs de nommage.

- Retour à [Dessin](../User-guide/)
- Retour à [Sommaire de v4](../CONTENTS/)
