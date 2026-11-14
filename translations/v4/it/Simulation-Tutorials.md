---
layout: default
title: Simulation tutorials for TinyCAD
---
# Tutorial di simulazione
{: #simulation-tutorials}

Inizia con [Come usare questi tutorial e aprire gli esempi inclusi](/v4/Tutorial-Start-Here/),
poi prosegui con [SPICE: panoramica e prima simulazione](/v4/SPICE-Tutorial-01/).
Per la logica a eventi, inizia con il corso separato [XSPICE e digitale](/v4/XSPICE-Tutorial-01/).

È presente un capitolo introduttivo condiviso, undici capitoli SPICE e sei capitoli XSPICE.
I corsi completi, i disegni eseguibili, le immagini e le registrazioni sono inclusi in questo manuale. Tutti gli esempi dei tutorial sono inclusi con TinyCAD; non
è necessario scaricare i tutorial. Nel browser della barra del titolo scegli **Apri esempio (Open Example)**, oppure in Desktop scegli **File → Apri esempio (Open Example)**, seleziona
**Tutorial SPICE** o **Tutorial XSPICE e digitale**, seleziona l'esempio indicato
nel capitolo, quindi scegli **Apri disegno (Open Drawing)**. Verrà aperta una copia modificabile;
usa **Salva con nome (Save As)** per conservare i tuoi esperimenti e riapri l'esempio incorporato
per ricominciare da capo. I disegni includono simboli incorporati, definizioni di
modello, impostazioni di analisi e un'acquisizione di riferimento conservata.

## SPICE
{: #spice}

1. [Panoramica e prima esecuzione](/v4/SPICE-Tutorial-01/)
2. [Tensione, corrente e potenza in continua](/v4/SPICE-Tutorial-02/)
3. [Generatori di segnale e stimoli](/v4/SPICE-Tutorial-03/)
4. [Analisi transitoria e carica di un circuito RC](/v4/SPICE-Tutorial-04/)
5. [Risposta in frequenza e filtri](/v4/SPICE-Tutorial-05/)
6. [Diodi, raddrizzamento e ondulazione](/v4/SPICE-Tutorial-06/)
7. [Ricostruire AMP.DSN](/v4/SPICE-Tutorial-07/)
8. [Guadagno e banda passante dell'amplificatore](/v4/SPICE-Tutorial-08/)
9. [Uscita, saturazione e potenza dell'amplificatore](/v4/SPICE-Tutorial-09/)
10. [Sweep, rumore e indagini progettuali](/v4/SPICE-Tutorial-10/)
11. [Come TinyCAD implementa SPICE: motori, simboli e flusso di lavoro](/v4/SPICE-Tutorial-11/)

## Video dimostrativi
{: #video-walkthroughs}

Cinque brevi video mostrano i passaggi in cui vedere i controlli è particolarmente utile.
I video usano TinyCAD nel browser con ngspice incluso. Riproducili nel
lettore incorporato della lezione oppure usa questi collegamenti in un visualizzatore Markdown:

| Lezione | Dimostrazione |
| --- | --- |
| 1 | [Aprire, eseguire e modificare un partitore](/v4/videos/simulation-tutorials/spice/first-run.mp4) |
| 3 | [Impostazioni della sorgente e anteprima della forma d'onda](/v4/videos/simulation-tutorials/spice/source-settings.mp4) |
| 4 | [Carica RC, passo temporale e costante di tempo](/v4/videos/simulation-tutorials/spice/rc-transient.mp4) |
| 5 | [Modulo in AC, dB, fase e frequenza di taglio](/v4/videos/simulation-tutorials/spice/ac-response.mp4) |
| 6 | [Misurare l'ondulazione a regime del raddrizzatore](/v4/videos/simulation-tutorials/spice/rectifier-ripple.mp4) |

I video integrano le istruzioni scritte e le figure. Consulta il testo del capitolo
per le equazioni, le ipotesi e i valori attesi. I menu Desktop differiscono da quelli del browser; usa File → Apri esempio (Open Example).

## Simulazione XSPICE e digitale
{: #xspice-and-digital-simulation}

1. [Modelli, ponti e prima esecuzione](/v4/XSPICE-Tutorial-01/)
2. [Porte e tabelle di verità](/v4/XSPICE-Tutorial-02/)
3. [Ritardo di propagazione e hazard](/v4/XSPICE-Tutorial-03/)
4. [Flip-flop, clock e reset](/v4/XSPICE-Tutorial-04/)
5. [Contatori e clock divisi](/v4/XSPICE-Tutorial-05/)
6. [Filtraggio a segnale misto e stati sconosciuti](/v4/XSPICE-Tutorial-06/)

Gli esempi XSPICE richiedono il motore nativo di TinyCAD Desktop. I normali esempi SPICE
usano modelli analogici, ma la qualificazione numerica di questo pacchetto è stata
eseguita con ngspice 47 nativo incluso. Un'esecuzione nativa riuscita non implica che ogni combinazione di browser/versione sia stata testata.

Le figure dei circuiti sono generate da disegni TinyCAD riaperti. Le figure dei risultati
sono grafici di dati effettivi del risolutore, non forme d'onda attese disegnate a mano. Le didascalie
identificano separatamente le schermate dell'applicazione. Piccole differenze numeriche rispetto ai valori
stampati sono normali quando cambiano il modello, la temperatura, il passo temporale o la versione del motore.


## Riferimenti del manuale
{: #manual-reference}

Per i controlli, i modelli, le impostazioni di analisi, i grafici e la risoluzione dei problemi aggiornati, consulta [Simulazione](/v4/Simulation/) e [Esempi inclusi](/v4/Bundled-Examples/). In Desktop, accedi tramite **File → Apri esempio (Open Example)** e **Visualizza → Visualizza spiegazione (View Explanation)**.

## Download dei disegni analogici
{: #analogue-drawing-downloads}

Usa il browser degli esempi inclusi oppure scarica qui un disegno e aprilo in TinyCAD. Le netlist sono fornite separatamente come testo.

| Esempio | Disegno | Netlist |
| --- | --- | --- |
| amp-ac | [Disegno TinyCAD](/v4/examples/simulation-tutorials/spice/amp-ac.dzn) | [Testo SPICE](/v4/examples/simulation-tutorials/spice/amp-ac.cir) |
| amp-bias | [Disegno TinyCAD](/v4/examples/simulation-tutorials/spice/amp-bias.dzn) | [Testo SPICE](/v4/examples/simulation-tutorials/spice/amp-bias.cir) |
| amp-clipping | [Disegno TinyCAD](/v4/examples/simulation-tutorials/spice/amp-clipping.dzn) | [Testo SPICE](/v4/examples/simulation-tutorials/spice/amp-clipping.cir) |
| amp-small-signal | [Disegno TinyCAD](/v4/examples/simulation-tutorials/spice/amp-small-signal.dzn) | [Testo SPICE](/v4/examples/simulation-tutorials/spice/amp-small-signal.cir) |
| controlled-source | [Disegno TinyCAD](/v4/examples/simulation-tutorials/spice/controlled-source.dzn) | [Testo SPICE](/v4/examples/simulation-tutorials/spice/controlled-source.cir) |
| dc-sweep | [Disegno TinyCAD](/v4/examples/simulation-tutorials/spice/dc-sweep.dzn) | [Testo SPICE](/v4/examples/simulation-tutorials/spice/dc-sweep.cir) |
| divider | [Disegno TinyCAD](/v4/examples/simulation-tutorials/spice/divider.dzn) | [Testo SPICE](/v4/examples/simulation-tutorials/spice/divider.cir) |
| rc-ac | [Disegno TinyCAD](/v4/examples/simulation-tutorials/spice/rc-ac.dzn) | [Testo SPICE](/v4/examples/simulation-tutorials/spice/rc-ac.cir) |
| rc-noise | [Disegno TinyCAD](/v4/examples/simulation-tutorials/spice/rc-noise.dzn) | [Testo SPICE](/v4/examples/simulation-tutorials/spice/rc-noise.cir) |
| rc-pz | [Disegno TinyCAD](/v4/examples/simulation-tutorials/spice/rc-pz.dzn) | [Testo SPICE](/v4/examples/simulation-tutorials/spice/rc-pz.cir) |
| rc-step | [Disegno TinyCAD](/v4/examples/simulation-tutorials/spice/rc-step.dzn) | [Testo SPICE](/v4/examples/simulation-tutorials/spice/rc-step.cir) |
| rc-tf | [Disegno TinyCAD](/v4/examples/simulation-tutorials/spice/rc-tf.dzn) | [Testo SPICE](/v4/examples/simulation-tutorials/spice/rc-tf.cir) |
| rectifier | [Disegno TinyCAD](/v4/examples/simulation-tutorials/spice/rectifier.dzn) | [Testo SPICETCAD](/v4/examples/simulation-tutorials/spice/rectifier.cir) |
| source-current | [Disegno TinyCAD](/v4/examples/simulation-tutorials/spice/source-current.dzn) | [Testo SPICETCAD](/v4/examples/simulation-tutorials/spice/source-current.cir) |
| source-dc | [Disegno TinyCAD](/v4/examples/simulation-tutorials/spice/source-dc.dzn) | [Testo SPICETCAD](/v4/examples/simulation-tutorials/spice/source-dc.cir) |
| source-exponential | [Disegno TinyCAD](/v4/examples/simulation-tutorials/spice/source-exponential.dzn) | [Testo SPICE](/v4/examples/simulation-tutorials/spice/source-exponential.cir) |
| source-fm | [Disegno TinyCAD](/v4/examples/simulation-tutorials/spice/source-fm.dzn) | [Testo SPICETCAD](/v4/examples/simulation-tutorials/spice/source-fm.cir) |
| source-pulse | [Disegno TinyCAD](/v4/examples/simulation-tutorials/spice/source-pulse.dzn) | [Testo SPICE](/v4/examples/simulation-tutorials/spice/source-pulse.cir) |
| source-pwl | [Disegno TinyCAD](/v4/examples/simulation-tutorials/spice/source-pwl.dzn) | [Testo SPICE](/v4/examples/simulation-tutorials/spice/source-pwl.cir) |
| source-sine | [Disegno TinyCAD](/v4/examples/simulation-tutorials/spice/source-sine.dzn) | [Testo SPICE](/v4/examples/simulation-tutorials/spice/source-sine.cir) |
| source-triangle | [Disegno TinyCAD](/v4/examples/simulation-tutorials/spice/source-triangle.dzn) | [Testo SPICE](/v4/examples/simulation-tutorials/spice/source-triangle.cir) |

## Download dei disegni XSPICE
{: #xspice-drawing-downloads}

Usa il browser degli esempi inclusi oppure scarica qui un disegno e aprilo in TinyCAD. Le netlist sono fornite separatamente come testo.

| Esempio | Disegno | Netlist |
| --- | --- | --- |
| logic-buffer | [Disegno TinyCAD](/v4/examples/simulation-tutorials/xspice/logic-buffer.dzn) | [Testo SPICE](/v4/examples/simulation-tutorials/xspice/logic-buffer.cir) |
| logic-counter | [Disegno TinyCAD](/v4/examples/simulation-tutorials/xspice/logic-counter.dzn) | [Testo SPICE](/v4/examples/simulation-tutorials/xspice/logic-counter.cir) |
| logic-dff | [Disegno TinyCAD](/v4/examples/simulation-tutorials/xspice/logic-dff.dzn) | [Testo SPICE](/v4/examples/simulation-tutorials/xspice/logic-dff.cir) |
| logic-filter | [Disegno TinyCAD](/v4/examples/simulation-tutorials/xspice/logic-filter.dzn) | [Testo SPICE](/v4/examples/simulation-tutorials/xspice/logic-filter.cir) |
| logic-hazard | [Disegno TinyCAD](/v4/examples/simulation-tutorials/xspice/logic-hazard.dzn) | [Testo SPICE](/v4/examples/simulation-tutorials/xspice/logic-hazard.cir) |
| logic-nand | [Disegno TinyCAD](/v4/examples/simulation-tutorials/xspice/logic-nand.dzn) | [Testo SPICE](/v4/examples/simulation-tutorials/xspice/logic-nand.cir) |
| logic-unknown | [Disegno TinyCAD](/v4/examples/simulation-tutorials/xspice/logic-unknown.dzn) | [Testo SPICE](/v4/examples/simulation-tutorials/xspice/logic-unknown.cir) |
