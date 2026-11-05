---
layout: default
---
# Bussen
{: #buses}

Een bus is een hulpmiddel bij het tekenen van schema's om groepen verwante signalen weer te geven. Bussen
verbeteren de leesbaarheid, vooral wanneer veel vergelijkbare draden bij elkaar lopen.

In TinyCAD wordt de daadwerkelijke elektrische verbinding nog steeds gemaakt met **draden en netlabels**. Een bus op zichzelf verbindt signalen niet elektrisch.

## Voorbeeldtekening
{: #example-drawing}

<img src="/v4/images/Image 1.svg" alt="A example of using Buses" />

<p>
	<a href="/v4/examples/Bus%20Example.dsn" class="btn btn-primary" download>
		<i class="bi bi-download me-1" aria-hidden="true"></i>&nbsp;Downloaden
	</a>
</p>


## Busworkflow
{: #bus-workflow}

1. Teken de buslijn waar de gegroepeerde signalen moeten lopen.
2. Plaats busingangen op de plekken waar afzonderlijke signalen aftakken.
3. Teken draden vanaf elke busingang naar symboolpinnen of aansluitpunten.
4. Plaats labels op die draden (bijvoorbeeld `D0`, `D1`, `D2`...).
5. Herhaal de labels/draden bij de bus aan de bestemmingszijde met dezelfde namen.

Wanneer labels overeenkomen, zijn die netten verbonden.

## Busobjecten in TinyCAD
{: #bus-objects-in-tinycad}

- **Bus**: hoofdpad voor de gegroepeerde signalen; handig om veel verbindingen te ordenen.
- **Bus Entry**: visuele ingang/uitgang van de bus naar één draad.
- **Bus Name**: tekst over een bus (bijvoorbeeld `Data Bus` of het aantal geleiders).

Busnamen beschrijven de bedoeling voor mensen; labels op draden geven tools de identiteit van elektrische netten door.

## Tips voor naamgeving en herhaling
{: #naming-and-repeat-tips}

- Houd bus-signaallabels van begin tot eind consistent (`A0..A15`, `D0..D7`, enzovoort).
- Gebruik herhalingsopties om het plaatsen van ingangen en opeenvolgende labels te versnellen.
- De volgorde van signaalnamen mag aan elk uiteinde verschillen, zolang de namen overeenkomen.

## Verbindingspunten
{: #junctions}

Voor bussen zijn geen verbindingspuntstippen op de buslijn zelf nodig.

## Bussen en tekeningen met meerdere bladen
{: #buses-and-multi-sheet-drawings}

Gebruik op verschillende bladen dezelfde signaallabels om overeenkomstige netten te verbinden.
Busafbeeldingen en -namen verbeteren de leesbaarheid, terwijl de labelnamen de verbindingen bepalen
voor netlisting/DRC.

- Terug naar [Tekenen](../User-guide/)
- Terug naar [inhoud van v4](../CONTENTS/)
