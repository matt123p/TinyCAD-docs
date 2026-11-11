---
layout: default
---
# TinyCAD - Dibujo
{: #tinycad-v4---drawing}

Esta sección aborda el flujo de trabajo básico de dibujo, incluida la configuración
para el primer dibujo, las etiquetas, los buses, las conexiones no realizadas, las anotaciones y la impresión.

## Ocultar objetos temporalmente
{: #temporarily-hiding-objects}

Para acceder a los objetos que están debajo de una zona congestionada del dibujo:

1. Seleccione los objetos que quiera apartar.
2. Abra el menú contextual del dibujo (haga clic con el botón derecho o mantenga pulsado en una pantalla táctil)
   y elija **Ocultar selección (Hide selected)**.
3. Cuando termine, abra el menú contextual y elija **Mostrar todos los objetos ocultos (Show all hidden objects)**
   para restaurar todos los objetos ocultos de la hoja actual.

Mientras están ocultos, los objetos no se pueden seleccionar en el lienzo. Ocultarlos es una
configuración temporal de visualización: no elimina los objetos ni guarda una marca de ocultación en el
archivo del dibujo. Los objetos ocultos siguen participando en la conectividad eléctrica y en las
listas de redes, y siguen apareciendo en las impresiones y en la salida PDF.

Para consultar los gestos táctiles y la colocación precisa, vea [Controles táctiles](../Touch-controls/).

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
