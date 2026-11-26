---
layout: default
---
# Grafici, misurazioni e Circuit Explorer
{: #charts-measurements-and-circuit-explorer}

Dopo un [avvio della simulazione](../Simulation/), usa i grafici per esplorare la forma d’onda e le misurazioni con nome per registrare quantità ripetibili. Circuit Explorer aggiunge regolazioni temporanee, esecuzioni ripetute, requisiti e rapporti di studio.

Apri **Foglio di simulazione → Configurazione**, quindi scorri fino a **Circuit Explorer**. Usa **Aggiungi strumenti** per aggiungere Misurazioni, Regolazione / sweep, Requisiti, Sovrapposizione DC o Laboratorio di analisi quando necessario. Gli strumenti configurati vengono visualizzati nell’elenco a sinistra. **Nascondi strumento** nasconde i relativi controlli mantenendo le impostazioni salvate. I grafici restano nel pannello separato a destra.

## Mostrare e disporre i grafici
{: #show-and-arrange-charts}

Sia nel browser sia in Desktop, scegli **Simulazione → Mostra grafici** sulla barra degli strumenti. Desktop offre anche **Visualizza → Mostra grafici**. Trascina il bordo sinistro del pannello **Grafici di simulazione** a destra per ridimensionarlo. Seleziona una configurazione e un’acquisizione; usa **Esegui** o **Arresta** senza uscire dallo schema.

I grafici delle sonde vengono aggiunti automaticamente. Se non ci sono sonde, alla configurazione viene assegnato un grafico di uscita. Usa **Aggiungi grafico** per aggiungere un’altra sonda o una vista personalizzata, quindi **Scegli segnali**. I titoli dei grafici sono modificabili. Un’analisi con più grafici, come quella del rumore, dispone di un selettore dei grafici dei risultati.

Fai clic sulle voci della legenda per nascondere le tracce. Tensione, corrente e altre unità utilizzano assi etichettati; non leggere una corrente sulla scala della tensione. I dati CA complessi possono mostrare le parti reale/immaginaria, il modulo, i dB o la fase. Il modulo dell’uscita in dB non è automaticamente un guadagno di trasferimento, a meno che l’ingresso non sia normalizzato in modo appropriato.

Usa la rotellina/il gesto di pizzicamento per ingrandire, trascina per spostare la vista, **Maiusc-trascina** per selezionare una regione e **Adatta** per ripristinare la vista. I cursori numerici consentono di esaminare le posizioni dei campioni. Per ottenere una panoramica reattiva, i risultati di grandi dimensioni utilizzano dati di visualizzazione ridotti; ingrandendo, la vista viene perfezionata. Le linee di base compatibili fissate vengono visualizzate come sovrapposizioni tratteggiate.

### Distacco ed esportazione
{: #pop-out-and-export}

**Stacca grafico** apre una finestra indipendente in entrambi i prodotti. È possibile staccare più grafici. Chiudendo una finestra staccata, il grafico torna al pannello; × su un grafico ancorato rimuove il grafico. I grafici staccati condividono i dati dei risultati correnti e non avviano simulazioni separate.

**Scarica CSV** esporta tutti i campioni conservati per i segnali selezionati e la relativa scala, compresi i valori immaginari. L’esportazione è indipendente dallo zoom di visualizzazione e dal campionamento. I grafici principali offrono anche il download **PNG**. Includi nel rapporto la configurazione, l’acquisizione e le unità selezionate, affinché il lettore sappia a quale esperimento si riferiscono i dati.

## Prova l’indagine RC preparata
{: #try-the-prepared-rc-investigation}

Scarica [RC low-pass.dzn](../examples/simulation/rc-low-pass.dzn), aprilo tramite **File → Apri** ed eseguilo. Questo file complementare è separato dall’esempio tutorial incluso denominato **rc-ac**. Contiene definizioni di misurazioni, requisiti e regolazioni già preparate.

Con R1 = 1 kΩ e C = 1 µF, la frequenza d’angolo nominale è circa 159,15 Hz. **Misurazioni** include il taglio, il guadagno a 100 Hz e la fase alla frequenza d’angolo ideale; **Requisiti** verifica che la frequenza di taglio sia compresa tra 150 e 170 Hz.

![Controlli di regolazione di Circuit Explorer nello schema RC complementare](../Images/simulation/explorer-tuning.png)

## Regola senza modificare il circuito salvato
{: #tune-without-changing-the-saved-circuit}

In **Regolazione / sweep**, seleziona un componente e una proprietà numerica, quindi **Aggiungi controllo di regolazione**. Selezionando un componente nello schema, questo viene preselezionato nel selettore. Puoi anche associare impostazioni supportate di sorgenti/strumenti e parametri di configurazione con nome. Testo arbitrario, espressioni e contenuti di file di modello non possono essere regolati tramite cursore.

I controlli supportano unità, limiti, scale lineari/logaritmiche e aggancio ai valori preferenziali E12/E24/E96. Dopo una modifica, viene pianificata un’esecuzione dopo circa 500 ms. I valori temporanei sono separati dai valori dei componenti salvati.

- **Annulla regolazione** ripristina la sovrascrittura temporanea precedente.
- **Reimposta** ripristina i valori e l’acquisizione originali.
- **Applica** scrive le sovrascritture nello schema come un’unica modifica annullabile.

Una proprietà numerica influisce sul circuito solo se il modello SPICE del componente la utilizza effettivamente. Non dare per scontato che la modifica di un attributo inutilizzato cambi il modello.

### Sweep a variabile singola
{: #one-variable-sweeps}

Espandi **Sweep a variabile singola** e scegli un controllo. Usa da 2 a 100 punti lineari/logaritmici o da 1 a 100 valori espliciti, separati da spazi o punti e virgola. **Esegui sweep** esegue l’analisi selezionata per ciascun valore. **Annulla** interrompe la pianificazione di altri casi e conserva i risultati completati.

Il file RC complementare include i valori 1 kΩ, 2,2 kΩ, 4,7 kΩ, 6,8 kΩ e 10 kΩ. Le rispettive frequenze di taglio ideali sono circa 159,15, 72,34, 33,86, 23,41 e 15,92 Hz. Confronta le sovrapposizioni oppure una metrica con nome con il valore del parametro. È diverso dall’[analisi sweep DC](../Simulation-Analyses/#dc-sweep), che varia una sorgente indipendente nell’ambito di un’analisi DC.

Le definizioni dello sweep, i valori, le unità, lo stato delle esecuzioni e le metriche acquisite vengono salvati in `.dzn`. **Sweep salvato** consente di tornare a un gruppo. Rimuovendo i risultati grezzi si eliminano le sovrapposizioni delle forme d’onda, ma le tabelle scalari acquisite e i metadati del rapporto possono restare. Vengono conservati fino a 100 gruppi di sweep, nel rispetto dei normali limiti di acquisizione e dati.

## Definisci misurazioni con nome
{: #define-named-measurements}

In **Misurazioni**, aggiungi un nome, seleziona un segnale/componente ed espandi le relative impostazioni. Imposta una finestra temporale/di frequenza significativa e gli eventuali livelli o riferimenti richiesti. I collegamenti ai componenti/alle sonde usano l’identità del foglio insieme al riferimento, per poter sopravvivere alla riapertura.

![Misurazioni preparate di frequenza di taglio, guadagno e fase](../Images/simulation/explorer-measurements.png)

| Misurazione | Interpretazione |
| --- | --- |
| Valore, minimo, massimo, picco-picco | Valore di un segnale in una posizione o estremi nella finestra scelta |
| Media, RMS, RMS dell’ondulazione | Quantità transitorie ponderate nel tempo; l’RMS dell’ondulazione rimuove la media |
| Integrale | Area nel tempo; l’integrazione dei watt produce joule |
| Tempo di salita/discesa | Prima transizione completa dal 10% al 90% tra i livelli basso/alto dichiarati |
| Periodo, frequenza, ciclo di lavoro, larghezza dell’impulso | Primo ciclo/impulso completo usando una soglia esplicita o il livello intermedio della finestra |
| Ritardo | Primo attraversamento crescente dell’uscita meno il primo attraversamento del riferimento, alla stessa soglia |
| Sovraelongazione/sottoelongazione | Escursione rispetto ai livelli iniziale/finale dichiarati e all’ampiezza del gradino |
| Tempo di assestamento | Ultimo ingresso nella banda di tolleranza del valore finale, misurato dall’inizio della finestra |
| Costante di tempo | Primo attraversamento di iniziale + (finale − iniziale) × (1 − 1/e), misurato dall’inizio della finestra |
| Guadagno/fase CA | Rapporto complesso uscita/ingresso alla frequenza scelta |
| Taglio/larghezza di banda | Attraversamenti a metà potenza, −3,0103 dB rispetto al riferimento di guadagno scelto |
| Risonanza | Picco di modulo interno più alto; un massimo al limite non costituisce una risonanza risolta |
| Metriche di risposta aggiuntive | Ondulazione in banda passante, attenuazione in banda soppressa, modulo dell’impedenza di porta e ritardo di gruppo |

L’integrazione transitoria tiene conto dei passi temporali disuguali e degli estremi interpolati della finestra. L’RMS include la componente continua; l’RMS dell’ondulazione la rimuove. Il ritardo può essere negativo quando l’attraversamento dell’uscita precede quello del riferimento. Le metriche temporali richiedono che nella finestra sia presente una porzione sufficiente della transizione o del ciclo pertinente.

Dichiara i livelli iniziale/finale per le metriche del gradino. Un livello finale errato rende fuorvianti il tempo di assestamento e la sovraelongazione. Un campione finale non assestato, un attraversamento mancante, un collegamento ambiguo, un’unità incompatibile o una finestra non valida produce il risultato **non disponibile**, non uno zero inventato.

Per la frequenza di taglio, usa un guadagno di riferimento lineare esplicito oppure **picco**. Un riferimento unitario è adatto al semplice filtro RC, ma un amplificatore con guadagno 20 richiede un riferimento diverso. La larghezza di banda richiede due attraversamenti validi; l’interpolazione della frequenza è logaritmica. Un picco arbitrario al limite della scansione non dimostra una risonanza.

## Requisiti e sovrapposizioni DC
{: #requirements-and-dc-overlays}

Usa **Requisiti** per verificare una misurazione con nome rispetto a **almeno**, **al massimo** o un intervallo inclusivo **tra**. Le unità devono corrispondere. Gli esiti sono **superato**, **non superato** o **non disponibile**; una metrica non disponibile non equivale a un requisito superato.

![Requisito sulla frequenza di taglio RC con un intervallo accettabile esplicito](../Images/simulation/explorer-requirements.png)

Seleziona una misurazione disponibile per esaminarne gli elementi probatori e l’eventuale evidenziazione applicabile nello schema. Conserva le definizioni delle misurazioni, le finestre e le soglie insieme ai risultati esportati. L’evidenziazione bidirezionale generale delle sonde non è completa per ogni tipo di segnale o modello.

La sovrapposizione DC nello schema richiede un’acquisizione del punto di funzionamento recente e completata. La tensione è riferita a 0; la direzione della corrente segue l’ordine dei terminali configurato. La potenza assorbita è positiva, quindi una sorgente che eroga potenza può avere potenza negativa. La corrente di un resistore ideale può essere ricavata da V/R; le correnti dei dispositivi non supportate vengono omesse anziché inventate.

## Laboratorio di analisi
{: #analysis-lab}

![Flussi di lavoro del Laboratorio di analisi in Circuit Explorer](../Images/simulation/analysis-lab.png)

### Risposta in frequenza e dell’amplificatore
{: #frequency-and-amplifier-response}

Scegli ingresso/uscita, intervallo di frequenza e frequenza di lettura. Esegui l’analisi CA per esaminare guadagno, fase, taglio, larghezza di banda, risonanza, Q del passa-banda e ritardo di gruppo. Q del passa-banda significa `f₀ / half-power bandwidth`. I calcoli della funzione di trasferimento usano uno stimolo con nome esplicito. L’impedenza di porta richiede una configurazione di prova tensione/corrente deliberata; un rapporto arbitrario tra nodi non è una misura del guadagno d’anello.

### Tolleranza e angoli
{: #tolerance-and-corners}

Uno studio Monte Carlo ripete le esecuzioni con distribuzioni dei componenti configurate: uniforme limitata con tolleranza ± oppure normale non limitata specificata dalla deviazione standard. Imposta un seme casuale senza segno e da 2 a 100 casi. Riutilizzando il seme e la configurazione, il campionamento è ripetibile. I gruppi completamente correlati positivamente condividono un’estrazione standardizzata e devono usare un solo tipo di distribuzione.

I valori campionati non positivi di resistenza, capacità, induttanza o frequenza fisiche sono casi falliti. Esamina gli errori invece di escluderli silenziosamente. Media, deviazione standard campionaria e istogrammi descrivono i risultati campionati, non ogni possibile componente prodotto.

La ricerca degli angoli enumera fino a sei variabili indipendenti, ovvero 64 angoli. Ignora i gruppi di correlazione Monte Carlo. Il peggior risultato osservato riportato non prova che sia il peggior caso globale tra gli angoli. La resa è indicativa, date le ipotesi inserite sul modello e sulla distribuzione; uno studio senza requisiti valutabili non fornisce una stima della resa.

### Casi di prova
{: #test-cases}

Acquisisci un’analisi, i parametri, le definizioni e i collegamenti di tracce/misurazioni/requisiti come caso. Assegna ai casi temperature o sovrascritture diverse per parametri, stimoli e carichi, quindi esegui la suite. I casi condividono lo **schema e i modelli correnti**; non sono revisioni storiche indipendenti del circuito. Ogni esecuzione registra l’identità dei propri input.

I rapporti JSON contengono condizioni, esiti e cronologia dello studio. Gli studi vengono eseguiti in sequenza e possono essere annullati; i casi non riusciti o non convergenti restano visibili. Le definizioni, il seme, le condizioni dei casi e i riferimenti ai gruppi persistono in `.dzn`. Gli ultimi 100 gruppi di studio vengono conservati entro i normali limiti dei risultati.

### Potenza, efficienza e sollecitazioni
{: #power-efficiency-and-stress}

Scegli i segnali di potenza dei componenti supportati e i limiti espliciti per tensione, corrente o potenza di picco. Le misurazioni Media/RMS/Integrale forniscono potenza media, corrente RMS ed energia. Per l’efficienza servono un limite d’ingresso che eroga potenza con segno corretto e un limite di carico utile che la assorbe. Correnti dei dispositivi non supportate o ambigue rendono il risultato non disponibile.

L’analisi CA a piccoli segnali non è una prova di sollecitazione a grandi segnali. Un limite numerico inserito in TinyCAD non aggiunge un modello termico del package, una specifica di potenza impulsiva o un meccanismo di protezione. Usa condizioni transitorie e modelli adeguati alla domanda e riporta le relative ipotesi.

## Limiti attuali
{: #current-limits}

I flussi di lavoro implementati non includono l’analisi FFT/della distorsione armonica, l’iniezione automatica di guasti, sweep multidimensionali senza restrizioni, l’ottimizzazione automatica o le funzioni collaborative Live/Pause. Nell’esaminare i risultati, considera lo stato effettivo dell’esecuzione (completata/arrestata/non riuscita) e la disponibilità reale dei dati. Consulta la [risoluzione dei problemi](../Simulation-Troubleshooting/) quando una metrica o un’acquisizione non è disponibile.
