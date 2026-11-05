---
layout: default
---
# Contribuer au manuel TinyCAD
{: #contributing-to-the-tinycad-manual}

Ce manuel est publié avec GitHub Pages. Si vous repérez une erreur, une étape manquante, une
capture d’écran peu claire ou des informations obsolètes, vous pouvez proposer une correction via une Pull Request (PR).

Ce guide présente deux méthodes de travail :

- **Modifications rapides dans votre navigateur** (idéal pour corriger de petits passages)
- **Modification et aperçu en local** (idéal pour des changements plus importants)

## Avant de commencer
{: #before-you-start}

Vous aurez besoin de :

- Un compte GitHub
- Pour les modifications en local : Git, Node.js, Ruby et Bundler

Détails du dépôt :

- **Dépôt source :** `https://github.com/matt123p/TinyCAD-docs`
- **Site publié :** sortie GitHub Pages de ce dépôt
- **Dossier source de la documentation :** `docs/`
- **Pages v4 :** `docs/v4/`

## Option A : Modification rapide dans GitHub (sans configuration locale)
{: #option-a-quick-edit-in-github-no-local-setup}

Utilisez cette méthode pour corriger des fautes de frappe, apporter de brèves précisions ou mettre à jour des liens.

### 1) Ouvrir le code source de la page sur GitHub
{: #open-the-page-source-on-github}

1. Accédez au dépôt de documentation TinyCAD :
   `https://github.com/matt123p/TinyCAD-docs`
2. Recherchez la page que vous souhaitez modifier dans `docs/v4/`.
3. Ouvrez le fichier Markdown (par exemple `Rulers.md`).

### 2) Commencer la modification
{: #start-editing}

1. Cliquez sur l’icône en forme de crayon (**Modifier ce fichier**).
2. Si nécessaire, GitHub vous aidera à créer automatiquement un fork.
3. Effectuez vos modifications en Markdown.

### 3) Valider votre modification
{: #commit-your-change}

1. Faites défiler jusqu’à **Valider les modifications**.
2. Choisissez un message de commit clair, par exemple :
  `docs(v4): clarify ruler units in Rulers`
3. Choisissez **Créer une nouvelle branche pour ce commit**.
4. Cliquez sur **Proposer des modifications**.

### 4) Ouvrir une Pull Request
{: #open-a-pull-request}

1. Cliquez sur **Comparer et créer une pull request**.
2. Définissez le dépôt de base sur `matt123p/TinyCAD-docs` et la branche de base sur `main`.
3. Renseignez le titre et la description de la PR (modèle ci-dessous).
4. Envoyez la PR.


## Option B : Modification et aperçu en local (recommandé pour les changements importants)
{: #option-b-local-edit--preview-recommended-for-bigger-changes}

Utilisez cette méthode si vous devez modifier plusieurs fichiers, vérifier des liens ou prévisualiser la mise en forme.

### 1) Créer un fork et cloner le dépôt
{: #fork-and-clone}

1. Créez un fork de `matt123p/TinyCAD-docs` sur GitHub.
2. Clonez votre fork :

```bash
git clone https://github.com/<your-username>/TinyCAD-docs.git
cd TinyCAD-docs
```

3. Ajoutez le dépôt distant en amont :

```bash
git remote add upstream https://github.com/matt123p/TinyCAD-docs.git
```

### 2) Installer les dépendances
{: #install-dependencies}

Ce dépôt fournit des scripts npm qui exécutent Bundler et Jekyll pour vous :

```bash
npm install
npm run bundle:install
```

### 3) Créer une branche pour votre modification
{: #create-a-branch-for-your-change}

```bash
git checkout -b docs/v4-fix-rulers
```

Suggestions de noms de branche :

- `docs/fix-typo-...`
- `docs/v4-update-...`
- `docs/add-...`

### 4) Effectuer vos modifications
{: #make-your-edits}

La plupart des pages destinées aux utilisateurs se trouvent dans :

- `docs/v4/*.md` (pages du manuel v4)
- `docs/v3/*.md` (pages du manuel v3)
- `docs/_data/navigation.yml` (navigation latérale)

Si vous ajoutez une nouvelle page, mettez également à jour la navigation afin que les utilisateurs puissent la trouver.

### 5) Prévisualiser le site en local
{: #preview-site-locally}

```bash
npm run serve
```

Ouvrez ensuite l’URL locale affichée dans le terminal (généralement `http://127.0.0.1:4000`).

Vérifiez les points suivants :

- La structure des titres est lisible
- Les liens internes fonctionnent
- La navigation inclut la nouvelle page ou la page renommée
- Les images s’affichent correctement

### 6) Valider et envoyer vos modifications
{: #commit-and-push}

```bash
git add .
git commit -m "docs(v4): improve Rulers instructions"
git push -u origin docs/v4-fix-rulers
```

### 7) Créer la PR
{: #create-the-pr}

1. Ouvrez votre fork sur GitHub.
2. Cliquez sur **Comparer et créer une pull request** pour votre branche.
3. Choisissez `matt123p/TinyCAD-docs:main` comme cible.
4. Renseignez le titre et la description de la PR, puis envoyez-la.

## Liste de contrôle de la qualité rédactionnelle
{: #writing-quality-checklist}

Avant d’ouvrir une PR, vérifiez rapidement les points suivants :

- Le périmètre est ciblé (un sujet ou problème par PR)
- Les instructions correspondent au comportement actuel de TinyCAD
- Le texte est clair et concis
- Les liens mènent à la bonne destination
- La page figure dans la navigation lorsque cela est nécessaire
- Le style et la terminologie existants sont préservés

## Ensembles d’onglets réutilisables pour le navigateur et l’application de bureau
{: #reusable-browserdesktop-tabsets}

Lorsqu’une page doit présenter des instructions différentes pour TinyCAD dans le navigateur et dans
l’application de bureau, utilisez le composant d’ensemble d’onglets partagé au lieu de créer un balisage
spécifique à la page.

```md
<div class="manual-tabset" data-tabset="product-mode" data-tabset-label="Choose your TinyCAD product" data-default-tab="Browser" markdown="1">

### Browser

Browser-specific content.

### Desktop App

Desktop-specific content.

</div>
```

Remarques :

- `data-tabset` est la clé de synchronisation et de stockage. Réutilisez la même valeur pour synchroniser plusieurs
  ensembles d’onglets d’une même page.
- `data-default-tab` définit l’onglet sélectionné lors de la première visite.
- Conservez le même niveau pour le titre de chaque onglet (`###` dans l’exemple ci-dessus).

## Modèle de PR suggéré
{: #suggested-pr-template}

Copiez-collez ceci dans la description de votre PR :

```md
## Summary
-

## What changed
-

## Why
-

## Validation
- [ ] Previewed locally with `npm run serve`
- [ ] Checked navigation and links
- [ ] Confirmed formatting on rendered page

## Screenshots (if relevant)
-
```

## Garder votre fork à jour
{: #keeping-your-fork-up-to-date}

Si votre PR reste ouverte pendant un certain temps, synchronisez votre branche avec la dernière version de `main` :

```bash
git fetch upstream
git checkout main
git merge upstream/main
git push origin main

git checkout docs/v4-fix-rulers
git merge main
git push
```

## Problèmes courants et solutions
{: #common-issues-and-fixes}

- **La PR affiche des modifications sans rapport avec votre travail**
  - Créez une nouvelle branche à partir de `main` mis à jour et appliquez avec cherry-pick uniquement votre ou vos commits.
- **Un élément de navigation est manquant**
  - Mettez à jour `docs/_data/navigation.yml` et vérifiez que l’URL correspond au chemin du permalien de la page.
- **La page s’affiche de manière étrange**
  - Vérifiez les niveaux de titre, l’indentation des listes et les marqueurs des blocs de code délimités.
- **Le lien fonctionne en local, mais pas sur Pages**
  - Préférez les liens relatifs utilisés ailleurs dans ce dépôt et veillez à conserver des noms de page cohérents.

## Après l’envoi
{: #after-submission}

Les responsables de maintenance peuvent demander des modifications. Ajoutez les commits de suivi à la même branche/PR ;
la PR sera mise à jour automatiquement. Une fois approuvées et fusionnées, vos modifications apparaîtront
dans le manuel publié après la reconstruction de GitHub Pages.

Merci de contribuer à l’amélioration de la documentation TinyCAD.

- Retour à la [table des matières v4](../CONTENTS/)
