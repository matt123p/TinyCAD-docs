---
layout: default
---
# Symbolen
{: #symbols}

Symbolen vormen de bouwstenen van een TinyCAD-schema. U plaatst symbolen uit bibliotheken, stelt hun eigenschappen in en verbindt vervolgens hun pinnen om een elektrisch geldig ontwerp te maken.

U kunt uw eigen symbolen gebruiken of symbolen rechtstreeks downloaden van de website TinyCAD.net.

Zie ook:

- [Symboolbibliotheken gebruiken](../Using-Symbol-Libraries/)
- [Aangepaste symboolbibliotheken](../Custom-symbol-libraries/)

## Symbolen zoeken en plaatsen
{: #find-and-place-symbols}

1. Typ de naam van het gewenste symbool in het zoekvak
2. Selecteer de symbolen om ze te bekijken en kies het gewenste symbool
3. Sleep het symbool vanuit het voorbeeld naar uw tekening

{% include video-player.html
	src="/v4/images/video/Video 6.mp4"
	width=1280
	height=822
	caption="Video-uitleg over het zoeken en plaatsen van een symbool."
%}



## Oriëntatie tijdens het plaatsen
{: #orientation-while-placing}

Stel bij het plaatsen van een symbool de oriëntatie in met de knoppen voor draaien en spiegelen op de werkbalk.

<img src="/v4/images/media/image5.png" alt="Rotate and flip controls used to change symbol orientation" />


## Symbooltekst bewerken en verplaatsen
{: #editing-and-moving-symbol-text}

Na het plaatsen kunt u het hele symbool verplaatsen door het te slepen.

U kunt ook tekstvelden van het symbool (bijvoorbeeld waarde/naam/referentie) afzonderlijk verplaatsen door het symbool te selecteren en elk veld naar een geschiktere plek te slepen.

U kunt de tekst bewerken door erop te klikken.

{% include video-player.html
	src="/v4/images/video/Video 1.mp4"
	width=284
	height=248
	caption="Video-uitleg over het bewerken en verplaatsen van symbooltekst."
%}

## Symboleigenschappen in een schema
{: #symbol-attributes-in-a-schematic}

Geplaatste symbolen bevatten doorgaans de volgende belangrijke eigenschappen:

- **Naam/Waarde**: wat het onderdeel is (bijvoorbeeld `10k`, `100nF`, apparaattype)
- **Referentie**: unieke aanduiding in het blad/project (bijvoorbeeld `R1`, `U3`)
- **Package** (optioneel): identificatie van de footprint/package die wordt gebruikt in verdere exportprocessen

Referentievelden moeten uniek blijven. TinyCAD-hulpmiddelen kunnen zo nodig helpen om referenties automatisch te genereren of opnieuw te annoteren.

U kunt indien nodig extra eigenschappen toevoegen voor projectmetadata, PCB-processen of simulatiemetadata.

## Gerelateerde pagina's
{: #related-pages}

- [Draden](../Wires/)
- [Labels](../Labels/)
- [Geen verbindingen](../No-Connects/)
- [Een symbool bewerken](../Editing-a-Symbol/)

- Terug naar [Tekenen](../User-guide/)
- Terug naar [Inhoud van v4](../CONTENTS/)
