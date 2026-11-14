---
layout: default
---
# TinyCAD-Änderungsprotokoll
{: #tinycad-changelog}


## Nicht veröffentlicht
{: #unreleased}
{: #unreleased}

### Hinzugefügt
{: #added}

- [Integrierte Simulation](../Simulation/) mit lokalem ngspice im Browser und auf dem Desktop, einschließlich Arbeitspunkt-, Transienten-, AC-, DC-Sweep-, Rausch-, Übertragungsfunktions- und Pol-Nullstellen-Analysen. [Ereignisgesteuertes XSPICE](../XSPICE/) wird auf dem Desktop unterstützt.
- [Quellen, Messsonden und virtuelle Instrumente](../Simulation-Sources-and-Instruments/), darunter Oszilloskope, Multimeter, Funktionsgeneratoren und Labornetzteile.
- [Circuit Explorer](../Simulation-Charts-and-Measurements/) zum Abstimmen, für Sweeps, benannte Messungen, Anforderungen, DC-Überlagerungen, Toleranzstudien, Testfälle und Untersuchungen von Leistung und Belastung.
- [Komprimierte `.dzn`-Zeichnungen](../Simulation/#dzn-simulation-drawings), in denen Schaltung, Modelle, Simulationseinstellungen und optionale Ergebnisse zusammenbleiben. Der Ausführungsverlauf und Ergebnisexporte erleichtern Vergleiche und die gemeinsame Nutzung; mit „Ohne Ergebnisse speichern“ wird eine kleinere Kopie erstellt.
- [Enthaltene Bibliotheken](../Bundled-Libraries/) für Netzwerkpläne, Embedded-Boards und Smart-Home-Module, Audio, Laborgeräte, Motoren/Bewegungssteuerung und Solar-/Batterieplanung sowie modellierte SPICE-, Logik-, Funktions- und Sensorsammlungen. Wählen Sie sie auf der Registerkarte „Standard“ des Bibliotheksauswahldialogs aus.
- [Sieben bearbeitbare Zeichnungsbeispiele](../Bundled-Examples/) zu den Themen ursprünglicher Transistorverstärker, Büronetzwerk, ESP32-Klima-/Anzeigestation, Solar-/Batteriehaus, Podcast-Studio, Laborarbeitsplatz und Motorsteuerungsarbeitsplatz, mit eingebetteten Symbolen und Erläuterungen.
- [SPICE- und XSPICE-Lernprogramme](../Simulation-Tutorials/): elf analoge und sechs digitale Kapitel mit 28 unterschiedlichen ausführbaren Zeichnungen, Modelldefinitionen, Analyseinstellungen und gespeicherten Referenzmessungen.
- [Aufräumen des Layouts](../Layout-Tidy-Up/) für ganze Blätter oder ausgewählte Elemente, mit niedriger/mittlerer/hoher Stärke, Abbrechen, Verbindungsprüfung und einmaligem Rückgängigmachen.

### Geändert
{: #changed}

- „Beispiel öffnen“ und „Erläuterung“ befinden sich in der Titelleiste des Browsers. Auf dem Desktop stehen „Datei → Beispiel öffnen“ und „Ansicht → Erläuterung anzeigen“ zur Verfügung.
- Das Menü „Ansicht“ auf dem Desktop enthält „Diagramme anzeigen“; im Menü „Simulation“ der Symbolleiste bleibt die Umschaltfunktion für Diagramme erhalten.
- „Automatisches Layout“ befindet sich neben „Simulation“ in der Symbolleiste und ist auch im Menü „Werkzeuge“ auf dem Desktop verfügbar.

### Behoben
{: #fixed}

- Ziehbare Komponentengrafik-Vorschauen in den Suchergebnissen der Registerkarten „Standard“, „Meine Bibliotheken“ und „Online“ wiederhergestellt.
- Grafiken von Embedded-Controllern, Sensoren und Anzeigen auf praxisgerechte Größen für das Seitenlayout verkleinert, wobei die Pin-Identitäten und Verdrahtungspositionen erhalten bleiben.
- Verhindert, dass Layoutänderungen unerwünschte Verbindungen an Drahtenden, Knicken oder Sockeln erzeugen; Pin-Ausgänge verbessert und unnötige Umwege entfernt.
- Kleine Anschlussbeschriftungsrahmen entfernt, die Text in Labor- und Bewegungssteuerungssymbolen überlagern, und die betroffenen Beispiele aktualisiert.
- Fehlerberichte und Diagnosen der Simulation, Verstärkerläufe im Browser, herausgelöste Diagramme und unabhängige Erläuterungsfenster für Beispiele verbessert.

### Handbuch
{: #manual}

- Anleitungen zum Auffinden und Verwenden der enthaltenen Bibliotheken und Beispiele hinzugefügt und die nur den Export behandelnde SPICE-Beschreibung durch den integrierten Simulationsablauf ersetzt.
- Referenzen zu Analysen, Modellen, Instrumenten, Diagrammen, Messungen und Fehlerbehebung hinzugefügt, einschließlich Links zur offiziellen ngspice- und XSPICE-Dokumentation.
- Die vollständigen vorhandenen Kurse, herunterladbare Zeichnungen/Netzlisten und zehn Videoanleitungen zu Bibliotheken, Beispielen, Layout-Aufräumen, blattübergreifenden Verbindungen und SPICE aufgenommen.
- [Unterschiede zwischen Funktionen](../Feature-Differences/) erläutert, darunter `.dzn` und die Kompatibilität von Markdown-Textfeldern sowie die XSPICE-Unterstützung im Browser.
- Das Handbuch in allen acht unterstützten Sprachen aktualisiert, einschließlich Navigation, neuer Referenzseiten, Lernprogrammtexten und Videountertiteln.

## v4.0.11
{: #v4011}
{: #v4011}

Diese Version bietet formatierte Markdown-Notizen, vektorbasierte SVG-Ausgabe und Steuerelemente für die Drahtführung.

- [Markdown-Textfelder](../Text/#markdown-text-boxes): formatierte Notizen mit Listen, Aufgabenlisten und Codeblöcken; derselbe Vektorrenderer für die Zeichnung, den SVG-Export und PDF.
- Die Live-Formatierung des Quelltexts hält bearbeitbare Markierungen sichtbar und folgt der ausgewählten Grundschriftart, mit passender Cursorpositionierung, Auswahl und Zeilenumbruch.
- [Drahtführungsmodi](../Wires/#wire-routing-modes): eine kompakte Auswahl für 90°, 45° und freie Führung, wobei die aktive Vorschau erhalten bleibt.
- Die Lupenschaltfläche wird erst nach einer Touch-Eingabe auf der Zeichenfläche angezeigt.

## v4.0.10 — 6. November 2026
{: #v4010--6-november-2026}
{: #v4010}

- Die Symbolleiste des Editors bleibt sichtbar, wenn Bibliotheks- oder Schaltplanfenster mehr Platz in der Höhe benötigen.

## v4.0.9 — 4. November 2026
{: #v409--4-november-2026}

### Hinzugefügt
{: #added-1}

- [Touch-Steuerelemente](../Touch-controls/), einschließlich direkter Bearbeitung, Verschieben mit zwei Fingern
  und Zoom mit Zusammenziehen, sowie einer vergrößernden Lupe mit den
  Steuerelementen „Klicken“, „Ziehen/Ablegen“, „Menü“ und „Schließen“ für präzise Platzierung.
- [Größenveränderliches Bibliotheksfenster und Symbolsortierung](../Using-Symbol-Libraries/),
  einschließlich alphabetischer Sortierung der Suchergebnisse.
- [Vorübergehendes Ausblenden ausgewählter Objekte](../User-guide/#temporarily-hiding-objects)
  und ein Befehl zum Wiederherstellen aller ausgeblendeten Objekte auf dem aktuellen Blatt.
- Polnische Benutzeroberflächenübersetzung und übersetzter Text im Dialogfeld „Symbol ersetzen“.

### Behoben
{: #fixed-1}

- [Rasteranzeige und Einrasten](../Snap-to-Grid/) funktionieren unabhängig voneinander, und
  die Tastaturbewegung berücksichtigt deaktiviertes Einrasten.
- Bitmapbilder werden in platzierten Bibliothekssymbolen dargestellt.
- [Esc bricht Zeichen- und Platzierungsvorgänge ab](../Shortcuts/), auch wenn
  Steuerelemente der Symbolleiste den Fokus haben.
- Beim Abbrechen der Desktop-Abfrage zu nicht gespeicherten Änderungen wird das ausstehende Beenden aufgehoben.
- Der Zoom durch Zusammenziehen auf der Zeichenfläche verstärkt den Zoom der Browserseite nicht mehr.
- Positionierung der Touch-Lupe, Zeigerrückmeldung, Gestenverarbeitung und Ziehen verbessert.
- Verhalten des Info-Dialogs auf dem Desktop und unter macOS verbessert.

### Paketierung und Wartung
{: #packaging-and-maintenance}

- Abhängigkeiten aktualisiert, um Sicherheitslücken zu schließen.
- Linux-ARMv7-Pakete entfernt, da die Electron-Laufzeit Linux x64 und ARM64 unterstützt. Snap-Pakete sind für x64 vorgesehen; Debian-Pakete für x64 und ARM64.

[Release-Downloads](https://github.com/matt123p/TinyCADv4/releases/tag/v4.0.9)
· [Quelltextänderungen](https://github.com/matt123p/TinyCADv4/compare/v4.0.8...v4.0.9)

## v4.0.8 — 3. Mai 2026
{: #v408--3-may-2026}

- Drehung von Stromversorgungssymbolen beim Speichern und erneuten Öffnen einer Zeichnung korrigiert.
- Netztypen von Drähten beim Speichern und Laden beibehalten, damit die Drahtfarben konsistent bleiben.

[Release-Downloads](https://github.com/matt123p/TinyCADv4/releases/tag/v4.0.8)
· [Quelltextänderungen](https://github.com/matt123p/TinyCADv4/compare/v4.0.7...v4.0.8)

## v4.0.7 — 13. April 2026
{: #v407--13-april-2026}

- Drucken in der Desktop-Anwendung korrigiert.
- Verhalten des Zooms durch Zusammenziehen verbessert, um unkontrolliertes Zoomen zu verhindern.
- Serverseitiges Rendern von Bibliothekssymbolen hinzugefügt.
- Automatisierte Kennzeichnung von Produktions-Builds und Erstellung von GitHub-Releases.

[Release-Downloads](https://github.com/matt123p/TinyCADv4/releases/tag/v4.0.7)
· [Quelltextänderungen](https://github.com/matt123p/TinyCADv4/compare/4.0.6...v4.0.7)

## v4.0.6 — 29. März 2026
{: #v406--29-march-2026}

Diese Version enthält die Entwicklungsänderungen, die unter Version 4.0.5 vorgenommen wurden; es gibt keinen separaten Tag 4.0.5 und kein veröffentlichtes GitHub-Release.

### Hinzugefügt
{: #added-2}

- Automatische Drahtführung.
- „Symbol ersetzen“ zum Ändern einer vorhandenen Komponente in ein anderes Bibliothekssymbol.
- Automatisches Scrollen beim Ziehen nahe am Rand der Zeichnung.
- Doppelklicken wählt einen ganzen Draht aus; dreimaliges Klicken wählt über Verbindungspunkte und T-Abzweigungen hinaus aus.
- Eine Option zum Deaktivieren der Verbindungsanzeige für Beschriftungen.

### Behoben und verbessert
{: #fixed-and-improved}

- Bibliotheksordner werden standardmäßig geöffnet und bei einer Suche erweitert.
- Textbearbeitung, Zwischenablage-Tastenkombinationen, Navigationstasten und Tastaturbefehle verbessert, wenn die Zeichnung den Fokus hat.
- Auswahl mit Strg-Klick, Ziehen mehrerer ausgewählter Objekte und Drehregler korrigiert.
- Zeichnungs- und Auswahlrechtecke können in beide Richtungen gezogen werden.
- Beenden unter macOS korrigiert und mehrfaches Laden von Bibliotheken unter macOS reduziert.
- Beschriftungspositionierung, Übersetzung der Farbauswahl und Hintergrundverarbeitung der Netzliste korrigiert.
- Namen der Windows-Installationsprogramme und AppX-Builds korrigiert.

[Release-Downloads](https://github.com/matt123p/TinyCADv4/releases/tag/4.0.6)
· [Quelltextänderungen](https://github.com/matt123p/TinyCADv4/compare/4.0.4...4.0.6)

## v4.0.4 — Quelltext-Tag, 19. März 2026
{: #v404--source-tag-19-march-2026}

- [Bibliotheksordner](../Library-Folders/) zum Organisieren von Symbolbibliotheken hinzugefügt.
- Niederländische Benutzeroberflächenübersetzung hinzugefügt.
- Browser-Build-Artefakte und Bereitstellung auf GitHub Pages hinzugefügt.
- Snap-Paketierung korrigiert.

[Quelltextänderungen](https://github.com/matt123p/TinyCADv4/compare/4.0.3...4.0.4)

## v4.0.3 — Quelltext-Tag, 15. März 2026
{: #v403--source-tag-15-march-2026}

- Startverarbeitung unter macOS angepasst, um ein Startproblem zu beheben.

Der Quelltext-Tag lautet 4.0.3, obwohl die Paketmetadaten weiterhin 4.0.2 angeben.

[Quelltextänderungen](https://github.com/matt123p/TinyCADv4/compare/4.0.2...4.0.3)

## v4.0.2 — 14. März 2026
{: #v402--14-march-2026}

- Dialogfeld für nicht gespeicherte Änderungen beim Schließen unter Linux korrigiert.
- x64-Debian-Pakete zusätzlich zu den vorhandenen ARM-Builds hinzugefügt.
- Build-Werkzeuge und Paketierungskonfiguration aktualisiert.

[Release-Downloads](https://github.com/matt123p/TinyCADv4/releases/tag/4.0.2)
· [Quelltextänderungen](https://github.com/matt123p/TinyCADv4/compare/4.0.1...4.0.2)

## v4.0.1 — erster Quelltext-Tag, 13. März 2026
{: #v401--initial-source-tag-13-march-2026}

Der erste Quelltext-Snapshot enthält bereits die TinyCAD-Neufassung für Browser und
Desktop, mit Schaltplanbearbeitung, Symbolbibliotheken, Unterstützung für vorhandene
`.dsn`- und `.tclib`-Dateien sowie Exportabläufen. Frühere Entwicklungsarbeiten sind
in diesem Repository nicht dokumentiert.

[Erster Quelltext-Snapshot](https://github.com/matt123p/TinyCADv4/tree/4.0.1)

- Zurück zu [Inhalt von v4](../CONTENTS/)
