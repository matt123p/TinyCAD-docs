---
layout: default
---
# SPICE-Modelle und Netlist-Ausgabe
{: #spice-models-and-netlist-output}

TinyCAD unterstützt sowohl die [integrierte ngspice-Simulation](../Simulation/) als auch den SPICE-Netlist-Export für einen externen Simulator. Beide hängen von den SPICE-Vorlagen und der Pin-Zuordnung der Komponente ab. Das Aussehen eines Symbols allein beschreibt nicht dessen elektrisches Verhalten.

Um ein bereits in TinyCAD enthaltenes Modell auszuwählen, beginnen Sie mit [Mitgelieferte SPICE-Modelle](../Bundled-SPICE-Models/).

## Modelle, Vorlagen und Pin-Reihenfolge
{: #models-templates-and-pin-order}

Ein Widerstand kann ein natives SPICE-Element verwenden. Ein Transistor benötigt möglicherweise ein `.model`; ein komplexeres Bauteil kann ein `.subckt` verwenden. Die SPICE-Einstellungen eines platzierten Symbols verbinden dessen physische Pinnummern mit den vom Modell erwarteten Anschlüssen. Prüfen Sie die Registerkarte **SPICE** in den Symboleigenschaften; Instanzattribute können die Symbolstandards überschreiben.

Vorlagen verwenden:

- **`%(pin)`** für das verbundene Netz der angegebenen TinyCAD-Pinnummer.
- **`$(attribute)`** für ein Komponentenattribut.
- **`refnum`** als speziell behandeltes Referenzsuffix, damit das SPICE-Bauteilpräfix der Vorlage erhalten bleibt.

Eine Widerstandsvorlage kann beispielsweise lauten:

```text
R$(refnum) %(1) %(2) $(Value)
```

Für die Referenz R3, die Netze 7 und 9 sowie den Wert `10k` ergibt sich:

```spice
R3 7 9 10k
```

Das zugrunde liegende Modellvorlagenattribut ist **`$$SPICE`**; Prologtext ist **`$$SPICE_PROLOG`**. Eine Vorlage kann Pins neu anordnen: Nehmen Sie nicht an, dass der Schaltplan-Pin 1 der erste Anschluss von SPICE ist. Ein BJT-Element erwartet **Kollektor, Basis, Emitter**. Nummeriert ein Symbol die Basis mit 1, den Emitter mit 2 und den Kollektor mit 3, muss die Vorlage `%(3) %(1) %(2)` in dieser Reihenfolge einsetzen. Bei einer Subcircuit-Schaltung gilt die Reihenfolge, die in der `.subckt`-Zeile festgelegt ist; sie kann von der eines Bauteilgehäuses abweichen.

Lesen Sie das tatsächliche Symbol und das Modell gemeinsam. Versorgungspins, verborgene Pins, Transistorvarianten und Operationsverstärkermodelle sind häufige Ursachen für Abweichungen. Ein generisches Verhaltensmodell im Stil eines 741 ist kein vollständiges, vom Hersteller qualifiziertes 741-Makromodell.

## Ein Modell in der integrierten Simulation verwenden
{: #use-a-model-in-integrated-simulation}

1. Beginnen Sie mit einem [mitgelieferten Modell](../Bundled-SPICE-Models/) oder fügen Sie Ihrem Symbol eine passende benutzerdefinierte Vorlage hinzu. Vergewissern Sie sich, dass die Pin-Zuordnung der Anschlussreihenfolge des Modells entspricht.
2. TinyCAD löst Verknüpfungen zu mitgelieferten Modellen automatisch auf. Wenn ein benutzerdefiniertes Modell externen Text benötigt, verwenden Sie **Setup → SPICE models** (Einrichtung → SPICE-Modelle), um ihn unter einem logischen Dateinamen wie `part.lib`, `part.cir` oder `part.mod` einzubinden.
3. Lösen Sie Abhängigkeiten von `.include` und `.lib` über diese Einbindungen auf. Speichern Sie die Zeichnung, damit die erforderlichen Definitionen darin erhalten bleiben.
4. Verbinden Sie Masse **0**, legen Sie die Analyse unter **Setup** fest, führen Sie sie dann aus und prüfen Sie die Diagnosemeldungen.

Die verwaltete Engine lädt kein Modell von einer Website herunter und liest keinen beliebigen absoluten Pfad auf Ihrem Computer. Stellen Sie die Abhängigkeiten ausdrücklich bereit. Sie führt außerdem keine beliebigen Shell-Befehle, `.control`-Skripte, Startdateien, extern bereitgestellten nativen Module oder dateibasierten Bauteilabhängigkeiten aus. Ein Herstellermodell mit simulatortypspezifischer Syntax muss möglicherweise angepasst werden; „SPICE-kompatibel“ garantiert keine identischen Dialekte.

Das integrierte Simulationsblatt von TinyCAD verwaltet die Analysebefehle und das abschließende `.end`. **Ein älteres RUN-Symbol ist nicht erforderlich.** Übertragen Sie beim Anpassen einer auf Export ausgerichteten Zeichnung die alten Analyse-Einstellungen in Setup und löschen Sie ein älteres RUN-Symbol. Entfernen Sie Analyseanweisungen und `.end` aus allen verbleibenden Komponentenattributen; diese Befehle werden im integrierten Komponenten-Vorlagenpfad abgewiesen.

Prüfen Sie die Lizenz eines Herstellermodells, bevor Sie es weitergeben. Kontrollieren Sie die dokumentierte Pin-Reihenfolge, Einheiten, Modellannahmen und den unterstützten Simulator. Bewahren Sie die Dokumentation des Herstellers zusammen mit Ihren Modellierungsnotizen auf.

## Eine SPICE-Netlist prüfen und exportieren
{: #inspect-and-export-a-spice-netlist}

Eine Netlist ist eine Textbeschreibung der Bauteile und der sie verbindenden Knoten. Masse wird `0` genannt. Typische Inhalte sind Modell-/Setup-Definitionen, Komponenten-Zeilen, Analyseanweisungen und ein abschließendes `.end`. Nützliche Prüfungen sind:

- Verweist jede Komponente auf das vorgesehene Modell und den richtigen Wert?
- Haben verbundene Pins die erwarteten gemeinsamen Netznamen?
- Sind die Versorgungs-/Rückleitungsnetze vorhanden, einschließlich 0?
- Ist die Anschlussreihenfolge des Halbleiters oder der Subcircuit-Schaltung korrekt?
- Sind alle Modelldefinitionen und eingebundenen Texte für die ausgewählte Engine verfügbar?

Öffnen Sie für das integrierte Setup **Simulation sheet → Diagnostics → Generate circuit text** (Simulationsblatt → Diagnose → Schaltungstext erzeugen), prüfen Sie die erweiterte Netzliste und wählen Sie anschließend **Export circuit** (Schaltung exportieren), um `simulation.cir` zu speichern. Diese enthält die verwaltete Analyse und kann mit `.include` auf separate Modelldateien verweisen. Ein externer Simulator benötigt Kopien dieser Dateien an den angegebenen Speicherorten.

Verwenden Sie für den älteren vorlagenbasierten Export den separaten Befehl **Generate Spice NetList** (SPICE-Netlist erzeugen) im Menü „Datei“ des Browsers oder im Menü „Desktop Tools“. Dieser Befehl ist vom PCB-orientierten Dialog [Generate Netlist](../Generate-Netlist/) getrennt. Dieser Befehl bettet die referenzierten mitgelieferten Definitionen ein. Stellen Sie alle externen Abhängigkeiten bereit, die von benutzerdefinierten Vorlagen verwendet werden, und prüfen Sie, ob die Analyse- und Ausführungsanweisungen für die externe Engine geeignet sind. Eine begleitende Tutorialdatei `.cir` kann ebenfalls direkt untersucht werden. **Öffnen Sie eine `.dzn`-Zeichnung in TinyCAD; eine `.cir`-Netlist ist keine TinyCAD-Zeichnungsdatei.**

### Ältere Exportvorlagen
{: #legacy-export-templates}

Das auf den Export ausgerichtete Vorlagensystem unterstützt einen Modellrumpf pro Instanz sowie Prolog und Epilog pro Symbol. Identische Prologe/Epiloge werden dedupliziert. Die Prioritäten reichen von 0 bis 9: Prologe werden von niedrig nach hoch ausgeführt; Epiloge werden so angeordnet, dass Priorität 0 zuletzt ausgeführt wird.

Ältere Zeichnungen können ein pinloses **RUN**-Symbol verwenden, dessen Prolog/Epilog Analyse- und Abschlussanweisungen für eine exportierte Netzliste bereitstellt. Dies ist eine Exportkonvention und keine Anweisung, RUN zu einem integrierten Simulationsblatt hinzuzufügen. Prüfen Sie diese Anweisungen, bevor Sie die exportierte Datei in einem separaten Simulator ausführen.

### Bedingte Vorlagen
{: #conditional-templates}

Für exportorientierte/benutzerdefinierte Vorlagen gehören folgende bedingte Formen zu den unterstützten:

```text
?( defined(attribute), true text, false text )
?( not_defined(attribute), true text, false text )
?( empty(attribute), true text, false text )
?( not_empty(attribute), true text, false text )
?( connected(pin), true text, false text )
?( not_connected(pin), true text, false text )
```

Bedingungen können verschachtelt werden. Prüfen Sie die erweiterte Netzliste, statt eine komplexe Vorlage nur anhand ihres Quelltexts zu beurteilen.

## Numerische Schreibweise und Portabilität
{: #numerical-notation-and-portability}

In SPICE-Text bedeutet **`M` milli**, genau wie `m`; verwenden Sie **`Meg`** für Mega. `1k`, `100n` und `10u` sind gebräuchliche Werte. Verwenden Sie explizite Modellparameter und Referenzen, statt sich auf nicht spezifizierte Standardeinstellungen eines Simulators zu verlassen.

Die Dokumentation der externen ngspice-Befehlszeile behandelt eine breitere Umgebung als die integrierte Engine von TinyCAD. Vollständige Angaben zu Elementsyntax, Modellen, Analysen und Kompatibilitätshinweisen finden Sie in der offiziellen [ngspice-Dokumentation](https://ngspice.sourceforge.io/docs.html) und im [Benutzerhandbuch](https://ngspice.sourceforge.io/docs/ngspice-manual.pdf). Fahren Sie mit [So implementiert TinyCAD SPICE](../SPICE-Tutorial-11/) fort, um eine ausführliche Erläuterung zu Engines, Symbolen und Netlists zu erhalten.
