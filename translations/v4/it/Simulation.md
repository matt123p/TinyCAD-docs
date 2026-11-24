---
layout: default
---
# Simulazione e SPICE
{: #simulation-and-spice}

TinyCAD può eseguire simulazioni di circuiti elettronici, tracciare i risultati e misurare il comportamento del circuito senza uscire dal disegno. Il motore integrato è **ngspice**. Sia il browser sia l’App desktop includono un motore; per il flusso di lavoro integrato non è necessaria un’installazione separata di ngspice.

Non hai mai eseguito una simulazione? Inizia con il [corso guidato SPICEcourse](../SPICE-Tutorial/). Per ottenere rapidamente un primo risultato, segui i passaggi per il partitore riportati di seguito. Questa guida spiega i controlli e come interpretarne i risultati.

## Cosa calcola un simulatore di circuiti
{: #what-a-circuit-simulator-calculates}

SPICE significa *Simulation Program with Integrated Circuit Emphasis*. Un simulatore risolve un modello matematico di un circuito connesso: i resistori mettono in relazione tensione e corrente, condensatori e induttori immagazzinano energia e i modelli dei semiconduttori descrivono il comportamento non lineare. Può determinare il punto di lavoro in continua, calcolare le forme d’onda nel tempo e analizzare la risposta in frequenza a piccolo segnale.

Uno schema fornisce la **connettività**; un modello SPICE fornisce il **comportamento**; un’analisi specifica **cosa calcolare**. Tutti e tre devono essere corretti. Un’immagine realistica di un amplificatore o di un processore non implica che contenga un modello di simulazione. Al contrario, un semplice triangolo o rettangolo può contenere un modello comportamentale utile.

La simulazione è utile per verificare un’idea, confrontare i valori dei componenti e comprendere una risposta inattesa. Il risultato dipende dal modello e dalle condizioni specificate. I fili ideali non hanno resistenza o induttanza parassite; un modello generico di transistor non costituisce una specifica completa per ogni transistor. Carico, impedenza di alimentazione, tolleranze e temperatura sono presi in considerazione solo nella misura in cui sono rappresentati dai modelli scelti.

## Motori Browser e Desktop
{: #browser-and-desktop-engines}

| Funzionalità | Browser | App desktop |
| --- | --- | --- |
| SPICE analogico, grafici, misure ed esplorazione | ngspice WebAssembly incluso, eseguito in un worker | ngspice nativo incluso, tramite un processo ausiliario |
| Librerie Digital logic / Functional blocks / Sensors and interfaces modellate e portabili | Sì | Sì |
| Modelli di codice XSPICE a eventi discreti | Non supportati¹ | Sì, librerie di modelli di codice nativo incluse |
| Finestre di grafici a comparsa | Sì | Sì |
| Finestre di strumenti virtuali a comparsa | No | Sì |

¹ Le versioni per browser possono aprire un disegno contenente risultati XSPICE salvati per visualizzarli. L’esecuzione di XSPICE richiede Desktop.

I calcoli vengono eseguiti localmente nel browser o nel motore Desktop. La ricerca online nelle librerie è una funzionalità separata. Il motore incluso attualmente è basato su ngspice 47; la cronologia delle esecuzioni identifica il motore/la build usati per un’acquisizione. Per verificare la sintassi dei modelli o le differenze tra motori, consulta il manuale upstream corrispondente.

## Esegui la prima simulazione
{: #run-your-first-simulation}

1. Nel browser, apri **Open Example** nella barra del titolo oppure, in Desktop, **File → Open Example**.
2. Seleziona **SPICE tutorial → divider → Open drawing**.
3. Esamina il circuito: un generatore da 5 V alimenta due resistori da 1 kΩ in serie. **OUT** è il loro punto intermedio e il filo inferiore è la massa **0**.
4. Seleziona il **foglio Simulation divider** nella barra dei fogli. La sua icona a forma di orologio lo distingue da un foglio schematico. Apri **Setup** e lascia selezionato **Operating Point**.
5. Scegli **Run**. Al termine, apri **History** e seleziona la nuova acquisizione completata.
6. Apri **Data**. Il punto intermedio è a **2.5 V**. La corrente del generatore è **−2.5 mA** perché il riferimento di corrente del generatore di tensione in ngspice è diretto verso il suo terminale positivo; in questo circuito, un generatore che eroga corrente ha corrente negativa.
7. Modifica un resistore ed esegui di nuovo la simulazione. Confronta il nuovo risultato con l’acquisizione originale.

{% include video-player.html src="/v4/videos/simulation/first-simulation.mp4" poster="/v4/videos/simulation/first-simulation.jpg" caption="Apri il partitore incluso, esamina la configurazione ed esegui una nuova acquisizione con ngspice nel browser. La tabella Data conferma 2.5 V su OUT e −2.5 mA attraverso il generatore." %}

L’esempio include un’acquisizione di riferimento conservata. Visualizzare immediatamente un risultato dopo averlo aperto non significa che sia stato eseguito un nuovo calcolo. **History** distingue i dati salvati dall’acquisizione creata con Run.

## Crea una nuova simulazione
{: #build-a-new-simulation}

1. Inserisci componenti modellati da **Standard → SPICE essentials** oppure usa il sottomenu **Simulation → SPICE components** della barra degli strumenti. **More…** apre la raccolta completa di SPICE essentials. I relativi simboli dispongono già di un [modello incluso e della mappatura dei pin](../Bundled-SPICE-Models/).
2. Collega i pin con fili e assegna etichette leggibili ai nodi importanti. Includi un collegamento effettivo alla massa **0**: **Simulation → SPICE → Insert Ground** inserisce il simbolo di alimentazione corretto.
3. Aggiungi un’eccitazione con **Simulation → SPICE → Insert Source**. Imposta il tipo di tensione/corrente e la forma d’onda. Aggiungi [sonde](../Simulation-Sources-and-Instruments/#probes-and-ground) se vuoi creare grafici con facilità.
4. Scegli **Simulation → Simulate** per aggiungere un **foglio Simulation**.
5. In **Setup**, scegli un’analisi e le relative impostazioni. Imposta i parametri o allega il testo di un modello personalizzato, se necessario per il circuito.
6. Scegli i segnali, avvia la simulazione e controlla il pannello **Simulation charts** e le viste **Data**, **History** e **Diagnostics** del foglio. Correggi gli errori di cablaggio o di modello segnalati prima di fare affidamento sui valori.

In un foglio Simulation, **Run** e **Stop** sono disponibili nella barra degli strumenti principale. Il foglio si apre su **Setup**. **History** e **Diagnostics** vengono visualizzati dopo un’esecuzione; **Measurements** e **Data** sono disponibili quando sono presenti dati numerici. In Setup, gli strumenti di Circuit Explorer si trovano sotto le impostazioni di analisi; aggiungi solo quelli necessari tramite **Add tools**.

Tutti i fogli schematici di un disegno formano **un unico circuito**. Ogni foglio Simulation dispone di una configurazione separata: analisi, parametri, modelli allegati, selezioni dei segnali, direttive e cronologia delle esecuzioni. Aggiungere un secondo foglio Simulation non crea un secondo circuito schematico isolato. Permette di esaminare lo stesso circuito in un altro modo, ad esempio affiancando un’analisi AC a un’analisi transitoria.

Usa un nome di configurazione distinto per ogni indagine. Duplicare una configurazione ne copia le definizioni, ma non le acquisizioni. È possibile eseguire una sola acquisizione alla volta; gli sweep e gli studi eseguono i rispettivi casi in sequenza.

## Massa, connessioni e modelli
{: #ground-connections-and-models}

Il riferimento di tensione SPICE è il nodo **0**. Un simbolo di alimentazione o un’etichetta di rete con esattamente quel valore stabilisce il riferimento. La sola parola **GND** è un normale nome di rete, a meno che non la si colleghi anche al nodo 0. Circuiti flottanti, pin di alimentazione dei modelli non alimentati e ritorni dei generatori non collegati sono problemi comuni alla prima esecuzione.

I fili devono raggiungere i pin nei rispettivi punti di connessione. Il testo nelle vicinanze non costituisce una connessione. Un filo che tocca l’estremità di un altro filo o la presa di un componente può creare una giunzione anche se non era nelle intenzioni. Usa [la connettività dei fili](../Wires/) e la netlist generata per risolvere i casi ambigui.

Ogni componente simulato richiede un template, un modello e una mappatura dei pin validi. Usa le proprietà **SPICE** del componente inserito per esaminarli. Consulta [Modelli SPICE e output della netlist](../SPICE-output/) prima di allegare modelli del produttore o adattare un simbolo destinato solo al disegno.

## Setup, Run e Stop
{: #setup-run-and-stop}

**Run** avvia una nuova acquisizione usando il circuito e la configurazione correnti. I grafici possono aggiornarsi man mano che arrivano i dati. **Stop** termina l’acquisizione e conserva i dati già ricevuti; lo stato dell’esecuzione e la disponibilità indicano cosa è stato mantenuto. Non è un comando di pausa/ripresa. Avvia un’altra esecuzione per effettuare un nuovo calcolo.

Le modifiche al circuito, al modello o alla configurazione rendono storico il risultato precedente. TinyCAD contrassegna i risultati da ricalcolare, invece di presentare valori obsoleti come misure del circuito modificato. La cronologia registra l’identità del circuito e delle impostazioni, il backend, l’ora e l’esito. Selezionare un’acquisizione precedente consente di consultare i dati precedenti; non ripristina lo schema precedente come operazione di annullamento.

## Salva e condividi i risultati
{: #save-and-share-results}

Salva il disegno per conservarne circuito, modelli, configurazioni e risultati acquisiti. TinyCAD usa automaticamente **`.dzn`** quando un disegno contiene componenti, impostazioni o risultati di simulazione. **Save without results** conserva le definizioni della simulazione e i metadati acquisiti di tipo scalare/rapporto, omettendo gli array numerici delle forme d’onda; i grafici che richiedono tali array avranno quindi bisogno di una nuova acquisizione.

I dati numerici conservati sono limitati a 64 MiB per esecuzione e 256 MiB per disegno, con un massimo di 1.000 esecuzioni per configurazione. Gli studi lunghi con passi temporali fini possono raggiungere questi limiti. Esporta i grafici importanti e i dati CSV ed elimina i risultati che non ti servono più. Salva gli allegati dei modelli insieme al disegno, così chi lo riceve non dovrà dipendere dai percorsi dei tuoi file locali.

## Disegni di simulazione `.dzn`
{: #dzn-simulation-drawings}
{: #dzn-simulation-drawings}

**`.dzn` è il formato compresso dei disegni di TinyCAD, supportato da TinyCAD v4 e versioni successive.** Racchiude in un unico file basato su ZIP lo schema, i simboli incorporati, i fogli Simulation, le impostazioni delle sorgenti, il testo dei modelli allegati e tutte le acquisizioni conservate. I dati numerici delle forme d’onda sono memorizzati in modo efficiente nel contenitore, compresi i risultati AC complessi. Il file si apre e si salva con i normali comandi **File → Open**, **Save** e **Save As**; non è necessaria alcuna estrazione manuale.

I disegni ordinari usano il formato XML **`.dsn`**. TinyCAD sceglie automaticamente `.dzn` quando sono presenti contenuti di simulazione, tra cui sorgenti, sonde, strumenti virtuali, attributi SPICE, una massa denominata `0`, fogli Simulation o risultati. **Save without results** continua a usare `.dzn` se conserva la configurazione della simulazione: rimuove i grandi array delle forme d’onda, non le definizioni dell’esperimento.

Usa **Save without results** per creare una copia più piccola da condividere quando chi la riceve può eseguire nuovamente la simulazione. Conserva i risultati se vuoi che il destinatario possa esaminare l’acquisizione, le misure e i dettagli del motore senza ripetere l’esecuzione. Un’acquisizione salvata descrive il circuito al momento dell’esecuzione; non sostituisce una nuova esecuzione dopo una modifica.

TinyCAD v3 non può aprire file `.dzn`. Cambiare l’estensione in `.dsn` non converte il formato e non rende compatibili con v3 i nuovi record di simulazione. Conserva una copia originale quando scambi un progetto con una versione precedente di TinyCAD. Un’esportazione `.cir` è testo SPICE destinato a un simulatore; è diversa da entrambi i formati di disegno TinyCAD.

## Continua con la guida di riferimento
{: #continue-with-the-reference}

- [Analisi e impostazioni](../Simulation-Analyses/) — DC, transitoria, AC, rumore, funzione di trasferimento e poli-zeri.
- [Sorgenti, sonde e strumenti virtuali](../Simulation-Sources-and-Instruments/) — eccitazioni, connessioni di misura e carico.
- [Grafici, misure e Circuit Explorer](../Simulation-Charts-and-Measurements/) — regolazione, sweep, requisiti e studi.
- [Modelli SPICE inclusi](../Bundled-SPICE-Models/) — trova, allega e personalizza un modello.
- [Modelli SPICE e output della netlist](../SPICE-output/) — template, file di modello e simulazione esterna.
- [XSPICE e simulazione digitale](../XSPICE/) — modelli Desktop a eventi discreti e a segnale misto.
- [Risoluzione dei problemi](../Simulation-Troubleshooting/) — diagnosi di connettività, modelli e problemi numerici.
- [Tutorial](../Simulation-Tutorials/) — i corsi SPICE e XSPICE completi già disponibili, con disegni eseguibili.

Per consultare il riferimento sul linguaggio e sui dispositivi del simulatore, usa la documentazione ufficiale di [ngspice](https://ngspice.sourceforge.io/docs.html), il [manuale utente PDF](https://ngspice.sourceforge.io/docs/ngspice-manual.pdf) e il [manuale HTML](https://ngspice.sourceforge.io/docs/ngspice-html-manual/manual.xhtml). Il manuale descrive ngspice nel suo complesso; TinyCAD mette a disposizione i flussi di lavoro integrati supportati descritti qui, non una shell di comandi senza restrizioni.
