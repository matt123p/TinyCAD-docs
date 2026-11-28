---
layout: default
title: 2. Gates and truth tables
---
# 2. Porte e tabelle di verità
{: #gates-and-truth-tables}

[Precedente](/v4/XSPICE-Tutorial-01/) · [Indice](/v4/Simulation-Tutorials/) · [Successivo](/v4/XSPICE-Tutorial-03/)

Gli esempi di questo capitolo sono inclusi in TinyCAD. Scegli **Apri esempio (Open Example) → Tutorial XSPICE e digitale**, seleziona l'esempio desiderato, quindi scegli **Apri disegno (Open Drawing)**. Non è necessario scaricare nulla.

Apri **logic-nand**. X1 contiene ponti ADC, una porta NAND XSPICE a due ingressi e un ponte di uscita DAC. Sorgenti di impulsi indipendenti applicano segnali ad A e B a frequenze diverse. Esegui l'analisi transitoria di 8 µs e visualizza A, B e Y.

![Circuito di prova NAND](/v4/Images/simulation-tutorials/xspice/logic-nand-circuit.png)
![Forme d'onda NAND calcolate](/v4/Images/simulation-tutorials/xspice/logic-nand-results.png)

La funzione booleana è `Y = NOT(A AND B)`:

| A | B | Y stabilizzato |
| --- | --- | --- |
| 0 | 0 | 1 |
| 0 | 1 | 1 |
| 1 | 0 | 1 |
| 1 | 1 | 0 |

Nella rappresentazione analogica tracciata, zero significa circa 0 V e uno
significa circa 5 V. L'uscita diventa bassa solo quando entrambi gli ingressi sono
alti. Osserva la parte centrale di ogni intervallo stabile, non l'istante esatto in cui
un ingresso supera una soglia. La porta ha ritardi di propagazione di 20 ns per i fronti di salita e di discesa; i ponti e i loro fronti non ideali contribuiscono a ulteriori ritardi.

## Esegui un esperimento intenzionale con la tabella di verità
{: #run-a-deliberate-truth-table-experiment}

Usa i cursori del grafico per individuare un intervallo stabile per ogni riga. Registra A, B e Y
dopo che l'uscita si è stabilizzata. Se una combinazione di ingressi molto breve si verifica solo
mentre due ingressi cambiano, non usare quella transizione come prova di una riga stabile della
tabella di verità. Per una verifica manuale inequivocabile, imposta le due sorgenti su DC
a 0 V o 5 V, esegui di nuovo l'analisi transitoria e prova singolarmente le quattro combinazioni.

Nel modello SPICE incorporato in X1, le istruzioni fondamentali sono:

```spice
Ag [da db] dy ng
.model ng d_nand(rise_delay=20n fall_delay=20n)
```

Le parentesi quadre raggruppano un vettore di porte d'ingresso. `da`, `db` e `dy` sono
nodi interni pilotati da eventi. Non sono normali nodi elettrici a cui si possa collegare
direttamente un resistore. I ponti collegano questi nodi interni ai terminali analogici
visibili nel disegno.

Per provare un'altra funzione, crea una copia del disegno e cambia il tipo di modello
nel prologo SPICE di X1 impostandolo su una porta compatibile, ad esempio `d_and`.
Mantieni compatibile l'interfaccia delle porte vettoriali e scalari. La tabella di verità AND dovrebbe
essere l'inversa del risultato NAND una volta stabilizzate le transizioni.

## Cosa non dimostra questo esempio
{: #what-this-example-does-not-establish}

Il modello non rappresenta un circuito integrato commerciale specifico, né i suoi diodi ESD, i limiti di fan-out,
i picchi di corrente di alimentazione o i tempi dichiarati dal produttore in funzione del carico. Il ritardo di 20 ns è
un parametro di ingresso di questo esperimento. Una tabella di verità corretta dimostra il funzionamento
logico per gli stati verificati, non la compatibilità elettrica con un altro chip.

In caso di problemi, controlla prima i livelli delle sorgenti salvati, poi le soglie dei ponti e infine il modello
della porta e l'ordine delle porte. Un ingresso mantenuto a 2 V non è definito
con queste impostazioni dei ponti e non gli si può assegnare un valore booleano solo
perché è più vicino a un livello di alimentazione.

Le definizioni dei modelli e le convenzioni delle porte sono documentate nel capitolo sui modelli di codice XSPICE
del [manuale di ngspice](https://ngspice.sourceforge.io/docs.html).

## Scarica i circuiti della lezione
{: #download-the-lesson-circuits}

Gli stessi esempi sono già disponibili in **Apri esempio (Open Example)**. Per averne una copia indipendente, scarica un disegno `.dzn` e usa **File → Apri (Open)** in TinyCAD. Il file `.cir` corrispondente contiene testo SPICE da esaminare o da usare con un simulatore esterno compatibile, non è un disegno TinyCAD. Per eseguire da zero circuiti XSPICE è necessaria la versione Desktop.

| Esempio | Disegno | Netlist |
| --- | --- | --- |
| logic-nand | [Disegno TinyCAD](/v4/examples/simulation-tutorials/xspice/logic-nand.dzn) | [Testo SPICE](/v4/examples/simulation-tutorials/xspice/logic-nand.cir) |
