---
layout: default
---
# Éditeur de netlist
{: #netlist-editor}

Le `Netlist Editor` est une nouvelle fonctionnalité de TinyCAD v4.

Utilisez cette fonctionnalité pour :

- voir comment TinyCAD a regroupé vos fils et étiquettes en réseaux
- trouver où un réseau est utilisé dans le dessin
- attribuer un type à un réseau
- modifier l'apparence d'un groupe de réseaux sur le schéma

## Présentation de la vue Netlist
{: #what-the-netlist-view-is}

Le `Netlist Editor` est une liste dynamique des réseaux de votre dessin.

Un réseau est une connexion électrique. TinyCAD le détermine à partir de vos :

- fils
- broches
- étiquettes
- symboles d'alimentation

La liste est dynamique et se met automatiquement à jour pendant que vous modifiez le schéma.

## Comment l'ouvrir
{: #how-to-open-it}

1. Regardez le panneau inférieur de l'éditeur.
2. Si vous voyez `Symbols`, utilisez le bouton de mode et passez à `Netlist`.

Si un autre panneau est ouvert parce qu'un élément est sélectionné, effacez d'abord la sélection.

![Vue Netlist sous le schéma du diviseur, avec la ligne OUT mise en évidence](../images/netlist-editor/netlist-overview.png)

Dans cet exemple de diviseur fourni, la ligne `OUT` relie `R1.2` à `R2.1`.
Le survol de cette ligne met en évidence la connexion dans le dessin.

## Signification de chaque colonne
{: #what-each-column-means}

- `Net` : le nom du réseau ou son numéro interne
- `Sheet` : la feuille où l'élément principal de cette ligne a été trouvé
- `Connections` : le nombre de connexions de broches sur ce réseau
- `Labels` : les étiquettes trouvées sur ce réseau
- `Type` : le type de netlist attribué à ce réseau
- `Symbols` : les composants et broches connectés à ce réseau

## Utilisation de la vue Netlist
{: #how-to-use-the-netlist-view}

### Rechercher un réseau
{: #find-a-net}

Utilisez la zone de recherche pour filtrer la liste.

Vous pouvez rechercher par :

- nom du réseau
- nom de la feuille
- texte de l'étiquette
- référence du symbole
- nom du type

### Mettre en évidence un réseau dans le dessin
{: #highlight-a-net-in-the-drawing}

Déplacez le pointeur de la souris sur une ligne.

TinyCAD met en évidence les éléments du réseau correspondant dans le schéma afin que vous puissiez voir où se trouve ce réseau.

### Accéder à un réseau dans le dessin
{: #jump-to-a-net-in-the-drawing}

Cliquez sur une ligne.

TinyCAD accède à l'élément correspondant dans la feuille appropriée.

## Attribuer un type à un réseau
{: #how-to-assign-a-type-to-a-net}

Lorsque la vue **Netlist** est ouverte, cliquez sur un fil du schéma pour mettre en évidence la ligne de son réseau. Utilisez la liste **Type** de cette ligne pour choisir un type existant. Pour créer un type avec son propre style de fil, ouvrez **Netlist Types** et définissez d'abord le style.

Un type de réseau est un ensemble réutilisable de styles de dessin. Attribuez le même type à plusieurs réseaux pour leur donner la même apparence. La modification de ce type met à jour tous les réseaux qui l'utilisent. Vous pouvez également définir des couleurs propres aux étiquettes et aux symboles d'alimentation des réseaux de ce type, ou enregistrer des notes sous forme d'attributs. La mise en forme modifie l'apparence du dessin tout en préservant ses connexions électriques.

## Exemple – Mettre en vert et épaissir le fil OUT du diviseur
{: #example--make-the-dividers-out-wire-green-and-thicker}

Ouvrez le dessin `divider` fourni, depuis **Open Example** → **SPICE tutorial**, puis zoomez sur le circuit. Dans le panneau inférieur, passez de **Symbols** à **Netlist**. L'étiquette **OUT** identifie le réseau entre les broches **R1.2** et **R2.1**. Au départ, il utilise le type `default` et une épaisseur de fil normale.

![Diviseur avant la mise en forme, montrant le fin fil OUT bleu entre R1 et R2](../images/netlist-editor/netlist-wire-before.png)

### Créer le style de fil
{: #create-the-wire-style}

1. Cliquez sur **Netlist Types**, puis sur **Add**, et nommez le nouveau type `control`.
2. Dans la ligne `control`, définissez **Wire thickness** sur `4`. La valeur `1` correspond à l'épaisseur de ligne normale. Appuyez sur **Tab** pour valider la valeur.
3. Dans la même ligne, cliquez sur la cellule **Wire colour**. Cochez **Override colour**, puis saisissez `007F5F` dans le champ **Hex** pour obtenir du vert. L'aperçu montre le fil avec les deux réglages appliqués.
4. Cliquez sur **OK** dans le sélecteur de couleurs. Vérifiez l'échantillon vert et la valeur d'épaisseur sur la ligne `control`, puis cliquez sur **OK** dans **Netlist Types** pour enregistrer le type.

![Sélecteur de couleur de fil pour control, avec Override colour coché et le fil vert visible dans l'aperçu](../images/netlist-editor/netlist-wire-colour.png)

![Netlist Types montrant l'échantillon vert Wire colour et Wire thickness réglé sur 4 sur la ligne control](../images/netlist-editor/netlist-wire-type.png)

### Appliquer le style à OUT
{: #apply-the-style-to-out}

1. Cliquez sur le fil juste au-dessus de **R2** dans le schéma. TinyCAD met en évidence la ligne **OUT** dans le panneau **Netlist**.
2. Ouvrez la liste **Type** de la ligne mise en évidence et choisissez `control`.
3. Cliquez sur une zone vide du schéma pour effacer la sélection. Le fil entre **R1.2** et **R2.1** est maintenant vert et plus épais. Choisissez `default` dans la liste **Type** pour rétablir le style de fil normal.

![Fil OUT sélectionné dans le schéma et sa ligne Netlist mise en évidence, avec control sélectionné](../images/netlist-editor/netlist-wire-assignment.png)

![Diviseur après la mise en forme, montrant le fil OUT épaissi et vert entre R1 et R2](../images/netlist-editor/netlist-wire-after.png)

Utilisez **Save As** pour conserver votre copie modifiée de l'exemple.

### Suivre la démonstration
{: #watch-the-walkthrough}

{% include video-player.html src="/v4/videos/netlist-editor/netlist-editor.webm" type="video/webm" poster="/v4/images/netlist-editor/netlist-walkthrough-start.png" caption="Passez à Netlist, créez un style de fil vert, puis cliquez sur le fil OUT pour trouver sa ligne et lui appliquer le style." %}

## Fonctions disponibles dans Netlist Types
{: #what-you-can-do-in-netlist-types}

Dans la fenêtre `Netlist Types`, vous pouvez :

- ajouter un nouveau type
- dupliquer un type existant
- renommer un type
- supprimer un type
- modifier la couleur des fils
- modifier la couleur des étiquettes
- modifier la couleur des symboles d'alimentation
- modifier l'épaisseur des fils
- ajouter vos propres attributs
- prévisualiser le résultat avant l'enregistrement

## Type par défaut
{: #the-default-type}

Le type `default` a un nom fixe et une épaisseur de fil de `1`. TinyCAD utilise les couleurs de cette ligne comme couleurs de réseau normales du dessin. Les réseaux sans type attribué utilisent `default`.

## Dupliquer un type
{: #how-to-duplicate-a-type}

Cette fonction est utile lorsque vous souhaitez créer un type similaire à un type existant.

1. Sélectionnez la ligne du type.
2. Cliquez sur `Duplicate`.
3. Renommez la copie et modifiez ses couleurs ou son épaisseur.
4. Cliquez sur `OK`.

## Couleurs des étiquettes et des symboles d'alimentation
{: #label-and-power-symbol-colours}

Utilisez les onglets **Wire**, **Label** et **Power** du sélecteur de couleurs pour modifier chaque couleur séparément. Pour un type personnalisé, activez **Override colour** dans chaque onglet à personnaliser. Un onglet où cette option est désactivée utilise la couleur par défaut du dessin pour l'élément concerné.

## Ajouter des attributs
{: #how-to-add-attributes}

Les attributs sont de simples entrées nom/valeur enregistrées avec le type.

Pour les ajouter :

1. Cliquez sur la cellule `Attributes` du type.
2. Cliquez sur `Add Attribute`, puis saisissez le nom et la valeur de l'attribut. Répétez l'opération pour ajouter d'autres entrées.
3. Enregistrez les attributs.
4. Cliquez sur `OK` dans la boîte de dialogue principale.

![Éditeur d'attributs avec les entrées purpose et notes pour le type control](../images/netlist-editor/netlist-attributes.png)

Ces exemples d'entrées décrivent l'objectif du type et ajoutent une note de câblage. Elles appartiennent au type et peuvent être partagées par tous les réseaux qui lui sont attribués.

Pour l'instant, ces attributs sont principalement enregistrés avec le dessin. Ils permettent de conserver des informations supplémentaires sur le type, même s'ils ne sont pas encore utilisés par tous les formats de sortie.


## Pages associées
{: #related-pages}

- [Générer une netlist](../Generate-Netlist/)
- [Nomenclature](../Bill-Of-Materials/)
- [Vérification des règles de conception](../Design-Rules-Check/)
- [Sortie SPICE](../SPICE-output/)
- [Sortie VHDL](../VHDL-output/)

- Retour à [Fonctions avancées](../Advanced/)
- Retour à [Sommaire de la v4](../)
