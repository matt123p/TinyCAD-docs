---
layout: default
---
# Simulation und SPICE
{: #simulation-and-spice}

TinyCAD kann elektronische Schaltungssimulationen ausführen, Ergebnisse darstellen und das Schaltungsverhalten messen, ohne dass Sie die Zeichnung verlassen müssen. Die integrierte Engine ist **ngspice**. Sowohl der Browser als auch die Desktop-App enthalten eine Engine; für den integrierten Arbeitsablauf benötigen Sie keine separate ngspice-Installation.

Neu bei Simulationen? Beginnen Sie mit dem [geführten SPICE-Kurs](../SPICE-Tutorial/). Für ein schnelles erstes Ergebnis folgen Sie den unten beschriebenen Schritten zum Spannungsteiler. Diese Referenz erläutert die Bedienelemente und die Interpretation der Ergebnisse.

## Was ein Schaltungssimulator berechnet
{: #what-a-circuit-simulator-calculates}

SPICE steht für *Simulation Program with Integrated Circuit Emphasis*. Ein Simulator löst ein mathematisches Modell einer verbundenen Schaltung: Widerstände stellen Beziehungen zwischen Spannung und Strom her, Kondensatoren und Spulen speichern Energie, und Halbleitermodelle beschreiben nichtlineares Verhalten. Er kann den Gleichstrom-Arbeitspunkt ermitteln, Signalverläufe über die Zeit berechnen und das Kleinsignal-Frequenzverhalten untersuchen.

Ein Schaltplan stellt die **Verbindungen** bereit; ein SPICE-Modell beschreibt das **Verhalten**; eine Analyse legt fest, **was berechnet werden soll**. Alle drei müssen korrekt sein. Eine realistische Darstellung eines Verstärkers oder Prozessors bedeutet nicht, dass sie ein Simulationsmodell enthält. Umgekehrt kann ein einfaches Dreieck oder Rechteck ein nützliches Verhaltensmodell enthalten.

Simulationen sind hilfreich, um eine Idee zu überprüfen, Bauteilwerte zu vergleichen und ein unerwartetes Verhalten zu verstehen. Das Ergebnis hängt von den Modellen und Bedingungen ab, die Sie vorgeben. Ideale Leitungen besitzen keinen unbeabsichtigten Widerstand oder keine Induktivität; ein generisches Transistormodell ist keine vollständige Spezifikation für jeden Transistor. Belastung, Versorgungsimpedanz, Toleranzen und Temperatur werden nur insoweit berücksichtigt, wie sie durch die ausgewählten Modelle abgebildet werden.

## Browser- und Desktop-Engines
{: #browser-and-desktop-engines}

| Funktion | Browser | Desktop-App |
| --- | --- | --- |
| Analoge SPICE-Simulation, Diagramme, Messungen und Untersuchung | Mitgeliefertes WebAssembly-ngspice in einem Worker | Mitgeliefertes natives ngspice über einen Hilfsprozess |
| Portable Bibliotheken für modellierte digitale Logik / Funktionsblöcke / Sensoren und Schnittstellen | Ja | Ja |
| Ereignisgesteuerte XSPICE-Code-Modelle | Nicht unterstützt¹ | Ja, mitgelieferte native Code-Modellbibliotheken |
| Pop-out-Fenster für Diagramme | Ja | Ja |
| Pop-out-Fenster für virtuelle Messgeräte | Nein | Ja |

¹ Browser-Versionen können eine Zeichnung mit gespeicherten XSPICE-Ergebnissen zur Ansicht öffnen. Für die Ausführung von XSPICE ist die Desktop-App erforderlich.

Die Berechnung erfolgt lokal in der Browser- oder Desktop-Engine. Die Online-Bibliothekssuche ist eine separate Funktion. Die aktuell mitgelieferte Engine basiert auf ngspice 47; im Ausführungsverlauf wird die bei einer Messwerterfassung verwendete Engine bzw. Build-Version angegeben. Verwenden Sie beim Prüfen der Modellsyntax oder von Unterschieden zwischen Engines das passende Upstream-Handbuch.

## Erste Simulation ausführen
{: #run-your-first-simulation}

1. Öffnen Sie **Open Example** in der Titelleiste des Browsers oder **File → Open Example** in der Desktop-App.
2. Wählen Sie **SPICE tutorial → divider → Open drawing**.
3. Überprüfen Sie die Schaltung: Eine 5-V-Quelle speist zwei in Reihe geschaltete Widerstände mit je 1 kΩ. **OUT** ist ihr Mittelpunkt; die untere Leitung ist Masse **0**.
4. Wählen Sie in der Blattregisterleiste das **divider Simulation sheet**. Sein uhrähnliches Symbol unterscheidet es von einem Schaltplanblatt. Öffnen Sie **Setup** und lassen Sie **Operating Point** ausgewählt.
5. Wählen Sie **Run**. Öffnen Sie nach Abschluss **History** und wählen Sie die neue abgeschlossene Messwerterfassung aus.
6. Öffnen Sie **Data**. Der Mittelpunkt liegt bei **2.5 V**. Der Quellenstrom beträgt **−2.5 mA**, da der Bezugsstrom der Spannungsquelle in ngspice in ihren positiven Anschluss hineinzeigt; eine Quelle, die in dieser Schaltung Strom liefert, hat einen negativen Strom.
7. Ändern Sie einen Widerstand und führen Sie die Simulation erneut aus. Vergleichen Sie das neue Ergebnis mit der ursprünglichen Messwerterfassung.

{% include video-player.html src="/v4/videos/simulation/first-simulation.mp4" poster="/v4/videos/simulation/first-simulation.jpg" caption="Öffnen Sie den mitgelieferten Spannungsteiler, überprüfen Sie seine Einrichtung und führen Sie eine neue ngspice-Messwerterfassung im Browser aus. Die Datentabelle bestätigt 2.5 V an OUT und −2.5 mA durch die Quelle." %}

Das Beispiel enthält eine gespeicherte Referenz-Messwerterfassung. Wenn direkt nach dem Öffnen ein Ergebnis angezeigt wird, bedeutet das nicht, dass eine neue Berechnung ausgeführt wurde. **History** unterscheidet diese gespeicherten Daten von der Messwerterfassung, die Sie mit Run erstellen.

## Neue Simulation erstellen
{: #build-a-new-simulation}

1. Platzieren Sie modellierte Bauteile aus **Standard → SPICE essentials** oder verwenden Sie das Untermenü **Simulation → SPICE components** in der Symbolleiste. **More…** öffnet die vollständige Sammlung der SPICE-Grundelemente. Die Symbole enthalten bereits ein [mitgeliefertes Modell und eine Anschlusszuordnung](../Bundled-SPICE-Models/).
2. Verbinden Sie die Anschlüsse mit Leitungen und versehen Sie wichtige Knoten mit aussagekräftigen Bezeichnungen. Stellen Sie eine echte Verbindung zur Masse **0** her: **Simulation → SPICE → Insert Ground** fügt das passende Masse-Symbol ein.
3. Fügen Sie mit **Simulation → SPICE → Insert Source** eine Anregungsquelle hinzu. Legen Sie ihren Spannungs-/Stromtyp und ihre Signalform fest. Fügen Sie [Messsonden](../Simulation-Sources-and-Instruments/#probes-and-ground) hinzu, wenn Sie auf einfache Weise Diagramme erstellen möchten.
4. Wählen Sie **Simulation → Simulate**, um ein **Simulation sheet** hinzuzufügen.
5. Wählen Sie unter **Setup** eine Analyse und deren Einstellungen aus. Legen Sie Parameter fest oder fügen Sie benutzerdefinierten Modelltext hinzu, wenn Ihre Schaltung dies erfordert.
6. Wählen Sie Signale aus, starten Sie die Simulation und prüfen Sie den Bereich **Simulation charts** sowie die Ansichten **Data**, **History** und **Diagnostics** des Blatts. Beheben Sie gemeldete Verdrahtungs- oder Modellfehler, bevor Sie sich auf die Werte verlassen.

Auf einem Simulation sheet werden **Run** und **Stop** in der Hauptsymbolleiste angezeigt. Das Blatt beginnt mit **Setup**. **History** und **Diagnostics** werden nach einer Ausführung angezeigt; **Measurements** und **Data** erscheinen, sobald numerische Daten verfügbar sind. Die Werkzeuge des Circuit Explorers befinden sich in Setup unterhalb der Analyse-Einstellungen; fügen Sie über **Add tools** nur die Werkzeuge hinzu, die Sie benötigen.

Alle Schaltplanblätter einer Zeichnung bilden **eine Schaltung**. Jedes Simulation sheet besitzt eine eigene Einrichtung: Analyse, Parameter, angehängte Modelle, Signalauswahl, Anweisungen und Ausführungsverlauf. Das Hinzufügen eines zweiten Simulation sheet erzeugt keine separate zweite Schaltplan-Schaltung. Damit können Sie dieselbe Schaltung auf andere Weise untersuchen, beispielsweise mit einer AC-Analyse neben einer Transientenanalyse.

Verwenden Sie für jede Untersuchung einen eigenen Einrichtungsnamen. Beim Duplizieren einer Einrichtung werden ihre Definitionen, nicht aber ihre Messwerterfassungen kopiert. Es läuft jeweils nur eine Messwerterfassung; Sweeps und Untersuchungen führen ihre Fälle nacheinander aus.

## Masse, Verbindungen und Modelle
{: #ground-connections-and-models}

Der Spannungsbezugspunkt von SPICE ist Knoten **0**. Ein Masse-Symbol oder eine Netzbezeichnung mit genau diesem Wert legt den Bezugspunkt fest. Das Wort **GND** allein ist ein gewöhnlicher Netzname, sofern es nicht ebenfalls mit Knoten 0 verbunden ist. Schwebende Schaltungen, unversorgte Modellanschlüsse und nicht verbundene Rückleitungen von Quellen sind häufige Probleme beim ersten Ausführen.

Leitungen müssen an den Verbindungspunkten der Anschlüsse enden. Text in der Nähe stellt keine Verbindung her. Eine Leitung, die den Endpunkt einer anderen Leitung oder die Anschlussbuchse eines Bauteils berührt, kann einen Knoten bilden, auch wenn Sie das nicht beabsichtigt haben. Verwenden Sie [Leitungsverbindungen](../Wires/) und die erzeugte Netzliste, um mehrdeutige Zeichnungen zu klären.

Jedes simulierte Bauteil benötigt eine gültige Vorlage, ein Modell und eine Anschlusszuordnung. Überprüfen Sie diese Angaben in den **SPICE**-Eigenschaften des platzierten Bauteils. Lesen Sie [SPICE-Modelle und Netlistenausgabe](../SPICE-output/), bevor Sie Hersteller-Modelle anhängen oder ein Symbol anpassen, das nur zur Darstellung dient.

## Setup, Run und Stop
{: #setup-run-and-stop}

**Run** startet eine neue Messwerterfassung anhand der aktuellen Schaltung und Einrichtung. Diagramme können während des Eintreffens von Daten aktualisiert werden. **Stop** beendet die Messwerterfassung und behält bereits eingetroffene Daten bei; anhand des Status und der Verfügbarkeit des Laufs können Sie erkennen, was gespeichert wurde. Die Funktion dient nicht zum Anhalten und Fortsetzen. Starten Sie einen weiteren Lauf, um erneut zu berechnen.

Änderungen an Schaltung, Modell oder Einrichtung machen das vorherige Ergebnis zu einem historischen Ergebnis. TinyCAD kennzeichnet Ergebnisse, für die eine erneute Ausführung erforderlich ist, statt alte Werte als Messungen der bearbeiteten Schaltung darzustellen. Der Verlauf speichert die Identität von Schaltung und Einstellungen, das Backend, den Zeitpunkt und das Ergebnis. Wenn Sie eine frühere Messwerterfassung auswählen, wählen Sie frühere Daten aus; dadurch wird der alte Schaltplan nicht wie mit einer Rückgängig-Funktion wiederhergestellt.

## Ergebnisse speichern und weitergeben
{: #save-and-share-results}

Speichern Sie die Zeichnung, um Schaltung, Modelle, Einrichtungen und erfasste Ergebnisse zu behalten. TinyCAD verwendet automatisch **`.dzn`**, wenn eine Zeichnung Simulationsbauteile, Einstellungen oder Ergebnisse enthält. **Save without results** behält die Simulationsdefinitionen sowie erfasste skalare Daten und Berichtsdaten bei, lässt jedoch numerische Signalverlaufs-Arrays weg; für Diagramme, die diese Arrays benötigen, ist dann eine neue Messwerterfassung erforderlich.

Gespeicherte numerische Daten sind auf 64 MiB pro Lauf und 256 MiB pro Zeichnung begrenzt; pro Einrichtung sind bis zu 1.000 Läufe möglich. Lange Untersuchungen mit kleinen Zeitschritten können diese Grenzen erreichen. Exportieren Sie wichtige Diagramme und CSV-Daten und entfernen Sie nicht mehr benötigte Ergebnisse. Speichern Sie Modellanhänge mit der Zeichnung, damit Empfänger nicht auf Ihre lokalen Dateipfade angewiesen sind.

## `.dzn`-Zeichnungen für Simulationen
{: #dzn-simulation-drawings}
{: #dzn-simulation-drawings}

**`.dzn` ist das komprimierte Zeichnungsformat von TinyCAD und wird ab TinyCAD v4 unterstützt.** Es verpackt Schaltplan, eingebettete Symbole, Simulation sheets, Quelleinstellungen, angehängten Modelltext und alle gespeicherten Messwerterfassungen in einer einzigen ZIP-basierten Datei. Numerische Signalverlaufsdaten werden im Container effizient gespeichert, einschließlich komplexer AC-Ergebnisse. Sie öffnen und speichern die Datei über die üblichen Befehle **File → Open**, **Save** und **Save As**; ein manuelles Entpacken ist nicht erforderlich.

Für gewöhnliche Zeichnungen wird das XML-Format **`.dsn`** verwendet. TinyCAD wählt automatisch `.dzn`, wenn Simulationsinhalte vorhanden sind, darunter Quellen, Messsonden, virtuelle Messgeräte, SPICE-Attribute, die Masse mit dem Namen `0`, Simulation sheets oder Ergebnisse. **Save without results** verwendet weiterhin `.dzn`, wenn die Simulationseinrichtung erhalten bleibt: Entfernt werden die umfangreichen Signalverlaufs-Arrays, nicht die Experimentdefinitionen.

Verwenden Sie **Save without results**, um eine kleinere Kopie zum Weitergeben zu erstellen, wenn der Empfänger die Simulation erneut ausführen kann. Behalten Sie die Ergebnisse bei, wenn der Empfänger Ihre Messwerterfassung, Messungen und Engine-Details prüfen können soll, ohne die Simulation erneut auszuführen. Eine gespeicherte Messwerterfassung beschreibt die Schaltung zum Zeitpunkt ihrer Ausführung; sie ersetzt keine erneute Ausführung nach einer Änderung.

TinyCAD v3 kann Dateien im Format `.dzn` nicht öffnen. Durch Ändern der Dateierweiterung in `.dsn` wird das Format weder konvertiert noch werden neue Simulationsdatensätze mit v3 kompatibel. Bewahren Sie beim Austausch eines Entwurfs mit einer älteren TinyCAD-Version eine Originalkopie auf. Ein `.cir`-Export ist SPICE-Text für einen Simulator und unterscheidet sich von beiden TinyCAD-Zeichnungsformaten.

## Mit der Referenz fortfahren
{: #continue-with-the-reference}

- [Analysen und Einstellungen](../Simulation-Analyses/) — DC, Transientenanalyse, AC, Rauschen, Übertragungsfunktion und Pol-Nullstellen.
- [Quellen, Messsonden und virtuelle Messgeräte](../Simulation-Sources-and-Instruments/) — Anregungen, Messanschlüsse und Belastung.
- [Diagramme, Messungen und Circuit Explorer](../Simulation-Charts-and-Measurements/) — Abstimmung, Sweeps, Anforderungen und Untersuchungen.
- [Mitgelieferte SPICE-Modelle](../Bundled-SPICE-Models/) — Modelle suchen, anhängen und anpassen.
- [SPICE-Modelle und Netlistenausgabe](../SPICE-output/) — Vorlagen, Modelldateien und externe Simulation.
- [XSPICE- und Digitalsimulation](../XSPICE/) — ereignisgesteuerte und gemischt-signalige Modelle in der Desktop-App.
- [Fehlerbehebung](../Simulation-Troubleshooting/) — Verbindungen, Modelle und numerische Probleme diagnostizieren.
- [Tutorials](../Simulation-Tutorials/) — die vollständigen vorhandenen SPICE- und XSPICE-Kurse mit ausführbaren Zeichnungen.

Für die Sprache und die Geräte-Referenz des Simulators selbst verwenden Sie die offizielle [ngspice-Dokumentation](https://ngspice.sourceforge.io/docs.html), das [Benutzerhandbuch im PDF-Format](https://ngspice.sourceforge.io/docs/ngspice-manual.pdf) und das [HTML-Handbuch](https://ngspice.sourceforge.io/docs/ngspice-html-manual/manual.xhtml). Das Handbuch beschreibt ngspice insgesamt; TinyCAD stellt die hier beschriebenen unterstützten integrierten Arbeitsabläufe bereit, nicht jedoch eine uneingeschränkte Befehlsshell.
