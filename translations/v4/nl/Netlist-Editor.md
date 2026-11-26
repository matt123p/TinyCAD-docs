---
layout: default
---
# Netlijsteditor
{: #netlist-editor}

De `Netlist Editor` is een nieuwe functie in TinyCAD v4.

Gebruik deze functie wanneer u het volgende wilt:

- zien hoe TinyCAD uw draden en labels in netten heeft gegroepeerd
- vinden waar een net in de tekening wordt gebruikt
- een type aan een net toewijzen
- wijzigen hoe een groep netten er op het schema uitziet

## Wat de Netlist-weergave is
{: #what-the-netlist-view-is}

De `Netlist Editor` is een live lijst met de netten in uw tekening.

Een net is een elektrische verbinding. TinyCAD bepaalt dit aan de hand van uw:

- draden
- pinnen
- labels
- voedingssymbolen

De lijst is live en wordt automatisch bijgewerkt terwijl u het schema bewerkt.

## Hoe u de weergave opent
{: #how-to-open-it}

1. Kijk naar het onderste paneel van de editor.
2. Als u `Symbols` ziet, gebruikt u de modusknop om over te schakelen naar `Netlist`.

Als er een ander paneel is geopend omdat er iets is geselecteerd, maakt u eerst de selectie ongedaan.

![Netlist-weergave onder het delerschema, met de rij OUT gemarkeerd](../images/netlist-editor/netlist-overview.png)

In dit meegeleverde delervoorbeeld verbindt de rij `OUT` `R1.2` met `R2.1`.
Als u de muisaanwijzer boven die rij houdt, wordt de verbinding in de tekening gemarkeerd.

## Wat elke kolom betekent
{: #what-each-column-means}

- `Net`: de netnaam of het interne netnummer
- `Sheet`: het blad waarop het hoofditem voor die rij is gevonden
- `Connections`: het aantal pinaansluitingen op dat net
- `Labels`: labels die op dat net zijn gevonden
- `Type`: het netlisttype dat aan dat net is toegewezen
- `Symbols`: onderdelen en pinnen die op dat net zijn aangesloten

## De Netlist-weergave gebruiken
{: #how-to-use-the-netlist-view}

### Een net zoeken
{: #find-a-net}

Gebruik het zoekvak om de lijst te filteren.

U kunt zoeken op:

- netnaam
- bladnaam
- labeltekst
- symboolreferentie
- typenaam

### Een net in de tekening markeren
{: #highlight-a-net-in-the-drawing}

Beweeg de muisaanwijzer over een rij.

TinyCAD markeert de bijbehorende netitems in het schema, zodat u kunt zien waar dat net zich bevindt.

### Naar een net in de tekening springen
{: #jump-to-a-net-in-the-drawing}

Klik op een rij.

TinyCAD springt naar het bijbehorende item op het juiste blad.

## Een type aan een net toewijzen
{: #how-to-assign-a-type-to-a-net}

Klik met de weergave **Netlist** geopend op een draad in het schema om de rij van het bijbehorende net te markeren. Gebruik de lijst **Type** op die rij om een bestaand type te kiezen. Als u een type met een eigen draadstijl wilt maken, opent u **Netlist Types** en definieert u eerst de stijl.

Een nettype is een herbruikbare verzameling tekenstijlen. Wijs hetzelfde type aan meerdere netten toe om ze er hetzelfde uit te laten zien. Als u dat type bewerkt, worden alle netten die het gebruiken bijgewerkt. U kunt netten van een type ook hun eigen label- en voedingssymboolkleuren geven, of notities als kenmerken opslaan. Stijlwijzigingen veranderen het uiterlijk van de tekening, maar behouden de elektrische verbindingen.

## Voorbeeld – Maak de OUT-draad van de deler groen en dikker
{: #example--make-the-dividers-out-wire-green-and-thicker}

Open de meegeleverde tekening `divider` via **Open Example** → **SPICE tutorial** en zoom in op de schakeling. Schakel in het onderste paneel over van **Symbols** naar **Netlist**. Het label **OUT** identificeert het net tussen pinnen **R1.2** en **R2.1**. Het net gebruikt aanvankelijk het type `default` en heeft de normale draaddikte.

![Deler vóór het opmaken, met de dunne blauwe OUT-draad tussen R1 en R2](../images/netlist-editor/netlist-wire-before.png)

### De draadstijl maken
{: #create-the-wire-style}

1. Klik op **Netlist Types**, klik op **Add** en geef het nieuwe type de naam `control`.
2. Stel in de rij `control` **Wire thickness** in op `4`. De waarde `1` geeft de normale lijndikte. Druk op **Tab** om de waarde toe te passen.
3. Klik in dezelfde rij op de cel **Wire colour**. Vink **Override colour** aan en voer voor groen `007F5F` in het veld **Hex** in. In het voorbeeld ziet u de draad met beide instellingen.
4. Klik op **OK** in de kleurenkiezer. Controleer het groene kleurstaal en de diktewaarde op de rij `control` en klik vervolgens op **OK** in **Netlist Types** om het type op te slaan.

![Kleurenkiezer voor de draad, met Override colour aangevinkt en de groene draad zichtbaar in het voorbeeld](../images/netlist-editor/netlist-wire-colour.png)

![Netlist Types met het groene kleurstaal voor Wire colour en een Wire thickness van 4 op de rij control](../images/netlist-editor/netlist-wire-type.png)

### De stijl op OUT toepassen
{: #apply-the-style-to-out}

1. Klik op de draad vlak boven **R2** in het schema. TinyCAD markeert de rij **OUT** in het paneel **Netlist**.
2. Open de lijst **Type** op de gemarkeerde rij en kies `control`.
3. Klik op een leeg gebied van het schema om de selectie ongedaan te maken. De draad tussen **R1.2** en **R2.1** is nu groen en dikker. Kies `default` in de lijst **Type** om de normale draadstijl te herstellen.

![Geselecteerde OUT-draad in het schema en de gemarkeerde Netlist-rij met control geselecteerd](../images/netlist-editor/netlist-wire-assignment.png)

![Deler na het opmaken, met de dikkere groene OUT-draad tussen R1 en R2](../images/netlist-editor/netlist-wire-after.png)

Gebruik **Save As** om uw bewerkte kopie van het voorbeeld te bewaren.

### De uitlegvideo bekijken
{: #watch-the-walkthrough}

{% include video-player.html src="/v4/videos/netlist-editor/netlist-editor.webm" type="video/webm" poster="/v4/images/netlist-editor/netlist-walkthrough-start.png" caption="Schakel over naar Netlist, maak een groene draadstijl en klik vervolgens op de OUT-draad om de bijbehorende rij te vinden en de stijl toe te passen." %}

## Wat u kunt doen in Netlist Types
{: #what-you-can-do-in-netlist-types}

In het venster `Netlist Types` kunt u:

- een nieuw type toevoegen
- een bestaand type dupliceren
- een type hernoemen
- een type verwijderen
- de draadkleur wijzigen
- de labelkleur wijzigen
- de kleur van het voedingssymbool wijzigen
- de draaddikte wijzigen
- uw eigen kenmerken toevoegen
- het resultaat bekijken voordat u het opslaat

## Het standaardtype
{: #the-default-type}

Het type `default` heeft een vaste naam en een draaddikte van `1`. TinyCAD gebruikt de kleuren op deze rij als de normale netkleuren van de tekening. Netten zonder toegewezen type gebruiken `default`.

## Een type dupliceren
{: #how-to-duplicate-a-type}

Dit is handig wanneer u iets wilt maken dat lijkt op een bestaand type.

1. Selecteer de typerij.
2. Klik op `Duplicate`.
3. Hernoem de kopie en pas de kleuren of dikte aan.
4. Klik op `OK`.

## Kleuren van labels en voedingssymbolen
{: #label-and-power-symbol-colours}

Gebruik de tabbladen **Wire**, **Label** en **Power** in de kleurenkiezer om elke kleur afzonderlijk te bewerken. Schakel voor een aangepast type op elk tabblad dat u wilt aanpassen **Override colour** in. Als de overschrijving op een tabblad is uitgeschakeld, gebruikt dat item de standaardkleur van de tekening.

## Kenmerken toevoegen
{: #how-to-add-attributes}

Kenmerken zijn eenvoudige naam/waarde-items die bij het type worden opgeslagen.

Zo voegt u ze toe:

1. Klik op de cel `Attributes` van het type.
2. Klik op `Add Attribute` en voer vervolgens de naam en waarde van het kenmerk in. Herhaal dit voor eventuele extra items.
3. Sla de kenmerken op.
4. Klik op `OK` in het hoofdvenster.

![Kenmerkeditor met items voor doel en notities voor het type control](../images/netlist-editor/netlist-attributes.png)

Deze voorbeelditems beschrijven het doel van het type en voegen een bedradingsnotitie toe. Ze horen bij het type en kunnen worden gedeeld door elk net dat eraan is toegewezen.

Op dit moment worden deze kenmerken voornamelijk bij de tekening opgeslagen. Ze zijn handig om extra type-informatie bij te houden, ook als ze nog niet door elk uitvoerformaat worden gebruikt.


## Verwante pagina's
{: #related-pages}

- [Netlist genereren](../Generate-Netlist/)
- [Materiaallijst](../Bill-Of-Materials/)
- [Ontwerpregels controleren](../Design-Rules-Check/)
- [SPICE-uitvoer](../SPICE-output/)
- [VHDL-uitvoer](../VHDL-output/)

- Terug naar [Geavanceerd](../Advanced/)
- Terug naar [v4-inhoudsopgave](../)
