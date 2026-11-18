---
layout: default
---
# Riordino del layout
{: #layout-tidy-up}

**Auto-layout** riordina uno schema esistente regolando la posizione dei componenti, dei fili e delle etichette. Usalo per rendere più leggibile un circuito affollato, ridurre le pieghe superflue o migliorare la spaziatura dei riferimenti e dei valori.

Funziona sul **foglio schematico corrente**, sia nel browser sia nell'app Desktop. Mantiene le connessioni elettriche esistenti; non deduce quali connessioni si intendeva disegnare né crea un circuito da zero.

## Aprire Auto-layout
{: #open-auto-layout}

In entrambi i prodotti, scegli **Auto-layout** nella barra degli strumenti, subito accanto a **Simulation**. In Desktop puoi anche scegliere **Tools → Auto-layout**.

Seleziona prima un foglio schematico. Lo strumento non è disponibile mentre si modifica una libreria o si visualizza un foglio Simulation.

## Scegliere cosa riordinare
{: #choose-what-to-tidy}

L'impostazione **Apply to** della finestra di dialogo offre:

- **Whole sheet** — riordina gli elementi del circuito supportati nel foglio corrente.
- **Selected Items** — riordina solo gli elementi del circuito selezionati, mantenendo fissi gli elementi esterni alla selezione e preservando le connessioni ai suoi confini.

Per intervenire su un'area ridotta, seleziona insieme i componenti, i fili e le etichette da regolare prima di aprire la finestra di dialogo. Selected Items è l'impostazione predefinita quando la selezione contiene un elemento del circuito supportato. È disabilitata se la selezione contiene solo oggetti non supportati, come riquadri di note o forme di disegno, oppure se non è selezionato nulla.

Una selezione può includere simboli, fili, etichette di rete, simboli di alimentazione, indicatori di non connessione e giunzioni. Un componente esterno alla selezione non si sposta solo perché è collegato a un componente selezionato.

## Scegliere l'intensità
{: #choose-the-strength}

**Strength** controlla quanto può cambiare la posizione dei componenti:

| Intensità | Cosa può cambiare |
| --- | --- |
| **Low** | Mantiene fissi i componenti grandi; i componenti più piccoli, i fili e le etichette possono comunque spostarsi. |
| **Medium** | Consente di spostare fino a due componenti grandi, oltre ai componenti più piccoli, ai fili e alle etichette. È l'impostazione predefinita. |
| **High** | Consente di spostare tutti i componenti idonei, insieme a fili ed etichette. |

Inizia con Low se vuoi preservare la disposizione principale. Usa Medium o High quando il circuito ha bisogno di più spazio per riorganizzarsi. Low non è un'opzione limitata alle etichette: può modificare anche la posizione dei componenti piccoli e i percorsi dei fili.

La definizione di «grande» dipende dalla geometria del simbolo e dal numero di pin, non dalla sua importanza elettrica. Modificare l'intensità non ruota, ridimensiona o sostituisce i componenti e non ne modifica i riferimenti, i valori o le impostazioni del modello.

## Eseguire e controllare il risultato
{: #run-and-review-the-result}

1. Apri un disegno o una copia modificabile di un [esempio incluso](../Bundled-Examples/).
2. Seleziona l'area da riordinare se vuoi limitare l'operazione.
3. Apri **Auto-layout**, scegli **Apply to** e **Strength**, quindi scegli **Go**.
4. Attendi mentre viene visualizzato **Arranging layout…**. Se il risultato è valido, viene applicato immediatamente e la finestra di dialogo si chiude.
5. Controlla il risultato. Usa **Undo** per annullare tutto il riordino in un solo passaggio, se preferisci la disposizione originale.

{% include video-player.html src="/v4/videos/simulation/layout-tidy-up.mp4" poster="/v4/videos/simulation/layout-tidy-up.jpg" caption="Apri Auto-layout, scegli l'ambito e l'intensità, riordina l'esempio dell'amplificatore, quindi annulla la modifica." %}

**Cancel** interrompe il calcolo e chiude la finestra di dialogo senza applicare modifiche. Se il foglio cambia mentre lo strumento è in esecuzione, il risultato viene scartato; eseguilo di nuovo sul foglio corrente.

**No layout improvements were found** significa che lo strumento non ha trovato modifiche accettabili entro l'ambito e l'intensità scelti. Il disegno rimane invariato. Puoi chiudere la finestra di dialogo, selezionare un'altra area, provare un'intensità diversa o apportare una modifica manuale.

## Cosa migliora lo strumento
{: #what-the-tool-improves}

Auto-layout cerca di apportare diversi tipi di miglioramenti:

- Posizioni più leggibili per il testo di riferimento/valore dei componenti, mantenendo i campi raggruppati e distanti dagli elementi grafici, dai fili e dagli altri testi vicini.
- Posizioni migliori per le semplici etichette di rete lungo i fili di supporto, allineando le etichette correlate quando possibile.
- Percorsi ortogonali dei fili più semplici, deviazioni superflue più brevi e uscite dai pin dei componenti più chiare.
- Disposizione più compatta dei componenti collegati e spaziatura regolare dei componenti ripetuti.
- Percorsi paralleli ordinati per i fili correlati, quando le connessioni e lo spazio disponibile lo consentono.

Non ridisegna riquadri di note, bus, indicatori di porta sagomati, grafica delle librerie o elementi fissi della pagina. Alcuni simboli densi o insoliti richiedono comunque un intervento manuale. Un filo più lungo può essere un risultato migliore se offre spazio a un'etichetta o mantiene chiara una connessione.

## Controllare le connessioni prima del riordino
{: #check-connections-before-tidying}

Auto-layout considera la **connettività esistente del disegno come punto di partenza**. Prima di accettare le modifiche, controlla sia l'appartenenza alle reti elettriche sia le connessioni fisiche dei fili. Nei controlli, le etichette di rete denominate non possono nascondere un filo fisicamente interrotto.

Un filo che attraversa l'estremità di un altro filo o una presa può creare una connessione elettrica anche senza un punto di giunzione visibile. Se il contatto è accidentale, correggilo prima di eseguire Auto-layout: lo strumento non può stabilire che una connessione esistente sia un errore di disegno. Non sposta le giunzioni ambigue per unire reti che prima erano separate.

Dopo il riordino, controlla le diramazioni, le connessioni ai pin e i percorsi attorno alle prese inutilizzate. Usa [Design Rules Check](../Design-Rules-Check/) se opportuno e confronta il circuito con le connessioni previste. Se un disegno di simulazione risulta modificato, [esegui di nuovo la simulazione](../Simulation/) prima di considerare i risultati precedenti come misurazioni del disegno corrente.

## Auto-layout o filo punto a punto?
{: #auto-layout-or-point-to-point-wire}

Usa **Auto-layout** per riordinare la geometria già presente nello schema. Usa [Point-to-Point Wire](../Wires/#auto-routing) quando vuoi creare una nuova connessione instradata tra due punti terminali. Il normale [strumento Wire](../Wires/#placing-wires) consente di scegliere personalmente i singoli angoli.

Vedi anche [Snap to Grid](../Snap-to-Grid/), [Labels](../Labels/) e [Page Size](../Page-Size/).
