---
layout: default
---
# TinyCAD-Änderungsprotokoll
{: #tinycad-changelog}


## v4.0.11
{: #v4011}
{: #v4011}

Diese Version bietet formatierte Markdown-Notizen, SVG-Vektorausgabe und Steuerelemente für die Leitungsführung.

- [Markdown-Textfelder](../Text/#markdown-text-boxes): formatierte Notizen mit Listen, Aufgabenlisten und Codeblöcken; derselbe Vektor-Renderer für die Zeichnung, den SVG-Export und PDF.
- Die Live-Quelltextformatierung lässt bearbeitbare Markierungen sichtbar und folgt der gewählten Grundschriftart; Cursorpositionierung, Auswahl und Zeilenumbruch stimmen damit überein.
- [Leitungsführungsmodi](../Wires/#wire-routing-modes): eine kompakte Auswahl für 90°, 45° und Freihandführung, die eine aktive Vorschau beibehält.
- Die Lupenschaltfläche wird nur nach einer Berührungseingabe auf der Zeichenfläche angezeigt.

## v4.0.10 — 6. November 2026
{: #v4010--6-november-2026}
{: #v4010}

- Die Editor-Symbolleiste bleibt sichtbar, wenn Bibliotheks- oder Schaltplanbereiche mehr vertikalen Platz benötigen.

## v4.0.9 — 4. November 2026
{: #v409--4-november-2026}

### Hinzugefügt
{: #added}

- [Touch-Steuerung](../Touch-controls/), einschließlich direkter Bearbeitung, Verschieben mit zwei Fingern
  und Pinch-Zoom sowie einer Lupenfunktion mit den Steuerelementen Klicken, Ziehen/Ablegen, Menü und Schließen
  für präzise Platzierung.
- [Größenveränderbarer Bibliotheksbereich und Symbolsortierung](../Using-Symbol-Libraries/),
  einschließlich alphabetischer Sortierung der Suchergebnisse.
- [Vorübergehendes Ausblenden ausgewählter Objekte](../User-guide/#temporarily-hiding-objects)
  und ein Befehl zum Wiederherstellen aller ausgeblendeten Objekte auf dem aktuellen Blatt.
- Polnische Benutzeroberflächenübersetzung und übersetzter Text im Dialogfeld „Symbol ersetzen“.

### Behoben
{: #fixed}

- [Rasteranzeige und Einrasten](../Snap-to-Grid/) funktionieren unabhängig voneinander, und
  Tastaturbewegungen berücksichtigen das deaktivierte Einrasten.
- Bitmapbilder werden in platzierten Bibliothekssymbolen dargestellt.
- [Escape bricht Zeichen- und Platzierungsvorgänge ab](../Shortcuts/), auch wenn
  Steuerelemente der Symbolleiste den Fokus haben.
- Beim Abbrechen der Desktop-Abfrage zu ungespeicherten Änderungen wird der ausstehende Beenden-Vorgang aufgehoben.
- Der Pinch-Zoom auf der Zeichenfläche wird nicht mehr durch den Browser-Seitenzoom verstärkt.
- Verbesserte Positionierung der Touch-Lupe, Zeigerrückmeldung, Gestensteuerung und Ziehen.
- Verbessertes Verhalten des Info-Dialogs auf Desktop und macOS.

### Paketierung und Wartung
{: #packaging-and-maintenance}

- Abhängigkeiten aktualisiert, um Sicherheitslücken zu beheben.
- Linux-ARMv7-Pakete entfernt, da die Electron-Laufzeitumgebung Linux x64
  und ARM64 unterstützt. Snap-Pakete sind für x64 vorgesehen; Debian-Pakete für x64 und ARM64.

[Versionsdownloads](https://github.com/matt123p/TinyCADv4/releases/tag/v4.0.9)
· [Quellcodeänderungen](https://github.com/matt123p/TinyCADv4/compare/v4.0.8...v4.0.9)

## v4.0.8 — 3. Mai 2026
{: #v408--3-may-2026}

- Drehung des Versorgungssymbols beim Speichern und erneuten Öffnen einer Zeichnung korrigiert.
- Netztypen von Leitungen bleiben beim Speichern und Laden erhalten, sodass die Leitungsfarben konsistent bleiben.

[Versionsdownloads](https://github.com/matt123p/TinyCADv4/releases/tag/v4.0.8)
· [Quellcodeänderungen](https://github.com/matt123p/TinyCADv4/compare/v4.0.7...v4.0.8)

## v4.0.7 — 13. April 2026
{: #v407--13-april-2026}

- Drucken in der Desktop-Anwendung korrigiert.
- Verhalten des Pinch-Zooms verbessert, um unkontrolliertes Zoomen zu verhindern.
- Serverseitige Darstellung von Bibliothekssymbolen hinzugefügt.
- Automatisches Tagging von Produktions-Builds und Erstellen von GitHub-Releases.

[Versionsdownloads](https://github.com/matt123p/TinyCADv4/releases/tag/v4.0.7)
· [Quellcodeänderungen](https://github.com/matt123p/TinyCADv4/compare/4.0.6...v4.0.7)

## v4.0.6 — 29. März 2026
{: #v406--29-march-2026}

Diese Version umfasst die Entwicklungsänderungen unter Version 4.0.5; es gibt
kein separates Tag 4.0.5 und kein veröffentlichtes GitHub-Release.

### Hinzugefügt
{: #added-1}

- Automatische Leitungsführung.
- Symbol ersetzen zum Ändern einer vorhandenen Komponente in ein anderes Bibliothekssymbol.
- Automatisches Scrollen beim Ziehen nahe dem Rand der Zeichnung.
- Doppelklick wählt eine vollständige Leitung aus; Dreifachklick wählt über
  Verbindungsstellen und T-Stücke hinaus aus.
- Option zum Deaktivieren der Verbindungsanzeige für Beschriftungen.

### Behoben und verbessert
{: #fixed-and-improved}

- Bibliotheksordner werden standardmäßig geöffnet und bei der Suche aufgeklappt.
- Textbearbeitung, Tastenkombinationen für die Zwischenablage, Navigationstasten und Tastaturbeschleuniger verbessert,
  wenn die Zeichnung den Fokus hat.
- Auswahl per Strg-Klick, Ziehen mehrerer ausgewählter Objekte und Drehregler korrigiert.
- Zeichen- und Auswahlrechtecke können in beide Richtungen gezogen werden.
- Beenden unter macOS korrigiert und mehrfaches Laden von Bibliotheken unter macOS reduziert.
- Positionierung von Beschriftungen, Übersetzung der Farbauswahl und Hintergrundverarbeitung der Netzliste korrigiert.
- Namen der Windows-Installationsprogramme und AppX-Builds korrigiert.

[Versionsdownloads](https://github.com/matt123p/TinyCADv4/releases/tag/4.0.6)
· [Quellcodeänderungen](https://github.com/matt123p/TinyCADv4/compare/4.0.4...4.0.6)

## v4.0.4 — Quellcode-Tag, 19. März 2026
{: #v404--source-tag-19-march-2026}

- [Bibliotheksordner](../Library-Folders/) zum Organisieren von Symbolbibliotheken hinzugefügt.
- Niederländische Benutzeroberflächenübersetzung hinzugefügt.
- Build-Artefakte für den Browser und Bereitstellung auf GitHub Pages hinzugefügt.
- Snap-Paketierung korrigiert.

[Quellcodeänderungen](https://github.com/matt123p/TinyCADv4/compare/4.0.3...4.0.4)

## v4.0.3 — Quellcode-Tag, 15. März 2026
{: #v403--source-tag-15-march-2026}

- macOS-Startverhalten angepasst, um ein Startproblem zu beheben.

Das Quellcode-Tag lautet 4.0.3, obwohl die Paketmetadaten weiterhin 4.0.2 angeben.

[Quellcodeänderungen](https://github.com/matt123p/TinyCADv4/compare/4.0.2...4.0.3)

## v4.0.2 — 14. März 2026
{: #v402--14-march-2026}

- Dialog zum Schließen bei ungespeicherten Änderungen unter Linux korrigiert.
- x64-Debian-Pakete zusätzlich zu den vorhandenen ARM-Builds hinzugefügt.
- Build-Werkzeuge und Paketierungskonfiguration aktualisiert.

[Versionsdownloads](https://github.com/matt123p/TinyCADv4/releases/tag/4.0.2)
· [Quellcodeänderungen](https://github.com/matt123p/TinyCADv4/compare/4.0.1...4.0.2)

## v4.0.1 — erstes Quellcode-Tag, 13. März 2026
{: #v401--initial-source-tag-13-march-2026}

Der erste Quellcode-Snapshot enthält bereits die Neufassung von TinyCAD für Browser und
Desktop mit Schaltplanbearbeitung, Symbolbibliotheken, Unterstützung für vorhandene
`.dsn`- und `.tclib`-Dateien sowie Exportabläufen. Frühere Entwicklungsarbeiten sind in diesem Repository nicht
verzeichnet.

[Erster Quellcode-Snapshot](https://github.com/matt123p/TinyCADv4/tree/4.0.1)

- Zurück zu [Inhaltsübersicht v4](../CONTENTS/)
