---
layout: default
---
# Analisi e impostazioni della simulazione
{: #simulation-analyses-and-settings}

Scegli un'analisi nella scheda **Setup** di un [foglio di simulazione](../Simulation/). Selezionala in base alla domanda a cui vuoi rispondere. Una sinusoide nel dominio del tempo e una scansione AC in frequenza sono esperimenti diversi, anche quando utilizzano lo stesso simbolo di sorgente.

| Analisi | Domanda | Risultato principale |
| --- | --- | --- |
| **Punto di funzionamento** | Quali sono le tensioni e le correnti di polarizzazione in CC? | Valori scalari |
| **Transitorio** | Cosa accade dopo una variazione o durante cicli ripetuti? | Segnali in funzione del tempo |
| **AC** | Come varia un piccolo segnale con la frequenza? | Segnali complessi in funzione della frequenza |
| **Scansione CC** | Come varia il comportamento in CC al variare di una sorgente indipendente? | Segnali in funzione del valore della sorgente |
| **Rumore** | Quanto rumore raggiunge l'uscita scelta? | Grafici del rumore spettrale e integrato |
| **Funzione di trasferimento** | Qual è il trasferimento CC a piccolo segnale da una sorgente denominata? | Guadagno e resistenza d'ingresso/uscita |
| **Poli-Zeri** | Dove si trovano i poli e gli zeri del trasferimento configurato? | Risultati complessi di poli e zeri |

## Punto di funzionamento
{: #operating-point}

Il punto di funzionamento determina una soluzione stazionaria in CC. I condensatori ideali sono circuiti aperti e gli induttori ideali sono cortocircuiti in CC. I dispositivi non lineari, come diodi e transistor, vengono risolti nelle rispettive condizioni di polarizzazione. Verifica questa analisi prima di tentare di calcolare la risposta in frequenza di un amplificatore a transistor: un transistor polarizzato in modo errato verrà linearizzato attorno allo stato sbagliato.

Usa **Data** per visualizzare le tensioni di nodo e le correnti di ramo. La tensione è riferita alla massa 0. Il segno della corrente dipende dall'ordine dei terminali dichiarato per il dispositivo; una corrente negativa dell'alimentatore può semplicemente indicare che sta erogando potenza. Il [tutorial sulla CC](../SPICE-Tutorial-02/) illustra tensione, corrente e potenza.

![Risultati scalari di tensione e corrente della recente esecuzione del punto di funzionamento del partitore](../images/simulation/simulation-data.png)

## Transitorio: comportamento nel tempo
{: #transient-behaviour-over-time}

Imposta **Duration** in modo che sia abbastanza lunga da includere l'evento e la parte della risposta che devi misurare. Imposta **Maximum step** su un valore abbastanza piccolo da risolvere la caratteristica significativa più rapida. Per un impulso, potrebbe trattarsi del fronte, non del periodo di ripetizione. Una visualizzazione dall'aspetto uniforme non può recuperare transizioni che il risolutore non ha risolto.

Per un circuito RC in carica, la costante di tempo è `τ = R × C`. Circa cinque costanti di tempo mostrano la maggior parte della risposta di assestamento del primo ordine. Per misurare l'ondulazione o il valore RMS, simula abbastanza cicli da raggiungere una condizione stazionaria e misura una finestra successiva, evitando di includere involontariamente l'avvio.

Il risolutore usa passi temporali adattivi. Maximum step limita l'ampiezza del passo; non garantisce una griglia di campionamento equidistante. Gli algoritmi di misura tengono conto degli istanti di campionamento effettivi. Lo zoom del grafico modifica la visualizzazione, non il passo temporale di acquisizione.

Per impostazione predefinita, un'esecuzione transitoria calcola prima un punto di funzionamento in CC. L'opzione delle condizioni iniziali che salta questo passaggio corrisponde a SPICE **UIC**. Usala consapevolmente quando lo stato iniziale specificato fa parte dell'esperimento; non è una soluzione generica per un circuito collegato in modo errato. Vedi [carica RC](../SPICE-Tutorial-04/) e [raddrizzamento e ondulazione](../SPICE-Tutorial-06/).

## AC: risposta in frequenza a piccolo segnale
{: #ac-small-signal-frequency-response}

L'analisi AC calcola prima il punto di funzionamento, linearizza i dispositivi non lineari in quel punto e calcola la risposta a una piccola perturbazione sinusoidale. **Non** esegue una scansione nel tempo di una sinusoide di ampiezza elevata fino al clipping. Usa l'analisi transitoria per studiare clipping, distorsione ed escursioni di grande segnale.

Imposta le frequenze iniziale e finale e i punti per decade. Una scansione logaritmica è utile quando si esaminano più ordini di grandezza. Aumenta la risoluzione in frequenza in prossimità di una risonanza stretta o di frequenze di taglio ravvicinate.

Imposta **AC amplitude** e la fase della sorgente separatamente dalle impostazioni della forma d'onda transitoria. Un'ampiezza AC di **1 V** con fase **0°** semplifica l'interpretazione del trasferimento di tensione con un singolo ingresso. La sola ampiezza della sinusoide transitoria non abilita un'eccitazione AC. Per un ingresso generico, calcola il rapporto complesso `V(out) / V(in)`; la sola tensione d'uscita non è sempre il guadagno.

![Impostazioni della scansione AC per il filtro RC incluso](../images/simulation/ac-setup.png)

Per un filtro passa-basso del primo ordine con R = 1 kΩ e C = 1 µF, `fc = 1 / (2πRC) ≈ 159.15 Hz`. A tale frequenza, un filtro con banda passante unitaria ha un guadagno di circa 0,707, ovvero −3,0103 dB, e una fase di circa −45°. Il [tutorial sui filtri](../SPICE-Tutorial-05/) mostra il modulo, i dB e la fase.

![Risultati AC effettivi da una nuova esecuzione nel browser dell'esempio RC](../images/simulation/ac-charts.png)

## Scansione CC
{: #dc-sweep}

Scegli il **riferimento della sorgente**, ad esempio `V1`, e inserisci i valori iniziale, finale e di passo. Il riferimento identifica una sorgente indipendente di tensione o corrente; non è un'etichetta di rete. Scegli un passo che proceda dal valore iniziale verso quello finale.

Una scansione CC risolve una successione di condizioni di polarizzazione. È utile per una curva I–V di un diodo o per la curva di trasferimento statica di un amplificatore. Non modella la velocità di variazione della sorgente né la carica immagazzinata durante una rampa. Per questo, fornisci una forma d'onda variabile nel tempo e usa l'analisi transitoria.

Questa analisi differisce da una **scansione a una variabile di Circuit Explorer**, che esegue ripetutamente un'analisi selezionata variando un componente numerico o un parametro di configurazione. Ad esempio, esegui una scansione di R1 con cinque valori e ripeti un'analisi AC per confrontare le frequenze di taglio del filtro.

## Rumore
{: #noise}

Specifica la sorgente d'ingresso e i nodi d'uscita/riferimento, quindi l'intervallo e la risoluzione in frequenza. Il risultato è una differenza di tensione; verifica il riferimento scelto. L'analisi del rumore usa i contributi di rumore a piccolo segnale attorno al punto di funzionamento. Richiede modelli di dispositivi in grado di rappresentare il rumore; a un blocco comportamentale ideale e privo di rumore non viene assegnato automaticamente lo spettro di rumore di un dispositivo fisico.

Seleziona il grafico dei risultati corretto: la densità **spettrale** e il rumore **integrato** sono grandezze diverse. Rispetta le unità riportate nel grafico; una densità di ampiezza in V/√Hz non è una tensione finché non viene integrata su una banda definita. Vedi [indagini di progetto](../SPICE-Tutorial-10/).

## Funzione di trasferimento e poli-zeri
{: #transfer-function-and-pole-zero}

La **funzione di trasferimento** (`.tf`) usa una sorgente indipendente esplicitamente denominata e una porta d'uscita per calcolare il guadagno in CC a piccolo segnale e la resistenza d'ingresso/uscita. Non equivale all'intera scansione in frequenza di un'analisi AC. Verifica il riferimento della sorgente e che l'uscita sia misurata rispetto al nodo corretto.

L'analisi **Poli-Zeri** esamina i poli e gli zeri del trasferimento a piccolo segnale configurato. La scelta delle porte e del trasferimento è importante: non cerca ogni possibile comportamento di uno schema. Interpreta i risultati nel piano complesso insieme ai risultati AC e transitori, anziché considerarli un sostituto di un modello polarizzato correttamente.

## Temperatura, unità e parametri
{: #temperature-units-and-parameters}

La temperatura di configurazione è espressa in **°C**. Influisce sui dispositivi i cui modelli implementano la dipendenza dalla temperatura; non aggiunge effetti termici a un componente ideale. I parametri di configurazione denominati consentono di riutilizzare un valore numerico nelle espressioni SPICE compatibili e nei collegamenti per l'esplorazione.

I controlli numerici accettano la notazione ingegneristica, ad esempio `5ms`, `10us` e `1kHz`. Nel **testo SPICE**, i suffissi seguono le regole SPICE: `k` indica kilo, `u` micro, `n` nano e **`m` o `M` indica milli**. Scrivi **`Meg`** per mega, ad esempio `1Meg` per un megaohm. Non presumere che `1M` significhi un milione.

Il calcolo diretto della costante di tempo o della frequenza di taglio è un controllo utile. Non sostituisce la valutazione del carico: la resistenza d'uscita di un generatore, la resistenza d'ingresso di un misuratore o lo stadio successivo possono modificare la risposta effettiva.

Per la sintassi completa delle analisi e il comportamento dei modelli, consulta il [manuale ufficiale di ngspice](https://ngspice.sourceforge.io/docs.html). Per i controlli di TinyCAD, continua con [sorgenti e strumenti](../Simulation-Sources-and-Instruments/) o [grafici e misure](../Simulation-Charts-and-Measurements/).
