---
layout: default
---
# Fili
{: #wires}

I fili sono le connessioni elettricamente attive in uno schema TinyCAD.

Se servono connessioni per il controllo DRC, la generazione di netlist, l’esportazione SPICE/PCB o il collegamento tra fogli,
utilizzare oggetti filo (non linee di annotazione).

## Perché i fili sono importanti
{: #why-wires-matter}

- I fili definiscono le reti elettriche.
- I fili si agganciano ai pin dei simboli e ad altri punti di connessione validi.
- TinyCAD utilizza la connettività dei fili per il controllo delle regole e la generazione degli output.

L’uso di linee di annotazione al posto dei fili può sembrare corretto a livello visivo, ma il
circuito risulterà elettricamente scollegato per gli strumenti.

## Modalità di instradamento dei fili
{: #wire-routing-modes}

In TinyCAD v4.0.11, usare il selettore accanto a Filo (Wire) per scegliere come tracciare i nuovi segmenti.

| Modalità | Comportamento |
|---|---|
| **90°** | Instradamento orizzontale e verticale. |
| **45°** | Instradamento limitato alle direzioni a 45° di TinyCAD. |
| **Libero (Free)** | Segmenti rettilinei con qualsiasi angolo. |

La scelta di una modalità attiva Filo e mantiene l’anteprima del filo in corso. È possibile cambiare modalità prima di posizionare il segmento successivo. L’aggancio alla griglia rimane un’impostazione separata. Lo strumento adiacente per il cablaggio punto a punto è indipendente da questo selettore.

![Selettore della barra dei fili con le opzioni 90°, 45° e Libero (Free).](../images/wire-routing-modes.png)

## Posizionamento dei fili
{: #placing-wires}

1. Selezionare lo strumento Filo.
2. Fare clic per iniziare da un punto di connessione valido, anche se non è strettamente necessario.  È possibile posizionare un filo ovunque.  Si può capire se il punto di connessione è valido perché la connessione sarà indicata da un cerchio rosso.
3. Fare clic per posizionare gli angoli/i segmenti necessari.
4. Terminare su un altro punto di connessione valido OPPURE
5. Fare clic con il pulsante destro per terminare la modalità di cablaggio.


{% include video-player.html
	src="/v4/images/video/Video 4.mp4"
	width=1602
	height=696
	caption="Video dimostrativo che mostra come posizionare i fili."
%}

<p>
	<a href="/v4/examples/Simple%20Drawing.dsn" class="btn btn-primary" download>
		<i class="bi bi-download me-1" aria-hidden="true"></i>&nbsp;Scarica
	</a>
</p>


## Aggancio e giunzioni
{: #snapping-and-junctions}

- I fili si agganciano magneticamente ai pin e ai fili esistenti.
- Le giunzioni vengono aggiunte automaticamente quando necessario.
- I fili che si incrociano non sono connessi, a meno che non sia presente una giunzione.

## Modifica dei fili
{: #editing-wires}

Per modificare un filo, è sufficiente fare clic su di esso.  A questo punto è possibile trascinare l’intero segmento del filo trascinando il filo stesso, oppure spostarne le estremità trascinando i riquadri di spostamento.

- Torna a [Disegno](../User-guide/)
- Torna a [contenuti della v4](../CONTENTS/)
