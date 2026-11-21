---
layout: default
---
# Wijzigingslogboek van TinyCAD
{: #tinycad-changelog}


## Nog niet uitgebracht
{: #unreleased}

### Toegevoegd
{: #unreleased-added}

- [Gebundelde SPICE-modellen](../SPICE-output/) met offline zoeken, modelbeschrijvingen, bronlinks en pinaansluitingen. Alle 29 symbolen voor SPICE-essentiële componenten hebben gekoppelde standaardmodellen, waaronder basispassieve componenten en OpenJellyBean LM358- en LM324-behuizingen.
- De Desktop-[AI-assistent](../AI-Assistant/) kan modellen inspecteren en op verzoek voor SPICE-ondersteuning een gekoppelde of aangepaste definitie instellen.
- [KiCad-symboolimport](../Importing-Symbols-from-KiCAD/) kan ondersteunde ingesloten of bijbehorende SPICE-modellen naar TinyCAD overbrengen als bewerkbare aangepaste definities.

### Gewijzigd
{: #unreleased-changed}

- De standaardonderdelen in de SPICE- en XSPICE-tutorials gebruiken gekoppelde modellen en behouden hun oorspronkelijke simulatieresultaten.
- Bij plaatsingen uit de standaardbibliotheek wordt het bewerkbare veld Name weergegeven. Bij de meegeleverde apparatuur- en netwerkontwerpen zijn notities in Markdown-indeling opgenomen.

## v4.1.1 — 20 november 2026
{: #v411}

- De opstartproblemen van Linux Snap zijn verholpen door de Electron-runtimebibliotheken mee te leveren en XWayland te gebruiken op Wayland-desktops.

[Downloadbare uitgavebestanden](https://github.com/matt123p/TinyCADv4/releases/tag/v4.1.1)

## v4.1.0 — 18 november 2026
{: #v410}

### Toegevoegd
{: #added}

- [AI-ondersteunde bewerking van symbolen, bibliotheken en schakelingen](../AI-Assistant/), inclusief bijgevoegde datasheets/afbeeldingen, zoeken naar gebundelde en online symbolen, directe bewerkingen van het actieve document, ongedaan te maken wijzigingen, instellingen voor providers/modellen en lokale Ollama-verbindingen.

- [Geïntegreerde simulatie](../Simulation/) met lokale ngspice in de browser en Desktop, met analyses van het werkpunt, transiëntgedrag, AC, DC-sweep, ruis, overdrachtsfunctie en pool-nulpunten. [Gebeurtenisgestuurde XSPICE](../XSPICE/) wordt ondersteund in Desktop.
- [Bronnen, probes en virtuele instrumenten](../Simulation-Sources-and-Instruments/), waaronder oscilloscopen, multimeters, functiegeneratoren en laboratoriumvoedingen.
- [Circuit Explorer](../Simulation-Charts-and-Measurements/) voor afstemming, sweeps, benoemde metingen, eisen, DC-overlays, tolerantieberekeningen, testgevallen en onderzoek naar vermogen/belasting.
- [Gecomprimeerde `.dzn`-tekeningen](../Simulation/#dzn-simulation-drawings) waarin de schakeling, modellen, simulatie-instellingen en optionele resultaten bij elkaar blijven. Uitvoergeschiedenis en export van resultaten ondersteunen vergelijken en delen; met Opslaan zonder resultaten maakt u een kleinere kopie.
- [Gebundelde bibliotheken](../Bundled-Libraries/) voor netwerktopologieën, embedded boards en smarthomemodules, audio, laboratoriumapparatuur, motoren/beweging en planning van zonne-energie/accu's, naast gemodelleerde SPICE-, logica-, functionele en sensorcollecties. Kies deze op het tabblad Standaard van de bibliotheekkiezer.
- [Zeven bewerkbare tekeningvoorbeelden](../Bundled-Examples/), met de oorspronkelijke transistorversterker, een kantoornetwerk, een ESP32-klimaat-/displaystation, een woning met zonne-energie/accu, een podcaststudio, een laboratoriumwerkbank en een motorbesturingswerkbank, met ingebedde symbolen en toelichtingen.
- [SPICE- en XSPICE-zelfstudies](../Simulation-Tutorials/): elf analoge en zes digitale hoofdstukken, met 28 afzonderlijke uitvoerbare tekeningen, modeldefinities, analyse-instellingen en bewaarde referentiemetingen.
- [Tekening opruimen](../Layout-Tidy-Up/) voor volledige bladen of geselecteerde items, met een sterkte van Laag/Gemiddeld/Hoog, annuleren, verbindingscontroles en één stap Ongedaan maken.

### Gewijzigd
{: #changed}

- Voorbeeld openen en Toelichting openen staan in de titelbalk van de browser. Desktop biedt Bestand → Voorbeeld openen en Beeld → Toelichting weergeven.
- Het menu Beeld van Desktop bevat Grafieken weergeven; het menu Simulatie op de werkbalk behoudt de schakelaar voor grafieken.
- Automatische indeling staat op de werkbalk naast Simulatie en is ook beschikbaar in het menu Extra van Desktop.

### Opgelost
{: #fixed}

- Herstel versleepbare voorbeelden van componentillustraties in de resultaten van Standaard, Mijn bibliotheken en de online kiezer.
- Verklein illustraties van embedded controllers, sensoren en displays tot praktische afmetingen voor de pagina-indeling, met behoud van pinaanduidingen en bedradingsposities.
- Voorkom dat wijzigingen in de indeling ongewenste verbindingen maken bij draadeinden, bochten of aansluitingen; verbeter pinuitgangen en verwijder onnodige omwegen.
- Verwijder kleine aansluitingslabelkaders die tekst in laboratorium- en bewegingsbesturingssymbolen overlappen, en werk de betreffende voorbeelden bij.
- Verbeter foutmeldingen en diagnostiek van simulaties, versterkerruns in de browser, grafiekvensters en onafhankelijke deelvensters met voorbeeldtoelichtingen.

- De achtergrondkleur van de pagina wordt toegepast wanneer de linialen verborgen zijn; ook is een crash bij het selecteren van een verborgen pin verholpen.

### Handleiding
{: #manual}

- Voeg een [handleiding voor afbeeldingen](../Images/) toe over kopiëren en plakken, bestanden importeren en indelingen converteren, vaste beeldverhouding, pixels bijsnijden en afbeeldingen samen met de tekening opslaan.

- Voeg een volledige [handleiding voor de AI-assistent](../AI-Assistant/) toe over het maken van symbolen/bibliotheken en schakelingen, providerinstellingen met schermafbeeldingen, lokale Ollama, documentbijlagen, voorbeeldprompts en het beoordelen van gegenereerde resultaten.

- Voeg handleidingen toe voor het vinden en gebruiken van gebundelde bibliotheken en voorbeelden, en vervang de SPICE-beschrijving die alleen export behandelt door de geïntegreerde simulatieprocedure.
- Voeg naslaginformatie toe over analyses, modellen, instrumenten, grafieken, metingen en probleemoplossing, met koppelingen naar de officiële documentatie van ngspice en XSPICE.
- Neem de bestaande volledige cursussen, downloadbare tekeningen/netlists en tien videohandleidingen op over bibliotheken, voorbeelden, indeling opruimen, verbindingen tussen meerdere bladen en SPICE.
- Verduidelijk [verschillen tussen functies](../Feature-Differences/), waaronder `.dzn` en compatibiliteit met Markdown-tekstvakken en XSPICE-ondersteuning in de browser.
- Werk de handleiding bij in alle acht ondersteunde talen, inclusief navigatie, nieuwe naslagpagina's, tekst van zelfstudies en videobijschriften.

[Downloadbare uitgavebestanden](https://github.com/matt123p/TinyCADv4/releases/tag/v4.1.0)

## v4.0.11
{: #v4011}
{: #v4011}

Deze versie voegt opgemaakte Markdown-notities, vector-SVG-uitvoer en instellingen voor draadroutering toe.

- [Markdown-tekstvakken](../Text/#markdown-text-boxes): opgemaakte notities met lijsten, takenlijsten en codeblokken; dezelfde vectorrenderer voor de tekening, SVG-export en PDF.
- Live bronopmaak houdt bewerkbare markeringen zichtbaar en volgt het gekozen basislettertype, met overeenkomstige cursorplaatsing, selectie en tekstterugloop.
- [Draadrouteringsmodi](../Wires/#wire-routing-modes): een compacte keuzeschakelaar voor routering onder 90°, 45° en Vrij, waarbij een actieve voorvertoning behouden blijft.
- De vergrootglasknop verschijnt alleen na aanraakinvoer op het tekengebied.

## v4.0.10 — 6 november 2026
{: #v4010--6-november-2026}
{: #v4010}

- Houd de editorwerkbalk zichtbaar wanneer bibliotheek- of schemapanelen meer verticale ruimte nodig hebben.

## v4.0.9 — 4 november 2026
{: #v409--4-november-2026}

### Toegevoegd
{: #added-1}

- [Aanraakbediening](../Touch-controls/), met directe bewerking, pannen met twee vingers
  en zoomen met knijpen, en een vergrootglas met de bedieningselementen Klikken, Slepen/neerzetten, Menu en Sluiten
  voor nauwkeurige plaatsing.
- [Formaat van bibliotheekpaneel wijzigen en symbolen sorteren](../Using-Symbol-Libraries/),
  inclusief alfabetische sortering van zoekresultaten.
- [Geselecteerde objecten tijdelijk verbergen](../User-guide/#temporarily-hiding-objects)
  en een opdracht om alle verborgen objecten op het huidige blad te herstellen.
- Poolse interfacevertaling en vertaalde tekst in het dialoogvenster Symbool vervangen.

### Opgelost
{: #fixed-1}

- [Rasterzichtbaarheid en magnetisch uitlijnen](../Snap-to-Grid/) werken onafhankelijk van elkaar, en
  verplaatsen met het toetsenbord houdt rekening met uitgeschakeld magnetisch uitlijnen.
- Bitmapafbeeldingen worden weergegeven in geplaatste bibliotheeksymbolen.
- [Escape annuleert teken- en plaatsingsacties](../Shortcuts/), ook wanneer
  de focus op werkbalkbedieningselementen staat.
- Als u de prompt voor niet-opgeslagen wijzigingen in Desktop annuleert, wordt het geplande afsluiten geannuleerd.
- Zoomen met knijpen op het tekengebied stapelt niet langer op de zoom van de browserpagina.
- Verbeterde positionering van het aanraakvergrootglas, aanwijzerfeedback, gebarenafhandeling en slepen.
- Verbeterd gedrag van het dialoogvenster Info in Desktop en macOS.

### Pakketbouw en onderhoud
{: #packaging-and-maintenance}

- Afhankelijkheden bijgewerkt om beveiligingslekken aan te pakken.
- Linux ARMv7-pakketten verwijderd omdat de Electron-runtime Linux x64 en ARM64 ondersteunt. Snap-pakketten zijn bedoeld voor x64; Debian-pakketten voor x64 en ARM64.

[Downloadbare uitgavebestanden](https://github.com/matt123p/TinyCADv4/releases/tag/v4.0.9)
· [Broncodewijzigingen](https://github.com/matt123p/TinyCADv4/compare/v4.0.8...v4.0.9)

## v4.0.8 — 3 mei 2026
{: #v408--3-may-2026}

- Rotatie van voedingssymbolen bij het opslaan en opnieuw openen van een tekening opgelost.
- Draadnettypen behouden bij opslaan en laden, zodat draadkleuren consistent blijven.

[Downloadbare uitgavebestanden](https://github.com/matt123p/TinyCADv4/releases/tag/v4.0.8)
· [Broncodewijzigingen](https://github.com/matt123p/TinyCADv4/compare/v4.0.7...v4.0.8)

## v4.0.7 — 13 april 2026
{: #v407--13-april-2026}

- Afdrukken in de desktopapplicatie opgelost.
- Gedrag van zoomen met knijpen verbeterd om ongecontroleerd zoomen te voorkomen.
- Server-side rendering van bibliotheeksymbolen toegevoegd.
- Automatische tagging van productiebuilds en aanmaak van GitHub-releases.

[Downloadbare uitgavebestanden](https://github.com/matt123p/TinyCADv4/releases/tag/v4.0.7)
· [Broncodewijzigingen](https://github.com/matt123p/TinyCADv4/compare/4.0.6...v4.0.7)

## v4.0.6 — 29 maart 2026
{: #v406--29-march-2026}

Deze versie bevat de ontwikkelwijzigingen die zijn aangebracht onder versie 4.0.5; er is geen afzonderlijke 4.0.5-tag of gepubliceerde GitHub-release.

### Toegevoegd
{: #added-2}

- Automatische draadroutering.
- Symbool vervangen om een bestaande component te wijzigen in een ander bibliotheeksymbool.
- Automatisch scrollen tijdens het slepen nabij de rand van de tekening.
- Dubbelklikken selecteert een volledige draad en driemaal klikken selecteert voorbij knooppunten en T-aansluitingen.
- Een optie om de verbindingsindicator van labels uit te schakelen.

### Opgelost en verbeterd
{: #fixed-and-improved}

- Bibliotheekmappen zijn standaard geopend en worden uitgevouwen bij het zoeken.
- Tekstbewerking, sneltoetsen voor het klembord, navigatietoetsen en sneltoetsen verbeterd wanneer de tekening focus heeft.
- Selectie met Ctrl-klik, slepen van meerdere geselecteerde objecten en draaiknoppen opgelost.
- Teken- en selectierechthoeken kunnen in beide richtingen worden gesleept.
- Afsluiten op macOS opgelost en dubbel laden van bibliotheken op macOS verminderd.
- Labelpositionering, vertaling van de kleurenkiezer en achtergrondverwerking van netlists opgelost.
- Namen van Windows-installatieprogramma's en AppX-builds gecorrigeerd.

[Downloadbare uitgavebestanden](https://github.com/matt123p/TinyCADv4/releases/tag/4.0.6)
· [Broncodewijzigingen](https://github.com/matt123p/TinyCADv4/compare/4.0.4...4.0.6)

## v4.0.4 — brontag, 19 maart 2026
{: #v404--source-tag-19-march-2026}

- [Bibliotheekmappen](../Library-Folders/) toegevoegd om symboolbibliotheken te organiseren.
- Nederlandse interfacetaal toegevoegd.
- Browserbuildartefacten en implementatie op GitHub Pages toegevoegd.
- Snap-pakketbouw opgelost.

[Broncodewijzigingen](https://github.com/matt123p/TinyCADv4/compare/4.0.3...4.0.4)

## v4.0.3 — brontag, 15 maart 2026
{: #v403--source-tag-15-march-2026}

- Afhandeling van het opstarten van macOS aangepast om een opstartprobleem aan te pakken.

De brontag is 4.0.3, hoewel de metagegevens van het pakket nog steeds 4.0.2 vermelden.

[Broncodewijzigingen](https://github.com/matt123p/TinyCADv4/compare/4.0.2...4.0.3)

## v4.0.2 — 14 maart 2026
{: #v402--14-march-2026}

- Het dialoogvenster voor niet-opgeslagen wijzigingen bij afsluiten op Linux opgelost.
- x64 Debian-pakketten toegevoegd naast de bestaande ARM-builds.
- Buildgereedschappen en pakketconfiguratie bijgewerkt.

[Downloadbare uitgavebestanden](https://github.com/matt123p/TinyCADv4/releases/tag/4.0.2)
· [Broncodewijzigingen](https://github.com/matt123p/TinyCADv4/compare/4.0.1...4.0.2)

## v4.0.1 — eerste brontag, 13 maart 2026
{: #v401--initial-source-tag-13-march-2026}

De eerste momentopname van de broncode bevat al de TinyCAD-herschrijving voor browser- en desktopgebruik, met schemabewerking, symboolbibliotheken, ondersteuning voor bestaande
`.dsn`- en `.tclib`-bestanden en exportprocedures. Eerdere ontwikkeling is niet
vastgelegd in deze repository.

[Eerste momentopname van de broncode](https://github.com/matt123p/TinyCADv4/tree/4.0.1)

- Terug naar [inhoud van v4](../CONTENTS/)
