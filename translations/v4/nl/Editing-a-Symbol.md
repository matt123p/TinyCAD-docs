---
layout: default
---
# Een symbool bewerken
{: #editing-a-symbol}

Als u een symbool wilt genereren op basis van een gegevensblad of meerdere componenten aan een geopende bibliotheek wilt toevoegen, raadpleeg dan de [handleiding voor de AI-assistent](../AI-Assistant/). U kunt de resultaten verfijnen met de bewerkingstools op deze pagina.

## Hoe symbolen werken in TinyCAD
{: #how-symbols-work-in-tinycad}

Symbolen worden gemaakt met normale objecten op de werkbalk. Ze mogen
elk van deze objecten bevatten, behalve andere symbolen.

Als het symbool objecten met speciale functies bevat (zoals een voedingsitem
of een draad), worden die objecten behandeld alsof het annotaties zijn.

Al hun speciale functies gaan verloren wanneer ze in een symbool worden gebruikt. Alleen **pennen** definiëren
elektrische aansluitpunten.

Samenvatting:
- een symbool is een herbruikbare afbeelding plus attributen
- elektrische connectiviteit wordt gedefinieerd door **pennen**
- en symbolen worden opgeslagen in **bibliotheken** (`.tclib`)

## Voordat u begint
{: #before-you-start}

Op deze pagina wordt ervan uitgegaan dat u al een bibliotheek hebt geopend om te bewerken. De stappen voor
het openen of maken van een bibliotheek zijn afhankelijk van het feit of u TinyCAD Web of
de desktoptoepassing gebruikt. Begin daarom met [Aangepaste symboolbibliotheken](../Custom-symbol-libraries/).

Als u symbolen wilt doorzoeken en plaatsen in plaats van bewerken, raadpleeg dan [Symboolbibliotheken gebruiken](../Using-Symbol-Libraries/).

## Het symbool openen of maken
{: #open-or-create-the-symbol}

1. Open de bibliotheek.
2. Als u een bestaand symbool wilt bewerken, klikt u erop in de lijst met bibliotheeksymbolen.
3. Als u een nieuw symbool wilt maken, klikt u op de knop `+` in de lijst met symbolen.
4. Het geselecteerde of nieuwe symbool wordt in het editorcanvas geladen.

U kunt vervolgens de afbeeldingen, pennen en symboolattributen wijzigen.

{% include video-player.html
	src="/v4/images/video/Video 12.mp4"
	width=1532
	height=978
	caption="Videohandleiding waarin wordt getoond hoe u een bibliotheek bewerkt."
%}


## De symboolvorm tekenen (afbeeldingen)
{: #drawing-the-symbol-shape-graphics}

Gebruik standaardtekengereedschappen om de omtrek van het symbool te maken:

- lijnen/polylijnen voor de randen van de behuizing,
- rechthoeken/ellipsen/bogen voor gangbare behuizingsomtrekken,
- tekst voor optionele interne markeringen.

Zorg dat het symbool bij de normale zoom voor schema's goed leesbaar is. Eenvoudige vormen werken meestal
beter dan zeer decoratieve afbeeldingen.

## Pennen toevoegen
{: #adding-pins}

Pennen zijn het enige elektrisch actieve onderdeel van een symbool.

Stel voor elke pen het volgende in:

- **Pennummer** (vereist en uniek binnen een onderdeel),
- **Pennaam** (optioneel, maar sterk aanbevolen),
- **Elektrisch type** (vereist voor nauwkeurige DRC),
- **Penstijl/-vorm** (visuele stijl),
- **Zichtbaarheid** van de pennaam/-nummertekst, indien nodig.

Plaats de pennen zorgvuldig op het raster, zodat bedrading in het schema eenvoudig is.

{% include video-player.html
	src="/v4/images/video/Video 13.mp4"
	width=1532
	height=978
	caption="Videohandleiding waarin wordt getoond hoe u pennen toevoegt."
%}


## Pennenpaneel
{: #pin-panel}

U kunt pennen bewerken in het paneel **Pen** in het gebied van het **onderste paneel**.

Bewerkingen in het pennenpaneel zijn **direct**: elke veldwijziging voert onmiddellijk
een actie uit om de pen bij te werken (er is geen aparte stap OK/Toepassen).

Onderdelen van het pennenpaneel:

1. **Naam**
	- Selectievakje Weergeven (`show_name`)
	- Tekstveld Naam (`name`)
	- Selectievakje Centreren op pen (`centre_name`)
2. **Nummer**
	- Selectievakje Weergeven (`show_number`)
	- Tekstveld Nummer (`number`)
	- Numeriek veld Verschuiving (`number_pos`)
3. **Type**
	- Keuzelijst Vorm (`which`)
	- Keuzelijst Elektrisch (`elec`)
	- Numeriek veld Lengte (`length`, UI-bereik 5..50)

Opmerkingen:

- Vorm bepaalt het uiterlijk van het symbool en bepaalde speciale visuele gedragingen.
- De vorm `Cross` en het elektrische type `Not Connected` tekenen beide een kruis.
- De vormstijlen `Power` en `Hidden` worden weergegeven met de kleur voor verborgen pennen.

## Elektrische pentypen en DRC-gedrag
{: #pin-electrical-types-and-drc-behavior}

Het selecteren van het juiste elektrische type is essentieel. DRC gebruikt deze typen om
verbindingsfouten op te sporen.

Huidige waarden in de TinyCAD v4-broncode (`elec`):

- `0` Ingang
- `1` Uitgang
- `2` Tristate
- `3` Open collector
- `4` Passief
- `5` Ingang/uitgang
- `6` Niet aangesloten
- `7` Vrij
- `8` Niet gespecificeerd
- `9` Voedingsingang
- `10` Voedingsuitgang
- `11` Open emitter

Algemene richtlijnen:

- Markeer daadwerkelijk aangestuurde signalen als **Uitgang**.
- Markeer signalen die alleen worden ontvangen als **Ingang**.
- Gebruik **Voedingsingang/Voedingsuitgang** wanneer de eigenschappen van de voedingsaansturing van belang zijn voor DRC.
- Gebruik **Niet aangesloten** alleen voor pennen die opzettelijk niet zijn aangesloten.
- Gebruik **Vrij**/**Niet gespecificeerd** voorzichtig en consequent binnen een bibliotheek.

Praktische gevolgen voor DRC:

- Onjuiste pentypen kunnen valse DRC-fouten veroorzaken (of echte fouten verbergen).
- Namen van voedingspennen moeten overeenkomen met de bedoelde voedingsnamen voor automatisch gedrag.

## Voeding en verborgen pennen
{: #power-and-hidden-pins}

Voedingspennen en verborgen pennen worden weergegeven tijdens het bewerken van het symbool, maar zijn doorgaans
verborgen wanneer het symbool in een tekening wordt geplaatst.

Voor **voedingspennen** geldt specifiek:

- De pennaam fungeert als de naam van het voedingsnet.
- De verbinding wordt automatisch gemaakt wanneer de voedingsnamen overeenkomen.
- Draden worden in de geplaatste symboolweergave normaal gesproken niet rechtstreeks naar deze verborgen voedingspennen getekend.

Voor **verborgen pennen** geldt:

- Ze blijven elektrisch actief.
- Gebruik ze wanneer u zelf de penvorm en penlabels wilt tekenen.

## Meerdelige symbolen (onderdelen per behuizing)
{: #multi-part-symbols-parts-per-package}

TinyCAD ondersteunt apparaten met meerdere logische eenheden in één behuizing (bijvoorbeeld
quad-poorten).

Er worden twee stijlen voor meerdelige symbolen gebruikt:

1. **Homogene** meerdelige symbolen:
	 - onderdelen delen dezelfde omtrek,
	 - verschillen meestal alleen in pennummers.
2. **Heterogene** meerdelige symbolen:
	 - onderdelen kunnen verschillende omtrekken hebben,
	 - onderdelen kunnen ook verschillende pennensets/functies hebben.

Gebruik homogeen wanneer onderdelen onderling uitwisselbaar zijn; gebruik heterogeen wanneer elk onderdeel
een eigen functie heeft.

### Werkwijze voor meerdelige symbolen
{: #multi-part-workflow}

1. Bepaal eerst of u homogeen of heterogeen wilt werken.
2. Stel het aantal onderdelen per behuizing in.

Voor homogene onderdelen:
- Het eerste onderdeel bepaalt de vorm van het symbool en de indeling van de pennen

Voor heterogene onderdelen:
- U kunt voor elk onderdeel een andere vorm tekenen

## Symboolattributen en -eigenschappen
{: #symbol-attributes-and-properties}

U kunt de attributen van het symbool bewerken in het paneel **Symbool** in het **onderste paneel**.

Definieer naast afbeeldingen en pennen ook zorgvuldig de symboolattributen:

- Primaire symboolnaam (en eventuele aliassen),
- Standaardindeling voor **Ref** (bijvoorbeeld `U?`, `R?`, `C?`),
- Standaardwaarde voor **Naam/Waarde**,
- Aanvullende attributen/parameters (bijvoorbeeld velden voor behuizing/footprint, simulatiemodel
	of projectspecifieke metagegevens).

## Een SPICE-model instellen
{: #set-a-spice-model}

Selecteer het symbool in een bewerkbare bibliotheek en open het tabblad **SPICE**. Kies **Gebundeld → SPICE-model zoeken…** om een model te koppelen en de pennentoewijzing te controleren, of **Aangepast** om de instantiesjabloon en modeltekst te bewerken. Sla de bibliotheek op om de standaardinstelling toe te passen op toekomstige plaatsingen. Zie [Gebundelde SPICE-modellen](../Bundled-SPICE-Models/#set-a-library-default-or-edit-a-custom-copy) voor de kiezer, modelselectie en aangepaste kopieën.

## Opslaan, dupliceren, hernoemen en verwijderen
{: #save-duplicate-rename-delete}

Veelgebruikte acties voor symboolbeheer bij het bewerken van bibliotheken:

- **Opslaan/bijwerken** van het huidige symbool om wijzigingen vast te leggen.
- **Dupliceren** om varianten te maken (aanbevolen in plaats van een basissymbool
	onomkeerbaar te bewerken).
- **Hernoemen** bij het standaardiseren van namen.
- Verouderde symbolen **verwijderen** (ongedaan maken als u er per ongeluk een hebt verwijderd).

Gebruik duplicatie voor varianten van behuizing/waarde die dezelfde afbeeldingen delen, maar verschillende
standaardwaarden hebben.

## Controlelijst voor het publiceren van een symbool
{: #validation-checklist-before-publishing-a-symbol}

Controleer het volgende voordat u een symbool op grote schaal gebruikt:

1. De pennen liggen op het raster en zijn eenvoudig aan te sluiten.
2. De pennummers zijn volledig en uniek per onderdeel.
3. De elektrische typen zijn voor alle pennen correct ingesteld.
4. Het gedrag van voedingspennen/verborgen pennen is opzettelijk.
5. De instelling voor meerdelige symbolen (indien van toepassing) is correct.
6. De standaardwaarden voor naam/referentie zijn zinvol.
7. Het symbool is leesbaar bij de normale zoom voor tekeningen.

Plaats het symbool vervolgens in een testschema en voer DRC uit.

## Tips voor probleemoplossing
{: #troubleshooting-tips}

- **Draden maken geen verbinding met het symbool:** controleer de plaatsing van de penuiteinden en de uitlijning op het raster.
- **Onverwachte DRC-fouten:** controleer het elektrische type van elke pen.
- **Onjuist gedrag van onderdelen in meerdelige symbolen:** controleer de onderdeelkeuze en pennummering voor elk onderdeel opnieuw.
- **Voeding wordt niet automatisch aangesloten:** controleer of de namen van voedingspennen overeenkomen met de bedoelde netnamen.

## Gerelateerde pagina's
{: #related-pages}

- [Aangepaste symboolbibliotheken](../Custom-symbol-libraries/)
- [Symboolbibliotheken gebruiken](../Using-Symbol-Libraries/)
- [Symbolen](../Symbols/)
- [Ontwerpregels controleren](../Design-Rules-Check/)

- Terug naar [Symbolen en bibliotheken](../Symbols-and-Libraries/)
- Terug naar [Inhoud van v4](../CONTENTS/)
