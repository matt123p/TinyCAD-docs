---
layout: default
---
# Bibliothèques de symboles personnalisées
{: #custom-symbol-libraries}

Cette page présente les tâches liées aux bibliothèques : les ajouter à TinyCAD,
les ouvrir pour les modifier, créer de nouveaux fichiers de bibliothèque et
effectuer des opérations simples de gestion des symboles, telles que l’ajout,
la duplication, le renommage et la suppression.

Pour parcourir les bibliothèques et placer des symboles dans un dessin, consultez
[Utilisation des bibliothèques de symboles](../Using-Symbol-Libraries/). Pour dessiner ou modifier le symbole
lui-même, notamment ses broches et ses propriétés, consultez [Modification d’un
symbole](../Editing-a-Symbol/).

Les fichiers de bibliothèque utilisent l’extension `.tclib` et peuvent être stockés sur votre ordinateur ou,
avec l’intégration Google, sur Google Drive. Ils sont compatibles entre la version
de bureau de TinyCAD et sa version pour navigateur.

Vous pouvez également charger des bibliothèques créées avec la version v3 historique de TinyCAD.

<div class="manual-tabset" data-tabset="product-mode" data-tabset-label="Choose your TinyCAD product" data-default-tab="Browser" markdown="1">

### Navigateur
{: #browser}

#### Ouvrir une bibliothèque existante depuis un fichier local
{: #open-an-existing-library-from-a-local-file}

1. Ouvrez un autre onglet ou une autre fenêtre de TinyCAD web.
2. Utilisez **Ouvrir** pour ouvrir un fichier de bibliothèque `.tclib`.
3. Gardez cet onglet ouvert pendant que vous travaillez sur la bibliothèque.

Une fois la bibliothèque ouverte, vous pouvez parcourir ses symboles ou les faire glisser depuis cette fenêtre dans
votre dessin, ou modifier les définitions des symboles de la bibliothèque.

#### Rendre une bibliothèque Google Drive disponible
{: #make-a-google-drive-library-available}

Si vous avez déjà créé des bibliothèques avec TinyCAD pour ordinateur, autorisez TinyCAD web à y accéder
pour chacune d’elles :

1. Dans Google Drive, faites un clic droit sur le fichier `.tclib`.
2. Choisissez **Ouvrir avec -> TinyCAD**.

<img src="/v4/images/media2/image1.png" alt="Google Drive context menu showing Open with TinyCAD for a library file" style="width: 6.26806in; height: 4.54514in;" />

Répétez cette opération pour **chaque** bibliothèque que vous souhaitez rendre disponible.

Cette opération ouvre la bibliothèque pour modification. Si vous avez seulement besoin d’y accéder, vous pouvez
ensuite fermer cet onglet ou cette fenêtre.

**Remarque :** Google Drive peut parfois tenir compte de la casse. Si `TinyCAD`
n’apparaît pas dans **Ouvrir avec**, vérifiez que `.tclib` est en minuscules.

Dans votre session de dessin :

1. Ouvrez **Mes bibliothèques**.
2. Cliquez sur **Actualiser** à côté de **Mes bibliothèques**.

<img src="/v4/images/media2/image2.png" alt="My Libraries panel with the Refresh button used to reload available libraries" />

Après l’actualisation, les bibliothèques sont répertoriées :

<img src="/v4/images/media2/image4.png" alt="My Libraries panel listing available custom symbol libraries"  />

Vous pouvez parcourir les bibliothèques en les développant :

<img src="/v4/images/media2/image3.png" alt="Library browser showing symbol search results and a preview button"  />

#### Créer une bibliothèque
{: #creating-a-new-library}

Utilisez l’élément de menu **Nouvelle bibliothèque personnalisée** :

<img src="/v4/images/media2/image5.png" alt="Menu with the New Custom Library command"/>

#### Modifier une bibliothèque
{: #edit-a-library}

Pour modifier une bibliothèque existante, ouvrez-la dans TinyCAD web à l’aide du bouton **Modifier** de la bibliothèque.

### Application de bureau
{: #desktop-app}

#### Ajouter ou supprimer des bibliothèques
{: #add-or-remove-libraries}

Avant de pouvoir utiliser des symboles d’une bibliothèque, celle-ci doit être ajoutée à la
liste des bibliothèques sous **Mes bibliothèques**.

![Panneau latéral Mes bibliothèques](/v4/images/media/image9.png)

Pour ajouter une bibliothèque à cette liste, cliquez sur **Ajouter**. Une boîte de dialogue de sélection de fichier
apparaît. Sélectionnez un fichier de bibliothèque portant l’extension `.tclib`.

Pour supprimer une bibliothèque de la liste, cliquez sur l’icône de modification de la bibliothèque afin d’ouvrir
la boîte de dialogue de la bibliothèque, puis cliquez sur **Supprimer**. Cela ne supprime pas le fichier ; l’opération
le retire uniquement de la liste.

#### Modifier une bibliothèque
{: #edit-a-library-1}

Dans la boîte de dialogue de modification des bibliothèques, sélectionnez la bibliothèque et cliquez sur **Modifier**. Une nouvelle
fenêtre s’ouvre et affiche les vignettes de la bibliothèque.

![Éditeur de bibliothèque affichant les vignettes des symboles](/v4/images/media/image10.png)

La fenêtre de modification de la bibliothèque permet de :

- Afficher les vignettes des symboles de la bibliothèque
- Ajouter de nouveaux symboles à la bibliothèque
- Supprimer, dupliquer et renommer les symboles de la bibliothèque
- Modifier les graphiques, les broches, les noms et les attributs d’un symbole
- Déplacer des symboles d’une bibliothèque à une autre

Sélectionnez un symbole en cliquant dessus. Une fois sélectionné, vous pouvez le modifier dans la fenêtre principale
ou utiliser les commandes pour le dupliquer ou le supprimer.

Lorsque vous avez terminé de modifier la bibliothèque, enregistrez-la à l’aide des commandes habituelles **Enregistrer**
ou **Enregistrer sous**.

Pour connaître le processus de modification des symboles, consultez [Modification d’un symbole](../Editing-a-Symbol/).

#### Créer une bibliothèque de symboles
{: #creating-a-new-symbol-library}

Utilisez le bouton **Nouveau** dans le panneau des bibliothèques. Une nouvelle fenêtre s’ouvre avec une
bibliothèque vide.

</div>

- Retour à [Symboles et bibliothèques](../Symbols-and-Libraries/)
- Retour au [sommaire de la v4](../CONTENTS/)
