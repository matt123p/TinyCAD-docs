---
layout: default
title: 6. Diodes, rectification and ripple
---
# 6. Dioden, Gleichrichtung und Welligkeit
{: #diodes-rectification-and-ripple}

[Zurück](/v4/SPICE-Tutorial-05/) · [Inhalt](/v4/Simulation-Tutorials/) · [Weiter](/v4/SPICE-Tutorial-07/)

Die Beispiele in diesem Kapitel sind in TinyCAD enthalten. Wählen Sie **Beispiel öffnen (Open Example) → SPICE-Tutorial (SPICE tutorial)**, wählen Sie das angegebene Beispiel aus und wählen Sie dann **Zeichnung öffnen (Open Drawing)**. Ein Download ist nicht erforderlich.

Öffnen Sie **rectifier**. Eine Sinusspannung mit 5 V Scheitelwert und 50 Hz steuert eine
Diode, einen Ladekondensator mit 100 µF und eine Last von 1 kΩ an. Führen Sie die gespeicherte transiente
Simulation über 200 ms aus und stellen Sie IN und OUT dar.


## Verfolgen Sie den Strom während eines Zyklus
{: #follow-the-current-through-a-cycle}

Wenn die Eingangsspannung ausreichend über die Kondensatorspannung steigt, leitet die Diode
und lädt den Kondensator wieder auf. Nach dem Eingangsscheitel sperrt die
Diode. Der Kondensator versorgt dann die Last, und seine Spannung sinkt
bis zum nächsten Ladeintervall. Negative Eingangshalbwellen zwingen den
Kondensator nicht in den negativen Bereich, da die Diode bei diesen Spannungen den Rückstrom sperrt.

Die Diode ist kein idealer Schalter mit einem festen Spannungsabfall von 0,7 V. Ihr eingebettetes `TC_D`
Modell enthält ein nichtlineares Strom-Spannungs-Gesetz und einen Serienwiderstand. Der Durchlass-
spannungsabfall ändert sich mit Strom, Temperatur und Modellparametern. Im Tutorial wird
ein generisches Modell verwendet, das keine Garantie für eine gekaufte Diode darstellt.

## Ein eingeschwungenes Zeitfenster messen
{: #measure-a-settled-window}

Die ersten Zyklen umfassen den Einschwingvorgang. Für eine reproduzierbare Messung der Welligkeit verwenden Sie
**Von = 160 ms** und **Bis = 200 ms**. Die Referenzsimulation ergibt:

| Messung an OUT | Ungefähres Ergebnis |
| --- | --- |
| Mittelwert | 3.90 V |
| Minimum | 3.56 V |
| Maximum | 4.24 V |
| Spitze-Spitze-Welligkeit | 0.684 V |
| Gesamteffektivwert | 3.908 V |

Der Mittelwert ist der Gleichspannungspegel. Der Gesamteffektivwert umfasst diesen Pegel ebenso wie die Welligkeit.
**Effektivwert der Welligkeit** entfernt den Mittelwert vor der Effektivwertberechnung; er ist daher eine
andere Größe. Ein hoher Gesamteffektivwert bedeutet nicht zwangsläufig eine große Wechselspannungswelligkeit.

Die grobe Abschätzung `ΔV ≈ Iload / (f × C)` ergibt mit 3.9 mA,
50 Hz und 100 µF etwa 0.78 V. Die Abweichung von den simulierten 0.684 V ist aufschlussreich:
Sie nimmt einen nahezu konstanten Laststrom und eine sofortige Nachladung an, während
sich der Widerstandsstrom ändert und die Diode während eines endlichen Zeitraums leitet.

## Video: eingeschwungene Gleichrichterwelligkeit messen
{: #video-measuring-settled-rectifier-ripple}

Ein Messzeitfenster von 160–200 ms festlegen und den Mittelwert der Spannung mit der Spitze-Spitze-Welligkeit vergleichen.

{% include video-player.html src="/v4/videos/simulation-tutorials/spice/rectifier-ripple.mp4" poster="/v4/videos/simulation-tutorials/spice/rectifier-ripple.jpg" caption="Eingeschwungene Gleichrichterwelligkeit messen." %}

[Video ansehen oder herunterladen](/v4/videos/simulation-tutorials/spice/rectifier-ripple.mp4).

### Schaltung und Referenzergebnisse
{: #circuit-and-reference-results}

![Einweggleichrichter und Ladekondensator](/v4/Images/simulation-tutorials/spice/rectifier-circuit.png)

![Berechneter Einschwingvorgang und stationäre Welligkeit](/v4/Images/simulation-tutorials/spice/rectifier-results.png)

## Experimente, die die Zielkonflikte verdeutlichen
{: #experiments-that-reveal-the-trade-offs}

Verdoppeln Sie C1 auf 200 µF. Die Welligkeit sollte abnehmen, das Nachladen erfolgt jedoch in kürzeren,
konzentrierteren Stromimpulsen. Halbieren Sie den Lastwiderstand auf 500 Ω: Die Last zieht
mehr Strom, die mittlere Spannung sinkt und die Welligkeit nimmt zu. Um den Diodenstrom zu untersuchen,
fordern Sie die unterstützte Bauteilstrommessung an oder fügen Sie im Diodenzweig eine Strommesssonde in Reihe ein. Verringern Sie die maximale Zeitschrittweite, um zu prüfen, ob
die kurzen Leitungsstromspitzen aufgelöst werden.

Die Quelle ist hier ideal. Ein praktischer Transformator, Generator oder ein reales Netzteil besitzt
eine Impedanz, die Ladestrom und Spannungsabfall beeinflusst. Fügen Sie einen Serienwiderstand hinzu,
um diesen Effekt zu untersuchen. Bauteilverlustleistung und Spitzenstrom sind nützliche Simulationsergebnisse,
doch dieses einfache Modell sagt weder die Erwärmung des Kondensators noch Stoßstromgrenzwerte
oder die Sperrschichttemperatur der Diode automatisch voraus.

## Warum die AC-Analyse nicht der richtige erste Test ist
{: #why-ac-analysis-is-not-the-right-first-test}

Das Hauptverhalten ist eine große nichtlineare Auslenkung, bei der die Leitung ein- und ausgeschaltet wird.
Eine Kleinsignal-AC-Analyse um einen Arbeitspunkt kann weder Gleichrichtung noch Einschwingvorgang
oder Welligkeit abbilden. Verwenden Sie für diese Fragen eine transiente Analyse.
DC-Sweeps sind dagegen nützlich, um die statische Strom-Spannungs-Kennlinie einer Diode darzustellen. Wählen Sie die Analyse nach der physikalischen Fragestellung
und nicht danach, welches Diagramm am einfachsten zu erstellen ist.

## Lektion-Schaltungen herunterladen
{: #download-the-lesson-circuits}

Dieselben Beispiele sind bereits unter **Beispiel öffnen (Open Example)** verfügbar. Für eine separate Kopie laden Sie eine `.dzn`-Zeichnung herunter und verwenden in TinyCAD **Datei → Öffnen (File → Open)**. Die zugehörige `.cir`-Datei ist SPICE-Text zur Einsicht oder zur Verwendung in einem kompatiblen externen Simulator, keine TinyCAD-Zeichnung. Für neue Simulationen von XSPICE-Schaltungen ist Desktop erforderlich.

| Beispiel | Zeichnung | Netzliste |
| --- | --- | --- |
| rectifier | [TinyCAD-Zeichnung](/v4/examples/simulation-tutorials/spice/rectifier.dzn) | [SPICE-Text](/v4/examples/simulation-tutorials/spice/rectifier.cir) |
