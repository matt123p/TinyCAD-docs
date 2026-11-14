---
layout: default
title: Simulation tutorials for TinyCAD
---
# Simulationstutorials
{: #simulation-tutorials}

Beginnen Sie mit [Verwendung dieser Tutorials und Öffnen der gebündelten Beispiele](/v4/Tutorial-Start-Here/),
und fahren Sie dann mit [SPICE: Überblick und Ihre erste Simulation](/v4/SPICE-Tutorial-01/) fort.
Für ereignisgesteuerte Logik beginnen Sie mit dem separaten [XSPICE- und Digitalkurs](/v4/XSPICE-Tutorial-01/).

Es gibt ein gemeinsames Einführungskapitel, elf SPICE-Kapitel und sechs XSPICE-
Kapitel. Die vollständigen Kurse, ausführbaren Zeichnungen, Bilder und Aufzeichnungen sind in diesem Handbuch enthalten. Alle Tutorialbeispiele sind mit TinyCAD gebündelt; ein
Tutorial-Download ist nicht erforderlich. Wählen Sie **Beispiel öffnen (Open Example)** in der Browser-Titelleiste oder **Datei → Beispiel öffnen (File → Open Example)** in Desktop, wählen Sie
**SPICE tutorial** oder **XSPICE and digital tutorial**, wählen Sie das im Kapitel genannte Beispiel
und anschließend **Zeichnung öffnen (Open Drawing)**. Dadurch wird eine bearbeitbare Kopie geöffnet;
verwenden Sie **Speichern unter (Save As)**, um Ihre Experimente aufzubewahren, und öffnen Sie das eingebettete Beispiel erneut,
um von vorn zu beginnen. Zeichnungen enthalten eingebettete Symbole, Modelldefinitionen,
Analyseeinstellungen und eine gespeicherte Referenzmessung.

## SPICE
{: #spice}

1. [Überblick und erster Lauf](/v4/SPICE-Tutorial-01/)
2. [Gleichspannung, Strom und Leistung](/v4/SPICE-Tutorial-02/)
3. [Signalgeneratoren und Anregungssignale](/v4/SPICE-Tutorial-03/)
4. [Transientenanalyse und RC-Aufladung](/v4/SPICE-Tutorial-04/)
5. [Frequenzgang und Filter](/v4/SPICE-Tutorial-05/)
6. [Dioden, Gleichrichtung und Restwelligkeit](/v4/SPICE-Tutorial-06/)
7. [AMP.DSN neu erstellen](/v4/SPICE-Tutorial-07/)
8. [Verstärkerverstärkung und Bandbreite](/v4/SPICE-Tutorial-08/)
9. [Verstärkerausgang, Begrenzung und Leistung](/v4/SPICE-Tutorial-09/)
10. [Durchläufe, Rauschen und Schaltungsuntersuchungen](/v4/SPICE-Tutorial-10/)
11. [Implementierung von SPICE in TinyCAD: Engines, Symbole und Arbeitsablauf](/v4/SPICE-Tutorial-11/)

## Videoanleitungen
{: #video-walkthroughs}

Fünf kurze Videos zeigen die Schritte, bei denen es besonders hilfreich ist, die Bedienelemente zu sehen.
Die Videos verwenden TinyCAD im Browser mit dem gebündelten ngspice. Spielen Sie sie im
integrierten Player der Lektion ab oder verwenden Sie diese Links in einer Markdown-Anzeige:

| Lektion | Vorführung |
| --- | --- |
| 1 | [Öffnen, Ausführen und Ändern eines Spannungsteilers](/v4/videos/simulation-tutorials/spice/first-run.mp4) |
| 3 | [Quelleneinstellungen und Vorschau der Wellenform](/v4/videos/simulation-tutorials/spice/source-settings.mp4) |
| 4 | [RC-Aufladung, Zeitschritt und Zeitkonstante](/v4/videos/simulation-tutorials/spice/rc-transient.mp4) |
| 5 | [AC-Betrag, dB, Phase und Grenzfrequenz](/v4/videos/simulation-tutorials/spice/ac-response.mp4) |
| 6 | [Einschwingende Restwelligkeit des Gleichrichters messen](/v4/videos/simulation-tutorials/spice/rectifier-ripple.mp4) |

Die Videos ergänzen die schriftlichen Anweisungen und Abbildungen. Verwenden Sie den Kapiteltext
für Gleichungen, Annahmen und erwartete Werte. Die Desktop-Menüs unterscheiden sich von denen im Browser; verwenden Sie dort Datei → Beispiel öffnen (File → Open Example).

## XSPICE- und Digitalsimulation
{: #xspice-and-digital-simulation}

1. [Modelle, Brücken und erster Lauf](/v4/XSPICE-Tutorial-01/)
2. [Logikgatter und Wahrheitstabellen](/v4/XSPICE-Tutorial-02/)
3. [Laufzeitverzögerung und Hazards](/v4/XSPICE-Tutorial-03/)
4. [Flipflops, Takte und Rücksetzen](/v4/XSPICE-Tutorial-04/)
5. [Zähler und geteilte Takte](/v4/XSPICE-Tutorial-05/)
6. [Gemischt-signale Filterung und unbekannte Zustände](/v4/XSPICE-Tutorial-06/)

XSPICE-Beispiele erfordern die native Engine von TinyCAD Desktop. Die gewöhnlichen SPICE-
Beispiele verwenden analoge Modelle, die numerische Qualifizierung dieses Pakets wurde jedoch
mit dem gebündelten nativen ngspice 47 durchgeführt. Ein erfolgreicher nativer Lauf bedeutet nicht,
dass jede Browser-/Versionskombination getestet wurde.

Schaltungsabbildungen werden aus erneut geöffneten TinyCAD-Zeichnungen gerendert. Ergebnisabbildungen
sind Diagramme tatsächlicher Solverdaten und keine handgezeichneten erwarteten Wellenformen. Bildunterschriften
kennzeichnen Anwendungs-Screenshots gesondert. Kleine numerische Abweichungen von den angegebenen Werten
sind normal, wenn sich Modell, Temperatur, Zeitschritt oder Engine-Version ändern.


## Handbuchreferenz
{: #manual-reference}

Informationen zu aktuellen Bedienelementen, Modellen, Analyseeinstellungen, Diagrammen und Fehlerbehebung finden Sie unter [Simulation](/v4/Simulation/) und [Gebündelte Beispiele](/v4/Bundled-Examples/). Der Zugriff in Desktop erfolgt über **Datei → Beispiel öffnen (File → Open Example)** und **Ansicht → Erklärung anzeigen (View → View Explanation)**.

## Downloads analoger Zeichnungen
{: #analogue-drawing-downloads}

Verwenden Sie den gebündelten Beispielbrowser oder laden Sie hier eine Zeichnung herunter und öffnen Sie sie in TinyCAD. Netzlisten werden separat als Text bereitgestellt.

| Beispiel | Zeichnung | Netzliste |
| --- | --- | --- |
| amp-ac | [TinyCAD-Zeichnung](/v4/examples/simulation-tutorials/spice/amp-ac.dzn) | [SPICE-Text](/v4/examples/simulation-tutorials/spice/amp-ac.cir) |
| amp-bias | [TinyCAD-Zeichnung](/v4/examples/simulation-tutorials/spice/amp-bias.dzn) | [SPICE-Text](/v4/examples/simulation-tutorials/spice/amp-bias.cir) |
| amp-clipping | [TinyCAD-Zeichnung](/v4/examples/simulation-tutorials/spice/amp-clipping.dzn) | [SPICE-Text](/v4/examples/simulation-tutorials/spice/amp-clipping.cir) |
| amp-small-signal | [TinyCAD-Zeichnung](/v4/examples/simulation-tutorials/spice/amp-small-signal.dzn) | [SPICE-Text](/v4/examples/simulation-tutorials/spice/amp-small-signal.cir) |
| controlled-source | [TinyCAD-Zeichnung](/v4/examples/simulation-tutorials/spice/controlled-source.dzn) | [SPICE-Text](/v4/examples/simulation-tutorials/spice/controlled-source.cir) |
| dc-sweep | [TinyCAD-Zeichnung](/v4/examples/simulation-tutorials/spice/dc-sweep.dzn) | [SPICE-Text](/v4/examples/simulation-tutorials/spice/dc-sweep.cir) |
| divider | [TinyCAD-Zeichnung](/v4/examples/simulation-tutorials/spice/divider.dzn) | [SPICE-Text](/v4/examples/simulation-tutorials/spice/divider.cir) |
| rc-ac | [TinyCAD-Zeichnung](/v4/examples/simulation-tutorials/spice/rc-ac.dzn) | [SPICE-Text](/v4/examples/simulation-tutorials/spice/rc-ac.cir) |
| rc-noise | [TinyCAD-Zeichnung](/v4/examples/simulation-tutorials/spice/rc-noise.dzn) | [SPICE-Text](/v4/examples/simulation-tutorials/spice/rc-noise.cir) |
| rc-pz | [TinyCAD-Zeichnung](/v4/examples/simulation-tutorials/spice/rc-pz.dzn) | [SPICE-Text](/v4/examples/simulation-tutorials/spice/rc-pz.cir) |
| rc-step | [TinyCAD-Zeichnung](/v4/examples/simulation-tutorials/spice/rc-step.dzn) | [SPICE-Text](/v4/examples/simulation-tutorials/spice/rc-step.cir) |
| rc-tf | [TinyCAD-Zeichnung](/v4/examples/simulation-tutorials/spice/rc-tf.dzn) | [SPICE-Text](/v4/examples/simulation-tutorials/spice/rc-tf.cir) |
| rectifier | [TinyCAD-Zeichnung](/v4/examples/simulation-tutorials/spice/rectifier.dzn) | [SPICE-Text](/v4/examples/simulation-tutorials/spice/rectifier.cir) |
| source-current | [TinyCAD-Zeichnung](/v4/examples/simulation-tutorials/spice/source-current.dzn) | [SPICE-Text](/v4/examples/simulation-tutorials/spice/source-current.cir) |
| source-dc | [TinyCAD-Zeichnung](/v4/examples/simulation-tutorials/spice/source-dc.dzn) | [SPICE-Text](/v4/examples/simulation-tutorials/spice/source-dc.cir) |
| source-exponential | [TinyCAD-Zeichnung](/v4/examples/simulation-tutorials/spice/source-exponential.dzn) | [SPICE-Text](/v4/examples/simulation-tutorials/spice/source-exponential.cir) |
| source-fm | [TinyCAD-Zeichnung](/v4/examples/simulation-tutorials/spice/source-fm.dzn) | [SPICE-Text](/v4/examples/simulation-tutorials/spice/source-fm.cir) |
| source-pulse | [TinyCAD-Zeichnung](/v4/examples/simulation-tutorials/spice/source-pulse.dzn) | [SPICE-Text](/v4/examples/simulation-tutorials/spice/source-pulse.cir) |
| source-pwl | [TinyCAD-Zeichnung](/v4/examples/simulation-tutorials/spice/source-pwl.dzn) | [SPICE-Text](/v4/examples/simulation-tutorials/spice/source-pwl.cir) |
| source-sine | [TinyCAD-Zeichnung](/v4/examples/simulation-tutorials/spice/source-sine.dzn) | [SPICE-Text](/v4/examples/simulation-tutorials/spice/source-sine.cir) |
| source-triangle | [TinyCAD-Zeichnung](/v4/examples/simulation-tutorials/spice/source-triangle.dzn) | [SPICE-Text](/v4/examples/simulation-tutorials/spice/source-triangle.cir) |

## Downloads von XSPICE-Zeichnungen
{: #xspice-drawing-downloads}

Verwenden Sie den gebündelten Beispielbrowser oder laden Sie hier eine Zeichnung herunter und öffnen Sie sie in TinyCAD. Netzlisten werden separat als Text bereitgestellt.

| Beispiel | Zeichnung | Netzliste |
| --- | --- | --- |
| logic-buffer | [TinyCAD-Zeichnung](/v4/examples/simulation-tutorials/xspice/logic-buffer.dzn) | [SPICE-Text](/v4/examples/simulation-tutorials/xspice/logic-buffer.cir) |
| logic-counter | [TinyCAD-Zeichnung](/v4/examples/simulation-tutorials/xspice/logic-counter.dzn) | [SPICE-Text](/v4/examples/simulation-tutorials/xspice/logic-counter.cir) |
| logic-dff | [TinyCAD-Zeichnung](/v4/examples/simulation-tutorials/xspice/logic-dff.dzn) | [SPICE-Text](/v4/examples/simulation-tutorials/xspice/logic-dff.cir) |
| logic-filter | [TinyCAD-Zeichnung](/v4/examples/simulation-tutorials/xspice/logic-filter.dzn) | [SPICE-Text](/v4/examples/simulation-tutorials/xspice/logic-filter.cir) |
| logic-hazard | [TinyCAD-Zeichnung](/v4/examples/simulation-tutorials/xspice/logic-hazard.dzn) | [SPICE-Text](/v4/examples/simulation-tutorials/xspice/logic-hazard.cir) |
| logic-nand | [TinyCAD-Zeichnung](/v4/examples/simulation-tutorials/xspice/logic-nand.dzn) | [SPICE-Text](/v4/examples/simulation-tutorials/xspice/logic-nand.cir) |
| logic-unknown | [TinyCAD-Zeichnung](/v4/examples/simulation-tutorials/xspice/logic-unknown.dzn) | [SPICE-Text](/v4/examples/simulation-tutorials/xspice/logic-unknown.cir) |
