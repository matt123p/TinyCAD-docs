---
layout: default
---
# Disegni con più fogli
{: #multiple-sheet-drawings}

Un disegno TinyCAD può contenere diversi fogli schematici in **un unico file**. Ogni foglio ha una propria area di disegno e una scheda sotto l'area di lavoro. Usa le schede per lavorare su un foglio alla volta; nel loro insieme, i fogli schematici descrivono un unico circuito.

## Perché usare più fogli?
{: #why-use-multiple-sheets}

Più fogli consentono di organizzare un progetto in sezioni comprensibili, invece di rimpicciolire tutto su una pagina troppo affollata. Per esempio:

| Foglio | Possibile contenuto |
| --- | --- |
| **Alimentazione** | Connettore di ingresso, protezioni, regolatori e linee di alimentazione |
| **Controllo** | Processore, clock, reset e collegamenti di programmazione |
| **Sensori** | Ingressi di misura e relativi circuiti di interfaccia |
| **Uscite** | Driver, relè, motori, display o connettori esterni |

In questo modo, ogni sezione è più facile da disegnare, esaminare e stampare a dimensioni leggibili. Puoi tenere insieme i componenti correlati, assegnare a ogni pagina uno scopo chiaro e disporre le pagine in un ordine di lettura utile. Per un progetto piccolo, un singolo foglio può comunque risultare più chiaro.

Un foglio fa parte del disegno corrente; non è un file separato né una scheda del browser. Aprire due file di disegno non correlati non li collega, anche se contengono etichette identiche.

## Creare e cambiare foglio
{: #create-and-switch-sheets}

1. Apri il disegno e individua le schede dei fogli sotto l'area di lavoro.
2. Scegli **+** accanto alle schede. La descrizione comando è **Add new sheet** (Aggiungi nuovo foglio).
3. Inserisci un **Sheet Name** (Nome foglio), ad esempio `Control`, quindi scegli **Add** (Aggiungi).
4. Il nuovo foglio diventa attivo. Inseriscivi componenti e fili oppure sposta gli elementi selezionati da un altro foglio usando Taglia e Incolla.
5. Seleziona la scheda di un foglio per tornarvi. Cambiare foglio non elimina il suo contenuto.

Usa nomi distinti e descrittivi, così chi legge lo schema può trovare la sezione desiderata.

## Rinominare un foglio
{: #rename-a-sheet}

1. Seleziona la scheda del foglio.
2. Apri il piccolo menu a freccia accanto al nome.
3. Scegli **Rename** (Rinomina), inserisci il nuovo **Sheet Name** (Nome foglio), quindi scegli **Rename** (Rinomina) nella finestra di dialogo.

Rinominare cambia il nome della pagina. Non rinomina i riferimenti dei componenti né le etichette di rete e non modifica i collegamenti elettrici.

## Modificare l'ordine dei fogli
{: #change-the-sheet-order}

Trascina una scheda del foglio sopra un'altra per spostarla in quella posizione. Puoi anche selezionare una scheda, aprire il relativo menu a freccia e scegliere **Move left** (Sposta a sinistra) o **Move right** (Sposta a destra) per spostarla di una posizione alla volta.

Riordinare cambia la sequenza delle pagine, non i componenti né i collegamenti del circuito. Usa questa funzione per mettere per prima la sezione di alimentazione, raggruppare le funzioni correlate o collocare le pagine di supporto dopo il circuito principale. Trascina la **scheda** quando vuoi riordinare le pagine; trascinando un componente, sposti invece quel componente.

## Video: organizzare i fogli e collegarli con le etichette
{: #video-organise-sheets-and-connect-them-with-labels}

La procedura guidata parte da **Open Example → SPICE tutorial → divider** (Apri esempio → esercitazione SPICE → partitore). Rinomina il foglio Circuit in Power, crea Control, riordina le schede e poi sposta R2 in Control. Le etichette OUT corrispondenti e i collegamenti di massa denominati 0 ricollegano il partitore attraverso i due fogli schematici. La vista Netlist conferma che R1 e R2 condividono la rete OUT.

{% include video-player.html src="/v4/videos/simulation/multiple-sheets.mp4" poster="/v4/videos/simulation/multiple-sheets.jpg" caption="Crea, rinomina e riordina i fogli, poi usa etichette corrispondenti per collegare un partitore tra Power e Control." %}

L'esempio contiene anche un foglio Simulation contrassegnato da un'icona a forma di orologio. Questo foglio memorizza le impostazioni e i risultati dell'analisi; è diverso da una pagina schematica. Tutti i fogli schematici contribuiscono comunque allo stesso circuito simulato.

## Creare collegamenti tra fogli
{: #make-connections-between-sheets}

Un filo non può proseguire fisicamente su un'altra pagina. Usa invece **etichette elettricamente attive con lo stesso nome** nei punti che vuoi collegare. TinyCAD considera quei punti come un'unica rete su tutti i fogli schematici del disegno.

Per esempio, un'uscita del regolatore etichettata `+3V3` nel foglio Power può alimentare un ingresso del processore etichettato `+3V3` nel foglio Control. Un segnale etichettato `RESET` può collegare un circuito di reset su un foglio a un processore su un altro. Le etichette devono essere collegate ai fili o ai pin desiderati.

### Inserire un'etichetta di rete condivisa
{: #place-a-shared-net-label}

1. Nel primo foglio, traccia il filo locale fino al pin del componente come di consueto.
2. Seleziona lo strumento **Label** (Etichetta) e posiziona il suo punto di connessione elettrica sul filo o sul pin. Il solo testo disegnato nelle vicinanze non è sufficiente.
3. Modifica il testo dell'etichetta assegnandogli un nome chiaro, ad esempio `RESET` o `I2C_SDA`. Seleziona il testo dell'etichetta per modificarlo; sostituisci il testo predefinito `Label`.
4. Passa all'altro foglio e inserisci un'altra etichetta sul filo o sul pin da collegare alla stessa rete.
5. Inserisci **esattamente lo stesso nome**, comprese ortografia, spazi e maiuscole/minuscole.
6. Ripeti la procedura sugli altri fogli in cui serve la stessa rete elettrica.

Usa lo [strumento Label](../Labels/), invece dello [strumento Text](../Text/). Una nota con scritto RESET documenta il disegno; un'etichetta con scritto RESET crea un collegamento elettrico.

### Esempio svolto: un partitore su due fogli
{: #worked-example-a-divider-on-two-sheets}

Suddividi il normale partitore da 5 V in una sezione di alimentazione e una sezione di carico:

| Foglio | Componenti | Collegamenti condivisi |
| --- | --- | --- |
| **Power** | V1 = 5 V e R1 = 1 kΩ | Il filo di uscita di R1 è etichettato **OUT**; il ritorno di V1 è collegato alla massa **0**. |
| **Control** | R2 = 1 kΩ | Il pin superiore di R2 è etichettato **OUT** e quello inferiore è collegato a un simbolo di alimentazione di massa denominato **0**. |

OUT collega R1 a R2 attraverso i fogli. I nomi di massa corrispondenti collegano il ritorno di R2 alla massa 0 nel foglio Power. Non viene tracciato alcun filo tra le pagine, ma il circuito elettrico resta V1 → R1 → R2 → ritorno. Con i valori originali, l'uscita del punto di funzionamento resta pari a 2.5 V.

Nel video R2 viene spostato con **Cut and Paste** (Taglia e Incolla), mantenendone il riferimento anziché creare un secondo R2. Quando aggiungi altri componenti, mantieni riferimenti univoci nell'intero disegno, così netlist e rapporti identificano il componente desiderato.

## I nomi delle etichette valgono per l'intero disegno
{: #label-names-apply-to-the-whole-drawing}

I nomi condivisi sono utili, ma possono anche causare collegamenti accidentali tra sezioni non correlate. Un'etichetta chiamata `OUT` su tre fogli diversi collega tutte e tre le posizioni; non è locale a ciascuna pagina. Usa nomi più specifici, come `SENSOR_OUT` e `AUDIO_OUT`, quando i segnali devono restare separati.

I nomi dei fogli e l'ordine delle schede non garantiscono l'isolamento elettrico. Anche la forma di un'etichetta è solo una convenzione visiva: le etichette semplici, di ingresso, di uscita e bidirezionali con lo stesso nome appartengono alla stessa rete. Scegli le forme per aiutare chi legge a seguire la direzione prevista del segnale e i nomi per definire i collegamenti.

Anche i [simboli di alimentazione](../Power-symbols/) forniscono collegamenti di alimentazione nominati e condivisi. Mantieni coerenti i nomi: `+3V3` e `3V3` sono nomi diversi. Per SPICE, usa un collegamento reale al nodo **0**; una rete separata denominata GND non diventa automaticamente il riferimento di massa del simulatore.

## Verificare i collegamenti tra fogli
{: #check-the-cross-sheet-connections}

Usa il menu delle modalità del pannello inferiore con l'elenco per passare da **Symbols** (Simboli) a **Netlist**. Individua l'etichetta condivisa e controlla i riferimenti dei componenti e i numeri dei pin collegati. La colonna Sheet indica l'elemento principale rappresentato dalla riga; la colonna Symbols può includere componenti di altri fogli appartenenti alla stessa rete. Nell'esempio, OUT include sia R1 sia R2.

Se manca un collegamento, controlla il punto di collegamento dell'etichetta e il testo esatto su entrambe le pagine. Se componenti non correlati condividono una rete, cerca altrove nel disegno un nome di etichetta riutilizzato. [Design Rules Check](../Design-Rules-Check/) può aiutare a individuare problemi elettrici, ma non può stabilire se volevi che due reti con lo stesso nome fossero separate.

Per ulteriori dettagli, consulta [Netlist Editor](../Netlist-Editor/) e [Labels](../Labels/). In un disegno di simulazione, esegui di nuovo l'analisi dopo aver modificato il circuito, affinché il risultato rifletta tutti i fogli schematici aggiornati.

## Salvare il disegno completo
{: #save-the-complete-drawing}

**Save** (Salva) salva insieme tutti i fogli. I disegni normali usano `.dsn`; quelli che contengono contenuti di simulazione usano [`.dzn`](../Simulation/#dzn-simulation-drawings). Non è necessario salvare ogni foglio separatamente.

- Torna a [Drawing](../User-guide/)
