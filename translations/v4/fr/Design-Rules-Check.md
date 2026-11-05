---
layout: default
---
# Vérification des règles de conception
{: #design-rules-check}

Dans la version 4, **la vérification des règles de conception fonctionne comme dans la version 3**.

Utilisez la vérification des règles de conception pour détecter les problèmes majeurs de connectivité du schéma avant
de générer des sorties telles que des listes de connexions ou du VHDL.

Elle vérifie le câblage et les combinaisons de types de broches afin de détecter les erreurs électriques courantes (par
exemple, des sorties incompatibles connectées entre elles). Elle ne garantit **pas** que le circuit est fonctionnellement correct.

Visez zéro erreur de conception afin d'accroître la confiance dans la conformité du schéma.

## Exécuter la vérification des règles de conception
{: #run-design-rules-check}

1. Ouvrez votre conception.
2. Exécutez **Vérifier les règles de conception (Check Design Rules)** dans le menu Outils spéciaux (Special tools).
3. Dans la boîte de dialogue des règles, activez ou désactivez les vérifications souhaitées.
4. Sélectionnez **OK** pour lancer la vérification.

{% include video-player.html
	src="/v4/images/video/Video 8.mp4"
	width=1622
	height=952
	caption="Vidéo de démonstration montrant comment lancer et utiliser le vérificateur des règles de conception."
%}


## Interpréter les résultats
{: #reading-the-results}

- Chaque erreur détectée est signalée sur le schéma par un cercle rouge.
- Une liste d'erreurs apparaît à côté de la conception.
- En sélectionnant une erreur dans la liste, le dessin est centré sur l'emplacement correspondant.

## Effacer les erreurs et relancer la vérification
{: #clear-and-re-check}

- Sélectionnez **Fermer (Close)** dans la liste d'erreurs pour supprimer tous les marqueurs d'erreur actuels.
- Les cercles d'erreur sont des marqueurs temporaires de vérification : ils ne sont pas enregistrés avec la
	conception.

- Retour à [Avancé](../Advanced/)
- Retour à [contenu de la version 4](../CONTENTS/)
