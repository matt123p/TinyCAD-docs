---
layout: default
---
# Simulatie en SPICE
{: #simulation-and-spice}

TinyCAD kan elektronische circuits simuleren, resultaten weergeven in grafieken en het gedrag van circuits meten zonder de tekening te verlaten. De geïntegreerde engine is **ngspice**. Zowel de browser als de Desktop App bevatten een engine; voor de geïntegreerde workflow hebt u geen afzonderlijke ngspice-installatie nodig.

Nieuw met simulaties? Begin met de [begeleide SPICE-cursus](../SPICE-Tutorial/). Volg voor een snel eerste resultaat de stappen voor de spanningsdeler hieronder. Deze naslaggids legt de bedieningselementen uit en hoe u de resultaten interpreteert.

## Wat een circuitsimulator berekent
{: #what-a-circuit-simulator-calculates}

SPICE staat voor *Simulation Program with Integrated Circuit Emphasis*. Een simulator lost een wiskundig model op van een aangesloten circuit: weerstanden leggen een verband tussen spanning en stroom, condensatoren en spoelen slaan energie op en halfgeleidermodellen beschrijven niet-lineair gedrag. De simulator kan een DC-werkpunt bepalen, golfvormen in de tijd berekenen en de frequentierespons bij kleine signalen onderzoeken.

Een schema geeft de **connectiviteit** weer; een SPICE-model geeft het **gedrag** weer; een analyse bepaalt **wat er berekend moet worden**. Alle drie moeten correct zijn. Een realistische afbeelding van een versterker of processor betekent niet dat deze een simulatiemodel bevat. Omgekeerd kan een eenvoudige driehoek of rechthoek een bruikbaar gedragsmodel bevatten.

Simulatie is nuttig om een idee te controleren, componentwaarden te vergelijken en een onverwachte respons te begrijpen. Het resultaat is afhankelijk van het model en de voorwaarden die u opgeeft. Ideale draden hebben geen onbedoelde weerstand of inductantie; een generiek transistormodel is geen volledige specificatie voor elke transistor. Belasting, voedingsimpedantie, toleranties en temperatuur worden alleen meegenomen voor zover de gekozen modellen deze weergeven.

## Browser- en Desktop-engines
{: #browser-and-desktop-engines}

| Mogelijkheid | Browser | Desktop App |
| --- | --- | --- |
| Analoge SPICE, grafieken, metingen en verkenning | Ingebouwde WebAssembly-ngspice in een worker | Ingebouwde native ngspice via een hulpproces |
| Draagbare bibliotheken met gemodelleerde digitale logica / functionele blokken / sensoren en interfaces | Ja | Ja |
| Gebeurtenisgestuurde XSPICE-codemodellen | Niet ondersteund¹ | Ja, ingebouwde native code-modelbibliotheken |
| Vensters met losgekoppelde grafieken | Ja | Ja |
| Vensters met losgekoppelde virtuele instrumenten | Nee | Ja |

¹ Browserbuilds kunnen een tekening met opgeslagen XSPICE-resultaten openen om deze te bekijken. Voor het uitvoeren van XSPICE is Desktop vereist.

De berekening wordt lokaal uitgevoerd in de browser of de Desktop-engine. Online zoeken in bibliotheken is een afzonderlijke functie. De huidige ingebouwde engine is gebaseerd op ngspice 47; de uitvoergeschiedenis geeft aan welke engine/build voor een meting is gebruikt. Raadpleeg de bijbehorende upstream-handleiding bij het controleren van modelsyntaxis of verschillen tussen engines.

## Voer uw eerste simulatie uit
{: #run-your-first-simulation}

1. Open **Voorbeeld openen** in de titelbalk van de browser, of **Bestand → Voorbeeld openen** in Desktop.
2. Selecteer **SPICE-tutorial → spanningsdeler → Tekening openen**.
3. Bekijk het circuit: een bron van 5 V voedt twee weerstanden van 1 kΩ in serie. **OUT** is hun middenpunt en de onderste draad is aarde **0**.
4. Selecteer het **spanningsdeler-simulatieblad** in de bladenbalk. Het klokachtige pictogram onderscheidt dit van een schemablad. Open **Instellen** en laat **Werkpunt** geselecteerd.
5. Kies **Uitvoeren**. Open na afloop **Geschiedenis** en selecteer de nieuwe voltooide meting.
6. Open **Gegevens**. Het middenpunt is **2,5 V**. De bronstroom is **−2,5 mA**, omdat de stroomreferentie van ngspice voor een spanningsbron naar de positieve aansluiting wijst; een bron die in dit circuit stroom levert, heeft een negatieve stroom.
7. Wijzig een weerstand en voer de simulatie opnieuw uit. Vergelijk het nieuwe resultaat met de oorspronkelijke meting.

{% include video-player.html src="/v4/videos/simulation/first-simulation.mp4" poster="/v4/videos/simulation/first-simulation.jpg" caption="Open de meegeleverde spanningsdeler, bekijk de configuratie en voer een nieuwe ngspice-meting uit in de browser. De gegevenstabel bevestigt 2,5 V op OUT en −2,5 mA door de bron." %}

Het voorbeeld bevat een bewaarde referentiemeting. Als u direct na het openen een resultaat ziet, betekent dit niet dat er een nieuwe berekening is uitgevoerd. **Geschiedenis** maakt onderscheid tussen dit opgeslagen bewijsmateriaal en de meting die u met Uitvoeren aanmaakt.

## Een nieuwe simulatie opzetten
{: #build-a-new-simulation}

1. Plaats gemodelleerde componenten uit **Standaard → SPICE-basiscomponenten**, of gebruik het submenu **Simulatie → SPICE-componenten** op de werkbalk. **Meer…** opent de volledige verzameling SPICE-basiscomponenten.
2. Verbind de pinnen met draden en geef belangrijke knooppunten duidelijke labels. Maak een echte verbinding met aarde **0**: **Simulatie → SPICE → Aarde invoegen** plaatst het juiste voedingssymbool.
3. Voeg een stimulussignaal toe met **Simulatie → SPICE → Bron invoegen**. Stel het type spanning/stroom en de golfvorm in. Voeg [probes](../Simulation-Sources-and-Instruments/#probes-and-ground) toe als u gemakkelijk grafieken wilt maken.
4. Kies **Simulatie → Simuleren** om een **Simulatieblad** toe te voegen.
5. Kies een analyse en de bijbehorende instellingen op **Instellen**. Stel parameters in of koppel aangepaste modeltekst toe als uw circuit die nodig heeft.
6. Kies signalen, voer de simulatie uit en bekijk het deelvenster **Simulatiegrafieken** en de weergaven **Gegevens**, **Geschiedenis** en **Diagnostiek** van het blad. Los gemelde bedradings- of modelfouten op voordat u op de waarden vertrouwt.

Op een Simulatieblad staan **Uitvoeren** en **Stoppen** op de hoofdwerkbalk. Het blad begint met **Instellen**. **Geschiedenis** en **Diagnostiek** verschijnen zodra het blad een uitvoering heeft; **Metingen** en **Gegevens** verschijnen zodra er numerieke gegevens beschikbaar zijn. De tools van Circuit Explorer staan onder de analyse-instellingen in Instellen; voeg via **Tools toevoegen** alleen de tools toe die u nodig hebt.

Alle schemabladen in een tekening vormen **één circuit**. Elk Simulatieblad heeft een afzonderlijke configuratie: analyse, parameters, gekoppelde modellen, signaalselecties, instructies en uitvoergeschiedenis. Een tweede Simulatieblad toevoegen maakt geen afzonderlijk tweede schemacircuit. U kunt er hetzelfde circuit op een andere manier mee onderzoeken, bijvoorbeeld met een AC-analyse naast een transiënte analyse.

Gebruik voor elk onderzoek een eigen configuratienaam. Als u een configuratie dupliceert, worden de definities gekopieerd, maar niet de metingen. Er wordt maar één meting tegelijk uitgevoerd; sweeps en onderzoeken voeren hun gevallen achtereenvolgens uit.

## Aarde, verbindingen en modellen
{: #ground-connections-and-models}

De spanningsreferentie van SPICE is knooppunt **0**. Een voedingssymbool of netlabel met exact die waarde stelt de referentie in. Het woord **GND** is op zichzelf een gewone netnaam, tenzij u het ook met knooppunt 0 verbindt. Zwevende circuits, niet-gevoede modelvoedingspinnen en niet-aangesloten retourleidingen van bronnen zijn veelvoorkomende problemen bij een eerste uitvoering.

Draden moeten op de aansluitpunten van pinnen eindigen. Tekst in de buurt maakt geen verbinding. Een draad die een eindpunt van een andere draad of een componentaansluiting raakt, kan een knooppunt vormen, ook als dat niet de bedoeling was. Gebruik [draadconnectiviteit](../Wires/) en de gegenereerde netlist om onduidelijke tekeningen te verduidelijken.

Elke gesimuleerde component heeft een geldige template, een model en een pinmapping nodig. Gebruik de **SPICE**-eigenschappen van de geplaatste component om deze te bekijken. Zie [SPICE-modellen en netlistuitvoer](../SPICE-output/) voordat u modellen van leveranciers koppelt of een symbool aanpast dat alleen voor tekeningen bedoeld is.

## Instellen, Uitvoeren en Stoppen
{: #setup-run-and-stop}

**Uitvoeren** start een nieuwe meting met het huidige circuit en de huidige configuratie. Grafieken kunnen worden bijgewerkt terwijl er gegevens binnenkomen. **Stoppen** beëindigt de meting en behoudt de gegevens die al zijn binnengekomen; de status en beschikbaarheid van de uitvoering geven aan wat is bewaard. Het is geen bediening om te pauzeren en te hervatten. Start een nieuwe uitvoering om opnieuw te berekenen.

Wijzigingen aan het circuit, het model of de configuratie maken het vorige resultaat historisch. TinyCAD markeert resultaten die opnieuw moeten worden berekend, in plaats van oude waarden weer te geven alsof het metingen van het gewijzigde circuit zijn. De geschiedenis registreert de identiteit van het circuit/de instellingen, de backend, het tijdstip en het resultaat. Als u een eerdere meting selecteert, selecteert u eerder bewijsmateriaal; u herstelt de oude schematische tekening niet zoals met een bewerking ongedaan maken.

## Resultaten opslaan en delen
{: #save-and-share-results}

Sla de tekening op om het circuit, de modellen, configuraties en verkregen resultaten te bewaren. TinyCAD gebruikt automatisch **`.dzn`** wanneer een tekening simulatiecomponenten, instellingen of resultaten bevat. Met **Opslaan zonder resultaten** blijven de simulatiedefinities en vastgelegde scalaire rapportmetadata behouden, maar worden de numerieke golfvormarrays weggelaten; voor grafieken waarvoor die arrays nodig zijn, moet u dan een nieuwe meting uitvoeren.

De hoeveelheid bewaarde numerieke gegevens is beperkt tot 64 MiB per uitvoering en 256 MiB per tekening, met maximaal 1.000 uitvoeringen per configuratie. Langdurige onderzoeken met kleine tijdstappen kunnen deze limieten bereiken. Exporteer belangrijke grafieken en CSV-gegevens en verwijder resultaten die u niet meer nodig hebt. Sla modelbijlagen op in de tekening, zodat een ontvanger uw lokale bestandspaden niet nodig heeft.

## Simulatietekeningen in `.dzn`
{: #dzn-simulation-drawings}
{: #dzn-simulation-drawings}

**`.dzn` is de gecomprimeerde tekeningindeling van TinyCAD, die wordt ondersteund vanaf TinyCAD v4.** De indeling bundelt het schema, ingesloten symbolen, Simulatiebladen, broninstellingen, gekoppelde modeltekst en eventuele bewaarde metingen in één ZIP-gebaseerd bestand. Numerieke golfvormgegevens worden efficiënt in het bestand opgeslagen, waaronder complexe AC-resultaten. U opent en slaat het bestand op met de normale opdrachten **Bestand → Openen**, **Opslaan** en **Opslaan als**; handmatig uitpakken is niet nodig.

Gewone tekeningen gebruiken de XML-indeling **`.dsn`**. TinyCAD kiest automatisch `.dzn` wanneer simulatie-inhoud aanwezig is, waaronder bronnen, probes, virtuele instrumenten, SPICE-attributen, aarde met de naam `0`, Simulatiebladen of resultaten. **Opslaan zonder resultaten** gebruikt nog steeds `.dzn` wanneer de simulatieconfiguratie behouden blijft: de grote golfvormarrays worden verwijderd, niet de experimentele definities.

Gebruik **Opslaan zonder resultaten** voor een kleinere deelbare kopie als de ontvanger de simulatie opnieuw kan uitvoeren. Bewaar de resultaten als u wilt dat de ontvanger uw meting, metingen en enginegegevens kan bekijken zonder de simulatie opnieuw uit te voeren. Een opgeslagen meting beschrijft het circuit op het moment waarop deze is uitgevoerd; na een wijziging is dit geen vervanging voor opnieuw simuleren.

TinyCAD v3 kan `.dzn`-bestanden niet openen. De extensie wijzigen in `.dsn` converteert de indeling niet en maakt nieuwe simulatierecords niet compatibel met v3. Bewaar een origineel exemplaar wanneer u een ontwerp uitwisselt met een oudere TinyCAD-versie. Een `.cir`-export is SPICE-tekst voor een simulator; deze verschilt van beide TinyCAD-tekeningindelingen.

## Ga verder met de naslaggids
{: #continue-with-the-reference}

- [Analyses en instellingen](../Simulation-Analyses/) — DC, transiënt, AC, ruis, overdrachtsfunctie en pool-nulpunten.
- [Bronnen, probes en virtuele instrumenten](../Simulation-Sources-and-Instruments/) — stimuli, meetaansluitingen en belasting.
- [Grafieken, metingen en Circuit Explorer](../Simulation-Charts-and-Measurements/) — afstemming, sweeps, vereisten en onderzoeken.
- [SPICE-modellen en netlistuitvoer](../SPICE-output/) — templates, modelbestanden en externe simulatie.
- [XSPICE- en digitale simulatie](../XSPICE/) — gebeurtenisgestuurde en mixed-signalmodellen in Desktop.
- [Probleemoplossing](../Simulation-Troubleshooting/) — diagnose van connectiviteit, modellen en numerieke problemen.
- [Tutorials](../Simulation-Tutorials/) — de volledige bestaande SPICE- en XSPICE-cursussen met uitvoerbare tekeningen.

Raadpleeg voor de taal- en componentnaslag van de simulator zelf de officiële [ngspice-documentatie](https://ngspice.sourceforge.io/docs.html), [gebruikershandleiding in PDF](https://ngspice.sourceforge.io/docs/ngspice-manual.pdf) en [HTML-handleiding](https://ngspice.sourceforge.io/docs/ngspice-html-manual/manual.xhtml). De handleiding beschrijft ngspice in zijn geheel; TinyCAD biedt de hier beschreven ondersteunde geïntegreerde workflows en geen onbeperkte opdrachtshell.
