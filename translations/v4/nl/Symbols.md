---
layout: default
---
# Symbolen
{: #symbols}

Symbolen vormen de belangrijkste bouwstenen van een TinyCAD-schema. Plaats symbolen uit bibliotheken, stel hun kenmerken in en verbind vervolgens hun pinnen om een elektrisch geldig ontwerp op te bouwen.

De bibliotheekkiezer aan de linkerkant biedt drie bronnen: **Standaard (Standard)** voor meegeleverde bibliotheken, **Online** voor zoekopdrachten op TinyCAD.net en **Mijn bibliotheken (My Libraries)** voor je eigen bibliotheekbestanden.

## Een symbool zoeken
{: #find-a-symbol}

### De meegeleverde bibliotheken gebruiken
{: #use-the-bundled-libraries}

Selecteer **Standaard (Standard)** en kies vervolgens een collectie bij **Een standaardbibliotheek kiezen (Choose a standard library)**. Blader door de componenten of typ een naam in **Bibliotheken doorzoeken... (Search libraries...)** om de geselecteerde collectie te filteren. Je kunt van collectie wisselen zonder symbolen te verwijderen die al in je tekening staan.

De [meegeleverde bibliotheken](../Bundled-Libraries/) bevatten zowel gemodelleerde circuitcomponenten als fysieke apparatuur voor netwerk-, embedded-, audio-, laboratorium-, bewegingsregelings- en zonne-energieontwerpen. Ze worden met TinyCAD meegeleverd, zowel in de browser als in de Desktop App; er is geen account, afzonderlijke download of bibliotheekimport nodig. Raadpleeg de bibliotheekgids voor de inhoud en het doel van elke collectie.

### Online zoeken
{: #search-online}

Als de meegeleverde collecties niet bevatten wat je nodig hebt, selecteer je **Online** en voer je een componentnaam of onderdeelnummer in bij **Bibliotheken doorzoeken... (Search libraries...)**. TinyCAD doorzoekt de symboolcollectie van TinyCAD.net en toont overeenkomende symbolen met voorbeelden van de illustraties. Voor online zoeken is een internetverbinding nodig.

Selecteer een resultaat om het voorbeeld en de beschrijving te bekijken en sleep de illustratie vervolgens naar je tekening. Je hoeft niet eerst een afzonderlijke bibliotheek te downloaden. Controleer of de pinnamen en -nummers overeenkomen met de component en behuizing die je wilt gebruiken.

### Als je het gewenste symbool niet kunt vinden
{: #if-you-cannot-find-the-symbol-you-want}

Gebruik [Aangepaste symboolbibliotheken](../Custom-symbol-libraries/) om een `.tclib`-bibliotheek te maken of een bestaande bibliotheek te openen. Je bibliotheken zijn beschikbaar via **Mijn bibliotheken (My Libraries)** in de kiezer.

Je kunt een nieuw symbool tekenen of een kopie van een geschikt bestaand symbool aanpassen; zie [Een symbool bewerken](../Editing-a-Symbol/) voor meer informatie over de grafische elementen, pinnen en eigenschappen. Je kunt ook [symbolen uit KiCad importeren](../Importing-Symbols-from-KiCAD/) naar een aangepaste bibliotheek. Meegeleverde bibliotheken zijn alleen-lezen, dus bewaar je eigen definities in een aangepaste bibliotheek.

## Het gekozen symbool plaatsen
{: #place-the-chosen-symbol}

1. Kies **Standaard (Standard)**, **Online** of **Mijn bibliotheken (My Libraries)** en blader of zoek vervolgens in die bron.
2. Selecteer een resultaat om het grotere voorbeeld en de beschrijving te bekijken.
3. Sleep de illustratie van het symbool uit de lijst of het voorbeeld naar de tekening en plaats deze vervolgens op het raster.
4. Druk op **Escape** of klik met de rechtermuisknop wanneer je klaar bent met het plaatsen van kopieën.

De onderstaande video laat zien hoe je een symbool vindt en plaatst. Zie [Symboolbibliotheken gebruiken](../Using-Symbol-Libraries/) voor meer informatie over het doorbladeren en beheren van de kiezer.

{% include video-player.html
	src="/v4/images/video/Video 6.mp4"
	width=1280
	height=822
	caption="Videohandleiding met uitleg over hoe je een symbool vindt en plaatst."
%}



## Oriëntatie tijdens het plaatsen
{: #orientation-while-placing}

Stel tijdens het plaatsen van een symbool de oriëntatie in met de knoppen voor draaien en spiegelen op de werkbalk.

<img src="/v4/images/media/image5.png" alt="Rotate and flip controls used to change symbol orientation" />


## Symbooltekst bewerken en verplaatsen
{: #editing-and-moving-symbol-text}

Na het plaatsen kun je het hele symbool verplaatsen door het te slepen.

Je kunt ook tekstvelden van een symbool (bijvoorbeeld waarde/naam/referentie) afzonderlijk verplaatsen door het symbool te selecteren en elk veld naar een geschiktere positie te slepen.

Je kunt de tekst bewerken door erop te klikken.

{% include video-player.html
	src="/v4/images/video/Video 1.mp4"
	width=284
	height=248
	caption="Videohandleiding met uitleg over hoe je symbooltekst bewerkt en verplaatst."
%}

## Symbooleigenschappen in een schema
{: #symbol-attributes-in-a-schematic}

Geplaatste symbolen bevatten doorgaans de volgende belangrijke eigenschappen:

- **Naam/waarde**: het onderdeel (bijvoorbeeld `10k`, `100nF`, apparaattype)
- **Referentie**: unieke aanduiding in het blad/project (bijvoorbeeld `R1`, `U3`)
- **Behuizing** (optioneel): aanduiding van de footprint/behuizing die wordt gebruikt bij verdere export

Referentievelden moeten uniek blijven. TinyCAD-hulpmiddelen kunnen helpen om zo nodig automatisch referenties te genereren of opnieuw te annoteren.

Je kunt indien nodig extra eigenschappen toevoegen voor projectmetadata, PCB-ontwerpstromen of simulatiemetadata.

## Verwante pagina's
{: #related-pages}

- [Draden](../Wires/)
- [Labels](../Labels/)
- [Niet-verbonden aansluitingen](../No-Connects/)
- [Een symbool bewerken](../Editing-a-Symbol/)

- Terug naar [Tekenen](../User-guide/)
- Terug naar [Inhoud v4](../CONTENTS/)
