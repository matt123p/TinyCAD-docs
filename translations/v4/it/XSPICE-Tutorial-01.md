---
layout: default
title: 1. XSPICE and digital simulation
---
# 1. XSPICE e simulazione digitale
{: #xspice-and-digital-simulation}

[Come usare i tutorial](/v4/Tutorial-Start-Here/) · [Contenuti del corso](/v4/Simulation-Tutorials/) · [Avanti: porte logiche](/v4/XSPICE-Tutorial-02/)

Gli esempi di questo capitolo sono inclusi in TinyCAD. Scegli **Open Example → XSPICE and digital tutorial**, seleziona l'esempio indicato, quindi scegli **Open Drawing**. Non è necessario scaricare nulla.

XSPICE estende ngspice con modelli di codice e un sistema di simulazione a eventi.
Un circuito analogico viene risolto in termini di tensioni e correnti; una rete digitale
basata su eventi propaga le variazioni degli stati logici attraverso modelli funzionali. La
simulazione a segnali misti coordina entrambi gli approcci. In questo modo una funzione
logica può essere molto più semplice da simulare rispetto a un'implementazione a livello
transistor, ma non fornisce le stesse informazioni sulla corrente di alimentazione, sulle
sollecitazioni dei transistor o sui tempi fisici.

Per questo corso, usa **TinyCAD Desktop**. Il motore nativo incluso comprende i
modelli di codice richiesti. Il motore TinyCAD per browser/WASM non include XSPICE.
I modelli forniti sono incorporati nei disegni, ma le librerie eseguibili dei modelli di
codice provengono comunque dall'installazione del motore nativo.

[Come TinyCAD implementa SPICE](/v4/SPICE-Tutorial-11/) illustra come i
motori, le definizioni dei simboli e il foglio Simulation si integrano.

## Primo avvio: un buffer a eventi
{: #first-run-an-event-driven-buffer}

Apri **logic-buffer**. Esegui il transitorio salvato di 8 µs
e traccia A e Y. A è una forma d'onda da 0 a 5 V con periodo di 1 µs. Y la segue con un
piccolo ritardo di propagazione e fronti di uscita non ideali.

![Circuito di prova del buffer XSPICE](/v4/Images/simulation-tutorials/xspice/logic-buffer-circuit.png)
![Segnali di ingresso e uscita del buffer calcolati](/v4/Images/simulation-tutorials/xspice/logic-buffer-results.png)

X1 è un sottocircuito incorporato con tre stadi interni espliciti:

```text
Analogue A → adc_bridge → digital d_buffer → dac_bridge → analogue Y
```

Il disegno espone intenzionalmente terminali analogici: così il normale sistema di grafici
di TinyCAD può tracciare ingresso e uscita in volt. All'interno di X1, il buffer è un vero
modello XSPICE a eventi, non un'espressione con soglia di tensione che finge di essere
una porta digitale. Apri le proprietà SPICE di X1 per esaminare gli stadi.

## Significato dei ponti
{: #what-the-bridges-mean}

Il ponte ADC interpreta come basso le tensioni di ingresso fino a 1 V e come alto quelle
da 3 V in su. L'intervallo tra questi valori è indefinito. Si tratta di un'interfaccia tra
domini logici, non di un ADC multibit campionato con clock, risoluzione e codice di
quantizzazione.

Il ponte DAC mappa lo stato basso a 0 V, quello alto a 5 V e quello indefinito a 2,5 V,
per consentirne l'osservazione. I tempi di transizione di salita e discesa sono 5 ns. In
questo corso, un'uscita di 2,5 V può quindi rappresentare uno stato digitale sconosciuto;
non è necessariamente un valido segnale analogico a metà alimentazione. Queste soglie e
tensioni sono scelte didattiche, non specifiche di un particolare dispositivo TTL o CMOS.

L'uscita ideale del ponte non dispone di un pin di alimentazione modellato. Non usarla
per calcolare il consumo effettivo di un chip logico. Per analizzare la potenza, usa un
modello con alimentazione esplicita e comportamento del dispositivo appropriato.

## Una suddivisione utile del livello di dettaglio della modellazione
{: #a-useful-division-of-modelling-detail}

Usa le porte a eventi per verificare tabelle di verità, sequenze di clock e temporizzazioni
funzionali. Usa modelli transistor o del produttore per il carico elettrico e il comportamento
del dispositivo, quando tali modelli supportano l'effetto richiesto. Usa interfacce esplicite
quando passi tra domini analogici e digitali. La somiglianza visiva di un simbolo non
indica quale tipo di modello contenga.

Per un primo esperimento, modifica il periodo di ingresso da 1 µs a 2 µs e ripeti la
simulazione. La frequenza di ripetizione si dimezza; il ritardo di propagazione specificato
del modello dovrebbe rimanere sostanzialmente invariato. Il periodo e il ritardo di
propagazione sono proprietà indipendenti.

Riferimenti: [Introduzione a XSPICE](https://ngspice.sourceforge.io/xspice.html),
[esempi ufficiali XSPICE e HOWTO](https://ngspice.sourceforge.io/xspicehowto.html).

## Scarica i circuiti della lezione
{: #download-the-lesson-circuits}

Gli stessi esempi sono già disponibili in **Open Example**. Per ottenere una copia
indipendente, scarica un disegno `.dzn` e usa **File → Open** in
TinyCAD. Il file `.cir` allegato è testo SPICE da consultare o da
usare con un simulatore esterno compatibile, non è un disegno TinyCAD. Per eseguire da
zero i circuiti XSPICE è necessario Desktop.

| Esempio | Disegno | Netlist |
| --- | --- | --- |
| logic-buffer | [Disegno TinyCAD](/v4/examples/simulation-tutorials/xspice/logic-buffer.dzn) | [Testo SPICE](/v4/examples/simulation-tutorials/xspice/logic-buffer.cir) |
