---
layout: default
---
# Draden
{: #wires}

Draden zijn de elektrisch actieve verbindingen in een TinyCAD-schema.

Gebruik draadobjecten (geen annotatielijnen) als u verbindingen nodig hebt voor DRC, netlijsten, SPICE-/PCB-export of koppelingen tussen bladen.

## Waarom draden belangrijk zijn
{: #why-wires-matter}

- Draden definiëren elektrische netten.
- Draden klikken vast aan symboolpinnen en andere geldige aansluitpunten.
- TinyCAD gebruikt draadverbindingen voor regelcontroles en gegenereerde uitvoer.

Annotatielijnen gebruiken in plaats van draden kan er visueel correct uitzien, maar voor de tools is het circuit dan elektrisch niet verbonden.

## Draadrouteringsmodi
{: #wire-routing-modes}
{: #wire-routing-modes}

Gebruik in TinyCAD v4.0.11 de keuzelijst naast Wire om te kiezen hoe nieuwe segmenten worden getekend.

| Modus | Werking |
|---|---|
| **90°** | Horizontaal en verticaal routeren. |
| **45°** | Routeren in de richtingen van 45° van TinyCAD. |
| **Vrij** | Rechte segmenten onder elke hoek. |

Als u een modus kiest, wordt Wire geactiveerd en blijft een eventueel actieve draadvoorbeeldweergave behouden. U kunt de modus wijzigen voordat u het volgende segment plaatst. Rasteruitlijning is een afzonderlijke instelling. Gebruik de aangrenzende [Point-to-Point Wire-tool](#auto-routing) voor automatische routering tussen twee aansluitpunten.

![Werkbalkkeuzelijst voor draden met de keuzes 90°, 45° en Vrij.](../Images/wire-routing-modes.png)

## Draden plaatsen
{: #placing-wires}
{: #placing-wires}

1. Selecteer de tool Wire.
2. Klik om te beginnen bij een geldig aansluitpunt; dit is echter niet strikt noodzakelijk. U kunt overal een draad plaatsen. U kunt zien of het aansluitpunt geldig is doordat een rode cirkel de verbinding aangeeft.
3. Klik om zo nodig hoeken/segmenten te plaatsen.
4. Eindig op een ander geldig aansluitpunt OF
5. Klik met de rechtermuisknop om de draadmodus te beëindigen.


{% include video-player.html
	src="/v4/Images/video/Video 4.mp4"
	width=1602
	height=696
	caption="Videohandleiding waarin wordt getoond hoe u draden plaatst."
%}

<p>
	<a href="/v4/examples/Simple%20Drawing.dsn" class="btn btn-primary" download>
		<i class="bi bi-download me-1" aria-hidden="true"></i>&nbsp;Download
	</a>
</p>


## Automatisch routeren met Point-to-Point Wire
{: #auto-routing-with-point-to-point-wire}
{: #auto-routing}

**Point-to-Point Wire** kiest een route tussen twee aansluitpunten en plaatst de draadsegmenten voor u. Deze tool is handig voor dagelijks muisgebruik en vooral op een touchscreen, waar het eenvoudiger is om op twee eindpunten te tikken dan om elke hoek te plaatsen.

1. Selecteer **Point-to-Point Wire** naast de keuzelijst voor de draadmodus op de werkbalk.
2. Klik of tik op de startpin van een symbool of op een bestaande draad. Een rode cirkel markeert een geldig aansluitpunt.
3. Beweeg naar de bestemmingspin of -draad om een voorbeeld van de automatische route te bekijken.
4. Klik of tik op de bestemming om de volledige verbinding te plaatsen. TinyCAD selecteert de nieuwe draadsegmenten en sluit de routeringstool af. Selecteer **Point-to-Point Wire** opnieuw om nog een verbinding te maken.

In tegenstelling tot de gewone Wire-tool moeten beide eindpunten geldige aansluitpunten zijn; klikken op lege ruimte plaatst geen hoek. Klik met de rechtermuisknop om een onafgemaakte route te annuleren. Als u de hoeken zelf wilt kiezen, gebruikt u [Wire](#placing-wires).

Probeer de [voorbeeldtekening voor automatisch routeren](../examples/Auto-route%20example.dsn).
De weerstand en LED staan op het raster, met een open verbinding ertussen.

Selecteer eerst Point-to-Point Wire en kies de rechterpin van R1.

![1. Begin met losgekoppelde R1 en D1. De rode cirkel markeert de startpin op R1.](../Images/wire-auto-route-start.png){: width="435" style="max-width: 50%;"}

Richt vervolgens op de bovenste pin van D1. De voorbeeldweergave toont de route en de hoek voordat u deze bevestigt.

![2. Bekijk een voorbeeld van de automatische route naar D1. De rode cirkel markeert de bestemmingspin.](../Images/wire-auto-route.png){: width="435" style="max-width: 50%;"}

Klik of tik ten slotte op de pin van D1. TinyCAD plaatst alle segmenten in één bewerking.

![3. Bevestig de bestemming om de volledige verbinding, inclusief de hoek, te plaatsen.](../Images/wire-auto-route-complete.png){: width="435" style="max-width: 50%;"}

Op een touchscreen kunt u rechtstreeks op de twee eindpunten tikken. Gebruik bij kleine of dicht opeenstaande pinnen het [vergrootglas](../Touch-controls/#precise-placement-with-the-loupe): richt op elk eindpunt en druk op **Klikken**. U hoeft niet langs de route te slepen of op de hoeken te tikken. Controleer de voltooide verbinding en pas de segmenten zo nodig aan.

## Uitlijning en knooppunten
{: #snapping-and-junctions}

- Draden klikken magnetisch vast aan pinnen en bestaande draden.
- Knooppunten worden waar nodig automatisch toegevoegd.
- Kruisende draden zijn niet verbonden tenzij er een knooppunt aanwezig is.

## Een bestaande indeling opruimen
{: #tidying-an-existing-layout}

Gebruik [Indeling opruimen (Automatische indeling)](../Layout-Tidy-Up/) om bestaande componenten, draden en labels op een heel blad of binnen een selectie te herschikken. Point-to-Point Wire maakt een nieuwe verbinding; Automatische indeling ruimt bestaande verbindingen op.

## Draden bewerken
{: #editing-wires}

Klik eenvoudigweg op een draad om deze te bewerken. U kunt nu het volledige draadsegment verslepen door de draad zelf te slepen, of de uiteinden van de draad verplaatsen door de verplaatsingsvakjes te slepen.

- Terug naar [Tekenen](../User-guide/)
- Terug naar [Inhoudsopgave v4](../CONTENTS/)
