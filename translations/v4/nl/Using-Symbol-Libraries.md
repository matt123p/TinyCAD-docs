---
layout: default
---
# Symboolbibliotheken gebruiken
{: #using-symbol-libraries}

## Wat is een symboolbibliotheek?
{: #what-is-a-symbol-library}

Bij het ontwerpen van schakelingen is een **symboolbibliotheek** een verzameling schema-symbolen die in één bestand zijn opgeslagen. Elk symbool stelt een elektronisch component voor, zoals een weerstand, condensator, IC, connector, transistor of een ander onderdeel, als een gestandaardiseerde grafische weergave met gedefinieerde elektrische aansluitpunten.

TinyCAD-symboolbibliotheken gebruiken de bestandsindeling `.tclib`. Eén bibliotheekbestand kan tientallen of honderden verwante symbolen bevatten, meestal gegroepeerd op categorie of functie. U kunt bijvoorbeeld één bibliotheek hebben voor passieve componenten, een andere voor logische IC's en nog een voor connectoren.

## Waarvoor worden symboolbibliotheken gebruikt?
{: #what-are-symbol-libraries-used-for}

Symboolbibliotheken dienen verschillende belangrijke doelen bij het vastleggen van schema's:

- **Hergebruik in verschillende ontwerpen.** Zodra een symbool in een bibliotheek is gedefinieerd, kan het in elk schema worden geplaatst zonder het opnieuw te maken. Dit bespaart tijd en zorgt voor consistentie tussen projecten.
- **Gestandaardiseerde weergave.** Bibliotheken zorgen voor een gemeenschappelijke visuele stijl en pinconfiguratie voor elk component. Elke instantie van een 555-timer of een opamp ziet er hetzelfde uit en heeft dezelfde pindefinities, waardoor verkeerde interpretaties worden voorkomen.
- **Elektrische correctheid.** Elk symbool bevat pininformatie: pinnamen, pinnummers en elektrische typen (ingang, uitgang, voeding, passief enzovoort). Deze gegevens vormen de basis voor vervolgprocessen zoals het genereren van netlijsten, ontwerpregelcontroles en export naar PCB-ontwerptools.
- **Organisatie.** Door symbolen op functie, fabrikant of project in bibliotheken te groeperen, kunt u eenvoudig het juiste onderdeel vinden. Met TinyCAD kunt u alleen de bibliotheken laden die u voor een bepaald ontwerp nodig hebt.
- **Delen en samenwerken.** Bibliotheekbestanden kunnen worden gedeeld met teamleden of gedownload van de community, zodat iedereen met dezelfde geverifieerde symbooldefinities werkt.

## Ingebouwde en aangepaste bibliotheken
{: #built-in-and-custom-libraries}

TinyCAD wordt geleverd met een set ingebouwde bibliotheken voor veelgebruikte componentfamilies. Voor onderdelen die niet zijn opgenomen, kunt u:

- Uw eigen [aangepaste symboolbibliotheken](../Custom-symbol-libraries/) maken
- [Symbolen uit KiCAD](../Importing-Symbols-from-KiCAD/)-bibliotheken importeren
- Extra bibliotheken downloaden van de TinyCAD.net-website

## Gebruikelijke werkwijze
{: #typical-workflow}

In de praktijk verloopt het werken met symboolbibliotheken meestal als volgt:

1. Laad of voeg de bibliotheken toe die beschikbaar moeten zijn in de huidige TinyCAD-sessie.
2. Blader door symbolen uit die bibliotheken, zoek erin en bekijk voorbeelden.
3. Plaats symbolen in de tekening.
4. Als een symbooldefinitie moet worden gewijzigd, bewerk dan de bibliotheek in plaats van de geplaatste instantie.

Deze pagina behandelt stap 1 tot en met 3. Zie [Aangepaste symboolbibliotheken](../Custom-symbol-libraries/) voor het beheren van bibliotheekbestanden. Zie [Een symbool bewerken](../Editing-a-Symbol/) om de symbooldefinitie zelf te wijzigen.

## Bibliotheken laden
{: #loading-libraries}

Voordat u een symbool kunt plaatsen, moet de bijbehorende bibliotheek beschikbaar zijn in TinyCAD.

- Ingebouwde bibliotheken zijn beschikbaar als onderdeel van TinyCAD.
- Aangepaste bibliotheken moeten worden toegevoegd of geopend voordat u erin kunt bladeren.
- De precieze stappen verschillen tussen TinyCAD Web en de desktoptoepassing.

Raadpleeg [Aangepaste symboolbibliotheken](../Custom-symbol-libraries/) voor de productspecifieke stappen om bibliotheekbestanden toe te voegen, te openen, te vernieuwen, te maken en te bewerken.

## Bladeren, zoeken en voorbeelden bekijken
{: #browsing-searching-and-previewing}

Om symbolen uit een bibliotheek te gebruiken, moet de bibliotheek eerst in uw TinyCAD-sessie zijn geladen. Zodra deze is geladen:

1. Open de symboolkiezer.
2. Vouw een bibliotheek uit om de inhoud te bekijken, of gebruik het zoekvak om een symbool op naam of beschrijving te vinden.
3. Klik op een symbool om er een voorbeeld van te bekijken.
4. Selecteer het symbool om het actieve plaatsingsgereedschap te maken en klik vervolgens in uw tekening om instanties te plaatsen.

Zie [Symbolen](../Symbols/) voor meer informatie over het plaatsen en configureren van geselecteerde symbolen.

## Het bibliotheekpaneel vergroten of verkleinen
{: #resizing-the-library-panel}

Sleep de rechterrand van het bibliotheekpaneel om het breder of smaller te maken. Een breder
paneel is handig voor lange symboolnamen en beschrijvingen. TinyCAD onthoudt de breedte
op dit apparaat wanneer lokale opslag beschikbaar is.

## Symbolen sorteren
{: #sorting-symbols}

Gebruik in **Mijn bibliotheken** de sorteerknop naast de bibliotheekbedieningselementen om te schakelen tussen
**bibliotheekvolgorde**, **A naar Z** en **Z naar A**. De knopinfo vermeldt de huidige modus.
Sorteren is van toepassing op symbolen binnen bibliotheken en op zoekresultaten, waaronder
online resultaten; uw bibliotheekbestanden of -mappen worden er niet door herschikt. TinyCAD
onthoudt de sorteermodus op dit apparaat wanneer lokale opslag beschikbaar is.

De versie voor het bestandssysteem van de browser toont alleen online zoekresultaten en heeft geen
sorteerknop **Mijn bibliotheken**.

## Symbolen in een tekening plaatsen
{: #placing-symbols-in-a-drawing}

Zodra u een symbool in de bibliotheekbrowser selecteert, wordt het het actieve plaatsingsgereedschap.

Zie [Symbolen](../Symbols/) voor de daadwerkelijke plaatsingsprocedure, met inbegrip van het gedrag van symbolen nadat ze zijn geselecteerd.

Houd er rekening mee dat het plaatsen van een symbool in een tekening de bibliotheekdefinitie **niet** bewerkt. Als u de grafische weergave, pins of kenmerken voor toekomstig gebruik wilt wijzigen, bewerk het symbool dan in de bibliotheek. Zie [Een symbool bewerken](../Editing-a-Symbol/).

## Verwante taken
{: #related-tasks}

- Gebruik [Aangepaste symboolbibliotheken](../Custom-symbol-libraries/) om `.tclib`-bestanden toe te voegen, te openen, te maken en te beheren.
- Gebruik [Een symbool bewerken](../Editing-a-Symbol/) om de grafische weergave, pins en kenmerken van een symbool te wijzigen.
- Raadpleeg [Symbolen](../Symbols/) voor informatie over het plaatsen nadat u een symbool hebt gekozen.

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

- Terug naar [inhoud v4](../CONTENTS/)
