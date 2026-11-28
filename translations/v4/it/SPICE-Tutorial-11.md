---
layout: default
title: 11. How TinyCAD implements SPICE
---
# 11. Come implementa SPICE TinyCAD
{: #how-tinycad-implements-spice}

[Precedente: indagini di progetto](/v4/SPICE-Tutorial-10/) · [Indice](/v4/Simulation-Tutorials/) · [Corso XSPICE](/v4/XSPICE-Tutorial-01/)

TinyCAD fornisce l'editor di schemi, le impostazioni di simulazione, gli
strumenti, i grafici e le misurazioni. **ngspice** è il motore di calcolo dei
circuiti sottostante. Disegni e configuri l'esperimento in TinyCAD; TinyCAD lo
traduce in testo di circuito SPICE, esegue ngspice e presenta i risultati
restituiti.

Gli esempi di questo capitolo sono inclusi in TinyCAD. Scegli **Apri esempio →
Tutorial SPICE**, seleziona **divider** o **rc-ac**, quindi scegli **Apri disegno**.
Per la dimostrazione digitale, usa **Apri esempio → Tutorial XSPICE e digitale →
logic-buffer → Apri disegno**. Non è necessario scaricare tutorial o modelli.

## SPICE, ngspice e XSPICE
{: #spice-ngspice-and-xspice}

SPICE descrive i circuiti mediante componenti, nodi collegati e modelli
matematici dei dispositivi. Un'analisi del punto di funzionamento risolve le
loro equazioni in CC. L'analisi transitoria segue il loro comportamento nel
tempo simulato. L'analisi CA linearizza il circuito intorno al punto di
polarizzazione per calcolare la risposta in frequenza a piccolo segnale.
Selezionare l'analisi fa quindi parte della definizione dell'esperimento.

ngspice è un simulatore di circuiti a segnali misti open source, derivato da
Berkeley SPICE. TinyCAD include il suo motore, senza richiedere l'installazione
e l'esecuzione di un simulatore separato da riga di comando. Il motore usato per
convalidare questi tutorial è **ngspice 47**; la vista **Diagnostica** di
un'esecuzione identifica il backend e la build. Consulta la [panoramica ufficiale di ngspice](https://ngspice.sourceforge.io/presentation.html)
per informazioni sul progetto originale.

**XSPICE è un'estensione integrata in ngspice**, non un'altra applicazione da
avviare. Aggiunge modelli di codice, inclusi blocchi analogici funzionali e
logica digitale i cui eventi sono coordinati con il risolutore analogico. Una
variazione dello stato digitale può quindi influire su un circuito analogico
nella stessa simulazione. L'[introduzione ufficiale a XSPICE](https://ngspice.sourceforge.io/xspice.html)
spiega questa distinzione.

| Ambiente TinyCAD | Modalità di esecuzione del motore | Esempi da usare |
| --- | --- | --- |
| Desktop | Un processo di risoluzione nativo separato, con librerie di modelli di codice XSPICE incluse | SPICE analogico e corso XSPICE |
| Browser | ngspice compilato in WebAssembly, eseguito in un web worker separato | SPICE analogico e modelli comportamentali analogici compatibili; questa build esclude XSPICE |

TinyCAD sceglie il backend in base all'ambiente. Non è necessario individuare
un eseguibile ngspice né selezionare un simulatore esterno per gli esempi
inclusi. Uno schema XSPICE può contenere le definizioni dei suoi modelli, ma ha
comunque bisogno delle librerie native dei modelli di codice fornite con Desktop.
Copiare lo schema nel browser non aggiunge questa funzionalità al motore.

## Dal disegno al risultato
{: #from-drawing-to-result}

Le fasi principali sono:

1. **Individuare i collegamenti elettrici.** TinyCAD determina quali pin dei
   componenti condividono una rete in base a fili, giunzioni ed etichette di
   rete. Un incrocio di fili non costituisce un collegamento, a meno che il
   disegno non unisca effettivamente le reti. Le etichette di rete uguali
   collegano punti distanti; il testo disegnato vicino a un filo no.
2. **Espandere le definizioni dei componenti.** Ogni simbolo simulato fornisce
   un modello SPICE. TinyCAD sostituisce il riferimento, i nomi dei nodi
   collegati e i valori, e include le definizioni dei dispositivi o dei
   sottocircuiti necessarie.
3. **Aggiungere l'esperimento.** La scheda Simulation fornisce l'analisi, la
   temperatura, i parametri, gli allegati dei modelli e i segnali richiesti.
   Prima di inviare il circuito, TinyCAD verifica la presenza di modelli
   mancanti, pin irrisolti, riferimenti duplicati e altri errori di
   configurazione rilevabili.
4. **Eseguire ngspice.** Il risolutore calcola tensioni, correnti e le altre
   grandezze richieste. Restituisce dati e un registro diagnostico; TinyCAD li
   raccoglie in un'acquisizione associata alle impostazioni e all'identità del
   motore dell'esecuzione.
5. **Esaminare e misurare.** TinyCAD presenta grafici, dati numerici e misure
   calcolate. Per esempio, una misura della frequenza di taglio deriva dai dati
   CA; non è un altro componente inserito nello schema.

Questo spiega perché un disegno dall'aspetto corretto non è sufficiente: un
transistor ha bisogno di un modello e di una mappatura dei pin corretta, mentre
due fili devono essere collegati elettricamente anche se i loro estremi
sembrano vicini allo zoom corrente.

## Quali simboli dovrei usare?
{: #which-symbols-should-i-use}

Apri l'**icona a forma di impulso** della barra degli strumenti. Il testo
visualizzato al passaggio del puntatore è **Simulation**. Nelle istruzioni
seguenti, **Simulation → …** indica il menu di questa icona.

| Esigenza | Dove trovarlo | Cosa verificare |
| --- | --- | --- |
| Resistore, condensatore, induttore, diodo, LED, transistor NPN/PNP o amplificatore operazionale 741 | **Simulation → SPICE components**, oppure libreria **SPICE essentials** | Valore, polarità, alimentazioni e ipotesi del modello |
| Stimolo indipendente di tensione/corrente | **Simulation → SPICE → Insert Source** | Tipo di sorgente, forma del segnale, unità e direzione del collegamento |
| Nodo di riferimento | **Simulation → SPICE → Insert Ground** | Collegalo elettricamente; il riferimento SPICE è il nodo `0` |
| Osservazione della tensione | **Insert Probe** o **Insert Differential Probe** nel sottomenu SPICE | Una tensione con un solo terminale è riferita a massa; una sonda differenziale misura tra i suoi terminali |
| Osservazione della corrente di ramo | **Simulation → SPICE → Insert Current Probe** | Inseriscila in serie e verifica la direzione positiva |
| Sorgente dipendente | **Simulation → SPICE → Insert Controlled Source** | Terminali di controllo, terminali di uscita e guadagno/transconduttanza |
| Strumentazione da banco | **Simulation → Lab Equipment** | Impostazioni di oscilloscopio, multimetro, generatore di funzioni e alimentatore da banco; il loro carico e i limiti sono importanti |
| Logica modellata ordinaria | Libreria **Digital logic** | Questi modelli SPICE portabili e configurabili sono distinti dagli esempi XSPICE a eventi discreti; controlla i pin di alimentazione e le proprietà del modello |
| Logica XSPICE a eventi discreti | Esempi incorporati del **tutorial XSPICE e digitale** | Usa Desktop e mantieni nel modello i ponti analogico/digitale |

La libreria SPICE essentials fornisce esempi già configurati di dispositivi
comuni. Un transistor generico o un modello di tipo 741 è utile per imparare, ma
il suo comportamento simulato non corrisponde automaticamente alle specifiche
di un componente di uno specifico produttore. I capitoli sugli amplificatori
indicano esplicitamente i modelli generici sostituiti ai dispositivi originali
`AMP.DSN`.

Un simbolo di un'altra libreria potrebbe essere solo grafico. Seleziona il
simbolo inserito e controlla la scheda **SPICE** nelle sue proprietà. Deve avere
un modello SPICE valido e tutte le definizioni dei modelli a cui fa riferimento
quel modello. Un nome, un package o un'immagine corrispondenti non forniscono
quelle definizioni. Analogamente, un'etichetta denominata `VCC` assegna un nome a
una rete; non crea una tensione di alimentazione. Collega a quella rete una
sorgente effettiva.

## Eseguire un esperimento esistente
{: #run-an-existing-experiment}

1. Scegli **Apri esempio → Tutorial SPICE → divider → Apri disegno**.
2. Seleziona la sua scheda **Simulation**. In **Setup**, l'analisi salvata è
   **Measure DC — Operating Point**. Il circuito usa una sorgente da 5 V e due
   resistori da 1 kΩ.
3. Scegli **Run**. Usa **Simulation → Show charts** se il pannello dei grafici è nascosto.
4. Esamina `in`, `out` e `v1#branch`. Aspettati rispettivamente **5 V**, **2,5 V** e
   **−2,5 mA**. La corrente della sorgente è definita entrante nel terminale
   positivo, quindi qui una sorgente che eroga potenza ha corrente negativa.
5. Cambia R2 in `2k` nella scheda del circuito ed esegui di nuovo. Aspettati che OUT diventi
   circa **3,333 V**. Un'acquisizione precedente conservata descrive ancora il
   circuito precedente; modificare un valore non riscrive i risultati.

![Scheda Simulation di TinyCAD con analisi CA RC e risultato della frequenza di taglio](/v4/Images/simulation-tutorials/spice/tinycad-ac-setup.png)

Questa schermata dell'applicazione mostra la vista **Setup** per **rc-ac**, un
altro esempio incorporato. Il suo filtro da 1 kΩ/1 µF ha una frequenza di taglio
di circa **159,15 Hz**. Aprilo per confrontare un esperimento nel dominio della
frequenza con il singolo punto in CC del partitore.

**Run** avvia un'acquisizione finita con l'analisi selezionata. **Stop** termina
il risolutore e conserva i campioni accettati; questi campioni costituiscono un
risultato parziale, non dimostrano che la durata richiesta sia stata completata.
Queste build non offrono la pausa/ripresa né un risolutore in esecuzione
continua. Usa **History** per esaminare le esecuzioni precedenti e
**Diagnostics** per leggere il registro del risolutore.

Per una dimostrazione, guarda [aprire, eseguire e modificare un partitore](/v4/videos/simulation-tutorials/spice/first-run.mp4)
e [risposta CA e frequenza di taglio](/v4/videos/simulation-tutorials/spice/ac-response.mp4). Entrambi mostrano i
controlli reali di Desktop, acquisizioni native completate e risultati
numerici, con didascalie.

## Creare la prima simulazione
{: #build-your-own-first-simulation}

Inserisci due resistori da **Simulation → SPICE components**, una sorgente con
**Insert Source** e una massa con **Insert Ground**. Disponili come partitore:
positivo della sorgente a R1, R1 a R2 e R2 di nuovo al negativo della sorgente e
alla massa. Assegna a entrambi i resistori `1k`, imposta la sorgente a 5 V CC ed etichetta
l'alimentazione `IN` e il punto intermedio `OUT`.
Assicurati che ogni componente abbia un riferimento univoco, come R1, R2 e V1.

Scegli **Simulation → Simulate** per creare una scheda Simulation. In **Setup**,
seleziona **Measure DC — Operating Point**, quindi **Run**. Dovresti ottenere
gli stessi valori dell'esempio divider incorporato. Se l'esecuzione non riesce,
confronta i collegamenti, le impostazioni della sorgente e le proprietà SPICE
con quelle dell'esempio funzionante.

Per un esperimento transitorio, seleziona **Over time — Transient**, imposta la
durata e il passo massimo e configura una sorgente variabile nel tempo. Per
l'analisi CA, seleziona **Frequency response — AC**, imposta l'intervallo di
frequenza e i punti per decade e assegna all'ingresso un'**ampiezza CA** non
nulla, di solito 1 V. La frequenza sinusoidale e l'ampiezza transitoria non
impostano la scansione CA. TinyCAD offre anche le analisi di scansione CC,
rumore, funzione di trasferimento e poli-zeri; i capitoli precedenti illustrano
quando sono utili.

## Esaminare il testo SPICE generato e aggiungere modelli
{: #inspect-the-generated-spice-and-add-models}

Dopo aver eseguito il partitore, apri **Diagnostics → Generate circuit text**.
Le righe importanti sono simili a queste; TinyCAD aggiunge anche direttive per
la temperatura e per i segnali salvati:

```spice
R1 IN OUT 1k
R2 OUT 0 1k
V1 IN 0 DC 5 AC 0 0
.op
.end
```

`R1 IN OUT 1k` indica un resistore da 1 kΩ tra i nodi IN e OUT. `0` è il nodo
di riferimento. Questo testo rende espliciti i collegamenti e la polarità della
sorgente. Usa **Export circuit** se devi esaminare o eseguire il netlist
separatamente. La scheda Simulation di TinyCAD gestisce `.op`, `.tran`, `.ac` e gli altri comandi di
analisi; non incollarli né inserire `.end` nelle proprietà SPICE di un componente.

Per un componente già presente nel catalogo di TinyCAD, usa [Modelli SPICE inclusi](../Bundled-SPICE-Models/) per scegliere una definizione e verificare la mappatura dei pin. Per un file esterno richiesto da una definizione Custom, espandi **Setup → SPICE models**. Scegli un file
`.lib`, `.cir` o `.mod`, oppure inserisci il nome del file e il testo del modello. In entrambi i casi, scegli **Save model** per allegarlo. Usa un nome di file semplice come
`device.lib`. Configura quindi il modello SPICE del simbolo in modo da istanziare il dispositivo appropriato o il `.SUBCKT`,
e includi l'allegato dove necessario, per esempio con `.include device.lib`
nel preambolo. Allegare un file da solo non lo associa a un simbolo.

Confronta l'ordine dei terminali del modello con i **numeri dei pin** del
simbolo, non con le posizioni apparentemente occupate dai pin sulla pagina. Un
modello di transistor a tre terminali e un sottocircuito di un produttore
possono usare ordini diversi dei nodi. Verifica anche gli eventuali riferimenti
a modelli annidati: anche i file inclusi devono essere allegati alla scheda
Simulation. Le definizioni e gli allegati dei modelli vengono salvati insieme
al disegno.

TinyCAD supporta il testo dei modelli incorporati, non script di comandi
ngspice arbitrari né moduli eseguibili esterni. In questo flusso di lavoro sono
esclusi i blocchi `.control`, i comandi shell, il caricamento di moduli esterni e i segnali/modelli basati su file. Usa i controlli delle sorgenti e le analisi supportati, oppure esporta il circuito per un esperimento ngspice separato da riga di comando. Un modello del produttore scritto per un altro dialetto SPICE potrebbe dover essere adattato prima di poter essere accettato da ngspice.

## Come si inseriscono le simulazioni digitali
{: #how-digital-simulations-fit-in}

Apri **Tutorial XSPICE e digitale → logic-buffer** in Desktop. Il modello X1
contiene un ponte analogico-digitale, un buffer a eventi discreti e un ponte
digitale-analogico. La sorgente ordinaria pilota l'ingresso analogico; i ponti
rendono gli stati logici accessibili come tensioni nei grafici di TinyCAD.

![Ingresso e uscita calcolati del buffer XSPICE incorporato](/v4/Images/simulation-tutorials/xspice/logic-buffer-results.png)

Esegui il transitorio salvato. Aspettati impulsi da 0–5 V con un periodo di
1 µs e una transizione in uscita ritardata di circa 20 ns, con fronti finiti.
Ingrandisci per esaminare il ritardo. Questa figura traccia i risultati
 effettivi del risolutore dell'esempio.

I nodi digitali del modello non sono normali nodi di tensione. Le soglie del
ponte e la rappresentazione di uno stato indefinito sono scelte di modellazione
intenzionali. Un gate comportamentale costruito con espressioni SPICE analogiche
può sembrare simile in un grafico, ma usa un metodo di simulazione diverso.
Prosegui con la [panoramica XSPICE](/v4/XSPICE-Tutorial-01/) per ponti, temporizzazione, memorizzazione e circuiti a segnali misti.

## Salvare, confrontare e risolvere i problemi
{: #save-compare-and-troubleshoot}

Salva l'esperimento con **Save As** per conservare una copia modificabile
dell'esempio incorporato. TinyCAD può mantenere le acquisizioni insieme al
disegno; **Save without results** conserva il circuito e la configurazione, ma
esclude i risultati memorizzati. Usa le esportazioni **Data** per dati CSV,
JSON o SPICE raw quando servono ulteriori analisi. Annota l'acquisizione, il
modello e la finestra di misurazione utilizzati.

| Sintomo | Primo controllo |
| --- | --- |
| Informazioni SPICE mancanti | Usa un simbolo modellato o configura la sua scheda SPICE |
| Modello o sottocircuito mancante | Nome del modello, file allegati, istruzione include e ordine dei terminali |
| Circuito flottante o massa mancante | Una massa SPICE collegata e percorsi di ritorno CC appropriati |
| Etichetta di alimentazione ma nessuna tensione di alimentazione | Collega una sorgente di tensione o un alimentatore da banco alla rete etichettata |
| Risposta CA vuota/nulla | Ampiezza CA dell'ingresso e segnali selezionati |
| Modello XSPICE non disponibile nel browser | Esegui l'esempio in TinyCAD Desktop |
| Il grafico non corrisponde ai valori modificati | Esegui di nuovo e seleziona la nuova acquisizione |
| Errore di convergenza o forma d'onda incompleta | Leggi Diagnostics, semplifica il circuito e controlla i fronti dello stimolo, il passo temporale e la validità del modello |

Il [manuale ngspice](https://ngspice.sourceforge.io/docs.html) è il riferimento per la semantica dei dispositivi e dei modelli. I controlli di TinyCAD determinano quali di queste funzionalità sono disponibili nel flusso di lavoro integrato.

## Scaricare i circuiti della lezione
{: #download-the-lesson-circuits}

Gli stessi esempi sono già disponibili in **Apri esempio**. Per una copia
indipendente, scarica un disegno `.dzn` e usa **File → Apri** in TinyCAD. Il file `.cir` associato contiene testo SPICE da esaminare o usare con un simulatore esterno compatibile; non è un disegno TinyCAD. Per nuove esecuzioni dei circuiti XSPICE è necessario Desktop.

| Esempio | Disegno | Netlist |
| --- | --- | --- |
| divider | [Disegno TinyCAD](/v4/examples/simulation-tutorials/spice/divider.dzn) | [Testo SPICE](/v4/examples/simulation-tutorials/spice/divider.cir) |
| logic-buffer | [Disegno TinyCAD](/v4/examples/simulation-tutorials/xspice/logic-buffer.dzn) | [Testo SPICE](/v4/examples/simulation-tutorials/xspice/logic-buffer.cir) |
