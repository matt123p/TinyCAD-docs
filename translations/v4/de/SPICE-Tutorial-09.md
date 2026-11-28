---
layout: default
title: 9. Amplifier waveform, clipping and power usage
---
# 9. Verstärker-Wellenform, Begrenzung und Leistungsaufnahme
{: #amplifier-waveform-clipping-and-power-usage}

[Zurück](/v4/SPICE-Tutorial-08/) · [Inhalt](/v4/Simulation-Tutorials/) · [Weiter](/v4/SPICE-Tutorial-10/)

Die Beispiele in diesem Kapitel sind in TinyCAD enthalten. Wählen Sie **Open Example → SPICE tutorial**, markieren Sie das benannte Beispiel und wählen Sie anschließend **Open Drawing**. Ein Download ist nicht erforderlich.

Öffnen Sie **amp-small-signal**. VIN liefert eine
Sinusspannung mit 10 mV Spitzenwert und 1 kHz. Die Transientenanalyse dauert 12 ms bei einer maximalen Schrittweite von 2 µs.
Vergleichen Sie IN und OUT und messen Sie anschließend die letzten vier Perioden, von 8 ms bis 12 ms.

![Gemessene Wellenformen des Kleinsignalverstärkers](/v4/Images/simulation-tutorials/spice/amp-small-signal-results.png)

Das AC-Ergebnis sagt am Ausgang einen Spitzenwert von etwa 8.92 mV voraus, invertiert gegenüber dem Eingang.
Die Transientenanalyse ergibt im Messfenster ungefähr −8.87 bis +8.99 mV,
mit einem **Effektivwert von 6.304 mV**. Der geringe Unterschied zwischen positiven und negativen Spitzenwerten
spiegelt das nichtlineare Modell und verbleibende Transienteneffekte wider.

## Lastleistung und Versorgungaufnahme berechnen
{: #calculate-load-power-and-supply-consumption}

Für den rein ohmschen RL ist die Momentanleistung `pL(t) = vOUT(t)² / 8`.
Die mittlere Lastleistung entspricht daher `VOUT,RMS² / 8`, einschließlich eines etwaigen Gleichanteils
im ausgewählten Intervall. Bei dem kleinen Eingangssignal beträgt sie ungefähr **4.97 µW**.

Die von der Versorgung abgegebene Leistung ist `−12 × mean(i(VCC))`, ungefähr **264.61 mW**.
Der größte Teil der Leistung wird im vorgespannten Schaltkreis verbraucht, selbst wenn das Audiosignal sehr klein ist.
Das Verhältnis von Lastleistung zu Versorgungsleistung beträgt bei diesem Eingangssignal nur etwa **0.00188%**.
Dies ist der elektrische Wirkungsgrad für die gewählte Systemgrenze und das gewählte Zeitfenster, kein
akustischer Wirkungsgrad und keine allgemeine Kenngröße des Schaltkreises.

Fügen Sie in TinyCAD Leistungsmessungen für die Bauteile VCC und RL hinzu und wählen Sie dann **Mean**
mit From/To auf 8 ms und 12 ms gesetzt. Eine speisende Quelle weist eine negative aufgenommene
Leistung auf; nehmen Sie deren Negativwert als abgegebene Eingangsleistung. Das **Integral** der Leistung ergibt
die Energie in Joule. Eine Strom- oder Leistungskenngröße, die für ein Modell nicht verfügbar ist, darf nicht durch
einen geratenen Nullwert ersetzt werden.

## Eingangssignal erhöhen, bis die lineare Vorhersage nicht mehr gilt
{: #increase-input-until-the-linear-prediction-fails}

Öffnen Sie **amp-clipping**. Nur die Amplitude von VIN ändert sich,
auf einen Spitzenwert von 500 mV. Eine lineare Extrapolation würde am Ausgang in beiden Richtungen einen Spitzenwert von etwa 446 mV vorhersagen. Die berechnete Wellenform zeigt das nicht.

![Berechnete asymmetrische Großsignal-Ausgangswellenform](/v4/Images/simulation-tutorials/spice/amp-clipping-results.png)

Im selben Zeitfenster von 8–12 ms liegt der Ausgang ungefähr zwischen
**−0.162 und +0.389 V**, bei einem **Effektivwert von 0.2126 V**. Die Versorgungsaufnahme beträgt ungefähr
**315.23 mW**; die gesamte ohmsche Lastleistung beträgt **5.65 mW**, was einem elektrischen Wirkungsgrad von etwa **1.79%**
in diesem Zeitfenster entspricht. Der Ausgangsmittelwert beträgt bei dieser endlichen Messdauer ungefähr
31 mV. Für die AC-Lastleistung ziehen Sie vor dem Quadrieren den Mittelwert ab: Verwenden Sie den Effektivwert des Wechselanteils, nicht den Gesamteffektivwert.

Der Emitterfolger kann aktiv Strom liefern, aber sein Stromsenkpfad ist durch das
Vorspannungsnetzwerk begrenzt. Der sehr niedrige Lastwiderstand macht diese
Asymmetrie sichtbar. Bezeichnen Sie nicht jeden abgeflacht wirkenden Bereich einfach als „Erreichen der Versorgungsschiene“:
Untersuchen Sie EMITTER, COLLECTOR und die Bauteilströme, um den Mechanismus zu bestimmen.

## Messung nachvollziehbar machen
{: #make-the-measurement-defensible}

Verwenden Sie vollständige Perioden, geben Sie das Zeitfenster an und schließen Sie den Einschwingvorgang aus, wenn Sie den stationären Betrieb untersuchen.
Wiederholen Sie die Analyse mit längerer Laufzeit, um zu sehen, ob sich Mittelwert und Leistung des Zeitfensters stabilisieren. Verringern Sie die maximale Schrittweite und vergleichen Sie Extremwerte und Effektivwert; die Abtastpunkte des Solvers sind im Allgemeinen nicht gleichmäßig verteilt, daher sind zeitgewichtete Berechnungen zu verwenden.
Ein arithmetischer Mittelwert aller Abtastwerte kann das Ergebnis zugunsten der Bereiche an den Flanken verzerren,
wo der Solver mehr Abtastwerte berechnet.

Verzerrte Wellenformen lassen sich nicht mit `peak/√2` vom Spitzenwert in den Effektivwert umrechnen.
Diese Formel gilt für eine Sinuswelle. Ebenso lässt sich aus der elektrischen Leistung eines Transistors nicht automatisch die Temperatur vorhersagen: Wärmewiderstand, Umgebungsbedingungen
und temperaturabhängige Modelle sind zusätzliche Informationen.

Erhöhen Sie RL auf 80 Ω und vergleichen Sie die Symmetrie der Wellenform, die Spannungsverstärkung und
die abgegebene Leistung. Ein größerer Spannungshub bedeutet nicht unbedingt mehr Leistung,
da sich auch der Lastwiderstand geändert hat.

## Schaltungsvorlagen herunterladen
{: #download-the-lesson-circuits}

Dieselben Beispiele sind bereits unter **Open Example** verfügbar. Für eine unabhängige Kopie laden Sie eine `.dzn`-Zeichnung herunter und öffnen Sie sie in TinyCAD über **File → Open**. Die zugehörige `.cir`-Datei enthält SPICE-Text zur Prüfung oder zur Verwendung in einem kompatiblen externen Simulator, ist aber keine TinyCAD-Zeichnung. Für neue XSPICE-Simulationen wird die Desktop-Version benötigt.

| Beispiel | Zeichnung | Netzliste |
| --- | --- | --- |
| amp-small-signal | [TinyCAD-Zeichnung](/v4/examples/simulation-tutorials/spice/amp-small-signal.dzn) | [SPICE-Text](/v4/examples/simulation-tutorials/spice/amp-small-signal.cir) |
| amp-clipping | [TinyCAD-Zeichnung](/v4/examples/simulation-tutorials/spice/amp-clipping.dzn) | [SPICE-Text](/v4/examples/simulation-tutorials/spice/amp-clipping.cir) |
