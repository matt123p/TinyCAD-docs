---
layout: default
title: "4. Transient analysis: charging a capacitor"
---
# 4. Transientenanalyse: Laden eines Kondensators
{: #transient-analysis-charging-a-capacitor}

[Zurück](/v4/SPICE-Tutorial-03/) · [Inhaltsverzeichnis](/v4/Simulation-Tutorials/) · [Weiter](/v4/SPICE-Tutorial-05/)

Die Beispiele in diesem Kapitel sind im Lieferumfang von TinyCAD enthalten. Wählen Sie **Beispiel öffnen (Open Example) → SPICE tutorial**, wählen Sie das benannte Beispiel aus und klicken Sie dann auf **Zeichnung öffnen (Open Drawing)**. Ein Download ist nicht erforderlich.

Öffnen Sie **rc-step**. Eine Quelle führt über
1 kΩ einen Spannungssprung von 0 auf 1 V an einem 1-µF-Kondensator aus. Die gespeicherte Transientenanalyse dauert 5 ms und hat eine maximale Schrittweite
von 5 µs. Stellen Sie IN und OUT gemeinsam dar.


## Video: Laden eines RC-Glieds und Zeitkonstante
{: #video-rc-charging-and-time-constant}

Verfeinern der maximalen Schrittweite und Messen von OUT bei 1 ms sowie der RC-Zeitkonstante.

{% include video-player.html src="/v4/videos/simulation-tutorials/spice/rc-transient.mp4" poster="/v4/videos/simulation-tutorials/spice/rc-transient.jpg" caption="Laden eines RC-Glieds und Zeitkonstante." %}

[Video ansehen oder herunterladen](/v4/videos/simulation-tutorials/spice/rc-transient.mp4).

### Schaltung und Referenzergebnisse
{: #circuit-and-reference-results}

![RC-Ladeschaltung](/v4/images/simulation-tutorials/spice/rc-step-circuit.png)

![Berechnete Ladekurve des Kondensators](/v4/images/simulation-tutorials/spice/rc-step-results.png)

## Warum der Ausgang eine Kurve bildet statt zu springen
{: #why-the-output-curves-rather-than-jumps}

Der Kondensatorstrom ist `i = C × dv/dt`. Unmittelbar nachdem sich der Eingang ändert, liegt am Kondensator weiterhin nahezu 0 V an, sodass fast die gesamte Eingangsspannung über R1 abfällt. Der Anfangsstrom beträgt ungefähr `1 V / 1 kΩ = 1 mA`. Während sich der Kondensator auflädt,
nehmen die Spannung am Widerstand und der Strom ab. Die Ausgangsspannung nähert sich 1 V, anstatt diesen Wert augenblicklich zu erreichen.

Die Zeitkonstante beträgt `τ = R × C = 1 ms`. Bei einem idealen Sprung und einem anfangs ungeladenen Kondensator gilt: `VOUT(t) = 1 − exp(−t/τ)` Volt.

| Zeit nach dem Sprung | Erwarteter Wert von OUT |
| --- | --- |
| 1 ms = 1τ | 0,632 V |
| 2 ms = 2τ | 0,865 V |
| 3 ms = 3τ | 0,950 V |
| 5 ms = 5τ | 0,993 V |

Die bereitgestellte Quelle steigt innerhalb von 1 µs an; daher ist eine kleine Abweichung von der Gleichung für einen augenblicklichen Sprung zu erwarten. Verwenden Sie den Diagrammcursor oder eine Messung vom Typ **Wert (Value)** bei 1 ms. Eine Messung vom Typ **Zeitkonstante (Time constant)** mit einem Anfangswert von 0 V und einem Endwert von 1 V sollte etwa 1 ms ergeben. Bei einer Messung der **Anstiegszeit (Rise time)** wird das Intervall von 10–90 % verwendet: Der erwartete Wert ist `ln(9) × τ ≈ 2.197 ms`, nicht 1 ms.

## Dauer und maximale Schrittweite beantworten unterschiedliche Fragen
{: #duration-and-maximum-step-answer-different-questions}

Die Dauer legt fest, wie lange das Experiment ausgeführt wird. Die maximale Schrittweite begrenzt den Abstand zwischen den Zeitpunkten des Solvers. In der Nähe von Flanken oder nichtlinearen Vorgängen kann der Solver kleinere Schritte ausführen. Die Anzahl der Abtastwerte muss daher nicht der Dauer geteilt durch die maximale Schrittweite entsprechen.

Bei einer zu kurzen Dauer ist das Einschwingen nicht sichtbar. Bei einer zu groben Schrittweite können Flanken und Spitzen schlecht gemessen werden, auch wenn das Diagramm plausibel aussieht. Verringern Sie die maximale Schrittweite von 5 µs auf 2,5 µs und vergleichen Sie den Messwert bei 1 ms; bei einem stabilen Ergebnis sollte sich nur sehr wenig ändern. Damit prüfen Sie die Konvergenz der Messung und nicht nur, ob der Solver die Berechnung als erfolgreich meldet.

## Anfangsbedingungen und Energie
{: #initial-conditions-and-energy}

Normalerweise berechnet SPICE vor dem Start der Transientenanalyse einen DC-Arbeitspunkt. Wenn Sie **Anfangsbedingungen (initial conditions)** aktivieren, wird der alternative Startpfad mit Anfangsbedingungen angefordert (`uic`). Verwenden Sie ihn gezielt und mit geeigneten Anfangsbedingungen für Kondensatoren und Spulen; er ist kein allgemeines Mittel gegen Konvergenzprobleme.
Dieses Beispiel benötigt ihn nicht, da der Anfangswert des Eingangssignals null ist.

Bei 1 V speichert der Kondensator `E = ½CV² = 0.5 µJ`. Während des Ladevorgangs setzt R1 Energie in Wärme um, und die Quelle liefert sowohl die gespeicherte als auch die umgesetzte Energie. Momentanleistung und aufsummierte Energie sind unterschiedliche Messgrößen: Integrieren Sie die Leistung über das gewählte Zeitintervall, um Joule zu erhalten.

Versuchen Sie es mit 2,2 kΩ, sagen Sie eine Zeitkonstante von 2,2 ms voraus und verlängern Sie die Dauer auf 11 ms. Stellen Sie anschließend R1 wieder her und halbieren Sie C1: Die Zeitkonstante sollte sich halbieren. Diese Änderungen veranschaulichen, wie sich ein Experiment so entwerfen lässt, dass der Einfluss eines Bauteils von einem Darstellungsartefakt unterschieden werden kann.

## Schaltungsbeispiele herunterladen
{: #download-the-lesson-circuits}

Dieselben Beispiele sind bereits unter **Beispiel öffnen (Open Example)** verfügbar. Für eine separate Kopie laden Sie eine `.dzn`-Zeichnung herunter und verwenden Sie in TinyCAD **Datei → Öffnen (File → Open)**. Die zugehörige `.cir`-Datei enthält SPICE-Text zur Prüfung oder für einen kompatiblen externen Simulator, ist aber keine TinyCAD-Zeichnung. Für neue Simulationsläufe mit XSPICE-Schaltungen ist Desktop erforderlich.

| Beispiel | Zeichnung | Netzliste |
| --- | --- | --- |
| rc-step | [TinyCAD-Zeichnung](/v4/examples/simulation-tutorials/spice/rc-step.dzn) | [SPICE-Text](/v4/examples/simulation-tutorials/spice/rc-step.cir) |
