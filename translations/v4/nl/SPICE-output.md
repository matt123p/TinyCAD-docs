---
layout: default
---
# SPICE-uitvoer
{: #spice-output}

SPICE-ondersteuning in TinyCAD v4 werkt hetzelfde als in v3: TinyCAD genereert op basis van uw schema een SPICE-tekstbestand met behulp van sjablonen op symboolniveau.

## Waarvoor SPICE wordt gebruikt
{: #what-spice-is-used-for}

SPICE (Simulation Program with Integrated Circuit Emphasis) is een familie van circuit-simulatieformaten en -hulpmiddelen. Met een SPICE-simulator kunt u het gedrag van een circuit testen voordat u de hardware bouwt, bijvoorbeeld:

- DC-werkpunten en voorspanningscondities
- Transiëntgedrag (tijddomein)
- AC-/frequentierespons
- Parameter-sweeps en 'wat-als'-analyses

TinyCAD voert de simulatie niet zelf uit. In plaats daarvan exporteert het een SPICE-bestand dat u uitvoert met de SPICE-engine van uw keuze.

## SPICE-bestandsindeling en algemene opbouw
{: #spice-file-format-and-general-layout}

SPICE-engines verschillen enigszins van elkaar, maar de meeste SPICE-bestanden hebben dezelfde algemene opbouw:

1. Optionele koptekst/opmerkingen
2. Inclusies en definities van apparaten/modellen
3. Regels met circuitelementen (één regel per componentinstantie)
4. Analyse-/besturingsopdrachten
5. Eindmarkering (meestal `.end`)

In de praktijk betekent dit dat uw geëxporteerde bestand meestal het volgende bevat:

- Tekst voor de 'Setup' bovenaan (modellen, inclusies, opties)
- Een hoofdgedeelte met gegenereerde componenten en de bijbehorende netverbindingen
- Tekst voor 'Run' of analyse onderaan

De SPICE-generatie van TinyCAD is ontworpen om rechtstreeks op deze indeling aan te sluiten.

## Hoe TinyCAD SPICE genereert
{: #how-tinycad-generates-spice}

TinyCAD gebruikt een systeem met tekensjablonen voor elk SPICE-compatibel symbool. Elk symbool kan het volgende definiëren:

- **Modelsjabloon**: wordt ingevoegd voor elke instantie van die component in het schema
- **Proloogsjabloon**: wordt bovenaan het bestand ingevoegd, eenmaal per componenttype
- **Epilog sjabloon**: wordt onderaan het bestand ingevoegd, eenmaal per componenttype

Open deze velden vanuit de symbooleigenschappen in de symboolbibliotheekeditor (tabblad SPICE).

### Sjabloonuitbreiding
{: #template-expansion}

Sjablonen kunnen het volgende bevatten:

- `%(pin)` voor vervangingen van pinnen/netten
- `$(attribute)` voor vervangingen van symboolkenmerken

Voorbeeld van een modelsjabloon voor een weerstand:

`R$(refnum) %(1) %(2) $(NAME)`

Als de referentie van de weerstandsinstantie `R3` is, deze is aangesloten tussen netten `7` en `9`, en `NAME=10K`, schrijft TinyCAD:

`R3 7 9 10K`

`refnum` wordt speciaal behandeld, zodat de SPICE-apparaatletter in het sjabloon behouden blijft.

### Volgorde en ontdubbeling van proloog/epiloog
{: #prologueepilogue-order-and-deduplication}

- Identieke prologen en epilogen worden ontdubbeld
- Elk heeft een prioriteit (van `0` tot `9`)
- Prologen worden geschreven van lage naar hoge prioriteit
- Epilogen worden zo geschreven dat prioriteit `0` als laatste in het bestand verschijnt

Hierdoor kunt u bepalen waar setup- en analysetekst verschijnt.

## Vereiste schemainstellingen voor SPICE-export
{: #required-schematic-setup-for-spice-export}

Om een geldig SPICE-bestand te genereren, moet uw tekening het volgende bevatten:

- SPICE-compatibele symbolen voor het te simuleren circuit
- Een speciaal **RUN**-symbool
- Een net met de naam **0** (SPICE-aarde)

### RUN-symbool
{: #run-symbol}

Het RUN-symbool is een normaal TinyCAD-symbool zonder pinnen en zonder modelsjabloon, maar met proloog-/epiloogtekst die wordt gebruikt om besturingsinstructies voor de simulatie in te voegen.

Stel de proloog- en epiloogprioriteiten van RUN in op `0`, zodat de tekst helemaal aan het begin en helemaal aan het einde van het gegenereerde bestand verschijnt.

Gebruik één RUN-symbool per simulatiecircuit.

### Het net `0`
{: #the-0-net}

SPICE vereist dat aarde net `0` is.

Maak dit in TinyCAD door een verbinding de naam `0` te geven, met behulp van een van de volgende mogelijkheden:

- Een netlabel, of
- Een voedingssymbool met de waarde `0`

## De SPICE-uitvoer maken
{: #creating-the-spice-output}

Nadat de symbolen, de RUN-node en het net `0` zijn geplaatst, genereert u de SPICE-uitvoer met de SPICE-exportopdracht in de interface van TinyCAD.

De exportopties zijn bewust minimaal gehouden, omdat het gedrag tijdens uitvoering naar verwachting wordt geregeld via de sjablonen van uw RUN-symbool.

## Geavanceerde voorwaardelijke sjablonen
{: #advanced-template-conditionals}

Voor geavanceerdere symbolen worden voorwaardelijke sjablooninstructies ondersteund (hetzelfde gedrag als in v3), waaronder tests voor:

- Kenmerk aanwezig/niet aanwezig
- Kenmerk leeg/niet leeg
- Pin aangesloten/niet aangesloten

Voorwaardelijke syntaxis:

- `?( defined(attributename), true string, false string )`
- `?( not_defined(attributename), true string, false string )`
- `?( empty(attributename), true string, false string )`
- `?( not_empty(attributename), true string, false string )`
- `?( connected(pinnumber), true string, false string )`
- `?( not_connected(pinnumber), true string, false string )`

Voorwaardelijke instructies kunnen genest worden.

- Terug naar [Geavanceerd](../Advanced/)
- Terug naar [Inhoudsopgave v4](../CONTENTS/)
