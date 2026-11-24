---
layout: default
---
# Problemen met simulaties oplossen
{: #simulation-troubleshooting}

Lees de acquisitiestatus en diagnostische uitvoer voordat u instellingen wijzigt. Maak onderscheid tussen **een mislukte uitvoering**, **een geldige uitvoering met onverwacht gedrag** en **een meting die niet beschikbaar is voor het geselecteerde resultaat**. Hiervoor zijn verschillende controles nodig.

## De simulatie start niet
{: #the-simulation-will-not-start}

| Symptoom | Controle |
| --- | --- |
| Aarde ontbreekt / zwevend circuit | Sluit een voedingssymbool of label met de waarde **0** aan. Een afzonderlijk GND-label is niet automatisch knooppunt 0. Controleer retourpaden van bronnen en geïsoleerde subcircuits. |
| Componentmodel ontbreekt | Selecteer het symbool en controleer **SPICE**. Gebruik een bibliotheekonderdeel met een model of [koppel een meegeleverde of aangepaste definitie](../Bundled-SPICE-Models/). |
| Geen modellen komen overeen met de zoekopdracht | Wis de zoekopdracht of probeer een alias voor het onderdeel of een apparaatfamilie. Een SPICE Essentials-symbool toont alleen de geverifieerde modellen ervan. |
| Attributen ontbreken of pinmapping is ongeldig | Controleer de SPICE-eigenschappen van het component en de werkelijke aansluitvolgorde van het model. Instantiewijzigingen kunnen de standaardwaarden veranderen. |
| Model/include niet gevonden | Koppel modeltekst en de bijbehorende afhankelijkheden aan het Simulation-blad met overeenkomende logische bestandsnamen. Een lokaal absoluut pad of een web-URL wordt niet automatisch opgehaald. |
| Analyse-instructies in een component | Verwijder verouderde `.op`, `.tran`, `.ac`, `.end` en besturingstekst voor de uitvoering uit componentattributen. Het geïntegreerde Simulation-blad bevat de analyse-instellingen. |
| XSPICE-model niet beschikbaar in de browser | Open de tekening in Desktop voor een nieuwe native uitvoering. Opgeslagen resultaten bekijken in de browser blijft mogelijk. |
| Ongeldige bron of bereik | Controleer golfvormvelden, oplopende PWL-tijden, begin-/eindwaarden, sweep-richting en positieve frequentie-/tijdwaarden. |

## Een resultaat is onjuist of de solver convergeert niet
{: #a-result-is-wrong-or-the-solver-does-not-converge}

**Controleer eerst het circuit.** Een draad die voorbij het uiteinde van een andere draad loopt, of een ongebruikte socket, kan een onbedoelde verbinding veroorzaken. Controleer T-knooppunten, de werkelijke pinuiteinden, netlabels en verborgen voedingen. Een stroomprobe of meter die over een bron is geplaatst, kan kortsluiting veroorzaken. Gebruik de gegenereerde netlist om vast te stellen wat de simulator heeft ontvangen.

Controleer de oriëntatie en volgorde van modellen: diodepolariteit, BJT-collector/basis/emitter, voedingspinnen van de opamp en de pinvolgorde van subcircuits. Gebruik betekenisvolle, unieke referenties en controleer of de bronreferentie in een sweep-/ruis-/overdrachtsinstelling naar de bedoelde bron verwijst.

Controleer de DC-bias met Operating Point voordat u AC onderzoekt. Kringen met ideale bronnen, zwevende knooppunten, abrupte ideale overgangen en onredelijke modelparameters kunnen een circuit moeilijk of onmogelijk oplosbaar maken. Voeg fysisch onderbouwde weerstand of eindige flanktijden toe wanneer die de werkelijke proef beschrijven. Vereenvoudig een complex circuit tot het kleinste gedeelte dat problemen veroorzaakt voordat u numerieke opties wijzigt.

Controleer numerieke achtervoegsels: **1M in SPICE-tekst is 1 milli-eenheid, niet één mega-eenheid**; gebruik `1Meg` voor mega. Controleer temperatuur, DC-waarde van de bron en transiënt-/AC-instellingen afzonderlijk. De transiëntamplitude van een bron wordt niet automatisch de kleinsignaal-AC-amplitude.

## De golfvorm lijkt onvolledig
{: #the-waveform-looks-incomplete}

- Verleng de transiëntduur als de opstart nog niet is uitgedempt of de vereiste cyclus buiten de uitvoering valt.
- Verklein de maximale stap om snelle flanken of smalle pulsen op te lossen. Zoomen in de weergave kan ontbrekende samples niet reconstrueren.
- Controleer de geselecteerde instelling, acquisitie, resultaatgrafiek, zichtbaarheid van de legenda, eenheden en asbereik.
- Gebruik voor AC voldoende punten rond een smalle resonantie en de juiste ingangs-/uitgangsverhouding.
- Als de uitvoering is gestopt of mislukt, controleer dan welke gegevens werkelijk beschikbaar zijn; een gedeeltelijke trace is geen voltooide proef.

## Grafieken of probe-uitlezingen zijn verouderd
{: #charts-or-probe-readings-are-stale}

Wijzigingen aan bedrading, waarden, modeltekst of instellingen vereisen een nieuwe **Uitvoeren (Run)**. Opgeslagen acquisities beschrijven hun oorspronkelijke invoer. Een geschiedenisselectie maakt wijzigingen aan de tekening niet ongedaan. Een meegeleverde zelfstudie kan worden geopend met een bewaard referentieresultaat, voordat u zelf iets uitvoert.

Gebruik **Simulation → Grafieken weergeven (Show charts)**, of in Desktop **View → Grafieken weergeven (Show Charts)**, als het paneel verborgen is. Als u een automatische probegrafiek verwijdert, blijft deze verwijderd totdat u hem expliciet opnieuw toevoegt. Een losgemaakt grafiekvenster keert na sluiten terug naar het paneel.

## Een meting is niet beschikbaar
{: #a-measurement-is-unavailable}

Controleer de signaalkoppeling, eenheid, het venster, de drempel en de expliciete begin- en eindniveaus. Voor timing zijn volledige overgangen/cycli nodig. Een uitdemingsmeting moet eindigen binnen de opgegeven eindband. Voor afsnijding zijn de gevraagde overgang en de versterkingsreferentie nodig; voor bandbreedte zijn twee overgangen vereist. Een resonantie op de sweepgrens is niet opgelost. Niet-ondersteunde stroom-/vermogensvectoren van apparaten worden niet geraden.

Een niet-beschikbare eis geldt niet als geslaagd. Exporteer de voorwaarden en de foutstatus met onderzoeksrapporten en houd niet-convergerende tolerantiewaarden zichtbaar. Als een onderzoek geen evalueerbare eisen heeft, is er geen opbrengstschatting.

## Een onderzoek opslaan en reproduceren
{: #saving-and-reproducing-an-investigation}

Bewaar de tekening, modelbijlagen, analyse-instellingen, broninstellingen, temperatuur en relevante acquisitie bij elkaar. Als u hebt opgeslagen zonder numerieke resultaten, of die hebt verwijderd om de bestandsgrootte te verkleinen, voer de simulatie dan opnieuw uit om de grafieken te herstellen. Bewaarde scalaire momentopnamen/rapportmomentopnamen herstellen de ontbrekende golfvormarrays niet.

Een reproduceerbaar rapport vermeldt de modelaannames, de engine, het meetvenster en de voorwaarden. Vergelijk met de [verwachte waarden uit de zelfstudie](../Simulation-Tutorials/) en de officiële [ngspice-handleiding](https://ngspice.sourceforge.io/docs.html) wanneer u een probleem met de simulatortaal isoleert.
