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

- [KI-gestützte Bearbeitung von Symbolen, Bibliotheken und Schaltungen](../AI-Assistant/), einschließlich angehängter Datenblätter/Bilder, gebündelter und Online-Symbolsuche, direkter Änderungen am aktiven Dokument, rückgängig machbarer Änderungen, Anbieter-/Modelleinstellungen und Verbindungen zu lokalem Ollama.

- [Integrierte Simulation](../Simulation/) mit lokalem ngspice im Browser und auf dem Desktop, mit Arbeitspunkt-, Transienten-, AC-, DC-Sweep-, Rausch-, Übertragungsfunktions- und Pol-Nullstellen-Analysen. [Ereignisgesteuertes XSPICE](../XSPICE/) wird auf dem Desktop unterstützt.
- [Quellen, Messsonden und virtuelle Instrumente](../Simulation-Sources-and-Instruments/), einschließlich Oszilloskopen, Multimetern, Funktionsgeneratoren und Laborstromversorgungen.
- [Circuit Explorer](../Simulation-Charts-and-Measurements/) zum Abstimmen, für Sweeps, benannte Messungen, Anforderungen, DC-Überlagerungen, Toleranzstudien, Testfälle sowie Untersuchungen von Leistung und Belastung.
- [Komprimierte `.dzn`-Zeichnungen](../Simulation/#dzn-simulation-drawings), die Schaltung, Modelle, Simulationseinstellungen und optionale Ergebnisse zusammenhalten. Ausführungshistorie und Ergebniss-Exporte unterstützen Vergleiche und den Austausch; „Ohne Ergebnisse speichern“ erstellt eine kleinere Kopie.
- [Gebündelte Bibliotheken](../Bundled-Libraries/) für Netzwerktopologien, eingebettete Platinen und Smart-Home-Module, Audio, Laborgeräte, Motoren/Bewegungssteuerung und Solar-/Batterieplanung sowie modellierte SPICE-, Logik-, Funktions- und Sensorkollektionen. Wählen Sie diese im Bibliotheksauswahldialog auf der Registerkarte „Standard“ aus.
- [Sieben bearbeitbare Zeichnungsbeispiele](../Bundled-Examples/) zu Transistorverstärkern, Büronetzwerken, ESP32-Klima-/Anzeigestationen, Solar-/Batteriehäusern, Podcast-Studios, Laborarbeitsplätzen und Motorsteuerungs-Arbeitsplätzen, mit eingebetteten Symbolen und Erläuterungen.
- [SPICE- und XSPICE-Lernprogramme](../Simulation-Tutorials/): elf analoge und sechs digitale Kapitel mit 28 unterschiedlichen ausführbaren Zeichnungen, Modelldefinitionen, Analyseeinstellungen und gespeicherten Referenzmessungen.
- [Aufräumen des Layouts](../Layout-Tidy-Up/) für ganze Blätter oder ausgewählte Elemente, mit geringer/mittlerer/hoher Stärke, Abbrechen, Verbindungsprüfungen und einstufigem Rückgängigmachen.

### Geändert
{: #changed}

- „Beispiel öffnen“ und „Erklärung“ befinden sich in der Browser-Titelleiste. Auf dem Desktop gibt es „Datei → Beispiel öffnen“ und „Ansicht → Erklärung anzeigen“.
- Das Menü „Ansicht“ auf dem Desktop enthält „Diagramme anzeigen“; der Simulationsmenüpunkt in der Symbolleiste behält seinen Diagramm-Umschalter.
- „Automatisches Layout“ befindet sich in der Symbolleiste neben „Simulation“ und ist außerdem im Menü „Werkzeuge“ auf dem Desktop verfügbar.

### Behoben
{: #fixed}

- Ziehbare Vorschauen der Komponentengrafiken in den Ergebnissen der Auswahldialoge „Standard“, „Meine Bibliotheken“ und „Online“ wiederhergestellt.
- Grafiken eingebetteter Controller, Sensoren und Displays auf praxisgerechte Größen für das Seitenlayout verkleinert, wobei Pin-Identitäten und Verdrahtungspositionen erhalten bleiben.
- Verhindert, dass Layoutänderungen unerwünschte Verbindungen an Drahtenden, Knicken oder Buchsen erzeugen; Pin-Ausgänge verbessert und unnötige Umwege entfernt.
- Kleine Kästchen für Anschlussbeschriftungen entfernt, die Text in Labor- und Bewegungssteuerungssymbolen überlagern, und die betroffenen Beispiele aktualisiert.
- Fehlerberichte und Diagnosemeldungen der Simulation, Verstärkerläufe im Browser, ausgekoppelte Diagramme und unabhängige Beispielerklärungsfenster verbessert.

### Handbuch
{: #manual}

- Einen [Leitfaden zu Bildern](../Images/) hinzugefügt, der Kopieren und Einfügen, Dateiimport und Formatkonvertierung, festes Seitenverhältnis, Pixelbeschneidung und das Speichern von Bildern zusammen mit der Zeichnung behandelt.

- Einen vollständigen [Leitfaden zum KI-Assistenten](../AI-Assistant/) hinzugefügt, der die Erstellung von Symbolen/Bibliotheken und Schaltungen, die Anbietereinrichtung mit Screenshots, lokales Ollama, Dokumentanhänge, Beispiel-Prompts und die Überprüfung generierter Ergebnisse behandelt.

- Leitfäden zum Auffinden und Verwenden gebündelter Bibliotheken und Beispiele hinzugefügt und die ausschließlich den Export beschreibende SPICE-Darstellung durch den integrierten Simulationsablauf ersetzt.
- Referenzen zu Analysen, Modellen, Instrumenten, Diagrammen, Messungen und Fehlerbehebung hinzugefügt, mit Links zur offiziellen ngspice- und XSPICE-Dokumentation.
- Die vollständigen vorhandenen Kurse, herunterladbare Zeichnungen/Netzlisten und zehn Videoanleitungen zu Bibliotheken, Beispielen, Layout-Aufräumen, blattübergreifenden Verbindungen und SPICE aufgenommen.
- [Funktionsunterschiede](../Feature-Differences/) verdeutlicht, einschließlich `.dzn` und der Kompatibilität von Markdown-Textfeldern sowie der XSPICE-Unterstützung im Browser.
- Das Handbuch in allen acht unterstützten Sprachen aktualisiert, einschließlich Navigation, neuen Referenzseiten, Tutorialtext und Videountertiteln.

## v4.0.11
{: #v4011}
{: #v4011}

Diese Version ergänzt formatierte Markdown-Notizen, vektorielle SVG-Ausgabe und Steuerelemente für die Drahtführung.

- [Markdown-Textfelder](../Text/#markdown-text-boxes): formatierte Notizen mit Listen, Aufgabenlisten und Codeblöcken; derselbe Vektorrenderer für die Zeichnung, den SVG-Export und PDF.
- Live-Quelltextformatierung lässt bearbeitbare Markierungen sichtbar und richtet sich nach der gewählten Grundschrift, mit entsprechender Cursorposition, Auswahl und Zeilenumbruch.
- [Drahtführungsmodi](../Wires/#wire-routing-modes): kompakte Auswahl für 90°-, 45°- und freie Führung, wobei eine aktive Vorschau erhalten bleibt.
- Die Lupenschaltfläche wird erst nach Touch-Eingabe auf der Zeichenfläche angezeigt.

## v4.0.10 — 6. November 2026
{: #v4010--6-november-2026}
{: #v4010}

- Die Editor-Symbolleiste bleibt sichtbar, wenn Bibliotheks- oder Schaltplanbereiche mehr vertikalen Platz benötigen.

## v4.0.9 — 4. November 2026
{: #v409--4-november-2026}

### Hinzugefügt
{: #added-1}

- [Touch-Steuerung](../Touch-controls/), einschließlich direkter Bearbeitung, Verschieben mit zwei Fingern
  und Pinch-Zoom sowie einer vergrößernden Lupe mit den Steuerelementen „Klicken“, „Ziehen/Ablegen“, „Menü“ und „Schließen“ für präzises Platzieren.
- [Größenveränderbarer Bibliotheksbereich und Symbolsortierung](../Using-Symbol-Libraries/),
  einschließlich alphabetischer Sortierung der Suchergebnisse.
- [Vorübergehendes Ausblenden ausgewählter Objekte](../User-guide/#temporarily-hiding-objects)
  und ein Befehl zum Wiederherstellen aller ausgeblendeten Objekte auf dem aktuellen Blatt.
- Polnische Benutzeroberflächenübersetzung und übersetzter Text im Dialog „Symbol ersetzen“.

### Behoben
{: #fixed-1}

- [Rasteranzeige und Einrasten](../Snap-to-Grid/) funktionieren unabhängig voneinander, und
  die Bewegung per Tastatur berücksichtigt deaktiviertes Einrasten.
- Bitmap-Bilder werden in platzierten Bibliothekssymbolen dargestellt.
- [Escape bricht Zeichnungs- und Platzierungsvorgänge ab](../Shortcuts/), auch wenn
  Steuerelemente der Symbolleiste den Fokus haben.
- Beim Abbrechen der Desktop-Abfrage zu nicht gespeicherten Änderungen wird das ausstehende Beenden aufgehoben.
- Pinch-Zoom auf der Zeichenfläche wird nicht mehr mit dem Browser-Seitenzoom kombiniert.
- Positionierung der Touch-Lupe, Zeigerrückmeldung, Gestenverarbeitung und Ziehen verbessert.
- Verhalten des Info-Dialogs auf Desktop und macOS verbessert.

### Paketierung und Wartung
{: #packaging-and-maintenance}

- Abhängigkeiten aktualisiert, um Sicherheitslücken zu beheben.
- Linux-ARMv7-Pakete entfernt, da die Electron-Laufzeit Linux x64 und ARM64 unterstützt. Snap-Pakete richten sich an x64; Debian-Pakete an x64 und ARM64.

[Release-Downloads](https://github.com/matt123p/TinyCADv4/releases/tag/v4.0.9)
· [Quellcodeänderungen](https://github.com/matt123p/TinyCADv4/compare/v4.0.8...v4.0.9)

## v4.0.8 — 3. Mai 2026
{: #v408--3-may-2026}

- Drehung von Stromversorgungssymbolen beim Speichern und erneuten Öffnen einer Zeichnung behoben.
- Netztypen von Drähten beim Speichern und Laden beibehalten, sodass die Drahtfarben konsistent bleiben.

[Release-Downloads](https://github.com/matt123p/TinyCADv4/releases/tag/v4.0.8)
· [Quellcodeänderungen](https://github.com/matt123p/TinyCADv4/compare/v4.0.7...v4.0.8)

## v4.0.7 — 13. April 2026
{: #v407--13-april-2026}

- Drucken in der Desktop-Anwendung behoben.
- Pinch-Zoom-Verhalten verbessert, um unkontrolliertes Zoomen zu verhindern.
- Serverseitiges Rendern von Bibliothekssymbolen hinzugefügt.
- Automatisierte Kennzeichnung von Produktions-Builds und Erstellung von GitHub-Releases.

[Release-Downloads](https://github.com/matt123p/TinyCADv4/releases/tag/v4.0.7)
· [Quellcodeänderungen](https://github.com/matt123p/TinyCADv4/compare/4.0.6...v4.0.7)

## v4.0.6 — 29. März 2026
{: #v406--29-march-2026}

Diese Version umfasst die unter Version 4.0.5 vorgenommenen Entwicklungsänderungen; es gibt kein separates Tag 4.0.5 und kein veröffentlichtes GitHub-Release.

### Hinzugefügt
{: #added-2}

- Automatische Drahtführung.
- „Symbol ersetzen“ zum Ändern einer vorhandenen Komponente in ein anderes Bibliothekssymbol.
- Automatisches Scrollen beim Ziehen nahe am Rand der Zeichnung.
- Doppelklick zum Auswählen eines vollständigen Drahts und Dreifachklick zum Auswählen über Knoten und T-Stücke hinweg.
- Eine Option zum Deaktivieren der Verbindungsanzeige für Beschriftungen.

### Behoben und verbessert
{: #fixed-and-improved}

- Bibliotheksordner sind standardmäßig geöffnet und werden bei der Suche aufgeklappt.
- Textbearbeitung, Zwischenablage-Tastenkürzel, Navigationstasten und Tastaturbeschleuniger verbessert, wenn die Zeichnung den Fokus hat.
- Auswahl mit Strg-Klick, Ziehen mehrerer ausgewählter Objekte und Drehregler behoben.
- Zeichnungs- und Auswahlrechtecke können in beide Richtungen gezogen werden.
- Beenden unter macOS behoben und mehrfaches Laden von Bibliotheken unter macOS reduziert.
- Positionierung von Beschriftungen, Übersetzung der Farbauswahl und Hintergrundverarbeitung der Netzliste behoben.
- Bezeichnungen von Windows-Installationsprogrammen und AppX-Builds korrigiert.

[Release-Downloads](https://github.com/matt123p/TinyCADv4/releases/tag/4.0.6)
· [Quellcodeänderungen](https://github.com/matt123p/TinyCADv4/compare/4.0.4...4.0.6)

## v4.0.4 — Quellcode-Tag, 19. März 2026
{: #v404--source-tag-19-march-2026}

- [Bibliotheksordner](../Library-Folders/) zum Organisieren von Symbolbibliotheken hinzugefügt.
- Niederländische Benutzeroberflächenübersetzung hinzugefügt.
- Build-Artefakte für den Browser und Bereitstellung auf GitHub Pages hinzugefügt.
- Snap-Paketierung behoben.

[Quellcodeänderungen](https://github.com/matt123p/TinyCADv4/compare/4.0.3...4.0.4)

## v4.0.3 — Quellcode-Tag, 15. März 2026
{: #v403--source-tag-15-march-2026}

- Handhabung des macOS-Starts angepasst, um ein Startproblem zu beheben.

Das Quellcode-Tag lautet 4.0.3, obwohl die Paketmetadaten weiterhin 4.0.2 angeben.

[Quellcodeänderungen](https://github.com/matt123p/TinyCADv4/compare/4.0.2...4.0.3)

## v4.0.2 — 14. März 2026
{: #v402--14-march-2026}

- Dialog zum Schließen bei nicht gespeicherten Änderungen unter Linux behoben.
- Zusätzlich zu den vorhandenen ARM-Builds x64-Debian-Pakete hinzugefügt.
- Build-Werkzeuge und Paketierungskonfiguration aktualisiert.

[Release-Downloads](https://github.com/matt123p/TinyCADv4/releases/tag/4.0.2)
· [Quellcodeänderungen](https://github.com/matt123p/TinyCADv4/compare/4.0.1...4.0.2)

## v4.0.1 — erstes Quellcode-Tag, 13. März 2026
{: #v401--initial-source-tag-13-march-2026}

Der erste Quellcode-Snapshot enthält bereits die TinyCAD-Neuentwicklung für Browser und Desktop, mit Schaltplanbearbeitung, Symbolbibliotheken, Unterstützung für vorhandene `.dsn`- und `.tclib`-Dateien sowie Exportabläufen. Frühere Entwicklungsarbeiten sind in diesem Repository nicht dokumentiert.

[Erster Quellcode-Snapshot](https://github.com/matt123p/TinyCADv4/tree/4.0.1)

- Zurück zu den [Inhalten von v4](../CONTENTS/)
