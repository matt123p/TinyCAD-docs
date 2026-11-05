---
layout: default
---
# Bijdragen aan de TinyCAD-handleiding
{: #contributing-to-the-tinycad-manual}

Deze handleiding wordt gepubliceerd met GitHub Pages. Als u een fout, ontbrekende stap, onduidelijke 
schermafbeelding of verouderde informatie aantreft, kunt u een wijziging voorstellen met een Pull Request (PR).

Deze gids beschrijft twee werkwijzen:

- **Snel bewerken in uw browser** (geschikt voor kleine tekstcorrecties)
- **Lokaal bewerken en vooraf bekijken** (geschikt voor grotere wijzigingen)

## Voordat u begint
{: #before-you-start}

U hebt nodig:

- Een GitHub-account
- Voor lokaal bewerken: Git, Node.js, Ruby en Bundler

Gegevens van de repository:

- **Bronrepository:** `https://github.com/matt123p/TinyCAD-docs`
- **Gepubliceerde site:** GitHub Pages-uitvoer van deze repository
- **Bronmap van de documentatie:** `docs/`
- **v4-pagina's:** `docs/v4/`

## Optie A: Snel bewerken in GitHub (zonder lokale installatie)
{: #option-a-quick-edit-in-github-no-local-setup}

Gebruik deze methode voor typefouten, korte verduidelijkingen of bijgewerkte links.

### 1) Open de paginabron op GitHub
{: #open-the-page-source-on-github}

1. Ga naar de TinyCAD-documentatierepository:
   `https://github.com/matt123p/TinyCAD-docs`
2. Blader naar de pagina die u wilt bewerken in `docs/v4/`.
3. Open het Markdown-bestand (bijvoorbeeld `Rulers.md`).

### 2) Begin met bewerken
{: #start-editing}

1. Klik op het potloodpictogram (**Dit bestand bewerken**).
2. Als daarom wordt gevraagd, helpt GitHub u automatisch een fork aan te maken.
3. Breng uw wijzigingen aan in Markdown.

### 3) Leg uw wijziging vast
{: #commit-your-change}

1. Scrol naar **Wijzigingen vastleggen**.
2. Gebruik een duidelijke commitmelding, bijvoorbeeld:
  `docs(v4): clarify ruler units in Rulers`
3. Kies **Een nieuwe branch maken voor deze commit**.
4. Klik op **Wijzigingen voorstellen**.

### 4) Open een Pull Request
{: #open-a-pull-request}

1. Klik op **Vergelijken en pull request maken**.
2. Stel de basisrepository in op `matt123p/TinyCAD-docs` en de basisbranch op `main`.
3. Vul de PR-titel en -beschrijving in (sjabloon hieronder).
4. Dien de PR in.


## Optie B: Lokaal bewerken + vooraf bekijken (aanbevolen voor grotere wijzigingen)
{: #option-b-local-edit--preview-recommended-for-bigger-changes}

Gebruik deze methode als u meerdere bestanden moet bewerken, links wilt controleren of de opmaak vooraf wilt bekijken.

### 1) Forken en klonen
{: #fork-and-clone}

1. Fork `matt123p/TinyCAD-docs` op GitHub.
2. Kloon uw fork:

```bash
git clone https://github.com/<your-username>/TinyCAD-docs.git
cd TinyCAD-docs
```

3. Voeg de upstream-afstandsbediening toe:

```bash
git remote add upstream https://github.com/matt123p/TinyCAD-docs.git
```

### 2) Afhankelijkheden installeren
{: #install-dependencies}

Deze repository bevat npm-scripts die Bundler + Jekyll voor u uitvoeren:

```bash
npm install
npm run bundle:install
```

### 3) Maak een branch voor uw wijziging
{: #create-a-branch-for-your-change}

```bash
git checkout -b docs/v4-fix-rulers
```

Ideeën voor branchnamen:

- `docs/fix-typo-...`
- `docs/v4-update-...`
- `docs/add-...`

### 4) Breng uw wijzigingen aan
{: #make-your-edits}

De meeste pagina's voor gebruikers staan onder:

- `docs/v4/*.md` (v4-handleidingpagina's)
- `docs/v3/*.md` (v3-handleidingpagina's)
- `docs/_data/navigation.yml` (linkernavigatie)

Als u een nieuwe pagina toevoegt, werk dan ook de navigatie bij zodat gebruikers deze kunnen vinden.

### 5) Bekijk de site lokaal
{: #preview-site-locally}

```bash
npm run serve
```

Open vervolgens de lokale URL die in de terminal wordt weergegeven (doorgaans `http://127.0.0.1:4000`).

Controleer:

- Of de kopstructuur goed leesbaar is
- Of interne links werken
- Of de navigatie uw nieuwe of hernoemde pagina bevat
- Of afbeeldingen correct worden geladen

### 6) Committen en pushen
{: #commit-and-push}

```bash
git add .
git commit -m "docs(v4): improve Rulers instructions"
git push -u origin docs/v4-fix-rulers
```

### 7) Maak de PR aan
{: #create-the-pr}

1. Open uw fork op GitHub.
2. Klik voor uw branch op **Vergelijken en pull request maken**.
3. Richt deze op `matt123p/TinyCAD-docs:main`.
4. Vul de PR-titel en -beschrijving in en dien de PR in.

## Checklist voor tekstkwaliteit
{: #writing-quality-checklist}

Controleer het volgende voordat u een PR opent:

- De reikwijdte is afgebakend (één onderwerp/probleem per PR)
- Instructies zijn correct voor het huidige gedrag van TinyCAD
- De taal is duidelijk en beknopt
- Links verwijzen naar geldige doelen
- De pagina is indien nodig opgenomen in de navigatie
- Bestaande stijl en terminologie zijn behouden

## Herbruikbare tabsets voor browser/desktop
{: #reusable-browserdesktop-tabsets}

Als een pagina verschillende instructies nodig heeft voor TinyCAD in de browser en de
desktopapp, gebruik dan de gedeelde tabsetcomponent in plaats van eigen pagin specifieke
opmaak te bedenken.

```md
<div class="manual-tabset" data-tabset="product-mode" data-tabset-label="Choose your TinyCAD product" data-default-tab="Browser" markdown="1">

### Browser

Browser-specific content.

### Desktop App

Desktop-specific content.

</div>
```

Opmerkingen:

- `data-tabset` is de synchronisatie-/opslagsleutel. Gebruik dezelfde waarde opnieuw om meerdere
tabsets op dezelfde pagina gesynchroniseerd te houden.
- `data-default-tab` stelt het tabblad in dat bij het eerste bezoek wordt geselecteerd.
- Houd de koppen van de tabbladen op hetzelfde niveau (`###` in het voorbeeld hierboven).

## Voorgesteld PR-sjabloon
{: #suggested-pr-template}

Kopieer/plak dit in uw PR-beschrijving:

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

## Uw fork up-to-date houden
{: #keeping-your-fork-up-to-date}

Als uw PR een tijdje openstaat, synchroniseer dan uw branch met de nieuwste `main`:

```bash
git fetch upstream
git checkout main
git merge upstream/main
git push origin main

git checkout docs/v4-fix-rulers
git merge main
git push
```

## Veelvoorkomende problemen en oplossingen
{: #common-issues-and-fixes}

- **PR toont niet-gerelateerde bestandswijzigingen**
  - Maak een nieuwe branch vanaf de bijgewerkte `main` en cherry-pick alleen uw commit(s).
- **Navigatie-item ontbreekt**
  - Werk `docs/_data/navigation.yml` bij en controleer of de URL overeenkomt met het permalinkpad van de pagina.
- **Pagina wordt vreemd weergegeven**
  - Controleer kopniveaus, inspringing van lijsten en markeringen voor ingesloten codeblokken.
- **Link werkt lokaal maar niet op Pages**
  - Gebruik bij voorkeur relatieve links zoals elders in deze repository en houd paginanamen consistent.

## Na indiening
{: #after-submission}

Onderhouders kunnen om wijzigingen vragen. Voeg vervolgcommits toe aan dezelfde branch/PR;
de PR wordt automatisch bijgewerkt. Zodra deze is goedgekeurd en samengevoegd, verschijnen uw wijzigingen
in de gepubliceerde handleiding nadat GitHub Pages opnieuw is opgebouwd.

Bedankt voor het verbeteren van de TinyCAD-documentatie.

- Terug naar [v4-inhoudsopgave](../CONTENTS/)
