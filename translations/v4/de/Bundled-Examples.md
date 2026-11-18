---
layout: default
---
# Mitgelieferte Beispiele
{: #bundled-examples}

Mitgelieferte Beispiele sind bearbeitbare Zeichnungen, die mit TinyCAD geliefert werden. Sie zeigen, wie die Bibliotheken verwendet werden, erläutern Anschlussmöglichkeiten und enthalten Schaltungen für die [Simulationstutorials](../Simulation-Tutorials/). Sie müssen die Symbole nicht separat herunterladen.

## Ein Beispiel öffnen
{: #open-an-example}

<div class="manual-tabset" data-tabset="product-mode" data-tabset-label="Choose your TinyCAD product" data-default-tab="Browser" markdown="1">

### Browser
{: #browser}

Wählen Sie **Open Example** rechts in der dunklen Titelleiste. Nachdem Sie ein Beispiel mit Anleitungen geöffnet haben, erscheint daneben **Explanation**. Über diese Schaltfläche können Sie den Erläuterungsbereich ein- oder ausblenden.

### Desktop-App
{: #desktop-app}

Wählen Sie **File → Open Example** unter **Open Recent**. Über **View → View Explanation** können Sie die Anleitungen zum aktuellen Beispiel ein- oder ausblenden. Der Befehl ist nicht verfügbar, wenn der Zeichnung keine Erläuterung zugeordnet ist.

</div>

1. Wählen Sie eine Gruppe: **Examples**, **SPICE tutorial** oder **XSPICE and digital tutorial**.
2. Wählen Sie eine Zeichnung aus, um ihre Vorschau und Beschreibung anzuzeigen. Diese Auswahl ersetzt Ihre aktuelle Zeichnung noch nicht.
3. Wählen Sie **Open drawing**. Wenn Sie ungespeicherte Änderungen haben, beantworten Sie vor dem Fortfahren die Speicherabfrage.
4. Lesen Sie die Erläuterung, prüfen Sie die Verbindungen und ändern Sie die bearbeitbare Kopie. Verwenden Sie **Save As**, um Ihre Version zu speichern.

Verwenden Sie **Search groups and examples**, um ein Element anhand seines Namens zu suchen. Löschen Sie den Suchbegriff und wählen Sie **All groups**, wenn ein Filter eine benötigte Gruppe ausblendet.

{% include video-player.html src="/v4/videos/simulation/examples.mp4" poster="/v4/videos/simulation/examples.jpg" caption="Öffnen Sie das Netzwerkbeispiel und zeigen Sie die Erläuterung neben der Zeichnung an." %}

## Beispiele für Geräte und Layouts
{: #equipment-and-layout-examples}

Wählen Sie für diese sieben Zeichnungen die Gruppe **Examples** aus.

| Zeichnung | Was sie veranschaulicht | Was Sie ausprobieren können |
| --- | --- | --- |
| **Transistor amplifier** | Das ursprüngliche Transistorverstärker-Schaltbild AMP.dsn | Verfolgen Sie die Bias- und Signalpfade. Eine modellierte, ausführbare Rekonstruktion finden Sie in [SPICE-Tutorial, Kapitel 7](../SPICE-Tutorial-07/). |
| **Small office network** | Router, PoE-Switch, Patchpanel und Blindpanel in einem Rack, mit ISP-Terminal, Access Point und Desktop-Switch | Verfolgen Sie die Rack-Uplink- und Bürokabelwege; fügen Sie ein weiteres passendes 1U-Panel hinzu. |
| **ESP32 climate and display station** | Verbindungen von Controller, Sensor und Anzeigemodul | Verfolgen Sie die beschrifteten Stromversorgungs- und Signalpins und passen Sie dann die ausgewählten Module an. |
| **Home solar and battery plan** | Solarstromerzeugung, Speicher und Energieausrüstung für ein Haus auf einer A3-Seite | Verfolgen Sie die Strompfade getrennt von den Überwachungs- und Steuerungsverbindungen. |
| **Two-person podcast studio** | Mikrofone, Mischpult/Interface, Aufnahmecomputer und Abhörsystem | Verfolgen Sie Mikrofoneingänge, Aufnahmeausgang und Kopfhörerzuführungen. |
| **DC load and waveform bench** | Anschlüsse für Netzgerät, Last, Funktionsgenerator, Oszilloskop und Messgerät | Unterscheiden Sie vollständige Messgerätekabel von einzelnen Leitern. |
| **DC motor and limit-control bench** | Motortreiber, Getriebemotor, Steuerungsverbindungen und Endschalter | Verfolgen Sie die Motorversorgung getrennt von PWM-/Richtungssignalen und Endschaltersignalen. |

Die sechs Gerätelayouts enthalten Erläuterungen zu ihren Verbindungen, Annahmen und möglichen Erweiterungen. Es handelt sich um physische/Systemzeichnungen ohne SPICE-Modelle. Der ursprüngliche Verstärker ist ebenfalls ein Zeichnungsbeispiel; durch das Öffnen wird er nicht automatisch zu einer ausführbaren Simulation.

Offene Buchsen können absichtlich vorhanden sein. Drähte, die andere Endpunkte oder Buchsen berühren, bilden echte Verbindungen. Prüfen Sie diese daher beim Anpassen eines Layouts sorgfältig. Eingebettete Grafiken und Pins machen diese Beispiele portabel, ersetzen jedoch nicht die Verdrahtungsdokumentation des tatsächlichen Geräts.

## Simulationsbeispiele
{: #simulation-examples}

### SPICE-Tutorial
{: #spice-tutorial}

Diese Gruppe folgt dem [SPICE-Kurs mit elf Kapiteln](../SPICE-Tutorial/). Er beginnt mit einem Spannungsteiler und behandelt dann Quellen, das Aufladen eines RC-Glieds, AC-Filter, Gleichrichtung mit Dioden, einen rekonstruierten Transistorverstärker und Untersuchungen zu Entwurfsfragen. Der Eintrag **Start here — using the tutorials** öffnet den ersten Spannungsteiler und erläutert den Arbeitsablauf.

Die Zeichnungen enthalten eingebettete Symbole, Modelltexte, Analyseeinstellungen und gespeicherte Referenzergebnisse. Daher kann eine Kurve **bereits vor Ihrem ersten Lauf** sichtbar sein. Wählen Sie **Run**, um eine neue Erfassung für Ihre aktuelle Schaltung und Einstellungen durchzuführen. Orientieren Sie sich an den für das Kapitel erwarteten Werten und nehmen Sie die vorgeschlagenen Änderungen vor, um zu sehen, warum sich das Ergebnis ändert.

### XSPICE- und Digital-Tutorial
{: #xspice-and-digital-tutorial}

Verwenden Sie für diese Gruppe **TinyCAD Desktop**. Der [XSPICE-Kurs mit sechs Kapiteln](../XSPICE-Tutorial/) behandelt logische Wahrheitstabellen, Ausbreitungsverzögerung, Hazards, Flipflops, Zähler, Analog/Digital-Brücken und unbekannte Zustände. XSPICE wird in Browser-Versionen nicht unterstützt. Ein Browser kann dennoch Zeichnungen mit gespeicherten XSPICE-Ergebnissen zur Ansicht öffnen.

In den beiden Tutorialgruppen gibt es 28 verschiedene Simulationszeichnungen. Der zusätzliche Eintrag „Start here“ verweist auf denselben Spannungsteiler wie im ersten SPICE-Kapitel. Jede Lektion enthält Links zu herunterladbaren `.dzn`-Zeichnungen und den zugehörigen `.cir`-Netzlisten als Alternative zum Öffnen der mitgelieferten Kopie. Öffnen Sie `.dzn`-Dateien in TinyCAD; `.cir`-Dateien sind Textdateien, die Sie mit einem kompatiblen externen Simulator prüfen oder verwenden können.

## Experimente aufbewahren
{: #keep-your-experiments}

Das mitgelieferte Original bleibt unverändert, wenn Sie die geöffnete Kopie bearbeiten. Wenn Sie dasselbe mitgelieferte Beispiel erneut öffnen, erhalten Sie einen neuen Ausgangszustand. Speichern Sie Ihre eigene Zeichnung unter einem neuen Namen, um Änderungen aufzubewahren, und speichern Sie Simulationsergebnisse, wenn Sie numerische Nachweise behalten möchten.

Der Bereich **Explanation** und die **Simulation charts** sind unabhängig voneinander. Wenn Sie einen schließen, müssen Sie den anderen nicht ebenfalls schließen. In der Desktop-App sind Diagramme über **View → Show Charts** verfügbar; in beiden Produkten können Sie in der Symbolleiste **Simulation → Show charts** verwenden.

Wenn Sie eine gespeicherte Zeichnung weitergeben, fügen Sie alle zusätzlichen Hinweise bei, die der Leser benötigt. Die mitgelieferte Erläuterung ist mit dem Öffnen des Beispiels verknüpft. Verlassen Sie sich nicht darauf, dass sie wiederhergestellt wird, wenn eine gespeicherte Kopie unabhängig geöffnet wird. Die in die Zeichnung selbst eingebetteten Textnotizen bleiben Teil der Datei.

Fahren Sie mit [Ihrer ersten Simulation](../Simulation/#run-your-first-simulation) oder [der Anleitung zum Einstieg in das Tutorial](../Tutorial-Start-Here/) fort.
