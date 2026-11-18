---
layout: default
---
# Étiquettes
{: #labels}

Les étiquettes sont des noms de nets électriquement actifs. Tous les fils portant le même nom d’étiquette sont
considérés comme connectés, même si aucun fil physique ne les relie.

Utilisez les étiquettes pour :

- connecter des points éloignés sur la même feuille,
- réduire l’encombrement visuel dans les schémas denses,
- connecter des nets entre les feuilles d’un même dessin,
- relier les broches des symboles hiérarchiques aux nets internes.

## Fonctionnement des étiquettes
{: #how-labels-work}

- Une étiquette se connecte au fil situé en dessous.
- La connectivité dépend du **texte de l’étiquette**, et non de son emplacement.
- La **forme** de l’étiquette est uniquement un style visuel et ne modifie pas la connectivité,
	la génération de netlist ni le comportement du DRC.
- Utilisez le même nom partout où vous souhaitez désigner un seul net électrique.

## Conseils pour nommer les étiquettes
{: #label-naming-guidelines}

- Utilisez des noms de nets explicites tels que `RESET`, `SCL`, `+5V`, `ADC_IN0`.
- Assurez la cohérence des noms dans l’ensemble du schéma.
- Évitez les variantes accidentelles (`GND` vs `GN D`, `CLK` vs `Clk`), car elles
	créent des nets différents.
- Si vos noms comportent des nombres, le placement répété peut incrémenter ou décrémenter
	les suffixes numériques à l’aide des options de nom de Repeat Direction.

## Formes des étiquettes et raisons de les utiliser
{: #label-shapes-and-why-to-use-them}

TinyCAD propose plusieurs formes d’étiquettes dans les options de l’outil Étiquette. Choisissez une forme
pour faciliter la lecture et respecter le style de dessin ; toutes les formes sont électriquement équivalentes.

Raisons courantes d’utiliser différentes formes :

- distinguer les nets réutilisés fréquemment des nets locaux utilisés une seule fois,
- faire ressortir visuellement les connexions hors feuille ou entre blocs,
- indiquer le sens ou la fonction d’un signal aux lecteurs,
- respecter le style de schéma de votre équipe ou de votre entreprise.

Conseil pratique : choisissez un petit ensemble de formes et utilisez-les de manière cohérente afin que les lecteurs
puissent parcourir rapidement le diagramme.

## Placement et modification des étiquettes
{: #placing-and-editing-labels}

1. Sélectionnez l’outil Étiquette.
2. Saisissez le nom du net.
3. Choisissez l’orientation et la forme selon vos besoins.
4. Placez l’étiquette sur le fil cible.
5. Répétez l’opération pour chaque emplacement devant être connecté à ce net.


## Étiquettes dans les dessins à plusieurs feuilles
{: #labels-with-multi-sheet-drawings}

Dans un fichier de dessin à plusieurs feuilles, les étiquettes sont le moyen habituel de connecter les nets entre
les feuilles. Consultez [Dessins à plusieurs feuilles](../Multiple-Sheet-Drawings/) pour un exemple détaillé et une vidéo sur la gestion des feuilles et les étiquettes entre feuilles.

- Un même nom d’étiquette sur différentes feuilles désigne le même net électrique.
- Cette liaison entre feuilles est utilisée lors de la génération des netlists.
- Utilisez des noms stables et sans ambiguïté pour les nets partagés (`+3V3`, `GND`, `I2C_SDA`,
	`I2C_SCL`, etc.).

Flux de travail recommandé :

1. Définissez à l’avance les noms des nets communs.
2. Réutilisez exactement ces noms sur chaque feuille.
3. Effectuez des vérifications DRC/de netlist pour détecter rapidement les erreurs de nommage.

- Retour à [Dessin](../User-guide/)
- Retour à [Sommaire de la v4](../)
