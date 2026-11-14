---
layout: default
title: 4. D flip-flops, clocks and reset
---
# 4. Flip-flop D, clock e reset
{: #d-flip-flops-clocks-and-reset}

[Precedente (Previous)](/v4/XSPICE-Tutorial-03/) · [Indice (Contents)](/v4/Simulation-Tutorials/) · [Successivo (Next)](/v4/XSPICE-Tutorial-05/)

Gli esempi di questo capitolo sono inclusi in TinyCAD. Scegli **Apri esempio (Open Example) → XSPICE e tutorial digitale**, seleziona l'esempio indicato, quindi scegli **Apri disegno (Open Drawing)**. Non è necessario scaricare nulla.

Apri **logic-dff**. Fornisce stimoli analogici separati
per D, CLK e RESET. All'interno di X1, i ponti alimentano un flip-flop D XSPICE;
Q e NQ vengono riconvertite in uscite analogiche per la visualizzazione dei grafici.

![Circuito di prova del flip-flop D](/v4/images/simulation-tutorials/xspice/logic-dff-circuit.png)
![Clock, dati, reset e Q calcolati](/v4/images/simulation-tutorials/xspice/logic-dff-results.png)

Esegui l'analisi transitoria di 8 µs. A ogni fronte di salita del clock, Q acquisisce D e poi mantiene
lo stato tra un fronte e l'altro. NQ ne è il complemento una volta esaurito il ritardo di propagazione. Il
primo fronte di salita del clock è vicino a 0,5 µs. D è già alto, quindi Q diventa alto
dopo il ritardo clock-uscita del modello. In questo esempio attivato sul fronte positivo, i fronti di discesa del clock non acquisiscono nuovi
dati.

## Leggere l'interfaccia effettiva del modello
{: #read-the-actual-model-interface}

L'istanza interna è:

```spice
Aff dd dc NULL dr dq dn flip
.model flip d_dff(ic=0 clk_delay=20n reset_delay=20n
+ rise_delay=5n fall_delay=5n)
```

Le sue porte sono dati, clock, set asincrono, reset asincrono, uscita e
uscita invertita. `NULL` lascia inutilizzato l'ingresso set opzionale. Lo stato iniziale
è impostato esplicitamente a zero. L'ordine delle porte è un contratto del modello; la posizione dei pin sul
blocco visibile non lo definisce da sola.

## Verificare il reset asincrono
{: #test-asynchronous-reset}

RESET diventa alto vicino a 6 µs per circa 0,5 µs. Q viene azzerato senza attendere il successivo
fronte di salita del clock. Mentre il reset è attivo, esamina l'uscita prima di interpretare
il comportamento del clock. Dopo il rilascio del reset, i successivi fronti di clock riprendono l'acquisizione dei
dati. Questo esempio verifica il reset separatamente dalla normale forma d'onda di D.

Usa una breve finestra di misura attorno al primo fronte di acquisizione per misurare
il ritardo clock-Q a 2,5 V. Il ritardo analogico misurato include i ponti,
non solo `clk_delay`. Usa un'altra finestra attorno al reset per esaminare l'azzeramento asincrono.
Evita di chiedere a un'unica misura sul primo fronte di riassumere diversi
eventi di attivazione.

## Stato iniziale e ipotesi su setup/hold
{: #initial-state-and-setuphold-assumptions}

Impostare `ic=0` rende ripetibile questo tutorial. In un progetto in cui lo stato effettivo all'accensione
non è specificato, presumere un comodo zero iniziale può nascondere la necessità di un reset.
Prova un impulso di reset esplicito all'avvio e confrontalo con
l'affidarsi all'impostazione delle condizioni iniziali del modello.

Sposta poi una transizione dei dati vicino a un fronte di clock. Osserva come il modello funzionale
ordina gli eventi, ma non considerare un risultato digitale pulito come prova che un dispositivo
reale rispetti i tempi di setup e hold. Questo semplice modello funzionale non è un
modello di metastabilità a livello di transistor e non determina una probabilità di
risoluzione della metastabilità. I vincoli temporali del produttore e un modello del dispositivo
adeguato restano input distinti per un'analisi dei tempi elettrici.

Un caso di prova registrato utile contiene la forma d'onda dei dati, la convenzione per i fronti del clock,
la polarità e la temporizzazione del reset, l'ipotesi sullo stato iniziale, la sequenza acquisita prevista
e la soglia di misura. È più informativo di una semplice schermata di Q.

## Scaricare i circuiti della lezione
{: #download-the-lesson-circuits}

Gli stessi esempi sono già disponibili in **Apri esempio (Open Example)**. Per ottenere una copia indipendente, scarica un disegno `.dzn` e usa **File → Apri (Open)** in TinyCAD. Il file complementare `.cir` è testo SPICE da consultare o utilizzare con un simulatore esterno compatibile, non un disegno TinyCAD. Per eseguire da zero circuiti XSPICE è necessaria la versione Desktop.

| Esempio | Disegno | Netlist |
| --- | --- | --- |
| logic-dff | [Disegno TinyCAD](/v4/examples/simulation-tutorials/xspice/logic-dff.dzn) | [Testo SPICE](/v4/examples/simulation-tutorials/xspice/logic-dff.cir) |
