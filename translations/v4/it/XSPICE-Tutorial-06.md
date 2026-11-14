---
layout: default
title: 6. Mixed-signal filtering and unknown states
---
# 6. Filtraggio a segnali misti e stati sconosciuti
{: #mixed-signal-filtering-and-unknown-states}

[Precedente](/v4/XSPICE-Tutorial-05/) · [Contenuti del corso](/v4/Simulation-Tutorials/)

Gli esempi di questo capitolo sono inclusi in TinyCAD. Scegli **Apri esempio (Open Example) → XSPICE and digital tutorial**, seleziona l'esempio indicato, quindi scegli **Apri disegno (Open Drawing)**. Non è necessario scaricare nulla.

Apri **logic-filter**. Un treno di impulsi da 0–5 V, 10 kHz
attraversa il buffer XSPICE e il ponte DAC, quindi pilota un filtro passa-basso SPICE fisico
 da 1 kΩ/1 µF. Il livello alto dura 25 µs in un periodo di 100 µs, quindi il suo
ciclo di lavoro nominale è circa il 25%. I fronti d'ingresso non ideali rendono il ciclo di lavoro
preciso, definito in base alle soglie, leggermente diverso.

![Circuito con filtro misto digitale e analogico](/v4/images/simulation-tutorials/xspice/logic-filter-circuit.png)
![PWM calcolata e uscita filtrata](/v4/images/simulation-tutorials/xspice/logic-filter-results.png)

Esegui l'analisi transitoria di 5 ms. Traccia A, Y e FILTERED. Il percorso digitale conserva la
funzione a impulsi; la rete RC ne calcola la media, mantenendo una certa ondulazione.
La media a lungo termine tende a `5 V × 0.25 ≈ 1.25 V`. Poiché τ = 1 ms,
la risposta all'avvio richiede diversi millisecondi.

## Misura correttamente l'acquisizione finita
{: #measure-the-finite-acquisition-honestly}

Nell'intervallo 4–5 ms, la media filtrata di riferimento è circa **1.242 V**, con
un'ondulazione picco-picco di circa **0.108 V** (circa 1.187–1.295 V). Non ha
ancora raggiunto del tutto la media ideale a lungo termine. Estendi la durata a 10 ms e confronta
l'ultimo intervallo di 1 ms. Una costante di tempo del filtro maggiore riduce l'ondulazione, ma aumenta
tempo di assestamento, proprio come nelle lezioni sui circuiti RC analogici.

Questo è un modello utile per comprendere la conversione da PWM a tensione. Non è
un modello completo dell'uscita di un microcontrollore: il ponte DAC ha una capacità di pilotaggio dell'uscita idealizzata
e non presenta un confine esplicito per la corrente di alimentazione. Aggiungi una resistenza di pilotaggio adeguata
o un modello del dispositivo quando sono importanti la corrente di carico e le perdite dello stadio di uscita.

## Esplora un livello logico indefinito
{: #explore-an-undefined-logic-level}

Apri **logic-unknown**. Il suo ingresso PWL è mantenuto a
0 V, poi a 2 V e infine a 5 V. Esegui una simulazione di 3 µs e osserva il plateau intermedio.

![Rappresentazione analogica calcolata di uno stato digitale indefinito](/v4/images/simulation-tutorials/xspice/logic-unknown-results.png)

Le soglie bassa e alta del ponte ADC sono 1 V e 3 V. Il plateau a 2 V è compreso
tra queste soglie, quindi l'ingresso a eventi è indefinito. Questo stato sconosciuto si propaga
attraverso il buffer. Il ponte DAC lo converte in **2.5 V** perché il relativo parametro `out_undef`
richiede esplicitamente questo livello di visualizzazione.

Non interpretare 2.5 V come una previsione che un gate fisico si stabilizzi a
metà dell'alimentazione. È una codifica scelta per rendere visibile lo stato sconosciuto su un grafico
analogico. Il modello inoltre non riproduce il chatter delle soglie indotto dal rumore né
la fisica della metastabilità. Un ricevitore d'ingresso reale può richiedere
isteresi, una famiglia di soglie specificata e un modello elettrico più dettagliato.

## Lista di controllo per i segnali misti
{: #a-mixed-signal-checklist}

Prima di considerare attendibile un esperimento, individua quali connessioni trasportano tensioni e
correnti e quali trasportano eventi. Individua ogni conversione tra domini.
Registra le soglie, la mappatura degli stati indefiniti, i ritardi di propagazione, i tempi dei
fronti d'uscita e le condizioni iniziali. Verifica sia la funzione a regime sia il comportamento
nelle transizioni. Usa un'acquisizione sufficientemente lunga da includere i cicli o l'intervallo di assestamento
richiesti dalla misura.

Lo stesso approccio si applica a un comparatore che pilota una logica digitale, a un clock diviso che controlla un interruttore o a una
forma d'onda logica che pilota un filtro analogico.
Applicazioni XSPICE più complesse, tra cui gli anelli ad aggancio di fase e gli esempi delta-sigma,
sono elencate nelle [istruzioni ufficiali XSPICE HOWTO](https://ngspice.sourceforge.io/xspicehowto.html).
Inizia convalidando separatamente ciascun dominio e ciascuna interfaccia prima di assemblare
il sistema completo.

Hai utilizzato porte funzionali, glitch, memoria, reset, conteggio e un percorso analogico/digitale
misto. Per la potenza elettrica, il comportamento non lineare degli amplificatori
e la risposta in frequenza, torna al [corso SPICE](/v4/SPICE-Tutorial-01/).

## Scarica i circuiti della lezione
{: #download-the-lesson-circuits}

Gli stessi esempi sono già disponibili in **Apri esempio (Open Example)**. Per una copia indipendente, scarica un disegno `.dzn` e usa **File → Apri (Open)** in TinyCAD. Il file `.cir` associato è testo SPICE da esaminare o da usare con un simulatore esterno compatibile, non un disegno TinyCAD. Per eseguire nuove simulazioni di circuiti XSPICE è necessaria la versione Desktop.

| Esempio | Disegno | Netlist |
| --- | --- | --- |
| logic-filter | [Disegno TinyCAD](/v4/examples/simulation-tutorials/xspice/logic-filter.dzn) | [Testo SPICE](/v4/examples/simulation-tutorials/xspice/logic-filter.cir) |
| logic-unknown | [Disegno TinyCAD](/v4/examples/simulation-tutorials/xspice/logic-unknown.dzn) | [Testo SPICE](/v4/examples/simulation-tutorials/xspice/logic-unknown.cir) |
