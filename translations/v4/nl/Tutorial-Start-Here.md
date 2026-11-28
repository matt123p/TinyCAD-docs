---
layout: default
title: "Start here: how to use these tutorials"
---
# Begin hier: deze tutorials gebruiken
{: #start-here-how-to-use-these-tutorials}

[Inhoudsopgave](/v4/Simulation-Tutorials/) · [Volgende: je eerste SPICE-simulatie](/v4/SPICE-Tutorial-01/)

Deze tutorials combineren uitleg met schakelingen die je in TinyCAD kunt uitvoeren en wijzigen. **De voorbeelden zijn al meegeleverd met TinyCAD.** Je hoeft geen tutorial-ZIP te downloaden, geen tekening op schijf op te zoeken en geen afzonderlijk SPICE-programma te installeren om de lessen te volgen.

Begin met de SPICE-cursus als simulatie nieuw voor je is. Die begint met spanning, stroom en eenvoudige schakelingen en behandelt vervolgens golfvormen, filters, versterkers en ontwerponderzoek. De afzonderlijke XSPICE-cursus behandelt eventgestuurde logica en gemengde-signaalsimulatie. Gebruik **TinyCAD Desktop** voor die cursus; de browserengine bevat geen XSPICE.

## De meegeleverde voorbeelden vinden en openen
{: #find-and-open-the-bundled-examples}

1. Open TinyCAD en zoek naar **Voorbeeld openen** rechts in de titelbalk van de browser, of **Bestand → Voorbeeld openen** in Desktop. Dit heeft een pictogram van een geopende map. Hiermee wordt de voorbeeldbrowser geopend.
2. Kies **SPICE-tutorial** voor de analoge lessen, of **XSPICE- en digitale tutorial** voor de digitale lessen. De groepen staan ook in het navigatiegebied van de browser.
3. Selecteer in de lijst **Tekeningen** van de groep het voorbeeld dat in de les wordt genoemd. Selecteer voor je eerste experiment **divider** in **SPICE-tutorial**.
4. Lees de beschrijving en bekijk het schakelingvoorbeeld. Als je het voorbeeld selecteert, worden de details weergegeven; je tekening wordt er nog niet door vervangen.
5. Kies onderaan de browser **Tekening openen**. TinyCAD opent een bewerkbare kopie van het voorbeeld. Als je niet-opgeslagen werk hebt, behandel dan eerst de vraag om op te slaan.

De korte instructie **Voorbeeld openen → SPICE-tutorial → divider → Tekening openen** verwijst naar dezelfde stappen. Een naam als **divider**, **rc-ac** of **logic-counter** is de naam van het voorbeeld in deze browser, niet een bestandsnaam die je moet opzoeken.

Gebruik **Groepen en voorbeelden zoeken** om een voorbeeld op naam te vinden. Als een filter verbergt wat je zoekt, wis dan de zoekopdracht en gebruik **Alle groepen** om terug te keren naar de lijst met groepen. **Tekening openen** wordt beschikbaar nadat je een voorbeeld hebt geselecteerd.
De vermelding **Begin hier — de tutorials gebruiken** toont ook deze handleiding en opent hetzelfde eerste divider-circuit.

Bekijk [een divider openen, uitvoeren en wijzigen](/v4/videos/simulation-tutorials/spice/first-run.mp4) voor een walkthrough met bijschriften van deze stappen en je eerste twee meetresultaten.

## Een les volgen naast de bijbehorende schakeling
{: #follow-a-lesson-alongside-its-circuit}

Houd het hoofdstuk beschikbaar in je handleiding of Markdown-viewer terwijl je in TinyCAD werkt. De voorbeeldbrowser toont ook de bijbehorende lesbeschrijving.
Elk hoofdstuk begint met de namen van de ingesloten voorbeelden die erin worden gebruikt. Sommige hoofdstukken gebruiken er meerdere: het hoofdstuk over de signaalgenerator bevat bijvoorbeeld afzonderlijke bronvoorbeelden, zodat je één golfvorm tegelijk kunt bestuderen.

Gebruik deze werkwijze voor elk experiment:

1. **Lees de vraag.** Bepaal wat je onderzoekt: een gelijkspanning, oplaadtijd, afsnijfrequentie, logische toestand of een andere grootheid.
2. **Bekijk de schakeling.** Zoek de bron, aarde, componentwaarden en benoemde signalen. Labels zoals IN en OUT geven elektrische knooppunten aan; referenties zoals R1 en C1 geven componenten aan.
3. **Controleer de opgeslagen instellingen.** Selecteer het blad **Simulation** en bekijk **Setup**. De voorbeelden bevatten al de analyse-instellingen en modellen die voor de les nodig zijn.
4. **Voorspel het resultaat** aan de hand van de uitleg of vergelijking in het hoofdstuk.
5. **Kies Uitvoeren (Run)** en vergelijk vervolgens de nieuwe meetresultaten met de verwachte waarden en grafieken. Bekijk zowel de getallen als de vorm van de curve.
6. **Wijzig één ding** zoals voorgesteld in de les, voorspel het effect en voer de simulatie opnieuw uit. Noteer welke instelling je hebt gewijzigd en wat er gebeurde.

Kies na het openen van een voorbeeld **Uitleg** in de titelbalk van de browser, of **Beeld → Uitleg weergeven** in Desktop om de instructies naast de tekening te houden. Het uitlegvenster staat naast de simulatiegrafieken en kan onafhankelijk daarvan worden vergroot/verkleind of gesloten. Kies opnieuw **Uitleg** in de titelbalk van de browser, of **Beeld → Uitleg weergeven** in Desktop om het venster weer te openen.

Het pictogram in de werkbalk dat op een puls lijkt, heeft de zweeftekst **Simulation**. Open het menu van dat pictogram telkens wanneer een les **Simulation → Grafieken weergeven** of **Simulation → SPICE-componenten** vermeldt. Het **Simulation-blad** is een afzonderlijk tabblad in de tekening; het bevat de instellingen en resultatenweergaven van het experiment.

![TinyCAD met het eerste divider-circuit en het simulatiegrafiekenvenster](/v4/Images/simulation-tutorials/spice/tinycad-first-run.png)

Deze schermafbeelding van de toepassing toont de geopende divider, met de bladtabbladen onder de schakeling en het grafiekenvenster rechts. De belangrijkste beginpunten zijn de schakeling, het Simulation-blad en **Run**.

## De verwachte uitvoer begrijpen
{: #understand-the-expected-outputs}

Schakelingsafbeeldingen tonen de opstelling en aansluitingen waar je op moet letten. Resultaatgrafieken tonen referentiegegevens die door de solver zijn berekend. Schermafbeeldingen van de toepassing tonen waar je in TinyCAD moet werken. De grootte van je venster, zoomfactor en grafiekkleuren kunnen verschillen; vergelijk de circuitwaarden, signalen, eenheden en analyse-instellingen.

Bij het ongewijzigde voorbeeld **divider** is de bron 5 V en zijn beide weerstanden 1 kΩ. Verwacht na een bedrijfspuntanalyse IN = **5 V**, OUT = **2,5 V** en bronstroom `v1#branch` = **−2,5 mA**. Een bedrijfspunt heeft één waarde per signaal en levert dus geen tijdsafhankelijke golfvorm op. In de eerste les worden het stroomteken en de berekening van de spanningsdeler uitgelegd.

De tekeningen bevatten bewaarde referentieresultaten, zodat resultaten mogelijk al zichtbaar zijn voordat je op **Run** drukt. Dit zijn opgeslagen resultaten van een eerdere uitvoering. Voer de simulatie na het bewerken van de schakeling of de instellingen opnieuw uit en bekijk de nieuwe meetresultaten. Kleine numerieke verschillen zijn normaal; een groot verschil is reden om de componentwaarden, modelaannames, eenheden en meetvensters te controleren.

## Experimenten bewaren en terugkeren naar het origineel
{: #keep-experiments-and-return-to-the-original}

Ingesloten voorbeelden worden geopend als bewerkbare kopieën. Gebruik **Opslaan als** om je werk onder een betekenisvolle naam op te slaan, bijvoorbeeld een divider met een andere onderste weerstand. Als je je kopie opslaat, wordt het meegeleverde origineel niet gewijzigd.

Als je een experiment opnieuw wilt instellen, open je het benoemde voorbeeld opnieuw via **Voorbeeld openen**. Sla eventuele wijzigingen die je wilt behouden op wanneer daarom wordt gevraagd. Hiermee worden de oorspronkelijke schakeling, instellingen en bewaarde referentieresultaten van het voorbeeld hersteld. Gebruik dezelfde werkwijze wanneer een hoofdstuk overschakelt naar een ander voorbeeld.

Normaal opslaan kan de verkregen resultaten bij de tekening bewaren. **Opslaan zonder resultaten** bewaart de schakeling en instellingen, maar laat de opgeslagen resultaten weg; voer de simulatie opnieuw uit wanneer je die later nodig hebt.

## Je route door het materiaal kiezen
{: #choose-your-route-through-the-material}

| Je doel | Waar je begint |
| --- | --- |
| Simulatie vanaf het begin leren | [SPICE-hoofdstuk 1](/v4/SPICE-Tutorial-01/) en werk daarna de hoofdstukken op volgorde door |
| Begrijpen hoe TinyCAD zijn engines, symbolen en bedieningselementen implementeert | [Hoe TinyCAD SPICE implementeert](/v4/SPICE-Tutorial-11/) |
| Een ingangsgolfvorm kiezen | [Signaalgeneratoren](/v4/SPICE-Tutorial-03/) |
| De opnieuw opgebouwde AMP.DSN-versterker onderzoeken | [Versterkerinstelling](/v4/SPICE-Tutorial-07/), gevolgd door versterking en vermogen |
| Eventgestuurde digitale simulatie leren | [XSPICE-hoofdstuk 1](/v4/XSPICE-Tutorial-01/), met Desktop |

De links bovenaan elk hoofdstuk brengen je terug naar de inhoudsopgave of naar de volgende les. Je kunt op elk moment teruggaan naar een eerder voorbeeld. Als een experiment mislukt, lees dan de weergave **Diagnostiek** en vergelijk die met een zojuist geopend ingesloten voorbeeld voordat je verdere wijzigingen aanbrengt.

## Huidige bedieningselementen van Circuit Explorer
{: #current-circuit-explorer-controls}

Selecteer het Simulation-blad, open **Setup** en blader naar **Circuit Explorer**. Gebruik **Hulpmiddelen toevoegen** om Measurements, Tune / sweep, Requirements, DC overlay of Analysis lab toe te voegen. Geconfigureerde hulpmiddelen verschijnen links; het grafiekenvenster blijft een afzonderlijke weergave. **Run** en **Stop** staan in de hoofdwerkbalk wanneer een Simulation-blad is geselecteerd. Zie [Grafieken, metingen en Circuit Explorer](/v4/Simulation-Charts-and-Measurements/) voor de huidige referentie.
