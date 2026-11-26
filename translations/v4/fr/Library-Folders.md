---
layout: default
---
# Dossiers de bibliothèques
{: #library-folders}

## Vue d’ensemble
{: #overview}

Le panneau Mes bibliothèques (My Libraries) prend en charge les dossiers, ce qui vous permet d’organiser les bibliothèques installées en groupes.


<div class="manual-tabset" data-tabset="product-mode" data-tabset-label="Choose your TinyCAD product" data-default-tab="Browser" markdown="1">

### Navigateur
{: #browser}

Les dossiers de bibliothèques ne sont pas pris en charge dans la version de TinyCAD pour navigateur.

### Application de bureau
{: #desktop-app}

Les dossiers sont enregistrés avec votre liste de bibliothèques. Leur structure est donc préservée la prochaine fois que vous ouvrez TinyCAD.

Les dossiers de bibliothèques sont disponibles uniquement dans l’application de bureau.

Les modes basés sur un navigateur affichent toujours Mes bibliothèques lorsqu’ils le permettent, mais ne proposent ni la création de dossiers, ni le regroupement des dossiers, ni le glisser-déposer de dossiers.

![Mes bibliothèques dans l’application de bureau, avec Circuit components développé, un dossier Sensors and modules vide et des bibliothèques non classées.](../Images/library-folders/folders-overview.png){: width="460" style="max-width: 100%;"}

#### Actions possibles
{: #what-you-can-do}

- Créer des dossiers pour regrouper des bibliothèques associées
- Renommer des dossiers
- Supprimer des dossiers
- Réorganiser les dossiers par glisser-déposer
- Déplacer des bibliothèques entre les dossiers par glisser-déposer
- Ajouter plusieurs fichiers de bibliothèque existants en une seule opération
- Ajouter des bibliothèques directement dans le dossier sélectionné

Les bibliothèques qui ne sont attribuées à aucun dossier apparaissent dans la section Non classées (Unfiled).

#### Créer un dossier
{: #create-a-folder}

1. Ouvrez le panneau Bibliothèques.
2. Passez à Mes bibliothèques (My Libraries).
3. Sélectionnez le bouton de dossier dans l’en-tête du panneau.
4. Saisissez un nom pour le nouveau dossier, par exemple `Project libraries`.
5. Choisissez **Ajouter (Add)**.

![Boîte de dialogue de création de dossier, avec Project libraries saisi et le bouton Ajouter prêt à confirmer.](../Images/library-folders/folder-create.png){: width="600" style="max-width: 100%;"}

Le nouveau dossier apparaît dans la liste des bibliothèques et peut être sélectionné immédiatement.

#### Sélectionner un dossier
{: #select-a-folder}

Cliquez sur une ligne de dossier pour le sélectionner.

Le dossier sélectionné est utilisé lorsque vous ajoutez des bibliothèques existantes.

Si vous cliquez sur une bibliothèque, TinyCAD sélectionne automatiquement le dossier auquel elle appartient. Cela indique clairement où seront placées les bibliothèques ajoutées.

#### Ajouter des bibliothèques à un dossier
{: #add-libraries-to-a-folder}

1. Sélectionnez le dossier cible dans Mes bibliothèques (My Libraries).
2. Sélectionnez Ajouter (Add).
3. Choisissez un ou plusieurs fichiers de bibliothèque existants.

Les bibliothèques sélectionnées sont ajoutées au dossier sélectionné.

![Project libraries sélectionné dans Mes bibliothèques, avec une zone de dépôt vide et le bouton d’ajout de bibliothèques dans l’en-tête.](../Images/library-folders/folder-selected.png){: width="460" style="max-width: 100%;"}

Si vous ne sélectionnez pas de dossier personnalisé, les bibliothèques sont ajoutées à Non classées (Unfiled).

#### Déplacer des bibliothèques entre les dossiers
{: #move-libraries-between-folders}

Faites glisser une bibliothèque depuis son emplacement actuel et déposez-la sur un autre dossier.

Vous pouvez également déposer une bibliothèque dans Non classées (Unfiled) pour la retirer d’un dossier personnalisé.

Si un dossier est vide, TinyCAD affiche une zone de dépôt pour vous permettre d’y déplacer des bibliothèques.

![Sensor interfaces déplacé de Non classées vers Sensors and modules, avec les commandes de réorganisation, de renommage et de suppression du dossier sélectionné visibles.](../Images/library-folders/folder-organise.png){: width="460" style="max-width: 100%;"}

#### Réorganiser les dossiers
{: #reorder-folders}

Les dossiers peuvent être réorganisés directement dans le panneau.

1. Placez le pointeur sur le dossier à déplacer.
2. Faites glisser la poignée de réorganisation.
3. Déposez le dossier à l’emplacement souhaité.

Le nouvel ordre est enregistré automatiquement.

#### Renommer ou supprimer un dossier
{: #rename-or-delete-a-folder}

Les boutons d’action du dossier s’affichent lorsque vous placez le pointeur sur un dossier ou que vous le sélectionnez.

- Sélectionnez **Renommer le dossier (Rename folder)** (l’icône en forme de crayon) pour renommer le dossier. Saisissez le nouveau nom, puis choisissez **Renommer (Rename)**.
- Sélectionnez **Supprimer le dossier (Remove folder)** (l’icône de corbeille) pour supprimer le dossier. Confirmez en choisissant **Supprimer (Delete)**.

![Boîte de dialogue de renommage du dossier, modifiant Sensors and modules en Sensors and displays.](../Images/library-folders/folder-rename.png){: width="600" style="max-width: 100%;"}

Lorsqu’un dossier est supprimé, les bibliothèques qu’il contient sont déplacées vers Non classées (Unfiled). Les fichiers de bibliothèque eux-mêmes ne sont pas supprimés de TinyCAD.

#### Bibliothèques non classées
{: #unfiled-libraries}

Non classées (Unfiled) est l’emplacement par défaut des bibliothèques qui ne sont attribuées à aucun dossier personnalisé.

- Les nouvelles bibliothèques sont placées dans Non classées si aucun dossier personnalisé n’est sélectionné
- Les bibliothèques d’un dossier supprimé sont déplacées vers Non classées
- Vous pouvez faire glisser des bibliothèques de Non classées vers n’importe quel dossier personnalisé

En l’absence de dossiers personnalisés, TinyCAD affiche simplement la liste des bibliothèques sans en-tête Non classées.

#### Remarques
{: #notes}

- Les modifications de l’organisation des dossiers sont enregistrées avec votre configuration de bibliothèques
- L’ajout simultané de plusieurs bibliothèques est possible lorsque vous choisissez des fichiers de bibliothèque existants
- L’ordre des dossiers et l’attribution des bibliothèques aux dossiers sont conservés d’une session à l’autre

</div>


- Retour à [Symboles et bibliothèques (Symbols & Libraries)](../Symbols-and-Libraries/)
- Retour au [sommaire de v4](../)
