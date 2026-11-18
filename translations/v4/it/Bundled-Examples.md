---
layout: default
---
# Esempi inclusi
{: #bundled-examples}

Gli esempi inclusi sono disegni modificabili forniti con TinyCAD. Mostrano come usare le librerie, spiegano le scelte di connessione e forniscono circuiti per le [esercitazioni di simulazione](../Simulation-Tutorials/). Non è necessario scaricare i relativi simboli separatamente.

## Aprire un esempio
{: #open-an-example}

<div class="manual-tabset" data-tabset="product-mode" data-tabset-label="Choose your TinyCAD product" data-default-tab="Browser" markdown="1">

### Browser
{: #browser}

Scegli **Apri esempio (Open Example)** a destra della barra del titolo scura. Dopo aver aperto un esempio con istruzioni, accanto compare **Spiegazione (Explanation)**. Usa questo pulsante per mostrare o nascondere il pannello della spiegazione.

### App desktop
{: #desktop-app}

Scegli **File → Apri esempio (Open Example)**, sotto **Apri recenti (Open Recent)**. Usa **Visualizza → Visualizza spiegazione (View → View Explanation)** per mostrare o nascondere le istruzioni dell'esempio corrente. Il comando non è disponibile se al disegno non è associata una spiegazione.

</div>

1. Scegli un gruppo: **Esempi (Examples)**, **Esercitazione SPICE (SPICE tutorial)** oppure **Esercitazione XSPICE e digitale (XSPICE and digital tutorial)**.
2. Seleziona un disegno per visualizzarne l'anteprima e la descrizione. Questa selezione non sostituisce ancora il disegno corrente.
3. Scegli **Apri disegno (Open drawing)**. Se hai modifiche non salvate, rispondi alla richiesta di salvataggio prima di continuare.
4. Leggi la spiegazione, esamina le connessioni e modifica la copia modificabile. Usa **Salva con nome (Save As)** per conservare la tua versione.

Usa **Cerca gruppi ed esempi (Search groups and examples)** per trovare un elemento specifico. Cancella la ricerca e scegli **Tutti i gruppi (All groups)** se un filtro nasconde un gruppo che ti serve.

{% include video-player.html src="/v4/videos/simulation/examples.mp4" poster="/v4/videos/simulation/examples.jpg" caption="Apri l'esempio della rete e mostra la spiegazione accanto al disegno." %}

## Esempi di apparecchiature e disposizione
{: #equipment-and-layout-examples}

Scegli il gruppo **Esempi (Examples)** per questi sette disegni.

| Disegno | Cosa mostra | Prove da fare |
| --- | --- | --- |
| **Amplificatore a transistor** | Lo schema dell'amplificatore a transistor originale AMP.dsn | Segui i percorsi di polarizzazione e del segnale. Per una ricostruzione modellata ed eseguibile, usa il [capitolo 7 dell'esercitazione SPICE](../SPICE-Tutorial-07/). |
| **Rete di un piccolo ufficio** | Router, switch PoE, pannello di permutazione e pannello cieco in un rack, con terminale ISP, punto di accesso e switch desktop | Segui il collegamento in uplink del rack e i cavi dell'ufficio; aggiungi un altro pannello 1U dello stesso tipo. |
| **Stazione climatica e display ESP32** | Connessioni del controller, del sensore e del modulo display | Segui i pin di alimentazione e di segnale contrassegnati, poi adatta i moduli scelti. |
| **Progetto domestico con pannelli solari e batteria** | Produzione solare, accumulo e apparecchiature energetiche domestiche su una pagina A3 | Segui separatamente i percorsi di alimentazione e i collegamenti di monitoraggio/controllo. |
| **Studio podcast per due persone** | Microfoni, mixer/interfaccia, computer di registrazione e monitoraggio | Segui gli ingressi dei microfoni, l'uscita di registrazione e i collegamenti delle cuffie. |
| **Banco di prova con carico CC e forme d'onda** | Alimentatore, carico, generatore di forme d'onda, oscilloscopio e connessioni del misuratore | Distingui i cavi completi degli strumenti dai singoli conduttori. |
| **Banco di prova con motore CC e controllo di finecorsa** | Un driver per motore, un motoriduttore, collegamenti di controllo e interruttori di finecorsa | Segui separatamente l'alimentazione del motore e i segnali PWM/direzione e di finecorsa. |

I sei layout delle apparecchiature includono spiegazioni delle connessioni, delle ipotesi e delle possibili estensioni. Sono disegni fisici/di sistema, senza modelli SPICE. Anche l'amplificatore originale è un esempio di disegno; aprirlo non lo trasforma automaticamente in una simulazione eseguibile.

Le prese aperte possono essere intenzionali. I fili che toccano altri terminali o prese creano connessioni effettive: esaminali quindi attentamente quando adatti un layout. Le grafiche e i pin incorporati rendono portabili questi esempi, ma non sostituiscono la documentazione di cablaggio del dispositivo reale.

## Esempi di simulazione
{: #simulation-examples}

### Esercitazione SPICE
{: #spice-tutorial}

Questo gruppo segue il [corso SPICE in undici capitoli](../SPICE-Tutorial/). Inizia con un partitore di tensione, quindi tratta sorgenti, carica RC, filtri CA, raddrizzamento a diodi, un amplificatore a transistor ricostruito e analisi progettuali. La voce **Inizia qui — uso delle esercitazioni (Start here — using the tutorials)** apre il primo partitore e spiega il flusso di lavoro.

I disegni incorporano i simboli, il testo dei modelli, le impostazioni di analisi e i risultati di riferimento conservati. Una forma d'onda può quindi essere visibile **prima della prima esecuzione**. Scegli **Esegui (Run)** per acquisire nuovi dati per il circuito e le impostazioni correnti. Segui i valori attesi del capitolo e apporta le modifiche suggerite per vedere perché il risultato cambia.

### Esercitazione XSPICE e digitale
{: #xspice-and-digital-tutorial}

Per questo gruppo usa **TinyCAD Desktop**. Il [corso XSPICE in sei capitoli](../XSPICE-Tutorial/) tratta tabelle di verità logiche, ritardo di propagazione, hazard, flip-flop, contatori, interfacce analogico/digitali e stati sconosciuti. XSPICE non è supportato nelle versioni browser. Un browser può comunque aprire per la visualizzazione disegni contenenti risultati XSPICE salvati.

Nei due gruppi di esercitazioni ci sono 28 disegni di simulazione distinti. La voce aggiuntiva «Inizia qui» rimanda allo stesso partitore usato nel primo capitolo SPICE. Ogni lezione include collegamenti ai disegni `.dzn` scaricabili e ai netlist `.cir` associati, come alternativa all'apertura della copia inclusa. Apri i file `.dzn` in TinyCAD; i file `.cir` sono testo da esaminare o usare con un simulatore esterno compatibile.

## Conserva i tuoi esperimenti
{: #keep-your-experiments}

L'originale incluso non cambia quando modifichi la copia aperta. Riaprendo lo stesso esempio incluso ottieni un nuovo punto di partenza. Salva il tuo disegno con un nuovo nome per conservare le modifiche e salva i risultati della simulazione quando vuoi mantenere le prove numeriche.

Il pannello **Spiegazione (Explanation)** e i **Grafici della simulazione (Simulation charts)** sono indipendenti. Chiudere l'uno non richiede di chiudere l'altro. In Desktop, i grafici sono disponibili tramite **Visualizza → Mostra grafici (View → Show Charts)**; in entrambi i prodotti, usa **Simulazione → Mostra grafici (Simulation → Show charts)** sulla barra degli strumenti.

Quando distribuisci un disegno salvato, includi eventuali note separate di cui il lettore ha bisogno. La spiegazione inclusa è associata all'apertura dell'esempio: non fare affidamento sul fatto che venga ripristinata quando si apre autonomamente una copia salvata. Le note testuali incorporate nel disegno restano parte del file.

Continua con [la tua prima simulazione](../Simulation/#run-your-first-simulation) oppure con [la guida introduttiva alle esercitazioni](../Tutorial-Start-Here/).
