---
layout: default
---
# Gebundelde bibliotheken
{: #bundled-libraries}

Gebundelde bibliotheken zijn verzamelingen symbolen die direct kunnen worden geplaatst en die met TinyCAD worden meegeleverd, zowel in de browser als in de desktopapp. Ze omvatten zowel apparatuurindelingen als elektronische schakelingen. U kunt ze gebruiken zonder u aan te melden, een bibliotheekbestand te downloaden of een bibliotheekmap in te stellen.

## Een component zoeken en plaatsen
{: #find-and-place-a-component}

1. Open het bibliotheekpaneel aan de linkerkant. Gebruik de uitvouwknop als het paneel is ingeklapt.
2. Selecteer **Standaard (Standard)**. Met **Online** zoekt u in de online verzameling; **Mijn bibliotheken (My Libraries)** bevat uw eigen bibliotheekbestanden.
3. Gebruik **Een standaardbibliotheek kiezen (Choose a standard library)** om een verzameling te selecteren. TinyCAD laadt telkens één standaardbibliotheek en onthoudt uw keuze op dit apparaat.
4. Blader door de lijst of typ een naam of beschrijving in **Bibliotheken zoeken... (Search libraries...)**. Elk resultaat heeft een voorbeeld van de illustratie. Selecteer een resultaat om het grotere voorbeeld en de beschrijving te bekijken.
5. Sleep het voorbeeld van de component naar de tekening. Plaats het op het raster; druk op **Escape** of klik met de rechtermuisknop wanneer u klaar bent met het plaatsen van kopieën.

Als u de geselecteerde bibliotheek wijzigt, worden reeds geplaatste componenten niet verwijderd. Hun definities zijn opgenomen in de tekening, zodat iemand die de tekening opent niet dezelfde bibliotheken hoeft te laden. Standaardbibliotheken zijn alleen-lezen; gebruik [aangepaste bibliotheken](../Custom-symbol-libraries/) wanneer u uw eigen symbooldefinities wilt beheren.

{% include video-player.html src="/v4/videos/simulation/libraries.mp4" poster="/v4/videos/simulation/libraries.jpg" caption="Kies een gebundelde bibliotheek, zoek naar een switch met acht poorten en sleep deze naar een tekening." %}

## Bibliotheken voor apparatuur en indelingen
{: #equipment-and-layout-libraries}

Deze bibliotheken tonen de fysieke indeling van apparatuur, borden, klemmen en aansluitingen. Ze helpen u uit te leggen **wat waarmee is verbonden**. Ze bevatten geen uitvoerbare firmware, mechanische simulatie of SPICE-modellen.

| Bibliotheek | Inhoud | Typisch gebruik |
| --- | --- | --- |
| **Netwerkindeling (Network layout)** — 47 symbolen | Consumentenrouters, switches en accesspoints; bijbehorende 19-inch rackswitches, routers, firewalls, patchpanelen en blinde panelen | Kantoorbekabeling, thuisnetwerken en rackplannen |
| **Embedded processors en smart home** — 44 symbolen | Tien controllerborden, 26 sensor-/actuatormodules en acht displays | Een sensorstation, domotica of een embedded project prototypen |
| **Audio en muziek (Audio & Music)** — 99 symbolen | Microfoons, mixers, interfaces, instrumenten, MIDI, computers, connectoren, hoofdtelefoons, luidsprekers, versterkers en podiumapparatuur | Optredens, studio's, podcasts, thuisopnamen, kerken en scholen |
| **Testen en meten (Test & Measurement)** — 78 symbolen | Voedingen, belastingen, oscilloscopen, meters, RF-instrumenten, probes, data-acquisitie, verwarmingselementen, relais, besturingen, pompen en laboratoriumapparatuur | Laboratoriumverbindingen en experimentele opstellingen |
| **Motoren en beweging (Motors & Motion)** — 66 symbolen | DC- en borstelloze motoren, stappenmotoren, servo's, driverborden, encoders, eindschakelaars, solenoïdes, elektrische/pneumatische actuatoren en mechanische onderdelen | Robotica, automatisering en bedrading voor bewegingsbesturing |
| **Zonne-energie en accu's (Solar power and batteries)** — 52 symbolen | Panelen, arrays, omvormers, accu's, EV-laders, back-upapparatuur, beveiliging, bewaking en huishoudelijke belastingen | Een conceptueel energiesysteem voor thuis en de voedings-/besturingsverbindingen ervan |

### Netwerkindeling
{: #network-layout}

Ethernet-aansluitpunten bevinden zich midden in de aansluitingen. Eén punt staat voor een **volledige kabel**, niet voor acht afzonderlijke Ethernet-geleiders. Desktopswitches zijn beschikbaar met 4, 5, 8, 16 en 24 koperpoorten, inclusief PoE- en combinaties van koper- en glasvezelopties. Rackindelingen omvatten configuraties met 8/16/24/48 poorten en SFP+-uplinks met twee of vier kooien, plus aanvullende generieke indelingen voor het plannen van 10 en 32 koperpoorten. Beschouw deze als beschikbare symboolkeuzes, niet als een bewering dat elke indeling even gebruikelijk is. Lees de symboolnaam en de labels op het voorpaneel om het gewenste aantal poorten en de gewenste uplinkconfiguratie te kiezen.

De 19-inch 1U-panelen hebben dezelfde afmetingen. Behoud de standaardschaal en stapel ze verticaal met **120 tekeneenheden** tussenruimte om een rack te vormen. Het [voorbeeld van een klein kantoornetwerk](../Bundled-Examples/#equipment-and-layout-examples) toont vier bij elkaar passende panelen en langere verbindingen naar een accesspoint en desktopswitch. Teken elke patchkabel naar het aansluitpunt van de bijbehorende aansluiting; de illustratie van het paneel verbindt verschillende aansluitingen niet automatisch intern met elkaar.

### Embedded processors en smart home
{: #embedded-processors-and-smart-home}

De controllerborden omvatten ESP32 DevKitC V4, ESP32-S3 DevKitC-1, NodeMCU ESP8266, LOLIN D1 mini, Raspberry Pi 3/4/5 en varianten van Arduino Uno/Nano/Mega. De sensormodules omvatten temperatuur-, vochtigheids-, licht-, druk-, aanraak- en passieve-infrarooddetectie, naast uitgangen zoals buzzers. De PCB, headerpads en pinlabels blijven zichtbaar; een klein functiepictogram geeft de sensor aan in plaats van een anonieme rechthoek voor een chip.

De displayopties omvatten een I2C LCD1602 en 128×64 OLED, Waveshare 1.8-inch SPI LCD en 2.8-inch capacitief aanraakscherm, Nextion 2.8-inch UART-aanraakscherm en Waveshare 2.13/2.9/4.2-inch e-paperassemblages. Elk symbool combineert twee aanzichten van **één apparaat**: het scherm aan de linkerkant en de contacten aan de achterzijde/header aan de rechterkant. Alleen de contacten aan de achterzijde zijn elektrische aansluitpunten. Herhaalde headers kunnen dezelfde hardwaresignalen beschikbaar maken; het zijn geen extra, onafhankelijke kanalen. Volg de labels en de vermelde revisie.

Controleer de vermelde revisie van het bord voordat u de bedrading aanlegt. Bij Raspberry Pi-headers zijn **fysieke pinnummers en BCM GPIO-namen verschillende nummeringssystemen**. De pinposities van het bord zijn handig voor een bedradingsschema, maar de illustratie is geen PCB-footprint of productietekening. Voedingsrails, logicaniveaus, stroomlimieten en pull-ups moeten nog steeds worden gecontroleerd aan de hand van de documentatie van de daadwerkelijke module.

### Audio-, laboratorium- en bewegingsverbindingen
{: #audio-laboratory-and-motion-connections}

Bij audioschema's stellen de meeste aansluitingen volledige kabels voor. Label microfoon-, lijn-, luidspreker-, hoofdtelefoon- en MIDI-routes zodat duidelijk is waarvoor ze dienen. Een getekende connector garandeert niet dat twee apparaten compatibele niveaus, gebalanceerde bedrading of dezelfde vereisten voor fantoomvoeding hebben.

Laboratorium- en bewegingssymbolen onderscheiden afzonderlijke elektrische geleiders, volledige kabels en vloeistofslangen. BNC-/USB-verbindingen stellen bijvoorbeeld kabels voor, terwijl de voedings-, logica- en motorklemmen van een motordriver afzonderlijke geleiders zijn. Onderdelen die alleen mechanisch zijn, kunnen zonder elektrische aansluitingen zijn. Gebruik de pinlabels en de symboolbeschrijving; ga er niet van uit dat elk zichtbaar element een aansluiting is.

**Symbolen voor Test & Measurement-apparatuur zijn afbeeldingen voor een opstellingsschema.** Gebruik voor instrumenten die gesimuleerde signalen inlezen **Simulatie → Labapparatuur (Simulation → Lab Equipment)**; zie [bronnen en virtuele instrumenten](../Simulation-Sources-and-Instruments/).

Zonnesymbolen stellen volledige kabels of logische verbindingen voor. Ze beschrijven de systeemarchitectuur; ze geven geen afzonderlijke installatieklemmen, kabelnominale waarden of volledig beveiligingsschema aan.

## Bibliotheken met simulatiemodellen
{: #libraries-with-simulation-models}

Gebruik deze verzamelingen wanneer u een [schakeling wilt simuleren](../Simulation/).

| Bibliotheek | Inhoud | Doel van de modellering |
| --- | --- | --- |
| **SPICE-basiscomponenten (SPICE essentials)** — 29 symbolen | Passieve componenten, bronnen, diodes, leds, transistors, transformator, resonatoren, 741, LM358 en LM324 | Analoge componenten met een [meegeleverd model en vooraf ingestelde pinmapping](../Bundled-SPICE-Models/) |
| **Digitale logica (Digital logic)** — 28 symbolen | Poorten, tellers en opslag | Configureerbaar logisch gedrag, geïmplementeerd met draagbare analoge SPICE-modellen |
| **Functionele blokken (Functional blocks)** — 17 symbolen | ADC/DAC, communicatie-interfaces, toestandsmachines en programmeerbare I/O-blokken | Systeemgedrag onderzoeken zonder een volledige chip te implementeren |
| **Sensoren en interfaces (Sensors and interfaces)** — 10 symbolen | Gemodelleerde sensoren, een testpunt, analoge schakelaar en AM-modulator | Een geconfigureerde stimulus koppelen aan een elektrische uitgang |

Deze modellen zijn benaderingen waarmee u gedrag kunt onderzoeken. Ze garanderen niet de prestaties van een apparaat van een genoemde fabrikant. De functionele microcontroller-, PLC- of FPGA-blokken voeren geen firmware of HDL uit. De bibliotheek **Digitale logica (Digital logic)** gebruikt analoge gedragsmodellen en kan in de browser worden uitgevoerd; de afzonderlijke [XSPICE-cursus](../XSPICE-Tutorial/) gebruikt de eventgestuurde engine van Desktop.

Lees de eigenschappen, eenheden en pinmapping van elk model. Logische modellen kunnen verborgen voedingspinnen hebben met de naam **VCC** en **VSS**. Voorzie de bijbehorende voedingsnetten en verbind **VSS** met SPICE-aarde **0**. Een label met het woord GND maakt op zichzelf geen knooppunt 0 aan.

## Maak bedrading ondubbelzinnig
{: #make-wiring-unambiguous}

Laat het raster ingeschakeld en beëindig draden op de daadwerkelijke aansluitpunten. Een draad die een andere aansluiting of het eindpunt van een andere draad raakt, kan een elektrische verbinding vormen. Leid draden om die punten heen; een ogenschijnlijk nette lijn is niet voldoende om de bedoelde netlist vast te leggen.

Niet-gebruikte apparaataansluitingen mogen open blijven. Sommige meldingen van de circuitcontrole over draden die de fysieke paneelomtrek binnengaan, zijn bij deze tekeningen te verwachten, maar onbedoelde kortsluitingen en knooppunten moeten worden gecorrigeerd. Zie [Draden](../Wires/) voor elektrische connectiviteit en [Gebundelde voorbeelden](../Bundled-Examples/) voor uitgewerkte indelingen met deze verzamelingen.
