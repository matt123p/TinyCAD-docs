---
layout: default
---
# Fils
{: #wires}

Les fils sont les connexions électriquement actives d’un schéma TinyCAD.

Pour assurer la connectivité nécessaire au contrôle DRC, à la génération de listes de connexions, à l’export SPICE/PCB ou aux liaisons entre feuilles,
utilisez des objets fil (et non des lignes d’annotation).

## Pourquoi les fils sont importants
{: #why-wires-matter}

- Les fils définissent les réseaux électriques.
- Les fils s’alignent sur les broches des symboles et les autres points de connexion valides.
- TinyCAD utilise la connectivité des fils pour le contrôle des règles et la génération des fichiers de sortie.

L’utilisation de lignes d’annotation à la place de fils peut sembler correcte à l’écran, mais le circuit sera électriquement déconnecté pour les outils.

## Modes de routage des fils
{: #wire-routing-modes}
{: #wire-routing-modes}

Dans TinyCAD v4.0.11, utilisez le sélecteur à côté de Wire pour choisir comment tracer les nouveaux segments.

| Mode | Comportement |
|---|---|
| **90°** | Routage horizontal et vertical. |
| **45°** | Routage limité aux directions à 45° de TinyCAD. |
| **Libre** | Segments droits à n’importe quel angle. |

Le choix d’un mode active Wire et conserve tout aperçu de fil en cours. Vous pouvez changer de mode avant de placer le segment suivant. L’alignement sur la grille reste un réglage distinct. Pour un routage automatique entre deux points de connexion, utilisez l’outil voisin [Fil point à point](#auto-routing).

![Sélecteur de la barre d’outils des fils affichant les choix 90°, 45° et Libre.](../Images/wire-routing-modes.png)

## Placer des fils
{: #placing-wires}
{: #placing-wires}

1. Sélectionnez l’outil Wire.
2. Cliquez pour commencer à partir d’un point de connexion valide — bien que cela ne soit pas strictement nécessaire. Vous pouvez placer un fil n’importe où. Un cercle rouge indique si le point de connexion est valide.
3. Cliquez pour placer les coins/segments nécessaires.
4. Terminez sur un autre point de connexion valide OU
5. Faites un clic droit pour quitter le mode de câblage.


{% include video-player.html
	src="/v4/Images/video/Video 4.mp4"
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

**Fil point à point** choisit un itinéraire entre deux points de connexion et place
les segments de fil pour vous. Cet outil est pratique pour le travail courant à la souris, et particulièrement
sur un écran tactile, où il est plus facile de toucher deux extrémités que de placer chaque coin.

1. Sélectionnez **Fil point à point**, à côté du sélecteur du mode Wire dans la barre d’outils.
2. Cliquez ou touchez la broche d’un symbole ou un fil existant au point de départ. Un cercle rouge indique
   un point de connexion valide.
3. Déplacez le pointeur vers la broche ou le fil de destination pour afficher un aperçu du routage automatique.
4. Cliquez ou touchez la destination pour placer la connexion complète. TinyCAD sélectionne
   les nouveaux segments de fil et quitte l’outil de routage. Sélectionnez de nouveau **Fil point à point**
   pour créer une autre connexion.

Contrairement à l’outil Wire ordinaire, les deux extrémités doivent être des points de connexion valides ;
un clic dans un espace vide ne place pas de coin. Faites un clic droit pour annuler un routage inachevé.
Si vous préférez choisir vous-même les coins, utilisez [Wire](#placing-wires).

Essayez le [dessin d’exemple de routage automatique](../examples/Auto-route%20example.dsn).
La résistance et la LED sont alignées sur la grille, mais la connexion entre elles est laissée ouverte.

Commencez par sélectionner Fil point à point et choisir la broche de droite de R1.

![1. R1 et D1 sont déconnectés. Le cercle rouge indique la broche de départ sur R1.](../Images/wire-auto-route-start.png){: width="435" style="max-width: 50%;"}

Ensuite, pointez vers la broche supérieure de D1. L’aperçu montre le routage et son coin avant
que vous ne le validiez.

![2. Aperçu du routage automatique vers D1. Le cercle rouge indique la broche de destination.](../Images/wire-auto-route.png){: width="435" style="max-width: 50%;"}

Enfin, cliquez ou touchez la broche de D1. TinyCAD place tous les segments en une seule opération.

![3. Confirmez la destination pour placer la connexion complète, y compris son coin.](../Images/wire-auto-route-complete.png){: width="435" style="max-width: 50%;"}

Sur un écran tactile, vous pouvez toucher directement les deux extrémités. Pour les broches petites ou rapprochées,
utilisez la [loupe](../Touch-controls/#precise-placement-with-the-loupe) : pointez
vers chaque extrémité et appuyez sur **Click**. Il n’est pas nécessaire de faire glisser le pointeur le long du routage ni
de toucher ses coins. Vérifiez la connexion terminée et ajustez ses segments si nécessaire.

## Alignement et jonctions
{: #snapping-and-junctions}

- Les fils s’alignent magnétiquement sur les broches et les fils existants.
- Les jonctions sont ajoutées automatiquement au besoin.
- Les fils qui se croisent ne sont pas connectés, sauf si une jonction est présente.

## Réorganiser une disposition existante
{: #tidying-an-existing-layout}

Utilisez [Réorganisation de la disposition (Auto-layout)](../Layout-Tidy-Up/) pour réorganiser les composants, fils et étiquettes existants sur toute une feuille ou dans une sélection. Fil point à point crée une nouvelle connexion ; Auto-layout réorganise les connexions déjà présentes.

## Modifier des fils
{: #editing-wires}

Pour modifier un fil, cliquez simplement dessus. Vous pouvez alors faire glisser le fil lui-même pour déplacer tout le segment, ou déplacer ses extrémités en faisant glisser les poignées de déplacement.

- Retour à [Dessin](../User-guide/)
- Retour à [Sommaire de v4](../CONTENTS/)
