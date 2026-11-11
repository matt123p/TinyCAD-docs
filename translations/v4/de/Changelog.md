---
layout: default
---
# TinyCAD Änderungsprotokoll
{: #tinycad-v4-changelog}


## v4.0.11
{: #v4011}

Diese Version ergänzt formatierte Markdown-Notizen, vektorbasierte SVG-Ausgabe und Bedienelemente zur Drahtführung.

- [Markdown-Textfelder](../Text-and-Annotations/#markdown-text-boxes): formatierte Notizen mit Listen, Aufgabenlisten und Codeblöcken; derselbe Vektorrenderer für Zeichnung, SVG-Export und PDF.
- Die Live-Formatierung des Quelltexts hält Markierungszeichen bearbeitbar und folgt der gewählten Grundschrift, mit passendem Textcursor, Auswahl und Zeilenumbruch.
- [Drahtführungsmodi](../Wires/#wire-routing-modes): kompaktes Auswahlmenü für 90°-, 45°- und freie Drahtführung unter Beibehaltung einer laufenden Vorschau.
- Die Lupenschaltfläche erscheint erst nach einer Berührung der Zeichenfläche.

## v4.0.10 — 6. November 2026
{: #v4010}

- Die Editor-Werkzeugleiste sichtbar halten, wenn Bibliotheks- oder Schaltplanbereiche mehr vertikalen Platz benötigen.

## v4.0.9 — 4. November 2026
{: #v409--4-november-2026}

### Neu hinzugefügt
{: #added}

- [Touch-Steuerung](../Touch-controls/), einschließlich direkter Bearbeitung, Verschieben mit zwei Fingern
  und Pinch-Zoom sowie einer Vergrößerungslupe mit den Bedienelementen Click, Drag/Drop, Menu und Close
  für präzise Platzierung.
- [Größenveränderbares Bibliotheksfenster und Sortierung der Symbole](../Using-Symbol-Libraries/),
  einschließlich alphabetischer Sortierung der Suchergebnisse.
- [Vorübergehendes Ausblenden ausgewählter Objekte](../User-guide/#temporarily-hiding-objects)
  und ein Befehl zum Wiederherstellen aller ausgeblendeten Objekte auf dem aktuellen Blatt.
- Polnische Übersetzung der Benutzeroberfläche und übersetzter Text im Dialogfeld „Symbol ersetzen“.

### Fehler behoben
{: #fixed}

- [Rasteranzeige und Einrasten](../Snap-to-Grid/) funktionieren unabhängig voneinander; außerdem wird bei deaktiviertem Einrasten
  die Tastaturbewegung berücksichtigt.
- Bitmap-Bilder werden in platzierten Bibliothekssymbolen angezeigt.
- [Escape bricht Zeichen- und Platzierungsvorgänge ab](../Shortcuts/), auch wenn
  die Symbolleisten-Steuerelemente den Fokus haben.
- Beim Abbrechen der Desktop-Abfrage zu nicht gespeicherten Änderungen wird der ausstehende Beenden-Vorgang aufgehoben.
- Pinch-Zoom auf der Zeichenfläche wird nicht mehr mit dem Browser-Seitenzoom verrechnet.
- Verbesserte Positionierung der Touch-Lupe, Zeigerrückmeldung, Gestenverarbeitung und Ziehen.
- Verbessertes Verhalten des Info-Dialogs auf Desktop und macOS.

### Paketierung und Wartung
{: #packaging-and-maintenance}

- Abhängigkeiten aktualisiert, um Sicherheitslücken zu beheben.
- Linux-ARMv7-Pakete entfernt, da die Electron-Laufzeitumgebung Linux x64
  und ARM64 unterstützt. Snap-Pakete sind für x64 vorgesehen; Debian-Pakete für x64 und ARM64.

[Release-Downloads](https://github.com/matt123p/TinyCADv4/releases/tag/v4.0.9)
· [Quellcodeänderungen](https://github.com/matt123p/TinyCADv4/compare/v4.0.8...v4.0.9)

## v4.0.8 — 3. Mai 2026
{: #v408--3-may-2026}

- Drehung des Stromversorgungssymbols beim Speichern und erneuten Öffnen einer Zeichnung behoben.
- Netztypen von Leitungen beim Speichern und Laden beibehalten, damit die Leitungsfarben einheitlich bleiben.

[Release-Downloads](https://github.com/matt123p/TinyCADv4/releases/tag/v4.0.8)
· [Quellcodeänderungen](https://github.com/matt123p/TinyCADv4/compare/v4.0.7...v4.0.8)

## v4.0.7 — 13. April 2026
{: #v407--13-april-2026}

- Drucken in der Desktop-Anwendung behoben.
- Pinch-Zoom verbessert, um unkontrolliertes Zoomen zu verhindern.
- Serverseitiges Rendern von Bibliothekssymbolen hinzugefügt.
- Automatische Kennzeichnung von Produktions-Builds und Erstellung von GitHub-Releases.

[Release-Downloads](https://github.com/matt123p/TinyCADv4/releases/tag/v4.0.7)
· [Quellcodeänderungen](https://github.com/matt123p/TinyCADv4/compare/4.0.6...v4.0.7)

## v4.0.6 — 29. März 2026
{: #v406--29-march-2026}

Diese Version enthält die Entwicklungsänderungen der Version 4.0.5; es gibt
kein separates Tag 4.0.5 und kein veröffentlichtes GitHub-Release.

### Neu hinzugefügt
{: #added-1}

- Automatische Leitungsführung.
- Symbol ersetzen (Replace Symbol) zum Ändern eines vorhandenen Bauteils in ein anderes Bibliothekssymbol.
- Automatisches Scrollen beim Ziehen nahe am Rand der Zeichnung.
- Auswahl einer vollständigen Leitung durch Doppelklick und Auswahl über
  Abzweigungen und T-Stellen hinaus durch Dreifachklick.
- Eine Option zum Deaktivieren der Verbindungsanzeige von Beschriftungen.

### Fehler behoben und Verbesserungen
{: #fixed-and-improved}

- Bibliotheksordner sind standardmäßig geöffnet und werden bei der Suche aufgeklappt.
- Textbearbeitung, Zwischenablage-Tastenkombinationen, Navigationstasten und Tastaturkürzel verbessert,
  wenn die Zeichnung den Fokus hat.
- Auswahl mit Strg-Klick, Ziehen mehrerer ausgewählter Objekte und Drehfelder behoben.
- Zeichen- und Auswahlrechtecke können in beide Richtungen gezogen werden.
- Beenden unter macOS behoben und doppeltes Laden von Bibliotheken unter macOS reduziert.
- Positionierung von Beschriftungen, Übersetzung der Farbauswahl und Hintergrundverarbeitung der Netzliste behoben.
- Namen der Windows-Installer- und AppX-Builds korrigiert.

[Release-Downloads](https://github.com/matt123p/TinyCADv4/releases/tag/4.0.6)
· [Quellcodeänderungen](https://github.com/matt123p/TinyCADv4/compare/4.0.4...4.0.6)

## v4.0.4 — Quellcode-Tag, 19. März 2026
{: #v404--source-tag-19-march-2026}

- [Bibliotheksordner](../Library-Folders/) zum Organisieren von Symbolbibliotheken hinzugefügt.
- Niederländische Übersetzung der Benutzeroberfläche hinzugefügt.
- Browser-Build-Artefakte und Bereitstellung auf GitHub Pages hinzugefügt.
- Snap-Paketierung behoben.

[Quellcodeänderungen](https://github.com/matt123p/TinyCADv4/compare/4.0.3...4.0.4)

## v4.0.3 — Quellcode-Tag, 15. März 2026
{: #v403--source-tag-15-march-2026}

- Verarbeitung des macOS-Starts angepasst, um ein Startproblem zu beheben.

Das Quellcode-Tag lautet 4.0.3, obwohl die Paketmetadaten weiterhin 4.0.2 angeben.

[Quellcodeänderungen](https://github.com/matt123p/TinyCADv4/compare/4.0.2...4.0.3)

## v4.0.2 — 14. März 2026
{: #v402--14-march-2026}

- Dialogfeld zum Schließen bei nicht gespeicherten Änderungen unter Linux behoben.
- x64-Debian-Pakete zusätzlich zu den vorhandenen ARM-Builds hinzugefügt.
- Build-Werkzeuge und Paketierungskonfiguration aktualisiert.

[Release-Downloads](https://github.com/matt123p/TinyCADv4/releases/tag/4.0.2)
· [Quellcodeänderungen](https://github.com/matt123p/TinyCADv4/compare/4.0.1...4.0.2)

## v4.0.1 — erstes Quellcode-Tag, 13. März 2026
{: #v401--initial-source-tag-13-march-2026}

Der erste Quellcode-Snapshot enthält bereits die TinyCAD-Neufassung für Browser und
Desktop, mit Schaltplanbearbeitung, Symbolbibliotheken, Unterstützung für vorhandene
`.dsn` und `.tclib`-Dateien sowie Export-Workflows. Frühere Entwicklungsarbeiten sind in diesem
Repository nicht dokumentiert.

[Erster Quellcode-Snapshot](https://github.com/matt123p/TinyCADv4/tree/4.0.1)

- Zurück zu [Inhaltsverzeichnis v4](../CONTENTS/)
