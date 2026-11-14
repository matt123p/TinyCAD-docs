---
layout: default
---
# Simboli
{: #symbols}

I simboli sono gli elementi fondamentali di uno schema TinyCAD. Si inseriscono simboli dalle librerie, se ne impostano gli attributi e poi si collegano i pin con i fili per realizzare un progetto elettricamente valido.

Il selettore di librerie a sinistra offre tre origini: **Standard** per le librerie incluse, **Online** per la ricerca su TinyCAD.net e **My Libraries** per i propri file di libreria.

## Trovare un simbolo
{: #find-a-symbol}

### Usare le librerie incluse
{: #use-the-bundled-libraries}

Selezionare **Standard**, quindi scegliere una raccolta da **Choose a standard library**. Sfogliare i componenti oppure digitare un nome in **Search libraries...** per filtrare la raccolta selezionata. È possibile cambiare raccolta senza rimuovere i simboli già inseriti nel disegno.

Le [librerie incluse](../Bundled-Libraries/) contengono componenti circuitali modellati, oltre ad apparecchiature fisiche per schemi di rete, sistemi embedded, audio, laboratorio, controllo del movimento e impianti solari. Sono fornite con TinyCAD sia nel browser sia nell'app desktop; non occorrono account, download separati o importazione di librerie. Consultare la guida alle librerie per conoscere i contenuti e lo scopo di ciascuna raccolta.

### Cercare online
{: #search-online}

Se le raccolte incluse non contengono ciò che serve, selezionare **Online** e inserire il nome di un componente o il codice prodotto in **Search libraries...**. TinyCAD cerca nella raccolta di simboli TinyCAD.net e mostra i simboli corrispondenti con anteprime grafiche. La ricerca online richiede una connessione a Internet.

Selezionare un risultato per esaminarne l'anteprima e la descrizione, quindi trascinarne la grafica nel disegno. Non è necessario scaricare prima una libreria separata. Verificare che i nomi e i numeri dei pin corrispondano al componente e al package che si intende utilizzare.

### Se non si trova il simbolo desiderato
{: #if-you-cannot-find-the-symbol-you-want}

Usare [Librerie di simboli personalizzate](../Custom-symbol-libraries/) per creare una libreria `.tclib` o aprirne una già esistente. Le proprie librerie sono disponibili tramite **My Libraries** nel selettore.

È possibile disegnare un nuovo simbolo o adattare una copia di un simbolo esistente adatto; vedere [Modificare un simbolo](../Editing-a-Symbol/) per informazioni sulla grafica, sui pin e sulle proprietà. È anche possibile [importare simboli da KiCad](../Importing-Symbols-from-KiCAD/) in una libreria personalizzata. Le librerie incluse sono di sola lettura, quindi conservare le proprie definizioni in una libreria personalizzata.

## Inserire il simbolo scelto
{: #place-the-chosen-symbol}

1. Scegliere **Standard**, **Online** o **My Libraries**, quindi sfogliare o cercare in quella origine.
2. Selezionare un risultato per esaminarne l'anteprima ingrandita e la descrizione.
3. Trascinare la grafica del simbolo dall'elenco o dall'anteprima nel disegno, quindi posizionarla sulla griglia.
4. Premere **Escape** o fare clic con il pulsante destro del mouse al termine dell'inserimento delle copie.

Il video seguente mostra come trovare e inserire un simbolo. Per ulteriori informazioni su come sfogliare e gestire il selettore, vedere [Uso delle librerie di simboli](../Using-Symbol-Libraries/).

{% include video-player.html
	src="/v4/images/video/Video 6.mp4"
	width=1280
	height=822
	caption="Video tutorial che mostra come trovare e inserire un simbolo."
%}



## Orientamento durante l'inserimento
{: #orientation-while-placing}

Durante l'inserimento di un simbolo, impostarne l'orientamento usando i pulsanti di rotazione e ribaltamento sulla barra degli strumenti.

<img src="/v4/images/media/image5.png" alt="Rotate and flip controls used to change symbol orientation" />


## Modificare e spostare il testo dei simboli
{: #editing-and-moving-symbol-text}

Dopo l'inserimento, è possibile spostare l'intero simbolo trascinandolo.

È anche possibile spostare indipendentemente i campi di testo del simbolo (ad esempio valore/nome/riferimento), selezionando il simbolo e trascinando ciascun campo nella posizione desiderata.

È possibile modificare il testo facendo clic su di esso.

{% include video-player.html
	src="/v4/images/video/Video 1.mp4"
	width=284
	height=248
	caption="Video tutorial che mostra come modificare e riposizionare il testo di un simbolo."
%}

## Attributi dei simboli in uno schema
{: #symbol-attributes-in-a-schematic}

I simboli inseriti includono generalmente questi attributi principali:

- **Nome/Valore**: identificativo del componente (ad esempio `10k`, `100nF`, tipo di dispositivo)
- **Riferimento**: identificativo univoco nello schema/progetto (ad esempio `R1`, `U3`)
- **Package** (facoltativo): identificativo dell'impronta/package utilizzato nei flussi di esportazione successivi

I campi di riferimento devono essere univoci. Quando necessario, gli strumenti TinyCAD possono aiutare a generare automaticamente o riannotare i riferimenti.

È possibile aggiungere altri attributi per i metadati del progetto, il flusso PCB o i metadati di simulazione, secondo necessità.

## Pagine correlate
{: #related-pages}

- [Fili](../Wires/)
- [Etichette](../Labels/)
- [Non collegati](../No-Connects/)
- [Modificare un simbolo](../Editing-a-Symbol/)

- Torna a [Disegno](../User-guide/)
- Torna all'[indice della v4](../CONTENTS/)
