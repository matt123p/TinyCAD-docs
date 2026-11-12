---
layout: default
---
# Fils
{: #wires}

Les fils sont les connexions électriquement actives d’un schéma TinyCAD.

Si vous avez besoin de connectivité pour le DRC, la génération de netlists, l’exportation SPICE/PCB ou la liaison entre feuilles,
utilisez des objets fil (et non des lignes d’annotation).

## Pourquoi les fils sont importants
{: #why-wires-matter}

- Les fils définissent les réseaux électriques.
- Les fils s’aimantent sur les broches des symboles et les autres points de connexion valides.
- TinyCAD utilise la connectivité des fils pour la vérification des règles et la génération des sorties.

L’utilisation de lignes d’annotation au lieu de fils peut sembler correcte visuellement, mais le circuit sera électriquement déconnecté pour les outils.

## Modes de routage des fils
{: #wire-routing-modes}
{: #wire-routing-modes}

Dans TinyCAD v4.0.11, utilisez le sélecteur à côté de Fil (Wire) pour choisir comment dessiner les nouveaux segments.

| Mode | Comportement |
|---|---|
| **90°** | Routage horizontal et vertical. |
| **45°** | Routage limité aux directions à 45° de TinyCAD. |
| **Libre** | Segments droits à n’importe quel angle. |

Le choix d’un mode active l’outil Fil et conserve tout aperçu de fil actif. Vous pouvez changer de mode avant de placer le segment suivant. L’aimantation à la grille reste un réglage distinct. Pour le routage automatique entre deux points de connexion, utilisez l’[outil Fil point à point](#auto-routing) voisin.

![Sélecteur de la barre d’outils Fil affichant les choix 90°, 45° et Libre.](../images/wire-routing-modes.png)

## Placement des fils
{: #placing-wires}
{: #placing-wires}

1. Sélectionnez l’outil Fil.
2. Cliquez pour commencer à partir d’un point de connexion valide — bien que cela ne soit pas strictement nécessaire. Vous pouvez placer un fil n’importe où. Vous pouvez savoir si le point de connexion est valide, car un cercle rouge indique la connexion.
3. Cliquez pour placer des angles/segments selon vos besoins.
4. Terminez sur un autre point de connexion valide OU
5. Faites un clic droit pour quitter le mode de câblage.


{% include video-player.html
	src="/v4/images/video/Video 4.mp4"
	width=1602
	height=696
	caption="Tutoriel vidéo montrant comment placer des fils."
%}

<p>
	<a href="/v4/examples/Simple%20Drawing.dsn" class="btn btn-primary" download>
		<i class="bi bi-download me-1" aria-hidden="true"></i>&nbsp;Télécharger
	</a>
</p>


## Routage automatique avec Fil point à point
{: #auto-routing-with-point-to-point-wire}
{: #auto-routing}

**Fil point à point** choisit un itinéraire entre deux points de connexion et place les segments de fil à votre place. Cet outil est utile pour le travail quotidien à la souris et particulièrement sur un écran tactile, où il est plus facile de toucher deux extrémités que de placer chaque angle.

1. Sélectionnez **Fil point à point**, à côté du sélecteur de mode Fil dans la barre d’outils.
2. Cliquez ou touchez la broche du symbole de départ ou un fil existant. Un cercle rouge indique un point de connexion valide.
3. Déplacez le pointeur vers la broche ou le fil de destination pour afficher un aperçu de l’itinéraire automatique.
4. Cliquez ou touchez la destination pour placer la connexion complète. TinyCAD sélectionne les nouveaux segments de fil et quitte l’outil de routage. Sélectionnez de nouveau **Fil point à point** pour créer une autre connexion.

Contrairement à l’outil Fil ordinaire, les deux extrémités doivent être des points de connexion valides ; cliquer dans un espace vide ne place pas un angle. Faites un clic droit pour annuler un itinéraire inachevé. Si vous souhaitez choisir vous-même les angles, utilisez [Fil](#placing-wires).

Essayez le [dessin d’exemple de routage automatique](../examples/Auto-route%20example.dsn). La résistance et la LED sont placées sur la grille, mais leur connexion reste ouverte.

Sélectionnez d’abord Point-to-Point Wire, puis la broche de droite de R1.

![1. Au départ, R1 et D1 ne sont pas reliés. Le cercle rouge indique la broche de départ sur R1.](../images/wire-auto-route-start.png){: width="435" style="max-width: 50%;"}

Pointez ensuite la broche supérieure de D1. L’aperçu montre le trajet et son angle avant de valider la connexion.

![2. Prévisualisez le trajet automatique vers D1. Le cercle rouge indique la broche d’arrivée.](../images/wire-auto-route.png){: width="435" style="max-width: 50%;"}

Enfin, cliquez ou touchez la broche de D1. TinyCAD place tous les segments en une seule opération.

![3. Validez le point d’arrivée pour placer la connexion complète, y compris son angle.](../images/wire-auto-route-complete.png){: width="435" style="max-width: 50%;"}

Sur un écran tactile, vous pouvez toucher directement les deux extrémités. Pour les broches petites ou rapprochées, utilisez la [loupe](../Touch-controls/#precise-placement-with-the-loupe) : pointez
sur chaque extrémité et appuyez sur **Cliquer**. Vous n’avez pas besoin de faire glisser le doigt le long de l’itinéraire ni de toucher ses angles. Vérifiez la connexion terminée et ajustez ses segments si nécessaire.

## Aimantation et jonctions
{: #snapping-and-junctions}

- Les fils s’aimantent sur les broches et les fils existants.
- Les jonctions sont ajoutées automatiquement lorsque nécessaire.
- Les fils qui se croisent ne sont pas connectés, sauf en présence d’une jonction.

## Modification des fils
{: #editing-wires}

Pour modifier un fil, cliquez simplement dessus. Vous pouvez ensuite faire glisser le segment entier en faisant glisser le fil lui-même, ou déplacer ses extrémités en faisant glisser les poignées de déplacement.

- Retour à [Dessin](../User-guide/)
- Retour au [sommaire v4](../CONTENTS/)
