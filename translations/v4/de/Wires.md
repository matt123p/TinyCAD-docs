---
layout: default
---
# Leitungen
{: #wires}

Leitungen sind die elektrisch wirksamen Verbindungen in einem TinyCAD-Schaltplan.

Wenn Sie Verbindungen für DRC, Netlistenerstellung, SPICE-/PCB-Export oder die
Verknüpfung zwischen Blättern benötigen, verwenden Sie Leitungsobjekte (keine Anmerkungslinien).

## Warum Leitungen wichtig sind
{: #why-wires-matter}

- Leitungen definieren elektrische Netze.
- Leitungen rasten an Symbolanschlüssen und anderen gültigen Verbindungspunkten ein.
- TinyCAD verwendet Leitungsverbindungen für die Regelprüfung und generierte Ausgaben.

Anmerkungslinien anstelle von Leitungen zu verwenden, kann optisch richtig aussehen, aber der
Schaltkreis ist für Werkzeuge elektrisch nicht verbunden.

## Leitungsführungsmodi
{: #wire-routing-modes}
{: #wire-routing-modes}

Wählen Sie in TinyCAD v4.0.11 mit dem Auswahlfeld neben Wire aus, wie neue Segmente gezeichnet werden.

| Modus | Verhalten |
|---|---|
| **90°** | Horizontale und vertikale Leitungsführung. |
| **45°** | Auf die 45°-Richtungen von TinyCAD beschränkte Leitungsführung. |
| **Frei** | Gerade Segmente in beliebigem Winkel. |

Durch die Auswahl eines Modus wird Wire aktiviert und eine eventuell aktive Leitungsvorschau beibehalten. Sie können den Modus ändern, bevor Sie das nächste Segment platzieren. Das Einrasten am Raster ist eine separate Einstellung. Für eine automatische Leitungsführung zwischen zwei Verbindungspunkten verwenden Sie das benachbarte [Punkt-zu-Punkt-Leitungswerkzeug](#auto-routing).

![Auswahlfeld für die Leitungssymbolleiste mit den Optionen 90°, 45° und Frei.](../Images/wire-routing-modes.png)

## Leitungen platzieren
{: #placing-wires}
{: #placing-wires}

1. Wählen Sie das Werkzeug Wire (Leitung) aus.
2. Klicken Sie auf einen gültigen Verbindungspunkt, um dort zu beginnen – dies ist jedoch nicht zwingend erforderlich. Sie können eine Leitung an beliebiger Stelle platzieren. Ob der Verbindungspunkt gültig ist, erkennen Sie an einem roten Kreis, der die Verbindung markiert.
3. Klicken Sie, um nach Bedarf Ecken/Segmente zu platzieren.
4. Beenden Sie die Leitung an einem weiteren gültigen Verbindungspunkt ODER
5. Klicken Sie mit der rechten Maustaste, um den Leitungsmodus zu beenden.


{% include video-player.html
	src="/v4/Images/video/Video 4.mp4"
	width=1602
	height=696
	caption="Videoanleitung zum Platzieren von Leitungen."
%}

<p>
	<a href="/v4/examples/Simple%20Drawing.dsn" class="btn btn-primary" download>
		<i class="bi bi-download me-1" aria-hidden="true"></i>&nbsp;Herunterladen
	</a>
</p>


## Automatische Leitungsführung mit Point-to-Point Wire
{: #auto-routing-with-point-to-point-wire}
{: #auto-routing}

**Point-to-Point Wire (Punkt-zu-Punkt-Leitung)** wählt eine Route zwischen zwei Verbindungspunkten und platziert
die Leitungssegmente für Sie. Das ist für die alltägliche Arbeit mit der Maus nützlich und besonders
auf einem Touchscreen, wo das Antippen zweier Endpunkte einfacher ist, als jede Ecke einzeln zu platzieren.

1. Wählen Sie in der Symbolleiste **Point-to-Point Wire**, neben der Auswahl für den Leitungsmodus.
2. Klicken oder tippen Sie auf einen Symbolanschluss oder eine vorhandene Leitung als Startpunkt. Ein roter Kreis markiert
   einen gültigen Verbindungspunkt.
3. Bewegen Sie den Zeiger zum Zielanschluss oder zur Ziellleitung, um eine Vorschau der automatischen Route anzuzeigen.
4. Klicken oder tippen Sie auf das Ziel, um die vollständige Verbindung zu platzieren. TinyCAD wählt
   die neuen Leitungssegmente aus und beendet das Leitungsführungswerkzeug. Wählen Sie erneut **Point-to-Point
   Wire**, um eine weitere Verbindung herzustellen.

Anders als beim gewöhnlichen Werkzeug Wire müssen beide Endpunkte gültige Verbindungspunkte sein;
ein Klick auf eine leere Stelle platziert keine Ecke. Klicken Sie mit der rechten Maustaste, um eine unvollständige
Route abzubrechen. Wenn Sie die Ecken selbst festlegen möchten, verwenden Sie [Wire](#placing-wires).

Probieren Sie die [Beispielzeichnung für die automatische Leitungsführung](../examples/Auto-route%20example.dsn).
Der Widerstand und die LED liegen auf dem Raster; die Verbindung zwischen ihnen ist noch offen.

Wählen Sie zunächst Point-to-Point Wire aus und klicken Sie auf den rechten Anschluss von R1.

![1. R1 und D1 sind noch nicht verbunden. Der rote Kreis markiert den Startanschluss an R1.](../Images/wire-auto-route-start.png){: width="435" style="max-width: 50%;"}

Zeigen Sie anschließend auf den oberen Anschluss von D1. Die Vorschau zeigt die Route und deren Ecke,
bevor Sie sie bestätigen.

![2. Vorschau der automatischen Route zu D1. Der rote Kreis markiert den Zielanschluss.](../Images/wire-auto-route.png){: width="435" style="max-width: 50%;"}

Klicken oder tippen Sie schließlich auf den Anschluss von D1. TinyCAD platziert alle Segmente in einem einzigen Vorgang.

![3. Bestätigen Sie das Ziel, um die vollständige Verbindung einschließlich ihrer Ecke zu platzieren.](../Images/wire-auto-route-complete.png){: width="435" style="max-width: 50%;"}

Auf einem Touchscreen können Sie die beiden Endpunkte direkt antippen. Bei kleinen oder dicht beieinanderliegenden
Anschlüssen verwenden Sie die [Lupe](../Touch-controls/#precise-placement-with-the-loupe): zielen Sie
auf jeden Endpunkt und drücken Sie **Klicken**. Sie müssen weder entlang der Route ziehen noch
deren Ecken antippen. Überprüfen Sie die fertige Verbindung und passen Sie bei Bedarf ihre Segmente an.

## Einrasten und Knoten
{: #snapping-and-junctions}

- Leitungen rasten magnetisch an Anschlüssen und vorhandenen Leitungen ein.
- Knoten werden bei Bedarf automatisch hinzugefügt.
- Kreuzende Leitungen sind nicht verbunden, sofern kein Knoten vorhanden ist.

## Vorhandenes Layout aufräumen
{: #tidying-an-existing-layout}

Verwenden Sie [Layout tidy-up (Auto-layout) (Layout aufräumen)](../Layout-Tidy-Up/), um vorhandene Bauteile, Leitungen und Beschriftungen auf einem ganzen Blatt oder innerhalb einer Auswahl neu anzuordnen. Point-to-Point Wire erstellt eine neue Verbindung; Auto-layout räumt bereits vorhandene Verbindungen auf.

## Leitungen bearbeiten
{: #editing-wires}

Um eine Leitung zu bearbeiten, klicken Sie einfach darauf. Anschließend können Sie entweder das gesamte Leitungssegment verschieben, indem Sie die Leitung selbst ziehen, oder die Enden der Leitung verschieben, indem Sie die Verschiebegriffe ziehen.

- Zurück zu [Zeichnen](../User-guide/)
- Zurück zu [Inhalt von v4](../CONTENTS/)
