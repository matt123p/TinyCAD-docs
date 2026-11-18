---
layout: default
---
# Gebündelte Bibliotheken
{: #bundled-libraries}

Gebündelte Bibliotheken sind Sammlungen sofort platzierbarer Symbole, die TinyCAD sowohl im Browser als auch in der Desktop-App bereitstellt. Sie umfassen sowohl Geräteanordnungen als auch elektronische Schaltungen. Sie können sie verwenden, ohne sich anzumelden, eine Bibliotheksdatei herunterzuladen oder einen Bibliotheksordner einzurichten.

## Komponente finden und platzieren
{: #find-and-place-a-component}

1. Öffnen Sie den Bibliotheksbereich auf der linken Seite. Falls er eingeklappt ist, verwenden Sie die Schaltfläche zum Ausklappen.
2. Wählen Sie **Standard**. **Online** durchsucht die Online-Sammlung; **Meine Bibliotheken** enthält Ihre eigenen Bibliotheksdateien.
3. Verwenden Sie **Standardbibliothek auswählen**, um eine Sammlung auszuwählen. TinyCAD lädt jeweils eine Standardbibliothek und merkt sich Ihre Auswahl auf diesem Gerät.
4. Durchsuchen Sie die Liste oder geben Sie einen Namen oder eine Beschreibung in **Bibliotheken durchsuchen...** ein. Jedes Ergebnis enthält eine Vorschau der Grafik. Wählen Sie ein Ergebnis aus, um die größere Vorschau und die Beschreibung anzusehen.
5. Ziehen Sie die Vorschau der Komponente auf die Zeichnung. Richten Sie sie am Raster aus; drücken Sie **Escape** oder klicken Sie mit der rechten Maustaste, wenn Sie mit dem Platzieren von Kopien fertig sind.

Durch das Ändern der ausgewählten Bibliothek werden bereits platzierte Komponenten nicht entfernt. Ihre Definitionen sind in die Zeichnung eingebettet, sodass andere Personen, die sie öffnen, nicht dieselben Bibliotheken laden müssen. Standardbibliotheken sind schreibgeschützt; verwenden Sie [benutzerdefinierte Bibliotheken](../Custom-symbol-libraries/), wenn Sie Ihre eigenen Symbolddefinitionen verwalten möchten.

{% include video-player.html src="/v4/videos/simulation/libraries.mp4" poster="/v4/videos/simulation/libraries.jpg" caption="Wählen Sie eine gebündelte Bibliothek aus, suchen Sie nach einem Switch mit acht Ports und ziehen Sie ihn auf eine Zeichnung." %}

## Bibliotheken für Geräte und Anordnungen
{: #equipment-and-layout-libraries}

Diese Bibliotheken zeigen die physische Anordnung von Geräten, Platinen, Klemmen und Buchsen. Sie helfen Ihnen zu erklären, **was womit verbunden ist**. Sie enthalten keine ausführbare Firmware, mechanische Simulation oder SPICE-Modelle.

| Bibliothek | Inhalt | Typische Verwendung |
| --- | --- | --- |
| **Netzwerkanordnung** — 47 Symbole | Router, Switches und Zugangspunkte für Verbraucher; passende 19-Zoll-Rack-Switches, Router, Firewalls, Patchpanels und Blindplatten | Büroverkabelung, Heimnetzwerke und Rackpläne |
| **Eingebettete Prozessoren und Smart Home** — 44 Symbole | Zehn Controllerplatinen, 26 Sensor-/Aktuatormodule und acht Displays | Prototyp eines Sensorgeräts, Hausautomation oder eingebettetes Projekt |
| **Audio und Musik** — 99 Symbole | Mikrofone, Mixer, Interfaces, Instrumente, MIDI, Computer, Steckverbinder, Kopfhörer, Lautsprecher, Verstärker und Bühnengeräte | Auftritte, Studios, Podcasts, Heimaufnahmen, Kirchen und Schulen |
| **Test und Messtechnik** — 78 Symbole | Netzteile, Lasten, Oszilloskope, Messgeräte, HF-Instrumente, Tastköpfe, Datenerfassung, Heizgeräte, Relais, Steuerungen, Pumpen und Laborgeräte | Laborverbindungen und Versuchsaufbauten |
| **Motoren und Bewegung** — 66 Symbole | Gleichstrom- und bürstenlose Motoren, Schrittmotoren, Servos, Treiberplatinen, Encoder, Endschalter, Solenoide, elektrische/pneumatische Aktuatoren und mechanische Teile | Robotik, Automatisierung und Bewegungssteuerungsverdrahtung |
| **Solarenergie und Batterien** — 52 Symbole | Solarmodule, Arrays, Wechselrichter, Batterien, EV-Ladegeräte, Backup-Geräte, Schutz, Überwachung und Verbraucher im Haushalt | Konzeptionelles Hausenergiesystem und seine Strom-/Steuerverbindungen |

### Netzwerkanordnung
{: #network-layout}

Ethernet-Anschlusspunkte befinden sich mittig in den Buchsen. Ein Punkt steht für **ein vollständiges Kabel** und nicht für acht einzelne Ethernet-Leiter. Desktop-Switches umfassen 4, 5, 8, 16 und 24 Kupferports, einschließlich PoE- und gemischter Kupfer-/Glasfaseroptionen. Rack-Anordnungen umfassen Konfigurationen mit 8/16/24/48 Ports und SFP+-Uplinks mit zwei oder vier Käfigen sowie zusätzliche allgemeine Planungsanordnungen mit 10 und 32 Kupferports. Betrachten Sie diese als verfügbare Symboloptionen und nicht als Behauptung, dass alle Anordnungen gleich häufig vorkommen. Lesen Sie den Symbolnamen und die Beschriftungen an der Frontblende, um die benötigte Portanzahl und Uplink-Anordnung auszuwählen.

Die 19-Zoll-1U-Panels haben eine einheitliche Größe. Behalten Sie ihren Standardmaßstab bei und stapeln Sie sie vertikal im Abstand von **120 Zeichnungseinheiten**, um ein Rack zu bilden. Das [Beispiel für ein kleines Büronetzwerk](../Bundled-Examples/#equipment-and-layout-examples) zeigt vier passende Panels und längere Leitungswege zu einem Zugangspunkt und einem Tisch-Switch. Zeichnen Sie jedes Patchkabel bis zum Anschlusspunkt seiner Buchse; die Panelgrafik verbindet verschiedene Buchsen nicht automatisch intern miteinander.

### Eingebettete Prozessoren und Smart Home
{: #embedded-processors-and-smart-home}

Zu den Controllerplatinen gehören ESP32 DevKitC V4, ESP32-S3 DevKitC-1, NodeMCU ESP8266, LOLIN D1 mini, Raspberry Pi 3/4/5 sowie Varianten von Arduino Uno/Nano/Mega. Sensormodule umfassen Temperatur-, Feuchtigkeits-, Licht-, Druck-, Berührungs- und Passivinfrarotsensorik sowie Ausgänge wie Summer. Die Platine, die Header-Pads und die Pin-Beschriftungen bleiben sichtbar; ein kleines Funktionssymbol kennzeichnet den Sensor anstelle eines nichtssagenden Chip-Rechtecks.

Zu den Displayoptionen gehören ein I2C-LCD1602 und ein 128×64-OLED, ein Waveshare-1,8-Zoll-SPI-LCD und ein kapazitives 2,8-Zoll-Touch-LCD, ein Nextion-2,8-Zoll-UART-Touchdisplay sowie Waveshare-E-Paper-Baugruppen mit 2,13/2,9/4,2 Zoll. Jedes Symbol zeigt zwei Ansichten **eines Geräts**: links die Bildschirmseite und rechts die Kontakte auf der Rückseite/am Header. Nur die Kontakte auf der Rückseite sind elektrische Anschlusspunkte. Mehrfach vorhandene Header können dieselben Hardwaresignale bereitstellen; sie sind keine zusätzlichen unabhängigen Kanäle. Beachten Sie die Beschriftungen und die angegebene Revision.

Prüfen Sie vor der Verdrahtung die angegebene Platinenrevision. Bei Raspberry-Pi-Headern sind **physische Pinnummern und BCM-GPIO-Namen unterschiedliche Nummerierungssysteme**. Die Platinenpositionen der Pins helfen bei einem Verdrahtungsplan, aber die Grafik ist weder ein PCB-Footprint noch eine Fertigungszeichnung. Versorgungsschienen, Logikpegel, Stromgrenzen und Pull-ups müssen weiterhin anhand der Dokumentation des tatsächlichen Moduls geprüft werden.

### Audio-, Labor- und Bewegungsverbindungen
{: #audio-laboratory-and-motion-connections}

Bei Audiodiagrammen stehen die meisten Buchsen für vollständige Kabel. Beschriften Sie Mikrofon-, Line-, Lautsprecher-, Kopfhörer- und MIDI-Verbindungen, damit ihr Zweck klar ist. Ein gezeichneter Steckverbinder stellt nicht sicher, dass zwei Geräte kompatible Pegel, symmetrische Verdrahtung oder Anforderungen an Phantomspeisung haben.

Labor- und Bewegungssymbole unterscheiden einzelne elektrische Leiter, vollständige Kabel und Flüssigkeitsschläuche. Beispielsweise stehen BNC-/USB-Verbindungen für Kabel, während die Strom-, Logik- und Motoranschlüsse eines Motortreibers separate Leiter sind. Rein mechanische Teile können ohne elektrische Anschlüsse sein. Orientieren Sie sich an den Pin-Beschriftungen und der Symbolbeschreibung, statt anzunehmen, dass jedes sichtbare Merkmal ein Anschluss ist.

**Symbole für Test- und Messtechnikgeräte sind Abbildungen für ein Aufbau-Diagramm.** Verwenden Sie für Instrumente, die simulierte Signale erfassen, **Simulation → Laborausrüstung**; siehe [Quellen und virtuelle Instrumente](../Simulation-Sources-and-Instruments/).

Solarsymbole stehen für vollständige Kabel oder logische Verbindungen. Sie beschreiben die Systemarchitektur; sie legen keine einzelnen Installationsklemmen, Kabelbemessungen oder ein vollständiges Schutzkonzept fest.

## Bibliotheken mit Simulationsmodellen
{: #libraries-with-simulation-models}

Verwenden Sie diese Sammlungen, wenn Sie eine [Schaltungssimulation ausführen möchten](../Simulation/).

| Bibliothek | Inhalt | Modellierungszweck |
| --- | --- | --- |
| **SPICE-Grundlagen** — 27 Symbole | Passive Bauteile, Quellen, Dioden, LEDs, Transistoren, Transformator und Verstärker im 741-Stil | Ein Ausgangssatz modellierter analoger Komponenten |
| **Digitale Logik** — 28 Symbole | Gatter, Zähler und Speicherbausteine | Konfigurierbares Logikverhalten mit portablen analogen SPICE-Modellen |
| **Funktionsblöcke** — 17 Symbole | ADC/DAC, Kommunikationsschnittstellen, Zustandsautomaten und programmierbare E/A-Blöcke | Systemverhalten untersuchen, ohne einen vollständigen Chip zu implementieren |
| **Sensoren und Schnittstellen** — 10 Symbole | Modellierte Sensoren, ein Testpunkt, ein Analogschalter und ein AM-Modulator | Einen konfigurierten Stimulus mit einem elektrischen Ausgang in Beziehung setzen |

Diese Modelle sind Näherungen zur Untersuchung des Verhaltens. Sie garantieren nicht die Leistungsdaten eines benannten Herstellers oder Geräts. Die funktionalen Mikrocontroller-, SPS- oder FPGA-Blöcke führen keine Firmware oder HDL aus. Die Bibliothek **Digitale Logik** verwendet analoge Verhaltensmodelle und kann im Browser ausgeführt werden; der separate [XSPICE-Kurs](../XSPICE-Tutorial/) verwendet die ereignisgesteuerte Engine der Desktop-App.

Lesen Sie die Eigenschaften, Einheiten und Pin-Zuordnungen der einzelnen Modelle. Logikmodelle können ausgeblendete Versorgungspins mit den Namen **VCC** und **VSS** haben. Stellen Sie die entsprechenden Versorgungsnetze bereit und verbinden Sie **VSS** mit der SPICE-Masse **0**. Ein Label mit dem Wort GND erzeugt für sich allein nicht den Knoten 0.

## Verdrahtung eindeutig gestalten
{: #make-wiring-unambiguous}

Lassen Sie das Raster eingeschaltet und schließen Sie Drähte an den tatsächlichen Anschlusspunkten ab. Ein Draht, der eine nicht zugehörige Buchse oder den Endpunkt eines anderen Drahts berührt, kann eine elektrische Verbindung herstellen. Führen Sie Leitungen um solche Punkte herum; eine scheinbar saubere Linie reicht nicht aus, um das gewünschte Netz festzulegen.

Nicht verwendete Gerätebuchsen können offen bleiben. Einige Hinweise des Schaltungsprüfers zu Drähten, die in die Umrisse physischer Panels hineinragen, sind bei diesen Zeichnungen zu erwarten; unbeabsichtigte Kurzschlüsse und Knoten müssen jedoch korrigiert werden. Siehe [Drähte](../Wires/) zur elektrischen Verbindung und [Gebündelte Beispiele](../Bundled-Examples/) für ausgearbeitete Anordnungen mit diesen Sammlungen.
