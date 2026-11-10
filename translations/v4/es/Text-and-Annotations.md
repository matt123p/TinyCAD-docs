---
layout: default
---
# Texto y anotaciones
{: #text--annotations}

Las herramientas de texto y anotación sirven para documentar y mejorar la claridad visual.

Estos objetos **no son eléctricos** y se ignoran al generar listas de conexiones y al realizar comprobaciones
con las reglas de diseño.

## Texto y etiquetas
{: #text-vs-labels}

- Usa **Texto** para notas, llamadas, títulos e instrucciones de fabricación.
- Usa **Etiquetas** para nombres de redes con actividad eléctrica.

Si usas texto donde se necesita una etiqueta, la red no se conectará.

## ¿Qué es Markdown?
{: #what-is-markdown}

Markdown añade formato al texto sin formato mediante marcadores sencillos que se escriben con el teclado. TinyCAD interpreta esos marcadores y muestra encabezados, texto en negrita y listas.

| Lo que escribe | Lo que significa |
|---|---|
| `# Power supply` | Un encabezado |
| `**Check polarity**` | Texto en negrita |
| `*Optional*` | Texto en cursiva |
| `- R1: 10 kΩ` | Un elemento de lista con viñeta |
| `` `R1` `` | Código en línea |

Deje un espacio después de `#` o `-` al principio de una línea. Deje una línea en blanco entre párrafos.

Para varias líneas de código, coloque `~~~` en una línea independiente antes y después del código. El ejemplo de nota completo que aparece más abajo muestra cómo hacerlo.

## Cuadros de texto Markdown
{: #markdown-text-boxes}

Los cuadros de texto Markdown están disponibles en [TinyCAD v4.0.11](../Changelog/#v4011).

1. Elija Texto (Text, o pulse T) y arrastre para dibujar un cuadro sobre el dibujo.
2. Haga clic dentro del cuadro e introduzca Markdown. El formato aparece mientras escribe.
3. Haga clic fuera para ver la nota con formato sin los marcadores Markdown. Amplíe el cuadro si se recorta el contenido.

![Nota Markdown renderizada en SVG con encabezado, lista de componentes, lista de tareas y bloque de código.](../images/markdown-preview.png)

### Código fuente Markdown editable
{: #editable-markdown-source}

Los encabezados, la negrita, la cursiva y el tachado muestran su formato mientras sus marcadores permanecen visibles y editables. El cursor, la selección y el ajuste de línea siguen el texto con formato. El código delimitado o sangrado permanece literal; no se aplica coloreado de sintaxis.

La familia tipográfica, el tamaño, la negrita y la cursiva elegidos forman el estilo base. Los encabezados se escalan respecto a ese tamaño; el código también utiliza la familia elegida. Deshacer, copiar/pegar y guardar conservan el código fuente Markdown.

![Edición de la misma nota con los marcadores visibles de encabezado, negrita, lista, lista de tareas y delimitadores de código.](../images/markdown-source-editor.png)

### Formato compatible
{: #supported-formatting}

Se admiten encabezados, negrita, cursiva, tachado, citas, listas numeradas y con viñetas, listas de tareas, líneas horizontales, código en línea y bloques de código delimitados o sangrados. Se conservan los saltos de línea normales. Las tablas, enlaces, imágenes y HTML se muestran como texto literal, sin formato especial ni carga de imágenes remotas.

Por ejemplo, introduzca este código fuente para crear la nota ilustrada:

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

## Objetos de anotación
{: #annotation-objects}

TinyCAD admite formas de anotación habituales, como:

- texto,
- líneas,
- rectángulos,
- elipses,
- arcos,
- polígonos.

Úsalas para agrupar bloques, resaltar áreas y añadir notas explicativas sin
cambiar la conectividad del circuito.


## Dibujar líneas y polígonos
{: #drawing-lines--polygons}

Puedes dibujar un conjunto de líneas. Para terminar de dibujar, haz clic con el botón derecho.

Puedes convertirlo en un polígono seleccionando «Cerrar polígono» en el menú contextual. Una vez convertido
en polígono, puedes cambiar el relleno.

{% include video-player.html
	src="/v4/images/video/Video 7.mp4"
	width=1620
	height=924
	caption="Tutorial en vídeo que muestra cómo dibujar y editar un polígono."
%}


- Volver a [Dibujo](../User-guide/)
- Volver a [Índice de v4](../CONTENTS/)
