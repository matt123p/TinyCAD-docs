---
layout: default
title: 1. XSPICE and digital simulation
---
# 1. XSPICE und digitale Simulation
{: #xspice-and-digital-simulation}

[So verwenden Sie die Tutorials](/v4/Tutorial-Start-Here/) · [Kursinhalt](/v4/Simulation-Tutorials/) · [Weiter: Gatter](/v4/XSPICE-Tutorial-02/)

Die Beispiele in diesem Kapitel sind in TinyCAD enthalten. Wählen Sie **Open Example → XSPICE and digital tutorial**, wählen Sie das benannte Beispiel aus und anschließend **Open Drawing**. Ein Download ist nicht erforderlich.

XSPICE erweitert ngspice um Code-Modelle und ein ereignisgesteuertes Simulationssystem.
Eine analoge Schaltung wird anhand von Spannungen und Strömen gelöst; ein ereignisgesteuertes digitales
Netzwerk propagiert Änderungen von Logikzuständen durch Funktionsmodelle. Die Mixed-Signal-
Simulation koordiniert beides. Dadurch lässt sich eine Logikfunktion möglicherweise wesentlich einfacher
simulieren als eine Implementierung auf Transistorebene, allerdings liefert dies nicht dieselben Informationen
über Versorgungsstrom, Transistorbelastung oder physikalisches Timing.

Verwenden Sie für diesen Kurs **TinyCAD Desktop**. Die enthaltene native Engine umfasst die
erforderlichen Code-Modelle. TinyCADs Browser-/WASM-Engine enthält kein XSPICE.
Die mitgelieferten Modelle sind in die Zeichnungen eingebettet, die ausführbaren Code-Modell-
Bibliotheken stammen jedoch weiterhin aus der Installation der nativen Engine.

[So implementiert TinyCAD SPICE](/v4/SPICE-Tutorial-11/) wird erläutert, wie die
Engines, Symbolddefinitionen und das Simulationsblatt zusammenwirken.

## Erster Durchlauf: ein ereignisgesteuerter Puffer
{: #first-run-an-event-driven-buffer}

Öffnen Sie **logic-buffer**. Führen Sie die gespeicherte transiente Simulation über 8 µs aus
und zeichnen Sie A und Y auf. A ist eine Wellenform von 0–5 V mit einer Periodendauer von 1 µs. Y folgt mit einer
kleinen Ausbreitungsverzögerung und endlichen Ausgangsflanken.

![XSPICE-Puffertestschaltung](/v4/images/simulation-tutorials/xspice/logic-buffer-circuit.png)
![Berechneter Puffer-Eingang und -Ausgang](/v4/images/simulation-tutorials/xspice/logic-buffer-results.png)

X1 ist eine eingebettete Subschaltung mit drei expliziten internen Stufen:

```text
Analogue A → adc_bridge → digital d_buffer → dac_bridge → analogue Y
```

Die Zeichnung zeigt bewusst analoge Anschlüsse: So kann TinyCADs gewöhnliches Diagrammsystem
Eingang und Ausgang in Volt darstellen. Innerhalb von X1 ist der Puffer ein echtes ereignisgesteuertes
XSPICE-Modell und kein Spannungsschwellwertausdruck, der ein digitales Gatter nur vorgibt.
Öffnen Sie die SPICE-Eigenschaften von X1, um die Stufen zu überprüfen.

## Bedeutung der Brücken
{: #what-the-bridges-mean}

Die ADC-Brücke interpretiert Eingangsspannungen bis zu 1 V als Low und Spannungen ab 3 V als High.
Der Bereich dazwischen ist undefiniert. Dies ist eine Schnittstelle zwischen Logikdomänen und kein
getakteter Mehrbit-ADC mit Auflösung und Quantisierungscode.

Die DAC-Brücke ordnet Low 0 V, High 5 V und undefiniertem Zustand zur Beobachtung 2,5 V zu.
Ihre Anstiegs- und Abfallzeiten betragen 5 ns. Ein Ausgang von 2,5 V in diesem Kurs
kann daher einen unbekannten digitalen Zustand darstellen; es handelt sich nicht unbedingt um ein gültiges
analoges Mittenspannungssignal. Diese Schwellenwerte und Spannungen sind Entscheidungen für das Tutorial,
keine Spezifikationen für ein bestimmtes TTL- oder CMOS-Bauelement.

Der ideale Ausgangstreiber der Brücke besitzt keinen modellierten Versorgungsanschluss. Berechnen Sie daraus
nicht den tatsächlichen Stromverbrauch eines Logik-ICs. Verwenden Sie zur Untersuchung der Leistung ein Modell
mit expliziter Versorgung und geeignetem Bauteilverhalten.

## Sinnvolle Aufteilung der Modellierungsdetails
{: #a-useful-division-of-modelling-detail}

Verwenden Sie ereignisgesteuerte Gatter zum Prüfen von Wahrheitstabellen, Taktfolgen und funktionalem
Timing. Verwenden Sie Transistor- oder Herstellermodelle für elektrische Belastung und Bauteilverhalten,
wenn diese Modelle den erforderlichen Effekt unterstützen. Verwenden Sie explizite Schnittstellen
beim Übergang zwischen analogen und digitalen Domänen. Ein optisch ähnliches Symbol
lässt nicht erkennen, welche Art von Modell es enthält.

Ändern Sie für ein erstes Experiment die Eingangsperiode von 1 µs auf 2 µs und führen Sie die Simulation erneut aus.
Die Wiederholfrequenz halbiert sich; die angegebene Ausbreitungsverzögerung des Modells sollte
im Wesentlichen unverändert bleiben. Periode und Ausbreitungsverzögerung sind voneinander unabhängige
Eigenschaften.

Referenzen: [Einführung in XSPICE](https://ngspice.sourceforge.io/xspice.html),
[offizielle XSPICE-Beispiele und HOWTO](https://ngspice.sourceforge.io/xspicehowto.html).

## Lektion-Schaltungen herunterladen
{: #download-the-lesson-circuits}

Dieselben Beispiele sind bereits unter **Open Example** verfügbar. Laden Sie für eine separate Kopie eine `.dzn`-Zeichnung herunter und verwenden Sie in TinyCAD **File → Open**. Die zugehörige `.cir`-Datei enthält SPICE-Text zur Überprüfung oder für einen kompatiblen externen Simulator, ist jedoch keine TinyCAD-Zeichnung. Für erneute Simulationsläufe von XSPICE-Schaltungen ist Desktop erforderlich.

| Beispiel | Zeichnung | Netzliste |
| --- | --- | --- |
| logic-buffer | [TinyCAD-Zeichnung](/v4/examples/simulation-tutorials/xspice/logic-buffer.dzn) | [SPICE-Text](/v4/examples/simulation-tutorials/xspice/logic-buffer.cir) |
