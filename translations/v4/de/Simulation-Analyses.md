---
layout: default
---
# Simulationsanalysen und Einstellungen
{: #simulation-analyses-and-settings}

Wählen Sie eine Analyse im Tab **Setup** eines [Simulationsblatts](../Simulation/) aus. Wählen Sie sie entsprechend der Frage aus, die Sie beantworten möchten. Eine Sinuskurve im Zeitbereich und ein AC-Frequenzdurchlauf sind unterschiedliche Experimente, auch wenn sie dasselbe Quellensymbol verwenden.

| Analyse | Fragestellung | Hauptausgabe |
| --- | --- | --- |
| **Arbeitspunkt** | Wie lauten die DC-Bias-Spannungen und -Ströme? | Skalare Werte |
| **Transient** | Was geschieht nach einer Änderung oder während wiederholter Zyklen? | Signale über der Zeit |
| **AC** | Wie ändert sich ein Kleinsignal mit der Frequenz? | Komplexe Signale über der Frequenz |
| **DC-Durchlauf** | Wie ändert sich das DC-Verhalten, wenn eine unabhängige Quelle variiert wird? | Signale über dem Quellenwert |
| **Rauschen** | Welches Rauschen erreicht den ausgewählten Ausgang? | Spektrale und integrierte Rauschdiagramme |
| **Übertragungsfunktion** | Wie lautet die DC-Kleinsignalübertragung einer benannten Quelle? | Verstärkung und Eingangs-/Ausgangswiderstand |
| **Pol-Nullstellen** | Wo liegen die Pole und Nullstellen der konfigurierten Übertragung? | Komplexe Pol-/Nullstellen-Ergebnisse |

## Arbeitspunkt
{: #operating-point}

Die Arbeitspunktanalyse ermittelt eine stationäre DC-Lösung. Ideale Kondensatoren sind bei DC Unterbrechungen, ideale Induktivitäten Kurzschlüsse. Nichtlineare Bauteile wie Dioden und Transistoren werden bei ihren Bias-Bedingungen berechnet. Führen Sie diese Analyse durch, bevor Sie den Frequenzgang eines Transistorverstärkers untersuchen: Ein falsch eingestellter Transistor wird um den falschen Zustand linearisiert.

Verwenden Sie **Daten** für Knotenspannungen und Zweigströme. Die Spannung bezieht sich auf Masse 0. Die Stromrichtung folgt der festgelegten Reihenfolge der Anschlüsse des Bauteils; ein negativer Versorgungsstrom kann einfach bedeuten, dass die Versorgung Leistung abgibt. Das [DC-Tutorial](../SPICE-Tutorial-02/) erläutert Spannung, Strom und Leistung.

![Skalare Spannungs- und Stromergebnisse des aktuellen Arbeitspunktlaufs des Spannungsteilers](../images/simulation/simulation-data.png)

## Transient: Verhalten über die Zeit
{: #transient-behaviour-over-time}

Legen Sie **Dauer** so fest, dass das Ereignis und der Teil der Antwort, den Sie messen möchten, vollständig erfasst werden. Legen Sie **Maximaler Zeitschritt** klein genug fest, um das schnellste relevante Merkmal aufzulösen. Bei einem Impuls kann das dessen Flanke statt seiner Wiederholungsperiode sein. Eine glatt wirkende Anzeige kann Übergänge, die der Solver nicht aufgelöst hat, nicht nachträglich rekonstruieren.

Für einen ladenden RC-Kreis gilt die Zeitkonstante `τ = R × C`. Etwa fünf Zeitkonstanten zeigen den größten Teil des Einschwingvorgangs eines Systems erster Ordnung. Simulieren Sie für die Bestimmung von Welligkeit oder Effektivwert genügend Zyklen, bis ein stationärer Zustand erreicht ist, und messen Sie ein späteres Zeitfenster, statt unbeabsichtigt den Einschaltvorgang einzubeziehen.

Der Solver verwendet adaptive Zeitschritte. Der Maximalwert begrenzt die Schrittweite, garantiert aber kein gleichmäßig verteiltes Abtastraster. Messalgorithmen berücksichtigen die tatsächlichen Abtastzeitpunkte. Das Zoomen im Diagramm ändert die Anzeige, nicht den Abtastzeitschritt.

Standardmäßig ermittelt ein transienter Lauf zunächst einen DC-Arbeitspunkt. Die Option für Anfangsbedingungen, mit der dieser Schritt übersprungen wird, entspricht SPICE **UIC**. Verwenden Sie sie gezielt, wenn der vorgegebene Anfangszustand Teil des Experiments ist; sie ist keine allgemeine Abhilfe für einen falsch angeschlossenen Schaltkreis. Siehe [RC-Ladevorgang](../SPICE-Tutorial-04/) und [Gleichrichtung und Welligkeit](../SPICE-Tutorial-06/).

## AC: Kleinsignal-Frequenzgang
{: #ac-small-signal-frequency-response}

Die AC-Analyse ermittelt zunächst den Arbeitspunkt, linearisiert dort nichtlineare Bauteile und berechnet die Antwort auf eine kleine sinusförmige Störung. Sie durchläuft **nicht** mit einer großen transienten Sinuskurve den Begrenzungsbereich. Verwenden Sie für Begrenzung, Verzerrung und große Signalauslenkungen die transiente Analyse.

Legen Sie Start- und Endfrequenz sowie die Anzahl der Punkte pro Dekade fest. Ein logarithmischer Durchlauf ist nützlich, wenn mehrere Größenordnungen untersucht werden. Erhöhen Sie die Frequenzauflösung im Bereich einer schmalen Resonanz oder eng beieinanderliegender Knickfrequenzen.

Legen Sie **AC-Amplitude** und Phase der Quelle getrennt von den Einstellungen ihrer transienten Wellenform fest. Eine AC-Amplitude von **1 V** bei einer Phase von **0°** erleichtert die Interpretation einer Spannungsübertragungsfunktion mit einem Eingang. Eine transiente Sinusamplitude allein aktiviert keine AC-Anregung. Bei einem allgemeinen Eingang berechnen Sie das komplexe Verhältnis `V(out) / V(in)`; die Ausgangsspannung allein ist nicht immer die Verstärkung.

![AC-Durchlaufeinstellungen für den mitgelieferten RC-Filter](../images/simulation/ac-setup.png)

Für einen Tiefpass erster Ordnung mit R = 1 kΩ und C = 1 µF gilt `fc = 1 / (2πRC) ≈ 159.15 Hz`. Bei dieser Frequenz hat ein Filter mit Durchlassverstärkung eins eine Verstärkung von etwa 0,707 beziehungsweise −3,0103 dB und eine Phase von etwa −45°. Das [Filter-Tutorial](../SPICE-Tutorial-05/) zeigt Betrag, dB und Phase.

![Tatsächliche AC-Ergebnisse eines aktuellen Browserlaufs des RC-Beispiels](../images/simulation/ac-charts.png)

## DC-Durchlauf
{: #dc-sweep}

Wählen Sie die **Quellenreferenz** aus, beispielsweise `V1`, und geben Sie Start-, End- und Schrittwerte ein. Die Referenz bezeichnet eine unabhängige Spannungs- oder Stromquelle, nicht eine Netzbezeichnung. Wählen Sie einen Schritt, der vom Start- in Richtung des Endwerts führt.

Ein DC-Durchlauf berechnet eine Folge von Bias-Bedingungen. Er eignet sich für eine Dioden-I-V-Kennlinie oder die statische Übertragungskennlinie eines Verstärkers. Er bildet weder ab, wie schnell sich die Quelle ändert, noch die während einer Rampe gespeicherte Ladung. Verwenden Sie dafür eine zeitabhängige Wellenform als Quelle und die transiente Analyse.

Diese Analyse unterscheidet sich von einem **Einparametervariationslauf im Circuit Explorer**, bei dem eine ausgewählte Analyse wiederholt ausgeführt und dabei ein numerischer Bauteil- oder Setup-Parameter verändert wird. Beispielsweise können Sie R1 über fünf Werte variieren und jeweils eine AC-Analyse wiederholen, um die Knickfrequenzen des Filters zu vergleichen.

## Rauschen
{: #noise}

Geben Sie die Eingangsquelle sowie die Ausgangs- und Referenzknoten an und legen Sie anschließend Frequenzbereich und Auflösung fest. Die Ausgabe ist eine Spannungsdifferenz; überprüfen Sie die gewählte Referenz. Die Rauschanalyse verwendet Kleinsignal-Rauschbeiträge am Arbeitspunkt. Dafür sind rauschfähige Bauteilmodelle erforderlich; einem idealen, rauschfreien Verhaltensblock wird nicht automatisch das Rauschspektrum eines physikalischen Bauteils zugewiesen.

Wählen Sie das richtige Ergebnisdiagramm aus: **spektrale** und **integrierte** Rauschgrößen sind unterschiedlich. Beachten Sie die angezeigten Einheiten; eine Amplitudendichte in V/√Hz ist erst nach Integration über eine festgelegte Bandbreite eine Spannung. Siehe [Entwurfsuntersuchungen](../SPICE-Tutorial-10/).

## Übertragungsfunktion und Pol-Nullstellen
{: #transfer-function-and-pole-zero}

**Übertragungsfunktion** (`.tf`) verwendet eine ausdrücklich benannte unabhängige Quelle und einen Ausgangsanschluss, um DC-Kleinsignalverstärkung sowie Eingangs- und Ausgangswiderstand zu berechnen. Sie ist nicht der vollständige Frequenzdurchlauf einer AC-Analyse. Überprüfen Sie die Quellenreferenz und ob der Ausgang relativ zum richtigen Knoten gemessen wird.

Die **Pol-Nullstellen-Analyse** untersucht die Pole und Nullstellen der konfigurierten Kleinsignalübertragung. Die Einstellungen für Anschluss und Übertragung sind entscheidend: Sie sucht nicht nach jedem möglichen Verhalten eines Schaltplans. Interpretieren Sie die Ergebnisse in der komplexen Ebene zusammen mit den AC- und Transient-Ergebnissen, statt sie als Ersatz für ein korrekt eingestelltes Modell zu betrachten.

## Temperatur, Einheiten und Parameter
{: #temperature-units-and-parameters}

Die Setup-Temperatur wird in **°C** angegeben. Sie beeinflusst Bauteile, deren Modelle eine Temperaturabhängigkeit implementieren; einem idealen Bauteil verleiht sie keine thermischen Eigenschaften. Benannte Setup-Parameter ermöglichen die Wiederverwendung eines Zahlenwerts in kompatiblen SPICE-Ausdrücken und Variationsbindungen.

Numerische Steuerelemente akzeptieren technische Schreibweisen wie `5ms`, `10us` und `1kHz`. In **SPICE-Text** gelten für Suffixe die SPICE-Regeln: `k` bedeutet Kilo, `u` Mikro, `n` Nano und **`m` oder `M` bedeutet Milli**. Schreiben Sie **`Meg`** für Mega, zum Beispiel `1Meg` für ein Megaohm. Nehmen Sie nicht an, dass `1M` eine Million bedeutet.

Eine direkte Berechnung der Zeitkonstante oder Knickfrequenz ist eine nützliche Überprüfung. Sie ersetzt jedoch nicht die Berücksichtigung der Belastung: Der Ausgangswiderstand eines Generators, der Eingangswiderstand eines Messgeräts oder eine nachfolgende Stufe können die tatsächliche Antwort verändern.

Die vollständige Syntax der Analysen und das Verhalten der Modelle finden Sie im offiziellen [ngspice-Handbuch](https://ngspice.sourceforge.io/docs.html). Informationen zu den Steuerelementen von TinyCAD finden Sie unter [Quellen und Messgeräte](../Simulation-Sources-and-Instruments/) oder [Diagramme und Messungen](../Simulation-Charts-and-Measurements/).
