---
layout: default
---
# Drähte
{: #wires}

Drähte sind die elektrisch aktiven Verbindungen in einem TinyCAD-Schaltplan.

Wenn Sie Verbindungen für DRC, Netzlistenerstellung, SPICE-/PCB-Export oder die blattübergreifende
Verknüpfung benötigen, verwenden Sie Drahtobjekte (keine Annotationslinien).

## Warum Drähte wichtig sind
{: #why-wires-matter}

- Drähte definieren elektrische Netze.
- Drähte rasten an Symbolanschlüssen und anderen gültigen Verbindungspunkten ein.
- TinyCAD verwendet Drahtverbindungen für die Regelprüfung und die generierten Ausgaben.

Annotationslinien anstelle von Drähten zu verwenden, kann optisch korrekt wirken, aber der
Stromkreis ist für Werkzeuge elektrisch nicht verbunden.

## Drähte platzieren
{: #placing-wires}

1. Wählen Sie das Werkzeug „Draht“ (Wire).
2. Klicken Sie auf einen gültigen Verbindungspunkt, um dort zu beginnen – dies ist jedoch nicht unbedingt erforderlich. Sie können einen Draht an beliebiger Stelle platzieren. Ob der Verbindungspunkt gültig ist, erkennen Sie daran, dass ein roter Kreis die Verbindung anzeigt.
3. Klicken Sie, um bei Bedarf Ecken und Segmente zu platzieren.
4. Beenden Sie den Draht an einem weiteren gültigen Verbindungspunkt ODER
5. Klicken Sie mit der rechten Maustaste, um den Drahtmodus zu beenden.


{% include video-player.html
	src="/v4/images/video/Video 4.mp4"
	width=1602
	height=696
	caption="Videoanleitung zum Platzieren von Drähten."
%}

<p>
	<a href="/v4/examples/Simple%20Drawing.dsn" class="btn btn-primary" download>
		<i class="bi bi-download me-1" aria-hidden="true"></i>&nbsp;Herunterladen
	</a>
</p>


## Einrasten und Verbindungspunkte
{: #snapping-and-junctions}

- Drähte rasten magnetisch an Anschlüssen und vorhandenen Drähten ein.
- Verbindungspunkte werden bei Bedarf automatisch hinzugefügt.
- Sich kreuzende Drähte sind nicht verbunden, sofern kein Verbindungspunkt vorhanden ist.

## Drähte bearbeiten
{: #editing-wires}

Um einen Draht zu bearbeiten, klicken Sie einfach darauf. Anschließend können Sie entweder das gesamte Drahtsegment verschieben, indem Sie den Draht selbst ziehen, oder die Drahtenden verschieben, indem Sie die Verschiebungsfelder ziehen.

- Zurück zu [Zeichnen](../User-guide/)
- Zurück zu [Inhalt von v4](../CONTENTS/)
