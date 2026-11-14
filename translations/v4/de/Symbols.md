---
layout: default
---
# Symbole
{: #symbols}

Symbole sind die grundlegenden Bausteine eines TinyCAD-Schaltplans. Sie platzieren Symbole aus Bibliotheken, legen ihre Attribute fest und verbinden anschließend ihre Pins, um einen elektrisch gültigen Entwurf zu erstellen.

Die Bibliotheksauswahl links bietet drei Quellen: **Standard** für mitgelieferte Bibliotheken, **Online** für die Suche auf TinyCAD.net und **My Libraries** für Ihre eigenen Bibliotheksdateien.

## Ein Symbol finden
{: #find-a-symbol}

### Die mitgelieferten Bibliotheken verwenden
{: #use-the-bundled-libraries}

Wählen Sie **Standard** und anschließend unter **Choose a standard library** (Standardbibliothek auswählen) eine Sammlung. Durchsuchen Sie die Bauteile oder geben Sie unter **Search libraries...** (Bibliotheken durchsuchen...) einen Namen ein, um die ausgewählte Sammlung zu filtern. Sie können zwischen Sammlungen wechseln, ohne bereits in Ihrer Zeichnung platzierte Symbole zu entfernen.

Die [mitgelieferten Bibliotheken](../Bundled-Libraries/) enthalten modellierte Schaltungsbauteile sowie reale Geräte für Netzwerk-, Embedded-, Audio-, Labor-, Bewegungssteuerungs- und Solaranlagen-Schaltpläne. Sie werden zusammen mit TinyCAD sowohl im Browser als auch in der Desktop App bereitgestellt; weder ein Konto noch ein separater Download oder Bibliotheksimport ist erforderlich. Im Bibliotheksleitfaden finden Sie Inhalt und Zweck jeder Sammlung.

### Online suchen
{: #search-online}

Falls die mitgelieferten Sammlungen nicht das enthalten, was Sie benötigen, wählen Sie **Online** und geben Sie unter **Search libraries...** (Bibliotheken durchsuchen...) einen Bauteilnamen oder eine Teilenummer ein. TinyCAD durchsucht die Symbolsammlung auf TinyCAD.net und zeigt passende Symbole mit Grafikvorschauen an. Für die Online-Suche ist eine Internetverbindung erforderlich.

Wählen Sie ein Ergebnis aus, um dessen Vorschau und Beschreibung anzusehen, und ziehen Sie anschließend die Grafik in Ihre Zeichnung. Sie müssen vorher keine separate Bibliothek herunterladen. Prüfen Sie, ob Pin-Namen und -Nummern mit dem Bauteil und Gehäuse übereinstimmen, die Sie verwenden möchten.

### Wenn Sie das gewünschte Symbol nicht finden
{: #if-you-cannot-find-the-symbol-you-want}

Verwenden Sie [Benutzerdefinierte Symbolbibliotheken](../Custom-symbol-libraries/), um eine `.tclib`-Bibliothek zu erstellen oder eine vorhandene zu öffnen. Ihre Bibliotheken sind in der Auswahl unter **My Libraries** verfügbar.

Sie können ein neues Symbol zeichnen oder eine Kopie eines geeigneten vorhandenen Symbols anpassen; weitere Informationen zu Grafik, Pins und Eigenschaften finden Sie unter [Ein Symbol bearbeiten](../Editing-a-Symbol/). Sie können auch [Symbole aus KiCad importieren](../Importing-Symbols-from-KiCAD/) und in eine benutzerdefinierte Bibliothek übernehmen. Die mitgelieferten Bibliotheken sind schreibgeschützt. Speichern Sie Ihre eigenen Definitionen daher in einer benutzerdefinierten Bibliothek.

## Das ausgewählte Symbol platzieren
{: #place-the-chosen-symbol}

1. Wählen Sie **Standard**, **Online** oder **My Libraries** und durchsuchen oder durchsuchen Sie anschließend diese Quelle.
2. Wählen Sie ein Ergebnis aus, um die vergrößerte Vorschau und die Beschreibung anzusehen.
3. Ziehen Sie die Grafik des Symbols aus der Liste oder Vorschau in die Zeichnung und positionieren Sie sie anschließend auf dem Raster.
4. Drücken Sie **Escape** oder klicken Sie mit der rechten Maustaste, wenn Sie das Platzieren von Kopien beendet haben.

Das folgende Video zeigt, wie Sie ein Symbol finden und platzieren. Weitere Informationen zum Durchsuchen und Verwalten der Auswahl finden Sie unter [Symbolbibliotheken verwenden](../Using-Symbol-Libraries/).

{% include video-player.html
	src="/v4/images/video/Video 6.mp4"
	width=1280
	height=822
	caption="Videoanleitung zum Suchen und Platzieren eines Symbols."
%}



## Ausrichtung beim Platzieren
{: #orientation-while-placing}

Legen Sie beim Platzieren eines Symbols die Ausrichtung mithilfe der Dreh- und Spiegelungsschaltflächen in der Symbolleiste fest.

<img src="/v4/images/media/image5.png" alt="Rotate and flip controls used to change symbol orientation" />


## Symboltext bearbeiten und verschieben
{: #editing-and-moving-symbol-text}

Nach dem Platzieren können Sie das gesamte Symbol durch Ziehen verschieben.

Sie können auch Textfelder des Symbols (zum Beispiel Wert/Name/Referenz) unabhängig voneinander verschieben, indem Sie das Symbol auswählen und jedes Feld an eine geeignetere Position ziehen.

Sie können den Text bearbeiten, indem Sie darauf klicken.

{% include video-player.html
	src="/v4/images/video/Video 1.mp4"
	width=284
	height=248
	caption="Videoanleitung zum Bearbeiten und Verschieben von Symboltext."
%}

## Symbolattribute in einem Schaltplan
{: #symbol-attributes-in-a-schematic}

Platzierte Symbole enthalten üblicherweise die folgenden wichtigen Attribute:

- **Name/Wert**: Bezeichnung des Bauteils (zum Beispiel `10k`, `100nF`, Gerätetyp)
- **Referenz**: eindeutige Kennzeichnung im Blatt/Projekt (zum Beispiel `R1`, `U3`)
- **Gehäuse** (optional): Kennung des Footprints/Gehäuses, die in nachgelagerten Exportabläufen verwendet wird

Referenzfelder müssen eindeutig bleiben. TinyCAD-Werkzeuge können bei Bedarf Referenzen automatisch erzeugen oder neu annotieren.

Sie können nach Bedarf weitere Attribute für Projektmetadaten, den PCB-Ablauf oder Simulationsmetadaten hinzufügen.

## Verwandte Seiten
{: #related-pages}

- [Drähte](../Wires/)
- [Bezeichnungen](../Labels/)
- [Nicht verbinden](../No-Connects/)
- [Ein Symbol bearbeiten](../Editing-a-Symbol/)

- Zurück zu [Zeichnen](../User-guide/)
- Zurück zum [Inhaltsverzeichnis von v4](../CONTENTS/)
