---
layout: default
---
# Simulation und SPICE
{: #simulation-and-spice}

TinyCAD kann elektronische Schaltungssimulationen ausführen, Ergebnisse darstellen und das Schaltungsverhalten messen, ohne die Zeichnung verlassen zu müssen. Die integrierte Engine ist **ngspice**. Sowohl der Browser als auch die Desktop-App enthalten eine Engine; für den integrierten Arbeitsablauf benötigen Sie keine separate ngspice-Installation.

Neu bei der Simulation? Beginnen Sie mit dem [geführten SPICE-Kurs](../SPICE-Tutorial/). Für ein schnelles erstes Ergebnis führen Sie die folgenden Schritte zum Spannungsteiler aus. Diese Referenz erklärt die Bedienelemente und wie ihre Ergebnisse zu interpretieren sind.

## Was ein Schaltungssimulator berechnet
{: #what-a-circuit-simulator-calculates}

SPICE steht für *Simulation Program with Integrated Circuit Emphasis*. Ein Simulator löst ein mathematisches Modell einer verbundenen Schaltung: Widerstände setzen Spannung und Strom in Beziehung, Kondensatoren und Induktivitäten speichern Energie, und Halbleitermodelle beschreiben nichtlineares Verhalten. Er kann den Gleichspannungsarbeitspunkt bestimmen, zeitabhängige Signalverläufe berechnen und das Kleinsignal-Frequenzverhalten untersuchen.

Ein Schaltplan liefert die **Verbindungen**; ein SPICE-Modell liefert das **Verhalten**; eine Analyse legt fest, **was berechnet werden soll**. Alle drei müssen korrekt sein. Eine realistische Abbildung eines Verstärkers oder Prozessors bedeutet nicht, dass sie ein Simulationsmodell enthält. Umgekehrt kann ein einfaches Dreieck oder Rechteck ein nützliches Verhaltensmodell enthalten.

Eine Simulation ist nützlich, um eine Idee zu prüfen, Bauteilwerte zu vergleichen und ein unerwartetes Verhalten zu verstehen. Das Ergebnis hängt vom Modell und den von Ihnen vorgegebenen Bedingungen ab. Ideale Drähte haben keinen unbeabsichtigten Widerstand oder keine Induktivität; ein allgemeines Transistormodell ist keine vollständige Spezifikation für jeden Transistor. Belastung, Versorgungsimpedanz, Toleranzen und Temperatur werden nur insoweit berücksichtigt, wie sie durch die gewählten Modelle abgebildet werden.

## Browser- und Desktop-Engines
{: #browser-and-desktop-engines}

| Funktion | Browser | Desktop-App |
| --- | --- | --- |
| Analoge SPICE-Simulation, Diagramme, Messungen und Exploration | Integriertes WebAssembly-ngspice in einem Worker | Integriertes natives ngspice über einen Hilfsprozess |
| Portable Bibliotheken für modellierte digitale Logik / Funktionsblöcke / Sensoren und Schnittstellen | Ja | Ja |
| Ereignisgesteuerte XSPICE-Code-Modelle | Nicht unterstützt¹ | Ja, integrierte native Code-Modellbibliotheken |
| Pop-out-Fenster für Diagramme | Ja | Ja |
| Pop-out-Fenster für virtuelle Messgeräte | Nein | Ja |

¹ Browser-Builds können eine Zeichnung mit gespeicherten XSPICE-Ergebnissen zur Anzeige öffnen. Die XSPICE-Ausführung erfordert Desktop.

Die Berechnung erfolgt lokal in der Browser- oder Desktop-Engine. Die Online-Bibliothekssuche ist eine separate Funktion. Die aktuelle integrierte Engine basiert auf ngspice 47; der Ausführungsverlauf gibt die für eine Erfassung verwendete Engine bzw. den verwendeten Build an. Prüfen Sie bei Fragen zur Modellsyntax oder zu Unterschieden zwischen Engines das passende Upstream-Handbuch.

## Erste Simulation ausführen
{: #run-your-first-simulation}

1. Öffnen Sie **Beispiel öffnen** in der Browser-Titelleiste oder **Datei → Beispiel öffnen** in Desktop.
2. Wählen Sie **SPICE-Tutorial → Spannungsteiler → Zeichnung öffnen**.
3. Prüfen Sie die Schaltung: Eine 5-V-Quelle speist zwei in Reihe geschaltete 1-kΩ-Widerstände. **OUT** ist ihr Mittelpunkt, und die untere Leitung ist Masse **0**.
4. Wählen Sie in der Blatt-Leiste das **Spannungsteiler-Simulationsblatt** aus. Sein uhrähnliches Symbol unterscheidet es von einem Schaltplanblatt. Öffnen Sie **Einrichtung** und lassen Sie **Arbeitspunkt** ausgewählt.
5. Wählen Sie **Ausführen**. Öffnen Sie nach Abschluss **Verlauf** und wählen Sie die neue abgeschlossene Erfassung aus.
6. Öffnen Sie **Daten**. Am Mittelpunkt liegen **2.5 V** an. Der Quellenstrom beträgt **−2.5 mA**, da die Strombezugsrichtung der Spannungsquelle in ngspice in ihren positiven Anschluss hinein zeigt; eine Quelle liefert in dieser Schaltung Strom und weist daher einen negativen Strom auf.
7. Ändern Sie einen Widerstand und führen Sie die Simulation erneut aus. Vergleichen Sie das neue Ergebnis mit der ursprünglichen Erfassung.

{% include video-player.html src="/v4/videos/simulation/first-simulation.mp4" poster="/v4/videos/simulation/first-simulation.jpg" caption="Öffnen Sie den integrierten Spannungsteiler, prüfen Sie seine Einrichtung und führen Sie eine neue ngspice-Erfassung im Browser aus. Die Datentabelle bestätigt 2.5 V an OUT und −2.5 mA durch die Quelle." %}

Das Beispiel enthält eine gespeicherte Referenzerfassung. Ein Ergebnis unmittelbar nach dem Öffnen zu sehen bedeutet nicht, dass eine neue Berechnung ausgeführt wurde. **Verlauf** unterscheidet diese gespeicherten Daten von der Erfassung, die Sie mit Ausführen erstellen.

## Neue Simulation erstellen
{: #build-a-new-simulation}

1. Platzieren Sie modellierte Bauteile unter **Standard → SPICE-Grundlagen**, oder verwenden Sie im Untermenü **Simulation → SPICE-Bauteile** der Symbolleiste. **Mehr…** öffnet die vollständige Sammlung der SPICE-Grundlagen.
2. Verbinden Sie die Pins mit Drähten und versehen Sie wichtige Knoten mit aussagekräftigen Bezeichnungen. Stellen Sie eine tatsächliche Verbindung zur Masse **0** her: **Simulation → SPICE → Masse einfügen** fügt das richtige Stromversorgungssymbol ein.
3. Fügen Sie mit **Simulation → SPICE → Quelle einfügen** ein Anregungssignal hinzu. Legen Sie dessen Spannungs- oder Stromtyp und Signalform fest. Fügen Sie [Messsonden](../Simulation-Sources-and-Instruments/#probes-and-ground) hinzu, wenn Sie praktische Diagramme erstellen möchten.
4. Wählen Sie **Simulation → Simulieren**, um ein **Simulationsblatt** hinzuzufügen.
5. Wählen Sie unter **Einrichtung** eine Analyse und deren Einstellungen aus. Legen Sie Parameter fest oder fügen Sie benutzerdefinierten Modelltext hinzu, wenn Ihre Schaltung dies erfordert.
6. Wählen Sie Signale aus, führen Sie die Simulation aus und prüfen Sie den Bereich **Simulationsdiagramme** sowie die Ansichten **Daten**, **Verlauf** und **Diagnose** des Blatts. Beheben Sie gemeldete Verdrahtungs- oder Modellfehler, bevor Sie sich auf die Werte verlassen.

Auf einem Simulationsblatt erscheinen **Ausführen** und **Anhalten** in der Hauptsymbolleiste. Das Blatt beginnt mit **Einrichtung**. **Verlauf** und **Diagnose** werden angezeigt, sobald eine Ausführung vorliegt; **Messungen** und **Daten** werden angezeigt, sobald numerische Daten verfügbar sind. Die Werkzeuge des Schaltungsexplorers befinden sich in der Einrichtung unter den Analyseinstellungen; fügen Sie über **Werkzeuge hinzufügen** nur die benötigten Werkzeuge hinzu.

Alle Schaltplanblätter einer Zeichnung bilden **eine Schaltung**. Jedes Simulationsblatt besitzt eine separate Einrichtung: Analyse, Parameter, angehängte Modelle, Signalauswahl, Anweisungen und Ausführungsverlauf. Ein zweites Simulationsblatt hinzuzufügen erzeugt keine separate zweite Schaltplan-Schaltung. So können Sie dieselbe Schaltung auf eine andere Weise untersuchen, beispielsweise mit einer AC-Analyse neben einer Transientenanalyse.

Verwenden Sie für jede Untersuchung einen eindeutigen Einrichtungsnamen. Beim Duplizieren einer Einrichtung werden ihre Definitionen kopiert, nicht jedoch ihre Erfassungen. Es wird jeweils nur eine Erfassung ausgeführt; Sweeps und Studien führen ihre Fälle nacheinander aus.

## Masse, Verbindungen und Modelle
{: #ground-connections-and-models}

Der Spannungsbezugspunkt von SPICE ist Knoten **0**. Ein Stromversorgungssymbol oder eine Netzbezeichnung mit genau diesem Wert legt den Bezugspunkt fest. Das Wort **GND** allein ist ein gewöhnlicher Netzname, sofern es nicht ebenfalls mit Knoten 0 verbunden ist. Schwebende Schaltungen, unversorgte Modellversorgungspins und nicht verbundene Quellenrückleitungen sind häufige Probleme beim ersten Ausführen.

Drähte müssen an den Verbindungspunkten der Pins anliegen. Text in der Nähe stellt keine Verbindung her. Ein Draht, der den Endpunkt eines anderen Drahts oder eine Bauteilbuchse berührt, kann einen Knoten erzeugen, auch wenn das nicht beabsichtigt war. Verwenden Sie [Drahtverbindungen](../Wires/) und die erzeugte Netzliste, um mehrdeutige Zeichnungen zu untersuchen.

Jedes simulierte Bauteil benötigt eine gültige Vorlage, ein Modell und eine Pinzuordnung. Prüfen Sie diese über die **SPICE**-Eigenschaften des platzierten Bauteils. Lesen Sie [SPICE-Modelle und Netlistenausgabe](../SPICE-output/), bevor Sie Herstellermodelle anhängen oder ein Symbol anpassen, das nur für Zeichnungen gedacht ist.

## Einrichtung, Ausführen und Anhalten
{: #setup-run-and-stop}

**Ausführen** startet eine neue Erfassung mit der aktuellen Schaltung und Einrichtung. Diagramme können aktualisiert werden, während Daten eintreffen. **Anhalten** beendet die Erfassung und behält bereits eingetroffene Daten bei; Status und Verfügbarkeit der Ausführung geben an, was gespeichert wurde. Es handelt sich nicht um eine Steuerung zum Anhalten und Fortsetzen. Starten Sie eine weitere Ausführung, um erneut zu berechnen.

Änderungen an Schaltung, Modell oder Einrichtung machen das vorherige Ergebnis zu einem historischen Ergebnis. TinyCAD kennzeichnet Ergebnisse, für die eine erneute Ausführung erforderlich ist, statt alte Werte als Messungen der geänderten Schaltung darzustellen. Der Verlauf erfasst die Identität von Schaltung und Einstellungen, das Backend, den Zeitpunkt und das Ergebnis. Wenn Sie eine frühere Erfassung auswählen, wählen Sie frühere Daten aus; dadurch wird der alte Schaltplan nicht wie bei einem Rückgängigmachen wiederhergestellt.

## Ergebnisse speichern und teilen
{: #save-and-share-results}

Speichern Sie die Zeichnung, um Schaltung, Modelle, Einrichtungen und erfasste Ergebnisse zu behalten. TinyCAD verwendet automatisch **`.dzn`**, wenn eine Zeichnung Simulationsbauteile, Einstellungen oder Ergebnisse enthält. **Ohne Ergebnisse speichern** behält die Simulationsdefinitionen und erfassten Skalar- und Berichtsdaten bei, lässt aber numerische Signalverlaufsarrays weg; Diagramme, die diese Arrays benötigen, erfordern dann eine neue Erfassung.

Gespeicherte numerische Daten sind auf 64 MiB pro Ausführung und 256 MiB pro Zeichnung begrenzt, bei bis zu 1.000 Ausführungen pro Einrichtung. Lange Studien mit kleinen Zeitschritten können diese Grenzen erreichen. Exportieren Sie wichtige Diagramme und CSV-Daten und entfernen Sie nicht mehr benötigte Ergebnisse. Speichern Sie Modellanhänge zusammen mit der Zeichnung, damit Empfänger keine lokalen Dateipfade benötigen.

## `.dzn`-Simulationszeichnungen
{: #dzn-simulation-drawings}
{: #dzn-simulation-drawings}

**`.dzn` ist das komprimierte Zeichnungsformat von TinyCAD, das ab TinyCAD v4 unterstützt wird.** Es bündelt den Schaltplan, eingebettete Symbole, Simulationsblätter, Quelleinstellungen, angehängten Modelltext und alle gespeicherten Erfassungen in einer einzelnen ZIP-basierten Datei. Numerische Signalverlaufsdaten werden im Container effizient gespeichert, einschließlich komplexer AC-Ergebnisse. Sie öffnen und speichern die Datei mit den normalen Befehlen **Datei → Öffnen**, **Speichern** und **Speichern unter**; ein manuelles Entpacken ist nicht erforderlich.

Gewöhnliche Zeichnungen verwenden das XML-Format **`.dsn`**. TinyCAD wählt automatisch `.dzn`, wenn Simulationsinhalte vorhanden sind, darunter Quellen, Messsonden, virtuelle Messgeräte, SPICE-Attribute, Masse mit dem Namen `0`, Simulationsblätter oder Ergebnisse. **Ohne Ergebnisse speichern** verwendet weiterhin `.dzn`, wenn die Simulationseinrichtung beibehalten wird: Dabei werden die umfangreichen Signalverlaufsarrays entfernt, nicht die Experimentdefinitionen.

Verwenden Sie **Ohne Ergebnisse speichern** für eine kleinere Kopie zum Teilen, wenn der Empfänger die Simulation erneut ausführen kann. Behalten Sie die Ergebnisse bei, wenn der Empfänger Ihre Erfassung, Messungen und Engine-Details prüfen können soll, ohne sie erneut auszuführen. Eine gespeicherte Erfassung beschreibt die Schaltung zum Zeitpunkt ihrer Ausführung; sie ersetzt keine erneute Ausführung nach einer Änderung.

TinyCAD v3 kann `.dzn`-Dateien nicht öffnen. Das Ändern der Dateierweiterung in `.dsn` konvertiert das Format nicht und macht neue Simulationsdatensätze nicht mit v3 kompatibel. Bewahren Sie eine Originalkopie auf, wenn Sie einen Entwurf mit einer älteren TinyCAD-Version austauschen. Ein `.cir`-Export ist SPICE-Text für einen Simulator; er unterscheidet sich von beiden TinyCAD-Zeichnungsformaten.

## Mit der Referenz fortfahren
{: #continue-with-the-reference}

- [Analysen und Einstellungen](../Simulation-Analyses/) — DC, transient, AC, Rauschen, Übertragungsfunktion und Pole-Nullstellen-Analyse.
- [Quellen, Messsonden und virtuelle Messgeräte](../Simulation-Sources-and-Instruments/) — Anregungssignale, Messanschlüsse und Belastung.
- [Diagramme, Messungen und Schaltungsexplorer](../Simulation-Charts-and-Measurements/) — Abstimmung, Sweeps, Anforderungen und Studien.
- [SPICE-Modelle und Netlistenausgabe](../SPICE-output/) — Vorlagen, Modelldateien und externe Simulation.
- [XSPICE- und digitale Simulation](../XSPICE/) — ereignisgesteuerte Desktop- und Mixed-Signal-Modelle.
- [Fehlerbehebung](../Simulation-Troubleshooting/) — Verbindungen, Modelle und numerische Probleme diagnostizieren.
- [Tutorials](../Simulation-Tutorials/) — die vollständigen vorhandenen SPICE- und XSPICE-Kurse mit ausführbaren Zeichnungen.

Für die Sprache und Bauteilreferenz des Simulators selbst verwenden Sie die offizielle [ngspice-Dokumentation](https://ngspice.sourceforge.io/docs.html), das [Benutzerhandbuch als PDF](https://ngspice.sourceforge.io/docs/ngspice-manual.pdf) und das [HTML-Handbuch](https://ngspice.sourceforge.io/docs/ngspice-html-manual/manual.xhtml). Das Handbuch beschreibt ngspice als Ganzes; TinyCAD stellt die hier beschriebenen unterstützten integrierten Arbeitsabläufe bereit, keine uneingeschränkte Befehlszeile.
