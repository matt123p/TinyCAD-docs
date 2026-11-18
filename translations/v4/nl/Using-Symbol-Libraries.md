---
layout: default
---
# Symboolbibliotheken gebruiken
{: #using-symbol-libraries}

## Wat is een symboolbibliotheek?
{: #what-is-a-symbol-library}

Bij het ontwerpen van schakelingen is een **symboolbibliotheek** een verzameling schema-symbolen die in één bestand zijn opgeslagen. Elk symbool stelt een elektronisch component voor, zoals een weerstand, condensator, IC, connector, transistor of een ander onderdeel, als een gestandaardiseerde afbeelding met gedefinieerde elektrische aansluitpunten.

TinyCAD-symboolbibliotheken gebruiken de bestandsindeling `.tclib`. Eén bibliotheekbestand kan tientallen of honderden verwante symbolen bevatten, doorgaans gegroepeerd op categorie of doel. U kunt bijvoorbeeld een bibliotheek hebben voor passieve componenten, een andere voor logica-IC's en nog een andere voor connectoren.

## Waarvoor worden symboolbibliotheken gebruikt?
{: #what-are-symbol-libraries-used-for}

Symboolbibliotheken dienen verschillende belangrijke doelen bij het vastleggen van schema's:

- **Hergebruik in ontwerpen.** Zodra een symbool in een bibliotheek is gedefinieerd, kan het in elk schema worden geplaatst zonder het opnieuw te maken. Dit bespaart tijd en zorgt voor consistentie tussen projecten.
- **Gestandaardiseerde weergave.** Bibliotheken hanteren een gemeenschappelijke visuele stijl en pinconfiguratie voor elk component. Elke 555-timer of op-amp ziet er hetzelfde uit en heeft dezelfde pindefinities, waardoor verkeerde interpretaties worden beperkt.
- **Elektrische correctheid.** Elk symbool bevat pininformatie — pinnamen, pinnummers en elektrische typen (ingang, uitgang, voeding, passief, enz.). Deze gegevens vormen de basis voor vervolgprocessen zoals het genereren van netlijsten, ontwerpregelcontroles en export naar PCB-ontwerptools.
- **Organisatie.** Door symbolen op functie, fabrikant of project in bibliotheken te groeperen, kunt u gemakkelijk het juiste onderdeel vinden. Met TinyCAD kunt u alleen de bibliotheken laden die u voor een bepaald ontwerp nodig hebt.
- **Delen en samenwerken.** Bibliotheekbestanden kunnen worden gedeeld met teamleden of worden gedownload uit de gemeenschap, zodat iedereen met dezelfde geverifieerde symbooldefinities werkt.

## Ingebouwde en aangepaste bibliotheken
{: #built-in-and-custom-libraries}

TinyCAD wordt geleverd met [gebundelde bibliotheken](../Bundled-Libraries/) voor apparatuurindelingen en gemodelleerde elektronische schakelingen. Selecteer **Standard** in de kiezer aan de linkerkant en kies vervolgens een verzameling bij **Choose a standard library**. U hoeft geen afzonderlijke bibliotheek te importeren. Voor onderdelen die niet zijn opgenomen, kunt u:

- Uw eigen [aangepaste symboolbibliotheken](../Custom-symbol-libraries/) maken
- [Symbolen importeren uit KiCAD](../Importing-Symbols-from-KiCAD/)-bibliotheken
- Aanvullende bibliotheken downloaden van de TinyCAD.net-website

## Gebruikelijke werkwijze
{: #typical-workflow}

In de praktijk verloopt het werken met symboolbibliotheken meestal als volgt:

1. Laad of voeg de bibliotheken toe die beschikbaar moeten zijn in de huidige TinyCAD-sessie.
2. Blader door symbolen uit die bibliotheken, zoek erin en bekijk voorbeelden.
3. Plaats symbolen in de tekening.
4. Als een symbooldefinitie moet worden gewijzigd, bewerk dan de bibliotheek in plaats van de geplaatste instantie.

Deze pagina behandelt stappen 1 tot en met 3. Zie [Aangepaste symboolbibliotheken](../Custom-symbol-libraries/) voor het beheer van bibliotheekbestanden. Zie [Een symbool bewerken](../Editing-a-Symbol/) om de symbooldefinitie zelf te wijzigen.

## Bibliotheken laden
{: #loading-libraries}

Voordat u een symbool kunt plaatsen, moet de bijbehorende bibliotheek beschikbaar zijn in TinyCAD.

- Ingebouwde bibliotheken zijn beschikbaar als onderdeel van TinyCAD.
- Aangepaste bibliotheken moeten worden toegevoegd of geopend voordat u erin kunt bladeren.
- De exacte stappen verschillen tussen TinyCAD Web en de desktoptoepassing.

Raadpleeg [Aangepaste symboolbibliotheken](../Custom-symbol-libraries/) voor de productspecifieke stappen om bibliotheekbestanden toe te voegen, te openen, te vernieuwen, te maken en te bewerken.

## Bladeren, zoeken en voorbeelden bekijken
{: #browsing-searching-and-previewing}

Om symbolen uit een bibliotheek te gebruiken, moet de bibliotheek eerst in uw TinyCAD-sessie zijn geladen. Zodra deze is geladen:

1. Open de symboolkiezer aan de linkerkant en kies **Standard**, **Online** of **My Libraries**.
2. Kies in Standard een gebundelde bibliotheek; open of vouw in My Libraries uw eigen bibliotheken uit. Gebruik **Search libraries...** om een symbool op naam of beschrijving te zoeken.
3. Bekijk de afbeelding in de resultatenlijst en selecteer vervolgens een symbool om een grotere voorbeeldweergave en beschrijving ervan te zien.
4. Sleep het voorbeeld naar de tekening en plaats het op het raster. Druk op Escape of klik met de rechtermuisknop om het plaatsen van kopieën te beëindigen.

Zie [Symbolen](../Symbols/) voor meer informatie over het plaatsen en configureren van geselecteerde symbolen.

## Het bibliotheekpaneel vergroten of verkleinen
{: #resizing-the-library-panel}

Sleep de rechterrand van het bibliotheekpaneel om het breder of smaller te maken. Een breder
paneel is handig voor lange symboolnamen en beschrijvingen. TinyCAD onthoudt de breedte
op dit apparaat wanneer lokale opslag beschikbaar is.

## Symbolen sorteren
{: #sorting-symbols}

Gebruik in **My Libraries** de sorteerknop naast de bibliotheekbedieningselementen om te wisselen
tussen **bibliotheekvolgorde**, **A tot Z** en **Z tot A**. De knopinfo vermeldt de huidige modus.
Sorteren is van toepassing op symbolen binnen bibliotheken en op zoekresultaten, waaronder
online resultaten; bibliotheekbestanden of mappen worden er niet door verplaatst. TinyCAD
onthoudt de sorteermodus op dit apparaat wanneer lokale opslag beschikbaar is.

De browser en de desktopkiezer hebben de tabbladen **Standard**, **Online** en **My Libraries**. De bron en de keuze van de standaardbibliotheek worden op dit apparaat onthouden.

## Symbolen in een tekening plaatsen
{: #placing-symbols-in-a-drawing}

Zodra u een symbool in de bibliotheekbrowser selecteert, wordt het het actieve plaatsingsgereedschap.

Zie [Symbolen](../Symbols/) voor de daadwerkelijke plaatsingsprocedure, inclusief hoe symbolen zich gedragen nadat ze zijn geselecteerd.

Houd er rekening mee dat het plaatsen van een symbool in een tekening de bibliotheekdefinitie **niet** bewerkt. Als u de afbeeldingen, pinnen of kenmerken voor toekomstig gebruik wilt wijzigen, bewerk het symbool dan in de bibliotheek. Zie [Een symbool bewerken](../Editing-a-Symbol/).

## Verwante taken
{: #related-tasks}

- Gebruik [Aangepaste symboolbibliotheken](../Custom-symbol-libraries/) om `.tclib`-bestanden toe te voegen, te openen, te maken en te beheren.
- Gebruik [Een symbool bewerken](../Editing-a-Symbol/) om de afbeeldingen, pinnen en kenmerken van een symbool te wijzigen.
- Gebruik [Symbolen](../Symbols/) voor meer informatie over het plaatsen nadat een symbool is gekozen.

## Pagina's
{: #pages}

{% assign current_version = page.url | split: '/' | slice: 1, 1 | first -%}
{% assign section = nil -%}
{% for entry in site.data.navigation[current_version] -%}
    {% if entry.url == page.url -%}
        {% assign section = entry -%}
        {% break -%}
    {% endif -%}
{% endfor -%}
{% if section and section.children %}
{% for child in section.children -%}
- [{{ child.title }}]({{ child.url | relative_url }})
{% endfor %}
{% endif %}

- Terug naar [inhoud van v4](../)
