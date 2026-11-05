---
layout: default
---
# Genera netlist
{: #generate-netlist}

TinyCAD può generare un file netlist da utilizzare per il layout PCB e con altri strumenti a valle.

Una netlist è una descrizione testuale di due elementi principali:

- quali istanze di componenti sono presenti nel progetto
- quali pin sono collegati tra loro su ciascuna rete

TinyCAD legge i collegamenti elettrici dallo schema e scrive queste informazioni nel formato di output scelto.

## A cosa serve una netlist generata
{: #what-a-generated-netlist-is-for}

La netlist generata viene usata principalmente per trasferire uno schema completato a un altro strumento, in particolare a un programma per il layout PCB.

Gli usi tipici includono:

- importare il circuito in uno strumento per PCB
- verificare che i collegamenti del PCB corrispondano allo schema
- esaminare i riferimenti dei componenti e i nomi delle reti in formato testo semplice

TinyCAD non realizza il layout PCB. Esporta i dati di connessione affinché possano essere utilizzati da un altro strumento.

## Prima di generare la netlist
{: #before-generating-the-netlist}

L'esportazione della netlist dipende dal fatto che lo schema sia collegato elettricamente nel modo previsto da TinyCAD. È buona prassi eseguire prima il [Controllo delle regole di progettazione (Design Rules Check](../Design-Rules-Check/).

## L'attributo `Package`
{: #the-package-attribute}

Per l'esportazione verso PCB, molti strumenti di destinazione richiedono che ogni componente abbia un nome di impronta o di package.

In TinyCAD, questo dato viene solitamente memorizzato come attributo del simbolo denominato `Package`.

Quando la netlist viene esportata, TinyCAD scrive tale attributo nell'output, affinché il programma PCB possa associare il simbolo dello schema all'impronta corretta.

Lo stesso simbolo può usare valori di package diversi in parti diverse di un progetto; controlla quindi l'attributo sul componente posizionato, non soltanto il valore predefinito della libreria.

## Come generare la netlist
{: #how-to-generate-the-netlist}

1. Apri il progetto che desideri esportare.
2. Esegui il comando di esportazione della netlist dagli strumenti di esportazione dell'interfaccia utente di TinyCAD.
3. Scegli il formato di output richiesto dallo strumento di destinazione.
4. Scegli il nome del file e salva il file esportato.


## Formati nella finestra di dialogo Genera netlist
{: #formats-in-the-generate-netlist-dialog}

La finestra di dialogo offre attualmente questi formati:

- `PADS-PCB`
- `PADS-PCB-WITH-VALUE`
- `Eagle SCR`
- `Protel`
- `gEDA PCB`

## Significato dei formati
{: #what-the-formats-mean}

### PADS-PCB
{: #pads-pcb}

Crea un file netlist in stile PADS.

### PADS-PCB-WITH-VALUE
{: #pads-pcb-with-value}

Crea un file netlist in stile PADS e include anche il valore del componente, se disponibile.

### Eagle SCR
{: #eagle-scr}

Crea un file di script Eagle.

### Protel
{: #protel}

Crea un file netlist in stile Protel.

### gEDA PCB
{: #geda-pcb}

Crea un file netlist per gEDA PCB.

## SPICE e VHDL
{: #spice-and-vhdl}

Le esportazioni SPICE e VHDL vengono gestite separatamente dalla finestra di dialogo principale `Generate Netlist`.

Se ti servono, usa:

- `Generate Spice NetList`
- `Create VHDL File`

Questi comandi generano comunque prima i dati della netlist, ma usano esportatori dedicati.

## Nome del file utilizzato
{: #what-file-name-is-used}

TinyCAD usa il nome del disegno corrente e modifica l'estensione del file in base al formato di esportazione.

Esempi:

- `.net`
- `.scr`
- `.cir`
- `.vhdl`


## Cosa controllare dopo l'esportazione
{: #what-to-check-after-export}

Poiché le netlist sono file di testo, è facile esaminarle con un editor di testo.

Controlla almeno questi punti:

- i riferimenti dei componenti sono presenti e univoci
- nel file compaiono i nomi delle reti previsti
- i valori di package o di impronta sono presenti quando richiesto
- non mancano componenti o collegamenti evidenti

Se il risultato non sembra corretto, di solito la causa è nei dati dello schema, non nel processo di esportazione.

## Cause comuni di netlist non corrette
{: #common-causes-of-incorrect-netlists}

- è stata usata una linea di disegno invece di un filo
- un filo termina vicino a un pin, ma non è effettivamente collegato a esso
- a un componente manca un riferimento
- manca un attributo `Package` richiesto oppure il suo valore non è coerente
- le etichette che avrebbero dovuto collegarsi non corrispondono esattamente

## Pagine correlate
{: #related-pages}

- [Editor netlist (Netlist Editor](../Netlist-Editor/)
- [Controllo delle regole di progettazione (Design Rules Check](../Design-Rules-Check/)
- [Output SPICE (SPICE output](../SPICE-output/)

- Torna a [Funzioni avanzate (Advanced](../Advanced/)
- Torna all'[indice di v4 (v4 contents](../CONTENTS/)
