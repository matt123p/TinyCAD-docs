---
layout: default
---
# Risoluzione dei problemi di simulazione
{: #simulation-troubleshooting}

Leggere lo stato dell'acquisizione e l'output diagnostico prima di modificare le impostazioni. Distinguere tra **un'esecuzione non riuscita**, **un'esecuzione valida con comportamento imprevisto** e **una misura non disponibile per il risultato selezionato**. Richiedono verifiche diverse.

## La simulazione non si avvia
{: #the-simulation-will-not-start}

| Sintomo | Verifica |
| --- | --- |
| Massa mancante / circuito flottante | Collegare un simbolo di alimentazione o un'etichetta con valore **0**. Un'etichetta GND separata non corrisponde automaticamente al nodo 0. Controllare i ritorni delle sorgenti e i sottocircuiti isolati. |
| Modello del componente mancante | Selezionare il simbolo e controllare **SPICE**. Usare un componente di libreria dotato di modello oppure [associare una definizione inclusa o personalizzata](../Bundled-SPICE-Models/). |
| Nessun modello corrisponde alla ricerca | Cancellare la ricerca o provare un alias del componente o una famiglia di dispositivi. Un simbolo SPICE essentials mostra solo i modelli verificati. |
| Attributi mancanti o mappatura dei pin non valida | Esaminare le proprietà SPICE del componente e l'ordine effettivo dei terminali del modello. Le sovrascritture dell'istanza possono modificare i valori predefiniti. |
| Modello/file include non trovato | Associare il testo del modello e le relative dipendenze al foglio Simulation usando nomi di file logici corrispondenti. Un percorso assoluto locale o un URL web non viene recuperato automaticamente. |
| Direttive di analisi in un componente | Rimuovere `.op`, `.tran`, `.ac`, `.end` legacy e il testo di controllo dell'esecuzione dagli attributi dei componenti. Il foglio Simulation integrato gestisce le impostazioni di analisi. |
| Modello XSPICE non disponibile nel browser | Aprire il disegno in Desktop per eseguire una nuova simulazione nativa. È comunque possibile esaminare i risultati salvati nel browser. |
| Sorgente o intervallo non valido | Controllare i campi della forma d'onda, i tempi PWL crescenti, i valori iniziale/finale, la direzione della scansione e i valori positivi di frequenza/tempo. |

## Il risultato è errato o il risolutore non converge
{: #a-result-is-wrong-or-the-solver-does-not-converge}

**Esaminare prima il circuito.** Un filo che supera l'estremità di un altro filo o una presa inutilizzata può creare una connessione accidentale. Controllare le giunzioni a T, le estremità effettive dei pin, le etichette di rete e le alimentazioni nascoste. Una sonda di corrente o un amperometro collegato ai capi di una sorgente può cortocircuitarla. Usare la netlist generata per verificare cosa ha ricevuto il simulatore.

Controllare l'orientamento e l'ordine dei modelli: polarità del diodo, collettore/base/emettitore del BJT, pin di alimentazione dell'amplificatore operazionale e ordine dei pin del sottocircuito. Usare riferimenti univoci e significativi e verificare che il riferimento della sorgente nell'impostazione di scansione/rumore/trasferimento punti alla sorgente desiderata.

Verificare la polarizzazione in CC con il punto di funzionamento prima di indagare l'analisi CA. Anelli di sorgenti ideali, nodi flottanti, transizioni ideali brusche e parametri del modello irragionevoli possono rendere un circuito difficile o impossibile da risolvere. Aggiungere resistenze giustificate fisicamente o tempi di transizione finiti quando rappresentano l'esperimento reale. Ridurre un circuito complesso alla sezione minima che causa il problema prima di modificare le opzioni numeriche.

Controllare i suffissi numerici: **1M nel testo SPICE significa 1 milli-unità, non un mega-unità**; usare `1Meg` per indicare mega. Esaminare separatamente la temperatura, il valore CC della sorgente e le impostazioni transitorie/CA. L'ampiezza transitoria di una sorgente non diventa automaticamente la sua ampiezza CA di piccolo segnale.

## La forma d'onda sembra incompleta
{: #the-waveform-looks-incomplete}

- Aumentare la durata del transitorio se l'avvio non si è ancora stabilizzato o se il ciclo richiesto è al di fuori dell'intervallo di esecuzione.
- Ridurre il passo massimo per risolvere fronti rapidi o impulsi stretti. Lo zoom della visualizzazione non può ricreare campioni mancanti.
- Controllare l'impostazione selezionata, l'acquisizione, il grafico dei risultati, la visibilità della legenda, le unità e l'intervallo degli assi.
- Per l'analisi CA, usare un numero sufficiente di punti vicino a una risonanza stretta e il rapporto ingresso/uscita corretto.
- Se l'esecuzione è stata interrotta o non è riuscita, verificare la disponibilità effettiva dei dati; una traccia parziale non è un esperimento completato.

## I grafici o le letture delle sonde non sono aggiornati
{: #charts-or-probe-readings-are-stale}

Modificare i fili, i valori, il testo del modello o l'impostazione richiede un altro **Run** (Esegui). Le acquisizioni salvate descrivono i dati di ingresso originali. La selezione della cronologia non annulla le modifiche al disegno. Un'esercitazione inclusa può aprirsi con un risultato di riferimento conservato, prima che si esegua una simulazione.

Usare **Simulation → Show charts** oppure, in Desktop, **View → Show Charts** se il pannello è nascosto. Se si rimuove un grafico automatico della sonda, questo rimane rimosso finché non lo si aggiunge di nuovo esplicitamente. Quando si chiude una finestra grafico separata, il grafico torna al pannello.

## Una misura non è disponibile
{: #a-measurement-is-unavailable}

Controllare l'associazione del segnale, l'unità, la finestra, la soglia e i livelli iniziale/finale espliciti. Le misure temporali richiedono attraversamenti/cicli completi. Una misura di assestamento deve terminare all'interno della banda finale dichiarata. La frequenza di taglio richiede l'attraversamento richiesto e il riferimento di guadagno; la larghezza di banda richiede due attraversamenti. Una risonanza al limite della scansione non è risolta. I vettori di corrente/potenza del dispositivo non supportati non vengono stimati.

Un requisito non disponibile non equivale a un superamento. Esportare le condizioni e lo stato di errore con i rapporti dello studio e mantenere visibili i casi di tolleranza non convergenti. Se uno studio non contiene requisiti valutabili, non è possibile stimarne la resa.

## Salvare e riprodurre un'indagine
{: #saving-and-reproducing-an-investigation}

Conservare insieme il disegno, gli allegati dei modelli, le impostazioni di analisi, le impostazioni delle sorgenti, la temperatura e le acquisizioni pertinenti. Se si è salvato senza risultati numerici o li si è rimossi per ridurre le dimensioni del file, eseguire nuovamente la simulazione per ripristinare i grafici. Le istantanee conservate di valori scalari/rapporti non ricreano gli array delle forme d'onda mancanti.

Un rapporto riproducibile specifica le ipotesi sul modello, il motore, la finestra di misura e le condizioni. Per isolare un problema relativo al linguaggio del simulatore, confrontare i risultati con i [valori attesi dell'esercitazione](../Simulation-Tutorials/) e il [manuale ufficiale di ngspice](https://ngspice.sourceforge.io/docs.html).
