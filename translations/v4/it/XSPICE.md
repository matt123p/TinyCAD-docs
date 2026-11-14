---
layout: default
---
# XSPICE e simulazione digitale
{: #xspice-and-digital-simulation}

XSPICE estende ngspice con modelli di codice e un sistema di simulazione a eventi coordinato con il solver analogico. È utile per porte logiche, clock, memorie e sistemi misti analogico/digitali. Per informazioni sull’architettura upstream, consulta la [panoramica di XSPICE](https://ngspice.sourceforge.io/xspice.html).

**XSPICE è supportato in TinyCAD Desktop e non è supportato nelle versioni per browser.** Il motore nativo di Desktop include le librerie di modelli di codice integrate.

*Visualizzazione dei risultati salvati:* un browser può comunque aprire un disegno che contiene un’acquisizione XSPICE precedente. In questo modo è possibile esaminarne i risultati salvati; per eseguire la simulazione è necessario Desktop.

## Scegliere il modello logico corretto
{: #choose-the-right-logic-model}

| Approccio | Funzionamento | Ambito di utilizzo |
| --- | --- | --- |
| **Logica digitale** e **Blocchi funzionali** integrati | Modelli SPICE comportamentali analogici portabili, con alimentazioni e soglie configurate | Analisi a livello di sistema in browser e Desktop |
| Simboli/modelli del tutorial XSPICE | Logica a eventi, ritardi, memorie e ponti analogico/digitali espliciti | Simulazione nativa a segnali misti in Desktop |

Una porta dall’aspetto simile può quindi avere un contratto di modellazione diverso. Non sostituire un modello con l’altro basandoti solo sull’aspetto. Nessuno dei due approcci consente di eseguire il firmware rappresentato dall’immagine di una scheda ESP32, Raspberry Pi o Arduino. L’integrazione di TinyCAD non è un ambiente generico per l’esecuzione di HDL o software embedded.

## Nodi analogici e digitali
{: #analogue-and-digital-nodes}

I nodi analogici trasportano tensioni/correnti a valori continui. I nodi di eventi digitali trasportano stati. Un **ponte ADC** applica soglie per convertire l’ingresso analogico in stati digitali; un **ponte DAC** converte uno stato digitale in un livello di uscita analogico. Questi ponti descrivono la conversione tra domini del simulatore, non necessariamente un dispositivo ADC/DAC fisico completo.

Controlla le soglie, i livelli di alimentazione e il carico in uscita. Una tensione compresa tra soglie logiche valide può produrre uno stato sconosciuto. Lo stato di una memoria può rimanere sconosciuto finché le condizioni di clock/reset non lo determinano. Uno stato sconosciuto è un’informazione diagnostica utile; sostituirlo con uno 0 presunto può nascondere un reale problema di temporizzazione o inizializzazione.

Il ritardo di propagazione rende importante il tempo. Porte con ritardi di percorso diversi possono produrre un hazard anche quando una tabella di verità statica sembra corretta. Scegli un passo massimo per l’analisi transitoria che consenta di risolvere la risposta analogica e la temporizzazione da misurare. Non dedurre il ritardo di un evento basandoti solo su una visualizzazione troppo grossolana.

## Seguire il corso digitale
{: #run-the-digital-course}

1. In Desktop scegli **File → Apri esempio (Open Example) → XSPICE e tutorial digitale**.
2. Apri il disegno indicato nella lezione. Sono inclusi simboli, dichiarazioni dei modelli di codice e risultati conservati.
3. Leggi la spiegazione tramite **Visualizza (View) → Visualizza spiegazione (View Explanation)** e seleziona il foglio Simulation.
4. Scegli **Esegui (Run)** per avviare una nuova acquisizione nativa, quindi confronta stati e temporizzazioni con quelli della lezione.
5. Salva una copia prima di modificare soglie, ritardi, reset o temporizzazione del clock.

Il [tutorial XSPICE in sei capitoli](../XSPICE-Tutorial/) tratta i ponti e la prima esecuzione, le porte logiche e le tabelle di verità, gli hazard, i flip-flop, i contatori e il filtraggio a segnali misti. Include schemi circuitali, grafici del solver e materiali scaricabili.

## Riferimenti upstream
{: #upstream-reference}

Per la sintassi dei modelli di codice e le porte supportate, consulta la [documentazione e il manuale ufficiali di ngspice](https://ngspice.sourceforge.io/docs.html). [XSPICE HOWTO](https://ngspice.sourceforge.io/xspicehowto.html) illustra lo sviluppo di modelli di codice, mentre [XSPICE usage](https://ngspice.sourceforge.io/xspiceusage.html) offre ulteriori esempi e informazioni di contesto. Queste risorse descrivono ngspice nel suo complesso. TinyCAD usa i propri moduli nativi integrati; non carica modelli di codice compilati forniti arbitrariamente dall’utente tramite un allegato al disegno.
