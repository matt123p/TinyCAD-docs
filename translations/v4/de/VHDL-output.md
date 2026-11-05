---
layout: default
---
# VHDL-Ausgabe
{: #vhdl-output}

Die VHDL-Ausgabe in TinyCAD v4 funktioniert genauso wie in v3. TinyCAD verwendet die Konnektivität Ihres Schaltplans, die Symbol-Pindefinitionen und VHDL-orientierte Symbole, um eine VHDL-Beschreibung des Designs zu erzeugen.

Der VHDL-Export ist in der Desktop-App verfügbar. Die Browserversion erstellt derzeit keine VHDL-Dateien.

## Wofür VHDL verwendet wird
{: #what-vhdl-is-used-for}

VHDL steht für Very High Speed Integrated Circuit Hardware Description Language. Die Sprache wird verwendet, um digitale Hardware wie Logikgatter, Zähler, Zustandsautomaten, Busse und größere wiederverwendbare Blöcke zu beschreiben.

VHDL wird häufig verwendet für:

- die Simulation digitaler Logik vor dem Bau der Hardware
- die Beschreibung wiederverwendbarer Designblöcke mit festgelegten Ein- und Ausgängen
- den Aufbau hierarchischer FPGA- oder ASIC-Designs aus kleineren Modulen
- die Übergabe eines Designs an nachgelagerte Synthese- oder Verifikationswerkzeuge

In der Praxis definiert ein VHDL-Design in der Regel:

- eine **Entity**: die externen Ports des Blocks
- eine **Architecture**: die interne Logik oder Struktur

Die VHDL-Unterstützung von TinyCAD ist besonders nützlich, wenn Sie die Struktur eines digitalen Designs als Schaltplan erfassen und diese Struktur in VHDL-Form exportieren möchten.

## Vorbereiten des Schaltplans
{: #preparing-the-schematic}

Um eine VHDL-Ausgabe zu erstellen, bauen Sie den Schaltplan mit Symbolen aus der VHDL-Bibliothek auf. Diese Symbole sind so gestaltet, dass TinyCAD erkennen kann, welche Pins Eingänge, Ausgänge und benannte Verbindungen sind.

VHDL-orientierte Symbole finden Sie auch auf [tinycad.net](https://www.tinycad.net/Search?key=%23vhdl).

Verwenden Sie die Symbole wie alle anderen TinyCAD-Symbole, achten Sie aber besonders auf die Benennung:

- Verwenden Sie für Ein- und Ausgänge der obersten Ebene die Symbole der VHDL-Bibliothek und geben Sie jedem den erforderlichen Signalnamen.
- Interne Leitungen sollten überall einheitlich benannt werden, wenn dasselbe Signal verbunden werden soll.
- Pinnamen, Richtungen und Pinnummern benutzerdefinierter Symbole müssen korrekt sein.

TinyCAD benennt verbundene Leitungen automatisch, doch explizite Beschriftungen sind weiterhin die klarste Möglichkeit, die exportierten Signalnamen festzulegen.

## Zuordnung von Symbolen und VHDL durch TinyCAD
{: #how-tinycad-pairs-symbols-with-vhdl}

TinyCAD kann für hierarchische VHDL-orientierte Designs verwendet werden, ohne auf die hierarchische Schaltplanfunktion von TinyCAD mit mehreren Dateien angewiesen zu sein.

Der vorgesehene Arbeitsablauf ist:

1. Erstellen oder sammeln Sie die VHDL-Dateien, die das Verhalten Ihrer wiederverwendbaren Blöcke definieren.
2. Erstellen Sie in einer Projektbibliothek passende TinyCAD-Symbole für diese Blöcke.
3. Geben Sie jedem Symbol denselben Namen wie der zugehörigen VHDL-Datei oder Entwurfseinheit.
4. Stellen Sie sicher, dass jeder Symbol-Pin den korrekten Pinnamen, die korrekte Richtung und eine eindeutige Pinnummer hat.

Jedes Mal, wenn Sie eines dieser Symbole im Schaltplan platzieren, kann TinyCAD die Symbolinstanz dem gleichnamigen VHDL-Block zuordnen.

So lassen sich größere Designs praktisch aus kleineren, in VHDL definierten Modulen aufbauen, während die Struktur der obersten Ebene weiterhin als Schaltplan gezeichnet wird.

## Arbeiten mit Bussen
{: #working-with-buses}

Verwenden Sie für die VHDL-Ausgabe die BUS-Zeichenfunktion von TinyCAD nicht als logische Definition des Busses. Definieren Sie Busse stattdessen, indem Sie Leitungen direkt benennen.

Beispiele:

- `A(7:0)` definiert einen 8-Bit-Bus namens `A`
- `A(3)` bezeichnet ein Bit dieses Busses
- `A(7:4)` bezeichnet einen Ausschnitt dieses Busses

Verwenden Sie denselben Benennungsstil für Ein- und Ausgangssymbole, wenn diese Busse darstellen.

Bei Busbereichen der Form `A(i:j)` muss `i` größer als `j` sein.

Sie können weiterhin eine Busverbindung zur besseren Lesbarkeit zeichnen. Für den VHDL-Export ist jedoch die Benennung der Leitungen entscheidend, nicht die grafische Busdarstellung.

## Erzeugen der VHDL-Datei
{: #generating-the-vhdl-file}

Wenn der Schaltplan fertig ist, führen Sie in TinyCAD den Befehl Create VHDL (VHDL erstellen) aus.

TinyCAD führt im Rahmen des Exportvorgangs automatisch eine Designregelprüfung durch. Sie können die Designregelprüfung auch vorher selbst ausführen, wenn Sie Verdrahtungs- oder Symbolprobleme vor dem Erzeugen der Ausgabe erkennen möchten.

## Praktische Checkliste
{: #practical-checklist}

Überprüfen Sie vor dem Export Folgendes:

- Ein- und Ausgänge der obersten Ebene sind genau so benannt, wie Sie sie in VHDL haben möchten.
- Benutzerdefinierte Symbole haben die korrekten Pinrichtungen.
- Die Pinnummern sind bei jedem Symbol eindeutig.
- Gemeinsame Netze, die verbunden sein sollen, haben tatsächlich denselben Namen.
- Busse sind mit VHDL-Bereichen benannt, zum Beispiel `DATA(15:0)`

Wenn das erzeugte VHDL nicht Ihren Erwartungen entspricht, liegt die Ursache meist in einer falschen Pindefinition, einem fehlenden Leitungsnamen oder einer uneinheitlichen Busbenennung.

## Beispieldesigns
{: #example-designs}

Der TinyCAD-Quellbaum enthält ein kleines VHDL-Beispiel, das auf einem 4-Bit-Prozessordesign basiert. Die Prüfung dieser Dateien ist eine hilfreiche Möglichkeit, die erwartete Symbolbenennung und Projektstruktur zu verstehen.

Das Beispiel ist im [Ordner des TinyCAD-VHDL-Beispielrepositorys](https://github.com/matt123p/TinyCAD/tree/master/examples/vhdl) verfügbar.

- Zurück zu [Erweitert](../Advanced/)
- Zurück zu [Inhalt von v4](../CONTENTS/)
