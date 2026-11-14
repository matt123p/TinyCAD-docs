---
layout: default
---
# TinyCAD-wijzigingen
{: #tinycad-changelog}


## Nog niet uitgebracht
{: #unreleased}
{: #unreleased}

### Toegevoegd
{: #added}

- [Geïntegreerde simulatie](../Simulation/) met lokale ngspice in de browser en Desktop, met werkpunt-, transiënt-, AC-, DC-sweep-, ruis-, overdrachtsfunctie- en pool-nulpuntsanalyses. [Gebeurtenisgestuurde XSPICE](../XSPICE/) wordt ondersteund in Desktop.
- [Bronnen, probes en virtuele instrumenten](../Simulation-Sources-and-Instruments/), waaronder oscilloscopen, multimeters, functiegeneratoren en laboratoriumvoedingen.
- [Circuitverkenner](../Simulation-Charts-and-Measurements/) voor afstellen, sweeps, benoemde metingen, vereisten, DC-overlays, tolerant onderzoeken, testgevallen en vermogens-/spanningsonderzoek.
- [Gecomprimeerde `.dzn`-tekeningen](../Simulation/#dzn-simulation-drawings) waarin het circuit, de modellen, simulatie-instellingen en optionele resultaten bij elkaar blijven. Uitvoergeschiedenis en resultaatexports ondersteunen vergelijken en delen; met Opslaan zonder resultaten maakt u een kleinere kopie.
- [Meegeleverde bibliotheken](../Bundled-Libraries/) voor netwerkindelingen, ingebouwde borden en smart-homemodules, audio, laboratoriumapparatuur, motoren/beweging en zonne-/batterijplanning, naast gemodelleerde SPICE-, logica-, functionele en sensorverzamelingen. Selecteer deze op het tabblad Standaard van de bibliotheekkiezer.
- [Zeven bewerkbare tekeningvoorbeelden](../Bundled-Examples/) over de oorspronkelijke transistorversterker, het kantoornetwerk, het ESP32-klimaat-/displaystation, de zonne-/batterijwoning, de podcaststudio, de laboratoriumwerkbank en de motorbesturingswerkbank, met ingesloten symbolen en toelichtingen.
- [SPICE- en XSPICE-zelfstudies](../Simulation-Tutorials/): elf analoge en zes digitale hoofdstukken, met 28 verschillende uitvoerbare tekeningen, modeldefinities, analyse-instellingen en bewaarde referentiemetingen.
- [Indeling opruimen](../Layout-Tidy-Up/) voor hele bladen of geselecteerde items, met sterkte Laag/Gemiddeld/Hoog, annuleren, verbindingscontroles en éénstaps Ongedaan maken.

### Gewijzigd
{: #changed}

- Voorbeeld openen en Toelichting staan in de titelbalk van de browser. Desktop biedt Bestand → Voorbeeld openen en Beeld → Toelichting weergeven.
- Het menu Beeld van Desktop bevat Grafieken weergeven; de simulatiemenuoptie op de werkbalk behoudt de schakelaar voor grafieken.
- Automatische indeling staat naast Simulatie op de werkbalk en is ook beschikbaar in het menu Extra van Desktop.

### Opgelost
{: #fixed}

- Herstel de versleepbare voorbeelden van componentillustraties in de resultaten van Standaard, Mijn bibliotheken en Online.
- Verklein de illustraties van ingebouwde besturingen, sensoren en displays tot praktische afmetingen voor de paginalay-out, met behoud van pinaanduidingen en bedradingsposities.
- Voorkom dat wijzigingen in de indeling ongewenste verbindingen creëren bij draadeinden, bochten of aansluitingen; verbeter pinaansluitingen en verwijder onnodige omwegen.
- Verwijder kleine aansluitingslabelkaders die tekst in symbolen voor laboratorium- en bewegingsbesturing overlappen en werk de betreffende voorbeelden bij.
- Verbeter foutmeldingen en diagnostiek van simulaties, versterkerruns in de browser, pop-outgrafieken en afzonderlijke voorbeeld-/toelichtingsvensters.

### Handleiding
{: #manual}

- Voeg uitleg toe over het vinden en gebruiken van meegeleverde bibliotheken en voorbeelden en vervang de SPICE-beschrijving die alleen over export ging door de workflow voor geïntegreerde simulatie.
- Voeg verwijzingen toe naar analyses, modellen, instrumenten, grafieken, metingen en probleemoplossing, met links naar de officiële ngspice- en XSPICE-documentatie.
- Neem de volledige bestaande cursussen, downloadbare tekeningen/netlists en tien video-uitlegvideo's op over bibliotheken, voorbeelden, indeling opruimen, verbindingen over meerdere bladen en SPICE.
- Verduidelijk [verschillen in functies](../Feature-Differences/), waaronder `.dzn` en compatibiliteit met Markdown-tekstvakken en ondersteuning voor XSPICE in de browser.
- Werk de handleiding bij in alle acht ondersteunde talen, waaronder navigatie, nieuwe naslagpagina's, zelfstudietekst en videobijschriften.

## v4.0.11
{: #v4011}
{: #v4011}

Deze uitgave voegt opgemaakte Markdown-notities, vector-SVG-uitvoer en bedieningselementen voor draadroutering toe.

- [Markdown-tekstvakken](../Text/#markdown-text-boxes): opgemaakte notities met lijsten, taaklijsten en codeblokken; dezelfde vectorrenderer voor de tekening, SVG-export en PDF.
- Live bronopmaak houdt bewerkbare markeringen zichtbaar en volgt het gekozen basislettertype, met overeenkomstige cursorpositie, selectie en tekstterugloop.
- [Draadrouteringsmodi](../Wires/#wire-routing-modes): een compacte keuzelijst voor routering onder 90°, 45° en Vrij, waarbij een actieve voorvertoning behouden blijft.
- De loepknop verschijnt alleen na aanraakinvoer op het tekenblad.

## v4.0.10 — 6 november 2026
{: #v4010--6-november-2026}
{: #v4010}

- Houd de werkbalk van de editor zichtbaar wanneer bibliotheek- of schemazijpanelen meer verticale ruimte nodig hebben.

## v4.0.9 — 4 november 2026
{: #v409--4-november-2026}

### Toegevoegd
{: #added-1}

- [Aanraakbediening](../Touch-controls/), waaronder directe bewerking, pannen met twee vingers
  en knijpzoomen, plus een vergrootloep met de bedieningselementen Klikken, Slepen/neerzetten, Menu en Sluiten
  voor nauwkeurige plaatsing.
- [Aanpasbaar bibliotheekpaneel en symboolsortering](../Using-Symbol-Libraries/),
  waaronder alfabetische sortering van zoekresultaten.
- [Geselecteerde objecten tijdelijk verbergen](../User-guide/#temporarily-hiding-objects)
  en een opdracht om alle verborgen objecten op het huidige blad te herstellen.
- Poolse interfac vertaling en vertaalde tekst in het dialoogvenster Symbool vervangen.

### Opgelost
{: #fixed-1}

- [Rasterzichtbaarheid en uitlijnen](../Snap-to-Grid/) werken onafhankelijk van elkaar, en
  verplaatsen met het toetsenbord houdt rekening met uitgeschakeld uitlijnen.
- Bitmapafbeeldingen worden weergegeven in geplaatste bibliotheeksymbolen.
- [Escape annuleert teken- en plaatsingsacties](../Shortcuts/), ook wanneer
  de focus op werkbalkbedieningselementen staat.
- Annuleren van de Desktop-melding over niet-opgeslagen wijzigingen wist de uitstaande afsluitopdracht.
- Knijpzoomen op het canvas stapelt niet langer op met browserpaginazoom.
- Verbeterde positionering van de aanraakloep, aanwijzerfeedback, gebarenafhandeling en slepen.
- Verbeterd gedrag van het dialoogvenster Info in Desktop en macOS.

### Pakketten en onderhoud
{: #packaging-and-maintenance}

- Afhankelijkheden bijgewerkt om beveiligingslekken te verhelpen.
- Linux ARMv7-pakketten verwijderd omdat de Electron-runtime Linux x64
  en ARM64 ondersteunt. Snap-pakketten zijn voor x64; Debian-pakketten zijn voor x64 en ARM64.

[Releasebestanden downloaden](https://github.com/matt123p/TinyCADv4/releases/tag/v4.0.9)
· [Broncodewijzigingen](https://github.com/matt123p/TinyCADv4/compare/v4.0.8...v4.0.9)

## v4.0.8 — 3 mei 2026
{: #v408--3-may-2026}

- Rotatie van voedingssymbolen bij opslaan en opnieuw openen van een tekening opgelost.
- Draadnettypen behouden bij opslaan en laden, zodat draadkleuren consistent blijven.

[Releasebestanden downloaden](https://github.com/matt123p/TinyCADv4/releases/tag/v4.0.8)
· [Broncodewijzigingen](https://github.com/matt123p/TinyCADv4/compare/v4.0.7...v4.0.8)

## v4.0.7 — 13 april 2026
{: #v407--13-april-2026}

- Afdrukken in de desktopapplicatie opgelost.
- Knijpzoomgedrag verbeterd om ongecontroleerd zoomen te voorkomen.
- Renderen van bibliotheeksymbolen aan de serverzijde toegevoegd.
- Tagging van productiebuilds en aanmaken van GitHub-releases geautomatiseerd.

[Releasebestanden downloaden](https://github.com/matt123p/TinyCADv4/releases/tag/v4.0.7)
· [Broncodewijzigingen](https://github.com/matt123p/TinyCADv4/compare/4.0.6...v4.0.7)

## v4.0.6 — 29 maart 2026
{: #v406--29-march-2026}

Deze uitgave bevat de ontwikkelingswijzigingen die zijn gemaakt onder versie 4.0.5; er is
geen afzonderlijke 4.0.5-tag of gepubliceerde GitHub-release.

### Toegevoegd
{: #added-2}

- Automatische draadroutering.
- Symbool vervangen om een bestaande component te wijzigen in een ander bibliotheeksymbool.
- Automatisch schuiven tijdens het slepen nabij de rand van de tekening.
- Dubbelklikken selecteert een volledige draad en driemaal klikken selecteert voorbij
  knooppunten en T-aftakkingen.
- Een optie om de labelverbindingsindicator uit te schakelen.

### Opgelost en verbeterd
{: #fixed-and-improved}

- Bibliotheekmappen worden standaard geopend en uitgeklapt bij het zoeken.
- Tekstbewerking, klembordsneltoetsen, navigatietoetsen en sneltoetsen verbeterd
  wanneer de tekening de focus heeft.
- Ctrl-klikselectie, slepen van meerdere geselecteerde objecten en draaiknoppen opgelost.
- Teken- en selectierechthoeken kunnen in beide richtingen worden gesleept.
- Afsluiten op macOS opgelost en dubbel laden van bibliotheken op macOS verminderd.
- Labelpositionering, vertaling van de kleurkiezer en achtergrondverwerking van netlists opgelost.
- Namen van Windows-installatieprogramma's en AppX-builds gecorrigeerd.

[Releasebestanden downloaden](https://github.com/matt123p/TinyCADv4/releases/tag/4.0.6)
· [Broncodewijzigingen](https://github.com/matt123p/TinyCADv4/compare/4.0.4...4.0.6)

## v4.0.4 — brontag, 19 maart 2026
{: #v404--source-tag-19-march-2026}

- [Bibliotheekmappen](../Library-Folders/) toegevoegd om symboolbibliotheken te organiseren.
- Nederlandse interfac vertaling toegevoegd.
- Browserbuildartefacten en implementatie naar GitHub Pages toegevoegd.
- Snap-verpakking opgelost.

[Broncodewijzigingen](https://github.com/matt123p/TinyCADv4/compare/4.0.3...4.0.4)

## v4.0.3 — brontag, 15 maart 2026
{: #v403--source-tag-15-march-2026}

- Afhandeling van het opstarten van macOS aangepast om een opstartprobleem op te lossen.

De brontag is 4.0.3, hoewel de pakketmetadata nog steeds 4.0.2 vermeldt.

[Broncodewijzigingen](https://github.com/matt123p/TinyCADv4/compare/4.0.2...4.0.3)

## v4.0.2 — 14 maart 2026
{: #v402--14-march-2026}

- Het dialoogvenster voor sluiten met niet-opgeslagen wijzigingen op Linux opgelost.
- x64 Debian-pakketten toegevoegd naast de bestaande ARM-builds.
- Buildgereedschappen en verpakkingsconfiguratie bijgewerkt.

[Releasebestanden downloaden](https://github.com/matt123p/TinyCADv4/releases/tag/4.0.2)
· [Broncodewijzigingen](https://github.com/matt123p/TinyCADv4/compare/4.0.1...4.0.2)

## v4.0.1 — initiële brontag, 13 maart 2026
{: #v401--initial-source-tag-13-march-2026}

De eerste bronmomentopname bevat al de TinyCAD-herschrijving voor gebruik in de browser en op de desktop, met schemabewerking, symboolbibliotheken, ondersteuning voor bestaande
`.dsn`- en `.tclib`-bestanden en exportworkflows. Eerdere ontwikkeling is niet
vastgelegd in deze repository.

[Eerste bronmomentopname](https://github.com/matt123p/TinyCADv4/tree/4.0.1)

- Terug naar [inhoud van v4](../CONTENTS/)
