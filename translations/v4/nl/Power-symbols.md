---
layout: default
---
# Voedingssymbolen
{: #power-symbols}

Voedingssymbolen geven verbindingen aan met benoemde voedingsnetten, zoals `GND`, `+5V`,
`VCC` of `+3V3`.

Alle voedingssymbolen met dezelfde naam worden beschouwd als elektrisch verbonden.

{% include video-player.html
	src="/v4/images/video/Video 5.mp4"
	width=1596
	height=700
	caption="Video-uitleg over het plaatsen van voedingssymbolen."
%}

<p>
	<a href="/v4/examples/Simple%20Drawing.dsn" class="btn btn-primary" download>
		<i class="bi bi-download me-1" aria-hidden="true"></i>&nbsp;Downloaden
	</a>
</p>

## Werking van voedingssymbolen
{: #how-power-symbols-work}

- Netverbindingen worden bepaald door de **voedingsnaam**.
- De **vorm** is uitsluitend visueel en verandert de verbindingen niet.
- Keuzes voor oriëntatie en vorm zijn bedoeld voor de leesbaarheid en tekenstijl.

Gebruik overal in het ontwerp consistente namen om te voorkomen dat voedingsnetten worden opgesplitst.

## Plaatsingsregels
{: #placement-rules}

1. Selecteer het Power-gereedschap (Power tool).
2. Kies de oriëntatie, vorm en naam.
3. Plaats het symbool en maak verbinding met het uiteinde van de symboolpin.

Sluit draden aan op het uiteinde van de voedingssymboolpin (niet alleen in de buurt van de afbeelding), zodat de
verbinding wordt herkend.

## Verborgen voedingspinnen op symbolen
{: #hidden-power-pins-on-symbols}

Sommige bibliotheeksymbolen hebben verborgen voedingspinnen (bijvoorbeeld veel logische families).
Deze pinnen worden automatisch verbonden met voedingsnetten met overeenkomende namen.

Gebruik de namen die door de symboolbibliotheek worden verwacht (bijvoorbeeld `VCC`/`GND` wanneer
dat vereist is), zodat automatische voedingsverbindingen correct werken.

## Bewerken en stijlen
{: #editing-and-styles}

U kunt de vorm van een voedingssymbool wijzigen door het te selecteren en vervolgens een nieuwe vorm te selecteren op
de werkbalk.

## Gedrag op meerdere bladen
{: #multi-sheet-behavior}

Voedingsnetnamen zijn globaal binnen de ontwerpcontext die voor het genereren van netlijsten wordt gebruikt.
Consistente naamgeving op alle bladen zorgt voor de beoogde voedingsverbindingen.

- Terug naar [Tekenen](../User-guide/)
- Terug naar [inhoud van v4](../CONTENTS/)
