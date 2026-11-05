---
layout: default
---
# Contribuire al manuale di TinyCAD
{: #contributing-to-the-tinycad-manual}

Questo manuale è pubblicato con GitHub Pages. Se trovi un errore, un passaggio mancante, uno screenshot poco chiaro o informazioni non aggiornate, puoi proporre una correzione con una Pull Request (PR).

Questa guida illustra due modalità di lavoro:

- **Modifiche rapide nel browser** (ideali per piccole correzioni testuali)
- **Modifica e anteprima in locale** (ideali per modifiche più ampie)

## Prima di iniziare
{: #before-you-start}

Ti serviranno:

- Un account GitHub
- Per le modifiche in locale: Git, Node.js, Ruby e Bundler

Dettagli del repository:

- **Repository sorgente:** `https://github.com/matt123p/TinyCAD-docs`
- **Sito pubblicato:** output GitHub Pages di questo repository
- **Cartella sorgente della documentazione:** `docs/`
- **Pagine v4:** `docs/v4/`

## Opzione A: modifica rapida su GitHub (senza configurazione locale)
{: #option-a-quick-edit-in-github-no-local-setup}

Usa questo metodo per correggere refusi, aggiungere brevi chiarimenti o aggiornare link.

### 1) Aprire il sorgente della pagina su GitHub
{: #open-the-page-source-on-github}

1. Vai al repository della documentazione di TinyCAD:
   `https://github.com/matt123p/TinyCAD-docs`
2. Cerca la pagina che vuoi modificare in `docs/v4/`.
3. Apri il file Markdown (ad esempio `Rulers.md`).

### 2) Iniziare a modificare
{: #start-editing}

1. Fai clic sull'icona della matita (**Modifica questo file (Edit this file)**).
2. Se richiesto, GitHub ti aiuterà a creare automaticamente un fork.
3. Apporta le modifiche in Markdown.

### 3) Eseguire il commit della modifica
{: #commit-your-change}

1. Scorri fino a **Esegui il commit delle modifiche (Commit changes)**.
2. Usa un messaggio di commit chiaro, ad esempio:
  `docs(v4): clarify ruler units in Rulers`
3. Scegli **Crea un nuovo branch per questo commit (Create a new branch for this commit)**.
4. Fai clic su **Proponi modifiche (Propose changes)**.

### 4) Aprire una Pull Request
{: #open-a-pull-request}

1. Fai clic su **Confronta e crea una pull request (Compare & pull request)**.
2. Imposta il repository di base su `matt123p/TinyCAD-docs` e il branch di base su `main`.
3. Compila il titolo e la descrizione della PR (modello qui sotto).
4. Invia la PR.


## Opzione B: modifica e anteprima in locale (consigliata per le modifiche più ampie)
{: #option-b-local-edit--preview-recommended-for-bigger-changes}

Usa questo metodo quando devi modificare più file, controllare i link o visualizzare un'anteprima della formattazione.

### 1) Creare un fork e clonarlo
{: #fork-and-clone}

1. Crea un fork di `matt123p/TinyCAD-docs` su GitHub.
2. Clona il tuo fork:

```bash
git clone https://github.com/<your-username>/TinyCAD-docs.git
cd TinyCAD-docs
```

3. Aggiungi il remote upstream:

```bash
git remote add upstream https://github.com/matt123p/TinyCAD-docs.git
```

### 2) Installare le dipendenze
{: #install-dependencies}

Questo repository fornisce script npm che eseguono Bundler + Jekyll per te:

```bash
npm install
npm run bundle:install
```

### 3) Creare un branch per la modifica
{: #create-a-branch-for-your-change}

```bash
git checkout -b docs/v4-fix-rulers
```

Idee per i nomi dei branch:

- `docs/fix-typo-...`
- `docs/v4-update-...`
- `docs/add-...`

### 4) Apportare le modifiche
{: #make-your-edits}

La maggior parte delle pagine rivolte agli utenti si trova in:

- `docs/v4/*.md` (pagine del manuale v4)
- `docs/v3/*.md` (pagine del manuale v3)
- `docs/_data/navigation.yml` (navigazione a sinistra)

Se aggiungi una nuova pagina, aggiorna anche la navigazione, così gli utenti potranno trovarla.

### 5) Visualizzare l'anteprima del sito in locale
{: #preview-site-locally}

```bash
npm run serve
```

Poi apri l'URL locale mostrato nel terminale (in genere `http://127.0.0.1:4000`).

Controlla che:

- La struttura dei titoli sia leggibile
- I link interni funzionino
- La navigazione includa la pagina nuova o rinominata
- Le immagini vengano caricate correttamente

### 6) Eseguire il commit e il push
{: #commit-and-push}

```bash
git add .
git commit -m "docs(v4): improve Rulers instructions"
git push -u origin docs/v4-fix-rulers
```

### 7) Creare la PR
{: #create-the-pr}

1. Apri il tuo fork su GitHub.
2. Fai clic su **Confronta e crea una pull request (Compare & pull request)** per il tuo branch.
3. Scegli come destinazione `matt123p/TinyCAD-docs:main`.
4. Completa il titolo e la descrizione della PR e inviala.

## Checklist per la qualità della scrittura
{: #writing-quality-checklist}

Prima di aprire una PR, verifica rapidamente che:

- L'ambito sia circoscritto (un argomento/problema per PR)
- Le istruzioni siano corrette rispetto al comportamento attuale di TinyCAD
- Il linguaggio sia chiaro e conciso
- I link di destinazione funzionino
- Quando necessario, la pagina sia collegata dalla navigazione
- Siano mantenuti lo stile e la terminologia esistenti

## Set di schede riutilizzabili per browser/app desktop
{: #reusable-browserdesktop-tabsets}

Quando una pagina richiede istruzioni diverse per TinyCAD nel browser e nell'app
per desktop, usa il componente condiviso per i set di schede invece di creare
markup specifico per la pagina.

```md
<div class="manual-tabset" data-tabset="product-mode" data-tabset-label="Choose your TinyCAD product" data-default-tab="Browser" markdown="1">

### Browser

Browser-specific content.

### Desktop App

Desktop-specific content.

</div>
```

Note:

- `data-tabset` è la chiave di sincronizzazione/archiviazione. Riutilizza lo stesso valore per mantenere sincronizzati più set di schede nella stessa pagina.
- `data-default-tab` imposta la scheda selezionata alla prima visita.
- Mantieni tutti i titoli delle schede allo stesso livello (`###` nell'esempio qui sopra).

## Modello di PR suggerito
{: #suggested-pr-template}

Copia e incolla questo testo nella descrizione della PR:

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

## Mantenere aggiornato il fork
{: #keeping-your-fork-up-to-date}

Se la tua PR rimane aperta a lungo, sincronizza il branch con l'ultima versione di `main`:

```bash
git fetch upstream
git checkout main
git merge upstream/main
git push origin main

git checkout docs/v4-fix-rulers
git merge main
git push
```

## Problemi comuni e soluzioni
{: #common-issues-and-fixes}

- **La PR mostra modifiche a file non correlate**
  - Crea un nuovo branch a partire da `main` aggiornato e applica con cherry-pick solo i tuoi commit.
- **Elemento di navigazione mancante**
  - Aggiorna `docs/_data/navigation.yml` e verifica che l'URL corrisponda al percorso del permalink della pagina.
- **La pagina viene visualizzata in modo anomalo**
  - Controlla i livelli dei titoli, il rientro degli elenchi e i delimitatori dei blocchi di codice.
- **Il link funziona in locale ma non su Pages**
  - Preferisci i link relativi usati altrove in questo repository e mantieni coerenti i nomi delle pagine.

## Dopo l'invio
{: #after-submission}

I responsabili della manutenzione potrebbero chiederti di apportare aggiornamenti. Aggiungi i commit successivi allo stesso branch/PR;
la PR si aggiornerà automaticamente. Una volta approvate e unite, le modifiche appariranno
nel manuale pubblicato dopo la ricostruzione di GitHub Pages.

Grazie per aver migliorato la documentazione di TinyCAD.

- Torna all'[indice v4](../CONTENTS/)
