---
layout: default
---
# Librerie incluse
{: #bundled-libraries}

Le librerie incluse sono raccolte di simboli pronti da posizionare, fornite con TinyCAD sia nel browser sia nell'app Desktop. Comprendono configurazioni di apparecchiature e circuiti elettronici. Puoi usarle senza accedere, scaricare un file di libreria o configurare una cartella di librerie.

## Trovare e posizionare un componente
{: #find-and-place-a-component}

1. Apri il pannello delle librerie a sinistra. Se è compresso, usa il pulsante di espansione.
2. Seleziona **Standard**. **Online** cerca nella raccolta online; **My Libraries** contiene i tuoi file di libreria.
3. Usa **Choose a standard library** per selezionare una raccolta. TinyCAD carica una libreria standard alla volta e memorizza la tua scelta su questo dispositivo.
4. Sfoglia l'elenco oppure digita un nome o una descrizione in **Search libraries...**. Ogni risultato include un'anteprima grafica. Seleziona un risultato per esaminarne l'anteprima ingrandita e la descrizione.
5. Trascina l'anteprima del componente sul disegno. Posizionalo sulla griglia; premi **Escape** o fai clic con il pulsante destro del mouse quando hai finito di posizionare le copie.

La modifica della libreria selezionata non rimuove i componenti già posizionati. Le relative definizioni sono incorporate nel disegno, quindi chi lo apre non deve caricare le stesse librerie. Le librerie standard sono di sola lettura; usa [librerie personalizzate](../Custom-symbol-libraries/) quando vuoi gestire le tue definizioni di simboli.

{% include video-player.html src="/v4/videos/simulation/libraries.mp4" poster="/v4/videos/simulation/libraries.jpg" caption="Scegli una libreria inclusa, cerca uno switch a otto porte e trascinalo su un disegno." %}

## Librerie di apparecchiature e layout
{: #equipment-and-layout-libraries}

Queste librerie mostrano la disposizione fisica di apparecchiature, schede, morsettiere e prese. Ti aiutano a spiegare **che cosa è collegato a che cosa**. Non includono firmware eseguibile, simulazione meccanica o modelli SPICE.

| Libreria | Contenuto | Uso tipico |
| --- | --- | --- |
| **Network layout** — 47 simboli | Router, switch e punti di accesso per uso domestico; switch, router, firewall, pannelli di permutazione e pannelli ciechi da rack da 19 pollici corrispondenti | Cablaggio di uffici, reti domestiche e schemi di rack |
| **Embedded processors and smart home** — 44 simboli | Dieci schede controller, 26 moduli sensore/attuatore e otto display | Prototipazione di una stazione di sensori, domotica o un progetto embedded |
| **Audio & Music** — 99 simboli | Microfoni, mixer, interfacce, strumenti, MIDI, computer, connettori, cuffie, altoparlanti, amplificatori e attrezzature da palco | Concerti, studi, podcast, registrazioni domestiche, chiese e scuole |
| **Test & Measurement** — 78 simboli | Alimentatori, carichi, oscilloscopi, multimetri, strumenti RF, sonde, acquisizione dati, riscaldatori, relè, controlli, pompe e apparati da banco | Collegamenti di laboratorio e configurazioni sperimentali |
| **Motors & Motion** — 66 simboli | Motori CC e brushless, motori passo-passo, servomotori, schede driver, encoder, finecorsa, solenoidi, attuatori elettrici/pneumatici e parti meccaniche | Robotica, automazione e cablaggio per il controllo del movimento |
| **Solar power and batteries** — 52 simboli | Pannelli, array, inverter, batterie, caricabatterie per veicoli elettrici, apparecchiature di backup, protezioni, monitoraggio e carichi domestici | Sistema energetico domestico concettuale e relativi collegamenti di alimentazione/controllo |

### Network layout
{: #network-layout}

I punti di collegamento Ethernet sono centrati nelle prese. Un punto rappresenta **un cavo intero**, non gli otto singoli conduttori Ethernet. Gli switch desktop comprendono 4, 5, 8, 16 e 24 porte in rame, incluse opzioni PoE e miste rame/fibra. I layout rack includono configurazioni da 8/16/24/48 porte con uplink SFP+ a due o quattro cage, oltre a ulteriori layout generici per pianificazione con 10 e 32 porte in rame. Considerali come opzioni di simboli disponibili, non come indicazione che tutti i layout siano altrettanto comuni. Leggi il nome del simbolo e le etichette del pannello frontale per scegliere il numero di porte e la configurazione di uplink necessaria.

I pannelli da 19 pollici 1U hanno dimensioni comuni. Mantieni la scala predefinita e sovrapponili con uno scostamento verticale di **120 unità di disegno** per formare un rack. L'[esempio di rete per piccolo ufficio](../Bundled-Examples/#equipment-and-layout-examples) mostra quattro pannelli corrispondenti e tratte più lunghe verso un punto di accesso e uno switch da scrivania. Disegna ciascun cavo patch fino al punto di collegamento della presa; la grafica del pannello non collega automaticamente tra loro le diverse prese.

### Embedded processors and smart home
{: #embedded-processors-and-smart-home}

Le schede controller includono ESP32 DevKitC V4, ESP32-S3 DevKitC-1, NodeMCU ESP8266, LOLIN D1 mini, Raspberry Pi 3/4/5 e varianti Arduino Uno/Nano/Mega. I moduli sensore includono sensori di temperatura, umidità, luce, pressione, tattili e a infrarossi passivi, insieme a uscite come i buzzer. La PCB, i pad dei connettori e le etichette dei pin rimangono visibili; una piccola icona funzionale identifica il sensore al posto di un rettangolo anonimo raffigurante un chip.

Le opzioni di visualizzazione includono un LCD1602 I2C e un OLED 128×64, LCD SPI Waveshare da 1,8 pollici e LCD touch capacitivo da 2,8 pollici, display touch UART Nextion da 2,8 pollici e assemblaggi e-paper Waveshare da 2,13/2,9/4,2 pollici. Ogni simbolo abbina due viste dello **stesso dispositivo**: la parte frontale dello schermo a sinistra e i contatti posteriori/header a destra. Solo i contatti posteriori sono punti di collegamento elettrico. Gli header ripetuti possono esporre gli stessi segnali hardware; non sono canali indipendenti aggiuntivi. Segui le etichette e la revisione indicata.

Verifica la revisione della scheda indicata prima di cablarla. Sui connettori Raspberry Pi, **i numeri dei pin fisici e i nomi GPIO BCM sono sistemi di numerazione diversi**. Le posizioni dei pin della scheda sono utili per uno schema di cablaggio, ma la grafica non è un'impronta PCB né un disegno di produzione. Le linee di alimentazione, i livelli logici, i limiti di corrente e le resistenze di pull-up devono comunque essere verificati consultando la documentazione del modulo effettivo.

### Collegamenti audio, di laboratorio e di movimento
{: #audio-laboratory-and-motion-connections}

Per gli schemi audio, la maggior parte delle prese rappresenta cavi interi. Etichetta i percorsi di microfoni, linea, altoparlanti, cuffie e MIDI in modo che la loro funzione sia chiara. Un connettore disegnato non stabilisce che due dispositivi abbiano livelli compatibili, cablaggio bilanciato o requisiti di alimentazione phantom.

I simboli di laboratorio e di movimento distinguono i singoli conduttori elettrici, i cavi completi e i tubi per fluidi. Per esempio, i collegamenti BNC/USB rappresentano cavi, mentre i terminali di alimentazione, logica e motore di un driver per motore sono conduttori separati. Le parti esclusivamente meccaniche potrebbero non avere terminali elettrici. Usa le etichette dei pin e la descrizione del simbolo anziché presumere che ogni elemento visibile sia un collegamento.

**I simboli delle apparecchiature Test & Measurement sono immagini per uno schema di configurazione.** Per gli strumenti che acquisiscono segnali simulati, usa **Simulation → Lab Equipment**; consulta [sorgenti e strumenti virtuali](../Simulation-Sources-and-Instruments/).

I simboli solari rappresentano cavi interi o collegamenti logici. Descrivono l'architettura del sistema; non specificano i singoli terminali dell'impianto, le portate dei cavi o uno schema di protezione completo.

## Librerie con modelli di simulazione
{: #libraries-with-simulation-models}

Usa queste raccolte quando vuoi [eseguire una simulazione di circuito](../Simulation/).

| Libreria | Contenuto | Scopo della modellazione |
| --- | --- | --- |
| **SPICE essentials** — 27 simboli | Componenti passivi, sorgenti, diodi, LED, transistor, trasformatore e amplificatore di tipo 741 | Raccolta di partenza di componenti analogici modellati |
| **Digital logic** — 28 simboli | Porte, contatori e memorie | Comportamento logico configurabile implementato usando modelli analogici SPICE portabili |
| **Functional blocks** — 17 simboli | ADC/DAC, interfacce di comunicazione, macchine a stati e blocchi di I/O programmabili | Esplorazione del comportamento a livello di sistema senza implementare un chip completo |
| **Sensors and interfaces** — 10 simboli | Sensori modellati, un punto di test, un interruttore analogico e un modulatore AM | Mettere in relazione uno stimolo configurato con l'uscita elettrica |

Questi modelli sono approssimazioni per esplorare il comportamento. Non garantiscono le prestazioni di dispositivi di un produttore specifico. I blocchi funzionali per microcontrollori, PLC o FPGA non eseguono firmware né HDL. La libreria **Digital logic** usa modelli comportamentali analogici e può essere eseguita nel browser; il [corso XSPICE](../XSPICE-Tutorial/) separato usa il motore a eventi di Desktop.

Leggi le proprietà, le unità e la mappatura dei pin di ciascun modello. I modelli logici possono avere pin di alimentazione nascosti denominati **VCC** e **VSS**. Fornisci le reti di alimentazione corrispondenti e collega **VSS** alla massa SPICE **0**. Un'etichetta contenente la parola GND non crea di per sé il nodo 0.

## Rendere univoci i collegamenti
{: #make-wiring-unambiguous}

Mantieni attiva la griglia e termina i fili nei punti di collegamento effettivi. Un filo che tocca una presa non correlata o l'estremità di un altro filo può creare un collegamento elettrico. Instrada i fili aggirando questi punti; una linea apparentemente ordinata non è sufficiente a stabilire la netlist desiderata.

Le prese delle apparecchiature non utilizzate possono rimanere aperte. Alcune segnalazioni del verificatore di circuito relative a fili che entrano nei contorni dei pannelli fisici sono previste per questi disegni, ma i cortocircuiti e i nodi indesiderati devono essere corretti. Consulta [Fili](../Wires/) per la connettività elettrica e [Esempi inclusi](../Bundled-Examples/) per esempi pratici di layout che usano queste raccolte.
