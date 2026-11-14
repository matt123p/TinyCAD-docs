---
layout: default
title: "5. AC analysis: gain, phase and an RC filter"
---
# 5. AC-analyse: versterking, fase en een RC-filter
{: #ac-analysis-gain-phase-and-an-rc-filter}

[Vorige](/v4/SPICE-Tutorial-04/) · [Inhoudsopgave](/v4/Simulation-Tutorials/) · [Volgende](/v4/SPICE-Tutorial-06/)

De voorbeelden in dit hoofdstuk worden meegeleverd met TinyCAD. Kies **Voorbeeld openen (Open Example) → SPICE-tutorial (SPICE tutorial)**, selecteer het genoemde voorbeeld en kies vervolgens **Tekening openen (Open Drawing)**. Downloaden is niet nodig.

Open **rc-ac**. Dit gebruikt hetzelfde netwerk van 1 kΩ/1 µF als de
laadles, maar stelt een andere vraag: hoeveel van een klein sinusvormig
signaal bereikt OUT bij elke frequentie?

De bron heeft een AC-amplitude van 1 V. De opgeslagen AC-sweep loopt van 1 Hz tot 100 kHz,
met 100 punten per decade. Voer de sweep uit, selecteer de afgeleide trace **OUT / IN** en
bekijk de magnitude, dB en fase. Gebruik een logaritmische frequentieas.


## Video: AC-respons en afsnijfrequentie
{: #video-ac-response-and-cutoff}

De AC-instellingen controleren, de afsnijfrequentie aflezen en schakelen tussen magnitude, decibel en fase.

{% include video-player.html src="/v4/videos/simulation-tutorials/spice/ac-response.mp4" poster="/v4/videos/simulation-tutorials/spice/ac-response.jpg" caption="AC-respons en afsnijfrequentie." %}

[Video bekijken of downloaden](/v4/videos/simulation-tutorials/spice/ac-response.mp4).

### Schakeling en referentieresultaten
{: #circuit-and-reference-results}

![Berekende magnitude- en faserespons](/v4/images/simulation-tutorials/spice/rc-ac-results.png)

## Het complexe resultaat interpreteren
{: #interpret-the-complex-result}

AC-analyse lineariseert de schakeling rond het DC-werkpunt en berekent
complexe amplitudes. Het is geen transiënte simulatie waarin een sinusgenerator
de frequentie geleidelijk verandert. Voor deze schakeling geldt

`H(jω) = VOUT / VIN = 1 / (1 + jωRC)`.

De magnitude geeft de amplitudeverhouding aan; de fase geeft de relatieve timing
binnen een cyclus aan. Hier loopt de uitgang achter op de ingang. De afsnijfrequentie is
`fc = 1 / (2πRC) = 159.155 Hz`. Bij de afsnijfrequentie is de magnitude `1/√2 = 0.7071`
en de fase −45°. Spanningsversterking in decibel is `20 log10(|H|)`, wat
−3.0103 dB bij de afsnijfrequentie oplevert.

| Frequentie | Geschatte versterking | Geschatte fase |
| --- | --- | --- |
| 10 Hz | 0.9980, −0.017 dB | −3.60° |
| 159.155 Hz | 0.7071, −3.01 dB | −45° |
| 1 kHz | 0.1572, −16.07 dB | −80.96° |

De opgeslagen meting **Cutoff** gebruikt OUT ten opzichte van IN en een referentieversterking
van 1. De uitkomst zou ongeveer 159.15 Hz moeten zijn. Door interpolatie tussen
meetpunten kunnen de laatste cijfers afwijken van de vergelijking.

## Voorkom drie veelvoorkomende fouten
{: #avoid-three-common-mistakes}

Ten eerste is het plotten van alleen de reële component geen weergave van de amplitude. Gebruik voor een
complex resultaat de magnitude of dB. Ten tweede is een versterking van −3 dB geen spanningsverhouding
van −3: decibels coderen een positieve magnitude op logaritmische wijze. Ten derde hoort het
minteken bij een reële inverterende versterking bij de fase, niet bij een negatieve
magnitude.

Met AC = 1 is de uitgangsspanning in dit eenvoudige geval numeriek gelijk aan de versterking.
Toch is het robuuster om OUT/IN te plotten: zo wordt de versterking nog steeds weergegeven
als de ingangsamplitude verandert. Het AC-resultaat van een niet-lineaire versterker blijft
een kleinsignaalresultaat, zelfs wanneer de AC-amplitude op een groot getal is ingesteld. Het voorspelt geen
begrenzing of fysiek uitgangsvermogen.

## Componentkeuzes vergelijken
{: #compare-component-choices}

In **Afstemmen / sweep (Tune / sweep)** biedt de meegeleverde R1-regeling een lijst-sweep van 1 kΩ,
2.2 kΩ en 4.7 kΩ. Voer de sweep uit en vergelijk de curves en de tabel met afsnijfrequenties.
De verwachte afsnijfrequenties zijn 159.15, 72.34 en 33.86 Hz. Tijdelijk afstemmen verandert
de opgeslagen weerstand niet, totdat **Toepassen (Apply)** wordt gebruikt.

Een RC-filter kan schakelrimpel onderdrukken vóór een ADC of hoogfrequente ruis van een sensor verminderen.
Het vertraagt ook het gewenste signaal. Vergelijk de frequentierespons in dit hoofdstuk met de langere laadtijd
die ontstaat wanneer R1 in het vorige hoofdstuk wordt verhoogd: het zijn twee weergaven van dezelfde fysieke afweging.

Referentie: het [AC-voorbeeld in de ngspice-beginnershandleiding](https://ngspice.sourceforge.io/ngspice-tutorial.html)
maakt eveneens onderscheid tussen AC-excitatie en de transiënte brongolfvorm.

## De lescircuits downloaden
{: #download-the-lesson-circuits}

Dezelfde voorbeelden zijn al beschikbaar via **Voorbeeld openen (Open Example)**. Download voor een afzonderlijke kopie een `.dzn`-tekening en gebruik **Bestand → Openen (File → Open)** in TinyCAD. Het bijbehorende `.cir` is SPICE-tekst om te inspecteren of te gebruiken in een compatibele externe simulator, geen TinyCAD-tekening. Voor nieuwe simulaties van XSPICE-schakelingen is Desktop vereist.

| Voorbeeld | Tekening | Netlist |
| --- | --- | --- |
| rc-ac | [TinyCAD-tekening](/v4/examples/simulation-tutorials/spice/rc-ac.dzn) | [SPICE-tekst](/v4/examples/simulation-tutorials/spice/rc-ac.cir) |
