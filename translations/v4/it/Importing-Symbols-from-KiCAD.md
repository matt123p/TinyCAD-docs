---
layout: default
---
# Importazione di simboli da KiCAD
{: #importing-symbols-from-kicad}

L’importazione di simboli da una libreria di simboli KiCAD è una nuova funzionalità di TinyCAD v4.

## Informazioni su KiCad
{: #kicad-background}

[KiCad](https://www.kicad.org/) è una popolare suite open source per la progettazione elettronica. Il suo editor di simboli memorizza i simboli schematici in file di libreria di simboli. Nelle versioni attuali di KiCad, queste librerie di simboli usano normalmente il moderno formato `.kicad_sym` basato su S-expression.

## Cosa può importare TinyCAD
{: #what-tinycad-can-import}

Attualmente TinyCAD importa simboli da:

- file `.kicad_sym`

Il file deve essere un file di libreria di simboli KiCad con una radice `kicad_symbol_lib`. In pratica, ciò significa:

- Supportati: librerie di simboli KiCad moderne salvate come `.kicad_sym`
- Non supportate: librerie di simboli KiCad legacy `.lib`
- Non supportati: footprint KiCad, file PCB, progetti, schemi elettrici o altri file non contenenti simboli

## Dove si trova il comando nell’interfaccia
{: #where-the-command-is-in-the-ui}

Il comando di importazione si chiama **Import KiCad Symbols**.

A seconda di come si esegue TinyCAD, lo si trova in una delle seguenti posizioni:

- App desktop (Electron): **File > Import > KiCad Symbols...**
- Modalità browser/file system: menu **File** della barra degli strumenti, quindi **Import KiCad Symbols**

Dopo aver selezionato un file `.kicad_sym`, TinyCAD legge tutti i simboli della libreria e mostra una delle due finestre di dialogo di importazione, a seconda di cosa si sta modificando.

## Due modalità di importazione
{: #two-import-modes}

Il comportamento dell’importazione varia a seconda che si stia modificando un progetto o una libreria.

### Importazione in un progetto
{: #import-into-a-design}

Usare questa modalità per inserire un simbolo KiCad nello schema elettrico corrente senza salvarlo prima in una libreria TinyCAD.

Cosa accade:

- TinyCAD apre la finestra di dialogo **Import Symbol**.
- È possibile scegliere un simbolo dal file `.kicad_sym` selezionato.
- Facendo clic su **Insert**, TinyCAD inserisce il simbolo direttamente nel disegno corrente.
- Il simbolo viene inserito nella posizione corrente del mouse.
- Il simbolo **non** viene aggiunto a una delle librerie `.tclib` esterne.

È il modo più rapido se serve un simbolo solo per il progetto corrente.

### Importazione in una libreria
{: #import-into-a-library}

Usare questa modalità per conservare i simboli KiCad importati come simboli riutilizzabili delle librerie TinyCAD.

Cosa accade:

- È necessario aprire prima una libreria TinyCAD da modificare.
- TinyCAD apre la finestra di dialogo **Import KiCad Symbols**.
- Tutti i simboli importati sono preselezionati.
- È possibile selezionare o deselezionare i simboli oppure usare **Select all**.
- Facendo clic su **Import selected**, i simboli vengono uniti alla libreria TinyCAD corrente.
- TinyCAD apre automaticamente nell’editor di librerie l’ultimo simbolo importato.
- A questo punto è possibile salvare la libreria come di consueto.

È la procedura giusta se si desidera riutilizzare i simboli importati in più disegni.

## Procedura: importazione in un progetto
{: #step-by-step-import-into-a-design}

1. Aprire il progetto schematico su cui si desidera lavorare.
2. Eseguire **Import KiCad Symbols** dal menu File.
3. Selezionare un file `.kicad_sym` di KiCad.
4. Nella finestra di dialogo **Import Symbol**, fare clic sul simbolo desiderato.
5. Esaminare la breve riga di metadati mostrata per ciascun simbolo:
   - il prefisso di riferimento, ad esempio `U?`
   - il numero di unità, per i simboli multi-unità
6. Fare clic su **Insert**.
7. Il simbolo viene inserito nel disegno corrente nella posizione attuale del mouse.
8. Se necessario, dopo l’importazione modificare il testo, la visibilità dei pin o la grafica.

## Procedura: importazione in una libreria
{: #step-by-step-import-into-a-library}

1. Aprire o creare una libreria TinyCAD da modificare.
2. Nell’app desktop, una procedura comune è:
   - aprire il pannello **Libraries**
   - usare **Add** per caricare una libreria esistente oppure **New** per crearne una
   - aprire la libreria in modalità di modifica
3. Eseguire **Import KiCad Symbols**.
4. Selezionare un file `.kicad_sym` di KiCad.
5. Nella finestra di dialogo **Import KiCad Symbols**, lasciare selezionati tutti i simboli oppure deselezionare quelli indesiderati.
6. Fare clic su **Import selected**.
7. Esaminare i simboli importati nell’editor di librerie.
8. Salvare la libreria.

## Funzionalità dei simboli supportate
{: #supported-symbol-features}

Attualmente TinyCAD importa le seguenti funzionalità dei simboli KiCad:

- Nomi dei simboli, prefissi di riferimento e descrizioni
- Proprietà aggiuntive dei simboli come attributi TinyCAD
- Stato visibile o nascosto per campi comuni come Value e Reference
- Pin, inclusi nomi, numeri, lunghezza, tipo elettrico e varie forme
- Simboli multi-unità
- Simboli ereditati che usano il meccanismo `extends` di KiCad
- Varianti in stile De Morgan, importate come simboli separati con ` (De Morgan)` aggiunto al nome
- Elementi grafici di base usati nei corpi dei simboli:
  - rettangoli
  - cerchi
  - polilinee
  - archi
  - curve di Bézier
  - testo
- Stili di linea e stati di riempimento di base, quando TinyCAD dispone di un equivalente

## Cosa potrebbe non funzionare o non corrispondere esattamente
{: #what-will-not-work-or-may-not-match-exactly}

L’importatore è utile, ma non è un motore completo di conversione da KiCad a TinyCAD. Di seguito sono riportate le principali limitazioni dell’implementazione attuale.

### Limitazioni dei formati di file
{: #file-format-limits}

- Sono accettati solo file `.kicad_sym`.
- Se il file è vuoto, malformato o non è una libreria di simboli KiCad, l’importazione non riesce.

### Limitazioni grafiche e di layout
{: #graphics-and-layout-limits}

- Vengono importati solo gli elementi grafici elencati sopra.
- Qualsiasi contenuto del simbolo KiCad che non rientra negli elementi supportati viene ignorato.
- I simboli importati nelle librerie vengono riposizionati in modo da collocarsi sulla pagina TinyCAD con un margine e cercando di allinearsi alla griglia di TinyCAD.
- Alcune geometrie possono apparire leggermente diverse perché KiCad e TinyCAD usano modelli di disegno interni differenti.
- Gli archi KiCad vengono approssimati mediante punti di curva TinyCAD.

### Limitazioni di testo e stile
{: #text-and-styling-limits}

- La famiglia di caratteri non viene mantenuta; il testo importato usa le impostazioni dei caratteri di TinyCAD.
- I dettagli tipografici di precisione, come l’allineamento, non vengono mantenuti completamente.
- La rotazione del testo viene ricondotta al modello di orientamento più semplice di TinyCAD, anziché mantenere qualsiasi angolo arbitrario.
- Il colore del testo dei pin non viene mantenuto.

### Differenze nel comportamento dei simboli
{: #symbol-behavior-differences}

- L’importazione in un progetto inserisce il simbolo solo nel disegno corrente. Non crea né aggiorna una voce riutilizzabile nella libreria `.tclib`.
- L’importazione in una libreria crea voci TinyCAD riutilizzabili, ma è comunque necessario salvare la libreria in seguito.
- Se i nomi dei simboli importati coincidono con nomi già presenti nella libreria di destinazione, TinyCAD rinomina automaticamente le nuove voci aggiungendo un suffisso numerico.
- Se un simbolo KiCad include una variante De Morgan, TinyCAD la importa come voce di simbolo separata anziché come commutazione dinamica dello stile.

## Consigli pratici
{: #practical-advice}

- Se serve un simbolo una sola volta, importarlo nel progetto.
- Se si prevede di riutilizzare il simbolo, importarlo in una libreria.
- Iniziare con una piccola libreria `.kicad_sym` per verificare l’aspetto in TinyCAD delle linee, del testo e della posizione dei pin.
- Dopo l’importazione, controllare attentamente le parti multi-unità e le varianti De Morgan.
- Se un simbolo non appare correttamente, aprirlo nell’editor di librerie TinyCAD e sistemare manualmente la posizione del testo, la grafica o gli attributi.

## Riepilogo
{: #summary}

L’importazione di KiCad in TinyCAD è pensata per trasferire rapidamente in TinyCAD le moderne librerie di simboli KiCad, in particolare i simboli schematici standard composti da pin, testo e semplici elementi grafici. Funziona al meglio con file `.kicad_sym` ed è particolarmente pratica quando si desidera:

- inserire un simbolo direttamente nel disegno corrente oppure
- trasferire simboli KiCad selezionati in una libreria TinyCAD per riutilizzarli

Per operazioni più avanzate, è previsto un breve intervento manuale di sistemazione dopo l’importazione.

## Pagine correlate
{: #related-pages}

- [Modifica di un simbolo](../Editing-a-Symbol/)
- [Uso delle librerie di simboli](../Using-Symbol-Libraries/)

- Torna a [Simboli e librerie](../Symbols-and-Libraries/)
- Torna a [Indice di v4](../CONTENTS/)
