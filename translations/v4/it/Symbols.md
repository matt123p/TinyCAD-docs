---
layout: default
---
# Simboli
{: #symbols}

I simboli sono gli elementi costitutivi fondamentali di uno schema TinyCAD. Inserisci i simboli dalle librerie, imposti i relativi attributi e colleghi i pin con fili per creare un progetto elettricamente valido.

Puoi usare simboli personalizzati o scaricare simboli direttamente dal sito web TinyCAD.net.

Vedi anche:

- [Uso delle librerie di simboli](../Using-Symbol-Libraries/)
- [Librerie di simboli personalizzate](../Custom-symbol-libraries/)

## Cercare e inserire simboli
{: #find-and-place-symbols}

1. Digita il nome del simbolo desiderato nella casella di ricerca
2. Seleziona i simboli per visualizzarli, quindi scegli quello desiderato
3. Trascina il simbolo dall'anteprima nel disegno

{% include video-player.html
	src="/v4/images/video/Video 6.mp4"
	width=1280
	height=822
	caption="Video dimostrativo che mostra come cercare e inserire un simbolo."
%}



## Orientamento durante l'inserimento
{: #orientation-while-placing}

Durante l'inserimento di un simbolo, imposta l'orientamento usando i pulsanti di rotazione e ribaltamento sulla barra degli strumenti.

<img src="/v4/images/media/image5.png" alt="Rotate and flip controls used to change symbol orientation" />


## Modificare e spostare il testo dei simboli
{: #editing-and-moving-symbol-text}

Dopo l'inserimento, puoi spostare l'intero simbolo trascinandolo.

Puoi anche spostare indipendentemente i campi di testo del simbolo (ad esempio valore/nome/riferimento) selezionando il simbolo e trascinando ciascun campo nella posizione desiderata.

Puoi modificare il testo facendo clic su di esso.

{% include video-player.html
	src="/v4/images/video/Video 1.mp4"
	width=284
	height=248
	caption="Video dimostrativo che mostra come modificare e riposizionare il testo di un simbolo."
%}

## Attributi dei simboli in uno schema
{: #symbol-attributes-in-a-schematic}

I simboli inseriti includono in genere questi attributi chiave:

- **Nome/Valore**: che cos'è il componente (ad esempio `10k`, `100nF`, tipo di dispositivo)
- **Riferimento**: identificativo univoco nel foglio/progetto (ad esempio `R1`, `U3`)
- **Package** (facoltativo): identificativo dell'impronta/package usato nei flussi di esportazione a valle

I campi di riferimento devono essere univoci. Quando necessario, gli strumenti TinyCAD possono aiutare a generare automaticamente i riferimenti o a rinumerarli.

Puoi aggiungere attributi extra per i metadati del progetto, il flusso PCB o i metadati di simulazione, secondo necessità.

## Pagine correlate
{: #related-pages}

- [Fili](../Wires/)
- [Etichette](../Labels/)
- [Non connessi (No Connects)](../No-Connects/)
- [Modificare un simbolo](../Editing-a-Symbol/)

- Torna a [Disegno](../User-guide/)
- Torna a [Indice della v4](../CONTENTS/)
