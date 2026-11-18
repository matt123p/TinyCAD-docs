---
layout: default
title: 9. Amplifier waveform, clipping and power usage
---
# 9. Forma d’onda dell’amplificatore, clipping e consumo di potenza
{: #amplifier-waveform-clipping-and-power-usage}

[Precedente](/v4/SPICE-Tutorial-08/) · [Indice](/v4/Simulation-Tutorials/) · [Successivo](/v4/SPICE-Tutorial-10/)

Gli esempi di questo capitolo sono inclusi in TinyCAD. Scegli **Apri esempio (Open Example) → Tutorial SPICE (SPICE tutorial)**, seleziona l’esempio indicato, quindi scegli **Apri disegno (Open Drawing)**. Non è necessario scaricare nulla.

Apri **amp-small-signal**. VIN fornisce una sinusoide
con picco di 10 mV e frequenza di 1 kHz. L’analisi transitoria dura 12 ms, con un passo massimo di 2 µs.
Confronta IN e OUT, quindi misura gli ultimi quattro cicli, da 8 ms a 12 ms.

![Forme d’onda misurate dell’amplificatore a piccolo segnale](/v4/images/simulation-tutorials/spice/amp-small-signal-results.png)

Il risultato AC prevede un picco di circa 8.92 mV su OUT, invertito rispetto all’ingresso.
L’analisi transitoria restituisce circa da −8.87 a +8.99 mV nella finestra di misurazione,
con **6.304 mV RMS**. La piccola differenza tra i picchi positivo e negativo
riflette il modello non lineare e gli effetti transitori residui.

## Calcolare la potenza sul carico e il consumo dell’alimentazione
{: #calculate-load-power-and-supply-consumption}

Per il carico puramente resistivo RL, la potenza istantanea è `pL(t) = vOUT(t)² / 8`.
La potenza media sul carico è quindi pari a `VOUT,RMS² / 8`, includendo l’eventuale contributo CC
nell’intervallo selezionato. Con il piccolo segnale d’ingresso, è circa **4.97 µW**.

La potenza erogata dall’alimentazione è `−12 × mean(i(VCC))`, circa **264.61 mW**.
La maggior parte della potenza viene consumata nel circuito polarizzato, anche quando il segnale audio è molto piccolo.
A questo livello d’ingresso, il rapporto tra la potenza sul carico e quella dell’alimentazione è solo circa **0.00188%**.
Questa è l’efficienza elettrica per i limiti del sistema e la finestra temporale scelti, non un’efficienza
acustica né una valutazione generale del circuito.

In TinyCAD, aggiungi le misurazioni di potenza dei componenti VCC e RL, quindi scegli **Media (Mean)**
con Da/A impostati su 8 ms e 12 ms. Una sorgente che eroga potenza ha potenza assorbita negativa;
considerane l’opposto come potenza d’ingresso erogata. L’**Integrale (Integral)** della potenza dà
l’energia in joule. Una metrica di corrente o potenza non disponibile per un modello non deve essere
sostituita con uno zero ipotizzato.

## Aumentare l’ingresso finché la previsione lineare non è più valida
{: #increase-input-until-the-linear-prediction-fails}

Apri **amp-clipping**. Cambia solo l’ampiezza di VIN,
portandola a un picco di 500 mV. Un’estrapolazione lineare prevederebbe un picco di circa 446 mV su OUT
in entrambe le direzioni. La forma d’onda calcolata non si comporta così.

![Uscita calcolata asimmetrica a grande segnale](/v4/images/simulation-tutorials/spice/amp-clipping-results.png)

Nella stessa finestra da 8 a 12 ms, l’uscita varia approssimativamente da
**−0.162 a +0.389 V**, con **0.2126 V RMS**. Il consumo dell’alimentazione è circa
**315.23 mW**; la potenza totale sul carico resistivo è **5.65 mW**, per un’efficienza
elettrica di circa **1.79%** in questa finestra. Il valore medio dell’uscita è circa
31 mV in questa acquisizione di durata finita. Per calcolare la potenza sul carico della sola componente AC, sottrai il valore medio
prima di elevare al quadrato: usa il valore RMS dell’ondulazione, non il valore RMS totale.

Il seguidor di emettitore può erogare attivamente corrente, ma il suo percorso di
scarica è limitato dalla rete di polarizzazione. La resistenza di carico molto bassa rende evidente
questa asimmetria. Non definire semplicemente ogni tratto apparentemente piatto come «raggiungimento del
binario di alimentazione»: esamina EMITTER, COLLECTOR e le correnti dei dispositivi per identificare il meccanismo.

## Rendere la misurazione attendibile
{: #make-the-measurement-defensible}

Usa cicli completi, indica la finestra temporale ed escludi l’avvio se stai studiando
il funzionamento a regime. Ripeti l’analisi con una simulazione più lunga per verificare se la media e la potenza della finestra si stabilizzano.
Riduci il passo massimo e confronta i valori estremi e RMS; i campioni del risolutore
non sono in genere equidistanti, quindi usa calcoli ponderati nel tempo.
Una media aritmetica di tutti i valori campionati può dare troppo peso ai bordi,
dove il risolutore acquisisce un numero maggiore di campioni.

Le forme d’onda distorte non possono essere convertite da valore di picco a RMS usando `peak/√2`.
Questa formula si applica a una sinusoide. Analogamente, la potenza elettrica di un transistor
non consente di prevedere automaticamente la temperatura: la resistenza termica, le condizioni ambientali
e i modelli dipendenti dalla temperatura sono informazioni aggiuntive.

Prova ad aumentare RL a 80 Ω e confronta la simmetria della forma d’onda, il guadagno di tensione e
la potenza erogata. Una maggiore escursione di tensione non comporta necessariamente più potenza,
perché è cambiata anche la resistenza di carico.

## Scaricare i circuiti della lezione
{: #download-the-lesson-circuits}

Gli stessi esempi sono già disponibili in **Apri esempio (Open Example)**. Per una copia indipendente, scarica un disegno `.dzn` e usa **File → Apri (Open)** in TinyCAD. Il file `.cir` associato è testo SPICE da consultare o usare con un simulatore esterno compatibile, non un disegno TinyCAD. Per eseguire nuove simulazioni di circuiti XSPICE è necessaria la versione Desktop.

| Esempio | Disegno | Netlist |
| --- | --- | --- |
| amp-small-signal | [Disegno TinyCAD](/v4/examples/simulation-tutorials/spice/amp-small-signal.dzn) | [Testo SPICE](/v4/examples/simulation-tutorials/spice/amp-small-signal.cir) |
| amp-clipping | [Disegno TinyCAD](/v4/examples/simulation-tutorials/spice/amp-clipping.dzn) | [Testo SPICE](/v4/examples/simulation-tutorials/spice/amp-clipping.cir) |
