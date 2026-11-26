---
layout: default
title: 2. Measuring DC voltage, current and power
---
# 2. Gelijkspanning, stroom en vermogen meten
{: #measuring-dc-voltage-current-and-power}

[Vorige](/v4/SPICE-Tutorial-01/) · [Inhoud](/v4/Simulation-Tutorials/) · [Volgende](/v4/SPICE-Tutorial-03/)

De voorbeelden in dit hoofdstuk worden meegeleverd met TinyCAD. Kies **Open Example → SPICE tutorial**, selecteer het genoemde voorbeeld en kies vervolgens **Open Drawing**. Downloaden is niet nodig.

Open **divider**. Behoud de nominale bron van 5 V en de twee
weerstanden van 1 kΩ. Het doel is onderscheid te maken tussen knooppuntspanning, spanning over een component,
stroom erdoorheen en het vermogen dat het component opneemt.

## Spanningsmetingen
{: #voltage-measurements}

`out` betekent de spanning van OUT ten opzichte van knooppunt 0. De spanning over R1 is
`VIN − VOUT`, die hier eveneens 2,5 V bedraagt. Dit is toevallig zo: na wijziging van
R2 in 2 kΩ heeft R1 een spanning van 1,667 V, terwijl R2 3,333 V heeft.

Gebruik **Simulation → SPICE → Insert Probe** voor een knooppuntspanning. Een differentiële
probe meet de spanning op de positieve aansluiting min die op de negatieve aansluiting. Verbind de
positieve punt met IN en de negatieve punt met OUT om R1 te meten. Als u de punten omwisselt,
keert het resultaat om. Een differentiële probe is vooral handig wanneer geen van beide
aansluitingen geaard is, zoals bij een koppelcondensator of een bruguitgang.

## Stroommetingen
{: #current-measurements}

Gebruik een seriestroomprobe door een draad te onderbreken en de probe in het
stroompad te plaatsen. Deze wordt gemodelleerd als een spanningsbron van nul volt: er loopt stroom doorheen zonder
ideale spanningsval. Als u de probe in plaats daarvan over de voeding aansluit, wordt de
voeding kortgesloten. De positieve probestroom loopt van de positieve naar de negatieve aansluiting
van de probe. Stroom door brontakken, zoals `v1#branch`, is ook rechtstreeks beschikbaar.

In deze spanningsdeler loopt de stroom van V1 via R1 en R2 naar aarde. Door beide
weerstanden loopt 2,5 mA; de takstroom van V1 is −2,5 mA, omdat deze die stroom via zijn positieve aansluiting levert.

## Vermogen en een energiebalanscontrole
{: #power-and-an-energy-balance-check}

Gebruik de passieve tekenconventie: `P = V × I`, waarbij de stroom de aansluiting binnenkomt
waarop de spanning als positief is gedefinieerd. Positief vermogen wordt opgenomen; negatief vermogen
wordt geleverd.

| Component | Berekening | Nominaal resultaat |
| --- | --- | --- |
| R1 | `(2.5 V)² / 1 kΩ` | +6,25 mW |
| R2 | `(2.5 V)² / 1 kΩ` | +6,25 mW |
| V1 | `5 V × (−2.5 mA)` | −12,5 mW |
| Som | Voeding plus belastingen | 0 W |

Deze balans is een handig hulpmiddel bij het opsporen van fouten. Een factor 1000 wijst vaak op een
fout in de prefix. Een onjuist teken wijst vaak op een omgekeerde probeoriëntatie.
Een onverklaarde extra belasting kan duiden op een onbedoelde verbinding of een meterverbinding.

Met de bedieningselementen van **Measurements** in TinyCAD kunt u de spanning, stroom en het
vermogen van componenten selecteren wanneer het model deze ondersteunt. Een ontbrekende, ondersteunde stroomvector
wordt gemeld als niet beschikbaar; dit mag niet worden opgevat als nulverbruik.

## Sweep de voedingsspanning
{: #sweep-the-supply}

Open **dc-sweep**. De opgeslagen **DC sweep** gebruikt V1,
begint bij 0 V, stopt bij 10 V en verhoogt in stappen van 0,5 V. Voer de simulatie uit en plot OUT.

![Berekende DC-overdrachtskarakteristiek](/v4/Images/simulation-tutorials/spice/dc-sweep-results.png)

De horizontale as geeft de gesweepte bronwaarde weer, niet de tijd. Verwachte waarden zijn
0 V, 2,5 V en 5 V bij voedingsspanningen van respectievelijk 0 V, 5 V en 10 V. De helling is 0,5 V/V.
Deze test is handig om biasnetwerken en sensorinterfaces te controleren voordat
tijdafhankelijke stimuli worden toegevoegd.

## Belastingseffect onderzoeken
{: #investigate-loading}

Voeg een weerstand van 1 kΩ toe tussen OUT en aarde. R2 en de nieuwe belasting staan parallel,
dus hun equivalente weerstand is 500 Ω. De verwachte uitgangsspanning is nu
`5 × 500 / (1000 + 500) = 1.667 V`. Een spanningsdeler is geen ideale spanningsbron:
de uitgangsspanning verandert wanneer er stroom wordt geleverd.

Noteer voor een meetchecklist de knooppuntnamen, de referentierichting, de eenheden,
de broninstellingen en de analyse. Met die informatie kan een resultaat worden gereproduceerd en
kan een andere lezer onderscheid maken tussen een circuitwijziging en een wijziging in de plot.

## De lescircuits downloaden
{: #download-the-lesson-circuits}

Dezelfde voorbeelden zijn al beschikbaar via **Open Example**. Download voor een onafhankelijke kopie een `.dzn`-tekening en gebruik **File → Open** in TinyCAD. Het bijbehorende `.cir`-bestand is SPICE-tekst bedoeld voor inspectie of gebruik met een compatibele externe simulator, niet een TinyCAD-tekening. Voor nieuwe simulaties van XSPICE-circuits is Desktop vereist.

| Voorbeeld | Tekening | Netlist |
| --- | --- | --- |
| divider | [TinyCAD-tekening](/v4/examples/simulation-tutorials/spice/divider.dzn) | [SPICE-tekst](/v4/examples/simulation-tutorials/spice/divider.cir) |
