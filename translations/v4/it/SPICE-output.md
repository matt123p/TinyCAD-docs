---
layout: default
---
# Modelli SPICE e generazione di netlist
{: #spice-models-and-netlist-output}

TinyCAD supporta sia la [simulazione ngspice integrata](../Simulation/) sia l'esportazione di netlist SPICE per un simulatore esterno. Entrambe dipendono dai modelli SPICE dei componenti e dalla mappatura dei pin. Il solo aspetto di un simbolo non ne descrive il comportamento elettrico.

## Modelli, template e ordine dei pin
{: #models-templates-and-pin-order}

Una resistenza può usare un elemento SPICE nativo. Un transistor può richiedere un `.model`; un dispositivo più complesso può usare un `.subckt`. Le impostazioni SPICE di un simbolo posizionato collegano i numeri dei pin fisici ai terminali previsti dal modello. Esaminare la scheda **SPICE** nelle proprietà del simbolo; gli attributi dell'istanza possono sostituire i valori predefiniti del simbolo.

I template usano:

- **`%(pin)`** per la rete connessa al numero di pin TinyCAD specificato.
- **`$(attribute)`** per un attributo del componente.
- **`refnum`** come suffisso di riferimento gestito in modo speciale, affinché sia mantenuto il prefisso del dispositivo SPICE del template.

Ad esempio, un template per una resistenza può essere:

```text
R$(refnum) %(1) %(2) $(NAME)
```

Per il riferimento R3, le reti 7 e 9 e NAME `10k`, genera:

```spice
R3 7 9 10k
```

L'attributo sottostante del template del modello è **`$$SPICE`**; il testo del prologo è **`$$SPICE_PROLOG`**. Un template può riordinare i pin: non presumere che il pin 1 dello schema sia il primo terminale SPICE. Un elemento BJT prevede **collettore, base, emettitore**. Se un simbolo numera la base 1, l'emettitore 2 e il collettore 3, il template deve sostituire `%(3) %(1) %(2)` in quest'ordine. Un sottocircuito usa l'ordine dichiarato nella riga `.subckt`, che può differire da quello del package del dispositivo.

Esamina insieme il simbolo effettivo e il modello. I pin di alimentazione, i pin nascosti, le varianti dei transistor e i modelli degli amplificatori operazionali sono frequenti fonti di incompatibilità. Un modello comportamentale generico in stile 741 non è un macromodello 741 completo qualificato dal produttore.

## Usare un modello nella simulazione integrata
{: #use-a-model-in-integrated-simulation}

1. Inizia con un simbolo dotato di modello da una [libreria di simulazione inclusa](../Bundled-Libraries/#libraries-with-simulation-models) oppure aggiungi un template SPICE appropriato a un simbolo personalizzato.
2. Verifica che ogni template faccia riferimento ad attributi esistenti e ai pin corretti.
3. Nel foglio Simulation, allega gli eventuali **testi** del modello richiesti e assegna agli allegati nomi di file significativi. Le estensioni tipiche dei file di testo sono `.lib`, `.cir` e `.mod`.
4. Risolvi le dipendenze `.include` e `.lib` tramite questi allegati. Includi nel disegno le definizioni necessarie.
5. Collega la massa **0**, imposta l'analisi in **Setup**, quindi avvia l'esecuzione ed esamina la diagnostica.

Il motore gestito non scarica un modello da un sito web né legge un percorso assoluto arbitrario sul computer. Fornisci esplicitamente le dipendenze. Inoltre, non esegue comandi shell arbitrari, script `.control`, file di avvio, moduli nativi forniti esternamente o dipendenze dei dispositivi basate su file. Un modello del produttore che usa sintassi specifica di un simulatore può richiedere adattamenti; «compatibile SPICE» non garantisce dialetti identici.

Il foglio Simulation integrato di TinyCAD gestisce i comandi di analisi e il `.end` finale. **Non è necessario un simbolo RUN legacy.** Quando adatti un disegno orientato all'esportazione, sposta le vecchie impostazioni di analisi in Setup ed elimina il simbolo RUN legacy. Rimuovi le istruzioni di analisi e `.end` dagli eventuali attributi dei componenti rimanenti; questi comandi non sono accettati nel percorso integrato dei template dei componenti.

Controlla la licenza del modello del produttore prima di ridistribuirlo. Verifica l'ordine dei pin documentato, le unità, le ipotesi del modello e il simulatore supportato. Conserva la documentazione del produttore insieme agli appunti sulla modellazione.

## Esaminare ed esportare una netlist SPICE
{: #inspect-and-export-a-spice-netlist}

Una netlist è una descrizione testuale dei dispositivi e dei nodi che li collegano. La massa è denominata `0`. Il contenuto tipico comprende definizioni del modello e della configurazione, righe dei componenti, direttive di analisi e un `.end` finale. Verifiche utili:

- Ogni componente fa riferimento al modello e al valore previsti?
- I pin connessi condividono i nomi di rete previsti?
- Sono presenti le reti di alimentazione/ritorno, incluso 0?
- L'ordine dei terminali del semiconduttore o del sottocircuito è corretto?
- Tutte le definizioni dei modelli e i testi inclusi sono disponibili per il motore selezionato?

Per la configurazione integrata, apri **Simulation sheet → Diagnostics → Generate circuit text**, esamina il deck espanso, quindi scegli **Export circuit** per salvare `simulation.cir`. Questo include l'analisi gestita.

Per l'esportazione legacy basata su template, usa il comando separato **Generate Spice NetList** nel menu File del browser o nel menu Desktop Tools. È distinto dalla finestra di dialogo [Generate Netlist](../Generate-Netlist/) orientata al PCB. Le direttive di analisi/esecuzione esportate devono essere adatte al motore esterno. È anche possibile esaminare direttamente un file `.cir` del tutorial associato. **Apri un disegno `.dzn` in TinyCAD; una netlist `.cir` non è un file di disegno TinyCAD.**

### Template per l'esportazione legacy
{: #legacy-export-templates}

Il sistema di template orientato all'esportazione supporta un corpo del modello per ogni istanza, oltre a un prologo e un epilogo per ciascun simbolo. I prologhi/epiloghi identici vengono deduplicati. Le priorità vanno da 0 a 9: i prologhi vengono eseguiti dal valore più basso al più alto; gli epiloghi sono disposti con la priorità 0 per ultima.

I disegni più vecchi possono usare un simbolo **RUN** senza pin, il cui prologo/epilogo fornisce le direttive di analisi e di chiusura per un deck esportato. Questa è una convenzione di esportazione, non un'indicazione di aggiungere RUN a un foglio Simulation integrato. Esamina queste istruzioni prima di eseguire il file esportato in un simulatore separato.

### Template condizionali
{: #conditional-templates}

Per i template personalizzati/orientati all'esportazione, sono supportate le seguenti forme condizionali:

```text
?( defined(attribute), true text, false text )
?( not_defined(attribute), true text, false text )
?( empty(attribute), true text, false text )
?( not_empty(attribute), true text, false text )
?( connected(pin), true text, false text )
?( not_connected(pin), true text, false text )
```

È possibile annidare le condizioni. Esamina il deck espanso invece di valutare un template complesso basandoti solo sul testo sorgente.

## Notazione numerica e portabilità
{: #numerical-notation-and-portability}

Nel testo SPICE **`M` indica i milli**, proprio come `m`; usa **`Meg`** per i mega. `1k`, `100n` e `10u` sono valori comuni. Usa parametri e riferimenti espliciti del modello invece di affidarti ai valori predefiniti non specificati di un simulatore.

La documentazione della riga di comando di ngspice esterno copre un ambiente più ampio rispetto al motore integrato di TinyCAD. Per la sintassi completa degli elementi, i modelli, le analisi e le note di compatibilità, consulta la [documentazione ufficiale di ngspice](https://ngspice.sourceforge.io/docs.html) e il [manuale utente](https://ngspice.sourceforge.io/docs/ngspice-manual.pdf). Continua con [come TinyCAD implementa SPICE](../SPICE-Tutorial-11/) per una spiegazione dettagliata di motori, simboli e netlist.
