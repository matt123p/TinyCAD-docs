---
layout: default
---
# TinyCAD - Dibujo
{: #tinycad---drawing}

El [asistente de IA](../AI-Assistant/) puede crear un circuito o añadir componentes al dibujo abierto a partir de instrucciones escritas. Sus ediciones siguen siendo editables y admiten Deshacer.

En esta sección se describe el flujo de trabajo básico de dibujo, incluida la
configuración del primer dibujo,
las etiquetas, los buses, las conexiones sin conectar, las anotaciones y la impresión.

Para reorganizar un circuito existente, consulta [Ajuste de la distribución](../Layout-Tidy-Up/). Se describen los ámbitos de Auto-layout, los ajustes de intensidad y cómo revertir un resultado con Deshacer.

Para logotipos, imágenes de referencia y diagramas escaneados, consulta [Imágenes](../Images/). Se describen copiar y pegar, importar archivos, cambiar el tamaño, mantener la relación de aspecto y recortar píxeles.

## Ocultar objetos temporalmente
{: #temporarily-hiding-objects}

Para acceder a objetos que están debajo de una zona abarrotada del dibujo:

1. Selecciona los objetos que quieras apartar.
2. Abre el menú contextual del dibujo (haz clic con el botón derecho o mantén pulsado en una pantalla táctil)
   y elige **Ocultar seleccionados (Hide selected)**.
3. Cuando termines, abre el menú contextual y elige **Mostrar todos los objetos ocultos (Show all hidden objects)**
   para restaurar todos los objetos ocultos de la hoja actual.

Los objetos ocultos no se pueden seleccionar en el lienzo mientras estén ocultos. Ocultarlos es una
configuración temporal de visualización: no elimina objetos ni guarda una marca de ocultación en el
archivo de dibujo. Los objetos ocultos siguen participando en la conectividad eléctrica y en las
listas de redes, y también aparecen en la impresión y en la salida PDF.

Para ver los gestos de la pantalla táctil y la colocación precisa, consulta [Controles táctiles](../Touch-controls/).

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
