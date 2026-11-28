---
layout: default
---
# Sorgenti, sonde e strumenti virtuali
{: #sources-probes-and-virtual-instruments}

Il menu **Simulation** della barra degli strumenti contiene gli strumenti di inserimento **SPICE** e **Lab Equipment**. Scegliere uno strumento e posizionarlo su uno schema. Fare clic con il pulsante destro o premere Esc per annullare il posizionamento. Gli strumenti selezionati da un foglio Simulation passano a uno schema per il posizionamento; le relative definizioni sono incorporate nel disegno.

## Sorgenti indipendenti
{: #independent-sources}

Scegliere **Simulation → SPICE → Insert Source** (Inserisci sorgente). L'editor si apre prima del posizionamento. Selezionare tensione o corrente e un tipo di segnale. Selezionare il corpo di una sorgente posizionata per riaprire l'editor nella parte inferiore.

| Tipo di segnale | Utilità | Impostazioni da controllare |
| --- | --- | --- |
| DC | Polarizzazione e alimentazione costante | Valore DC e polarità |
| Sine | Ingresso analogico periodico | Offset, ampiezza di picco, frequenza, fase, ritardo e smorzamento |
| Square/pulse | Commutazione e temporizzazione | Livelli basso/alto, ritardo, tempo di salita/discesa, larghezza e periodo dell'impulso |
| Triangle | Rampa ripetitiva | Livelli, periodo e temporizzazione della rampa |
| Piecewise-linear (PWL) | Sequenza prescritta | Coppie tempo/valore crescenti, una coppia per riga |
| Exponential | Transizione sagomata | Livelli, ritardi e costanti di tempo |
| FM | Modulazione di frequenza | Impostazioni della portante e della modulazione |

![Editor della sorgente sinusoidale e anteprima della forma d'onda](../Images/simulation/source-settings.png)

L'anteprima riflette le impostazioni numeriche della forma d'onda. Usarla per individuare eventuali offset, picchi o temporizzazioni inattesi prima dell'esecuzione. Impostazioni non valide impediscono l'avvio. L'icona di una sorgente cambia in base alla sua forma d'onda e una sorgente di corrente conserva la freccia di direzione.

**L'ampiezza e la fase AC sono impostazioni separate** per l'analisi in frequenza a piccoli segnali. Sono indipendenti dall'ampiezza della sinusoide transitoria. Anche la polarizzazione DC della sorgente e la forma d'onda transitoria devono essere scelte deliberatamente. Vedere [le analisi](../Simulation-Analyses/) e [l'esercitazione sulle sorgenti](../SPICE-Tutorial-03/).

Le nuove sorgenti e sonde usano una distanza compatta di 8 mm tra i terminali. Nei controlli grandi meno recenti, l'editor in basso offre **Use compact symbol**. La conversione mantiene ancorato il primo terminale ed estende i collegamenti esistenti fino ai terminali ridimensionati come un'unica operazione annullabile. Dopo aver cambiato dimensione, controllare quei collegamenti.

## Sonde e massa
{: #probes-and-ground}

| Strumento in **Simulation → SPICE** | Collegamento | Significato |
| --- | --- | --- |
| **Insert Probe** | Una punta su una rete | Tensione rispetto alla massa 0 |
| **Insert Differential Probe** | + e − su due reti | `V(+) − V(−)` |
| **Insert Current Probe** | In serie in un ramo | Corrente da + verso − |
| **Insert Ground** | Sulla rete di riferimento del circuito | Collega il simbolo di alimentazione Earth con valore 0 |

L'inserimento di sonde e massa si aggancia a un filo e lo divide nel punto di connessione. Controllare la posizione effettiva della punta e la polarità. Una sonda di corrente è una **sorgente ideale di tensione da zero volt**: deve essere collegata in serie. Collegarla ai capi di un'alimentazione provoca un cortocircuito. Quando si inserisce una misura in serie, rimuovere o interrompere il filo parallelo originale.

I pannelli delle sonde selezionano l'acquisizione e la modalità di visualizzazione. I segnali del punto di lavoro possono mostrare letture scalari; i risultati AC complessi possono essere visualizzati in forma reale, modulo, dB e fase. Se il risultato richiesto non è disponibile o appartiene a un circuito modificato, il pannello spiega perché non è disponibile o perché occorre eseguire di nuovo la simulazione.

### Sorgenti controllate
{: #controlled-sources}

**Insert Controlled Source** (Inserisci sorgente controllata) fornisce una sorgente di tensione controllata in tensione (**E**) o una sorgente di corrente controllata in tensione (**G**). I pin di uscita sono +/−, numerati 1/2; i pin di controllo sono C+/C−, numerati 3/4. Collegare entrambi i lati dell'ingresso di controllo e controllare la caratteristica di trasferimento nell'editor. Una porta di controllo non è un terminale di uscita di alimentazione.

## Strumentazione virtuale di laboratorio
{: #virtual-laboratory-equipment}

Scegliere questi strumenti da **Simulation → Lab Equipment**. Sono modelli operativi dotati di controlli di acquisizione. Le immagini con nomi simili in **Standard → Test & Measurement** servono per i disegni di disposizione delle apparecchiature fisiche da banco e non effettuano misure di simulazione.

Per un circuito già cablato, scaricare [Virtual laboratory.dzn](../examples/simulation/virtual-laboratory.dzn) e usare **File → Open**. Si tratta di un file dimostrativo complementare, non di una voce con nome specifico nel browser degli esempi inclusi.

### Oscilloscopio
{: #oscilloscope}

L'oscilloscopio ha due canali differenziali: **1 A+**, **2 A−**, **3 B+**, **4 B−**. Collegare ciascun ingresso negativo, oltre a quello positivo. L'impedenza predefinita degli ingressi è **1 MΩ**; può influire su un circuito ad alta impedenza.

Usare time/div e volts/div con la visualizzazione a dieci divisioni orizzontali per otto verticali. Le modalità di trigger sono **Auto**, **Normal** e **Single**. **Acquire** richiede dieci divisioni temporali di dati transitori, con un passo massimo approssimativamente pari a time/div diviso 100. Cambiare la scala di visualizzazione dopo un'esecuzione non crea una nuova acquisizione né risolve la mancanza di fronti.

L'accoppiamento AC rimuove dal segnale visualizzato la media ponderata nel tempo; non è un modello fisico di ingresso analogico passa-alto. L'accoppiamento GND visualizza zero mentre il carico dello strumento resta collegato. I controlli di tempo/livello dell'oscilloscopio aiutano a esaminare i dati; non trasformano un'esecuzione sottocampionata in una misura di temporizzazione valida.

### Multimetro
{: #multimeter}

Usare **VΩ e COM** per tensione o resistenza e **A e COM** per corrente. La misura di corrente deve essere eseguita in serie. L'ingresso di tensione predefinito è **10 MΩ**; la modalità corrente usa una **resistenza di burden da 1 Ω** e una sorgente di rilevamento da zero volt. Cambiare modalità modifica quindi il carico del circuito e richiede una nuova esecuzione.

La modalità DC visualizza la quantità costante/media pertinente. La modalità AC usa il valore efficace RMS ponderato nel tempo, con la componente DC rimossa. Un valore fuori intervallo mostra **OL**. Si tratta di comportamenti dello strumento modellati, senza simulazione dei guasti termici o del fusibile.

La misura della resistenza è una prova temporanea separata, a circuito non alimentato. Le sorgenti indipendenti vengono disattivate e i collegamenti dello strumento vengono scollegati durante la prova. La rete supportata comprende R/C/L e sonde: i condensatori sono circuiti aperti in DC e gli induttori sono cortocircuiti. I componenti attivi o i template non supportati rendono indisponibile la misura della resistenza. Non interpretarla come una lettura della resistenza in circuito di un qualsiasi dispositivo elettronico alimentato.

### Generatore di funzioni
{: #function-generator}

Il generatore fornisce forme d'onda sinusoidali, impulsive/a onda quadra, triangolari e PWL, con controlli di ampiezza, offset, frequenza e temporizzazione. L'anteprima mostra la forma d'onda **a circuito aperto**. La sua **resistenza di uscita predefinita di 50 Ω** può ridurre l'ampiezza ai terminali in presenza di un carico collegato.

Output Off approssima una porta aperta con una dispersione di **1 TΩ**. L'ampiezza AC a piccoli segnali resta distinta dall'ampiezza transitoria. Prima di confrontare la forma d'onda programmata con un valore misurato, verificare se l'ampiezza richiesta è di picco, picco-picco o RMS.

### Alimentatore da banco
{: #bench-supply}

Impostare tensione, limite di corrente, resistenza di uscita, abilitazione e tempo di rampa facoltativo. Il modello usa un limite di corrente comportamentale graduale e una resistenza finita; il pannello indica V/I misurati e il funzionamento **CV/CC**. Se si riduce il limite di corrente al di sotto della richiesta del carico, la tensione fornita diminuisce.

Può erogare o assorbire corrente entro lo stesso limite. Non è un modello di alimentatore a commutazione specifico di un produttore né un modello termico. L'uscita disabilitata usa un'approssimazione di dispersione da 1 TΩ. La rampa influisce sull'analisi transitoria; il punto di lavoro DC usa la tensione finale programmata.

Le proprietà numeriche del generatore e dell'alimentatore possono essere associate a [Circuit Explorer](../Simulation-Charts-and-Measurements/) per regolazioni temporanee o condizioni di prova. Desktop può aprire i pannelli degli strumenti in finestre separate; le finestre separate dei grafici sono disponibili in entrambi i prodotti.

## Il carico fa parte dell'esperimento
{: #loading-is-part-of-the-experiment}

Una sonda di tensione ideale e un ingresso di oscilloscopio caricato non producono lo stesso circuito. Prima di confrontare i risultati, tenere conto dell'impedenza del generatore, della resistenza di burden del multimetro, del carico d'ingresso dell'oscilloscopio e dei ritorni condivisi. Usare una misura differenziale quando nessuna delle due estremità del segnale è collegata a massa. Se l'esecuzione non riesce dopo aver aggiunto uno strumento, controllarne il cablaggio e la modalità prima di modificare le impostazioni del risolutore.
