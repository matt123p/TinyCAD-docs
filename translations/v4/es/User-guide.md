---
layout: default
---
# TinyCAD - Dibujo
{: #tinycad---drawing}

Esta sección cubre el flujo de trabajo de dibujo básico, incluida la configuración del primer dibujo,
las etiquetas, los buses, las conexiones sin conectar, las anotaciones y la impresión.

Para reorganizar un circuito existente, consulta [Layout tidy-up](../Layout-Tidy-Up/). Incluye los ámbitos de Auto-layout, los ajustes de intensidad y cómo revertir un resultado con Undo.

## Ocultar objetos temporalmente
{: #temporarily-hiding-objects}

Para acceder a los objetos que hay debajo de una zona abarrotada del dibujo:

1. Selecciona los objetos que quieras apartar.
2. Abre el menú contextual del dibujo (haz clic con el botón derecho o mantén pulsado en una pantalla táctil)
   y elige **Ocultar selección (Hide selected)**.
3. Cuando termines, abre el menú contextual y elige **Mostrar todos los objetos ocultos (Show all hidden objects)**
   para restaurar todos los objetos ocultos de la hoja actual.

No se pueden seleccionar en el lienzo los objetos ocultos mientras permanezcan ocultos. Ocultarlos es un
ajuste de visualización temporal: no elimina objetos ni guarda una marca de ocultación en el archivo de
dibujo. Los objetos ocultos siguen participando en la conectividad eléctrica y en las listas de redes,
y también aparecen en la impresión y en la salida PDF.

Para consultar los gestos de pantalla táctil y la colocación precisa, consulta [Touch controls](../Touch-controls/).

## Páginas
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

- Volver al [contenido de v4](../CONTENTS/)
