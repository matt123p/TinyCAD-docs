---
layout: default
---
# Registro delle modifiche di TinyCAD
{: #tinycad-changelog}


## v4.0.11
{: #v4011}
{: #v4011}

Questa versione aggiunge note Markdown formattate, output vettoriale SVG e controlli per il routing dei fili.

- [Caselle di testo Markdown](../Text/#markdown-text-boxes): note formattate con elenchi, elenchi di attività e blocchi di codice; lo stesso renderer vettoriale per il disegno, l'esportazione SVG e PDF.
- La formattazione in tempo reale del sorgente mantiene visibili i marcatori modificabili e segue il font di base scelto, con posizionamento corrispondente del cursore, selezione e a capo automatico.
- [Modalità di routing dei fili](../Wires/#wire-routing-modes): un selettore compatto per il routing a 90°, 45° e Libero, che conserva un'anteprima attiva.
- Il pulsante della lente d'ingrandimento compare solo dopo l'input touch nell'area di disegno.

## v4.0.10 — 6 novembre 2026
{: #v4010--6-november-2026}
{: #v4010}

- Mantiene visibile la barra degli strumenti dell'editor quando i pannelli delle librerie o degli schemi richiedono più spazio verticale.

## v4.0.9 — 4 novembre 2026
{: #v409--4-november-2026}

### Aggiunte
{: #added}

- [Controlli touch](../Touch-controls/), inclusi modifica diretta, panoramica con due dita
  e zoom con pizzicamento, oltre a una lente d'ingrandimento con i controlli Clic,
  Trascina/Rilascia, Menu e Chiudi per un posizionamento preciso.
- [Pannello delle librerie ridimensionabile e ordinamento dei simboli](../Using-Symbol-Libraries/),
  incluso l'ordinamento alfabetico dei risultati di ricerca.
- [Nascondimento temporaneo degli oggetti selezionati](../User-guide/#temporarily-hiding-objects)
  e un comando per ripristinare tutti gli oggetti nascosti nel foglio corrente.
- Traduzione dell'interfaccia in polacco e testo tradotto nella finestra di dialogo Sostituisci simbolo.

### Correzioni
{: #fixed}

- [Visibilità della griglia e aggancio](../Snap-to-Grid/) funzionano indipendentemente e
  lo spostamento da tastiera rispetta la disattivazione dell'aggancio.
- Le immagini bitmap vengono visualizzate nei simboli di libreria posizionati.
- [Esc annulla le operazioni di disegno e posizionamento](../Shortcuts/), anche quando
  i controlli della barra degli strumenti hanno lo stato attivo.
- L'annullamento della richiesta di conferma delle modifiche non salvate nell'applicazione desktop elimina la richiesta di uscita in sospeso.
- Lo zoom con pizzicamento nell'area di disegno non si somma più allo zoom della pagina del browser.
- Migliorati il posizionamento della lente touch, il feedback del puntatore, la gestione dei gesti e il trascinamento.
- Migliorato il comportamento della finestra Informazioni su nell'applicazione desktop e su macOS.

### Pacchetti e manutenzione
{: #packaging-and-maintenance}

- Aggiornate le dipendenze per correggere vulnerabilità di sicurezza.
- Rimossi i pacchetti Linux ARMv7, poiché il runtime Electron supporta Linux x64
  e ARM64. I pacchetti Snap sono destinati a x64; i pacchetti Debian a x64 e ARM64.

[Download della versione](https://github.com/matt123p/TinyCADv4/releases/tag/v4.0.9)
· [Modifiche al sorgente](https://github.com/matt123p/TinyCADv4/compare/v4.0.8...v4.0.9)

## v4.0.8 — 3 maggio 2026
{: #v408--3-may-2026}

- Corretta la rotazione dei simboli di alimentazione durante il salvataggio e la riapertura di un disegno.
- Mantenuti i tipi di rete dei fili durante il salvataggio e il caricamento, per conservare la coerenza dei colori dei fili.

[Download della versione](https://github.com/matt123p/TinyCADv4/releases/tag/v4.0.8)
· [Modifiche al sorgente](https://github.com/matt123p/TinyCADv4/compare/v4.0.7...v4.0.8)

## v4.0.7 — 13 aprile 2026
{: #v407--13-april-2026}

- Corretta la stampa nell'applicazione desktop.
- Migliorato il comportamento dello zoom con pizzicamento per evitare ingrandimenti incontrollati.
- Aggiunto il rendering lato server dei simboli delle librerie.
- Automatizzati l'assegnazione dei tag alle build di produzione e la creazione delle release GitHub.

[Download della versione](https://github.com/matt123p/TinyCADv4/releases/tag/v4.0.7)
· [Modifiche al sorgente](https://github.com/matt123p/TinyCADv4/compare/4.0.6...v4.0.7)

## v4.0.6 — 29 marzo 2026
{: #v406--29-march-2026}

Questa versione include le modifiche di sviluppo apportate con la versione 4.0.5; non esistono
un tag 4.0.5 separato né una release GitHub pubblicata.

### Aggiunte
{: #added-1}

- Routing automatico dei fili.
- Sostituisci simbolo per cambiare un componente esistente con un altro simbolo di libreria.
- Scorrimento automatico durante il trascinamento vicino al bordo del disegno.
- Selezione con doppio clic di un intero filo e selezione con triplo clic oltre
  giunzioni e derivazioni a T.
- Un'opzione per disattivare l'indicatore di connessione delle etichette.

### Correzioni e miglioramenti
{: #fixed-and-improved}

- Le cartelle delle librerie sono aperte per impostazione predefinita e si espandono durante la ricerca.
- Migliorati la modifica del testo, i tasti di scelta rapida degli appunti, i tasti di navigazione e le scorciatoie da tastiera quando l'area di disegno è attiva.
- Corretti la selezione con Ctrl-clic, il trascinamento di più oggetti selezionati e i controlli a rotazione.
- I rettangoli di disegno e selezione possono essere trascinati in entrambe le direzioni.
- Corretta la chiusura su macOS e ridotto il caricamento duplicato delle librerie su macOS.
- Corretti il posizionamento delle etichette, la traduzione del selettore dei colori e l'elaborazione in background della netlist.
- Corretti i nomi delle build del programma di installazione Windows e di AppX.

[Download della versione](https://github.com/matt123p/TinyCADv4/releases/tag/4.0.6)
· [Modifiche al sorgente](https://github.com/matt123p/TinyCADv4/compare/4.0.4...4.0.6)

## v4.0.4 — tag del sorgente, 19 marzo 2026
{: #v404--source-tag-19-march-2026}

- Aggiunte [cartelle delle librerie](../Library-Folders/) per organizzare le librerie di simboli.
- Aggiunta la traduzione dell'interfaccia in olandese.
- Aggiunti gli artefatti di build per il browser e la distribuzione su GitHub Pages.
- Corretti i pacchetti Snap.

[Modifiche al sorgente](https://github.com/matt123p/TinyCADv4/compare/4.0.3...4.0.4)

## v4.0.3 — tag del sorgente, 15 marzo 2026
{: #v403--source-tag-15-march-2026}

- Modificata la gestione dell'avvio di macOS per risolvere un problema di avvio.

Il tag del sorgente è 4.0.3, sebbene i metadati del pacchetto riportino ancora 4.0.2.

[Modifiche al sorgente](https://github.com/matt123p/TinyCADv4/compare/4.0.2...4.0.3)

## v4.0.2 — 14 marzo 2026
{: #v402--14-march-2026}

- Corretta la finestra di dialogo di chiusura per le modifiche non salvate su Linux.
- Aggiunti pacchetti Debian x64 accanto alle build ARM esistenti.
- Aggiornati gli strumenti di build e la configurazione dei pacchetti.

[Download della versione](https://github.com/matt123p/TinyCADv4/releases/tag/4.0.2)
· [Modifiche al sorgente](https://github.com/matt123p/TinyCADv4/compare/4.0.1...4.0.2)

## v4.0.1 — tag iniziale del sorgente, 13 marzo 2026
{: #v401--initial-source-tag-13-march-2026}

La prima istantanea del sorgente contiene già la riscrittura di TinyCAD per l'uso nel browser e
su desktop, con modifica degli schemi, librerie di simboli, supporto per i file
`.dsn` e `.tclib` esistenti e flussi di esportazione. Lo sviluppo precedente non è
registrato in questo repository.

[Istantanea iniziale del sorgente](https://github.com/matt123p/TinyCADv4/tree/4.0.1)

- Torna a [contenuti della v4](../CONTENTS/)
