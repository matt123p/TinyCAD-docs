---
layout: default
---
# Testo
{: #text}

Il testo serve per la documentazione e la chiarezza visiva.

Lo strumento di testo di TinyCAD crea una casella di testo sul disegno. Le caselle di testo sono il
mezzo principale per aggiungere note leggibili, istruzioni, richiami ed intestazioni direttamente
in uno schema. Usano [Markdown](https://{{ page.manual_language | default: 'en' | replace: 'zh-CN', 'zh' }}.wikipedia.org/wiki/Markdown), così puoi formattare il testo con titoli, grassetto,
corsivo, elenchi, elenchi di attività e blocchi di codice senza uscire dall'area di disegno.

Questi oggetti non sono elettrici e vengono ignorati durante la generazione delle netlist e i controlli
delle regole di progettazione.

## Testo ed etichette
{: #text-vs-labels}

- Usa Testo (Text) per note, richiami, titoli e istruzioni di produzione.
- Usa Etichette (Labels) per i nomi di rete elettricamente attivi.

Se usi il testo dove è richiesta un'etichetta, la rete non verrà connessa.

## Che cos'è Markdown?
{: #what-is-markdown}
{: #what-is-markdown}

Markdown aggiunge formattazione al testo normale usando semplici marcatori digitati. TinyCAD legge
questi marcatori e visualizza titoli, testo in grassetto ed elenchi.

| Cosa digiti | Significato |
|---|---|
| `# Power supply` | Un titolo |
| `**Check polarity**` | Testo in grassetto |
| `*Optional*` | Testo in corsivo |
| `- R1: 10 kΩ` | Un elemento di elenco puntato |
| `` `R1` `` | Codice in linea |

Inserisci uno spazio dopo `#` o `-` quando si trovano all'inizio di una riga. Lascia una riga vuota tra
un paragrafo e l'altro.

Per più righe di codice, inserisci `~~~` da solo su una riga prima e dopo il codice.
L'esempio completo della nota qui sotto mostra come fare.

## Caselle di testo Markdown
{: #markdown-text-boxes}
{: #markdown-text-boxes}

Le caselle di testo Markdown sono disponibili in [TinyCAD v4.0.11](../Changelog/#v4011).

1. Scegli Testo (Text) (oppure premi T) e trascina per disegnare una casella sul disegno.
2. Fai clic all'interno della casella e inserisci Markdown. La formattazione appare mentre digiti.
3. Fai clic altrove per visualizzare la nota formattata senza i marcatori Markdown. Ridimensiona
   la casella se il contenuto è tagliato.

![Nota Markdown renderizzata in SVG con un titolo, un elenco di componenti, un elenco di attività e un blocco di codice.](../images/markdown-preview.png)

### Sorgente Markdown modificabile
{: #editable-markdown-source}
{: #editable-markdown-source}

Titoli, grassetto, corsivo e barrato mostrano la formattazione mentre i relativi
marcatori restano visibili e modificabili. Il cursore, la selezione e l'a capo
seguono il testo formattato. Il codice delimitato e rientrato resta letterale; non viene applicata
la colorazione della sintassi.

La famiglia e la dimensione del carattere scelte, insieme alle impostazioni di grassetto e corsivo, costituiscono lo stile di base.
I titoli vengono ridimensionati in proporzione a tale dimensione; anche il codice usa la famiglia scelta. Annulla,
le operazioni di copia/incolla e il salvataggio preservano la sorgente Markdown.

![Modifica della stessa nota con i marcatori visibili per titolo, grassetto, elenco, elenco di attività e blocco di codice.](../images/markdown-source-editor.png)

### Formattazione supportata
{: #supported-formatting}
{: #supported-formatting}

La formattazione supportata comprende titoli, grassetto, corsivo, barrato, citazioni,
elenco numerati e puntati, elenchi di attività, linee orizzontali, codice in linea e
blocchi di codice delimitati o rientrati. Le interruzioni di riga normali vengono mantenute. Tabelle,
collegamenti, immagini e HTML vengono visualizzati come testo letterale, senza formattazione
speciale né caricamento di immagini remote.

Ad esempio, inserisci questa sorgente per creare la nota illustrata:

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

- Vedi anche: [Forme](../Shapes/)
- Torna a [Disegno](../User-guide/)
- Torna a [contenuto di v4](../CONTENTS/)
