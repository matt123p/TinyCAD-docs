---
layout: default
---
# Symbolen
{: #symbols}

Symbolen vormen de belangrijkste bouwstenen van een TinyCAD-schema. Je plaatst symbolen uit bibliotheken, stelt hun kenmerken in en verbindt vervolgens hun pinnen met draden om een elektrisch geldig ontwerp te maken.

De bibliotheekkiezer links biedt drie bronnen: **Standaard** voor meegeleverde bibliotheken, **Online** voor zoeken op TinyCAD.net en **Mijn bibliotheken** voor je eigen bibliotheekbestanden.

De [AI-assistent](../AI-Assistant/) kan ook een symbool in een gegevensblad vinden of maken en het rechtstreeks in de tekening plaatsen. Open een aangepaste bibliotheek om deze te bewerken wanneer je herbruikbare bibliotheekcomponenten wilt laten maken.

## Een symbool zoeken
{: #find-a-symbol}

### De meegeleverde bibliotheken gebruiken
{: #use-the-bundled-libraries}

Selecteer **Standaard** en kies vervolgens een verzameling bij **Een standaardbibliotheek kiezen**. Blader door de componenten of typ een naam in **Bibliotheken doorzoeken...** om de geselecteerde verzameling te filteren. Je kunt van verzameling wisselen zonder symbolen te verwijderen die al in je tekening staan.

De [meegeleverde bibliotheken](../Bundled-Libraries/) bevatten zowel gemodelleerde circuitcomponenten als fysieke apparatuur voor netwerk-, embedded-, audio-, laboratorium-, bewegingsregelings- en zonnepaneelontwerpen. Ze worden meegeleverd met TinyCAD, zowel in de browser als in de Desktop App; je hebt geen account, afzonderlijke download of bibliotheekimport nodig. Raadpleeg de bibliotheekgids voor de inhoud en het doel van elke verzameling.

### Online zoeken
{: #search-online}

Als de meegeleverde verzamelingen niet bevatten wat je nodig hebt, selecteer je **Online** en voer je een componentnaam of onderdeelnummer in bij **Bibliotheken doorzoeken...**. TinyCAD doorzoekt de symboolverzameling van TinyCAD.net en toont overeenkomende symbolen met voorbeelden van de illustraties. Voor online zoeken is een internetverbinding nodig.

Selecteer een resultaat om het voorbeeld en de beschrijving te bekijken en sleep de illustratie vervolgens naar je tekening. Je hoeft niet eerst een afzonderlijke bibliotheek te downloaden. Controleer of de pinnamen en -nummers overeenkomen met de component en behuizing die je wilt gebruiken.

### Als je het gewenste symbool niet kunt vinden
{: #if-you-cannot-find-the-symbol-you-want}

Gebruik [Aangepaste symboolbibliotheken](../Custom-symbol-libraries/) om een `.tclib`-bibliotheek te maken of een bestaande bibliotheek te openen. Je bibliotheken zijn beschikbaar via **Mijn bibliotheken** in de kiezer.

Je kunt een nieuw symbool tekenen of een kopie van een geschikt bestaand symbool aanpassen; zie [Een symbool bewerken](../Editing-a-Symbol/) voor informatie over de grafische elementen, pinnen en eigenschappen. Je kunt ook [symbolen uit KiCad importeren](../Importing-Symbols-from-KiCAD/) in een aangepaste bibliotheek. Meegeleverde bibliotheken zijn alleen-lezen, dus bewaar je eigen definities in een aangepaste bibliotheek.

## Het gekozen symbool plaatsen
{: #place-the-chosen-symbol}

1. Kies **Standaard**, **Online** of **Mijn bibliotheken** en blader of zoek vervolgens in die bron.
2. Selecteer een resultaat om het grotere voorbeeld en de beschrijving te bekijken.
3. Sleep de illustratie van het symbool vanuit de lijst of het voorbeeld naar de tekening en plaats het vervolgens op het raster.
4. Druk op **Escape** of klik met de rechtermuisknop wanneer je klaar bent met het plaatsen van kopieën.

De video hieronder laat zien hoe je een symbool zoekt en plaatst. Zie [Symboolbibliotheken gebruiken](../Using-Symbol-Libraries/) voor meer informatie over bladeren door de kiezer en het beheren ervan.

{% include video-player.html
	src="/v4/Images/video/Video 6.mp4"
	width=1280
	height=822
	caption="Videohandleiding waarin wordt getoond hoe je een symbool zoekt en plaatst."
%}



## Oriëntatie tijdens het plaatsen
{: #orientation-while-placing}

Stel bij het plaatsen van een symbool de oriëntatie in met de draai- en spiegelknoppen op de werkbalk.

<img src="/v4/Images/media/image5.png" alt="Rotate and flip controls used to change symbol orientation" />


## Symbooltekst bewerken en verplaatsen
{: #editing-and-moving-symbol-text}

Na het plaatsen kun je het hele symbool verplaatsen door het te verslepen.

Je kunt tekstvelden van een symbool (bijvoorbeeld waarde/naam/referentie) ook afzonderlijk verplaatsen door het symbool te selecteren en elk veld naar een betere plek te slepen.

Je kunt de tekst bewerken door erop te klikken.

{% include video-player.html
	src="/v4/Images/video/Video 1.mp4"
	width=284
	height=248
	caption="Videohandleiding waarin wordt getoond hoe je symbooltekst bewerkt en verplaatst."
%}

## Symboolkenmerken in een schema
{: #symbol-attributes-in-a-schematic}

Geplaatste symbolen bevatten meestal de volgende belangrijke kenmerken:

- **Naam/waarde**: wat het onderdeel is (bijvoorbeeld `10k`, `100nF`, apparaattype)
- **Referentie**: unieke aanduiding in het blad/project (bijvoorbeeld `R1`, `U3`)
- **Behuizing** (optioneel): identificatie van de footprint/behuizing die wordt gebruikt bij latere exportstappen

Referentievelden moeten uniek blijven. TinyCAD-hulpmiddelen kunnen indien nodig helpen bij het automatisch genereren of opnieuw annoteren van referenties.

Je kunt naar behoefte extra kenmerken toevoegen voor projectmetadata, PCB-processen of simulatiemetadata.

## Verwante pagina's
{: #related-pages}

- [Draden](../Wires/)
- [Labels](../Labels/)
- [Geen verbindingen](../No-Connects/)
- [Een symbool bewerken](../Editing-a-Symbol/)

- Terug naar [Tekenen](../User-guide/)
- Terug naar [Inhoud v4](../CONTENTS/)
