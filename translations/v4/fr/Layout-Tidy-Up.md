---
layout: default
---
# Mise en page soignée
{: #layout-tidy-up}

**Auto-layout** (mise en page automatique) soigne un schéma existant en ajustant la position des composants, des fils et des étiquettes. Utilisez cette fonction pour rendre un circuit encombré plus facile à lire, réduire les coudes superflus ou mieux espacer les références et les valeurs.

Elle fonctionne sur la **feuille de schéma active**, dans le navigateur comme dans l’application Desktop. Elle préserve les connexions électriques existantes ; elle ne devine pas les connexions que vous vouliez dessiner et ne crée pas un circuit de toutes pièces.

## Ouvrir Auto-layout
{: #open-auto-layout}

Dans les deux produits, choisissez **Auto-layout** dans la barre d’outils, juste à côté de **Simulation**. Dans Desktop, vous pouvez également choisir **Tools → Auto-layout**.

Sélectionnez d’abord une feuille de schéma. L’outil n’est pas disponible lors de la modification d’une bibliothèque ou de l’affichage d’une feuille de simulation.

## Choisir les éléments à réorganiser
{: #choose-what-to-tidy}

Le paramètre **Apply to** de la boîte de dialogue propose :

- **Whole sheet** — réorganiser les éléments de circuit pris en charge sur la feuille active.
- **Selected Items** — réorganiser uniquement les éléments de circuit sélectionnés, en maintenant fixes les éléments hors de la sélection et en préservant les connexions à sa limite.

Pour travailler sur une petite zone, sélectionnez ensemble ses composants, ainsi que les fils et les étiquettes que vous souhaitez ajuster, avant d’ouvrir la boîte de dialogue. « Selected Items » est sélectionné par défaut lorsque la sélection contient un élément de circuit pris en charge. Cette option est désactivée si la sélection ne contient que des objets non pris en charge, comme des encadrés de note ou des formes de dessin, ou si rien n’est sélectionné.

Une sélection peut inclure des symboles, des fils, des étiquettes de réseau, des symboles d’alimentation, des marqueurs de non-connexion et des jonctions. Un composant hors de la sélection ne se déplace pas simplement parce qu’il est connecté à un composant sélectionné.

## Choisir l’intensité
{: #choose-the-strength}

**Strength** détermine dans quelle mesure la position des composants peut être modifiée :

| Intensité | Modifications possibles |
| --- | --- |
| **Low** | Les composants volumineux restent fixes ; les composants plus petits, les fils et les étiquettes peuvent tout de même bouger. |
| **Medium** | Jusqu’à deux composants volumineux peuvent bouger, ainsi que les composants plus petits, les fils et les étiquettes. C’est le réglage par défaut. |
| **High** | Tous les composants admissibles peuvent bouger, ainsi que les fils et les étiquettes. |

Commencez par Low si vous souhaitez préserver la disposition générale. Utilisez Medium ou High lorsque le circuit a besoin de davantage de marge pour être réorganisé. Low ne signifie pas « étiquettes uniquement » : ce réglage peut aussi modifier la position des petits composants et le tracé des fils.

La notion de « volumineux » est déterminée par la géométrie du symbole et le nombre de broches, et non par son importance électrique. Modifier l’intensité ne fait pas pivoter les composants, ne les redimensionne pas et ne les remplace pas ; leurs références, valeurs et paramètres de modèle restent inchangés.

## Lancer l’opération et examiner le résultat
{: #run-and-review-the-result}

1. Ouvrez un dessin, ou une copie modifiable d’un [exemple fourni](../Bundled-Examples/).
2. Sélectionnez la zone à réorganiser si vous souhaitez limiter l’opération.
3. Ouvrez **Auto-layout**, choisissez **Apply to** et **Strength**, puis cliquez sur **Go**.
4. Patientez pendant l’affichage de **Arranging layout…**. Si l’opération aboutit, le résultat est appliqué immédiatement et la boîte de dialogue se ferme.
5. Examinez le résultat. Utilisez **Undo** pour annuler toute la réorganisation en une seule étape si vous préférez retrouver la disposition d’origine.

{% include video-player.html src="/v4/videos/simulation/layout-tidy-up.mp4" poster="/v4/videos/simulation/layout-tidy-up.jpg" caption="Ouvrez Auto-layout, choisissez la portée et l’intensité, réorganisez l’exemple d’amplificateur, puis annulez la modification." %}

**Cancel** arrête le calcul et ferme la boîte de dialogue sans appliquer de modifications. Si la feuille change pendant l’exécution de l’outil, le résultat est abandonné ; relancez l’opération pour la feuille active.

Le message **No layout improvements were found** signifie que l’outil n’a trouvé aucune modification acceptable dans la portée et avec l’intensité choisies. Le dessin reste inchangé. Vous pouvez fermer la boîte de dialogue, sélectionner une autre zone, essayer une autre intensité ou effectuer un ajustement manuel.

## Améliorations apportées par l’outil
{: #what-the-tool-improves}

Auto-layout recherche plusieurs types d’améliorations :

- Des positions plus lisibles pour les références et les valeurs des composants, en gardant les champs groupés et à l’écart des éléments graphiques, des fils et des autres textes voisins.
- De meilleures positions pour les étiquettes de réseau simples le long des fils qui les portent, avec un alignement des étiquettes associées lorsque c’est possible.
- Des tracés de fils orthogonaux plus simples, moins de détours inutiles et des sorties plus dégagées au niveau des broches des composants.
- Une disposition plus compacte des composants connectés et un espacement régulier des composants répétés.
- Des tracés parallèles ordonnés pour les fils associés, lorsque leurs connexions et l’espace disponible le permettent.

L’outil ne réorganise pas les encadrés de note, les bus, les indicateurs de port de forme personnalisée, les dessins de bibliothèque ni les éléments fixes de la page. Certains symboles denses ou inhabituels nécessitent encore des ajustements manuels. Un fil plus long peut donner un meilleur résultat s’il laisse de la place à une étiquette ou rend une connexion plus claire.

## Vérifier les connexions avant la réorganisation
{: #check-connections-before-tidying}

Auto-layout considère la **connectivité existante du dessin comme point de départ**. Avant d’accepter les modifications, l’outil vérifie à la fois l’appartenance aux réseaux électriques et les connexions physiques des fils. Les étiquettes de réseau nommées ne peuvent pas masquer un fil physiquement rompu lors de ces vérifications.

Un fil qui passe par l’extrémité d’un autre fil ou par une prise peut établir une connexion électrique même en l’absence de point de jonction visible. Si ce contact est accidentel, corrigez-le avant de lancer Auto-layout : l’outil ne peut pas déterminer qu’une connexion existante résulte d’une erreur de dessin. Il ne déplace pas les jonctions ambiguës pour relier des réseaux auparavant séparés.

Après la réorganisation, vérifiez les dérivations, les connexions aux broches et les tracés autour des prises inutilisées. Utilisez le [contrôle des règles de conception](../Design-Rules-Check/) si nécessaire, et comparez le circuit aux connexions souhaitées. Si un dessin de simulation est marqué comme modifié, [relancez la simulation](../Simulation/) avant de considérer les anciens résultats comme des mesures du dessin actuel.

## Auto-layout ou fil point à point ?
{: #auto-layout-or-point-to-point-wire}

Utilisez **Auto-layout** pour réorganiser la géométrie déjà présente dans le schéma. Utilisez [Point-to-Point Wire](../Wires/#auto-routing) pour créer une nouvelle connexion routée entre deux extrémités. L’[outil Wire](../Wires/#placing-wires) ordinaire vous permet de choisir vous-même chaque coude.

Voir aussi [Aligner sur la grille](../Snap-to-Grid/), [Étiquettes](../Labels/) et [Format de page](../Page-Size/).
