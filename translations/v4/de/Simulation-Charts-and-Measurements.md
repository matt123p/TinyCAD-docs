---
layout: default
---
# Diagramme, Messungen und Circuit Explorer
{: #charts-measurements-and-circuit-explorer}

Verwenden Sie nach einem [Simulationslauf](../Simulation/) Diagramme, um die Wellenform zu untersuchen, und benannte Messungen, um wiederholbare Größen festzuhalten. Circuit Explorer bietet zusätzlich temporäre Abstimmung, wiederholte Läufe, Anforderungen und Studienberichte.

Öffnen Sie **Simulation sheet → Setup** und scrollen Sie dann zu **Circuit Explorer**. Verwenden Sie **Add tools**, um bei Bedarf Measurements, Tune / sweep, Requirements, DC overlay oder Analysis lab hinzuzufügen. Konfigurierte Werkzeuge erscheinen in der Liste links. **Hide tool** blendet die Steuerelemente aus, behält aber ihre gespeicherten Einstellungen bei. Diagramme verbleiben im separaten Bereich rechts.

## Diagramme anzeigen und anordnen
{: #show-and-arrange-charts}

Wählen Sie sowohl im Browser als auch in der Desktop-Version in der Symbolleiste **Simulation → Show charts**. In der Desktop-Version gibt es außerdem **View → Show Charts**. Ziehen Sie am linken Rand des rechten Bereichs **Simulation charts**, um dessen Größe zu ändern. Wählen Sie eine Konfiguration und eine Erfassung aus; verwenden Sie **Run** oder **Stop**, ohne den Schaltplan zu verlassen.

Diagramme für Messpunkte werden automatisch hinzugefügt. Ohne Messpunkte erhält eine Konfiguration ein Ausgangsdiagramm. Verwenden Sie **Add chart**, um einen weiteren Messpunkt oder eine benutzerdefinierte Ansicht hinzuzufügen, und anschließend **Choose signals**. Diagrammtitel können bearbeitet werden. Analysen mit mehreren Diagrammen, beispielsweise Rauschen, verfügen über eine Auswahl des Ergebnisdiagramms.

Klicken Sie auf Legendeneinträge, um Kurven auszublenden. Spannung, Strom und andere Größen verwenden beschriftete Achsen; lesen Sie Stromwerte nicht an der Spannungsskala ab. Komplexe AC-Daten können als Real-/Imaginärteil, Betrag, dB oder Phase angezeigt werden. Der dB-Ausgangsbetrag ist nicht automatisch eine Übertragungsverstärkung, sofern der Eingang nicht entsprechend normiert ist.

Verwenden Sie das Mausrad bzw. die Pinch-Geste zum Zoomen, Ziehen zum Verschieben, **Shift-drag** für einen Bereich und **Fit**, um die Ansicht wiederherzustellen. Numerische Cursor untersuchen Abtastpositionen. Für eine reaktionsschnelle Übersicht werden umfangreiche Ergebnisse mit reduzierten Anzeigedaten dargestellt; beim Zoomen wird die Ansicht verfeinert. Kompatible fixierte Referenzdaten werden als gestrichelte Überlagerungen angezeigt.

### Abtrennen und exportieren
{: #pop-out-and-export}

**Pop out chart** öffnet in beiden Produkten ein eigenständiges Fenster. Mehrere Diagramme können abgetrennt werden. Beim Schließen eines abgetrennten Fensters wird das Diagramm wieder in den Bereich eingefügt; × bei einem angedockten Diagramm entfernt es. Abgetrennte Diagramme verwenden dieselben aktuellen Ergebnisdaten und starten keine separaten Simulationen.

**Download CSV** exportiert alle gespeicherten Abtastwerte der ausgewählten Signale und ihrer Skala, einschließlich Imaginärwerten. Der Export ist unabhängig von Zoom oder Abtastung der Anzeige. Für Hauptdiagramme steht außerdem ein **PNG**-Download zur Verfügung. Geben Sie in einem Bericht die ausgewählte Konfiguration, Erfassung und Einheiten an, damit andere Leser wissen, welches Experiment die Daten beschreiben.

## Die vorbereitete RC-Untersuchung ausprobieren
{: #try-the-prepared-rc-investigation}

Laden Sie [RC low-pass.dzn](../examples/simulation/rc-low-pass.dzn) herunter, öffnen Sie die Datei über **File → Open** und führen Sie sie aus. Diese Begleitdatei ist von dem mitgelieferten Tutorialbeispiel namens **rc-ac** getrennt. Sie enthält vorbereitete Definitionen für Messungen, Anforderungen und Abstimmung.

Bei R1 = 1 kΩ und C = 1 µF liegt die nominale Eckfrequenz bei etwa 159,15 Hz. **Measurements** enthält Grenzfrequenz, Verstärkung bei 100 Hz und Phase an der idealen Eckfrequenz; **Requirements** prüft, ob die Grenzfrequenz zwischen 150 und 170 Hz liegt.

![Abstimmungssteuerelemente von Circuit Explorer in der RC-Begleitzeichnung](../images/simulation/explorer-tuning.png)

## Abstimmen, ohne die gespeicherte Schaltung zu ändern
{: #tune-without-changing-the-saved-circuit}

Wählen Sie unter **Tune / sweep** eine Komponente und eine numerische Eigenschaft aus und klicken Sie dann auf **Add tuning control**. Wenn Sie eine Schaltplankomponente auswählen, wird sie im Auswahlfeld vorausgewählt. Sie können auch unterstützte Quellen-/Instrumenteinstellungen und benannte Konfigurationsparameter zuordnen. Beliebiger Text, Ausdrücke und Modellinhalte sind keine Ziele für Schieberegler.

Die Steuerelemente unterstützen Einheiten, Grenzwerte, lineare/logarithmische Skalen und die Rundung auf bevorzugte E12/E24/E96-Werte. Nach einer Änderung wird nach etwa 500 ms ein Lauf geplant. Temporäre Werte sind von den gespeicherten Komponentenwerten getrennt.

- **Undo tuning** setzt auf die vorherige temporäre Überschreibung zurück.
- **Reset** stellt die ursprünglichen Werte und die Erfassung wieder her.
- **Apply** schreibt die Überschreibungen als einen rückgängig zu machenden Bearbeitungsschritt in die Zeichnung.

Eine numerische Eigenschaft wirkt sich nur dann auf die Schaltung aus, wenn die SPICE-Vorlage der Komponente sie tatsächlich verwendet. Gehen Sie nicht davon aus, dass eine Änderung eines nicht verwendeten Attributs das Modell verändert.

### Einparametrige Sweeps
{: #one-variable-sweeps}

Klappen Sie **One-variable sweep** auf und wählen Sie ein Steuerelement aus. Verwenden Sie 2–100 lineare/logarithmische Punkte oder 1–100 explizite Werte, getrennt durch Leerzeichen oder Semikolons. **Run sweep** führt die ausgewählte Analyse für jeden Wert aus. **Cancel** stoppt die Planung weiterer Fälle und behält abgeschlossene Ergebnisse bei.

Die RC-Begleitdatei enthält die Werte 1 kΩ, 2,2 kΩ, 4,7 kΩ, 6,8 kΩ und 10 kΩ. Die idealen Grenzfrequenzen betragen etwa 159,15, 72,34, 33,86, 23,41 und 15,92 Hz. Vergleichen Sie Überlagerungen oder eine benannte Messgröße mit dem Parameterwert. Dies unterscheidet sich von der [DC-Sweep-Analyse](../Simulation-Analyses/#dc-sweep), bei der eine unabhängige Quelle innerhalb einer DC-Analyse variiert wird.

Sweep-Definitionen, Werte, Einheiten, Laufstatus und erfasste Messgrößen werden in `.dzn` gespeichert. **Saved sweep** ruft eine Gruppe erneut auf. Beim Entfernen der Rohdaten werden Wellenformüberlagerungen entfernt, erfasste Skalarwerttabellen und Berichtmetadaten können jedoch erhalten bleiben. Bis zu 100 Sweep-Gruppen werden unter Einhaltung der üblichen Erfassungs- und Datengrenzwerte aufbewahrt.

## Benannte Messungen definieren
{: #define-named-measurements}

Fügen Sie unter **Measurements** einen Namen hinzu, wählen Sie ein Signal/eine Komponente aus und klappen Sie die zugehörigen Einstellungen auf. Legen Sie ein aussagekräftiges Zeit-/Frequenzfenster sowie erforderliche Pegel oder Referenzen fest. Zuordnungen von Komponenten/Messpunkten verwenden die Identität des Blatts zusammen mit der Referenz, damit sie auch nach erneutem Öffnen bestehen bleiben.

![Vorbereitete Messungen von Grenzfrequenz, Verstärkung und Phase](../images/simulation/explorer-measurements.png)

| Messung | Interpretation |
| --- | --- |
| Wert, Minimum, Maximum, Spitze-Spitze | Ein Signalwert an einer Position oder Extremwerte innerhalb des ausgewählten Fensters |
| Mittelwert, RMS, Welligkeits-RMS | Zeitgewichtete Transientenmessgrößen; beim Welligkeits-RMS wird der Mittelwert entfernt |
| Integral | Fläche über der Zeit; die Integration von Watt ergibt Joule |
| Anstiegs-/Abfallzeit | Erster vollständiger Übergang von 10–90 % zwischen den angegebenen niedrigen/hohen Pegeln |
| Periode, Frequenz, Tastgrad, Impulsbreite | Erster vollständiger Zyklus/Impuls anhand eines expliziten Schwellenwerts oder des mittleren Pegels des Fensters |
| Verzögerung | Erster steigender Ausgangsdurchgang minus erster Referenzdurchgang beim gleichen Schwellenwert |
| Überschwingen/Unterschwingen | Abweichung bezogen auf die angegebenen Anfangs-/Endpegel und die Sprunggröße |
| Einschwingzeit | Letzter Eintritt in das Toleranzband des Endwerts, gemessen ab Fensterbeginn |
| Zeitkonstante | Erster Durchgang bei Anfangswert + (Endwert − Anfangswert) × (1 − 1/e), gemessen ab Fensterbeginn |
| AC-Verstärkung/Phase | Komplexes Verhältnis Ausgang/Eingang bei der gewählten Frequenz |
| Grenzfrequenz/Bandbreite | Halbleistungsdurchgänge, −3,0103 dB bezogen auf die gewählte Verstärkungsreferenz |
| Resonanz | Größter innerer Betrags-Spitzenwert; ein Maximum am Rand ist keine nachgewiesene Resonanz |
| Weitere Antwortmessgrößen | Durchlassbandwelligkeit, Sperrbanddämpfung, Betrag der Portimpedanz und Gruppenlaufzeit |

Bei der Transientenintegration werden ungleiche Zeitschritte und interpolierte Fensterendpunkte berücksichtigt. RMS umfasst den Gleichanteil; beim Welligkeits-RMS wird er entfernt. Die Verzögerung kann negativ sein, wenn der Ausgangsdurchgang vor dem Referenzdurchgang liegt. Zeitmessungen benötigen einen ausreichenden Teil des betreffenden Übergangs oder Zyklus innerhalb des Fensters.

Geben Sie für Sprungmessungen Anfangs-/Endpegel an. Ein falscher Endpegel führt zu irreführenden Einschwing- und Überschwingwerten. Ein nicht eingeschwungener letzter Abtastwert, ein fehlender Durchgang, eine mehrdeutige Zuordnung, eine nicht übereinstimmende Einheit oder ein ungültiges Fenster ergibt **unavailable**, nicht einen erfundenen Nullwert.

Verwenden Sie für die Grenzfrequenz eine explizite lineare Referenzverstärkung oder **peak**. Eine Referenz von eins eignet sich für den einfachen RC-Filter, für einen Verstärker mit Verstärkung 20 ist jedoch eine andere Referenz erforderlich. Die Bandbreite setzt zwei gültige Durchgänge voraus; die Frequenzinterpolation erfolgt logarithmisch. Ein beliebiger Spitzenwert am Rand des Sweeps weist keine Resonanz nach.

## Anforderungen und DC-Überlagerungen
{: #requirements-and-dc-overlays}

Verwenden Sie **Requirements**, um eine benannte Messung anhand von **mindestens**, **höchstens** oder einem inklusiven Bereich **zwischen** zu prüfen. Die Einheiten müssen übereinstimmen. Ergebnisse sind **pass**, **fail** oder **unavailable**; eine nicht verfügbare Messgröße bedeutet nicht, dass die Anforderung bestanden ist.

![Die RC-Grenzfrequenzanforderung mit einem expliziten zulässigen Bereich](../images/simulation/explorer-requirements.png)

Wählen Sie eine verfügbare Messung aus, um ihre Nachweise und die dazugehörige Schaltplanhervorhebung zu prüfen. Behalten Sie Messdefinitionen, Fenster und Schwellenwerte bei exportierten Ergebnissen bei. Die allgemeine Hervorhebung in beide Richtungen zwischen Messpunkten ist nicht für alle Signal- oder Modelltypen verfügbar.

Die DC-Schaltplanüberlagerung erfordert eine aktuelle, abgeschlossene Arbeitspunkterfassung. Die Spannung wird relativ zu 0 angegeben; die Stromrichtung folgt der konfigurierten Anschlussreihenfolge. Aufgenommene Leistung ist positiv, daher kann die Leistung einer speisenden Quelle negativ sein. Der ideale Widerstandsstrom kann aus V/R abgeleitet werden; nicht unterstützte Bauteilströme werden ausgelassen, statt erfunden zu werden.

## Analysis lab
{: #analysis-lab}

![Arbeitsabläufe im Analysis lab von Circuit Explorer](../images/simulation/analysis-lab.png)

### Frequenz- und Verstärkerantwort
{: #frequency-and-amplifier-response}

Wählen Sie Eingang/Ausgang, Frequenzbereich und Auslesefrequenz. Führen Sie AC aus, um Verstärkung, Phase, Grenzfrequenz, Bandbreite, Resonanz, Güte des Bandpasses und Gruppenlaufzeit zu untersuchen. Die Bandpassgüte bedeutet `f₀ / half-power bandwidth`. Übertragungsfunktionsberechnungen verwenden ein ausdrücklich benanntes Anregungssignal. Für die Portimpedanz ist eine gezielte Spannungs-/Strom-Testkonfiguration erforderlich; ein beliebiges Knotenverhältnis ist keine Schleifenverstärkungsmessung.

### Toleranzen und Eckfälle
{: #tolerance-and-corners}

Eine Monte-Carlo-Studie wiederholt Läufe mit konfigurierten Bauteilverteilungen: begrenzte Gleichverteilung mit ± Toleranz oder unbegrenzte Normalverteilung, angegeben durch die Standardabweichung. Legen Sie einen vorzeichenlosen Zufalls-Seed und 2–100 Fälle fest. Bei Wiederverwendung desselben Seeds und derselben Konfiguration ist die Stichprobenziehung wiederholbar. Vollständig positiv korrelierte Gruppen verwenden dieselbe standardisierte Zufallsziehung und müssen denselben Verteilungstyp verwenden.

Abgetastete physikalische Widerstands-, Kapazitäts-, Induktivitäts- oder Frequenzwerte, die nicht positiv sind, gelten als fehlgeschlagene Fälle. Prüfen Sie Fehler, statt sie stillschweigend auszuschließen. Mittelwert, Stichprobenstandardabweichung und Histogramme beschreiben die gezogenen Stichproben, nicht alle potenziell gefertigten Bauteile.

Bei der Eckwertsuche werden bis zu sechs unabhängige Variablen bzw. 64 Eckfälle durchlaufen. Monte-Carlo-Korrelationsgruppen werden dabei ignoriert. Das gemeldete schlechteste beobachtete Ergebnis beweist keinen globalen Worst Case zwischen den Eckpunkten. Die Ausbeute ist unter den eingegebenen Modell-/Verteilungsannahmen nur ein Richtwert; eine Studie ohne auswertbare Anforderungen liefert keine Ausbeuteschätzung.

### Testfälle
{: #test-cases}

Erfassen Sie eine Analyse, Parameter sowie Definitionen und Zuordnungen von Kurven, Messungen und Anforderungen als Testfall. Versehen Sie die Fälle mit unterschiedlichen Temperatur- oder Parameter-, Anregungs- und Lastüberschreibungen und führen Sie dann die Testsuite aus. Die Fälle verwenden denselben **aktuellen Schaltplan und dieselben Modelle**; sie sind keine unabhängigen historischen Schaltungsrevisionen. Jeder Lauf protokolliert die Identität seiner Eingaben.

JSON-Berichte enthalten Bedingungen, Ergebnisse und Studienverlauf. Studien werden nacheinander ausgeführt und können abgebrochen werden; fehlgeschlagene oder nicht konvergierte Fälle bleiben sichtbar. Definitionen, Seed, Fallbedingungen und Gruppenreferenzen bleiben in `.dzn` erhalten. Die letzten 100 Studiengruppen werden innerhalb der üblichen Ergebnisgrenzwerte aufbewahrt.

### Leistung, Wirkungsgrad und Belastung
{: #power-efficiency-and-stress}

Wählen Sie unterstützte Leistungssignale von Komponenten und explizite Grenzwerte für Spitzenwert von Spannung, Strom oder Leistung. Messungen von Mittelwert/RMS/Integral liefern mittlere Leistung, Effektivstrom und Energie. Für den Wirkungsgrad ist eine korrekt vorzeichenbehaftete speisende Eingangsgrenze und eine verbrauchende Nutzlastgrenze erforderlich. Nicht unterstützte oder mehrdeutige Bauteilströme führen zu einem nicht verfügbaren Ergebnis.

Kleinsignal-AC ist kein Großsignal-Belastungstest. Ein in TinyCAD eingegebener numerischer Grenzwert fügt weder ein Gehäuse-Wärmemodell noch eine Impulsbelastbarkeit oder einen Schutzmechanismus hinzu. Verwenden Sie für die jeweilige Fragestellung geeignete Transientenbedingungen und Modelle und dokumentieren Sie die Annahmen im Bericht.

## Aktuelle Einschränkungen
{: #current-limits}

Die implementierten Arbeitsabläufe umfassen keine FFT-/Klirrfaktoranalyse, automatische Fehlerbeaufschlagung, uneingeschränkte mehrdimensionale Sweeps, automatische Optimierung oder kooperatives Live/Pause. Berücksichtigen Sie bei der Ergebnisprüfung den Status des Laufs (abgeschlossen/gestoppt/fehlgeschlagen) und die tatsächliche Datenverfügbarkeit. Siehe [Fehlerbehebung](../Simulation-Troubleshooting/), wenn eine Messgröße oder Erfassung nicht verfügbar ist.
