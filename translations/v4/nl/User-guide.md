---
layout: default
---
# TinyCAD - Tekenen
{: #tinycad---drawing}

In dit gedeelte wordt de basisworkflow voor tekenen behandeld, waaronder het
instellen van de eerste tekening, labels, bussen, niet-verbindingen, annotaties
en afdrukken.

## Objecten tijdelijk verbergen
{: #temporarily-hiding-objects}

Zo bereikt u objecten die zich onder een druk deel van een tekening bevinden:

1. Selecteer de objecten die u uit de weg wilt zetten.
2. Open het contextmenu van de tekening (klik met de rechtermuisknop of houd
   ingedrukt op een touchscreen) en kies **Geselecteerde verbergen (Hide selected)**.
3. Open na afloop het contextmenu en kies **Alle verborgen objecten weergeven
   (Show all hidden objects)** om alle verborgen objecten op het huidige blad
   terug te zetten.

Verborgen objecten kunnen niet op het tekengebied worden geselecteerd zolang ze
verborgen zijn. Verbergen is een tijdelijke weergave-instelling: objecten worden
hierdoor niet verwijderd en er wordt geen verborgen-vlag in het tekeningbestand
opgeslagen. Verborgen objecten blijven deelnemen aan de elektrische
connectiviteit en netlijsten, en worden nog steeds weergegeven in afdrukken en
PDF-uitvoer.

Zie [Aanraakbediening](../Touch-controls/) voor aanraakgebaren en nauwkeurige plaatsing.

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
