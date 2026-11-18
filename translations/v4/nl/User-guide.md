---
layout: default
---
# TinyCAD - Tekenen
{: #tinycad---drawing}

De [AI-assistent](../AI-Assistant/) kan op basis van geschreven instructies een schakeling maken of onderdelen toevoegen aan de geopende tekening. De wijzigingen blijven bewerkbaar en kunnen ongedaan worden gemaakt.

In dit gedeelte komen de belangrijkste tekenhandelingen aan bod, waaronder het instellen van een eerste tekening,
labels, bussen, niet-aansluitingen, annotaties en afdrukken.

Zie [Indeling opruimen](../Layout-Tidy-Up/) voor het herschikken van een bestaande schakeling. Hierin worden de bereiken van Automatische indeling, de instellingen voor de sterkte en het ongedaan maken van een resultaat met Ongedaan maken behandeld.

Zie [Afbeeldingen](../Images/) voor logo's, referentieafbeeldingen en gescande schema's. Hierin komen kopiëren en plakken, bestanden importeren, het formaat wijzigen, een vaste beeldverhouding en het afsnijden van pixels aan bod.

## Objecten tijdelijk verbergen
{: #temporarily-hiding-objects}

Zo krijgt u toegang tot objecten onder een druk deel van een tekening:

1. Selecteer de objecten die u uit de weg wilt halen.
2. Open het contextmenu van de tekening (klik met de rechtermuisknop of houd op een touchscreen lang ingedrukt)
   en kies **Selectie verbergen**.
3. Open wanneer u klaar bent het contextmenu en kies **Alle verborgen objecten weergeven**
   om alle verborgen objecten op het huidige blad te herstellen.

Verborgen objecten kunnen zolang ze verborgen zijn niet op het canvas worden geselecteerd. Verbergen is een
tijdelijke weergave-instelling: objecten worden niet verwijderd en er wordt geen verborgen status in het
tekenbestand opgeslagen. Verborgen objecten blijven van invloed op de elektrische verbindingen en
netlijsten, en worden nog steeds weergegeven in afdrukken en PDF-uitvoer.

Zie [Aanraakbediening](../Touch-controls/) voor aanraakbewegingen en nauwkeurige plaatsing.

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

- Terug naar [inhoudsopgave v4](../CONTENTS/)
