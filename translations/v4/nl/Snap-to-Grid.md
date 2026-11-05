---
layout: default
---
# Uitlijnen op raster
{: #snap-to-grid}

Met Uitlijnen op raster wordt de muispositie tijdens het tekenen of plaatsen van items
uitgelijnd op het dichtstbijzijnde rasterpunt. Zo blijven symbolen en draden uitgelijnd en
landen verbindingen precies op geldige aansluitpunten.

## Waarom dit belangrijk is
{: #why-it-matters}

- Zorgt ervoor dat draadeinden en symboolpinnen verbonden zijn: als u Uitlijnen op raster niet gebruikt, loopt u
    het risico dat draden geen verbinding maken met pinnen.
- Voorkomt visuele verschuivingen die er correct uit kunnen zien, maar elektrisch
	geen verbinding vormen voor TinyCAD-hulpmiddelen.

Voor normaal schemawerk moet Uitlijnen op raster ingeschakeld blijven.

## Het raster weergeven en uitlijnen inschakelen
{: #showing-the-grid-and-enabling-snapping}

Open het werkbalkmenu **Settings** en kies vervolgens **Settings** om deze
onafhankelijke opties te wijzigen:

- **Show the grid** bepaalt of de rasterpunten zichtbaar zijn. Als u deze optie uitschakelt, wordt uitlijnen niet uitgeschakeld.
- **Snap to grid** bepaalt de uitlijning tijdens het plaatsen en verplaatsen van objecten. Als u deze optie uitschakelt, wordt het raster niet verborgen.

Rasterpunten worden mogelijk verborgen als er te ver is uitgezoomd om ze duidelijk weer te geven.

![Het dialoogvenster Settings met afzonderlijke selectievakjes voor Show the grid en Snap to grid.](../images/grid-settings.png)

Wanneer objecten zijn geselecteerd, verplaatsen de pijltoetsen ze met de rasterafstand als uitlijnen is ingeschakeld.
Als uitlijnen is uitgeschakeld, worden ze in kleine stappen verplaatst zonder
terug naar het raster te worden afgerond. Houd **Ctrl** ingedrukt voor kleine stappen, ongeacht de instelling voor uitlijnen.
Als er niets is geselecteerd, verschuiven de pijltoetsen de weergave.

## Rasterafstand
{: #grid-spacing}

TinyCAD ondersteunt 3 modi voor rasterafstand:

- **Normale rasterafstand**: het meest geschikt voor de meeste schemabewerkingen.
- **Fijne rasterafstand**: hogere puntdichtheid (tweemaal zoveel punten), handig
	voor annotaties en het tekenen van symbolen.
- **Gebruikersrasterafstand**: een aangepaste afstandswaarde die u invoert in het dialoogvenster Settings,
	in mm of inches, afhankelijk van de huidige eenheden.

Het wordt aanbevolen om voor alle tekeningen **Fijn raster** te gebruiken.

- Terug naar [Tekenen](../User-guide/)
- Terug naar [Inhoudsopgave v4](../CONTENTS/)
