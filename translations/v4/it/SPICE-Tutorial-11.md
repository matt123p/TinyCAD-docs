---
layout: default
title: 11. How TinyCAD implements SPICE
---
# 11. Come TinyCAD implementa SPICE
{: #how-tinycad-implements-spice}

[Precedente: indagini di progettazione](/v4/SPICE-Tutorial-10/) · [Indice](/v4/Simulation-Tutorials/) · [Corso XSPICE](/v4/XSPICE-Tutorial-01/)

TinyCAD fornisce l'editor di schemi, le impostazioni di simulazione, gli strumenti, i grafici
e le misurazioni. **ngspice** è il motore di calcolo dei circuiti che opera dietro di essi.
Disegni e configuri l'esperimento in TinyCAD; TinyCAD lo traduce in testo di circuito
SPICE, esegue ngspice e presenta i risultati restituiti.

Gli esempi di questo capitolo sono inclusi in TinyCAD. Scegli **Open Example →
SPICE tutorial**, seleziona **divider** o **rc-ac**, quindi scegli **Open Drawing**.
Per la dimostrazione digitale, usa **Open Example → XSPICE and digital tutorial →
logic-buffer → Open Drawing**. Non è necessario scaricare tutorial o modelli.

## SPICE, ngspice e XSPICE
{: #spice-ngspice-and-xspice}

SPICE descrive i circuiti tramite componenti, nodi connessi e modelli matematici dei dispositivi.
Un'analisi del punto di funzionamento risolve le relative equazioni in corrente continua.
L'analisi transitoria segue il loro comportamento nel tempo simulato. L'analisi AC linearizza
il circuito attorno al suo punto di polarizzazione per calcolare la risposta in frequenza a piccolo segnale.
La selezione dell'analisi fa quindi parte della definizione dell'esperimento.

ngspice è un simulatore di circuiti a segnali misti open source, derivato da Berkeley
SPICE. TinyCAD include il suo motore, invece di richiedere l'installazione e l'esecuzione
di un simulatore a riga di comando separato. Il motore usato per verificare questi tutorial
è **ngspice 47**; la vista **Diagnostics** di un'esecuzione ne identifica il backend e la build.
Vedi la [panoramica ufficiale di ngspice](https://ngspice.sourceforge.io/presentation.html)
per informazioni sul progetto originale.

**XSPICE è un'estensione integrata in ngspice**, non un'altra applicazione da
avviare. Aggiunge modelli di codice, inclusi blocchi analogici funzionali e logica digitale,
i cui eventi sono coordinati con il risolutore analogico. Una variazione di stato digitale
può quindi influire su un circuito analogico nella stessa simulazione. L'[introduzione ufficiale a XSPICE](https://ngspice.sourceforge.io/xspice.html)
descrive questa distinzione.

| Ambiente TinyCAD | Modalità di esecuzione del motore | Esempi da usare |
| --- | --- | --- |
| Desktop | Un processo risolutore nativo separato, con librerie di modelli di codice XSPICE incluse | SPICE analogico e il corso XSPICE |
| Browser | ngspice compilato in WebAssembly, in esecuzione in un web worker separato | SPICE analogico e modelli comportamentali analogici compatibili; questa build esclude XSPICE |

TinyCAD sceglie il backend in base al proprio ambiente. Non è necessario individuare un
eseguibile ngspice né selezionare un simulatore esterno per gli esempi inclusi.
Uno schema XSPICE può contenere le definizioni dei modelli, ma richiede comunque le
librerie native di modelli di codice fornite con Desktop. Copiare lo schema nel browser
non aggiunge questa funzionalità al motore.

## Dal disegno al risultato
{: #from-drawing-to-result}

Le fasi principali sono:

1. **Individuare i collegamenti elettrici.** TinyCAD determina quali pin dei componenti
   condividono una rete in base a fili, giunzioni ed etichette di rete. Un incrocio di fili non è un
   collegamento, a meno che il disegno non unisca effettivamente le reti. Le etichette di rete
   corrispondenti collegano punti distanti; il testo disegnato vicino a un filo non lo fa.
2. **Espandere le definizioni dei componenti.** Ogni simbolo simulato fornisce un modello
   SPICE. TinyCAD sostituisce il riferimento, i nomi dei nodi connessi e i valori,
   e include le definizioni necessarie di dispositivi o sottocircuiti.
3. **Aggiungere l'esperimento.** La scheda Simulation fornisce l'analisi,
   la temperatura, i parametri, gli allegati dei modelli e i segnali richiesti. TinyCAD
   controlla la presenza di modelli mancanti, pin non risolti, riferimenti duplicati e altri
   errori di configurazione rilevabili, prima di inviare il circuito.
4. **Eseguire ngspice.** Il risolutore calcola tensioni, correnti e le altre grandezze richieste.
   Restituisce dati e un registro diagnostico; TinyCAD li raccoglie in un'acquisizione
   associata alle impostazioni dell'esecuzione e all'identità del motore.
5. **Esaminare e misurare.** TinyCAD presenta grafici, dati numerici e misure calcolate.
   Per esempio, una misura della frequenza di taglio è ricavata dai dati AC;
   non è un altro componente inserito nello schema.

Questo spiega perché un disegno dall'aspetto corretto non è sufficiente: un transistor ha bisogno
di un modello e di una mappatura corretta dei pin, mentre due fili devono essere collegati elettricamente
anche se, allo zoom corrente, i loro estremi sembrano vicini.

## Quali simboli devo usare?
{: #which-symbols-should-i-use}

Apri l'**icona a forma di impulso** della barra degli strumenti. Il testo al passaggio del mouse è **Simulation**.
Nelle istruzioni seguenti, **Simulation → …** indica il menu di questa icona.

| Esigenza | Dove trovarlo | Cosa controllare |
| --- | --- | --- |
| Resistore, condensatore, induttore, diodo, LED, transistor NPN/PNP o amplificatore operazionale 741 | **Simulation → SPICE components**, oppure la libreria **SPICE essentials** | Valore, polarità, alimentazioni e ipotesi del modello |
| Stimolo indipendente di tensione/corrente | **Simulation → SPICE → Insert Source** | Tipo di sorgente, forma d'onda, unità e direzione del collegamento |
| Nodo di riferimento | **Simulation → SPICE → Insert Ground** | Collegalo elettricamente; il riferimento SPICE è il nodo `0` |
| Misura della tensione | **Insert Probe** o **Insert Differential Probe** nel sottomenu SPICE | Una tensione con un solo terminale è riferita a massa; una sonda differenziale misura tra i suoi terminali |
| Misura della corrente di ramo | **Simulation → SPICE → Insert Current Probe** | Inseriscila in serie e controlla la direzione positiva |
| Sorgente controllata | **Simulation → SPICE → Insert Controlled Source** | Terminali di controllo, terminali di uscita e guadagno/conduttanza di trasferimento |
| Strumenti da banco | **Simulation → Lab Equipment** | Impostazioni di oscilloscopio, multimetro, generatore di funzioni e alimentatore da banco; il loro carico e i loro limiti sono importanti |
| Logica modellata ordinaria | La libreria **Digital logic** | Questi modelli SPICE portabili e configurabili sono distinti dagli esempi XSPICE basati su eventi; controlla i pin di alimentazione e le proprietà del modello |
| Logica XSPICE basata su eventi | Gli esempi incorporati in **XSPICE and digital tutorial** | Usa Desktop e mantieni nel modello i ponti analogico/digitale |

La libreria SPICE essentials fornisce esempi già configurati dei dispositivi più comuni.
Un transistor generico o un modello in stile 741 sono utili per imparare, ma
il loro comportamento simulato non corrisponde automaticamente alle specifiche di un particolare
componente di un produttore. I capitoli sugli amplificatori documentano esplicitamente i modelli
generici sostitutivi dei dispositivi `AMP.DSN` originali.

Un simbolo di un'altra libreria potrebbe servire solo per il disegno. Seleziona il simbolo inserito
e controlla la scheda **SPICE** nelle sue proprietà. Deve avere un modello SPICE valido
e le eventuali definizioni di modello a cui il modello fa riferimento. Un nome, un package o
un'immagine corrispondenti non aggiungono tali definizioni. Analogamente, un'etichetta chiamata `VCC` indica una
rete; non crea una tensione di alimentazione. Collega a quella rete una sorgente reale.

## Eseguire un esperimento esistente
{: #run-an-existing-experiment}

1. Scegli **Open Example → SPICE tutorial → divider → Open Drawing**.
2. Seleziona la scheda **Simulation**. In **Setup**, l'analisi salvata è
   **Measure DC — Operating Point**. Il circuito usa una sorgente da 5 V e due
   resistori da 1 kΩ.
3. Scegli **Run**. Usa **Simulation → Show charts** se il pannello dei grafici è nascosto.
4. Esamina `in`, `out` e `v1#branch`. Aspettati **5 V**, **2,5 V** e
   **−2,5 mA**, rispettivamente. La corrente della sorgente è definita entrante nel terminale
   positivo, perciò una sorgente che eroga potenza ha qui corrente negativa.
5. Modifica R2 in `2k` nella scheda del circuito ed esegui di nuovo. Aspettati che OUT diventi
   circa **3,333 V**. Un'acquisizione precedente ancora conservata descrive il circuito
   precedente; la modifica di un valore non riscrive i suoi risultati.

![Scheda Simulation di TinyCAD con l'analisi AC RC e il risultato della frequenza di taglio](/v4/images/simulation-tutorials/spice/tinycad-ac-setup.png)

Questa schermata dell'applicazione mostra la vista **Setup** di **rc-ac**, un altro
esempio incorporato. Il suo filtro da 1 kΩ/1 µF ha una frequenza di taglio vicina a **159,15 Hz**. Aprilo
per confrontare un esperimento nel dominio della frequenza con l'unico punto CC del partitore.

**Run** avvia un'acquisizione di durata finita con l'analisi selezionata. **Stop** arresta
il risolutore e conserva i campioni accettati; questi campioni sono un risultato parziale,
non la prova che la durata richiesta sia stata completata. Queste build non offrono
funzioni di pausa/ripresa né un risolutore attivo a tempo indefinito. Usa **History** per esaminare le
esecuzioni precedenti e **Diagnostics** per leggere il registro del risolutore.

Per una dimostrazione, guarda [aprire, eseguire e modificare un partitore](/v4/videos/simulation-tutorials/spice/first-run.mp4)
e [risposta AC e frequenza di taglio](/v4/videos/simulation-tutorials/spice/ac-response.mp4). Entrambi mostrano i controlli reali
di Desktop, acquisizioni native completate e risultati numerici, con didascalie.

## Creare la prima simulazione
{: #build-your-own-first-simulation}

Inserisci due resistori da **Simulation → SPICE components**, una sorgente con **Insert Source**
e una massa con **Insert Ground**. Disponili come un partitore: il positivo della sorgente
va a R1, R1 a R2 e R2 torna al negativo della sorgente e alla massa. Assegna a entrambi i resistori
`1k`, imposta la sorgente a 5 V CC ed etichetta l'alimentazione `IN` e il punto intermedio `OUT`.
Assicurati che ogni componente abbia un riferimento univoco, come R1, R2 e V1.

Scegli **Simulation → Simulate** per creare una scheda Simulation. Seleziona
**Measure DC — Operating Point** in **Setup**, quindi **Run**. Dovresti ottenere
gli stessi valori dell'esempio di partitore incorporato. Se non funziona, confronta i collegamenti,
le impostazioni della sorgente e le proprietà SPICE con l'esempio funzionante.

Per un esperimento transitorio, seleziona **Over time — Transient**, imposta la durata
e il passo massimo e configura una sorgente variabile nel tempo. Per l'analisi AC, seleziona
**Frequency response — AC**, imposta l'intervallo di frequenza e i punti per decade,
e assegna all'ingresso un'**ampiezza AC** non nulla, solitamente 1 V. La sua
frequenza sinusoidale e l'ampiezza transitoria non impostano la scansione AC. TinyCAD espone anche
le analisi di scansione CC, rumore, funzione di trasferimento e poli-zeri; i capitoli precedenti
illustrano quando ciascuna è utile.

## Esaminare il testo SPICE generato e aggiungere modelli
{: #inspect-the-generated-spice-and-add-models}

Dopo aver eseguito il partitore, apri **Diagnostics → Generate circuit text**.
Le righe importanti sono simili a queste; TinyCAD aggiunge anche la temperatura e le direttive per
salvare i segnali:

```spice
R1 IN OUT 1k
R2 OUT 0 1k
V1 IN 0 DC 5 AC 0 0
.op
.end
```

`R1 IN OUT 1k` indica un resistore da 1 kΩ tra i nodi IN e OUT. `0` è il
nodo di riferimento. Questo testo rende espliciti i collegamenti e la polarità della sorgente.
Usa **Export circuit** se hai bisogno di esaminare o eseguire la netlist separatamente.
La scheda Simulation di TinyCAD gestisce `.op`, `.tran`, `.ac` e gli altri comandi di analisi; non incollarli, né incollare `.end`, nelle proprietà SPICE di un componente.

Per aggiungere un modello di dispositivo, espandi **Setup → SPICE models**. Scegli un file
`.lib`, `.cir` o `.mod`, oppure inseriscine il nome e il testo del modello. In entrambi
i casi, scegli **Save model** per allegarlo. Usa un nome di file semplice, come
`device.lib`. Poi configura il
modello SPICE del simbolo per istanziare il dispositivo o il `.SUBCKT` appropriato,
e includi l'allegato dove necessario, per esempio con `.include device.lib`
nel suo prologo. Il solo allegato di un file non lo associa a un simbolo.

Controlla l'ordine dei terminali del modello rispetto ai **numeri dei pin** del simbolo, non
alle posizioni apparenti dei pin sulla pagina. Un modello di transistor a tre terminali e un sottocircuito
di un produttore potrebbero usare ordini dei nodi diversi. Verifica anche eventuali riferimenti
annidati ad altri modelli: i file inclusi devono essere allegati alla scheda Simulation.
Le definizioni dei modelli e i relativi allegati vengono salvati insieme al disegno.

TinyCAD supporta testo di modello incorporato, non script di comandi ngspice arbitrari né
moduli eseguibili esterni. I blocchi `.control`, i comandi shell, il caricamento di moduli esterni
e gli stimoli/modelli basati su file sono esclusi da questo flusso di lavoro. Usa i controlli
per le sorgenti e le analisi supportati, oppure esporta il circuito per un esperimento ngspice
separato da riga di comando. Un modello di un produttore scritto per un altro dialetto
SPICE potrebbe dover essere adattato prima che ngspice lo accetti.

## Come si inseriscono le simulazioni digitali
{: #how-digital-simulations-fit-in}

Apri **XSPICE and digital tutorial → logic-buffer** in Desktop. Il modello X1
contiene un ponte analogico-digitale, un buffer basato su eventi e un ponte
digitale-analogico. La sorgente ordinaria pilota l'ingresso analogico;
i ponti rendono gli stati logici accessibili come tensioni nei grafici di TinyCAD.

![Ingresso e uscita calcolati del buffer XSPICE incorporato](/v4/images/simulation-tutorials/xspice/logic-buffer-results.png)

Esegui il transitorio salvato. Aspettati impulsi da 0–5 V con un periodo di 1 µs e una
transizione d'uscita ritardata di circa 20 ns, con fronti finiti. Ingrandisci per esaminare
il ritardo. Questa figura mostra i risultati effettivi del risolutore ottenuti dall'esempio.

I nodi digitali del modello non sono normali nodi di tensione. Le soglie del ponte
e la sua rappresentazione di uno stato indefinito sono scelte intenzionali di modellazione.
Una porta comportamentale costruita con espressioni SPICE analogiche può apparire simile in un
grafico, ma utilizza un metodo di simulazione diverso. Continua con la
[panoramica di XSPICE](/v4/XSPICE-Tutorial-01/) per approfondire ponti, temporizzazione, memorizzazione e
circuiti a segnali misti.

## Salvare, confrontare e risolvere i problemi
{: #save-compare-and-troubleshoot}

Salva l'esperimento con **Save As** per conservare una copia modificabile dell'esempio incorporato.
TinyCAD può conservare le acquisizioni insieme al disegno; **Save without
results** mantiene il circuito e la configurazione, omettendo i risultati memorizzati.
Usa le esportazioni **Data** per ottenere dati CSV, JSON o SPICE raw quando servono ulteriori analisi.
Annota quale acquisizione, modello e intervallo di misura hai utilizzato.

| Sintomo | Primo controllo |
| --- | --- |
| Informazioni SPICE mancanti | Usa un simbolo dotato di modello o configura la sua scheda SPICE |
| Modello o sottocircuito mancante | Nome del modello, file allegati, istruzione include e ordine dei terminali |
| Circuito flottante o massa mancante | Una massa SPICE collegata e percorsi di ritorno CC adeguati |
| Etichetta di alimentazione ma nessuna tensione | Collega una sorgente di tensione o un alimentatore da banco alla rete etichettata |
| Risposta AC vuota/nulla | Ampiezza AC dell'ingresso e segnali scelti |
| Modello XSPICE non disponibile nel browser | Esegui l'esempio in TinyCAD Desktop |
| Il grafico non corrisponde ai valori modificati | Esegui di nuovo e seleziona la nuova acquisizione |
| Errore di convergenza o forma d'onda incompleta | Leggi Diagnostics, semplifica il circuito e controlla fronti dello stimolo, passo temporale e validità del modello |

Il [manuale di ngspice](https://ngspice.sourceforge.io/docs.html) è il riferimento
per la semantica dei dispositivi e dei modelli. I controlli di TinyCAD determinano quali di queste
funzionalità sono disponibili attraverso il flusso di lavoro integrato.

## Scaricare i circuiti degli esempi
{: #download-the-lesson-circuits}

Gli stessi esempi sono già disponibili in **Open Example**. Per una copia indipendente, scarica un disegno `.dzn` e usa **File → Open** in TinyCAD. Il file `.cir` associato è testo SPICE per l'ispezione o per un simulatore esterno compatibile, non un disegno TinyCAD. Per eseguire nuove simulazioni dei circuiti XSPICE è necessario Desktop.

| Esempio | Disegno | Netlist |
| --- | --- | --- |
| divider | [Disegno TinyCAD](/v4/examples/simulation-tutorials/spice/divider.dzn) | [Testo SPICE](/v4/examples/simulation-tutorials/spice/divider.cir) |
| logic-buffer | [Disegno TinyCAD](/v4/examples/simulation-tutorials/xspice/logic-buffer.dzn) | [Testo SPICE](/v4/examples/simulation-tutorials/xspice/logic-buffer.cir) |
