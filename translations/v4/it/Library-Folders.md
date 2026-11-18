---
layout: default
---
# Cartelle delle librerie
{: #library-folders}

## Panoramica
{: #overview}

Il pannello My Libraries supporta le cartelle, così puoi organizzare le librerie installate in gruppi.


<div class="manual-tabset" data-tabset="product-mode" data-tabset-label="Choose your TinyCAD product" data-default-tab="Browser" markdown="1">

### Browser
{: #browser}

Le cartelle delle librerie non sono supportate nella versione Browser di TinyCAD.

### App desktop
{: #desktop-app}

Le cartelle vengono salvate insieme all'elenco delle librerie, quindi la struttura viene mantenuta la volta successiva che apri TinyCAD.

Le cartelle delle librerie sono disponibili solo nell'app desktop.

Le modalità basate su browser mostrano comunque My Libraries, ove supportato, ma non consentono di creare cartelle, raggrupparle o trascinarle.

![My Libraries nell'app desktop, con Circuit components espansa, la cartella Sensors and modules vuota e le librerie Unfiled.](../images/library-folders/folders-overview.png){: width="460" style="max-width: 100%;"}

#### Operazioni disponibili
{: #what-you-can-do}

- Creare cartelle per raggruppare le librerie correlate
- Rinominare le cartelle
- Eliminare le cartelle
- Riordinare le cartelle trascinandole
- Spostare le librerie tra le cartelle trascinandole
- Aggiungere più file di libreria esistenti in un'unica operazione
- Aggiungere librerie direttamente nella cartella attualmente selezionata

Le librerie non assegnate a una cartella vengono visualizzate nella sezione Unfiled.

#### Creare una cartella
{: #create-a-folder}

1. Apri il pannello Libraries.
2. Passa a My Libraries.
3. Seleziona il pulsante della cartella nell'intestazione del pannello.
4. Inserisci un nome per la nuova cartella, ad esempio `Project libraries`.
5. Scegli **Add**.

![Finestra di dialogo per la creazione di una cartella, con Project libraries inserito e il pulsante Add pronto per confermare.](../images/library-folders/folder-create.png){: width="600" style="max-width: 100%;"}

La nuova cartella appare nell'elenco delle librerie ed è subito selezionabile.

#### Selezionare una cartella
{: #select-a-folder}

Fai clic sulla riga di una cartella per selezionarla.

La cartella selezionata viene usata quando aggiungi librerie esistenti.

Se fai clic su una libreria, TinyCAD seleziona automaticamente la cartella a cui appartiene. In questo modo è chiaro dove verranno inserite le nuove librerie aggiunte.

#### Aggiungere librerie a una cartella
{: #add-libraries-to-a-folder}

1. Seleziona la cartella di destinazione in My Libraries.
2. Seleziona Add.
3. Scegli uno o più file di libreria esistenti.

Le librerie selezionate vengono aggiunte alla cartella selezionata.

![Project libraries selezionata in My Libraries, con un'area di rilascio vuota e il pulsante per aggiungere librerie nell'intestazione.](../images/library-folders/folder-selected.png){: width="460" style="max-width: 100%;"}

Se non selezioni una cartella personalizzata, le librerie vengono aggiunte a Unfiled.

#### Spostare librerie tra le cartelle
{: #move-libraries-between-folders}

Trascina una libreria dalla posizione corrente e rilasciala su un'altra cartella.

Puoi anche rilasciare una libreria su Unfiled per rimuoverla da una cartella personalizzata.

Se una cartella è vuota, TinyCAD mostra un'area di rilascio che ti consente di spostarvi le librerie.

![Sensor interfaces spostata da Unfiled a Sensors and modules, con i controlli per riordinare, rinominare e rimuovere la cartella selezionata visibili.](../images/library-folders/folder-organise.png){: width="460" style="max-width: 100%;"}

#### Riordinare le cartelle
{: #reorder-folders}

Puoi riordinare le cartelle direttamente nel pannello.

1. Passa il puntatore sulla cartella che vuoi spostare.
2. Trascina la maniglia di riordinamento.
3. Rilascia la cartella nella posizione desiderata.

Il nuovo ordine viene salvato automaticamente.

#### Rinominare o eliminare una cartella
{: #rename-or-delete-a-folder}

I pulsanti delle azioni della cartella vengono mostrati quando passi il puntatore sulla cartella o la selezioni.

- Seleziona **Rename folder** (l'icona della matita) per rinominare la cartella. Inserisci il nuovo nome e scegli **Rename**.
- Seleziona **Remove folder** (l'icona del cestino) per rimuovere la cartella. Conferma con **Delete**.

![Finestra di dialogo per rinominare una cartella, che cambia Sensors and modules in Sensors and displays.](../images/library-folders/folder-rename.png){: width="600" style="max-width: 100%;"}

Quando una cartella viene eliminata, le librerie al suo interno vengono spostate in Unfiled. I file delle librerie non vengono rimossi da TinyCAD.

#### Librerie Unfiled
{: #unfiled-libraries}

Unfiled è la posizione predefinita per le librerie non assegnate a una cartella personalizzata.

- Le nuove librerie vengono inserite in Unfiled se non è selezionata una cartella personalizzata
- Le librerie di una cartella eliminata vengono spostate in Unfiled
- Puoi trascinare le librerie da Unfiled in qualsiasi cartella personalizzata

Se non esistono cartelle personalizzate, TinyCAD mostra semplicemente l'elenco delle librerie senza un'intestazione Unfiled.

#### Note
{: #notes}

- Le modifiche all'organizzazione delle cartelle vengono salvate con la configurazione delle librerie
- È possibile aggiungere più librerie contemporaneamente scegliendo file di libreria esistenti
- L'ordine delle cartelle e le assegnazioni delle librerie alle cartelle vengono mantenuti tra le sessioni

</div>


- Torna a [Symbols & Libraries](../Symbols-and-Libraries/)
- Torna a [contenuti v4](../)
