---
layout: default
---
# TinyCAD - Disegno
{: #tinycad---drawing}

Questa sezione descrive il flusso di lavoro di disegno essenziale, incluse la
configurazione del primo disegno, le etichette, i bus, le connessioni non
collegate, le annotazioni e la stampa.

Per riordinare un circuito esistente, vedere [Riordino del layout](../Layout-Tidy-Up/). La sezione descrive gli ambiti di disposizione automatica, le impostazioni di intensità e come annullare un risultato con Undo.

## Nascondere temporaneamente gli oggetti
{: #temporarily-hiding-objects}

Per raggiungere gli oggetti sotto un'area affollata del disegno:

1. Selezionare gli oggetti che si desidera spostare temporaneamente.
2. Aprire il menu contestuale del disegno (fare clic con il pulsante destro del mouse o
   tenere premuto su un touchscreen) e scegliere **Nascondi selezionati (Hide selected)**.
3. Al termine, aprire il menu contestuale e scegliere **Mostra tutti gli oggetti nascosti (Show all hidden objects)**
   per ripristinare tutti gli oggetti nascosti nel foglio corrente.

Gli oggetti nascosti non possono essere selezionati nell'area di disegno mentre sono
nascosti. Nascondere gli oggetti è un'impostazione di visualizzazione temporanea:
non li elimina né salva un contrassegno di visibilità nel file di disegno. Gli oggetti
nascosti continuano a partecipare alla connettività elettrica e alle netlist e
compaiono comunque nell'output stampato e PDF.

Per i gesti touchscreen e il posizionamento preciso, vedere [Controlli touch](../Touch-controls/).

## Pagine
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

- Torna a [Indice dei contenuti di v4](../CONTENTS/)
