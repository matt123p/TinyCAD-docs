---
layout: default
---
# Texto
{: #text}

El texto sirve para documentar y aportar claridad visual.

La herramienta de texto de TinyCAD crea un cuadro de texto en el dibujo. Los cuadros de texto son la
forma principal de añadir notas legibles, instrucciones, llamadas y encabezados directamente
en un esquema. Usan [Markdown](https://{{ page.manual_language | default: 'en' | replace: 'zh-CN', 'zh' }}.wikipedia.org/wiki/Markdown), de modo que puedes dar formato al texto con encabezados, negrita,
cursiva, listas, listas de tareas y bloques de código sin salir del lienzo de dibujo.

Estos objetos no son eléctricos y se ignoran al generar listas de conexiones y al realizar
comprobaciones de reglas de diseño.

## Texto frente a etiquetas
{: #text-vs-labels}

- Usa Texto para notas, llamadas, títulos e instrucciones de fabricación.
- Usa Etiquetas para los nombres de redes con actividad eléctrica.

Si usas texto donde se necesita una etiqueta, la red no se conectará.

## ¿Qué es Markdown?
{: #what-is-markdown}
{: #what-is-markdown}

Markdown añade formato al texto sin formato mediante marcadores sencillos que se escriben. TinyCAD lee
esos marcadores y muestra encabezados, texto en negrita y listas.

| Lo que escribes | Lo que significa |
|---|---|
| `# Power supply` | Un encabezado |
| `**Check polarity**` | Texto en negrita |
| `*Optional*` | Texto en cursiva |
| `- R1: 10 kΩ` | Un elemento de lista con viñetas |
| `` `R1` `` | Código en línea |

Deja un espacio después de `#` o `-` cuando aparezcan al principio de una línea. Deja una línea en blanco entre
párrafos.

Para varias líneas de código, coloca `~~~` en una línea aparte antes y después del código.
El ejemplo de nota completo que aparece a continuación lo muestra.

## Cuadros de texto Markdown
{: #markdown-text-boxes}
{: #markdown-text-boxes}

Los cuadros de texto Markdown están disponibles en [TinyCAD v4.0.11](../Changelog/#v4011).

1. Elige Texto (Text) (o pulsa T) y arrastra para crear un cuadro en el dibujo.
2. Haz clic dentro del cuadro e introduce Markdown. El formato aparece mientras escribes.
3. Haz clic en otro lugar para ver la nota con formato, sin los marcadores Markdown. Cambia el tamaño
   del cuadro si el contenido queda recortado.

![Nota Markdown renderizada en SVG con un encabezado, una lista de componentes, una lista de tareas y un bloque de código.](../images/markdown-preview.png)

### Código fuente Markdown editable
{: #editable-markdown-source}
{: #editable-markdown-source}

Los encabezados, la negrita, la cursiva y el tachado muestran su formato, mientras que sus
marcadores siguen visibles y se pueden editar. El cursor, la selección y el ajuste de línea
siguen el texto con estilo. El código delimitado y con sangría se mantiene literal; no se aplica
coloración de sintaxis.

La familia tipográfica, el tamaño y las opciones de negrita y cursiva que elijas forman el estilo base.
Los encabezados cambian de tamaño con respecto a ese tamaño; el código también usa la familia elegida. Deshacer,
copiar y pegar, y guardar conservan el código fuente Markdown.

![Edición de la misma nota con los marcadores visibles de encabezado, negrita, lista, lista de tareas y bloque de código.](../images/markdown-source-editor.png)

### Formato compatible
{: #supported-formatting}
{: #supported-formatting}

El formato compatible incluye encabezados, negrita, cursiva, tachado, citas,
listas numeradas y con viñetas, listas de tareas, líneas horizontales, código en línea y
bloques de código delimitados o con sangría. Se conservan los saltos de línea normales. Las tablas,
los enlaces, las imágenes y el HTML se muestran como texto literal, sin formato especial
ni carga remota de imágenes.

Por ejemplo, introduce este código fuente para crear la nota ilustrada:

````markdown
# RC filter
**Time constant:** τ = R × C

- R1: 10 kΩ
- C1: 100 nF

- [x] Draw the circuit
- [ ] Measure the response

~~~python
tau = 10_000 * 100e-9
~~~
````

- Véase también: [Formas](../Shapes/)
- Volver a [Dibujo](../User-guide/)
- Volver al [índice de v4](../CONTENTS/)
