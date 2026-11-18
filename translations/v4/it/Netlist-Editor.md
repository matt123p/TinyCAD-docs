---
layout: default
---
# Editor della netlist
{: #netlist-editor}

`Netlist Editor` è una nuova funzionalità di TinyCAD v4.

Usa questa funzionalità quando vuoi:

- vedere come TinyCAD ha raggruppato fili ed etichette in reti
- trovare dove viene usata una rete nel disegno
- assegnare un tipo a una rete
- modificare l'aspetto di un gruppo di reti nello schema

## Cos'è la vista Netlist
{: #what-the-netlist-view-is}

`Netlist Editor` è un elenco aggiornato in tempo reale delle reti presenti nel disegno.

Una rete è una connessione elettrica. TinyCAD la determina in base a:

- fili
- pin
- etichette
- simboli di alimentazione

L'elenco è dinamico e si aggiorna automaticamente mentre modifichi lo schema.

## Come aprirla
{: #how-to-open-it}

1. Guarda il pannello inferiore dell'editor.
2. Se è visualizzato `Symbols`, usa il pulsante della modalità e passa a `Netlist`.

Se è aperto un altro pannello perché è selezionato un elemento, deselezionalo prima.

![Vista Netlist sotto lo schema del partitore, con la riga OUT evidenziata](../images/netlist-editor/netlist-overview.png)

In questo esempio di partitore incluso, la riga `OUT` collega `R1.2` a `R2.1`.
Passando il puntatore del mouse su quella riga, la connessione viene evidenziata nel disegno.

## Significato di ciascuna colonna
{: #what-each-column-means}

- `Net`: il nome della rete o il numero di rete interno
- `Sheet`: il foglio in cui è stato trovato l'elemento principale della riga
- `Connections`: il numero di connessioni pin presenti sulla rete
- `Labels`: le etichette trovate sulla rete
- `Type`: il tipo di netlist assegnato alla rete
- `Symbols`: i componenti e i pin collegati alla rete

## Come usare la vista Netlist
{: #how-to-use-the-netlist-view}

### Trovare una rete
{: #find-a-net}

Usa la casella di ricerca per filtrare l'elenco.

Puoi cercare per:

- nome della rete
- nome del foglio
- testo dell'etichetta
- riferimento del simbolo
- nome del tipo

### Evidenziare una rete nel disegno
{: #highlight-a-net-in-the-drawing}

Passa il puntatore del mouse su una riga.

TinyCAD evidenzia gli elementi corrispondenti della rete nello schema, così puoi vedere dove si trova la rete.

### Raggiungere una rete nel disegno
{: #jump-to-a-net-in-the-drawing}

Fai clic su una riga.

TinyCAD passa all'elemento correlato nel foglio corretto.

## Come assegnare un tipo a una rete
{: #how-to-assign-a-type-to-a-net}

Ogni riga ha un campo `Type`.

Per assegnare un tipo:

1. Fai clic nel campo `Type` della rete.
2. Scegli un tipo esistente dall'elenco.
3. Per definire prima un nuovo tipo, usa `Netlist Types` come descritto di seguito, quindi torna al campo `Type` della rete.

![Netlist filtrata su OUT, con il tipo control assegnato](../images/netlist-editor/netlist-type-assignment.png)

Qui, la ricerca di `OUT` isola la rete di uscita del partitore e il suo `Type` è impostato su `control`.


## Cos'è un tipo di rete
{: #what-a-net-type-is}

Un tipo di rete è un'etichetta riutilizzabile per un gruppo di reti.

Puoi usarlo per:

- organizzare le reti in categorie
- assegnare gli stessi colori alle reti corrispondenti
- disegnare alcune reti con linee più spesse
- memorizzare note aggiuntive come attributi

Esempi di possibili nomi di tipo:

- `power`
- `control`
- `logic`
- `analog`
- `high_current`

## Come aprire Netlist Types
{: #how-to-open-netlist-types}

1. Apri la vista `Netlist` nella barra inferiore.
2. Fai clic su `Netlist Types`.

Si apre l'editor di tutte le definizioni di tipo disponibili.

## Operazioni disponibili in Netlist Types
{: #what-you-can-do-in-netlist-types}

Nella finestra `Netlist Types` puoi:

- aggiungere un nuovo tipo
- duplicare un tipo esistente
- rinominare un tipo
- eliminare un tipo
- modificare il colore dei fili
- modificare il colore delle etichette
- modificare il colore dei simboli di alimentazione
- modificare lo spessore dei fili
- aggiungere attributi personalizzati
- visualizzare un'anteprima del risultato prima di salvare

## Il tipo predefinito
{: #the-default-type}

È sempre presente un tipo `default`.

Informazioni importanti:

- non può essere rinominato
- non può essere eliminato
- i suoi colori sono quelli normali del disegno

Se modifichi i colori nella riga `default`, modifichi i normali colori delle reti usati nel disegno.

## Come creare un nuovo tipo
{: #how-to-create-a-new-type}

1. Apri `Netlist Types`.
2. Fai clic su `Add`.
3. Inserisci un nome.
4. Imposta i colori e lo spessore dei fili desiderati.
5. Fai clic su `OK` per salvare.

In seguito, potrai assegnare il nuovo tipo alle reti dalla vista `Netlist` in basso.

![Editor Netlist Types con i tipi default, control e power e uno spessore del filo pari a 2 per control](../images/netlist-editor/netlist-types.png)

L'esempio aggiunge i tipi `control` e `power`. Il tipo `control` ha uno spessore del filo pari a `2`; ogni pulsante del colore apre il proprio editor.

## Come duplicare un tipo
{: #how-to-duplicate-a-type}

È utile quando vuoi creare qualcosa di simile a un tipo esistente.

1. Seleziona la riga del tipo.
2. Fai clic su `Duplicate`.
3. Modifica il nome del nuovo tipo.
4. Modifica i colori o le impostazioni desiderati.
5. Fai clic su `OK`.

## Come modificare i colori
{: #how-to-change-colors}

Ogni tipo può avere colori distinti per:

- fili
- etichette
- elementi di alimentazione

Per modificare un colore:

1. Fai clic sulla cella del colore nella riga.
2. Per un tipo non predefinito, attiva `Override colour`, quindi scegli un colore.
3. Fai clic su `OK` nella finestra di dialogo del colore.
4. Fai clic su `OK` nella finestra principale `Netlist Types`.

I tipi non predefiniti possono usare un colore personalizzato oppure quello predefinito del disegno.

![Editor del colore dei fili con Override colour attivato e un filo verde nell'anteprima](../images/netlist-editor/netlist-colour-preview.png)

L'anteprima mostra il colore del filo selezionato insieme ai colori dell'etichetta e del simbolo di alimentazione. Usa le schede `Wire`, `Label` e `Power` per esaminare ciascuna impostazione prima di salvare.

## Come modificare lo spessore dei fili
{: #how-to-change-wire-thickness}

1. Individua la riga del tipo.
2. Modifica il valore `Wire Thickness`.
3. Fai clic su `OK`.

Questo determina come vengono disegnati nello schema i fili delle reti di quel tipo.

## Come aggiungere attributi
{: #how-to-add-attributes}

Gli attributi sono semplici voci nome/valore salvate insieme al tipo.

Per aggiungerli:

1. Fai clic sulla cella `Attributes` del tipo.
2. Fai clic su `Add Attribute`, quindi inserisci il nome e il valore dell'attributo. Ripeti per le altre voci.
3. Salva gli attributi.
4. Fai clic su `OK` nella finestra di dialogo principale.

![Editor degli attributi con voci purpose e notes per il tipo control](../images/netlist-editor/netlist-attributes.png)

Queste voci di esempio descrivono lo scopo del tipo e aggiungono una nota sul cablaggio. Appartengono al tipo e possono essere condivise da tutte le reti a cui è assegnato.

Al momento, questi attributi vengono principalmente salvati con il disegno. Sono utili per conservare informazioni aggiuntive sui tipi, anche se non sono ancora utilizzati da tutti i formati di output.


## Pagine correlate
{: #related-pages}

- [Genera netlist](../Generate-Netlist/)
- [Distinta base](../Bill-Of-Materials/)
- [Verifica delle regole di progettazione](../Design-Rules-Check/)
- [Output SPICE](../SPICE-output/)
- [Output VHDL](../VHDL-output/)

- Torna a [Funzioni avanzate](../Advanced/)
- Torna a [Indice di v4](../)
