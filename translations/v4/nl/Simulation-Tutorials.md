---
layout: default
title: Simulation tutorials for TinyCAD
---
# Simulatietutorials
{: #simulation-tutorials}

Begin met [De tutorials gebruiken en de meegeleverde voorbeelden openen](/v4/Tutorial-Start-Here/),
ga daarna verder met [SPICE: overzicht en je eerste simulatie](/v4/SPICE-Tutorial-01/).
Begin voor gebeurtenisgestuurde logica met de afzonderlijke [XSPICE- en digitale cursus](/v4/XSPICE-Tutorial-01/).

Er is één gedeeld inleidend hoofdstuk, elf SPICE-hoofdstukken en zes XSPICE-
hoofdstukken. De volledige cursussen, uitvoerbare tekeningen, afbeeldingen en opnamen zijn opgenomen in deze handleiding. Alle tutorialvoorbeelden zijn meegeleverd met TinyCAD; je hoeft geen tutorials te downloaden. Kies **Voorbeeld openen (Open Example)** in de titelbalk van de browser, of **Bestand → Voorbeeld openen (File → Open Example)** in Desktop, selecteer
**SPICE-tutorial** of **XSPICE- en digitale tutorial**, selecteer het voorbeeld dat in het hoofdstuk wordt genoemd
en kies vervolgens **Tekening openen (Open Drawing)**. Hiermee open je een bewerkbare kopie;
gebruik **Opslaan als (Save As)** om je experimenten te bewaren en open het ingesloten voorbeeld opnieuw
om opnieuw te beginnen. Tekeningen bevatten ingesloten symbolen, modeldefinities,
analyse-instellingen en een behouden referentie-opname.

## SPICE
{: #spice}

1. [Overzicht en eerste uitvoering](/v4/SPICE-Tutorial-01/)
2. [DC-spanning, stroom en vermogen](/v4/SPICE-Tutorial-02/)
3. [Signaalgeneratoren en stimuli](/v4/SPICE-Tutorial-03/)
4. [Transientanalyse en RC-laden](/v4/SPICE-Tutorial-04/)
5. [Frequentierespons en filters](/v4/SPICE-Tutorial-05/)
6. [Diodes, gelijkrichting en rimpel](/v4/SPICE-Tutorial-06/)
7. [AMP.DSN opnieuw opbouwen](/v4/SPICE-Tutorial-07/)
8. [Versterkingsfactor en bandbreedte van een versterker](/v4/SPICE-Tutorial-08/)
9. [Uitgangssignaal, clipping en vermogen van een versterker](/v4/SPICE-Tutorial-09/)
10. [Sweeps, ruis en ontwerponderzoek](/v4/SPICE-Tutorial-10/)
11. [Hoe TinyCAD SPICE implementeert: engines, symbolen en workflow](/v4/SPICE-Tutorial-11/)

## Videohandleidingen
{: #video-walkthroughs}

Vijf korte video's laten de stappen zien waarbij het handig is om de bedieningselementen te bekijken.
De video's gebruiken TinyCAD in de browser met de meegeleverde ngspice. Speel ze af in de
ingebouwde speler van de les, of gebruik deze links in een Markdown-viewer:

| Les | Demonstratie |
| --- | --- |
| 1 | [Openen, uitvoeren en een spanningsdeler wijzigen](/v4/videos/simulation-tutorials/spice/first-run.mp4) |
| 3 | [Broninstellingen en golfvormvoorbeeld](/v4/videos/simulation-tutorials/spice/source-settings.mp4) |
| 4 | [RC-laden, tijdstap en tijdconstante](/v4/videos/simulation-tutorials/spice/rc-transient.mp4) |
| 5 | [AC-amplitude, dB, fase en afsnijfrequentie](/v4/videos/simulation-tutorials/spice/ac-response.mp4) |
| 6 | [Rimpel van een gelijkrichter na het instellen meten](/v4/videos/simulation-tutorials/spice/rectifier-ripple.mp4) |

De video's vormen een aanvulling op de schriftelijke instructies en afbeeldingen. Gebruik de hoofdstuktekst
voor vergelijkingen, aannames en verwachte waarden. De menu's in Desktop verschillen van die in de browser; gebruik daar Bestand → Voorbeeld openen.

## XSPICE- en digitale simulatie
{: #xspice-and-digital-simulation}

1. [Modellen, bridges en eerste uitvoering](/v4/XSPICE-Tutorial-01/)
2. [Poorten en waarheidstabellen](/v4/XSPICE-Tutorial-02/)
3. [Voortplantingsvertraging en hazards](/v4/XSPICE-Tutorial-03/)
4. [Flipflops, klokken en reset](/v4/XSPICE-Tutorial-04/)
5. [Tellers en gedeelde kloksignalen](/v4/XSPICE-Tutorial-05/)
6. [Gemengde-signaalfilters en onbekende toestanden](/v4/XSPICE-Tutorial-06/)

Voor XSPICE-voorbeelden is de native engine van TinyCAD Desktop vereist. De gewone SPICE-
voorbeelden gebruiken analoge modellen, maar de numerieke kwalificatie van deze bundel is
uitgevoerd met de meegeleverde native ngspice 47. Een geslaagde native uitvoering betekent niet dat elke combinatie van browser en versie is getest.

Schakelingafbeeldingen zijn gerenderd vanuit opnieuw geopende TinyCAD-tekeningen. Resultaatafbeeldingen
zijn grafieken van echte solvergegevens, niet handgetekende verwachte golfvormen. Bijschriften
identificeren schermafbeeldingen van de toepassing afzonderlijk. Kleine numerieke verschillen met de afgedrukte waarden zijn normaal wanneer het model, de temperatuur, de tijdstap of de engineversie verandert.


## Naslag in de handleiding
{: #manual-reference}

Raadpleeg [Simulatie](/v4/Simulation/) en [Meegeleverde voorbeelden](/v4/Bundled-Examples/) voor actuele bedieningselementen, modellen, analyse-instellingen, grafieken en probleemoplossing. In Desktop ga je naar **Bestand → Voorbeeld openen** en **Beeld → Uitleg weergeven**.

## Downloads van analoge tekeningen
{: #analogue-drawing-downloads}

Gebruik de meegeleverde voorbeeldbrowser, of download hier een tekening en open deze in TinyCAD. Netlists worden afzonderlijk als tekst aangeboden.

| Voorbeeld | Tekening | Netlist |
| --- | --- | --- |
| amp-ac | [TinyCAD-tekening](/v4/examples/simulation-tutorials/spice/amp-ac.dzn) | [SPICE-tekst](/v4/examples/simulation-tutorials/spice/amp-ac.cir) |
| amp-bias | [TinyCAD-tekening](/v4/examples/simulation-tutorials/spice/amp-bias.dzn) | [SPICE-tekst](/v4/examples/simulation-tutorials/spice/amp-bias.cir) |
| amp-clipping | [TinyCAD-tekening](/v4/examples/simulation-tutorials/spice/amp-clipping.dzn) | [SPICE-tekst](/v4/examples/simulation-tutorials/spice/amp-clipping.cir) |
| amp-small-signal | [TinyCAD-tekening](/v4/examples/simulation-tutorials/spice/amp-small-signal.dzn) | [SPICE-tekst](/v4/examples/simulation-tutorials/spice/amp-small-signal.cir) |
| controlled-source | [TinyCAD-tekening](/v4/examples/simulation-tutorials/spice/controlled-source.dzn) | [SPICE-tekst](/v4/examples/simulation-tutorials/spice/controlled-source.cir) |
| dc-sweep | [TinyCAD-tekening](/v4/examples/simulation-tutorials/spice/dc-sweep.dzn) | [SPICE-tekst](/v4/examples/simulation-tutorials/spice/dc-sweep.cir) |
| divider | [TinyCAD-tekening](/v4/examples/simulation-tutorials/spice/divider.dzn) | [SPICE-tekst](/v4/examples/simulation-tutorials/spice/divider.cir) |
| rc-ac | [TinyCAD-tekening](/v4/examples/simulation-tutorials/spice/rc-ac.dzn) | [SPICE-tekst](/v4/examples/simulation-tutorials/spice/rc-ac.cir) |
| rc-noise | [TinyCAD-tekening](/v4/examples/simulation-tutorials/spice/rc-noise.dzn) | [SPICE-tekst](/v4/examples/simulation-tutorials/spice/rc-noise.cir) |
| rc-pz | [TinyCAD-tekening](/v4/examples/simulation-tutorials/spice/rc-pz.dzn) | [SPICE-tekst](/v4/examples/simulation-tutorials/spice/rc-pz.cir) |
| rc-step | [TinyCAD-tekening](/v4/examples/simulation-tutorials/spice/rc-step.dzn) | [SPICE-tekst](/v4/examples/simulation-tutorials/spice/rc-step.cir) |
| rc-tf | [TinyCAD-tekening](/v4/examples/simulation-tutorials/spice/rc-tf.dzn) | [SPICE-tekst](/v4/examples/simulation-tutorials/spice/rc-tf.cir) |
| rectifier | [TinyCAD-tekening](/v4/examples/simulation-tutorials/spice/rectifier.dzn) | [SPICE-tekst](/v4/examples/simulation-tutorials/spice/rectifier.cir) |
| source-current | [TinyCAD-tekening](/v4/examples/simulation-tutorials/spice/source-current.dzn) | [SPICE-tekst](/v4/examples/simulation-tutorials/spice/source-current.cir) |
| source-dc | [TinyCAD-tekening](/v4/examples/simulation-tutorials/spice/source-dc.dzn) | [SPICE-tekst](/v4/examples/simulation-tutorials/spice/source-dc.cir) |
| source-exponential | [TinyCAD-tekening](/v4/examples/simulation-tutorials/spice/source-exponential.dzn) | [SPICE-tekst](/v4/examples/simulation-tutorials/spice/source-exponential.cir) |
| source-fm | [TinyCAD-tekening](/v4/examples/simulation-tutorials/spice/source-fm.dzn) | [SPICE-tekst](/v4/examples/simulation-tutorials/spice/source-fm.cir) |
| source-pulse | [TinyCAD-tekening](/v4/examples/simulation-tutorials/spice/source-pulse.dzn) | [SPICE-tekst](/v4/examples/simulation-tutorials/spice/source-pulse.cir) |
| source-pwl | [TinyCAD-tekening](/v4/examples/simulation-tutorials/spice/source-pwl.dzn) | [SPICE-tekst](/v4/examples/simulation-tutorials/spice/source-pwl.cir) |
| source-sine | [TinyCAD-tekening](/v4/examples/simulation-tutorials/spice/source-sine.dzn) | [SPICE-tekst](/v4/examples/simulation-tutorials/spice/source-sine.cir) |
| source-triangle | [TinyCAD-tekening](/v4/examples/simulation-tutorials/spice/source-triangle.dzn) | [SPICE-tekst](/v4/examples/simulation-tutorials/spice/source-triangle.cir) |

## Downloads van XSPICE-tekeningen
{: #xspice-drawing-downloads}

Gebruik de meegeleverde voorbeeldbrowser, of download hier een tekening en open deze in TinyCAD. Netlists worden afzonderlijk als tekst aangeboden.

| Voorbeeld | Tekening | Netlist |
| --- | --- | --- |
| logic-buffer | [TinyCAD-tekening](/v4/examples/simulation-tutorials/xspice/logic-buffer.dzn) | [SPICE-tekst](/v4/examples/simulation-tutorials/xspice/logic-buffer.cir) |
| logic-counter | [TinyCAD-tekening](/v4/examples/simulation-tutorials/xspice/logic-counter.dzn) | [SPICE-tekst](/v4/examples/simulation-tutorials/xspice/logic-counter.cir) |
| logic-dff | [TinyCAD-tekening](/v4/examples/simulation-tutorials/xspice/logic-dff.dzn) | [SPICE-tekst](/v4/examples/simulation-tutorials/xspice/logic-dff.cir) |
| logic-filter | [TinyCAD-tekening](/v4/examples/simulation-tutorials/xspice/logic-filter.dzn) | [SPICE-tekst](/v4/examples/simulation-tutorials/xspice/logic-filter.cir) |
| logic-hazard | [TinyCAD-tekening](/v4/examples/simulation-tutorials/xspice/logic-hazard.dzn) | [SPICE-tekst](/v4/examples/simulation-tutorials/xspice/logic-hazard.cir) |
| logic-nand | [TinyCAD-tekening](/v4/examples/simulation-tutorials/xspice/logic-nand.dzn) | [SPICE-tekst](/v4/examples/simulation-tutorials/xspice/logic-nand.cir) |
| logic-unknown | [TinyCAD-tekening](/v4/examples/simulation-tutorials/xspice/logic-unknown.dzn) | [SPICE-tekst](/v4/examples/simulation-tutorials/xspice/logic-unknown.cir) |
