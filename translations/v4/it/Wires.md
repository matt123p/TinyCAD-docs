---
layout: default
---
# Fili
{: #wires}

I fili sono i collegamenti elettricamente attivi in uno schema TinyCAD.

Se ti serve la connettività per il DRC, la generazione di netlist, l'esportazione SPICE/PCB o il
collegamento tra fogli, usa gli oggetti filo (non le linee di annotazione).

## Perché i fili sono importanti
{: #why-wires-matter}

- I fili definiscono le reti elettriche.
- I fili si agganciano ai pin dei simboli e ad altri punti di connessione validi.
- TinyCAD usa la connettività dei fili per il controllo delle regole e per generare gli output.

L'uso di linee di annotazione al posto dei fili può sembrare corretto dal punto di vista visivo, ma il
circuito risulterà elettricamente scollegato per gli strumenti.

## Modalità di instradamento dei fili
{: #wire-routing-modes}
{: #wire-routing-modes}

In TinyCAD v4.0.11, usa il selettore accanto a Wire per scegliere come disegnare i nuovi segmenti.

| Modalità | Comportamento |
|---|---|
| **90°** | Instradamento orizzontale e verticale. |
| **45°** | Instradamento vincolato alle direzioni a 45° di TinyCAD. |
| **Libera** | Segmenti rettilinei con qualsiasi angolazione. |

La scelta di una modalità attiva Wire e mantiene l'eventuale anteprima del filo attiva. Puoi cambiare modalità prima di posizionare il segmento successivo. L'aggancio alla griglia resta un'impostazione separata. Per instradare automaticamente un collegamento tra due punti di connessione, usa lo [strumento Filo da punto a punto](#auto-routing).

![Selettore della barra degli strumenti per i fili, con le opzioni 90°, 45° e Libera.](../images/wire-routing-modes.png)

## Posizionamento dei fili
{: #placing-wires}
{: #placing-wires}

1. Seleziona lo strumento Wire.
2. Fai clic per iniziare da un punto di connessione valido, anche se non è strettamente necessario. Puoi posizionare un filo ovunque. Puoi verificare se il punto di connessione è valido perché il collegamento è indicato da un cerchio rosso.
3. Fai clic per posizionare gli angoli/segmenti necessari.
4. Termina su un altro punto di connessione valido OPPURE
5. Fai clic con il pulsante destro per terminare la modalità di cablaggio.


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


## Instradamento automatico con Filo da punto a punto
{: #auto-routing-with-point-to-point-wire}
{: #auto-routing}

**Filo da punto a punto** sceglie un percorso tra due punti di connessione e posiziona
per te i segmenti del filo. È utile per il normale utilizzo con il mouse e, in particolare,
su un touchscreen, dove toccare due estremi è più semplice che posizionare ogni angolo.

1. Seleziona **Filo da punto a punto**, accanto al selettore della modalità Wire nella barra degli strumenti.
2. Fai clic o tocca il pin di un simbolo iniziale o un filo esistente. Un cerchio rosso indica
   un punto di connessione valido.
3. Sposta il puntatore sul pin o sul filo di destinazione per visualizzare l'anteprima del percorso automatico.
4. Fai clic o tocca la destinazione per posizionare il collegamento completo. TinyCAD seleziona
   i nuovi segmenti del filo e disattiva lo strumento di instradamento. Seleziona di nuovo **Filo da punto a
   punto** per creare un altro collegamento.

A differenza dello strumento Wire normale, entrambi gli estremi devono essere punti di connessione validi;
facendo clic in uno spazio vuoto non si posiziona un angolo. Fai clic con il pulsante destro per annullare un
percorso non completato. Se vuoi scegliere tu gli angoli, usa [Wire](#placing-wires).

Provare il [disegno di esempio di instradamento automatico](../examples/Auto-route%20example.dsn). La resistenza e il LED sono sulla griglia, ma il collegamento tra loro è ancora aperto.

Per prima cosa, selezionare Point-to-Point Wire e scegliere il pin destro di R1.

![1. Iniziare con R1 e D1 non collegati tra loro. Il cerchio rosso indica il pin iniziale su R1.](../images/wire-auto-route-start.png){: width="435" style="max-width: 50%;"}

Poi puntare al pin superiore di D1. L’anteprima mostra il percorso e la sua curva prima di confermare il collegamento.

![2. Visualizzare l’anteprima del percorso automatico fino a D1. Il cerchio rosso indica il pin di destinazione.](../images/wire-auto-route.png){: width="435" style="max-width: 50%;"}

Infine, fare clic o toccare il pin di D1. TinyCAD posiziona tutti i segmenti in una sola operazione.

![3. Confermare la destinazione per posizionare il collegamento completo, compresa la curva.](../images/wire-auto-route-complete.png){: width="435" style="max-width: 50%;"}

Su un touchscreen, puoi toccare direttamente i due estremi. Per pin piccoli o ravvicinati,
usa la [lente d'ingrandimento](../Touch-controls/#precise-placement-with-the-loupe): punta
su ciascun estremo e premi **Fai clic**. Non è necessario trascinare lungo il percorso o
toccarne gli angoli. Controlla il collegamento completato e, se necessario, modifica i segmenti.

## Aggancio e giunzioni
{: #snapping-and-junctions}

- I fili si agganciano magneticamente ai pin e ai fili esistenti.
- Le giunzioni vengono aggiunte automaticamente dove necessario.
- I fili che si incrociano non sono collegati, a meno che non sia presente una giunzione.

## Modifica dei fili
{: #editing-wires}

Per modificare un filo, è sufficiente fare clic su di esso. Ora puoi trascinare l'intero segmento del filo trascinandolo direttamente oppure spostarne le estremità trascinando le caselle di spostamento.

- Torna a [Disegno](../User-guide/)
- Torna a [Contenuti v4](../CONTENTS/)
