---
layout: default
---
# Commandes tactiles
{: #touch-controls}

Sur un écran tactile, vous pouvez modifier directement le dessin ou utiliser la loupe pour un placement
plus précis. Ces commandes fonctionnent dans le navigateur et dans l’éditeur de bureau.

## Toucher direct
{: #direct-touch}

- Touchez pour sélectionner ou placer un objet avec l’outil actif.
- Faites glisser un doigt pour déplacer des objets ou effectuer une sélection, comme avec la souris.
- Maintenez un doigt immobile pendant environ une seconde pour ouvrir le menu contextuel du dessin.
- Déplacez deux doigts ensemble pour faire défiler le dessin ; écartez-les ou rapprochez-les en les pinçant pour
  zoomer sur la zone autour du geste.
- Faites glisser l’aperçu d’un symbole depuis le panneau de bibliothèque vers le dessin pour le placer.

## Routage automatique des fils en deux tapotements
{: #auto-route-wires-with-two-taps}
{: #auto-route-wires}

Utilisez **Fil point à point (Point-to-Point Wire)** dans la barre d’outils pour connecter deux broches, ou une broche et un
fil existant, sans placer chaque angle. Touchez le point de connexion de départ,
puis celui de destination. TinyCAD choisit le trajet et place les segments de fil.
Cette fonction est également utile avec une souris, mais elle est particulièrement pratique sur un écran tactile, car
elle réduit le nombre de placements précis nécessaires.

Si les extrémités sont petites ou rapprochées, utilisez la commande **Cliquer (Click)** de la loupe à chaque
extrémité au lieu de toucher directement les broches. Consultez [le routage automatique des fils](../Wires/#auto-routing)
pour connaître la procédure complète et voir un exemple.

## Placement précis avec la loupe
{: #precise-placement-with-the-loupe}
{: #precise-placement-with-the-loupe}

La loupe agrandit la zone autour d’un réticule de visée, afin que votre doigt ne
masque pas le point de connexion que vous essayez d’atteindre.

1. Touchez le dessin si nécessaire pour faire apparaître **Afficher la loupe (Show Loupe)**, puis touchez ce bouton
en bas du dessin.
2. Faites glisser un doigt sur le canevas pour orienter le réticule. Le mouvement est plus lent
   que celui de votre doigt, pour un contrôle plus précis ; lever le doigt laisse le réticule en place.
3. Utilisez les commandes libellées sous la lentille :

   | Commande | Action |
   |---|---|
   | **Cliquer (Click)** | Cliquez au niveau du réticule pour sélectionner un objet ou placer un point avec l’outil actif. |
   | **Faire glisser (Drag)** | Commencez le glissement au niveau du réticule. Faites glisser un doigt sur le canevas pour déplacer le pointeur. |
   | **Déposer (Drop)** | Terminez le glissement. Cette commande remplace **Faire glisser (Drag)** pendant un glissement actif. |
   | **Menu** | Ouvrez le menu contextuel au niveau du réticule. |
   | **Fermer (Close)** | Fermez la loupe et revenez au toucher direct. |

4. Touchez **Masquer la loupe (Hide Loupe)** pour revenir au toucher direct.

![Loupe tactile montrant une zone de connexion agrandie, un réticule et les commandes Cliquer, Faire glisser et Menu.](../images/touch-loupe.png)

Par exemple, pour tracer un fil, choisissez **Fil (Wire)**, orientez le réticule vers la broche de départ, puis touchez
**Cliquer (Click)**. Faites glisser votre doigt pour orienter le réticule vers le point suivant, puis touchez de nouveau **Cliquer (Click)**.
Utilisez **Menu** pour accéder aux commandes contextuelles de l’outil lorsque vous souhaitez terminer ou annuler.

Le déplacement à deux doigts et le zoom par pincement fonctionnent également lorsque la loupe est ouverte. Terminez un
 glissement actif avec **Déposer (Drop)** avant de modifier la vue.

- Retour à [Dessin](../User-guide/)
- Retour au [sommaire de v4](../CONTENTS/)
