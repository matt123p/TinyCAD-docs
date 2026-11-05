---
layout: default
---
# Je eerste tekening
{: #your-first-drawing}

Deze pagina leidt je door de stappen voor het tekenen van je eerste schakelschema met TinyCAD.

Op het meest basale niveau is een TinyCAD-tekening een verzameling symbolen die
met draden met elkaar zijn verbonden. In dit voorbeeld plaats je enkele symbolen en verbind je ze vervolgens met draden.

## Voorbeeldschakeling
{: #example-circuit}

Hier is een eenvoudige schakeling om te tekenen:

<img src="/v4/images/media/image1.png" alt="Simple battery, resistor, and LED circuit used in the tutorial" style="width: 2.13542in; height: 1.13542in;" />

<p>
	<a href="/v4/examples/First%20Drawing.dsn" class="btn btn-primary" download>
		<i class="bi bi-download me-1" aria-hidden="true"></i>&nbsp;Downloaden
	</a>
</p>


## Videohandleiding
{: #video-walkthrough}

{% include video-player.html
	src="/v4/images/video/Video 2.mp4"
	width=1618
	height=922
	caption="Videohandleiding die laat zien hoe je symbolentekst bewerkt en verplaatst."
%}

# Stapsgewijze handleiding
{: #step-by-step-guide}

## Symboolbibliotheken
{: #symbol-libraries}

1. Typ `battery` in het zoekvak.
2. Selecteer **Multi Cell Battery**.
3. Sleep het symbool vanuit het symbolenpaneel naar de tekening.

Plaats nu een weerstand en een led.

Gebruik de draa-/spiegelknoppen op de werkbalk om symbolen in de juiste stand te zetten:

<img src="/v4/images/media/image5.png" alt="Rotate and flip controls used to change symbol orientation" />

Als je een fout maakt, gebruik je Ongedaan maken/Opnieuw (Undo/Redo):

<img src="/v4/images/media/image6.png" alt="Undo and Redo toolbar buttons" />

Je tekening moet er ongeveer zo uitzien:

<img src="/v4/images/media/image7.png" alt="Battery, resistor, and LED symbols placed on the drawing before wiring" style="width: 3.76042in; height: 2.52083in;" />

## Een schakeling bedraden
{: #wiring-up-a-circuit}

1. Selecteer het gereedschap **Wire**.
2. Klik op een batterijaansluiting om een draad te starten.
3. Ga naar de aansluiting van de weerstand en klik opnieuw om de draad te plaatsen.

Draden klikken vast aan geldige aansluitpunten van symbolen. Een rode cirkel geeft een
vastkliklocatie aan.

Tip: druk op `W` op het toetsenbord om snel terug te keren naar de bedradingsmodus.

Na het bedraden moet het er ongeveer zo uitzien:

<img src="/v4/images/media/image8.png" alt="Example circuit after the battery, resistor, and LED have been wired together" style="width: 3.40625in; height: 2.38542in;" />

## De tekening annoteren
{: #annotating-the-drawing}

Symbolen hebben componentwaarden en referenties nodig. In TinyCAD zijn dit doorgaans
de velden **Name** en **Ref** van het symbool.

1. Klik op de batterij.
2. Ga naar het paneel **Symbol** onderaan.
3. Wijzig `BATTERY_2` in `9V`.
4. Wijzig de referentie `Z?` in `B1`.

Herhaal dit voor de andere onderdelen:

- Weerstand: Name `1K`, Ref `R1`
- Led: Name `Red Led`, Ref `D1`

Als een naam/referentie verborgen is, gebruik je de selectievakjes om tekst
op de tekening weer te geven of te verbergen.

## Laden en opslaan
{: #loading-and-saving}

<div class="manual-tabset" data-tabset="product-mode" data-tabset-label="Choose your TinyCAD product" data-default-tab="Browser" markdown="1">

### Browser: lokale bestanden
{: #browser-local-files}

Gebruik de knoppen "Save As" (Opslaan als) of "Save" (Opslaan) op de werkbalk om je tekening op te slaan:

<img src="/v4/images/media/image2.png" alt="The toolbar buttons for Save and Save As"  />


### Browser: Google
{: #browser-google}

Je eerste tekening is voltooid. Zo geef je deze een andere naam:

1. Klik bovenaan op de naam van de tekening (bijvoorbeeld `tCad1.dsn`).
2. Geef de tekening de naam `First Drawing.dsn`.
3. Druk op Enter.

<img src="/v4/images/media/image13.png" alt="Editable drawing title field used to rename the current design" style="width: 4.15625in; height: 0.92708in;" />

Sla de tekening op in Google Drive met het pictogram **Save** (Opslaan).

Zo laad je de tekening opnieuw vanuit Google Drive:

1. Open <https://drive.google.com/drive/>.
2. Zoek de tekening.
3. Klik met de rechtermuisknop en kies **Open with -> TinyCAD**.

<img src="/v4/images/media/image14.png" alt="Google Drive context menu showing Open with TinyCAD for a drawing file" style="width: 5.09138in; height: 3.90625in;" />

Je kunt TinyCAD-ontwerpen ook hernoemen en verwijderen in Google Drive.

### Desktop-app
{: #desktop-app}

Je eerste tekening is voltooid. Zo sla je deze op vanuit de desktop-app:

1. Open **File -> Save As** (Bestand -> Opslaan als).
2. Kies een map op je computer.
3. Sla de tekening op als `First Drawing.dsn`.

Zo laad je de tekening later opnieuw:

1. Open **File -> Open** (Bestand -> Openen).
2. Blader naar `First Drawing.dsn`.
3. Selecteer het bestand en open het.

TinyCAD voor desktop gebruikt dezelfde indeling `.dsn` als TinyCAD in de browser. Je kunt
een tekening downloaden vanuit Google Drive en deze openen in de desktop-app.

Je kunt ook tekeningen die je met de desktopversie van TinyCAD hebt gemaakt, gebruiken met
de browsergebaseerde versie.

</div>

## Verder lezen
{: #further-reading}

Ga voor aangepaste symbolen en bibliotheken verder met
[Aangepaste symboolbibliotheken](../Custom-symbol-libraries/).

- Terug naar [Tekenen](../User-guide/)
- Terug naar [inhoud van v4](../CONTENTS/)
