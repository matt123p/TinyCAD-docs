---
layout: default
---
# SPICE-Modelle und Netlist-Ausgabe
{: #spice-models-and-netlist-output}

TinyCAD unterstützt sowohl [integrierte ngspice-Simulation](../Simulation/) als auch den SPICE-Netlist-Export für einen externen Simulator. Beides hängt von den SPICE-Vorlagen und der Pinzuordnung der Komponente ab. Das Aussehen eines Symbols allein beschreibt nicht sein elektrisches Verhalten.

## Modelle, Vorlagen und Pinreihenfolge
{: #models-templates-and-pin-order}

Ein Widerstand kann ein natives SPICE-Element verwenden. Für einen Transistor ist möglicherweise ein `.model` erforderlich; ein komplexeres Bauelement kann ein `.subckt` verwenden. Die SPICE-Einstellungen eines platzierten Symbols verbinden dessen physische Pinnummern mit den vom Modell erwarteten Anschlüssen. Prüfen Sie die Registerkarte **SPICE** in den Symboleigenschaften; Instanzattribute können die Symbolstandards überschreiben.

Vorlagen verwenden:

- **`%(pin)`** für das verbundene Netz der angegebenen TinyCAD-Pinnummer.
- **`$(attribute)`** für ein Komponentenattribut.
- **`refnum`** als speziell behandeltes Referenzsuffix, damit das SPICE-Bauelementepräfix der Vorlage erhalten bleibt.

Eine Widerstandsvorlage kann beispielsweise lauten:

```text
R$(refnum) %(1) %(2) $(NAME)
```

Für die Referenz R3, die Netze 7 und 9 sowie NAME `10k` ergibt sich:

```spice
R3 7 9 10k
```

Das zugrunde liegende Modellvorlagenattribut ist **`$$SPICE`**; der Prologtext ist **`$$SPICE_PROLOG`**. Eine Vorlage kann die Pins umordnen: Nehmen Sie nicht an, dass Schaltplanpin 1 der erste SPICE-Anschluss ist. Ein BJT-Element erwartet **Kollektor, Basis, Emitter**. Wenn ein Symbol die Basis mit 1, den Emitter mit 2 und den Kollektor mit 3 nummeriert, muss die Vorlage `%(3) %(1) %(2)` in dieser Reihenfolge einsetzen. Bei einem Subcircuit gilt die Reihenfolge aus der `.subckt`-Zeile, die von der eines Bauelementgehäuses abweichen kann.

Lesen Sie das tatsächliche Symbol zusammen mit dem Modell. Versorgungspins, verborgene Pins, Transistorvarianten und Operationsverstärkermodelle sind häufige Ursachen für Abweichungen. Ein generisches Verhaltensmodell im Stil des 741 ist kein vollständiges, vom Hersteller qualifiziertes 741-Makromodell.

## Ein Modell in der integrierten Simulation verwenden
{: #use-a-model-in-integrated-simulation}

1. Beginnen Sie mit einem modellierten Symbol aus einer [mitgelieferten Simulationsbibliothek](../Bundled-Libraries/#libraries-with-simulation-models) oder fügen Sie einem benutzerdefinierten Symbol eine passende SPICE-Vorlage hinzu.
2. Vergewissern Sie sich, dass jede Vorlage auf vorhandene Attribute und die richtigen Pins verweist.
3. Fügen Sie im Simulationsblatt gegebenenfalls den erforderlichen Modell-**Text** hinzu und geben Sie den Anlagen sinnvolle Dateinamen. Typische Dateierweiterungen für Textdateien sind `.lib`, `.cir` und `.mod`.
4. Lösen Sie Abhängigkeiten von `.include` und `.lib` über diese Anlagen auf. Bewahren Sie erforderliche Definitionen zusammen mit der Zeichnung auf.
5. Schließen Sie Masse **0** an, stellen Sie die Analyse unter **Setup** ein, führen Sie sie aus und prüfen Sie die Diagnosemeldungen.

Die verwaltete Engine lädt kein Modell von einer Website herunter und liest keinen beliebigen absoluten Pfad auf Ihrem Computer ein. Stellen Sie die Abhängigkeiten ausdrücklich bereit. Sie führt auch keine beliebigen Shell-Befehle, `.control`-Skripte, Startdateien, extern bereitgestellten nativen Module oder dateigebundenen Bauelementabhängigkeiten aus. Ein Herstellermodell mit simulatorspezifischer Syntax muss möglicherweise angepasst werden; „SPICE-kompatibel“ garantiert keine identischen Dialekte.

Das integrierte Simulationsblatt von TinyCAD verwaltet die Analysebefehle und das abschließende `.end`. **Ein RUN-Symbol aus älteren Versionen ist nicht erforderlich.** Verschieben Sie beim Anpassen einer exportorientierten Zeichnung die alten Analyseeinstellungen nach Setup und löschen Sie ein veraltetes RUN-Symbol. Entfernen Sie Analyseanweisungen und `.end` aus allen verbleibenden Komponentenattributen; diese Befehle werden im integrierten Komponenten-Vorlagenpfad zurückgewiesen.

Prüfen Sie die Lizenz eines Herstellermodells, bevor Sie es weitergeben. Prüfen Sie die dokumentierte Pinreihenfolge, Einheiten, Modellannahmen und unterstützten Simulatoren. Bewahren Sie die Dokumentation des Herstellers zusammen mit Ihren Modellierungsnotizen auf.

## Eine SPICE-Netlist prüfen und exportieren
{: #inspect-and-export-a-spice-netlist}

Eine Netlist ist eine Textbeschreibung von Bauelementen und den sie verbindenden Knoten. Masse heißt `0`. Typische Inhalte sind Modell-/Setup-Definitionen, Komponenten-Zeilen, Analysedirektiven und ein abschließendes `.end`. Nützliche Prüfungen sind:

- Verweist jede Komponente auf das vorgesehene Modell und den richtigen Wert?
- Haben verbundene Pins die erwarteten gemeinsamen Netznamen?
- Sind die Versorgungs-/Rückleitungsnetze vorhanden, einschließlich 0?
- Ist die Anschlussreihenfolge des Halbleiters oder Subcircuits korrekt?
- Sind alle Modelldefinitionen und eingebundenen Texte für die ausgewählte Engine verfügbar?

Öffnen Sie für das integrierte Setup **Simulationsblatt → Diagnose → Schaltungstext generieren (Generate circuit text)**, prüfen Sie das expandierte Deck und wählen Sie anschließend **Schaltung exportieren (Export circuit)**, um `simulation.cir` zu speichern. Dies schließt die verwaltete Analyse ein.

Verwenden Sie für den vorlagenbasierten Export älterer Versionen den separaten Befehl **Spice-Netlist generieren (Generate Spice NetList)** im Menü Datei des Browsers oder im Menü Desktop-Tools. Dieser ist vom dialogbasierten PCB-orientierten Befehl [Netlist generieren](../Generate-Netlist/) getrennt. Die exportierten Analyse-/Ausführungsdirektiven müssen für die externe Engine geeignet sein. Eine begleitende Tutorialdatei `.cir` kann ebenfalls direkt geprüft werden. **Öffnen Sie eine `.dzn`-Zeichnung in TinyCAD; eine `.cir`-Netlist ist keine TinyCAD-Zeichnungsdatei.**

### Exportvorlagen älterer Versionen
{: #legacy-export-templates}

Das exportorientierte Vorlagensystem unterstützt einen Modellrumpf pro Instanz sowie Prolog und Epilog pro Symbol. Identische Prologe/Epiloge werden dedupliziert. Die Prioritäten reichen von 0 bis 9: Prologe werden von niedrig nach hoch ausgeführt; Epiloge werden so angeordnet, dass Priorität 0 zuletzt kommt.

Ältere Zeichnungen verwenden möglicherweise ein **RUN**-Symbol ohne Pins, dessen Präambel/Nachspann Analyse- und Abschlussdirektiven für eine exportierte Netzliste bereitstellt. Dies ist eine Exportkonvention und keine Anweisung, RUN zu einem integrierten Simulation-Blatt hinzuzufügen. Prüfen Sie diese Anweisungen, bevor Sie die exportierte Datei in einem separaten Simulator ausführen.

### Bedingte Vorlagen
{: #conditional-templates}

Zu den unterstützten bedingten Formen für exportorientierte/benutzerdefinierte Vorlagen gehören:

```text
?( defined(attribute), true text, false text )
?( not_defined(attribute), true text, false text )
?( empty(attribute), true text, false text )
?( not_empty(attribute), true text, false text )
?( connected(pin), true text, false text )
?( not_connected(pin), true text, false text )
```

Bedingungen können verschachtelt werden. Prüfen Sie das expandierte Deck, statt eine komplexe Vorlage nur anhand ihres Quelltexts zu beurteilen.

## Zahlenformate und Portabilität
{: #numerical-notation-and-portability}

In SPICE-Text bedeutet **`M` Milli**, ebenso wie `m`; verwenden Sie **`Meg`** für Mega. `1k`, `100n` und `10u` sind häufige Werte. Verwenden Sie explizite Modellparameter und Referenzen, statt sich auf nicht spezifizierte Standardwerte eines Simulators zu verlassen.

Die Befehlszeilendokumentation für externes ngspice deckt eine umfassendere Umgebung ab als die integrierte Engine von TinyCAD. Vollständige Informationen zu Elementsyntax, Modellen, Analysen und Kompatibilitätshinweisen finden Sie in der offiziellen [ngspice-Dokumentation](https://ngspice.sourceforge.io/docs.html) und im [Benutzerhandbuch](https://ngspice.sourceforge.io/docs/ngspice-manual.pdf). Lesen Sie anschließend [wie TinyCAD SPICE implementiert](../SPICE-Tutorial-11/), um eine ausführliche Erläuterung zu Engines, Symbolen und Netlists zu erhalten.
