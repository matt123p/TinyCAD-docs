---
layout: default
title: "4. Transient analysis: charging a capacitor"
---
# 4. Transiëntanalyse: een condensator opladen
{: #transient-analysis-charging-a-capacitor}

[Vorige](/v4/SPICE-Tutorial-03/) · [Inhoud](/v4/Simulation-Tutorials/) · [Volgende](/v4/SPICE-Tutorial-05/)

De voorbeelden in dit hoofdstuk worden meegeleverd met TinyCAD. Kies **Voorbeeld openen (Open Example) → SPICE-tutorial (SPICE tutorial)**, selecteer het genoemde voorbeeld en kies vervolgens **Tekening openen (Open Drawing)**. Downloaden is niet nodig.

Open **rc-step**. Een bron schakelt van 0 naar 1 V via
1 kΩ naar een condensator van 1 µF. De opgeslagen transiënt duurt 5 ms, met een maximale stapgrootte
van 5 µs. Plot IN en OUT samen.


## Video: RC-opladen en tijdconstante
{: #video-rc-charging-and-time-constant}

De maximale tijdstap verfijnen en OUT meten bij 1 ms en bij de RC-tijdconstante.

{% include video-player.html src="/v4/videos/simulation-tutorials/spice/rc-transient.mp4" poster="/v4/videos/simulation-tutorials/spice/rc-transient.jpg" caption="RC-opladen en tijdconstante." %}

[Video bekijken of downloaden](/v4/videos/simulation-tutorials/spice/rc-transient.mp4).

### Schakeling en referentieresultaten
{: #circuit-and-reference-results}

![RC-laadschakeling](/v4/images/simulation-tutorials/spice/rc-step-circuit.png)

![Berekende laadcurve van de condensator](/v4/images/simulation-tutorials/spice/rc-step-results.png)

## Waarom de uitgang geleidelijk verandert in plaats van te springen
{: #why-the-output-curves-rather-than-jumps}

De condensatorstroom is `i = C × dv/dt`. Direct nadat de ingang verandert, staat er nog bijna 0 V over de
condensator, dus staat vrijwel de volledige ingangsspanning over R1. De
beginstroom is ongeveer `1 V / 1 kΩ = 1 mA`. Naarmate de condensator oplaadt,
nemen de spanning over de weerstand en de stroom af. De uitgang nadert 1 V in plaats van die waarde onmiddellijk te bereiken.

De tijdconstante is `τ = R × C = 1 ms`. Voor een ideale stap en een aanvankelijk
ongeladen condensator geldt: `VOUT(t) = 1 − exp(−t/τ)` volt.

| Tijd na de stap | Verwachte OUT |
| --- | --- |
| 1 ms = 1τ | 0.632 V |
| 2 ms = 2τ | 0.865 V |
| 3 ms = 3τ | 0.950 V |
| 5 ms = 5τ | 0.993 V |

De meegeleverde bron stijgt in 1 µs, dus verwacht een klein verschil met de
vergelijking voor een onmiddellijke stap. Gebruik de grafiekcursor of een **Waarde (Value)**-meting
bij 1 ms. Een meting van de **Tijdconstante (Time constant)** met een beginwaarde van 0 V en een eindwaarde van 1 V moet
ongeveer 1 ms opleveren. Een meting van de **Stijgtijd (Rise time)** gebruikt het interval van 10–90%: de
verwachte waarde is `ln(9) × τ ≈ 2.197 ms`, niet 1 ms.

## Duur en maximale stapgrootte beantwoorden verschillende vragen
{: #duration-and-maximum-step-answer-different-questions}

De duur bepaalt hoe lang de simulatie loopt. De maximale stapgrootte begrenst
de afstand tussen tijdstippen van de solver. Rond flanken of niet-lineaire gebeurtenissen kan de solver kleinere stappen nemen. Het aantal samples hoeft daarom niet gelijk te zijn aan
de duur gedeeld door de maximale stapgrootte.

Bij een te korte duur is het uitdempen niet zichtbaar. Bij een te grove tijdstap
kunnen flanken en pieken onnauwkeurig worden gemeten, zelfs als de grafiek aannemelijk lijkt. Verlaag
de maximale stapgrootte van 5 µs naar 2.5 µs en vergelijk de meting bij 1 ms; een stabiel resultaat
zou nauwelijks moeten veranderen. Dit is een convergentiecontrole van de meting, niet
slechts een controle of de solver meldt dat de berekening is geslaagd.

## Beginvoorwaarden en energie
{: #initial-conditions-and-energy}

Normaal gesproken berekent SPICE een DC-werkpunt voordat de transiënt begint.
Door **Beginvoorwaarden (initial conditions)** aan te vinken, wordt het alternatieve opstarttraject met beginvoorwaarden aangevraagd
(`uic`). Gebruik dit bewust en met passende beginvoorwaarden voor condensatoren en spoelen;
het is geen universele oplossing voor convergentieproblemen.
Voor dit voorbeeld is dat niet nodig, omdat de beginwaarde van de ingang nul is.

Bij 1 V slaat de condensator `E = ½CV² = 0.5 µJ` op. Tijdens het opladen dissipeert R1
energie en levert de bron zowel de opgeslagen als de gedissipeerde energie. Het momentane
vermogen en de opgetelde energie zijn verschillende metingen: integreer het vermogen over
het gekozen interval om joule te verkrijgen.

Probeer 2.2 kΩ, voorspel een tijdconstante van 2.2 ms en verleng de duur tot 11 ms. Herstel vervolgens R1 en halveer C1: de tijdconstante moet halveren. Deze wijzigingen laten zien
hoe je een experiment ontwerpt waarmee je het effect van een component kunt onderscheiden van een
artefact van de plot.

## De les-schakelingen downloaden
{: #download-the-lesson-circuits}

Dezelfde voorbeelden zijn al beschikbaar via **Voorbeeld openen (Open Example)**. Download voor een onafhankelijke kopie een `.dzn`-tekening en gebruik **Bestand → Openen (File → Open)** in TinyCAD. Het bijbehorende `.cir`-bestand bevat SPICE-tekst om te bekijken of te gebruiken in een compatibele externe simulator; het is geen TinyCAD-tekening. Voor nieuwe simulaties van XSPICE-schakelingen is Desktop vereist.

| Voorbeeld | Tekening | Netlist |
| --- | --- | --- |
| rc-step | [TinyCAD-tekening](/v4/examples/simulation-tutorials/spice/rc-step.dzn) | [SPICE-tekst](/v4/examples/simulation-tutorials/spice/rc-step.cir) |
