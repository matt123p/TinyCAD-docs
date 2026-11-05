---
layout: default
---
# Allinea alla griglia
{: #snap-to-grid}

Allinea alla griglia fa sì che la posizione del mouse si agganci al punto della griglia più vicino mentre
disegni o posizioni elementi. In questo modo simboli e fili rimangono allineati e si garantisce
che le connessioni arrivino esattamente ai punti di connessione validi.

## Perché è importante
{: #why-it-matters}

- Mantiene collegati le estremità dei fili e i pin dei simboli: se non usi Allinea alla griglia, corri
    il rischio che i fili non si colleghino ai pin.
- Evita disallineamenti visivi che possono sembrare corretti, ma risultare elettricamente
	non connessi negli strumenti di TinyCAD.

Per il normale lavoro sugli schemi, Allinea alla griglia dovrebbe rimanere attivo.

## Visualizzare la griglia e attivare l'allineamento
{: #showing-the-grid-and-enabling-snapping}

Apri il menu della barra degli strumenti **Impostazioni**, quindi scegli **Impostazioni** per modificare queste
opzioni indipendenti:

- **Mostra la griglia** controlla la visibilità dei punti della griglia. Disattivandola, l'allineamento non viene disabilitato.
- **Allinea alla griglia** controlla l'allineamento durante il posizionamento e lo spostamento degli oggetti. Disattivandolo, la griglia non viene nascosta.

I punti della griglia potrebbero non essere visualizzati se lo zoom è troppo ridotto per mostrarli chiaramente.

![Finestra di dialogo Impostazioni con caselle di controllo separate Mostra la griglia e Allinea alla griglia.](../images/grid-settings.png)

Quando sono selezionati degli oggetti, con l'allineamento attivo i tasti freccia li spostano secondo la spaziatura della griglia. Con l'allineamento disattivato, si spostano a piccoli passi senza essere
riportati alla griglia. Tieni premuto **Ctrl** per spostamenti a piccoli passi, indipendentemente dall'impostazione di allineamento.
Se non è selezionato alcun elemento, i tasti freccia spostano la vista.

## Spaziatura della griglia
{: #grid-spacing}

TinyCAD supporta 3 modalità di spaziatura della griglia:

- **Spaziatura normale della griglia**: ideale per la maggior parte delle operazioni di modifica degli schemi.
- **Spaziatura fine della griglia**: maggiore densità di punti (il doppio dei punti), utile
	per le annotazioni e il disegno dei simboli.
- **Spaziatura personalizzata della griglia**: valore di spaziatura personalizzato inserito nella finestra di dialogo delle impostazioni,
	in mm o pollici a seconda delle unità correnti.

Si consiglia di usare **Griglia fine** per tutti i disegni.

- Torna a [Disegno](../User-guide/)
- Torna all'[indice di v4](../CONTENTS/)
