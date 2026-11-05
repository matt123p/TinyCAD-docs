---
layout: default
---
# Utilisation des bibliothèques de symboles
{: #using-symbol-libraries}

## Qu’est-ce qu’une bibliothèque de symboles ?
{: #what-is-a-symbol-library}

En conception de circuits, une **bibliothèque de symboles** est un ensemble de symboles de schéma stockés dans un seul fichier. Chaque symbole représente un composant électronique, tel qu’une résistance, un condensateur, un circuit intégré, un connecteur, un transistor ou toute autre pièce, sous la forme d’un dessin normalisé avec des points de connexion électrique définis.

Les bibliothèques de symboles TinyCAD utilisent le format de fichier `.tclib`. Un seul fichier de bibliothèque peut contenir des dizaines ou des centaines de symboles associés, généralement regroupés par catégorie ou par fonction. Par exemple, vous pouvez avoir une bibliothèque pour les composants passifs, une autre pour les circuits intégrés logiques et une autre pour les connecteurs.

## À quoi servent les bibliothèques de symboles ?
{: #what-are-symbol-libraries-used-for}

Les bibliothèques de symboles remplissent plusieurs fonctions essentielles lors de la saisie de schémas :

- **Réutilisation dans plusieurs conceptions.** Une fois défini dans une bibliothèque, un symbole peut être placé dans n’importe quel schéma sans avoir à le recréer. Cela fait gagner du temps et garantit la cohérence entre les projets.
- **Représentation normalisée.** Les bibliothèques imposent un style graphique et une configuration des broches communs pour chaque composant. Chaque exemplaire d’un temporisateur 555 ou d’un amplificateur opérationnel a la même apparence et les mêmes définitions de broches, ce qui réduit les risques de mauvaise interprétation.
- **Exactitude électrique.** Chaque symbole comporte des informations sur les broches : noms, numéros et types électriques (entrée, sortie, alimentation, passif, etc.). Ces données alimentent les processus ultérieurs, tels que la génération de listes de connexions, les vérifications des règles de conception et l’exportation vers des outils de conception de circuits imprimés.
- **Organisation.** Le regroupement des symboles dans des bibliothèques par fonction, fabricant ou projet facilite la recherche du composant approprié. TinyCAD vous permet de ne charger que les bibliothèques dont vous avez besoin pour une conception donnée.
- **Partage et collaboration.** Les fichiers de bibliothèque peuvent être partagés entre les membres d’une équipe ou téléchargés depuis la communauté, afin que chacun utilise les mêmes définitions de symboles vérifiées.

## Bibliothèques intégrées et personnalisées
{: #built-in-and-custom-libraries}

TinyCAD est livré avec un ensemble de bibliothèques intégrées couvrant les familles de composants courantes. Pour les composants qui n’y figurent pas, vous pouvez :

- Créer vos propres [bibliothèques de symboles personnalisées](../Custom-symbol-libraries/)
- [Importer des symboles depuis KiCAD](../Importing-Symbols-from-KiCAD/) bibliothèques
- Télécharger des bibliothèques supplémentaires depuis le site Web TinyCAD.net

## Flux de travail type
{: #typical-workflow}

En pratique, l’utilisation des bibliothèques de symboles suit généralement cette séquence :

1. Charger ou ajouter les bibliothèques que vous souhaitez rendre disponibles dans la session TinyCAD en cours.
2. Parcourir, rechercher et prévisualiser les symboles de ces bibliothèques.
3. Placer les symboles dans le dessin.
4. Si une définition de symbole doit être modifiée, modifiez la bibliothèque plutôt que l’exemplaire placé.

Cette page couvre les étapes 1 à 3. Pour la gestion des fichiers de bibliothèque, consultez [Bibliothèques de symboles personnalisées](../Custom-symbol-libraries/). Pour modifier la définition du symbole lui-même, consultez [Modification d’un symbole](../Editing-a-Symbol/).

## Chargement des bibliothèques
{: #loading-libraries}

Pour pouvoir placer un symbole, sa bibliothèque doit être disponible dans TinyCAD.

- Les bibliothèques intégrées sont fournies avec TinyCAD.
- Les bibliothèques personnalisées doivent être ajoutées ou ouvertes avant de pouvoir être parcourues.
- Les étapes exactes diffèrent entre TinyCAD Web et l’application de bureau.

Consultez [Bibliothèques de symboles personnalisées](../Custom-symbol-libraries/) pour connaître les étapes propres à chaque produit permettant d’ajouter, d’ouvrir, d’actualiser, de créer et de modifier des fichiers de bibliothèque.

## Parcourir, rechercher et prévisualiser
{: #browsing-searching-and-previewing}

Pour utiliser les symboles d’une bibliothèque, celle-ci doit d’abord être chargée dans votre session TinyCAD. Une fois chargée :

1. Ouvrez le sélecteur de symboles.
2. Développez une bibliothèque pour parcourir son contenu, ou utilisez le champ de recherche pour trouver un symbole par son nom ou sa description.
3. Cliquez sur un symbole pour le prévisualiser.
4. Sélectionnez le symbole pour en faire l’outil de placement actif, puis cliquez dans votre dessin pour en placer des exemplaires.

Pour en savoir plus sur le placement et la configuration des symboles une fois sélectionnés, consultez [Symboles](../Symbols/).

## Redimensionnement du panneau des bibliothèques
{: #resizing-the-library-panel}

Faites glisser le bord droit du panneau des bibliothèques pour l’élargir ou le rétrécir. Un panneau plus large
facilite la lecture des noms et descriptions de symboles longs. TinyCAD mémorise la largeur
sur cet appareil lorsque le stockage local est disponible.

## Tri des symboles
{: #sorting-symbols}

Dans **Mes bibliothèques**, utilisez le bouton de tri à côté des commandes des bibliothèques pour parcourir
les modes **ordre des bibliothèques**, **A à Z** et **Z à A**. L’infobulle du bouton indique le mode actuel.
Le tri s’applique aux symboles des bibliothèques et aux résultats de recherche, y compris
aux résultats en ligne ; il ne réorganise pas vos fichiers ni vos dossiers de bibliothèque. TinyCAD
mémorise le mode de tri sur cet appareil lorsque le stockage local est disponible.

La version utilisant le système de fichiers du navigateur affiche uniquement la recherche en ligne et ne propose pas
le bouton de tri **Mes bibliothèques**.

## Placement de symboles dans un dessin
{: #placing-symbols-in-a-drawing}

Une fois sélectionné dans le navigateur de bibliothèques, un symbole devient l’outil de placement actif.

Pour connaître les étapes de placement proprement dites, notamment le comportement des symboles une fois sélectionnés, consultez [Symboles](../Symbols/).

N’oubliez pas que le placement d’un symbole dans un dessin ne modifie **pas** sa définition dans la bibliothèque. Si vous devez modifier le graphisme, les broches ou les attributs pour une utilisation ultérieure, modifiez plutôt le symbole dans sa bibliothèque. Consultez [Modification d’un symbole](../Editing-a-Symbol/).

## Tâches associées
{: #related-tasks}

- Consultez [Bibliothèques de symboles personnalisées](../Custom-symbol-libraries/) pour ajouter, ouvrir, créer et gérer des fichiers `.tclib`.
- Consultez [Modification d’un symbole](../Editing-a-Symbol/) pour modifier le graphisme, les broches et les attributs d’un symbole.
- Consultez [Symboles](../Symbols/) pour les détails du placement une fois un symbole choisi.

## Pages
{: #pages}

{% assign current_version = page.url | split: '/' | slice: 1, 1 | first -%}
{% assign section = nil -%}
{% for entry in site.data.navigation[current_version] -%}
    {% if entry.url == page.url -%}
        {% assign section = entry -%}
        {% break -%}
    {% endif -%}
{% endfor -%}
{% if section and section.children %}
{% for child in section.children -%}
- [{{ child.title }}]({{ child.url | relative_url }})
{% endfor %}
{% endif %}

- Retour à [sommaire v4](../CONTENTS/)
