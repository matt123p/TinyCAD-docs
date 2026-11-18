---
layout: default
---
# Simulazione e SPICE
{: #simulation-and-spice}

TinyCAD può eseguire simulazioni di circuiti elettronici, tracciare i risultati e misurare il comportamento dei circuiti senza uscire dal disegno. Il motore integrato è **ngspice**. Sia il browser sia l'app Desktop includono un motore; per il flusso di lavoro integrato non è necessario installare ngspice separatamente.

Se non hai mai effettuato simulazioni, inizia con il [corso guidato SPICECOURSEPLACEHOLDER](../SPICE-Tutorial/). Per ottenere rapidamente un primo risultato, segui i passaggi relativi al partitore qui sotto. Questa guida di riferimento spiega i controlli e come interpretarne i risultati.

## Calcoli eseguiti da un simulatore di circuiti
{: #what-a-circuit-simulator-calculates}

SPICE significa *Simulation Program with Integrated Circuit Emphasis*. Un simulatore risolve un modello matematico di un circuito connesso: le resistenze mettono in relazione tensione e corrente, condensatori e induttori immagazzinano energia e i modelli dei semiconduttori descrivono un comportamento non lineare. Può determinare la polarizzazione in continua, calcolare le forme d'onda nel tempo e analizzare la risposta in frequenza ai piccoli segnali.

Uno schema fornisce la **connettività**; un modello SPICE fornisce il **comportamento**; un'analisi specifica **che cosa calcolare**. Tutti e tre devono essere corretti. Un'immagine realistica di un amplificatore o di un processore non implica che contenga un modello di simulazione. Al contrario, un semplice triangolo o rettangolo può contenere un utile modello comportamentale.

La simulazione è utile per verificare un'idea, confrontare i valori dei componenti e comprendere una risposta inattesa. Il risultato dipende dal modello e dalle condizioni specificate. I fili ideali non hanno resistenza o induttanza parassite; un modello generico di transistor non costituisce una specifica completa per ogni transistor. Carico, impedenza di alimentazione, tolleranze e temperatura vengono considerati solo nella misura in cui sono rappresentati dai modelli scelti.

## Motori Browser e Desktop
{: #browser-and-desktop-engines}

| Funzionalità | Browser | App Desktop |
| --- | --- | --- |
| SPICE analogico, grafici, misure ed esplorazione | ngspice WebAssembly incluso, eseguito in un worker | ngspice nativo incluso, tramite un processo helper |
| Librerie portabili di logica digitale modellata / blocchi funzionali / sensori e interfacce | Sì | Sì |
| Modelli di codice XSPICE basati su eventi | Non supportati¹ | Sì, librerie di modelli di codice nativo incluse |
| Finestre pop-out dei grafici | Sì | Sì |
| Finestre pop-out degli strumenti virtuali | No | Sì |

¹ Le versioni per browser possono aprire un disegno contenente risultati XSPICE salvati per visualizzarli. L'esecuzione di XSPICE richiede Desktop.

I calcoli vengono eseguiti localmente nel browser o nel motore Desktop. La ricerca online nelle librerie è una funzionalità separata. Il motore attualmente incluso si basa su ngspice 47; la cronologia delle esecuzioni identifica il motore/la build usati per un'acquisizione. Per verificare la sintassi dei modelli o le differenze tra i motori, consulta il manuale upstream corrispondente.

## Esegui la prima simulazione
{: #run-your-first-simulation}

1. Nel browser, apri **Apri esempio** nella barra del titolo oppure, in Desktop, **File → Apri esempio**.
2. Seleziona **Tutorial SPICE → partitore → Apri disegno**.
3. Esamina il circuito: una sorgente da 5 V alimenta due resistenze da 1 kΩ in serie. **OUT** è il punto centrale e il filo inferiore è la massa **0**.
4. Seleziona il **foglio di simulazione del partitore** nella barra dei fogli. La sua icona a forma di orologio lo distingue da un foglio schematico. Apri **Impostazione** e lascia selezionato **Punto di funzionamento**.
5. Scegli **Esegui**. Al termine, apri **Cronologia** e seleziona la nuova acquisizione completata.
6. Apri **Dati**. Il punto centrale è a **2,5 V**. La corrente della sorgente è **−2,5 mA**, perché il riferimento di corrente della sorgente di tensione di ngspice è diretto verso il suo terminale positivo; in questo circuito una sorgente che eroga corrente ha una corrente negativa.
7. Modifica una resistenza, quindi esegui di nuovo la simulazione. Confronta il nuovo risultato con l'acquisizione originale.

{% include video-player.html src="/v4/videos/simulation/first-simulation.mp4" poster="/v4/videos/simulation/first-simulation.jpg" caption="Apri il partitore incluso, esamina la configurazione ed esegui una nuova acquisizione ngspice nel browser. La tabella Dati conferma 2,5 V su OUT e −2,5 mA attraverso la sorgente." %}

L'esempio include un'acquisizione di riferimento conservata. Vedere subito un risultato dopo averlo aperto non significa che sia stato eseguito un nuovo calcolo. **Cronologia** distingue i dati salvati dall'acquisizione creata con Esegui.

## Crea una nuova simulazione
{: #build-a-new-simulation}

1. Inserisci componenti modellati da **Standard → Elementi essenziali SPICE** oppure usa il sottomenu **Simulazione → Componenti SPICE** della barra degli strumenti. **Altro…** apre la raccolta completa degli elementi essenziali SPICE.
2. Collega i pin con fili e assegna etichette leggibili ai nodi importanti. Includi un collegamento effettivo alla massa **0**: **Simulazione → SPICE → Inserisci massa** inserisce il simbolo di alimentazione corretto.
3. Aggiungi un'eccitazione con **Simulazione → SPICE → Inserisci sorgente**. Imposta il tipo di tensione/corrente e la forma d'onda. Aggiungi [sonde](../Simulation-Sources-and-Instruments/#probes-and-ground) se desideri grafici pratici.
4. Scegli **Simulazione → Simula** per aggiungere un **foglio di simulazione**.
5. In **Impostazione**, scegli un'analisi e le relative impostazioni. Imposta i parametri o collega testo di modelli personalizzati, se necessari per il circuito.
6. Scegli i segnali, esegui la simulazione ed esamina il riquadro **Grafici di simulazione** e le viste **Dati**, **Cronologia** e **Diagnostica** del foglio. Correggi gli errori di cablaggio o di modello segnalati prima di fare affidamento sui valori.

Su un foglio di simulazione, **Esegui** e **Interrompi** sono disponibili nella barra degli strumenti principale. Il foglio si apre su **Impostazione**. **Cronologia** e **Diagnostica** compaiono dopo un'esecuzione; **Misure** e **Dati** compaiono quando sono disponibili dati numerici. Gli strumenti di Circuit Explorer si trovano sotto le impostazioni dell'analisi in Impostazione; aggiungi solo quelli necessari tramite **Aggiungi strumenti**.

Tutti i fogli schematici di un disegno costituiscono **un unico circuito**. Ogni foglio di simulazione ha una configurazione separata: analisi, parametri, modelli collegati, selezioni dei segnali, istruzioni e cronologia delle esecuzioni. L'aggiunta di un secondo foglio di simulazione non crea un secondo circuito schematico isolato. Consente di esaminare lo stesso circuito in un altro modo, ad esempio con un'analisi AC affiancata a un'analisi transitoria.

Usa un nome di configurazione distinto per ogni indagine. La duplicazione di una configurazione ne copia le definizioni, ma non le acquisizioni. È possibile eseguire una sola acquisizione alla volta; le scansioni e gli studi eseguono i casi in sequenza.

## Massa, connessioni e modelli
{: #ground-connections-and-models}

Il riferimento di tensione di SPICE è il nodo **0**. Un simbolo di alimentazione o un'etichetta di rete con quel valore esatto stabilisce il riferimento. La sola parola **GND** è un normale nome di rete, a meno che non venga collegata anche al nodo 0. Circuiti flottanti, pin di alimentazione dei modelli senza alimentazione e ritorni delle sorgenti non collegati sono problemi comuni alla prima esecuzione.

I fili devono raggiungere i pin nei rispettivi punti di connessione. Il testo nelle vicinanze non costituisce una connessione. Un filo che tocca l'estremità di un altro filo o la presa di un componente può creare una giunzione anche se non era nelle intenzioni. Usa la [connettività dei fili](../Wires/) e la netlist generata per risolvere eventuali ambiguità nel disegno.

Ogni componente simulato richiede un template, un modello e una mappatura dei pin validi. Usa le proprietà **SPICE** del componente inserito per esaminarli. Consulta [Modelli SPICE e output della netlist](../SPICE-output/) prima di collegare modelli di produttori o adattare un simbolo destinato solo al disegno.

## Impostazione, Esegui e Interrompi
{: #setup-run-and-stop}

**Esegui** avvia una nuova acquisizione usando il circuito e la configurazione correnti. I grafici possono aggiornarsi man mano che arrivano i dati. **Interrompi** termina l'acquisizione e conserva i dati già arrivati; lo stato dell'esecuzione e la disponibilità indicano che cosa è stato conservato. Non è un comando di pausa/ripresa. Avvia un'altra esecuzione per ricalcolare.

Le modifiche al circuito, ai modelli o alla configurazione rendono storico il risultato precedente. TinyCAD contrassegna i risultati che richiedono una nuova esecuzione, invece di presentare i vecchi valori come misure del circuito modificato. La cronologia registra l'identità del circuito e delle impostazioni, il backend, l'ora e l'esito. Selezionare un'acquisizione precedente significa selezionare dati precedenti; non ripristina lo schema precedente come operazione di annullamento.

## Salva e condividi i risultati
{: #save-and-share-results}

Salva il disegno per conservarne il circuito, i modelli, le configurazioni e i risultati acquisiti. TinyCAD usa automaticamente **`.dzn`** quando un disegno contiene componenti, impostazioni o risultati di simulazione. **Salva senza risultati** conserva le definizioni della simulazione e i metadati di report e valori scalari acquisiti, omettendo gli array numerici delle forme d'onda; i grafici che richiedono tali array necessiteranno quindi di una nuova acquisizione.

I dati numerici conservati sono limitati a 64 MiB per esecuzione e 256 MiB per disegno, con un massimo di 1.000 esecuzioni per configurazione. Gli studi lunghi con passi temporali ridotti possono raggiungere questi limiti. Esporta i grafici importanti e i dati CSV, quindi rimuovi i risultati non più necessari. Salva gli allegati dei modelli insieme al disegno, così chi lo riceve non avrà bisogno dei percorsi ai file locali.

## Disegni di simulazione `.dzn`
{: #dzn-simulation-drawings}
{: #dzn-simulation-drawings}

**`.dzn` è il formato di disegno compresso di TinyCAD, supportato da TinyCAD v4 e versioni successive.** Racchiude in un unico file basato su ZIP lo schema, i simboli incorporati, i fogli di simulazione, le impostazioni delle sorgenti, il testo dei modelli collegati e le eventuali acquisizioni conservate. I dati numerici delle forme d'onda sono archiviati in modo efficiente nel contenitore, compresi i risultati AC complessi. Per aprirlo e salvarlo si usano i normali comandi **File → Apri**, **Salva** e **Salva con nome**; non è necessario estrarre manualmente i file.

I disegni ordinari usano il formato XML **`.dsn`**. TinyCAD sceglie automaticamente `.dzn` quando è presente contenuto di simulazione, inclusi sorgenti, sonde, strumenti virtuali, attributi SPICE, una massa denominata `0`, fogli di simulazione o risultati. **Salva senza risultati** continua a usare `.dzn` quando conserva la configurazione della simulazione: rimuove i grandi array delle forme d'onda, non le definizioni dell'esperimento.

Usa **Salva senza risultati** per creare una copia più piccola da condividere, quando chi la riceve può eseguire di nuovo la simulazione. Conserva i risultati se vuoi che chi la riceve possa esaminare l'acquisizione, le misure e i dettagli del motore senza ripetere l'esecuzione. Un'acquisizione salvata descrive il circuito al momento in cui è stata eseguita; non sostituisce una nuova esecuzione dopo una modifica.

TinyCAD v3 non può aprire file `.dzn`. Cambiare l'estensione in `.dsn` non converte il formato né rende compatibili con v3 i nuovi record di simulazione. Conserva una copia originale quando scambi un progetto con una versione precedente di TinyCAD. Un'esportazione `.cir` è testo SPICE destinato a un simulatore; è diversa da entrambi i formati di disegno di TinyCAD.

## Continua con la guida di riferimento
{: #continue-with-the-reference}

- [Analisi e impostazioni](../Simulation-Analyses/) — DC, transitoria, AC, rumore, funzione di trasferimento e poli-zeri.
- [Sorgenti, sonde e strumenti virtuali](../Simulation-Sources-and-Instruments/) — eccitazioni, connessioni di misura e carico.
- [Grafici, misure e Circuit Explorer](../Simulation-Charts-and-Measurements/) — regolazione, scansioni, requisiti e studi.
- [Modelli SPICE e output della netlist](../SPICE-output/) — template, file di modelli e simulazione esterna.
- [XSPICE e simulazione digitale](../XSPICE/) — modelli Desktop a eventi e a segnali misti.
- [Risoluzione dei problemi](../Simulation-Troubleshooting/) — diagnosi di connettività, modelli e problemi numerici.
- [Tutorial](../Simulation-Tutorials/) — i corsi SPICE e XSPICE completi esistenti, con disegni eseguibili.

Per consultare il linguaggio e il riferimento ai dispositivi del simulatore, usa la [documentazione ufficiale di ngspice](https://ngspice.sourceforge.io/docs.html), il [manuale utente PDF](https://ngspice.sourceforge.io/docs/ngspice-manual.pdf) e il [manuale HTML](https://ngspice.sourceforge.io/docs/ngspice-html-manual/manual.xhtml). Il manuale descrive ngspice nel suo complesso; TinyCAD mette a disposizione i flussi di lavoro integrati supportati qui descritti, non una shell di comandi senza restrizioni.
