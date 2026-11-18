---
layout: default
title: 2. Gates and truth tables
---
# 2. Gatter und Wahrheitstabellen
{: #gates-and-truth-tables}

[Zurück](/v4/XSPICE-Tutorial-01/) · [Inhalt](/v4/Simulation-Tutorials/) · [Weiter](/v4/XSPICE-Tutorial-03/)

Die Beispiele in diesem Kapitel werden mit TinyCAD mitgeliefert. Wählen Sie **Beispiel öffnen (Open Example) → XSPICE and digital tutorial**, wählen Sie das benannte Beispiel und anschließend **Zeichnung öffnen (Open Drawing)**. Ein Download ist nicht erforderlich.

Öffnen Sie **logic-nand**. X1 enthält ADC-Brücken, ein zweieingängiges XSPICE-NAND-Gatter und eine DAC-Ausgangsbrücke. Unabhängige Impulsquellen steuern A und B mit unterschiedlichen Frequenzen an. Führen Sie die 8-µs-Transientensimulation aus und zeigen Sie A, B und Y an.

![NAND-Testschaltung](/v4/images/simulation-tutorials/xspice/logic-nand-circuit.png)
![Berechnete NAND-Wellenformen](/v4/images/simulation-tutorials/xspice/logic-nand-results.png)

Die Boolesche Funktion lautet `Y = NOT(A AND B)`:

| A | B | Eingeschwungenes Y |
| --- | --- | --- |
| 0 | 0 | 1 |
| 0 | 1 | 1 |
| 1 | 0 | 1 |
| 1 | 1 | 0 |

In der dargestellten analogen Repräsentation entspricht null ungefähr 0 V und eins
ungefähr 5 V. Der Ausgang wird nur dann niedrig, wenn beide Eingänge
hoch sind. Betrachten Sie die Mitte jedes stabilen Intervalls, nicht den genauen
Zeitpunkt, zu dem ein Eingang eine Schwelle überschreitet. Das Gatter hat
Anstiegs- und Abfalllaufzeiten von 20 ns; die Brücken und ihre endlichen Flanken tragen zusätzlich zur Laufzeit bei.

## Führen Sie ein gezieltes Wahrheitstabellen-Experiment durch
{: #run-a-deliberate-truth-table-experiment}

Verwenden Sie Diagramm-Cursor, um für jede Zeile ein stabiles Intervall zu bestimmen. Notieren Sie A, B und Y,
nachdem sich der Ausgang eingeschwungen hat. Tritt eine sehr kurze Eingangskombination nur
während einer Änderung von zwei Eingängen auf, verwenden Sie diesen Übergang nicht als Beleg für eine stationäre
Wahrheitstabellenzeile. Für eine eindeutige manuelle Überprüfung ändern Sie die beiden Quellen auf DC
0 V oder 5 V, führen Sie die Transientensimulation erneut aus und testen Sie die vier Kombinationen einzeln.

Im eingebetteten SPICE-Modell von X1 lauten die zentralen Anweisungen:

```spice
Ag [da db] dy ng
.model ng d_nand(rise_delay=20n fall_delay=20n)
```

Die eckigen Klammern fassen einen Vektor von Eingangsports zusammen. `da`, `db` und `dy` sind
interne ereignisgesteuerte Knoten. Es handelt sich nicht um gewöhnliche elektrische Netze, an die direkt ein
Widerstand angeschlossen werden kann. Die Brücken verbinden diese internen Knoten
mit den im Schaltplan sichtbaren analogen Anschlüssen.

Um mit einer anderen Funktion zu experimentieren, erstellen Sie eine Kopie der Zeichnung und ändern Sie
den Modelltyp im SPICE-Prolog von X1 in ein kompatibles Gatter, beispielsweise `d_and`.
Achten Sie darauf, dass die Vektor-/Skalar-Portschnittstelle kompatibel bleibt. Die Wahrheitstabelle von AND sollte
nach dem Einschwingen der Übergänge das inverse Ergebnis von NAND liefern.

## Was dieses Beispiel nicht belegt
{: #what-this-example-does-not-establish}

Das Modell bildet weder einen bestimmten IC im Gehäuse noch dessen ESD-Dioden, Fan-out-Grenzen,
Stromspitzen der Versorgung oder das Timing des Herstellers in Abhängigkeit von der Last ab. Die Verzögerung von 20 ns ist
ein Eingabeparameter dieses Experiments. Eine korrekte Wahrheitstabelle belegt die Funktionslogik für die getesteten Zustände,
nicht die elektrische Kompatibilität mit einem anderen Chip.

Wenn etwas nicht stimmt, überprüfen Sie zuerst die gespeicherten Quellenpegel, dann die Schwellenwerte der Brücken
und anschließend das Gattermodell und die Portreihenfolge. Ein Eingang mit konstant 2 V ist
bei diesen Brückeneinstellungen undefiniert und kann nicht einfach dem einen oder anderen Booleschen Wert zugeordnet werden,
nur weil er näher an einer der Versorgungsschienen liegt.

Modelldefinitionen und Portkonventionen sind im Kapitel zu den XSPICE-Code-Modellen des [ngspice-Handbuchs](https://ngspice.sourceforge.io/docs.html) dokumentiert.

## Laden Sie die Übungsschaltungen herunter
{: #download-the-lesson-circuits}

Dieselben Beispiele sind bereits unter **Beispiel öffnen (Open Example)** verfügbar. Für eine separate Kopie laden Sie eine `.dzn`-Zeichnung herunter und öffnen sie in TinyCAD über **Datei → Öffnen (File → Open)**. Die zugehörige `.cir`-Datei enthält SPICE-Text zur Prüfung oder für einen kompatiblen externen Simulator, aber keine TinyCAD-Zeichnung. Für die erstmalige Ausführung von XSPICE-Schaltungen wird die Desktop-Version benötigt.

| Beispiel | Zeichnung | Netzliste |
| --- | --- | --- |
| logic-nand | [TinyCAD-Zeichnung](/v4/examples/simulation-tutorials/xspice/logic-nand.dzn) | [SPICE-Text](/v4/examples/simulation-tutorials/xspice/logic-nand.cir) |
