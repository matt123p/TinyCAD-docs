---
layout: default
---
# Output VHDL
{: #vhdl-output}

L'output VHDL in TinyCAD v4 funziona come in v3. TinyCAD usa le connessioni dello schema, le definizioni dei pin dei simboli e i simboli pensati per VHDL per generare una descrizione VHDL del progetto.

L'esportazione VHDL è disponibile nell'app desktop. La versione browser al momento non crea file VHDL.

## A cosa serve VHDL
{: #what-vhdl-is-used-for}

VHDL è l'acronimo di Very High Speed Integrated Circuit Hardware Description Language (linguaggio di descrizione hardware per circuiti integrati ad altissima velocità). Si usa per descrivere hardware digitale, come porte logiche, contatori, macchine a stati, bus e blocchi riutilizzabili più complessi.

VHDL viene comunemente usato per:

- simulare la logica digitale prima di realizzare l'hardware
- descrivere blocchi di progetto riutilizzabili con ingressi e uscite definiti
- realizzare progetti gerarchici FPGA o ASIC a partire da moduli più piccoli
- fornire un progetto agli strumenti successivi di sintesi o verifica

In pratica, un progetto VHDL definisce di solito:

- un'**entity**: le porte esterne del blocco
- un'**architecture**: la logica o la struttura interna

Il supporto VHDL di TinyCAD è particolarmente utile quando si desidera rappresentare la struttura di un progetto digitale in uno schema ed esportarla in formato VHDL.

## Preparazione dello schema
{: #preparing-the-schematic}

Per creare un output VHDL, realizza lo schema usando simboli della libreria VHDL. Questi simboli sono progettati affinché TinyCAD possa riconoscere quali pin sono ingressi, uscite e connessioni denominate.

Puoi trovare simboli pensati per VHDL anche su [tinycad.net](https://www.tinycad.net/Search?key=%23vhdl).

Usa i simboli come qualsiasi altro simbolo TinyCAD, prestando però particolare attenzione alla denominazione:

- Per gli ingressi e le uscite di primo livello, usa i simboli della libreria VHDL e assegna a ciascuno il nome del segnale richiesto.
- I fili interni devono avere nomi coerenti ovunque debbano collegarsi allo stesso segnale.
- I nomi, le direzioni e i numeri dei pin dei simboli personalizzati devono essere corretti.

TinyCAD assegna automaticamente un nome ai fili connessi, ma le etichette esplicite restano il modo più chiaro per controllare i nomi dei segnali esportati.

## Come TinyCAD abbina i simboli a VHDL
{: #how-tinycad-pairs-symbols-with-vhdl}

TinyCAD consente di realizzare progetti gerarchici orientati a VHDL senza ricorrere alla funzionalità di TinyCAD per gli schemi gerarchici composti da più file.

Il flusso di lavoro previsto è il seguente:

1. Crea o raccogli i file VHDL che definiscono il comportamento dei blocchi riutilizzabili.
2. Crea simboli TinyCAD corrispondenti a questi blocchi in una libreria di progetto.
3. Assegna a ogni simbolo lo stesso nome del file VHDL o dell'unità di progetto corrispondente.
4. Verifica che ogni pin del simbolo abbia il nome e la direzione corretti e un numero di pin univoco.

Ogni volta che inserisci nello schema uno di questi simboli, TinyCAD può abbinarne l'istanza al blocco VHDL con lo stesso nome.

In questo modo è pratico realizzare progetti più grandi a partire da moduli più piccoli definiti in VHDL, continuando a disegnare la struttura di primo livello come schema.

## Uso dei bus
{: #working-with-buses}

Per l'output VHDL, non usare la funzionalità BUS di disegno di TinyCAD per definire logicamente il bus. Definisci invece i bus assegnando direttamente un nome ai fili.

Esempi:

- `A(7:0)` definisce un bus a 8 bit denominato `A`
- `A(3)` indica un singolo bit di quel bus
- `A(7:4)` indica una sezione di quel bus

Usa lo stesso stile di denominazione sui simboli di ingresso e di uscita quando rappresentano bus.

Per gli intervalli di bus nel formato `A(i:j)`, mantieni `i` maggiore di `j`.

Puoi comunque disegnare una giunzione di bus per rendere lo schema più leggibile, ma per l'esportazione VHDL ciò che conta è il nome dei fili, non la rappresentazione grafica del bus.

## Generazione del file VHDL
{: #generating-the-vhdl-file}

Quando lo schema è pronto, esegui il comando Create VHDL in TinyCAD.

TinyCAD esegue automaticamente un controllo delle regole di progettazione durante il processo di esportazione. Se vuoi individuare eventuali problemi di cablaggio o dei simboli prima di generare l'output, puoi anche eseguire prima il controllo delle regole di progettazione.

## Lista di controllo pratica
{: #practical-checklist}

Prima di esportare, verifica quanto segue:

- gli ingressi e le uscite di primo livello hanno esattamente i nomi che desideri usare in VHDL
- i simboli personalizzati hanno le direzioni dei pin corrette
- i numeri dei pin sono univoci per ogni simbolo
- le reti condivise che devono essere connesse hanno effettivamente lo stesso nome
- i bus sono denominati con intervalli in stile VHDL, come `DATA(15:0)`

Se il VHDL generato non corrisponde a quanto previsto, la causa è di solito una definizione errata dei pin, un nome di filo mancante o una denominazione dei bus incoerente.

## Progetti di esempio
{: #example-designs}

L'albero dei sorgenti di TinyCAD include un piccolo esempio VHDL basato su un progetto di processore a 4 bit. Esaminare questi file è un modo utile per comprendere la denominazione prevista dei simboli e la struttura del progetto.

L'esempio è disponibile nella [cartella del repository degli esempi VHDL di TinyCAD](https://github.com/matt123p/TinyCAD/tree/master/examples/vhdl).

- Torna a [Avanzate](../Advanced/)
- Torna a [contenuti di v4](../CONTENTS/)
