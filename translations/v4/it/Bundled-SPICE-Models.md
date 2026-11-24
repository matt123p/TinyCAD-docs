---
layout: default
---
# Modelli SPICE inclusi
{: #bundled-spice-models}

TinyCAD include un catalogo offline di modelli SPICE. Usa un modello incluso per simulare un componente con ngspice, confrontare dispositivi candidati o avviare un modello Custom partendo da una definizione funzionante nota. I modelli sono disponibili sia in TinyCAD Web sia nell'app Desktop. Il selettore funziona localmente dopo il caricamento dell'applicazione.

## Inizia con un simbolo modellato
{: #start-with-a-modelled-symbol}

Apri **Standard → Elementi essenziali SPICE** nel pannello laterale oppure usa **Simulazione → Componenti SPICE** nella barra degli strumenti. Scegli **Altro…** per sfogliare l'intera libreria di simboli. Tutti i 29 simboli degli elementi essenziali SPICE hanno un modello incluso e una mappatura dei pin preimpostata. La maggior parte usa un modello **TinyCAD Basic**. LM358 e LM324 usano modelli completi di package OpenJellyBean.

Posiziona un simbolo, selezionalo nel disegno e apri **SPICE** nel pannello inferiore **Simbolo**. **Incluso** mostra il modello collegato e la relativa origine. I normali campi del simbolo, come **Valore**, **Cursore** e **Tensione iniziale**, continuano a controllare i modelli TinyCAD Basic che usano tali campi. Per esempio, imposta **Valore** di un resistore su `10k` per simulare 10 kΩ con il modello predefinito **Resistore ideale**.

![La scheda SPICE del simbolo posizionato mostra selezionato Incluso e un collegamento al modello TinyCAD Basic per LED giallo.](/v4/images/simulation/bundled-spice-properties.png)

Per provarlo in un circuito completo, scegli **Apri esempio → Esercitazione SPICE → partitore** e seleziona uno dei resistori. La sua scheda **SPICE** mostra il collegamento **Resistore ideale**. Modifica il valore del resistore, quindi esegui di nuovo la configurazione dell'esempio relativa al punto di lavoro. Il risultato mantenuto rappresenta il circuito prima della modifica.

## Scegli e associa un modello
{: #choose-and-attach-a-model}

1. Apri la scheda **SPICE** del simbolo. Seleziona **Incluso**, quindi **Trova modello SPICE…**.
2. Inserisci un codice componente, un alias, un ID modello o una famiglia di dispositivi. Cancella il campo di ricerca per vedere le opzioni disponibili per quel simbolo.
3. Seleziona una riga. I dettagli sotto la tabella mostrano la descrizione del modello, l'origine, l'ordine dei terminali e gli eventuali parametri regolabili. Espandi **Visualizza definizione SPICE** per vedere il modello d'istanza e le eventuali schede modello o sottocircuiti utilizzati. Seleziona il collegamento all'origine per la definizione originale o l'archivio upstream e il nome del file contenuto.
4. Controlla la mappatura dei pin e imposta eventuali sostituzioni dei parametri. Scegli **Seleziona modello SPICE**. In un disegno, questa operazione modifica il posizionamento selezionato e può essere annullata.

![Finestra Trova modello SPICE per un LED giallo. Il modello circsim selezionato mostra l'origine e i numeri verificati dei pin di anodo e catodo.](/v4/images/simulation/bundled-spice-picker.png)

**I simboli degli elementi essenziali SPICE** elencano solo i modelli con mappature verificate per la disposizione dei pin del simbolo. Alcuni simboli hanno solo il modello Basic predefinito. Per esempio, un LED giallo offre il modello Basic e il LED giallo circsim. Un transistor NPN standard può usare il modello generico o un'alternativa come `2N3904_OJ` di OpenJellyBean, con collettore, base ed emettitore già mappati rispettivamente ai pin 3, 1 e 2.

**Altri simboli**, compresi i posizionamenti meno recenti senza l'identificativo della libreria, possono sfogliare l'intero catalogo per la propria edizione. Esamina le corrispondenze suggerite e seleziona un pin fisico distinto per ciascun terminale del modello. Includi i pin di alimentazione, anche quando sono nascosti nello schema. Usa il pinout del package verificato del simbolo e l'ordine dei terminali del modello. Lascia fuori dalla mappatura i pin fisici omessi dal modello. Un simbolo temporaneo con un numero o una funzione dei pin errati deve essere corretto prima di poter rappresentare il dispositivo.

![Mappatura manuale dei pin per un simbolo 741 in una libreria personalizzata, con i cinque terminali circsim LM741 assegnati ai pin fisici 3, 2, 6, 7 e 4.](/v4/images/simulation/bundled-spice-pin-mapping.png)

L'esempio mappa il modello circsim `LM741` su un simbolo 741 usando i pin 3 (non invertente), 2 (invertente), 6 (uscita), 7 (alimentazione positiva) e 4 (alimentazione negativa). Il modello omette i pin di azzeramento dell'offset. Per un simbolo di libreria multiparte, TinyCAD offre i numeri dei pin condivisi dalle parti che useranno il modello. Scegli un modello di package completo quando il simbolo e la simulazione richiedono il package intero.

Se il selettore mostra **Nessun modello corrisponde a questa ricerca**, cancella la ricerca o prova un termine più generico. Un simbolo con tag può offrire solo le opzioni verificate. Per usare un altro modello, controlla il pinout del dispositivo e usa un [simbolo di libreria personalizzato](../Custom-symbol-libraries/) oppure una definizione Custom appropriata.

## Scegli il livello di dettaglio corretto
{: #choose-the-right-level-of-detail}

| Cosa vuoi sapere | Da quale modello iniziare |
| --- | --- |
| Verificare un partitore, una costante di tempo RC o il comportamento di base del circuito | Usa TinyCAD Basic. I modelli ideali sono utili quando parassiti e tolleranze non rientrano nell'ambito della verifica. |
| Esaminare polarizzazione, guadagno, tensione diretta del diodo o commutazione con un componente specifico | Cerca il componente esatto o un equivalente documentato. Esamina la descrizione e le ipotesi del modello alle tensioni, correnti, temperature e frequenze in uso. |
| Esaminare un sostituto quando non è disponibile un modello esatto | Usa un candidato sostitutivo documentato o un modello generico della famiglia di dispositivi. Verifica separatamente le funzioni dei pin del package, la polarità dell'alimentazione e i limiti operativi. Registra quali comportamenti stai approssimando. |
| Analizzare un limite come rumore, intervallo di modo comune in ingresso, deriva termica o un angolo di processo | Controlla se il modello copre esplicitamente l'effetto. Se necessario, usa un modello appropriato del produttore o del processo come [definizione Custom](../SPICE-output/#models-templates-and-pin-order). |

I modelli inclusi descrivono il comportamento tipico. Per esempio, il modello circsim 741 rappresenta guadagno nominale, banda passante, velocità di variazione, offset e corrente di alimentazione. Usa uno stadio d'ingresso ad alta impedenza. Il modello circsim del LED giallo rappresenta il comportamento elettrico intorno a una curva adattata a 2.10 V a 20 mA. L'emissione luminosa, i valori nominali del dispositivo e il comportamento nei casi peggiori richiedono prove specifiche.

## Imposta un modello predefinito della libreria o modifica una copia Custom
{: #set-a-library-default-or-edit-a-custom-copy}

- **Per i posizionamenti futuri**, apri una libreria `.tclib` modificabile e seleziona il simbolo. Apri la scheda **SPICE** e usa lo stesso selettore di modelli. Salva la libreria. La definizione scelta diventa quella predefinita per i futuri posizionamenti da quella voce. I posizionamenti esistenti mantengono le definizioni salvate.
- **Per un singolo posizionamento**, selezionalo nello schema e modifica le sue proprietà **SPICE**. È utile per confrontare due modelli affiancati nello stesso disegno.
- **Per modificare il testo del modello**, seleziona **Custom** su un simbolo collegato. TinyCAD copia il modello d'istanza e le definizioni necessarie nei campi modificabili con i pin mappati. Per i modelli con definizioni, la copia locale usa nomi circoscritti al posizionamento, così può funzionare insieme all'originale incluso. Per un resistore ideale, il solo modello d'istanza è sufficiente.

Tornando a **Incluso** si ripristina il modello collegato. Seleziona di nuovo **Custom** per recuperare le modifiche. La modalità selezionata determina quale definizione viene usata ed entrambe le impostazioni vengono mantenute dopo il salvataggio e la riapertura. **Rimuovi modello associato** rimuove il collegamento e ripristina il modello precedente, se era stato salvato.

Un'[importazione SPICE di KiCad](../Importing-Symbols-from-KiCAD/#import-spice-models-with-symbols) supportata compare sotto **Custom**. Se vuoi mantenere tale definizione importata per i posizionamenti futuri, importala in una libreria modificabile e salvala.

## Esegui, salva e condividi
{: #run-save-and-share}

1. Collega i pin mappati e le alimentazioni, compreso un collegamento alla massa SPICE **0**.
2. Crea o apri un [foglio di simulazione](../Simulation/), seleziona l'analisi in **Configurazione** e scegli **Esegui**. I modelli inclusi attivi vengono risolti automaticamente. Usa **Configurazione → Modelli SPICE** per associare i file aggiuntivi richiesti da un modello Custom.
3. Apri **Diagnostica → Genera testo del circuito** per esaminare le righe d'istanza espanse e i riferimenti ai modelli. Se un risultato sembra errato, controlla l'ordine dei pin e le reti di alimentazione.

I disegni conservano la revisione di ciascun modello, i pin mappati e le impostazioni dei parametri, con una copia salvata di ogni pacchetto a cui si fa riferimento. Salva il disegno per condividere il circuito e le relative definizioni dei modelli. I modelli XSPICE disponibili solo su Desktop richiedono il motore Desktop per essere eseguiti. **Genera netlist Spice** incorpora le definizioni incluse citate nell'output SPICE. Consulta [Modelli SPICE e output della netlist](../SPICE-output/#inspect-and-export-a-spice-netlist) per le opzioni di esportazione e la differenza tra un deck di simulazione e un disegno.

## Contenuti e origini del catalogo
{: #catalog-contents-and-sources}

TinyCAD Web include 97 modelli di catalogo. L'app Desktop aggiunge tre definizioni che richiedono XSPICE nativo. Usa il collegamento nei dettagli di ciascun modello per individuare con precisione l'origine del modello. TinyCAD distribuisce le note di licenza con i pacchetti; sono disponibili anche in **Informazioni su TinyCAD**.

| Pacchetto | Modelli | Esempi |
| --- | ---: | --- |
| TinyCAD Basic | 20 | Resistori, condensatori e induttori ideali, sorgenti indipendenti, modelli di potenziometri e trasformatori, semiconduttori generici, 741 e risonatori |
| OpenJellyBean | 42 | BJT, MOSFET, JFET, diodi per segnali e Schottky, zener, LED, canali e package di amplificatori operazionali e un potenziometro |
| circsim | 15 | LM741, LED giallo, LM393, LM339, NE5532, NE555, optoaccoppiatori, regolatori e MOSFET di potenza |
| Spice_Files | 14 | Diodi e LED generici, ponte raddrizzatore, optoaccoppiatori, interruttore, relè, cristallo da 16 MHz e trasformatore 10:1 |
| Modelli speciali ngspice | 1 | Generatore di forme d'onda ICL8038 |
| Modelli speciali ngspice (Desktop) | 3 | Invertitore di tensione LTC1044HV, regolatore LR8 e relativo amplificatore operazionale ausiliario |
| SkyWater SKY130 | 1 | Transistor PNP integrato nominale con terminale di substrato |
| GlobalFoundries GF180MCU | 3 | Condensatori MIM nominali a 1.0, 1.5 e 2.0 fF/µm² |
| IHP SG13G2 | 1 | Transistor PNP integrato nominale pnpMPA |

Le voci delle fonderie sono modelli nominali selezionati. I kit di processo completi forniscono alberi di modelli, angoli e configurazioni del simulatore separati. Consulta il [riferimento del catalogo](https://github.com/matt123p/TinyCADv4/blob/main/docs/bundled-spice-models.md#catalog-sources) per l'inventario delle origini, le licenze e le alternative verificate per gli elementi essenziali SPICE.

## Chiedi all'assistente AI Desktop
{: #ask-the-desktop-ai-assistant}

Quando richiedi esplicitamente assistenza SPICE, l'[assistente AI Desktop](../AI-Assistant/) può cercare nel catalogo locale, esaminare il testo e le origini dei modelli e verificare la mappatura sul simbolo. Può associare un modello a un componente posizionato oppure salvarlo come predefinito quando aggiungi un nuovo componente di libreria. Chiede conferma prima di sostituire un modello Custom esistente. Per le normali operazioni su schemi o simboli conserva le impostazioni predefinite fornite.

Per un confronto in sola lettura, prova: “Trova un modello SPICE incluso per Q1. Confronta l'ordine dei terminali e i limiti con il componente previsto. Lascia il disegno invariato.”

Per richiedere una modifica, prova: “Associa il modello 2N3904 SPICE incluso a Q1 dopo averne controllato la mappatura dei pin fisici. Mostrami l'origine e le eventuali ipotesi.”
