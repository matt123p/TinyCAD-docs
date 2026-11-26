---
layout: default
---
# Editor della netlist
{: #netlist-editor}

`Netlist Editor` è una nuova funzionalità di TinyCAD v4.

Usa questa funzionalità quando vuoi:

- vedere come TinyCAD ha raggruppato fili ed etichette in net
- trovare dove viene usata una net nel disegno
- assegnare un tipo a una net
- modificare l'aspetto di un gruppo di net nello schema

## Cos'è la vista Netlist
{: #what-the-netlist-view-is}

`Netlist Editor` è un elenco aggiornato in tempo reale delle net presenti nel disegno.

Una net è una connessione elettrica. TinyCAD la ricava da:

- fili
- pin
- etichette
- simboli di alimentazione

L'elenco è dinamico e si aggiorna automaticamente mentre modifichi lo schema.

## Come aprirla
{: #how-to-open-it}

1. Guarda il pannello inferiore dell'editor.
2. Se è visualizzato `Symbols`, usa il pulsante della modalità e passa a `Netlist`.

Se è aperto un altro pannello perché è selezionato un elemento, prima annulla la selezione.

![Vista Netlist sotto lo schema del partitore, con la riga OUT evidenziata](../Images/netlist-editor/netlist-overview.png)

In questo esempio di partitore incluso, la riga `OUT` collega `R1.2` a `R2.1`.
Passando il puntatore su questa riga, la connessione viene evidenziata nel disegno.

## Significato delle colonne
{: #what-each-column-means}

- `Net`: il nome della net o il numero di net interno
- `Sheet`: il foglio in cui è stato trovato l'elemento principale di quella riga
- `Connections`: il numero di connessioni dei pin su quella net
- `Labels`: le etichette presenti su quella net
- `Type`: il tipo di netlist assegnato a quella net
- `Symbols`: le parti e i pin collegati a quella net

## Come usare la vista Netlist
{: #how-to-use-the-netlist-view}

### Trovare una net
{: #find-a-net}

Usa la casella di ricerca per filtrare l'elenco.

Puoi cercare per:

- nome della net
- nome del foglio
- testo dell'etichetta
- riferimento del simbolo
- nome del tipo

### Evidenziare una net nel disegno
{: #highlight-a-net-in-the-drawing}

Passa il puntatore del mouse su una riga.

TinyCAD evidenzia nello schema gli elementi corrispondenti della net, così puoi vedere dove si trova.

### Passare a una net nel disegno
{: #jump-to-a-net-in-the-drawing}

Fai clic su una riga.

TinyCAD passa all'elemento correlato nel foglio corretto.

## Come assegnare un tipo a una net
{: #how-to-assign-a-type-to-a-net}

Con la vista **Netlist** aperta, fai clic su un filo dello schema per evidenziare la riga della relativa net. Usa l'elenco **Type** nella riga per scegliere un tipo esistente. Per creare un tipo con uno stile di filo personalizzato, apri **Netlist Types** e definisci prima lo stile.

Un tipo di net è un insieme riutilizzabile di stili grafici. Assegna lo stesso tipo a più net per dar loro lo stesso aspetto. Modificando quel tipo, si aggiornano tutte le net che lo usano. Puoi anche assegnare alle net di un tipo colori personalizzati per le etichette e i simboli di alimentazione, oppure memorizzare note come attributi. La modifica dello stile cambia l'aspetto del disegno preservando le connessioni elettriche.

## Esempio: rendere verde e più spesso il filo OUT del partitore
{: #example--make-the-dividers-out-wire-green-and-thicker}

Apri il disegno `divider` incluso da **Open Example** → **SPICE tutorial** e ingrandisci il circuito. Nel pannello inferiore, passa da **Symbols** a **Netlist**. L'etichetta **OUT** identifica la net tra i pin **R1.2** e **R2.1**. Inizialmente usa il tipo `default` e lo spessore normale del filo.

![Partitore prima della modifica dello stile, con il filo OUT blu e sottile tra R1 e R2](../Images/netlist-editor/netlist-wire-before.png)

### Creare lo stile del filo
{: #create-the-wire-style}

1. Fai clic su **Netlist Types**, poi su **Add** e assegna al nuovo tipo il nome `control`.
2. Nella riga `control`, imposta **Wire thickness** su `4`. Il valore `1` corrisponde allo spessore normale della linea. Premi **Tab** per confermare il valore.
3. Nella stessa riga, fai clic sulla cella **Wire colour**. Seleziona **Override colour** e inserisci `007F5F` nel campo **Hex** per impostare il verde. L'anteprima mostra il filo con entrambe le impostazioni.
4. Fai clic su **OK** nel selettore dei colori. Verifica il campione verde e il valore dello spessore nella riga `control`, quindi fai clic su **OK** in **Netlist Types** per salvare il tipo.

![Selettore del colore del filo per control, con Override colour selezionato e il filo verde visibile nell'anteprima](../Images/netlist-editor/netlist-wire-colour.png)

![Netlist Types con il campione verde di Wire colour e Wire thickness impostato su 4 nella riga control](../Images/netlist-editor/netlist-wire-type.png)

### Applicare lo stile a OUT
{: #apply-the-style-to-out}

1. Fai clic sul filo appena sopra **R2** nello schema. TinyCAD evidenzia la riga **OUT** nel pannello **Netlist**.
2. Apri l'elenco **Type** nella riga evidenziata e scegli `control`.
3. Fai clic su un'area vuota dello schema per annullare la selezione. Il filo tra **R1.2** e **R2.1** ora è verde e più spesso. Per ripristinare lo stile normale del filo, scegli `default` nell'elenco **Type**.

![Filo OUT selezionato nello schema e relativa riga Netlist evidenziata con control selezionato](../Images/netlist-editor/netlist-wire-assignment.png)

![Partitore dopo la modifica dello stile, con il filo OUT verde e più spesso tra R1 e R2](../Images/netlist-editor/netlist-wire-after.png)

Usa **Save As** per conservare la copia modificata dell'esempio.

### Guarda la procedura guidata
{: #watch-the-walkthrough}

{% include video-player.html src="/v4/videos/netlist-editor/netlist-editor.webm" type="video/webm" poster="/v4/Images/netlist-editor/netlist-walkthrough-start.png" caption="Passa a Netlist, crea uno stile di filo verde, quindi fai clic sul filo OUT per trovare la relativa riga e applicare lo stile." %}

## Operazioni disponibili in Netlist Types
{: #what-you-can-do-in-netlist-types}

Nella finestra `Netlist Types` puoi:

- aggiungere un nuovo tipo
- duplicare un tipo esistente
- rinominare un tipo
- eliminare un tipo
- cambiare il colore del filo
- cambiare il colore dell'etichetta
- cambiare il colore del simbolo di alimentazione
- cambiare lo spessore del filo
- aggiungere attributi personalizzati
- visualizzare un'anteprima del risultato prima di salvare

## Il tipo predefinito
{: #the-default-type}

Il tipo `default` ha un nome fisso e uno spessore del filo pari a `1`. TinyCAD usa i colori di questa riga come colori normali delle net nel disegno. Alle net senza un tipo assegnato viene applicato `default`.

## Come duplicare un tipo
{: #how-to-duplicate-a-type}

È utile quando vuoi creare un tipo simile a uno esistente.

1. Seleziona la riga del tipo.
2. Fai clic su `Duplicate`.
3. Rinomina la copia e modifica i colori o lo spessore.
4. Fai clic su `OK`.

## Colori delle etichette e dei simboli di alimentazione
{: #label-and-power-symbol-colours}

Usa le schede **Wire**, **Label** e **Power** nel selettore dei colori per modificare separatamente ciascun colore. Per un tipo personalizzato, attiva **Override colour** in ogni scheda che vuoi personalizzare. Se l'opzione di sovrascrittura è disattivata in una scheda, per quell'elemento viene usato il colore predefinito del disegno.

## Come aggiungere attributi
{: #how-to-add-attributes}

Gli attributi sono semplici voci nome/valore salvate con il tipo.

Per aggiungerli:

1. Fai clic sulla cella `Attributes` del tipo.
2. Fai clic su `Add Attribute`, quindi inserisci il nome e il valore dell'attributo. Ripeti per ogni altra voce.
3. Salva gli attributi.
4. Fai clic su `OK` nella finestra di dialogo principale.

![Editor degli attributi con le voci purpose e notes per il tipo control](../Images/netlist-editor/netlist-attributes.png)

Queste voci di esempio descrivono lo scopo del tipo e aggiungono una nota sul cablaggio. Sono associate al tipo e possono essere condivise da tutte le net a cui è assegnato.

Al momento, questi attributi vengono principalmente salvati nel disegno. Sono utili per conservare informazioni aggiuntive sul tipo, anche se non sono ancora utilizzate da tutti i formati di output.


## Pagine correlate
{: #related-pages}

- [Generare una netlist](../Generate-Netlist/)
- [Distinta base](../Bill-Of-Materials/)
- [Verifica delle regole di progettazione](../Design-Rules-Check/)
- [Output SPICE](../SPICE-output/)
- [Output VHDL](../VHDL-output/)

- Torna a [Funzionalità avanzate](../Advanced/)
- Torna a [Indice di v4](../)
