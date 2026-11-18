---
layout: default
title: 5. Counters and divided clocks
---
# 5. Zähler und geteilte Taktsignale
{: #counters-and-divided-clocks}

[Vorherige](/v4/XSPICE-Tutorial-04/) · [Inhalt](/v4/Simulation-Tutorials/) · [Nächste](/v4/XSPICE-Tutorial-06/)

Die Beispiele in diesem Kapitel sind in TinyCAD enthalten. Wählen Sie **Open Example (Beispiel öffnen) → XSPICE and digital tutorial**, wählen Sie das benannte Beispiel aus und anschließend **Open Drawing (Zeichnung öffnen)**. Ein Download ist nicht erforderlich.

Öffnen Sie **logic-counter**. X1 enthält vier D-Flipflops. Jedes führt seinen invertierten Ausgang auf den D-Eingang zurück, sodass es bei jedem Takt umschaltet. Die erste Stufe erhält CLK; die nachfolgenden Stufen werden jeweils vom invertierten Ausgang der vorherigen Stufe getaktet. Dadurch entsteht ein asynchroner binärer Aufwärtszähler.

![Vier-Bit-Zähler-Testschaltung](/v4/images/simulation-tutorials/xspice/logic-counter-circuit.png)
![Berechnete Ausgänge des geteilten Takts](/v4/images/simulation-tutorials/xspice/logic-counter-results.png)

Die Eingangsperiode beträgt 1 µs. Der Reset löscht die Stufen kurz nach dem Start, und die erste Zählflanke tritt etwa bei 0,5 µs auf. Führen Sie die gespeicherte transiente Simulation über 18 µs aus. Lesen Sie jeden Wert ab, nachdem sich das Ripple eingeschwungen hat, beispielsweise bei 0,8 µs, 1,8 µs, 2,8 µs usw.

Die erwartete Dezimalfolge lautet:

```text
1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 0
```

Bei der Bitreihenfolge Q3 Q2 Q1 Q0 lauten die ersten vier Werte 0001, 0010, 0011 und 0100.
Wandeln Sie mithilfe von `count = Q0 + 2Q1 + 4Q2 + 8Q3` um; für diesen Plot gilt eine eingeschwungene Spannung über 2,5 V als logische Eins.

## Frequenzteilung
{: #frequency-division}

Q0 schaltet einmal pro Eingangszyklus um, daher erstreckt sich seine vollständige Periode über zwei Eingangszyklen. Q1 teilt durch vier, Q2 durch acht und Q3 durch sechzehn.

| Ausgang | Periode | Frequenz |
| --- | --- | --- |
| Q0 | 2 µs | 500 kHz |
| Q1 | 4 µs | 250 kHz |
| Q2 | 8 µs | 125 kHz |
| Q3 | 16 µs | 62.5 kHz |

Die mitgelieferte Erfassung über 18 µs zeigt den Überlauf, enthält aber möglicherweise nicht zwei vollständige steigende Flanken von Q3 nach dem Reset. Verlängern Sie die Dauer auf 35 µs, bevor Sie für diesen Ausgang eine Frequenzmessung über den ersten vollständigen Zyklus anfordern. Wenn die Erfassung nicht genügend Daten enthält, ist es angemessen, dass keine Frequenz verfügbar ist.

## Warum das Ripple-Verhalten wichtig ist
{: #why-ripple-matters}

Die Bits ändern sich nicht gleichzeitig. Jede Stufe reagiert erst nach dem Ausgangsübergang der vorherigen Stufe. Zoomen Sie in den Übergang von sieben auf acht hinein: Während sich der Übertrag ausbreitet, treten vorübergehend Zwischenkombinationen der Bits auf. Ein an diese Bits angeschlossener kombinatorischer Decoder könnte daher Störimpulse erzeugen.

Dies ist nicht dieselbe Architektur wie bei einem synchronen Zähler, bei dem alle Stufen denselben Takt verwenden. Eine korrekte eingeschwungene Zählfolge macht den Ripple-Zähler nicht für jede zeitkritische Anwendung geeignet. Verwenden Sie dieses Beispiel, um funktionales Zählen von Übergangszeitverhalten zu unterscheiden.

Verdoppeln Sie probeweise die Taktperiode. Die Zählfolge bleibt gleich, aber alle Ausgangsfrequenzen halbieren sich; die eingestellten Laufzeitverzögerungen bleiben unverändert. Verschieben Sie dann den Reset in die Mitte des Simulationslaufs und prüfen Sie, ob alle Bits gelöscht werden, bevor das normale Zählen fortgesetzt wird. Notieren Sie den Zeitpunkt des Resets und lassen Sie den Reset- und DAC-Brücken genügend Zeit, sich einzuschwingen, bevor Sie einen Zustand abtasten.

Legen Sie für einen Entwurfstest sowohl eine funktionale Anforderung (korrekter eingeschwungener Zählwert) als auch eine zeitliche Anforderung (maximal zulässige Einschwingverzögerung nach dem Takt) fest. Sie beantworten unterschiedliche Fragen und sollten unabhängig voneinander überprüft werden.

## Laden Sie die Lernschaltungen herunter
{: #download-the-lesson-circuits}

Dieselben Beispiele sind bereits unter **Open Example (Beispiel öffnen)** verfügbar. Laden Sie für eine separate Kopie eine `.dzn`-Zeichnung herunter und verwenden Sie in TinyCAD **File (Datei) → Open (Öffnen)**. Die zugehörige `.cir`-Datei ist SPICE-Text zur Ansicht oder zur Verwendung mit einem kompatiblen externen Simulator und keine TinyCAD-Zeichnung. Für neue Simulationsläufe mit XSPICE-Schaltungen ist die Desktop-Version erforderlich.

| Beispiel | Zeichnung | Netzliste |
| --- | --- | --- |
| logic-counter | [TinyCAD-Zeichnung](/v4/examples/simulation-tutorials/xspice/logic-counter.dzn) | [SPICE-Text](/v4/examples/simulation-tutorials/xspice/logic-counter.cir) |
