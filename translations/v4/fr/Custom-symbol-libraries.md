---
layout: default
---
# Bibliothèques de symboles personnalisées
{: #custom-symbol-libraries}

Cette page traite des tâches liées aux bibliothèques : les ajouter à TinyCAD, les ouvrir
pour les modifier, créer de nouveaux fichiers de bibliothèque et effectuer des opérations
simples de gestion des symboles, comme les ajouter, les dupliquer, les renommer et les supprimer.

Pour parcourir les bibliothèques et placer des symboles dans un dessin, consultez [Utiliser les bibliothèques de
symboles](../Using-Symbol-Libraries/). Pour dessiner ou modifier le symbole
lui-même, y compris ses broches et ses propriétés, consultez [Modifier un
symbole](../Editing-a-Symbol/).

L'[assistant IA de ](../AI-Assistant/) peut ajouter des composants à une bibliothèque ouverte pour modification. Créez ou ouvrez d'abord la bibliothèque, puis décrivez les composants requis et joignez leurs fiches techniques. Vérifiez les symboles générés et enregistrez la bibliothèque normalement.

Les fichiers de bibliothèque utilisent l'extension `.tclib` et peuvent être stockés sur votre ordinateur ou,
avec l'intégration Google, sur Google Drive. Ils sont compatibles entre la
version de bureau de TinyCAD et la version navigateur.

Vous pouvez également charger des bibliothèques créées avec l'ancienne version v3 de TinyCAD.

<div class="manual-tabset" data-tabset="product-mode" data-tabset-label="Choose your TinyCAD product" data-default-tab="Browser" markdown="1">

### Navigateur
{: #browser}

#### Ouvrir une bibliothèque existante depuis un fichier local
{: #open-an-existing-library-from-a-local-file}

1. Ouvrez un autre onglet ou une autre fenêtre TinyCAD web.
2. Utilisez **Ouvrir (Open)** pour ouvrir un fichier de bibliothèque `.tclib`.
3. Gardez cet onglet ouvert pendant que vous travaillez avec la bibliothèque.

Une fois la bibliothèque ouverte, vous pouvez parcourir ses symboles ou les faire glisser depuis cette fenêtre vers
votre dessin, ou modifier les définitions des symboles dans la bibliothèque.

#### Rendre une bibliothèque Google Drive disponible
{: #make-a-google-drive-library-available}

Si vous avez déjà des bibliothèques créées avec TinyCAD pour ordinateur, autorisez TinyCAD web
à accéder à chacune d'elles :

1. Dans Google Drive, faites un clic droit sur le fichier `.tclib`.
2. Choisissez **Ouvrir avec -> TinyCAD**.

<img src="/v4/images/media2/image1.png" alt="Google Drive context menu showing Open with TinyCAD for a library file" style="width: 6.26806in; height: 4.54514in;" />

Répétez cette opération pour **chaque** bibliothèque que vous souhaitez rendre disponible.

Cette action ouvre la bibliothèque pour modification. Si vous avez uniquement besoin d'y accéder, vous pouvez
ensuite fermer cet onglet ou cette fenêtre.

**Remarque :** Google Drive peut parfois tenir compte de la casse. Si `TinyCAD`
n'apparaît pas dans **Ouvrir avec**, vérifiez que `.tclib` est en minuscules.

De retour dans votre session de dessin :

1. Ouvrez **Mes bibliothèques (My Libraries)**.
2. Cliquez sur **Actualiser (Refresh)** à côté de **Mes bibliothèques (My Libraries)**.

<img src="/v4/images/media2/image2.png" alt="My Libraries panel with the Refresh button used to reload available libraries" />

Après l'actualisation, les bibliothèques sont répertoriées :

<img src="/v4/images/media2/image4.png" alt="My Libraries panel listing available custom symbol libraries"  />

Vous pouvez parcourir les bibliothèques en les développant :

<img src="/v4/images/media2/image3.png" alt="Library browser showing symbol search results and a preview button"  />

#### Créer une nouvelle bibliothèque
{: #creating-a-new-library}

Utilisez l'élément de menu **Nouvelle bibliothèque personnalisée (New Custom Library)** :

<img src="/v4/images/media2/image5.png" alt="Menu with the New Custom Library command"/>

#### Modifier une bibliothèque
{: #edit-a-library}

Modifiez une bibliothèque existante en l'ouvrant dans TinyCAD web avec le bouton **Modifier (Edit)** de la bibliothèque.

### Application de bureau
{: #desktop-app}

#### Ajouter ou supprimer des bibliothèques
{: #add-or-remove-libraries}

Avant de pouvoir utiliser des symboles d'une bibliothèque, celle-ci doit être ajoutée à la
liste des bibliothèques sous **Mes bibliothèques (My Libraries)**.

![Volet latéral Mes bibliothèques](/v4/images/media/image9.png)

Pour ajouter une bibliothèque à cette liste, cliquez sur **Ajouter (Add)**. Une boîte de dialogue de sélection de fichier
apparaît. Sélectionnez un fichier de bibliothèque portant l'extension `.tclib`.

Pour supprimer une bibliothèque de la liste, cliquez sur l'icône de modification de la bibliothèque afin d'ouvrir
la boîte de dialogue de la bibliothèque, puis cliquez sur **Supprimer (Remove)**. Le fichier n'est pas supprimé ; il
est simplement retiré de la liste.

#### Modifier une bibliothèque
{: #edit-a-library-1}

Utilisez la boîte de dialogue de modification des bibliothèques pour sélectionner la bibliothèque et cliquer sur **Modifier (Edit)**. Une nouvelle
fenêtre s'ouvre et affiche les miniatures de la bibliothèque.

![Éditeur de bibliothèque affichant les miniatures des symboles](/v4/images/media/image10.png)

Utilisez la fenêtre de modification de bibliothèque pour :

- Afficher les miniatures des symboles de la bibliothèque
- Ajouter de nouveaux symboles à la bibliothèque
- Supprimer, dupliquer et renommer des symboles dans la bibliothèque
- Modifier les graphiques, les broches, les noms et les attributs d'un symbole
- Déplacer des symboles d'une bibliothèque à une autre

Sélectionnez un symbole en cliquant dessus. Une fois sélectionné, vous pouvez le modifier dans la fenêtre principale
ou utiliser les commandes pour le dupliquer ou le supprimer.

Lorsque vous avez terminé de modifier la bibliothèque, enregistrez-la à l'aide des commandes habituelles **Enregistrer (Save)**
ou **Enregistrer sous (Save As)**.

Pour connaître le flux de travail de modification au niveau des symboles, consultez [Modifier un symbole](../Editing-a-Symbol/).

#### Créer une nouvelle bibliothèque de symboles
{: #creating-a-new-symbol-library}

Utilisez le bouton **Nouveau (New)** du panneau des bibliothèques. Une nouvelle fenêtre s'ouvrira avec une
bibliothèque vide.

</div>

- Retour à [Symboles et bibliothèques](../Symbols-and-Libraries/)
- Retour au [contenu de la v4](../CONTENTS/)
