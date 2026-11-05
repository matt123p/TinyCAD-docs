---
layout: default
---
# Netlijst genereren
{: #generate-netlist}

TinyCAD kan een netlijstbestand genereren voor gebruik bij PCB-ontwerp en in andere vervolgtools.

Een netlijst is een tekstuele beschrijving van twee zaken:

- welke componentinstanties in het ontwerp voorkomen
- welke pinnen op elk net met elkaar zijn verbonden

TinyCAD leest de elektrische verbindingen van het schema uit uw tekening en schrijft die gegevens in de door u gekozen uitvoerindeling.

## Waarvoor een gegenereerde netlijst wordt gebruikt
{: #what-a-generated-netlist-is-for}

De gegenereerde netlijst wordt voornamelijk gebruikt om een afgerond schema over te zetten naar een andere tool, met name een programma voor PCB-ontwerp.

Typische toepassingen zijn:

- het circuit importeren in een PCB-tool
- controleren of de verbindingen op de PCB overeenkomen met het schema
- componentreferenties en netnamen bekijken in een tekstbestand

TinyCAD ontwerpt de PCB niet voor u. Het exporteert de verbindingsgegevens zodat een andere tool deze kan gebruiken.

## Voordat u de netlijst genereert
{: #before-generating-the-netlist}

Het exporteren van een netlijst is afhankelijk van elektrische verbindingen in het schema die zijn aangebracht op de manier die TinyCAD verwacht. Het is verstandig om eerst [Design Rules Check](../Design-Rules-Check/) uit te voeren.

## Het kenmerk `Package`
{: #the-package-attribute}

Voor PCB-export vereisen veel doeltools dat elke component een footprint- of pakketnaam heeft.

In TinyCAD wordt deze doorgaans opgeslagen als een symboolkenmerk met de naam `Package`.

Bij het exporteren van de netlijst schrijft TinyCAD dit kenmerk naar het uitvoerbestand, zodat het PCB-programma het schema-symbool aan de juiste footprint kan koppelen.

Hetzelfde symbool kan op verschillende plaatsen in een ontwerp verschillende pakketwaarden gebruiken. Controleer daarom het kenmerk op de geplaatste component en niet alleen de standaardwaarde in de bibliotheek.

## De netlijst genereren
{: #how-to-generate-the-netlist}

1. Open het ontwerp dat u wilt exporteren.
2. Voer de opdracht voor het exporteren van een netlijst uit via de exportopties in de gebruikersinterface van TinyCAD.
3. Kies de uitvoerindeling die vereist is door uw doeltool.
4. Kies de bestandsnaam en sla het geëxporteerde bestand op.


## Indelingen in het dialoogvenster Netlijst genereren
{: #formats-in-the-generate-netlist-dialog}

Het dialoogvenster biedt momenteel de volgende indelingen:

- `PADS-PCB`
- `PADS-PCB-WITH-VALUE`
- `Eagle SCR`
- `Protel`
- `gEDA PCB`

## Betekenis van de indelingen
{: #what-the-formats-mean}

### PADS-PCB
{: #pads-pcb}

Maakt een netlijstbestand in PADS-stijl.

### PADS-PCB-WITH-VALUE
{: #pads-pcb-with-value}

Maakt een netlijstbestand in PADS-stijl en neemt waar beschikbaar ook de componentwaarde op.

### Eagle SCR
{: #eagle-scr}

Maakt een Eagle-scriptbestand.

### Protel
{: #protel}

Maakt een netlijstbestand in Protel-stijl.

### gEDA PCB
{: #geda-pcb}

Maakt een gEDA PCB-netlijstbestand.

## SPICE en VHDL
{: #spice-and-vhdl}

SPICE- en VHDL-export worden afzonderlijk afgehandeld, buiten het hoofddialoogvenster `Generate Netlist`.

Gebruik hiervoor de volgende opdrachten:

- `Generate Spice NetList`
- `Create VHDL File`

Deze opdrachten genereren eerst de netgegevens, maar gebruiken hun eigen specifieke exportfuncties.

## Welke bestandsnaam wordt gebruikt
{: #what-file-name-is-used}

TinyCAD gebruikt de naam van de huidige tekening en wijzigt de bestandsextensie zodat deze overeenkomt met de exportindeling.

Voorbeelden:

- `.net`
- `.scr`
- `.cir`
- `.vhdl`


## Wat u na het exporteren moet controleren
{: #what-to-check-after-export}

Omdat netlijsten tekstbestanden zijn, kunt u ze eenvoudig in een teksteditor bekijken.

Controleer ten minste de volgende punten:

- componentreferenties zijn aanwezig en uniek
- de verwachte netnamen staan in het bestand
- pakket- of footprintwaarden zijn aanwezig waar vereist
- er ontbreken geen onderdelen of verbindingen die wel aanwezig zouden moeten zijn

Als het resultaat er onjuist uitziet, ligt de oorzaak meestal in de schemagegevens en niet in de exportstap zelf.

## Veelvoorkomende oorzaken van onjuiste netlijsten
{: #common-causes-of-incorrect-netlists}

- er is een tekenlijn gebruikt in plaats van een draad
- een draad eindigt vlak bij een pin, maar is er niet daadwerkelijk op aangesloten
- een component heeft geen referentie
- een vereist kenmerk `Package` ontbreekt of is inconsistent
- labels die bedoeld zijn om verbinding te maken, komen niet exact overeen

## Verwante pagina's
{: #related-pages}

- [Netlist Editor](../Netlist-Editor/)
- [Design Rules Check](../Design-Rules-Check/)
- [SPICE-uitvoer](../SPICE-output/)

- Terug naar [Geavanceerd](../Advanced/)
- Terug naar [Inhoud van v4](../CONTENTS/)
