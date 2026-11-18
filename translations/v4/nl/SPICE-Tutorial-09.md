---
layout: default
title: 9. Amplifier waveform, clipping and power usage
---
# 9. Versterkergolfvorm, clipping en stroomverbruik
{: #amplifier-waveform-clipping-and-power-usage}

[Vorige](/v4/SPICE-Tutorial-08/) · [Inhoudsopgave](/v4/Simulation-Tutorials/) · [Volgende](/v4/SPICE-Tutorial-10/)

De voorbeelden in dit hoofdstuk worden meegeleverd met TinyCAD. Kies **Voorbeeld openen (Open Example) → SPICE tutorial**, selecteer het genoemde voorbeeld en kies vervolgens **Tekening openen (Open Drawing)**. Downloaden is niet nodig.

Open **amp-small-signal**. VIN levert een
sinus van 10 mV piek bij 1 kHz. De transiënt duurt 12 ms, met een maximale stapgrootte van 2 µs.
Vergelijk IN en OUT en meet vervolgens de laatste vier perioden, van 8 ms tot 12 ms.

![Gemeten golfvormen van de kleinsignaalversterker](/v4/images/simulation-tutorials/spice/amp-small-signal-results.png)

Het AC-resultaat voorspelt ongeveer 8,92 mV piek op OUT, in tegenfase met de ingang.
De transiënt levert gedurende het meetvenster ongeveer −8,87 tot +8,99 mV op,
met **6,304 mV RMS**. Het kleine verschil tussen de positieve en negatieve pieken
weerspiegelt het niet-lineaire model en resterende transiënte effecten.

## Bereken het belastingsvermogen en het voedingsverbruik
{: #calculate-load-power-and-supply-consumption}

Voor de zuiver ohmse RL is het momentane vermogen `pL(t) = vOUT(t)² / 8`.
Het gemiddelde belastingsvermogen is daarom gelijk aan `VOUT,RMS² / 8`, inclusief eventuele gelijkstroomcomponent
in het geselecteerde interval. Bij het kleine ingangssignaal is dit ongeveer **4,97 µW**.

Het geleverde voedingsvermogen is `−12 × mean(i(VCC))`, ongeveer **264,61 mW**.
Het grootste deel van het vermogen wordt verbruikt in het gepolariseerde circuit, zelfs wanneer het audiosignaal heel klein is.
De verhouding tussen belastingsvermogen en voedingsvermogen bedraagt bij deze ingang slechts ongeveer **0,00188%**.
Dit is het elektrische rendement voor de gekozen systeemgrens en het gekozen venster, geen
geluidsrendement of algemene beoordeling van het circuit.

Voeg in TinyCAD vermogensmetingen toe voor de componenten VCC en RL en kies vervolgens **Gemiddelde (Mean)**,
met From/To ingesteld op 8 ms en 12 ms. Een voedingsbron heeft een negatief opgenomen
vermogen; neem het tegengestelde daarvan als het geleverde ingangsvermogen. De **Integraal (Integral)** van het vermogen geeft
de energie in joule. Een stroom- of vermogensgrootheid die voor een model niet beschikbaar is, mag niet
worden vervangen door een veronderstelde nul.

## Verhoog de ingang totdat de lineaire voorspelling niet meer klopt
{: #increase-input-until-the-linear-prediction-fails}

Open **amp-clipping**. Alleen de amplitude van VIN verandert,
naar 500 mV piek. Een lineaire extrapolatie zou voor OUT ongeveer 446 mV piek voorspellen,
in beide richtingen. De berekende golfvorm doet dat niet.

![Berekende asymmetrische uitgang bij groot signaal](/v4/images/simulation-tutorials/spice/amp-clipping-results.png)

In hetzelfde venster van 8–12 ms loopt de uitgang ongeveer van
**−0,162 tot +0,389 V**, met **0,2126 V RMS**. Het voedingsverbruik bedraagt ongeveer
**315,23 mW**; het totale ohmse belastingsvermogen is **5,65 mW**, wat neerkomt op ongeveer **1,79%**
elektrisch rendement gedurende dit venster. Het gemiddelde van de uitgang is in deze eindige acquisitie ongeveer
31 mV. Trek voor het AC-belastingsvermogen het gemiddelde af voordat u kwadrateert: gebruik de RMS-waarde van de rimpel, niet de totale RMS-waarde.

De emittervolger kan actief stroom leveren, maar het pad voor stroomafvoer
wordt beperkt door het biasnetwerk. De zeer lage belastingsweerstand maakt die
asymmetrie zichtbaar. Noem elk vlak ogend gebied niet zomaar “het raken van de voedingsrail”:
inspecteer EMITTER, COLLECTOR en de apparaatstromen om het mechanisme vast te stellen.

## Zorg dat de meting deugdelijk is
{: #make-the-measurement-defensible}

Gebruik volledige perioden, vermeld het tijdvenster en sluit het opstartgedrag uit als u de stationaire werking bestudeert.
Herhaal de simulatie met een langere looptijd om te zien of het gemiddelde en het vermogen in het venster
stabiliseren. Verlaag de maximale stapgrootte en vergelijk de extremen en RMS-waarde; solvermonsters
zijn over het algemeen niet gelijkmatig verdeeld in de tijd, dus gebruik tijdgewogen berekeningen.
Een rekenkundig gemiddelde van alle monsterwaarden kan het antwoord vertekenen ten gunste van de randen,
waar de solver meer monsters neemt.

Vervormde golfvormen kunnen niet met `peak/√2` van piek- naar RMS-waarde worden omgerekend.
Die formule geldt voor een sinus. Zo voorspelt elektrisch transistorvermogen ook niet automatisch de temperatuur:
thermische weerstand, omgevingsomstandigheden en temperatuurafhankelijke modellen zijn aanvullende gegevens.

Probeer RL te verhogen naar 80 Ω en vergelijk de symmetrie van de golfvorm, de spanningsversterking en
het geleverde vermogen. Een grotere spanningsuitslag betekent niet noodzakelijkerwijs meer vermogen,
omdat de belastingsweerstand ook is veranderd.

## Download de lescircuits
{: #download-the-lesson-circuits}

Dezelfde voorbeelden zijn al beschikbaar via **Voorbeeld openen (Open Example)**. Download voor een afzonderlijke kopie een `.dzn`-tekening en gebruik **Bestand → Openen (File → Open)** in TinyCAD. Het bijbehorende `.cir`-bestand is SPICE-tekst om te inspecteren of te gebruiken met een compatibele externe simulator; het is geen TinyCAD-tekening. Voor nieuwe simulaties van XSPICE-circuits is Desktop vereist.

| Voorbeeld | Tekening | Netlist |
| --- | --- | --- |
| amp-small-signal | [TinyCAD-tekening](/v4/examples/simulation-tutorials/spice/amp-small-signal.dzn) | [SPICE-tekst](/v4/examples/simulation-tutorials/spice/amp-small-signal.cir) |
| amp-clipping | [TinyCAD-tekening](/v4/examples/simulation-tutorials/spice/amp-clipping.dzn) | [SPICE-tekst](/v4/examples/simulation-tutorials/spice/amp-clipping.cir) |
