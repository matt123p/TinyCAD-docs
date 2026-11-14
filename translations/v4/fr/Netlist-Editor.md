---
layout: default
---
# Éditeur de netlist
{: #netlist-editor}

Le `Netlist Editor` est une nouvelle fonctionnalité de TinyCAD v4.

Utilisez cette fonctionnalité si vous souhaitez :

- voir comment TinyCAD a regroupé vos fils et étiquettes en nets
- trouver où un net est utilisé dans le dessin
- attribuer un type à un net
- modifier l'apparence d'un groupe de nets dans le schéma

## Qu'est-ce que la vue Netlist ?
{: #what-the-netlist-view-is}

Le `Netlist Editor` est une liste dynamique des nets de votre dessin.

Un net est une connexion électrique. TinyCAD la détermine à partir de vos :

- fils
- broches
- étiquettes
- symboles d'alimentation

La liste est dynamique et se met à jour automatiquement pendant que vous modifiez le schéma.

## Comment l'ouvrir
{: #how-to-open-it}

1. Regardez le panneau inférieur de l'éditeur.
2. Si vous voyez `Symbols`, utilisez le bouton de mode et passez à `Netlist`.

Si un autre panneau est ouvert parce qu'un élément est sélectionné, désélectionnez-le d'abord.

![Vue Netlist sous le schéma du diviseur, avec la ligne OUT mise en surbrillance](../images/netlist-editor/netlist-overview.png)

Dans cet exemple de diviseur fourni, la ligne `OUT` relie `R1.2` à `R2.1`.
Le survol de cette ligne met la connexion en surbrillance dans le dessin.

## Signification de chaque colonne
{: #what-each-column-means}

- `Net` : le nom du net ou son numéro interne
- `Sheet` : la feuille où se trouve l'élément principal de cette ligne
- `Connections` : le nombre de connexions de broches sur ce net
- `Labels` : les étiquettes trouvées sur ce net
- `Type` : le type de netlist attribué à ce net
- `Symbols` : les composants et broches connectés à ce net

## Comment utiliser la vue Netlist
{: #how-to-use-the-netlist-view}

### Trouver un net
{: #find-a-net}

Utilisez la zone de recherche pour filtrer la liste.

Vous pouvez effectuer une recherche par :

- nom du net
- nom de la feuille
- texte de l'étiquette
- référence du symbole
- nom du type

### Mettre un net en surbrillance dans le dessin
{: #highlight-a-net-in-the-drawing}

Passez la souris sur une ligne.

TinyCAD met en surbrillance les éléments correspondants du net dans le schéma pour vous indiquer où il se trouve.

### Accéder à un net dans le dessin
{: #jump-to-a-net-in-the-drawing}

Cliquez sur une ligne.

TinyCAD accède à l'élément correspondant dans la feuille appropriée.

## Comment attribuer un type à un net
{: #how-to-assign-a-type-to-a-net}

Chaque ligne comporte un champ `Type`.

Pour attribuer un type :

1. Cliquez dans le champ `Type` du net.
2. Choisissez un type existant dans la liste.
3. Pour définir d'abord un nouveau type, utilisez `Netlist Types` comme indiqué ci-dessous, puis revenez au champ `Type` du net.

![Netlist filtrée sur OUT, avec le type control attribué](../images/netlist-editor/netlist-type-assignment.png)

Ici, la recherche de `OUT` isole le net de sortie du diviseur, et son `Type` est défini sur `control`.


## Qu'est-ce qu'un type de net ?
{: #what-a-net-type-is}

Un type de net est une étiquette réutilisable pour un groupe de nets.

Vous pouvez l'utiliser pour :

- organiser les nets en catégories
- donner les mêmes couleurs aux nets correspondants
- tracer certains nets avec des fils plus épais dans le dessin
- enregistrer des notes supplémentaires sous forme d'attributs

Exemples de noms de type possibles :

- `power`
- `control`
- `logic`
- `analog`
- `high_current`

## Comment ouvrir Netlist Types
{: #how-to-open-netlist-types}

1. Ouvrez la vue `Netlist` de la barre inférieure.
2. Cliquez sur `Netlist Types`.

Cela ouvre l'éditeur de toutes les définitions de type disponibles.

## Opérations possibles dans Netlist Types
{: #what-you-can-do-in-netlist-types}

Dans la fenêtre `Netlist Types`, vous pouvez :

- ajouter un type
- dupliquer un type existant
- renommer un type
- supprimer un type
- modifier la couleur des fils
- modifier la couleur des étiquettes
- modifier la couleur des symboles d'alimentation
- modifier l'épaisseur des fils
- ajouter vos propres attributs
- prévisualiser le résultat avant l'enregistrement

## Le type par défaut
{: #the-default-type}

Il existe toujours un type `default`.

Points importants à savoir :

- il ne peut pas être renommé
- il ne peut pas être supprimé
- ses couleurs sont les couleurs normales du dessin

Si vous modifiez les couleurs de la ligne `default`, vous modifiez les couleurs normales des nets utilisées dans le dessin.

## Comment créer un type
{: #how-to-create-a-new-type}

1. Ouvrez `Netlist Types`.
2. Cliquez sur `Add`.
3. Saisissez un nom.
4. Définissez les couleurs et l'épaisseur des fils souhaitées.
5. Cliquez sur `OK` pour enregistrer.

Vous pourrez ensuite attribuer le nouveau type aux nets depuis la vue `Netlist` située en bas.

![Éditeur Netlist Types avec les types default, control et power et une épaisseur de fil de 2 pour control](../images/netlist-editor/netlist-types.png)

L'exemple ajoute les types `control` et `power`. Le type `control` a une épaisseur de fil de `2` ; chaque bouton de couleur ouvre son propre éditeur.

## Comment dupliquer un type
{: #how-to-duplicate-a-type}

C'est utile lorsque vous souhaitez créer un type similaire à un type existant.

1. Sélectionnez la ligne du type.
2. Cliquez sur `Duplicate`.
3. Modifiez le nouveau nom.
4. Modifiez les couleurs ou les paramètres souhaités.
5. Cliquez sur `OK`.

## Comment modifier les couleurs
{: #how-to-change-colors}

Chaque type peut avoir des couleurs distinctes pour :

- les fils
- les étiquettes
- les éléments d'alimentation

Pour modifier une couleur :

1. Cliquez sur la cellule de couleur de la ligne.
2. Activez `Override colour` pour un type autre que le type par défaut, puis choisissez une couleur.
3. Cliquez sur `OK` dans la boîte de dialogue des couleurs.
4. Cliquez sur `OK` dans la fenêtre principale `Netlist Types`.

Les types autres que le type par défaut peuvent utiliser leur propre couleur ou reprendre la couleur de dessin par défaut.

![Éditeur de couleur des fils montrant l'option Override colour activée et un fil vert dans l'aperçu](../images/netlist-editor/netlist-colour-preview.png)

L'aperçu montre la couleur de fil sélectionnée, ainsi que les couleurs des étiquettes et des symboles d'alimentation. Utilisez les onglets `Wire`, `Label` et `Power` pour vérifier chaque paramètre avant l'enregistrement.

## Comment modifier l'épaisseur des fils
{: #how-to-change-wire-thickness}

1. Repérez la ligne du type.
2. Modifiez la valeur `Wire Thickness`.
3. Cliquez sur `OK`.

Cela modifie la façon dont les fils des nets de ce type sont tracés dans le schéma.

## Comment ajouter des attributs
{: #how-to-add-attributes}

Les attributs sont de simples entrées nom/valeur enregistrées avec le type.

Pour les ajouter :

1. Cliquez sur la cellule `Attributes` du type.
2. Cliquez sur `Add Attribute`, puis saisissez le nom et la valeur de l'attribut. Répétez l'opération pour les entrées supplémentaires.
3. Enregistrez les attributs.
4. Cliquez sur `OK` dans la boîte de dialogue principale.

![Éditeur d'attributs avec des entrées purpose et notes pour le type control](../images/netlist-editor/netlist-attributes.png)

Ces exemples d'entrées décrivent l'objectif du type et ajoutent une note de câblage. Elles sont associées au type et peuvent être partagées par chaque net qui lui est attribué.

Pour le moment, ces attributs sont principalement enregistrés avec le dessin. Ils sont utiles pour conserver des informations supplémentaires sur les types, même s'ils ne sont pas encore utilisés par tous les formats de sortie.


## Pages associées
{: #related-pages}

- [Générer la netlist](../Generate-Netlist/)
- [Nomenclature](../Bill-Of-Materials/)
- [Vérification des règles de conception](../Design-Rules-Check/)
- [Sortie SPICE](../SPICE-output/)
- [Sortie VHDL](../VHDL-output/)

- Retour à [Avancé](../Advanced/)
- Retour à [Sommaire v4](../)
