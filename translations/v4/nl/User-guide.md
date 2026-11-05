---
layout: default
---
# TinyCAD v4 - Tekenen
{: #tinycad-v4---drawing}

Dit gedeelte behandelt de belangrijkste tekenbewerkingen, waaronder het instellen
van de eerste tekening, labels, bussen, niet-verbonden aansluitingen, annotaties en afdrukken.

## Objecten tijdelijk verbergen
{: #temporarily-hiding-objects}

Zo bereikt u objecten onder een druk gedeelte van een tekening:

1. Selecteer de objecten die u uit de weg wilt halen.
2. Open het contextmenu van de tekening (klik met de rechtermuisknop of houd
   uw vinger op het scherm) en kies **Geselecteerde verbergen**.
3. Open na afloop het contextmenu en kies **Alle verborgen objecten weergeven**
   om alle verborgen objecten op het huidige blad weer zichtbaar te maken.

Verborgen objecten kunnen niet op het tekenblad worden geselecteerd zolang ze verborgen zijn. Verbergen is een
tijdelijke weergave-instelling: objecten worden niet verwijderd en er wordt geen verborgen-vlag in het
tekeningbestand opgeslagen. Verborgen objecten blijven deelnemen aan de elektrische verbindingen en
netlijsten, en worden nog steeds weergegeven in afgedrukte en PDF-uitvoer.

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
