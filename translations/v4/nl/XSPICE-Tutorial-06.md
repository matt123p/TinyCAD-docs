---
layout: default
title: 6. Mixed-signal filtering and unknown states
---
# 6. Gemengde-signaalfiltering en onbekende toestanden
{: #mixed-signal-filtering-and-unknown-states}

[Vorige](/v4/XSPICE-Tutorial-05/) · [Cursusinhoud](/v4/Simulation-Tutorials/)

De voorbeelden in dit hoofdstuk worden meegeleverd met TinyCAD. Kies **Open Example → XSPICE and digital tutorial**, selecteer het genoemde voorbeeld en kies vervolgens **Open Drawing**. Downloaden is niet nodig.

Open **logic-filter**. Een pulstrein van 0–5 V en 10 kHz
loopt door de XSPICE-buffer en DAC-brug en stuurt vervolgens een fysiek SPICE-laagdoorlaatfilter van
1 kΩ/1 µF aan. Het hoge plateau duurt 25 µs binnen een periode van 100 µs, dus de
nominale dutycycle is ongeveer 25%. Door de eindige ingangflanken wijkt de nauwkeurig
op drempels gebaseerde dutycycle enigszins af.

![Gemengde digitale en analoge filterschakeling](/v4/Images/simulation-tutorials/xspice/logic-filter-circuit.png)
![Berekende PWM- en gefilterde uitgang](/v4/Images/simulation-tutorials/xspice/logic-filter-results.png)

Voer de transiënte analyse van 5 ms uit. Plot A, Y en FILTERED. Het digitale pad behoudt de
pulsvorm; het RC-netwerk middelt deze uit en behoudt daarbij enige rimpel.
Het langetermijngemiddelde nadert `5 V × 0.25 ≈ 1.25 V`. Omdat τ = 1 ms,
duurt het opstarten enkele milliseconden.

## Meet de eindige acquisitie op eerlijke wijze
{: #measure-the-finite-acquisition-honestly}

In het venster van 4–5 ms is het referentiegemiddelde van het gefilterde signaal ongeveer **1.242 V**, met
een rimpel van ongeveer **0.108 V piek-piek** (ongeveer 1.187–1.295 V). Het heeft de ideale langetermijngemiddelde waarde nog
net niet bereikt. Verleng de duur tot 10 ms en vergelijk het laatste venster van 1 ms.
Een grotere filtertijdconstante vermindert de rimpel, maar verlengt de insteltijd,
net als bij de analoge RC-lessen.

Dit is een bruikbaar model om de omzetting van PWM naar spanning te begrijpen. Het is geen
volledig model van een microcontrolleruitgang: de DAC-brug heeft een geïdealiseerde uitgangsaansturing
en geen expliciete grens voor de voedingsstroom. Voeg een geschikte driverweerstand
toe of gebruik een apparaatmodel wanneer belastingsstroom en verliezen in de uitgangstrap van belang zijn.

## Verken een ongedefinieerd logisch niveau
{: #explore-an-undefined-logic-level}

Open **logic-unknown**. De PWL-ingang wordt achtereenvolgens op
0 V, 2 V en 5 V gehouden. Voer een simulatie van 3 µs uit en inspecteer het middelste plateau.

![Berekende analoge weergave van een ongedefinieerde digitale toestand](/v4/Images/simulation-tutorials/xspice/logic-unknown-results.png)

De lage en hoge drempels van de ADC-brug zijn 1 V en 3 V. Het plateau van 2 V ligt
ertussen, waardoor de eventgestuurde ingang ongedefinieerd is. Die onbekende waarde plant zich voort
door de buffer. De DAC-brug zet deze om in **2.5 V**, omdat de parameter `out_undef`
expliciet om dat weergaveniveau vraagt.

Interpreteer die 2.5 V niet als een voorspelling dat een fysieke poort op het midden van de voedingsspanning zal blijven staan.
Het is een codering die de onbekende toestand zichtbaar maakt in een
analoge grafiek. Het model reproduceert ook geen door ruis veroorzaakte drempelklappering
of metastabiliteitsfysica. Een echte ingangontvanger kan hysterese, een gespecificeerde drempelfamilie en een gedetailleerder elektrisch model vereisen.

## Checklist voor gemengde signalen
{: #a-mixed-signal-checklist}

Bepaal voordat je een experiment vertrouwt welke verbindingen spanningen en
stromen voeren en welke gebeurtenissen doorgeven. Bepaal elke omzetting tussen domeinen.
Noteer drempels, de omzetting van ongedefinieerde toestanden, voortplantingsvertragingen, uitgangsflanktijden en beginvoorwaarden.
Controleer zowel de stabiele werking als het gedrag tijdens overgangen. Gebruik een acquisitie die lang genoeg is om de cycli of instelperiode te bevatten
die voor de meting nodig zijn.

Dezelfde aanpak is toepasbaar op een comparator die digitale logica aanstuurt, een gedeelde
klok die een schakelaar bestuurt of een logische golfvorm die een analoog filter aanstuurt.
Links naar complexere XSPICE-toepassingen, waaronder fasevergrendelde lussen en delta-sigma-voorbeelden,
zijn te vinden in de [officiële XSPICE HOWTO](https://ngspice.sourceforge.io/xspicehowto.html).
Begin met het afzonderlijk valideren van elk domein en elke interface voordat je het volledige systeem samenstelt.

Je hebt nu functionele poorten, hazards, opslag, reset, tellen en een
analoog-digitaal pad gebruikt. Ga voor elektrisch vermogen, niet-lineair versterkergedrag
en frequentierespons terug naar de [SPICE-cursus](/v4/SPICE-Tutorial-01/).

## Lescircuits downloaden
{: #download-the-lesson-circuits}

Dezelfde voorbeelden zijn al beschikbaar via **Open Example**. Download voor een zelfstandige kopie een `.dzn`-tekening en gebruik **File → Open** in TinyCAD. Het begeleidende bestand `.cir` bevat SPICE-tekst om te inspecteren of in een compatibele externe simulator te gebruiken; het is geen TinyCAD-tekening. Voor nieuwe simulaties van XSPICE-circuits is Desktop vereist.

| Voorbeeld | Tekening | Netlist |
| --- | --- | --- |
| logic-filter | [TinyCAD-tekening](/v4/examples/simulation-tutorials/xspice/logic-filter.dzn) | [SPICE-tekst](/v4/examples/simulation-tutorials/xspice/logic-filter.cir) |
| logic-unknown | [TinyCAD-tekening](/v4/examples/simulation-tutorials/xspice/logic-unknown.dzn) | [SPICE-tekst](/v4/examples/simulation-tutorials/xspice/logic-unknown.cir) |
