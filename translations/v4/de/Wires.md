---
layout: default
---
# Drähte
{: #wires}

Drähte sind die elektrisch aktiven Verbindungen in einem TinyCAD-Schaltplan.

Wenn Sie Verbindungen für DRC, Netlisten, den SPICE-/PCB-Export oder die blattübergreifende
Verknüpfung benötigen, verwenden Sie Drahtobjekte (keine Anmerkungslinien).

## Warum Drähte wichtig sind
{: #why-wires-matter}

- Drähte definieren elektrische Netze.
- Drähte rasten an Symbolanschlüssen und anderen gültigen Verbindungspunkten ein.
- TinyCAD verwendet die Drahtverbindungen für die Regelprüfung und generierte Ausgaben.

Die Verwendung von Anmerkungslinien anstelle von Drähten kann optisch korrekt aussehen, aber der
Schaltkreis ist für Werkzeuge elektrisch nicht verbunden.

## Drahtführungsmodi
{: #wire-routing-modes}
{: #wire-routing-modes}

Wählen Sie in TinyCAD v4.0.11 mit dem Auswahlfeld neben „Draht“ aus, wie neue Segmente gezeichnet werden.

| Modus | Verhalten |
|---|---|
| **90°** | Horizontale und vertikale Führung. |
| **45°** | Führung, beschränkt auf die 45°-Richtungen von TinyCAD. |
| **Frei** | Gerade Segmente in beliebigem Winkel. |

Mit der Auswahl eines Modus wird „Draht“ aktiviert und eine aktive Drahtvorschau beibehalten. Sie können den Modus ändern, bevor Sie das nächste Segment platzieren. Das Einrasten am Raster bleibt eine separate Einstellung. Für die automatische Führung zwischen zwei Verbindungspunkten verwenden Sie das benachbarte [Punkt-zu-Punkt-Drahtwerkzeug](#auto-routing).

![Draht-Werkzeugleistenauswahl mit den Optionen 90°, 45° und Frei.](../images/wire-routing-modes.png)

## Drähte platzieren
{: #placing-wires}
{: #placing-wires}

1. Wählen Sie das Drahtwerkzeug.
2. Klicken Sie auf einen gültigen Verbindungspunkt, um dort zu beginnen – das ist jedoch nicht zwingend erforderlich. Sie können einen Draht an beliebiger Stelle platzieren. Ob der Verbindungspunkt gültig ist, erkennen Sie daran, dass ein roter Kreis die Verbindung kennzeichnet.
3. Klicken Sie, um bei Bedarf Ecken/Segmente zu platzieren.
4. Beenden Sie den Draht an einem anderen gültigen Verbindungspunkt ODER
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


## Automatische Führung mit „Punkt-zu-Punkt-Draht“
{: #auto-routing-with-point-to-point-wire}
{: #auto-routing}

**Punkt-zu-Punkt-Draht** wählt eine Route zwischen zwei Verbindungspunkten und platziert
die Drahtsegmente für Sie. Das Werkzeug eignet sich für die alltägliche Arbeit mit der Maus und besonders
für einen Touchscreen, wo das Antippen zweier Endpunkte einfacher ist, als jede Ecke einzeln zu platzieren.

1. Wählen Sie **Punkt-zu-Punkt-Draht**, neben der Auswahl für den Drahtmodus in der Werkzeugleiste.
2. Klicken oder tippen Sie auf den Startanschluss eines Symbols oder auf einen vorhandenen Draht. Ein roter Kreis kennzeichnet
einen gültigen Verbindungspunkt.
3. Bewegen Sie den Zeiger zum Zielanschluss oder zum Draht, um die automatische Route in der Vorschau anzuzeigen.
4. Klicken oder tippen Sie auf das Ziel, um die vollständige Verbindung zu platzieren. TinyCAD wählt
die neuen Drahtsegmente aus und beendet das Führungswerkzeug. Wählen Sie **Punkt-zu-Punkt-
Draht** erneut, um eine weitere Verbindung herzustellen.

Anders als beim gewöhnlichen Drahtwerkzeug müssen beide Endpunkte gültige Verbindungspunkte sein;
ein Klick auf eine freie Stelle platziert keine Ecke. Klicken Sie mit der rechten Maustaste, um eine unfertige
Route abzubrechen. Wenn Sie die Ecken selbst festlegen möchten, verwenden Sie [Draht](#placing-wires).

Probieren Sie die [Beispielzeichnung zur automatischen Drahtführung](../examples/Auto-route%20example.dsn) aus. Widerstand und LED liegen auf dem Raster, die Verbindung zwischen ihnen ist noch offen.

Wählen Sie zuerst Point-to-Point Wire und den rechten Anschluss von R1.

![1. Zu Beginn sind R1 und D1 nicht miteinander verbunden. Der rote Kreis markiert den Startanschluss an R1.](../images/wire-auto-route-start.png){: width="435" style="max-width: 50%;"}

Zeigen Sie dann auf den oberen Anschluss von D1. Die Vorschau zeigt den Verlauf und die Ecke, bevor Sie die Verbindung bestätigen.

![2. Vorschau der automatischen Drahtführung zu D1. Der rote Kreis markiert den Zielanschluss.](../images/wire-auto-route.png){: width="435" style="max-width: 50%;"}

Klicken oder tippen Sie abschließend auf den Anschluss von D1. TinyCAD platziert alle Segmente in einem Schritt.

![3. Bestätigen Sie das Ziel, um die vollständige Verbindung einschließlich der Ecke zu platzieren.](../images/wire-auto-route-complete.png){: width="435" style="max-width: 50%;"}

Auf einem Touchscreen können Sie die beiden Endpunkte direkt antippen. Bei kleinen oder dicht gedrängten
Anschlüssen verwenden Sie die [Lupe](../Touch-controls/#precise-placement-with-the-loupe): zielen
Sie auf jeden Endpunkt und drücken Sie **Klicken**. Sie müssen weder entlang der Route ziehen noch
deren Ecken antippen. Überprüfen Sie die fertige Verbindung und passen Sie ihre Segmente bei Bedarf an.

## Einrasten und Knoten
{: #snapping-and-junctions}

- Drähte rasten magnetisch an Anschlüssen und vorhandenen Drähten ein.
- Knoten werden bei Bedarf automatisch hinzugefügt.
- Sich kreuzende Drähte sind nicht verbunden, sofern kein Knoten vorhanden ist.

## Drähte bearbeiten
{: #editing-wires}

Um einen Draht zu bearbeiten, klicken Sie einfach darauf. Anschließend können Sie entweder das gesamte Drahtsegment verschieben, indem Sie den Draht selbst ziehen, oder die Drahtenden verschieben, indem Sie die Verschiebungsgriffe ziehen.

- Zurück zu [Zeichnen](../User-guide/)
- Zurück zu [Inhaltsverzeichnis v4](../CONTENTS/)
