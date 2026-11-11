---
layout: default
---
# TinyCAD-wijzigingslog
{: #tinycad-v4-changelog}


## v4.0.11
{: #v4011}

Deze versie voegt opgemaakte Markdown-notities, vectoruitvoer met SVG en bediening voor draadroutering toe.

- [Markdown-tekstvakken](../Text-and-Annotations/#markdown-text-boxes): opgemaakte notities met lijsten, takenlijsten en codeblokken; dezelfde vectorrenderer voor de tekening, SVG-export en PDF.
- Live bronopmaak houdt bewerkbare markeringen zichtbaar en volgt het gekozen basislettertype, met passende tekstcursor, selectie en regelomloop.
- [Draadrouteringsmodi](../Wires/#wire-routing-modes): een compacte keuzeknop voor routering onder 90°, 45° en vrije hoeken, met behoud van een actief voorbeeld.
- De loepknop verschijnt pas na aanraakinvoer op het tekenvlak.

## v4.0.10 — 6 november 2026
{: #v4010}

- Houd de werkbalk van de editor zichtbaar wanneer bibliotheek- of schemapanelen meer verticale ruimte nodig hebben.

## v4.0.9 — 4 november 2026
{: #v409--4-november-2026}

### Toegevoegd
{: #added}

- [Aanraakbediening](../Touch-controls/), inclusief directe bewerking, pannen met twee vingers
  en knijpzoomen, en een vergrootglas met bedieningselementen voor klikken, slepen/neerzetten, menu en sluiten
  voor nauwkeurige plaatsing.
- [Aanpasbaar bibliotheekpaneel en symboolsortering](../Using-Symbol-Libraries/),
  inclusief alfabetische sortering van zoekresultaten.
- [Geselecteerde objecten tijdelijk verbergen](../User-guide/#temporarily-hiding-objects)
  en een opdracht om alle verborgen objecten op het huidige blad te herstellen.
- Poolse interfacevertaling en vertaalde tekst in het dialoogvenster Symbool vervangen.

### Opgelost
{: #fixed}

- [Rasterzichtbaarheid en uitlijnen op raster](../Snap-to-Grid/) werken onafhankelijk van elkaar, en
  verplaatsen met het toetsenbord houdt rekening met uitgeschakeld uitlijnen op raster.
- Bitmapafbeeldingen worden weergegeven in geplaatste bibliatuursymbolen.
- [Escape annuleert teken- en plaatsingsacties](../Shortcuts/), ook wanneer
  de focus op werkbalkbedieningselementen ligt.
- Annuleren van de melding voor niet-opgeslagen wijzigingen op het bureaublad wist de openstaande afsluitopdracht.
- Knijpzoomen op het canvas stapelt niet langer op met zoomen van de browserpagina.
- Verbeterde plaatsing van het aanraakvergrootglas, aanwijzerfeedback, gebarenafhandeling en slepen.
- Verbeterd gedrag van het dialoogvenster Info op desktop en macOS.

### Pakketten en onderhoud
{: #packaging-and-maintenance}

- Afhankelijkheden bijgewerkt om beveiligingsproblemen aan te pakken.
- Linux ARMv7-pakketten verwijderd omdat de Electron-runtime Linux x64
  en ARM64 ondersteunt. Snap-pakketten zijn bedoeld voor x64; Debian-pakketten voor x64 en ARM64.

[Releasebestanden downloaden](https://github.com/matt123p/TinyCADv4/releases/tag/v4.0.9)
· [Broncodewijzigingen](https://github.com/matt123p/TinyCADv4/compare/v4.0.8...v4.0.9)

## v4.0.8 — 3 mei 2026
{: #v408--3-may-2026}

- Rotatie van voedingssymbolen bij het opslaan en opnieuw openen van een tekening hersteld.
- Draadnettypen behouden bij opslaan en laden, zodat draadkleuren consistent blijven.

[Releasebestanden downloaden](https://github.com/matt123p/TinyCADv4/releases/tag/v4.0.8)
· [Broncodewijzigingen](https://github.com/matt123p/TinyCADv4/compare/v4.0.7...v4.0.8)

## v4.0.7 — 13 april 2026
{: #v407--13-april-2026}

- Afdrukken in de desktoptoepassing hersteld.
- Knijpzoomgedrag verbeterd om ongecontroleerd zoomen te voorkomen.
- Server-side rendering van bibliatuursymbolen toegevoegd.
- Automatische tagging van productiebuilds en het aanmaken van GitHub-releases.

[Releasebestanden downloaden](https://github.com/matt123p/TinyCADv4/releases/tag/v4.0.7)
· [Broncodewijzigingen](https://github.com/matt123p/TinyCADv4/compare/4.0.6...v4.0.7)

## v4.0.6 — 29 maart 2026
{: #v406--29-march-2026}

Deze release bevat de ontwikkelwijzigingen die zijn aangebracht onder versie 4.0.5; er is
geen afzonderlijke 4.0.5-tag of gepubliceerde GitHub-release.

### Toegevoegd
{: #added-1}

- Automatische draadroutering.
- Symbool vervangen (Replace Symbol) om een bestaand component te vervangen door een ander bibliatuursymbool.
- Automatisch scrollen tijdens het slepen dicht bij de rand van de tekening.
- Dubbelklikken selecteert een volledige draad en driemaal klikken selecteert voorbij
  knooppunten en T-aansluitingen.
- Een optie om de verbindingsindicator van labels uit te schakelen.

### Opgelost en verbeterd
{: #fixed-and-improved}

- Bibliotheekmappen zijn standaard geopend en worden uitgevouwen tijdens het zoeken.
- Tekstbewerking, sneltoetsen voor het klembord, navigatietoetsen en sneltoetsen
  verbeterd wanneer de tekening focus heeft.
- Selectie met Ctrl-klik, het slepen van meerdere geselecteerde objecten en draaiknoppen hersteld.
- Teken- en selectierechthoeken kunnen in beide richtingen worden gesleept.
- Afsluiten op macOS hersteld en dubbel laden van bibliotheken op macOS verminderd.
- Labelpositionering, vertaling van de kleurkiezer en achtergrondverwerking van de netlijst hersteld.
- Namen van Windows-installatieprogramma's en AppX-builds gecorrigeerd.

[Releasebestanden downloaden](https://github.com/matt123p/TinyCADv4/releases/tag/4.0.6)
· [Broncodewijzigingen](https://github.com/matt123p/TinyCADv4/compare/4.0.4...4.0.6)

## v4.0.4 — broncodetag, 19 maart 2026
{: #v404--source-tag-19-march-2026}

- [Bibliotheekmappen](../Library-Folders/) toegevoegd om symboolbibliotheken te organiseren.
- Nederlandse interfacevertaling toegevoegd.
- Browserbuildartefacten en implementatie naar GitHub Pages toegevoegd.
- Snap-pakket hersteld.

[Broncodewijzigingen](https://github.com/matt123p/TinyCADv4/compare/4.0.3...4.0.4)

## v4.0.3 — broncodetag, 15 maart 2026
{: #v403--source-tag-15-march-2026}

- Afhandeling van het opstarten van macOS aangepast om een opstartprobleem op te lossen.

De broncodetag is 4.0.3, hoewel de pakketmetadata nog steeds 4.0.2 vermelden.

[Broncodewijzigingen](https://github.com/matt123p/TinyCADv4/compare/4.0.2...4.0.3)

## v4.0.2 — 14 maart 2026
{: #v402--14-march-2026}

- Het dialoogvenster voor sluiten met niet-opgeslagen wijzigingen op Linux hersteld.
- x64 Debian-pakketten toegevoegd naast de bestaande ARM-builds.
- Buildgereedschappen en pakketconfiguratie bijgewerkt.

[Releasebestanden downloaden](https://github.com/matt123p/TinyCADv4/releases/tag/4.0.2)
· [Broncodewijzigingen](https://github.com/matt123p/TinyCADv4/compare/4.0.1...4.0.2)

## v4.0.1 — eerste broncodetag, 13 maart 2026
{: #v401--initial-source-tag-13-march-2026}

De eerste momentopname van de broncode bevat de TinyCAD-herschrijving voor gebruik in browsers en
op desktop, met schemabewerking, symboolbibliotheken, ondersteuning voor bestaande
`.dsn`- en `.tclib`-bestanden en exportmogelijkheden. Eerdere ontwikkeling is niet
vastgelegd in deze repository.

[Eerste momentopname van de broncode](https://github.com/matt123p/TinyCADv4/tree/4.0.1)

- Terug naar [inhoud v4](../CONTENTS/)
