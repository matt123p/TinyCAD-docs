---
layout: default
---
# Registro delle modifiche di TinyCAD v4
{: #tinycad-v4-changelog}


## v4.0.9 — 4 novembre 2026
{: #v409--4-november-2026}

### Aggiunte
{: #added}

- [Controlli touch](../Touch-controls/), compresi modifica diretta, panoramica con due dita
  e zoom con pizzico, oltre a una lente d'ingrandimento con controlli Clic, Trascina/Rilascia, Menu e Chiudi
  per un posizionamento preciso.
- [Pannello libreria ridimensionabile e ordinamento dei simboli](../Using-Symbol-Libraries/),
  compreso l'ordinamento alfabetico dei risultati di ricerca.
- [Nascondere temporaneamente gli oggetti selezionati](../User-guide/#temporarily-hiding-objects)
  e un comando per ripristinare tutti gli oggetti nascosti nel foglio corrente.
- Traduzione dell'interfaccia in polacco e testo tradotto nella finestra di dialogo Sostituisci simbolo.

### Correzioni
{: #fixed}

- [Visibilità della griglia e aggancio](../Snap-to-Grid/) funzionano in modo indipendente e
  lo spostamento tramite tastiera rispetta la disattivazione dell'aggancio.
- Le immagini bitmap vengono visualizzate nei simboli della libreria inseriti.
- [Esc annulla le operazioni di disegno e posizionamento](../Shortcuts/), anche quando
  i controlli della barra degli strumenti hanno il focus.
- Annullando la richiesta di conferma delle modifiche non salvate nell'applicazione desktop si annulla la chiusura in sospeso.
- Lo zoom con pizzico sulla tela non si somma più allo zoom della pagina del browser.
- Migliorati il posizionamento della lente touch, il feedback del puntatore, la gestione dei gesti e il trascinamento.
- Migliorato il comportamento della finestra Informazioni su in desktop e macOS.

### Pacchettizzazione e manutenzione
{: #packaging-and-maintenance}

- Aggiornate le dipendenze per risolvere vulnerabilità di sicurezza.
- Rimossi i pacchetti Linux ARMv7, poiché il runtime Electron supporta Linux x64
  e ARM64. I pacchetti Snap sono destinati a x64; i pacchetti Debian a x64 e ARM64.

[Download della versione](https://github.com/matt123p/TinyCADv4/releases/tag/v4.0.9)
· [Modifiche al codice sorgente](https://github.com/matt123p/TinyCADv4/compare/v4.0.8...v4.0.9)

## v4.0.8 — 3 maggio 2026
{: #v408--3-may-2026}

- Corretta la rotazione dei simboli di alimentazione dopo il salvataggio e la riapertura di un disegno.
- Mantenuti i tipi di rete dei fili durante il salvataggio e il caricamento, preservando la coerenza dei colori dei fili.

[Download della versione](https://github.com/matt123p/TinyCADv4/releases/tag/v4.0.8)
· [Modifiche al codice sorgente](https://github.com/matt123p/TinyCADv4/compare/v4.0.7...v4.0.8)

## v4.0.7 — 13 aprile 2026
{: #v407--13-april-2026}

- Corretta la stampa nell'applicazione desktop.
- Migliorato il comportamento dello zoom con pizzico per evitare zoom incontrollati.
- Aggiunto il rendering lato server dei simboli della libreria.
- Automatizzati l'assegnazione dei tag alle build di produzione e la creazione delle release GitHub.

[Download della versione](https://github.com/matt123p/TinyCADv4/releases/tag/v4.0.7)
· [Modifiche al codice sorgente](https://github.com/matt123p/TinyCADv4/compare/4.0.6...v4.0.7)

## v4.0.6 — 29 marzo 2026
{: #v406--29-march-2026}

Questa versione include le modifiche di sviluppo apportate nella versione 4.0.5; non esistono
un tag 4.0.5 separato né una release GitHub pubblicata.

### Aggiunte
{: #added-1}

- Instradamento automatico dei fili.
- Sostituisci simbolo (Replace Symbol) per cambiare un componente esistente con un altro simbolo della libreria.
- Scorrimento automatico durante il trascinamento vicino al bordo del disegno.
- Selezione dell'intero filo con doppio clic e selezione oltre giunzioni e derivazioni a T con triplo clic.
- Opzione per disattivare l'indicatore di connessione delle etichette.

### Correzioni e miglioramenti
{: #fixed-and-improved}

- Le cartelle della libreria sono aperte per impostazione predefinita e si espandono durante la ricerca.
- Migliorati la modifica del testo, le scorciatoie degli appunti, i tasti di navigazione e
  gli acceleratori da tastiera quando il disegno ha il focus.
- Corretti la selezione con Ctrl-clic, il trascinamento di più oggetti selezionati e i controlli di rotazione.
- I rettangoli di disegno e selezione possono essere trascinati in entrambe le direzioni.
- Corretta la chiusura su macOS e ridotto il caricamento duplicato della libreria su macOS.
- Corretti il posizionamento delle etichette, la traduzione del selettore di colori e l'elaborazione in background della netlist.
- Corretti i nomi dei pacchetti di installazione Windows e delle build AppX.

[Download della versione](https://github.com/matt123p/TinyCADv4/releases/tag/4.0.6)
· [Modifiche al codice sorgente](https://github.com/matt123p/TinyCADv4/compare/4.0.4...4.0.6)

## v4.0.4 — tag sorgente, 19 marzo 2026
{: #v404--source-tag-19-march-2026}

- Aggiunte le [cartelle della libreria](../Library-Folders/) per organizzare le librerie di simboli.
- Aggiunta la traduzione dell'interfaccia in olandese.
- Aggiunti gli artefatti della build browser e la distribuzione su GitHub Pages.
- Corretta la pacchettizzazione Snap.

[Modifiche al codice sorgente](https://github.com/matt123p/TinyCADv4/compare/4.0.3...4.0.4)

## v4.0.3 — tag sorgente, 15 marzo 2026
{: #v403--source-tag-15-march-2026}

- Adeguata la gestione dell'avvio di macOS per risolvere un problema di avvio.

Il tag sorgente è 4.0.3, sebbene i metadati del pacchetto indichino ancora 4.0.2.

[Modifiche al codice sorgente](https://github.com/matt123p/TinyCADv4/compare/4.0.2...4.0.3)

## v4.0.2 — 14 marzo 2026
{: #v402--14-march-2026}

- Corretta la finestra di dialogo di chiusura con modifiche non salvate su Linux.
- Aggiunti pacchetti Debian x64 oltre alle build ARM esistenti.
- Aggiornati gli strumenti di build e la configurazione di pacchettizzazione.

[Download della versione](https://github.com/matt123p/TinyCADv4/releases/tag/4.0.2)
· [Modifiche al codice sorgente](https://github.com/matt123p/TinyCADv4/compare/4.0.1...4.0.2)

## v4.0.1 — tag sorgente iniziale, 13 marzo 2026
{: #v401--initial-source-tag-13-march-2026}

La prima istantanea del codice sorgente contiene già la riscrittura di TinyCAD per l'uso nel browser e
su desktop, con modifica di schemi, librerie di simboli, supporto per i file
`.dsn` e `.tclib` esistenti e flussi di esportazione. Lo sviluppo precedente non è
registrato in questo repository.

[Istanza iniziale del codice sorgente](https://github.com/matt123p/TinyCADv4/tree/4.0.1)

- Torna a [indice v4](../CONTENTS/)
