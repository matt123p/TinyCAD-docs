---
layout: default
---
# TinyCAD - Disegno
{: #tinycad---drawing}

Questa sezione illustra il flusso di lavoro principale per il disegno, incluse la configurazione del primo disegno,
le etichette, i bus, le connessioni non collegate, le annotazioni e la stampa.

## Nascondere temporaneamente gli oggetti
{: #temporarily-hiding-objects}

Per raggiungere gli oggetti sotto una parte affollata del disegno:

1. Selezionare gli oggetti che si desidera spostare momentaneamente.
2. Aprire il menu contestuale del disegno (fare clic con il pulsante destro oppure tenere premuto su un touchscreen)
   e scegliere **Nascondi selezionati**.
3. Al termine, aprire il menu contestuale e scegliere **Mostra tutti gli oggetti nascosti**
   per ripristinare tutti gli oggetti nascosti nel foglio corrente.

Gli oggetti nascosti non possono essere selezionati nell'area di disegno mentre sono nascosti. Nascondere gli oggetti è un'impostazione
visiva temporanea: non elimina gli oggetti né salva un flag di visibilità nel file del
Disegno. Gli oggetti nascosti continuano a partecipare alla connettività elettrica e agli
elenchi di rete e compaiono comunque nell'output stampato e PDF.

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

- Torna a [Indice v4](../CONTENTS/)
