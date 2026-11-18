---
layout: default
title: "5. AC analysis: gain, phase and an RC filter"
---
# 5. Analisi AC: guadagno, fase e un filtro RC
{: #ac-analysis-gain-phase-and-an-rc-filter}

[Precedente](/v4/SPICE-Tutorial-04/) · [Indice](/v4/Simulation-Tutorials/) · [Successivo](/v4/SPICE-Tutorial-06/)

Gli esempi di questo capitolo sono inclusi in TinyCAD. Scegli **Apri esempio → Esercitazione SPICE**, seleziona l'esempio desiderato, quindi scegli **Apri disegno**. Non è necessario alcun download.

Apri **rc-ac**. Utilizza la stessa rete da 1 kΩ/1 µF della lezione sulla
carica, ma pone una domanda diversa: quanta parte di un piccolo segnale
sinusoidale raggiunge OUT a ciascuna frequenza?

La sorgente ha un'ampiezza AC di 1 V. L'analisi AC salvata va da 1 Hz a 100 kHz,
con 100 punti per decade. Eseguila, seleziona la traccia derivata **OUT / IN** e
visualizza modulo, dB e fase. Usa un asse delle frequenze logaritmico.


## Video: risposta AC e frequenza di taglio
{: #video-ac-response-and-cutoff}

Verifica della configurazione AC, lettura della frequenza di taglio e passaggio tra modulo, decibel e fase.

{% include video-player.html src="/v4/videos/simulation-tutorials/spice/ac-response.mp4" poster="/v4/videos/simulation-tutorials/spice/ac-response.jpg" caption="Risposta AC e frequenza di taglio." %}

[Guarda o scarica il video](/v4/videos/simulation-tutorials/spice/ac-response.mp4).

### Circuito e risultati di riferimento
{: #circuit-and-reference-results}

![Risposta in modulo e fase calcolata](/v4/images/simulation-tutorials/spice/rc-ac-results.png)

## Interpretare il risultato complesso
{: #interpret-the-complex-result}

L'analisi AC linearizza il circuito nel suo punto di lavoro DC e calcola le
ampiezze complesse. Non è una simulazione transitoria in cui un generatore
sinusoidale cambia gradualmente frequenza. Per questo circuito,

`H(jω) = VOUT / VIN = 1 / (1 + jωRC)`.

Il modulo indica il rapporto tra le ampiezze; la fase indica la temporizzazione
relativa nell'arco di un ciclo. In questo caso, l'uscita è in ritardo rispetto
all'ingresso. La frequenza di taglio è
`fc = 1 / (2πRC) = 159.155 Hz`. Alla frequenza di taglio, il modulo è `1/√2 = 0.7071`
e la fase è −45°. Il guadagno di tensione in decibel è `20 log10(|H|)`, pari a
−3.0103 dB alla frequenza di taglio.

| Frequenza | Guadagno approssimativo | Fase approssimativa |
| --- | --- | --- |
| 10 Hz | 0.9980, −0.017 dB | −3.60° |
| 159.155 Hz | 0.7071, −3.01 dB | −45° |
| 1 kHz | 0.1572, −16.07 dB | −80.96° |

La misura **Cutoff** salvata usa OUT rispetto a IN e un guadagno di riferimento
pari a 1. Dovrebbe restituire circa 159.15 Hz. L'interpolazione dei campioni può
far differire le ultime cifre dal risultato dell'equazione.

## Evitare tre errori comuni
{: #avoid-three-common-mistakes}

Primo: rappresentare solo la componente reale non equivale a rappresentare
l'ampiezza. Per un risultato complesso, usa il modulo o i dB. Secondo: un guadagno
di −3 dB non corrisponde a un rapporto di tensione di −3: i decibel esprimono
logaritmicamente un modulo positivo. Terzo: in un guadagno reale invertente, il
segno meno appartiene alla fase, non a un modulo negativo.

Usando AC 1, in questo semplice caso la tensione di uscita è numericamente uguale
al guadagno. Tuttavia, rappresentare OUT/IN è più robusto: esprime comunque il
guadagno quando cambia l'ampiezza d'ingresso. Il risultato AC di un amplificatore
non lineare resta un risultato a piccoli segnali anche se l'ampiezza AC è impostata
a un valore elevato. Non prevede il clipping né la potenza di uscita fisica.

## Confrontare le scelte dei componenti
{: #compare-component-choices}

In **Regolazione / Sweep**, il controllo R1 fornito offre uno sweep di tipo lista
con 1 kΩ, 2.2 kΩ e 4.7 kΩ. Esegui lo sweep e confronta le curve e la tabella delle
frequenze di taglio. I valori attesi sono 159.15, 72.34 e 33.86 Hz. La regolazione
temporanea non modifica la resistenza salvata finché non si usa **Applica**.

Un filtro RC può attenuare il ripple di commutazione prima di un ADC o ridurre
il rumore ad alta frequenza di un sensore. Rallenta anche il segnale desiderato.
Confronta la risposta in frequenza di questo capitolo con il tempo di carica più
lungo causato dall'aumento di R1 nel capitolo precedente: sono due aspetti dello
stesso compromesso fisico.

Riferimento: anche l'[esempio AC dell'esercitazione introduttiva di ngspice](https://ngspice.sourceforge.io/ngspice-tutorial.html)
distingue l'eccitazione AC dalla forma d'onda della sorgente transitoria.

## Scaricare i circuiti della lezione
{: #download-the-lesson-circuits}

Gli stessi esempi sono già disponibili in **Apri esempio**. Per una copia
indipendente, scarica un disegno `.dzn` e usa **File → Apri** in TinyCAD. Il file `.cir` associato è testo SPICE da consultare o usare con un simulatore esterno compatibile, non un disegno TinyCAD. Per eseguire nuovi circuiti XSPICE è necessario Desktop.

| Esempio | Disegno | Netlist |
| --- | --- | --- |
| rc-ac | [Disegno TinyCAD](/v4/examples/simulation-tutorials/spice/rc-ac.dzn) | [Testo SPICE](/v4/examples/simulation-tutorials/spice/rc-ac.cir) |
