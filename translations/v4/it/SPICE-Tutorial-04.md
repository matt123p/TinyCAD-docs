---
layout: default
title: "4. Transient analysis: charging a capacitor"
---
# 4. Analisi transitoria: carica di un condensatore
{: #transient-analysis-charging-a-capacitor}

[Precedente](/v4/SPICE-Tutorial-03/) · [Indice](/v4/Simulation-Tutorials/) · [Successivo](/v4/SPICE-Tutorial-05/)

Gli esempi di questo capitolo sono inclusi in TinyCAD. Scegli **Apri esempio (Open Example) → Tutorial SPICE**, seleziona l'esempio desiderato, quindi scegli **Apri disegno (Open Drawing)**. Non è necessario scaricare nulla.

Apri **rc-step**. Una sorgente passa da 0 a 1 V attraverso
1 kΩ fino a un condensatore da 1 µF. L'analisi transitoria salvata dura 5 ms, con un passo massimo
di 5 µs. Traccia IN e OUT insieme.


## Video: carica RC e costante di tempo
{: #video-rc-charging-and-time-constant}

Riduzione del passo temporale massimo e misurazione di OUT a 1 ms e della costante di tempo RC.

{% include video-player.html src="/v4/videos/simulation-tutorials/spice/rc-transient.mp4" poster="/v4/videos/simulation-tutorials/spice/rc-transient.jpg" caption="Carica RC e costante di tempo." %}

[Guarda o scarica il video](/v4/videos/simulation-tutorials/spice/rc-transient.mp4).

### Circuito e risultati di riferimento
{: #circuit-and-reference-results}

![Circuito di carica RC](/v4/Images/simulation-tutorials/spice/rc-step-circuit.png)

![Curva calcolata di carica del condensatore](/v4/Images/simulation-tutorials/spice/rc-step-results.png)

## Perché l'uscita varia gradualmente invece di fare salti
{: #why-the-output-curves-rather-than-jumps}

La corrente del condensatore è `i = C × dv/dt`. Subito dopo la variazione dell'ingresso, il
condensatore è ancora vicino a 0 V, quindi ai capi di R1 compare quasi tutta la tensione d'ingresso. La
corrente iniziale è approssimativamente `1 V / 1 kΩ = 1 mA`. Man mano che il condensatore si carica,
la tensione ai capi del resistore e la corrente diminuiscono. L'uscita si avvicina a 1 V invece
di raggiungerlo istantaneamente.

La costante di tempo è `τ = R × C = 1 ms`. Per un gradino ideale e un condensatore inizialmente
scarico, `VOUT(t) = 1 − exp(−t/τ)` volt.

| Tempo trascorso dal gradino | OUT prevista |
| --- | --- |
| 1 ms = 1τ | 0.632 V |
| 2 ms = 2τ | 0.865 V |
| 3 ms = 3τ | 0.950 V |
| 5 ms = 5τ | 0.993 V |

La sorgente fornita sale in 1 µs, quindi è prevista una piccola differenza rispetto all'equazione del
gradino istantaneo. Usa il cursore del grafico o una misura **Valore (Value)**
a 1 ms. Una misura **Costante di tempo (Time constant)** con valore iniziale di 0 V e valore finale di 1 V dovrebbe
dare circa 1 ms. Una misura **Tempo di salita (Rise time)** usa l'intervallo dal 10% al 90%: il suo
valore atteso è `ln(9) × τ ≈ 2.197 ms`, non 1 ms.

## Durata e passo massimo rispondono a domande diverse
{: #duration-and-maximum-step-answer-different-questions}

La durata determina per quanto tempo viene eseguito l'esperimento. Il passo massimo limita
la distanza tra i punti temporali del solutore. Il solutore può usare passi più piccoli in prossimità dei
fronti o di eventi non lineari. Il numero di campioni, quindi, non deve necessariamente essere uguale alla
durata divisa per il passo massimo.

Se la durata è troppo breve, il regime stazionario non è visibile. Se il passo temporale è troppo grande,
i fronti e i picchi possono essere misurati male anche se il grafico sembra plausibile. Riduci
il passo massimo da 5 µs a 2.5 µs e confronta la lettura a 1 ms: un risultato stabile
dovrebbe variare pochissimo. Questa è una verifica della convergenza della misura, non
semplicemente una verifica che il solutore segnali di aver completato correttamente l'analisi.

## Condizioni iniziali ed energia
{: #initial-conditions-and-energy}

Di norma SPICE calcola un punto di funzionamento in continua prima di avviare l'analisi transitoria.
Selezionando **condizioni iniziali** si richiede il percorso alternativo di avvio con condizioni iniziali
(`uic`). Usalo intenzionalmente, con condizioni iniziali adeguate per condensatori/induttori;
non è una soluzione universale ai problemi di convergenza.
Questo esempio non ne ha bisogno perché il valore iniziale dell'ingresso è zero.

A 1 V il condensatore immagazzina `E = ½CV² = 0.5 µJ`. Durante la carica, R1 dissipa
energia e la sorgente fornisce sia l'energia immagazzinata sia quella dissipata. La potenza istantanea
e l'energia accumulata sono misure diverse: integra la potenza sull'intervallo scelto
per ottenere joule.

Prova 2.2 kΩ, prevedi una costante di tempo di 2.2 ms e porta la durata a 11 ms. Poi
ripristina R1 e dimezza C1: la costante di tempo dovrebbe dimezzarsi. Queste modifiche illustrano
come progettare un esperimento che distingua l'effetto di un componente da un artefatto
di rappresentazione grafica.

## Scaricare i circuiti della lezione
{: #download-the-lesson-circuits}

Gli stessi esempi sono già disponibili in **Apri esempio (Open Example)**. Per una copia indipendente, scarica un disegno `.dzn` e usa **File → Apri (Open)** in TinyCAD. Il file `.cir` associato è testo SPICE da esaminare o da usare con un simulatore esterno compatibile, non un disegno TinyCAD. I circuiti XSPICE richiedono Desktop per eseguire nuove simulazioni.

| Esempio | Disegno | Netlist |
| --- | --- | --- |
| rc-step | [Disegno TinyCAD](/v4/examples/simulation-tutorials/spice/rc-step.dzn) | [Testo SPICE](/v4/examples/simulation-tutorials/spice/rc-step.cir) |
