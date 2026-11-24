---
layout: default
---
# Mitgelieferte Bibliotheken
{: #bundled-libraries}

Mitgelieferte Bibliotheken sind Sammlungen sofort platzierbarer Symbole, die TinyCAD sowohl im Browser als auch in der Desktop-App bereitstellt. Sie decken sowohl Geräteanordnungen als auch elektronische Schaltungen ab. Sie können sie verwenden, ohne sich anzumelden, eine Bibliotheksdatei herunterzuladen oder einen Bibliotheksordner einzurichten.

## Eine Komponente finden und platzieren
{: #find-and-place-a-component}

1. Öffnen Sie das Bibliotheksfenster links. Falls es eingeklappt ist, verwenden Sie die Schaltfläche zum Ausklappen.
2. Wählen Sie **Standard**. Über **Online** wird die Online-Sammlung durchsucht; **Meine Bibliotheken** enthält Ihre eigenen Bibliotheksdateien.
3. Verwenden Sie **Standardbibliothek auswählen**, um eine Sammlung auszuwählen. TinyCAD lädt jeweils eine Standardbibliothek und merkt sich Ihre Auswahl auf diesem Gerät.
4. Durchsuchen Sie die Liste oder geben Sie einen Namen oder eine Beschreibung in **Bibliotheken durchsuchen...** ein. Für jedes Ergebnis wird eine Vorschau der Grafik angezeigt. Wählen Sie ein Ergebnis aus, um eine größere Vorschau und eine Beschreibung anzusehen.
5. Ziehen Sie die Vorschau der Komponente auf die Zeichnung. Positionieren Sie sie am Raster; drücken Sie **Escape** oder klicken Sie mit der rechten Maustaste, wenn Sie mit dem Platzieren von Kopien fertig sind.

Das Ändern der ausgewählten Bibliothek entfernt keine bereits platzierten Komponenten. Ihre Definitionen sind in die Zeichnung eingebettet, sodass jemand, der sie öffnet, nicht dieselben Bibliotheken laden muss. Standardbibliotheken sind schreibgeschützt; verwenden Sie [benutzerdefinierte Bibliotheken](../Custom-symbol-libraries/), wenn Sie Ihre eigenen Symbolddefinitionen verwalten möchten.

{% include video-player.html src="/v4/videos/simulation/libraries.mp4" poster="/v4/videos/simulation/libraries.jpg" caption="Wählen Sie eine mitgelieferte Bibliothek aus, suchen Sie nach einem Switch mit acht Ports und ziehen Sie ihn auf eine Zeichnung." %}

## Geräte- und Layoutbibliotheken
{: #equipment-and-layout-libraries}

Diese Bibliotheken zeigen die physische Anordnung von Geräten, Platinen, Klemmen und Buchsen. Sie helfen dabei zu erklären, **was womit verbunden ist**. Sie enthalten keine ausführbare Firmware, mechanische Simulation oder SPICE-Modelle.

| Bibliothek | Inhalt | Typische Verwendung |
| --- | --- | --- |
| **Netzwerk-Layout** — 47 Symbole | Router, Switches und Access Points für Endverbraucher; passende 19-Zoll-Rack-Switches, Router, Firewalls, Patchfelder und Blindplatten | Büroverkabelung, Heimnetzwerke und Rack-Pläne |
| **Embedded-Prozessoren und Smart Home** — 44 Symbole | Zehn Controllerplatinen, 26 Sensor-/Aktor-Module und acht Displays | Prototyping einer Sensorstation, Hausautomation oder eines Embedded-Projekts |
| **Audio & Musik** — 99 Symbole | Mikrofone, Mischpulte, Interfaces, Instrumente, MIDI, Computer, Steckverbinder, Kopfhörer, Lautsprecher, Verstärker und Bühnenequipment | Auftritte, Studios, Podcasts, Heimaufnahmen, Kirchen und Schulen |
| **Test & Messtechnik** — 78 Symbole | Netzteile, Lasten, Oszilloskope, Messgeräte, HF-Instrumente, Tastköpfe, Datenerfassung, Heizgeräte, Relais, Steuerungen, Pumpen und Laboraufbauten | Laborverbindungen und Versuchsaufbauten |
| **Motoren & Bewegung** — 66 Symbole | Gleichstrom- und bürstenlose Motoren, Schrittmotoren, Servos, Treiberplatinen, Encoder, Endschalter, Solenoide, elektrische/pneumatische Aktoren und mechanische Teile | Robotik, Automatisierung und Verdrahtung von Bewegungssteuerungen |
| **Solarstrom und Batterien** — 52 Symbole | Module, Arrays, Wechselrichter, Batterien, EV-Ladegeräte, Notstromausrüstung, Schutz, Überwachung und Verbraucher im Haushalt | Ein konzeptionelles Heimsystem zur Energieversorgung und seine Strom-/Steuerverbindungen |

### Netzwerk-Layout
{: #network-layout}

Ethernet-Anschlusspunkte befinden sich mittig in den Buchsen. Ein Punkt steht für ein **gesamtes Kabel**, nicht für acht einzelne Ethernet-Leiter. Desktop-Switches umfassen 4, 5, 8, 16 und 24 Kupferports, einschließlich PoE- und gemischter Kupfer-/Glasfaseroptionen. Rack-Layouts umfassen Anordnungen mit 8/16/24/48 Ports und SFP+-Uplinks mit zwei oder vier Käfigen sowie zusätzliche generische Planungs-Layouts mit 10 und 32 Kupferports. Verstehen Sie diese als verfügbare Symbolauswahl, nicht als Behauptung, dass jedes Layout gleich häufig vorkommt. Lesen Sie den Symbolnamen und die Beschriftungen an der Frontplatte, um die benötigte Portanzahl und Uplink-Anordnung auszuwählen.

Die 19-Zoll-1U-Panels haben dieselbe Größe. Behalten Sie ihren Standardskalierungsfaktor bei und stapeln Sie sie vertikal im Abstand von **120 Zeichnungseinheiten**, um ein Rack zu bilden. Das [Beispiel eines kleinen Büronetzwerks](../Bundled-Examples/#equipment-and-layout-examples) zeigt vier passende Panels und längere Verbindungen zu einem Access Point und einem Desktop-Switch. Zeichnen Sie jede Patchleitung bis zum Anschlusspunkt ihrer Buchse; die Grafik des Panels verbindet verschiedene Buchsen nicht automatisch intern.

### Embedded-Prozessoren und Smart Home
{: #embedded-processors-and-smart-home}

Zu den Controllerplatinen gehören ESP32 DevKitC V4, ESP32-S3 DevKitC-1, NodeMCU ESP8266, LOLIN D1 mini, Raspberry Pi 3/4/5 sowie Varianten von Arduino Uno/Nano/Mega. Die Sensormodule umfassen Temperatur-, Feuchtigkeits-, Licht-, Druck-, Berührungs- und Passiv-Infrarot-Sensoren sowie Ausgänge wie Summer. PCB, Header-Pads und Pin-Beschriftungen bleiben sichtbar; ein kleines Funktionssymbol kennzeichnet den Sensor anstelle eines unbeschrifteten Chip-Rechtecks.

Zu den Displayoptionen gehören ein I2C-LCD1602 und ein 128×64-OLED, ein Waveshare-1,8-Zoll-SPI-LCD und ein kapazitives 2,8-Zoll-Touch-LCD, ein Nextion-2,8-Zoll-UART-Touchdisplay sowie Waveshare-E-Paper-Baugruppen mit 2,13/2,9/4,2 Zoll. Jedes Symbol zeigt zwei Ansichten **eines Geräts**: links die Vorderseite des Bildschirms und rechts die Kontakte auf der Rückseite/am Header. Nur die Kontakte auf der Rückseite sind elektrische Anschlusspunkte. Wiederholte Header können dieselben Hardwaresignale zugänglich machen; sie sind keine zusätzlichen unabhängigen Kanäle. Richten Sie sich nach den Beschriftungen und der angegebenen Revision.

Prüfen Sie vor der Verdrahtung die angegebene Platinenrevision. Bei Raspberry-Pi-Headern sind **physische Pinnummern und BCM-GPIO-Namen unterschiedliche Nummerierungssysteme**. Die Pinpositionen der Platine helfen bei einem Verdrahtungsplan, aber die Grafik ist weder ein PCB-Footprint noch eine Fertigungszeichnung. Stromversorgungsschienen, Logikpegel, Stromgrenzwerte und Pull-ups müssen weiterhin anhand der Dokumentation des tatsächlichen Moduls geprüft werden.

### Audio-, Labor- und Bewegungsanschlüsse
{: #audio-laboratory-and-motion-connections}

Bei Audiodiagrammen stehen die meisten Buchsen für ganze Kabel. Beschriften Sie Mikrofon-, Line-, Lautsprecher-, Kopfhörer- und MIDI-Verbindungen, damit ihr Zweck klar ist. Ein gezeichneter Steckverbinder belegt nicht, dass zwei Geräte kompatible Pegel, symmetrische Verdrahtung oder dieselben Anforderungen an Phantomspeisung haben.

Labor- und Bewegungssymbole unterscheiden zwischen einzelnen elektrischen Leitern, vollständigen Kabeln und Fluidschläuchen. Beispielsweise stehen BNC-/USB-Verbindungen für Kabel, während die Leistungs-, Logik- und Motoranschlüsse eines Motortreibers separate Leiter sind. Rein mechanische Teile können ohne elektrische Anschlüsse auskommen. Verwenden Sie die Pin-Beschriftungen und die Symbolbeschreibung, statt anzunehmen, dass jedes sichtbare Merkmal ein Anschluss ist.

**Symbole für Test- und Messtechnikgeräte sind Abbildungen für einen Aufbauplan.** Verwenden Sie für Instrumente, die simulierte Signale erfassen, **Simulation → Laborausrüstung**; siehe [Quellen und virtuelle Instrumente](../Simulation-Sources-and-Instruments/).

Solarsymbole stehen für ganze Kabel oder logische Verbindungen. Sie beschreiben die Systemarchitektur; sie geben weder einzelne Installationsanschlüsse noch Kabelnennwerte oder ein vollständiges Schutzkonzept an.

## Bibliotheken mit Simulationsmodellen
{: #libraries-with-simulation-models}

Verwenden Sie diese Sammlungen, wenn Sie eine [Schaltungssimulation ausführen](../Simulation/) möchten.

| Bibliothek | Inhalt | Modellierungszweck |
| --- | --- | --- |
| **SPICE-Grundlagen** — 29 Symbole | Passive Bauteile, Quellen, Dioden, LEDs, Transistoren, Transformator, Resonatoren, 741, LM358 und LM324 | Analoge Komponenten mit einem [mitgelieferten Modell und voreingestellter Pinzuordnung](../Bundled-SPICE-Models/) |
| **Digitallogik** — 28 Symbole | Gatter, Zähler und Speicher | Konfigurierbares Logikverhalten, implementiert mit portablen analogen SPICE-Modellen |
| **Funktionsblöcke** — 17 Symbole | ADC/DAC, Kommunikationsschnittstellen, Zustandsautomaten und programmierbare I/O-Blöcke | Systemverhalten untersuchen, ohne einen vollständigen Chip zu implementieren |
| **Sensoren und Schnittstellen** — 10 Symbole | Modellierte Sensoren, ein Testpunkt, ein Analogschalter und ein AM-Modulator | Einen konfigurierten Reiz mit dem elektrischen Ausgang in Beziehung setzen |

Diese Modelle sind Näherungen zur Untersuchung des Verhaltens. Sie garantieren nicht die Leistungsdaten eines Geräts eines bestimmten Herstellers. Die funktionalen Mikrocontroller-, SPS- oder FPGA-Blöcke führen weder Firmware noch HDL aus. Die Bibliothek **Digitallogik** verwendet analoge Verhaltensmodelle und kann im Browser ausgeführt werden; der separate [XSPICE-Kurs](../XSPICE-Tutorial/) verwendet die ereignisgesteuerte Engine der Desktop-App.

Lesen Sie die Eigenschaften, Einheiten und Pinzuordnungen jedes Modells. Logikmodelle können verborgene Versorgungspins mit den Namen **VCC** und **VSS** haben. Stellen Sie die entsprechenden Versorgungsnetze bereit und verbinden Sie **VSS** mit der SPICE-Masse **0**. Ein Label mit dem Wort GND erzeugt für sich genommen nicht den Knoten 0.

## Verdrahtung eindeutig gestalten
{: #make-wiring-unambiguous}

Lassen Sie das Raster eingeschaltet und beenden Sie Leitungen an den tatsächlichen Anschlusspunkten. Eine Leitung, die eine nicht zugehörige Buchse oder den Endpunkt einer anderen Leitung berührt, kann eine elektrische Verbindung herstellen. Führen Sie Leitungen um solche Punkte herum; eine scheinbar ordentliche Linie genügt nicht, um das beabsichtigte Netz zu definieren.

Nicht verwendete Gerätebuchsen können offen bleiben. Einige Meldungen des Schaltungsprüfers zu Leitungen, die in die Umrisse physischer Panels hineinragen, sind bei diesen Zeichnungen zu erwarten; unbeabsichtigte Kurzschlüsse und Knoten müssen jedoch korrigiert werden. Siehe [Leitungen](../Wires/) zu elektrischer Konnektivität und [Mitgelieferte Beispiele](../Bundled-Examples/) zu ausgearbeiteten Layouts mit diesen Sammlungen.
