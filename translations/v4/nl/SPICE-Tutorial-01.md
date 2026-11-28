---
layout: default
title: "1. SPICE: overview and your first simulation"
---
# 1. SPICE: overzicht en uw eerste simulatie
{: #spice-overview-and-your-first-simulation}

[De zelfstudies gebruiken](/v4/Tutorial-Start-Here/) · [Cursusinhoud](/v4/Simulation-Tutorials/) · [Volgende: DC-metingen](/v4/SPICE-Tutorial-02/)

De voorbeelden in dit hoofdstuk worden meegeleverd met TinyCAD. Kies **Open Example → SPICE tutorial**, selecteer het genoemde voorbeeld en kies vervolgens **Open Drawing**. Downloaden is niet nodig.

SPICE berekent het elektrische gedrag van een circuit dat wordt beschreven door verbonden
componenten en hun wiskundige modellen. Het kan een DC-werkpunt vinden, spanningen
en stromen in de tijd volgen, of de kleinsignaal-frequentierespons berekenen.
Het leidt geen elektrisch model af uit de tekening van een component. Een weerstandssymbool
heeft een weerstandswaarde en een SPICE-sjabloon nodig; een transistor heeft daarnaast
parameters nodig die zijn gedrag beschrijven.

Deze cursus begint met circuits die met de hand kunnen worden gecontroleerd. In latere hoofdstukken
bouwen we de oorspronkelijke `AMP.DSN` opnieuw op en onderzoeken we de beperkingen ervan. Het doel
is om een nauwkeurige vraag te leren stellen, de juiste analyse te kiezen en te beoordelen
of het antwoord aannemelijk is.

Zie [Hoe TinyCAD SPICE implementeert](/v4/SPICE-Tutorial-11/) voor een handleiding over de engine, symboolbibliotheken en bedieningselementen. Hierin wordt het onderscheid
uitgelegd tussen ngspice en XSPICE en wordt stapsgewijs getoond hoe u uw eigen simulatie maakt.

## Open en voer het eerste circuit uit
{: #open-and-run-the-first-circuit}

Open **divider**. De spanningsbron van 5 V voedt twee weerstanden van 1 kΩ
in serie. Het label `OUT` benoemt hun knooppunt; `IN` benoemt de voeding.


1. Gebruik **Open Example → SPICE tutorial**, selecteer **divider** en kies vervolgens **Open Drawing**.
2. Selecteer het blad Simulation. De opgeslagen analyse is **Operating Point**.
3. Kies **Run**. Als de grafieken verborgen zijn, gebruik dan **Simulation → Show charts**.
4. Bekijk `in`, `out` en `v1#branch`. Een werkpunt bevat één waarde
   per signaal, dus een numerieke uitlezing is nuttiger dan een tijdgrafiek.
5. Selecteer R2 op het blad Circuit, wijzig **Value** van `1k` in `2k` en voer de simulatie
   opnieuw uit. Herstel `1k` voordat u verdergaat, of open **divider** opnieuw via **Open Example**.

Met de meegeleverde referentieresultaten kunt u de resultaten direct bekijken. Voer na
het bewerken de simulatie opnieuw uit: bewaarde resultaten beschrijven het circuit op het moment van de meting.
Opslaan behoudt de instellingen en bewaarde resultaten; **Save without results** maakt een
kleiner exemplaar om te delen, met behoud van het circuit en de simulatie-instellingen.

Werkpuntgrafieken bevatten één punt; gebruik de numerieke gegevens voor nauwkeurige metingen.

## Video: een spanningsdeler openen, uitvoeren en wijzigen
{: #video-open-run-and-change-a-divider}

Het ingesloten voorbeeld openen, de DC-waarden controleren, R2 wijzigen en een nieuwe meting uitvoeren.

{% include video-player.html src="/v4/videos/simulation-tutorials/spice/first-run.mp4" poster="/v4/videos/simulation-tutorials/spice/first-run.jpg" caption="Een spanningsdeler openen, uitvoeren en wijzigen." %}

[De video bekijken of downloaden](/v4/videos/simulation-tutorials/spice/first-run.mp4).

### Circuit en referentieresultaten
{: #circuit-and-reference-results}

![Spanningsdelercircuit weergegeven op basis van de opgeslagen tekening](/v4/Images/simulation-tutorials/spice/divider-circuit.png)

## Voorspel het antwoord
{: #predict-the-answer}

De stroom is `I = 5 / (1000 + 1000) = 2.5 mA`. De onderste weerstand heeft daarom
een spanning van `VOUT = I × 1000 = 2.5 V`. Als R2 wordt gewijzigd in 2 kΩ, geeft de spanningsdelervergelijking
`VOUT = 5 × 2000 / (1000 + 2000) = 3.333 V`.

![Berekende werkpuntresultaten](/v4/Images/simulation-tutorials/spice/divider-results.png)

De bronstroom is −2,5 mA. Dit is geen bedradingsfout: SPICE definieert de bronstroom
als de stroom die de positieve klem binnenkomt. Een bron die energie levert, heeft volgens
die conventie een negatieve stroom. In hoofdstuk 2 wordt dit teken gebruikt om
het vermogen correct te berekenen.

## Vier uitgangspunten
{: #four-foundations}

- **Massa is knooppunt `0`.** Spanningen zijn verschillen; de oplosser heeft een referentie nodig.
  Een draad met het label `GND` is geen vervanging, tenzij deze daadwerkelijk is verbonden met
  de SPICE-massa. Gebruik TinyCADs gereedschap **Insert Ground**.
- **Connectiviteit is elektrisch.** Een verbindingspunt verbindt takken. Kruisende draden
  zonder verbinding zijn niet noodzakelijkerwijs verbonden. Identieke netlabels verbinden
  punten op afstand; een nabijgelegen tekstopmerking doet dat niet.
- **Eenheden en voorvoegsels zijn van belang.** Gebruik `1k`, `10u`, `100n` en `1Meg` in SPICE-
  waarden. In SPICE betekent `m` milli, niet mega. De bronbedieningselementen van TinyCAD accepteren ook
  invoer met eenheden, zoals `1kHz` en `5ms`.
- **Modellen hebben een toepassingsgebied.** Een ideale weerstand heeft geen parasitaire inductie of
  thermische uitval, tenzij die effecten expliciet worden gemodelleerd.

## Kies de analyse die de vraag beantwoordt
{: #choose-the-analysis-that-answers-the-question}

| Vraag | Analyse |
| --- | --- |
| Waar stabiliseren DC-spanningen en -stromen zich? | Operating Point |
| Wat gebeurt er na een stap of tijdens een golfvorm? | Transient |
| Hoe varieert de kleinsignaalversterking met de frequentie? | AC |
| Hoe verandert de DC-oplossing wanneer een bron verandert? | DC sweep |
| Hoeveel ruis bereikt een uitgang binnen een frequentieband? | Noise |
| Wat zijn de DC-kleinsignaalversterking en de poortweerstanden? | Transfer function |
| Waar liggen de polen en nulpunten van het gelineariseerde systeem? | Pole-zero |

Een convergerende simulatie is slechts het begin van de validatie. Controleer de polariteit,
eenheden, belasting en het analysetype aan de hand van een eenvoudige schatting.

Verder lezen: de [officiële introductiehandleiding van ngspice](https://ngspice.sourceforge.io/ngspice-tutorial.html)
biedt een aanvullende inleiding op basis van netlists.

## De circuits van deze les downloaden
{: #download-the-lesson-circuits}

Dezelfde voorbeelden zijn al beschikbaar via **Open Example**. Download voor een onafhankelijke kopie een `.dzn`-tekening en gebruik **File → Open** in TinyCAD. Het bijbehorende `.cir`-bestand bevat SPICE-tekst om te bekijken of te gebruiken in een compatibele externe simulator, en is geen TinyCAD-tekening. Voor het opnieuw uitvoeren van XSPICE-circuits is Desktop vereist.

| Voorbeeld | Tekening | Netlist |
| --- | --- | --- |
| divider | [TinyCAD-tekening](/v4/examples/simulation-tutorials/spice/divider.dzn) | [SPICE-tekst](/v4/examples/simulation-tutorials/spice/divider.cir) |
