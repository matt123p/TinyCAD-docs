---
layout: default
---
# Importare simboli da KiCad
{: #importing-symbols-from-kicad}

L'importazione di simboli da una libreria di simboli KiCad è una nuova funzionalità di TinyCAD v4.

## Informazioni su KiCad
{: #kicad-background}

[KiCad](https://www.kicad.org/) è una popolare suite open source per la progettazione elettronica. Il suo editor di simboli archivia i simboli schematici in file di libreria di simboli. Nelle versioni attuali di KiCad, queste librerie di simboli usano normalmente il moderno formato `.kicad_sym` basato su S-expression.

## Elementi che TinyCAD può importare
{: #what-tinycad-can-import}

Attualmente TinyCAD importa simboli da:

- file `.kicad_sym`

Il file deve essere un file di libreria di simboli KiCad con una radice `kicad_symbol_lib`. In pratica, questo significa:

- Supportato: librerie di simboli KiCad moderne salvate come `.kicad_sym`
- Non supportato: librerie di simboli KiCad legacy `.lib`
- Non supportati: footprint KiCad, file PCB, progetti, schemi o altri file che non contengono simboli

## Posizione del comando nell'interfaccia
{: #where-the-command-is-in-the-ui}

Il comando di importazione si chiama **Import KiCad Symbols**.

A seconda di come si esegue TinyCAD, lo si trova in una di queste posizioni:

- Applicazione desktop (Electron): **File > Import > KiCad Symbols...**
- Modalità browser/sistema di file: menu **File** della barra degli strumenti, quindi **Import KiCad Symbols**

Selezionare una libreria `.kicad_sym` ed eventuali file SPICE complementari necessari. TinyCAD legge la libreria e mostra la finestra di dialogo di importazione relativa al disegno corrente o all'editor di librerie.

## Due modalità di importazione
{: #two-import-modes}

Il comportamento dell'importazione varia a seconda che si stia modificando un progetto o una libreria.

### Importare in un progetto
{: #import-into-a-design}

Usare questa modalità per inserire un simbolo KiCad nello schema corrente senza prima salvarlo in una libreria TinyCAD.

Procedura:

- TinyCAD apre una finestra di dialogo **Import Symbol**.
- È possibile scegliere un simbolo dal file `.kicad_sym` selezionato.
- Facendo clic su **Insert**, TinyCAD inserisce direttamente il simbolo nel disegno corrente.
- Il simbolo viene inserito nella posizione corrente del mouse.
- In questo modo il simbolo **non** viene aggiunto a una delle librerie `.tclib` esterne.

È il metodo più rapido quando serve un simbolo solo per il progetto corrente.

### Importare in una libreria
{: #import-into-a-library}

Usare questa modalità per conservare i simboli KiCad importati come simboli riutilizzabili della libreria TinyCAD.

Procedura:

- Per prima cosa, è necessario aprire una libreria TinyCAD in modifica.
- TinyCAD apre una finestra di dialogo **Import KiCad Symbols**.
- Tutti i simboli importati sono preselezionati.
- È possibile selezionare o deselezionare i simboli oppure usare **Select all**.
- Facendo clic su **Import selected**, i simboli vengono uniti alla libreria TinyCAD corrente.
- TinyCAD apre automaticamente nell'editor di librerie l'ultimo simbolo importato.
- Quindi si salva la libreria come di consueto.

Questo è il metodo da usare se si desidera riutilizzare i simboli importati in più disegni.

## Procedura: importare in un progetto
{: #step-by-step-import-into-a-design}

1. Aprire il progetto dello schema su cui si desidera lavorare.
2. Eseguire **Import KiCad Symbols** dal menu File.
3. Scegliere un file KiCad `.kicad_sym`.
4. Nella finestra di dialogo **Import Symbol**, fare clic sul simbolo desiderato.
5. Esaminare la breve riga di metadati visualizzata per ciascun simbolo:
   - il prefisso di riferimento, ad esempio `U?`
   - il numero di unità, per i simboli composti da più unità
6. Fare clic su **Insert**.
7. Il simbolo viene inserito nel disegno corrente, nella posizione corrente del mouse.
8. Dopo l'importazione, se necessario, modificare il testo, la visibilità dei pin o gli elementi grafici.

## Procedura: importare in una libreria
{: #step-by-step-import-into-a-library}

1. Aprire o creare una libreria TinyCAD da modificare.
2. Nell'applicazione desktop, un metodo comune è:
   - aprire il pannello **Libraries**
   - usare **Add** per caricare una libreria esistente oppure **New** per crearne una
   - aprire la libreria in modalità di modifica
3. Eseguire **Import KiCad Symbols**.
4. Scegliere un file KiCad `.kicad_sym`.
5. Nella finestra di dialogo **Import KiCad Symbols**, lasciare selezionati tutti i simboli o deselezionare quelli che non si desidera importare.
6. Fare clic su **Import selected**.
7. Esaminare i simboli importati nell'editor di librerie.
8. Salvare la libreria.

## Importare modelli SPICE con i simboli
{: #import-spice-models-with-symbols}

TinyCAD legge i modelli SPICE supportati incorporati in una libreria di simboli KiCad moderna. Per i modelli archiviati separatamente, selezionare i file dei modelli insieme al file `.kicad_sym` nella finestra di selezione dei file. Includere anche eventuali file di modello a cui fa riferimento `.include`.

Se non è stato possibile importare una definizione SPICE, la finestra di dialogo mostra **SPICE model skipped** insieme al motivo. È comunque possibile importare la grafica e le proprietà del simbolo. Aprire le impostazioni **SPICE → Custom** del simbolo importato per esaminare il modello di istanza e l'eventuale testo del modello in **Prologue**. TinyCAD usa le assegnazioni dei pin e le sostituzioni dei parametri di KiCad per costruire la definizione.

Gli input supportati includono simboli a unità singola con normali modelli o sottocircuiti, resistori, condensatori e induttori ideali, nonché sorgenti di tensione o corrente continua. Per una definizione SPICE KiCad legacy, aprirla e salvarla prima con una versione recente di KiCad. Se serve un modello diverso, usare il [selettore di modelli incluso](../Bundled-SPICE-Models/).

## Funzionalità dei simboli supportate
{: #supported-symbol-features}

Attualmente TinyCAD importa le seguenti funzionalità dei simboli KiCad:

- Nomi dei simboli, prefissi di riferimento e descrizioni
- Proprietà aggiuntive dei simboli come attributi TinyCAD
- Stato nascosto o visibile per i campi comuni, come Value e Reference
- Pin, compresi nomi, numeri, lunghezza, tipo elettrico e diverse forme dei pin
- Simboli composti da più unità
- Simboli ereditati che utilizzano il meccanismo `extends` di KiCad
- Varianti in stile De Morgan, importate come simbolo separato con ` (De Morgan)` aggiunto al nome
- Elementi grafici di base usati nei corpi dei simboli:
  - rettangoli
  - cerchi
  - polilinee
  - archi
  - curve di Bézier
  - testo
- Stili di linea di base e stati di riempimento per i quali TinyCAD dispone di un equivalente

## Elementi che potrebbero non funzionare o non corrispondere esattamente
{: #what-will-not-work-or-may-not-match-exactly}

L'importatore è utile, ma non è uno strumento completo di conversione da KiCad a TinyCAD. Di seguito sono riportate le principali limitazioni dell'implementazione attuale.

### Limiti del formato di file
{: #file-format-limits}

- Sono accettati solo file `.kicad_sym`.
- Se il file è vuoto, malformato o non è una libreria di simboli KiCad, l'importazione non riesce.

### Limiti relativi alla grafica e al layout
{: #graphics-and-layout-limits}

- Vengono importate solo le primitive grafiche elencate sopra.
- Qualsiasi contenuto del simbolo KiCad che non rientri tra le primitive supportate viene ignorato.
- I simboli di libreria importati vengono riposizionati in modo da collocarsi sulla pagina TinyCAD con un margine e cercando di allinearli alla griglia TinyCAD.
- Alcune geometrie possono apparire leggermente diverse, perché KiCad e TinyCAD usano modelli di disegno interni differenti.
- Gli archi KiCad vengono approssimati con punti di curva TinyCAD.

### Limiti relativi al testo e allo stile
{: #text-and-styling-limits}

- La famiglia di caratteri non viene mantenuta; il testo importato usa le impostazioni dei caratteri TinyCAD.
- I dettagli di impaginazione del testo, come la giustificazione, non vengono mantenuti completamente.
- La rotazione del testo viene ricondotta al modello di orientamento più semplice di TinyCAD, anziché mantenere ogni angolo arbitrario.
- Il colore del testo dei pin non viene mantenuto.

### Differenze nel comportamento dei simboli
{: #symbol-behavior-differences}

- L'importazione in un progetto inserisce il simbolo solo nel disegno corrente. Non crea né aggiorna una voce riutilizzabile della libreria `.tclib`.
- L'importazione in una libreria crea voci riutilizzabili della libreria TinyCAD, ma in seguito è comunque necessario salvare la libreria.
- Se i nomi dei simboli importati coincidono con nomi già presenti nella libreria di destinazione, TinyCAD rinomina automaticamente le nuove voci aggiungendo un suffisso numerico.
- Se un simbolo KiCad include una variante De Morgan, TinyCAD la importa come voce di simbolo separata invece che come selettore di stile dinamico.

## Consigli pratici
{: #practical-advice}

- Se serve un simbolo una sola volta, importarlo nel progetto.
- Se si prevede di riutilizzare il simbolo, importarlo in una libreria.
- Iniziare con una piccola libreria `.kicad_sym` per verificare l'aspetto di disegni al tratto, testo e posizionamento dei pin in TinyCAD.
- Dopo l'importazione, controllare attentamente i componenti composti da più unità e le varianti De Morgan.
- Se un simbolo appare errato, aprirlo nell'editor di librerie TinyCAD e correggere manualmente il posizionamento del testo, i disegni al tratto o gli attributi.

## Riepilogo
{: #summary}

L'importazione da KiCad di TinyCAD è pensata per trasferire rapidamente in TinyCAD le librerie di simboli KiCad moderne, in particolare i simboli schematici standard costituiti da pin, testo e primitive grafiche semplici. Funziona al meglio con i file `.kicad_sym` ed è particolarmente pratica quando si desidera:

- inserire un simbolo direttamente nel disegno corrente, oppure
- trasferire simboli KiCad selezionati in una libreria TinyCAD per poterli riutilizzare

Per le operazioni più avanzate, è prevista una breve rifinitura manuale dopo l'importazione.

## Pagine correlate
{: #related-pages}

- [Modificare un simbolo](../Editing-a-Symbol/)
- [Usare le librerie di simboli](../Using-Symbol-Libraries/)

- Torna a [Simboli e librerie](../Symbols-and-Libraries/)
- Torna a [Indice dei contenuti di v4](../CONTENTS/)
