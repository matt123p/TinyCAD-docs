---
layout: default
---
# Tekst en annotaties
{: #text--annotations}

Tekst- en annotatiehulpmiddelen zijn bedoeld voor documentatie en visuele duidelijkheid.

Deze objecten zijn **niet-elektrisch** en worden genegeerd bij het genereren van netlijsten en
het controleren van ontwerpregels.

## Tekst versus labels
{: #text-vs-labels}

- Gebruik **Tekst** voor notities, toelichtingen, titels en productie-instructies.
- Gebruik **Labels** voor elektrisch actieve netnamen.

Als u tekst gebruikt waar een label nodig is, wordt het net niet verbonden.

## Wat is Markdown?
{: #what-is-markdown}

Met Markdown voegt u opmaak toe aan gewone tekst door eenvoudige markeringen te typen. TinyCAD leest die markeringen en toont koppen, vetgedrukte tekst en lijsten.

| Wat u typt | Wat het betekent |
|---|---|
| `# Power supply` | Een kop |
| `**Check polarity**` | Vetgedrukte tekst |
| `*Optional*` | Cursieve tekst |
| `- R1: 10 kΩ` | Een item in een opsomming |
| `` `R1` `` | Inlinecode |

Zet een spatie na `#` of `-` aan het begin van een regel. Laat een lege regel tussen alinea’s.

Zet voor meerdere regels code `~~~` op een eigen regel vóór en na de code. Het volledige notitievoorbeeld hieronder laat dit zien.

## Markdown-tekstvakken
{: #markdown-text-boxes}

Markdown-tekstvakken zijn beschikbaar in [TinyCAD v4.0.11](../Changelog/#v4011).

1. Kies Tekst (Text, of druk op T) en sleep een vak op de tekening.
2. Klik in het vak en voer Markdown in. De opmaak verschijnt terwijl u typt.
3. Klik ergens anders om de opgemaakte notitie zonder Markdown-markeringen te bekijken. Vergroot het vak als de inhoud wordt afgesneden.

![Met SVG weergegeven Markdown-notitie met een kop, componentenlijst, takenlijst en codeblok.](../images/markdown-preview.png)

### Bewerkbare Markdown-bron
{: #editable-markdown-source}

Koppen, vetgedrukte en cursieve tekst en doorhalingen tonen hun opmaak, terwijl de markeringen zichtbaar en bewerkbaar blijven. De tekstcursor, selectie en regelomloop volgen de opgemaakte tekst. Code tussen scheidingstekens en ingesprongen code blijven letterlijk weergegeven; er is geen syntaxiskleuring.

Het gekozen lettertype, de grootte, vetdruk en cursivering vormen de basisstijl. Koppen schalen ten opzichte van die grootte; code gebruikt hetzelfde lettertype. Ongedaan maken, kopiëren/plakken en opslaan behouden de Markdown-bron.

![Dezelfde notitie tijdens het bewerken, met zichtbare markeringen voor de kop, vetdruk, lijst, takenlijst en codeblokken.](../images/markdown-source-editor.png)

### Ondersteunde opmaak
{: #supported-formatting}

Ondersteund zijn koppen, vetdruk, cursivering, doorhalingen, citaten, genummerde lijsten en opsommingen, takenlijsten, horizontale lijnen, inlinecode en codeblokken met scheidingstekens of inspringing. Gewone regeleinden blijven behouden. Tabellen, koppelingen, afbeeldingen en HTML worden als letterlijke tekst weergegeven, zonder speciale opmaak of het laden van externe afbeeldingen.

Voer bijvoorbeeld deze bron in om de afgebeelde notitie te maken:

````markdown
# RC filter
**Time constant:** τ = R × C

- R1: 10 kΩ
- C1: 100 nF

- [x] Draw the circuit
- [ ] Measure the response

~~~python
tau = 10_000 * 100e-9
~~~
````

## Annotatieobjecten
{: #annotation-objects}

TinyCAD ondersteunt veelgebruikte annotatievormen, waaronder:

- tekst,
- lijnen,
- rechthoeken,
- ellipsen,
- bogen,
- veelhoeken.

Gebruik deze om blokken te groeperen, gebieden te markeren en toelichtende notities toe te voegen zonder
de elektrische verbindingen in het circuit te wijzigen.


## Lijnen en veelhoeken tekenen
{: #drawing-lines--polygons}

U kunt een reeks lijnen tekenen. Klik met de rechtermuisknop om het tekenen te beëindigen.

U kunt dit omzetten in een veelhoek door in het contextmenu 'Veelhoek sluiten' ('Close Polygon') te selecteren. Nadat u dit hebt omgezet
in een veelhoek, kunt u de vulling wijzigen.

{% include video-player.html
	src="/v4/images/video/Video 7.mp4"
	width=1620
	height=924
	caption="Videohandleiding waarin wordt getoond hoe u een veelhoek tekent en bewerkt."
%}


- Terug naar [Tekenen](../User-guide/)
- Terug naar [inhoud van v4](../CONTENTS/)
