---
layout: default
title: 5. Counters and divided clocks
---
# 5. Contatori e clock divisi
{: #counters-and-divided-clocks}

[Precedente](/v4/XSPICE-Tutorial-04/) · [Indice](/v4/Simulation-Tutorials/) · [Successivo](/v4/XSPICE-Tutorial-06/)

Gli esempi di questo capitolo sono inclusi in TinyCAD. Scegli **Apri esempio (Open Example) → XSPICE and digital tutorial**, seleziona l'esempio indicato, quindi scegli **Apri disegno (Open Drawing)**. Non è necessario alcun download.

Apri **logic-counter**. X1 contiene quattro flip-flop D. Ciascuno riporta la propria uscita invertita all'ingresso D, in modo da commutare quando riceve il clock. Il primo stadio riceve CLK; gli stadi successivi sono pilotati dall'uscita invertita dello stadio precedente. Si ottiene così un contatore binario asincrono crescente.

![Circuito di prova del contatore a quattro bit](/v4/images/simulation-tutorials/xspice/logic-counter-circuit.png)
![Uscite del clock diviso calcolate](/v4/images/simulation-tutorials/xspice/logic-counter-results.png)

Il periodo di ingresso è di 1 µs. Il reset azzera gli stadi poco dopo l'avvio e il primo fronte di conteggio si verifica intorno a 0,5 µs. Esegui la simulazione transitoria salvata di 18 µs. Leggi ciascun valore dopo che le transizioni asincrone si sono assestate, ad esempio a 0,8 µs, 1,8 µs, 2,8 µs e così via.

La sequenza decimale prevista è:

```text
1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 0
```

Per l'ordine dei bit Q3 Q2 Q1 Q0, i primi quattro valori sono 0001, 0010, 0011 e 0100.
Converti usando `count = Q0 + 2Q1 + 4Q2 + 8Q3`, considerando in questo grafico come logico uno una tensione assestata superiore a 2,5 V.

## Divisione di frequenza
{: #frequency-division}

Q0 commuta una volta per ogni ciclo di ingresso, quindi il suo periodo completo comprende due cicli di ingresso. Q1 divide per quattro, Q2 per otto e Q3 per sedici.

| Uscita | Periodo | Frequenza |
| --- | --- | --- |
| Q0 | 2 µs | 500 kHz |
| Q1 | 4 µs | 250 kHz |
| Q2 | 8 µs | 125 kHz |
| Q3 | 16 µs | 62.5 kHz |

L'acquisizione fornita di 18 µs mostra il riporto, ma potrebbe non contenere due fronti di salita completi di Q3 dopo il reset. Estendi la durata a 35 µs prima di richiedere una misura della frequenza basata sul primo ciclo completo per quell'uscita. È corretto che la frequenza risulti non disponibile quando l'acquisizione non contiene dati sufficienti.

## Perché è importante la propagazione asincrona
{: #why-ripple-matters}

I bit non cambiano simultaneamente. Ogni stadio reagisce dopo la transizione dell'uscita dello stadio precedente. Ingrandisci la transizione da sette a otto: mentre il riporto si propaga compaiono temporaneamente combinazioni intermedie dei bit. Un decodificatore combinatorio collegato a quei bit potrebbe quindi generare glitch.

Questa architettura è diversa da quella di un contatore sincrono, in cui tutti gli stadi condividono lo stesso clock. Una sequenza di conteggio corretta una volta assestata non rende il contatore asincrono adatto a ogni applicazione sensibile ai tempi. Usa questo esempio per distinguere il conteggio funzionale dai tempi di transizione.

Prova a raddoppiare il periodo del clock. La sequenza di conteggio resta invariata, ma tutte le frequenze di uscita si dimezzano; i ritardi di propagazione configurati restano fissi. Poi sposta il reset a metà della simulazione e verifica che tutti i bit vengano azzerati prima che riprenda il conteggio normale. Registra la temporizzazione del reset e attendi che i ponti di reset e DAC si assestino prima di campionare uno stato.

Per una prova di progetto, definisci sia un requisito funzionale (conteggio assestato corretto) sia un requisito temporale (ritardo massimo di assestamento consentito dopo il clock). Rispondono a domande diverse e vanno verificati separatamente.

## Scaricare i circuiti della lezione
{: #download-the-lesson-circuits}

Gli stessi esempi sono già disponibili in **Apri esempio (Open Example)**. Per ottenere una copia indipendente, scarica un disegno `.dzn` e usa **File → Apri (Open)** in TinyCAD. Il file `.cir` complementare è testo SPICE da esaminare o da usare con un simulatore esterno compatibile, non un disegno TinyCAD. Per eseguire nuove simulazioni di circuiti XSPICE è necessaria la versione Desktop.

| Esempio | Disegno | Netlist |
| --- | --- | --- |
| logic-counter | [Disegno TinyCAD](/v4/examples/simulation-tutorials/xspice/logic-counter.dzn) | [Testo SPICE](/v4/examples/simulation-tutorials/xspice/logic-counter.cir) |
