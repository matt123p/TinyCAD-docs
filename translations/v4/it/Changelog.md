---
layout: default
---
# Registro delle modifiche di TinyCAD
{: #tinycad-changelog}


## Non rilasciato
{: #unreleased}
{: #unreleased}

### Aggiunte
{: #added}

- [Simulazione integrata](../Simulation/) con ngspice locale nel browser e nell'applicazione Desktop, con analisi del punto di funzionamento, transitoria, CA, scansione CC, rumore, funzione di trasferimento e poli-zeri. [XSPICE](../XSPICE/) basato su eventi è supportato nell'applicazione Desktop.
- [Sorgenti, sonde e strumenti virtuali](../Simulation-Sources-and-Instruments/), inclusi oscilloscopi, multimetri, generatori di funzioni e alimentatori da banco.
- [Esplora circuiti](../Simulation-Charts-and-Measurements/) per regolazioni, scansioni, misure denominate, requisiti, sovrapposizioni CC, studi di tolleranza, casi di test e indagini su potenza/sollecitazioni.
- Disegni [`.dzn` compressi](../Simulation/#dzn-simulation-drawings) che racchiudono insieme il circuito, i modelli, le impostazioni di simulazione e i risultati facoltativi. La cronologia delle esecuzioni e l'esportazione dei risultati facilitano il confronto e la condivisione; Salva senza risultati crea una copia più piccola.
- [Librerie integrate](../Bundled-Libraries/) per reti, schede embedded e moduli per la domotica, audio, apparecchiature di laboratorio, motori/movimento e progettazione solare/a batterie, oltre a raccolte di modelli SPICE, logici, funzionali e di sensori. Selezionale nella scheda Standard del selettore di librerie.
- [Sette esempi di disegno modificabili](../Bundled-Examples/), relativi all'amplificatore a transistor originale, a una rete per ufficio, a una stazione ESP32 per clima/display, a una casa alimentata a energia solare e a batterie, a uno studio per podcast, a un banco di laboratorio e a un banco per il controllo di motori, con simboli incorporati e spiegazioni.
- [Tutorial SPICE e XSPICE](../Simulation-Tutorials/): undici capitoli analogici e sei digitali, con 28 disegni eseguibili distinti, definizioni di modelli, impostazioni di analisi e acquisizioni di riferimento conservate.
- [Riordino del layout](../Layout-Tidy-Up/) per interi fogli o elementi selezionati, con intensità Bassa/Media/Alta, annullamento, controlli delle connessioni e un solo passaggio di Annulla.

### Modifiche
{: #changed}

- Apri esempio e Spiegazione si trovano nella barra del titolo del browser. Nell'applicazione Desktop sono disponibili File → Apri esempio e Visualizza → Visualizza spiegazione.
- Il menu Visualizza dell'applicazione Desktop include Mostra grafici; il menu Simulazione della barra degli strumenti mantiene l'opzione per mostrare i grafici.
- Il layout automatico si trova accanto a Simulazione nella barra degli strumenti ed è disponibile anche nel menu Strumenti dell'applicazione Desktop.

### Correzioni
{: #fixed}

- Ripristinate le anteprime trascinabili delle illustrazioni dei componenti nei risultati del selettore Standard, Le mie librerie e Online.
- Ridimensionate le illustrazioni dei controller embedded, dei sensori e dei display a dimensioni pratiche per il layout della pagina, preservando l'identità dei pin e le posizioni dei collegamenti.
- Impedito che le modifiche al layout creino connessioni indesiderate alle estremità dei fili, nelle curve o nei connettori; migliorate le uscite dei pin ed eliminate deviazioni non necessarie.
- Rimossi i piccoli riquadri delle etichette dei terminali che si sovrapponevano al testo nei simboli di laboratorio e di controllo del movimento; aggiornati gli esempi interessati.
- Migliorati la segnalazione degli errori di simulazione e la diagnostica, le esecuzioni degli amplificatori nel browser, le finestre separate dei grafici e i pannelli indipendenti con le spiegazioni degli esempi.

### Manuale
{: #manual}

- Aggiunte guide per trovare e usare le librerie e gli esempi integrati; la descrizione SPICE limitata all'esportazione è stata sostituita con il flusso di lavoro della simulazione integrata.
- Aggiunti riferimenti su analisi, modelli, strumenti, grafici, misure e risoluzione dei problemi, con collegamenti alla documentazione ufficiale di ngspice e XSPICE.
- Inclusi tutti i corsi esistenti, disegni/netlist scaricabili e dieci video tutorial che trattano librerie, esempi, riordino del layout, connessioni tra più fogli e SPICE.
- Chiarite le [differenze tra le funzionalità](../Feature-Differences/), inclusi `.dzn` e la compatibilità delle caselle di testo Markdown e il supporto XSPICE nel browser.
- Aggiornato il manuale in tutte le otto lingue supportate, compresi la navigazione, le nuove pagine di riferimento, il testo dei tutorial e i sottotitoli dei video.

## v4.0.11
{: #v4011}
{: #v4011}

Questa versione aggiunge note Markdown formattate, output vettoriale SVG e controlli del tracciamento dei fili.

- [Caselle di testo Markdown](../Text/#markdown-text-boxes): note formattate con elenchi, elenchi di attività e blocchi di codice; lo stesso renderer vettoriale per il disegno, l'esportazione SVG e il PDF.
- La formattazione in tempo reale del sorgente mantiene visibili gli indicatori modificabili e segue il font di base scelto, con posizionamento del cursore, selezione e a capo corrispondenti.
- [Modalità di tracciamento dei fili](../Wires/#wire-routing-modes): un selettore compatto per il tracciamento a 90°, 45° e libero, che conserva l'anteprima attiva.
- Il pulsante della lente d'ingrandimento appare solo dopo l'uso del tocco nell'area di disegno.

## v4.0.10 — 6 novembre 2026
{: #v4010--6-november-2026}
{: #v4010}

- Mantiene visibile la barra degli strumenti dell'editor quando i pannelli delle librerie o dello schema richiedono più spazio verticale.

## v4.0.9 — 4 novembre 2026
{: #v409--4-november-2026}

### Aggiunte
{: #added-1}

- [Controlli touch](../Touch-controls/), inclusi modifica diretta, panoramica con due dita
  e zoom con pizzico, oltre a una lente d'ingrandimento con i controlli Clic,
  Trascina/Rilascia, Menu e Chiudi per un posizionamento preciso.
- [Pannello delle librerie ridimensionabile e ordinamento dei simboli](../Using-Symbol-Libraries/),
  incluso l'ordinamento alfabetico dei risultati di ricerca.
- [Nascondere temporaneamente gli oggetti selezionati](../User-guide/#temporarily-hiding-objects)
  e un comando per ripristinare tutti gli oggetti nascosti nel foglio corrente.
- Traduzione polacca dell'interfaccia e testo tradotto nella finestra di dialogo Sostituisci simbolo.

### Correzioni
{: #fixed-1}

- [Visibilità della griglia e aggancio](../Snap-to-Grid/) funzionano in modo indipendente e
  lo spostamento con la tastiera rispetta la disattivazione dell'aggancio.
- Le immagini bitmap vengono visualizzate nei simboli di libreria posizionati.
- [Esc annulla le operazioni di disegno e posizionamento](../Shortcuts/), anche quando
  i controlli della barra degli strumenti hanno il focus.
- L'annullamento della richiesta di conferma delle modifiche non salvate nell'applicazione Desktop cancella la chiusura in attesa.
- Lo zoom con pizzico nell'area di disegno non si somma più allo zoom della pagina del browser.
- Migliorati il posizionamento della lente touch, il feedback del puntatore, la gestione dei gesti e il trascinamento.
- Migliorato il comportamento delle finestre di dialogo Informazioni su in Desktop e macOS.

### Pacchettizzazione e manutenzione
{: #packaging-and-maintenance}

- Aggiornate le dipendenze per risolvere vulnerabilità di sicurezza.
- Rimossi i pacchetti Linux ARMv7 perché il runtime Electron supporta Linux x64
  e ARM64. I pacchetti Snap sono destinati a x64; i pacchetti Debian a x64 e ARM64.

[Download della versione](https://github.com/matt123p/TinyCADv4/releases/tag/v4.0.9)
· [Modifiche al sorgente](https://github.com/matt123p/TinyCADv4/compare/v4.0.8...v4.0.9)

## v4.0.8 — 3 maggio 2026
{: #v408--3-may-2026}

- Corretto l'orientamento dei simboli di alimentazione durante il salvataggio e la riapertura di un disegno.
- Conservati i tipi di rete dei fili durante il salvataggio e il caricamento, mantenendo coerenti i colori dei fili.

[Download della versione](https://github.com/matt123p/TinyCADv4/releases/tag/v4.0.8)
· [Modifiche al sorgente](https://github.com/matt123p/TinyCADv4/compare/v4.0.7...v4.0.8)

## v4.0.7 — 13 aprile 2026
{: #v407--13-april-2026}

- Corretta la stampa nell'applicazione desktop.
- Migliorato il comportamento dello zoom con pizzico per impedire ingrandimenti incontrollati.
- Aggiunto il rendering lato server dei simboli di libreria.
- Automatizzati l'assegnazione di tag alle build di produzione e la creazione di release GitHub.

[Download della versione](https://github.com/matt123p/TinyCADv4/releases/tag/v4.0.7)
· [Modifiche al sorgente](https://github.com/matt123p/TinyCADv4/compare/4.0.6...v4.0.7)

## v4.0.6 — 29 marzo 2026
{: #v406--29-march-2026}

Questa versione include le modifiche di sviluppo apportate con la versione 4.0.5; non esistono un tag 4.0.5 separato né una release GitHub pubblicata.

### Aggiunte
{: #added-2}

- Tracciamento automatico dei fili.
- Sostituisci simbolo per cambiare un componente esistente con un altro simbolo di libreria.
- Scorrimento automatico durante il trascinamento vicino al bordo del disegno.
- Selezione dell'intero filo con doppio clic e selezione oltre giunzioni e derivazioni a T con triplo clic.
- Opzione per disattivare l'indicatore di connessione delle etichette.

### Correzioni e miglioramenti
{: #fixed-and-improved}

- Le cartelle delle librerie sono aperte per impostazione predefinita e si espandono durante la ricerca.
- Migliorati la modifica del testo, le scorciatoie degli appunti, i tasti di navigazione e le scorciatoie da tastiera mentre l'area di disegno ha il focus.
- Corretti la selezione con Ctrl-clic, il trascinamento di più oggetti selezionati e i controlli numerici.
- È possibile trascinare i riquadri di disegno e selezione in entrambe le direzioni.
- Corretta la chiusura su macOS e ridotto il caricamento duplicato delle librerie su macOS.
- Corretti il posizionamento delle etichette, la traduzione del selettore dei colori e l'elaborazione in background della netlist.
- Corretti i nomi delle build del programma di installazione Windows e AppX.

[Download della versione](https://github.com/matt123p/TinyCADv4/releases/tag/4.0.6)
· [Modifiche al sorgente](https://github.com/matt123p/TinyCADv4/compare/4.0.4...4.0.6)

## v4.0.4 — tag del sorgente, 19 marzo 2026
{: #v404--source-tag-19-march-2026}

- Aggiunte [cartelle delle librerie](../Library-Folders/) per organizzare le librerie di simboli.
- Aggiunta la traduzione dell'interfaccia in olandese.
- Aggiunti gli artefatti di build del browser e la distribuzione su GitHub Pages.
- Corretta la pacchettizzazione Snap.

[Modifiche al sorgente](https://github.com/matt123p/TinyCADv4/compare/4.0.3...4.0.4)

## v4.0.3 — tag del sorgente, 15 marzo 2026
{: #v403--source-tag-15-march-2026}

- Modificata la gestione dell'avvio su macOS per risolvere un problema di avvio.

Il tag del sorgente è 4.0.3, sebbene i metadati del pacchetto riportino ancora 4.0.2.

[Modifiche al sorgente](https://github.com/matt123p/TinyCADv4/compare/4.0.2...4.0.3)

## v4.0.2 — 14 marzo 2026
{: #v402--14-march-2026}

- Corretta la finestra di dialogo di chiusura con modifiche non salvate su Linux.
- Aggiunti pacchetti Debian x64 accanto alle build ARM esistenti.
- Aggiornati gli strumenti di build e la configurazione della pacchettizzazione.

[Download della versione](https://github.com/matt123p/TinyCADv4/releases/tag/4.0.2)
· [Modifiche al sorgente](https://github.com/matt123p/TinyCADv4/compare/4.0.1...4.0.2)

## v4.0.1 — tag iniziale del sorgente, 13 marzo 2026
{: #v401--initial-source-tag-13-march-2026}

La prima istantanea del sorgente contiene già la riscrittura di TinyCAD per l'uso nel browser e su desktop, con modifica degli schemi, librerie di simboli, supporto per i file `.dsn` e `.tclib` esistenti e flussi di esportazione. Lo sviluppo precedente non è registrato in questo repository.

[Istantanea iniziale del sorgente](https://github.com/matt123p/TinyCADv4/tree/4.0.1)

- Torna ai [contenuti della v4](../CONTENTS/)
