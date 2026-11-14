---
layout: default
---
# Uso delle librerie di simboli
{: #using-symbol-libraries}

## Che cos'è una libreria di simboli?
{: #what-is-a-symbol-library}

Nella progettazione dei circuiti, una **libreria di simboli** è una raccolta di simboli schematici memorizzati in un unico file. Ogni simbolo rappresenta un componente elettronico, come una resistenza, un condensatore, un IC, un connettore, un transistor o qualsiasi altra parte, tramite una grafica standardizzata con punti di connessione elettrica definiti.

Le librerie di simboli di TinyCAD utilizzano il formato di file `.tclib`. Un singolo file di libreria può contenere decine o centinaia di simboli correlati, in genere raggruppati per categoria o scopo. Ad esempio, si può avere una libreria per i componenti passivi, un'altra per gli IC logici e un'altra ancora per i connettori.

## A cosa servono le librerie di simboli?
{: #what-are-symbol-libraries-used-for}

Le librerie di simboli svolgono diverse funzioni importanti nella creazione degli schemi:

- **Riutilizzo nei vari progetti.** Una volta definito un simbolo in una libreria, lo si può inserire in qualsiasi schema senza doverlo ricreare. Questo fa risparmiare tempo e garantisce coerenza tra i progetti.
- **Rappresentazione standardizzata.** Le librerie impongono uno stile visivo e una configurazione dei pin comuni per ciascun componente. Ogni istanza di un timer 555 o di un amplificatore operazionale ha lo stesso aspetto e le stesse definizioni dei pin, riducendo il rischio di interpretazioni errate.
- **Correttezza elettrica.** Ogni simbolo include informazioni sui pin: nomi, numeri e tipi elettrici (ingresso, uscita, alimentazione, passivo ecc.). Questi dati alimentano i processi successivi, come la generazione della netlist, i controlli delle regole di progettazione e l'esportazione verso gli strumenti di progettazione PCB.
- **Organizzazione.** Raggruppare i simboli in librerie in base alla funzione, al produttore o al progetto facilita la ricerca del componente giusto. TinyCAD consente di caricare solo le librerie necessarie per un determinato progetto.
- **Condivisione e collaborazione.** I file di libreria possono essere condivisi tra i membri del team o scaricati dalla comunità, così tutti lavorano con le stesse definizioni di simboli verificate.

## Librerie integrate e personalizzate
{: #built-in-and-custom-libraries}

TinyCAD include [librerie](../Bundled-Libraries/) per i layout delle apparecchiature e i circuiti elettronici modellati. Seleziona **Standard** nel selettore a sinistra, quindi scegli una raccolta da **Scegli una libreria standard**. Non è necessario importare librerie separatamente. Per le parti non incluse, è possibile:

- Creare le proprie [librerie di simboli personalizzate](../Custom-symbol-libraries/)
- [Importare simboli dalle librerie KiCAD](../Importing-Symbols-from-KiCAD/)
- Scaricare altre librerie dal sito web TinyCAD.net

## Flusso di lavoro tipico
{: #typical-workflow}

In pratica, l'uso delle librerie di simboli segue in genere questa sequenza:

1. Caricare o aggiungere le librerie che si desidera rendere disponibili nella sessione corrente di TinyCAD.
2. Esplorare, cercare e visualizzare l'anteprima dei simboli contenuti in tali librerie.
3. Inserire i simboli nel disegno.
4. Se è necessario modificare la definizione di un simbolo, modificare la libreria anziché l'istanza inserita.

Questa pagina descrive i passaggi da 1 a 3. Per la gestione dei file di libreria, vedere [Librerie di simboli personalizzate](../Custom-symbol-libraries/). Per modificare la definizione del simbolo, vedere [Modifica di un simbolo](../Editing-a-Symbol/).

## Caricamento delle librerie
{: #loading-libraries}

Prima di poter inserire un simbolo, la relativa libreria deve essere disponibile in TinyCAD.

- Le librerie integrate sono disponibili in TinyCAD.
- Le librerie personalizzate devono essere aggiunte o aperte prima di poterle esplorare.
- I passaggi esatti variano tra TinyCAD Web e l'applicazione desktop.

Per i passaggi specifici del prodotto per aggiungere, aprire, aggiornare, creare e modificare i file di libreria, consulta [Librerie di simboli personalizzate](../Custom-symbol-libraries/).

## Esplorazione, ricerca e anteprima
{: #browsing-searching-and-previewing}

Per utilizzare i simboli di una libreria, è necessario prima caricarla nella sessione di TinyCAD. Una volta caricata:

1. Apri il selettore dei simboli a sinistra e scegli **Standard**, **Online** o **Le mie librerie**.
2. In Standard, scegli una libreria inclusa; in Le mie librerie, apri o espandi le tue librerie. Usa **Cerca nelle librerie...** per trovare un simbolo in base al nome o alla descrizione.
3. Esamina la grafica nell'elenco dei risultati, quindi seleziona un simbolo per visualizzarne l'anteprima ingrandita e la descrizione.
4. Trascina l'anteprima nel disegno e posizionala sulla griglia. Premi Esc o fai clic con il pulsante destro per terminare l'inserimento delle copie.

Per ulteriori informazioni sull'inserimento e la configurazione dei simboli selezionati, vedere [Simboli](../Symbols/).

## Ridimensionamento del pannello delle librerie
{: #resizing-the-library-panel}

Trascina il bordo destro del pannello delle librerie per allargarlo o restringerlo. Un pannello più largo facilita la lettura dei nomi e delle descrizioni dei simboli più lunghi. TinyCAD memorizza la larghezza su questo dispositivo quando è disponibile la memoria locale.

## Ordinamento dei simboli
{: #sorting-symbols}

In **Le mie librerie**, usa il pulsante di ordinamento accanto ai controlli delle librerie per alternare tra **ordine delle librerie**, **A-Z** e **Z-A**. La descrizione comandi del pulsante indica la modalità corrente.
L'ordinamento si applica ai simboli all'interno delle librerie e ai risultati di ricerca, inclusi quelli online; non riordina i file o le cartelle delle librerie. TinyCAD memorizza la modalità di ordinamento su questo dispositivo quando è disponibile la memoria locale.

Il selettore del browser e quello dell'applicazione desktop offrono le schede **Standard**, **Online** e **Le mie librerie**. La sorgente e la libreria standard selezionata vengono memorizzate su questo dispositivo.

## Inserimento dei simboli in un disegno
{: #placing-symbols-in-a-drawing}

Una volta selezionato un simbolo nel browser delle librerie, questo diventa lo strumento di inserimento attivo.

Per la procedura di inserimento vera e propria, compreso il comportamento dei simboli dopo la selezione, vedere [Simboli](../Symbols/).

Ricorda che inserire un simbolo in un disegno **non** modifica la definizione nella libreria. Se devi modificare la grafica, i pin o gli attributi per gli utilizzi futuri, modifica il simbolo nella libreria. Vedere [Modifica di un simbolo](../Editing-a-Symbol/).

## Attività correlate
{: #related-tasks}

- Usa [Librerie di simboli personalizzate](../Custom-symbol-libraries/) per aggiungere, aprire, creare e gestire i file `.tclib`.
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

- Torna a [Sommario v4](../)
