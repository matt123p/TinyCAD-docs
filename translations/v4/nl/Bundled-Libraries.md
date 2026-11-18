---
layout: default
---
# Meegeleverde bibliotheken
{: #bundled-libraries}

Meegeleverde bibliotheken zijn verzamelingen kant-en-klare symbolen die TinyCAD zowel in de browser als in de desktopapp aanbiedt. Ze omvatten zowel apparatuuropstellingen als elektronische schakelingen. U kunt ze gebruiken zonder u aan te melden, een bibliotheekbestand te downloaden of een bibliotheekmap in te stellen.

## Een component zoeken en plaatsen
{: #find-and-place-a-component}

1. Open het bibliotheekpaneel aan de linkerkant. Gebruik de uitvouwknop als het is ingeklapt.
2. Selecteer **Standard**. Met **Online** doorzoekt u de online verzameling; **My Libraries** bevat uw eigen bibliotheekbestanden.
3. Gebruik **Choose a standard library** om een verzameling te selecteren. TinyCAD laadt telkens één standaardbibliotheek en onthoudt uw keuze op dit apparaat.
4. Blader door de lijst of typ een naam of beschrijving in **Search libraries...**. Elk resultaat heeft een voorbeeld van het artwork. Selecteer een resultaat om het grotere voorbeeld en de beschrijving te bekijken.
5. Sleep het voorbeeld van de component naar de tekening. Plaats het op het raster; druk op **Escape** of klik met de rechtermuisknop wanneer u klaar bent met het plaatsen van kopieën.

Als u de geselecteerde bibliotheek wijzigt, worden reeds geplaatste componenten niet verwijderd. De definities ervan zijn in de tekening ingebed, dus iemand die de tekening opent, hoeft niet dezelfde bibliotheken te laden. Standaardbibliotheken zijn alleen-lezen; gebruik [aangepaste bibliotheken](../Custom-symbol-libraries/) als u uw eigen symbooldefinities wilt beheren.

{% include video-player.html src="/v4/videos/simulation/libraries.mp4" poster="/v4/videos/simulation/libraries.jpg" caption="Kies een meegeleverde bibliotheek, zoek een switch met acht poorten en sleep deze naar een tekening." %}

## Apparatuur- en lay-outbibliotheken
{: #equipment-and-layout-libraries}

Deze bibliotheken tonen de fysieke opstelling van apparatuur, borden, aansluitklemmen en aansluitbussen. Ze helpen u uit te leggen **wat waarmee verbonden is**. Ze bevatten geen uitvoerbare firmware, mechanische simulatie of SPICE-modellen.

| Bibliotheek | Inhoud | Typisch gebruik |
| --- | --- | --- |
| **Network layout** — 47 symbolen | Consumentenrouters, switches en accesspoints; bijbehorende 19-inch-rackswitches, routers, firewalls, patchpanelen en blindpanelen | Kantoorbekabeling, thuisnetwerken en rackindelingen |
| **Embedded processors and smart home** — 44 symbolen | Tien controllerborden, 26 sensor-/actuatormodules en acht displays | Een sensorstation, domotica of een embedded project prototypen |
| **Audio & Music** — 99 symbolen | Microfoons, mengpanelen, interfaces, instrumenten, MIDI, computers, connectoren, hoofdtelefoons, luidsprekers, versterkers en podiumapparatuur | Optredens, studio's, podcasts, thuisopnamen, kerken en scholen |
| **Test & Measurement** — 78 symbolen | Voedingen, belastingen, oscilloscopen, meters, RF-instrumenten, probes, data-acquisitie, verwarmers, relais, bedieningselementen, pompen en testbankapparatuur | Laboratoriumverbindingen en experimentele opstellingen |
| **Motors & Motion** — 66 symbolen | Gelijkstroom- en borstelloze motoren, stappenmotoren, servomotoren, driverborden, encoders, eindschakelaars, solenoïdes, elektrische/pneumatische actuatoren en mechanische onderdelen | Robotica, automatisering en bedrading voor bewegingsregeling |
| **Solar power and batteries** — 52 symbolen | Panelen, arrays, omvormers, accu's, EV-laders, back-upapparatuur, beveiliging, bewaking en huishoudelijke belastingen | Een conceptueel thuisenergiesysteem en de voedings-/besturingsverbindingen ervan |

### Netwerkindeling
{: #network-layout}

Ethernet-aansluitpunten bevinden zich in het midden van de aansluitbussen. Eén punt staat voor een **volledige kabel**, niet voor acht afzonderlijke Ethernet-aders. Desktop-switches zijn beschikbaar met 4, 5, 8, 16 en 24 koperpoorten, inclusief PoE- en gecombineerde koper-/glasvezelopties. Rackindelingen omvatten configuraties met 8/16/24/48 poorten en SFP+-uplinks met twee of vier cages, plus aanvullende generieke planningsindelingen met 10 en 32 koperpoorten. Beschouw dit als beschikbare symboolkeuzes, niet als de bewering dat elke indeling even gangbaar is. Lees de symboolnaam en de labels op het voorpaneel om het gewenste aantal poorten en de gewenste uplinkconfiguratie te kiezen.

De 19-inch 1U-panelen hebben dezelfde afmetingen. Behoud de standaardschaal en stapel ze verticaal met **120 tekeneenheden** tussenruimte om een rack te vormen. Het [voorbeeld van een klein kantoornetwerk](../Bundled-Examples/#equipment-and-layout-examples) toont vier bijpassende panelen en langere kabeltrajecten naar een accesspoint en een desktopswitch. Teken elke patchkabel tot aan het aansluitpunt van de aansluitbus; het paneelillustratie verbindt verschillende aansluitbussen niet automatisch intern.

### Embedded processors en smart home
{: #embedded-processors-and-smart-home}

Controllerborden omvatten ESP32 DevKitC V4, ESP32-S3 DevKitC-1, NodeMCU ESP8266, LOLIN D1 mini, Raspberry Pi 3/4/5 en varianten van Arduino Uno/Nano/Mega. Sensormodules omvatten temperatuur-, vochtigheids-, licht-, druk-, aanraak- en passieve-infraroodsensoren, naast uitgangen zoals zoemers. De PCB, headerpads en pinlabels blijven zichtbaar; een klein functiepictogram geeft de sensor aan in plaats van een naamloze chiprechthoek.

Weergaveopties omvatten een I2C LCD1602 en 128×64 OLED, Waveshare 1.8-inch SPI LCD en 2.8-inch capacitief aanraak-LCD, Nextion 2.8-inch UART-aanraakdisplay en Waveshare 2.13/2.9/4.2-inch e-paperassemblages. Elk symbool combineert twee aanzichten van **één apparaat**: de voorkant van het scherm links en de contacten van de achterzijde/header rechts. Alleen de contacten aan de achterzijde zijn elektrische aansluitpunten. Dubbele headers kunnen dezelfde hardwaresignalen beschikbaar maken; het zijn geen extra onafhankelijke kanalen. Volg de labels en de aangegeven revisie.

Controleer de aangegeven bordrevisie voordat u bedrading aanlegt. Bij Raspberry Pi-headers zijn **fysieke pinnummers en BCM GPIO-namen verschillende nummeringssystemen**. De pinposities op het bord zijn nuttig voor een bedradingsschema, maar de illustratie is geen PCB-footprint of productietekening. Controleer de voedingsrails, logicaniveaus, stroomlimieten en pull-ups nog steeds aan de hand van de documentatie van de daadwerkelijke module.

### Audio-, laboratorium- en bewegingsverbindingen
{: #audio-laboratory-and-motion-connections}

Bij audioschema's stellen de meeste aansluitbussen volledige kabels voor. Label microfoon-, lijn-, luidspreker-, hoofdtelefoon- en MIDI-routes om duidelijk te maken waarvoor ze dienen. Een getekende connector betekent niet dat twee apparaten compatibele niveaus hebben, gebalanceerd zijn aangesloten of dezelfde vereisten voor fantoomvoeding hebben.

Laboratorium- en bewegingssymbolen maken onderscheid tussen afzonderlijke elektrische aders, volledige kabels en vloeistofslangen. Zo stellen BNC-/USB-aansluitingen kabels voor, terwijl de voedings-, logica- en motoraansluitingen van een motordriver afzonderlijke aders zijn. Onderdelen die alleen mechanisch zijn, kunnen geen elektrische aansluitingen hebben. Gebruik de pinlabels en de symboolbeschrijving; ga er niet van uit dat elk zichtbaar onderdeel een aansluiting is.

**Symbolen voor Test & Measurement-apparatuur zijn afbeeldingen voor een opstellingsschema.** Gebruik voor instrumenten die gesimuleerde signalen opnemen **Simulation → Lab Equipment**; zie [bronnen en virtuele instrumenten](../Simulation-Sources-and-Instruments/).

Zonne-energiesymbolen stellen volledige kabels of logische verbindingen voor. Ze beschrijven de systeemarchitectuur; ze specificeren geen afzonderlijke aansluitklemmen voor de installatie, kabelwaarden of een volledig beveiligingsschema.

## Bibliotheken met simulatiemodellen
{: #libraries-with-simulation-models}

Gebruik deze verzamelingen als u een [schakelsimulatie wilt uitvoeren](../Simulation/).

| Bibliotheek | Inhoud | Doel van modellering |
| --- | --- | --- |
| **SPICE essentials** — 27 symbolen | Passieve componenten, bronnen, diodes, leds, transistors, transformator en een versterker in 741-stijl | Een basisset met gemodelleerde analoge componenten |
| **Digital logic** — 28 symbolen | Poorten, tellers en geheugenelementen | Configureerbaar logisch gedrag, geïmplementeerd met overdraagbare analoge SPICE-modellen |
| **Functional blocks** — 17 symbolen | ADC/DAC, communicatie-interfaces, toestandsmachines en programmeerbare I/O-blokken | Systeemgedrag verkennen zonder een complete chip te implementeren |
| **Sensors and interfaces** — 10 symbolen | Gemodelleerde sensoren, een testpunt, analoge schakelaar en AM-modulator | Een ingestelde stimulus in verband brengen met de elektrische uitgang |

Deze modellen zijn benaderingen om gedrag te verkennen. Ze bieden geen garantie voor de prestaties van een apparaat van een bepaalde fabrikant. De functionele microcontroller-, PLC- of FPGA-blokken voeren geen firmware of HDL uit. De bibliotheek **Digital logic** gebruikt analoge gedragsmodellen en kan in de browser worden uitgevoerd; de afzonderlijke [XSPICE-cursus](../XSPICE-Tutorial/) gebruikt de gebeurtenisgestuurde engine van Desktop.

Lees de eigenschappen, eenheden en pinindeling van elk model. Logische modellen kunnen verborgen voedingspinnen hebben met de namen **VCC** en **VSS**. Voorzie de bijbehorende voedingsnetten en verbind **VSS** met SPICE-aarde **0**. Een label met het woord GND maakt op zichzelf geen knooppunt 0 aan.

## Maak bedrading ondubbelzinnig
{: #make-wiring-unambiguous}

Laat het raster ingeschakeld en beëindig draden op de daadwerkelijke aansluitpunten. Een draad die een niet-gerelateerde aansluitbus of het eindpunt van een andere draad raakt, kan een elektrische verbinding maken. Leid draden om die punten heen; een ogenschijnlijk nette lijn legt het bedoelde netlist niet vanzelf vast.

Ongebruikte aansluitbussen van apparatuur mogen open blijven. Sommige meldingen van de circuitcontrole over draden die de fysieke paneelomtrek kruisen, zijn voor deze tekeningen te verwachten, maar onbedoelde kortsluitingen en knooppunten moeten worden gecorrigeerd. Zie [Draden](../Wires/) voor elektrische connectiviteit en [Meegeleverde voorbeelden](../Bundled-Examples/) voor uitgewerkte lay-outs met deze verzamelingen.
