---
layout: default
title: 11. How TinyCAD implements SPICE
---
# 11. Wie TinyCAD SPICE implementiert
{: #how-tinycad-implements-spice}

[Zurück: Entwurfsuntersuchungen](/v4/SPICE-Tutorial-10/) · [Inhalt](/v4/Simulation-Tutorials/) · [XSPICE-Kurs](/v4/XSPICE-Tutorial-01/)

TinyCAD stellt den Schaltplaneditor, Simulationseinstellungen, Instrumente, Diagramme
und Messungen bereit. **ngspice** ist die darunterliegende Schaltungslösungs-Engine.
Sie zeichnen und konfigurieren das Experiment in TinyCAD; TinyCAD übersetzt es in
SPICE-Schaltungstext, führt ngspice aus und zeigt die zurückgegebenen Ergebnisse an.

Die Beispiele in diesem Kapitel sind in TinyCAD enthalten. Wählen Sie **Open Example →
SPICE tutorial**, wählen Sie **divider** oder **rc-ac** und wählen Sie anschließend **Open Drawing**.
Verwenden Sie für die digitale Demonstration **Open Example → XSPICE and digital tutorial →
logic-buffer → Open Drawing**. Ein Tutorial- oder Modelldownload ist nicht erforderlich.

## SPICE, ngspice und XSPICE
{: #spice-ngspice-and-xspice}

SPICE beschreibt Schaltungen als Bauteile, verbundene Knoten und mathematische Bauelementmodelle.
Eine Arbeitspunktanalyse löst ihre Gleichungen für Gleichstrom. Eine Transientenanalyse
verfolgt ihr Verhalten über die simulierte Zeit. Die AC-Analyse linearisiert
die Schaltung um ihren Arbeitspunkt, um den Kleinsignal-Frequenzgang zu berechnen.
Die Auswahl der Analyse ist daher Teil der Definition des Experiments.

ngspice ist ein Open-Source-Mixed-Signal-Schaltungssimulator, der von Berkeley
SPICE abstammt. TinyCAD bündelt seine Engine, sodass Sie keinen separaten
Kommandozeilen-Simulator installieren und ausführen müssen. Die Engine, mit der diese Tutorials
qualifiziert wurden, ist **ngspice 47**; die Ansicht **Diagnostics** eines Laufs gibt Auskunft über Backend und Build.
Siehe die [offizielle ngspice-Übersicht](https://ngspice.sourceforge.io/presentation.html)
für Hintergrundinformationen zum Upstream-Projekt.

**XSPICE ist eine in ngspice integrierte Erweiterung** und keine weitere Anwendung,
die gestartet werden muss. Sie ergänzt Code-Modelle, darunter funktionale analoge Blöcke und digitale
Logik, deren Ereignisse mit dem Analoglöser koordiniert werden. Eine Änderung des digitalen Zustands
kann daher im selben Simulationslauf eine analoge Schaltung beeinflussen. Die
[offizielle XSPICE-Einführung](https://ngspice.sourceforge.io/xspice.html)
beschreibt diesen Unterschied.

| TinyCAD-Umgebung | Ausführung der Engine | Zu verwendende Beispiele |
| --- | --- | --- |
| Desktop | Separater nativer Solver-Prozess mit gebündelten XSPICE-Code-Modellbibliotheken | Analoge SPICE- und XSPICE-Kursinhalte |
| Browser | Zu WebAssembly kompiliertes ngspice, das in einem separaten Web-Worker läuft | Analoge SPICE- und kompatible analoge Verhaltensmodelle; dieser Build enthält kein XSPICE |

TinyCAD wählt das Backend für die jeweilige Umgebung aus. Sie müssen weder eine
ngspice-Programmdatei suchen noch für die gebündelten Beispiele einen externen Simulator auswählen.
Ein XSPICE-Schaltplan kann seine Modelldefinitionen enthalten, benötigt aber weiterhin die
nativen Code-Modellbibliotheken, die mit Desktop bereitgestellt werden. Wenn Sie den Schaltplan
in den Browser kopieren, erhält die Engine dadurch keine zusätzlichen Funktionen.

## Vom Schaltplan zum Ergebnis
{: #from-drawing-to-result}

Die wichtigsten Schritte sind:

1. **Elektrische Verbindungen ermitteln.** TinyCAD bestimmt anhand von Leitungen,
   Verbindungspunkten und Netzbezeichnungen, welche Bauteilanschlüsse zu demselben Netz
   gehören. Eine Leitungsüberkreuzung ist keine Verbindung, sofern die Netze im Schaltplan
   nicht tatsächlich verbunden sind. Übereinstimmende Netzbezeichnungen verbinden entfernte
   Punkte; Text in der Nähe einer Leitung tut dies nicht.
2. **Bauteildefinitionen erweitern.** Jedes simulierte Symbol stellt eine SPICE-Vorlage
   bereit. TinyCAD setzt Referenz, verbundene Knotennamen und Werte ein und fügt die benötigten
   Bauelement- oder Subschaltungsdefinitionen ein.
3. **Das Experiment hinzufügen.** Das Blatt Simulation enthält die Analyse,
   Temperatur, Parameter, Modellanhänge und angeforderten Signale. TinyCAD
   prüft vor dem Übermitteln der Schaltung auf fehlende Modelle, nicht aufgelöste Anschlüsse,
   doppelte Referenzen und andere erkennbare Einrichtungsfehler.
4. **ngspice ausführen.** Der Solver berechnet Spannungen, Ströme und andere angeforderte
   Größen. Er gibt Daten und ein Diagnoseprotokoll zurück; TinyCAD fasst diese zu einer
   Erfassung zusammen, die den Einstellungen und der Engine-Identität des Laufs zugeordnet ist.
5. **Untersuchen und messen.** TinyCAD zeigt Diagramme, numerische Daten und berechnete
   Messwerte an. Ein Grenzfrequenzmesswert wird beispielsweise aus den AC-Daten abgeleitet;
   es handelt sich nicht um ein weiteres in den Schaltplan eingefügtes Bauteil.

Daran wird deutlich, warum eine korrekt aussehende Zeichnung nicht ausreicht: Ein Transistor benötigt
ein Modell und eine korrekte Anschlusszuordnung, während zwei Leitungen elektrisch verbunden sein müssen,
auch wenn ihre Endpunkte bei der aktuellen Zoomstufe nahe beieinander liegen.

## Welche Symbole sollte ich verwenden?
{: #which-symbols-should-i-use}

Öffnen Sie das **Symbol in Pulsform** in der Symbolleiste. Der Hinweistext beim Daraufzeigen lautet **Simulation**.
In den folgenden Anweisungen bedeutet **Simulation → …** das Menü dieses Symbols.

| Was Sie benötigen | Wo Sie es finden | Was Sie prüfen sollten |
| --- | --- | --- |
| Widerstand, Kondensator, Induktivität, Diode, LED, NPN/PNP-Transistor oder 741-Operationsverstärker | **Simulation → SPICE components** oder die Bibliothek **SPICE essentials** | Wert, Polarität, Versorgung und Modellannahmen |
| Unabhängige Spannungs-/Stromquelle | **Simulation → SPICE → Insert Source** | Quellentyp, Signalform, Einheiten und Anschlussrichtung |
| Bezugsknoten | **Simulation → SPICE → Insert Ground** | Elektrisch verbinden; der Bezugsknoten von SPICE ist Knoten `0` |
| Spannungsbeobachtung | **Insert Probe** oder **Insert Differential Probe** im SPICE-Untermenü | Eine einseitige Spannung bezieht sich auf Masse; eine Differenzialsonde misst zwischen ihren Anschlüssen |
| Beobachtung des Zweigstroms | **Simulation → SPICE → Insert Current Probe** | In Reihe einfügen und die positive Richtung prüfen |
| Gesteuerte Quelle | **Simulation → SPICE → Insert Controlled Source** | Steueranschlüsse, Ausgangsanschlüsse und Verstärkung/Transkonduktanz |
| Messgeräte im Stil eines Labortischs | **Simulation → Lab Equipment** | Einstellungen für Oszilloskop, Multimeter, Funktionsgenerator und Labornetzteil; ihre Belastung und Grenzwerte sind relevant |
| Gewöhnliche modellierte Logik | Bibliothek **Digital logic** | Diese konfigurierbaren, portablen SPICE-Modelle unterscheiden sich von den ereignisgesteuerten XSPICE-Beispielen; Anschlüsse der Versorgung und Modelleigenschaften prüfen |
| Ereignisgesteuerte XSPICE-Logik | Die eingebetteten Beispiele des **XSPICE and digital tutorial** | Desktop verwenden und die Analog-/Digital-Brücken im Modell beibehalten |

Die Bibliothek SPICE essentials enthält vorkonfigurierte Beispiele gängiger Bauelemente.
Ein generischer Transistor oder ein 741-ähnliches Modell ist zum Lernen nützlich, aber
sein simuliertes Verhalten entspricht nicht automatisch den Spezifikationen eines bestimmten
Herstellerbauteils. In den Kapiteln zu Verstärkern werden die generischen Modelle, die anstelle der ursprünglichen `AMP.DSN`-Bauteile verwendet werden, ausdrücklich dokumentiert.

Ein Symbol aus einer anderen Bibliothek ist möglicherweise nur für die Zeichnung gedacht. Wählen Sie das platzierte Symbol aus
und prüfen Sie in seinen Eigenschaften die Registerkarte **SPICE**. Es benötigt eine gültige SPICE-Vorlage
und alle Modelldefinitionen, auf die diese Vorlage verweist. Ein passender Name, ein Gehäuse oder ein Bild
fügt diese Definitionen nicht hinzu. Ebenso benennt ein Label `VCC` ein
Netz; es erzeugt keine Versorgungsspannung. Verbinden Sie eine tatsächliche Quelle mit diesem Netz.

## Ein vorhandenes Experiment ausführen
{: #run-an-existing-experiment}

1. Wählen Sie **Open Example → SPICE tutorial → divider → Open Drawing**.
2. Wählen Sie das Blatt **Simulation**. Unter **Setup** ist als gespeicherte Analyse
   **Measure DC — Operating Point** eingestellt. Die Schaltung verwendet eine 5-V-Quelle und zwei
   1-kΩ-Widerstände.
3. Wählen Sie **Run**. Verwenden Sie **Simulation → Show charts**, falls das Diagrammfenster ausgeblendet ist.
4. Prüfen Sie `in`, `out` und `v1#branch`. Erwartet werden **5 V**, **2,5 V** und
   **−2,5 mA**. Der Quellenstrom wird in den positiven Anschluss hinein definiert, daher ist der Strom
   einer Leistung abgebenden Quelle hier negativ.
5. Ändern Sie R2 auf `2k` im Schaltungsblatt und führen Sie den Lauf erneut aus. OUT sollte
   ungefähr **3,333 V** betragen. Eine ältere, beibehaltene Erfassung beschreibt weiterhin
   die vorherige Schaltung; eine Wertänderung schreibt ihre Ergebnisse nicht um.

![TinyCAD-Blatt Simulation mit RC-AC-Analyse und Grenzfrequenzmesswert](/v4/Images/simulation-tutorials/spice/tinycad-ac-setup.png)

Dieser Anwendungs-Screenshot zeigt die Ansicht **Setup** für **rc-ac**, ein weiteres
Beispiel aus den eingebetteten Beispielen. Sein 1-kΩ/1-µF-Filter hat eine Grenzfrequenz von etwa **159,15 Hz**. Öffnen Sie es,
um ein Experiment im Frequenzbereich mit dem einzelnen DC-Arbeitspunkt des Teilers zu vergleichen.

**Run** startet eine endliche Erfassung mit der ausgewählten Analyse. **Stop** beendet
den Solver und behält akzeptierte Abtastwerte bei; diese Werte sind ein Teilergebnis
und kein Beleg dafür, dass die angeforderte Dauer abgeschlossen wurde. Diese Builds bieten
keine Pause/Fortsetzen-Funktion und keinen unbegrenzt laufenden Solver. Verwenden Sie **History**, um frühere
Läufe zu prüfen, und **Diagnostics**, um das Solver-Protokoll zu lesen.

Sehen Sie sich zur Demonstration [Teiler öffnen, ausführen und ändern](/v4/videos/simulation-tutorials/spice/first-run.mp4)
und [AC-Frequenzgang und Grenzfrequenz](/v4/videos/simulation-tutorials/spice/ac-response.mp4) an. Beide zeigen die tatsächlichen Desktop-
Bedienelemente, abgeschlossene native Erfassungen und numerische Ergebnisse, jeweils mit Untertiteln.

## Die erste eigene Simulation erstellen
{: #build-your-own-first-simulation}

Platzieren Sie zwei Widerstände über **Simulation → SPICE components**, eine Quelle mit **Insert Source**
und eine Masseverbindung mit **Insert Ground**. Ordnen Sie sie als Spannungsteiler an: Pluspol der Quelle
an R1, R1 an R2 und R2 zurück zum Minuspol der Quelle und zur Masse. Geben Sie beiden Widerständen
`1k`, stellen Sie die Quelle auf 5 V DC ein und beschriften Sie die Versorgung mit `IN` sowie den Mittelpunkt mit `OUT`.
Stellen Sie sicher, dass jedes Bauteil eine eindeutige Referenz wie R1, R2 und V1 hat.

Wählen Sie **Simulation → Simulate**, um ein Blatt Simulation zu erstellen. Wählen Sie
unter **Setup** die Option **Measure DC — Operating Point** und anschließend **Run**. Sie sollten
dieselben Werte wie beim eingebetteten Spannungsteiler erhalten. Falls der Lauf fehlschlägt, vergleichen Sie die Verbindungen,
Quelleneinstellungen und SPICE-Eigenschaften mit diesem funktionierenden Beispiel.

Wählen Sie für ein Transientenexperiment **Over time — Transient**, stellen Sie die Dauer
und den maximalen Zeitschritt ein und konfigurieren Sie eine zeitabhängige Quelle. Wählen Sie für AC
**Frequency response — AC**, stellen Sie den Frequenzbereich und die Punkte pro Dekade ein
und geben Sie der Eingangsquelle eine von null verschiedene **AC amplitude**, üblicherweise 1 V. Ihre Sinusfrequenz
und Transientenamplitude legen den AC-Sweep nicht fest. TinyCAD bietet außerdem
DC-Sweep-, Rausch-, Übertragungsfunktions- und Pol-Nullstellen-Analysen; in den vorangegangenen Kapiteln
wird erläutert, wann diese jeweils nützlich sind.

## Den erzeugten SPICE-Text untersuchen und Modelle hinzufügen
{: #inspect-the-generated-spice-and-add-models}

Öffnen Sie nach dem Ausführen des Spannungsteilers **Diagnostics → Generate circuit text**.
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
Bezugsknoten. Dieser Text macht Verbindungen und Quellenpolarität explizit.
Verwenden Sie **Export circuit**, wenn Sie die Netzliste separat untersuchen oder ausführen müssen.
Das Blatt Simulation in TinyCAD enthält `.op`, `.tran`, `.ac` und die weiteren Analysebefehle; fügen Sie diese nicht oder `.end` in die SPICE-Eigenschaften eines Bauteils ein.

Verwenden Sie für ein Bauteil, das bereits im TinyCAD-Katalog enthalten ist, [Gebündelte SPICE-Modelle](../Bundled-SPICE-Models/), um eine Definition auszuwählen und die Anschlusszuordnung zu überprüfen. Wenn eine externe Datei für eine benutzerdefinierte Definition erforderlich ist, klappen Sie **Setup → SPICE models** auf. Wählen Sie eine
Datei vom Typ `.lib`, `.cir` oder `.mod` oder geben Sie ihren Dateinamen und den Modelltext ein. Wählen Sie in beiden Fällen **Save model**, um sie anzuhängen. Verwenden Sie einen einfachen Dateinamen wie
`device.lib`. Konfigurieren Sie anschließend die
SPICE-Vorlage des Symbols so, dass sie das passende Bauelement oder `.SUBCKT` instanziiert,
und fügen Sie den Anhang bei Bedarf ein, zum Beispiel mit `.include device.lib`
im Prolog. Das bloße Anhängen einer Datei ordnet sie keinem Symbol zu.

Prüfen Sie die Anschlussreihenfolge des Modells anhand der **Pin-Nummern** des Symbols und nicht anhand
der scheinbaren Positionen der Pins auf der Seite. Ein Dreipol-Transistormodell und eine Hersteller-Subschaltung
können unterschiedliche Knotenanordnungen verwenden. Prüfen Sie auch verschachtelte Modellverweise:
Eingebundene Dateien müssen ebenfalls an das Blatt Simulation angehängt werden.
Die Modelldefinitionen und Anhänge werden mit der gespeicherten Zeichnung übertragen.

TinyCAD unterstützt eingebetteten Modelltext, aber keine beliebigen ngspice-Befehlsskripte oder
externen ausführbaren Module. `.control`-Blöcke, Shell-Befehle, das Laden externer Module
und dateibasierte Anregungen/Modelle sind in diesem Arbeitsablauf ausgeschlossen. Verwenden Sie
die unterstützten Quellensteuerungen und Analysen oder exportieren Sie die Schaltung für ein separates
Kommandozeilen-Experiment mit ngspice. Ein Herstellermodell, das für einen anderen
SPICE-Dialekt geschrieben wurde, muss möglicherweise angepasst werden, bevor ngspice es akzeptiert.

## Digitale Simulationen
{: #how-digital-simulations-fit-in}

Öffnen Sie auf Desktop **XSPICE and digital tutorial → logic-buffer**. Das X1-Modell
enthält eine Analog-Digital-Brücke, einen ereignisgesteuerten Puffer und eine
Digital-Analog-Brücke. Die gewöhnliche Quelle treibt den Analogeingang;
die Brücken machen die Logikzustände als Spannungen in den Diagrammen von TinyCAD sichtbar.

![Berechneter Ein- und Ausgang des eingebetteten XSPICE-Puffers](/v4/Images/simulation-tutorials/xspice/logic-buffer-results.png)

Führen Sie die gespeicherte Transientenanalyse aus. Erwartet werden 0–5-V-Impulse mit einer Periode
von 1 µs und eine um ungefähr 20 ns verzögerte Ausgangsflanke mit endlicher Flankensteilheit. Zoomen Sie hinein, um
die Verzögerung zu untersuchen. Diese Abbildung zeigt tatsächliche Solver-Ergebnisse aus dem Beispiel.

Die digitalen Knoten des Modells sind keine gewöhnlichen Spannungsknoten. Die Schwellenwerte der Brücke
und ihre Darstellung eines undefinierten Zustands sind bewusste Modellierungsentscheidungen.
Ein aus analogen SPICE-Ausdrücken aufgebautes Verhaltensgatter kann im Diagramm ähnlich aussehen,
verwendet jedoch eine andere Simulationsmethode. Fahren Sie mit der
[XSPICE-Übersicht](/v4/XSPICE-Tutorial-01/) für Brücken, Zeitverhalten, Speicherung und
Mixed-Signal-Schaltungen fort.

## Speichern, vergleichen und Fehler beheben
{: #save-compare-and-troubleshoot}

Speichern Sie Ihr Experiment mit **Save As**, um eine bearbeitbare Kopie des eingebetteten
Beispiels zu behalten. TinyCAD kann Erfassungen zusammen mit der Zeichnung speichern; **Save without
results** behält Schaltung und Einstellungen bei, lässt aber die gespeicherten Ergebnisse weg.
Verwenden Sie **Data**-Exporte für CSV-, JSON- oder SPICE-Rohdaten, wenn weitere Analysen
erforderlich sind. Notieren Sie, welche Erfassung, welches Modell und welches Messfenster Sie verwendet haben.

| Symptom | Zuerst prüfen |
| --- | --- |
| SPICE-Informationen fehlen | Ein modelliertes Symbol verwenden oder seine Registerkarte SPICE konfigurieren |
| Modell oder Subschaltung fehlt | Modellname, angehängte Dateien, Include-Anweisung und Anschlussreihenfolge |
| Schaltung nicht angeschlossen oder Masse fehlt | Eine angeschlossene SPICE-Masse und geeignete DC-Rückstrompfade |
| Versorgungslabel, aber keine Versorgungsspannung | Eine Spannungsquelle oder ein Labornetzteil mit dem beschrifteten Netz verbinden |
| Leerer/nuller AC-Frequenzgang | AC-Amplitude des Eingangs und ausgewählte Signale |
| XSPICE-Modell im Browser nicht verfügbar | Das Beispiel in TinyCAD Desktop ausführen |
| Diagramm stimmt nicht mit den geänderten Werten überein | Erneut ausführen und die neue Erfassung auswählen |
| Konvergenzfehler oder unvollständige Wellenform | Diagnostics lesen, Schaltung vereinfachen und Signalflanken, Zeitschritt sowie Modellgültigkeit prüfen |

Das [ngspice-Handbuch](https://ngspice.sourceforge.io/docs.html) ist die Referenz
für die Semantik von Bauelementen und Modellen. Die Steuerelemente von TinyCAD bestimmen,
welche dieser Funktionen über den integrierten Arbeitsablauf verfügbar sind.

## Lektion-Schaltungen herunterladen
{: #download-the-lesson-circuits}

Dieselben Beispiele sind bereits unter **Open Example** verfügbar. Laden Sie für eine unabhängige Kopie eine `.dzn`-Zeichnung herunter und öffnen Sie sie in TinyCAD über **File → Open**. Die zugehörige Datei `.cir` enthält SPICE-Text zur Prüfung oder für einen kompatiblen externen Simulator, keine TinyCAD-Zeichnung. Für neue Simulationsläufe mit XSPICE-Schaltungen ist Desktop erforderlich.

| Beispiel | Zeichnung | Netzliste |
| --- | --- | --- |
| divider | [TinyCAD-Zeichnung](/v4/examples/simulation-tutorials/spice/divider.dzn) | [SPICE-Text](/v4/examples/simulation-tutorials/spice/divider.cir) |
| logic-buffer | [TinyCAD-Zeichnung](/v4/examples/simulation-tutorials/xspice/logic-buffer.dzn) | [SPICE-Text](/v4/examples/simulation-tutorials/xspice/logic-buffer.cir) |
