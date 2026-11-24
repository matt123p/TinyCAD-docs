---
layout: default
---
# Symbole aus KiCAD importieren
{: #importing-symbols-from-kicad}

Der Import von Symbolen aus einer KiCAD-Symbolbibliothek ist eine neue Funktion in TinyCAD v4.

## Hintergrund zu KiCad
{: #kicad-background}

[KiCad](https://www.kicad.org/) ist eine beliebte Open-Source-Suite für Elektronikentwicklung. Der Symboleditor speichert Schaltplansymbole in Symbolbibliotheksdateien. In aktuellen KiCad-Versionen verwenden diese Symbolbibliotheken normalerweise das moderne, auf S-Expressions basierende Format `.kicad_sym`.

## Was TinyCAD importieren kann
{: #what-tinycad-can-import}

TinyCAD importiert derzeit Symbole aus:

- `.kicad_sym`-Dateien

Die Datei muss eine KiCad-Symbolbibliotheksdatei mit einem `kicad_symbol_lib`-Root sein. In der Praxis bedeutet das:

- Unterstützt: moderne KiCad-Symbolbibliotheken, gespeichert als `.kicad_sym`
- Nicht unterstützt: ältere KiCad-`.lib`-Symbolbibliotheken
- Nicht unterstützt: KiCad-Footprints, PCB-Dateien, Projekte, Schaltpläne oder andere Dateien, die keine Symbole enthalten

## Wo sich der Befehl in der Benutzeroberfläche befindet
{: #where-the-command-is-in-the-ui}

Der Importbefehl heißt **Import KiCad Symbols**.

Je nachdem, wie Sie TinyCAD ausführen, finden Sie ihn an einem dieser Orte:

- Desktop-App (Electron): **Datei > Importieren > KiCad-Symbole...**
- Browser-/Dateisystemmodus: Menü **Datei** in der Symbolleiste, dann **KiCad-Symbole importieren**

Wählen Sie eine `.kicad_sym`-Bibliothek und alle zugehörigen SPICE-Dateien aus, die dafür benötigt werden. TinyCAD liest die Bibliothek ein und zeigt den Importdialog für die aktuelle Zeichnung oder den Bibliothekseditor an.

## Zwei Importmodi
{: #two-import-modes}

Der Import verhält sich unterschiedlich, je nachdem, ob Sie einen Entwurf oder eine Bibliothek bearbeiten.

### In einen Entwurf importieren
{: #import-into-a-design}

Verwenden Sie diese Option, wenn Sie ein KiCad-Symbol im aktuellen Schaltplan platzieren möchten, ohne es zuvor in einer TinyCAD-Bibliothek zu speichern.

Was geschieht:

- TinyCAD öffnet den Dialog **Symbol importieren**.
- Sie können eine Datei aus der ausgewählten `.kicad_sym`-Datei auswählen.
- Wenn Sie auf **Einfügen** klicken, fügt TinyCAD dieses Symbol direkt in die aktuelle Zeichnung ein.
- Das Symbol wird an der aktuellen Mausposition eingefügt.
- Dadurch wird das Symbol **nicht** zu einer Ihrer externen `.tclib`-Bibliotheken hinzugefügt.

Dies ist der schnellste Weg, wenn Sie ein Symbol nur für den aktuellen Entwurf benötigen.

### In eine Bibliothek importieren
{: #import-into-a-library}

Verwenden Sie diese Option, wenn Sie importierte KiCad-Symbole als wiederverwendbare TinyCAD-Bibliothekssymbole behalten möchten.

Was geschieht:

- Sie müssen zunächst eine TinyCAD-Bibliothek zur Bearbeitung öffnen.
- TinyCAD öffnet den Dialog **KiCad-Symbole importieren**.
- Alle importierten Symbole sind bereits ausgewählt.
- Sie können Symbole an- oder abwählen oder **Alle auswählen** verwenden.
- Wenn Sie auf **Ausgewählte importieren** klicken, werden diese Symbole mit der aktuellen TinyCAD-Bibliothek zusammengeführt.
- TinyCAD öffnet automatisch das zuletzt importierte Symbol im Bibliothekseditor.
- Anschließend speichern Sie die Bibliothek wie gewohnt.

Dies ist der richtige Weg, wenn Sie importierte Symbole in mehreren Zeichnungen wiederverwenden möchten.

## Schritt für Schritt: in einen Entwurf importieren
{: #step-by-step-import-into-a-design}

1. Öffnen Sie den Schaltplanentwurf, an dem Sie arbeiten möchten.
2. Führen Sie im Menü „Datei“ den Befehl **KiCad-Symbole importieren** aus.
3. Wählen Sie eine KiCad-`.kicad_sym`-Datei aus.
4. Klicken Sie im Dialog **Symbol importieren** auf das gewünschte Symbol.
5. Prüfen Sie die kurze Metadatenzeile, die für jedes Symbol angezeigt wird:
   - das Referenzpräfix, z. B. `U?`
   - die Anzahl der Teile bei Symbolen mit mehreren Einheiten
6. Klicken Sie auf **Einfügen**.
7. Das Symbol wird an der aktuellen Mausposition in die aktuelle Zeichnung eingefügt.
8. Passen Sie bei Bedarf nach dem Import Text, Pin-Sichtbarkeit oder Grafiken an.

## Schritt für Schritt: in eine Bibliothek importieren
{: #step-by-step-import-into-a-library}

1. Öffnen oder erstellen Sie eine TinyCAD-Bibliothek zur Bearbeitung.
2. Wenn Sie die Desktop-App verwenden, ist ein üblicher Weg:
   - öffnen Sie den Bereich **Bibliotheken**
   - verwenden Sie **Hinzufügen**, um eine vorhandene Bibliothek zu laden, oder **Neu**, um eine zu erstellen
   - öffnen Sie diese Bibliothek im Bearbeitungsmodus
3. Führen Sie **KiCad-Symbole importieren** aus.
4. Wählen Sie eine KiCad-`.kicad_sym`-Datei aus.
5. Lassen Sie im Dialog **KiCad-Symbole importieren** alle Symbole ausgewählt oder heben Sie die Auswahl der unerwünschten Symbole auf.
6. Klicken Sie auf **Ausgewählte importieren**.
7. Prüfen Sie die importierten Symbole im Bibliothekseditor.
8. Speichern Sie die Bibliothek.

## SPICE-Modelle mit Symbolen importieren
{: #import-spice-models-with-symbols}

TinyCAD liest unterstützte SPICE-Modelle ein, die in einer modernen KiCad-Symbolbibliothek eingebettet sind. Wählen Sie bei separat gespeicherten Modellen die Modelldateien zusammen mit der `.kicad_sym`-Datei im Dateiauswahldialog aus. Fügen Sie auch alle Modelldateien hinzu, auf die `.include` verweist.

Wenn eine SPICE-Definition nicht importiert werden konnte, zeigt der Dialog **SPICE-Modell übersprungen** mit dem Grund an. Sie können das Symbolbild und die Eigenschaften trotzdem importieren. Öffnen Sie die Einstellungen **SPICE → Benutzerdefiniert** des importierten Symbols, um die Instanzvorlage und den Modelltext unter **Prolog** zu prüfen. TinyCAD verwendet die KiCad-Pinzuweisungen und Parameterüberschreibungen, um die Definition zu erstellen.

Zu den unterstützten Eingaben gehören Symbole mit nur einer Einheit und gewöhnlichen Modellkarten oder Subschaltungen, ideale Widerstände, Kondensatoren und Induktivitäten sowie Gleichspannungs- oder Gleichstromquellen. Öffnen und speichern Sie eine ältere KiCad-SPICE-Definition zunächst in einer aktuellen KiCad-Version. Wenn Sie ein anderes Modell benötigen, verwenden Sie die [mitgelieferte Modellauswahl](../Bundled-SPICE-Models/).

## Unterstützte Symbolfunktionen
{: #supported-symbol-features}

TinyCAD importiert derzeit die folgenden KiCad-Symbolfunktionen:

- Symbolnamen, Referenzpräfixe und Beschreibungen
- Zusätzliche Symboleigenschaften als TinyCAD-Attribute
- Sichtbarer oder ausgeblendeter Zustand für übliche Felder wie Wert und Referenz
- Pins einschließlich Pin-Namen, Pin-Nummern, Pin-Länge, elektrischem Typ und mehreren Pinformen
- Symbole mit mehreren Einheiten
- Geerbte Symbole, die den KiCad-Mechanismus `extends` verwenden
- De-Morgan-Varianten, die als separates Symbol importiert werden, dessen Name um ` (De Morgan)` ergänzt wird
- Grundlegende Grafiken in Symbolkörpern:
  - Rechtecke
  - Kreise
  - Polylinien
  - Bögen
  - Bézierkurven
  - Text
- Grundlegende Linienstile und Füllzustände, sofern TinyCAD über eine Entsprechung verfügt

## Was nicht funktioniert oder möglicherweise nicht exakt übereinstimmt
{: #what-will-not-work-or-may-not-match-exactly}

Der Importer ist nützlich, aber keine vollständige Konvertierungsfunktion von KiCad nach TinyCAD. Dies sind die wichtigsten Einschränkungen der aktuellen Implementierung.

### Einschränkungen des Dateiformats
{: #file-format-limits}

- Es werden nur `.kicad_sym`-Dateien akzeptiert.
- Wenn die Datei leer oder fehlerhaft ist oder keine KiCad-Symbolbibliothek darstellt, schlägt der Import fehl.

### Einschränkungen bei Grafiken und Layout
{: #graphics-and-layout-limits}

- Es werden nur die oben aufgeführten grafischen Grundelemente importiert.
- Inhalte eines KiCad-Symbols, die nicht zu diesen unterstützten Grundelementen gehören, werden ignoriert.
- Importierte Bibliothekssymbole werden so neu positioniert, dass sie mit Rand auf der TinyCAD-Seite liegen und möglichst am TinyCAD-Raster ausgerichtet sind.
- Manche Geometrien können etwas anders aussehen, da KiCad und TinyCAD unterschiedliche interne Zeichenmodelle verwenden.
- KiCad-Bögen werden durch TinyCAD-Kurvenpunkte angenähert.

### Einschränkungen bei Text und Stil
{: #text-and-styling-limits}

- Die Schriftfamilie bleibt nicht erhalten; importierter Text verwendet die TinyCAD-Schrifteinstellungen.
- Feine Textlayoutdetails wie die Ausrichtung bleiben nicht vollständig erhalten.
- Textdrehungen werden auf das einfachere Orientierungsmodell von TinyCAD reduziert, anstatt jeden beliebigen Winkel beizubehalten.
- Die Pin-Textfarbe bleibt nicht erhalten.

### Unterschiede im Symbolverhalten
{: #symbol-behavior-differences}

- Beim Import in einen Entwurf wird das Symbol nur in die aktuelle Zeichnung eingefügt. Es wird kein wiederverwendbarer Eintrag in einer `.tclib`-Bibliothek erstellt oder aktualisiert.
- Beim Import in eine Bibliothek werden wiederverwendbare TinyCAD-Bibliothekseinträge erstellt, aber Sie müssen die Bibliothek anschließend noch speichern.
- Wenn importierte Symbolnamen mit vorhandenen Namen in der Zielbibliothek kollidieren, benennt TinyCAD die neuen Einträge automatisch um, indem eine numerische Endung hinzugefügt wird.
- Wenn ein KiCad-Symbol eine De-Morgan-Variante enthält, importiert TinyCAD diese als separaten Symboleintrag statt als umschaltbare Stilvariante.

## Praktische Hinweise
{: #practical-advice}

- Wenn Sie ein Symbol nur einmal benötigen, importieren Sie es in den Entwurf.
- Wenn Sie das Symbol voraussichtlich wiederverwenden, importieren Sie es in eine Bibliothek.
- Beginnen Sie zunächst mit einer kleinen `.kicad_sym`-Bibliothek, damit Sie prüfen können, wie Liniengrafiken, Text und Pinplatzierung in TinyCAD aussehen.
- Prüfen Sie nach dem Import Symbole mit mehreren Einheiten und De-Morgan-Varianten sorgfältig.
- Wenn ein Symbol falsch aussieht, öffnen Sie es im TinyCAD-Bibliothekseditor und korrigieren Sie Textplatzierung, Liniengrafiken oder Attribute manuell.

## Zusammenfassung
{: #summary}

Der KiCad-Import von TinyCAD konzentriert sich darauf, moderne KiCad-Symbolbibliotheken schnell in TinyCAD zu übernehmen, insbesondere Standardschaltplansymbole aus Pins, Text und einfachen grafischen Grundelementen. Er funktioniert am besten mit `.kicad_sym`-Dateien und ist besonders praktisch, wenn Sie entweder:

- ein Symbol direkt in die aktuelle Zeichnung einfügen möchten oder
- ausgewählte KiCad-Symbole zur Wiederverwendung in eine TinyCAD-Bibliothek übernehmen möchten

Bei allem, was darüber hinausgeht, sollten Sie nach dem Import eine kurze manuelle Nachbearbeitung einplanen.

## Verwandte Seiten
{: #related-pages}

- [Ein Symbol bearbeiten](../Editing-a-Symbol/)
- [Symbolbibliotheken verwenden](../Using-Symbol-Libraries/)

- Zurück zu [Symbole und Bibliotheken](../Symbols-and-Libraries/)
- Zurück zu [Inhalt von v4](../CONTENTS/)
