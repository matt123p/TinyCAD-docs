---
layout: default
---
# Labels
{: #labels}

Labels sind elektrisch aktive Netznamen. Alle Drähte mit demselben Labelnamen
gelten als verbunden, auch wenn kein physischer Draht zwischen ihnen gezeichnet ist.

Verwenden Sie Labels, um:

- Punkte zu verbinden, die auf demselben Blatt weit auseinanderliegen,
- visuelle Unübersichtlichkeit in dichten Schaltplänen zu verringern,
- Netze zwischen Blättern derselben Zeichnung zu verbinden,
- hierarchische Symbolpins mit internen Netzen zu verknüpfen.

## Funktionsweise von Labels
{: #how-labels-work}

- Ein Label wird mit dem darunterliegenden Draht verbunden.
- Die Verbindung basiert auf dem **Labeltext**, nicht auf der Position.
- Die **Form** des Labels ist lediglich ein visueller Stil und hat keinen Einfluss auf die Verbindung,
	die Netzliste oder das DRC-Verhalten.
- Verwenden Sie überall denselben Namen, wenn Sie ein elektrisches Netz bezeichnen möchten.

## Richtlinien für die Benennung von Labels
{: #label-naming-guidelines}

- Verwenden Sie aussagekräftige Netznamen wie `RESET`, `SCL`, `+5V`, `ADC_IN0`.
- Achten Sie im gesamten Entwurf auf eine einheitliche Benennung.
- Vermeiden Sie unbeabsichtigte Abweichungen (`GND` statt `GN D`, `CLK` statt `Clk`), da diese
	unterschiedliche Netze erzeugen.
- Wenn Ihre Benennung Zahlen enthält, können beim wiederholten Platzieren numerische Suffixe mithilfe der Optionen „Repeat Direction name“ erhöht oder verringert werden.

## Label-Formen und ihre Verwendung
{: #label-shapes-and-why-to-use-them}

TinyCAD bietet in den Optionen des Label-Werkzeugs mehrere Label-Formen. Wählen Sie die Form
nach Lesbarkeit und Zeichenstil aus; alle Formen sind elektrisch gleichwertig.

Typische Gründe für die Verwendung unterschiedlicher Formen:

- häufig wiederverwendete Netze von einmalig verwendeten lokalen Netzen abzugrenzen,
- Off-Sheet- oder blockübergreifende Verbindungen optisch hervorzuheben,
- Signalrichtung oder -zweck für Leser kenntlich zu machen,
- den Schaltplanstil Ihres Teams oder Unternehmens einzuhalten.

Praktische Regel: Wählen Sie eine kleine Anzahl von Formen aus und verwenden Sie sie einheitlich, damit Leser
den Schaltplan schnell erfassen können.

## Platzieren und Bearbeiten von Labels
{: #placing-and-editing-labels}

1. Wählen Sie das Label-Werkzeug aus.
2. Geben Sie den Netznamen ein.
3. Wählen Sie bei Bedarf Ausrichtung und Form aus.
4. Platzieren Sie das Label auf dem Zieldraht.
5. Wiederholen Sie den Vorgang an jeder Stelle, die mit diesem Netz verbunden werden soll.


## Labels in Zeichnungen mit mehreren Blättern
{: #labels-with-multi-sheet-drawings}

In einer Zeichnungsdatei mit mehreren Blättern sind Labels die übliche Methode, um Netze zwischen
Blättern zu verbinden.

- Derselbe Labelname auf verschiedenen Blättern bezeichnet dasselbe elektrische Netz.
- Diese blattübergreifende Verknüpfung wird beim Erstellen von Netzlisten verwendet.
- Verwenden Sie für gemeinsame Netze stabile, eindeutige Namen (`+3V3`, `GND`, `I2C_SDA`,
	`I2C_SCL` usw.).

Empfohlener Arbeitsablauf:

1. Legen Sie die gemeinsamen Netznamen im Voraus fest.
2. Verwenden Sie auf jedem Blatt genau dieselben Namen.
3. Führen Sie DRC- und Netzlistenprüfungen aus, um Benennungsfehler frühzeitig zu erkennen.

- Zurück zu [Zeichnung](../User-guide/)
- Zurück zu [Inhalt von v4](../CONTENTS/)
