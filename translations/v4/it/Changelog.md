---
layout: default
---
# Registro delle modifiche di TinyCAD
{: #tinycad-changelog}


## Non rilasciato
{: #unreleased}
{: #unreleased}

### Aggiunto
{: #added}

- [Modifica assistita dall'IA di simboli, librerie e circuiti](../AI-Assistant/), inclusi datasheet/immagini allegati, ricerca di simboli integrata e online, modifiche dirette al documento attivo, modifiche annullabili, impostazioni di provider/modello e connessioni locali a Ollama.

- [Simulazione integrata](../Simulation/) con ngspice locale nel browser e nell'applicazione Desktop, con analisi del punto di funzionamento, transitoria, AC, sweep DC, rumore, funzione di trasferimento e poli-zeri. [XSPICE](../XSPICE/) a eventi è supportato nell'applicazione Desktop.
- [Sorgenti, sonde e strumenti virtuali](../Simulation-Sources-and-Instruments/), inclusi oscilloscopi, multimetri, generatori di funzioni e alimentatori da banco.
- [Circuit Explorer](../Simulation-Charts-and-Measurements/) per regolazioni, sweep, misure con nome, requisiti, sovrapposizioni DC, studi di tolleranza, casi di test e analisi di potenza/sollecitazione.
- Disegni [`.dzn` compressi](../Simulation/#dzn-simulation-drawings) che includono circuito, modelli, impostazioni di simulazione e risultati facoltativi. La cronologia delle esecuzioni e l'esportazione dei risultati consentono il confronto e la condivisione; Salva senza risultati crea una copia più leggera.
- [Librerie incluse](../Bundled-Libraries/) per reti, schede embedded e moduli per la domotica, audio, apparecchiature di laboratorio, motori/movimento e pianificazione di impianti solari/batterie, oltre a raccolte di modelli SPICE, logica, funzioni e sensori. Selezionale nella scheda Standard del selettore di librerie.
- [Sette esempi di disegno modificabili](../Bundled-Examples/), che includono l'amplificatore a transistor originale, una rete per ufficio, una stazione ESP32 per clima/display, una casa con impianto solare/batteria, uno studio per podcast, un banco di laboratorio e un banco per il controllo motori, con simboli incorporati e spiegazioni.
- [Tutorial SPICE e XSPICE](../Simulation-Tutorials/): undici capitoli analogici e sei digitali, con 28 disegni eseguibili distinti, definizioni dei modelli, impostazioni di analisi e acquisizioni di riferimento conservate.
- [Riordino del layout](../Layout-Tidy-Up/) per interi fogli o elementi selezionati, con intensità Bassa/Media/Alta, annullamento, controlli delle connessioni e un solo passaggio di Annulla.

### Modificato
{: #changed}

- Apri esempio e Spiegazione si trovano nella barra del titolo del browser. Nell'applicazione Desktop sono disponibili File → Apri esempio e Visualizza → Visualizza spiegazione.
- Il menu Visualizza dell'applicazione Desktop include Mostra grafici; il menu Simulazione della barra degli strumenti mantiene l'interruttore per i grafici.
- Il layout automatico si trova accanto a Simulazione nella barra degli strumenti ed è disponibile anche nel menu Strumenti dell'applicazione Desktop.

### Corretto
{: #fixed}

- Ripristinate le anteprime trascinabili dei disegni dei componenti nei risultati dei selettori Standard, My Libraries e Online.
- Ridotte le dimensioni dei disegni di controller embedded, sensori e display, portandole a valori pratici per l'impaginazione, preservando l'identità dei pin e le posizioni dei collegamenti.
- Impedito che le modifiche al layout creino connessioni indesiderate alle estremità dei fili, nelle curve o nei socket; migliorate le uscite dei pin e rimossi i percorsi tortuosi non necessari.
- Rimosse le piccole caselle delle etichette dei terminali che si sovrappongono al testo nei simboli di laboratorio e di controllo del movimento, e aggiornati gli esempi interessati.
- Migliorate la segnalazione degli errori di simulazione e la diagnostica, le esecuzioni dell'amplificatore nel browser, le finestre separate dei grafici e i pannelli indipendenti per le spiegazioni degli esempi.

### Manuale
{: #manual}

- Aggiunta una [guida alle immagini](../Images/) che illustra copia e incolla, importazione di file e conversione di formato, proporzioni fisse, ritaglio dei pixel e salvataggio delle immagini insieme al disegno.

- Aggiunta una [guida completa all'assistente IA ](../AI-Assistant/), che illustra la creazione di simboli/librerie e circuiti, la configurazione dei provider con schermate, Ollama locale, allegati ai documenti, esempi di prompt e revisione dei risultati generati.

- Aggiunte guide per trovare e usare le librerie e gli esempi inclusi; sostituita la descrizione SPICE limitata all'esportazione con il flusso di lavoro della simulazione integrata.
- Aggiunti riferimenti ad analisi, modelli, strumenti, grafici, misure e risoluzione dei problemi, con collegamenti alla documentazione ufficiale di ngspice e XSPICE.
- Inclusi i corsi esistenti completi, disegni/netlist scaricabili e dieci video tutorial che trattano librerie, esempi, riordino del layout, connessioni su più fogli e SPICE.
- Chiarite le [differenze tra funzionalità](../Feature-Differences/), incluse la compatibilità di `.dzn` e dei riquadri di testo Markdown, e il supporto XSPICE nel browser.
- Aggiornato il manuale in tutte le otto lingue supportate, includendo navigazione, nuove pagine di riferimento, testo dei tutorial e didascalie dei video.

## v4.0.11
{: #v4011}
{: #v4011}

Questa versione aggiunge note in Markdown formattato, output vettoriale SVG e controlli per il percorso dei fili.

- [Riquadri di testo Markdown](../Text/#markdown-text-boxes): note formattate con elenchi, elenchi di attività e blocchi di codice; lo stesso renderer vettoriale per il disegno, l'esportazione SVG e PDF.
- La formattazione in tempo reale del sorgente mantiene visibili gli indicatori modificabili e segue il carattere di base scelto, con posizionamento del cursore, selezione e ritorno a capo corrispondenti.
- [Modalità di instradamento dei fili](../Wires/#wire-routing-modes): un selettore compatto per instradamento a 90°, 45° e libero, che mantiene attiva l'anteprima.
- Il pulsante della lente di ingrandimento appare solo dopo un input tattile sulla tela di disegno.

## v4.0.10 — 6 novembre 2026
{: #v4010--6-november-2026}
{: #v4010}

- Mantiene visibile la barra degli strumenti dell'editor quando i pannelli delle librerie o degli schemi richiedono più spazio verticale.

## v4.0.9 — 4 novembre 2026
{: #v409--4-november-2026}

### Aggiunto
{: #added-1}

- [Controlli touch](../Touch-controls/), inclusi modifica diretta, panoramica con due dita
  e zoom con pizzico, nonché una lente di ingrandimento con i controlli Clic,
  Trascina/Rilascia, Menu e Chiudi per un posizionamento preciso.
- [Pannello delle librerie ridimensionabile e ordinamento dei simboli](../Using-Symbol-Libraries/),
  incluso l'ordinamento alfabetico dei risultati di ricerca.
- [Nascondere temporaneamente gli oggetti selezionati](../User-guide/#temporarily-hiding-objects)
  e un comando per ripristinare tutti gli oggetti nascosti nel foglio corrente.
- Traduzione dell'interfaccia in polacco e testo tradotto nella finestra di dialogo Sostituisci simbolo.

### Corretto
{: #fixed-1}

- [Visibilità della griglia e aggancio](../Snap-to-Grid/) funzionano in modo indipendente, e
  lo spostamento da tastiera rispetta la disattivazione dell'aggancio.
- Le immagini bitmap vengono visualizzate nei simboli di libreria inseriti.
- [Esc annulla le operazioni di disegno e posizionamento](../Shortcuts/), anche quando
  i controlli della barra degli strumenti hanno lo stato attivo.
- L'annullamento della richiesta di conferma per le modifiche non salvate nell'applicazione Desktop cancella l'uscita in sospeso.
- Lo zoom con pizzico sulla tela non si somma più allo zoom della pagina del browser.
- Migliorati il posizionamento della lente touch, il feedback del puntatore, la gestione dei gesti e il trascinamento.
- Migliorato il comportamento della finestra Informazioni su nell'applicazione Desktop e in macOS.

### Pacchetti e manutenzione
{: #packaging-and-maintenance}

- Aggiornate le dipendenze per risolvere vulnerabilità di sicurezza.
- Rimossi i pacchetti Linux ARMv7 perché il runtime Electron supporta Linux x64
  e ARM64. I pacchetti Snap sono destinati a x64; i pacchetti Debian a x64 e ARM64.

[Download della versione](https://github.com/matt123p/TinyCADv4/releases/tag/v4.0.9)
· [Modifiche al sorgente](https://github.com/matt123p/TinyCADv4/compare/v4.0.8...v4.0.9)

## v4.0.8 — 3 maggio 2026
{: #v408--3-may-2026}

- Corretto il comportamento della rotazione dei simboli di alimentazione durante il salvataggio e la riapertura di un disegno.
- Mantenuti i tipi di rete dei fili durante il salvataggio e il caricamento, mantenendo coerenti i colori dei fili.

[Download della versione](https://github.com/matt123p/TinyCADv4/releases/tag/v4.0.8)
· [Modifiche al sorgente](https://github.com/matt123p/TinyCADv4/compare/v4.0.7...v4.0.8)

## v4.0.7 — 13 aprile 2026
{: #v407--13-april-2026}

- Corretta la stampa nell'applicazione Desktop.
- Migliorato il comportamento dello zoom con pizzico per impedire ingrandimenti incontrollati.
- Aggiunto il rendering lato server dei simboli di libreria.
- Automatizzati l'assegnazione dei tag alle build di produzione e la creazione delle release GitHub.

[Download della versione](https://github.com/matt123p/TinyCADv4/releases/tag/v4.0.7)
· [Modifiche al sorgente](https://github.com/matt123p/TinyCADv4/compare/4.0.6...v4.0.7)

## v4.0.6 — 29 marzo 2026
{: #v406--29-march-2026}

Questa versione include le modifiche di sviluppo apportate con la versione 4.0.5; non esistono un tag 4.0.5 separato né una release GitHub pubblicata.

### Aggiunto
{: #added-2}

- Instradamento automatico dei fili.
- Sostituisci simbolo per convertire un componente esistente in un altro simbolo di libreria.
- Scorrimento automatico durante il trascinamento vicino al bordo del disegno.
- Selezione con doppio clic di un filo intero e selezione con triplo clic oltre giunzioni e derivazioni a T.
- Opzione per disattivare l'indicatore di connessione delle etichette.

### Corretto e migliorato
{: #fixed-and-improved}

- Le cartelle delle librerie si aprono per impostazione predefinita e si espandono quando si esegue una ricerca.
- Migliorate la modifica del testo, le scorciatoie degli appunti, i tasti di navigazione e gli acceleratori da tastiera quando il disegno ha lo stato attivo.
- Corretti la selezione con Ctrl-clic, il trascinamento di più oggetti selezionati e i controlli di selezione numerica.
- I rettangoli di disegno e selezione possono essere trascinati in entrambe le direzioni.
- Corretta la chiusura su macOS e ridotto il caricamento duplicato delle librerie su macOS.
- Corretti il posizionamento delle etichette, la traduzione del selettore di colori e l'elaborazione in background della netlist.
- Corretti i nomi delle build del programma di installazione Windows e AppX.

[Download della versione](https://github.com/matt123p/TinyCADv4/releases/tag/4.0.6)
· [Modifiche al sorgente](https://github.com/matt123p/TinyCADv4/compare/4.0.4...4.0.6)

## v4.0.4 — tag sorgente, 19 marzo 2026
{: #v404--source-tag-19-march-2026}

- Aggiunte [cartelle di librerie](../Library-Folders/) per organizzare le librerie di simboli.
- Aggiunta la traduzione dell'interfaccia in olandese.
- Aggiunti gli artefatti della build per browser e la distribuzione su GitHub Pages.
- Corretti i pacchetti Snap.

[Modifiche al sorgente](https://github.com/matt123p/TinyCADv4/compare/4.0.3...4.0.4)

## v4.0.3 — tag sorgente, 15 marzo 2026
{: #v403--source-tag-15-march-2026}

- Modificata la gestione dell'avvio su macOS per risolvere un problema di avvio.

Il tag sorgente è 4.0.3, sebbene i metadati del pacchetto riportino ancora 4.0.2.

[Modifiche al sorgente](https://github.com/matt123p/TinyCADv4/compare/4.0.2...4.0.3)

## v4.0.2 — 14 marzo 2026
{: #v402--14-march-2026}

- Corretta la finestra di dialogo di chiusura con modifiche non salvate su Linux.
- Aggiunti pacchetti Debian x64 oltre alle build ARM esistenti.
- Aggiornati gli strumenti di build e la configurazione dei pacchetti.

[Download della versione](https://github.com/matt123p/TinyCADv4/releases/tag/4.0.2)
· [Modifiche al sorgente](https://github.com/matt123p/TinyCADv4/compare/4.0.1...4.0.2)

## v4.0.1 — tag sorgente iniziale, 13 marzo 2026
{: #v401--initial-source-tag-13-march-2026}

La prima istantanea del sorgente contiene già la riscrittura di TinyCAD per l'uso nel browser e su desktop, con modifica di schemi, librerie di simboli, supporto per i file `.dsn` e `.tclib` esistenti e flussi di esportazione. Lo sviluppo precedente non è documentato in questo repository.

[Istantanea iniziale del sorgente](https://github.com/matt123p/TinyCADv4/tree/4.0.1)

- Torna ai [contenuti di v4](../CONTENTS/)
