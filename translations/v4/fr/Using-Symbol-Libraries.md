---
layout: default
---
# Utilisation des bibliothèques de symboles
{: #using-symbol-libraries}

## Qu’est-ce qu’une bibliothèque de symboles ?
{: #what-is-a-symbol-library}

En conception de circuits, une **bibliothèque de symboles** est un ensemble de symboles de schéma enregistrés dans un même fichier. Chaque symbole représente un composant électronique, tel qu’une résistance, un condensateur, un circuit intégré, un connecteur, un transistor ou toute autre pièce, sous la forme d’un graphique normalisé avec des points de connexion électrique définis.

Les bibliothèques de symboles TinyCAD utilisent le format de fichier `.tclib`. Un fichier de bibliothèque unique peut contenir des dizaines ou des centaines de symboles apparentés, généralement regroupés par catégorie ou par fonction. Par exemple, vous pouvez disposer d’une bibliothèque pour les composants passifs, d’une autre pour les circuits intégrés logiques et d’une autre encore pour les connecteurs.

## À quoi servent les bibliothèques de symboles ?
{: #what-are-symbol-libraries-used-for}

Les bibliothèques de symboles remplissent plusieurs fonctions importantes dans la saisie de schémas :

- **Réutilisation dans différents projets.** Une fois qu’un symbole est défini dans une bibliothèque, il peut être placé dans n’importe quel schéma sans avoir à le recréer. Cela permet de gagner du temps et garantit la cohérence entre les projets.
- **Représentation normalisée.** Les bibliothèques imposent un style visuel et une configuration des broches communs pour chaque composant. Chaque instance d’un temporisateur 555 ou d’un amplificateur opérationnel se présente de la même façon et possède les mêmes définitions de broches, ce qui réduit les risques de mauvaise interprétation.
- **Exactitude électrique.** Chaque symbole contient des informations sur ses broches : noms, numéros et types électriques (entrée, sortie, alimentation, passif, etc.). Ces données alimentent les processus ultérieurs, tels que la génération de listes de connexions, les vérifications des règles de conception et l’exportation vers des outils de routage de PCB.
- **Organisation.** Le regroupement des symboles dans des bibliothèques par fonction, fabricant ou projet facilite la recherche du composant approprié. TinyCAD vous permet de ne charger que les bibliothèques nécessaires à un projet donné.
- **Partage et collaboration.** Les fichiers de bibliothèque peuvent être partagés entre les membres d’une équipe ou téléchargés depuis la communauté, afin que chacun travaille avec les mêmes définitions de symboles vérifiées.

## Bibliothèques intégrées et personnalisées
{: #built-in-and-custom-libraries}

TinyCAD est fourni avec des [bibliothèques intégrées](../Bundled-Libraries/) pour les schémas d’équipement et les circuits électroniques modélisés. Sélectionnez **Standard** dans le sélecteur de gauche, puis choisissez une collection dans **Choisir une bibliothèque standard**. Aucune importation distincte de bibliothèque n’est nécessaire. Pour les composants qui ne sont pas inclus, vous pouvez :

- Créer vos propres [bibliothèques de symboles personnalisées](../Custom-symbol-libraries/)
- [Importer des symboles depuis les bibliothèques KiCAD](../Importing-Symbols-from-KiCAD/)
- Télécharger des bibliothèques supplémentaires depuis le site Web TinyCAD.net

## Flux de travail type
{: #typical-workflow}

En pratique, l’utilisation des bibliothèques de symboles suit généralement cette séquence :

1. Charger ou ajouter les bibliothèques que vous souhaitez rendre disponibles dans la session TinyCAD en cours.
2. Parcourir, rechercher et prévisualiser les symboles de ces bibliothèques.
3. Placer les symboles dans le dessin.
4. Si une définition de symbole doit être modifiée, modifier la bibliothèque plutôt que l’instance placée.

Cette page couvre les étapes 1 à 3. Pour la gestion des fichiers de bibliothèque, voir [Bibliothèques de symboles personnalisées](../Custom-symbol-libraries/). Pour modifier la définition du symbole lui-même, voir [Modification d’un symbole](../Editing-a-Symbol/).

## Chargement des bibliothèques
{: #loading-libraries}

Avant de pouvoir placer un symbole, sa bibliothèque doit être disponible dans TinyCAD.

- Les bibliothèques intégrées sont fournies avec TinyCAD.
- Les bibliothèques personnalisées doivent être ajoutées ou ouvertes avant de pouvoir être parcourues.
- La procédure exacte diffère entre TinyCAD Web et l’application de bureau.

Consultez [Bibliothèques de symboles personnalisées](../Custom-symbol-libraries/) pour connaître les étapes propres à chaque produit permettant d’ajouter, d’ouvrir, d’actualiser, de créer et de modifier les fichiers de bibliothèque.

## Parcourir, rechercher et prévisualiser
{: #browsing-searching-and-previewing}

Pour utiliser les symboles d’une bibliothèque, vous devez d’abord charger celle-ci dans votre session TinyCAD. Une fois la bibliothèque chargée :

1. Ouvrez le sélecteur de symboles à gauche et choisissez **Standard**, **En ligne** ou **Mes bibliothèques**.
2. Dans Standard, choisissez une bibliothèque intégrée ; dans Mes bibliothèques, ouvrez ou développez vos propres bibliothèques. Utilisez **Rechercher dans les bibliothèques...** pour trouver un symbole par son nom ou sa description.
3. Examinez le dessin dans la liste des résultats, puis sélectionnez un symbole pour afficher un aperçu agrandi et sa description.
4. Faites glisser son aperçu dans le dessin et positionnez-le sur la grille. Appuyez sur Échap ou faites un clic droit pour terminer le placement des copies.

Pour en savoir plus sur le placement et la configuration des symboles une fois sélectionnés, voir [Symboles](../Symbols/).

## Redimensionnement du panneau des bibliothèques
{: #resizing-the-library-panel}

Faites glisser le bord droit du panneau des bibliothèques pour l’élargir ou le rétrécir. Un panneau plus large facilite la lecture des noms de symboles et des descriptions longs. TinyCAD mémorise la largeur sur cet appareil lorsque le stockage local est disponible.

## Tri des symboles
{: #sorting-symbols}

Dans **Mes bibliothèques**, utilisez le bouton de tri situé à côté des commandes de bibliothèque pour alterner entre **ordre des bibliothèques**, **A à Z** et **Z à A**. L’infobulle du bouton indique le mode actuel.
Le tri s’applique aux symboles dans les bibliothèques et aux résultats de recherche, y compris les résultats en ligne ; il ne réorganise pas vos fichiers ni vos dossiers de bibliothèque. TinyCAD mémorise le mode de tri sur cet appareil lorsque le stockage local est disponible.

Le navigateur et le sélecteur de la version de bureau proposent les onglets **Standard**, **En ligne** et **Mes bibliothèques**. La source et le choix de la bibliothèque standard sont mémorisés sur cet appareil.

## Placement des symboles dans un dessin
{: #placing-symbols-in-a-drawing}

Une fois qu’un symbole est sélectionné dans le navigateur de bibliothèques, il devient l’outil de placement actif.

Pour connaître la procédure de placement proprement dite, notamment le comportement des symboles une fois sélectionnés, voir [Symboles](../Symbols/).

N’oubliez pas que le placement d’un symbole dans un dessin ne modifie **pas** sa définition dans la bibliothèque. Si vous devez modifier les graphiques, les broches ou les attributs pour une utilisation ultérieure, modifiez plutôt le symbole dans sa bibliothèque. Voir [Modification d’un symbole](../Editing-a-Symbol/).

## Tâches associées
{: #related-tasks}

- Utilisez [Bibliothèques de symboles personnalisées](../Custom-symbol-libraries/) pour ajouter, ouvrir, créer et gérer les fichiers `.tclib`.
- Utilisez [Modification d’un symbole](../Editing-a-Symbol/) pour modifier les graphiques, les broches et les attributs d’un symbole.
- Consultez [Symboles](../Symbols/) pour les détails du placement une fois le symbole choisi.

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

- Retour au [sommaire de la v4](../)
