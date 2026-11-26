---
layout: default
title: 6. Diodes, rectification and ripple
---
# 6. Diodes, gelijkrichting en rimpel
{: #diodes-rectification-and-ripple}

[Vorige](/v4/SPICE-Tutorial-05/) · [Inhoudsopgave](/v4/Simulation-Tutorials/) · [Volgende](/v4/SPICE-Tutorial-07/)

De voorbeelden in dit hoofdstuk worden meegeleverd met TinyCAD. Kies **Voorbeeld openen (Open Example) → SPICE-tutorial (SPICE tutorial)**, selecteer het genoemde voorbeeld en kies vervolgens **Tekening openen (Open Drawing)**. Downloaden is niet nodig.

Open **rectifier**. Een sinusspanning van 5 V piek en 50 Hz stuurt een
diode, een buffercondensator van 100 µF en een belasting van 1 kΩ aan. Voer de opgeslagen transientanalyse van 200 ms uit en plot IN en OUT.


## Volg de stroom gedurende een cyclus
{: #follow-the-current-through-a-cycle}

Wanneer de ingangsspanning voldoende boven de condensatorspanning stijgt, gaat de diode geleiden en wordt de lading van de condensator aangevuld. Na de ingangspiek schakelt de diode uit. De condensator voedt dan de belasting en de spanning daalt totdat de volgende oplaadperiode begint. Negatieve halve ingangscycli maken de condensator niet negatief, omdat de diode bij deze spanningen de stroom in sperrichting blokkeert.

De diode is geen ideale schakelaar met een vaste spanningsval van 0,7 V. Het ingebouwde `TC_D`-model bevat een niet-lineaire stroom-spanningswet en serieweerstand. De doorlaatspanning verandert met de stroom, de temperatuur en de modelparameters. De tutorial gebruikt een generiek model; dit is geen garantie voor een gekochte diode.

## Meet een uitgedempt tijdsvenster
{: #measure-a-settled-window}

De eerste cycli bevatten het opstartgedrag. Gebruik voor een herhaalbare rimpelmeting **From = 160 ms** en **To = 200 ms**. De referentiesimulatie geeft:

| Meting op OUT | Benaderd resultaat |
| --- | --- |
| Gemiddelde spanning | 3.90 V |
| Minimum | 3.56 V |
| Maximum | 4.24 V |
| Rimpel van piek tot piek | 0.684 V |
| Totale RMS-waarde | 3.908 V |

Het gemiddelde is het DC-niveau. De totale RMS-waarde omvat dat niveau én de rimpel. De **RMS-waarde van de rimpel** wordt berekend nadat het gemiddelde is verwijderd; het is dus een andere grootheid. Een hoge totale RMS-waarde betekent niet dat de AC-rimpel groot is.

De ruwe schatting `ΔV ≈ Iload / (f × C)` komt uit op ongeveer 0.78 V bij 3.9 mA, 50 Hz en 100 µF. Het verschil met de gesimuleerde 0.684 V is leerzaam: de schatting gaat uit van een vrijwel constante belastingsstroom en direct opladen, terwijl de stroom door de weerstand verandert en de diode gedurende een eindige periode geleidt.

## Video: uitgedempte gelijkrichterrimpel meten
{: #video-measuring-settled-rectifier-ripple}

Een meetvenster van 160–200 ms instellen en de gemiddelde spanning vergelijken met de rimpel van piek tot piek.

{% include video-player.html src="/v4/videos/simulation-tutorials/spice/rectifier-ripple.mp4" poster="/v4/videos/simulation-tutorials/spice/rectifier-ripple.jpg" caption="De uitgedempte gelijkrichterrimpel meten." %}

[Video bekijken of downloaden](/v4/videos/simulation-tutorials/spice/rectifier-ripple.mp4).

### Schakeling en referentieresultaten
{: #circuit-and-reference-results}

![Halvegelijkrichter en buffercondensator](/v4/Images/simulation-tutorials/spice/rectifier-circuit.png)

![Berekende opstart- en stationaire rimpel](/v4/Images/simulation-tutorials/spice/rectifier-results.png)

## Experimenten die de afwegingen laten zien
{: #experiments-that-reveal-the-trade-offs}

Verdubbel C1 tot 200 µF. De rimpel zou moeten afnemen, maar het opladen gebeurt in kortere, meer geconcentreerde stroompulsen. Halveer de belastingsweerstand tot 500 Ω: de belasting trekt meer stroom, de gemiddelde spanning daalt en de rimpel neemt toe. Vraag voor het bekijken van de diodestroom de ondersteunde componentstroommeting aan of plaats een stroomprobe in serie in het diodepad. Verlaag de maximale tijdstap om te controleren of korte geleidingspieken goed worden weergegeven.

De bron is hier ideaal. Een praktische transformator, generator of voeding heeft een impedantie die de laadstroom en spanningsval verandert. Voeg een serieweerstand toe om dat effect te onderzoeken. Componentvermogen en piekstroom zijn nuttige simulatieresultaten, maar dit eenvoudige model voorspelt niet automatisch de opwarming van de condensator, de piekstroomwaarden of de junctietemperatuur van de diode.

## Waarom AC-analyse niet de juiste eerste test is
{: #why-ac-analysis-is-not-the-right-first-test}

Het belangrijkste gedrag is een grote niet-lineaire uitslag waarbij de geleiding in- en uitschakelt. Een kleinsignaal-AC-analyse rond één voorspanningspunt kan gelijkrichting, opstartgedrag of rimpel niet reproduceren. Gebruik daarvoor transientanalyse. DC-sweeps zijn daarentegen nuttig om de statische stroom-spanningskarakteristiek van een diode te plotten. Kies de analyse op basis van de fysische vraag, niet op basis van de plot die het eenvoudigst te maken is.

## De lescircuits downloaden
{: #download-the-lesson-circuits}

Dezelfde voorbeelden zijn al beschikbaar via **Voorbeeld openen (Open Example)**. Download voor een onafhankelijke kopie een `.dzn`-tekening en gebruik **Bestand → Openen (File → Open)** in TinyCAD. Het bijbehorende `.cir`-bestand is SPICE-tekst om te bekijken of te gebruiken in een compatibele externe simulator, geen TinyCAD-tekening. Voor nieuwe simulaties van XSPICE-schakelingen is Desktop vereist.

| Voorbeeld | Tekening | Netlist |
| --- | --- | --- |
| rectifier | [TinyCAD-tekening](/v4/examples/simulation-tutorials/spice/rectifier.dzn) | [SPICE-tekst](/v4/examples/simulation-tutorials/spice/rectifier.cir) |
