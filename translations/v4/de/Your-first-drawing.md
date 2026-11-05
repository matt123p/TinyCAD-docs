---
layout: default
---
# Ihre erste Zeichnung
{: #your-first-drawing}

Diese Seite führt Sie durch die Schritte zum Zeichnen Ihres ersten Schaltplans mit TinyCAD.

Im einfachsten Fall besteht eine TinyCAD-Zeichnung aus einer Sammlung von Symbolen, die
mit Drähten verbunden sind. In diesem Beispiel platzieren Sie einige Symbole und verbinden sie anschließend mit Drähten.

## Beispielschaltung
{: #example-circuit}

Hier ist eine einfache Schaltung zum Zeichnen:

<img src="/v4/images/media/image1.png" alt="Simple battery, resistor, and LED circuit used in the tutorial" style="width: 2.13542in; height: 1.13542in;" />

<p>
	<a href="/v4/examples/First%20Drawing.dsn" class="btn btn-primary" download>
		<i class="bi bi-download me-1" aria-hidden="true"></i>&nbsp;Herunterladen
	</a>
</p>


## Videoanleitung
{: #video-walkthrough}

{% include video-player.html
	src="/v4/images/video/Video 2.mp4"
	width=1618
	height=922
	caption="Videoanleitung zum Bearbeiten und Verschieben von Symboltext."
%}

# Schritt-für-Schritt-Anleitung
{: #step-by-step-guide}

## Symbolbibliotheken
{: #symbol-libraries}

1. Geben Sie `battery` in das Suchfeld ein.
2. Wählen Sie **Multi Cell Battery** aus.
3. Ziehen Sie das Symbol aus dem Symbolbereich auf die Zeichnung.

Platzieren Sie nun einen Widerstand und eine LED.

Verwenden Sie die Dreh- und Spiegel-Steuerelemente in der Symbolleiste, um die Symbole auszurichten:

<img src="/v4/images/media/image5.png" alt="Rotate and flip controls used to change symbol orientation" />

Falls Sie einen Fehler machen, verwenden Sie Rückgängig/Wiederholen:

<img src="/v4/images/media/image6.png" alt="Undo and Redo toolbar buttons" />

Ihre Zeichnung sollte ungefähr so aussehen:

<img src="/v4/images/media/image7.png" alt="Battery, resistor, and LED symbols placed on the drawing before wiring" style="width: 3.76042in; height: 2.52083in;" />

## Eine Schaltung verdrahten
{: #wiring-up-a-circuit}

1. Wählen Sie das Werkzeug **Wire** aus.
2. Klicken Sie auf einen Batterieanschluss, um einen Draht zu beginnen.
3. Bewegen Sie den Zeiger zum Widerstandsanschluss und klicken Sie erneut, um den Draht zu platzieren.

Drähte rasten an gültigen Verbindungspunkten von Symbolen ein. Ein roter Kreis zeigt eine Einrastposition an.

Tipp: Drücken Sie `W` auf der Tastatur, um schnell wieder in den Drahtmodus zu wechseln.

Nach dem Verdrahten sollte es ungefähr so aussehen:

<img src="/v4/images/media/image8.png" alt="Example circuit after the battery, resistor, and LED have been wired together" style="width: 3.40625in; height: 2.38542in;" />

## Die Zeichnung beschriften
{: #annotating-the-drawing}

Symbole benötigen Bauteilwerte und Referenzbezeichnungen. In TinyCAD sind dies üblicherweise
die Felder **Name** und **Ref** des Symbols.

1. Klicken Sie auf die Batterie.
2. Öffnen Sie unten den Bereich **Symbol**.
3. Ändern Sie `BATTERY_2` in `9V`.
4. Ändern Sie die Referenz `Z?` in `B1`.

Wiederholen Sie dies für die anderen Bauteile:

- Widerstand: Name `1K`, Ref `R1`
- LED: Name `Red Led`, Ref `D1`

Wenn ein Name oder eine Referenz ausgeblendet ist, verwenden Sie die Kontrollkästchen, um den Text
in der Zeichnung ein- oder auszublenden.

## Laden und Speichern
{: #loading-and-saving}

<div class="manual-tabset" data-tabset="product-mode" data-tabset-label="Choose your TinyCAD product" data-default-tab="Browser" markdown="1">

### Lokale Dateien im Browser
{: #browser-local-files}

Um Ihre Zeichnung zu speichern, verwenden Sie die Schaltflächen „Save As“ oder „Save“ in der Symbolleiste:

<img src="/v4/images/media/image2.png" alt="The toolbar buttons for Save and Save As"  />


### Google Drive im Browser
{: #browser-google}

Ihre erste Zeichnung ist fertig. So benennen Sie sie um:

1. Klicken Sie oben auf den Zeichnungsnamen (zum Beispiel `tCad1.dsn`).
2. Benennen Sie sie in `First Drawing.dsn` um.
3. Drücken Sie die Eingabetaste.

<img src="/v4/images/media/image13.png" alt="Editable drawing title field used to rename the current design" style="width: 4.15625in; height: 0.92708in;" />

Speichern Sie die Zeichnung mit dem Symbol **Save** in Google Drive.

So laden Sie sie erneut aus Google Drive:

1. Öffnen Sie <https://drive.google.com/drive/>.
2. Suchen Sie die Zeichnung.
3. Klicken Sie mit der rechten Maustaste darauf und wählen Sie **Open with -> TinyCAD**.

<img src="/v4/images/media/image14.png" alt="Google Drive context menu showing Open with TinyCAD for a drawing file" style="width: 5.09138in; height: 3.90625in;" />

Sie können TinyCAD-Entwürfe in Google Drive auch umbenennen und löschen.

### Desktop-App
{: #desktop-app}

Ihre erste Zeichnung ist fertig. So speichern Sie sie in der Desktop-App:

1. Öffnen Sie **File -> Save As**.
2. Wählen Sie einen Ordner auf Ihrem Computer aus.
3. Speichern Sie die Zeichnung unter `First Drawing.dsn`.

So laden Sie sie später erneut:

1. Öffnen Sie **File -> Open**.
2. Navigieren Sie zu `First Drawing.dsn`.
3. Wählen Sie die Datei aus und öffnen Sie sie.

TinyCAD für den Desktop verwendet dasselbe Format `.dsn` wie TinyCAD im Browser. Sie können
eine Zeichnung aus Google Drive herunterladen und in der Desktop-App öffnen.

Ebenso können Sie Zeichnungen, die Sie mit der Desktop-Version von TinyCAD erstellt haben,
mit der browserbasierten Version verwenden.

</div>

## Weitere Informationen
{: #further-reading}

Informationen zu benutzerdefinierten Symbolen und Bibliotheken finden Sie im Abschnitt
[Benutzerdefinierte Symbolbibliotheken](../Custom-symbol-libraries/).

- Zurück zu [Zeichnen](../User-guide/)
- Zurück zu [Inhaltsverzeichnis von v4](../CONTENTS/)
