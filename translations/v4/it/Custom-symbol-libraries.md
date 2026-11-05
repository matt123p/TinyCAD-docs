---
layout: default
---
# Librerie di simboli personalizzate
{: #custom-symbol-libraries}

Questa pagina tratta le operazioni a livello di libreria: aggiungere librerie a TinyCAD, aprirle per modificarle, creare nuovi file di libreria ed eseguire semplici operazioni di gestione dei simboli, come aggiungere, duplicare, rinominare ed eliminare.

Per sfogliare le librerie e inserire simboli in un disegno, vedere [Uso delle librerie di simboli](../Using-Symbol-Libraries/). Per disegnare o modificare il simbolo stesso, inclusi i pin e le proprietà del simbolo, vedere [Modifica di un simbolo](../Editing-a-Symbol/).

I file di libreria usano l'estensione `.tclib` e possono essere archiviati sul computer o, con l'integrazione Google, su Google Drive. Sono compatibili sia con la versione desktop di TinyCAD sia con quella per browser.

È anche possibile caricare librerie create con la versione legacy v3 di TinyCAD.

<div class="manual-tabset" data-tabset="product-mode" data-tabset-label="Choose your TinyCAD product" data-default-tab="Browser" markdown="1">

### Browser
{: #browser}

#### Aprire una libreria esistente da un file locale
{: #open-an-existing-library-from-a-local-file}

1. Aprire un'altra scheda/finestra di TinyCAD web.
2. Usare **Apri (Open)** per aprire un file di libreria `.tclib`.
3. Tenere aperta la scheda mentre si lavora con la libreria.

Una volta aperta la libreria, è possibile sfogliarla o trascinare i simboli dalla relativa finestra nel disegno, oppure modificare le definizioni dei simboli nella libreria.

#### Rendere disponibile una libreria di Google Drive
{: #make-a-google-drive-library-available}

Se sono già state create librerie con TinyCAD desktop, concedere a TinyCAD web l'accesso a ciascuna di esse:

1. In Google Drive, fare clic con il pulsante destro sul file `.tclib`.
2. Scegliere **Apri con -> TinyCAD (Open with -> TinyCAD)**.

<img src="/v4/images/media2/image1.png" alt="Google Drive context menu showing Open with TinyCAD for a library file" style="width: 6.26806in; height: 4.54514in;" />

Ripetere l'operazione per **ogni** libreria che si desidera rendere disponibile.

Questa operazione apre la libreria per la modifica. Se serve solo accedervi, è possibile chiudere la scheda/finestra al termine.

**Nota:** Google Drive a volte può distinguere tra maiuscole e minuscole. Se `TinyCAD` non compare in **Apri con (Open with)**, verificare che `.tclib` sia scritto in minuscolo.

Tornare alla sessione di disegno:

1. Aprire **Le mie librerie (My Libraries)**.
2. Fare clic su **Aggiorna (Refresh)** accanto a **Le mie librerie (My Libraries)**.

<img src="/v4/images/media2/image2.png" alt="My Libraries panel with the Refresh button used to reload available libraries" />

Dopo l'aggiornamento, le librerie vengono elencate:

<img src="/v4/images/media2/image4.png" alt="My Libraries panel listing available custom symbol libraries"  />

È possibile sfogliare le librerie espandendole:

<img src="/v4/images/media2/image3.png" alt="Library browser showing symbol search results and a preview button"  />

#### Creare una nuova libreria
{: #creating-a-new-library}

Usare la voce di menu **Nuova libreria personalizzata (New Custom Library)**:

<img src="/v4/images/media2/image5.png" alt="Menu with the New Custom Library command"/>

#### Modificare una libreria
{: #edit-a-library}

Modificare una libreria esistente aprendola in TinyCAD web tramite il pulsante **Modifica (Edit)** della libreria.

### App desktop
{: #desktop-app}

#### Aggiungere o rimuovere librerie
{: #add-or-remove-libraries}

Prima di poter usare simboli di una libreria, è necessario aggiungere la libreria all'elenco delle librerie in **Le mie librerie (My Libraries)**.

![Riquadro laterale Le mie librerie](/v4/images/media/image9.png)

Per aggiungere una libreria all'elenco, fare clic su **Aggiungi (Add)**. Verrà visualizzata una finestra di dialogo per la selezione dei file. Selezionare un file di libreria con estensione `.tclib`.

Per rimuovere una libreria dall'elenco, fare clic sull'icona di modifica della libreria per aprire la finestra di dialogo della libreria, quindi fare clic su **Rimuovi (Remove)**. Il file non viene eliminato: viene soltanto rimosso dall'elenco.

#### Modificare una libreria
{: #edit-a-library-1}

Usare la finestra di dialogo di modifica delle librerie per selezionare la libreria e fare clic su **Modifica (Edit)**. Si apre una nuova finestra con una vista in miniatura della libreria.

![Editor della libreria con miniature dei simboli](/v4/images/media/image10.png)

Usare la finestra di modifica della libreria per:

- Visualizzare le miniature dei simboli presenti nella libreria
- Aggiungere nuovi simboli alla libreria
- Eliminare, duplicare e rinominare i simboli nella libreria
- Modificare la grafica, i pin, i nomi e gli attributi di un simbolo
- Spostare simboli da una libreria a un'altra

Selezionare un simbolo facendo clic su di esso. Una volta selezionato, è possibile modificarlo nella finestra principale oppure usare i controlli per duplicarlo o eliminarlo.

Al termine della modifica della libreria, salvarla usando i normali comandi **Salva (Save)** o **Salva con nome (Save As)**.

Per il flusso di lavoro di modifica a livello di simbolo, vedere [Modifica di un simbolo](../Editing-a-Symbol/).

#### Creare una nuova libreria di simboli
{: #creating-a-new-symbol-library}

Usare il pulsante **Nuovo (New)** nel pannello delle librerie. Si aprirà una nuova finestra con una libreria vuota.

</div>

- Torna a [Simboli e librerie](../Symbols-and-Libraries/)
- Torna a [Indice v4](../CONTENTS/)
