---
layout: default
---
# Een symbool bewerken
{: #editing-a-symbol}

Als u een symbool wilt genereren op basis van een gegevensblad of meerdere componenten aan een geopende bibliotheek wilt toevoegen, raadpleeg dan de handleiding voor de [AI-assistent](../AI-Assistant/). U kunt de resultaten ervan verfijnen met de bewerkingstools op deze pagina.

## Hoe symbolen werken in TinyCAD
{: #how-symbols-work-in-tinycad}

Symbolen worden gemaakt met normale objecten op de werkbalk. Ze kunnen
elk van deze objecten bevatten, behalve andere symbolen.

Als het symbool objecten met speciale functies bevat (zoals een voedingsitem
of een draad), worden die objecten behandeld als annotatie.

Al hun speciale functies gaan verloren wanneer ze in een symbool worden gebruikt. Alleen **pinnen** definiëren
elektrische aansluitpunten.

Samenvatting:
- een symbool is een herbruikbare afbeelding met attributen
- elektrische connectiviteit wordt gedefinieerd door **pinnen**
- en symbolen worden opgeslagen in **bibliotheken** (`.tclib`)

## Voordat u begint
{: #before-you-start}

Op deze pagina wordt ervan uitgegaan dat u al een bibliotheek hebt geopend om te bewerken. De stappen voor
het openen of maken van een bibliotheek zijn afhankelijk van of u TinyCAD Web of
de desktoptoepassing gebruikt. Begin daarom bij [Aangepaste symboolbibliotheken](../Custom-symbol-libraries/).

Als u op zoek bent naar bladeren en plaatsen in plaats van bewerken, raadpleeg dan [Symboolbibliotheken gebruiken](../Using-Symbol-Libraries/).

## Het symbool openen of maken
{: #open-or-create-the-symbol}

1. Open de bibliotheek.
2. Klik op een bestaand symbool in de symboollijst van de bibliotheek om het te bewerken.
3. Klik op de knop `+` in de symboollijst om een nieuw symbool te maken.
4. Het geselecteerde of nieuwe symbool wordt in het editorcanvas geladen.

U kunt vervolgens de afbeeldingen, pinnen en symboolattributen aanpassen.

{% include video-player.html
	src="/v4/images/video/Video 12.mp4"
	width=1532
	height=978
	caption="Videohandleiding over het bewerken van een bibliotheek."
%}


## De symboolvorm tekenen (afbeeldingen)
{: #drawing-the-symbol-shape-graphics}

Gebruik standaardtekengereedschappen om de omtrek van het symbool te maken:

- lijnen/polylijnen voor randen van de behuizing,
- rechthoeken/ellipsen/bogen voor gebruikelijke behuizingsomtrekken,
- tekst voor eventuele interne markeringen.

Zorg dat het symbool op de normale zoomfactor van het schema goed leesbaar is. Eenvoudige vormen werken meestal
beter dan zeer decoratieve illustraties.

## Pinnen toevoegen
{: #adding-pins}

Pinnen zijn het enige elektrisch actieve onderdeel van een symbool.

Stel voor elke pin het volgende in:

- **Pinnummer** (vereist en uniek binnen een onderdeel),
- **Pinnaam** (optioneel, maar sterk aanbevolen),
- **Elektrisch type** (vereist voor nauwkeurige DRC),
- **Pinstijl/-vorm** (visuele stijl),
- **Zichtbaarheid** van pinnaam/-nummertekst, indien nodig.

Plaats pinnen zorgvuldig op het raster, zodat bedrading in het schema eenvoudig is.

{% include video-player.html
	src="/v4/images/video/Video 13.mp4"
	width=1532
	height=978
	caption="Videohandleiding over het toevoegen van pinnen."
%}


## Pinpaneel
{: #pin-panel}

U kunt pinnen bewerken in het paneel **Pin** in het gebied van het **onderste paneel**.

Wijzigingen in het pinpaneel worden **direct toegepast**: bij elke veldwijziging wordt onmiddellijk
een pinupdateactie uitgevoerd (er is geen aparte stap OK/Toepassen).

Onderdelen van het pinpaneel:

1. **Naam**
	- Selectievakje Weergeven (`show_name`)
	- Tekstveld Naam (`name`)
	- Selectievakje Centreren op pin (`centre_name`)
2. **Nummer**
	- Selectievakje Weergeven (`show_number`)
	- Tekstveld Nummer (`number`)
	- Numeriek veld Verschuiving (`number_pos`)
3. **Type**
	- Vervolgkeuzelijst Vorm (`which`)
	- Vervolgkeuzelijst Elektrisch (`elec`)
	- Numeriek veld Lengte (`length`, UI-bereik 5..50)

Opmerkingen:

- Vorm bepaalt het uiterlijk van het symbool en bepaalde speciale visuele gedragingen.
- De vorm `Cross` en het elektrische type `Not Connected` tekenen beide een kruisvormige markering.
- De vormstijlen `Power` en `Hidden` worden weergegeven met de kleur voor verborgen pinnen.

## Elektrische pintypen en DRC-gedrag
{: #pin-electrical-types-and-drc-behavior}

Het juiste elektrische type selecteren is essentieel. DRC gebruikt deze typen om
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

- Stel werkelijk aangestuurde signalen in als **Uitgang**.
- Stel signalen die alleen ontvangen worden in als **Ingang**.
- Gebruik **Voedingsingang/Voedingsuitgang** wanneer de voedingsaansturing van belang is voor DRC.
- Gebruik **Niet aangesloten** alleen voor pinnen die bewust niet zijn aangesloten.
- Gebruik **Vrij**/**Niet gespecificeerd** voorzichtig en consequent in een bibliotheek.

Praktische gevolgen voor DRC:

- Een onjuist pintype kan valse DRC-fouten veroorzaken (of echte fouten verbergen).
- Pinnamen van voedingspinnen moeten overeenkomen met de beoogde voedingsnamen voor automatisch gedrag.

## Voedings- en verborgen pinnen
{: #power-and-hidden-pins}

Voedings- en verborgen pinnen worden weergegeven tijdens het bewerken van het symbool, maar zijn doorgaans
verborgen wanneer het symbool in een tekening wordt geplaatst.

Specifiek voor **voedingspinnen** geldt:

- De pinnaam fungeert als de naam van het voedingsnet.
- De verbinding wordt automatisch gemaakt wanneer voedingsnamen overeenkomen.
- In de geplaatste symboolweergave worden draden normaal gesproken niet rechtstreeks naar deze verborgen voedingspinnen getekend.

Voor **verborgen pinnen** geldt:

- Ze blijven elektrisch actief.
- Gebruik ze wanneer u zelf de pinvorm en pinlabels wilt tekenen.

## Meerdelige symbolen (delen per behuizing)
{: #multi-part-symbols-parts-per-package}

TinyCAD ondersteunt componenten met meerdere logische eenheden in één behuizing (bijvoorbeeld
quad-poorten).

Er worden twee stijlen voor meerdelige symbolen gebruikt:

1. **Homogene** meerdelige symbolen:
	 - de delen hebben dezelfde omtrek,
	 - en verschillen doorgaans alleen in pinnummers.
2. **Heterogene** meerdelige symbolen:
	 - de delen kunnen verschillende omtrekken hebben,
	 - en kunnen ook verschillende pinsets/functies hebben.

Gebruik homogeen wanneer de delen onderling uitwisselbaar zijn; gebruik heterogeen wanneer elk deel
een afzonderlijke functie heeft.

### Werkwijze voor meerdelige symbolen
{: #multi-part-workflow}

1. Bepaal eerst of het symbool homogeen of heterogeen is.
2. Stel het aantal delen per behuizing in.

Voor homogene delen:
- Het eerste deel bepaalt de vorm van het symbool en de plaatsing van de pinnen

Voor heterogene delen:
- U kunt voor elk deel een andere vorm tekenen

## Symboolattributen en -eigenschappen
{: #symbol-attributes-and-properties}

U kunt de attributen van het symbool bewerken in het paneel **Symbool** in het **onderste paneel**.

Definieer naast afbeeldingen en pinnen ook de symboolattributen zorgvuldig:

- Primaire symboolnaam (en eventuele aliassen),
- Standaardindeling **Ref** (bijvoorbeeld `U?`, `R?`, `C?`),
- Standaard **Naam/Waarde**,
- Aanvullende attributen/parameters (bijvoorbeeld behuizing/footprint, velden voor het simulatiemodel
	of projectspecifieke metadata).

## Opslaan, dupliceren, hernoemen, verwijderen
{: #save-duplicate-rename-delete}

Veelgebruikte acties voor symboolbeheer bij het bewerken van bibliotheken:

- **Opslaan/bijwerken** om het huidige symbool en de wijzigingen op te slaan.
- **Dupliceren** om varianten te maken (aanbevolen in plaats van een basissymbool
	destructief te bewerken).
- **Hernoemen** bij het standaardiseren van namen.
- **Verwijderen** van verouderde symbolen (maak de verwijdering ongedaan als dit per ongeluk is gebeurd).

Gebruik dupliceren voor behuizings-/waardevarianten met dezelfde afbeeldingen maar verschillende
standaardwaarden.

## Controlelijst voor validatie voordat u een symbool publiceert
{: #validation-checklist-before-publishing-a-symbol}

Controleer het volgende voordat u een symbool breed toepast:

1. De pinnen liggen op het raster en zijn eenvoudig aan te sluiten.
2. De pinnummers zijn volledig en uniek per deel.
3. De elektrische typen zijn voor alle pinnen juist ingesteld.
4. Het gedrag van voedings-/verborgen pinnen is bewust gekozen.
5. De instelling voor meerdelige symbolen (indien van toepassing) is correct.
6. De standaardwaarden voor naam/verwijzing zijn logisch.
7. Het symbool is leesbaar op de normale zoomfactor van de tekening.

Plaats het symbool vervolgens in een testschema en voer DRC uit.

## Tips voor probleemoplossing
{: #troubleshooting-tips}

- **Draden maken geen verbinding met het symbool:** controleer de plaatsing van de pinuiteinden en de uitlijning op het raster.
- **Onverwachte DRC-fouten:** controleer het elektrische type van elke pin.
- **Verkeerd gedrag van delen in meerdelige symbolen:** controleer de deelkeuze en pinnummering
	voor elk deel opnieuw.
- **Voeding wordt niet automatisch verbonden:** controleer of de namen van voedingspinnen overeenkomen met de beoogde netnamen.

## Gerelateerde pagina's
{: #related-pages}

- [Aangepaste symboolbibliotheken](../Custom-symbol-libraries/)
- [Symboolbibliotheken gebruiken](../Using-Symbol-Libraries/)
- [Symbolen](../Symbols/)
- [Ontwerpregelcontrole](../Design-Rules-Check/)

- Terug naar [Symbolen en bibliotheken](../Symbols-and-Libraries/)
- Terug naar [Inhoudsopgave v4](../CONTENTS/)
