---
layout: default
---
# Mitgelieferte SPICE-Modelle
{: #bundled-spice-models}

TinyCAD enthält einen Offline-Katalog mit SPICE-Modellen. Verwenden Sie ein mitgeliefertes Modell, um eine Komponente mit ngspice zu simulieren, mögliche Bauteile zu vergleichen oder ein benutzerdefiniertes Modell (Custom) auf Basis einer bekanntermaßen funktionierenden Definition zu erstellen. Die Modelle sind sowohl in TinyCAD Web als auch in der Desktop App verfügbar. Die Auswahl läuft lokal, sobald die Anwendung geladen ist.

## Mit einem modellierten Symbol beginnen
{: #start-with-a-modelled-symbol}

Öffnen Sie **Standard → SPICE-Grundlagen** im Seitenbereich oder verwenden Sie **Simulation → SPICE-Komponenten** in der Symbolleiste. Wählen Sie **Mehr…**, um die vollständige Symbolbibliothek zu durchsuchen. Für alle 29 SPICE-Grundlagensymbole sind ein Modell und eine voreingestellte Pin-Zuordnung mitgeliefert. Die meisten verwenden ein **TinyCAD Basic**-Modell. LM358 und LM324 verwenden vollständige OpenJellyBean-Gehäusemodelle.

Platzieren Sie ein Symbol, wählen Sie es in der Zeichnung aus und öffnen Sie **SPICE** im unteren **Symbol**-Bereich. **Mitgeliefert** zeigt das verknüpfte Modell und dessen Quelle an. Gewöhnliche Symbolfelder wie **Wert**, **Schleifer** und **Anfangsspannung** steuern weiterhin TinyCAD Basic-Modelle, die diese Felder verwenden. Stellen Sie beispielsweise den **Wert** eines Widerstands auf `10k` ein, um mit dessen Standardmodell **Idealer Widerstand** 10 kΩ zu simulieren.

![Der SPICE-Tab des platzierten Symbols zeigt die Auswahl „Mitgeliefert“ und verweist auf das TinyCAD Basic-Modell einer gelben LED.](/v4/Images/simulation/bundled-spice-properties.png)

Um dies in einer vollständigen Schaltung auszuprobieren, wählen Sie **Beispiel öffnen → SPICE-Lernprogramm → Spannungsteiler** und wählen Sie einen der Widerstände aus. Im **SPICE**-Tab wird der Link **Idealer Widerstand** angezeigt. Ändern Sie den Widerstandswert und führen Sie anschließend erneut die Arbeitspunkteinstellung des Beispiels aus. Das gespeicherte Ergebnis stellt die Schaltung vor Ihrer Änderung dar.

## Modell auswählen und zuweisen
{: #choose-and-attach-a-model}

1. Öffnen Sie den **SPICE**-Tab des Symbols. Wählen Sie **Mitgeliefert** und dann **SPICE-Modell suchen…**.
2. Geben Sie eine Bauteilnummer, einen Alias, eine Modell-ID oder eine Gerätefamilie ein. Löschen Sie den Suchbegriff, um die für dieses Symbol verfügbaren Modelle anzuzeigen.
3. Wählen Sie eine Zeile aus. Die Details unterhalb der Tabelle zeigen die Modellbeschreibung, die Quelle, die Anschlussreihenfolge und alle einstellbaren Parameter. Klappen Sie **SPICE-Definition anzeigen** auf, um die Instanzvorlage und die verwendeten Modellkarten oder Subschaltungen anzuzeigen. Wählen Sie den Quellenlink, um die ursprüngliche Definition oder das vorgeschaltete Archiv und den Dateinamen des Eintrags aufzurufen.
4. Prüfen Sie die Pin-Zuordnung und legen Sie etwaige Parameterüberschreibungen fest. Wählen Sie **SPICE-Modell auswählen**. In einer Zeichnung wird dadurch das ausgewählte platzierte Symbol geändert; die Änderung kann rückgängig gemacht werden.

![Dialogfeld „SPICE-Modell suchen“ für eine gelbe LED. Das ausgewählte circsim-Modell zeigt seine Quelle sowie die geprüften Anoden- und Kathoden-Pinnummern.](/v4/Images/simulation/bundled-spice-picker.png)

**SPICE-Grundlagensymbole** führen nur Modelle auf, deren Zuordnungen für das Pin-Layout des jeweiligen Symbols geprüft wurden. Manche Symbole bieten nur das Basic-Standardmodell. Eine gelbe LED bietet beispielsweise ihr Basic-Modell und die gelbe LED von circsim. Für einen Standard-NPN-Transistor kann das generische Modell oder eine Alternative wie `2N3904_OJ` von OpenJellyBean verwendet werden; Kollektor, Basis und Emitter sind dabei bereits den Pins 3, 1 und 2 zugeordnet.

**Andere Symbole**, einschließlich älterer Platzierungen ohne Bibliotheksidentität, können den vollständigen Katalog für ihre jeweilige Edition durchsuchen. Prüfen Sie die vorgeschlagenen Treffer und ordnen Sie jedem Modellanschluss einen eigenen physischen Pin zu. Berücksichtigen Sie auch Versorgungspins, selbst wenn sie im Schaltplan verborgen sind. Verwenden Sie den geprüften Pinout des Symbols und die Anschlussreihenfolge des Modells. Lassen Sie physische Pins, die das Modell nicht aufführt, außerhalb der Zuordnung. Ein temporäres Symbol mit einer falschen Anzahl oder Funktion von Pins muss korrigiert werden, bevor es das Bauteil darstellen kann.

![Manuelle Pin-Zuordnung für ein 741-Symbol in einer benutzerdefinierten Bibliothek. Die fünf circsim-LM741-Anschlüsse sind den physischen Pins 3, 2, 6, 7 und 4 zugewiesen.](/v4/Images/simulation/bundled-spice-pin-mapping.png)

Das Beispiel ordnet das circsim-Modell `LM741` einem 741-Symbol über die Pins 3 (nichtinvertierend), 2 (invertierend), 6 (Ausgang), 7 (positive Versorgung) und 4 (negative Versorgung) zu. Das Modell lässt die Offset-Null-Pins aus. Bei einem Bibliothekssymbol mit mehreren Teilen bietet TinyCAD die Pin-Nummern an, die von den Teilen gemeinsam genutzt werden, für die die Vorlage verwendet wird. Wählen Sie ein vollständiges Gehäusemodell, wenn Ihr Symbol und Ihre Simulation das gesamte Gehäuse benötigen.

Wenn im Auswahlfenster **Keine Modelle entsprechen dieser Suche** angezeigt wird, löschen Sie den Suchbegriff oder versuchen Sie einen allgemeineren Begriff. Ein markiertes Symbol bietet möglicherweise nur die geprüften Modelle an. Um ein anderes Modell zu verwenden, überprüfen Sie den Pinout des Bauteils und verwenden Sie ein geeignetes [benutzerdefiniertes Bibliothekssymbol](../Custom-symbol-libraries/) oder eine benutzerdefinierte Definition (Custom).

## Den passenden Detailgrad auswählen
{: #choose-the-right-level-of-detail}

| Was Sie herausfinden möchten | Mit welchem Modell Sie beginnen sollten |
| --- | --- |
| Einen Spannungsteiler, eine RC-Zeitkonstante oder grundlegendes Schaltungsverhalten prüfen | Verwenden Sie TinyCAD Basic. Idealmodelle sind nützlich, wenn parasitäre Effekte und Toleranzen für die Fragestellung keine Rolle spielen. |
| Arbeitspunkt, Verstärkung, Durchlassspannung einer Diode oder Schaltverhalten eines bestimmten Bauteils untersuchen | Suchen Sie nach dem genauen Bauteil oder einem dokumentierten Ersatz. Prüfen Sie die Beschreibung und Modellannahmen bei Ihrer Spannung, Ihrem Strom, Ihrer Temperatur und Ihrer Frequenz. |
| Einen Ersatz untersuchen, wenn kein genaues Modell verfügbar ist | Verwenden Sie einen dokumentierten Drop-in-Ersatz oder ein generisches Modell für die Gerätefamilie. Prüfen Sie Pin-Funktionen des Gehäuses, Versorgungspolarität und Betriebsgrenzwerte separat. Halten Sie fest, welches Verhalten nur näherungsweise modelliert wird. |
| Eine Grenze wie Rauschen, Gleichtakt-Eingangsbereich, Temperaturdrift oder eine Prozessecke untersuchen | Prüfen Sie, ob das Modell den Effekt ausdrücklich abdeckt. Verwenden Sie bei Bedarf ein geeignetes Hersteller- oder Prozessmodell als [benutzerdefinierte Definition](../SPICE-output/#models-templates-and-pin-order). |

Mitgelieferte Modelle beschreiben typisches Verhalten. Das circsim-741-Modell bildet beispielsweise Nennverstärkung, Bandbreite, Anstiegsgeschwindigkeit, Offset und Versorgungsstrom ab. Es verwendet eine hochohmige Eingangsstufe. Das circsim-Modell der gelben LED bildet das elektrische Verhalten anhand einer Anpassung an 2,10 V bei 20 mA ab. Lichtleistung, Bauteilnennwerte und Verhalten im ungünstigsten Fall erfordern eigene Belege.

## Einen Bibliotheksstandard festlegen oder eine benutzerdefinierte Kopie bearbeiten
{: #set-a-library-default-or-edit-a-custom-copy}

- **Für künftige Platzierungen** öffnen Sie eine bearbeitbare `.tclib`-Bibliothek und wählen Sie das Symbol aus. Öffnen Sie den **SPICE**-Tab und verwenden Sie denselben Modellauswahldialog. Speichern Sie die Bibliothek. Die gewählte Definition wird zum Standard für künftige Platzierungen dieses Eintrags. Vorhandene Platzierungen behalten ihre gespeicherten Definitionen.
- **Für eine einzelne Platzierung** wählen Sie das Symbol im Schaltplan aus und ändern Sie dessen **SPICE**-Eigenschaften. So lassen sich zwei Modelle in derselben Zeichnung direkt vergleichen.
- **Zum Bearbeiten des Modelltexts** wählen Sie bei einem verknüpften Symbol **Benutzerdefiniert**. TinyCAD kopiert die Instanzvorlage und alle erforderlichen Definitionen mit den zugeordneten Pins in bearbeitbare Felder. Bei Modellen mit Definitionen verwendet die lokale Kopie Namen, die auf die Platzierung beschränkt sind, damit sie parallel zum mitgelieferten Original ausgeführt werden kann. Für einen idealen Widerstand genügt die Instanzvorlage allein.

Durch Zurückwechseln zu **Mitgeliefert** wird das verknüpfte Modell wiederhergestellt. Wechseln Sie erneut zu **Benutzerdefiniert**, um Ihre Bearbeitungen abzurufen. Der ausgewählte Modus bestimmt, welche Definition verwendet wird; beide Einstellungen bleiben beim Speichern und erneuten Öffnen erhalten. **Zugewiesenes Modell entfernen** entfernt die Verknüpfung und stellt die vorherige Vorlage wieder her, sofern eine gespeichert wurde.

Ein unterstützter [KiCad-SPICE-Import](../Importing-Symbols-from-KiCAD/#import-spice-models-with-symbols) wird unter **Benutzerdefiniert** angezeigt. Wenn Sie diese importierte Definition für künftige Platzierungen beibehalten möchten, importieren Sie sie in eine bearbeitbare Bibliothek und speichern Sie diese.

## Ausführen, speichern und teilen
{: #run-save-and-share}

1. Verbinden Sie die zugeordneten Pins und Versorgungen, einschließlich eines Anschlusses an SPICE-Masse **0**.
2. Erstellen oder öffnen Sie ein [Simulationsblatt](../Simulation/), wählen Sie die Analyse unter **Einrichtung** und wählen Sie **Ausführen**. Die aktiven mitgelieferten Modelle werden automatisch aufgelöst. Verwenden Sie **Einrichtung → SPICE-Modelle**, um zusätzliche Dateien anzufügen, die ein benutzerdefiniertes Modell benötigt.
3. Öffnen Sie **Diagnose → Schaltungstext erzeugen**, um die erweiterten Instanzzeilen und Modellverweise zu überprüfen. Prüfen Sie bei unerwarteten Ergebnissen die Pin-Reihenfolge und die Versorgungsnetze.

Zeichnungen speichern die Revision, die zugeordneten Pins und die Parametereinstellungen jedes Modells sowie eine gespeicherte Kopie jedes referenzierten Pakets. Speichern Sie die Zeichnung, um die Schaltung und ihre Modelldefinitionen weiterzugeben. XSPICE-Modelle, die nur auf dem Desktop verfügbar sind, können nur mit der Desktop-Engine ausgeführt werden. **SPICE-Netzliste erzeugen** bettet die referenzierten mitgelieferten Definitionen in die SPICE-Ausgabe ein. Unter [SPICE-Modelle und Netzlistenausgabe](../SPICE-output/#inspect-and-export-a-spice-netlist) finden Sie Exportoptionen und eine Erläuterung des Unterschieds zwischen einem Simulationsdeck und einer Zeichnung.

## Kataloginhalt und Quellen
{: #catalog-contents-and-sources}

TinyCAD Web umfasst 97 Katalogmodelle. Die Desktop App ergänzt drei Definitionen, die natives XSPICE erfordern. Den genauen Modellursprung finden Sie über den Link in den Modelldetails. TinyCAD liefert die Lizenzhinweise mit den Paketen aus; diese Hinweise sind auch unter **Über TinyCAD** verfügbar.

| Paket | Modelle | Beispiele |
| --- | ---: | --- |
| TinyCAD Basic | 20 | Ideale Widerstände, Kondensatoren und Induktivitäten, unabhängige Quellen, Potentiometer- und Transformatervorlagen, generische Halbleiter, 741 und Resonatoren |
| OpenJellyBean | 42 | BJTs, MOSFETs, JFETs, Signal- und Schottky-Dioden, Zener-Dioden, LEDs, Operationsverstärkerkanäle und -gehäuse sowie ein Potentiometer |
| circsim | 15 | LM741, gelbe LED, LM393, LM339, NE5532, NE555, Optokoppler, Regler und Leistungs-MOSFETs |
| Spice_Files | 14 | Generische Dioden und LEDs, Gleichrichterbrücke, Optokoppler, Schalter, Relais, 16-MHz-Quarz und 10:1-Transformator |
| ngspice-Spezialmodelle | 1 | ICL8038-Funktionsgenerator |
| ngspice-Spezialmodelle (Desktop) | 3 | LTC1044HV-Spannungsinverter, LR8-Regler und dessen Hilfsoperationsverstärker |
| SkyWater SKY130 | 1 | Nominalmodell eines integrierten PNP-Transistors mit Substratanschluss |
| GlobalFoundries GF180MCU | 3 | Nominale MIM-Kondensatoren mit 1,0, 1,5 und 2,0 fF/µm² |
| IHP SG13G2 | 1 | Nominalmodell des integrierten PNP-Transistors pnpMPA |

Bei den Foundry-Einträgen handelt es sich um ausgewählte Nominalmodelle. Vollständige Prozesskits enthalten separate Modellbäume, Ecken und Simulatoreinstellungen. Unter [Katalogreferenz](https://github.com/matt123p/TinyCADv4/blob/main/docs/bundled-spice-models.md#catalog-sources) finden Sie das Quellenverzeichnis, Lizenzinformationen und geprüfte Alternativen für die SPICE-Grundlagensymbole.

## Den KI-Assistenten der Desktop App fragen
{: #ask-the-desktop-ai-assistant}

Wenn Sie ausdrücklich um SPICE-Unterstützung bitten, kann der [KI-Assistent der Desktop App](../AI-Assistant/) den lokalen Katalog durchsuchen, Modelltexte und Quellen prüfen und die Zuordnung zu Ihrem Symbol überprüfen. Er kann einem platzierten Bauteil ein Modell zuweisen oder ein Modell beim Hinzufügen eines neuen Bibliotheksteils als Standard speichern. Bevor er eine vorhandene benutzerdefinierte Vorlage ersetzt, fragt er nach. Bei gewöhnlichen Arbeiten am Schaltplan oder Symbol behält er die vorgegebenen Standardwerte bei.

Versuchen Sie für einen schreibgeschützten Vergleich: „Suche ein mitgeliefertes SPICE-Modell für Q1. Vergleiche dessen Anschlussreihenfolge und Einschränkungen mit dem vorgesehenen Bauteil. Ändere die Zeichnung nicht.“

Versuchen Sie für eine Bearbeitung: „Weise Q1 das mitgelieferte 2N3904-Modell zu, nachdem du die Zuordnung der physischen Pins geprüft hast. Zeige mir die Quelle und alle Annahmen.“
