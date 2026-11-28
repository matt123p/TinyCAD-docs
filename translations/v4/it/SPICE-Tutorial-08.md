---
layout: default
title: 8. Measuring amplifier gain and bandwidth
---
# 8. Misurare il guadagno e la larghezza di banda dell’amplificatore
{: #measuring-amplifier-gain-and-bandwidth}

[Precedente](/v4/SPICE-Tutorial-07/) · [Indice](/v4/Simulation-Tutorials/) · [Successivo](/v4/SPICE-Tutorial-09/)

Gli esempi di questo capitolo sono inclusi in TinyCAD. Scegli **Apri esempio (Open Example) → Tutorial SPICE**, seleziona l’esempio indicato, quindi scegli **Apri disegno (Open Drawing)**. Non è necessario scaricare nulla.

Apri **amp-ac**. È l’amplificatore ricostruito, con ampiezza AC
pari a 1 su VIN e un’analisi AC da 1 Hz a 100 MHz, con 60 punti per decade.
L’ampio intervallo superiore rende visibile l’attenuazione alle alte frequenze del modello generico del transistor;
non dimostra che l’hardware originale funzioni in modo accurato alle frequenze RF.

Seleziona **Voltage gain** (guadagno di tensione), la traccia derivata salvata OUT/IN. Visualizza il modulo in dB
e la fase. Nei tuoi appunti, distingui le tensioni di nodo dal guadagno adimensionale.

![Guadagno e fase dell’amplificatore calcolati](/v4/Images/simulation-tutorials/spice/amp-ac-results.png)

## Interpreta il risultato prima di spiegarlo
{: #read-the-result-before-explaining-it}

Con RL = 8 Ω e la divisione elettrica di R6 impostata su 0.5, il guadagno di riferimento a 1 kHz è
di circa **0.892 V/V**, ovvero **−0.995 dB**, con fase approssimativamente invertita.
Anche il picco del modulo campionato è di circa 0.892. Le frequenze di taglio a mezza potenza rispetto
al picco si trovano intorno a **24 Hz** e **2.9 MHz**; questi valori arrotondati riflettono
l’analisi campionata e il modello generico scelto.

Non si tratta di frequenze di attraversamento a guadagno unitario. La larghezza di banda a −3 dB si misura rispetto
al guadagno in banda passante o al guadagno di picco dell’amplificatore, non necessariamente rispetto a 1 V/V. In
TinyCAD, nella misura di larghezza di banda denominata, seleziona OUT e IN e imposta il guadagno di riferimento su `peak` quando analizzi questa risposta con andamento a banda passante. Una misura di larghezza
di banda richiede che entrambi i punti di attraversamento rientrino nell’intervallo di frequenze acquisito.

## Perché il guadagno complessivo in tensione è inferiore a uno
{: #why-the-overall-voltage-gain-is-below-one}

VIN viene misurato prima del potenziometro del volume. La tensione del cursore si riduce
ulteriormente a causa dell’impedenza d’ingresso finita dell’amplificatore. Q1 fornisce quindi un guadagno
in tensione invertente. Q2 pilota un carico molto pesante da 8 Ω tramite C2, e la sua impedenza d’uscita
finita provoca un’ulteriore attenuazione. Il rapporto complessivo include tutti gli stadi.

Confronta BASE/IN, COLLECTOR/BASE e OUT/COLLECTOR come rapporti derivati separati.
Rispondono a domande diverse. Uno stadio può fornire guadagno in tensione mentre il
percorso completo dall’ingresso al carico presenta un guadagno inferiore all’unità. Un inseguitore di emettitore
può comunque fornire un utile guadagno di corrente anche quando il suo guadagno in tensione è inferiore a uno.

## Individua le cause dei limiti alle basse e alle alte frequenze
{: #find-the-causes-of-the-low--and-high-frequency-limits}

C1 e C2 sono condensatori di accoppiamento in serie. La loro reattanza aumenta alle basse
frequenze e quindi attenuano il segnale. La resistenza effettiva di C2 comprende
sia il carico sia l’impedenza d’uscita dello stadio; usare solo `1/(2π × 8 Ω × C2)`
non descrive completamente il circuito caricato. Alle alte frequenze, le capacità del transistor
e il tempo di transito nel modello riducono la risposta e modificano la fase.

Prova le seguenti modifiche controllate, ripristinando il valore originale dopo ciascuna:

1. Modifica RL da 8 Ω a 80 Ω. Confronta il guadagno in banda passante e la frequenza di taglio inferiore.
2. Raddoppia C2. Verifica se la frequenza di taglio inferiore si sposta quanto previsto nel caso in cui C2
   sia dominante; anche C1 e il carico possono incidere.
3. Modifica la divisione elettrica di R6. Registra separatamente il guadagno da IN e quello da BASE,
   così da non confondere l’attenuazione del volume con il guadagno dello stadio a transistor.
4. Aumenta i punti per decade in prossimità di una frequenza di attraversamento e verifica che la frequenza di taglio riportata
   si sia stabilizzata prima di indicare più cifre.

L’analisi AC prevede la risposta a una perturbazione sufficientemente piccola intorno al
punto di polarizzazione. Non limita l’ampiezza d’uscita all’escursione di tensione disponibile.
Il capitolo successivo usa un ingresso transitorio di ampiezza finita per individuare quando la previsione a piccolo segnale
non descrive più la forma d’onda effettiva.

## Scarica i circuiti della lezione
{: #download-the-lesson-circuits}

Gli stessi esempi sono già disponibili in **Apri esempio (Open Example)**. Per una copia indipendente, scarica un disegno `.dzn` e usa **File → Apri (Open)** in TinyCAD. Il file `.cir` di accompagnamento è testo SPICE da esaminare o da usare in un simulatore esterno compatibile, non un disegno TinyCAD. Per eseguire nuove simulazioni di circuiti XSPICE è necessaria la versione Desktop.

| Esempio | Disegno | Netlist |
| --- | --- | --- |
| amp-ac | [Disegno TinyCAD](/v4/examples/simulation-tutorials/spice/amp-ac.dzn) | [Testo SPICE](/v4/examples/simulation-tutorials/spice/amp-ac.cir) |
