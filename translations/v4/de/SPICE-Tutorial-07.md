---
layout: default
title: 7. Rebuilding AMP.DSN and checking its bias
---
# 7. AMP.DSN neu aufbauen und seine Arbeitspunkte prüfen
{: #rebuilding-ampdsn-and-checking-its-bias}

[Zurück](/v4/SPICE-Tutorial-06/) · [Inhalt](/v4/Simulation-Tutorials/) · [Weiter](/v4/SPICE-Tutorial-08/)

Die Beispiele in diesem Kapitel sind in TinyCAD enthalten. Wählen Sie **Open Example → SPICE tutorial**, wählen Sie das benannte Beispiel aus und anschließend **Open Drawing**. Ein Download ist nicht erforderlich.

Öffnen Sie **amp-bias**. Damit wird die Topologie von
`D:\Projects\TinyCAD\examples\AMP.DSN` neu aufgebaut, mit dem Titel **Transistor Amplifier** und
im Original Matt Pyne, 1995 zugeschrieben. Die Schaltung verwendet Bauteile aus der
SPICE-Essentials-Bibliothek von TinyCAD sowie konfigurierbare Simulationsquellen.

![Neu aufgebautes AMP.DSN mit Simulationsbauteilen](/v4/images/simulation-tutorials/spice/amp-bias-circuit.png)

## Was beibehalten und was modelliert wurde
{: #what-was-preserved-and-what-was-modelled}

| Originalteil | Neu aufgebautes Teil und Funktion |
| --- | --- |
| R1, 470 Ω, Kennzeichnung 0,5 W | 470-Ω-Emitterwiderstand von Q2; die Belastbarkeit ist keine simulierte thermische Grenze |
| R2, 1 kΩ | Kollektorwiderstand von Q1 |
| R3, 100 kΩ; R4, 10 kΩ | Basisspannungsteiler von Q1 |
| R5, 220 Ω | Emitter-Gegenkopplungswiderstand von Q1 |
| R6, 10-kΩ-Logarithmuspotentiometer | 10-kΩ-Potentiometer, elektrische Aufteilung `Wiper = 0.5` |
| C1, 100 µF; C2, 470 µF | Ideale Ein- und Ausgangskoppelkondensatoren |
| Q1, ZTX650; Q2, BC140 | Beide verwenden das eingebettete generische `TC_NPN`-Modell |
| J1, Phono-Eingang | Konfigurierbare Quelle VIN, bezogen auf Knoten 0 |
| T1, 8-Ω-Lautsprecher | RL = 8 Ω, eine ohmsche elektrische Last |
| 12-V-/0-V-Schienen | Unabhängige 12-V-Quelle VCC und SPICE-Knoten 0 |

Der ursprüngliche logarithmische mechanische Kennlinienverlauf legt keine eindeutige
Widerstandsaufteilung für jede Stellung der Achse fest. Hier bedeutet 0,5 eine **elektrische** Aufteilung von 5 kΩ/5 kΩ,
nicht eine Aussage über die Mittelstellung des ursprünglichen Drehknopfs. Der Quellenwiderstand
von VIN ist ideal. Das Lautsprechermodell berücksichtigt weder Induktivität noch Resonanz oder akustischen
Wirkungsgrad; daraus lässt sich kein Schalldruck vorhersagen.

Beide Transistorinstanzen betten das Bibliotheksmodell ein:

```spice
.model TC_NPN NPN(Is=1e-14 Bf=200 Vaf=100 Cje=10p Cjc=5p Tf=500p)
```

Dies sind illustrative Modellparameter, keine Herstellermodelle für ZTX650 oder
BC140. Ihre Verwendung ist beabsichtigt und in den SPICE-Eigenschaften des Bauteils sichtbar.
Für eine genaue Leistungsbewertung dieser Originalbauteile wären validierte Bauteilmodelle und
für einen Hardwarevergleich Angaben zu parasitären Effekten und thermischem Verhalten erforderlich.

## Die beiden Stufen verstehen
{: #understand-the-two-stages}

Q1 ist eine Emitterschaltung. Seine Kollektorspannung sinkt, wenn der Kollektorstrom
steigt, daher invertiert sie das Signal. R5 sorgt für Emittergegenkopplung: Die negative Rückkopplung
verringert die Verstärkungsempfindlichkeit und verbessert die Linearität. R2 wandelt Stromänderungen
in Kollektorspannungsänderungen um.

Q2 ist ein Emitterfolger. Sein Kollektor ist mit VCC verbunden und sein Emitter
steuert R1 sowie über C2 die Lautsprecherlast an. Er liefert Stromverstärkung, statt
zusätzlich eine große Spannungsverstärkung bereitzustellen. C1 und C2 entkoppeln die Gleichspannungs-Arbeitspunkte zwischen
den Stufen und den externen Anschlüssen.

## Vor dem Anlegen eines Signals den Arbeitspunkt berechnen
{: #run-operating-point-before-applying-a-signal}

Die Referenzwerte bei 27 °C sind:

| Größe | Referenzwert |
| --- | --- |
| BASE, Basis von Q1 | 1.0235 V |
| Emitter von Q1, zwischen Q1 und R5 | 0.3582 V |
| COLLECTOR, Kollektor von Q1 / Basis von Q2 | 10.2800 V |
| EMITTER, Emitter von Q2 | 9.5476 V |
| OUT, hinter C2 | 0 V |
| Von VCC gelieferter Strom | 22.044 mA |
| Versorgungsleistung | 264.533 mW |

OUT liegt bei Gleichspannung auf null, weil C2 die Gleichspannung am Emitter sperrt und RL
den Ausgang mit Masse verbindet. Ein Ausgangsarbeitspunkt von null bedeutet daher nicht, dass der Verstärker
unversorgt ist. Der Emitterstrom von Q1 beträgt ungefähr `0.3582 / 220 = 1.628 mA`;
der Ruhestrom durch den Emitterwiderstand von Q2 beträgt `9.5476 / 470 = 20.31 mA`.

Der Arbeitspunkt der Ausgangsstufe liegt nahe an der 12-V-Schiene, und der Ruhestrom
ist für 8 Ω gering. Das deutet bereits auf asymmetrische Grenzen für die Signalaussteuerung hin.
Die nächsten beiden Kapitel überprüfen diese Vorhersage, statt anzunehmen, dass eine als Verstärker
bezeichnete Schaltung eine hohe Spannungsverstärkung oder eine große Audioleistung haben muss.

## Die Lernschaltungen herunterladen
{: #download-the-lesson-circuits}

Dieselben Beispiele sind bereits unter **Open Example** verfügbar. Laden Sie für eine unabhängige Kopie eine `.dzn`-Zeichnung herunter und öffnen Sie sie in TinyCAD mit **File → Open**. Die zugehörige Datei `.cir` enthält SPICE-Text zur Durchsicht oder für einen kompatiblen externen Simulator; sie ist keine TinyCAD-Zeichnung. Für neue Simulationen von XSPICE-Schaltungen ist Desktop erforderlich.

| Beispiel | Zeichnung | Netzliste |
| --- | --- | --- |
| amp-bias | [TinyCAD-Zeichnung](/v4/examples/simulation-tutorials/spice/amp-bias.dzn) | [SPICE-Text](/v4/examples/simulation-tutorials/spice/amp-bias.cir) |
