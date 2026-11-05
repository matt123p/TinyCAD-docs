---
layout: default
---
# Uso delle librerie di simboli
{: #using-symbol-libraries}

## Che cos'è una libreria di simboli?
{: #what-is-a-symbol-library}

Nella progettazione di circuiti, una **libreria di simboli** è una raccolta di simboli schematici memorizzati in un singolo file. Ogni simbolo rappresenta un componente elettronico, come una resistenza, un condensatore, un circuito integrato, un connettore, un transistor o qualsiasi altra parte, tramite una grafica standardizzata con punti di connessione elettrica definiti.

Le librerie di simboli TinyCAD utilizzano il formato di file `.tclib`. Un singolo file di libreria può contenere decine o centinaia di simboli correlati, generalmente raggruppati per categoria o funzione. Ad esempio, potresti avere una libreria per i componenti passivi, un'altra per i circuiti integrati logici e un'altra ancora per i connettori.

## A cosa servono le librerie di simboli?
{: #what-are-symbol-libraries-used-for}

Le librerie di simboli svolgono diverse funzioni importanti nella creazione degli schemi:

- **Riutilizzo nei diversi progetti.** Una volta definito un simbolo in una libreria, può essere inserito in qualsiasi schema senza doverlo ricreare. Ciò consente di risparmiare tempo e garantisce coerenza tra i progetti.
- **Rappresentazione standardizzata.** Le librerie impongono uno stile grafico comune e una configurazione dei pin per ciascun componente. Ogni istanza di un timer 555 o di un amplificatore operazionale ha lo stesso aspetto e le stesse definizioni dei pin, riducendo il rischio di interpretazioni errate.
- **Correttezza elettrica.** Ogni simbolo contiene informazioni sui pin: nomi, numeri e tipi elettrici (ingresso, uscita, alimentazione, passivo ecc.). Questi dati alimentano i processi successivi, come la generazione della netlist, i controlli delle regole di progettazione e l'esportazione verso gli strumenti di progettazione PCB.
- **Organizzazione.** Raggruppare i simboli in librerie per funzione, produttore o progetto facilita la ricerca del componente corretto. TinyCAD consente di caricare solo le librerie necessarie per un determinato progetto.
- **Condivisione e collaborazione.** I file di libreria possono essere condivisi tra i membri di un team o scaricati dalla comunità, così tutti lavorano con le stesse definizioni di simboli verificate.

## Librerie integrate e personalizzate
{: #built-in-and-custom-libraries}

TinyCAD include un insieme di librerie integrate che coprono le famiglie di componenti più comuni. Per i componenti non inclusi, puoi:

- Creare le tue [librerie di simboli personalizzate](../Custom-symbol-libraries/)
- [Importare simboli dalle librerie di KiCAD](../Importing-Symbols-from-KiCAD/)
- Scaricare altre librerie dal sito web TinyCAD.net

## Flusso di lavoro tipico
{: #typical-workflow}

In pratica, il lavoro con le librerie di simboli segue in genere questa sequenza:

1. Caricare o aggiungere le librerie da rendere disponibili nella sessione TinyCAD corrente.
2. Sfogliare, cercare e visualizzare l'anteprima dei simboli di queste librerie.
3. Inserire i simboli nel disegno.
4. Se occorre modificare una definizione di simbolo, modificare la libreria anziché l'istanza inserita.

Questa pagina illustra i passaggi da 1 a 3. Per la gestione dei file di libreria, consulta [Librerie di simboli personalizzate](../Custom-symbol-libraries/). Per modificare la definizione del simbolo, consulta [Modifica di un simbolo](../Editing-a-Symbol/).

## Caricamento delle librerie
{: #loading-libraries}

Prima di poter inserire un simbolo, la relativa libreria deve essere disponibile in TinyCAD.

- Le librerie integrate sono disponibili come parte di TinyCAD.
- Le librerie personalizzate devono essere aggiunte o aperte prima di poterle sfogliare.
- I passaggi esatti variano tra TinyCAD Web e l'applicazione desktop.

Consulta [Librerie di simboli personalizzate](../Custom-symbol-libraries/) per le istruzioni specifiche del prodotto per aggiungere, aprire, aggiornare, creare e modificare i file di libreria.

## Sfogliare, cercare e visualizzare l'anteprima
{: #browsing-searching-and-previewing}

Per usare i simboli di una libreria, è necessario prima caricarla nella sessione TinyCAD. Una volta caricata:

1. Apri il selettore dei simboli.
2. Espandi una libreria per sfogliarne i contenuti oppure usa la casella di ricerca per trovare un simbolo in base al nome o alla descrizione.
3. Fai clic su un simbolo per visualizzarne l'anteprima.
4. Seleziona il simbolo per impostarlo come strumento di inserimento attivo, quindi fai clic nel disegno per inserirne delle istanze.

Per ulteriori informazioni sull'inserimento e la configurazione dei simboli selezionati, consulta [Simboli](../Symbols/).

## Ridimensionamento del pannello delle librerie
{: #resizing-the-library-panel}

Trascina il bordo destro del pannello delle librerie per allargarlo o restringerlo. Un pannello più largo è utile per visualizzare nomi e descrizioni dei simboli più lunghi. Quando è disponibile la memoria locale, TinyCAD ricorda la larghezza su questo dispositivo.

## Ordinamento dei simboli
{: #sorting-symbols}

In **Le mie librerie (My Libraries)**, usa il pulsante di ordinamento accanto ai controlli delle librerie per alternare tra **ordine delle librerie**, **dalla A alla Z** e **dalla Z alla A**. Il suggerimento del pulsante indica la modalità corrente.
L'ordinamento si applica ai simboli nelle librerie e ai risultati della ricerca, compresi quelli online; non modifica l'ordine dei file o delle cartelle delle librerie. Quando è disponibile la memoria locale, TinyCAD ricorda la modalità di ordinamento su questo dispositivo.

La versione basata sul file system del browser mostra solo la ricerca online e non rende disponibile il pulsante di ordinamento **Le mie librerie (My Libraries)**.

## Inserimento dei simboli in un disegno
{: #placing-symbols-in-a-drawing}

Una volta selezionato dal browser delle librerie, il simbolo diventa lo strumento di inserimento attivo.

Per la procedura di inserimento vera e propria, compreso il comportamento dei simboli dopo la selezione, consulta [Simboli](../Symbols/).

Ricorda che inserire un simbolo in un disegno **non** modifica la definizione nella libreria. Se devi modificare la grafica, i pin o gli attributi per gli utilizzi futuri, modifica invece il simbolo nella relativa libreria. Consulta [Modifica di un simbolo](../Editing-a-Symbol/).

## Attività correlate
{: #related-tasks}

- Usa [Librerie di simboli personalizzate](../Custom-symbol-libraries/) per aggiungere, aprire, creare e gestire file `.tclib`.
- Usa [Modifica di un simbolo](../Editing-a-Symbol/) per modificare la grafica, i pin e gli attributi di un simbolo.
- Consulta [Simboli](../Symbols/) per i dettagli sull'inserimento dopo aver scelto un simbolo.

## Pagine
{: #pages}

{% assign current_version = page.url | split: '/' | slice: 1, 1 | first -%}
{% assign section = nil -%}
{% for entry in site.data.navigation[current_version] -%}
    {% if entry.url == page.url -%}
        {% assign section = entry -%}
        {% break -%}
    {% endif -%}
{% endfor -%}
{% if section and section.children %}
{% for child in section.children -%}
- [{{ child.title }}]({{ child.url | relative_url }})
{% endfor %}
{% endif %}

- Torna a [contenuti di v4](../CONTENTS/)
