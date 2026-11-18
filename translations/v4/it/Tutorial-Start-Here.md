---
layout: default
title: "Start here: how to use these tutorials"
---
# Per iniziare: come usare questi tutorial
{: #start-here-how-to-use-these-tutorials}

[Indice](/v4/Simulation-Tutorials/) · [Avanti: la prima simulazione SPICE](/v4/SPICE-Tutorial-01/)

Questi tutorial combinano spiegazioni con circuiti che puoi eseguire e modificare in
TinyCAD. **Gli esempi sono già inclusi in TinyCAD.** Non devi
scaricare un file ZIP del tutorial, cercare un disegno sul disco né installare un programma
SPICE separato per seguire le lezioni.

Se la simulazione è una novità per te, inizia con il corso SPICE. Parte da tensione,
corrente e circuiti semplici, quindi prosegue con forme d'onda, filtri, amplificatori
e analisi progettuali. Il corso XSPICE separato tratta la logica a eventi
e la simulazione a segnali misti. Per questo corso usa **TinyCAD Desktop**; il motore
nel browser non include XSPICE.

## Trovare e aprire gli esempi inclusi
{: #find-and-open-the-bundled-examples}

1. Apri TinyCAD e cerca **Open Example** a destra della barra del titolo del browser, oppure **File → Open Example** in Desktop. Ha l'icona di una cartella aperta. Si apre il browser degli esempi.
2. Scegli **SPICE tutorial** per le lezioni analogiche oppure **XSPICE and digital
tutorial** per le lezioni digitali. I gruppi compaiono anche nell'area di
   navigazione del browser.
3. Nell'elenco **Drawings** del gruppo, seleziona l'esempio indicato nella lezione.
   Per il primo esperimento, seleziona **divider** in **SPICE tutorial**.
4. Leggi la descrizione e controlla l'anteprima del circuito. Selezionando l'esempio
   ne vengono mostrati i dettagli; il disegno corrente non viene ancora sostituito.
5. Scegli **Open drawing** in fondo al browser. TinyCAD apre una
   copia modificabile dell'esempio. Se hai modifiche non salvate, gestisci la
   richiesta di salvataggio prima di continuare.

L'istruzione breve **Open Example → SPICE tutorial → divider → Open drawing**
indica questi stessi passaggi. Un nome come **divider**, **rc-ac** o **logic-counter**
è il nome dell'esempio nel browser, non un nome di file da cercare.

Usa **Search groups and examples** per trovare un esempio specifico. Se un filtro nasconde
ciò che ti serve, cancella la ricerca e usa **All groups** per tornare all'elenco
 dei gruppi. **Open drawing** diventa disponibile dopo aver selezionato un esempio.
La voce **Start here — using the tutorials** mostra anche questa guida e
apre lo stesso primo circuito divider.

Guarda [aprire, eseguire e modificare un divider](/v4/videos/simulation-tutorials/spice/first-run.mp4) per una panoramica video con didascalie
di questi passaggi e delle prime due acquisizioni.

## Seguire una lezione insieme al circuito
{: #follow-a-lesson-alongside-its-circuit}

Tieni il capitolo aperto nel manuale o nel visualizzatore Markdown mentre lavori in
TinyCAD. Il browser degli esempi mostra anche la descrizione della lezione associata.
Ogni capitolo inizia indicando gli esempi incorporati che utilizza. Alcuni capitoli ne usano
diversi: per esempio, il capitolo sui generatori di segnale offre esempi di sorgenti
separati, così puoi studiare una forma d'onda alla volta.

Segui questa procedura per ogni esperimento:

1. **Leggi la domanda.** Individua che cosa stai analizzando: una tensione CC,
   il tempo di carica, la frequenza di taglio, uno stato logico o un'altra grandezza.
2. **Esamina il circuito.** Individua la sorgente, la massa, i valori dei componenti e i
   segnali con nome. Etichette come IN e OUT identificano nodi elettrici; riferimenti
   come R1 e C1 identificano componenti.
3. **Controlla la configurazione salvata.** Seleziona la scheda **Simulation** e guarda
   **Setup**. Gli esempi contengono già le impostazioni di analisi e i modelli
   necessari per la lezione.
4. **Prevedi il risultato**, usando la spiegazione o l'equazione del capitolo.
5. **Scegli Run**, quindi confronta la nuova acquisizione con i valori e i grafici
   previsti. Esamina i numeri oltre alla forma della traccia.
6. **Modifica un solo elemento** come suggerito dalla lezione, prevedine l'effetto ed esegui
   di nuovo. Annota l'impostazione modificata e il risultato.

Dopo aver aperto un esempio, scegli **Explanation** nella barra del titolo del browser oppure **View → View Explanation** in Desktop per tenere le
istruzioni accanto al disegno. Il pannello della spiegazione si trova accanto ai
grafici della simulazione e può essere ridimensionato o chiuso indipendentemente. Scegli
nuovamente **Explanation** nella barra del titolo del browser oppure **View → View Explanation** in Desktop per riaprirlo.

L'icona a forma di impulso nella barra degli strumenti mostra il testo al passaggio del mouse
**Simulation**. Ogni volta che una lezione indica **Simulation → Show charts** o **Simulation → SPICE components**, apri
il menu di quell'icona. La **Simulation sheet** è una scheda separata all'interno del disegno;
contiene la configurazione dell'esperimento e le viste dei risultati.

![TinyCAD con il primo circuito divider e il relativo pannello dei grafici di simulazione](/v4/images/simulation-tutorials/spice/tinycad-first-run.png)

Questa schermata dell'applicazione mostra il divider dopo l'apertura, con le schede dei fogli
sotto il circuito e il pannello dei grafici a destra. I punti di partenza principali
sono il circuito, la Simulation sheet e **Run**.

## Comprendere i risultati previsti
{: #understand-the-expected-outputs}

Le immagini dei circuiti mostrano la disposizione e i collegamenti da individuare. I grafici dei risultati
mostrano i dati di riferimento calcolati dal risolutore. Le schermate dell'applicazione mostrano dove
lavorare in TinyCAD. Le dimensioni della finestra, lo zoom e i colori dei grafici possono variare; confronta
 i valori del circuito, i segnali, le unità e le impostazioni di analisi.

Per l'esempio **divider** senza modifiche, la sorgente è 5 V ed entrambi i resistori sono da
1 kΩ. Dopo un'esecuzione del punto di lavoro, aspettati IN = **5 V**, OUT = **2.5 V** e
la corrente della sorgente `v1#branch` = **−2.5 mA**. Un punto di lavoro ha un solo valore per
segnale, quindi non produce una forma d'onda variabile nel tempo. La prima lezione spiega
il segno della corrente e il calcolo del partitore di tensione.

I disegni includono acquisizioni di riferimento conservate, perciò i risultati potrebbero essere già
visibili prima di premere **Run**. Sono risultati memorizzati da un'esecuzione precedente.
Dopo aver modificato il circuito o le sue impostazioni, esegui di nuovo la simulazione ed esamina la nuova
acquisizione. Piccole differenze numeriche sono normali; una differenza notevole richiede di controllare i valori dei componenti, le ipotesi del modello, le unità e le finestre di misura.

## Conservare gli esperimenti e tornare all'originale
{: #keep-experiments-and-return-to-the-original}

Gli esempi incorporati si aprono come copie modificabili. Usa **Save As** per salvare il lavoro
con un nome significativo, per esempio un divider con un resistore inferiore di valore diverso.
Il salvataggio della copia non modifica l'originale incluso.

Per ripristinare un esperimento, apri di nuovo l'esempio indicato tramite **Open Example**.
Salva le modifiche che vuoi conservare quando richiesto. In questo modo vengono ripristinati il circuito originale,
le impostazioni e i risultati di riferimento conservati. Usa lo stesso procedimento
quando il capitolo passa a un altro esempio.

Il salvataggio normale può conservare nel disegno i risultati acquisiti. **Save without
results** mantiene il circuito e le impostazioni, ma esclude i risultati memorizzati; esegui di nuovo
la simulazione quando ti serviranno.

## Scegliere il percorso da seguire
{: #choose-your-route-through-the-material}

| Il tuo obiettivo | Da dove iniziare |
| --- | --- |
| Imparare la simulazione dalle basi | [Capitolo SPICE 1](/v4/SPICE-Tutorial-01/), poi segui i capitoli in ordine |
| Comprendere i motori, i simboli e i controlli di TinyCAD | [Come TinyCAD implementa SPICE](/v4/SPICE-Tutorial-11/) |
| Scegliere una forma d'onda d'ingresso | [Generatori di segnale](/v4/SPICE-Tutorial-03/) |
| Analizzare l'amplificatore AMP.DSN ricostruito | [Polarizzazione dell'amplificatore](/v4/SPICE-Tutorial-07/), seguito da guadagno e potenza |
| Imparare la simulazione digitale a eventi | [Capitolo XSPICE 1](/v4/XSPICE-Tutorial-01/), usando Desktop |

I collegamenti all'inizio di ogni capitolo riportano all'indice o passano alla lezione successiva.
Puoi tornare a un esempio precedente in qualsiasi momento. Se un esperimento non riesce,
leggi la vista **Diagnostics** e confrontala con un esempio incorporato appena aperto
prima di apportare altre modifiche.

## Controlli correnti di Circuit Explorer
{: #current-circuit-explorer-controls}

Seleziona la Simulation sheet, apri **Setup** e scorri fino a **Circuit Explorer**. Usa **Add tools** per aggiungere Measurements, Tune / sweep, Requirements, DC overlay o Analysis lab. Gli strumenti configurati compaiono a sinistra; il pannello dei grafici rimane una vista separata. **Run** e **Stop** si trovano nella barra degli strumenti principale quando è selezionata una Simulation sheet. Consulta [Grafici, misure e Circuit Explorer](/v4/Simulation-Charts-and-Measurements/) per il riferimento aggiornato.
