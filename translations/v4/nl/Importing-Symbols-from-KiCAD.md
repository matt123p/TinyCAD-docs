---
layout: default
---
# Symbolen importeren uit KiCAD
{: #importing-symbols-from-kicad}

Het importeren van symbolen uit een KiCAD-symboolbibliotheek is een nieuwe functie in TinyCAD v4.

## Achtergrond van KiCad
{: #kicad-background}

[KiCad](https://www.kicad.org/) is een populaire opensource-suite voor elektronicaontwerp. De symbooleditor slaat schema-symbolen op in symboolbibliotheekbestanden. In huidige KiCad-versies gebruiken die symboolbibliotheken normaal gesproken de moderne, op S-expressies gebaseerde `.kicad_sym`-indeling.

## Wat TinyCAD kan importeren
{: #what-tinycad-can-import}

TinyCAD importeert momenteel symbolen uit:

- `.kicad_sym`-bestanden

Het bestand moet een KiCad-symboolbibliotheekbestand zijn met een `kicad_symbol_lib`-root. In de praktijk betekent dat:

- Ondersteund: moderne KiCad-symboolbibliotheken die zijn opgeslagen als `.kicad_sym`
- Niet ondersteund: verouderde KiCad `.lib`-symboolbibliotheken
- Niet ondersteund: KiCad-footprints, PCB-bestanden, projecten, schema's of andere bestanden die geen symbolen bevatten

## Waar de opdracht in de gebruikersinterface staat
{: #where-the-command-is-in-the-ui}

De importopdracht heet **Import KiCad Symbols**.

Afhankelijk van hoe u TinyCAD gebruikt, vindt u deze op een van de volgende plaatsen:

- Desktop-app (Electron): **File > Import > KiCad Symbols...**
- Browser-/bestandssysteemmodus: het werkbalkmenu **File**, vervolgens **Import KiCad Symbols**

Nadat u een `.kicad_sym`-bestand hebt gekozen, leest TinyCAD alle symbolen in die bibliotheek in en toont het vervolgens een van twee importdialoogvensters, afhankelijk van wat u op dat moment bewerkt.

## Twee importmodi
{: #two-import-modes}

De import werkt verschillend, afhankelijk van of u een ontwerp of een bibliotheek bewerkt.

### Importeren in een ontwerp
{: #import-into-a-design}

Gebruik dit als u een KiCad-symbool in het huidige schema wilt plaatsen zonder het eerst op te slaan in een TinyCAD-bibliotheek.

Dit gebeurt er:

- TinyCAD opent een dialoogvenster **Import Symbol**.
- U kunt één symbool kiezen uit het geselecteerde `.kicad_sym`-bestand.
- Wanneer u op **Insert** klikt, voegt TinyCAD dat symbool rechtstreeks in de huidige tekening in.
- Het symbool wordt ingevoegd op de huidige muispositie.
- Hiermee wordt het symbool **niet** toegevoegd aan een van uw externe `.tclib`-bibliotheken.

Dit is de snelste manier als u een symbool alleen voor het huidige ontwerp nodig hebt.

### Importeren in een bibliotheek
{: #import-into-a-library}

Gebruik dit als u geïmporteerde KiCad-symbolen wilt bewaren als herbruikbare TinyCAD-bibliotheeksymbolen.

Dit gebeurt er:

- U moet eerst een TinyCAD-bibliotheek openen om deze te bewerken.
- TinyCAD opent een dialoogvenster **Import KiCad Symbols**.
- Alle geïmporteerde symbolen zijn vooraf geselecteerd.
- U kunt symbolen aan- of uitvinken, of **Select all** gebruiken.
- Als u op **Import selected** klikt, worden die symbolen samengevoegd met de huidige TinyCAD-bibliotheek.
- TinyCAD opent automatisch het laatst geïmporteerde symbool in de bibliotheekeditor.
- Vervolgens slaat u de bibliotheek op de gebruikelijke manier op.

Dit is de juiste manier als u geïmporteerde symbolen in meerdere tekeningen wilt hergebruiken.

## Stapsgewijs: importeren in een ontwerp
{: #step-by-step-import-into-a-design}

1. Open het schemaontwerp waaraan u wilt werken.
2. Voer **Import KiCad Symbols** uit via het menu File.
3. Kies een KiCad `.kicad_sym`-bestand.
4. Klik in het dialoogvenster **Import Symbol** op het gewenste symbool.
5. Controleer de kleine metad regel die voor elk symbool wordt weergegeven:
   - het referentievoorvoegsel, zoals `U?`
   - het aantal onderdelen, voor symbolen met meerdere eenheden
6. Klik op **Insert**.
7. Het symbool wordt op de huidige muispositie in de huidige tekening geplaatst.
8. Pas indien nodig na het importeren de tekst, pinzichtbaarheid of grafische elementen aan.

## Stapsgewijs: importeren in een bibliotheek
{: #step-by-step-import-into-a-library}

1. Open of maak een TinyCAD-bibliotheek om deze te bewerken.
2. Als u de desktop-app gebruikt, is een gebruikelijke werkwijze:
   - open het paneel **Libraries**
   - gebruik **Add** om een bestaande bibliotheek te laden, of **New** om er een te maken
   - open die bibliotheek in de bewerkingsmodus
3. Voer **Import KiCad Symbols** uit.
4. Kies een KiCad `.kicad_sym`-bestand.
5. Laat in het dialoogvenster **Import KiCad Symbols** alle symbolen geselecteerd, of vink de symbolen uit die u niet wilt.
6. Klik op **Import selected**.
7. Controleer de geïmporteerde symbolen in de bibliotheekeditor.
8. Sla de bibliotheek op.

## Ondersteunde symboolfuncties
{: #supported-symbol-features}

TinyCAD importeert momenteel de volgende KiCad-symboolfuncties:

- Symboolnamen, referentievoorvoegsels en beschrijvingen
- Aanvullende symbooleigenschappen als TinyCAD-attributen
- Verborgen of zichtbare status voor algemene velden zoals Value en Reference
- Pinnen, inclusief pinnamen, pinnummers, pinlengte, elektrisch type en verschillende pinvormen
- Symbolen met meerdere eenheden
- Overgeërfde symbolen die gebruikmaken van het `extends`-mechanisme van KiCad
- De Morgan-stijlvarianten, geïmporteerd als afzonderlijk symbool met ` (De Morgan)` toegevoegd aan de naam
- Eenvoudige grafische elementen in symboollichamen:
  - rechthoeken
  - cirkels
  - polylijnen
  - bogen
  - Bézier-curven
  - tekst
- Eenvoudige lijnstijlen en vulstatussen waarvoor TinyCAD een equivalent heeft

## Wat niet werkt of mogelijk niet exact overeenkomt
{: #what-will-not-work-or-may-not-match-exactly}

De importfunctie is handig, maar is geen volledige conversie-engine voor KiCad naar TinyCAD. Dit zijn de belangrijkste beperkingen van de huidige implementatie.

### Beperkingen van bestandsindelingen
{: #file-format-limits}

- Alleen `.kicad_sym`-bestanden worden geaccepteerd.
- Als het bestand leeg of ongeldig is, of geen KiCad-symboolbibliotheek bevat, mislukt het importeren.

### Beperkingen van grafische elementen en indeling
{: #graphics-and-layout-limits}

- Alleen de hierboven genoemde grafische basisvormen worden geïmporteerd.
- KiCad-symboolinhoud buiten de ondersteunde basisvormen wordt genegeerd.
- Geïmporteerde bibliotheeksymbolen worden verplaatst zodat ze met een marge op de TinyCAD-pagina staan en zo goed mogelijk op het TinyCAD-raster zijn uitgelijnd.
- Sommige geometrie kan er iets anders uitzien, omdat KiCad en TinyCAD verschillende interne tekenmodellen gebruiken.
- KiCad-bogen worden benaderd met curvepunten van TinyCAD.

### Beperkingen van tekst en stijl
{: #text-and-styling-limits}

- Het lettertype blijft niet behouden; geïmporteerde tekst gebruikt de lettertype-instellingen van TinyCAD.
- Fijne details van de tekstindeling, zoals de uitlijning, blijven niet volledig behouden.
- Tekstrotatie wordt teruggebracht tot het eenvoudigere oriëntatiemodel van TinyCAD, in plaats van elke willekeurige hoek te behouden.
- De kleur van pintekst blijft niet behouden.

### Verschillen in symboolgedrag
{: #symbol-behavior-differences}

- Als u in een ontwerp importeert, wordt het symbool alleen in de huidige tekening ingevoegd. Er wordt geen herbruikbare `.tclib`-bibliotheekvermelding gemaakt of bijgewerkt.
- Als u in een bibliotheek importeert, worden herbruikbare TinyCAD-bibliotheekvermeldingen gemaakt, maar u moet de bibliotheek daarna nog opslaan.
- Als geïmporteerde symboolnamen botsen met bestaande namen in de doelbibliotheek, hernoemt TinyCAD de nieuwe vermeldingen automatisch door een numeriek achtervoegsel toe te voegen.
- Als een KiCad-symbool een De Morgan-variant bevat, importeert TinyCAD deze als afzonderlijke symboolvermelding in plaats van als directe stijlomschakeling.

## Praktische tips
{: #practical-advice}

- Als u een symbool maar één keer nodig hebt, importeert u het in het ontwerp.
- Als u verwacht het symbool opnieuw te gebruiken, importeert u het in een bibliotheek.
- Begin eerst met een kleine `.kicad_sym`-bibliotheek, zodat u kunt controleren hoe lijntekeningen, tekst en pinplaatsing er in TinyCAD uitzien.
- Controleer na het importeren zorgvuldig onderdelen met meerdere eenheden en De Morgan-varianten.
- Als een symbool er niet goed uitziet, opent u het in de TinyCAD-bibliotheekeditor en werkt u de tekstplaatsing, lijntekeningen of attributen handmatig bij.

## Samenvatting
{: #summary}

De KiCad-importfunctie van TinyCAD is gericht op het snel binnenhalen van moderne KiCad-symboolbibliotheken in TinyCAD, met name van standaardschema-symbolen die zijn opgebouwd uit pinnen, tekst en eenvoudige grafische basisvormen. De functie werkt het best met `.kicad_sym`-bestanden en is vooral praktisch als u:

- een symbool rechtstreeks in de huidige tekening wilt plaatsen, of
- geselecteerde KiCad-symbolen wilt overzetten naar een TinyCAD-bibliotheek om ze opnieuw te gebruiken

Verwacht bij geavanceerdere toepassingen na het importeren nog een korte handmatige opschoonronde.

## Verwante pagina's
{: #related-pages}

- [Een symbool bewerken](../Editing-a-Symbol/)
- [Symboolbibliotheken gebruiken](../Using-Symbol-Libraries/)

- Terug naar [Symbolen en bibliotheken](../Symbols-and-Libraries/)
- Terug naar [Inhoud van v4](../CONTENTS/)
