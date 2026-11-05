---
layout: default
---
# Aligner sur la grille
{: #snap-to-grid}

L’option Aligner sur la grille fait coïncider la position de la souris avec le point de grille le plus proche lorsque vous
tracez ou placez des éléments. Cela permet de maintenir l’alignement des symboles et des fils et de garantir que
les connexions aboutissent exactement sur des points de connexion valides.

## Pourquoi est-ce important ?
{: #why-it-matters}

- Maintient la connexion entre les extrémités des fils et les broches des symboles : si vous n’utilisez pas l’alignement sur la grille, vous risquez que les fils ne soient pas connectés aux broches.
- Évite les défauts d’alignement visuels qui peuvent sembler corrects, mais qui sont électriquement
	non connectés dans les outils TinyCAD.

Pour les travaux de schéma habituels, l’alignement sur la grille doit rester activé.

## Afficher la grille et activer l’alignement
{: #showing-the-grid-and-enabling-snapping}

Ouvrez le menu de la barre d’outils **Settings** (Paramètres), puis choisissez **Settings** (Paramètres) pour modifier ces
options indépendantes :

- **Show the grid** (Afficher la grille) contrôle l’affichage des points de la grille. La désactivation de cette option ne désactive pas l’alignement.
- **Snap to grid** (Aligner sur la grille) contrôle l’alignement lors du placement et du déplacement des objets. La désactivation de cette option ne masque pas la grille.

Les points de la grille peuvent être masqués lorsque le zoom est trop faible pour qu’ils s’affichent clairement.

![Boîte de dialogue Paramètres avec les cases à cocher distinctes Show the grid et Snap to grid.](../images/grid-settings.png)

Lorsque des objets sont sélectionnés, les touches fléchées les déplacent selon l’espacement de la grille si l’alignement est activé. Si l’alignement est désactivé, ils se déplacent par petits incréments sans être ramenés sur la grille. Maintenez **Ctrl** pour effectuer de petits déplacements, quel que soit le réglage de l’alignement. Si aucun objet n’est sélectionné, les touches fléchées font défiler la vue.

## Espacement de la grille
{: #grid-spacing}

TinyCAD prend en charge 3 modes d’espacement de la grille :

- **Normal grid spacing** (Espacement normal de la grille) : convient à la plupart des modifications de schéma.
- **Fine grid spacing** (Espacement fin de la grille) : densité de points supérieure (deux fois plus de points), utile
	pour les annotations et le dessin de symboles.
- **User grid spacing** (Espacement personnalisé de la grille) : valeur d’espacement personnalisée saisie dans la boîte de dialogue des paramètres,
	en mm ou en pouces, selon les unités utilisées.

Il est recommandé d’utiliser la **grille fine** pour tous les dessins.

- Retour à [Dessin](../User-guide/)
- Retour à [Sommaire de la v4](../CONTENTS/)
