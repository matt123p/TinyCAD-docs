---
layout: default
title: 6. Diodes, rectification and ripple
---
# 6. Diodi, raddrizzamento e ondulazione
{: #diodes-rectification-and-ripple}

[Precedente](/v4/SPICE-Tutorial-05/) · [Indice](/v4/Simulation-Tutorials/) · [Successivo](/v4/SPICE-Tutorial-07/)

Gli esempi di questo capitolo sono inclusi in TinyCAD. Scegli **Open Example (Apri esempio) → SPICE tutorial**, seleziona l'esempio indicato, quindi scegli **Open Drawing (Apri disegno)**. Non è necessario alcun download.

Apri **rectifier**. Una sinusoide a 50 Hz con picco di 5 V pilota un
 diodo, un condensatore di livellamento da 100 µF e un carico da 1 kΩ. Esegui l'analisi transitoria salvata di 200 ms e traccia IN e OUT.


## Segui la corrente lungo un ciclo
{: #follow-the-current-through-a-cycle}

Quando l'ingresso sale sufficientemente al di sopra della tensione del condensatore, il diodo
conduce e ripristina la carica del condensatore. Dopo il picco dell'ingresso, il
diodo si interdice. Il condensatore alimenta quindi il carico e la sua tensione diminuisce
fino al successivo intervallo di ricarica. Le semionde negative dell'ingresso non portano il
condensatore a tensioni negative, perché a queste tensioni il diodo blocca la conduzione inversa.

Il diodo non è un interruttore ideale con una caduta fissa di 0.7 V. Il suo modello `TC_D`
incorporato include una legge corrente/tensione non lineare e una resistenza serie. La caduta diretta
varia con la corrente, la temperatura e i parametri del modello. Il tutorial usa
un modello generico, che non costituisce una garanzia sulle caratteristiche di un diodo acquistato.

## Misura un intervallo a regime
{: #measure-a-settled-window}

I primi cicli includono l'avviamento. Per una misura dell'ondulazione ripetibile, usa
**From = 160 ms** e **To = 200 ms**. La simulazione di riferimento dà:

| Misura su OUT | Risultato approssimativo |
| --- | --- |
| Tensione media | 3.90 V |
| Minimo | 3.56 V |
| Massimo | 4.24 V |
| Ondulazione picco-picco | 0.684 V |
| Valore RMS totale | 3.908 V |

La media è il livello CC. Il valore RMS totale include tale livello e l'ondulazione.
**RMS dell'ondulazione** rimuove la media prima di calcolare il valore RMS; è quindi una
quantità diversa. Un valore RMS totale elevato non implica una grande ondulazione CA.

La stima approssimativa `ΔV ≈ Iload / (f × C)` fornisce circa 0.78 V usando 3.9 mA,
50 Hz e 100 µF. La differenza rispetto ai 0.684 V simulati è istruttiva:
si suppongono una corrente di carico quasi costante e una ricarica istantanea, mentre
la corrente nel resistore varia e il diodo conduce per un intervallo finito.

## Video: misurare l'ondulazione a regime del raddrizzatore
{: #video-measuring-settled-rectifier-ripple}

Impostazione di un intervallo di misura di 160–200 ms e confronto tra tensione media e ondulazione picco-picco.

{% include video-player.html src="/v4/videos/simulation-tutorials/spice/rectifier-ripple.mp4" poster="/v4/videos/simulation-tutorials/spice/rectifier-ripple.jpg" caption="Misura dell'ondulazione a regime del raddrizzatore." %}

[Guarda o scarica il video](/v4/videos/simulation-tutorials/spice/rectifier-ripple.mp4).

### Circuito e risultati di riferimento
{: #circuit-and-reference-results}

![Raddrizzatore a semionda e condensatore di livellamento](/v4/Images/simulation-tutorials/spice/rectifier-circuit.png)

![Avviamento calcolato e ondulazione a regime](/v4/Images/simulation-tutorials/spice/rectifier-results.png)

## Esperimenti che mettono in evidenza i compromessi
{: #experiments-that-reveal-the-trade-offs}

Raddoppia C1 portandolo a 200 µF. L'ondulazione dovrebbe diminuire, ma la ricarica avviene in impulsi più brevi
e concentrati. Dimezza la resistenza di carico portandola a 500 Ω: il carico assorbe
più corrente, la tensione media diminuisce e l'ondulazione aumenta. Per esaminare la corrente nel diodo, richiedi la misura della corrente del componente supportata oppure inserisci una sonda di corrente in serie
nel ramo del diodo. Riduci il passo temporale massimo per verificare che
vengano risolti i brevi picchi di conduzione.

La sorgente qui è ideale. Un trasformatore, un generatore o un alimentatore reale ha
un'impedenza che modifica la corrente di ricarica e la caduta di tensione. Aggiungi una resistenza in serie
per esplorare questo effetto. La potenza dei componenti e la corrente di picco sono risultati utili della simulazione,
ma questo modello semplice non predice automaticamente il riscaldamento del condensatore, i limiti di sovratensione
né la temperatura della giunzione del diodo.

## Perché l'analisi CA non è il primo test adatto
{: #why-ac-analysis-is-not-the-right-first-test}

Il comportamento principale è una grande escursione non lineare durante la quale la conduzione si attiva
e si interrompe. Un'analisi CA a piccoli segnali attorno a un punto di polarizzazione non può riprodurre
il raddrizzamento, l'avviamento o l'ondulazione. Per queste domande usa l'analisi transitoria.
Le scansioni CC, invece, sono utili per tracciare la caratteristica statica corrente/tensione
di un diodo. Scegli l'analisi in base alla questione fisica, non in base al grafico più facile da ottenere.

## Scarica i circuiti della lezione
{: #download-the-lesson-circuits}

Gli stessi esempi sono già disponibili in **Open Example (Apri esempio)**. Per una copia indipendente, scarica un disegno `.dzn` e usa **File → Open (Apri)** in TinyCAD. Il file `.cir` associato è testo SPICE da consultare o usare con un simulatore esterno compatibile, non un disegno TinyCAD. Per eseguire nuove simulazioni di circuiti XSPICE è necessaria la versione Desktop.

| Esempio | Disegno | Netlist |
| --- | --- | --- |
| rectifier | [Disegno TinyCAD](/v4/examples/simulation-tutorials/spice/rectifier.dzn) | [Testo SPICE](/v4/examples/simulation-tutorials/spice/rectifier.cir) |
