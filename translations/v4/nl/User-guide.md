---
layout: default
---
# TinyCAD - Tekenen
{: #tinycad---drawing}

In dit gedeelte wordt de belangrijkste tekenworkflow behandeld, waaronder het
instellen van de eerste tekening, labels, bussen, niet-aangesloten aansluitingen,
annotaties en afdrukken.

Zie [Layout tidy-up](../Layout-Tidy-Up/) voor het herschikken van een bestaand circuit. Hierin worden de bereiken van Auto-layout, de instellingen voor de sterkte en het ongedaan maken van een resultaat met Undo behandeld.

## Objecten tijdelijk verbergen
{: #temporarily-hiding-objects}

Zo bereikt u objecten onder een druk gedeelte van een tekening:

1. Selecteer de objecten die u uit de weg wilt zetten.
2. Open het contextmenu van de tekening (klik met de rechtermuisknop of houd
   uw vinger lang op het scherm) en kies **Geselecteerde verbergen (Hide selected)**.
3. Open het contextmenu wanneer u klaar bent en kies **Alle verborgen objecten weergeven (Show all hidden objects)**
   om alle verborgen objecten op het huidige blad terug te zetten.

Verborgen objecten kunnen niet op het canvas worden geselecteerd zolang ze verborgen zijn. Verbergen is een
tijdelijke weergave-instelling: objecten worden niet verwijderd en er wordt geen verborgen markering in het
tekenbestand opgeslagen. Verborgen objecten blijven van invloed op de elektrische verbindingen en
netlijsten, en worden nog steeds weergegeven in afdrukken en PDF-uitvoer.

Zie [Touch controls](../Touch-controls/) voor aanraakbewegingen en nauwkeurige plaatsing.

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

- Terug naar [v4-inhoud](../CONTENTS/)
