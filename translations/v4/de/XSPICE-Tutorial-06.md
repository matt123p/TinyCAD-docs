---
layout: default
title: 6. Mixed-signal filtering and unknown states
---
# 6. Gemischt-signalige Filterung und unbekannte Zustände
{: #mixed-signal-filtering-and-unknown-states}

[Zurück](/v4/XSPICE-Tutorial-05/) · [Kursinhalte](/v4/Simulation-Tutorials/)

Die Beispiele in diesem Kapitel sind in TinyCAD enthalten. Wählen Sie **Open Example → XSPICE and digital tutorial**, wählen Sie das benannte Beispiel aus und wählen Sie anschließend **Open Drawing**. Ein Download ist nicht erforderlich.

Öffnen Sie **logic-filter**. Eine Impulsfolge mit 0–5 V und 10 kHz
wird durch die XSPICE-Puffer- und DAC-Brücke geleitet und steuert anschließend einen physikalischen SPICE-Tiefpassfilter mit 1 kΩ/1 µF. Der hohe Pegel dauert in einer Periode von 100 µs 25 µs, sodass der nominale Tastgrad etwa 25 % beträgt. Aufgrund endlicher Eingangsflanken weicht der genaue, durch die Schwellenwerte definierte Tastgrad geringfügig davon ab.

![Gemischt digitaler und analoger Filterkreis](/v4/images/simulation-tutorials/xspice/logic-filter-circuit.png)
![Berechnetes PWM- und gefiltertes Ausgangssignal](/v4/images/simulation-tutorials/xspice/logic-filter-results.png)

Führen Sie die Transientenanalyse über 5 ms aus. Zeichnen Sie A, Y und FILTERED auf. Der digitale Pfad erhält die Impulsfunktion; das RC-Netzwerk bildet ihren Mittelwert und behält dabei eine gewisse Welligkeit bei.
Der langfristige Mittelwert nähert sich `5 V × 0.25 ≈ 1.25 V`. Da τ = 1 ms beträgt,
dauert das Einschwingen mehrere Millisekunden.

## Die endliche Erfassungsdauer ehrlich messen
{: #measure-the-finite-acquisition-honestly}

Im Zeitfenster von 4–5 ms beträgt der Referenzmittelwert des gefilterten Signals etwa **1.242 V**, bei einer Spitze-Spitze-Welligkeit von ungefähr **0.108 V** (etwa 1.187–1.295 V). Der ideale langfristige Mittelwert ist noch nicht ganz erreicht. Verlängern Sie die Dauer auf 10 ms und vergleichen Sie das letzte Zeitfenster von 1 ms. Eine größere Filterzeitkonstante verringert die Welligkeit, verlängert aber die Einschwingzeit, wie auch bei den analogen RC-Lektionen.

Dieses Modell eignet sich gut zum Verständnis der PWM-Spannungswandlung. Es ist kein vollständiges Modell eines Mikrocontroller-Ausgangs: Die DAC-Brücke hat eine idealisierte Ausgangstreiberfähigkeit und keine explizite Grenze für den Versorgungsstrom. Fügen Sie einen geeigneten Treiberwiderstand oder ein Bauteilmodell hinzu, wenn Laststrom und Verluste der Ausgangsstufe wichtig sind.

## Einen undefinierten Logikpegel untersuchen
{: #explore-an-undefined-logic-level}

Öffnen Sie **logic-unknown**. Sein PWL-Eingang wird zunächst auf 0 V, dann auf 2 V und anschließend auf 5 V gehalten. Führen Sie die Simulation über 3 µs aus und untersuchen Sie das mittlere Plateau.

![Berechnete analoge Darstellung eines undefinierten digitalen Zustands](/v4/images/simulation-tutorials/xspice/logic-unknown-results.png)

Die niedrige und hohe Schwelle der ADC-Brücke liegen bei 1 V und 3 V. Das 2-V-Plateau liegt dazwischen, daher ist der ereignisgesteuerte Eingang undefiniert. Dieser unbekannte Zustand wird durch den Puffer weitergegeben. Die DAC-Brücke bildet ihn auf **2.5 V** ab, weil ihr Parameter `out_undef` diesen Anzeigewert ausdrücklich vorgibt.

Interpretieren Sie 2.5 V nicht als Vorhersage, dass ein physikalisches Gatter auf halber Versorgungsspannung liegen wird. Dieser Wert ist eine Kodierung, mit der der unbekannte Zustand in einem analogen Diagramm sichtbar gemacht wird. Das Modell bildet auch weder durch Rauschen verursachtes Schwellenwertflattern noch die physikalischen Vorgänge der Metastabilität nach. Ein tatsächlicher Eingangsempfänger kann Hysterese, eine spezifizierte Schwellenwertfamilie und ein detaillierteres elektrisches Modell erfordern.

## Checkliste für gemischt-signalige Schaltungen
{: #a-mixed-signal-checklist}

Bevor Sie einem Experiment vertrauen, bestimmen Sie, welche Verbindungen Spannungen und Ströme und welche Ereignisse übertragen. Ermitteln Sie jede Umwandlung zwischen den Domänen. Dokumentieren Sie Schwellenwerte, die Abbildung undefinierter Zustände, Laufzeitverzögerungen, Ausgangsflankenzeiten und Anfangsbedingungen. Prüfen Sie sowohl die eingeschwungene Funktion als auch das Übergangsverhalten. Verwenden Sie eine ausreichend lange Erfassungsdauer, um die für die Messung erforderlichen Zyklen oder das Einschwingzeitfenster abzudecken.

Derselbe Ansatz lässt sich auf einen Komparator anwenden, der digitale Logik ansteuert, auf einen Teiler, der einen Schalter steuert, oder auf eine Logikwellenform, die einen Analogfilter ansteuert.
Weitere komplexe XSPICE-Anwendungen, darunter Phasenregelschleifen- und Delta-Sigma-Beispiele, sind unter [dem offiziellen XSPICE HOWTO](https://ngspice.sourceforge.io/xspicehowto.html) verlinkt.
Beginnen Sie mit der Validierung jeder Domäne und Schnittstelle für sich, bevor Sie das Gesamtsystem zusammenstellen.

Sie haben nun Funktionsgatter, Hazards, Speicherung, Reset, Zählvorgänge und einen gemischt analogen/digitalen Pfad verwendet. Für elektrische Leistung, nichtlineares Verstärkerverhalten und Frequenzgang kehren Sie zum [SPICE-Kurs](/v4/SPICE-Tutorial-01/) zurück.

## Lektion-Schaltungen herunterladen
{: #download-the-lesson-circuits}

Dieselben Beispiele sind bereits unter **Open Example** verfügbar. Für eine unabhängige Kopie laden Sie eine `.dzn`-Zeichnung herunter und verwenden Sie **File → Open** in TinyCAD. Die zugehörige `.cir`-Datei enthält SPICE-Text zur Prüfung oder für einen kompatiblen externen Simulator, aber keine TinyCAD-Zeichnung. Für die erstmalige Ausführung von XSPICE-Schaltungen ist die Desktop-Version erforderlich.

| Beispiel | Zeichnung | Netzliste |
| --- | --- | --- |
| logic-filter | [TinyCAD-Zeichnung](/v4/examples/simulation-tutorials/xspice/logic-filter.dzn) | [SPICE-Text](/v4/examples/simulation-tutorials/xspice/logic-filter.cir) |
| logic-unknown | [TinyCAD-Zeichnung](/v4/examples/simulation-tutorials/xspice/logic-unknown.dzn) | [SPICE-Text](/v4/examples/simulation-tutorials/xspice/logic-unknown.cir) |
