---
layout: default
title: 3. Choosing and configuring signal generators
---
# 3. Signalgeneratoren auswählen und konfigurieren
{: #choosing-and-configuring-signal-generators}

[Zurück](/v4/SPICE-Tutorial-02/) · [Inhalt](/v4/Simulation-Tutorials/) · [Weiter](/v4/SPICE-Tutorial-04/)

Die Beispiele in diesem Kapitel sind in TinyCAD enthalten. Wählen Sie **Open Example (Beispiel öffnen) → SPICE tutorial**, wählen Sie das gewünschte Beispiel aus und klicken Sie dann auf **Open Drawing (Zeichnung öffnen)**. Ein Download ist nicht erforderlich.

Ein Anregungssignal beschreibt, wodurch die Schaltung angesteuert wird. Wählen Sie auf dem Blatt „Circuit“ den Körper einer Quelle aus, um ihre Einstellungen zu öffnen. **Signal type (Signaltyp)** ändert die Wellenform und zeigt die zugehörigen Parameter an. Die Vorschau zeigt die programmierte Wellenform; die Simulation berechnet, was geschieht, wenn die Schaltung diese Quelle belastet.

Alle nachfolgend aufgeführten Zeichnungen sind für eine transiente Analyse über 5 ms vorbereitet. Jede Spannungsquelle treibt eine Last von 1 kΩ. Verwenden Sie sie, um jeweils eine Einstellung kennenzulernen, bevor Sie eine Wellenform auf eine komplexere Schaltung anwenden.

| Zeichnung | Gespeichertes Anregungssignal | Erwartetes Verhalten |
| --- | --- | --- |
| **source-dc** (DC) | 5 V | Konstante 5 V und 5 mA Laststrom |
| **source-sine** (Sinus) | 1 V Offset, 2 V Spitzenamplitude, 1 kHz | −1 bis +3 V, Periodendauer 1 ms |
| **source-pulse** (Impuls) | 0–5 V, Anstiegs-/Abfallzeit 10 µs, 300 µs Plateau, Periodendauer 1 ms | Wiederholte Impulse mit endlichen Flanken |
| **source-triangle** (Dreieck) | −1 bis +1 V, Periodendauer 1 ms | Linear ansteigende und abfallende Rampen |
| **source-pwl** (Stückweise linear) | 0 V bis 1 ms, Rampe auf 3 V bis 2 ms, Halten bis 3 ms, Abfall bis 4 ms | Programmierte Einschalt- und Ausschaltsequenz |
| **source-exponential** (Exponential) | 0–5 V, Anstieg beginnt bei 1 ms, Abfall beginnt bei 3 ms | Exponentielle Übergänge mit Zeitkonstanten von 300 µs und 500 µs |
| **source-fm** (FM) | Amplitude 1 V, Träger 5 kHz, Modulation 500 Hz, Modulationsindex 2 | Konstante Amplitude bei sich ändernder momentaner Frequenz |
| **source-current** (Stromimpuls) | 0–1 mA in eine 1-kΩ-Rückleitungslast | Mit der angegebenen Quellenausrichtung ungefähr 0 bis −1 V |


Dies sind Solver-Diagramme der bereitgestellten Dateien. Das Ergebnis der Stromquelle ist negativ, weil die Quelle Strom von OUT nach Masse zieht und der Widerstand den Rückstrompfad bildet. Drehen Sie die Quelle um, wenn eine positive Lastspannung benötigt wird. Eine ideale Stromquelle erzwingt den Strom; das Netzwerk bestimmt ihre Klemmenspannung. Sie verfügt über keine automatische Begrenzung der Compliance-Spannung.

## Video: Quelleinstellungen und Wellenformvorschau
{: #video-source-settings-and-waveform-preview}

Sinus-Offset, Spitzenamplitude und Frequenz ändern und anschließend die transiente Analyse erneut ausführen.

{% include video-player.html src="/v4/videos/simulation-tutorials/spice/source-settings.mp4" poster="/v4/videos/simulation-tutorials/spice/source-settings.jpg" caption="Quelleinstellungen und Wellenformvorschau." %}

[Video ansehen oder herunterladen](/v4/videos/simulation-tutorials/spice/source-settings.mp4).

### Schaltung und Referenzergebnisse
{: #circuit-and-reference-results}

![Gemessene Wellenformbeispiele](/v4/Images/simulation-tutorials/spice/source-waveforms.png)

## Amplitude, Offset und Zeitverhalten
{: #amplitude-offset-and-timing}

Für einen Sinus, `v(t) = offset + amplitude × sin(2πft + phase)`, bevor optionale Verzögerung und Dämpfung berücksichtigt werden. Die Amplitude ist ein **Spitzenwert**, kein Spitze-Spitze- oder Effektivwert. Ein Sinus mit 2 V Spitzenwert und ohne Offset hat 4 V Spitze-Spitze und 1,414 V Effektivwert. Bei einem Offset von 1 V beträgt sein gesamter Effektivwert `sqrt(1² + 2²/2) = 1.732 V`.

Die Impulsbreite beschreibt das Plateau; endliche Flanken beeinflussen die bei einem Schwellenwert gemessene Breite. Beim bereitgestellten Impuls beträgt die Dauer oberhalb von 2,5 V ungefähr 310 µs, was einem Tastgrad von etwa 31 % entspricht. Vermeiden Sie Flanken mit einer Dauer von null, wenn Sie eine analoge Schaltung untersuchen. Sie führen zu unbegrenzter Bandbreite und erschweren die numerische Berechnung, ohne einen realen Generator abzubilden.

Bei stückweise linearen Daten wird pro Zeile ein Wertepaar aus ansteigender Zeit und Wert angegeben. Sie eignen sich für Versorgungsrampen, Sensorprofile und nichtperiodische Testsequenzen. Eine Exponentialquelle erzwingt eine exponentielle Wellenform; sie fügt kein physisches RC-Netzwerk hinzu.

## Wechselstromanregung ist eine separate Einstellung
{: #ac-excitation-is-a-separate-setting}

**AC amplitude (AC-Amplitude)** und **AC phase (AC-Phase)** steuern die Wechselstrom-Frequenzganganalyse. Das Frequenzfeld des Sinussignals legt nicht den Frequenzbereich eines AC-Sweeps fest. Ebenso erzeugt eine AC-Amplitude von 1 V keinen transienten Sinus mit 1 V. Denken Sie an diese Unterschiede, wenn dieselbe Eingangsquelle für Arbeitspunkt-, AC- und transiente Analysen verwendet wird.

Eine ideale unabhängige Quelle hat als Spannungsquelle eine Ausgangsimpedanz von null und als Stromquelle eine unendliche Ausgangsimpedanz. TinyCADs **Lab Equipment (Laborausrüstung) → Function generator (Funktionsgenerator)** umfasst stattdessen einen konfigurierbaren Ausgangswiderstand (normalerweise 50 Ω). An einer angepassten 50-Ω-Last liegt die Hälfte der Leerlaufspannung des Generators an.

## Gesteuerte Quellen und praktische Anwendungen
{: #controlled-sources-and-practical-uses}

Das SPICE-Einfüge-Menü enthält außerdem eine spannungsgesteuerte Spannungsquelle und eine spannungsgesteuerte Stromquelle. Erstere implementiert `Vout = gain × Vcontrol`; Letztere implementiert `Iout = transconductance × Vcontrol`. Ihre Steuereingänge und Ausgangsanschlüsse sind getrennt. Öffnen Sie **controlled-source**, um eine sofort ausführbare spannungsgesteuerte Spannungsquelle mit einer Verstärkung von 2 zu verwenden. Ein Eingang mit 1 V Spitzenwert erzeugt an 1 kΩ einen Ausgang mit 2 V Spitzenwert. Das ideale Modell berücksichtigt weder Begrenzung noch Versorgungsleistung.

Gesteuerte Quellen können einen idealen Verstärker,
Wandler oder eine abhängige Last darstellen, erhalten jedoch keine Versorgungsspannungsgrenzen oder Bandbreitenbegrenzung, sofern das Modell diese nicht ausdrücklich enthält.

Ändern Sie zunächst nur die Sinusamplitude und anschließend nur den Offset. Sagen Sie Minimum, Maximum und Effektivwert voraus, bevor Sie die Simulation erneut ausführen. Verdoppeln Sie danach die Frequenz und halbieren Sie die maximale Zeitschrittweite, um zu prüfen, ob die dargestellte Wellenform weiterhin ausreichend aufgelöst ist.

Referenz: Die Quellensyntax und Wellenformdefinitionen sind im [ngspice-Handbuch](https://ngspice.sourceforge.io/docs.html) dokumentiert.

## Beispielschaltungen herunterladen
{: #download-the-lesson-circuits}

Dieselben Beispiele sind bereits unter **Open Example (Beispiel öffnen)** verfügbar. Laden Sie für eine separate Kopie eine `.dzn`-Zeichnung herunter und wählen Sie in TinyCAD **File (Datei) → Open (Öffnen)**. Die zugehörige `.cir`-Datei ist SPICE-Text zur Einsicht oder für einen kompatiblen externen Simulator und keine TinyCAD-Zeichnung. Für neue Läufe von XSPICE-Schaltungen ist Desktop erforderlich.

| Beispiel | Zeichnung | Netzliste |
| --- | --- | --- |
| source-dc | [TinyCAD-Zeichnung](/v4/examples/simulation-tutorials/spice/source-dc.dzn) | [SPICE-Text](/v4/examples/simulation-tutorials/spice/source-dc.cir) |
| source-current | [TinyCAD-Zeichnung](/v4/examples/simulation-tutorials/spice/source-current.dzn) | [SPICE-Text](/v4/examples/simulation-tutorials/spice/source-current.cir) |
| source-sine | [TinyCAD-Zeichnung](/v4/examples/simulation-tutorials/spice/source-sine.dzn) | [SPICE-Text](/v4/examples/simulation-tutorials/spice/source-sine.cir) |
| source-pulse | [TinyCAD-Zeichnung](/v4/examples/simulation-tutorials/spice/source-pulse.dzn) | [SPICE-Text](/v4/examples/simulation-tutorials/spice/source-pulse.cir) |
| source-triangle | [TinyCAD-Zeichnung](/v4/examples/simulation-tutorials/spice/source-triangle.dzn) | [SPICE-Text](/v4/examples/simulation-tutorials/spice/source-triangle.cir) |
| source-pwl | [TinyCAD-Zeichnung](/v4/examples/simulation-tutorials/spice/source-pwl.dzn) | [SPICE-Text](/v4/examples/simulation-tutorials/spice/source-pwl.cir) |
| source-exponential | [TinyCAD-Zeichnung](/v4/examples/simulation-tutorials/spice/source-exponential.dzn) | [SPICE-Text](/v4/examples/simulation-tutorials/spice/source-exponential.cir) |
| source-fm | [TinyCAD-Zeichnung](/v4/examples/simulation-tutorials/spice/source-fm.dzn) | [SPICE-Text](/v4/examples/simulation-tutorials/spice/source-fm.cir) |
| controlled-source | [TinyCAD-Zeichnung](/v4/examples/simulation-tutorials/spice/controlled-source.dzn) | [SPICE-Text](/v4/examples/simulation-tutorials/spice/controlled-source.cir) |
