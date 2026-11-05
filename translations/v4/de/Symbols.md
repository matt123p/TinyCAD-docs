---
layout: default
---
# Symbole
{: #symbols}

Symbole sind die grundlegenden Bausteine eines TinyCAD-Schaltplans. Sie fügen Symbole aus Bibliotheken ein, legen ihre Attribute fest und verbinden anschließend ihre Pins, um einen elektrisch gültigen Entwurf zu erstellen.

Sie können eigene Symbole verwenden oder Symbole direkt von der TinyCAD.net-Website herunterladen.

Siehe auch:

- [Symbolbibliotheken verwenden](../Using-Symbol-Libraries/)
- [Benutzerdefinierte Symbolbibliotheken](../Custom-symbol-libraries/)

## Symbole suchen und platzieren
{: #find-and-place-symbols}

1. Geben Sie den Namen des gewünschten Symbols in das Suchfeld ein.
2. Wählen Sie Symbole aus, um sie anzuzeigen, und wählen Sie das gewünschte aus.
3. Ziehen Sie das Symbol aus der Vorschau in Ihre Zeichnung.

{% include video-player.html
	src="/v4/images/video/Video 6.mp4"
	width=1280
	height=822
	caption="Videoanleitung zum Suchen und Platzieren eines Symbols."
%}



## Ausrichtung beim Platzieren
{: #orientation-while-placing}

Legen Sie beim Platzieren eines Symbols die Ausrichtung über die Schaltflächen zum Drehen und Spiegeln in der Symbolleiste fest.

<img src="/v4/images/media/image5.png" alt="Rotate and flip controls used to change symbol orientation" />


## Symboltext bearbeiten und verschieben
{: #editing-and-moving-symbol-text}

Nach dem Platzieren können Sie das gesamte Symbol durch Ziehen verschieben.

Sie können auch Textfelder des Symbols (zum Beispiel Wert/Name/Referenz) unabhängig voneinander verschieben, indem Sie das Symbol auswählen und jedes Feld an eine passendere Stelle ziehen.

Sie können den Text bearbeiten, indem Sie darauf klicken.

{% include video-player.html
	src="/v4/images/video/Video 1.mp4"
	width=284
	height=248
	caption="Videoanleitung zum Bearbeiten und Neupositionieren von Symboltext."
%}

## Symbolattribute in einem Schaltplan
{: #symbol-attributes-in-a-schematic}

Eingefügte Symbole enthalten üblicherweise diese wichtigen Attribute:

- **Name/Wert**: Bezeichnung des Bauteils (zum Beispiel `10k`, `100nF`, Gerätetyp)
- **Referenz**: eindeutige Kennzeichnung im Blatt/Projekt (zum Beispiel `R1`, `U3`)
- **Gehäuse** (optional): Kennung des Footprints/Gehäuses für nachgelagerte Exportabläufe

Referenzfelder müssen eindeutig bleiben. Bei Bedarf können TinyCAD-Werkzeuge Referenzen automatisch generieren oder neu annotieren.

Sie können nach Bedarf zusätzliche Attribute für Projektmetadaten, den PCB-Ablauf oder Simulationsmetadaten hinzufügen.

## Verwandte Seiten
{: #related-pages}

- [Drähte](../Wires/)
- [Beschriftungen](../Labels/)
- [Keine Verbindungen](../No-Connects/)
- [Ein Symbol bearbeiten](../Editing-a-Symbol/)

- Zurück zu [Zeichnen](../User-guide/)
- Zurück zu [Inhaltsverzeichnis v4](../CONTENTS/)
