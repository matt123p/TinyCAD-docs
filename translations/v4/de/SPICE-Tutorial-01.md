---
layout: default
title: "1. SPICE: overview and your first simulation"
---
# 1. SPICE: Überblick und Ihre erste Simulation
{: #spice-overview-and-your-first-simulation}

[So verwenden Sie die Tutorials](/v4/Tutorial-Start-Here/) · [Kursinhalte](/v4/Simulation-Tutorials/) · [Weiter: Gleichstrommessungen](/v4/SPICE-Tutorial-02/)

Die Beispiele in diesem Kapitel sind in TinyCAD enthalten. Wählen Sie **Beispiel öffnen (Open Example) → SPICE tutorial**, wählen Sie das benannte Beispiel und anschließend **Zeichnung öffnen (Open Drawing)**. Ein Download ist nicht erforderlich.

SPICE berechnet das elektrische Verhalten einer Schaltung, die durch verbundene
Bauteile und ihre mathematischen Modelle beschrieben wird. Es kann einen
Gleichstrom-Arbeitspunkt bestimmen, Spannungen und Ströme über die Zeit verfolgen
oder den Kleinsignal-Frequenzgang berechnen. Aus der Zeichnung eines Bauteils
leitet es kein elektrisches Modell ab. Ein Widerstandssymbol benötigt einen
Widerstandswert und eine SPICE-Vorlage; ein Transistor benötigt zusätzlich
Parameter, die sein Verhalten beschreiben.

Dieser Kurs beginnt mit Schaltungen, die sich von Hand überprüfen lassen. In
späteren Kapiteln wird TinyCADs ursprüngliches `AMP.DSN` nachgebildet und seine Grenzen untersucht. Ziel
ist, eine präzise Fragestellung zu formulieren, die passende Analyse auszuwählen
und zu beurteilen, ob das Ergebnis plausibel ist.

Eine Anleitung zur Engine, zu Symbolbibliotheken und Bedienelementen finden Sie unter
[So implementiert TinyCAD SPICE](/v4/SPICE-Tutorial-11/). Dort wird der Unterschied
zwischen ngspice und XSPICE erläutert und gezeigt, wie Sie Ihre eigene Simulation erstellen.

## Die erste Schaltung öffnen und ausführen
{: #open-and-run-the-first-circuit}

Öffnen Sie **divider**. Seine 5-V-Quelle speist zwei in Reihe geschaltete 1-kΩ-
Widerstände. Die Bezeichnung `OUT` benennt ihren Verbindungspunkt; `IN` benennt die Versorgung.


1. Wählen Sie **Beispiel öffnen (Open Example) → SPICE tutorial**, wählen Sie **divider** und anschließend **Zeichnung öffnen (Open Drawing)**.
2. Wählen Sie das Simulationsblatt. Die gespeicherte Analyse ist **Arbeitspunkt (Operating Point)**.
3. Wählen Sie **Ausführen (Run)**. Falls die Diagramme ausgeblendet sind, wählen Sie **Simulation → Diagramme anzeigen (Show charts)**.
4. Prüfen Sie `in`, `out` und `v1#branch`. Ein Arbeitspunkt enthält einen einzelnen Wert
   pro Signal, daher ist eine numerische Anzeige nützlicher als ein Zeitdiagramm.
5. Wählen Sie auf dem Schaltplanblatt R2 aus, ändern Sie **Wert (Value)** von `1k` in `2k` und führen Sie die Simulation
   erneut aus. Stellen Sie `1k` wieder her, bevor Sie fortfahren, oder öffnen Sie **divider** erneut über **Beispiel öffnen (Open Example)**.

Mit der mitgelieferten Referenzmessung können Sie die Ergebnisse sofort prüfen. Nach
Änderungen müssen Sie die Simulation erneut ausführen: Die gespeicherten Ergebnisse
beschreiben die Schaltung zum Zeitpunkt der Messung.
Beim Speichern bleiben Einstellungen und gespeicherte Ergebnisse erhalten; **Ohne Ergebnisse speichern (Save without results)** erstellt eine kleinere Kopie zum Weitergeben, die Schaltung und Simulationseinstellungen jedoch beibehält.

Arbeitspunktdiagramme enthalten nur einen einzelnen Punkt; verwenden Sie für genaue Messwerte die numerischen Daten.

## Video: Spannungsteiler öffnen, ausführen und ändern
{: #video-open-run-and-change-a-divider}

Das eingebettete Beispiel öffnen, die Gleichstromwerte prüfen, R2 ändern und eine neue Messung ausführen.

{% include video-player.html src="/v4/videos/simulation-tutorials/spice/first-run.mp4" poster="/v4/videos/simulation-tutorials/spice/first-run.jpg" caption="Spannungsteiler öffnen, ausführen und ändern." %}

[Video ansehen oder herunterladen](/v4/videos/simulation-tutorials/spice/first-run.mp4).

### Schaltung und Referenzergebnisse
{: #circuit-and-reference-results}

![Spannungsteilerschaltung, dargestellt anhand der gespeicherten Zeichnung](/v4/Images/simulation-tutorials/spice/divider-circuit.png)

## Das Ergebnis vorhersagen
{: #predict-the-answer}

Der Strom beträgt `I = 5 / (1000 + 1000) = 2.5 mA`. Daher hat der untere Widerstand
`VOUT = I × 1000 = 2.5 V`. Bei einem auf 2 kΩ geänderten R2 ergibt die Spannungsteilerformel
`VOUT = 5 × 2000 / (1000 + 2000) = 3.333 V`.

![Berechnete Arbeitpunktergebnisse](/v4/Images/simulation-tutorials/spice/divider-results.png)

Der Quellstrom beträgt −2,5 mA. Das ist kein Verdrahtungsfehler: SPICE definiert
den Quellstrom als in den positiven Anschluss hineinfließend. Eine Quelle, die
Energie abgibt, weist gemäß dieser Konvention einen negativen Strom auf. Kapitel 2
verwendet dieses Vorzeichen, um die Leistung korrekt zu berechnen.

## Vier Grundlagen
{: #four-foundations}

- **Masse ist Knoten `0`.** Spannungen sind Differenzen; der Solver benötigt einen Bezugspunkt.
  Ein mit `GND` beschrifteter Draht ist kein Ersatz, sofern er nicht tatsächlich mit
  der SPICE-Masse verbunden ist. Verwenden Sie TinyCADs Werkzeug **Masse einfügen (Insert Ground)**.
- **Die Verbindung ist elektrisch.** Ein Verbindungspunkt verbindet Zweige. Sich kreuzende Drähte
  ohne Verbindung sind nicht notwendigerweise miteinander verbunden. Identische Netzbezeichnungen verbinden
  räumlich getrennte Punkte; eine nahegelegene Textnotiz tut das nicht.
- **Einheiten und Präfixe sind wichtig.** Verwenden Sie `1k`, `10u`, `100n` und `1Meg` in SPICE-
  Werten. In SPICE bedeutet `m` Milli, nicht Mega. Die Quellenbedienelemente von TinyCAD akzeptieren außerdem
  Eingaben mit Einheiten wie `1kHz` und `5ms`.
- **Modelle haben einen Gültigkeitsbereich.** Ein idealer Widerstand weist keine parasitäre Induktivität und keinen
  thermischen Ausfall auf, sofern diese Effekte nicht ausdrücklich modelliert werden.

## Wählen Sie die Analyse passend zur Fragestellung
{: #choose-the-analysis-that-answers-the-question}

| Frage | Analyse |
| --- | --- |
| Auf welchen Gleichspannungen und Gleichströmen stellt sich die Schaltung ein? | Arbeitspunkt |
| Was passiert nach einem Sprung oder während eines Signalverlaufs? | Transientenanalyse |
| Wie verändert sich die Kleinsignalverstärkung mit der Frequenz? | Wechselstromanalyse (AC) |
| Wie ändert sich die Gleichstromlösung bei einer Änderung der Quelle? | Gleichstromdurchlauf (DC sweep) |
| Welches Rauschen gelangt in einem Frequenzband zum Ausgang? | Rauschanalyse |
| Wie lauten die Kleinsignalverstärkung bei Gleichstrom und die Anschlusswiderstände? | Übertragungsfunktion |
| Wo liegen die Pole und Nullstellen des linearisierten Systems? | Pol-Nullstellen-Analyse |

Eine konvergierte Simulation ist erst der Anfang der Validierung. Prüfen Sie
Polarität, Einheiten, Belastung und Analyseart anhand einer einfachen Abschätzung.

Weiterführende Lektüre: Das [offizielle ngspice-Einsteigertutorial](https://ngspice.sourceforge.io/ngspice-tutorial.html)
bietet eine ergänzende, netzlistenbasierte Einführung.

## Die Schaltungsbeispiele herunterladen
{: #download-the-lesson-circuits}

Dieselben Beispiele sind bereits unter **Beispiel öffnen (Open Example)** verfügbar. Für eine unabhängige Kopie laden Sie eine `.dzn`-Zeichnung herunter und öffnen Sie sie in TinyCAD über **Datei → Öffnen (File → Open)**. Die `.cir`-Begleitdatei enthält SPICE-Text zur Prüfung oder für einen kompatiblen externen Simulator, ist aber keine TinyCAD-Zeichnung. Für neue Simulationen von XSPICE-Schaltungen ist die Desktop-Version erforderlich.

| Beispiel | Zeichnung | Netzliste |
| --- | --- | --- |
| divider | [TinyCAD-Zeichnung](/v4/examples/simulation-tutorials/spice/divider.dzn) | [SPICE-Text](/v4/examples/simulation-tutorials/spice/divider.cir) |
