---
layout: default
---
# Immagini
{: #images}

Aggiungi immagini a un disegno per loghi, immagini di riferimento o diagrammi acquisiti tramite scansione. Puoi incollare un'immagine dagli appunti oppure selezionare un file usando **File → Importa → Immagine…** sia in TinyCAD Desktop sia nell'app browser.

Le immagini sono elementi grafici sul foglio. Non creano componenti, pin o connessioni elettriche. Per trasformare l'immagine di un circuito in simboli e fili modificabili, usa invece l'[assistente AI di Desktop](../AI-Assistant/).

## Copia e incolla
{: #copy-and-paste}

1. In un'altra applicazione, copia l'immagine stessa, non il nome del file né un collegamento. Ad esempio, usa **Copia immagine** in un browser oppure copia una selezione in un editor di immagini.
2. Torna a TinyCAD e fai clic sull'area di disegno, in modo da non modificare un campo di testo.
3. Premi **Ctrl+V** (**Cmd+V** su macOS).
4. Seleziona l'immagine incollata e trascinala nella posizione desiderata.

Sono supportate le immagini PNG o JPEG negli appunti. Se non riesci a incollare un'immagine, salvala come file e usa invece Importa. Puoi anche copiare e incollare immagini già inserite in un disegno TinyCAD.

## Importa da un file
{: #import-from-a-file}

1. Apri **File → Importa → Immagine…**. Nell'app browser, apri il menu **File** usando l'icona del documento nella barra degli strumenti.
2. Seleziona un file immagine e conferma nella finestra di selezione dei file.
3. L'immagine appare sul foglio corrente. Selezionala per spostarla, ridimensionarla o ritagliarla.

I file PNG e JPEG vengono incorporati direttamente. Gli altri formati che il browser è in grado di decodificare, come GIF, WebP, BMP e SVG, vengono convertiti in PNG. Le immagini importate restano immagini statiche; l'animazione non viene mantenuta. Il supporto dei formati dipende dal browser o dal motore del browser incluso in TinyCAD Desktop. Un file illeggibile o non supportato genera un errore.

Puoi anche trascinare un file PNG o JPEG sul disegno per posizionarlo nel punto di rilascio.

## Spostare e ridimensionare
{: #move-and-resize}

Fai clic su un'immagine per selezionarla. Trascina il corpo per spostarla oppure trascina una maniglia d'angolo o del bordo per ridimensionarla.

La barra delle proprietà in basso mostra una sezione **Immagine** quando è selezionata un'immagine. Attiva **Proporzioni fisse** per mantenere le proporzioni correnti tra larghezza e altezza durante il ridimensionamento. Disattivala per ridimensionare larghezza e altezza indipendentemente. Lo spostamento dell'immagine non ne modifica le proporzioni.

**Ripristina proporzioni** ripristina le proporzioni originali dell'immagine visibile, tenendo conto di eventuali ritagli. Mantiene la larghezza corrente e la posizione in alto a sinistra e regola l'altezza. La casella di controllo Proporzioni fisse mantiene l'impostazione corrente. È possibile annullare il ripristino.

## Ritagliare i bordi
{: #clip-the-edges}

Usa **Ritaglio sinistro (px)**, **Ritaglio destro (px)**, **Ritaglio superiore (px)** e **Ritaglio inferiore (px)** nelle proprietà dell'immagine per nascondere bordi indesiderati o parti dell'immagine.

- I valori sono numeri interi di pixel misurati nell'immagine originale, indipendentemente dalle sue dimensioni visualizzate o dalla griglia del disegno.
- Ad esempio, impostando **Ritaglio sinistro (px)** su **20**, si nascondono i 20 pixel più a sinistra dell'immagine originale.
- Il ritaglio mantiene i pixel rimanenti alla scala e nella posizione esistenti; il bordo visibile si sposta verso l'interno invece di allungare l'immagine.
- Deve rimanere almeno un pixel in ogni direzione. I controlli limitano di conseguenza ciascun bordo.
- Imposta di nuovo un bordo su **0** per ripristinarlo. Il ritaglio non rimuove pixel dall'immagine originale incorporata.

**Annulla** e **Ripeti** si applicano all'inserimento delle immagini e alle modifiche delle proprietà, oltre che agli spostamenti e ai ridimensionamenti.

## Salvataggio e output
{: #saving-and-output}

Le immagini sono incorporate nel file del disegno, quindi non è necessario che il file originale resti nella posizione da cui è stato importato. Salva normalmente il disegno per conservarne le immagini, le impostazioni delle proporzioni fisse e i ritagli. Queste impostazioni vengono mantenute alla riapertura e anche nei disegni `.dzn` compressi.

Il ritaglio appartiene a ciascuna immagine inserita, quindi copie separate possono mostrare parti diverse della stessa immagine. L'immagine visibile è inclusa nell'output di stampa, PDF e SVG.

- Torna a [Disegno](../User-guide/)
- Torna a [Indice v4](../CONTENTS/)
