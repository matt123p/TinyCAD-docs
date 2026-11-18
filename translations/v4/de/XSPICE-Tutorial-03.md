---
layout: default
title: 3. Propagation delay and logic hazards
---
# 3. Ausbreitungsverzögerung und Logikgefahren
{: #propagation-delay-and-logic-hazards}

[Zurück](/v4/XSPICE-Tutorial-02/) · [Inhalt](/v4/Simulation-Tutorials/) · [Weiter](/v4/XSPICE-Tutorial-04/)

Die Beispiele in diesem Kapitel sind in TinyCAD enthalten. Wählen Sie **Beispiel öffnen (Open Example) → XSPICE and digital tutorial**, wählen Sie das benannte Beispiel aus und wählen Sie anschließend **Zeichnung öffnen (Open Drawing)**. Ein Download ist nicht erforderlich.

Öffnen Sie **logic-hazard**. Innerhalb von X1 geht eine Kopie von A
direkt zu einem UND-Gatter. Eine andere wird durch einen Inverter geleitet, bevor sie den
anderen UND-Eingang erreicht. Der boolesche Ausdruck lautet `A AND NOT A`, der nach dem Einschwingen immer null ist. Dennoch kann der transiente Verlauf einen Impuls enthalten.

![Berechnete Gefahrenimpulse](/v4/images/simulation-tutorials/xspice/logic-hazard-results.png)

Der Inverter hat eine Verzögerung von 100 ns und das UND-Gatter eine Verzögerung von 10 ns. Bei einer steigenden Flanke am Eingang wird der direkte Pfad high, während der invertierte Pfad high bleibt,
bis der Inverter reagiert. Für ein kurzes Intervall sind beide UND-Eingänge high,
sodass ein positiver Ausgangsimpuls auftritt. In diesem absichtlich einfachen
Modell ist er etwa 100 ns breit. Bei der entgegengesetzten Eingangsflanke durchlaufen die beiden Pfade einen Zeitraum,
in dem beide UND-Eingänge low sind, sodass derselbe positive Impuls nicht erzeugt wird.

## Zeitmessung statt Ableitung aus Pixeln
{: #measure-rather-than-infer-timing-from-pixels}

Führen Sie die gespeicherte transiente Analyse über 3 µs mit einer maximalen Schrittweite von 2 ns aus. Zoomen Sie auf eine steigende Flanke
nahe 0,5 µs. Verwenden Sie einen Schwellwert von 2,5 V, um den Eingangsdurchgang, den Ausgangsdurchgang
und die Impulsbreite am Ausgang zu messen. Die Messung **Verzögerung (Delay)** in TinyCAD verwendet den ersten steigenden Schwellwertdurchgang des Ausgangs minus den ersten steigenden Schwellwertdurchgang der Referenz im ausgewählten
Zeitfenster. Für die Messung **Impulsbreite (Pulse width)** muss sich in diesem Zeitfenster ein vollständiger Impuls befinden.

Die gesamte Verzögerung vom analogen Eingang zum analogen Ausgang umfasst den Schwellwertdurchgang,
die Zeitsteuerung der ADC-Brücke, die Gatterverzögerung und die Übergangszeit des DAC. Sie ist nicht identisch mit dem `rise_delay`-Parameter eines einzelnen Gatters. Wählen Sie beim Vergleich von Messungen übereinstimmende Schwellwerte
und geben Sie das verwendete Intervall an.

## Drei verschiedene Zeitgrößen unterscheiden
{: #separate-three-different-time-quantities}

| Größe | Bedeutung |
| --- | --- |
| Ausbreitungsverzögerung | Zeit zwischen einem auslösenden Eingangsereignis und dem daraus resultierenden Ausgangsereignis |
| Anstiegs-/Abfallzeit | Zeit, die ein analoger Übergang zwischen festgelegten Pegeln benötigt |
| Periode | Zeit zwischen Wiederholungen der Wellenform |

Ein idealer ereignisgesteuerter Übergang kann in seinem digitalen Bereich
instantan sein, während die DAC-Brücke eine endliche analoge Flankensteilheit erzeugt. Eine kleinere Plot-Schrittweite verringert nicht die konfigurierte Ausbreitungsverzögerung des Gatters.

Verdoppeln Sie die Inverterverzögerung im Modell von X1 auf 200 ns und führen Sie die Simulation erneut aus. Der Impuls
sollte entsprechend breiter werden. Erhöhen Sie dann die maximale Schrittweite deutlich und vergleichen Sie, was der Plot auflöst. Der Solver fügt möglicherweise weiterhin ereignisbezogene
Punkte ein, doch eine grobe Einstellung ist keine zuverlässige Strategie zur Messung kurzer
analoger Flanken. Stellen Sie 2 ns wieder her und prüfen Sie, ob die gemessene Breite stabil ist.

Dies ist eine Demonstration einer Logikgefahr, kein empfohlener physikalischer Impulsgenerator.
Reale Logikverzögerungen variieren mit Prozess, Spannung, Temperatur und Belastung. Ein Impuls,
der in einer Simulation mit fester Verzögerung zuverlässig erscheint, kann in Hardware ausbleiben oder eine andere Breite haben. Verwenden Sie einen solchen Test, um die Zeitempfindlichkeit zu untersuchen, und wählen Sie anschließend ein
Design mit expliziten Zeitanforderungen und geeigneten Modellen.

## Lektion-Schaltungen herunterladen
{: #download-the-lesson-circuits}

Dieselben Beispiele sind bereits unter **Beispiel öffnen (Open Example)** verfügbar. Für eine unabhängige Kopie laden Sie eine `.dzn`-Zeichnung herunter und verwenden in TinyCAD **Datei → Öffnen (File → Open)**. Die zugehörige `.cir`-Datei ist SPICE-Text zur Ansicht oder für einen kompatiblen externen Simulator, keine TinyCAD-Zeichnung. Für neue Simulationen von XSPICE-Schaltungen ist Desktop erforderlich.

| Beispiel | Zeichnung | Netzliste |
| --- | --- | --- |
| logic-hazard | [TinyCAD-Zeichnung](/v4/examples/simulation-tutorials/xspice/logic-hazard.dzn) | [SPICE-Text](/v4/examples/simulation-tutorials/xspice/logic-hazard.cir) |
