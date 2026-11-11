---
layout: default
---
# TinyCAD - Dibujo
{: #tinycad---drawing}

Esta sección abarca el flujo de trabajo básico de dibujo, incluida la configuración del primer dibujo,
las etiquetas, los buses, las conexiones sin conectar, las anotaciones y la impresión.

## Ocultar objetos temporalmente
{: #temporarily-hiding-objects}

Para acceder a objetos situados debajo de una parte abarrotada del dibujo:

1. Seleccione los objetos que quiera apartar.
2. Abra el menú contextual del dibujo (haga clic con el botón derecho o mantenga pulsado en una pantalla táctil)
   y elija **Ocultar selección**.
3. Cuando termine, abra el menú contextual y elija **Mostrar todos los objetos ocultos**
   para restaurar todos los objetos ocultos de la hoja actual.

Los objetos ocultos no se pueden seleccionar en el lienzo mientras estén ocultos. Ocultarlos es una
configuración temporal de vista: no elimina objetos ni guarda una marca de ocultación en el
archivo de dibujo. Los objetos ocultos siguen participando en la conectividad eléctrica y en las
listas de redes, y siguen apareciendo en la salida impresa y en PDF.

Para consultar los gestos táctiles y la colocación precisa, consulte [Controles táctiles](../Touch-controls/).

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

- Volver al [índice de v4](../CONTENTS/)
