---
layout: default
---
# Modelli SPICE e generazione di netlist
{: #spice-models-and-netlist-output}

TinyCAD supporta sia la [simulazione ngspice integrata](../Simulation/) sia l'esportazione di netlist SPICE per un simulatore esterno. Entrambe dipendono dai template SPICE del componente e dalla mappatura dei pin. Il solo aspetto di un simbolo non ne descrive il comportamento elettrico.

Per scegliere un modello già incluso in TinyCAD, iniziare da [Modelli SPICE inclusi](../Bundled-SPICE-Models/).

## Modelli, template e ordine dei pin
{: #models-templates-and-pin-order}

Una resistenza può usare un elemento SPICE nativo. Un transistor può richiedere un `.model`; un dispositivo più complesso può usare un `.subckt`. Le impostazioni SPICE di un simbolo inserito collegano i numeri dei pin fisici ai terminali previsti dal modello. Esaminare la scheda **SPICE** nelle proprietà del simbolo; gli attributi dell'istanza possono sostituire i valori predefiniti del simbolo.

I template usano:

- **`%(pin)`** per la net collegata al numero di pin TinyCAD specificato.
- **`$(attribute)`** per un attributo del componente.
- **`refnum`** come suffisso di riferimento gestito in modo speciale, affinché venga conservato il prefisso del dispositivo SPICE del template.

Ad esempio, un template per una resistenza può essere:

```text
R$(refnum) %(1) %(2) $(Value)
```

Per il riferimento R3, le net 7 e 9 e Value `10k`, genera:

```spice
R3 7 9 10k
```

L'attributo sottostante del template del modello è **`$$SPICE`**; il testo del preambolo è **`$$SPICE_PROLOG`**. Un template può riordinare i pin: non presumere che il pin 1 dello schema sia il primo terminale SPICE. Un elemento BJT prevede **collettore, base, emettitore**. Se un simbolo numera la base come 1, l'emettitore come 2 e il collettore come 3, il template deve sostituire `%(3) %(1) %(2)` in quest'ordine. Un sottocircuito usa l'ordine dichiarato nella riga `.subckt`, che può differire da quello di un contenitore del dispositivo.

Esaminare insieme il simbolo effettivo e il modello. I pin di alimentazione, i pin nascosti, le varianti di transistor e i modelli di amplificatore operazionale sono fonti frequenti di incompatibilità. Un modello comportamentale generico in stile 741 non è un macromodello 741 completo e qualificato dal produttore.

## Usare un modello nella simulazione integrata
{: #use-a-model-in-integrated-simulation}

1. Iniziare con un [modello incluso](../Bundled-SPICE-Models/) oppure aggiungere al simbolo un template Custom appropriato. Verificare che la mappatura dei pin corrisponda all'ordine dei terminali del modello.
2. TinyCAD risolve automaticamente i collegamenti ai modelli inclusi. Se un modello Custom necessita di testo esterno, usare **Setup → Modelli SPICE** per allegarlo con un nome file logico, ad esempio `part.lib`, `part.cir` o `part.mod`.
3. Risolvere le dipendenze `.include` e `.lib` tramite tali allegati. Salvare il disegno per conservarvi le definizioni necessarie.
4. Collegare la massa **0**, impostare l'analisi in **Setup**, quindi eseguire la simulazione ed esaminare la diagnostica.

Il motore gestito non scarica modelli da siti web né legge percorsi assoluti arbitrari sul computer. Fornire esplicitamente le dipendenze. Inoltre, non esegue comandi shell arbitrari, script `.control`, file di avvio, moduli nativi forniti esternamente o dipendenze di dispositivi basate su file. Un modello del produttore che usa una sintassi specifica del simulatore potrebbe richiedere adattamenti; «compatibile con SPICE» non garantisce dialetti identici.

Il foglio Simulation integrato di TinyCAD gestisce i comandi di analisi e la `.end` finale. **Non è necessario un simbolo RUN legacy.** Quando si adatta un disegno orientato all'esportazione, spostare le vecchie impostazioni di analisi in Setup ed eliminare il simbolo RUN legacy. Rimuovere le istruzioni di analisi e `.end` dagli eventuali attributi dei componenti rimanenti; tali comandi vengono rifiutati nel percorso integrato dei template dei componenti.

Controllare la licenza del modello del produttore prima di ridistribuirlo. Esaminare l'ordine dei pin documentato, le unità, le ipotesi del modello e il simulatore supportato. Conservare la documentazione del produttore insieme alle note sulla modellazione.

## Esaminare ed esportare una netlist SPICE
{: #inspect-and-export-a-spice-netlist}

Una netlist è una descrizione testuale dei dispositivi e dei nodi che li collegano. La massa è denominata `0`. Il contenuto tipico comprende definizioni del modello e della configurazione, righe dei componenti, direttive di analisi e una `.end` finale. Tra i controlli utili:

- Ogni componente fa riferimento al modello e al valore previsti?
- I pin collegati condividono i nomi di net previsti?
- Sono presenti le net di alimentazione/ritorno, compresa la 0?
- L'ordine dei terminali del semiconduttore o del sottocircuito è corretto?
- Tutte le definizioni dei modelli e il testo incluso sono disponibili per il motore selezionato?

Per la configurazione integrata, aprire **Foglio Simulation → Diagnostica → Genera testo del circuito**, esaminare il deck espanso, quindi scegliere **Esporta circuito** per salvare `simulation.cir`. Questo include l'analisi gestita e può fare riferimento a file di modello separati con `.include`. Un simulatore esterno richiede copie di tali file nei percorsi indicati.

Per l'esportazione legacy basata su template, usare il comando separato **Genera Spice NetList** nel menu File del browser o nel menu Desktop Tools. È distinto dalla finestra di dialogo PCB [Genera netlist](../Generate-Netlist/). Questo comando incorpora le definizioni incluse a cui si fa riferimento. Fornire eventuali dipendenze esterne usate dai template Custom e verificare che le direttive di analisi e di esecuzione siano adatte al motore esterno. È possibile esaminare direttamente anche un file tutorial complementare `.cir`. **Aprire un disegno `.dzn` in TinyCAD; una netlist `.cir` non è un file di disegno TinyCAD.**

### Template di esportazione legacy
{: #legacy-export-templates}

Il sistema di template orientato all'esportazione supporta un corpo del modello per istanza e preamboli e postamboli per simbolo. I preamboli/postamboli identici vengono deduplicati. Le priorità vanno da 0 a 9: i preamboli vengono eseguiti dal valore più basso al più alto; i postamboli sono ordinati in modo che la priorità 0 sia l'ultima.

I disegni più datati possono usare un simbolo **RUN** senza pin, il cui preambolo/postambolo fornisce le direttive di analisi e di chiusura per un deck esportato. È una convenzione di esportazione, non un'istruzione per aggiungere RUN a un foglio Simulation integrato. Esaminare tali istruzioni prima di eseguire il file esportato in un simulatore separato.

### Template condizionali
{: #conditional-templates}

Per i template orientati all'esportazione/Custom, le forme condizionali supportate includono:

```text
?( defined(attribute), true text, false text )
?( not_defined(attribute), true text, false text )
?( empty(attribute), true text, false text )
?( not_empty(attribute), true text, false text )
?( connected(pin), true text, false text )
?( not_connected(pin), true text, false text )
```

È possibile annidare le condizioni. Esaminare il deck espanso invece di valutare un template complesso soltanto dal testo sorgente.

## Notazione numerica e portabilità
{: #numerical-notation-and-portability}

Nel testo SPICE **`M` indica milli**, proprio come `m`; usare **`Meg`** per mega. `1k`, `100n` e `10u` sono valori comuni. Usare parametri e riferimenti espliciti del modello, invece di affidarsi ai valori predefiniti non specificati di un simulatore.

La documentazione della riga di comando di ngspice esterno descrive un ambiente più ampio rispetto al motore integrato di TinyCAD. Per la sintassi completa degli elementi, i modelli, le analisi e le note di compatibilità, consultare la [documentazione ufficiale di ngspice](https://ngspice.sourceforge.io/docs.html) e il [manuale utente](https://ngspice.sourceforge.io/docs/ngspice-manual.pdf). Proseguire con [come TinyCAD implementa SPICE](../SPICE-Tutorial-11/) per una spiegazione dettagliata di motori, simboli e netlist.
