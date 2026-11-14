---
layout: default
---
# Netlijsteditor
{: #netlist-editor}

De `Netlist Editor` is een nieuwe functie in TinyCAD v4.

Gebruik deze functie als u het volgende wilt:

- zien hoe TinyCAD uw draden en labels in netten heeft gegroepeerd
- vinden waar een net in de tekening wordt gebruikt
- een type aan een net toewijzen
- de weergave van een groep netten in het schema wijzigen

## Wat de Netlist-weergave is
{: #what-the-netlist-view-is}

De `Netlist Editor` is een live lijst van de netten in uw tekening.

Een net is een elektrische verbinding. TinyCAD bepaalt dit aan de hand van uw:

- draden
- pinnen
- labels
- voedingssymbolen

De lijst is live en wordt automatisch bijgewerkt terwijl u het schema bewerkt.

## Zo opent u deze weergave
{: #how-to-open-it}

1. Kijk naar het onderste paneel van de editor.
2. Als u `Symbols` ziet, gebruikt u de modusknop om over te schakelen naar `Netlist`.

Als er een ander paneel is geopend omdat iets is geselecteerd, maakt u eerst de selectie ongedaan.

![Netlist-weergave onder het schematische delerdiagram, met de rij OUT gemarkeerd](../images/netlist-editor/netlist-overview.png)

In dit meegeleverde voorbeeld van een deler verbindt de rij `OUT` `R1.2` met `R2.1`.
Als u de muisaanwijzer op die rij plaatst, wordt de verbinding in de tekening gemarkeerd.

## Betekenis van de kolommen
{: #what-each-column-means}

- `Net`: de netnaam of het interne netnummer
- `Sheet`: het blad waarop het hoofditem voor die rij is gevonden
- `Connections`: het aantal pinaansluitingen op dat net
- `Labels`: labels die op dat net zijn gevonden
- `Type`: het aan dat net toegewezen netlisttype
- `Symbols`: aangesloten onderdelen en pinnen op dat net

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

Plaats de muisaanwijzer op een rij.

TinyCAD markeert de overeenkomende netitems in het schema, zodat u kunt zien waar dat net zich bevindt.

### Naar een net in de tekening springen
{: #jump-to-a-net-in-the-drawing}

Klik op een rij.

TinyCAD springt naar het bijbehorende item op het juiste blad.

## Een type aan een net toewijzen
{: #how-to-assign-a-type-to-a-net}

Elke rij heeft een veld `Type`.

Een type toewijzen:

1. Klik in het veld `Type` voor het net.
2. Kies een bestaand type uit de lijst.
3. Als u eerst een nieuw type wilt definiëren, gebruikt u `Netlist Types` zoals hieronder beschreven en keert u daarna terug naar het veld `Type` van het net.

![Netlist gefilterd op OUT, met het type control toegewezen](../images/netlist-editor/netlist-type-assignment.png)

Hier wordt door te zoeken naar `OUT` het uitgangsnet van de deler geïsoleerd en wordt het `Type` ingesteld op `control`.


## Wat een nettype is
{: #what-a-net-type-is}

Een nettype is een herbruikbaar label voor een groep netten.

U kunt het gebruiken om:

- netten in categorieën in te delen
- overeenkomende netten dezelfde kleuren te geven
- bepaalde netten in de tekening dikker weer te geven
- extra opmerkingen als attributen op te slaan

Voorbeelden van mogelijke typenamen:

- `power`
- `control`
- `logic`
- `analog`
- `high_current`

## Netlist Types openen
{: #how-to-open-netlist-types}

1. Open de `Netlist`-weergave in de onderste balk.
2. Klik op `Netlist Types`.

Hiermee opent u de editor voor alle beschikbare typedefinities.

## Wat u kunt doen in Netlist Types
{: #what-you-can-do-in-netlist-types}

In het venster `Netlist Types` kunt u:

- een nieuw type toevoegen
- een bestaand type dupliceren
- een type hernoemen
- een type verwijderen
- de draadkleur wijzigen
- de labelkleur wijzigen
- de kleur van voedingssymbolen wijzigen
- de draaddikte wijzigen
- uw eigen attributen toevoegen
- het resultaat bekijken voordat u het opslaat

## Het standaardtype
{: #the-default-type}

Er is altijd een type `default`.

Belangrijke zaken om te weten:

- het kan niet worden hernoemd
- het kan niet worden verwijderd
- de kleuren zijn de normale tekenkleuren

Als u de kleuren op de rij `default` wijzigt, verandert u de normale netkleuren die in de tekening worden gebruikt.

## Een nieuw type maken
{: #how-to-create-a-new-type}

1. Open `Netlist Types`.
2. Klik op `Add`.
3. Voer een naam in.
4. Stel de gewenste kleuren en draaddikte in.
5. Klik op `OK` om op te slaan.

Daarna kunt u het nieuwe type aan netten toewijzen via de `Netlist`-weergave onderaan.

![Netlist Types-editor met de typen default, control en power en een draaddikte van 2 voor control](../images/netlist-editor/netlist-types.png)

In het voorbeeld worden de typen `control` en `power` toegevoegd. Het type `control` heeft een draaddikte van `2`; elke kleurknop opent een eigen editor.

## Een type dupliceren
{: #how-to-duplicate-a-type}

Dit is handig als u iets wilt dat lijkt op een bestaand type.

1. Selecteer de typerij.
2. Klik op `Duplicate`.
3. Wijzig de nieuwe naam.
4. Bewerk de gewenste kleuren of instellingen.
5. Klik op `OK`.

## Kleuren wijzigen
{: #how-to-change-colors}

Elk type kan aparte kleuren hebben voor:

- draden
- labels
- voedingsitems

Een kleur wijzigen:

1. Klik op de kleurcel in de rij.
2. Schakel voor een niet-standaardtype `Override colour` in en kies vervolgens een kleur.
3. Klik op `OK` in het kleurendialoogvenster.
4. Klik op `OK` in het hoofdvenster `Netlist Types`.

Niet-standaardtypen kunnen hun eigen kleur gebruiken of terugvallen op de standaardtekenkleur.

![Draadkleureditor met Override colour ingeschakeld en een groene draad in het voorbeeld](../images/netlist-editor/netlist-colour-preview.png)

In het voorbeeld ziet u de geselecteerde draadkleur naast de label- en voedingssymboolkleuren. Gebruik de tabbladen `Wire`, `Label` en `Power` om elke instelling te bekijken voordat u opslaat.

## De draaddikte wijzigen
{: #how-to-change-wire-thickness}

1. Zoek de typerij.
2. Wijzig de waarde `Wire Thickness`.
3. Klik op `OK`.

Dit bepaalt hoe draden van netten van dat type in het schema worden getekend.

## Attributen toevoegen
{: #how-to-add-attributes}

Attributen zijn eenvoudige naam/waarde-vermeldingen die bij het type worden opgeslagen.

Toevoegen:

1. Klik op de cel `Attributes` voor het type.
2. Klik op `Add Attribute` en voer vervolgens de attribuutnaam en -waarde in. Herhaal dit voor eventuele extra vermeldingen.
3. Sla de attributen op.
4. Klik op `OK` in het hoofddialoogvenster.

![Attributeneditor met de vermeldingen purpose en notes voor het type control](../images/netlist-editor/netlist-attributes.png)

Deze voorbeeldvermeldingen beschrijven het doel van het type en voegen een bedradingsopmerking toe. Ze horen bij het type en kunnen worden gedeeld door elk net waaraan het type is toegewezen.

Op dit moment worden deze attributen voornamelijk bij de tekening opgeslagen. Ze zijn handig om extra type-informatie bij te houden, ook als ze nog niet door elk uitvoerformaat worden gebruikt.


## Gerelateerde pagina's
{: #related-pages}

- [Netlist genereren](../Generate-Netlist/)
- [Materiaallijst](../Bill-Of-Materials/)
- [Ontwerpregelscontrole](../Design-Rules-Check/)
- [SPICE-uitvoer](../SPICE-output/)
- [VHDL-uitvoer](../VHDL-output/)

- Terug naar [Geavanceerd](../Advanced/)
- Terug naar [v4-inhoud](../)
