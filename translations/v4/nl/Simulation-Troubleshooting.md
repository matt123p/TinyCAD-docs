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
| Aarde ontbreekt / zwevende schakeling | Sluit een voedingssymbool of label met de waarde **0** aan. Een afzonderlijk GND-label is niet automatisch knooppunt 0. Controleer retourverbindingen van bronnen en geïsoleerde deelschakelingen. |
| Componentmodel ontbreekt | Gebruik een bibliotheekcomponent met model of lever een sjabloon en model aan. Afbeeldingen van apparatuur zijn geen simulatiemodellen. |
| Attributen ontbreken of ongeldige penaansluiting | Controleer de SPICE-eigenschappen van de component en de werkelijke volgorde van de modelaansluitingen. Instantieoverschrijvingen kunnen de standaardwaarden wijzigen. |
| Model/include niet gevonden | Voeg modeltekst en afhankelijkheden toe aan het Simulation-blad met overeenkomende logische bestandsnamen. Een lokaal absoluut pad of web-URL wordt niet automatisch opgehaald. |
| Analysedirectieven in een component | Verwijder verouderde `.op`, `.tran`, `.ac`, `.end` en uitvoeringsbesturingstekst uit componentattributen. De geïntegreerde Simulation-sheet beheert de analyse-instellingen. |
| XSPICE-model niet beschikbaar in de browser | Open de tekening in Desktop om een nieuwe native uitvoering te starten. Opgeslagen resultaten kunnen nog steeds in de browser worden bekeken. |
| Ongeldige bron of bereik | Controleer golfvormvelden, oplopende PWL-tijden, begin-/eindwaarden, sweep-richting en positieve frequentie-/tijdwaarden. |

## Een resultaat is onjuist of de solver convergeert niet
{: #a-result-is-wrong-or-the-solver-does-not-converge}

**Controleer eerst de schakeling.** Een draad die voorbij een draadeind loopt of een ongebruikte aansluiting kan een onbedoelde verbinding veroorzaken. Controleer T-verbindingen, de werkelijke penaansluitingen, netlabels en verborgen voedingsbronnen. Een stroomprobe of meter die over een bron is geplaatst, kan kortsluiting veroorzaken. Gebruik de gegenereerde netlist om vast te stellen wat de simulator heeft ontvangen.

Controleer de oriëntatie en volgorde van de modellen: diodepolariteit, collector/basis/emitter van de BJT, voedingspennen van de opamp en de penaansluitingsvolgorde van de deelschakeling. Gebruik betekenisvolle, unieke referentieaanduidingen en controleer of de bronreferentie in een sweep-/ruis-/overdrachtsinstelling naar de bedoelde bron verwijst.

Controleer de DC-voorspanning met Operating Point voordat u AC onderzoekt. Lussen met ideale bronnen, zwevende knooppunten, abrupte ideale overgangen en onredelijke modelparameters kunnen een schakeling moeilijk of onmogelijk oplosbaar maken. Voeg fysisch onderbouwde weerstand of eindige flanktijden toe als die het werkelijke experiment beschrijven. Beperk een complexe schakeling tot het kleinste problematische deel voordat u numerieke opties wijzigt.

Controleer numerieke achtervoegsels: **1M in SPICE-tekst is 1 milli-eenheid, niet één mega-eenheid**; gebruik `1Meg` voor mega. Controleer temperatuur, DC-waarde van de bron en transiënte/AC-instellingen afzonderlijk. De transiënte amplitude van een bron wordt niet automatisch de kleine-signaal-AC-amplitude.

## De golfvorm lijkt onvolledig
{: #the-waveform-looks-incomplete}

- Vergroot de transiënte duur als het opstartgedrag nog niet is uitgevlakt of de vereiste cyclus buiten de uitvoeringsduur valt.
- Verklein de maximale stap om snelle flanken of smalle pulsen weer te geven. Zoomen in de weergave kan ontbrekende samples niet reconstrueren.
- Controleer de geselecteerde instelling, acquisitie, resultaatgrafiek, zichtbaarheid van de legenda, eenheden en asbereik.
- Gebruik voor AC voldoende punten rond een smalle resonantie en de juiste ingangs-/uitgangsverhouding.
- Als de uitvoering is gestopt of mislukt, controleer dan welke gegevens daadwerkelijk beschikbaar zijn; een gedeeltelijk spoor is geen voltooid experiment.

## Grafieken of probe-uitlezingen zijn verouderd
{: #charts-or-probe-readings-are-stale}

Als u bedrading, waarden, modeltekst of instellingen bewerkt, moet u opnieuw op **Run** klikken. Opgeslagen acquisities beschrijven hun oorspronkelijke invoer. Een geschiedenisselectie maakt wijzigingen in de tekening niet ongedaan. Een meegeleverde zelfstudie kan bij het openen een bewaard referentieresultaat tonen, voordat u zelf iets uitvoert.

Gebruik **Simulation → Show charts** of in Desktop **View → Show Charts** als het paneel verborgen is. Als u een automatische probegrafiek verwijdert, blijft deze verwijderd totdat u die expliciet opnieuw toevoegt. Een losgemaakt grafiekvenster keert terug naar het paneel wanneer u het sluit.

## Een meting is niet beschikbaar
{: #a-measurement-is-unavailable}

Controleer de signaalkoppeling, eenheid, het venster, de drempel en de expliciete begin-/eindniveaus. Voor timing zijn volledige overgangen/cycli nodig. Een uitvlakmeting moet eindigen binnen de opgegeven eindband. Voor de afsnijfrequentie zijn de gevraagde overgang en de versterkingsreferentie nodig; voor de bandbreedte zijn twee overgangen nodig. Een resonantie op de sweepgrens is niet vastgesteld. Niet-ondersteunde stroom-/vermogensvectoren van apparaten worden niet gegokt.

Een niet-beschikbare eis geldt niet als geslaagd. Exporteer de voorwaarden en foutstatus met studierapporten en houd niet-convergente tolerantiescenario's zichtbaar. Als een studie geen evalueerbare eisen heeft, is er geen opbrengstschatting.

## Een onderzoek opslaan en reproduceren
{: #saving-and-reproducing-an-investigation}

Bewaar de tekening, modelbijlagen, analyse-instellingen, broninstellingen, temperatuur en relevante acquisitie bij elkaar. Als u hebt opgeslagen zonder numerieke resultaten of deze hebt verwijderd om de bestandsgrootte te beperken, voer de simulatie dan opnieuw uit om de grafieken te herstellen. Bewaarde scalaire momentopnamen/rapportmomentopnamen kunnen de ontbrekende golfvormarrays niet reconstrueren.

In een reproduceerbaar rapport worden de modelaannames, de engine, het meetvenster en de voorwaarden vermeld. Vergelijk de resultaten met de [verwachte waarden van de zelfstudie](../Simulation-Tutorials/) en de officiële [ngspice-handleiding](https://ngspice.sourceforge.io/docs.html) wanneer u een probleem met de simulatortaal isoleert.
