---
layout: default
---
# XSPICE und digitale Simulation
{: #xspice-and-digital-simulation}

XSPICE erweitert ngspice um Codemodelle und ein ereignisgesteuertes Simulationssystem, das mit dem Analoglöser zusammenarbeitet. Es eignet sich für Gatter, Taktgeber, Speicher und gemischte Analog-Digital-Systeme. Einen Überblick über die Architektur des Upstream-Projekts finden Sie in der offiziellen [XSPICE-Übersicht](https://ngspice.sourceforge.io/xspice.html).

**XSPICE wird in TinyCAD Desktop unterstützt, nicht jedoch in Browser-Versionen.** Die native Engine von Desktop enthält die mitgelieferten Codemodellbibliotheken.

*Gespeicherte Ergebnisse anzeigen:* Ein Browser kann weiterhin eine Zeichnung öffnen, die eine frühere XSPICE-Messung enthält. So können Sie deren gespeicherte Ergebnisse ansehen; zum Ausführen der Simulation ist Desktop erforderlich.

## Das richtige Logikmodell auswählen
{: #choose-the-right-logic-model}

| Ansatz | Funktionsweise | Anwendungsbereich |
| --- | --- | --- |
| Mitgelieferte **Digitallogik** und **Funktionsblöcke** | Portierbare analoge SPICE-Verhaltensmodelle mit konfigurierten Versorgungsspannungen und Schwellwerten | Systemuntersuchungen in Browser und Desktop |
| XSPICE-Tutorialsymbole/-modelle | Ereignisgesteuerte Logik, Verzögerungen, Speicher und explizite Analog-Digital-Brücken | Native Mixed-Signal-Simulation in Desktop |

Ein optisch ähnliches Gatter kann daher ein anderes Modellierungsverhalten aufweisen. Ersetzen Sie ein Modell nicht allein aufgrund seines Aussehens durch das andere. Keiner der beiden Ansätze lässt die Abbildung einer ESP32-, Raspberry Pi- oder Arduino-Platine Firmware ausführen. Die TinyCAD-Integration ist keine allgemeine HDL- oder Umgebung zur Ausführung eingebetteter Software.

## Analoge und digitale Knoten
{: #analogue-and-digital-nodes}

Analoge Knoten führen kontinuierlich veränderliche Spannungen/Ströme. Digitale Ereignisknoten führen Zustände. Eine **ADC-Brücke** wendet Schwellwerte an, um analoge Eingänge digitalen Zuständen zuzuordnen; eine **DAC-Brücke** ordnet einen digitalen Zustand wieder einem analogen Ausgangspegel zu. Diese Brücken beschreiben die Umwandlung zwischen Simulatordomänen und stellen nicht unbedingt ein vollständiges physisches ADC-/DAC-Bauteil dar.

Prüfen Sie Schwellwerte, Versorgungsspannungen und Ausgangsbelastung. Eine Spannung zwischen gültigen Logikschwellwerten kann einen unbekannten Zustand ergeben. Ein Speicher kann unbekannt bleiben, bis Takt-/Resetbedingungen seinen Zustand festlegen. Ein unbekannter Zustand ist eine nützliche Diagnoseinformation; ihn durch eine angenommene 0 zu ersetzen, kann ein tatsächliches Timing- oder Initialisierungsproblem verschleiern.

Durch die Ausbreitungsverzögerung spielt die Zeit eine Rolle. Gatter mit unterschiedlichen Laufzeitverzögerungen können einen Hazard erzeugen, selbst wenn die statische Wahrheitstabelle korrekt aussieht. Wählen Sie eine maximale Schrittweite für die Transientenanalyse, die sowohl die analoge Reaktion als auch das zu messende Timing auflöst. Leiten Sie eine Ereignisverzögerung nicht allein aus einer groben Anzeige ab.

## Den Digitalkurs durcharbeiten
{: #run-the-digital-course}

1. Wählen Sie in Desktop **Datei → Beispiel öffnen → XSPICE- und Digital-Tutorial**.
2. Öffnen Sie die in der Lektion genannte Zeichnung. Symbole, Codemodell-Deklarationen und gespeicherte Ergebnisse sind enthalten.
3. Lesen Sie die Erläuterung über **Ansicht → Erläuterung anzeigen** und wählen Sie das Simulationsblatt aus.
4. Wählen Sie **Ausführen**, um eine neue native Messung zu starten, und vergleichen Sie anschließend Zustände und Zeitverläufe mit der Lektion.
5. Speichern Sie eine Kopie, bevor Sie Schwellwerte, Verzögerungen, Reset oder Taktzeitpunkte ändern.

Das [sechsteilige XSPICE-Tutorial](../XSPICE-Tutorial/) behandelt Brücken und den ersten Simulationslauf, Gatter und Wahrheitstabellen, Hazards, Flipflops, Zähler und Mixed-Signal-Filterung. Es enthält Schaltpläne, Löserdiagramme und herunterladbare Begleitmaterialien.

## Upstream-Referenz
{: #upstream-reference}

Verwenden Sie die offizielle [ngspice-Dokumentation und das Handbuch](https://ngspice.sourceforge.io/docs.html) für die Codemodellsyntax und unterstützte Ports. Das [XSPICE-HOWTO](https://ngspice.sourceforge.io/xspicehowto.html) behandelt die Entwicklung von Codemodellen; weitere Beispiele und Hintergrundinformationen bietet die Seite zur [XSPICE-Verwendung](https://ngspice.sourceforge.io/xspiceusage.html). Diese Ressourcen beschreiben ngspice als Ganzes. TinyCAD verwendet seine mitgelieferten nativen Module; beliebige vom Benutzer bereitgestellte, kompilierte Codemodelle werden nicht über einen Zeichnungsanhang geladen.
