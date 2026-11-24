---
layout: default
---
# SPICE-modellen en netlistuitvoer
{: #spice-models-and-netlist-output}

TinyCAD ondersteunt zowel [geïntegreerde ngspice-simulatie](../Simulation/) als SPICE-netlistexport voor een externe simulator. Beide zijn afhankelijk van de SPICE-sjablonen en pinmapping van het component. Alleen het uiterlijk van een symbool beschrijft niet het elektrische gedrag ervan.

Als u een model wilt kiezen dat al in TinyCAD is opgenomen, begint u bij [Gebundelde SPICE-modellen](../Bundled-SPICE-Models/).

## Modellen, sjablonen en pinvolgorde
{: #models-templates-and-pin-order}

Een weerstand kan een native SPICE-element gebruiken. Een transistor heeft mogelijk een `.model` nodig; een complexer apparaat kan een `.subckt` gebruiken. De SPICE-instellingen van een geplaatst symbool verbinden de fysieke pinnummers met de aansluitingen die het model verwacht. Bekijk het tabblad **SPICE** in de symbooleigenschappen; instantieattributen kunnen de standaardwaarden van het symbool overschrijven.

Sjablonen gebruiken:

- **`%(pin)`** voor het verbonden net van het opgegeven TinyCAD-pinnummer.
- **`$(attribute)`** voor een componentattribuut.
- **`refnum`** als een speciaal behandelde referentieachtervoegsel, zodat het SPICE-apparaatprefix van het sjabloon behouden blijft.

Een weerstandssjabloon kan bijvoorbeeld zijn:

```text
R$(refnum) %(1) %(2) $(Value)
```

Voor referentie R3, netten 7 en 9, en waarde `10k` levert dit op:

```spice
R3 7 9 10k
```

Het onderliggende model-sjabloonattribuut is **`$$SPICE`**; proloogtekst is **`$$SPICE_PROLOG`**. Een sjabloon kan de pinnen in een andere volgorde plaatsen: ga er niet van uit dat schemapin 1 de eerste aansluiting van SPICE is. Een BJT-element verwacht **collector, basis, emitter**. Als een symbool de basis als 1, de emitter als 2 en de collector als 3 nummert, moet het sjabloon in die volgorde `%(3) %(1) %(2)` vervangen. Een subcircuit gebruikt de volgorde die is opgegeven op de regel `.subckt`, die kan verschillen van die van een apparaatbehuizing.

Lees het daadwerkelijke symbool en model samen. Voedingspinnen, verborgen pinnen, transistorvarianten en opampmodellen zijn veelvoorkomende bronnen van afwijkingen. Een generiek gedragsmodel in 741-stijl is geen volledig, door de fabrikant gekwalificeerd 741-macro-model.

## Een model gebruiken in geïntegreerde simulatie
{: #use-a-model-in-integrated-simulation}

1. Begin met een [gebundeld model](../Bundled-SPICE-Models/) of voeg een passend Custom-sjabloon aan uw symbool toe. Controleer of de pinmapping overeenkomt met de aansluitvolgorde van het model.
2. TinyCAD zoekt gekoppelde gebundelde modellen automatisch op. Als een Custom-model externe tekst nodig heeft, gebruikt u **Setup → SPICE models** om die toe te voegen met een logische bestandsnaam zoals `part.lib`, `part.cir` of `part.mod`.
3. Los afhankelijkheden van `.include` en `.lib` op via die bijlagen. Sla de tekening op om de vereiste definities erbij te bewaren.
4. Sluit aarde **0** aan, stel de analyse in bij **Setup**, voer deze vervolgens uit en bekijk de diagnostische meldingen.

De beheerde engine haalt geen model op van een website en leest geen willekeurig absoluut pad op uw computer. Lever de afhankelijkheden expliciet aan. De engine voert ook geen willekeurige shellopdrachten, `.control`-scripts, opstartbestanden, extern aangeleverde native modules of bestandsafhankelijke apparaatcomponenten uit. Een leveranciersmodel dat simulatorspecifieke syntaxis gebruikt, moet mogelijk worden aangepast; “SPICE-compatibel” garandeert geen identieke dialecten.

Het geïntegreerde Simulation-blad van TinyCAD beheert de analyseopdrachten en de uiteindelijke `.end`. **Een verouderd RUN-symbool is niet vereist.** Verplaats de oude analyse-instellingen naar Setup en verwijder een verouderd RUN-symbool wanneer u een op export gerichte tekening aanpast. Verwijder analyse-instructies en `.end` uit eventuele resterende componentattributen; deze opdrachten worden geweigerd in het geïntegreerde component-sjabloonpad.

Controleer de licentie van een leveranciersmodel voordat u het verspreidt. Bekijk de gedocumenteerde pinvolgorde, eenheden, modelaannames en ondersteunde simulator. Bewaar de documentatie van de fabrikant bij uw modelleerantekeningen.

## Een SPICE-netlist bekijken en exporteren
{: #inspect-and-export-a-spice-netlist}

Een netlist is een tekstd beschrijving van apparaten en de knooppunten die ze verbinden. Aarde heet `0`. Typische inhoud bestaat uit model-/setupdefinities, componentregels, analyseaanwijzingen en een afsluitende `.end`. Nuttige controles zijn onder meer:

- Verwijst elk component naar het bedoelde model en de bedoelde waarde?
- Hebben verbonden pinnen de verwachte netnamen gemeen?
- Zijn de voedings-/retournetten aanwezig, inclusief 0?
- Klopt de aansluitvolgorde van de halfgeleider of het subcircuit?
- Zijn alle modeldefinities en opgenomen tekst beschikbaar voor de geselecteerde engine?

Open voor de geïntegreerde configuratie **Simulation sheet → Diagnostics → Generate circuit text**, bekijk de uitgebreide netlist en kies vervolgens **Export circuit** om `simulation.cir` op te slaan. Dit bevat de beheerde analyse en kan naar afzonderlijke modelbestanden verwijzen met `.include`. Een externe simulator heeft kopieën van deze bestanden op de opgegeven locaties nodig.

Gebruik voor verouderde, op sjablonen gebaseerde export de afzonderlijke opdracht **Generate Spice NetList** in het menu File van de browser of het menu Desktop Tools. Deze staat los van het PCB-gerichte dialoogvenster [Generate Netlist](../Generate-Netlist/). Deze opdracht neemt de verwijzingen naar gebundelde definities op. Lever eventuele externe afhankelijkheden aan die door Custom-sjablonen worden gebruikt en controleer of de analyse- en uitvoeropdrachten geschikt zijn voor de externe engine. Een bijbehorend tutorialbestand `.cir` kan ook rechtstreeks worden bekeken. **Open een `.dzn`-tekening in TinyCAD; een `.cir`-netlist is geen TinyCAD-tekeningsbestand.**

### Verouderde exportsjablonen
{: #legacy-export-templates}

Het op export gerichte sjabloonsysteem ondersteunt een modeltekst per instantie en een proloog en epiloog per symbool. Identieke prologen/epilogen worden ontdubbeld. Prioriteiten lopen van 0 tot 9: prologen worden uitgevoerd van laag naar hoog; epilogen worden zo gerangschikt dat prioriteit 0 als laatste komt.

Oudere tekeningen kunnen een symbool **RUN** zonder pinnen gebruiken waarvan de proloog/epiloog analyse- en afsluitinstructies voor een geëxporteerde netlist levert. Dit is een exportconventie, geen instructie om RUN toe te voegen aan een geïntegreerd Simulation-blad. Controleer deze instructies voordat u het geëxporteerde bestand in een afzonderlijke simulator uitvoert.

### Voorwaardelijke sjablonen
{: #conditional-templates}

Voor op export gerichte/aangepaste sjablonen zijn onder meer de volgende voorwaardelijke vormen beschikbaar:

```text
?( defined(attribute), true text, false text )
?( not_defined(attribute), true text, false text )
?( empty(attribute), true text, false text )
?( not_empty(attribute), true text, false text )
?( connected(pin), true text, false text )
?( not_connected(pin), true text, false text )
```

Voorwaarden kunnen genest worden. Bekijk de uitgebreide netlist in plaats van een complex sjabloon alleen op basis van de brontekst te beoordelen.

## Numerieke notatie en overdraagbaarheid
{: #numerical-notation-and-portability}

In SPICE-tekst is **`M` milli**, net als `m`; gebruik **`Meg`** voor mega. `1k`, `100n` en `10u` zijn gangbare waarden. Gebruik expliciete modelparameters en verwijzingen in plaats van te vertrouwen op niet-gespecificeerde standaardwaarden van een simulator.

De documentatie van de externe ngspice-opdrachtregel beschrijft een uitgebreidere omgeving dan de geïntegreerde engine van TinyCAD. Raadpleeg voor de volledige elementsyntaxis, modellen, analyses en opmerkingen over compatibiliteit de officiële [ngspice-documentatie](https://ngspice.sourceforge.io/docs.html) en [gebruikershandleiding](https://ngspice.sourceforge.io/docs/ngspice-manual.pdf). Ga verder met [hoe TinyCAD SPICE implementeert](../SPICE-Tutorial-11/) voor een uitgewerkte uitleg van engines, symbolen en netlists.
