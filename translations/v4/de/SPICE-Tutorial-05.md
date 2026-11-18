---
layout: default
title: "5. AC analysis: gain, phase and an RC filter"
---
# 5. Wechselstromanalyse: Verstärkung, Phase und ein RC-Filter
{: #ac-analysis-gain-phase-and-an-rc-filter}

[Zurück](/v4/SPICE-Tutorial-04/) · [Inhalt](/v4/Simulation-Tutorials/) · [Weiter](/v4/SPICE-Tutorial-06/)

Die Beispiele in diesem Kapitel sind in TinyCAD enthalten. Wählen Sie **Beispiel öffnen (Open Example) → SPICE-Tutorial (SPICE tutorial)**, wählen Sie das angegebene Beispiel aus und anschließend **Zeichnung öffnen (Open Drawing)**. Ein Download ist nicht erforderlich.

Öffnen Sie **rc-ac**. Es verwendet dasselbe 1-kΩ-/1-µF-Netzwerk wie die
Ladelektion, stellt aber eine andere Frage: Wie viel von einem kleinen sinusförmigen
Signal erreicht OUT bei jeder Frequenz?

Die Quelle hat eine Wechselstromamplitude von 1 V. Der gespeicherte Wechselstrom-Sweep reicht von 1 Hz bis 100 kHz
mit 100 Punkten pro Dekade. Führen Sie ihn aus, wählen Sie die abgeleitete Spur **OUT / IN** aus und
zeigen Sie Betrag, dB und Phase an. Verwenden Sie eine logarithmische Frequenzachse.


## Video: Wechselstromverhalten und Grenzfrequenz
{: #video-ac-response-and-cutoff}

Wechselstromeinstellungen prüfen, die Grenzfrequenz ablesen und zwischen Betrag, Dezibel und Phase umschalten.

{% include video-player.html src="/v4/videos/simulation-tutorials/spice/ac-response.mp4" poster="/v4/videos/simulation-tutorials/spice/ac-response.jpg" caption="Wechselstromverhalten und Grenzfrequenz." %}

[Video ansehen oder herunterladen](/v4/videos/simulation-tutorials/spice/ac-response.mp4).

### Schaltung und Referenzergebnisse
{: #circuit-and-reference-results}

![Berechneter Betrags- und Phasengang](/v4/images/simulation-tutorials/spice/rc-ac-results.png)

## Das komplexe Ergebnis interpretieren
{: #interpret-the-complex-result}

Die Wechselstromanalyse linearisiert die Schaltung am Gleichstrom-Arbeitspunkt und berechnet
komplexe Amplituden. Es handelt sich nicht um eine Transientensimulation, in der ein Sinusgenerator
die Frequenz allmählich ändert. Für diese Schaltung gilt

`H(jω) = VOUT / VIN = 1 / (1 + jωRC)`.

Der Betrag gibt das Amplitudenverhältnis an; die Phase gibt die relative zeitliche Lage
innerhalb einer Periode an. Hier hinkt der Ausgang dem Eingang hinterher. Die Grenzfrequenz beträgt
`fc = 1 / (2πRC) = 159.155 Hz`. An der Grenzfrequenz beträgt der Betrag `1/√2 = 0.7071`
und die Phase −45°. Die Spannungsverstärkung in Dezibel ist `20 log10(|H|)`, was
an der Grenzfrequenz −3,0103 dB ergibt.

| Frequenz | Ungefähre Verstärkung | Ungefähre Phase |
| --- | --- | --- |
| 10 Hz | 0,9980, −0,017 dB | −3,60° |
| 159,155 Hz | 0,7071, −3,01 dB | −45° |
| 1 kHz | 0,1572, −16,07 dB | −80,96° |

Die gespeicherte Messung **Grenzfrequenz (Cutoff)** verwendet OUT relativ zu IN und eine Referenzverstärkung
von 1. Sie sollte ungefähr 159,15 Hz ergeben. Durch die Interpolation zwischen den Abtastpunkten können
sich die letzten Stellen vom Ergebnis der Gleichung unterscheiden.

## Drei häufige Fehler vermeiden
{: #avoid-three-common-mistakes}

Erstens: Nur den Realteil darzustellen, bedeutet nicht, die Amplitude darzustellen. Verwenden Sie für ein
komplexes Ergebnis den Betrag oder dB. Zweitens ist eine Verstärkung von −3 dB kein Spannungsverhältnis
von −3: Dezibel geben einen positiven Betrag logarithmisch an. Drittens gehört das Minuszeichen bei einer reellen invertierenden Verstärkung zur Phase, nicht zu einem negativen
Betrag.

Mit einer Wechselstromamplitude von 1 ist die Ausgangsspannung in diesem einfachen
Fall numerisch gleich der Verstärkung. Die Darstellung von OUT/IN ist dennoch robuster: Sie gibt die Verstärkung weiterhin an,
wenn sich die Eingangsamplitude ändert. Das Wechselstromergebnis eines nichtlinearen Verstärkers bleibt ein
Kleinsignal-Ergebnis, auch wenn die Wechselstromamplitude auf einen großen Wert eingestellt ist. Es sagt weder
Übersteuerung noch die physikalische Ausgangsleistung voraus.

## Bauteilwerte vergleichen
{: #compare-component-choices}

Unter **Abstimmen / Sweep (Tune / sweep)** bietet die mitgelieferte Steuerung für R1 einen Listensweep mit 1 kΩ,
2,2 kΩ und 4,7 kΩ. Führen Sie den Sweep aus und vergleichen Sie die Kurven und die Tabelle der Grenzfrequenzen.
Die erwarteten Grenzfrequenzen betragen 159,15, 72,34 und 33,86 Hz. Vorübergehendes Abstimmen ändert den gespeicherten Widerstand nicht,
bis **Anwenden (Apply)** verwendet wird.

Ein RC-Filter kann Schaltwelligkeit vor einem ADC unterdrücken oder hochfrequentes Rauschen eines Sensors verringern.
Es verlangsamt jedoch auch das gewünschte Signal. Vergleichen Sie den Frequenzgang dieses Kapitels mit der längeren Ladezeit,
die im vorherigen Kapitel durch Erhöhen von R1 verursacht wurde: Es sind zwei Betrachtungsweisen desselben physikalischen Zielkonflikts.

Referenz: Das [Wechselstrombeispiel im ngspice-Einsteigertutorial](https://ngspice.sourceforge.io/ngspice-tutorial.html)
unterscheidet ebenfalls die Wechselstromanregung von der Transienten-Quellenwellenform.

## Lektion-Schaltungen herunterladen
{: #download-the-lesson-circuits}

Dieselben Beispiele sind bereits unter **Beispiel öffnen (Open Example)** verfügbar. Für eine separate Kopie laden Sie eine `.dzn`-Zeichnung herunter und verwenden Sie **Datei (File) → Öffnen (Open)** in TinyCAD. Die zugehörige `.cir`-Datei ist SPICE-Text zur Ansicht oder für einen kompatiblen externen Simulator, keine TinyCAD-Zeichnung. Für neue Simulationsläufe mit XSPICE-Schaltungen ist Desktop erforderlich.

| Beispiel | Zeichnung | Netzliste |
| --- | --- | --- |
| rc-ac | [TinyCAD-Zeichnung](/v4/examples/simulation-tutorials/spice/rc-ac.dzn) | [SPICE-Text](/v4/examples/simulation-tutorials/spice/rc-ac.cir) |
