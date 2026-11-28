---
layout: default
---
# Quellen, Tastköpfe und virtuelle Messgeräte
{: #sources-probes-and-virtual-instruments}

Das Menü **Simulation** der Symbolleiste enthält Einfügewerkzeuge für **SPICE** und **Laborausrüstung**. Wählen Sie ein Werkzeug aus und platzieren Sie es im Schaltplan. Klicken Sie mit der rechten Maustaste oder drücken Sie Escape, um die Platzierung abzubrechen. Werkzeuge, die auf einem Simulationsblatt ausgewählt werden, wechseln für die Platzierung zu einem Schaltplan; ihre Definitionen werden in die Zeichnung eingebettet.

## Unabhängige Quellen
{: #independent-sources}

Wählen Sie **Simulation → SPICE → Quelle einfügen**. Der Editor wird vor der Platzierung geöffnet. Wählen Sie Spannung oder Strom und einen Signaltyp aus. Wählen Sie den Körper einer platzierten Quelle aus, um den Editor an ihrer Unterseite erneut zu öffnen.

| Signaltyp | Geeignet für | Zu prüfende Einstellungen |
| --- | --- | --- |
| Gleichspannung (DC) | Arbeitspunkte und eine konstante Versorgung | DC-Wert und Polarität |
| Sinus | Einen periodischen analogen Eingang | Offset, Spitzenamplitude, Frequenz, Phase, Verzögerung und Dämpfung |
| Rechteck/Impuls | Schalten und Zeitsteuerung | Niedriger/hoher Pegel, Verzögerung, Anstiegs-/Abfallzeit, Impulsbreite und Periode |
| Dreieck | Eine sich wiederholende Rampe | Pegel, Periode und Rampenzeitsteuerung |
| Stückweise linear (PWL) | Eine vorgegebene Folge | Ansteigende Zeit-/Wertepaare, ein Paar pro Zeile |
| Exponentiell | Einen geformten Übergang | Pegel, Verzögerungen und Zeitkonstanten |
| FM | Frequenzmodulation | Träger- und Modulationseinstellungen |

![Editor der Sinusquelle und Kurvenformvorschau](../Images/simulation/source-settings.png)

Die Vorschau bildet die numerischen Kurvenformeinstellungen ab. Verwenden Sie sie, um einen unerwarteten Offset, Spitzenwert oder Zeitverlauf vor dem Start zu erkennen. Ungültige Einstellungen verhindern den Start. Das Symbol einer Quelle ändert sich je nach Kurvenform; eine Stromquelle behält ihren Richtungspfeil bei.

**AC-Amplitude und Phase sind separate Einstellungen** für die Kleinsignal-Frequenzanalyse. Sie sind unabhängig von der transienten Sinusamplitude. Auch der DC-Vorspannungswert der Quelle und die transiente Kurvenform müssen bewusst festgelegt werden. Siehe [Analysen](../Simulation-Analyses/) und [das Tutorial zu Quellen](../SPICE-Tutorial-03/).

Neue Quellen und Tastköpfe haben einen kompakten Anschlussabstand von 8 mm. Bei älteren, großen Steuerelementen gibt es im Editor an ihrer Unterseite die Option **Kompaktes Symbol verwenden**. Bei der Umwandlung bleibt der erste Anschluss fixiert, und vorhandene Verbindungen werden in einem rückgängig machbaren Bearbeitungsschritt bis zu den angepassten Anschlüssen verlängert. Überprüfen Sie die Verbindungen nach einer Größenänderung.

## Tastköpfe und Masse
{: #probes-and-ground}

| Werkzeug unter **Simulation → SPICE** | Anschluss | Bedeutung |
| --- | --- | --- |
| **Tastkopf einfügen** | Eine Spitze an einem Netz | Spannung relativ zu Masse 0 |
| **Differenztastkopf einfügen** | + und − an zwei Netzen | `V(+) − V(−)` |
| **Stromtastkopf einfügen** | In Reihe mit einem Zweig | Strom von + nach − |
| **Masse einfügen** | Am Bezugsnetz der Schaltung | Verbindet das Erdungssymbol für Versorgung mit dem Wert 0 |

Beim Einfügen von Tastköpfen/Masse wird auf einen Leiter eingerastet und dieser am Anschlusspunkt aufgetrennt. Überprüfen Sie die genaue Position und Polarität der Spitze. Ein Stromtastkopf ist eine **ideale Spannungsquelle mit null Volt**: Er muss in Reihe geschaltet werden. Wird er parallel zu einer Versorgung angeschlossen, entsteht ein Kurzschluss. Entfernen oder unterbrechen Sie beim Einfügen einer Strommessung den ursprünglichen parallelen Leiter.

Tastkopffelder wählen Erfassungs- und Anzeigemodus aus. Arbeitspunktsignale können Skalarwerte anzeigen; komplexe AC-Ergebnisse können als Realteil, Betrag, dB und Phase dargestellt werden. Fehlt das erforderliche Ergebnis oder gehört es zu einer geänderten Schaltung, erklärt das Feld, warum es nicht verfügbar ist oder erneut berechnet werden muss.

### Gesteuerte Quellen
{: #controlled-sources}

**Gesteuerte Quelle einfügen** stellt eine spannungsgesteuerte Spannungsquelle (**E**) oder eine spannungsgesteuerte Stromquelle (**G**) bereit. Die Ausgangsanschlüsse sind +/− und mit 1/2 nummeriert; die Steuereingänge sind C+/C− und mit 3/4 nummeriert. Schließen Sie beide Seiten des Steuereingangs an und prüfen Sie die Übertragungskennlinie im Editor. Ein Steuereingang ist kein Versorgungsausgang.

## Virtuelle Labormessgeräte
{: #virtual-laboratory-equipment}

Wählen Sie diese unter **Simulation → Laborausrüstung** aus. Es handelt sich um funktionsfähige Modelle mit Erfassungssteuerungen. Die ähnlich benannten Abbildungen unter **Standard → Test & Messung** dienen der Darstellung physischer Laboraufbauten und führen keine Simulationsmessungen durch.

Laden Sie für eine fertig verdrahtete Schaltung [Virtual laboratory.dzn](../examples/simulation/virtual-laboratory.dzn) herunter und verwenden Sie **Datei → Öffnen**. Dies ist eine zugehörige Demonstrationsdatei und kein benannter Eintrag im mitgelieferten Beispielbrowser.

### Oszilloskop
{: #oscilloscope}

Das Oszilloskop verfügt über zwei Differenzialkanäle: **1 A+**, **2 A−**, **3 B+**, **4 B−**. Schließen Sie neben dem positiven Eingang auch jeweils den negativen Eingang an. Die Standard-Eingangsimpedanz beträgt **1 MΩ**; dies kann sich auf eine hochohmige Schaltung auswirken.

Verwenden Sie Zeit/Div und Volt/Div mit der Anzeige aus zehn horizontalen und acht vertikalen Skalenteilen. Die Triggermodi sind **Auto**, **Normal** und **Einzel**. **Erfassen** fordert transiente Daten über zehn Zeitskalenteile mit einer maximalen Schrittweite von ungefähr Zeit/Div geteilt durch 100 an. Eine Änderung der Anzeigeskala nach einem Lauf startet keine neue Erfassung und behebt keine fehlenden Flanken.

AC-Kopplung entfernt den zeitgewichteten Mittelwert aus dem angezeigten Signal; sie bildet kein physisches analoges Hochpass-Eingangsmodell ab. GND-Kopplung zeigt null an, während die Messgerätebelastung weiterhin angeschlossen bleibt. Die Zeit-/Pegelsteuerungen des Oszilloskops helfen bei der Untersuchung von Daten; sie machen aus einem unterabgetasteten Lauf keine gültige Zeitmessung.

### Multimeter
{: #multimeter}

Verwenden Sie **VΩ und COM** für Spannung oder Widerstand und **A und COM** für Strom. Die Strommessung muss in Reihe erfolgen. Der Spannungseingang hat standardmäßig **10 MΩ**; im Strommessmodus werden ein **Bürdenwiderstand von 1 Ω** und eine Messspannungsquelle mit null Volt verwendet. Ein Moduswechsel verändert daher die Belastung der Schaltung und erfordert einen neuen Lauf.

DC zeigt die jeweilige stationäre Größe bzw. den Mittelwert an. AC verwendet den zeitgewichteten Effektivwert ohne DC-Anteil. Ein Wert außerhalb des Messbereichs wird als **OL** angezeigt. Dies sind modellierte Messgerätefunktionen ohne Simulation von Sicherungs- oder thermischem Versagen.

Die Widerstandsmessung ist eine separate, vorübergehende Prüfung an einer spannungsfreien Schaltung. Unabhängige Quellen werden unterdrückt und die Messgeräteanschlüsse für die Prüfung getrennt. Unterstützt werden R/C/L-Netzwerke und Tastköpfe: Kondensatoren sind bei DC offen und Induktivitäten kurzgeschlossen. Aktive Bauteile oder nicht unterstützte Vorlagen machen die Widerstandsprüfung nicht verfügbar. Interpretieren Sie sie nicht als Widerstandsmessung innerhalb eines beliebigen unter Spannung stehenden elektronischen Geräts.

### Funktionsgenerator
{: #function-generator}

Der Generator stellt Sinus-, Impuls-/Rechteck-, Dreieck- und PWL-Kurvenformen mit Einstellungen für Amplitude, Offset, Frequenz und Zeitverlauf bereit. Seine Vorschau zeigt die Kurvenform im **Leerlauf**. Sein standardmäßiger **Ausgangswiderstand von 50 Ω** kann dazu führen, dass eine angeschlossene Last die Klemmenspannung verringert.

Ausgang Aus entspricht näherungsweise einem offenen Anschluss mit einer Leckimpedanz von **1 TΩ**. Die Kleinsignal-AC-Amplitude bleibt von der transienten Amplitude getrennt. Prüfen Sie vor dem Vergleich der programmierten Kurvenform mit einem Messwert, ob sich die erforderliche Amplitude auf den Spitzenwert, Spitze-Spitze-Wert oder Effektivwert bezieht.

### Labornetzgerät
{: #bench-supply}

Stellen Sie Spannung, Strombegrenzung, Ausgangswiderstand, Aktivierung und eine optionale Rampenzeit ein. Das Modell verwendet eine weiche, verhaltensbasierte Strombegrenzung und einen endlichen Widerstand; im Bedienfeld werden gemessene Werte für V/I und der **CV/CC**-Betrieb angezeigt. Wird die Strombegrenzung unter den Lastbedarf abgesenkt, sinkt die gelieferte Spannung.

Es kann innerhalb derselben Begrenzung Strom liefern oder aufnehmen. Dies ist weder ein Hersteller-Schaltnetzteilmodell noch ein thermisches Modell. Ein deaktivierter Ausgang wird näherungsweise durch eine Leckimpedanz von 1 TΩ dargestellt. Die Rampe wirkt sich auf die transiente Analyse aus; für den DC-Arbeitspunkt wird die endgültig programmierte Spannung verwendet.

Numerische Eigenschaften von Generator und Netzgerät können für vorübergehende Einstellungen oder Testbedingungen an [Circuit Explorer](../Simulation-Charts-and-Measurements/) gebunden werden. In der Desktop-Version können Messgerätefelder in separaten Fenstern geöffnet werden; Diagramme können in beiden Produkten als separate Fenster angezeigt werden.

## Die Belastung gehört zum Experiment
{: #loading-is-part-of-the-experiment}

Ein idealer Spannungstastkopf und ein belasteter Oszilloskopeingang liefern unterschiedliche Schaltungsergebnisse. Berücksichtigen Sie vor dem Ergebnisvergleich die Generatorimpedanz, die Bürde des Messgeräts, die Oszilloskopeingangsbelastung und gemeinsame Rückleitungen. Verwenden Sie eine Differenzialmessung, wenn keiner der beiden Signalanschlüsse auf Masse liegt. Schlägt der Lauf nach dem Hinzufügen eines Messgeräts fehl, überprüfen Sie dessen Verdrahtung und Modus, bevor Sie die Solver-Einstellungen ändern.
