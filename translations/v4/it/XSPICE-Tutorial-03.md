---
layout: default
title: 3. Propagation delay and logic hazards
---
# 3. Ritardo di propagazione e hazard logici
{: #propagation-delay-and-logic-hazards}

[Precedente](/v4/XSPICE-Tutorial-02/) · [Indice](/v4/Simulation-Tutorials/) · [Successivo](/v4/XSPICE-Tutorial-04/)

Gli esempi di questo capitolo sono inclusi in TinyCAD. Scegli **Apri esempio (Open Example) → XSPICE and digital tutorial**, seleziona l'esempio indicato, quindi scegli **Apri disegno (Open Drawing)**. Non è necessario scaricare nulla.

Apri **logic-hazard**. All'interno di X1, una copia di A va
direttamente a una porta AND. Un'altra passa attraverso un invertitore prima di raggiungere l'altro ingresso della porta AND. L'espressione booleana è `A AND NOT A`, che è sempre zero
una volta esauriti i transitori. Tuttavia, il transitorio può contenere un impulso.

![Impulsi di hazard calcolati](/v4/images/simulation-tutorials/xspice/logic-hazard-results.png)

L'invertitore ha un ritardo di 100 ns e la porta AND ha un ritardo di 10 ns. In corrispondenza di un fronte di salita dell'ingresso, il percorso diretto diventa alto mentre il percorso invertito rimane alto
finché l'invertitore non reagisce. Per un breve intervallo entrambi gli ingressi della porta AND sono alti,
quindi compare un impulso positivo in uscita. In questo modello volutamente
semplice, la sua durata è di circa 100 ns. Sul fronte di ingresso opposto, i due percorsi attraversano un intervallo
durante il quale entrambi gli ingressi della porta AND sono bassi, quindi non si produce lo stesso impulso positivo.

## Misurare invece di dedurre i tempi dai pixel
{: #measure-rather-than-infer-timing-from-pixels}

Esegui il transitorio salvato di 3 µs con passo massimo di 2 ns. Ingrandisci un fronte di salita
vicino a 0,5 µs. Usa una soglia di 2,5 V per misurare l'attraversamento dell'ingresso, l'attraversamento dell'uscita
e la durata dell'impulso in uscita. La misura **Ritardo (Delay)** di TinyCAD calcola il primo attraversamento crescente dell'uscita meno il primo attraversamento crescente del riferimento nella finestra selezionata. La misura **Larghezza impulso (Pulse width)** richiede che nella finestra sia presente un impulso completo.

Il ritardo complessivo da ingresso analogico a uscita analogica comprende l'attraversamento della soglia,
il tempo di risposta del ponte ADC, il ritardo della porta e il tempo di transizione del DAC. Non è identico al parametro `rise_delay` di una singola porta. Scegli soglie corrispondenti quando confronti le misure
e indica l'intervallo usato.

## Distinguere tre grandezze temporali diverse
{: #separate-three-different-time-quantities}

| Grandezza | Significato |
| --- | --- |
| Ritardo di propagazione | Tempo che intercorre tra un evento di ingresso che attiva il circuito e il corrispondente evento in uscita |
| Tempo di salita/discesa | Tempo impiegato da una transizione analogica per passare tra livelli specificati |
| Periodo | Tempo tra ripetizioni della forma d'onda |

Una transizione ideale a eventi può essere istantanea nel suo dominio digitale,
mentre il ponte DAC produce una pendenza analogica finita. Un passo temporale più piccolo nel grafico non riduce il ritardo di propagazione configurato per la porta.

In una copia del modello di X1, raddoppia a 200 ns il ritardo dell'invertitore e ripeti la simulazione. L'impulso dovrebbe allargarsi in modo corrispondente. Poi aumenta notevolmente il passo massimo
e confronta quanto riesce a risolvere il grafico. Il risolutore potrebbe comunque inserire punti correlati agli eventi,
ma un'impostazione grossolana non è una strategia affidabile per misurare fronti analogici brevi. Ripristina 2 ns e verifica che la durata misurata sia stabile.

Questa è una dimostrazione di un hazard, non un generatore di impulsi fisico consigliato.
I ritardi reali della logica variano in funzione del processo, della tensione, della temperatura e del carico. Un impulso
che compare in modo affidabile in una simulazione con ritardi fissi può scomparire o cambiare durata
nell'hardware. Usa questo test per individuare la sensibilità temporale, quindi scegli un
progetto con requisiti temporali espliciti e modelli adeguati.

## Scaricare i circuiti della lezione
{: #download-the-lesson-circuits}

Gli stessi esempi sono già disponibili in **Apri esempio (Open Example)**. Per una copia indipendente, scarica un disegno `.dzn` e usa **File → Apri (Open)** in TinyCAD. Il file `.cir` corrispondente è testo SPICE da esaminare o usare con un simulatore esterno compatibile, non un disegno TinyCAD. Per eseguire nuove simulazioni di circuiti XSPICE è necessaria la versione Desktop.

| Esempio | Disegno | Netlist |
| --- | --- | --- |
| logic-hazard | [Disegno TinyCAD](/v4/examples/simulation-tutorials/xspice/logic-hazard.dzn) | [Testo SPICE](/v4/examples/simulation-tutorials/xspice/logic-hazard.cir) |
