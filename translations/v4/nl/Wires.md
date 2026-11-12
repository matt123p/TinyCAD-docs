---
layout: default
---
# Draden
{: #wires}

Draden zijn de elektrisch actieve verbindingen in een TinyCAD-schema.

Als u verbindingen nodig hebt voor DRC, netlijsten, SPICE-/PCB-export of
koppelingen tussen bladen, gebruik dan draadobjecten (geen annotatielijnen).

## Waarom draden belangrijk zijn
{: #why-wires-matter}

- Draden definiëren elektrische netten.
- Draden worden uitgelijnd op symboolpinnen en andere geldige verbindingspunten.
- TinyCAD gebruikt draadverbindingen voor regelcontroles en gegenereerde uitvoer.

Het gebruik van annotatielijnen in plaats van draden kan er visueel correct uitzien, maar
het circuit is dan elektrisch niet verbonden voor gereedschappen.

## Draadrouteringsmodi
{: #wire-routing-modes}
{: #wire-routing-modes}

Kies in TinyCAD v4.0.11 met de keuzelijst naast Draad (Wire) hoe nieuwe segmenten worden getekend.

| Modus | Gedrag |
|---|---|
| **90°** | Horizontale en verticale routering. |
| **45°** | Routering beperkt tot de 45°-richtingen van TinyCAD. |
| **Vrij (Free)** | Rechte segmenten onder elke hoek. |

Als u een modus kiest, wordt Draad geactiveerd en blijft een eventuele actieve draadvoorvertoning behouden. U kunt de modus wijzigen voordat u het volgende segment plaatst. Rasteruitlijning blijft een afzonderlijke instelling. Gebruik voor automatische routering tussen twee verbindingspunten het naastgelegen gereedschap [Draad van punt tot punt](#auto-routing).

![Werkbalkkeuzelijst voor draden met de opties 90°, 45° en Vrij.](../images/wire-routing-modes.png)

## Draden plaatsen
{: #placing-wires}
{: #placing-wires}

1. Selecteer het gereedschap Draad.
2. Klik om te beginnen op een geldig verbindingspunt - dit is echter niet strikt noodzakelijk.  U kunt overal een draad plaatsen.  U kunt zien of het verbindingspunt geldig is, omdat de verbinding met een rode cirkel wordt aangegeven.
3. Klik om zo nodig hoeken/segmenten te plaatsen.
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
		<i class="bi bi-download me-1" aria-hidden="true"></i>&nbsp;Downloaden
	</a>
</p>


## Automatische routering met Draad van punt tot punt
{: #auto-routing-with-point-to-point-wire}
{: #auto-routing}

**Draad van punt tot punt (Point-to-Point Wire)** kiest een route tussen twee verbindingspunten en plaatst
de draadsegmenten voor u. Dit is handig voor dagelijks gebruik met de muis en vooral
op een touchscreen, waar twee eindpunten aantikken eenvoudiger is dan elke hoek plaatsen.

1. Selecteer **Draad van punt tot punt (Point-to-Point Wire)**, naast de keuzelijst voor de draadmodus op de werkbalk.
2. Klik of tik op de startpin van een symbool of op een bestaande draad. Een rode cirkel markeert
   een geldig verbindingspunt.
3. Beweeg naar de bestemmingspin of -draad om de automatische route te bekijken.
4. Klik of tik op de bestemming om de volledige verbinding te plaatsen. TinyCAD selecteert
   de nieuwe draadsegmenten en verlaat het routeringsgereedschap. Selecteer **Draad van punt tot punt
   (Point-to-Point Wire)** opnieuw om nog een verbinding te maken.

In tegenstelling tot het gewone gereedschap Draad moeten beide eindpunten geldige verbindingspunten zijn;
als u op lege ruimte klikt, wordt er geen hoek geplaatst. Klik met de rechtermuisknop om een onafgemaakte
route te annuleren. Als u de hoeken zelf wilt kiezen, gebruikt u [Draad](#placing-wires).

Probeer de [voorbeeldtekening voor automatische routering](../examples/Auto-route%20example.dsn). De weerstand en led staan op het raster, maar de verbinding ertussen ontbreekt nog.

Selecteer eerst Point-to-Point Wire en kies de rechterpin van R1.

![1. Begin met R1 en D1 zonder onderlinge verbinding. De rode cirkel markeert de beginpin op R1.](../images/wire-auto-route-start.png){: width="435" style="max-width: 50%;"}

Wijs vervolgens de bovenste pin van D1 aan. Het voorbeeld toont de route en de hoek voordat u de verbinding bevestigt.

![2. Bekijk de automatische route naar D1. De rode cirkel markeert de eindpin.](../images/wire-auto-route.png){: width="435" style="max-width: 50%;"}

Klik of tik ten slotte op de pin van D1. TinyCAD plaatst alle segmenten in één handeling.

![3. Bevestig het eindpunt om de volledige verbinding, inclusief de hoek, te plaatsen.](../images/wire-auto-route-complete.png){: width="435" style="max-width: 50%;"}

Op een touchscreen kunt u de twee eindpunten rechtstreeks aantikken. Gebruik bij kleine of dicht opeenstaande
pinnen het [vergrootglas](../Touch-controls/#precise-placement-with-the-loupe): richt
op elk eindpunt en druk op **Klikken**. U hoeft niet langs de route te slepen of de
hoeken ervan aan te tikken. Controleer de voltooide verbinding en pas de segmenten zo nodig aan.

## Uitlijning en knooppunten
{: #snapping-and-junctions}

- Draden worden magnetisch uitgelijnd op pinnen en bestaande draden.
- Waar nodig worden automatisch knooppunten toegevoegd.
- Kruisende draden zijn niet verbonden tenzij er een knooppunt aanwezig is.

## Draden bewerken
{: #editing-wires}

Klik op een draad om deze te bewerken.  U kunt nu het volledige draadsegment verslepen door de draad zelf te verslepen, of de uiteinden van de draad verplaatsen door de verplaatsingsgrepen te verslepen.

- Terug naar [Tekenen](../User-guide/)
- Terug naar [inhoud van v4](../CONTENTS/)
