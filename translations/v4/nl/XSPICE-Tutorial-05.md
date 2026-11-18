---
layout: default
title: 5. Counters and divided clocks
---
# 5. Tellers en gedeelde kloksignalen
{: #counters-and-divided-clocks}

[Vorige](/v4/XSPICE-Tutorial-04/) · [Inhoud](/v4/Simulation-Tutorials/) · [Volgende](/v4/XSPICE-Tutorial-06/)

De voorbeelden in dit hoofdstuk worden meegeleverd met TinyCAD. Kies **Voorbeeld openen (Open Example) → XSPICE and digital tutorial**, selecteer het genoemde voorbeeld en kies vervolgens **Tekening openen (Open Drawing)**. Downloaden is niet nodig.

Open **logic-counter**. X1 bevat vier D-flipflops. Elke flipflop voert zijn geïnverteerde uitgang terug naar D, zodat deze omschakelt wanneer er een klokpuls binnenkomt. De eerste trap krijgt CLK; de volgende trappen worden geklokt door de geïnverteerde uitgang van de voorgaande trap. Dit vormt een binaire rimpelteller die omhoog telt.

![Testschakeling met een vierbits teller](/v4/images/simulation-tutorials/xspice/logic-counter-circuit.png)
![Berekende uitgangen van de gedeelde kloksignalen](/v4/images/simulation-tutorials/xspice/logic-counter-results.png)

De ingangsperiode is 1 µs. Bij het opstarten worden de trappen rond het begin gereset en de eerste telrand treedt rond 0,5 µs op. Voer de opgeslagen transiëntanalyse van 18 µs uit. Lees elke waarde af nadat de rimpel is uitgewerkt, bijvoorbeeld bij 0,8 µs, 1,8 µs, 2,8 µs enzovoort.

De verwachte decimale reeks is:

```text
1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 0
```

Voor de bitvolgorde Q3 Q2 Q1 Q0 zijn de eerste vier waarden 0001, 0010, 0011 en 0100.
Reken om met `count = Q0 + 2Q1 + 4Q2 + 8Q3`, waarbij voor deze grafiek een uitgewerkte spanning boven
2.5 V als logische één wordt geïnterpreteerd.

## Frequentiedeling
{: #frequency-division}

Q0 schakelt eenmaal per ingangscyclus, dus de volledige periode beslaat twee ingangscycli.
Q1 deelt door vier, Q2 door acht en Q3 door zestien.

| Uitgang | Periode | Frequentie |
| --- | --- | --- |
| Q0 | 2 µs | 500 kHz |
| Q1 | 4 µs | 250 kHz |
| Q2 | 8 µs | 125 kHz |
| Q3 | 16 µs | 62.5 kHz |

De meegeleverde acquisitie van 18 µs toont een omslag, maar bevat mogelijk geen twee volledige stijgende flanken van Q3 na de reset. Verleng de duur tot 35 µs voordat u voor die uitgang een frequentiemeting op basis van de eerste volledige cyclus aanvraagt. Een niet-beschikbare frequentie is terecht wanneer de acquisitie onvoldoende gegevens bevat.

## Waarom rimpel ertoe doet
{: #why-ripple-matters}

De bits veranderen niet gelijktijdig. Elke trap reageert nadat de uitgang van de voorgaande trap is veranderd. Zoom in op de overgang van zeven naar acht: tijdens de voortplanting van de carry verschijnen tijdelijk tussenliggende bitcombinaties.
Een combinatorische decoder die met die bits is verbonden, kan daardoor glitches vertonen.

Dit is niet dezelfde architectuur als een synchrone teller waarin alle trappen één klok delen. Een correcte uitgewerkte telreeks maakt de rimpelteller niet geschikt voor elke tijdkritische toepassing. Gebruik dit voorbeeld om functioneel tellen te onderscheiden van het tijdsverloop van overgangen.

Probeer de klokperiode te verdubbelen. De telreeks blijft hetzelfde, maar alle uitgangsfrequenties halveren; de ingestelde voortplantingsvertragingen blijven gelijk. Verplaats vervolgens de reset naar het midden van de simulatie en controleer of alle bits worden gewist voordat het normale tellen wordt hervat. Noteer de timing van de reset en geef de reset- en DAC-bruggen voldoende tijd om uit te werken voordat u een toestand bemonstert.

Definieer voor een ontwerptest zowel een functionele eis (correcte uitgewerkte telling) als een timingseis (maximaal toegestane uitwerktijd na de klok). Ze beantwoorden verschillende vragen en moeten onafhankelijk van elkaar worden gecontroleerd.

## De circuits van deze les downloaden
{: #download-the-lesson-circuits}

Dezelfde voorbeelden zijn al beschikbaar via **Voorbeeld openen (Open Example)**. Download voor een onafhankelijke kopie een `.dzn`-tekening en gebruik **Bestand → Openen (File → Open)** in TinyCAD. Het bijbehorende `.cir`-bestand is SPICE-tekst voor inspectie of gebruik met een compatibele externe simulator, geen TinyCAD-tekening. Voor nieuwe simulaties van XSPICE-circuits is Desktop vereist.

| Voorbeeld | Tekening | Netlist |
| --- | --- | --- |
| logic-counter | [TinyCAD-tekening](/v4/examples/simulation-tutorials/xspice/logic-counter.dzn) | [SPICE-tekst](/v4/examples/simulation-tutorials/xspice/logic-counter.cir) |
