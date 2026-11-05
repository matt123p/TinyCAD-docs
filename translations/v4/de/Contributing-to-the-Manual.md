---
layout: default
---
# Beiträge zum TinyCAD-Handbuch
{: #contributing-to-the-tinycad-manual}

Dieses Handbuch wird mit GitHub Pages veröffentlicht. Wenn Sie einen Fehler, einen fehlenden Schritt, einen unklaren
Screenshot oder veraltete Informationen finden, können Sie eine Korrektur mit einem Pull Request (PR) vorschlagen.

Diese Anleitung beschreibt zwei Arbeitsabläufe:

- **Schnelle Änderungen im Browser** (am besten für kleinere Textkorrekturen)
- **Lokales Bearbeiten und Vorschau** (am besten für größere Änderungen)

## Bevor Sie beginnen
{: #before-you-start}

Sie benötigen:

- Ein GitHub-Konto
- Für die lokale Bearbeitung: Git, Node.js, Ruby und Bundler

Details zum Repository:

- **Quell-Repository:** `https://github.com/matt123p/TinyCAD-docs`
- **Veröffentlichte Website:** GitHub-Pages-Ausgabe dieses Repositorys
- **Quellordner der Dokumentation:** `docs/`
- **v4-Seiten:** `docs/v4/`

## Option A: Schnelle Bearbeitung in GitHub (ohne lokale Einrichtung)
{: #option-a-quick-edit-in-github-no-local-setup}

Verwenden Sie diese Methode für Tippfehlerkorrekturen, kurze Erläuterungen oder Linkänderungen.

### 1) Seitenquelle auf GitHub öffnen
{: #open-the-page-source-on-github}

1. Rufen Sie das TinyCAD-Dokumentations-Repository auf:
   `https://github.com/matt123p/TinyCAD-docs`
2. Navigieren Sie in `docs/v4/` zu der Seite, die Sie bearbeiten möchten.
3. Öffnen Sie die Markdown-Datei (zum Beispiel `Rulers.md`).

### 2) Bearbeitung beginnen
{: #start-editing}

1. Klicken Sie auf das Stiftsymbol (**Diese Datei bearbeiten**).
2. Wenn Sie dazu aufgefordert werden, hilft GitHub Ihnen dabei, automatisch einen Fork zu erstellen.
3. Nehmen Sie Ihre Änderungen in Markdown vor.

### 3) Änderung committen
{: #commit-your-change}

1. Scrollen Sie zu **Änderungen committen**.
2. Verwenden Sie eine aussagekräftige Commit-Nachricht, zum Beispiel:
  `docs(v4): clarify ruler units in Rulers`
3. Wählen Sie **Einen neuen Branch für diesen Commit erstellen**.
4. Klicken Sie auf **Änderungen vorschlagen**.

### 4) Pull Request öffnen
{: #open-a-pull-request}

1. Klicken Sie auf **Vergleichen und Pull Request erstellen**.
2. Legen Sie als Basis-Repository `matt123p/TinyCAD-docs` und als Basis-Branch `main` fest.
3. Geben Sie den Titel und die Beschreibung des PR ein (Vorlage unten).
4. Senden Sie den PR ab.


## Option B: Lokal bearbeiten und Vorschau anzeigen (empfohlen für größere Änderungen)
{: #option-b-local-edit--preview-recommended-for-bigger-changes}

Verwenden Sie diese Methode, wenn Sie mehrere Dateien bearbeiten, Links überprüfen oder die Formatierung in einer Vorschau ansehen müssen.

### 1) Fork erstellen und klonen
{: #fork-and-clone}

1. Erstellen Sie auf GitHub einen Fork von `matt123p/TinyCAD-docs`.
2. Klonen Sie Ihren Fork:

```bash
git clone https://github.com/<your-username>/TinyCAD-docs.git
cd TinyCAD-docs
```

3. Fügen Sie das Upstream-Remote hinzu:

```bash
git remote add upstream https://github.com/matt123p/TinyCAD-docs.git
```

### 2) Abhängigkeiten installieren
{: #install-dependencies}

Dieses Repository stellt npm-Skripte bereit, die Bundler und Jekyll für Sie ausführen:

```bash
npm install
npm run bundle:install
```

### 3) Einen Branch für Ihre Änderung erstellen
{: #create-a-branch-for-your-change}

```bash
git checkout -b docs/v4-fix-rulers
```

Ideen für Branch-Namen:

- `docs/fix-typo-...`
- `docs/v4-update-...`
- `docs/add-...`

### 4) Änderungen vornehmen
{: #make-your-edits}

Die meisten Seiten für Benutzer befinden sich unter:

- `docs/v4/*.md` (v4-Handbuchseiten)
- `docs/v3/*.md` (v3-Handbuchseiten)
- `docs/_data/navigation.yml` (linke Navigation)

Wenn Sie eine neue Seite hinzufügen, aktualisieren Sie auch die Navigation, damit Benutzer sie finden können.

### 5) Website lokal in der Vorschau anzeigen
{: #preview-site-locally}

```bash
npm run serve
```

Öffnen Sie anschließend die im Terminal angezeigte lokale URL (in der Regel `http://127.0.0.1:4000`).

Prüfen Sie Folgendes:

- Die Überschriftenstruktur ist gut lesbar.
- Interne Links funktionieren.
- Die Navigation enthält die neue oder umbenannte Seite.
- Bilder werden korrekt geladen.

### 6) Committen und Pushen
{: #commit-and-push}

```bash
git add .
git commit -m "docs(v4): improve Rulers instructions"
git push -u origin docs/v4-fix-rulers
```

### 7) PR erstellen
{: #create-the-pr}

1. Öffnen Sie Ihren Fork auf GitHub.
2. Klicken Sie für Ihren Branch auf **Vergleichen und Pull Request erstellen**.
3. Legen Sie `matt123p/TinyCAD-docs:main` als Ziel fest.
4. Vervollständigen Sie Titel und Beschreibung des PR und senden Sie ihn ab.

## Checkliste für die Schreibqualität
{: #writing-quality-checklist}

Prüfen Sie vor dem Öffnen eines PR kurz Folgendes:

- Der Umfang ist klar abgegrenzt (ein Thema/ein Problem pro PR).
- Die Anweisungen entsprechen dem aktuellen Verhalten von TinyCAD.
- Die Sprache ist klar und prägnant.
- Linkziele sind erreichbar.
- Die Seite ist bei Bedarf in der Navigation verlinkt.
- Der vorhandene Stil und die Terminologie bleiben erhalten.

## Wiederverwendbare Tabsets für Browser/Desktop
{: #reusable-browserdesktop-tabsets}

Wenn eine Seite unterschiedliche Anweisungen für TinyCAD im Browser und in der
Desktop-App benötigt, verwenden Sie statt eigens für die Seite erstellter
Markup-Strukturen die gemeinsam genutzte Tabset-Komponente.

```md
<div class="manual-tabset" data-tabset="product-mode" data-tabset-label="Choose your TinyCAD product" data-default-tab="Browser" markdown="1">

### Browser

Browser-specific content.

### Desktop App

Desktop-specific content.

</div>
```

Hinweise:

- `data-tabset` ist der Synchronisierungs-/Speicherschlüssel. Verwenden Sie denselben Wert wieder, damit mehrere
  Tabsets auf derselben Seite synchronisiert bleiben.
- `data-default-tab` legt fest, welcher Tab beim ersten Besuch ausgewählt ist.
- Behalten Sie für jede Tab-Überschrift dieselbe Ebene bei (`###` im obigen Beispiel).

## Vorschlag für eine PR-Vorlage
{: #suggested-pr-template}

Kopieren Sie dies in die Beschreibung Ihres PR:

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

## Ihren Fork auf dem neuesten Stand halten
{: #keeping-your-fork-up-to-date}

Wenn Ihr PR längere Zeit offen ist, synchronisieren Sie Ihren Branch mit dem aktuellen `main`:

```bash
git fetch upstream
git checkout main
git merge upstream/main
git push origin main

git checkout docs/v4-fix-rulers
git merge main
git push
```

## Häufige Probleme und Lösungen
{: #common-issues-and-fixes}

- **PR zeigt nicht zusammenhängende Dateiänderungen an**
  - Erstellen Sie einen neuen Branch vom aktualisierten `main` und übernehmen Sie mit Cherry-Pick nur Ihre Commits.
- **Navigationseintrag fehlt**
  - Aktualisieren Sie `docs/_data/navigation.yml` und stellen Sie sicher, dass die URL mit dem Permalink-Pfad der Seite übereinstimmt.
- **Seite wird fehlerhaft dargestellt**
  - Prüfen Sie Überschriftenebenen, Listeneinzüge und die Markierungen für Codeblöcke.
- **Link funktioniert lokal, aber nicht auf Pages**
  - Bevorzugen Sie relative Links, wie sie an anderer Stelle in diesem Repository verwendet werden, und halten Sie die Seitennamen konsistent.

## Nach dem Einreichen
{: #after-submission}

Die Maintainer können um Änderungen bitten. Fügen Sie weitere Commits zum selben Branch/PR hinzu;
der PR wird automatisch aktualisiert. Sobald Ihre Änderungen genehmigt und zusammengeführt wurden, erscheinen sie
im veröffentlichten Handbuch, nachdem GitHub Pages die Website neu erstellt hat.

Vielen Dank, dass Sie die TinyCAD-Dokumentation verbessern.

- Zurück zu [Inhalt von v4](../CONTENTS/)
