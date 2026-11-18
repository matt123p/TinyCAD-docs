---
layout: default
---
# Fehlerbehebung bei der Simulation
{: #simulation-troubleshooting}

Lesen Sie den Erfassungsstatus und die Diagnoseausgabe, bevor Sie Einstellungen ändern. Unterscheiden Sie zwischen **einem fehlgeschlagenen Lauf**, **einem gültigen Lauf mit unerwartetem Verhalten** und **einer Messung, die für das ausgewählte Ergebnis nicht verfügbar ist**. Für diese Fälle sind unterschiedliche Prüfungen erforderlich.

## Die Simulation startet nicht
{: #the-simulation-will-not-start}

| Symptom | Prüfung |
| --- | --- |
| Masse fehlt / schwebender Stromkreis | Verbinden Sie ein Stromversorgungssymbol oder eine Beschriftung mit dem Wert **0**. Eine separate GND-Beschriftung ist nicht automatisch Knoten 0. Prüfen Sie Quellenrückleitungen und isolierte Teilschaltungen. |
| Bauteilmodell fehlt | Verwenden Sie ein Bauteil aus der Bibliothek mit Modell oder stellen Sie eine Vorlage und ein Modell bereit. Abbildungen von Geräten sind keine Simulationsmodelle. |
| Attribute fehlen oder ungültige Pinzuordnung | Prüfen Sie die SPICE-Eigenschaften des Bauteils und die tatsächliche Anschlussreihenfolge des Modells. Instanzüberschreibungen können die Standardwerte ändern. |
| Modell/Include nicht gefunden | Fügen Sie den Modelltext und seine Abhängigkeiten dem Simulation-Blatt mit passenden logischen Dateinamen hinzu. Ein lokaler absoluter Pfad oder eine Web-URL wird nicht automatisch abgerufen. |
| Analysedirektiven in einem Bauteil | Entfernen Sie veraltete `.op`, `.tran`, `.ac`, `.end` und Steuertext für den Lauf aus den Bauteilattributen. Das integrierte Simulation-Blatt verwaltet die Analyseinstellungen. |
| XSPICE-Modell im Browser nicht verfügbar | Öffnen Sie die Zeichnung in Desktop, um einen neuen nativen Lauf auszuführen. Gespeicherte Ergebnisse können weiterhin im Browser geprüft werden. |
| Ungültige Quelle oder Bereich | Prüfen Sie die Felder der Wellenform, ansteigende PWL-Zeitpunkte, Start-/Stoppwerte, die Sweep-Richtung sowie positive Frequenz- und Zeitwerte. |

## Ein Ergebnis ist falsch oder der Solver konvergiert nicht
{: #a-result-is-wrong-or-the-solver-does-not-converge}

**Prüfen Sie zuerst die Schaltung.** Eine Leitung, die über einen Drahtendpunkt hinausragt, oder ein unbenutzter Anschluss kann eine unbeabsichtigte Verbindung erzeugen. Prüfen Sie T-Verbindungen, tatsächliche Pinenden, Netzbeschriftungen und verborgene Versorgungsspannungen. Eine Stromsonde oder ein Messgerät, das über eine Quelle gelegt wird, kann diese kurzschließen. Verwenden Sie die erzeugte Netzliste, um festzustellen, was der Simulator erhalten hat.

Prüfen Sie die Modellausrichtung und Anschlussreihenfolge: Diodenpolung, Kollektor/Basis/Emitter des BJT, Versorgungspins des Operationsverstärkers und Anschlussreihenfolge der Teilschaltung. Verwenden Sie aussagekräftige, eindeutige Referenzkennzeichen und vergewissern Sie sich, dass das Quellenreferenzkennzeichen in einer Sweep-/Rausch-/Übertragungseinstellung auf die vorgesehene Quelle verweist.

Prüfen Sie die DC-Arbeitspunkte mit Operating Point, bevor Sie AC untersuchen. Schleifen mit idealen Quellen, schwebende Knoten, abrupte ideale Übergänge und unangemessene Modellparameter können die Lösung einer Schaltung erschweren oder unmöglich machen. Fügen Sie einen physikalisch begründeten Widerstand oder endliche Flankenzeiten hinzu, wenn diese das reale Experiment beschreiben. Reduzieren Sie eine komplexe Schaltung auf den kleinsten fehlerhaften Abschnitt, bevor Sie numerische Optionen ändern.

Prüfen Sie numerische Suffixe: **1M im SPICE-Text bedeutet 1 Milli-Einheit, nicht eine Mega-Einheit**; verwenden Sie `1Meg` für Mega. Prüfen Sie Temperatur, DC-Wert der Quelle und Transienten-/AC-Einstellungen getrennt. Die Transientenamplitude einer Quelle wird nicht automatisch zu ihrer Kleinsignal-AC-Amplitude.

## Die Wellenform wirkt unvollständig
{: #the-waveform-looks-incomplete}

- Verlängern Sie die Transientendauer, wenn sich der Einschwingvorgang noch nicht stabilisiert hat oder der erforderliche Zyklus außerhalb des Laufs liegt.
- Verringern Sie die maximale Schrittweite, um schnelle Flanken oder schmale Impulse aufzulösen. Durch Vergrößern der Anzeige lassen sich fehlende Abtastwerte nicht wiederherstellen.
- Prüfen Sie die ausgewählte Einstellung, Erfassung, Ergebnisdarstellung, Legendenanzeige, Einheiten und Achsenbereiche.
- Verwenden Sie bei AC genügend Punkte nahe einer schmalen Resonanz und das korrekte Eingangs-/Ausgangsverhältnis.
- Wurde der Lauf abgebrochen oder ist er fehlgeschlagen, prüfen Sie die tatsächliche Datenverfügbarkeit; eine unvollständige Kurve ist kein abgeschlossenes Experiment.

## Diagramme oder Sondenmesswerte sind veraltet
{: #charts-or-probe-readings-are-stale}

Wenn Sie Verdrahtung, Werte, Modelltext oder Einstellungen bearbeiten, müssen Sie erneut **Ausführen (Run)**. Gespeicherte Erfassungen beschreiben ihre ursprünglichen Eingaben. Die Auswahl des Verlaufs macht Änderungen an der Zeichnung nicht rückgängig. Ein mitgeliefertes Lernprogramm kann mit einem gespeicherten Referenzergebnis geöffnet werden, bevor Sie selbst etwas ausführen.

Verwenden Sie **Simulation → Diagramme anzeigen (Show charts)** oder in Desktop **Ansicht → Diagramme anzeigen (Show Charts)**, wenn der Bereich ausgeblendet ist. Wenn Sie ein automatisch erstelltes Sondendiagramm entfernen, bleibt es entfernt, bis Sie es ausdrücklich wieder hinzufügen. Ein aus einem Diagramm herausgelöstes Fenster kehrt beim Schließen in den Bereich zurück.

## Eine Messung ist nicht verfügbar
{: #a-measurement-is-unavailable}

Prüfen Sie die Signalzuordnung, Einheit, das Zeitfenster, den Schwellenwert und explizite Anfangs-/Endwerte. Zeitmessungen erfordern vollständige Flankenübergänge/Zyklen. Eine Einschwingmessung muss innerhalb des angegebenen Endbands enden. Für die Grenzfrequenz sind der angeforderte Schnittpunkt und die Verstärkungsreferenz erforderlich; für die Bandbreite werden zwei Schnittpunkte benötigt. Eine Resonanz an der Sweep-Grenze ist nicht aufgelöst. Nicht unterstützte Strom-/Leistungsvektoren von Bauteilen werden nicht geschätzt.

Eine nicht verfügbare Anforderung gilt nicht als bestanden. Exportieren Sie die Bedingungen und den Fehlerstatus mit den Studienberichten und lassen Sie nicht konvergierte Toleranzfälle sichtbar. Wenn eine Studie keine auswertbaren Anforderungen enthält, gibt es keine Ertragsschätzung.

## Eine Untersuchung speichern und reproduzieren
{: #saving-and-reproducing-an-investigation}

Bewahren Sie Zeichnung, Modellanhänge, Analyse- und Quelleinstellungen, Temperatur sowie relevante Erfassungen zusammen auf. Wenn Sie ohne numerische Ergebnisse gespeichert oder diese zum Verringern der Dateigröße entfernt haben, führen Sie die Simulation erneut aus, um die Diagramme wiederherzustellen. Gespeicherte Skalar- und Berichtsmomentaufnahmen können die fehlenden Wellenform-Arrays nicht wiederherstellen.

Ein reproduzierbarer Bericht nennt seine Modellannahmen, die Engine, das Messfenster und die Bedingungen. Vergleichen Sie die [Erwartungswerte des Lernprogramms](../Simulation-Tutorials/) und das offizielle [ngspice-Handbuch](https://ngspice.sourceforge.io/docs.html), wenn Sie ein Problem mit der Simulatorsprache eingrenzen.
