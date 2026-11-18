---
layout: default
---
# XSPICE en digitale simulatie
{: #xspice-and-digital-simulation}

XSPICE breidt ngspice uit met codemodellen en een gebeurtenisgestuurd simulatiesysteem dat wordt gecoördineerd met de analoge solver. Het is nuttig voor poorten, klokken, opslag en gemengde analoge/digitale systemen. Zie het officiële [XSPICE-overzicht](https://ngspice.sourceforge.io/xspice.html) voor de architectuur van het upstream-project.

**XSPICE wordt ondersteund in TinyCAD Desktop en niet in browserversies.** De eigen engine van Desktop bevat de meegeleverde codemodellibraries.

*Opgeslagen resultaten bekijken:* een browser kan nog steeds een tekening openen met een eerdere XSPICE-acquisitie. Zo kunt u de opgeslagen resultaten bekijken; voor het uitvoeren van de simulatie is Desktop vereist.

## Kies het juiste logicamodel
{: #choose-the-right-logic-model}

| Benadering | Werking | Toepassing |
| --- | --- | --- |
| Meegeleverde **Digitale logica** en **Functionele blokken** | Draagbare analoge gedragsmodellen voor SPICE met ingestelde voedingsspanningen en drempelwaarden | Systeemonderzoek in de browser en Desktop |
| XSPICE-tutorialsymbolen/-modellen | Gebeurtenisgestuurde logica, vertragingen, opslag en expliciete analoge/digitale bruggen | Native mixed-signalsimulatie in Desktop |

Een visueel vergelijkbare poort kan dus een andere modelleerafspraak hebben. Vervang het ene niet uitsluitend op basis van het uiterlijk door het andere. Geen van beide benaderingen zorgt ervoor dat een afbeelding van een ESP32-, Raspberry Pi- of Arduino-bord firmware uitvoert. De TinyCAD-integratie is geen algemene omgeving voor het uitvoeren van HDL of ingebedde software.

## Analoge en digitale knooppunten
{: #analogue-and-digital-nodes}

Analoge knooppunten voeren continu variërende spanningen/stromen. Digitale gebeurtenisknooppunten voeren toestanden. Een **ADC-brug** past drempelwaarden toe om analoge invoer naar digitale toestanden om te zetten; een **DAC-brug** zet een digitale toestand om naar een analoog uitgangsniveau. Deze bruggen beschrijven de omzetting tussen simulatiedomeinen, niet noodzakelijkerwijs een volledig fysiek ADC/DAC-apparaat.

Controleer drempelwaarden, voedingsniveaus en uitgangsbelasting. Een spanning tussen geldige logische drempelwaarden kan een onbekende toestand opleveren. Opslag kan onbekend blijven totdat de klok-/resetvoorwaarden de toestand bepalen. Een onbekende toestand is nuttige diagnostische informatie; deze vervangen door een aangenomen 0 kan een echt timing- of initialisatieprobleem verhullen.

Door propagatievertraging is tijd van belang. Poorten met verschillende padvertragingen kunnen een glitch veroorzaken, ook als een statische waarheidstabel correct lijkt. Kies een maximale transiënte stapgrootte waarmee de analoge respons en de timing die u wilt meten voldoende nauwkeurig worden weergegeven. Leid een gebeurtenisvertraging niet uitsluitend af uit een grove weergave.

## De digitale cursus volgen
{: #run-the-digital-course}

1. Kies in Desktop **Bestand → Voorbeeld openen (Open Example) → XSPICE- en digitale tutorial**.
2. Open de in de les genoemde tekening. De symbolen, codemodeldeclaraties en behouden resultaten zijn opgenomen.
3. Lees de uitleg via **Weergave → Uitleg bekijken (View Explanation)** en selecteer het simulatieblad.
4. Kies **Uitvoeren (Run)** voor een nieuwe native acquisitie en vergelijk vervolgens de toestanden en timings met de les.
5. Sla een kopie op voordat u drempelwaarden, vertragingen, reset- of kloktiming wijzigt.

De [XSPICE-tutorial van zes hoofdstukken](../XSPICE-Tutorial/) behandelt bruggen en de eerste uitvoering, poorten en waarheidstabellen, glitches, flipflops, tellers en mixed-signaalfiltering. De tutorial bevat schakelschema's, solvergrafieken en downloadbare begeleidende bestanden.

## Upstream-naslagmateriaal
{: #upstream-reference}

Gebruik de officiële [ngspice-documentatie en handleiding](https://ngspice.sourceforge.io/docs.html) voor de syntaxis van codemodellen en ondersteunde poorten. De [XSPICE HOWTO](https://ngspice.sourceforge.io/xspicehowto.html) bespreekt de ontwikkeling van codemodellen, en [XSPICE-gebruik](https://ngspice.sourceforge.io/xspiceusage.html) biedt meer voorbeelden en achtergrondinformatie. Deze bronnen beschrijven ngspice als geheel. TinyCAD gebruikt de meegeleverde native modules; het laadt geen willekeurige, door de gebruiker aangeleverde gecompileerde codemodellen via een tekeningbijlage.
