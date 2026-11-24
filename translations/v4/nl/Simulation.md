---
layout: default
---
# Simulatie en SPICE
{: #simulation-and-spice}

TinyCAD kan elektronische circuits simuleren, de resultaten plotten en het circuitgedrag meten zonder de tekening te verlaten. De geïntegreerde engine is **ngspice**. Zowel de browser als de Desktop App bevatten een engine; voor de geïntegreerde workflow hebt u geen afzonderlijke ngspice-installatie nodig.

Nieuw met simulatie? Begin met de [begeleide SPICE-cursus](../SPICE-Tutorial/). Volg voor een snel eerste resultaat de onderstaande stappen voor de spanningsdeler. Deze referentie legt de bedieningselementen uit en hoe u de resultaten interpreteert.

## Wat een circuitsimulator berekent
{: #what-a-circuit-simulator-calculates}

SPICE staat voor *Simulation Program with Integrated Circuit Emphasis*. Een simulator lost een wiskundig model van een verbonden circuit op: weerstanden leggen een verband tussen spanning en stroom, condensatoren en spoelen slaan energie op, en halfgeleidermodellen beschrijven niet-lineair gedrag. De simulator kan de DC-instelwaarden bepalen, golfvormen in de tijd berekenen en de kleinsignaal-frequentierespons onderzoeken.

Een schema levert de **connectiviteit**; een SPICE-model levert het **gedrag**; een analyse bepaalt **wat er berekend moet worden**. Alle drie moeten correct zijn. Een realistische afbeelding van een versterker of processor betekent niet dat deze een simulatiemodel bevat. Omgekeerd kan een eenvoudige driehoek of rechthoek een bruikbaar gedragsmodel bevatten.

Simulatie is nuttig om een idee te controleren, componentwaarden te vergelijken en een onverwachte respons te begrijpen. Het resultaat hangt af van het model en de omstandigheden die u opgeeft. Ideale draden hebben geen onbedoelde weerstand of inductantie; een generiek transistormodel is geen volledige specificatie voor elke transistor. Belastingen, voedingsimpedantie, toleranties en temperatuur worden alleen meegenomen voor zover de gekozen modellen ze weergeven.

## Browser- en Desktop-engines
{: #browser-and-desktop-engines}

| Mogelijkheid | Browser | Desktop App |
| --- | --- | --- |
| Analoge SPICE, grafieken, metingen en verkenning | Meegeleverde WebAssembly ngspice in een worker | Meegeleverde native ngspice via een helperproces |
| Draagbare bibliotheken voor gemodelleerde digitale logica / functionele blokken / sensoren en interfaces | Ja | Ja |
| Gebeurtenisgestuurde XSPICE-codemodellen | Niet ondersteund¹ | Ja, meegeleverde native codemodelbibliotheken |
| Pop-outvensters voor grafieken | Ja | Ja |
| Pop-outvensters voor virtuele instrumenten | Nee | Ja |

¹ Browserbuilds kunnen een tekening met opgeslagen XSPICE-resultaten openen om deze te bekijken. Voor uitvoering van XSPICE is Desktop vereist.

De berekening wordt lokaal uitgevoerd in de browser- of Desktop-engine. Online bibliotheken doorzoeken is een afzonderlijke functie. De momenteel meegeleverde engine is gebaseerd op ngspice 47; in de uitvoergeschiedenis wordt aangegeven welke engine/build voor een acquisitie is gebruikt. Raadpleeg de bijbehorende upstream-handleiding wanneer u de modelsyntaxis of verschillen tussen engines controleert.

## Voer uw eerste simulatie uit
{: #run-your-first-simulation}

1. Open **Open Example** in de titelbalk van de browser, of **File → Open Example** in Desktop.
2. Selecteer **SPICE tutorial → divider → Open drawing**.
3. Bekijk het circuit: een bron van 5 V voedt twee weerstanden van 1 kΩ in serie. **OUT** is hun middenpunt en de onderste draad is massa **0**.
4. Selecteer het **divider Simulation sheet** in de tabbladbalk. Het klokachtige pictogram onderscheidt dit van een schema-sheet. Open **Setup** en laat **Operating Point** geselecteerd.
5. Kies **Run**. Open na afloop **History** en selecteer de nieuwe voltooide acquisitie.
6. Open **Data**. Het middenpunt is **2,5 V**. De bronstroom is **−2,5 mA**, omdat de stroomreferentierichting van de spanningsbron in ngspice naar de positieve aansluiting wijst; een bron die stroom levert, heeft in dit circuit een negatieve stroom.
7. Wijzig een weerstand en voer de simulatie opnieuw uit. Vergelijk het nieuwe resultaat met de oorspronkelijke acquisitie.

{% include video-player.html src="/v4/videos/simulation/first-simulation.mp4" poster="/v4/videos/simulation/first-simulation.jpg" caption="Open de meegeleverde spanningsdeler, bekijk de configuratie en voer een nieuwe ngspice-acquisitie uit in de browser. De gegevenstabel bevestigt 2,5 V op OUT en −2,5 mA door de bron." %}

Het voorbeeld bevat een bewaarde referentieacquisitie. Als u direct na het openen een resultaat ziet, betekent dat niet dat er een nieuwe berekening is uitgevoerd. **History** houdt dat opgeslagen bewijs gescheiden van de acquisitie die u met Run maakt.

## Een nieuwe simulatie opbouwen
{: #build-a-new-simulation}

1. Plaats gemodelleerde componenten uit **Standard → SPICE essentials**, of gebruik het submenu **Simulation → SPICE components** op de werkbalk. **More…** opent de volledige verzameling SPICE-essentials. De symbolen bevatten al een [meegeleverd model en pinmapping](../Bundled-SPICE-Models/).
2. Verbind de pinnen met draden en geef belangrijke knooppunten leesbare labels. Zorg voor een echte verbinding met massa **0**: **Simulation → SPICE → Insert Ground** plaatst het juiste massasymbool.
3. Voeg een stimulussignaal toe met **Simulation → SPICE → Insert Source**. Stel het type spanning/stroom en de golfvorm in. Voeg [probes](../Simulation-Sources-and-Instruments/#probes-and-ground) toe als u gemakkelijk grafieken wilt maken.
4. Kies **Simulation → Simulate** om een **Simulation sheet** toe te voegen.
5. Kies een analyse en de bijbehorende instellingen op **Setup**. Stel parameters in of voeg aangepaste modeltekst toe als uw circuit die nodig heeft.
6. Kies signalen, voer de simulatie uit en bekijk het deelvenster **Simulation charts** en de weergaven **Data**, **History** en **Diagnostics** van het sheet. Los gemelde bedradings- of modelfouten op voordat u op de waarden vertrouwt.

Op een Simulation sheet staan **Run** en **Stop** op de hoofdwerkbalk. Het sheet opent met **Setup**. **History** en **Diagnostics** verschijnen zodra het sheet een uitvoering heeft; **Measurements** en **Data** verschijnen wanneer numerieke gegevens beschikbaar zijn. De tools van Circuit Explorer staan in Setup onder de analyse-instellingen; voeg via **Add tools** alleen de tools toe die u nodig hebt.

Alle schema-sheets in een tekening vormen **één circuit**. Elk Simulation sheet heeft een afzonderlijke configuratie: analyse, parameters, gekoppelde modellen, signaalselecties, instructies en uitvoergeschiedenis. Een tweede Simulation sheet toevoegen maakt geen afzonderlijk tweede schemacircuit. Hiermee kunt u hetzelfde circuit op een andere manier onderzoeken, bijvoorbeeld met een AC-analyse naast een transiëntanalyse.

Gebruik voor elk onderzoek een eigen configuratienaam. Als u een configuratie dupliceert, worden de definities gekopieerd, maar niet de acquisities. Er wordt maar één acquisitie tegelijk uitgevoerd; sweeps en onderzoeken voeren hun gevallen achtereenvolgens uit.

## Massa, verbindingen en modellen
{: #ground-connections-and-models}

De spanningsreferentie van SPICE is knooppunt **0**. Een massasymbool of netlabel met exact die waarde stelt de referentie in. Alleen het woord **GND** is een gewone netnaam, tenzij u het ook met knooppunt 0 verbindt. Zwevende circuits, niet-gevoede voedingspinnen van modellen en niet-aangesloten retourverbindingen van bronnen zijn veelvoorkomende problemen bij een eerste uitvoering.

Draden moeten de pinnen op hun aansluitpunten raken. Tekst in de buurt maakt geen verbinding. Een draad die een eindpunt van een andere draad of een componentaansluiting raakt, kan een knooppunt vormen, zelfs als dat niet de bedoeling was. Gebruik [draadconnectiviteit](../Wires/) en de gegenereerde netlist om onduidelijke tekeningen te beoordelen.

Elke gesimuleerde component heeft een geldige template, een model en een pinmapping nodig. Gebruik de **SPICE**-eigenschappen van de geplaatste component om deze te controleren. Zie [SPICE-modellen en netlistuitvoer](../SPICE-output/) voordat u modellen van leveranciers koppelt of een symbool aanpast dat alleen voor tekeningen bedoeld is.

## Setup, Run en Stop
{: #setup-run-and-stop}

**Run** start een nieuwe acquisitie met het huidige circuit en de huidige configuratie. Grafieken kunnen worden bijgewerkt terwijl de gegevens binnenkomen. **Stop** beëindigt de acquisitie en behoudt de gegevens die al zijn binnengekomen; de status en beschikbaarheid van de uitvoering geven aan wat er bewaard is. Dit is geen pauze-/hervatknop. Start een nieuwe uitvoering om opnieuw te berekenen.

Wijzigingen aan het circuit, model of de configuratie maken het vorige resultaat tot historische gegevens. TinyCAD markeert resultaten die opnieuw moeten worden berekend, in plaats van oude waarden weer te geven als metingen van het gewijzigde circuit. In History worden de identiteit van circuit/instellingen, de backend, het tijdstip en de uitkomst vastgelegd. Als u een eerdere acquisitie selecteert, selecteert u eerder bewijs; de oude schemaversie wordt daarmee niet hersteld als een ongedaanmakingsbewerking.

## Resultaten opslaan en delen
{: #save-and-share-results}

Sla de tekening op om het circuit, de modellen, configuraties en acquisities te bewaren. TinyCAD gebruikt automatisch **`.dzn`** wanneer een tekening simulatiecomponenten, instellingen of resultaten bevat. **Save without results** behoudt de simulatiedefinities en vastgelegde scalaire/metagegevens uit rapporten, maar laat de numerieke golfvormarrays weg; voor grafieken die deze arrays nodig hebben, is dan een nieuwe acquisitie vereist.

De hoeveelheid bewaarde numerieke gegevens is beperkt tot 64 MiB per uitvoering en 256 MiB per tekening, met maximaal 1.000 uitvoeringen per configuratie. Lange onderzoeken met een kleine tijdstap kunnen deze limieten bereiken. Exporteer belangrijke grafieken en CSV-gegevens en verwijder resultaten die u niet meer nodig hebt. Sla modelbijlagen op bij de tekening, zodat de ontvanger uw lokale bestandspaden niet nodig heeft.

## Simulatietekeningen van `.dzn`
{: #dzn-simulation-drawings}
{: #dzn-simulation-drawings}

**`.dzn` is de gecomprimeerde tekeningindeling van TinyCAD, ondersteund vanaf TinyCAD v4.** Deze verpakt het schema, ingesloten symbolen, Simulation sheets, broninstellingen, gekoppelde modeltekst en eventuele bewaarde acquisities in één bestand op basis van ZIP. Numerieke golfvormgegevens worden efficiënt in de container opgeslagen, waaronder complexe AC-resultaten. U opent en slaat het bestand op via de gebruikelijke opdrachten **File → Open**, **Save** en **Save As**; handmatig uitpakken is niet nodig.

Gewone tekeningen gebruiken de XML-indeling **`.dsn`**. TinyCAD kiest automatisch `.dzn` wanneer er simulatie-inhoud aanwezig is, waaronder bronnen, probes, virtuele instrumenten, SPICE-attributen, massa met de naam `0`, Simulation sheets of resultaten. **Save without results** gebruikt nog steeds `.dzn` wanneer de simulatietconfiguratie behouden blijft: de grote golfvormarrays worden verwijderd, niet de experimentdefinities.

Gebruik **Save without results** voor een kleinere kopie om te delen wanneer de ontvanger de simulatie opnieuw kan uitvoeren. Bewaar de resultaten als u wilt dat de ontvanger uw acquisitie, metingen en enginegegevens kan bekijken zonder de simulatie opnieuw uit te voeren. Een opgeslagen acquisitie beschrijft het circuit op het moment waarop deze werd uitgevoerd; na een wijziging vervangt deze niet een nieuwe uitvoering.

TinyCAD v3 kan geen bestanden in de indeling `.dzn` openen. De extensie wijzigen in `.dsn` converteert de indeling niet en maakt nieuwe simulatierecords niet compatibel met v3. Bewaar een origineel exemplaar wanneer u een ontwerp uitwisselt met een oudere versie van TinyCAD. Een export van `.cir` is SPICE-tekst voor een simulator; deze verschilt van beide TinyCAD-tekeningindelingen.

## Verder met de referentie
{: #continue-with-the-reference}

- [Analyses en instellingen](../Simulation-Analyses/) — DC, transiënt, AC, ruis, overdrachtsfunctie en pool-nulpunten.
- [Bronnen, probes en virtuele instrumenten](../Simulation-Sources-and-Instruments/) — stimulussignalen, meetaansluitingen en belasting.
- [Grafieken, metingen en Circuit Explorer](../Simulation-Charts-and-Measurements/) — afstemming, sweeps, vereisten en onderzoeken.
- [Meegeleverde SPICE-modellen](../Bundled-SPICE-Models/) — een model zoeken, koppelen en aanpassen.
- [SPICE-modellen en netlistuitvoer](../SPICE-output/) — templates, modelbestanden en externe simulatie.
- [XSPICE- en digitale simulatie](../XSPICE/) — Desktop-modellen voor gebeurtenisgestuurde en gemengde signalen.
- [Probleemoplossing](../Simulation-Troubleshooting/) — problemen met connectiviteit, modellen en numerieke berekeningen opsporen.
- [Zelfstudies](../Simulation-Tutorials/) — de volledige bestaande SPICE- en XSPICE-cursussen met uitvoerbare tekeningen.

Raadpleeg de officiële [ngspice-documentatie](https://ngspice.sourceforge.io/docs.html), de [gebruikershandleiding in PDF](https://ngspice.sourceforge.io/docs/ngspice-manual.pdf) en de [HTML-handleiding](https://ngspice.sourceforge.io/docs/ngspice-html-manual/manual.xhtml) voor de eigen taal- en apparaatreferentie van de simulator. De handleiding beschrijft ngspice als geheel; TinyCAD biedt de hier beschreven ondersteunde geïntegreerde workflows, geen onbeperkte opdrachtprompt.
