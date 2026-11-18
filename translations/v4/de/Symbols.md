---
layout: default
---
# Symbole
{: #symbols}

Symbole sind die grundlegenden Bausteine eines TinyCAD-Schaltplans. Sie platzieren Symbole aus Bibliotheken, legen ihre Attribute fest und verbinden anschließend ihre Pins, um einen elektrisch gültigen Entwurf zu erstellen.

Die Bibliotheksauswahl links bietet drei Quellen: **Standard** für mitgelieferte Bibliotheken, **Online** für die Suche auf TinyCAD.net und **Meine Bibliotheken** für Ihre eigenen Bibliotheksdateien.

Der [KI-Assistent](../AI-Assistant/) kann ebenfalls ein Symbol anhand eines Datenblatts finden oder erstellen und es direkt in der Zeichnung platzieren. Öffnen Sie eine benutzerdefinierte Bibliothek zur Bearbeitung, wenn Sie darin wiederverwendbare Bibliothekskomponenten erstellen lassen möchten.

## Ein Symbol finden
{: #find-a-symbol}

### Die mitgelieferten Bibliotheken verwenden
{: #use-the-bundled-libraries}

Wählen Sie **Standard** und anschließend unter **Standardbibliothek auswählen** eine Sammlung aus. Durchsuchen Sie deren Komponenten oder geben Sie unter **Bibliotheken durchsuchen...** einen Namen ein, um die ausgewählte Sammlung zu filtern. Sie können zwischen Sammlungen wechseln, ohne bereits in Ihrer Zeichnung platzierte Symbole zu entfernen.

Die [mitgelieferten Bibliotheken](../Bundled-Libraries/) enthalten sowohl modellierte Schaltungskomponenten als auch physische Geräte für Netzwerk-, Embedded-, Audio-, Labor-, Bewegungssteuerungs- und Solaranlagen-Layouts. Sie werden zusammen mit TinyCAD sowohl im Browser als auch in der Desktop-App bereitgestellt; weder ein Konto noch ein separater Download oder Bibliotheksimport ist erforderlich. Im Bibliotheksleitfaden finden Sie Informationen zu Inhalt und Zweck der einzelnen Sammlungen.

### Online suchen
{: #search-online}

Falls die mitgelieferten Sammlungen nicht das enthalten, was Sie benötigen, wählen Sie **Online** und geben Sie unter **Bibliotheken durchsuchen...** einen Komponentennamen oder eine Teilenummer ein. TinyCAD durchsucht die Symbolsammlung auf TinyCAD.net und zeigt passende Symbole mit Vorschauen der Grafiken an. Für die Online-Suche ist eine Internetverbindung erforderlich.

Wählen Sie ein Ergebnis aus, um dessen Vorschau und Beschreibung anzusehen, und ziehen Sie anschließend die Grafik in Ihre Zeichnung. Sie müssen zuvor keine separate Bibliothek herunterladen. Prüfen Sie, ob Pinnamen und -nummern mit der vorgesehenen Komponente und dem vorgesehenen Gehäuse übereinstimmen.

### Wenn Sie das gewünschte Symbol nicht finden
{: #if-you-cannot-find-the-symbol-you-want}

Verwenden Sie [Benutzerdefinierte Symbolbibliotheken](../Custom-symbol-libraries/), um eine `.tclib`-Bibliothek zu erstellen oder eine vorhandene zu öffnen. Ihre Bibliotheken sind in der Auswahl unter **Meine Bibliotheken** verfügbar.

Sie können ein neues Symbol zeichnen oder eine geeignete vorhandene Vorlage anpassen; siehe [Ein Symbol bearbeiten](../Editing-a-Symbol/), um mehr über Grafik, Pins und Eigenschaften zu erfahren. Sie können auch [Symbole aus KiCad importieren](../Importing-Symbols-from-KiCAD/) und in eine benutzerdefinierte Bibliothek übernehmen. Mitgelieferte Bibliotheken sind schreibgeschützt. Speichern Sie Ihre eigenen Definitionen daher in einer benutzerdefinierten Bibliothek.

## Das ausgewählte Symbol platzieren
{: #place-the-chosen-symbol}

1. Wählen Sie **Standard**, **Online** oder **Meine Bibliotheken** und durchsuchen oder durchsuchen Sie dann diese Quelle.
2. Wählen Sie ein Ergebnis aus, um dessen größere Vorschau und Beschreibung anzusehen.
3. Ziehen Sie die Grafik des Symbols aus der Liste oder Vorschau in die Zeichnung und positionieren Sie sie anschließend auf dem Raster.
4. Drücken Sie **Escape** oder klicken Sie mit der rechten Maustaste, wenn Sie das Platzieren von Kopien beendet haben.

Das folgende Video zeigt, wie Sie ein Symbol finden und platzieren. Weitere Informationen zum Durchsuchen und Verwalten der Auswahl finden Sie unter [Symbolbibliotheken verwenden](../Using-Symbol-Libraries/).

{% include video-player.html
	src="/v4/images/video/Video 6.mp4"
	width=1280
	height=822
	caption="Videoanleitung zum Finden und Platzieren eines Symbols."
%}



## Ausrichtung beim Platzieren
{: #orientation-while-placing}

Legen Sie beim Platzieren eines Symbols die Ausrichtung über die Dreh- und Spiegelungsschaltflächen in der Symbolleiste fest.

<img src="/v4/images/media/image5.png" alt="Rotate and flip controls used to change symbol orientation" />


## Symboltext bearbeiten und verschieben
{: #editing-and-moving-symbol-text}

Nach dem Platzieren können Sie das gesamte Symbol durch Ziehen verschieben.

Sie können auch Textfelder des Symbols (zum Beispiel Wert/Name/Referenz) unabhängig verschieben, indem Sie das Symbol auswählen und jedes Feld an eine geeignetere Position ziehen.

Sie können den Text bearbeiten, indem Sie darauf klicken.

{% include video-player.html
	src="/v4/images/video/Video 1.mp4"
	width=284
	height=248
	caption="Videoanleitung zum Bearbeiten und Neupositionieren von Symboltext."
%}

## Symbolattribute in einem Schaltplan
{: #symbol-attributes-in-a-schematic}

Platzierte Symbole enthalten üblicherweise die folgenden wichtigen Attribute:

- **Name/Wert**: Bezeichnung des Bauteils (zum Beispiel `10k`, `100nF`, Gerätetyp)
- **Referenz**: eindeutige Kennzeichnung im Blatt/Projekt (zum Beispiel `R1`, `U3`)
- **Gehäuse** (optional): Footprint-/Gehäusekennung für nachgelagerte Exportabläufe

Referenzfelder müssen eindeutig bleiben. TinyCAD-Werkzeuge können bei Bedarf Referenzen automatisch erzeugen oder neu annotieren.

Bei Bedarf können Sie zusätzliche Attribute für Projektmetadaten, den PCB-Ablauf oder Simulationsmetadaten hinzufügen.

## Verwandte Seiten
{: #related-pages}

- [Drähte](../Wires/)
- [Beschriftungen](../Labels/)
- [Keine Verbindungen](../No-Connects/)
- [Ein Symbol bearbeiten](../Editing-a-Symbol/)

- Zurück zu [Zeichnen](../User-guide/)
- Zurück zu [Inhalt von v4](../CONTENTS/)
