---
layout: default
title: 2. Measuring DC voltage, current and power
---
# 2. Misurare tensione, corrente e potenza in CC
{: #measuring-dc-voltage-current-and-power}

[Precedente](/v4/SPICE-Tutorial-01/) · [Indice](/v4/Simulation-Tutorials/) · [Successivo](/v4/SPICE-Tutorial-03/)

Gli esempi di questo capitolo sono inclusi in TinyCAD. Scegliere **Apri esempio (Open Example) → Tutorial SPICE**, selezionare l'esempio indicato, quindi scegliere **Apri disegno (Open Drawing)**. Non è necessario scaricare nulla.

Aprire **divider**. Mantenere il generatore nominale da 5 V e le due
resistenze da 1 kΩ. Lo scopo è distinguere la tensione di nodo, la tensione ai capi di un componente,
la corrente che lo attraversa e la potenza da esso assorbita.

## Misure di tensione
{: #voltage-measurements}

`out` indica la tensione di OUT rispetto al nodo 0. La tensione ai capi di R1 è
`VIN − VOUT`, che in questo caso è anch'essa pari a 2,5 V. Questa uguaglianza è fortuita: dopo aver portato
R2 a 2 kΩ, R1 ha una tensione di 1,667 V, mentre R2 ha una tensione di 3,333 V.

Usare **Simulazione → SPICE → Inserisci sonda (Insert Probe)** per misurare la tensione di un nodo. Una sonda differenziale
misura il potenziale del terminale positivo meno quello del terminale negativo. Collegare la punta
positiva a IN e quella negativa a OUT per misurare R1. Invertendo le punte
si inverte il risultato. Una sonda differenziale è particolarmente utile quando nessuno dei due
terminali è collegato a massa, come nel caso di un condensatore di accoppiamento o dell'uscita di un ponte.

## Misure di corrente
{: #current-measurements}

Usare una sonda di corrente in serie interrompendo un filo e inserendo la sonda nel
percorso. È modellata come un generatore ideale a tensione nulla: la corrente la attraversa senza
caduta di tensione ideale. Collegarla invece ai capi dell'alimentazione ne provocherebbe il
cortocircuito. La corrente positiva della sonda segue l'ordine dei terminali positivo-negativo della sonda. Anche le correnti dei rami dei generatori, come `v1#branch`, sono disponibili direttamente.

In questo partitore, la corrente scorre da V1 attraverso R1 e R2 verso massa. Le correnti
in entrambe le resistenze sono pari a 2,5 mA; la corrente di ramo di V1 è −2,5 mA perché il generatore eroga
questa corrente dal suo terminale positivo.

## Potenza e verifica del bilancio energetico
{: #power-and-an-energy-balance-check}

Usare la convenzione passiva dei segni: `P = V × I`, con la corrente che entra nel terminale
al quale è assegnata la tensione positiva. Una potenza positiva è assorbita; una potenza negativa
è erogata.

| Componente | Calcolo | Risultato nominale |
| --- | --- | --- |
| R1 | `(2.5 V)² / 1 kΩ` | +6,25 mW |
| R2 | `(2.5 V)² / 1 kΩ` | +6,25 mW |
| V1 | `5 V × (−2.5 mA)` | −12,5 mW |
| Somma | Generatore più carichi | 0 W |

Questo bilancio è uno strumento utile per il debug. Un fattore 1000 spesso indica un
errore di prefisso. Un segno errato spesso indica un orientamento della sonda invertito.
Un carico aggiuntivo non spiegato può rivelare una giunzione indesiderata o un collegamento errato dello strumento di misura.

I controlli **Misure (Measurements)** di TinyCAD possono selezionare la tensione, la corrente e la
potenza di un componente quando il modello le supporta. Una corrente supportata ma non disponibile
viene segnalata come non disponibile; non deve essere interpretata come consumo nullo.

## Variare l'alimentazione
{: #sweep-the-supply}

Aprire **dc-sweep**. L'analisi salvata **Sweep DC (DC sweep)** usa V1,
con valore iniziale di 0 V, valore finale di 10 V e incrementi di 0,5 V. Eseguire l'analisi e tracciare OUT.

![Curva di trasferimento CC calcolata](/v4/Images/simulation-tutorials/spice/dc-sweep-results.png)

L'asse orizzontale rappresenta il valore del generatore variato, non il tempo. I valori attesi sono
0 V, 2,5 V e 5 V quando l'alimentazione vale rispettivamente 0 V, 5 V e 10 V. La pendenza è 0,5 V/V.
Questo test è utile per verificare le reti di polarizzazione e le interfacce dei sensori prima
di aggiungere stimoli dipendenti dal tempo.

## Analizzare il carico
{: #investigate-loading}

Aggiungere un'altra resistenza da 1 kΩ tra OUT e massa. R2 e il nuovo carico sono in parallelo,
quindi la loro resistenza equivalente è 500 Ω. La tensione di uscita attesa è ora
`5 × 500 / (1000 + 500) = 1.667 V`. Un partitore di tensione non è una sorgente di tensione ideale:
la sua uscita cambia quando eroga corrente.

Per una lista di controllo delle misure, annotare i nomi dei nodi, il verso di riferimento, le unità,
le impostazioni del generatore e l'analisi. Queste informazioni rendono riproducibile un risultato e
permettono a un altro lettore di distinguere una modifica del circuito da una modifica del grafico.

## Scaricare i circuiti della lezione
{: #download-the-lesson-circuits}

Gli stessi esempi sono già disponibili in **Apri esempio (Open Example)**. Per ottenere una copia indipendente, scaricare un disegno `.dzn` e usare **File → Apri (Open)** in TinyCAD. Il file `.cir` di accompagnamento contiene testo SPICE per l'ispezione o per un simulatore esterno compatibile; non è un disegno TinyCAD. Per eseguire da zero circuiti XSPICE è necessaria la versione Desktop.

| Esempio | Disegno | Netlist |
| --- | --- | --- |
| divider | [Disegno TinyCAD](/v4/examples/simulation-tutorials/spice/divider.dzn) | [Testo SPICE](/v4/examples/simulation-tutorials/spice/divider.cir) |
