---
layout: default
---
# Simboli di alimentazione
{: #power-symbols}

I simboli di alimentazione indicano la connessione a reti di alimentazione denominate, come `GND`, `+5V`,
`VCC` o `+3V3`.

Tutti i simboli di alimentazione con lo stesso nome sono considerati connessi elettricamente.

{% include video-player.html
	src="/v4/images/video/Video 5.mp4"
	width=1596
	height=700
	caption="Video dimostrativo che mostra come posizionare i simboli di alimentazione."
%}

<p>
	<a href="/v4/examples/Simple%20Drawing.dsn" class="btn btn-primary" download>
		<i class="bi bi-download me-1" aria-hidden="true"></i>&nbsp;Scarica
	</a>
</p>

## Funzionamento dei simboli di alimentazione
{: #how-power-symbols-work}

- La connettività delle reti si basa sul **nome dell'alimentazione**.
- La **forma** è solo visiva e non modifica la connettività.
- Le scelte di orientamento e forma servono a migliorare la leggibilità e lo stile del disegno.

Usa nomi coerenti in tutto il progetto per evitare di suddividere le reti di alimentazione.

## Regole di posizionamento
{: #placement-rules}

1. Seleziona lo strumento Alimentazione.
2. Scegli orientamento, forma e nome.
3. Posiziona il simbolo e collega il filo all'estremità del pin del simbolo.

Collega i fili all'estremità del pin del simbolo di alimentazione (non semplicemente vicino alla grafica), in modo che
la connessione venga riconosciuta.

## Pin di alimentazione nascosti nei simboli
{: #hidden-power-pins-on-symbols}

Alcuni simboli di libreria usano pin di alimentazione nascosti (per esempio, molte famiglie logiche).
Questi pin si collegano automaticamente alle reti di alimentazione con nomi corrispondenti.

Usa gli stessi nomi previsti dalla libreria dei simboli (per esempio `VCC`/`GND` quando
necessario) affinché i collegamenti automatici di alimentazione funzionino correttamente.

## Modifica e stili
{: #editing-and-styles}

Puoi modificare la forma di un simbolo di alimentazione selezionandolo e scegliendo una nuova forma nella
barra degli strumenti.

## Comportamento su più fogli
{: #multi-sheet-behavior}

I nomi delle reti di alimentazione sono globali nel contesto del progetto usato per la generazione della netlist.
L'uso di nomi coerenti tra i fogli garantisce la connettività di alimentazione prevista.

- Torna a [Disegno](../User-guide/)
- Torna a [Indice di v4](../CONTENTS/)
