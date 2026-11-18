---
layout: default
title: 11. How TinyCAD implements SPICE
---
# 11. Wie TinyCAD SPICE implementiert
{: #how-tinycad-implements-spice}

[Zurück: Schaltungsuntersuchungen](/v4/SPICE-Tutorial-10/) · [Inhalt](/v4/Simulation-Tutorials/) · [XSPICE-Kurs](/v4/XSPICE-Tutorial-01/)

TinyCAD stellt den Schaltplaneditor, Simulationseinstellungen, Instrumente, Diagramme
und Messungen bereit. **ngspice** ist die darunterliegende Schaltungslösungs-Engine.
Sie zeichnen und konfigurieren das Experiment in TinyCAD; TinyCAD übersetzt es in
SPICE-Schaltungstext, führt ngspice aus und zeigt die zurückgegebenen Ergebnisse an.

Die Beispiele in diesem Kapitel sind in TinyCAD enthalten. Wählen Sie **Beispiel öffnen →
SPICE-Tutorial**, dann **divider** oder **rc-ac**, und anschließend **Zeichnung öffnen**.
Für die digitale Demonstration wählen Sie **Beispiel öffnen → XSPICE- und Digital-Tutorial →
logic-buffer → Zeichnung öffnen**. Es ist kein Tutorial- oder Modelldownload erforderlich.

## SPICE, ngspice und XSPICE
{: #spice-ngspice-and-xspice}

SPICE beschreibt Schaltungen anhand von Bauteilen, verbundenen Knoten und mathematischen Bauelemente-
modellen. Eine Arbeitspunktanalyse löst ihre Gleichungen für Gleichstrom. Eine Transienten-
analyse verfolgt ihr Verhalten über die simulierte Zeit. Eine Wechselstromanalyse linearisiert
die Schaltung um ihren Arbeitspunkt, um den Kleinsignal-Frequenzgang zu berechnen.
Die Auswahl der Analyse ist daher Teil der Definition des Experiments.

ngspice ist ein Open-Source-Simulator für gemischte Signale, der von Berkeley
SPICE abstammt. TinyCAD bündelt seine Engine, sodass Sie keinen separaten
Kommandozeilen-Simulator installieren und ausführen müssen. Die Engine, mit der diese Tutorials
qualifiziert wurden, ist **ngspice 47**; die Ansicht **Diagnose** eines Laufs nennt dessen Backend und Build.
Weitere Informationen zur Geschichte des Upstream-Projekts finden Sie in der [offiziellen ngspice-Übersicht](https://ngspice.sourceforge.io/presentation.html)
.

**XSPICE ist eine in ngspice integrierte Erweiterung**, keine weitere Anwendung,
die gestartet werden muss. Sie ergänzt Code-Modelle, darunter funktionale Analogblöcke und digitale
Logik, deren Ereignisse mit dem Analoglöser koordiniert werden. Eine Änderung des digitalen Zustands
kann sich somit in derselben Simulation auf eine analoge Schaltung auswirken. Die
[offizielle XSPICE-Einführung](https://ngspice.sourceforge.io/xspice.html)
beschreibt diesen Unterschied.

| TinyCAD-Umgebung | Ausführung der Engine | Zu verwendende Beispiele |
| --- | --- | --- |
| Desktop | Separater nativer Solver-Prozess mit gebündelten XSPICE-Code-Modellbibliotheken | Analoge SPICE-Beispiele und der XSPICE-Kurs |
| Browser | Zu WebAssembly kompiliertes ngspice, ausgeführt in einem separaten Web-Worker | Analoge SPICE-Beispiele und kompatible analoge Verhaltensmodelle; dieser Build enthält kein XSPICE |

TinyCAD wählt das Backend für die jeweilige Umgebung aus. Für die gebündelten Beispiele
müssen Sie weder eine ausführbare ngspice-Datei suchen noch einen externen Simulator auswählen.
Eine XSPICE-Zeichnung kann ihre Modelldefinitionen enthalten, benötigt aber weiterhin die
nativen Code-Modellbibliotheken von TinyCAD Desktop. Das Kopieren der Zeichnung in den
Browser ergänzt diese Engine-Funktionalität nicht.

## Von der Zeichnung zum Ergebnis
{: #from-drawing-to-result}

Die wichtigsten Schritte sind:

1. **Elektrische Verbindungen ermitteln.** TinyCAD bestimmt anhand von Leitungen,
   Verbindungsstellen und Netzbezeichnungen, welche Bauteilanschlüsse dasselbe Netz
   bilden. Eine Leitungsüberkreuzung stellt keine Verbindung her, solange die Netze in der
   Zeichnung nicht tatsächlich verbunden sind. Übereinstimmende Netzbezeichnungen
   verbinden voneinander entfernte Punkte; Text neben einer Leitung hingegen nicht.
2. **Bauteildefinitionen erweitern.** Jedes simulierte Symbol enthält eine SPICE-Vorlage.
   TinyCAD setzt darin die Referenz, die verbundenen Knotennamen und Werte ein
   und fügt die benötigten Bauelement- oder Unterprogrammschaltungsdefinitionen hinzu.
3. **Experiment hinzufügen.** Das Simulationsblatt enthält die Analyse,
   Temperatur, Parameter, Modellanhänge und angeforderten Signale. TinyCAD
   prüft vor dem Übermitteln der Schaltung auf fehlende Modelle, nicht zugeordnete Anschlüsse,
   doppelte Referenzen und andere erkennbare Einrichtungsfehler.
4. **ngspice ausführen.** Der Solver berechnet Spannungen, Ströme und andere angeforderte
   Größen. Er gibt Daten und ein Diagnoseprotokoll zurück; TinyCAD fasst sie zu einer
   Erfassung zusammen, die den Einstellungen und der Engine-Identität des Laufs zugeordnet ist.
5. **Untersuchen und messen.** TinyCAD zeigt Diagramme, numerische Daten und berechnete
   Messwerte an. Ein Grenzfrequenzmesswert wird beispielsweise aus den Wechselstromdaten abgeleitet;
   er ist kein weiteres in den Schaltplan eingefügtes Bauteil.

Das erklärt, warum eine korrekt aussehende Zeichnung nicht ausreicht: Ein Transistor benötigt
ein Modell und die richtige Anschlusszuordnung, während zwei Leitungen elektrisch verbunden sein
müssen, auch wenn ihre Endpunkte bei der aktuellen Zoomstufe nahe beieinander liegen.

## Welche Symbole sollte ich verwenden?
{: #which-symbols-should-i-use}

Öffnen Sie das **Impuls-Symbol** in der Symbolleiste. Der Hinweistext lautet **Simulation**.
In den folgenden Anweisungen bedeutet **Simulation → …** das Menü dieses Symbols.

| Benötigte Funktion | Wo zu finden | Was zu prüfen ist |
| --- | --- | --- |
| Widerstand, Kondensator, Induktivität, Diode, LED, NPN-/PNP-Transistor oder 741-Operationsverstärker | **Simulation → SPICE-Bauteile** oder die Bibliothek **SPICE essentials** | Wert, Polarität, Versorgung und Modellannahmen |
| Unabhängige Spannungs-/Stromquelle | **Simulation → SPICE → Quelle einfügen** | Quellentyp, Signalform, Einheiten und Anschlussrichtung |
| Bezugsknoten | **Simulation → SPICE → Masse einfügen** | Elektrisch verbinden; der SPICE-Bezug ist Knoten `0` |
| Spannungsbeobachtung | **Probe einfügen** oder **Differenzialprobe einfügen** im SPICE-Untermenü | Eine einseitig gemessene Spannung bezieht sich auf Masse; eine Differenzialprobe misst zwischen ihren Anschlüssen |
| Beobachtung des Zweigstroms | **Simulation → SPICE → Strommessprobe einfügen** | In Reihe einfügen und positive Richtung prüfen |
| Gesteuerte Quelle | **Simulation → SPICE → Gesteuerte Quelle einfügen** | Steueranschlüsse, Ausgangsanschlüsse und Verstärkung/Transkonduktanz |
| Messgeräte wie auf dem Labortisch | **Simulation → Laborgeräte** | Einstellungen für Oszilloskop, Multimeter, Funktionsgenerator und Labornetzteil; ihre Belastung und Grenzwerte sind relevant |
| Gewöhnliche modellierte Logik | Bibliothek **Digital logic** | Diese konfigurierbaren, portablen SPICE-Modelle unterscheiden sich von den ereignisgesteuerten XSPICE-Beispielen; Versorgungsanschlüsse und Modelleigenschaften prüfen |
| Ereignisgesteuerte XSPICE-Logik | Eingebettete Beispiele im **XSPICE- und Digital-Tutorial** | Desktop verwenden und die Analog-/Digital-Brücken im Modell beibehalten |

Die Bibliothek SPICE essentials enthält vorkonfigurierte Beispiele für gängige
Bauelemente. Ein generischer Transistor oder ein 741-Modell eignet sich zum Lernen, doch
sein simuliertes Verhalten entspricht nicht automatisch den Spezifikationen eines bestimmten
Herstellerbauteils. In den Kapiteln zu Verstärkern werden die anstelle der ursprünglichen `AMP.DSN`-Bauteile verwendeten generischen
Modelle ausdrücklich dokumentiert.

Ein Symbol aus einer anderen Bibliothek ist möglicherweise nur für die Zeichnung gedacht. Wählen Sie das platzierte Symbol aus
und prüfen Sie in seinen Eigenschaften die Registerkarte **SPICE**. Es benötigt eine gültige SPICE-Vorlage
sowie alle darin referenzierten Modelldefinitionen. Ein übereinstimmender Name, ein passendes Gehäuse oder
Bild fügt diese Definitionen nicht hinzu. Ebenso benennt eine Bezeichnung `VCC` ein
Netz; sie erzeugt keine Versorgungsspannung. Verbinden Sie eine tatsächliche Quelle mit diesem Netz.

## Ein vorhandenes Experiment ausführen
{: #run-an-existing-experiment}

1. Wählen Sie **Beispiel öffnen → SPICE-Tutorial → divider → Zeichnung öffnen**.
2. Wählen Sie das zugehörige Blatt **Simulation**. Unter **Einrichtung** ist die gespeicherte Analyse
   **Gleichstrommessung — Arbeitspunkt**. Die Schaltung verwendet eine 5-V-Quelle und zwei
   1-kΩ-Widerstände.
3. Wählen Sie **Ausführen**. Verwenden Sie **Simulation → Diagramme anzeigen**, falls das Diagrammfenster ausgeblendet ist.
4. Prüfen Sie `in`, `out` und `v1#branch`. Erwartet werden **5 V**, **2,5 V** und
   **−2,5 mA**. Der Quellenstrom ist in den positiven Anschluss hinein definiert, daher ist der Strom
   einer Leistung abgebenden Quelle hier negativ.
5. Ändern Sie R2 auf `2k` im Schaltplanblatt und führen Sie die Simulation erneut aus. OUT sollte dann
   ungefähr **3,333 V** betragen. Eine ältere gespeicherte Erfassung beschreibt weiterhin
   die frühere Schaltung; durch eine Wertänderung werden ihre Ergebnisse nicht geändert.

![Simulationsblatt von TinyCAD mit RC-Wechselstromanalyse und Grenzfrequenzmesswert](/v4/images/simulation-tutorials/spice/tinycad-ac-setup.png)

Dieser Anwendungs-Screenshot zeigt die Ansicht **Einrichtung** für **rc-ac**, ein weiteres
integriertes Beispiel. Der Filter mit 1 kΩ und 1 µF hat eine Grenzfrequenz nahe **159,15 Hz**. Öffnen Sie ihn,
um ein Frequenzbereichsexperiment mit dem einzelnen Gleichstrom-Arbeitspunkt des Teilers zu vergleichen.

**Ausführen** startet eine endliche Erfassung mit der ausgewählten Analyse. **Stopp** beendet
den Solver und bewahrt die akzeptierten Abtastwerte; diese Werte sind ein Teilergebnis,
kein Nachweis dafür, dass die angeforderte Dauer vollständig erreicht wurde. Diese Builds bieten
keine Pause-/Fortsetzungsfunktion und keinen unbegrenzt laufenden Solver. Verwenden Sie **Verlauf**, um frühere
Läufe zu prüfen, und **Diagnose**, um das Solverprotokoll zu lesen.

Sehen Sie sich zur Demonstration [einen Teiler öffnen, ausführen und ändern](/v4/videos/simulation-tutorials/spice/first-run.mp4)
und [Wechselstromgang und Grenzfrequenz](/v4/videos/simulation-tutorials/spice/ac-response.mp4) an. Beide zeigen die tatsächlichen Desktop-
Bedienelemente, abgeschlossene native Erfassungen und numerische Ergebnisse samt Beschriftungen.

## Die erste eigene Simulation erstellen
{: #build-your-own-first-simulation}

Platzieren Sie zwei Widerstände über **Simulation → SPICE-Bauteile**, eine Quelle mit **Quelle einfügen**
und eine Masse mit **Masse einfügen**. Ordnen Sie sie als Spannungsteiler an: Quellenplus
zu R1, R1 zu R2 und R2 zurück zu Quellenminus und Masse. Geben Sie beiden Widerständen
`1k`, stellen Sie die Quelle auf 5 V Gleichspannung ein und bezeichnen Sie die Versorgung mit `IN` und den Mittelpunkt mit `OUT`.
Achten Sie darauf, dass jedes Bauteil eine eindeutige Referenz wie R1, R2 und V1 hat.

Wählen Sie **Simulation → Simulieren**, um ein Simulationsblatt zu erstellen. Wählen Sie unter
**Einrichtung** die Option **Gleichstrommessung — Arbeitspunkt**, dann **Ausführen**. Sie sollten
dieselben Werte wie im integrierten Teilerbeispiel erhalten. Falls die Simulation fehlschlägt,
vergleichen Sie Verbindungen, Quelleinstellungen und SPICE-Eigenschaften mit diesem funktionierenden Beispiel.

Wählen Sie für eine Transientenanalyse **Über die Zeit — Transientenanalyse**, stellen Sie die Dauer
und den maximalen Zeitschritt ein und konfigurieren Sie eine zeitabhängige Quelle. Wählen Sie für Wechselstrom
**Frequenzgang — Wechselstrom**, legen Sie den Frequenzbereich und die Punkte pro Dekade fest
und geben Sie der Eingangsquelle eine von null verschiedene **Wechselstromamplitude**, üblicherweise 1 V. Ihre Sinusfrequenz
und Transientenamplitude bestimmen nicht den Wechselstrom-Sweep. TinyCAD bietet außerdem
Gleichstrom-Sweep-, Rausch-, Übertragungsfunktions- und Pol-Nullstellen-Analysen; in den vorherigen Kapiteln
wird erläutert, wann sie sinnvoll sind.

## Den erzeugten SPICE-Code prüfen und Modelle hinzufügen
{: #inspect-the-generated-spice-and-add-models}

Öffnen Sie nach der Simulation des Teilers **Diagnose → Schaltungstext erzeugen**.
Die wichtigen Zeilen sehen so aus; TinyCAD fügt außerdem Temperatur- und gespeicherte
Signal-Direktiven hinzu:

```spice
R1 IN OUT 1k
R2 OUT 0 1k
V1 IN 0 DC 5 AC 0 0
.op
.end
```

`R1 IN OUT 1k` bedeutet einen 1-kΩ-Widerstand zwischen den Knoten IN und OUT. `0` ist der
Bezugsknoten. Dieser Text macht Verbindungen und Quellenpolarität ausdrücklich sichtbar.
Verwenden Sie **Schaltung exportieren**, wenn Sie die Netzliste separat prüfen oder ausführen möchten.
Das Simulationsblatt von TinyCAD verwaltet `.op`, `.tran`, `.ac` und die anderen Analyse-
Befehle; fügen Sie sie oder `.end` nicht in die SPICE-Eigenschaften eines Bauteils ein.

Klappen Sie für ein zusätzliches Bauelementmodell **Einrichtung → SPICE-Modelle** auf. Wählen Sie eine
Datei vom Typ `.lib`, `.cir` oder `.mod`, oder geben Sie ihren Dateinamen und Modelltext ein. Wählen Sie in beiden
Fällen **Modell speichern**, um es anzuhängen. Verwenden Sie einen einfachen Dateinamen wie
`device.lib`. Konfigurieren Sie anschließend die
SPICE-Vorlage des Symbols so, dass sie das passende Bauelement oder `.SUBCKT` instanziiert,
und fügen Sie den Anhang bei Bedarf ein, beispielsweise mit `.include device.lib`
im Präambeltext. Das bloße Anhängen einer Datei ordnet sie keinem Symbol zu.

Prüfen Sie die Anschlussreihenfolge des Modells anhand der **Anschlussnummern** des Symbols, nicht anhand der
scheinbaren Positionen der Anschlüsse auf der Seite. Ein Dreianschluss-Transistormodell und ein Hersteller-
Unterprogramm können unterschiedliche Knotenanordnungen verwenden. Prüfen Sie auch verschachtelte Modell-
referenzen: Eingebundene Dateien müssen ebenfalls an das Simulationsblatt angehängt werden.
Die Modelldefinitionen und Anhänge werden mit der gespeicherten Zeichnung mitgeführt.

TinyCAD unterstützt eingebetteten Modelltext, aber keine beliebigen ngspice-Befehlsskripte oder
externen ausführbaren Module. `.control`-Blöcke, Shell-Befehle, das Laden externer Module
und dateibasierte Anregungen/Modelle sind in diesem Arbeitsablauf ausgeschlossen. Verwenden Sie
die unterstützten Quelleneinstellungen und Analysen oder exportieren Sie die Schaltung für ein
separates ngspice-Experiment über die Kommandozeile. Ein Herstellermodell, das für einen anderen
SPICE-Dialekt geschrieben wurde, muss möglicherweise angepasst werden, bevor ngspice es akzeptiert.

## Einordnung digitaler Simulationen
{: #how-digital-simulations-fit-in}

Öffnen Sie **XSPICE- und Digital-Tutorial → logic-buffer** in TinyCAD Desktop. Sein X1-Modell
enthält eine Analog-Digital-Brücke, einen ereignisgesteuerten Puffer und eine
Digital-Analog-Brücke. Die gewöhnliche Quelle steuert den analogen Eingang;
die Brücken machen die Logikzustände in den Diagrammen von TinyCAD als Spannungen sichtbar.

![Berechneter Ein- und Ausgang des integrierten XSPICE-Puffers](/v4/images/simulation-tutorials/xspice/logic-buffer-results.png)

Führen Sie die gespeicherte Transientenanalyse aus. Erwartet werden Impulse von 0–5 V mit einer Periode von 1 µs und ein Ausgangs-
übergang mit einer Verzögerung von ungefähr 20 ns sowie endlichen Flanken. Zoomen Sie hinein, um
die Verzögerung zu untersuchen. Diese Abbildung zeigt tatsächliche Solver-Ergebnisse des Beispiels.

Die digitalen Knoten des Modells sind keine gewöhnlichen Spannungsknoten. Die Schwellenwerte der Brücke
und ihre Darstellung eines undefinierten Zustands sind bewusste Modellierungsentscheidungen.
Ein aus analogen SPICE-Ausdrücken aufgebautes Verhaltensgatter kann im Diagramm ähnlich aussehen,
verwendet aber eine andere Simulationsmethode. Fahren Sie mit der
[XSPICE-Übersicht](/v4/XSPICE-Tutorial-01/) für Brücken, Zeitsteuerung, Speicherung und
Mixed-Signal-Schaltungen fort.

## Speichern, vergleichen und Fehler beheben
{: #save-compare-and-troubleshoot}

Speichern Sie Ihr Experiment mit **Speichern unter**, um eine bearbeitbare Kopie des integrierten
Beispiels zu behalten. TinyCAD kann Erfassungen mit der Zeichnung speichern; **Ohne
Ergebnisse speichern** behält Schaltung und Einrichtung bei, lässt aber die gespeicherten Ergebnisse aus.
Verwenden Sie **Daten**-Exporte im CSV-, JSON- oder SPICE-Rohdatenformat, wenn weitere Analysen erforderlich sind.
Notieren Sie, welche Erfassung, welches Modell und welches Messfenster Sie verwendet haben.

| Symptom | Zuerst prüfen |
| --- | --- |
| SPICE-Informationen fehlen | Ein modelliertes Symbol verwenden oder dessen SPICE-Registerkarte konfigurieren |
| Modell oder Unterprogramm fehlt | Modellname, angehängte Dateien, Include-Anweisung und Anschlussreihenfolge |
| Schwebende Schaltung oder fehlende Masse | Eine angeschlossene SPICE-Masse und geeignete Gleichstrom-Rückwege |
| Versorgungsbezeichnung, aber keine Versorgungsspannung | Eine Spannungsquelle oder ein Labornetzteil mit dem bezeichneten Netz verbinden |
| Leerer/Null-Wechselstromgang | Wechselstromamplitude des Eingangs und ausgewählte Signale |
| XSPICE-Modell im Browser nicht verfügbar | Beispiel in TinyCAD Desktop ausführen |
| Diagramm entspricht nicht den bearbeiteten Werten | Simulation erneut ausführen und neue Erfassung auswählen |
| Konvergenzfehler oder unvollständige Signalform | Diagnose lesen, Schaltung vereinfachen sowie Signalflanken, Zeitschritt und Modellgültigkeit prüfen |

Das [ngspice-Handbuch](https://ngspice.sourceforge.io/docs.html) ist die Referenz
für Bauelement- und Modellsemantik. Die Bedienelemente von TinyCAD bestimmen, welche dieser
Funktionen über den integrierten Arbeitsablauf verfügbar sind.

## Lektion-Schaltungen herunterladen
{: #download-the-lesson-circuits}

Dieselben Beispiele sind bereits unter **Beispiel öffnen** verfügbar. Für eine unabhängige Kopie laden Sie eine `.dzn`-Zeichnung herunter und wählen Sie in TinyCAD **Datei → Öffnen**. Die zugehörige `.cir`-Datei enthält SPICE-Text zum Prüfen oder für einen kompatiblen externen Simulator, keine TinyCAD-Zeichnung. Für neue Simulationen von XSPICE-Schaltungen ist Desktop erforderlich.

| Beispiel | Zeichnung | Netzliste |
| --- | --- | --- |
| divider | [TinyCAD-Zeichnung](/v4/examples/simulation-tutorials/spice/divider.dzn) | [SPICE-Text](/v4/examples/simulation-tutorials/spice/divider.cir) |
| logic-buffer | [TinyCAD-Zeichnung](/v4/examples/simulation-tutorials/xspice/logic-buffer.dzn) | [SPICE-Text](/v4/examples/simulation-tutorials/xspice/logic-buffer.cir) |
