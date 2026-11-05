---
layout: default
---
# Een symbool bewerken
{: #editing-a-symbol}

## Hoe symbolen werken in TinyCAD
{: #how-symbols-work-in-tinycad}

Symbolen worden gemaakt met normale objecten uit de werkbalk. Ze kunnen elk van deze objecten bevatten, behalve andere symbolen.

Als het symbool objecten met speciale functies bevat (zoals een voedingsobject of een draad), worden deze objecten behandeld alsof ze annotaties zijn.

Al hun speciale functies gaan verloren wanneer ze in een symbool worden gebruikt. Alleen **pinnen** definiëren elektrische aansluitpunten.

Samenvatting:
- een symbool is een herbruikbare grafische weergave met attributen
- elektrische connectiviteit wordt gedefinieerd door **pinnen**
- en symbolen worden opgeslagen in **bibliotheken** (`.tclib`)

## Voordat u begint
{: #before-you-start}

Op deze pagina wordt ervan uitgegaan dat u al een bibliotheek hebt geopend om te bewerken. De stappen voor het openen of maken van een bibliotheek zijn afhankelijk van het feit of u TinyCAD Web of de desktopapplicatie gebruikt. Begin daarom met [Aangepaste symboolbibliotheken](../Custom-symbol-libraries/).

Als u symbolen wilt bekijken en plaatsen in plaats van bewerken, raadpleegt u [Symboolbibliotheken gebruiken](../Using-Symbol-Libraries/).

## Het symbool openen of maken
{: #open-or-create-the-symbol}

1. Open de bibliotheek.
2. Als u een bestaand symbool wilt bewerken, klikt u erop in de lijst met bibliotheeksymbolen.
3. Als u een nieuw symbool wilt maken, klikt u op de knop `+` in de symboollijst.
4. Het geselecteerde of nieuwe symbool wordt op het editorcanvas geladen.

U kunt vervolgens de grafische elementen, pinnen en symboolattributen wijzigen.

{% include video-player.html
	src="/v4/images/video/Video 12.mp4"
	width=1532
	height=978
	caption="Videohandleiding over het bewerken van een bibliotheek."
%}


## De vorm van het symbool tekenen (grafische elementen)
{: #drawing-the-symbol-shape-graphics}

Gebruik standaardtekengereedschappen om de omtrek van het symbool te maken:

- lijnen/polylijnen voor de randen van de behuizing,
- rechthoeken/ellipsen/bogen voor veelvoorkomende behuizingscontouren,
- tekst voor optionele interne markeringen.

Zorg dat het symbool bij de normale zoomfactor van het schema leesbaar is. Eenvoudige vormen werken doorgaans beter dan zeer decoratieve illustraties.

## Pinnen toevoegen
{: #adding-pins}

Pinnen zijn het enige elektrisch actieve onderdeel van een symbool.

Stel voor elke pin het volgende in:

- **Pinnummer** (vereist en uniek binnen een onderdeel),
- **Pinnaam** (optioneel, maar sterk aanbevolen),
- **Elektrisch type** (vereist voor nauwkeurige DRC),
- **Pinstijl/-vorm** (visuele stijl),
- **Zichtbaarheid** van de pinnaam/-nummertekst indien nodig.

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

Wijzigingen in het Pin-paneel worden **direct toegepast**: elke wijziging van een veld activeert onmiddellijk een pinupdate (er is geen aparte stap OK/Toepassen).

Onderdelen van het Pin-paneel:

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

- Vorm bepaalt het uiterlijk van het symbool en enkele speciale visuele gedragingen.
- De vorm `Cross` en het elektrische type `Not Connected` tekenen beide een kruis.
- De vormstijlen `Power` en `Hidden` worden weergegeven met de kleur voor verborgen pinnen.

## Elektrische pintypen en DRC-gedrag
{: #pin-electrical-types-and-drc-behavior}

Het is essentieel om het juiste elektrische type te kiezen. DRC gebruikt deze typen om aansluitfouten op te sporen.

Huidige waarden in de TinyCAD v4-broncode (`elec`):

- `0` Ingang
- `1` Uitgang
- `2` Tri-state
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

- Markeer signalen die daadwerkelijk worden aangestuurd als **Uitgang**.
- Markeer signalen die alleen ontvangen als **Ingang**.
- Gebruik **Voedingsingang/Voedingsuitgang** wanneer de betekenis van de voedingsaansturing van belang is voor DRC.
- Gebruik **Niet aangesloten** alleen voor pinnen die bewust niet zijn aangesloten.
- Gebruik **Vrij**/**Niet gespecificeerd** voorzichtig en consequent in een bibliotheek.

Praktische gevolgen voor DRC:

- Een onjuist pintype kan valse DRC-fouten veroorzaken (of echte fouten verbergen).
- Namen van voedingspinnen moeten overeenkomen met de bedoelde voedingsnamen voor automatische werking.

## Voeding en verborgen pinnen
{: #power-and-hidden-pins}

Voedingspinnen en verborgen pinnen zijn zichtbaar tijdens het bewerken van het symbool, maar worden doorgaans verborgen wanneer het symbool in een tekening wordt geplaatst.

Specifiek voor **voedingspinnen** geldt:

- De pinnaam fungeert als de naam van het voedingsnet.
- De verbinding wordt automatisch gemaakt wanneer voedingsnamen overeenkomen.
- In de geplaatste symboolweergave worden draden gewoonlijk niet rechtstreeks naar deze verborgen voedingspinnen getekend.

Voor **verborgen pinnen** geldt:

- Ze blijven elektrisch actief.
- Gebruik ze wanneer u zelf de pinvorm en pinlabels wilt tekenen.

## Meerdelige symbolen (delen per behuizing)
{: #multi-part-symbols-parts-per-package}

TinyCAD ondersteunt componenten met meerdere logische eenheden in één behuizing (bijvoorbeeld quad-poorten).

Er worden twee stijlen voor meerdelige symbolen gebruikt:

1. **Homogene** meerdelige symbolen:
	 - delen hebben dezelfde omtrek,
	 - verschillen doorgaans alleen in pinnummers.
2. **Heterogene** meerdelige symbolen:
	 - delen kunnen verschillende omtrekken hebben,
	 - delen kunnen ook verschillende pinsets/functies hebben.

Gebruik homogene delen wanneer ze onderling uitwisselbaar zijn; gebruik heterogene delen wanneer elk deel een eigen functie heeft.

### Werkwijze voor meerdelige symbolen
{: #multi-part-workflow}

1. Bepaal eerst of u homogene of heterogene delen wilt.
2. Stel het aantal delen per behuizing in.

Voor homogene delen:
- Het eerste deel bepaalt de vorm van het symbool en de plaatsing van de pinnen

Voor heterogene delen:
- U kunt voor elk deel een andere vorm tekenen

## Symboolattributen en -eigenschappen
{: #symbol-attributes-and-properties}

U kunt de attributen van het symbool bewerken in het paneel **Symbool** in het **onderste paneel**.

Definieer naast de grafische elementen en pinnen ook zorgvuldig de symboolattributen:

- Primaire symboolnaam (en eventuele aliassen),
- Standaardindeling voor **Ref** (bijvoorbeeld `U?`, `R?`, `C?`),
- Standaardwaarde voor **Naam/Waarde**,
- Aanvullende attributen/parameters (bijvoorbeeld velden voor behuizing/footprint, simulatiemodel of projectspecifieke metagegevens).

## Opslaan, dupliceren, hernoemen, verwijderen
{: #save-duplicate-rename-delete}

Veelgebruikte acties voor symboolbeheer bij het bewerken van bibliotheken:

- **Opslaan/bijwerken** om de wijzigingen aan het huidige symbool op te slaan.
- **Dupliceren** om varianten te maken (aanbevolen in plaats van een basissymbool onomkeerbaar te wijzigen).
- **Hernoemen** bij het standaardiseren van namen.
- **Verwijderen** van verouderde symbolen (maak de verwijdering ongedaan als u per ongeluk iets hebt verwijderd).

Gebruik dupliceren voor varianten van behuizing/waarde die dezelfde grafische elementen hebben, maar andere standaardwaarden.

## Controlelijst voor validatie voordat u een symbool publiceert
{: #validation-checklist-before-publishing-a-symbol}

Controleer het volgende voordat u een symbool op grote schaal gebruikt:

1. Pinnen liggen op het raster en zijn eenvoudig aan te sluiten.
2. Pinnummers zijn volledig en uniek per deel.
3. Elektrische typen zijn voor alle pinnen correct ingesteld.
4. Het gedrag van voedings-/verborgen pinnen is bewust gekozen.
5. De instelling voor meerdelige symbolen (indien van toepassing) is correct.
6. Standaardwaarden voor naam/referentie zijn zinvol.
7. Het symbool is leesbaar bij de normale zoomfactor van de tekening.

Plaats het symbool vervolgens in een testschema en voer DRC uit.

## Tips voor probleemoplossing
{: #troubleshooting-tips}

- **Draden maken geen verbinding met het symbool:** controleer de plaatsing van de pinaansluitpunten en de uitlijning op het raster.
- **Onverwachte DRC-fouten:** controleer het elektrische type van elke pin.
- **Onjuist gedrag van een deel in meerdelige symbolen:** controleer de deelkeuze en pinnummering van elk deel opnieuw.
- **Voeding wordt niet automatisch verbonden:** controleer of de namen van de voedingspinnen overeenkomen met de bedoelde netnamen.

## Gerelateerde pagina's
{: #related-pages}

- [Aangepaste symboolbibliotheken](../Custom-symbol-libraries/)
- [Symboolbibliotheken gebruiken](../Using-Symbol-Libraries/)
- [Symbolen](../Symbols/)
- [Ontwerpregels controleren](../Design-Rules-Check/)

- Terug naar [Symbolen en bibliotheken](../Symbols-and-Libraries/)
- Terug naar [Inhoudsopgave v4](../CONTENTS/)
