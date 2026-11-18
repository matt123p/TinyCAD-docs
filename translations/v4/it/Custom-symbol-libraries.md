---
layout: default
---
# Librerie di simboli personalizzate
{: #custom-symbol-libraries}

Questa pagina tratta le attività a livello di libreria: aggiungere librerie a TinyCAD, aprirle
per modificarle, creare nuovi file di libreria ed eseguire semplici operazioni di
gestione dei simboli, come aggiungere, duplicare, rinominare ed eliminare.

Per esplorare le librerie e inserire simboli in un disegno, vedere [Uso delle librerie di
simboli](../Using-Symbol-Libraries/). Per disegnare o modificare il simbolo
stesso, inclusi i pin e le proprietà del simbolo, vedere [Modifica di un
simbolo](../Editing-a-Symbol/).

L'[Assistente IA ](../AI-Assistant/) può aggiungere componenti a una libreria aperta per la modifica. Prima create o aprite la libreria, quindi descrivete le parti richieste e allegate le relative schede tecniche. Verificate i simboli generati e salvate normalmente la libreria.

I file di libreria usano l'estensione `.tclib` e possono essere archiviati sul computer oppure,
con l'integrazione di Google, su Google Drive. Sono compatibili tra loro nella
versione desktop e nella versione browser di TinyCAD.

È inoltre possibile caricare librerie create con la versione legacy v3 di TinyCAD.

<div class="manual-tabset" data-tabset="product-mode" data-tabset-label="Choose your TinyCAD product" data-default-tab="Browser" markdown="1">

### Browser
{: #browser}

#### Aprire una libreria esistente da un file locale
{: #open-an-existing-library-from-a-local-file}

1. Aprite un'altra scheda/finestra di TinyCAD web.
2. Usate **Apri (Open)** per aprire un file di libreria `.tclib`.
3. Lasciate aperta quella scheda mentre lavorate con la libreria.

Una volta aperta la libreria, potete esplorarla o trascinare i simboli da quella finestra nel
vostro disegno, oppure modificare le definizioni dei simboli nella libreria.

#### Rendere disponibile una libreria di Google Drive
{: #make-a-google-drive-library-available}

Se avete già creato librerie con TinyCAD desktop, concedete a TinyCAD web
l'accesso a ciascuna di esse:

1. In Google Drive, fate clic con il pulsante destro del mouse sul file `.tclib`.
2. Scegliete **Apri con -> TinyCAD (Open with -> TinyCAD)**.

<img src="/v4/images/media2/image1.png" alt="Google Drive context menu showing Open with TinyCAD for a library file" style="width: 6.26806in; height: 4.54514in;" />

Ripetete l'operazione per **ogni** libreria che volete rendere disponibile.

Questa operazione apre la libreria per la modifica. Se vi serve soltanto accedervi,
potete chiudere la scheda/finestra in seguito.

**Nota:** Google Drive può talvolta distinguere tra maiuscole e minuscole. Se `TinyCAD`
non appare in **Apri con (Open with)**, assicuratevi che `.tclib` sia scritto in minuscolo.

Tornate alla sessione di disegno:

1. Aprite **Le mie librerie (My Libraries)**.
2. Fate clic su **Aggiorna (Refresh)** accanto a **Le mie librerie (My Libraries)**.

<img src="/v4/images/media2/image2.png" alt="My Libraries panel with the Refresh button used to reload available libraries" />

Dopo l'aggiornamento, le librerie vengono elencate:

<img src="/v4/images/media2/image4.png" alt="My Libraries panel listing available custom symbol libraries"  />

Potete esplorare le librerie espandendole:

<img src="/v4/images/media2/image3.png" alt="Library browser showing symbol search results and a preview button"  />

#### Creare una nuova libreria
{: #creating-a-new-library}

Usate la voce di menu **Nuova libreria personalizzata (New Custom Library)**:

<img src="/v4/images/media2/image5.png" alt="Menu with the New Custom Library command"/>

#### Modificare una libreria
{: #edit-a-library}

Modificate una libreria esistente aprendola in TinyCAD web tramite il pulsante **Modifica (Edit)** della libreria.

### Applicazione desktop
{: #desktop-app}

#### Aggiungere o rimuovere librerie
{: #add-or-remove-libraries}

Prima di poter usare i simboli di una libreria, è necessario aggiungere la libreria all'elenco
delle librerie in **Le mie librerie (My Libraries)**.

![Pannello laterale Le mie librerie](/v4/images/media/image9.png)

Per aggiungere una libreria a questo elenco, fate clic su **Aggiungi (Add)**. Verrà visualizzata una finestra di dialogo per la selezione dei file.
Selezionate un file di libreria con estensione `.tclib`.

Per rimuovere una libreria dall'elenco, fate clic sull'icona di modifica della libreria per aprire
la finestra di dialogo della libreria, quindi fate clic su **Rimuovi (Remove)**. Questa operazione non elimina il file; lo rimuove
soltanto dall'elenco.

#### Modificare una libreria
{: #edit-a-library-1}

Usate la finestra di dialogo di modifica delle librerie per selezionare la libreria e fate clic su **Modifica (Edit)**. Si apre una nuova
finestra con una vista in miniatura della libreria.

![Editor della libreria con miniature dei simboli](/v4/images/media/image10.png)

Usate la finestra di modifica della libreria per:

- Visualizzare le miniature dei simboli nella libreria
- Aggiungere nuovi simboli alla libreria
- Eliminare, duplicare e rinominare i simboli nella libreria
- Modificare la grafica, i pin, i nomi e gli attributi di un simbolo
- Spostare simboli da una libreria a un'altra

Selezionate un simbolo facendo clic su di esso. Una volta selezionato, potete modificarlo nella finestra principale oppure usare i controlli per duplicarlo o eliminarlo.

Al termine della modifica della libreria, salvatela con i normali comandi **Salva (Save)**
o **Salva con nome (Save As)**.

Per il flusso di lavoro di modifica a livello di simbolo, vedere [Modifica di un simbolo](../Editing-a-Symbol/).

#### Creare una nuova libreria di simboli
{: #creating-a-new-symbol-library}

Usate il pulsante **Nuovo (New)** nel pannello delle librerie. Si aprirà una nuova finestra con una
libreria vuota.

</div>

- Torna a [Simboli e librerie](../Symbols-and-Libraries/)
- Torna a [Indice v4](../CONTENTS/)
