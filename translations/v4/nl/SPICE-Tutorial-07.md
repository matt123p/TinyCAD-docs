---
layout: default
title: 7. Rebuilding AMP.DSN and checking its bias
---
# 7. AMP.DSN opnieuw opbouwen en de bias controleren
{: #rebuilding-ampdsn-and-checking-its-bias}

[Vorige](/v4/SPICE-Tutorial-06/) · [Inhoud](/v4/Simulation-Tutorials/) · [Volgende](/v4/SPICE-Tutorial-08/)

De voorbeelden in dit hoofdstuk worden meegeleverd met TinyCAD. Kies **Voorbeeld openen → SPICE-tutorial**, selecteer het genoemde voorbeeld en kies vervolgens **Tekening openen**. Downloaden is niet nodig.

Open **amp-bias**. Hiermee wordt de topologie opnieuw opgebouwd van
`D:\Projects\TinyCAD\examples\AMP.DSN`, getiteld **Transistorversterker** en
in het origineel toegeschreven aan Matt Pyne, 1995. Het gebruikt componenten uit de
SPICE-basisonderdelenbibliotheek van TinyCAD en configureerbare simulatiebronnen.

![Opnieuw opgebouwde AMP.DSN met simulatiecomponenten](/v4/Images/simulation-tutorials/spice/amp-bias-circuit.png)

## Wat behouden is en wat gemodelleerd werd
{: #what-was-preserved-and-what-was-modelled}

| Oorspronkelijk onderdeel | Opnieuw opgebouwd onderdeel en functie |
| --- | --- |
| R1, annotatie 470 Ω, 0,5 W | 470 Ω emitterweerstand van Q2; de belastbaarheid is geen gesimuleerde thermische limiet |
| R2, 1 kΩ | Collectorweerstand van Q1 |
| R3, 100 kΩ; R4, 10 kΩ | Basis-biasdeler van Q1 |
| R5, 220 Ω | Emitterdegeneratieweerstand van Q1 |
| R6, 10 kΩ logaritmische potentiometer | 10 kΩ-potentiometer, elektrische verdeling `Wiper = 0.5` |
| C1, 100 µF; C2, 470 µF | Ideale ingangs- en uitgangskoppelcondensatoren |
| Q1, ZTX650; Q2, BC140 | Beide gebruiken het ingebedde generieke `TC_NPN`-model |
| J1 phono-ingang | Configureerbare bron VIN, gerefereerd aan knooppunt 0 |
| T1, luidspreker van 8 Ω | RL = 8 Ω, een resistieve elektrische belasting |
| 12 V / 0 V-rails | Onafhankelijke 12 V-bron VCC en SPICE-knooppunt 0 |

De oorspronkelijke logaritmische mechanische tapseigenschap specificeert niet voor elke
aspositie een unieke weerstandsverdeling. Hier betekent 0,5 een **elektrische** verdeling van 5 kΩ/5 kΩ,
niet een bewering over de halverwege-positie van de oorspronkelijke knop. De bronweerstand
van VIN is ideaal. Het luidsprekermodel houdt geen rekening met inductantie, resonantie en akoestisch
rendement; er kan geen geluidsdruk uit worden voorspeld.

Beide transistorinstanties bevatten het bibliotheekmodel:

```spice
.model TC_NPN NPN(Is=1e-14 Bf=200 Vaf=100 Cje=10p Cjc=5p Tf=500p)
```

Dit zijn illustratieve modelparameters, geen fabrikantmodellen voor ZTX650 of
BC140. Het gebruik ervan is bewust gekozen en zichtbaar in de SPICE-eigenschappen van het component.
Voor exacte prestaties van die oorspronkelijke componenten zijn gevalideerde componentmodellen nodig en,
voor vergelijking met hardware, informatie over parasitaire effecten en thermische eigenschappen.

## De twee trappen begrijpen
{: #understand-the-two-stages}

Q1 is een gemeenschappelijke-emittertrap. De collectorspanning daalt wanneer de collectorstroom
toeneemt, waardoor de trap het signaal inverteert. R5 zorgt voor emitterdegeneratie: negatieve terugkoppeling
vermindert de gevoeligheid van de versterking en verbetert de lineariteit. R2 zet stroomveranderingen
om in veranderingen van de collectorspanning.

Q2 is een emittervolger. De collector is verbonden met VCC en de emitter stuurt R1 aan en, via C2,
de luidsprekerbelasting. De trap levert stroomversterking in plaats van nog een grote spanningsversterking. C1 en C2 scheiden de DC-werkpunten tussen de trappen en de externe aansluitingen.

## Voer eerst Operating Point uit, voordat u een signaal toepast
{: #run-operating-point-before-applying-a-signal}

De referentiewaarden bij 27°C zijn:

| Grootheid | Referentiewaarde |
| --- | --- |
| BASE, basis van Q1 | 1.0235 V |
| Emitter van Q1, tussen Q1 en R5 | 0.3582 V |
| COLLECTOR, collector van Q1 / basis van Q2 | 10.2800 V |
| EMITTER, emitter van Q2 | 9.5476 V |
| OUT, na C2 | 0 V |
| Door VCC geleverde stroom | 22.044 mA |
| Voedingsvermogen | 264.533 mW |

OUT is bij DC nul omdat C2 de DC-spanning op de emitter blokkeert en RL de uitgang
met aarde verbindt. Een nuluitgangsbias betekent dus niet dat de versterker spanningsloos is. De emitterstroom van Q1 is ongeveer `0.3582 / 220 = 1.628 mA`;
de ruststroom door de emitterweerstand van Q2 is `9.5476 / 470 = 20.31 mA`.

De bias van de uitgangstrap is hoog in verhouding tot de 12 V-voedingsrail en de ruststroom
is bescheiden voor 8 Ω. Dat wijst al op asymmetrische beperkingen van de signaaluitslag.
De volgende twee hoofdstukken toetsen deze voorspelling, in plaats van aan te nemen dat een schakeling
die een versterker wordt genoemd een hoge spanningsversterking of een groot audiovermogen moet hebben.

## Lescircuits downloaden
{: #download-the-lesson-circuits}

Dezelfde voorbeelden zijn al beschikbaar via **Voorbeeld openen**. Download voor een zelfstandige kopie een `.dzn`-tekening en gebruik **Bestand → Openen** in TinyCAD. De begeleidende `.cir` is SPICE-tekst om te bekijken of te gebruiken in een compatibele externe simulator, geen TinyCAD-tekening. Voor nieuwe simulaties van XSPICE-schakelingen is Desktop vereist.

| Voorbeeld | Tekening | Netlijst |
| --- | --- | --- |
| amp-bias | [TinyCAD-tekening](/v4/examples/simulation-tutorials/spice/amp-bias.dzn) | [SPICE-tekst](/v4/examples/simulation-tutorials/spice/amp-bias.cir) |
