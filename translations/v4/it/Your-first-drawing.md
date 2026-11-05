---
layout: default
---
# Il tuo primo disegno
{: #your-first-drawing}

Questa pagina ti guiderà attraverso i passaggi per disegnare il tuo primo schema elettrico con TinyCAD.

Nel caso più semplice, un disegno TinyCAD è una raccolta di simboli collegati
tramite fili. In questo esempio, inserirai alcuni simboli e poi li collegherai con dei fili.

## Circuito di esempio
{: #example-circuit}

Ecco un semplice circuito da disegnare:

<img src="/v4/images/media/image1.png" alt="Simple battery, resistor, and LED circuit used in the tutorial" style="width: 2.13542in; height: 1.13542in;" />

<p>
	<a href="/v4/examples/First%20Drawing.dsn" class="btn btn-primary" download>
		<i class="bi bi-download me-1" aria-hidden="true"></i>&nbsp;Scarica
	</a>
</p>


## Video dimostrativo
{: #video-walkthrough}

{% include video-player.html
	src="/v4/images/video/Video 2.mp4"
	width=1618
	height=922
	caption="Video dimostrativo che mostra come modificare e riposizionare il testo dei simboli."
%}

# Guida passo passo
{: #step-by-step-guide}

## Librerie di simboli
{: #symbol-libraries}

1. Digita `battery` nella casella di ricerca.
2. Seleziona **Multi Cell Battery**.
3. Trascina il simbolo dal pannello dei simboli sul disegno.

Ora inserisci una resistenza e un LED.

Usa i controlli di rotazione/ribaltamento della barra degli strumenti per orientare i simboli:

<img src="/v4/images/media/image5.png" alt="Rotate and flip controls used to change symbol orientation" />

Se commetti un errore, usa Annulla/Ripeti (Undo/Redo):

<img src="/v4/images/media/image6.png" alt="Undo and Redo toolbar buttons" />

Il disegno dovrebbe essere simile a:

<img src="/v4/images/media/image7.png" alt="Battery, resistor, and LED symbols placed on the drawing before wiring" style="width: 3.76042in; height: 2.52083in;" />

## Collegamento del circuito
{: #wiring-up-a-circuit}

1. Seleziona lo strumento **Wire**.
2. Fai clic su un terminale della batteria per iniziare un filo.
3. Spostati sul terminale della resistenza e fai di nuovo clic per posizionare il filo.

I fili si agganciano ai punti di connessione validi dei simboli. Un cerchio rosso indica
un punto di aggancio.

Suggerimento: premi `W` sulla tastiera per tornare rapidamente alla modalità filo.

Dopo aver collegato i fili, il risultato dovrebbe essere simile a:

<img src="/v4/images/media/image8.png" alt="Example circuit after the battery, resistor, and LED have been wired together" style="width: 3.40625in; height: 2.38542in;" />

## Aggiunta di annotazioni al disegno
{: #annotating-the-drawing}

Ai simboli servono i valori dei componenti e i riferimenti. In TinyCAD, in genere
corrispondono ai campi **Name** e **Ref** del simbolo.

1. Fai clic sulla batteria.
2. Vai al pannello **Symbol** in basso.
3. Modifica `BATTERY_2` in `9V`.
4. Modifica il riferimento `Z?` in `B1`.

Ripeti l'operazione per gli altri componenti:

- Resistenza: Name `1K`, Ref `R1`
- LED: Name `Red Led`, Ref `D1`

Se un nome o un riferimento è nascosto, usa le caselle di controllo per mostrare o nascondere il testo
nel disegno.

## Caricamento e salvataggio
{: #loading-and-saving}

<div class="manual-tabset" data-tabset="product-mode" data-tabset-label="Choose your TinyCAD product" data-default-tab="Browser" markdown="1">

### File locali del browser
{: #browser-local-files}

Per salvare il disegno, usa i pulsanti "Save As" o "Save" sulla barra degli strumenti:

<img src="/v4/images/media/image2.png" alt="The toolbar buttons for Save and Save As"  />


### Google nel browser
{: #browser-google}

Il tuo primo disegno è completo. Per rinominarlo:

1. Fai clic sul nome del disegno in alto (ad esempio `tCad1.dsn`).
2. Rinominalo in `First Drawing.dsn`.
3. Premi Invio.

<img src="/v4/images/media/image13.png" alt="Editable drawing title field used to rename the current design" style="width: 4.15625in; height: 0.92708in;" />

Salva su Google Drive usando l'icona **Save**.

Per caricarlo di nuovo da Google Drive:

1. Apri <https://drive.google.com/drive/>.
2. Trova il disegno.
3. Fai clic con il pulsante destro del mouse e scegli **Open with -> TinyCAD**.

<img src="/v4/images/media/image14.png" alt="Google Drive context menu showing Open with TinyCAD for a drawing file" style="width: 5.09138in; height: 3.90625in;" />

Puoi anche rinominare ed eliminare i progetti TinyCAD in Google Drive.

### App desktop
{: #desktop-app}

Il tuo primo disegno è completo. Per salvarlo dall'app desktop:

1. Apri **File -> Save As**.
2. Scegli una cartella sul computer.
3. Salva il disegno come `First Drawing.dsn`.

Per caricarlo di nuovo in seguito:

1. Apri **File -> Open**.
2. Cerca `First Drawing.dsn`.
3. Seleziona il file e aprilo.

TinyCAD desktop usa lo stesso formato `.dsn` di TinyCAD nel browser. Puoi
scaricare un disegno da Google Drive e aprirlo nell'app desktop.

Allo stesso modo, puoi usare i disegni realizzati con la versione desktop di TinyCAD
nella versione basata su browser.

</div>

## Approfondimenti
{: #further-reading}

Per informazioni sui simboli e sulle librerie personalizzati, continua con
[Librerie di simboli personalizzate](../Custom-symbol-libraries/).

- Torna a [Disegno](../User-guide/)
- Torna all'[indice di v4](../CONTENTS/)
