---
layout: default
---
# Output SPICE
{: #spice-output}

Il supporto SPICE in TinyCAD v4 funziona come in v3: TinyCAD genera un file di testo SPICE dallo schema utilizzando modelli a livello di simbolo.

## A cosa serve SPICE
{: #what-spice-is-used-for}

SPICE (Simulation Program with Integrated Circuit Emphasis) è una famiglia di formati e strumenti per la simulazione di circuiti. Un simulatore SPICE consente di verificare il comportamento di un circuito prima di realizzare l'hardware, ad esempio:

- Punti di lavoro in corrente continua e condizioni di polarizzazione
- Comportamento transitorio (nel dominio del tempo)
- Risposta in CA/frequenza
- Scansioni dei parametri e analisi «what-if»

TinyCAD non esegue direttamente la simulazione. Esporta invece un file SPICE da eseguire con il motore SPICE scelto.

## Formato e struttura generale dei file SPICE
{: #spice-file-format-and-general-layout}

I motori SPICE presentano leggere differenze, ma la maggior parte dei file SPICE segue la stessa struttura generale:

1. Intestazione/commenti facoltativi
2. Inclusioni e definizioni di dispositivi/modelli
3. Righe degli elementi del circuito (una riga per ogni istanza di componente)
4. Comandi di analisi/controllo
5. Marcatore di fine (comunemente `.end`)

In pratica, il file esportato contiene di solito:

- Testo di «configurazione» all'inizio (modelli, inclusioni, opzioni)
- Un corpo con i componenti generati e le relative reti connesse
- Testo di «esecuzione» o di analisi in fondo

La generazione SPICE di TinyCAD è progettata per adattarsi direttamente a questa struttura.

## Come TinyCAD genera SPICE
{: #how-tinycad-generates-spice}

TinyCAD utilizza un sistema di modelli testuali per ogni simbolo abilitato a SPICE. Ogni simbolo può definire:

- **Modello**: inserito per ogni istanza del componente nello schema
- **Modello prologo**: inserito vicino all'inizio del file, una volta per tipo di componente
- **Modello epilogo**: inserito vicino alla fine del file, una volta per tipo di componente

Questi campi si trovano nelle proprietà del simbolo nell'editor della libreria dei simboli (scheda SPICE).

### Espansione dei modelli
{: #template-expansion}

I modelli possono includere:

- `%(pin)` per le sostituzioni dei pin/delle reti
- `$(attribute)` per le sostituzioni degli attributi del simbolo

Esempio di modello per una resistenza:

`R$(refnum) %(1) %(2) $(NAME)`

Se l'istanza della resistenza ha il riferimento `R3`, è collegata tra le reti `7` e `9` e ha `NAME=10K`, TinyCAD scrive:

`R3 7 9 10K`

`refnum` viene gestito in modo speciale, in modo da preservare la lettera del dispositivo SPICE nel modello.

### Ordine e deduplicazione di prologhi/epiloghi
{: #prologueepilogue-order-and-deduplication}

- I prologhi e gli epiloghi identici vengono deduplicati
- Ognuno ha una priorità (da `0` a `9`)
- I prologhi vengono scritti dalla priorità più bassa alla più alta
- Gli epiloghi vengono scritti in modo che la priorità `0` compaia per ultima nel file

Ciò consente di controllare la posizione del testo di configurazione e di analisi.

## Configurazione dello schema necessaria per l'esportazione SPICE
{: #required-schematic-setup-for-spice-export}

Per generare un file SPICE valido, il disegno deve includere:

- Simboli abilitati a SPICE per il circuito simulato
- Un simbolo speciale **RUN**
- Una rete denominata **0** (massa SPICE)

### Simbolo RUN
{: #run-symbol}

Il simbolo RUN è un normale simbolo TinyCAD senza pin e senza modello, ma con testo di prologo/epilogo utilizzato per inserire istruzioni di controllo della simulazione.

Impostare le priorità del prologo e dell'epilogo di RUN su `0`, in modo che il relativo testo compaia all'inizio e alla fine del file generato.

Usare un simbolo RUN per ogni circuito di simulazione.

### La rete `0`
{: #the-0-net}

SPICE richiede che la massa sia la rete `0`.

In TinyCAD, è possibile crearla assegnando il nome `0` a una connessione utilizzando:

- Un'etichetta di rete oppure
- Un simbolo di alimentazione con valore `0`

## Generazione dell'output SPICE
{: #creating-the-spice-output}

Dopo aver inserito i simboli, il nodo RUN e la rete `0`, generare l'output SPICE utilizzando il comando di esportazione SPICE nell'interfaccia di TinyCAD.

Le opzioni di esportazione sono volutamente essenziali, perché si prevede che il comportamento in fase di esecuzione venga controllato tramite i modelli del simbolo RUN.

## Condizionali avanzati nei modelli
{: #advanced-template-conditionals}

Per i simboli più complessi sono supportati i condizionali nei modelli (con lo stesso comportamento di v3), incluse verifiche per:

- Attributo presente/assente
- Attributo vuoto/non vuoto
- Pin connesso/non connesso

Sintassi dei condizionali:

- `?( defined(attributename), true string, false string )`
- `?( not_defined(attributename), true string, false string )`
- `?( empty(attributename), true string, false string )`
- `?( not_empty(attributename), true string, false string )`
- `?( connected(pinnumber), true string, false string )`
- `?( not_connected(pinnumber), true string, false string )`

I condizionali possono essere annidati.

- Torna a [Avanzate](../Advanced/)
- Torna a [Indice di v4](../CONTENTS/)
