---
layout: default
---
# Symbolen importeren uit KiCAD
{: #importing-symbols-from-kicad}

Het importeren van symbolen uit een KiCAD-symboolbibliotheek is een nieuwe functie van TinyCAD v4.

## Achtergrondinformatie over KiCad
{: #kicad-background}

[KiCad](https://www.kicad.org/) is een populaire open-source-suite voor elektronicaontwerp. De symbooleditor slaat schematische symbolen op in symboolbibliotheekbestanden. In huidige KiCad-versies gebruiken deze symboolbibliotheken normaal gesproken de moderne, op S-expressies gebaseerde indeling `.kicad_sym`.

## Wat TinyCAD kan importeren
{: #what-tinycad-can-import}

TinyCAD importeert momenteel symbolen uit:

- `.kicad_sym`-bestanden

Het bestand moet een KiCad-symboolbibliotheekbestand zijn met een `kicad_symbol_lib`-hoofdelement. In de praktijk betekent dit:

- Ondersteund: moderne KiCad-symboolbibliotheken die zijn opgeslagen als `.kicad_sym`
- Niet ondersteund: verouderde KiCad `.lib`-symboolbibliotheken
- Niet ondersteund: KiCad-footprints, PCB-bestanden, projecten, schema's of andere bestanden die geen symbolen bevatten

## Waar de opdracht in de interface staat
{: #where-the-command-is-in-the-ui}

De importopdracht heet **Import KiCad Symbols** (KiCad-symbolen importeren).

Afhankelijk van hoe u TinyCAD gebruikt, vindt u de opdracht op een van deze plaatsen:

- Desktop-app (Electron): **File > Import > KiCad Symbols...** (Bestand > Importeren > KiCad-symbolen...)
- Browser-/bestandssysteemmodus: het werkbalkmenu **File** (Bestand) en vervolgens **Import KiCad Symbols** (KiCad-symbolen importeren)

Selecteer één `.kicad_sym`-bibliotheek en eventuele bijbehorende SPICE-bestanden die nodig zijn. TinyCAD leest de bibliotheek en toont het importvenster voor de huidige tekening of bibliotheekeditor.

## Twee importmodi
{: #two-import-modes}

De import werkt verschillend, afhankelijk van of u een ontwerp bewerkt of een bibliotheek bewerkt.

### Importeren in een ontwerp
{: #import-into-a-design}

Gebruik dit wanneer u een KiCad-symbool in het huidige schema wilt plaatsen zonder het eerst in een TinyCAD-bibliotheek op te slaan.

Wat er gebeurt:

- TinyCAD opent het venster **Import Symbol** (Symbool importeren).
- U kunt één symbool kiezen uit het geselecteerde `.kicad_sym`-bestand.
- Wanneer u op **Insert** (Invoegen) klikt, voegt TinyCAD dat symbool rechtstreeks in de huidige tekening in.
- Het symbool wordt ingevoegd op de huidige muispositie.
- Hierdoor wordt het symbool **niet** toegevoegd aan een van uw externe `.tclib`-bibliotheken.

Dit is de snelste manier wanneer u een symbool alleen voor het huidige ontwerp nodig hebt.

### Importeren in een bibliotheek
{: #import-into-a-library}

Gebruik dit wanneer u geïmporteerde KiCad-symbolen wilt bewaren als herbruikbare TinyCAD-bibliotheeksymbolen.

Wat er gebeurt:

- U moet eerst een TinyCAD-bibliotheek openen om deze te bewerken.
- TinyCAD opent het venster **Import KiCad Symbols** (KiCad-symbolen importeren).
- Alle geïmporteerde symbolen zijn vooraf geselecteerd.
- U kunt symbolen aan- of uitvinken, of **Select all** (Alles selecteren) gebruiken.
- Als u op **Import selected** (Geselecteerde importeren) klikt, voegt TinyCAD die symbolen samen met de huidige TinyCAD-bibliotheek.
- TinyCAD opent automatisch het laatst geïmporteerde symbool in de bibliotheekeditor.
- Sla de bibliotheek daarna op zoals gebruikelijk.

Dit is de juiste manier als u geïmporteerde symbolen in meerdere tekeningen opnieuw wilt gebruiken.

## Stapsgewijs: importeren in een ontwerp
{: #step-by-step-import-into-a-design}

1. Open het schemaontwerp waaraan u wilt werken.
2. Voer **Import KiCad Symbols** (KiCad-symbolen importeren) uit via het menu File (Bestand).
3. Kies een KiCad `.kicad_sym`-bestand.
4. Klik in het venster **Import Symbol** (Symbool importeren) op het gewenste symbool.
5. Controleer de kleine metad regel die bij elk symbool wordt weergegeven:
   - het referentievoorvoegsel, zoals `U?`
   - het aantal onderdelen, voor symbolen met meerdere eenheden
6. Klik op **Insert** (Invoegen).
7. Het symbool wordt op de huidige muispositie in de huidige tekening geplaatst.
8. Pas na het importeren zo nodig de tekst, zichtbaarheid van pinnen of grafische elementen aan.

## Stapsgewijs: importeren in een bibliotheek
{: #step-by-step-import-into-a-library}

1. Open of maak een TinyCAD-bibliotheek om deze te bewerken.
2. Als u de desktop-app gebruikt, is een gebruikelijke werkwijze:
   - open het deelvenster **Libraries** (Bibliotheken)
   - gebruik **Add** (Toevoegen) om een bestaande bibliotheek te laden, of **New** (Nieuw) om er een te maken
   - open die bibliotheek in de bewerkingsmodus
3. Voer **Import KiCad Symbols** (KiCad-symbolen importeren) uit.
4. Kies een KiCad `.kicad_sym`-bestand.
5. Laat in het venster **Import KiCad Symbols** (KiCad-symbolen importeren) alle symbolen geselecteerd, of vink de symbolen die u niet wilt uit.
6. Klik op **Import selected** (Geselecteerde importeren).
7. Controleer de geïmporteerde symbolen in de bibliotheekeditor.
8. Sla de bibliotheek op.

## SPICE-modellen met symbolen importeren
{: #import-spice-models-with-symbols}

TinyCAD leest ondersteunde SPICE-modellen die zijn opgenomen in een moderne KiCad-symboolbibliotheek. Selecteer voor modellen die apart zijn opgeslagen de modelbestanden samen met het `.kicad_sym`-bestand in het bestandskeuzevenster. Voeg ook alle modelbestanden toe waarnaar wordt verwezen door `.include`.

Als een SPICE-definitie niet kon worden geïmporteerd, toont het venster **SPICE model skipped** (SPICE-model overgeslagen), met de reden. U kunt de symboolillustratie en -eigenschappen nog steeds importeren. Open de instellingen **SPICE → Custom** (SPICE → Aangepast) van het geïmporteerde symbool om de instantiesjabloon en eventuele modeltekst in **Prologue** te controleren. TinyCAD gebruikt de KiCad-pintoewijzingen en parameteroverschrijvingen om de definitie samen te stellen.

Ondersteunde invoer omvat symbolen met één eenheid en gewone modelkaarten of subcircuits, ideale weerstanden, condensatoren en spoelen, en DC-spannings- of stroombronnen. Open en sla een verouderde KiCad SPICE-definitie eerst op in een recente KiCad-versie. Als u een ander model nodig hebt, gebruikt u de [meegeleverde modelkiezer](../Bundled-SPICE-Models/).

## Ondersteunde symboolfuncties
{: #supported-symbol-features}

TinyCAD importeert momenteel de volgende KiCad-symboolfuncties:

- Symboolnamen, referentievoorvoegsels en beschrijvingen
- Aanvullende symbooleigenschappen als TinyCAD-attributen
- Verborgen of zichtbare status voor algemene velden zoals Value en Reference
- Pinnen, inclusief pinnamen, pinnummers, pinlengte, elektrisch type en diverse pinvormen
- Symbolen met meerdere eenheden
- Overgeërfde symbolen die gebruikmaken van KiCad-mechanisme `extends`
- De Morgan-varianten, geïmporteerd als een afzonderlijk symbool met ` (De Morgan)` toegevoegd aan de naam
- Basiselementen die in symboollichamen worden gebruikt:
  - rechthoeken
  - cirkels
  - polylijnen
  - bogen
  - Béziercurven
  - tekst
- Eenvoudige lijnstijlen en vulstatussen waarvoor TinyCAD een equivalent heeft

## Wat niet werkt of mogelijk niet precies overeenkomt
{: #what-will-not-work-or-may-not-match-exactly}

De importfunctie is handig, maar vormt geen volledige conversiefunctie van KiCad naar TinyCAD. Dit zijn de belangrijkste beperkingen van de huidige implementatie.

### Beperkingen van de bestandsindeling
{: #file-format-limits}

- Alleen `.kicad_sym`-bestanden worden geaccepteerd.
- Als het bestand leeg of ongeldig is, of geen KiCad-symboolbibliotheek is, mislukt het importeren.

### Beperkingen van afbeeldingen en indeling
{: #graphics-and-layout-limits}

- Alleen de hierboven vermelde grafische basisvormen worden geïmporteerd.
- Alle KiCad-symboolinhoud buiten deze ondersteunde basisvormen wordt genegeerd.
- Geïmporteerde bibliotheeksymbolen worden verplaatst zodat ze met een marge op de TinyCAD-pagina staan en zo veel mogelijk op het raster van TinyCAD uitgelijnd zijn.
- Sommige geometrie kan er iets anders uitzien, omdat KiCad en TinyCAD verschillende interne tekenmodellen gebruiken.
- KiCad-bogen worden benaderd met TinyCAD-curvepunten.

### Beperkingen van tekst en stijl
{: #text-and-styling-limits}

- Het lettertype blijft niet behouden; geïmporteerde tekst gebruikt de lettertype-instellingen van TinyCAD.
- Fijne details van de tekstindeling, zoals uitlijning, blijven niet volledig behouden.
- Tekstrotatie wordt vereenvoudigd tot het eenvoudigere oriëntatiemodel van TinyCAD, in plaats van elke willekeurige hoek te behouden.
- De kleur van de pintekst blijft niet behouden.

### Verschillen in symboolgedrag
{: #symbol-behavior-differences}

- Bij importeren in een ontwerp wordt het symbool alleen in de huidige tekening ingevoegd. Er wordt geen herbruikbaar item in een `.tclib`-bibliotheek gemaakt of bijgewerkt.
- Bij importeren in een bibliotheek worden herbruikbare TinyCAD-bibliotheekitems gemaakt, maar u moet de bibliotheek daarna nog opslaan.
- Als namen van geïmporteerde symbolen overeenkomen met bestaande namen in de bestemmingsbibliotheek, geeft TinyCAD de nieuwe items automatisch een andere naam door een numeriek achtervoegsel toe te voegen.
- Als een KiCad-symbool een De Morgan-variant bevat, importeert TinyCAD deze als een afzonderlijk symboolitem in plaats van als een schakelbare stijl.

## Praktische tips
{: #practical-advice}

- Als u een symbool maar één keer nodig hebt, importeert u het in het ontwerp.
- Als u verwacht het symbool opnieuw te gebruiken, importeert u het in een bibliotheek.
- Begin eerst met een kleine `.kicad_sym`-bibliotheek, zodat u kunt controleren hoe lijntekeningen, tekst en pinplaatsing er in TinyCAD uitzien.
- Controleer onderdelen met meerdere eenheden en De Morgan-varianten zorgvuldig na het importeren.
- Als een symbool er verkeerd uitziet, opent u het in de TinyCAD-bibliotheekeditor en corrigeert u handmatig de tekstplaatsing, lijntekening of attributen.

## Samenvatting
{: #summary}

De KiCad-importfunctie van TinyCAD is gericht op het snel overbrengen van moderne KiCad-symboolbibliotheken naar TinyCAD, met name standaard schematische symbolen die zijn opgebouwd uit pinnen, tekst en eenvoudige grafische basisvormen. De functie werkt het best met `.kicad_sym`-bestanden en is vooral handig wanneer u:

- een symbool rechtstreeks in de huidige tekening wilt plaatsen, of
- geselecteerde KiCad-symbolen wilt overzetten naar een TinyCAD-bibliotheek om ze opnieuw te gebruiken

Houd er rekening mee dat geavanceerdere symbolen na het importeren doorgaans nog even handmatig moeten worden bijgewerkt.

## Gerelateerde pagina's
{: #related-pages}

- [Een symbool bewerken](../Editing-a-Symbol/)
- [Symboolbibliotheken gebruiken](../Using-Symbol-Libraries/)

- Terug naar [Symbolen en bibliotheken](../Symbols-and-Libraries/)
- Terug naar [Inhoud v4](../CONTENTS/)
