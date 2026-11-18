---
layout: default
---
# Fili
{: #wires}

I fili sono i collegamenti elettricamente attivi in uno schema TinyCAD.

Se ti serve la connettività per il controllo DRC, la generazione di netlist, l’esportazione SPICE/PCB o il collegamento tra fogli,
usa oggetti filo (non linee di annotazione).

## Perché i fili sono importanti
{: #why-wires-matter}

- I fili definiscono le reti elettriche.
- I fili si agganciano ai pin dei simboli e ad altri punti di connessione validi.
- TinyCAD usa la connettività dei fili per il controllo delle regole e la generazione degli output.

Usare linee di annotazione al posto dei fili può sembrare corretto a livello visivo, ma il circuito risulterà elettricamente scollegato per gli strumenti.

## Modalità di instradamento dei fili
{: #wire-routing-modes}
{: #wire-routing-modes}

In TinyCAD v4.0.11, usa il selettore accanto a Wire per scegliere come disegnare i nuovi segmenti.

| Modalità | Comportamento |
|---|---|
| **90°** | Instradamento orizzontale e verticale. |
| **45°** | Instradamento vincolato alle direzioni a 45° di TinyCAD. |
| **Libera** | Segmenti rettilinei con qualsiasi angolazione. |

La scelta di una modalità attiva Wire e mantiene l’eventuale anteprima del filo attiva. Puoi cambiare modalità prima di posizionare il segmento successivo. Lo snap alla griglia rimane un’impostazione separata. Per l’instradamento automatico tra due punti di connessione, usa il [strumento Filo da punto a punto](#auto-routing) adiacente.

![Selettore della barra degli strumenti per i fili, con le opzioni 90°, 45° e Libera.](../images/wire-routing-modes.png)

## Posizionamento dei fili
{: #placing-wires}
{: #placing-wires}

1. Seleziona lo strumento Wire.
2. Fai clic per iniziare da un punto di connessione valido; tuttavia, non è strettamente necessario. Puoi posizionare un filo ovunque. Puoi riconoscere un punto di connessione valido dal cerchio rosso che lo indica.
3. Fai clic per posizionare gli angoli e i segmenti necessari.
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
i segmenti del filo al posto tuo. È utile nell’uso quotidiano del mouse e soprattutto
su un touchscreen, dove toccare due estremi è più facile che posizionare ogni angolo.

1. Seleziona **Filo da punto a punto**, accanto al selettore della modalità Wire nella barra degli strumenti.
2. Fai clic o tocca il pin iniziale del simbolo o un filo esistente. Un cerchio rosso indica
   un punto di connessione valido.
3. Spostati sul pin o sul filo di destinazione per visualizzare l’anteprima del percorso automatico.
4. Fai clic o tocca la destinazione per posizionare il collegamento completo. TinyCAD seleziona
   i nuovi segmenti del filo ed esce dallo strumento di instradamento. Seleziona di nuovo **Filo da punto a punto**
   per creare un altro collegamento.

A differenza dello strumento Wire normale, entrambi gli estremi devono essere punti di connessione validi;
facendo clic nello spazio vuoto non si posiziona un angolo. Fai clic con il pulsante destro per annullare un
percorso incompleto. Se vuoi scegliere tu gli angoli, usa [Wire](#placing-wires).

Prova il [disegno di esempio con instradamento automatico](../examples/Auto-route%20example.dsn).
La resistenza e il LED sono sulla griglia, con il collegamento tra loro lasciato aperto.

Per prima cosa, seleziona Filo da punto a punto e scegli il pin destro di R1.

![1. Inizia con R1 e D1 scollegati. Il cerchio rosso indica il pin iniziale su R1.](../images/wire-auto-route-start.png){: width="435" style="max-width: 50%;"}

Poi, punta al pin superiore di D1. L’anteprima mostra il percorso e il relativo angolo prima
di confermarlo.

![2. Visualizza l’anteprima del percorso automatico verso D1. Il cerchio rosso indica il pin di destinazione.](../images/wire-auto-route.png){: width="435" style="max-width: 50%;"}

Infine, fai clic o tocca il pin di D1. TinyCAD posiziona tutti i segmenti in un’unica operazione.

![3. Conferma la destinazione per posizionare il collegamento completo, incluso l’angolo.](../images/wire-auto-route-complete.png){: width="435" style="max-width: 50%;"}

Su un touchscreen, puoi toccare direttamente i due estremi. Per pin piccoli o ravvicinati,
usa la [lente d’ingrandimento](../Touch-controls/#precise-placement-with-the-loupe): punta
su ciascun estremo e premi **Fai clic**. Non è necessario trascinare lungo il percorso né
toccare i relativi angoli. Controlla il collegamento completato e, se necessario, modifica i segmenti.

## Snap e giunzioni
{: #snapping-and-junctions}

- I fili si agganciano magneticamente ai pin e ai fili esistenti.
- Le giunzioni vengono aggiunte automaticamente quando necessario.
- I fili che si incrociano non sono collegati, a meno che non sia presente una giunzione.

## Riordinare un layout esistente
{: #tidying-an-existing-layout}

Usa [Riordino layout (Layout automatico)](../Layout-Tidy-Up/) per ridisporre i componenti, i fili e le etichette esistenti su un intero foglio o all’interno di una selezione. Filo da punto a punto crea un nuovo collegamento; Layout automatico riordina i collegamenti già presenti.

## Modifica dei fili
{: #editing-wires}

Per modificare un filo, fai semplicemente clic su di esso. Ora puoi trascinare l’intero segmento del filo trascinando il filo stesso, oppure spostarne le estremità trascinando i riquadri di spostamento.

- Torna a [Disegno](../User-guide/)
- Torna a [Sommario v4](../CONTENTS/)
