---
layout: default
---
# Uso de bibliotecas de símbolos
{: #using-symbol-libraries}

## ¿Qué es una biblioteca de símbolos?
{: #what-is-a-symbol-library}

En el diseño de circuitos, una **biblioteca de símbolos** es una colección de símbolos esquemáticos almacenados en un único archivo. Cada símbolo representa un componente electrónico, como una resistencia, un condensador, un circuito integrado, un conector, un transistor u otra pieza, mediante un gráfico normalizado con puntos de conexión eléctrica definidos.

Las bibliotecas de símbolos de TinyCAD utilizan el formato de archivo `.tclib`. Un único archivo de biblioteca puede contener decenas o cientos de símbolos relacionados, normalmente agrupados por categoría o finalidad. Por ejemplo, podrías tener una biblioteca para componentes pasivos, otra para circuitos integrados lógicos y otra para conectores.

## ¿Para qué se usan las bibliotecas de símbolos?
{: #what-are-symbol-libraries-used-for}

Las bibliotecas de símbolos tienen varias funciones importantes en la captura de esquemas:

- **Reutilización en distintos diseños.** Una vez que un símbolo está definido en una biblioteca, se puede colocar en cualquier esquema sin tener que volver a crearlo. Esto ahorra tiempo y garantiza la coherencia entre proyectos.
- **Representación normalizada.** Las bibliotecas imponen un estilo visual y una configuración de pines comunes para cada componente. Todas las instancias de un temporizador 555 o de un amplificador operacional tienen el mismo aspecto y las mismas definiciones de pines, lo que reduce las interpretaciones erróneas.
- **Corrección eléctrica.** Cada símbolo contiene información sobre los pines: nombres, números y tipos eléctricos (entrada, salida, alimentación, pasivo, etc.). Estos datos impulsan procesos posteriores, como la generación de listas de redes, las comprobaciones de reglas de diseño y la exportación a herramientas de diseño de PCB.
- **Organización.** Agrupar símbolos en bibliotecas por función, fabricante o proyecto facilita encontrar la pieza adecuada. TinyCAD permite cargar solo las bibliotecas que necesitas para un diseño determinado.
- **Intercambio y colaboración.** Los archivos de biblioteca se pueden compartir entre los miembros del equipo o descargar de la comunidad, de modo que todos trabajen con las mismas definiciones de símbolos verificadas.

## Bibliotecas integradas y personalizadas
{: #built-in-and-custom-libraries}

TinyCAD incluye un conjunto de bibliotecas integradas que abarca familias de componentes comunes. Para las piezas que no están incluidas, puedes:

- Crear tus propias [bibliotecas de símbolos personalizadas](../Custom-symbol-libraries/)
- [Importar símbolos de KiCAD](../Importing-Symbols-from-KiCAD/) bibliotecas
- Descargar bibliotecas adicionales del sitio web TinyCAD.net

## Flujo de trabajo habitual
{: #typical-workflow}

En la práctica, el trabajo con bibliotecas de símbolos suele seguir esta secuencia:

1. Carga o añade las bibliotecas que quieres tener disponibles en la sesión actual de TinyCAD.
2. Explora, busca y previsualiza símbolos de esas bibliotecas.
3. Coloca símbolos en el dibujo.
4. Si es necesario cambiar la definición de un símbolo, edita la biblioteca en lugar de editar la instancia colocada.

Esta página trata los pasos del 1 al 3. Para gestionar archivos de biblioteca, consulta [Bibliotecas de símbolos personalizadas](../Custom-symbol-libraries/). Para cambiar la definición del símbolo en sí, consulta [Edición de un símbolo](../Editing-a-Symbol/).

## Carga de bibliotecas
{: #loading-libraries}

Antes de poder colocar un símbolo, su biblioteca debe estar disponible en TinyCAD.

- Las bibliotecas integradas están disponibles como parte de TinyCAD.
- Las bibliotecas personalizadas deben añadirse o abrirse antes de poder explorarlas.
- Los pasos exactos varían entre TinyCAD Web y la aplicación de escritorio.

Consulta [Bibliotecas de símbolos personalizadas](../Custom-symbol-libraries/) para ver los pasos específicos de cada producto para añadir, abrir, actualizar, crear y editar archivos de biblioteca.

## Exploración, búsqueda y previsualización
{: #browsing-searching-and-previewing}

Para usar símbolos de una biblioteca, primero hay que cargarla en la sesión de TinyCAD. Una vez cargada:

1. Abre el selector de símbolos.
2. Expande una biblioteca para explorar su contenido, o usa el cuadro de búsqueda para encontrar un símbolo por nombre o descripción.
3. Haz clic en un símbolo para previsualizarlo.
4. Selecciona el símbolo para convertirlo en la herramienta de colocación activa y, a continuación, haz clic en el dibujo para colocar instancias.

Para obtener más información sobre cómo colocar y configurar los símbolos seleccionados, consulta [Símbolos](../Symbols/).

## Cambio del tamaño del panel de bibliotecas
{: #resizing-the-library-panel}

Arrastra el borde derecho del panel de bibliotecas para ensancharlo o estrecharlo. Un panel más ancho
facilita la lectura de nombres y descripciones de símbolos largos. TinyCAD recuerda el ancho
en este dispositivo cuando el almacenamiento local está disponible.

## Ordenación de símbolos
{: #sorting-symbols}

En **Mis bibliotecas**, usa el botón de ordenación junto a los controles de biblioteca para alternar
entre **orden de bibliotecas**, **A a Z** y **Z a A**. La descripción emergente del botón indica el modo actual.
La ordenación se aplica a los símbolos dentro de las bibliotecas y a los resultados de búsqueda, incluidos
los resultados en línea; no reorganiza los archivos ni las carpetas de las bibliotecas. TinyCAD
recuerda el modo de ordenación en este dispositivo cuando el almacenamiento local está disponible.

La versión del sistema de archivos del navegador solo muestra la búsqueda en línea y no incluye
el botón de ordenación de **Mis bibliotecas**.

## Colocación de símbolos en un dibujo
{: #placing-symbols-in-a-drawing}

Una vez seleccionado un símbolo en el explorador de bibliotecas, este se convierte en la herramienta de colocación activa.

Para conocer el flujo de trabajo de colocación propiamente dicho, incluido el comportamiento de los símbolos una vez seleccionados, consulta [Símbolos](../Symbols/).

Recuerda que colocar un símbolo en un dibujo **no** edita la definición de la biblioteca. Si necesitas cambiar los gráficos, los pines o los atributos para usos futuros, edita el símbolo en su biblioteca. Consulta [Edición de un símbolo](../Editing-a-Symbol/).

## Tareas relacionadas
{: #related-tasks}

- Usa [Bibliotecas de símbolos personalizadas](../Custom-symbol-libraries/) para añadir, abrir, crear y gestionar archivos `.tclib`.
- Usa [Edición de un símbolo](../Editing-a-Symbol/) para cambiar los gráficos, los pines y los atributos de un símbolo.
- Consulta [Símbolos](../Symbols/) para obtener detalles sobre la colocación una vez elegido un símbolo.

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
