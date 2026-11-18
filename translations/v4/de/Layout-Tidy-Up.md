---
layout: default
---
# Layout aufräumen
{: #layout-tidy-up}

**Automatisches Layout (Auto-layout)** räumt einen vorhandenen Schaltplan auf, indem es Bauteilpositionen, Leitungen und Beschriftungen anpasst. Verwenden Sie es, um eine überfüllte Schaltung leichter lesbar zu machen, unnötige Knicke zu reduzieren oder den Abstand von Referenzen und Werten zu verbessern.

Es funktioniert auf dem **aktuellen Schaltplanblatt**, sowohl im Browser als auch in der Desktop-App. Die vorhandenen elektrischen Verbindungen bleiben erhalten; das Werkzeug leitet nicht ab, welche Verbindungen Sie zeichnen wollten, und erstellt keine Schaltung von Grund auf neu.

## Automatisches Layout öffnen
{: #open-auto-layout}

Wählen Sie in beiden Produkten in der Symbolleiste **Automatisches Layout (Auto-layout)** direkt neben **Simulation**. In der Desktop-App können Sie auch **Werkzeuge → Automatisches Layout (Auto-layout)** wählen.

Wählen Sie zuerst ein Schaltplanblatt aus. Das Werkzeug ist nicht verfügbar, wenn Sie eine Bibliothek bearbeiten oder ein Simulationsblatt anzeigen.

## Auswählen, was aufgeräumt werden soll
{: #choose-what-to-tidy}

Die Einstellung **Anwenden auf (Apply to)** im Dialog bietet folgende Optionen:

- **Gesamtes Blatt (Whole sheet)** — räumt die unterstützten Schaltungselemente auf dem aktuellen Blatt auf.
- **Ausgewählte Elemente (Selected Items)** — räumt nur die ausgewählten Schaltungselemente auf. Elemente außerhalb der Auswahl bleiben fixiert, und Verbindungen an deren Begrenzung bleiben erhalten.

Um einen kleinen Bereich zu bearbeiten, wählen Sie vor dem Öffnen des Dialogs gemeinsam die Bauteile sowie die Leitungen und Beschriftungen aus, die angepasst werden sollen. „Ausgewählte Elemente“ ist die Standardoption, wenn die Auswahl ein unterstütztes Schaltungselement enthält. Sie ist deaktiviert, wenn die Auswahl nur nicht unterstützte Objekte wie Notizfelder oder Zeichnungsformen enthält oder wenn nichts ausgewählt ist.

Eine Auswahl kann Symbole, Leitungen, Netzbeschriftungen, Versorgungssymbole, Nicht-verbinden-Markierungen und Knotenpunkte enthalten. Ein Bauteil außerhalb der Auswahl wird nicht allein deshalb verschoben, weil es mit einem ausgewählten Bauteil verbunden ist.

## Stärke auswählen
{: #choose-the-strength}

**Stärke (Strength)** steuert, wie stark sich die Bauteilplatzierung ändern darf:

| Stärke | Mögliche Änderungen |
| --- | --- |
| **Niedrig (Low)** | Große Bauteile bleiben fixiert; kleinere Bauteile, Leitungen und Beschriftungen können dennoch verschoben werden. |
| **Mittel (Medium)** | Bis zu zwei große Bauteile dürfen verschoben werden, ebenso kleinere Bauteile, Leitungen und Beschriftungen. Dies ist die Standardoption. |
| **Hoch (High)** | Alle geeigneten Bauteile dürfen zusammen mit Leitungen und Beschriftungen verschoben werden. |

Beginnen Sie mit „Niedrig“, wenn Sie die grundlegende Anordnung beibehalten möchten. Verwenden Sie „Mittel“ oder „Hoch“, wenn die Schaltung mehr Platz zur Neuordnung benötigt. „Niedrig“ ist keine Option, die nur Beschriftungen betrifft: Auch die Position kleiner Bauteile und Leitungsverläufe können sich ändern.

„Groß“ wird anhand der Symbolgeometrie und der Pinanzahl bestimmt, nicht anhand der elektrischen Bedeutung. Eine Änderung der Stärke dreht, vergrößert oder ersetzt keine Bauteile und ändert weder deren Referenzen und Werte noch Modelleinstellungen.

## Ausführen und Ergebnis prüfen
{: #run-and-review-the-result}

1. Öffnen Sie eine Zeichnung oder eine bearbeitbare Kopie eines [mitgelieferten Beispiels](../Bundled-Examples/).
2. Wählen Sie den aufzuräumenden Bereich aus, wenn Sie den Vorgang eingrenzen möchten.
3. Öffnen Sie **Automatisches Layout (Auto-layout)**, wählen Sie **Anwenden auf (Apply to)** und **Stärke (Strength)** und klicken Sie dann auf **Start (Go)**.
4. Warten Sie, solange **Layout wird angeordnet … (Arranging layout…)** angezeigt wird. Ein erfolgreiches Ergebnis wird sofort übernommen und der Dialog geschlossen.
5. Prüfen Sie das Ergebnis. Verwenden Sie **Rückgängig (Undo)**, um den gesamten Aufräumvorgang mit einem Schritt rückgängig zu machen, wenn Sie die ursprüngliche Anordnung bevorzugen.

{% include video-player.html src="/v4/videos/simulation/layout-tidy-up.mp4" poster="/v4/videos/simulation/layout-tidy-up.jpg" caption="Öffnen Sie das automatische Layout, wählen Sie den Bereich und die Stärke aus, räumen Sie das Verstärkerbeispiel auf und machen Sie die Änderung anschließend rückgängig." %}

**Abbrechen (Cancel)** bricht die Berechnung ab und schließt den Dialog, ohne Änderungen zu übernehmen. Wenn sich das Blatt während der Ausführung des Werkzeugs ändert, wird das Ergebnis verworfen; führen Sie den Vorgang für das aktuelle Blatt erneut aus.

**Es wurden keine Layoutverbesserungen gefunden (No layout improvements were found)** bedeutet, dass das Werkzeug im gewählten Bereich und mit der gewählten Stärke keine akzeptablen Änderungen gefunden hat. Die Zeichnung bleibt unverändert. Sie können den Dialog schließen, einen anderen Bereich auswählen, eine andere Stärke ausprobieren oder eine manuelle Anpassung vornehmen.

## Was das Werkzeug verbessert
{: #what-the-tool-improves}

Das automatische Layout sucht nach verschiedenen Verbesserungsmöglichkeiten:

- Bessere Lesbarkeit von Referenz- und Werttexten der Bauteile. Dabei werden zusammengehörige Felder beieinander und mit Abstand zu benachbarter Grafik, Leitungen und anderen Texten gehalten.
- Bessere Positionen für einfache Netzbeschriftungen entlang der zugehörigen Leitungen; verwandte Beschriftungen werden nach Möglichkeit ausgerichtet.
- Einfachere orthogonale Leitungsverläufe, kürzere unnötige Umwege und klarere Abgänge von Bauteilpins.
- Kompaktere Platzierung verbundener Bauteile und gleichmäßige Abstände zwischen wiederholt vorkommenden Bauteilen.
- Geordnete parallele Verläufe zusammengehöriger Leitungen, sofern ihre Verbindungen und der verfügbare Platz dies zulassen.

Es gestaltet keine Notizfelder, Busse, geformten Anschlussmarkierungen, Bibliotheksgrafiken oder Seitenrahmen neu. Einige dichte oder ungewöhnliche Symbole müssen weiterhin manuell angepasst werden. Eine längere Leitung kann das bessere Ergebnis sein, wenn sie Platz für eine Beschriftung schafft oder eine Verbindung übersichtlich hält.

## Verbindungen vor dem Aufräumen prüfen
{: #check-connections-before-tidying}

Das automatische Layout verwendet die **vorhandene Konnektivität der Zeichnung als Ausgangspunkt**. Vor dem Übernehmen von Änderungen prüft es sowohl die Zugehörigkeit zu elektrischen Netzen als auch die physischen Leitungsverbindungen. Benannte Netzbeschriftungen können bei diesen Prüfungen eine unterbrochene physische Leitung nicht verdecken.

Eine Leitung, die durch einen Endpunkt einer anderen Leitung oder eine Buchse verläuft, kann auch ohne sichtbaren Verbindungspunkt eine elektrische Verbindung herstellen. Falls dieser Kontakt unbeabsichtigt ist, korrigieren Sie ihn vor dem Ausführen des automatischen Layouts: Das Werkzeug kann nicht entscheiden, ob eine bestehende Verbindung ein Zeichenfehler war. Es verschiebt keine mehrdeutigen Verbindungspunkte, um zuvor getrennte Netze zu verbinden.

Prüfen Sie nach dem Aufräumen Abzweigungen, Pinverbindungen und Leitungsverläufe um nicht verwendete Buchsen. Verwenden Sie bei Bedarf die [Entwurfsregelprüfung (Design Rules Check](../Design-Rules-Check/) und vergleichen Sie die Schaltung mit den beabsichtigten Verbindungen. Wenn eine Simulationszeichnung als geändert markiert ist, [führen Sie die Simulation erneut aus](../Simulation/), bevor Sie alte Ergebnisse als Messwerte der aktuellen Zeichnung betrachten.

## Automatisches Layout oder Punkt-zu-Punkt-Leitung?
{: #auto-layout-or-point-to-point-wire}

Verwenden Sie **Automatisches Layout (Auto-layout)**, um die Geometrie aufzuräumen, die bereits im Schaltplan vorhanden ist. Verwenden Sie [Punkt-zu-Punkt-Leitung (Point-to-Point Wire)](../Wires/#auto-routing), wenn Sie eine neue geroutete Verbindung zwischen zwei Endpunkten erstellen möchten. Mit dem normalen [Leitungswerkzeug (Wire tool)](../Wires/#placing-wires) können Sie die einzelnen Ecken selbst festlegen.

Siehe auch [Am Raster ausrichten (Snap to Grid)](../Snap-to-Grid/), [Beschriftungen (Labels)](../Labels/) und [Seitengröße (Page Size)](../Page-Size/).
