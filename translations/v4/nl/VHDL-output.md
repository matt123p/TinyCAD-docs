---
layout: default
---
# VHDL-uitvoer
{: #vhdl-output}

VHDL-uitvoer in TinyCAD v4 werkt hetzelfde als in v3. TinyCAD gebruikt de connectiviteit van uw schema, de pindefinities van symbolen en VHDL-gerichte symbolen om een VHDL-beschrijving van het ontwerp te genereren.

VHDL-export is beschikbaar in de desktopapp. De browserversie maakt momenteel geen VHDL-bestanden.

## Waarvoor VHDL wordt gebruikt
{: #what-vhdl-is-used-for}

VHDL staat voor Very High Speed Integrated Circuit Hardware Description Language. Het wordt gebruikt om digitale hardware te beschrijven, zoals logische poorten, tellers, toestandsmachines, bussen en grotere herbruikbare blokken.

VHDL wordt vaak gebruikt voor:

- het simuleren van digitale logica voordat hardware wordt gebouwd
- het beschrijven van herbruikbare ontwerpblokken met vastgelegde in- en uitgangen
- het opbouwen van hiërarchische FPGA- of ASIC-ontwerpen uit kleinere modules
- het doorgeven van een ontwerp aan synthese- of verificatietools verderop in het proces

In de praktijk definieert een VHDL-ontwerp doorgaans:

- een **entity**: de externe poorten van het blok
- een **architecture**: de interne logica of structuur

De VHDL-ondersteuning van TinyCAD is vooral nuttig wanneer u de structuur van een digitaal ontwerp als schema wilt vastleggen en die structuur in VHDL-vorm wilt exporteren.

## Het schema voorbereiden
{: #preparing-the-schematic}

Maak het schema met symbolen uit de VHDL-bibliotheek om VHDL-uitvoer te genereren. Deze symbolen zijn zo ontworpen dat TinyCAD kan herkennen welke pinnen ingangen, uitgangen en benoemde verbindingen zijn.

U vindt VHDL-gerichte symbolen ook op [tinycad.net](https://www.tinycad.net/Search?key=%23vhdl).

Gebruik de symbolen zoals u andere TinyCAD-symbolen zou gebruiken, maar let vooral op de naamgeving:

- Gebruik voor ingangen en uitgangen op het hoogste niveau de symbolen uit de VHDL-bibliotheek en geef elk ervan de vereiste signaalnaam.
- Geef interne draden overal dezelfde naam wanneer ze hetzelfde signaal moeten verbinden.
- De pinnamen, richtingen en pinnummers van aangepaste symbolen moeten correct zijn.

TinyCAD kent automatisch namen toe aan verbonden draden, maar expliciete labels zijn nog steeds de duidelijkste manier om de geëxporteerde signaalnamen te bepalen.

## Hoe TinyCAD symbolen aan VHDL koppelt
{: #how-tinycad-pairs-symbols-with-vhdl}

U kunt TinyCAD gebruiken voor hiërarchisch VHDL-gericht ontwerp zonder gebruik te maken van TinyCADs functie voor hiërarchische schema's met meerdere bestanden.

De gebruikelijke werkwijze is:

1. Maak VHDL-bestanden die het gedrag van uw herbruikbare blokken definiëren, of verzamel deze bestanden.
2. Maak voor die blokken bijbehorende TinyCAD-symbolen in een projectbibliotheek.
3. Geef elk symbool dezelfde naam als het bijbehorende VHDL-bestand of de bijbehorende ontwerpeenheid.
4. Zorg ervoor dat elke symboolpin de juiste pinnaam en richting heeft, en een uniek pinnummer.

Telkens wanneer u een van die symbolen in het schema plaatst, kan TinyCAD de symboolinstantie koppelen aan het VHDL-blok met dezelfde naam.

Zo kunt u grotere ontwerpen opbouwen uit kleinere, in VHDL gedefinieerde modules, terwijl u de structuur op het hoogste niveau als schema tekent.

## Werken met bussen
{: #working-with-buses}

Gebruik voor VHDL-uitvoer de BUS-tekenfunctie van TinyCAD niet om de bus logisch te definiëren. Definieer bussen in plaats daarvan door draden rechtstreeks een naam te geven.

Voorbeelden:

- `A(7:0)` definieert een 8-bits bus met de naam `A`
- `A(3)` verwijst naar één bit van die bus
- `A(7:4)` verwijst naar een deelbereik van die bus

Gebruik dezelfde naamgevingsstijl voor in- en uitgangssymbolen wanneer deze bussen voorstellen.

Houd bij busbereiken van de vorm `A(i:j)` `i` hoger dan `j`.

U kunt voor de leesbaarheid nog steeds een busverbinding tekenen, maar voor VHDL-export zijn de draadnamen van belang, niet de visuele busweergave.

## Het VHDL-bestand genereren
{: #generating-the-vhdl-file}

Wanneer het schema klaar is, voert u in TinyCAD de opdracht VHDL maken (Create VHDL) uit.

TinyCAD voert tijdens het exporteren automatisch een ontwerpregelcontrole uit. U kunt de ontwerpregelcontrole ook eerst zelf uitvoeren om eventuele problemen met bedrading of symbolen op te sporen voordat u uitvoer genereert.

## Praktische checklist
{: #practical-checklist}

Controleer het volgende voordat u exporteert:

- de ingangen en uitgangen op het hoogste niveau hebben precies de namen die u in VHDL wilt gebruiken
- aangepaste symbolen de juiste pindichtingen hebben
- pinnummers op elk symbool uniek zijn
- netten die met elkaar verbonden moeten zijn daadwerkelijk dezelfde naam hebben
- bussen namen hebben met VHDL-achtige bereiken, zoals `DATA(15:0)`

Als de gegenereerde VHDL niet aan uw verwachtingen voldoet, komt dat meestal door een onjuiste pindefinitie, een ontbrekende draadnaam of inconsistente busnaamgeving.

## Voorbeeldontwerpen
{: #example-designs}

De broncodeboom van TinyCAD bevat een klein VHDL-voorbeeld op basis van een 4-bits processorontwerp. Door deze bestanden te bekijken, krijgt u een goed beeld van de verwachte symboolnamen en projectstructuur.

Het voorbeeld is beschikbaar in de [map met TinyCAD VHDL-voorbeelden in de repository](https://github.com/matt123p/TinyCAD/tree/master/examples/vhdl).

- Terug naar [Geavanceerd](../Advanced/)
- Terug naar de [v4-inhoudsopgave](../CONTENTS/)
