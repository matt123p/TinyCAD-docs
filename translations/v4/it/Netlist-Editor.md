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
- modificare l’aspetto di un gruppo di reti nello schema

## Che cos’è la vista Netlist
{: #what-the-netlist-view-is}

`Netlist Editor` è un elenco aggiornato in tempo reale delle reti presenti nel disegno.

Una rete è una connessione elettrica. TinyCAD la individua in base a:

- fili
- pin
- etichette
- simboli di alimentazione

L’elenco è aggiornato in tempo reale e si aggiorna automaticamente mentre modifichi lo schema.

## Come aprirla
{: #how-to-open-it}

1. Guarda il pannello inferiore dell’editor.
2. Se è visualizzato `Symbols`, usa il pulsante della modalità e passa a `Netlist`.

Se è aperto un altro pannello perché è selezionato un elemento, annulla prima la selezione.

## Significato delle colonne
{: #what-each-column-means}

- `Net`: il nome della rete o il numero di rete interno
- `Sheet`: il foglio in cui è stato trovato l’elemento principale di quella riga
- `Connections`: il numero di connessioni ai pin presenti nella rete
- `Labels`: le etichette trovate nella rete
- `Type`: il tipo di netlist assegnato alla rete
- `Symbols`: le parti e i pin connessi alla rete

## Come usare la vista Netlist
{: #how-to-use-the-netlist-view}

### Trovare una rete
{: #find-a-net}

Usa la casella di ricerca per filtrare l’elenco.

Puoi cercare per:

- nome della rete
- nome del foglio
- testo dell’etichetta
- riferimento del simbolo
- nome del tipo

### Evidenziare una rete nel disegno
{: #highlight-a-net-in-the-drawing}

Passa il mouse sopra una riga.

TinyCAD evidenzia nello schema gli elementi corrispondenti della rete, così puoi vedere dove si trova.

### Raggiungere una rete nel disegno
{: #jump-to-a-net-in-the-drawing}

Fai clic su una riga.

TinyCAD passa all’elemento corrispondente nel foglio corretto.

## Come assegnare un tipo a una rete
{: #how-to-assign-a-type-to-a-net}

Ogni riga ha un campo `Type`.

Per assegnare un tipo:

1. Fai clic nel campo `Type` della rete.
2. Scegli un tipo esistente dall’elenco oppure digita un nuovo nome.
3. Fai clic fuori dal campo per applicare la modifica.


## Che cos’è un tipo di rete
{: #what-a-net-type-is}

Un tipo di rete è un’etichetta riutilizzabile per un gruppo di reti.

Puoi usarlo per:

- organizzare le reti in categorie
- assegnare gli stessi colori a reti corrispondenti
- rendere più spessi determinati fili nel disegno
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

Si apre l’editor di tutte le definizioni dei tipi disponibili.

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
- visualizzare un’anteprima del risultato prima di salvare

## Il tipo predefinito
{: #the-default-type}

È sempre presente un tipo `default`.

Informazioni importanti:

- non può essere rinominato
- non può essere eliminato
- i suoi colori sono quelli normali del disegno

Se modifichi i colori nella riga `default`, modifichi i colori normali delle reti usati nel disegno.

## Come creare un nuovo tipo
{: #how-to-create-a-new-type}

1. Apri `Netlist Types`.
2. Fai clic su `Add`.
3. Inserisci un nome.
4. Imposta i colori e lo spessore dei fili desiderati.
5. Fai clic su `OK` per salvare.

Dopodiché, puoi assegnare il nuovo tipo alle reti dalla vista `Netlist` nella barra inferiore.

## Come duplicare un tipo
{: #how-to-duplicate-a-type}

È utile quando vuoi creare un tipo simile a uno esistente.

1. Seleziona la riga del tipo.
2. Fai clic su `Duplicate`.
3. Modifica il nuovo nome.
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
2. Scegli il colore nella finestra di dialogo dei colori.
3. Chiudi la finestra di dialogo dei colori.
4. Fai clic su `OK` nella finestra principale `Netlist Types`.

I tipi non predefiniti possono usare un colore personalizzato oppure ripiegare sul colore predefinito del disegno.

## Come modificare lo spessore dei fili
{: #how-to-change-wire-thickness}

1. Individua la riga del tipo.
2. Modifica il valore `Wire Thickness`.
3. Fai clic su `OK`.

Questa impostazione determina come vengono disegnati nello schema i fili delle reti di quel tipo.

## Come aggiungere attributi
{: #how-to-add-attributes}

Gli attributi sono semplici voci nome/valore salvate con il tipo.

Per aggiungerli:

1. Fai clic sulla cella `Attributes` del tipo.
2. Aggiungi o modifica i nomi e i valori degli attributi.
3. Salva gli attributi.
4. Fai clic su `OK` nella finestra di dialogo principale.

Al momento questi attributi vengono principalmente memorizzati insieme al disegno. Sono utili per conservare informazioni aggiuntive sui tipi, anche se non sono ancora utilizzati da tutti i formati di output.


## Pagine correlate
{: #related-pages}

- [Generare una netlist](../Generate-Netlist/)
- [Distinta materiali](../Bill-Of-Materials/)
- [Controllo delle regole di progettazione](../Design-Rules-Check/)
- [Output SPICE](../SPICE-output/)
- [Output VHDL](../VHDL-output/)

- Torna a [Avanzate](../Advanced/)
- Torna a [Indice di v4](../CONTENTS/)
