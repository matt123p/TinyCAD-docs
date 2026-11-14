---
layout: default
title: 2. Gates and truth tables
---
# 2. Poorten en waarheidstabellen
{: #gates-and-truth-tables}

[Vorige](/v4/XSPICE-Tutorial-01/) · [Inhoud](/v4/Simulation-Tutorials/) · [Volgende](/v4/XSPICE-Tutorial-03/)

De voorbeelden in dit hoofdstuk worden meegeleverd met TinyCAD. Kies **Voorbeeld openen (Open Example) → XSPICE- en digitale tutorial**, selecteer het genoemde voorbeeld en kies vervolgens **Tekening openen (Open Drawing)**. Downloaden is niet nodig.

Open **logic-nand**. X1 bevat ADC-bruggen, een
tweeingangs-XSPICE-NAND-poort en een DAC-uitgangsbrug. Onafhankelijke pulsbronnen sturen
A en B met verschillende snelheden aan. Voer de transiëntanalyse van 8 µs uit en geef A, B en Y weer.

![NAND-testcircuit](/v4/images/simulation-tutorials/xspice/logic-nand-circuit.png)
![Berekende NAND-golfvormen](/v4/images/simulation-tutorials/xspice/logic-nand-results.png)

De Booleaanse functie is `Y = NOT(A AND B)`:

| A | B | Gestabiliseerde Y |
| --- | --- | --- |
| 0 | 0 | 1 |
| 0 | 1 | 1 |
| 1 | 0 | 1 |
| 1 | 1 | 0 |

In de weergegeven analoge representatie betekent nul ongeveer 0 V en één
ongeveer 5 V. De uitgang wordt alleen laag wanneer beide ingangen hoog zijn.
Bekijk het midden van elk stabiel interval, niet het exacte moment waarop
een ingang een drempelwaarde overschrijdt. De poort heeft stijgende en dalende voortplantingsvertragingen van
20 ns; de bruggen en hun eindige flanken dragen bij aan extra vertraging.

## Voer een doelbewust waarheidstabelexperiment uit
{: #run-a-deliberate-truth-table-experiment}

Gebruik grafiekcursors om voor elke rij een stabiel interval te identificeren. Noteer A, B en Y
nadat de uitgang is gestabiliseerd. Als een zeer korte ingangcombinatie alleen optreedt
terwijl twee ingangen veranderen, gebruik die overgang dan niet als bewijs voor een stabiele
waarheidstabelrij. Voor een ondubbelzinnige handmatige controle wijzigt u de twee bronnen in DC
0 V of 5 V, voert u de transiëntanalyse opnieuw uit en test u de vier combinaties afzonderlijk.

In het ingebedde SPICE-model van X1 zijn de kerninstructies:

```spice
Ag [da db] dy ng
.model ng d_nand(rise_delay=20n fall_delay=20n)
```

De vierkante haken groeperen een vector van ingangspoorten. `da`, `db` en `dy` zijn
interne gebeurtenisgestuurde knooppunten. Dit zijn geen gewone elektrische netten waarop u rechtstreeks een
weerstand kunt aansluiten. De bruggen verbinden deze interne knooppunten
met de analoge aansluitingen die in de tekening zichtbaar zijn.

Als u met een andere functie wilt experimenteren, maakt u een kopie van de tekening en wijzigt u
het modeltype in de SPICE-proloog van X1 in een compatibele poort, zoals `d_and`.
Zorg dat de vector/scalar-poortinterface compatibel blijft. De waarheidstabel van de AND-poort moet
na het stabiliseren van de overgangen het omgekeerde van het NAND-resultaat zijn.

## Wat dit voorbeeld niet aantoont
{: #what-this-example-does-not-establish}

Het model stelt geen specifiek, in een behuizing ondergebracht IC voor, noch de ESD-diodes, fan-outbeperkingen,
pieken in de voedingsstroom of de timing van de fabrikant bij een bepaalde belasting. De vertraging van 20 ns is
een invoerparameter van dit experiment. Een correcte waarheidstabel bewijst de functionele
logica voor de geteste toestanden, niet de elektrische compatibiliteit met een andere chip.

Als er iets niet klopt, controleert u eerst de opgeslagen bronniveaus, daarna de drempels van de bruggen
en vervolgens het poortmodel en de poortvolgorde. Een ingang op 2 V heeft onder deze bruginstellingen een onbepaald niveau
en kan niet aan een van beide Booleaanse waarden worden toegewezen alleen omdat de spanning dichter bij een voedingsrail ligt.

Modeldefinities en poortconventies worden beschreven in het hoofdstuk over XSPICE-codemodellen
van de [ngspice-handleiding](https://ngspice.sourceforge.io/docs.html).

## De lescircuits downloaden
{: #download-the-lesson-circuits}

Dezelfde voorbeelden zijn al beschikbaar via **Voorbeeld openen (Open Example)**. Download voor een zelfstandige kopie een `.dzn`-tekening en gebruik **Bestand → Openen (File → Open)** in TinyCAD. Het bijbehorende `.cir`-bestand bevat SPICE-tekst om te inspecteren of te gebruiken in een compatibele externe simulator; het is geen TinyCAD-tekening. Voor nieuwe simulaties van XSPICE-circuits is Desktop vereist.

| Voorbeeld | Tekening | Netlist |
| --- | --- | --- |
| logic-nand | [TinyCAD-tekening](/v4/examples/simulation-tutorials/xspice/logic-nand.dzn) | [SPICE-tekst](/v4/examples/simulation-tutorials/xspice/logic-nand.cir) |
