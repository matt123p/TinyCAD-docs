---
layout: default
---
# Etichette
{: #labels}

Le etichette sono nomi di net elettricamente attivi. Tutti i fili con lo stesso nome di etichetta
sono considerati collegati, anche quando non è disegnato alcun filo fisico tra loro.

Usa le etichette per:

- collegare punti molto distanti sullo stesso foglio,
- ridurre il disordine visivo negli schemi densi,
- collegare net tra fogli dello stesso disegno,
- collegare i pin dei simboli gerarchici alle net interne.

## Come funzionano le etichette
{: #how-labels-work}

- Un'etichetta si collega al filo sottostante.
- La connettività si basa sul **testo dell'etichetta**, non sulla posizione.
- La **forma** dell'etichetta è solo uno stile visivo e non modifica la connettività,
	la generazione della netlist o il comportamento del DRC.
- Usa lo stesso nome ovunque intendi indicare un'unica net elettrica.

## Linee guida per assegnare i nomi alle etichette
{: #label-naming-guidelines}

- Usa nomi di net chiari, come `RESET`, `SCL`, `+5V`, `ADC_IN0`.
- Mantieni una denominazione coerente in tutto il progetto.
- Evita variazioni accidentali (`GND` vs `GN D`, `CLK` vs `Clk`), perché creano net diverse.
- Se i nomi includono numeri, il posizionamento ripetuto può incrementare/decrementare
	i suffissi numerici usando le opzioni di denominazione della direzione di ripetizione (Repeat Direction).

## Forme delle etichette e perché usarle
{: #label-shapes-and-why-to-use-them}

TinyCAD offre diverse forme di etichetta nelle opzioni dello strumento Etichetta. Scegli la forma
per migliorare la leggibilità e adattarla allo stile di disegno; tutte le forme sono elettricamente equivalenti.

Motivi tipici per usare forme diverse:

- distinguere le net riutilizzate frequentemente dalle net locali usate una sola volta,
- evidenziare visivamente i collegamenti fuori foglio o tra blocchi,
- indicare la direzione o la funzione del segnale per chi legge,
- adeguarsi allo stile degli schemi del team o dell'azienda.

Regola pratica: scegli un numero limitato di forme e usale in modo coerente, così chi legge
può esaminare rapidamente il diagramma.

## Posizionamento e modifica delle etichette
{: #placing-and-editing-labels}

1. Seleziona lo strumento Etichetta.
2. Inserisci il nome della net.
3. Scegli l'orientamento/la forma secondo necessità.
4. Posiziona l'etichetta sul filo interessato.
5. Ripeti per ogni punto che deve essere collegato a quella net.


## Etichette nei disegni con più fogli
{: #labels-with-multi-sheet-drawings}

In un file di disegno con più fogli, le etichette sono il metodo standard per collegare le net tra
fogli. Vedi [Disegni con più fogli](../Multiple-Sheet-Drawings/) per un esempio pratico e un video sulla gestione dei fogli e sulle etichette tra fogli.

- Lo stesso nome di etichetta su fogli diversi indica la stessa net elettrica.
- Questo collegamento tra fogli viene usato durante la generazione delle netlist.
- Usa nomi stabili e non ambigui per le net condivise (`+3V3`, `GND`, `I2C_SDA`,
	`I2C_SCL`, ecc.).

Flusso di lavoro consigliato:

1. Definisci in anticipo i nomi delle net comuni.
2. Riutilizza esattamente gli stessi nomi su ogni foglio.
3. Esegui i controlli DRC/netlist per individuare tempestivamente gli errori di denominazione.

- Torna a [Disegno](../User-guide/)
- Torna a [Indice v4](../)
