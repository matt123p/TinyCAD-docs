---
layout: default
---
# Afbeeldingen
{: #images}

Voeg afbeeldingen aan een tekening toe voor logo's, referentieafbeeldingen of gescande schema's. U kunt een afbeelding vanaf het klembord plakken of een bestand selecteren via **Bestand → Importeren → Afbeelding…** in zowel TinyCAD Desktop als de browserapp.

Afbeeldingen zijn illustraties op het blad. Ze maken geen componenten, pinnen of elektrische verbindingen aan. Gebruik de Desktop-[AI-assistent](../AI-Assistant/) om een circuitafbeelding om te zetten in bewerkbare symbolen en draden.

## Kopiëren en plakken
{: #copy-and-paste}

1. Kopieer in een andere toepassing de afbeelding zelf, niet de bestandsnaam of een koppeling. Gebruik bijvoorbeeld **Afbeelding kopiëren** in een browser of kopieer een selectie in een afbeeldingseditor.
2. Ga terug naar TinyCAD en klik op het tekengebied, zodat u geen tekstveld bewerkt.
3. Druk op **Ctrl+V** (**Cmd+V** op macOS).
4. Selecteer de geplakte afbeelding en sleep deze naar de gewenste positie.

Afbeeldingen op het klembord in PNG- of JPEG-indeling worden ondersteund. Als een afbeelding niet kan worden geplakt, slaat u deze op als bestand en gebruikt u Importeren. U kunt ook afbeeldingen kopiëren en plakken die al in een TinyCAD-tekening zijn geplaatst.

## Importeren uit een bestand
{: #import-from-a-file}

1. Open **Bestand → Importeren → Afbeelding…**. Open in de browserapp het menu **Bestand** met het documentpictogram op de werkbalk.
2. Selecteer een afbeeldingsbestand en bevestig het bestandsvenster.
3. De afbeelding verschijnt op het huidige blad. Selecteer deze om haar te verplaatsen, het formaat te wijzigen of haar bij te snijden.

PNG- en JPEG-bestanden worden rechtstreeks ingesloten. Andere indelingen die de browser kan decoderen, zoals GIF, WebP, BMP en SVG, worden omgezet naar PNG. Geïmporteerde afbeeldingen blijven stilstaande beelden; animatie wordt niet behouden. Ondersteuning voor indelingen is afhankelijk van de browser of de browserengine die in TinyCAD Desktop is opgenomen. Een onleesbaar of niet-ondersteund bestand geeft een foutmelding.

U kunt ook een PNG- of JPEG-bestand naar de tekening slepen om het op de neerzetpositie te plaatsen.

## Verplaatsen en het formaat wijzigen
{: #move-and-resize}

Klik op een afbeelding om deze te selecteren. Sleep de afbeelding zelf om deze te verplaatsen, of sleep een hoek- of randgreep om het formaat te wijzigen.

De eigenschappenbalk onderaan toont een sectie **Afbeelding** wanneer een afbeelding is geselecteerd. Schakel **Vaste beeldverhouding** in om bij het wijzigen van het formaat de huidige verhoudingen tussen breedte en hoogte te behouden. Schakel deze optie uit om de breedte en hoogte onafhankelijk van elkaar te wijzigen. Het verplaatsen van de afbeelding verandert de verhoudingen niet.

**Beeldverhouding herstellen** herstelt de oorspronkelijke verhoudingen van het zichtbare deel van de afbeelding, rekening houdend met eventueel bijsnijden. De huidige breedte en positie linksboven blijven behouden; de hoogte wordt aangepast. De instelling van het selectievakje Vaste beeldverhouding blijft ongewijzigd. U kunt het herstellen ongedaan maken.

## Randen bijsnijden
{: #clip-the-edges}

Gebruik **Bijsnijden links (px)**, **Bijsnijden rechts (px)**, **Bijsnijden boven (px)** en **Bijsnijden onder (px)** in de afbeeldingsinstellingen om ongewenste randen of delen van een afbeelding te verbergen.

- Waarden zijn gehele aantallen pixels, gemeten in de oorspronkelijke afbeelding, onafhankelijk van de weergegeven grootte of het raster van de tekening.
- Als u bijvoorbeeld **Bijsnijden links (px)** instelt op **20**, worden de meest linkse 20 pixels van de bronafbeelding verborgen.
- Bij het bijsnijden behouden de resterende pixels hun bestaande schaal en positie; de zichtbare rand schuift naar binnen in plaats van dat de afbeelding wordt uitgerekt.
- In elke richting moet minstens één pixel overblijven. De besturingselementen beperken elke rand dienovereenkomstig.
- Stel een rand weer in op **0** om deze te herstellen. Bij het bijsnijden worden geen pixels uit het ingesloten origineel verwijderd.

**Ongedaan maken** en **Opnieuw** zijn van toepassing op het invoegen van afbeeldingen en wijzigingen van eigenschappen, evenals op verplaatsen en het formaat wijzigen.

## Opslaan en uitvoer
{: #saving-and-output}

Afbeeldingen worden ingesloten in het tekeningbestand, dus het oorspronkelijke bestand hoeft niet op de importlocatie te blijven staan. Sla de tekening op de gebruikelijke manier op om de afbeeldingen, instellingen voor vaste beeldverhoudingen en bijsnijdinstellingen te behouden. Deze instellingen blijven behouden nadat het bestand opnieuw is geopend en ook in gecomprimeerde `.dzn`-tekeningen.

Bijsnijden geldt per geplaatste afbeelding, zodat afzonderlijke exemplaren verschillende delen van dezelfde afbeelding kunnen tonen. De zichtbare afbeelding wordt opgenomen in afdrukken en in PDF- en SVG-uitvoer.

- Terug naar [Tekenen](../User-guide/)
- Terug naar [Inhoudsopgave v4](../CONTENTS/)
