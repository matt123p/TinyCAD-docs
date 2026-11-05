---
layout: default
---
# Votre premier dessin
{: #your-first-drawing}

Cette page vous guide pas à pas pour réaliser votre premier schéma de circuit avec TinyCAD.

Dans sa forme la plus simple, un dessin TinyCAD est un ensemble de symboles reliés
par des fils. Dans cet exemple, vous allez placer quelques symboles, puis les relier avec des fils.

## Exemple de circuit
{: #example-circuit}

Voici un circuit simple à dessiner :

<img src="/v4/images/media/image1.png" alt="Simple battery, resistor, and LED circuit used in the tutorial" style="width: 2.13542in; height: 1.13542in;" />

<p>
	<a href="/v4/examples/First%20Drawing.dsn" class="btn btn-primary" download>
		<i class="bi bi-download me-1" aria-hidden="true"></i>&nbsp;Télécharger
	</a>
</p>


## Présentation vidéo
{: #video-walkthrough}

{% include video-player.html
	src="/v4/images/video/Video 2.mp4"
	width=1618
	height=922
	caption="Présentation vidéo montrant comment modifier et repositionner le texte des symboles."
%}

# Guide étape par étape
{: #step-by-step-guide}

## Bibliothèques de symboles
{: #symbol-libraries}

1. Saisissez `battery` dans la zone de recherche.
2. Sélectionnez **Batterie multicellule (Multi Cell Battery)**.
3. Faites glisser le symbole du panneau des symboles vers le dessin.

Placez ensuite une résistance et une LED.

Utilisez les commandes de rotation et de symétrie de la barre d’outils pour orienter les symboles :

<img src="/v4/images/media/image5.png" alt="Rotate and flip controls used to change symbol orientation" />

Si vous faites une erreur, utilisez Annuler/Rétablir (Undo/Redo) :

<img src="/v4/images/media/image6.png" alt="Undo and Redo toolbar buttons" />

Votre dessin devrait ressembler à ceci :

<img src="/v4/images/media/image7.png" alt="Battery, resistor, and LED symbols placed on the drawing before wiring" style="width: 3.76042in; height: 2.52083in;" />

## Câblage d’un circuit
{: #wiring-up-a-circuit}

1. Sélectionnez l’outil **Fil (Wire)**.
2. Cliquez sur une borne de la batterie pour commencer un fil.
3. Déplacez le curseur jusqu’à la borne de la résistance, puis cliquez de nouveau pour placer le fil.

Les fils s’alignent sur les points de connexion valides des symboles. Un cercle rouge indique
un point d’alignement.

Conseil : appuyez sur `W` sur le clavier pour repasser rapidement en mode fil.

Une fois le câblage effectué, le résultat devrait ressembler à ceci :

<img src="/v4/images/media/image8.png" alt="Example circuit after the battery, resistor, and LED have been wired together" style="width: 3.40625in; height: 2.38542in;" />

## Annotation du dessin
{: #annotating-the-drawing}

Les symboles doivent comporter des valeurs et des références de composants. Dans TinyCAD, il s’agit généralement
des champs **Nom (Name)** et **Réf (Ref)** du symbole.

1. Cliquez sur la batterie.
2. Accédez au panneau **Symbole (Symbol)** en bas.
3. Remplacez `BATTERY_2` par `9V`.
4. Remplacez la référence `Z?` par `B1`.

Répétez l’opération pour les autres composants :

- Résistance : Nom `1K`, Réf `R1`
- LED : Nom `Red Led`, Réf `D1`

Si un nom ou une référence est masqué, utilisez les cases à cocher pour afficher ou masquer le texte
sur le dessin.

## Chargement et enregistrement
{: #loading-and-saving}

<div class="manual-tabset" data-tabset="product-mode" data-tabset-label="Choose your TinyCAD product" data-default-tab="Browser" markdown="1">

### Fichiers locaux dans le navigateur
{: #browser-local-files}

Pour enregistrer votre dessin, utilisez les boutons « Enregistrer sous » ou « Enregistrer » de la barre d’outils :

<img src="/v4/images/media/image2.png" alt="The toolbar buttons for Save and Save As"  />


### Google dans le navigateur
{: #browser-google}

Votre premier dessin est terminé. Pour le renommer :

1. Cliquez sur le nom du dessin en haut (par exemple `tCad1.dsn`).
2. Renommez-le `First Drawing.dsn`.
3. Appuyez sur Entrée.

<img src="/v4/images/media/image13.png" alt="Editable drawing title field used to rename the current design" style="width: 4.15625in; height: 0.92708in;" />

Enregistrez-le sur Google Drive à l’aide de l’icône **Enregistrer**.

Pour le charger de nouveau depuis Google Drive :

1. Ouvrez <https://drive.google.com/drive/>.
2. Recherchez le dessin.
3. Faites un clic droit et choisissez **Ouvrir avec -> TinyCAD**.

<img src="/v4/images/media/image14.png" alt="Google Drive context menu showing Open with TinyCAD for a drawing file" style="width: 5.09138in; height: 3.90625in;" />

Vous pouvez également renommer et supprimer des dessins TinyCAD dans Google Drive.

### Application de bureau
{: #desktop-app}

Votre premier dessin est terminé. Pour l’enregistrer depuis l’application de bureau :

1. Ouvrez **Fichier -> Enregistrer sous**.
2. Choisissez un dossier sur votre ordinateur.
3. Enregistrez le dessin sous le nom `First Drawing.dsn`.

Pour le charger de nouveau ultérieurement :

1. Ouvrez **Fichier -> Ouvrir**.
2. Accédez à `First Drawing.dsn`.
3. Sélectionnez le fichier et ouvrez-le.

TinyCAD pour ordinateur utilise le même format `.dsn` que TinyCAD dans le navigateur. Vous pouvez
télécharger un dessin depuis Google Drive et l’ouvrir dans l’application de bureau.

De même, vous pouvez utiliser avec la version de TinyCAD basée sur le navigateur les dessins réalisés
avec la version de bureau.

</div>

## Pour en savoir plus
{: #further-reading}

Pour créer des symboles et des bibliothèques personnalisés, poursuivez avec
[Bibliothèques de symboles personnalisées](../Custom-symbol-libraries/).

- Retour à [Dessin](../User-guide/)
- Retour à [sommaire de la v4](../CONTENTS/)
