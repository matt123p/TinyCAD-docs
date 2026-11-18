---
layout: default
title: "10. Design investigations: sweeps, tolerances, noise and diagnosis"
---
# 10. Untersuchungen des Entwurfs: Sweeps, Toleranzen, Rauschen und Diagnose
{: #design-investigations-sweeps-tolerances-noise-and-diagnosis}

[Zurück](/v4/SPICE-Tutorial-09/) · [Inhalt](/v4/Simulation-Tutorials/) · [Weiter: SPICE in TinyCAD](/v4/SPICE-Tutorial-11/)

Die Beispiele in diesem Kapitel sind in TinyCAD enthalten. Wählen Sie **Open Example (Beispiel öffnen) → SPICE tutorial**, wählen Sie das benannte Beispiel und anschließend **Open Drawing (Zeichnung öffnen)**. Ein Download ist nicht erforderlich.

Ein aussagekräftiger Simulationsbericht dokumentiert die Fragestellung, die Version der Schaltung/des Modells,
die Analyse, das Anregungssignal, das Messfenster und das Akzeptanzkriterium. Ein überzeugendes
Diagramm ohne diese Angaben lässt sich nur schwer reproduzieren.

## Parametersweeps und Toleranzen
{: #parameter-sweeps-and-tolerances}

Kehren Sie zu **rc-ac** zurück. Führen Sie unter **Tune / sweep (Abstimmen / Sweep)** die vorbereiteten
R1-Werte 1 kΩ, 2,2 kΩ und 4,7 kΩ aus. Die erwarteten Grenzfrequenzen betragen 159,15, 72,34 bzw.
33,86 Hz. Dies ist ein Parametersweep: Er zeigt, wie sich gezielte Bauteilwerte auf das Verhalten
auswirken. Er unterscheidet sich vom **DC sweep (DC-Sweep)** in Kapitel 2, bei dem sich der DC-Wert
einer unabhängigen Quelle während einer Analyse ändert.

Verwenden Sie für Toleranzen **Analysis lab (Analyselabor) → Tolerance studies (Toleranzuntersuchungen)**. Definieren Sie Bindungen für R1 und C1,
wählen Sie eine Verteilung und einen Seed und fügen Sie eine Grenzfrequenzanforderung hinzu. Bei unabhängigen, begrenzten Werten von ±5 % ergeben die äußersten RC-Eckpunkte ungefähr
144,36–176,35 Hz. Eine Monte-Carlo-Stichprobe erreicht nicht unbedingt einen der beiden Eckpunkte.
Die Standardabweichung einer Normalverteilung ist keine feste ±-Grenze. Dokumentieren Sie,
welche Konvention Sie gewählt haben und ob Variablen korreliert sind.

TinyCAD kann Testfallbedingungen sowie Messungs- und Anforderungsdefinitionen speichern.
Verwenden Sie **Apply (Übernehmen)** nur, wenn Sie vorübergehende Anpassungen in tatsächliche Änderungen am Schaltplan
überführen möchten. Speichern Sie beim Ändern der Topologie oder des Modelltexts eine separate Schaltungsversion;
ein Erfassungs-Hash ist eine Kennung, keine wiederherstellbare Schaltungsversion.

## Rauschen: eine andere Art von Ausgabe
{: #noise-a-different-kind-of-output}

Öffnen Sie **rc-noise**. Es berechnet das Ausgangsrauschen an OUT,
bezogen auf die unabhängige Eingangsquelle V1, von 1 Hz bis 100 kHz bei 27 °C.
Die ideale Quelle ist rauschfrei; R1 trägt thermisches Rauschen bei, das durch C1 gefiltert wird.

![Berechnete spektrale Dichte des RC-Ausgangsrauschens](/v4/images/simulation-tutorials/spice/rc-noise-results.png)

Das gesamte Ausgangsrauschen beträgt in diesem Frequenzband ungefähr **64,2 nV RMS**. Für einen
idealen RC-Kreis, integriert von null bis unendlicher Frequenz, beträgt das mittlere Rauschquadrat des Kondensators `kT/C`; bei 300,15 K und 1 µF ergibt sich etwa 64,4 nV RMS.
Das endliche Simulationsband erklärt den kleinen Unterschied. Die spektrale Dichte
hat die Einheit V/√Hz; ihr Integral wird aus der quadrierten Dichte und der Frequenzbandbreite
gebildet und anschließend die Quadratwurzel gezogen. Sie ist nicht die arithmetische Summe der angezeigten
Dichtewerte. Der eingangsbezogene Gesamtwert ist ein anderes Ergebnis.

## Übertragungsfunktionen und Pole
{: #transfer-functions-and-poles}

Öffnen Sie **rc-tf**. Das DC-Kleinsignal-Übertragungsergebnis beträgt
1 V/V, der Ausgangswiderstand 1 kΩ und der Eingangswiderstand ist praktisch unendlich,
da der Kondensator bei DC offen ist. Ein sehr großer angezeigter Eingangswiderstand wie `1e20` stellt ein numerisches Ergebnis für einen offenen Stromkreis dar und keinen gemessenen
physischen Widerstand von 100 Exaohm.

Öffnen Sie **rc-pz**. Der Pol liegt ungefähr bei **−1000 rad/s**,
entsprechend `s = −1/(RC)`. Teilen Sie seinen Betrag durch `2π`, um 159,15 Hz zu erhalten. Ein Pol
in der linken Halbebene der komplexen s-Ebene steht in diesem linearen System für Abklingen.
Das Fehlen einer endlichen Nullstelle ist bei dieser Tiefpass-Übertragungsfunktion erster Ordnung zu erwarten.

Diese Analysen arbeiten mit dem linearisierten Modell. Sie ersetzen keine Transiententests
auf Begrenzung, Schalten oder Anlauf. Eine beliebige Verstärkung zwischen Ausgang und Eingang ist außerdem
nicht dasselbe wie die Schleifenverstärkung einer Rückkopplung; Stabilitätsmessungen erfordern eine gezielte
Schleifentestkonfiguration.

## Praktische Messgrößenübersicht
{: #a-practical-measurement-menu}

| Aufgabe | Geeignete Größen |
| --- | --- |
| Sensoraufbereitung | Verstärkung, Offset, Rauschen, Grenzfrequenz, Einschwingzeit |
| Impulsschnittstelle | Anstiegs-/Abfallzeit, Verzögerung, Impulsbreite, Tastgrad |
| Verstärker | Arbeitspunkt, Verstärkung/Phase, Bandbreite, RMS-Ausgang, Leistung, Begrenzung |
| Leistungsstufe | Restwelligkeit, Spitzenstrom, mittlere Leistung, Energie, Wirkungsgrad |
| Bauteilvariation | Sweep-Überlagerungen, beobachtete Extremwerte, Anforderungsergebnisse |

TinyCAD bietet unter **Lab Equipment (Laborausrüstung)** außerdem ein virtuelles Oszilloskop, ein Multimeter, einen Funktionsgenerator und
ein strombegrenztes Labornetzteil. Deren Impedanzen und Grenzwerte sind wichtig: Der Funktionsgenerator hat beispielsweise normalerweise einen Ausgangswiderstand von 50 Ω. Sie bieten einen weiteren Arbeitsablauf für dieselben elektrischen Fragestellungen.

## Fehlerhafte oder unplausible Läufe diagnostizieren
{: #diagnose-a-failed-or-implausible-run}

Prüfen Sie zuerst Masse, unbeabsichtigte Kurzschlüsse und frei schwebende Knoten. Überprüfen Sie die
Pinbelegung der Bauteile und die Modellnamen. Vergewissern Sie sich bei AC, dass die AC-Amplitude der unabhängigen Quelle korrekt ist;
bei Transienten müssen Dauer, maximaler Zeitschritt und endliche Signalflanken stimmen. Lesen Sie
das Solver-Protokoll und prüfen Sie, ob der angeforderte Endzeitpunkt erreicht wurde. Eine unvollständige
Signalform ist kein abgeschlossenes Ergebnis.

Probieren Sie einen einfacheren Arbeitspunkt- oder Einzelstufentest, bevor Sie numerische
Einstellungen ändern. Dokumentieren Sie jeden hinzugefügten Ableitwiderstand, Quellenwiderstand oder jede parasitäre
Kapazität: Dadurch ändert sich die Schaltung, auch wenn die Konvergenz verbessert wird. Exportieren Sie CSV,
wenn eine spezielle Berechnung erforderlich ist, und behalten Sie Einheiten und komplexe Spalten bei.

Weiterführende Informationen: Das [Tutorial zur ngspice-Steuerungssprache](https://ngspice.sourceforge.io/ngspice-control-language-tutorial.html)
zeigt die Automatisierung über die Befehlszeile. Das Dokumentmodell von TinyCAD führt absichtlich keine beliebigen `.control`-Skripte aus; verwenden Sie die unterstützten Analyse- und Untersuchungssteuerungen
oder exportieren Sie eine Netzliste für einen separaten ngspice-Arbeitsablauf.

## Übungsschaltungen herunterladen
{: #download-the-lesson-circuits}

Dieselben Beispiele sind bereits unter **Open Example (Beispiel öffnen)** verfügbar. Laden Sie für eine unabhängige Kopie eine `.dzn`-Zeichnung herunter und verwenden Sie in TinyCAD **File (Datei) → Open (Öffnen)**. Die zugehörige `.cir`-Datei enthält SPICE-Text zur Ansicht oder für einen kompatiblen externen Simulator, keine TinyCAD-Zeichnung. XSPICE-Schaltungen erfordern Desktop für neue Simulationsläufe.

| Beispiel | Zeichnung | Netzliste |
| --- | --- | --- |
| rc-ac | [TinyCAD-Zeichnung](/v4/examples/simulation-tutorials/spice/rc-ac.dzn) | [SPICE-Text](/v4/examples/simulation-tutorials/spice/rc-ac.cir) |
| dc-sweep | [TinyCAD-Zeichnung](/v4/examples/simulation-tutorials/spice/dc-sweep.dzn) | [SPICE-Text](/v4/examples/simulation-tutorials/spice/dc-sweep.cir) |
| rc-noise | [TinyCAD-Zeichnung](/v4/examples/simulation-tutorials/spice/rc-noise.dzn) | [SPICE-Text](/v4/examples/simulation-tutorials/spice/rc-noise.cir) |
| rc-tf | [TinyCAD-Zeichnung](/v4/examples/simulation-tutorials/spice/rc-tf.dzn) | [SPICE-Text](/v4/examples/simulation-tutorials/spice/rc-tf.cir) |
| rc-pz | [TinyCAD-Zeichnung](/v4/examples/simulation-tutorials/spice/rc-pz.dzn) | [SPICE-Text](/v4/examples/simulation-tutorials/spice/rc-pz.cir) |
