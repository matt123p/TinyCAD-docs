---
layout: default
---
# TinyCAD-wijzigingslogboek
{: #tinycad-changelog}


## v4.0.11
{: #v4011}
{: #v4011}

Deze release voegt opgemaakte Markdown-notities, vectoruitvoer in SVG-formaat en besturingselementen voor draadroutering toe.

- [Markdown-tekstvakken](../Text/#markdown-text-boxes): opgemaakte notities met lijsten, taaklijsten en codeblokken; dezelfde vectorrenderer voor de tekening, SVG-export en PDF.
- Live bronopmaak houdt bewerkbare markeringen zichtbaar en volgt het gekozen basislettertype, met overeenkomstige cursorplaatsing, selectie en regelterugloop.
- [Draadrouteringsmodi](../Wires/#wire-routing-modes): een compacte keuzeknop voor routering onder 90°, 45° en vrij, waarbij een actieve voorbeeldweergave behouden blijft.
- De vergrootglasknop verschijnt alleen na aanraakinvoer op het tekengebied.

## v4.0.10 — 6 november 2026
{: #v4010--6-november-2026}
{: #v4010}

- Houd de werkbalk van de editor zichtbaar wanneer bibliotheek- of schema-panelen meer verticale ruimte nodig hebben.

## v4.0.9 — 4 november 2026
{: #v409--4-november-2026}

### Toegevoegd
{: #added}

- [Aanraakbediening](../Touch-controls/), waaronder rechtstreeks bewerken, pannen met twee vingers
  en zoomen met knijpen, en een vergrootglas met de bedieningselementen Klikken, Slepen/neerzetten, Menu en Sluiten
  voor nauwkeurige plaatsing.
- [Aanpasbaar bibliotheekpaneel en symboolsortering](../Using-Symbol-Libraries/),
  waaronder alfabetische sortering van zoekresultaten.
- [Geselecteerde objecten tijdelijk verbergen](../User-guide/#temporarily-hiding-objects)
  en een opdracht om alle verborgen objecten op het huidige blad weer te geven.
- Poolse interfacevertaling en vertaalde tekst in het dialoogvenster Symbool vervangen.

### Opgelost
{: #fixed}

- [Rasterzichtbaarheid en uitlijnen](../Snap-to-Grid/) werken onafhankelijk van elkaar, en
  verplaatsen met het toetsenbord houdt rekening met uitgeschakeld uitlijnen.
- Bitmapafbeeldingen worden weergegeven in geplaatste bibliatuursymbolen.
- [Escape annuleert teken- en plaatsingsacties](../Shortcuts/), ook wanneer
  de focus op werkbalkbedieningselementen staat.
- Als u de melding over niet-opgeslagen wijzigingen op het bureaublad annuleert, wordt het wachtende afsluiten geannuleerd.
- Knijpzoomen op het tekengebied stapelt niet langer op met zoomen van de browserpagina.
- Verbeterde positionering van het aanraakvergrootglas, aanwijzerfeedback, gebarenverwerking en slepen.
- Verbeterd gedrag van het dialoogvenster Info op desktop en macOS.

### Pakketten en onderhoud
{: #packaging-and-maintenance}

- Afhankelijkheden bijgewerkt om beveiligingslekken te verhelpen.
- Linux ARMv7-pakketten verwijderd omdat de Electron-runtime Linux x64
  en ARM64 ondersteunt. Snap-pakketten zijn bedoeld voor x64; Debian-pakketten voor x64 en ARM64.

[Releases downloaden](https://github.com/matt123p/TinyCADv4/releases/tag/v4.0.9)
· [Broncodewijzigingen](https://github.com/matt123p/TinyCADv4/compare/v4.0.8...v4.0.9)

## v4.0.8 — 3 mei 2026
{: #v408--3-may-2026}

- Rotatie van voedingssymbolen bij het opslaan en opnieuw openen van een tekening opgelost.
- Nettypen van draden behouden bij opslaan en laden, zodat draadkleuren consistent blijven.

[Releases downloaden](https://github.com/matt123p/TinyCADv4/releases/tag/v4.0.8)
· [Broncodewijzigingen](https://github.com/matt123p/TinyCADv4/compare/v4.0.7...v4.0.8)

## v4.0.7 — 13 april 2026
{: #v407--13-april-2026}

- Afdrukken in de desktopapplicatie hersteld.
- Knijpzoomen verbeterd om ongecontroleerd zoomen te voorkomen.
- Server-side rendering van bibliatuursymbolen toegevoegd.
- Automatische tagging van productieversies en aanmaak van GitHub-releases.

[Releases downloaden](https://github.com/matt123p/TinyCADv4/releases/tag/v4.0.7)
· [Broncodewijzigingen](https://github.com/matt123p/TinyCADv4/compare/4.0.6...v4.0.7)

## v4.0.6 — 29 maart 2026
{: #v406--29-march-2026}

Deze release bevat de ontwikkelingswijzigingen die zijn aangebracht onder versie 4.0.5; er is
geen afzonderlijke 4.0.5-tag of gepubliceerde GitHub-release.

### Toegevoegd
{: #added-1}

- Automatische draadroutering.
- Symbool vervangen om een bestaand component te vervangen door een ander bibliatuursymbool.
- Automatisch scrollen tijdens het slepen nabij de rand van de tekening.
- Dubbelklikken om een volledige draad te selecteren en driemaal klikken om verder dan
  knooppunten en T-aansluitingen te selecteren.
- Een optie om de verbindingsindicator van labels uit te schakelen.

### Opgelost en verbeterd
{: #fixed-and-improved}

- Bibliotheekmappen zijn standaard geopend en worden uitgevouwen tijdens het zoeken.
- Tekstbewerking, sneltoetsen voor het klembord, navigatietoetsen en sneltoetsen
  verbeterd wanneer de tekening focus heeft.
- Selectie met Ctrl-klik, het slepen van meerdere geselecteerde objecten en draaiknoppen hersteld.
- Teken- en selectierechthoeken kunnen in beide richtingen worden gesleept.
- Afsluiten op macOS hersteld en dubbel laden van bibliotheken op macOS verminderd.
- Labelpositionering, vertaling van de kleurkiezer en achtergrondverwerking van netlijsten hersteld.
- Namen van Windows-installatieprogramma's en AppX-builds gecorrigeerd.

[Releases downloaden](https://github.com/matt123p/TinyCADv4/releases/tag/4.0.6)
· [Broncodewijzigingen](https://github.com/matt123p/TinyCADv4/compare/4.0.4...4.0.6)

## v4.0.4 — brontag, 19 maart 2026
{: #v404--source-tag-19-march-2026}

- [Bibliotheekmappen](../Library-Folders/) toegevoegd om symboolbibliotheken te organiseren.
- Nederlandse interfacevertaling toegevoegd.
- Buildartefacten voor de browser en implementatie naar GitHub Pages toegevoegd.
- Snap-packaging hersteld.

[Broncodewijzigingen](https://github.com/matt123p/TinyCADv4/compare/4.0.3...4.0.4)

## v4.0.3 — brontag, 15 maart 2026
{: #v403--source-tag-15-march-2026}

- De opstartafhandeling van macOS aangepast om een opstartprobleem op te lossen.

De brontag is 4.0.3, hoewel de pakketmetadata nog steeds 4.0.2 vermeldt.

[Broncodewijzigingen](https://github.com/matt123p/TinyCADv4/compare/4.0.2...4.0.3)

## v4.0.2 — 14 maart 2026
{: #v402--14-march-2026}

- Het dialoogvenster voor sluiten met niet-opgeslagen wijzigingen op Linux hersteld.
- x64 Debian-pakketten toegevoegd naast de bestaande ARM-builds.
- Buildgereedschap en configuratie voor packaging bijgewerkt.

[Releases downloaden](https://github.com/matt123p/TinyCADv4/releases/tag/4.0.2)
· [Broncodewijzigingen](https://github.com/matt123p/TinyCADv4/compare/4.0.1...4.0.2)

## v4.0.1 — eerste brontag, 13 maart 2026
{: #v401--initial-source-tag-13-march-2026}

De eerste momentopname van de broncode bevat al de herschreven TinyCAD-versie voor gebruik in de browser en op het bureaublad, met schemabewerking, symboolbibliotheken, ondersteuning voor bestaande
`.dsn`- en `.tclib`-bestanden en exportmogelijkheden. Eerdere ontwikkeling is niet
vastgelegd in deze repository.

[Eerste momentopname van de broncode](https://github.com/matt123p/TinyCADv4/tree/4.0.1)

- Terug naar de [inhoudsopgave van v4](../CONTENTS/)
