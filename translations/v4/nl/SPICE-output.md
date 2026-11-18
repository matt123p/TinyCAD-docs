---
layout: default
---
# SPICE-modellen en netlistuitvoer
{: #spice-models-and-netlist-output}

TinyCAD ondersteunt zowel [geïntegreerde ngspice-simulatie](../Simulation/) als het exporteren van SPICE-netlists voor een externe simulator. Beide zijn afhankelijk van de SPICE-sjablonen en pinmapping van het component. Alleen het uiterlijk van een symbool beschrijft het elektrische gedrag ervan niet.

## Modellen, sjablonen en pinvolgorde
{: #models-templates-and-pin-order}

Een weerstand kan een native SPICE-element gebruiken. Voor een transistor kan een `.model` nodig zijn; een complexer apparaat kan een `.subckt` gebruiken. De SPICE-instellingen van een geplaatst symbool koppelen de fysieke pinnummers aan de aansluitingen die het model verwacht. Controleer het tabblad **SPICE** in de symboleigenschappen; instantie-attributen kunnen de standaardwaarden van het symbool overschrijven.

Sjablonen gebruiken:

- **`%(pin)`** voor het verbonden net van het opgegeven TinyCAD-pinnummer.
- **`$(attribute)`** voor een componentattribuut.
- **`refnum`** als een speciaal behandelde referentieachtervoegsel, zodat het SPICE-elementvoorvoegsel van het sjabloon behouden blijft.

Een weerstandssjabloon kan bijvoorbeeld zijn:

```text
R$(refnum) %(1) %(2) $(NAME)
```

Voor referentie R3, netten 7 en 9, en NAME `10k` levert dit op:

```spice
R3 7 9 10k
```

Het onderliggende model-sjabloonattribuut is **`$$SPICE`**; proloogtekst is **`$$SPICE_PROLOG`**. Een sjabloon kan de pinnen in een andere volgorde plaatsen: ga er niet van uit dat schemapin 1 de eerste aansluiting van SPICE is. Een BJT-element verwacht **collector, basis, emitter**. Als een symbool basis 1, emitter 2 en collector 3 nummert, moet het sjabloon `%(3) %(1) %(2)` in die volgorde vervangen. Een subcircuit gebruikt de volgorde die is gedeclareerd op de `.subckt`-regel; deze kan afwijken van die van een componentbehuizing.

Lees het daadwerkelijke symbool en model samen. Voedingspinnen, verborgen pinnen, transistorvarianten en operationele-versterkermodellen zijn veelvoorkomende bronnen van afwijkingen. Een generiek gedragsmodel in 741-stijl is geen volledig, door de fabrikant gekwalificeerd 741-macromodel.

## Een model gebruiken in de geïntegreerde simulatie
{: #use-a-model-in-integrated-simulation}

1. Begin met een gemodelleerd symbool uit een [meegeleverde simulat bibliotheek](../Bundled-Libraries/#libraries-with-simulation-models), of voeg een geschikt SPICE-sjabloon toe aan een aangepast symbool.
2. Controleer of elk sjabloon verwijst naar bestaande attributen en de juiste pinnen.
3. Voeg op het Simulation-blad eventuele vereiste model-**tekst** toe en geef bijlagen logische bestandsnamen. Typische extensies voor tekstbestanden zijn `.lib`, `.cir` en `.mod`.
4. Los `.include`- en `.lib`-afhankelijkheden op via die bijlagen. Bewaar vereiste definities bij de tekening.
5. Verbind aarde **0**, stel de analyse in via **Setup** en voer deze vervolgens uit; controleer de diagnostiek.

De beheerde engine haalt geen model op van een website en leest geen willekeurig absoluut pad op uw computer. Lever de afhankelijkheden expliciet aan. De engine voert ook geen willekeurige shellopdrachten, `.control`-scripts, opstartbestanden, extern aangeleverde native modules of apparaat-afhankelijkheden op basis van bestanden uit. Een leveranciersmodel dat simulatorspecifieke syntaxis gebruikt, moet mogelijk worden aangepast; “SPICE-compatibel” garandeert geen identieke dialecten.

Het geïntegreerde Simulation-blad van TinyCAD beheert de analyseopdrachten en de uiteindelijke `.end`. **Een verouderd RUN-symbool is niet vereist.** Verplaats de oude analyse-instellingen naar Setup en verwijder een verouderd RUN-symbool wanneer u een tekening aanpast die op export is gericht. Verwijder analyse-instructies en `.end` uit eventuele resterende componentattributen; deze opdrachten worden afgewezen in het geïntegreerde pad voor componentsjablonen.

Controleer de licentie van een leveranciersmodel voordat u het verspreidt. Bekijk de gedocumenteerde pinvolgorde, eenheden, modelaannames en ondersteunde simulator. Bewaar de documentatie van de fabrikant bij uw modelleerantekeningen.

## Een SPICE-netlist bekijken en exporteren
{: #inspect-and-export-a-spice-netlist}

Een netlist is een tekstuele beschrijving van componenten en de knooppunten die ze verbinden. Aarde heet `0`. Typische inhoud bestaat uit model-/setupdefinities, componentregels, analyse-instructies en een afsluitende `.end`. Nuttige controles zijn onder meer:

- Verwijst elk component naar het bedoelde model en de bedoelde waarde?
- Hebben verbonden pinnen de verwachte netnamen?
- Zijn de voedings-/retournetten aanwezig, inclusief 0?
- Klopt de aansluitvolgorde van de halfgeleider of het subcircuit?
- Zijn alle modeldefinities en opgenomen tekst beschikbaar voor de geselecteerde engine?

Voor de geïntegreerde setup opent u **Simulation sheet → Diagnostics → Generate circuit text**, bekijkt u de uitgevouwen netlist en kiest u vervolgens **Export circuit** om `simulation.cir` op te slaan. Dit bevat de beheerde analyse.

Gebruik voor verouderde export op basis van sjablonen de afzonderlijke opdracht **Generate Spice NetList** in het menu File van de browser of het menu Desktop Tools. Deze staat los van het PCB-gerichte dialoogvenster [Generate Netlist](../Generate-Netlist/). De geëxporteerde analyse-/uitvoerinstructies moeten geschikt zijn voor de externe engine. Een bijbehorend tutorialbestand `.cir` kan ook rechtstreeks worden bekeken. **Open een `.dzn`-tekening in TinyCAD; een `.cir`-netlist is geen TinyCAD-tekeningbestand.**

### Verouderde exportsjablonen
{: #legacy-export-templates}

Het op export gerichte sjabloonsysteem ondersteunt een modeltekst per instantie en een proloog en epiloog per symbool. Identieke prologen/epilogen worden ontdubbeld. Prioriteiten lopen van 0 tot 9: prologen worden uitgevoerd van laag naar hoog; epilogen worden gerangschikt met prioriteit 0 als laatste.

Oudere tekeningen gebruiken mogelijk een **RUN**-symbool zonder pinnen, waarvan de proloog/epiloog de analyse- en afsluitende richtlijnen voor een geëxporteerde netlist bevat. Dit is een exportconventie, geen instructie om RUN toe te voegen aan een geïntegreerd Simulation-blad. Controleer deze instructies voordat u het geëxporteerde bestand in een afzonderlijke simulator uitvoert.

### Voorwaardelijke sjablonen
{: #conditional-templates}

Voor exportgerichte/aangepaste sjablonen zijn onder meer de volgende voorwaardelijke vormen beschikbaar:

```text
?( defined(attribute), true text, false text )
?( not_defined(attribute), true text, false text )
?( empty(attribute), true text, false text )
?( not_empty(attribute), true text, false text )
?( connected(pin), true text, false text )
?( not_connected(pin), true text, false text )
```

Voorwaardelijke constructies kunnen genest worden. Controleer de uitgevouwen netlist in plaats van een complex sjabloon alleen op basis van de brontekst te beoordelen.

## Numerieke notatie en overdraagbaarheid
{: #numerical-notation-and-portability}

In SPICE-tekst betekent **`M` milli**, net als `m`; gebruik **`Meg`** voor mega. `1k`, `100n` en `10u` zijn veelvoorkomende waarden. Gebruik expliciete modelparameters en verwijzingen in plaats van te vertrouwen op niet-gespecificeerde standaardwaarden van een simulator.

De documentatie van de externe ngspice-opdrachtregel beschrijft een bredere omgeving dan de geïntegreerde engine van TinyCAD. Raadpleeg voor volledige syntaxis van elementen, modellen, analyses en compatibiliteitsopmerkingen de officiële [ngspice-documentatie](https://ngspice.sourceforge.io/docs.html) en [gebruikershandleiding](https://ngspice.sourceforge.io/docs/ngspice-manual.pdf). Ga verder met [hoe TinyCAD SPICE implementeert](../SPICE-Tutorial-11/) voor een stapsgewijze uitleg van engines, symbolen en netlists.
