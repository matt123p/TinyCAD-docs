---
layout: default
---
# Risoluzione dei problemi di simulazione
{: #simulation-troubleshooting}

Prima di modificare le impostazioni, leggi lo stato di acquisizione e l'output diagnostico. Distingui tra **un'esecuzione non riuscita**, **un'esecuzione valida con comportamento inatteso** e **una misura non disponibile per il risultato selezionato**. Richiedono verifiche diverse.

## La simulazione non si avvia
{: #the-simulation-will-not-start}

| Sintomo | Verifica |
| --- | --- |
| Massa mancante / circuito flottante | Collega un simbolo di alimentazione o un'etichetta con valore **0**. Un'etichetta GND separata non corrisponde automaticamente al nodo 0. Controlla i ritorni delle sorgenti e i sottocircuiti isolati. |
| Modello del componente mancante | Usa un componente di libreria dotato di modello oppure fornisci un template e un modello. Le immagini degli strumenti non sono modelli di simulazione. |
| Attributi mancanti o mappatura dei pin non valida | Esamina le proprietà SPICE del componente e l'ordine effettivo dei terminali del modello. Le sovrascritture dell'istanza possono modificare i valori predefiniti. |
| Modello/include non trovato | Allega il testo del modello e le relative dipendenze al foglio Simulation usando nomi di file logici corrispondenti. Un percorso assoluto locale o un URL web non viene recuperato automaticamente. |
| Direttive di analisi in un componente | Rimuovi `.op`, `.tran`, `.ac`, `.end` legacy e il testo di controllo dell'esecuzione dagli attributi dei componenti. Il foglio Simulation integrato gestisce le impostazioni di analisi. |
| Modello XSPICE non disponibile nel browser | Apri il disegno in Desktop per avviare una nuova simulazione nativa. È comunque possibile esaminare i risultati salvati nel browser. |
| Sorgente o intervallo non valido | Controlla i campi della forma d'onda, i tempi PWL crescenti, i valori di inizio/fine, la direzione di sweep e i valori positivi di frequenza/tempo. |

## Il risultato è errato o il risolutore non converge
{: #a-result-is-wrong-or-the-solver-does-not-converge}

**Esamina prima il circuito.** Un filo che oltrepassa l'estremità di un altro filo o una presa inutilizzata può creare una connessione accidentale. Controlla le giunzioni a T, le effettive estremità dei pin, le etichette di rete e le alimentazioni nascoste. Una sonda di corrente o un amperometro collegato ai capi di una sorgente può cortocircuitarla. Usa la netlist generata per verificare cosa ha ricevuto il simulatore.

Controlla l'orientamento e l'ordine dei modelli: polarità del diodo, collettore/base/emettitore del BJT, pin di alimentazione dell'amplificatore operazionale e ordine dei pin del sottocircuito. Usa riferimenti univoci e significativi e verifica che il riferimento della sorgente nelle configurazioni di sweep/rumore/trasferimento corrisponda alla sorgente desiderata.

Verifica la polarizzazione in CC con Operating Point prima di esaminare l'analisi CA. Anelli di sorgenti ideali, nodi flottanti, transizioni ideali brusche e parametri del modello irragionevoli possono rendere difficile o impossibile risolvere un circuito. Aggiungi resistenze giustificate fisicamente o tempi di transizione finiti quando descrivono l'esperimento reale. Riduci un circuito complesso alla più piccola sezione che presenta il problema prima di modificare le opzioni numeriche.

Controlla i suffissi numerici: **nel testo SPICE, 1M equivale a 1 milli-unità, non a un mega**; per mega usa `1Meg`. Esamina separatamente la temperatura, il valore CC della sorgente e le impostazioni transitorie/CA. L'ampiezza transitoria di una sorgente non diventa automaticamente la sua ampiezza CA a piccoli segnali.

## La forma d'onda sembra incompleta
{: #the-waveform-looks-incomplete}

- Aumenta la durata del transitorio se l'avvio non si è ancora assestato o se il ciclo richiesto non rientra nell'esecuzione.
- Riduci il passo massimo per risolvere fronti rapidi o impulsi stretti. Lo zoom del display non può ricreare campioni mancanti.
- Controlla la configurazione selezionata, l'acquisizione, il grafico dei risultati, la visibilità della legenda, le unità e l'intervallo dell'asse.
- Per l'analisi CA, usa un numero sufficiente di punti in prossimità di una risonanza stretta e il corretto rapporto ingresso/uscita.
- Se l'esecuzione è stata interrotta o non è riuscita, verifica la disponibilità effettiva dei dati; una traccia parziale non è un esperimento completato.

## I grafici o le letture delle sonde non sono aggiornati
{: #charts-or-probe-readings-are-stale}

La modifica dei collegamenti, dei valori, del testo del modello o della configurazione richiede un altro **Run**. Le acquisizioni salvate descrivono i dati di ingresso originali. La selezione della cronologia non annulla le modifiche al disegno. Un tutorial incluso può aprirsi con un risultato di riferimento conservato, prima che tu avvii una simulazione.

Usa **Simulation → Show charts** oppure **View → Show Charts** in Desktop se il pannello è nascosto. Se rimuovi un grafico generato automaticamente da una sonda, resterà rimosso finché non lo aggiungerai di nuovo esplicitamente. Quando si chiude una finestra di grafico separata, il grafico torna al pannello.

## Una misura non è disponibile
{: #a-measurement-is-unavailable}

Controlla il collegamento del segnale, l'unità, la finestra, la soglia e i livelli iniziale/finale espliciti. Per misurare i tempi occorrono attraversamenti/cicli completi. Una misura di assestamento deve terminare all'interno della banda finale dichiarata. Per il cutoff sono necessari l'attraversamento richiesto e il riferimento di guadagno; per la larghezza di banda servono due attraversamenti. Una risonanza al limite dello sweep non è risolta. Le correnti/potenze dei dispositivi non supportate non vengono stimate.

Un requisito non disponibile non equivale a un esito positivo. Esporta le condizioni e lo stato di errore con i rapporti dello studio e mantieni visibili i casi di tolleranza non convergenti. Se uno studio non ha requisiti valutabili, non è possibile stimarne la resa.

## Salvare e riprodurre un'indagine
{: #saving-and-reproducing-an-investigation}

Mantieni insieme il disegno, gli allegati del modello, le impostazioni di analisi, le impostazioni delle sorgenti, la temperatura e le acquisizioni pertinenti. Se hai salvato senza risultati numerici o li hai rimossi per ridurre le dimensioni del file, esegui di nuovo la simulazione per ripristinare i grafici. Le istantanee conservate di valori scalari/rapporti non ricreano gli array delle forme d'onda mancanti.

Un rapporto riproducibile specifica le ipotesi del modello, il motore, la finestra di misura e le condizioni. Per isolare un problema relativo al linguaggio del simulatore, confronta i risultati con i [valori attesi del tutorial](../Simulation-Tutorials/) e con il [manuale ufficiale di ngspice](https://ngspice.sourceforge.io/docs.html).
