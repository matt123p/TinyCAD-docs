---
layout: default
title: 2. Measuring DC voltage, current and power
---
# 2. Messen von Gleichspannung, Strom und Leistung
{: #measuring-dc-voltage-current-and-power}

[Vorherige](/v4/SPICE-Tutorial-01/) · [Inhalt](/v4/Simulation-Tutorials/) · [Nächste](/v4/SPICE-Tutorial-03/)

Die Beispiele in diesem Kapitel sind im Lieferumfang von TinyCAD enthalten. Wählen Sie **Beispiel öffnen (Open Example) → SPICE tutorial**, wählen Sie das benannte Beispiel aus und anschließend **Zeichnung öffnen (Open Drawing)**. Ein Download ist nicht erforderlich.

Öffnen Sie **divider**. Behalten Sie die nominale 5-V-Quelle und die beiden
1-kΩ-Widerstände bei. Ziel ist es, Knotenspannung, Spannung über einem Bauteil,
Strom durch das Bauteil und die von ihm aufgenommene Leistung zu unterscheiden.

## Spannungsmessungen
{: #voltage-measurements}

`out` bezeichnet die Spannung von OUT relativ zu Knoten 0. Die Spannung über R1 ist
`VIN − VOUT`, die hier ebenfalls 2,5 V beträgt. Diese Gleichheit ist zufällig: Wenn
R2 auf 2 kΩ geändert wird, beträgt die Spannung über R1 1,667 V und über R2 3,333 V.

Verwenden Sie **Simulation → SPICE → Sonde einfügen (Insert Probe)**, um eine Knotenspannung zu messen. Eine Differenzialsonde misst die Spannung an ihrem positiven Anschluss abzüglich der Spannung an ihrem negativen Anschluss. Schließen Sie ihre positive Spitze an IN und die negative an OUT an, um R1 zu messen. Durch Vertauschen der Spitzen kehrt sich das Ergebnis um. Eine Differenzialsonde ist besonders nützlich, wenn keiner der Anschlüsse geerdet ist, beispielsweise bei einem Koppelkondensator oder einem Brückenausgang.

## Strommessungen
{: #current-measurements}

Verwenden Sie eine Serien-Stromsonde, indem Sie eine Leitung auftrennen und die Sonde in den Strompfad einfügen. Sie wird als Spannungsquelle mit null Volt modelliert: Der Strom fließt durch sie, ohne dass ein idealer Spannungsabfall entsteht. Wird sie stattdessen parallel zur Versorgung angeschlossen, entsteht ein Kurzschluss der Versorgung. Der positive Sondenstrom folgt der Reihenfolge der positiven und negativen Anschlüsse der Sonde. Quellzweigströme wie `v1#branch` sind ebenfalls direkt verfügbar.

In diesem Spannungsteiler fließt der Strom von V1 durch R1 und R2 in Richtung Masse. Durch beide Widerstände fließen 2,5 mA; der Zweigstrom von V1 beträgt −2,5 mA, weil die Quelle diesen Strom über ihren positiven Anschluss abgibt.

## Leistung und Energiebilanzprüfung
{: #power-and-an-energy-balance-check}

Verwenden Sie die passive Vorzeichenkonvention: `P = V × I`, wobei der Strom in den Anschluss hineinfließt, an dem die Spannung als positiv definiert ist. Positive Leistung wird aufgenommen; negative Leistung wird abgegeben.

| Bauteil | Berechnung | Nominales Ergebnis |
| --- | --- | --- |
| R1 | `(2.5 V)² / 1 kΩ` | +6,25 mW |
| R2 | `(2.5 V)² / 1 kΩ` | +6,25 mW |
| V1 | `5 V × (−2.5 mA)` | −12,5 mW |
| Summe | Quelle plus Lasten | 0 W |

Diese Bilanz ist ein nützliches Werkzeug zur Fehlersuche. Ein Faktor von 1000 weist oft auf einen Präfixfehler hin. Ein falsches Vorzeichen deutet häufig auf eine umgekehrte Sondenorientierung hin. Eine unerklärliche zusätzliche Last kann auf eine unbeabsichtigte Verbindung oder einen Messgeräteanschluss hindeuten.

Über die Steuerelemente von TinyCAD unter **Messungen (Measurements)** können Spannung, Strom und Leistung von Bauteilen ausgewählt werden, sofern das Modell diese unterstützt. Ein fehlender unterstützter Stromvektor wird als nicht verfügbar gemeldet; dies darf nicht als Verbrauch von null interpretiert werden.

## Versorgungsspannung durchlaufen
{: #sweep-the-supply}

Öffnen Sie **dc-sweep**. Die gespeicherte Analyse **DC sweep** verwendet V1,
beginnt bei 0 V, endet bei 10 V und hat eine Schrittweite von 0,5 V. Starten Sie die Analyse und stellen Sie OUT grafisch dar.

![Berechnete Gleichspannungs-Übertragungskennlinie](/v4/Images/simulation-tutorials/spice/dc-sweep-results.png)

Die horizontale Achse zeigt den durchlaufenen Quellenwert, nicht die Zeit. Erwartete Werte sind
0 V, 2,5 V und 5 V bei Versorgungsspannungen von 0 V, 5 V und 10 V. Die Steigung beträgt 0,5 V/V.
Dieser Test ist nützlich, um Bias-Netzwerke und Sensorschnittstellen zu prüfen, bevor zeitabhängige Anregungssignale hinzugefügt werden.

## Belastung untersuchen
{: #investigate-loading}

Fügen Sie einen weiteren 1-kΩ-Widerstand zwischen OUT und Masse hinzu. R2 und die neue Last liegen parallel,
sodass ihr Ersatzwiderstand 500 Ω beträgt. Die erwartete Ausgangsspannung beträgt nun
`5 × 500 / (1000 + 500) = 1.667 V`. Ein Spannungsteiler ist keine ideale Spannungsquelle: Seine Ausgangsspannung ändert sich, wenn er Strom liefert.

Halten Sie für eine Mess-Checkliste die Knotennamen, Bezugsrichtung, Einheiten,
Quelleinstellungen und die Analyse fest. Dadurch wird das Ergebnis reproduzierbar und andere können unterscheiden, ob eine Änderung an der Schaltung oder an der Darstellung vorgenommen wurde.

## Lektion-Schaltungen herunterladen
{: #download-the-lesson-circuits}

Dieselben Beispiele sind bereits unter **Beispiel öffnen (Open Example)** verfügbar. Laden Sie für eine unabhängige Kopie eine `.dzn`-Zeichnung herunter und wählen Sie in TinyCAD **Datei → Öffnen (File → Open)**. Die zugehörige `.cir`-Datei enthält SPICE-Text zur Überprüfung oder für einen kompatiblen externen Simulator, nicht eine TinyCAD-Zeichnung. Für neue Simulationsläufe mit XSPICE-Schaltungen ist Desktop erforderlich.

| Beispiel | Zeichnung | Netzliste |
| --- | --- | --- |
| divider | [TinyCAD-Zeichnung](/v4/examples/simulation-tutorials/spice/divider.dzn) | [SPICE-Text](/v4/examples/simulation-tutorials/spice/divider.cir) |
