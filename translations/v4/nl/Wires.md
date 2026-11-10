---
layout: default
---
# Draden
{: #wires}

Draden zijn de elektrisch actieve verbindingen in een TinyCAD-schema.

Gebruik draadobjecten (geen annotatielijnen) als u verbindingen nodig hebt voor DRC, netlijsten, SPICE-/PCB-export of verbindingen tussen bladen.

## Waarom draden belangrijk zijn
{: #why-wires-matter}

- Draden definiëren elektrische netten.
- Draden worden uitgelijnd met symboolpennen en andere geldige verbindingspunten.
- TinyCAD gebruikt draadverbindingen voor regelcontroles en gegenereerde uitvoer.

Het gebruik van annotatielijnen in plaats van draden kan er visueel correct uitzien, maar voor de gereedschappen is de schakeling dan elektrisch niet verbonden.

## Draadrouteringsmodi
{: #wire-routing-modes}

Gebruik in TinyCAD v4.0.11 de keuzeknop naast Draad (Wire) om te bepalen hoe nieuwe segmenten worden getekend.

| Modus | Gedrag |
|---|---|
| **90°** | Horizontale en verticale routering. |
| **45°** | Routering beperkt tot de 45°-richtingen van TinyCAD. |
| **Vrij (Free)** | Rechte segmenten onder elke hoek. |

Een modus kiezen activeert Draad en behoudt een actief draadvoorbeeld. U kunt van modus wisselen voordat u het volgende segment plaatst. Uitlijnen op het raster blijft een afzonderlijke instelling. Het aangrenzende gereedschap voor punt-naar-puntbedrading staat los van deze keuzeknop.

![Keuzeknop op de draadwerkbalk met de opties 90°, 45° en Vrij (Free).](../images/wire-routing-modes.png)

## Draden plaatsen
{: #placing-wires}

1. Selecteer het gereedschap Draad.
2. Klik om te beginnen op een geldig verbindingspunt — dit is echter niet strikt noodzakelijk. U kunt een draad overal plaatsen. U kunt zien of het verbindingspunt geldig is aan de rode cirkel die de verbinding aangeeft.
3. Klik om hoeken/segmenten te plaatsen, indien nodig.
4. Eindig op een ander geldig verbindingspunt OF
5. Klik met de rechtermuisknop om de draadmodus te beëindigen.


{% include video-player.html
	src="/v4/images/video/Video 4.mp4"
	width=1602
	height=696
	caption="Videohandleiding waarin wordt getoond hoe u draden plaatst."
%}

<p>
	<a href="/v4/examples/Simple%20Drawing.dsn" class="btn btn-primary" download>
		<i class="bi bi-download me-1" aria-hidden="true"></i>&nbsp;Download
	</a>
</p>


## Uitlijning en knooppunten
{: #snapping-and-junctions}

- Draden worden magnetisch aangetrokken door pennen en bestaande draden.
- Knooppunten worden waar nodig automatisch toegevoegd.
- Kruisende draden zijn niet verbonden, tenzij er een knooppunt aanwezig is.

## Draden bewerken
{: #editing-wires}

Klik op een draad om deze te bewerken. U kunt nu het hele draadsegment verslepen door de draad zelf te verslepen, of de uiteinden verplaatsen door de verplaatsingsgrepen te verslepen.

- Terug naar [Tekenen](../User-guide/)
- Terug naar [v4-inhoudsopgave](../CONTENTS/)
