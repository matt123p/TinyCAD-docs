---
layout: default
title: 3. Choosing and configuring signal generators
---
# 3. Scelta e configurazione dei generatori di segnale
{: #choosing-and-configuring-signal-generators}

[Precedente](/v4/SPICE-Tutorial-02/) · [Indice](/v4/Simulation-Tutorials/) · [Successivo](/v4/SPICE-Tutorial-04/)

Gli esempi di questo capitolo sono inclusi in TinyCAD. Scegli **Apri esempio → Tutorial SPICE**, seleziona l'esempio indicato, quindi scegli **Apri disegno**. Non è necessario scaricare nulla.

Un segnale di stimolo descrive ciò che pilota il circuito. Seleziona il corpo di una sorgente sul foglio Circuito per aprirne le impostazioni. **Tipo di segnale** modifica la forma d'onda e mostra i parametri pertinenti. L'anteprima mostra la forma d'onda programmata; la simulazione calcola cosa accade quando il circuito carica quella sorgente.

Tutti i disegni seguenti sono pronti per un'analisi transitoria di 5 ms. Ogni sorgente di tensione pilota un carico da 1 kΩ. Usali per imparare un'impostazione alla volta prima di applicare una forma d'onda a un circuito più complesso.

| Disegno | Segnale di stimolo salvato | Comportamento previsto |
| --- | --- | --- |
| **source-dc** (CC) | 5 V | Tensione costante di 5 V e corrente di carico di 5 mA |
| **source-sine** (Sinusoidale) | Offset di 1 V, ampiezza di picco di 2 V, 1 kHz | Da −1 a +3 V, periodo di 1 ms |
| **source-pulse** (Impulso) | Da 0 a 5 V, salita/discesa di 10 µs, plateau alto di 300 µs, periodo di 1 ms | Impulsi ripetitivi con fronti non ideali |
| **source-triangle** (Triangolare) | Da −1 a +1 V, periodo di 1 ms | Rampe lineari di salita e discesa |
| **source-pwl** (Lineare a tratti) | 0 V fino a 1 ms, rampa fino a 3 V entro 2 ms, mantenimento fino a 3 ms, discesa entro 4 ms | Sequenza programmata di avvio e arresto |
| **source-exponential** (Esponenziale) | Da 0 a 5 V, salita con inizio a 1 ms, discesa con inizio a 3 ms | Transizioni esponenziali con costanti di tempo di 300 µs e 500 µs |
| **source-fm** (FM) | Ampiezza di 1 V, portante di 5 kHz, modulazione di 500 Hz, indice 2 | Ampiezza costante con frequenza istantanea variabile |
| **source-current** (Impulso di corrente) | Da 0 a 1 mA su un carico di ritorno da 1 kΩ | Da circa 0 a −1 V con l'orientamento della sorgente fornito |


Questi sono grafici del risolutore ottenuti dai file forniti. Il risultato della sorgente di corrente è negativo perché la sorgente assorbe corrente da OUT verso massa e il resistore fornisce il percorso di ritorno. Inverti la sorgente se è necessaria una tensione di carico positiva. Una sorgente ideale di corrente impone la corrente; la rete determina la tensione ai suoi terminali. Non dispone di un limite automatico della tensione di conformità.

## Video: impostazioni della sorgente e anteprima della forma d'onda
{: #video-source-settings-and-waveform-preview}

Modifica dell'offset, dell'ampiezza di picco e della frequenza sinusoidali, seguita da una nuova esecuzione dell'analisi transitoria.

{% include video-player.html src="/v4/videos/simulation-tutorials/spice/source-settings.mp4" poster="/v4/videos/simulation-tutorials/spice/source-settings.jpg" caption="Impostazioni della sorgente e anteprima della forma d'onda." %}

[Guarda o scarica il video](/v4/videos/simulation-tutorials/spice/source-settings.mp4).

### Circuito e risultati di riferimento
{: #circuit-and-reference-results}

![Esempi di forme d'onda misurate](/v4/images/simulation-tutorials/spice/source-waveforms.png)

## Ampiezza, offset e temporizzazione
{: #amplitude-offset-and-timing}

Per una sinusoide, `v(t) = offset + amplitude × sin(2πft + phase)` prima di considerare il ritardo e lo smorzamento opzionali. L'ampiezza è un valore di **picco**, non picco-picco né RMS. Una sinusoide con offset nullo e picco di 2 V ha 4 V picco-picco e 1,414 V RMS. Con un offset di 1 V, il suo valore RMS totale diventa `sqrt(1² + 2²/2) = 1.732 V`.

La larghezza dell'impulso descrive il plateau alto; i fronti non ideali influenzano la larghezza misurata a una determinata soglia. Per l'impulso fornito, la durata oltre 2,5 V è di circa 310 µs, con un duty cycle di circa il 31%. Evita fronti a durata zero quando studi un circuito analogico. Introducono una larghezza di banda illimitata e rendono più difficili i calcoli numerici, senza rappresentare un generatore reale.

I dati lineari a tratti utilizzano una coppia tempo/valore crescente per ogni riga. Sono utili per rampe di alimentazione, profili di sensori e sequenze di test non periodiche. Una sorgente esponenziale impone una forma d'onda esponenziale; non aggiunge una rete RC fisica.

## L'eccitazione CA è un'impostazione separata
{: #ac-excitation-is-a-separate-setting}

**Ampiezza CA** e **fase CA** pilotano l'analisi della risposta in frequenza CA. Il campo della frequenza sinusoidale non imposta l'intervallo di frequenza di una scansione CA. Analogamente, un'ampiezza CA di 1 V non genera una sinusoide transitoria da 1 V. Tieni presenti queste distinzioni quando usi la stessa sorgente di ingresso per studi di polarizzazione, CA e transitori.

Una sorgente indipendente ideale ha impedenza di uscita nulla se è una sorgente di tensione e impedenza di uscita infinita se è una sorgente di corrente. **Apparecchiature di laboratorio → Generatore di funzioni** di TinyCAD include invece una resistenza di uscita configurabile (normalmente 50 Ω). Un carico adattato da 50 Ω riceve metà della tensione a circuito aperto del generatore.

## Sorgenti controllate e usi pratici
{: #controlled-sources-and-practical-uses}

Il menu di inserimento SPICE fornisce anche una sorgente di tensione controllata in tensione e una sorgente di corrente controllata in tensione. La prima implementa `Vout = gain × Vcontrol`; la seconda implementa `Iout = transconductance × Vcontrol`. I terminali di controllo e i terminali di uscita sono separati. Apri **controlled-source** per una sorgente di tensione controllata in tensione pronta per l'esecuzione, con guadagno 2. Un ingresso con picco di 1 V produce un'uscita con picco di 2 V su 1 kΩ. La sorgente ideale non include un modello di limitazione o di potenza di alimentazione.

Le sorgenti controllate possono rappresentare un amplificatore ideale,
un trasduttore o un carico dipendente, ma non presentano limiti di alimentazione o di banda passante, a meno che il modello non li includa esplicitamente.

Prova a modificare solo l'ampiezza della sinusoide, quindi solo il suo offset. Prima di ripetere la simulazione, prevedi i nuovi valori minimo, massimo e RMS. Poi raddoppia la frequenza e dimezza il passo temporale massimo per verificare che la forma d'onda visualizzata sia campionata con sufficiente risoluzione.

Riferimento: la sintassi delle sorgenti e le definizioni delle forme d'onda sono documentate nel
[manuale ngspice](https://ngspice.sourceforge.io/docs.html).

## Scarica i circuiti della lezione
{: #download-the-lesson-circuits}

Gli stessi esempi sono già disponibili in **Apri esempio**. Per una copia indipendente, scarica un disegno `.dzn` e usa **File → Apri** in TinyCAD. Il file `.cir` associato è testo SPICE da esaminare o da usare con un simulatore esterno compatibile, non è un disegno TinyCAD. I circuiti XSPICE richiedono Desktop per eseguire nuove simulazioni.

| Esempio | Disegno | Netlist |
| --- | --- | --- |
| source-dc | [Disegno TinyCAD](/v4/examples/simulation-tutorials/spice/source-dc.dzn) | [Testo SPICE](/v4/examples/simulation-tutorials/spice/source-dc.cir) |
| source-current | [Disegno TinyCAD](/v4/examples/simulation-tutorials/spice/source-current.dzn) | [Testo SPICE](/v4/examples/simulation-tutorials/spice/source-current.cir) |
| source-sine | [Disegno TinyCAD](/v4/examples/simulation-tutorials/spice/source-sine.dzn) | [Testo SPICE](/v4/examples/simulation-tutorials/spice/source-sine.cir) |
| source-pulse | [Disegno TinyCAD](/v4/examples/simulation-tutorials/spice/source-pulse.dzn) | [Testo SPICE](/v4/examples/simulation-tutorials/spice/source-pulse.cir) |
| source-triangle | [Disegno TinyCAD](/v4/examples/simulation-tutorials/spice/source-triangle.dzn) | [Testo SPICE](/v4/examples/simulation-tutorials/spice/source-triangle.cir) |
| source-pwl | [Disegno TinyCAD](/v4/examples/simulation-tutorials/spice/source-pwl.dzn) | [Testo SPICETCAD](/v4/examples/simulation-tutorials/spice/source-pwl.cir) |
| source-exponential | [Disegno TinyCAD](/v4/examples/simulation-tutorials/spice/source-exponential.dzn) | [Testo SPICE](/v4/examples/simulation-tutorials/spice/source-exponential.cir) |
| source-fm | [Disegno TinyCAD](/v4/examples/simulation-tutorials/spice/source-fm.dzn) | [Testo SPICETCAD](/v4/examples/simulation-tutorials/spice/source-fm.cir) |
| controlled-source | [Disegno TinyCAD](/v4/examples/simulation-tutorials/spice/controlled-source.dzn) | [Testo SPICETCAD](/v4/examples/simulation-tutorials/spice/controlled-source.cir) |
