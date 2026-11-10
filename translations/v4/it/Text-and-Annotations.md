---
layout: default
---
# Testo e annotazioni
{: #text--annotations}

Gli strumenti di testo e annotazione servono per documentare e migliorare la chiarezza visiva.

Questi oggetti **non sono elettrici** e vengono ignorati dalla generazione della netlist e dai controlli
 delle regole di progettazione.

## Testo ed etichette
{: #text-vs-labels}

- Usa **Testo** per note, richiami, titoli e istruzioni di produzione.
- Usa **Etichette** per i nomi delle reti elettricamente attivi.

Se usi il testo dove è necessaria un'etichetta, la rete non verrà connessa.

## Che cos’è Markdown?
{: #what-is-markdown}

Markdown aggiunge formattazione al testo semplice usando marcatori facili da digitare. TinyCAD legge questi marcatori e visualizza titoli, testo in grassetto ed elenchi.

| Cosa digitare | Significato |
|---|---|
| `# Power supply` | Un titolo |
| `**Check polarity**` | Testo in grassetto |
| `*Optional*` | Testo in corsivo |
| `- R1: 10 kΩ` | Una voce di elenco puntato |
| `` `R1` `` | Codice in linea |

Inserire uno spazio dopo `#` o `-` all’inizio di una riga. Lasciare una riga vuota tra i paragrafi.

Per più righe di codice, inserire `~~~` su una riga separata prima e dopo il codice. L’esempio completo di nota riportato sotto mostra questa sintassi.

## Caselle di testo Markdown
{: #markdown-text-boxes}

Le caselle di testo Markdown sono disponibili in [TinyCAD v4.0.11](../Changelog/#v4011).

1. Scegliere Testo (Text, oppure premere T) e trascinare per disegnare una casella sul disegno.
2. Fare clic nella casella e inserire Markdown. La formattazione appare durante la digitazione.
3. Fare clic altrove per visualizzare la nota formattata senza i marcatori Markdown. Ingrandire la casella se il contenuto viene tagliato.

![Nota Markdown visualizzata in SVG con titolo, elenco di componenti, elenco di attività e blocco di codice.](../images/markdown-preview.png)

### Sorgente Markdown modificabile
{: #editable-markdown-source}

Titoli, grassetto, corsivo e testo barrato mostrano la formattazione mantenendo i marcatori visibili e modificabili. Il cursore, la selezione e il ritorno a capo seguono il testo formattato. Il codice delimitato o rientrato rimane letterale; non viene applicata la colorazione della sintassi.

La famiglia di caratteri, la dimensione, il grassetto e il corsivo scelti costituiscono lo stile di base. I titoli si ridimensionano rispetto a tale dimensione; anche il codice usa la famiglia scelta. Annullamento, copia/incolla e salvataggio conservano il sorgente Markdown.

![Modifica della stessa nota con i marcatori visibili di titolo, grassetto, elenco, elenco di attività e delimitazione del codice.](../images/markdown-source-editor.png)

### Formattazione supportata
{: #supported-formatting}

Sono supportati titoli, grassetto, corsivo, testo barrato, citazioni, elenchi numerati e puntati, elenchi di attività, linee orizzontali, codice in linea e blocchi di codice delimitati o rientrati. Le normali interruzioni di riga vengono conservate. Tabelle, collegamenti, immagini e HTML vengono mostrati come testo letterale, senza formattazione speciale né caricamento di immagini remote.

Ad esempio, inserire questo sorgente per creare la nota illustrata:

````markdown
# RC filter
**Time constant:** τ = R × C

- R1: 10 kΩ
- C1: 100 nF

- [x] Draw the circuit
- [ ] Measure the response

~~~python
tau = 10_000 * 100e-9
~~~
````

## Oggetti di annotazione
{: #annotation-objects}

TinyCAD supporta le forme di annotazione più comuni, tra cui:

- testo,
- linee,
- rettangoli,
- ellissi,
- archi,
- poligoni.

Usale per raggruppare blocchi, evidenziare aree e aggiungere note esplicative senza
modificare la connettività del circuito.


## Disegnare linee e poligoni
{: #drawing-lines--polygons}

Puoi disegnare una serie di linee. Per terminare il disegno, fai clic con il pulsante destro.

Puoi convertirla in un poligono selezionando "Chiudi poligono (Close Polygon)" nel menu contestuale. Una volta convertito
in poligono, puoi modificarne il riempimento.

{% include video-player.html
	src="/v4/images/video/Video 7.mp4"
	width=1620
	height=924
	caption="Video dimostrativo che mostra come disegnare e modificare un poligono."
%}


- Torna a [Disegno](../User-guide/)
- Torna a [Indice di v4](../CONTENTS/)
