---
layout: default
---
# Fehlerbehebung bei Simulationen
{: #simulation-troubleshooting}

Lesen Sie den Erfassungsstatus und die Diagnoseausgabe, bevor Sie Einstellungen ändern. Unterscheiden Sie zwischen **einem fehlgeschlagenen Lauf**, **einem gültigen Lauf mit unerwartetem Verhalten** und **einer Messung, die für das ausgewählte Ergebnis nicht verfügbar ist**. Für diese Fälle sind unterschiedliche Prüfungen erforderlich.

## Die Simulation lässt sich nicht starten
{: #the-simulation-will-not-start}

| Symptom | Prüfen |
| --- | --- |
| Masse fehlt / Schaltung ist potenzialfrei | Verbinden Sie ein Versorgungssymbol oder eine Beschriftung mit dem Wert **0**. Eine separate GND-Beschriftung ist nicht automatisch Knoten 0. Prüfen Sie die Rückleitungen der Quellen und isolierte Teilschaltungen. |
| Bauteilmodell fehlt | Wählen Sie das Symbol aus und prüfen Sie **SPICE**. Verwenden Sie ein Bauteil aus einer modellierten Bibliothek oder [fügen Sie eine gebündelte oder benutzerdefinierte Definition](../Bundled-SPICE-Models/) hinzu. |
| Keine Modelle entsprechen der Suche | Löschen Sie den Suchtext oder versuchen Sie es mit einem Teilealias oder einer Gerätefamilie. Ein SPICE-Essentials-Symbol zeigt nur seine verifizierten Modelle an. |
| Attribute fehlen oder Pinzuordnung ist ungültig | Prüfen Sie die SPICE-Eigenschaften des Bauteils und die tatsächliche Reihenfolge der Modellanschlüsse. Instanzüberschreibungen können die Standardwerte ändern. |
| Modell/Include nicht gefunden | Fügen Sie den Modelltext und seine Abhängigkeiten mit passenden logischen Dateinamen zum Simulationsblatt hinzu. Ein lokaler absoluter Pfad oder eine Web-URL wird nicht automatisch abgerufen. |
| Analysedirektiven in einem Bauteil | Entfernen Sie veraltete `.op`, `.tran`, `.ac`, `.end` und Laufsteuerungstext aus den Bauteilattributen. Das integrierte Simulationsblatt enthält die Analyse-Einstellungen. |
| XSPICE-Modell im Browser nicht verfügbar | Öffnen Sie die Zeichnung in Desktop, um einen neuen nativen Lauf durchzuführen. Gespeicherte Ergebnisse lassen sich weiterhin im Browser prüfen. |
| Ungültige Quelle oder ungültiger Bereich | Prüfen Sie die Wellenformfelder, ansteigende PWL-Zeitwerte, Start-/Stoppwerte, Durchlaufrichtung und positive Frequenz-/Zeitgrößen. |

## Ein Ergebnis ist falsch oder der Solver konvergiert nicht
{: #a-result-is-wrong-or-the-solver-does-not-converge}

**Prüfen Sie zuerst die Schaltung.** Eine Leitung, die über das Ende eines Drahts hinausgeht, oder eine unbenutzte Buchse kann eine unbeabsichtigte Verbindung erzeugen. Prüfen Sie T-Verbindungen, tatsächliche Pinenden, Netzbeschriftungen und versteckte Versorgungsspannungen. Eine Stromsonde oder ein Messgerät, das parallel zu einer Quelle liegt, kann diese kurzschließen. Verwenden Sie die erzeugte Netzliste, um festzustellen, was der Simulator erhalten hat.

Prüfen Sie Ausrichtung und Reihenfolge der Modellanschlüsse: Diodenpolarität, Kollektor/Basis/Emitter des BJT, Versorgungspins des Operationsverstärkers und Anschlussreihenfolge des Subcircuits. Verwenden Sie aussagekräftige, eindeutige Referenzbezeichnungen und bestätigen Sie, dass die Quellenreferenz in einer Sweep-/Rausch-/Übertragungseinrichtung auf die beabsichtigte Quelle verweist.

Überprüfen Sie den DC-Arbeitspunkt mit Operating Point, bevor Sie die AC-Analyse untersuchen. Schleifen idealer Quellen, potenzialfreie Knoten, abrupte ideale Übergänge und unangemessene Modellparameter können das Lösen einer Schaltung erschweren oder unmöglich machen. Fügen Sie physikalisch begründete Widerstände oder endliche Anstiegszeiten hinzu, wenn diese dem realen Experiment entsprechen. Reduzieren Sie eine komplexe Schaltung auf den kleinsten fehlschlagenden Abschnitt, bevor Sie numerische Optionen ändern.

Prüfen Sie numerische Suffixe: **1M in SPICE-Text bedeutet 1 Milli-Einheit, nicht eine Mega-Einheit**; verwenden Sie `1Meg` für Mega. Prüfen Sie Temperatur, DC-Wert der Quelle und Transienten-/AC-Einstellungen getrennt. Die Transientenamplitude einer Quelle wird nicht automatisch zu ihrer AC-Kleinsignal-Amplitude.

## Die Wellenform sieht unvollständig aus
{: #the-waveform-looks-incomplete}

- Verlängern Sie die Transientendauer, wenn sich der Einschwingvorgang noch nicht beruhigt hat oder der benötigte Zyklus außerhalb des Laufs liegt.
- Verringern Sie den maximalen Schritt, um schnelle Flanken oder schmale Impulse aufzulösen. Durch Vergrößern der Anzeige lassen sich fehlende Abtastwerte nicht wiederherstellen.
- Prüfen Sie die ausgewählte Einrichtung, Erfassung, Ergebnisdarstellung, Legendenanzeige, Einheiten und Achsenbereiche.
- Verwenden Sie für AC genügend Punkte im Bereich einer schmalen Resonanz und das korrekte Eingangs-/Ausgangsverhältnis.
- Wurde der Lauf angehalten oder ist er fehlgeschlagen, prüfen Sie die tatsächliche Datenverfügbarkeit; eine teilweise Kurve ist kein abgeschlossenes Experiment.

## Diagramme oder Messwerte der Sonden sind veraltet
{: #charts-or-probe-readings-are-stale}

Wenn Sie Verdrahtung, Werte, Modelltext oder Einrichtung bearbeiten, ist ein weiterer **Lauf (Run)** erforderlich. Gespeicherte Erfassungen beziehen sich auf ihre ursprünglichen Eingaben. Die Auswahl des Verlaufs macht Änderungen an der Zeichnung nicht rückgängig. Ein gebündeltes Lernprogramm kann mit einem gespeicherten Referenzergebnis geöffnet werden, bevor Sie selbst etwas ausführen.

Verwenden Sie **Simulation → Diagramme anzeigen (Show charts)** oder in Desktop **Ansicht → Diagramme anzeigen (Show Charts)**, wenn das Bedienfeld ausgeblendet ist. Wenn Sie ein automatisch erzeugtes Sondendiagramm entfernen, bleibt es entfernt, bis Sie es ausdrücklich wieder hinzufügen. Ein ausgedocktes Diagramm kehrt beim Schließen zum Bedienfeld zurück.

## Eine Messung ist nicht verfügbar
{: #a-measurement-is-unavailable}

Prüfen Sie die Signalbindung, Einheit, das Zeitfenster, den Schwellenwert und die ausdrücklich festgelegten Anfangs-/Endpegel. Zeitmessungen benötigen vollständige Flankenübergänge/Zyklen. Eine Einschwingmessung muss innerhalb des angegebenen Endbands enden. Für die Grenzfrequenz sind der angeforderte Schnittpunkt und die Verstärkungsreferenz erforderlich; für die Bandbreite sind zwei Schnittpunkte nötig. Eine Resonanz am Rand des Durchlaufs ist nicht aufgelöst. Nicht unterstützte Geräte-Strom-/Leistungsvektoren werden nicht geraten.

Eine nicht verfügbare Anforderung gilt nicht als bestanden. Exportieren Sie die Bedingungen und den Fehlerstatus mit den Studienberichten und lassen Sie nicht konvergierte Toleranzfälle sichtbar. Wenn eine Studie keine auswertbaren Anforderungen enthält, gibt es keine Ertragsabschätzung.

## Eine Untersuchung speichern und reproduzieren
{: #saving-and-reproducing-an-investigation}

Bewahren Sie Zeichnung, Modellanhänge, Analyse-Einstellungen, Quelleneinstellungen, Temperatur und relevante Erfassung zusammen auf. Wenn Sie ohne numerische Ergebnisse gespeichert oder diese zur Verringerung der Dateigröße entfernt haben, führen Sie die Simulation erneut aus, um die Diagramme wiederherzustellen. Gespeicherte Momentaufnahmen von Skalarwerten/Berichten stellen die fehlenden Wellenform-Arrays nicht wieder her.

Ein reproduzierbarer Bericht nennt seine Modellannahmen, die Engine, das Messfenster und die Bedingungen. Vergleichen Sie die Ergebnisse mit den [erwarteten Werten des Lernprogramms](../Simulation-Tutorials/) und dem offiziellen [ngspice-Handbuch](https://ngspice.sourceforge.io/docs.html), wenn Sie ein Problem mit der Simulatorsprache eingrenzen.
