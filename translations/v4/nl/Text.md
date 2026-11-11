---
layout: default
---
# Tekst
{: #text}

Tekst is bedoeld voor documentatie en visuele duidelijkheid.

Met de teksttool van TinyCAD maakt u een tekstvak op de tekening. Tekstvakken
zijn de belangrijkste manier om leesbare notities, instructies, toelichtingen en
koppen rechtstreeks aan een schema toe te voegen. Ze gebruiken [Markdown](https://{{ page.manual_language | default: 'en' | replace: 'zh-CN', 'zh' }}.wikipedia.org/wiki/Markdown), zodat u tekst kunt opmaken met koppen, vet, cursief,
lijsten, takenlijsten en codeblokken zonder het tekengebied te verlaten.

Deze objecten zijn niet-elektrisch en worden genegeerd bij het genereren van
netlijsten en bij ontwerpregelcontroles.

## Tekst versus labels
{: #text-vs-labels}

- Gebruik Tekst voor notities, toelichtingen, titels en productie-instructies.
- Gebruik Labels voor elektrisch actieve netnamen.

Als u tekst gebruikt waar een label nodig is, wordt het net niet verbonden.

## Wat is Markdown?
{: #what-is-markdown}
{: #what-is-markdown}

Markdown voegt opmaak toe aan platte tekst met behulp van eenvoudige getypte
markeringen. TinyCAD leest deze markeringen en geeft koppen, vetgedrukte tekst en lijsten weer.

| Wat u typt | Wat het betekent |
|---|---|
| `# Power supply` | Een kop |
| `**Check polarity**` | Vetgedrukte tekst |
| `*Optional*` | Cursieve tekst |
| `- R1: 10 kΩ` | Een item in een opsomming |
| `` `R1` `` | Inline code |

Plaats een spatie na `#` of `-` wanneer deze aan het begin van een regel staan. Laat een lege regel tussen
alinea's.

Plaats voor meerdere regels code `~~~` op een eigen regel vóór en na de code.
Het volledige voorbeeld van een notitie hieronder laat dit zien.

## Markdown-tekstvakken
{: #markdown-text-boxes}
{: #markdown-text-boxes}

Markdown-tekstvakken zijn beschikbaar in [TinyCAD v4.0.11](../Changelog/#v4011).

1. Kies Tekst (Text) (of druk op T) en sleep een vak op de tekening.
2. Klik in het vak en voer Markdown in. De opmaak wordt tijdens het typen weergegeven.
3. Klik ergens anders om de opgemaakte notitie zonder Markdown-markeringen te zien. Maak
   het vak groter als de inhoud wordt afgesneden.

![Met SVG weergegeven Markdown-notitie met een kop, componentenlijst, takenlijst en codeblok.](../images/markdown-preview.png)

### Bewerkbare Markdown-bron
{: #editable-markdown-source}
{: #editable-markdown-source}

Koppen, vet, cursief en doorhalen worden opgemaakt weergegeven, terwijl de
markeringen zichtbaar en bewerkbaar blijven. De cursor, selectie en automatische regelafbreking
volgen de opgemaakte tekst. Afgebakende en ingesprongen code blijft letterlijk; er wordt geen
syntaxiskleuring toegepast.

De gekozen lettertypefamilie, grootte en instellingen voor vet en cursief vormen de basisstijl.
Koppen worden ten opzichte van die grootte geschaald; code gebruikt ook de gekozen lettertypefamilie. Ongedaan maken,
kopiëren/plakken en opslaan behouden de Markdown-bron.

![Dezelfde notitie bewerken met zichtbare markeringen voor koppen, vet, lijsten, takenlijsten en codeblokken.](../images/markdown-source-editor.png)

### Ondersteunde opmaak
{: #supported-formatting}
{: #supported-formatting}

Ondersteunde opmaak omvat koppen, vet, cursief, doorhalen, citaten,
genummerde lijsten en opsommingen, takenlijsten, horizontale scheidingslijnen, inline code en
afgebakende of ingesprongen codeblokken. Gewone regeleinden blijven behouden. Tabellen,
links, afbeeldingen en HTML worden als letterlijke tekst weergegeven, zonder speciale
opmaak of het laden van afbeeldingen op afstand.

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

- Zie ook: [Vormen](../Shapes/)
- Terug naar [Tekenen](../User-guide/)
- Terug naar [inhoudsopgave v4](../CONTENTS/)
