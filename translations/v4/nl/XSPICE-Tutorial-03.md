---
layout: default
title: 3. Propagation delay and logic hazards
---
# 3. Voortplantingsvertraging en logische hazards
{: #propagation-delay-and-logic-hazards}

[Vorige](/v4/XSPICE-Tutorial-02/) · [Inhoud](/v4/Simulation-Tutorials/) · [Volgende](/v4/XSPICE-Tutorial-04/)

De voorbeelden in dit hoofdstuk zijn meegeleverd met TinyCAD. Kies **Voorbeeld openen (Open Example) → XSPICE and digital tutorial**, selecteer het genoemde voorbeeld en kies vervolgens **Tekening openen (Open Drawing)**. Downloaden is niet nodig.

Open **logic-hazard**. Binnen X1 gaat één exemplaar van A
rechtstreeks naar een EN-poort. Een ander exemplaar gaat eerst door een
inverter voordat het de andere ingang van de EN-poort bereikt. De Booleaanse
expressie is `A AND NOT A`, die na het uitdempen van alle transiënten altijd nul is.
Toch kan de transiënt een puls bevatten.

![Berekende hazardpulsen](/v4/Images/simulation-tutorials/xspice/logic-hazard-results.png)

De inverter heeft een vertraging van 100 ns en de EN-poort een vertraging van
10 ns. Bij een stijgende flank van de ingang wordt het directe pad hoog, terwijl
het geïnverteerde pad hoog blijft totdat de inverter reageert. Gedurende een
korte tijd zijn beide ingangen van de EN-poort hoog, waardoor een positieve
uitgangspuls verschijnt. In dit opzettelijk eenvoudige model is die ongeveer
100 ns breed. Bij de tegenovergestelde flank van de ingang is er een periode
waarin beide ingangen van de EN-poort laag zijn, zodat dezelfde positieve puls
niet wordt geproduceerd.

## Meet de timing in plaats van die af te leiden uit pixels
{: #measure-rather-than-infer-timing-from-pixels}

Voer de opgeslagen transiënt van 3 µs uit met een maximale stap van 2 ns. Zoom in
op een stijgende flank rond 0,5 µs. Gebruik een drempel van 2,5 V om de
kruising van de ingang, de kruising van de uitgang en de pulsbreedte van de
uitgang te meten. De meting **Vertraging (Delay)** van TinyCAD gebruikt de eerste
stijgende drempelkruising van de uitgang minus de eerste stijgende drempelkruising
van het referentiesignaal binnen het geselecteerde venster. Voor de meting
**Pulsbreedte (Pulse width)** is een volledige puls in dat venster nodig.

De totale vertraging van analoge ingang naar analoge uitgang omvat de
drempelkruising, de timing van de ADC-brug, de poortvertraging en de
overgangstijd van de DAC. Deze is niet identiek aan de parameter `rise_delay` van één poort.
Kies overeenkomstige drempels bij het vergelijken van metingen en vermeld het
gebruikte interval.

## Maak onderscheid tussen drie verschillende tijdsgrootheden
{: #separate-three-different-time-quantities}

| Grootheid | Betekenis |
| --- | --- |
| Voortplantingsvertraging | Tijd tussen een gebeurtenis aan de ingang die een reactie veroorzaakt en de resulterende gebeurtenis aan de uitgang |
| Stijg-/daaltijd | Tijd die een analoge overgang tussen gespecificeerde niveaus nodig heeft |
| Periode | Tijd tussen herhalingen van de golfvorm |

Een ideale gebeurtenisgestuurde overgang kan in het digitale domein onmiddellijk
plaatsvinden, terwijl de DAC-brug een eindige analoge helling produceert. Een
kleinere plotstap verkort de ingestelde voortplantingsvertraging van de poort
niet.

Verdubbel de vertraging van de inverter in een kopie van het model van X1 tot
200 ns en voer de simulatie opnieuw uit. De puls zou overeenkomstig breder
moeten worden. Verhoog vervolgens de maximale stap aanzienlijk en vergelijk
wat de plot weergeeft. De solver voegt mogelijk nog steeds gebeurtenisgerelateerde
punten in, maar een grove instelling is geen betrouwbare strategie om korte
analoge flanken te meten. Herstel de stap van 2 ns en controleer of de gemeten
breedte stabiel is.

Dit is een demonstratie van hazards, geen aanbevolen fysieke pulsgenerator.
Werkelijke logische vertragingen variëren met proces, spanning, temperatuur en
belasting. Een puls die in een simulatie met vaste vertraging betrouwbaar lijkt
te verschijnen, kan in hardware verdwijnen of van breedte veranderen. Gebruik
zo'n test om de timinggevoeligheid te ontdekken en kies vervolgens een ontwerp
met expliciete timingvereisten en geschikte modellen.

## De lescircuits downloaden
{: #download-the-lesson-circuits}

Dezelfde voorbeelden zijn al beschikbaar onder **Voorbeeld openen (Open Example)**. Download voor een afzonderlijke kopie een `.dzn`-tekening en gebruik **Bestand → Openen (File → Open)** in TinyCAD. Het bijbehorende `.cir`-bestand is SPICE-tekst om te inspecteren of te gebruiken met een compatibele externe simulator, geen TinyCAD-tekening. Voor nieuwe simulaties van XSPICE-circuits is Desktop vereist.

| Voorbeeld | Tekening | Netlist |
| --- | --- | --- |
| logic-hazard | [TinyCAD-tekening](/v4/examples/simulation-tutorials/xspice/logic-hazard.dzn) | [SPICE-tekst](/v4/examples/simulation-tutorials/xspice/logic-hazard.cir) |
