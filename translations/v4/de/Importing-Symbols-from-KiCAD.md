---
layout: default
---
# Symbole aus KiCAD importieren
{: #importing-symbols-from-kicad}

Der Import von Symbolen aus einer KiCAD-Symbolbibliothek ist eine neue Funktion in TinyCAD v4.

## Hintergrund zu KiCad
{: #kicad-background}

[KiCad](https://www.kicad.org/) ist eine beliebte Open-Source-Suite für Elektronikdesign. Der Symboleditor speichert Schaltplansymbole in Symbolbibliotheksdateien. In aktuellen KiCad-Versionen verwenden diese Symbolbibliotheken normalerweise das moderne, auf S-Ausdrücken basierende Format `.kicad_sym`.

## Was TinyCAD importieren kann
{: #what-tinycad-can-import}

TinyCAD importiert derzeit Symbole aus:

- `.kicad_sym`-Dateien

Die Datei muss eine KiCad-Symbolbibliotheksdatei mit einem `kicad_symbol_lib`-Wurzelelement sein. In der Praxis bedeutet das:

- Unterstützt: moderne KiCad-Symbolbibliotheken, gespeichert als `.kicad_sym`
- Nicht unterstützt: ältere KiCad-Symbolbibliotheken im Format `.lib`
- Nicht unterstützt: KiCad-Footprints, PCB-Dateien, Projekte, Schaltpläne oder andere Dateien, die keine Symbole enthalten

## Wo sich der Befehl in der Benutzeroberfläche befindet
{: #where-the-command-is-in-the-ui}

Der Importbefehl heißt **KiCad-Symbole importieren (Import KiCad Symbols)**.

Je nachdem, wie Sie TinyCAD verwenden, finden Sie ihn an einer der folgenden Stellen:

- Desktop-App (Electron): **Datei > Importieren > KiCad-Symbole... (File > Import > KiCad Symbols...)**
- Browser-/Dateisystemmodus: im Symbolleistenmenü **Datei (File)** und dann **KiCad-Symbole importieren (Import KiCad Symbols)**

Nachdem Sie eine `.kicad_sym`-Datei ausgewählt haben, liest TinyCAD alle Symbole in dieser Bibliothek ein und zeigt dann abhängig davon, was Sie gerade bearbeiten, einen von zwei Importdialogen an.

## Zwei Importmodi
{: #two-import-modes}

Der Import funktioniert unterschiedlich, je nachdem, ob Sie gerade einen Entwurf oder eine Bibliothek bearbeiten.

### In einen Entwurf importieren
{: #import-into-a-design}

Verwenden Sie diese Option, wenn Sie ein KiCad-Symbol im aktuellen Schaltplan platzieren möchten, ohne es zuvor in einer TinyCAD-Bibliothek zu speichern.

Ablauf:

- TinyCAD öffnet den Dialog **Symbol importieren (Import Symbol)**.
- Sie können ein Symbol aus der ausgewählten `.kicad_sym`-Datei auswählen.
- Wenn Sie auf **Einfügen (Insert)** klicken, fügt TinyCAD das Symbol direkt in die aktuelle Zeichnung ein.
- Das Symbol wird an der aktuellen Mausposition eingefügt.
- Dadurch wird das Symbol **nicht** zu einer Ihrer externen `.tclib`-Bibliotheken hinzugefügt.

Dies ist der schnellste Weg, wenn Sie ein Symbol nur für den aktuellen Entwurf benötigen.

### In eine Bibliothek importieren
{: #import-into-a-library}

Verwenden Sie diese Option, wenn Sie importierte KiCad-Symbole als wiederverwendbare TinyCAD-Bibliothekssymbole behalten möchten.

Ablauf:

- Sie müssen zuerst eine TinyCAD-Bibliothek zum Bearbeiten öffnen.
- TinyCAD öffnet den Dialog **KiCad-Symbole importieren (Import KiCad Symbols)**.
- Alle importierten Symbole sind zunächst ausgewählt.
- Sie können Symbole an- oder abwählen oder **Alle auswählen (Select all)** verwenden.
- Wenn Sie auf **Ausgewählte importieren (Import selected)** klicken, werden diese Symbole mit der aktuellen TinyCAD-Bibliothek zusammengeführt.
- TinyCAD öffnet automatisch das zuletzt importierte Symbol im Bibliothekeditor.
- Anschließend speichern Sie die Bibliothek wie gewohnt.

Dies ist der richtige Weg, wenn Sie importierte Symbole in mehreren Zeichnungen wiederverwenden möchten.

## Schritt für Schritt: in einen Entwurf importieren
{: #step-by-step-import-into-a-design}

1. Öffnen Sie den Schaltplanentwurf, an dem Sie arbeiten möchten.
2. Wählen Sie im Menü „Datei“ den Befehl **KiCad-Symbole importieren (Import KiCad Symbols)**.
3. Wählen Sie eine KiCad-`.kicad_sym`-Datei aus.
4. Klicken Sie im Dialog **Symbol importieren (Import Symbol)** auf das gewünschte Symbol.
5. Prüfen Sie die kleine Metadatenzeile, die für jedes Symbol angezeigt wird:
   - das Referenzpräfix, z. B. `U?`
   - die Anzahl der Einheiten bei Symbolen mit mehreren Einheiten
6. Klicken Sie auf **Einfügen (Insert)**.
7. Das Symbol wird an der aktuellen Mausposition in die aktuelle Zeichnung eingefügt.
8. Passen Sie nach dem Import bei Bedarf Text, Sichtbarkeit der Pins oder Grafiken an.

## Schritt für Schritt: in eine Bibliothek importieren
{: #step-by-step-import-into-a-library}

1. Öffnen oder erstellen Sie eine TinyCAD-Bibliothek zum Bearbeiten.
2. Wenn Sie die Desktop-App verwenden, ist ein üblicher Weg:
   - Öffnen Sie den Bereich **Bibliotheken (Libraries)**.
   - Verwenden Sie **Hinzufügen (Add)**, um eine vorhandene Bibliothek zu laden, oder **Neu (New)**, um eine zu erstellen.
   - Öffnen Sie diese Bibliothek im Bearbeitungsmodus.
3. Wählen Sie **KiCad-Symbole importieren (Import KiCad Symbols)**.
4. Wählen Sie eine KiCad-`.kicad_sym`-Datei aus.
5. Lassen Sie im Dialog **KiCad-Symbole importieren (Import KiCad Symbols)** alle Symbole ausgewählt oder wählen Sie die nicht gewünschten ab.
6. Klicken Sie auf **Ausgewählte importieren (Import selected)**.
7. Prüfen Sie die importierten Symbole im Bibliothekeditor.
8. Speichern Sie die Bibliothek.

## Unterstützte Symbolfunktionen
{: #supported-symbol-features}

TinyCAD importiert derzeit die folgenden KiCad-Symbolfunktionen:

- Symbolnamen, Referenzpräfixe und Beschreibungen
- Zusätzliche Symboleigenschaften als TinyCAD-Attribute
- Sichtbarer oder ausgeblendeter Zustand für gängige Felder wie „Wert“ und „Referenz“
- Pins einschließlich Pin-Namen, Pin-Nummern, Pin-Länge, elektrischem Typ und mehreren Pinformen
- Symbole mit mehreren Einheiten
- Abgeleitete Symbole, die KiCads Mechanismus `extends` verwenden
- De-Morgan-Varianten, die als separates Symbol mit angehängtem ` (De Morgan)` im Namen importiert werden
- Einfache Grafiken in Symbolkörpern:
  - Rechtecke
  - Kreise
  - Polylinien
  - Bögen
  - Bézierkurven
  - Text
- Einfache Linienstile und Füllzustände, sofern TinyCAD eine entsprechende Funktion bietet

## Was nicht funktioniert oder möglicherweise nicht genau übereinstimmt
{: #what-will-not-work-or-may-not-match-exactly}

Der Importer ist nützlich, aber keine vollständige Konvertierungs-Engine von KiCad zu TinyCAD. Dies sind die wichtigsten Einschränkungen der aktuellen Implementierung.

### Einschränkungen beim Dateiformat
{: #file-format-limits}

- Es werden nur `.kicad_sym`-Dateien akzeptiert.
- Wenn die Datei leer oder fehlerhaft ist oder keine KiCad-Symbolbibliothek darstellt, schlägt der Import fehl.

### Einschränkungen bei Grafiken und Layout
{: #graphics-and-layout-limits}

- Importiert werden nur die oben aufgeführten grafischen Grundelemente.
- Alle KiCad-Symbolinhalte, die nicht zu diesen unterstützten Grundelementen gehören, werden ignoriert.
- Importierte Bibliothekssymbole werden so neu positioniert, dass sie mit einem Rand auf der TinyCAD-Seite liegen und möglichst am TinyCAD-Raster ausgerichtet sind.
- Einige Geometrien können geringfügig anders aussehen, da KiCad und TinyCAD unterschiedliche interne Zeichenmodelle verwenden.
- KiCad-Bögen werden durch TinyCAD-Kurvenpunkte angenähert.

### Einschränkungen bei Text und Formatierung
{: #text-and-styling-limits}

- Die Schriftart wird nicht beibehalten; importierter Text verwendet die TinyCAD-Schrifteinstellungen.
- Feine Textlayoutdetails wie die Ausrichtung werden nicht vollständig übernommen.
- Die Textdrehung wird auf das einfachere Ausrichtungsmodell von TinyCAD reduziert, statt beliebige Winkel beizubehalten.
- Die Pin-Textfarbe wird nicht beibehalten.

### Unterschiede im Symbolverhalten
{: #symbol-behavior-differences}

- Beim Import in einen Entwurf wird das Symbol nur in die aktuelle Zeichnung eingefügt. Es wird kein wiederverwendbarer Eintrag in einer `.tclib`-Bibliothek erstellt oder aktualisiert.
- Beim Import in eine Bibliothek werden wiederverwendbare TinyCAD-Bibliothekseinträge erstellt, aber Sie müssen die Bibliothek anschließend noch speichern.
- Wenn importierte Symbolnamen mit vorhandenen Namen in der Zielbibliothek kollidieren, benennt TinyCAD die neuen Einträge automatisch um, indem eine numerische Endung hinzugefügt wird.
- Wenn ein KiCad-Symbol eine De-Morgan-Variante enthält, importiert TinyCAD diese als separaten Symboleintrag statt als dynamisch umschaltbare Stilvariante.

## Praktische Hinweise
{: #practical-advice}

- Wenn Sie ein Symbol nur einmal benötigen, importieren Sie es in den Entwurf.
- Wenn Sie das Symbol voraussichtlich wiederverwenden, importieren Sie es in eine Bibliothek.
- Beginnen Sie zunächst mit einer kleinen `.kicad_sym`-Bibliothek, damit Sie prüfen können, wie Liniengrafiken, Text und Pinplatzierung in TinyCAD aussehen.
- Prüfen Sie nach dem Import Symbole mit mehreren Einheiten und De-Morgan-Varianten sorgfältig.
- Wenn ein Symbol falsch aussieht, öffnen Sie es im TinyCAD-Bibliothekeditor und korrigieren Sie Textplatzierung, Liniengrafiken oder Attribute manuell.

## Zusammenfassung
{: #summary}

Der KiCad-Import von TinyCAD ist darauf ausgelegt, moderne KiCad-Symbolbibliotheken schnell in TinyCAD zu übernehmen, insbesondere Standardschaltplansymbole, die aus Pins, Text und einfachen grafischen Grundelementen bestehen. Er funktioniert am besten mit `.kicad_sym`-Dateien und ist besonders praktisch, wenn Sie entweder:

- ein Symbol direkt in die aktuelle Zeichnung einfügen möchten oder
- ausgewählte KiCad-Symbole zur Wiederverwendung in eine TinyCAD-Bibliothek übernehmen möchten

Rechnen Sie bei allem, was darüber hinausgeht, nach dem Import mit einer kurzen manuellen Nachbearbeitung.

## Verwandte Seiten
{: #related-pages}

- [Ein Symbol bearbeiten](../Editing-a-Symbol/)
- [Symbolbibliotheken verwenden](../Using-Symbol-Libraries/)

- Zurück zu [Symbole und Bibliotheken](../Symbols-and-Libraries/)
- Zurück zu [Inhalt von v4](../CONTENTS/)
