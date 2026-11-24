---
layout: default
---
# Librerie incluse
{: #bundled-libraries}

Le librerie incluse sono raccolte di simboli pronti da posizionare, fornite con TinyCAD sia nel browser sia nell'app desktop. Comprendono layout di apparecchiature e circuiti elettronici. Puoi usarle senza accedere, scaricare un file di libreria o configurare una cartella delle librerie.

## Trovare e posizionare un componente
{: #find-and-place-a-component}

1. Apri il pannello delle librerie a sinistra. Se è chiuso, usa il pulsante di espansione.
2. Seleziona **Standard**. **Online** cerca nella raccolta online; **Le mie librerie (My Libraries)** contiene i tuoi file di libreria.
3. Usa **Scegli una libreria standard (Choose a standard library)** per selezionare una raccolta. TinyCAD carica una libreria standard alla volta e ricorda la tua scelta su questo dispositivo.
4. Esplora l'elenco oppure digita un nome o una descrizione in **Cerca nelle librerie... (Search libraries...)**. Ogni risultato include un'anteprima grafica. Seleziona un risultato per esaminarne l'anteprima ingrandita e la descrizione.
5. Trascina l'anteprima del componente sul disegno. Posizionalo sulla griglia; premi **Escape** o fai clic con il pulsante destro del mouse quando hai terminato di posizionare le copie.

La modifica della libreria selezionata non rimuove i componenti già posizionati. Le relative definizioni sono incorporate nel disegno, quindi chi lo apre non deve caricare le stesse librerie. Le librerie standard sono di sola lettura; usa [librerie personalizzate](../Custom-symbol-libraries/) quando vuoi gestire le tue definizioni di simboli.

{% include video-player.html src="/v4/videos/simulation/libraries.mp4" poster="/v4/videos/simulation/libraries.jpg" caption="Scegli una libreria inclusa, cerca uno switch a otto porte e trascinalo su un disegno." %}

## Librerie per apparecchiature e layout
{: #equipment-and-layout-libraries}

Queste librerie mostrano la disposizione fisica di apparecchiature, schede, terminali e prese. Aiutano a spiegare **che cosa è collegato a che cosa**. Non includono firmware eseguibile, simulazioni meccaniche o modelli SPICE.

| Libreria | Contenuto | Uso tipico |
| --- | --- | --- |
| **Layout di rete (Network layout)** — 47 simboli | Router, switch e punti di accesso per uso domestico; switch, router, firewall, pannelli patch e pannelli ciechi da rack da 19 pollici corrispondenti | Cablaggio per uffici, reti domestiche e progetti di rack |
| **Processori embedded e domotica (Embedded processors and smart home)** — 44 simboli | Dieci schede di controllo, 26 moduli sensore/attuatore e otto display | Prototipazione di una stazione di sensori, domotica o un progetto embedded |
| **Audio e musica (Audio & Music)** — 99 simboli | Microfoni, mixer, interfacce, strumenti, MIDI, computer, connettori, cuffie, altoparlanti, amplificatori e attrezzatura da palco | Concerti, studi, podcast, registrazioni domestiche, chiese e scuole |
| **Test e misure (Test & Measurement)** — 78 simboli | Alimentatori, carichi, oscilloscopi, misuratori, strumenti RF, sonde, acquisizione dati, riscaldatori, relè, controlli, pompe e apparecchiature da banco | Collegamenti di laboratorio e configurazioni sperimentali |
| **Motori e movimento (Motors & Motion)** — 66 simboli | Motori CC e brushless, motori passo-passo, servomotori, schede driver, encoder, finecorsa, solenoidi, attuatori elettrici/pneumatici e parti meccaniche | Robotica, automazione e cablaggio per il controllo del movimento |
| **Energia solare e batterie (Solar power and batteries)** — 52 simboli | Pannelli, array, inverter, batterie, caricabatterie per veicoli elettrici, apparecchiature di backup, protezione, monitoraggio e carichi domestici | Sistema energetico domestico concettuale e relativi collegamenti di potenza/controllo |

### Layout di rete
{: #network-layout}

I punti di connessione Ethernet sono centrati nelle prese. Un punto rappresenta **un cavo intero**, non otto conduttori Ethernet singoli. Gli switch desktop coprono 4, 5, 8, 16 e 24 porte in rame, incluse opzioni PoE e miste rame/fibra. I layout rack includono configurazioni da 8/16/24/48 porte con uplink SFP+ a due o quattro cage, oltre a ulteriori layout generici per la pianificazione con 10 e 32 porte in rame. Considerali come possibilità di scelta dei simboli, non come affermazione che tutti i layout siano ugualmente comuni. Leggi il nome del simbolo e le etichette del pannello frontale per scegliere il numero di porte e la configurazione degli uplink desiderati.

I pannelli da 19 pollici e 1U hanno dimensioni comuni. Mantieni la scala predefinita e disponili a **120 unità di disegno** in verticale per formare un rack. L'[esempio di rete per piccolo ufficio](../Bundled-Examples/#equipment-and-layout-examples) mostra quattro pannelli corrispondenti e collegamenti più lunghi verso un punto di accesso e uno switch da scrivania. Disegna ciascun cavo patch fino al punto di connessione della presa; la grafica del pannello non collega automaticamente tra loro le diverse prese.

### Processori embedded e domotica
{: #embedded-processors-and-smart-home}

Le schede di controllo includono ESP32 DevKitC V4, ESP32-S3 DevKitC-1, NodeMCU ESP8266, LOLIN D1 mini, varianti Raspberry Pi 3/4/5 e Arduino Uno/Nano/Mega. I moduli sensore includono rilevamento di temperatura, umidità, luce, pressione, tocco e infrarossi passivi, oltre a uscite come i cicalini. La PCB, i pad dell'header e le etichette dei pin restano visibili; un'icona della funzione identifica il sensore al posto di un rettangolo anonimo che rappresenta un chip.

Le opzioni di visualizzazione includono LCD1602 I2C e OLED 128×64, LCD SPI Waveshare da 1,8 pollici e LCD touch capacitivo da 2,8 pollici, display touch UART Nextion da 2,8 pollici e assemblaggi e-paper Waveshare da 2,13/2,9/4,2 pollici. Ogni simbolo abbina due viste di **un solo dispositivo**: il lato dello schermo a sinistra e i contatti posteriori/header a destra. Solo i contatti posteriori sono punti di connessione elettrica. Header ripetuti possono esporre gli stessi segnali hardware; non sono canali indipendenti aggiuntivi. Segui le etichette e la revisione indicata.

Controlla la revisione della scheda indicata prima di cablarla. Sugli header Raspberry Pi, **i numeri dei pin fisici e i nomi GPIO BCM sono sistemi di numerazione diversi**. Le posizioni dei pin della scheda sono utili per uno schema di cablaggio, ma la grafica non è un'impronta PCB né un disegno per la produzione. Le linee di alimentazione, i livelli logici, i limiti di corrente e le resistenze di pull-up devono comunque essere verificati sulla documentazione del modulo effettivo.

### Collegamenti audio, di laboratorio e di movimento
{: #audio-laboratory-and-motion-connections}

Per gli schemi audio, la maggior parte delle prese rappresenta cavi interi. Etichetta i percorsi di microfono, linea, altoparlante, cuffie e MIDI in modo da chiarirne lo scopo. Un connettore disegnato non garantisce che due dispositivi abbiano livelli compatibili, cablaggio bilanciato o requisiti di alimentazione phantom.

I simboli di laboratorio e di movimento distinguono i singoli conduttori elettrici, i cavi completi e i tubi per fluidi. Per esempio, i collegamenti BNC/USB rappresentano cavi, mentre i terminali di potenza, logica e motore di un driver per motori sono conduttori separati. Le parti esclusivamente meccaniche possono non avere terminali elettrici. Usa le etichette dei pin e la descrizione del simbolo, invece di presumere che ogni elemento visibile sia un collegamento.

**I simboli delle apparecchiature Test & Measurement sono illustrazioni per uno schema di configurazione.** Per gli strumenti che acquisiscono segnali simulati, usa **Simulazione → Apparecchiature di laboratorio (Simulation → Lab Equipment)**; consulta [sorgenti e strumenti virtuali](../Simulation-Sources-and-Instruments/).

I simboli solari rappresentano cavi interi o collegamenti logici. Descrivono l'architettura del sistema; non specificano i singoli terminali di installazione, le portate dei cavi o uno schema di protezione completo.

## Librerie con modelli di simulazione
{: #libraries-with-simulation-models}

Usa queste raccolte se vuoi [eseguire una simulazione circuitale](../Simulation/).

| Libreria | Contenuto | Finalità della modellazione |
| --- | --- | --- |
| **Elementi essenziali SPICE (SPICE essentials)** — 29 simboli | Componenti passivi, sorgenti, diodi, LED, transistor, trasformatore, risonatori, 741, LM358 e LM324 | Componenti analogici con un [modello incluso e mappatura dei pin preimpostata](../Bundled-SPICE-Models/) |
| **Logica digitale (Digital logic)** — 28 simboli | Porte, contatori e memorie | Comportamento logico configurabile implementato con modelli SPICE analogici portabili |
| **Blocchi funzionali (Functional blocks)** — 17 simboli | ADC/DAC, interfacce di comunicazione, macchine a stati e blocchi di I/O programmabili | Esplora il comportamento a livello di sistema senza implementare un chip completo |
| **Sensori e interfacce (Sensors and interfaces)** — 10 simboli | Sensori modellati, un punto di test, uno switch analogico e un modulatore AM | Metti in relazione uno stimolo configurato con l'uscita elettrica |

Questi modelli sono approssimazioni per esplorare il comportamento. Non garantiscono le prestazioni di un dispositivo di un produttore specifico. I blocchi funzionali di microcontrollori, PLC o FPGA non eseguono firmware né HDL. La libreria **Logica digitale (Digital logic)** usa modelli comportamentali analogici e può essere eseguita nel browser; il [corso XSPICE](../XSPICE-Tutorial/) separato usa il motore Desktop basato su eventi.

Leggi le proprietà, le unità e la mappatura dei pin di ciascun modello. I modelli logici possono avere pin di alimentazione nascosti denominati **VCC** e **VSS**. Fornisci le reti di alimentazione corrispondenti e collega **VSS** alla massa SPICE **0**. Un'etichetta contenente la parola GND non crea di per sé il nodo 0.

## Rendere univoco il cablaggio
{: #make-wiring-unambiguous}

Mantieni attiva la griglia e termina i fili nei punti di connessione effettivi. Un filo che tocca una presa non pertinente o il punto finale di un altro filo può creare una connessione elettrica. Fai passare i fili intorno a tali punti; una linea apparentemente ordinata non basta a definire la netlist desiderata.

Le prese inutilizzate delle apparecchiature possono restare scollegate. Alcuni avvisi del verificatore dei circuiti relativi a fili che entrano nei contorni fisici dei pannelli sono previsti in questi disegni, ma i cortocircuiti e le giunzioni involontari devono essere corretti. Consulta [Fili](../Wires/) per la connettività elettrica e [Esempi inclusi](../Bundled-Examples/) per layout svolti che utilizzano queste raccolte.
