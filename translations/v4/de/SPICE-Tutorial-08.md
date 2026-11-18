---
layout: default
title: 8. Measuring amplifier gain and bandwidth
---
# 8. Verstärkung und Bandbreite eines Verstärkers messen
{: #measuring-amplifier-gain-and-bandwidth}

[Vorherige](/v4/SPICE-Tutorial-07/) · [Inhalt](/v4/Simulation-Tutorials/) · [Nächste](/v4/SPICE-Tutorial-09/)

Die Beispiele in diesem Kapitel werden mit TinyCAD mitgeliefert. Wählen Sie **Beispiel öffnen (Open Example) → SPICE tutorial**, wählen Sie das benannte Beispiel und anschließend **Zeichnung öffnen (Open Drawing)**. Ein Download ist nicht erforderlich.

Öffnen Sie **amp-ac**. Dies ist der neu erstellte Verstärker mit einer AC-
Amplitude von 1 an VIN und einem AC-Sweep von 1 Hz bis 100 MHz mit 60 Punkten pro Dekade.
Der große obere Frequenzbereich macht den Abfall des generischen Transistormodells sichtbar;
er belegt nicht, dass sich die ursprüngliche Hardware bei HF genau verhält.

Wählen Sie **Voltage gain (Spannungsverstärkung)**, die gespeicherte abgeleitete Spur OUT/IN. Zeigen Sie den Betrag in dB
und die Phase an. Halten Sie Knotenspannungen und dimensionslose Verstärkung in Ihren Notizen auseinander.

![Berechnete Verstärkung und Phase des Verstärkers](/v4/images/simulation-tutorials/spice/amp-ac-results.png)

## Lesen Sie das Ergebnis, bevor Sie es erklären
{: #read-the-result-before-explaining-it}

Bei RL = 8 Ω und einer elektrischen Teilung von R6 bei 0.5 beträgt die Referenzverstärkung bei 1 kHz
etwa **0.892 V/V** bzw. **−0.995 dB**, bei ungefähr invertierter Phase.
Der abgetastete Spitzenwert des Betrags liegt ebenfalls bei etwa 0.892. Die Halb-Leistungs-Schnittpunkte relativ
zu diesem Spitzenwert liegen nahe **24 Hz** und **2.9 MHz**; diese gerundeten Werte entsprechen
dem abgetasteten Sweep und dem gewählten generischen Modell.

Dies sind keine Schnittpunkte mit Einheitsverstärkung. Eine Bandbreite bei −3 dB wird relativ
zur Durchlassband- oder Spitzenverstärkung des Verstärkers gemessen, nicht notwendigerweise relativ zu 1 V/V. Bei der benannten Bandbreitenmessung in TinyCAD wählen Sie OUT und IN und setzen Sie die Referenzverstärkung auf `peak`, wenn Sie diese bandpassartige Antwort untersuchen. Eine Bandbreitenmessung
setzt voraus, dass beide Schnittpunkte innerhalb des erfassten Frequenzbereichs liegen.

## Warum die Gesamtspannungsverstärkung kleiner als eins ist
{: #why-the-overall-voltage-gain-is-below-one}

VIN wird vor dem Lautstärkepotentiometer gemessen. Die Spannung am Schleifer wird
durch die endliche Eingangsimpedanz des Verstärkers weiter reduziert. Q1 liefert anschließend eine invertierende
Spannungsverstärkung. Q2 treibt über C2 eine sehr niedrige Last von 8 Ω, und seine endliche Ausgangs-
impedanz verursacht zusätzliche Dämpfung. Das Gesamtverhältnis umfasst alle Stufen.

Vergleichen Sie BASE/IN, COLLECTOR/BASE und OUT/COLLECTOR als separate abgeleitete Verhältnisse.
Sie beantworten unterschiedliche Fragen. Eine Stufe kann Spannungsverstärkung liefern, während der
vollständige Signalweg vom Eingang zur Last eine Verstärkung kleiner als eins aufweist. Ein Emitterfolger kann
selbst bei einer Spannungsverstärkung kleiner als eins dennoch eine nützliche Stromverstärkung liefern.

## Ursachen der unteren und oberen Frequenzgrenzen finden
{: #find-the-causes-of-the-low--and-high-frequency-limits}

C1 und C2 sind Koppelkondensatoren in Reihe. Ihre Reaktanz nimmt bei niedrigen
Frequenzen zu, sodass sie das Signal dämpfen. Der wirksame Widerstand von C2 umfasst
sowohl die Last als auch die Ausgangsimpedanz der Stufe; nur `1/(2π × 8 Ω × C2)` zu verwenden,
beschreibt die belastete Schaltung nicht vollständig. Bei hohen Frequenzen verringern die Transistorkapazitäten
und die Transitzeit im Modell die Antwort und verändern die Phase.

Probieren Sie die folgenden kontrollierten Änderungen aus und stellen Sie nach jeder Änderung den ursprünglichen Zustand wieder her:

1. Ändern Sie RL von 8 Ω auf 80 Ω. Vergleichen Sie die Durchlassbandverstärkung und die untere Grenzfrequenz.
2. Verdoppeln Sie C2. Prüfen Sie, ob sich die untere Grenzfrequenz erwartungsgemäß verschiebt, falls C2
   maßgeblich ist; auch C1 und die Belastung können eine Rolle spielen.
3. Ändern Sie die elektrische Teilung von R6. Notieren Sie die Verstärkung von IN und die Verstärkung von BASE
   getrennt, damit die Dämpfung durch die Lautstärkeregelung nicht mit der Verstärkung der Transistorstufe verwechselt wird.
4. Erhöhen Sie die Punkte pro Dekade in der Nähe eines Schnittpunkts und prüfen Sie, ob sich die angegebene Grenzfrequenz
   stabilisiert hat, bevor Sie weitere Stellen angeben.

Die AC-Analyse sagt die Antwort auf eine hinreichend kleine Störung um den
Arbeitspunkt voraus. Sie begrenzt die Ausgangsamplitude nicht auf den verfügbaren Versorgungsspannungshub.
Im nächsten Kapitel wird ein endliches Transienteneingangssignal verwendet, um festzustellen, ab wann die Kleinsignal-
vorhersage die tatsächliche Signalform nicht mehr beschreibt.

## Übungsschaltungen herunterladen
{: #download-the-lesson-circuits}

Dieselben Beispiele sind bereits unter **Beispiel öffnen (Open Example)** verfügbar. Laden Sie für eine unabhängige Kopie eine `.dzn`-Zeichnung herunter und verwenden Sie in TinyCAD **Datei → Öffnen (File → Open)**. Die zugehörige `.cir`-Datei enthält SPICE-Text zur Prüfung oder für einen kompatiblen externen Simulator, ist aber keine TinyCAD-Zeichnung. Für neue Läufe von XSPICE-Schaltungen ist Desktop erforderlich.

| Beispiel | Zeichnung | Netzliste |
| --- | --- | --- |
| amp-ac | [TinyCAD-Zeichnung](/v4/examples/simulation-tutorials/spice/amp-ac.dzn) | [SPICE-Text](/v4/examples/simulation-tutorials/spice/amp-ac.cir) |
