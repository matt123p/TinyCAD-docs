---
layout: default
---
# Bus
{: #buses}

Un bus è un ausilio grafico per gli schemi, utile a rappresentare gruppi di segnali correlati. I bus migliorano la leggibilità, soprattutto quando molti fili simili corrono affiancati.

In TinyCAD, la connettività elettrica effettiva è comunque realizzata tramite **fili ed etichette di rete**. Un bus, da solo, non collega elettricamente i segnali.

## Esempio di disegno
{: #example-drawing}

<img src="/v4/images/Image 1.svg" alt="A example of using Buses" />

<p>
	<a href="/v4/examples/Bus%20Example.dsn" class="btn btn-primary" download>
		<i class="bi bi-download me-1" aria-hidden="true"></i>&nbsp;Scarica
	</a>
</p>


## Procedura per i bus
{: #bus-workflow}

1. Disegna la linea del bus lungo il percorso previsto per i segnali raggruppati.
2. Posiziona gli ingressi bus nei punti in cui i singoli segnali si diramano.
3. Disegna i fili dagli ingressi bus ai pin dei simboli o ai punti di connessione.
4. Posiziona le etichette su quei fili (ad esempio `D0`, `D1`, `D2`...).
5. Ripeti le etichette e i fili sul bus di destinazione, usando gli stessi nomi.

Quando le etichette corrispondono, le reti sono collegate.

## Oggetti bus in TinyCAD
{: #bus-objects-in-tinycad}

- **Bus**: percorso principale raggruppato; utile per organizzare molte connessioni.
- **Ingresso bus**: collegamento grafico tra il bus e un singolo filo.
- **Nome bus**: testo riportato sul bus (ad esempio `Data Bus` o il numero di conduttori).

I nomi dei bus descrivono l'intento per le persone; le etichette sui fili identificano le reti elettriche per gli strumenti.

## Suggerimenti per i nomi e la ripetizione
{: #naming-and-repeat-tips}

- Mantieni coerenti le etichette dei segnali del bus da un'estremità all'altra (`A0..A15`, `D0..D7`, ecc.).
- Usa le opzioni di ripetizione per velocizzare il posizionamento degli ingressi e l'assegnazione di etichette sequenziali.
- L'ordine dei nomi dei segnali può variare alle due estremità, purché i nomi corrispondano.

## Giunzioni
{: #junctions}

I bus non richiedono punti di giunzione sulla linea del bus stessa.

## Bus e disegni su più fogli
{: #buses-and-multi-sheet-drawings}

Nei diversi fogli, riutilizza le stesse etichette di segnale per collegare le reti corrispondenti.
La grafica e i nomi dei bus migliorano la leggibilità, mentre i nomi delle etichette definiscono la connettività per la generazione della netlist e il DRC.

- Torna a [Disegno](../User-guide/)
- Torna a [Indice v4](../CONTENTS/)
