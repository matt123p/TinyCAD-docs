---
layout: default
---
# Etichette
{: #labels}

Le etichette sono nomi di net elettricamente attivi. Tutti i fili con lo stesso nome di etichetta vengono
considerati connessi, anche quando non è disegnato alcun filo fisico tra loro.

Usa le etichette per:

- connettere punti distanti sullo stesso foglio,
- ridurre l'affollamento visivo negli schemi densi,
- connettere net tra fogli dello stesso disegno,
- collegare i pin dei simboli gerarchici alle net interne.

## Come funzionano le etichette
{: #how-labels-work}

- Un'etichetta si connette al filo sottostante.
- La connettività si basa sul **testo dell'etichetta**, non sulla posizione.
- La **forma** dell'etichetta è solo uno stile visivo e non modifica la connettività,
	la generazione della netlist o il comportamento del DRC.
- Usa lo stesso nome in ogni punto in cui vuoi indicare un'unica net elettrica.

## Linee guida per assegnare i nomi alle etichette
{: #label-naming-guidelines}

- Usa nomi di net chiari, come `RESET`, `SCL`, `+5V`, `ADC_IN0`.
- Mantieni una denominazione coerente in tutto il progetto.
- Evita variazioni involontarie (`GND` rispetto a `GN D`, `CLK` rispetto a `Clk`), perché creano
	net diverse.
- Se i nomi includono numeri, con le opzioni Repeat Direction name puoi incrementare o decrementare i suffissi numerici quando ripeti il posizionamento.

## Forme delle etichette e perché usarle
{: #label-shapes-and-why-to-use-them}

TinyCAD mette a disposizione diverse forme di etichetta nelle opzioni dello strumento Etichetta. Scegli la forma
in base alla leggibilità e allo stile del disegno; tutte le forme sono elettricamente equivalenti.

Motivi tipici per usare forme diverse:

- distinguere le net riutilizzate frequentemente dalle net locali usate una sola volta,
- evidenziare visivamente le connessioni fuori foglio o tra blocchi,
- indicare la direzione o la funzione del segnale per chi legge,
- adeguarsi allo stile degli schemi adottato dal team o dall'azienda.

Regola pratica: scegli poche forme e usale con coerenza, così chi legge potrà
esaminare rapidamente il diagramma.

## Posizionamento e modifica delle etichette
{: #placing-and-editing-labels}

1. Seleziona lo strumento Etichetta.
2. Inserisci il nome della net.
3. Scegli l'orientamento e la forma, se necessario.
4. Posiziona l'etichetta sul filo desiderato.
5. Ripeti l'operazione in ogni punto che deve essere connesso a quella net.


## Etichette nei disegni con più fogli
{: #labels-with-multi-sheet-drawings}

In un file di disegno con più fogli, le etichette sono il metodo standard per connettere le net tra i fogli.

- Le etichette con lo stesso nome su fogli diversi indicano la stessa net elettrica.
- Questo collegamento tra fogli viene usato durante la generazione delle netlist.
- Usa nomi stabili e non ambigui per le net condivise (`+3V3`, `GND`, `I2C_SDA`,
	`I2C_SCL`, ecc.).

Flusso di lavoro consigliato:

1. Definisci in anticipo i nomi delle net comuni.
2. Riutilizza esattamente gli stessi nomi su ogni foglio.
3. Esegui i controlli DRC/netlist per individuare subito gli errori di denominazione.

- Torna a [Disegno](../User-guide/)
- Torna a [indice v4](../CONTENTS/)
