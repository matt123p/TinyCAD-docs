---
layout: default
title: "1. SPICE: overview and your first simulation"
---
# 1. SPICE: panoramica e prima simulazione
{: #spice-overview-and-your-first-simulation}

[Come usare i tutorial](/v4/Tutorial-Start-Here/) · [Contenuti del corso](/v4/Simulation-Tutorials/) · [Avanti: misure in CCC](/v4/SPICE-Tutorial-02/)

Gli esempi di questo capitolo sono inclusi in TinyCAD. Scegli **Apri esempio → Tutorial SPICE**, seleziona l'esempio indicato, quindi scegli **Apri disegno**. Non è necessario scaricare nulla.

SPICE calcola il comportamento elettrico di un circuito descritto da componenti collegati
e dai loro modelli matematici. Può trovare un punto di polarizzazione in CC, seguire
tensioni e correnti nel tempo oppure calcolare la risposta in frequenza a piccoli segnali.
Non deduce un modello elettrico dal disegno di un componente. Un simbolo di resistore
richiede una resistenza e un modello SPICE; un transistor necessita inoltre di
parametri che ne descrivano il comportamento.

Questo corso inizia con circuiti che si possono verificare a mano. I capitoli successivi
ricostruiscono l'originale di TinyCAD `AMP.DSN` e ne analizzano i limiti. Lo scopo
è imparare a porre una domanda precisa, scegliere l'analisi appropriata e valutare
se il risultato è plausibile.

Per una guida al motore, alle librerie di simboli e ai controlli, consulta
[Come TinyCAD implementa SPICE](/v4/SPICE-Tutorial-11/). Spiega la differenza
tra ngspice e XSPICE e illustra come creare una simulazione personalizzata.

## Aprire ed eseguire il primo circuito
{: #open-and-run-the-first-circuit}

Apri **divider**. La sua sorgente da 5 V alimenta due resistori da 1 kΩ
in serie. L'etichetta `OUT` identifica il loro punto di giunzione; `IN` identifica l'alimentazione.


1. Usa **Apri esempio → Tutorial SPICE**, seleziona **divider**, quindi scegli **Apri disegno**.
2. Seleziona il foglio Simulation. L'analisi salvata è **Punto di funzionamento**.
3. Scegli **Esegui**. Se i grafici sono nascosti, usa **Simulazione → Mostra grafici**.
4. Esamina `in`, `out` e `v1#branch`. Un punto di funzionamento contiene un solo valore
   per segnale, quindi una lettura numerica è più utile di un grafico temporale.
5. Seleziona R2 nel foglio Circuit, modifica **Valore** da `1k` a `2k` ed esegui
   di nuovo. Ripristina `1k` prima di continuare, oppure apri nuovamente **divider** da **Apri esempio**.

L'acquisizione di riferimento fornita consente di esaminare subito i risultati. Dopo
una modifica, esegui di nuovo la simulazione: i risultati conservati descrivono il circuito al momento dell'acquisizione.
Il salvataggio conserva la configurazione e i risultati conservati; **Salva senza risultati** crea una
copia più piccola da condividere, mantenendo il circuito e le impostazioni della simulazione.

I grafici del punto di funzionamento contengono un solo punto; per letture precise, usa i dati numerici.

## Video: aprire, eseguire e modificare un partitore
{: #video-open-run-and-change-a-divider}

Apertura dell'esempio incorporato, verifica dei valori in CC, modifica di R2 ed esecuzione di una nuova acquisizione.

{% include video-player.html src="/v4/videos/simulation-tutorials/spice/first-run.mp4" poster="/v4/videos/simulation-tutorials/spice/first-run.jpg" caption="Aprire, eseguire e modificare un partitore." %}

[Guarda o scarica il video](/v4/videos/simulation-tutorials/spice/first-run.mp4).

### Circuito e risultati di riferimento
{: #circuit-and-reference-results}

![Circuito del partitore di tensione ricavato dal disegno salvato](/v4/Images/simulation-tutorials/spice/divider-circuit.png)

## Prevedere il risultato
{: #predict-the-answer}

La corrente è `I = 5 / (1000 + 1000) = 2.5 mA`. Il resistore inferiore ha quindi
`VOUT = I × 1000 = 2.5 V`. Con R2 modificato a 2 kΩ, l'equazione del partitore dà
`VOUT = 5 × 2000 / (1000 + 2000) = 3.333 V`.

![Risultati calcolati del punto di funzionamento](/v4/Images/simulation-tutorials/spice/divider-results.png)

La corrente della sorgente è −2.5 mA. Non si tratta di un errore di cablaggio: SPICE definisce la corrente della sorgente
come entrante nel suo terminale positivo. In base a questa convenzione, una sorgente che eroga energia ha
corrente negativa. Il capitolo 2 usa il segno per calcolare correttamente
la potenza.

## Quattro principi fondamentali
{: #four-foundations}

- **La massa è il nodo `0`.** Le tensioni sono differenze; il risolutore ha bisogno di un riferimento.
  Un filo etichettato `GND` non è un'alternativa, a meno che non sia effettivamente collegato
  alla massa SPICE. Usa lo strumento **Inserisci massa** di TinyCAD.
- **La connettività è elettrica.** Un punto di giunzione collega i rami. Fili che si incrociano
  senza un collegamento non sono necessariamente uniti. Etichette di rete identiche collegano
  punti distanti; una nota di testo nelle vicinanze non lo fa.
- **Unità e prefissi sono importanti.** Usa `1k`, `10u`, `100n` e `1Meg` nei valori SPICE.
  In SPICE, `m` significa milli, non mega. I controlli delle sorgenti di TinyCAD accettano anche
  valori con unità, come `1kHz` e `5ms`.
- **I modelli hanno un ambito definito.** Un resistore ideale non presenta induttanza parassita né
  guasti termici, a meno che tali effetti non siano modellati esplicitamente.

## Scegliere l'analisi che risponde alla domanda
{: #choose-the-analysis-that-answers-the-question}

| Domanda | Analisi |
| --- | --- |
| A quali valori si stabilizzano le tensioni e le correnti in CC? | Punto di funzionamento |
| Che cosa accade dopo un gradino o durante una forma d'onda? | Transitorio |
| Come varia con la frequenza il guadagno a piccoli segnali? | AC |
| Come cambia la soluzione in CC al variare di una sorgente? | Sweep DC |
| Quale rumore raggiunge un'uscita in una banda di frequenze? | Rumore |
| Quali sono il guadagno in CC a piccoli segnali e le resistenze alle porte? | Funzione di trasferimento |
| Dove si trovano i poli e gli zeri del sistema linearizzato? | Poli-zeri |

Una simulazione convergente è solo l'inizio della convalida. Verifica polarità,
unità, carico e tipo di analisi rispetto a una stima semplice.

Per approfondire: il [tutorial introduttivo ufficiale di ngspice](https://ngspice.sourceforge.io/ngspice-tutorial.html)
offre un'introduzione complementare basata su netlist.

## Scaricare i circuiti della lezione
{: #download-the-lesson-circuits}

Gli stessi esempi sono già disponibili in **Apri esempio**. Per una copia indipendente, scarica un disegno `.dzn` e usa **File → Apri** in TinyCAD. Il `.cir` allegato è testo SPICE da esaminare o da usare con un simulatore esterno compatibile, non un disegno TinyCAD. Per eseguire nuove simulazioni dei circuiti XSPICE è necessaria l'edizione Desktop.

| Esempio | Disegno | Netlist |
| --- | --- | --- |
| divider | [Disegno TinyCAD](/v4/examples/simulation-tutorials/spice/divider.dzn) | [Testo SPICE](/v4/examples/simulation-tutorials/spice/divider.cir) |
