---
layout: default
title: 8. Measuring amplifier gain and bandwidth
---
# 8. Versterkingsfactor en bandbreedte van een versterker meten
{: #measuring-amplifier-gain-and-bandwidth}

[Vorige](/v4/SPICE-Tutorial-07/) · [Inhoudsopgave](/v4/Simulation-Tutorials/) · [Volgende](/v4/SPICE-Tutorial-09/)

De voorbeelden in dit hoofdstuk worden meegeleverd met TinyCAD. Kies **Voorbeeld openen (Open Example) → SPICE-tutorial (SPICE tutorial)**, selecteer het genoemde voorbeeld en kies vervolgens **Tekening openen (Open Drawing)**. Downloaden is niet nodig.

Open **amp-ac**. Dit is de opnieuw opgebouwde versterker met een AC-
amplitude van 1 op VIN en een AC-sweep van 1 Hz tot 100 MHz met 60 punten per decade.
Het hoge bovenste bereik maakt de afvlakking van het generieke transistormodel zichtbaar;
het toont niet aan dat de oorspronkelijke hardware zich bij RF nauwkeurig gedraagt.

Selecteer **Spanningsversterking (Voltage gain)**, de opgeslagen afgeleide trace OUT/IN. Bekijk de magnitude in dB
en de fase. Houd knooppuntspanningen en dimensieloze versterking in uw aantekeningen van elkaar gescheiden.

![Berekende versterking en fase van de versterker](/v4/images/simulation-tutorials/spice/amp-ac-results.png)

## Interpreteer het resultaat voordat u het verklaart
{: #read-the-result-before-explaining-it}

Met RL = 8 Ω en de elektrische instelling van R6 op 0.5 bedraagt de referentieversterking bij 1 kHz
ongeveer **0.892 V/V**, of **−0.995 dB**, met een fase die ongeveer 180° is omgekeerd.
De gemeten piekmagnitude is eveneens ongeveer 0.892. De halfvermogenskruisingen ten opzichte
van die piek liggen rond **24 Hz** en **2.9 MHz**; deze afgeronde waarden zijn het gevolg van
de bemonsterde sweep en het gekozen generieke model.

Dit zijn geen eenheidsversterkingskruisingen. Een bandbreedte van −3 dB wordt gemeten ten opzichte van
de doorlaatband- of piekversterking van de versterker, niet noodzakelijk ten opzichte van 1 V/V. Bij
de benoemde bandbreedtemeting van TinyCAD selecteert u OUT en IN en stelt u de referentieversterking in op `peak` wanneer u deze banddoorlaatvormige respons onderzoekt. Een bandbreedtemeting
vereist dat beide kruisingen binnen het gemeten frequentiebereik vallen.

## Waarom de totale spanningsversterking kleiner is dan één
{: #why-the-overall-voltage-gain-is-below-one}

VIN wordt gemeten vóór de volumepotentiometer. De spanning op de loper wordt
verder verlaagd door de eindige ingangsimpedantie van de versterker. Q1 levert vervolgens een inverterende
spanningsversterking. Q2 stuurt via C2 een zeer zware belasting van 8 Ω aan; de eindige uitgangs-
impedantie veroorzaakt extra verzwakking. De totale verhouding omvat elke trap.

Vergelijk BASE/IN, COLLECTOR/BASE en OUT/COLLECTOR als afzonderlijke afgeleide verhoudingen.
Ze beantwoorden verschillende vragen. Een trap kan spanningsversterking leveren terwijl het
volledige pad van ingang naar belasting een versterking kleiner dan één heeft. Een emittervolger kan
nog steeds nuttige stroomversterking leveren, zelfs wanneer de spanningsversterking kleiner is dan één.

## Zoek de oorzaken van de laag- en hoogfrequente begrenzingen
{: #find-the-causes-of-the-low--and-high-frequency-limits}

C1 en C2 zijn seriekoppelcondensatoren. Hun reactantie neemt toe bij lage
frequenties, waardoor het signaal wordt verzwakt. De effectieve weerstand van C2 omvat
zowel de belasting als de uitgangsimpedantie van de trap; alleen `1/(2π × 8 Ω × C2)`
gebruiken beschrijft het belaste circuit niet volledig. Bij hoge frequenties verminderen transistor-
capaciteiten en transittijd in het model de respons en veranderen ze de fase.

Probeer de volgende gecontroleerde wijzigingen en herstel na elke wijziging de oorspronkelijke instelling:

1. Wijzig RL van 8 Ω in 80 Ω. Vergelijk de versterking in de doorlaatband en de onderste afsnijfrequentie.
2. Verdubbel C2. Controleer of de onderste afsnijfrequentie ongeveer zoveel verschuift als verwacht wanneer C2
   dominant is; ook C1 en de belasting kunnen van belang zijn.
3. Wijzig de elektrische instelling van R6. Noteer de versterking vanaf IN en de versterking vanaf BASE
   afzonderlijk, zodat verzwakking door de volumeregeling niet wordt verward met de versterking van de transistortrap.
4. Verhoog het aantal punten per decade rond een kruising en controleer of de gerapporteerde afsnijfrequentie
   is gestabiliseerd voordat u meer cijfers opgeeft.

AC-analyse voorspelt de respons op een voldoende kleine verstoring rond het
instelpunt. De analyse begrenst de uitgangsamplitude niet tot de beschikbare voedingsspanning.
In het volgende hoofdstuk wordt een eindige transiënte ingang gebruikt om vast te stellen waar de kleinsignaal-
voorspelling de werkelijke golfvorm niet langer beschrijft.

## Lescircuits downloaden
{: #download-the-lesson-circuits}

Dezelfde voorbeelden zijn al beschikbaar via **Voorbeeld openen (Open Example)**. Download voor een zelfstandige kopie een `.dzn`-tekening en gebruik **Bestand → Openen (File → Open)** in TinyCAD. Het `.cir`-hulpbestand is SPICE-tekst ter inzage of voor gebruik met een compatibele externe simulator, geen TinyCAD-tekening. Voor nieuwe simulaties van XSPICE-circuits is Desktop vereist.

| Voorbeeld | Tekening | Netlist |
| --- | --- | --- |
| amp-ac | [TinyCAD-tekening](/v4/examples/simulation-tutorials/spice/amp-ac.dzn) | [SPICE-tekst](/v4/examples/simulation-tutorials/spice/amp-ac.cir) |
