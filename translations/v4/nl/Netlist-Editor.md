---
layout: default
---
# Netlijsteditor
{: #netlist-editor}

De `Netlist Editor` is een nieuwe functie in TinyCAD v4.

Gebruik deze functie wanneer u:

- wilt zien hoe TinyCAD uw draden en labels in netten heeft gegroepeerd
- wilt vinden waar een net in de tekening wordt gebruikt
- een type aan een net wilt toewijzen
- wilt wijzigen hoe een groep netten er op het schema uitziet

## Wat de netlijstweergave is
{: #what-the-netlist-view-is}

De `Netlist Editor` is een live lijst van de netten in uw tekening.

Een net is een elektrische verbinding. TinyCAD bepaalt dit aan de hand van uw:

- draden
- pinnen
- labels
- voedingssymbolen

De lijst is live en wordt automatisch bijgewerkt terwijl u het schema bewerkt.

## Hoe u deze opent
{: #how-to-open-it}

1. Kijk onderaan het editorvenster naar het paneel.
2. Als u `Symbols` ziet, gebruikt u de modusknop om over te schakelen naar `Netlist`.

Als er een ander paneel geopend is omdat er iets is geselecteerd, maakt u eerst de selectie ongedaan.

## Wat elke kolom betekent
{: #what-each-column-means}

- `Net`: de netnaam of het interne netnummer
- `Sheet`: het blad waarop het hoofditem voor die rij is gevonden
- `Connections`: het aantal pinaansluitingen op dat net
- `Labels`: labels die op dat net zijn gevonden
- `Type`: het netlisttype dat aan dat net is toegewezen
- `Symbols`: aangesloten onderdelen en pinnen op dat net

## De netlijstweergave gebruiken
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

Beweeg de muis over een rij.

TinyCAD markeert de overeenkomende netitems in het schema, zodat u kunt zien waar dat net zich bevindt.

### Naar een net in de tekening gaan
{: #jump-to-a-net-in-the-drawing}

Klik op een rij.

TinyCAD gaat naar het bijbehorende item op het juiste blad.

## Een type aan een net toewijzen
{: #how-to-assign-a-type-to-a-net}

Elke rij heeft een veld `Type`.

Een type toewijzen:

1. Klik in het veld `Type` voor het net.
2. Kies een bestaand type uit de lijst of typ een nieuwe naam.
3. Klik buiten het veld om de wijziging toe te passen.


## Wat een nettype is
{: #what-a-net-type-is}

Een nettype is een herbruikbaar label voor een groep netten.

U kunt het gebruiken om:

- netten in categorieën te ordenen
- overeenkomende netten dezelfde kleuren te geven
- bepaalde netten in de tekening dikker weer te geven
- extra notities als attributen op te slaan

Voorbeelden van mogelijke typenamen:

- `power`
- `control`
- `logic`
- `analog`
- `high_current`

## Netlist Types openen
{: #how-to-open-netlist-types}

1. Open de weergave `Netlist` op de onderste balk.
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
- eigen attributen toevoegen
- het resultaat bekijken voordat u het opslaat

## Het standaardtype
{: #the-default-type}

Er is altijd een type `default`.

Belangrijke zaken om te weten:

- het kan niet worden hernoemd
- het kan niet worden verwijderd
- de kleuren zijn de normale tekenkleuren

Als u de kleuren op de rij `default` wijzigt, wijzigt u de normale netkleuren die in de tekening worden gebruikt.

## Een nieuw type maken
{: #how-to-create-a-new-type}

1. Open `Netlist Types`.
2. Klik op `Add`.
3. Voer een naam in.
4. Stel de gewenste kleuren en draaddikte in.
5. Klik op `OK` om op te slaan.

Daarna kunt u het nieuwe type aan netten toewijzen vanuit de onderste weergave `Netlist`.

## Een type dupliceren
{: #how-to-duplicate-a-type}

Dit is handig wanneer u iets wilt dat lijkt op een bestaand type.

1. Selecteer de typerij.
2. Klik op `Duplicate`.
3. Wijzig de nieuwe naam.
4. Pas de gewenste kleuren of instellingen aan.
5. Klik op `OK`.

## Kleuren wijzigen
{: #how-to-change-colors}

Elk type kan afzonderlijke kleuren hebben voor:

- draden
- labels
- voedingselementen

Een kleur wijzigen:

1. Klik op de kleurcel in de rij.
2. Kies de kleur in het kleurendialoogvenster.
3. Sluit het kleurendialoogvenster.
4. Klik op `OK` in het hoofdvenster `Netlist Types`.

Niet-standaardtypen kunnen hun eigen kleur gebruiken of terugvallen op de standaardtekenkleur.

## De draaddikte wijzigen
{: #how-to-change-wire-thickness}

1. Zoek de typerij.
2. Wijzig de waarde `Wire Thickness`.
3. Klik op `OK`.

Dit bepaalt hoe draden op netten van dat type op het schema worden getekend.

## Attributen toevoegen
{: #how-to-add-attributes}

Attributen zijn eenvoudige naam/waarde-items die met het type worden opgeslagen.

Deze toevoegen:

1. Klik op de cel `Attributes` voor het type.
2. Voeg attribuutnamen en -waarden toe of bewerk ze.
3. Sla de attributen op.
4. Klik op `OK` in het hoofddialoogvenster.

Op dit moment worden deze attributen voornamelijk bij de tekening opgeslagen. Ze zijn handig om extra type-informatie te bewaren, ook als ze nog niet door elk uitvoerformaat worden gebruikt.


## Gerelateerde pagina's
{: #related-pages}

- [Netlijst genereren](../Generate-Netlist/)
- [Stuklijst](../Bill-Of-Materials/)
- [Ontwerpregels controleren](../Design-Rules-Check/)
- [SPICE-uitvoer](../SPICE-output/)
- [VHDL-uitvoer](../VHDL-output/)

- Terug naar [Geavanceerd](../Advanced/)
- Terug naar [v4-inhoudsopgave](../CONTENTS/)
