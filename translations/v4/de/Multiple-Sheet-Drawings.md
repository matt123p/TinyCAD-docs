---
layout: default
---
# Zeichnungen mit mehreren Blättern
{: #multiple-sheet-drawings}

Eine TinyCAD-Zeichnung kann mehrere Schaltplanblätter in **einer Datei** enthalten. Jedes Blatt hat einen eigenen Zeichenbereich und eine Registerkarte unterhalb der Arbeitsfläche. Verwenden Sie die Registerkarten, um jeweils an einem Blatt zu arbeiten; zusammen beschreiben die Schaltplanblätter einen Stromkreis.

## Warum mehrere Blätter verwenden?
{: #why-use-multiple-sheets}

Mit mehreren Blättern können Sie einen Entwurf in übersichtliche Abschnitte gliedern, statt alles verkleinert auf eine überfüllte Seite zu quetschen. Zum Beispiel:

| Blatt | Möglicher Inhalt |
| --- | --- |
| **Stromversorgung** | Eingangsstecker, Schutzschaltungen, Spannungsregler und Versorgungsschienen |
| **Steuerung** | Prozessor, Takt, Reset und Programmieranschlüsse |
| **Sensoren** | Messeingänge und zugehörige Schnittstellenschaltungen |
| **Ausgänge** | Treiber, Relais, Motoren, Anzeigen oder externe Stecker |

So lässt sich jeder Abschnitt einfacher zeichnen, prüfen und in lesbarer Größe drucken. Sie können zusammengehörige Bauteile beisammenhalten, jeder Seite einen klaren Zweck geben und die Seiten in einer sinnvollen Lesereihenfolge anordnen. Bei einem kleinen Entwurf kann ein einzelnes Blatt weiterhin übersichtlicher sein.

Ein Blatt ist Teil der aktuellen Zeichnung und keine separate Datei oder Browserregisterkarte. Das Öffnen zweier nicht zusammengehöriger Zeichnungsdateien verbindet sie nicht, auch wenn sie identische Bezeichnungen enthalten.

## Blätter erstellen und wechseln
{: #create-and-switch-sheets}

1. Öffnen Sie Ihre Zeichnung und suchen Sie die Blattregisterkarten unterhalb der Arbeitsfläche.
2. Wählen Sie **+** neben den Registerkarten. Der Tooltip lautet **Neues Blatt hinzufügen** (Add new sheet).
3. Geben Sie einen **Blattnamen** (Sheet Name) ein, zum Beispiel `Control`, und wählen Sie **Hinzufügen** (Add).
4. Das neue Blatt wird aktiv. Platzieren Sie dort Bauteile und Drähte, oder verschieben Sie ausgewählte Elemente mit Ausschneiden und Einfügen von einem anderen Blatt.
5. Wählen Sie die Registerkarte eines beliebigen Blatts, um dorthin zurückzukehren. Beim Wechseln zwischen Blättern gehen deren Inhalte nicht verloren.

Verwenden Sie eindeutige, aussagekräftige Namen, damit Leser des Schaltplans den benötigten Abschnitt finden können.

## Ein Blatt umbenennen
{: #rename-a-sheet}

1. Wählen Sie die Registerkarte des Blatts.
2. Öffnen Sie das kleine Pfeilmenü neben dem Namen.
3. Wählen Sie **Umbenennen** (Rename), geben Sie den neuen **Blattnamen** (Sheet Name) ein und wählen Sie dann im Dialogfeld **Umbenennen** (Rename).

Durch das Umbenennen wird der Seitenname geändert. Bauteilkennzeichen oder Netzbezeichnungen werden dadurch nicht umbenannt, und elektrische Verbindungen ändern sich nicht.

## Blattreihenfolge ändern
{: #change-the-sheet-order}

Ziehen Sie eine Blattregisterkarte auf eine andere Registerkarte, um sie an diese Position zu verschieben. Sie können auch eine Registerkarte auswählen, ihr Pfeilmenü öffnen und **Nach links verschieben** (Move left) oder **Nach rechts verschieben** (Move right) wählen, um sie jeweils um eine Position zu verschieben.

Durch eine Neuordnung ändert sich die Seitenreihenfolge, nicht aber die Bauteile oder die Verbindungen des Stromkreises. Verwenden Sie diese Funktion, um den Stromversorgungsabschnitt an den Anfang zu setzen, zusammengehörige Funktionen zu gruppieren oder unterstützende Seiten hinter dem Hauptstromkreis anzuordnen. Ziehen Sie die **Registerkarte**, wenn Sie die Seiten neu ordnen möchten; durch Ziehen eines Bauteils wird stattdessen dieses Bauteil verschoben.

## Video: Blätter organisieren und mit Bezeichnungen verbinden
{: #video-organise-sheets-and-connect-them-with-labels}

Die Anleitung beginnt mit **Beispiel öffnen (Open Example) → SPICE-Tutorial (SPICE tutorial) → Spannungsteiler (divider)**. Sie benennt das Blatt Circuit in Power um, erstellt Control, ordnet die Registerkarten neu und verschiebt dann R2 nach Control. Übereinstimmende Bezeichnungen OUT und Masseanschlüsse mit dem Namen 0 verbinden den Spannungsteiler über die beiden Schaltplanblätter hinweg. In der Netzlistansicht wird bestätigt, dass R1 und R2 dasselbe Netz OUT verwenden.

{% include video-player.html src="/v4/videos/simulation/multiple-sheets.mp4" poster="/v4/videos/simulation/multiple-sheets.jpg" caption="Blätter erstellen, umbenennen und neu ordnen und anschließend mit übereinstimmenden Bezeichnungen einen Spannungsteiler über Stromversorgung und Steuerung hinweg verbinden." %}

Das Beispiel enthält außerdem ein mit einer Uhr markiertes Blatt Simulation. Dieses Blatt speichert Analyseeinstellungen und Ergebnisse; es unterscheidet sich von einer Schaltplanseite. Alle Schaltplanblätter tragen weiterhin zum selben simulierten Stromkreis bei.

## Verbindungen zwischen Blättern herstellen
{: #make-connections-between-sheets}

Ein Draht kann nicht physisch auf einer anderen Seite fortgeführt werden. Verwenden Sie stattdessen **elektrisch aktive Bezeichnungen mit demselben Namen** an den Punkten, die Sie verbinden möchten. TinyCAD behandelt diese Punkte über alle Schaltplanblätter der Zeichnung hinweg als ein Netz.

Zum Beispiel kann ein mit `+3V3` bezeichneter Regl Ausgang auf Power einen Prozessoreingang versorgen, der auf Control mit `+3V3` bezeichnet ist. Ein mit `RESET` bezeichnetes Signal kann eine Reset-Schaltung auf einem Blatt mit einem Prozessor auf einem anderen Blatt verbinden. Die Bezeichnungen müssen den vorgesehenen Drähten oder Pins zugeordnet sein.

### Eine gemeinsame Netzbezeichnung platzieren
{: #place-a-shared-net-label}

1. Zeichnen Sie auf dem ersten Blatt wie gewohnt den lokalen Draht zum Bauteilpin.
2. Wählen Sie das Werkzeug **Bezeichnung** (Label) und platzieren Sie dessen elektrischen Verbindungspunkt auf dem Draht oder Pin. Text in der Nähe genügt nicht.
3. Bearbeiten Sie den Bezeichnungstext und geben Sie einen aussagekräftigen Namen ein, zum Beispiel `RESET` oder `I2C_SDA`. Wählen Sie zum Bearbeiten den Bezeichnungstext aus und ersetzen Sie den Standardtext `Label`.
4. Wechseln Sie zum anderen Blatt und platzieren Sie eine weitere Bezeichnung auf dem Draht oder Pin, der mit demselben Netz verbunden werden soll.
5. Geben Sie **genau denselben Namen** ein, einschließlich Schreibweise, Leerzeichen und Groß-/Kleinschreibung.
6. Wiederholen Sie dies auf weiteren Blättern, wo dasselbe elektrische Netz benötigt wird.

Verwenden Sie das [Werkzeug „Bezeichnung“](../Labels/) statt des [Werkzeugs „Text“](../Text/). Ein Hinweis mit dem Text RESET dokumentiert die Zeichnung; eine Bezeichnung mit dem Text RESET stellt eine elektrische Verbindung her.

### Durchgearbeitetes Beispiel: ein Spannungsteiler auf zwei Blättern
{: #worked-example-a-divider-on-two-sheets}

Teilen Sie den üblichen 5-V-Spannungsteiler in einen Versorgungsabschnitt und einen Lastabschnitt auf:

| Blatt | Bauteile | Gemeinsame Verbindungen |
| --- | --- | --- |
| **Stromversorgung** | V1 = 5 V und R1 = 1 kΩ | Der Ausgangsdraht von R1 ist mit **OUT** bezeichnet; der Rückleiter von V1 ist mit Masse **0** verbunden. |
| **Steuerung** | R2 = 1 kΩ | Der obere Pin von R2 ist mit **OUT** bezeichnet, und der untere Pin ist mit einem Masseversorgungssymbol namens **0** verbunden. |

OUT verbindet R1 und R2 über die Blätter hinweg. Die übereinstimmenden Massennamen verbinden den Rückleiter von R2 mit Masse 0 auf Power. Zwischen den Seiten ist kein Draht eingezeichnet, aber der elektrische Stromkreis verläuft weiterhin V1 → R1 → R2 → Rückleiter. Bei den ursprünglichen Werten bleibt die Betriebspunkt-Ausgangsspannung 2.5 V.

Im Video wird R2 mit **Ausschneiden und Einfügen** (Cut and Paste) verschoben, sodass sein Kennzeichen erhalten bleibt, statt ein zweites R2 zu erzeugen. Achten Sie beim Hinzufügen weiterer Bauteile darauf, dass die Kennzeichen in der gesamten Zeichnung eindeutig sind, damit Netzlisten und Berichte das vorgesehene Bauteil identifizieren.

## Bezeichnungsnamen gelten für die gesamte Zeichnung
{: #label-names-apply-to-the-whole-drawing}

Gemeinsame Namen sind nützlich, aber es kann dadurch auch leicht passieren, dass nicht zusammengehörige Abschnitte versehentlich verbunden werden. Eine Bezeichnung namens `OUT` auf drei verschiedenen Blättern verbindet alle drei Stellen; sie gilt nicht nur für das jeweilige Blatt. Verwenden Sie spezifischere Namen wie `SENSOR_OUT` und `AUDIO_OUT`, wenn die Signale getrennt bleiben sollen.

Blattnamen und Registerkartenreihenfolge sorgen nicht für elektrische Trennung. Die Form einer Bezeichnung ist ebenfalls nur eine visuelle Konvention: Einfache Bezeichnungen sowie Bezeichnungen für Eingänge, Ausgänge und bidirektionale Signale mit demselben Namen gehören zum selben Netz. Wählen Sie die Formen so, dass Leser der vorgesehenen Signalrichtung folgen können, und die Namen so, dass die Verbindungen festgelegt werden.

[Versorgungssymbole](../Power-symbols/) stellen ebenfalls gemeinsame benannte Versorgungsanschlüsse her. Achten Sie auf einheitliche Namen: `+3V3` und `3V3` sind unterschiedliche Namen. Verwenden Sie für SPICE eine tatsächliche Verbindung zum Knoten **0**; ein separates Netz namens GND ist nicht automatisch die Massebezugsspannung des Simulators.

## Verbindungen zwischen Blättern prüfen
{: #check-the-cross-sheet-connections}

Verwenden Sie das Modusmenü des unteren Listenbereichs, um von **Symbole** (Symbols) zu **Netzliste** (Netlist) zu wechseln. Suchen Sie die gemeinsame Bezeichnung und prüfen Sie die verbundenen Bauteilkennzeichen und Pinnummern. Die Spalte „Blatt“ nennt das Hauptelement, das durch die Zeile dargestellt wird; die Spalte „Symbole“ kann Bauteile von anderen Blättern auf demselben Netz enthalten. Im Beispiel enthält OUT sowohl R1 als auch R2.

Wenn die Verbindung fehlt, prüfen Sie den Anschlusspunkt der Bezeichnung und den exakten Text auf beiden Seiten. Wenn nicht zusammengehörige Bauteile dasselbe Netz verwenden, suchen Sie in der Zeichnung nach einer an anderer Stelle wiederverwendeten Bezeichnung. Die [Entwurfsregelprüfung](../Design-Rules-Check/) kann helfen, elektrische Probleme zu erkennen, aber sie kann nicht feststellen, ob Sie zwei gleichnamige Netze getrennt halten wollten.

Weitere Informationen finden Sie unter [Netzlisten-Editor](../Netlist-Editor/) und [Bezeichnungen](../Labels/). Führen Sie bei einer Simulationszeichnung nach einer Änderung des Stromkreises die Analyse erneut aus, damit das Ergebnis alle aktuellen Schaltplanblätter berücksichtigt.

## Gesamte Zeichnung speichern
{: #save-the-complete-drawing}

Mit **Speichern** (Save) werden alle Blätter gemeinsam gespeichert. Für gewöhnliche Zeichnungen wird `.dsn` verwendet; Zeichnungen mit Simulationsinhalten verwenden [`.dzn`](../Simulation/#dzn-simulation-drawings). Sie müssen nicht jedes Blatt einzeln speichern.

- Zurück zu [Zeichnung](../User-guide/)
