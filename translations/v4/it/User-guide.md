---
layout: default
---
# TinyCAD - Disegno
{: #tinycad---drawing}

L'[assistente AI ](../AI-Assistant/) può creare un circuito o aggiungere componenti al disegno aperto a partire da istruzioni scritte. Le modifiche restano modificabili e supportano Annulla.

Questa sezione illustra il flusso di lavoro di disegno di base, compresa la configurazione del primo disegno,
le etichette, i bus, i punti di non connessione, le annotazioni e la stampa.

Per ridisporre un circuito esistente, vedere [Riordino del layout](../Layout-Tidy-Up/). La sezione illustra gli ambiti del layout automatico, le impostazioni di intensità e come ripristinare un risultato con Annulla.

Per loghi, immagini di riferimento e diagrammi acquisiti tramite scansione, vedere [Immagini](../Images/). La sezione illustra copia e incolla, importazione di file, ridimensionamento, proporzioni fisse e ritaglio dei pixel.

## Nascondere temporaneamente gli oggetti
{: #temporarily-hiding-objects}

Per raggiungere gli oggetti sotto una parte affollata del disegno:

1. Selezionare gli oggetti che si desidera spostare temporaneamente.
2. Aprire il menu contestuale del disegno (fare clic con il pulsante destro del mouse oppure tenere premuto su un touchscreen)
   e scegliere **Nascondi selezionati**.
3. Al termine, aprire il menu contestuale e scegliere **Mostra tutti gli oggetti nascosti**
   per ripristinare tutti gli oggetti nascosti nel foglio corrente.

Gli oggetti nascosti non possono essere selezionati sulla tela mentre sono nascosti. Nascondere è un'impostazione
visiva temporanea: non elimina gli oggetti né salva un flag di visibilità nel file del
disegno. Gli oggetti nascosti continuano a partecipare alla connettività elettrica e
alle netlist e compaiono comunque nei risultati di stampa e PDF.

Per i gesti touchscreen e il posizionamento preciso, vedere [Comandi touch](../Touch-controls/).

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

- Torna ai [contenuti della v4](../CONTENTS/)
