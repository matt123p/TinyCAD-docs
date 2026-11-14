---
layout: default
---
# Netzbezeichnungen
{: #labels}

Netzbezeichnungen sind elektrisch wirksame Netznamen. Alle Drähte mit derselben
Netzbezeichnung gelten als verbunden, auch wenn keine physische Leitung zwischen ihnen gezeichnet ist.

Verwenden Sie Netzbezeichnungen, um:

- Punkte zu verbinden, die auf demselben Blatt weit voneinander entfernt sind,
- visuelle Unübersichtlichkeit in dicht gezeichneten Schaltplänen zu verringern,
- Netze zwischen Blättern derselben Zeichnung zu verbinden,
- hierarchische Symbolanschlüsse mit internen Netzen zu verbinden.

## Funktionsweise von Netzbezeichnungen
{: #how-labels-work}

- Eine Netzbezeichnung wird mit dem darunterliegenden Draht verbunden.
- Die Verbindung richtet sich nach dem **Text der Netzbezeichnung**, nicht nach dem Ort.
- Die **Form** der Netzbezeichnung ist lediglich ein visueller Stil und hat keinen Einfluss auf die Verbindung,
	Netzlistenerstellung oder das DRC-Verhalten.
- Verwenden Sie überall denselben Namen, wenn Sie ein elektrisches Netz bezeichnen möchten.

## Richtlinien für die Benennung von Netzbezeichnungen
{: #label-naming-guidelines}

- Verwenden Sie eindeutige Netznamen wie `RESET`, `SCL`, `+5V`, `ADC_IN0`.
- Verwenden Sie im gesamten Entwurf einheitliche Namen.
- Vermeiden Sie versehentliche Abweichungen (`GND` gegenüber `GN D`, `CLK` gegenüber `Clk`), da dadurch
	unterschiedliche Netze entstehen.
- Wenn Ihre Namen Zahlen enthalten, können Sie bei wiederholtem Platzieren numerische Suffixe mit den Optionen für die Namensrichtung „Repeat Direction“ erhöhen oder verringern.

## Formen von Netzbezeichnungen und ihre Verwendung
{: #label-shapes-and-why-to-use-them}

TinyCAD bietet in den Optionen des Netzbezeichnungswerkzeugs mehrere Formen. Wählen Sie eine Form
nach Lesbarkeit und Zeichenstil aus; alle Formen sind elektrisch gleichwertig.

Typische Gründe für die Verwendung unterschiedlicher Formen:

- häufig wiederverwendete Netze von einmalig verwendeten lokalen Netzen abzugrenzen,
- Verbindungen außerhalb des Blatts oder zwischen Blöcken optisch hervorzuheben,
- Signalrichtung oder -funktion für menschliche Leser zu verdeutlichen,
- dem Schaltplanstil Ihres Teams oder Unternehmens zu entsprechen.

Praktische Regel: Wählen Sie eine kleine Anzahl von Formen und verwenden Sie diese einheitlich, damit Leser
den Schaltplan schnell überblicken können.

## Platzieren und Bearbeiten von Netzbezeichnungen
{: #placing-and-editing-labels}

1. Wählen Sie das Netzbezeichnungswerkzeug aus.
2. Geben Sie den Netznamen ein.
3. Wählen Sie bei Bedarf Ausrichtung und Form aus.
4. Platzieren Sie die Netzbezeichnung auf dem Zieldraht.
5. Wiederholen Sie den Vorgang für jede Stelle, die mit diesem Netz verbunden werden soll.


## Netzbezeichnungen in Zeichnungen mit mehreren Blättern
{: #labels-with-multi-sheet-drawings}

In einer Zeichnungsdatei mit mehreren Blättern sind Netzbezeichnungen die übliche Methode, um Netze zwischen
Blättern zu verbinden. Ein ausgearbeitetes Beispiel und ein Video zur Blattverwaltung und zu blattübergreifenden Netzbezeichnungen finden Sie unter [Zeichnungen mit mehreren Blättern](../Multiple-Sheet-Drawings/)

- Derselbe Netzname auf verschiedenen Blättern bezeichnet dasselbe elektrische Netz.
- Diese blattübergreifende Verknüpfung wird beim Erzeugen von Netzlisten verwendet.
- Verwenden Sie für gemeinsam genutzte Netze stabile und eindeutige Namen (`+3V3`, `GND`, `I2C_SDA`,
	`I2C_SCL` usw.).

Empfohlener Arbeitsablauf:

1. Legen Sie die gemeinsamen Netznamen frühzeitig fest.
2. Verwenden Sie auf jedem Blatt genau dieselben Namen.
3. Führen Sie DRC- und Netzlistenprüfungen durch, um Benennungsfehler frühzeitig zu erkennen.

- Zurück zu [Zeichnen](../User-guide/)
- Zurück zu [Inhaltsverzeichnis von v4](../)
