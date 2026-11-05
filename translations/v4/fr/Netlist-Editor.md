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
- modifier l’apparence d’un groupe de réseaux sur le schéma

## Qu’est-ce que la vue Netlist ?
{: #what-the-netlist-view-is}

Le `Netlist Editor` est une liste dynamique des réseaux de votre dessin.

Un réseau est une connexion électrique. TinyCAD le détermine à partir de vos :

- fils
- broches
- étiquettes
- symboles d’alimentation

La liste est dynamique et se met à jour automatiquement pendant que vous modifiez le schéma.

## Comment l’ouvrir
{: #how-to-open-it}

1. Regardez le panneau inférieur de l’éditeur.
2. Si `Symbols` est affiché, utilisez le bouton de mode et sélectionnez `Netlist`.

Si un autre panneau est ouvert parce qu’un élément est sélectionné, annulez d’abord la sélection.

## Signification de chaque colonne
{: #what-each-column-means}

- `Net` : le nom du réseau ou son numéro interne
- `Sheet` : la feuille où l’élément principal de cette ligne a été trouvé
- `Connections` : le nombre de connexions de broches sur ce réseau
- `Labels` : les étiquettes trouvées sur ce réseau
- `Type` : le type de netlist attribué à ce réseau
- `Symbols` : les composants et broches connectés à ce réseau

## Utilisation de la vue Netlist
{: #how-to-use-the-netlist-view}

### Rechercher un réseau
{: #find-a-net}

Utilisez la zone de recherche pour filtrer la liste.

Vous pouvez effectuer une recherche par :

- nom du réseau
- nom de la feuille
- texte de l’étiquette
- référence du symbole
- nom du type

### Mettre un réseau en surbrillance dans le dessin
{: #highlight-a-net-in-the-drawing}

Placez le curseur de la souris sur une ligne.

TinyCAD met en surbrillance les éléments correspondants du réseau dans le schéma afin que vous puissiez voir où il se trouve.

### Accéder à un réseau dans le dessin
{: #jump-to-a-net-in-the-drawing}

Cliquez sur une ligne.

TinyCAD accède à l’élément correspondant dans la feuille appropriée.

## Comment attribuer un type à un réseau
{: #how-to-assign-a-type-to-a-net}

Chaque ligne comporte un champ `Type`.

Pour attribuer un type :

1. Cliquez dans le champ `Type` du réseau.
2. Choisissez un type existant dans la liste ou saisissez un nouveau nom.
3. Cliquez en dehors du champ pour appliquer la modification.


## Qu’est-ce qu’un type de réseau ?
{: #what-a-net-type-is}

Un type de réseau est une étiquette réutilisable pour un groupe de réseaux.

Vous pouvez l’utiliser pour :

- organiser les réseaux en catégories
- attribuer les mêmes couleurs aux réseaux correspondants
- épaissir certains réseaux dans le dessin
- enregistrer des notes supplémentaires sous forme d’attributs

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

L’éditeur de toutes les définitions de type disponibles s’ouvre.

## Actions disponibles dans Netlist Types
{: #what-you-can-do-in-netlist-types}

Dans la fenêtre `Netlist Types`, vous pouvez :

- ajouter un type
- dupliquer un type existant
- renommer un type
- supprimer un type
- modifier la couleur des fils
- modifier la couleur des étiquettes
- modifier la couleur des symboles d’alimentation
- modifier l’épaisseur des fils
- ajouter vos propres attributs
- prévisualiser le résultat avant l’enregistrement

## Le type par défaut
{: #the-default-type}

Il existe toujours un type `default`.

À savoir :

- il ne peut pas être renommé
- il ne peut pas être supprimé
- ses couleurs sont celles utilisées normalement dans le dessin

Si vous modifiez les couleurs de la ligne `default`, vous modifiez les couleurs normales des réseaux utilisées dans le dessin.

## Comment créer un type
{: #how-to-create-a-new-type}

1. Ouvrez `Netlist Types`.
2. Cliquez sur `Add`.
3. Saisissez un nom.
4. Définissez les couleurs et l’épaisseur des fils souhaitées.
5. Cliquez sur `OK` pour enregistrer.

Vous pourrez ensuite attribuer le nouveau type aux réseaux depuis la vue `Netlist` du panneau inférieur.

## Comment dupliquer un type
{: #how-to-duplicate-a-type}

Cette opération est utile si vous souhaitez créer un type similaire à un type existant.

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
- les éléments d’alimentation

Pour modifier une couleur :

1. Cliquez sur la cellule de couleur de la ligne.
2. Choisissez une couleur dans la boîte de dialogue des couleurs.
3. Fermez la boîte de dialogue des couleurs.
4. Cliquez sur `OK` dans la fenêtre principale `Netlist Types`.

Les types autres que le type par défaut peuvent utiliser leur propre couleur ou reprendre la couleur de dessin par défaut.

## Comment modifier l’épaisseur des fils
{: #how-to-change-wire-thickness}

1. Repérez la ligne du type.
2. Modifiez la valeur `Wire Thickness`.
3. Cliquez sur `OK`.

Cela modifie la manière dont les fils des réseaux de ce type sont dessinés sur le schéma.

## Comment ajouter des attributs
{: #how-to-add-attributes}

Les attributs sont de simples entrées nom/valeur enregistrées avec le type.

Pour les ajouter :

1. Cliquez sur la cellule `Attributes` du type.
2. Ajoutez ou modifiez les noms et les valeurs des attributs.
3. Enregistrez les attributs.
4. Cliquez sur `OK` dans la boîte de dialogue principale.

Pour le moment, ces attributs sont principalement enregistrés avec le dessin. Ils permettent de conserver des informations supplémentaires sur le type, même s’ils ne sont pas encore utilisés par tous les formats de sortie.


## Pages connexes
{: #related-pages}

- [Générer une netlist](../Generate-Netlist/)
- [Nomenclature](../Bill-Of-Materials/)
- [Vérification des règles de conception](../Design-Rules-Check/)
- [Sortie SPICE](../SPICE-output/)
- [Sortie VHDL](../VHDL-output/)

- Retour à [Fonctionnalités avancées](../Advanced/)
- Retour à [Contenu de v4](../CONTENTS/)
