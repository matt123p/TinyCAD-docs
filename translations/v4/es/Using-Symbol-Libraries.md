---
layout: default
---
# Uso de bibliotecas de símbolos
{: #using-symbol-libraries}

## ¿Qué es una biblioteca de símbolos?
{: #what-is-a-symbol-library}

En el diseño de circuitos, una **biblioteca de símbolos** es una colección de símbolos esquemáticos almacenados en un solo archivo. Cada símbolo representa un componente electrónico, como una resistencia, un condensador, un circuito integrado, un conector, un transistor o cualquier otra pieza, mediante un gráfico normalizado con puntos de conexión eléctrica definidos.

Las bibliotecas de símbolos de TinyCAD utilizan el formato de archivo `.tclib`. Un solo archivo de biblioteca puede contener decenas o cientos de símbolos relacionados, normalmente agrupados por categoría o función. Por ejemplo, puede tener una biblioteca para componentes pasivos, otra para circuitos integrados lógicos y otra para conectores.

## ¿Para qué se utilizan las bibliotecas de símbolos?
{: #what-are-symbol-libraries-used-for}

Las bibliotecas de símbolos cumplen varias funciones clave en la captura de esquemas:

- **Reutilización en distintos diseños.** Una vez definido un símbolo en una biblioteca, se puede colocar en cualquier esquema sin tener que volver a crearlo. Esto ahorra tiempo y garantiza la coherencia entre proyectos.
- **Representación normalizada.** Las bibliotecas establecen un estilo visual y una configuración de pines comunes para cada componente. Todas las instancias de un temporizador 555 o de un amplificador operacional tienen el mismo aspecto y las mismas definiciones de pines, lo que reduce las interpretaciones erróneas.
- **Corrección eléctrica.** Cada símbolo incluye información de los pines: nombres, números y tipos eléctricos (entrada, salida, alimentación, pasivo, etc.). Estos datos se utilizan en procesos posteriores, como la generación de listas de redes, las comprobaciones de reglas de diseño y la exportación a herramientas de diseño de PCB.
- **Organización.** Agrupar los símbolos en bibliotecas por función, fabricante o proyecto facilita encontrar la pieza adecuada. TinyCAD permite cargar solo las bibliotecas que se necesitan para cada diseño.
- **Intercambio y colaboración.** Los archivos de biblioteca se pueden compartir entre los miembros de un equipo o descargar de la comunidad, para que todos trabajen con las mismas definiciones de símbolos verificadas.

## Bibliotecas integradas y personalizadas
{: #built-in-and-custom-libraries}

TinyCAD incluye [bibliotecas integradas](../Bundled-Libraries/) para diseños de equipos y circuitos electrónicos modelados. Seleccione **Standard** en el selector de la izquierda y, a continuación, elija una colección en **Choose a standard library**. No es necesario importar bibliotecas por separado. Para las piezas que no estén incluidas, puede:

- Crear sus propias [bibliotecas de símbolos personalizadas](../Custom-symbol-libraries/)
- [Importar símbolos de bibliotecas de KiCAD](../Importing-Symbols-from-KiCAD/)
- Descargar bibliotecas adicionales del sitio web TinyCAD.net

## Flujo de trabajo habitual
{: #typical-workflow}

En la práctica, trabajar con bibliotecas de símbolos suele seguir esta secuencia:

1. Cargue o añada las bibliotecas que desea tener disponibles en la sesión actual de TinyCAD.
2. Explore, busque y previsualice los símbolos de esas bibliotecas.
3. Coloque símbolos en el dibujo.
4. Si es necesario cambiar la definición de un símbolo, edite la biblioteca en lugar de editar la instancia colocada.

Esta página abarca los pasos del 1 al 3. Para administrar archivos de biblioteca, consulte [Bibliotecas de símbolos personalizadas](../Custom-symbol-libraries/). Para cambiar la definición del símbolo, consulte [Editar un símbolo](../Editing-a-Symbol/).

## Cargar bibliotecas
{: #loading-libraries}

Antes de colocar un símbolo, su biblioteca debe estar disponible en TinyCAD.

- Las bibliotecas integradas están disponibles como parte de TinyCAD.
- Es necesario añadir o abrir las bibliotecas personalizadas antes de poder explorarlas.
- Los pasos exactos varían entre TinyCAD Web y la aplicación de escritorio.

Consulte [Bibliotecas de símbolos personalizadas](../Custom-symbol-libraries/) para ver los pasos específicos de cada producto para añadir, abrir, actualizar, crear y editar archivos de biblioteca.

## Explorar, buscar y previsualizar
{: #browsing-searching-and-previewing}

Para utilizar símbolos de una biblioteca, primero hay que cargarla en la sesión de TinyCAD. Una vez cargada:

1. Abra el selector de símbolos de la izquierda y elija **Standard**, **Online** o **My Libraries**.
2. En Standard, elija una biblioteca integrada; en My Libraries, abra o despliegue sus bibliotecas. Utilice **Search libraries...** para buscar un símbolo por nombre o descripción.
3. Examine el gráfico en la lista de resultados y, a continuación, seleccione un símbolo para ver una previsualización ampliada y su descripción.
4. Arrastre la previsualización al dibujo y colóquela en la cuadrícula. Pulse Escape o haga clic con el botón derecho para terminar de colocar copias.

Para obtener más información sobre cómo colocar y configurar símbolos una vez seleccionados, consulte [Símbolos](../Symbols/).

## Cambiar el tamaño del panel de bibliotecas
{: #resizing-the-library-panel}

Arrastre el borde derecho del panel de bibliotecas para hacerlo más ancho o más estrecho. Un panel más ancho facilita la lectura de nombres y descripciones de símbolos largos. TinyCAD recuerda el ancho en este dispositivo cuando el almacenamiento local está disponible.

## Ordenar símbolos
{: #sorting-symbols}

En **My Libraries**, utilice el botón de ordenación junto a los controles de biblioteca para alternar entre **library order**, **A to Z** y **Z to A**. La descripción emergente del botón indica el modo actual.
La ordenación se aplica a los símbolos de las bibliotecas y a los resultados de búsqueda, incluidos los resultados en línea; no reorganiza los archivos ni las carpetas de las bibliotecas. TinyCAD recuerda el modo de ordenación en este dispositivo cuando el almacenamiento local está disponible.

El selector del navegador y el de Desktop incluyen las pestañas **Standard**, **Online** y **My Libraries**. El origen y la biblioteca estándar elegidos se recuerdan en este dispositivo.

## Colocar símbolos en un dibujo
{: #placing-symbols-in-a-drawing}

Una vez seleccionado un símbolo en el explorador de bibliotecas, se convierte en la herramienta de colocación activa.

Para conocer el flujo de trabajo de colocación, incluido el comportamiento de los símbolos una vez seleccionados, consulte [Símbolos](../Symbols/).

Recuerde que colocar un símbolo en un dibujo **no** edita la definición de la biblioteca. Si necesita cambiar los gráficos, los pines o los atributos para usos futuros, edite el símbolo en su biblioteca. Consulte [Editar un símbolo](../Editing-a-Symbol/).

## Tareas relacionadas
{: #related-tasks}

- Utilice [Bibliotecas de símbolos personalizadas](../Custom-symbol-libraries/) para añadir, abrir, crear y administrar archivos `.tclib`.
- Utilice [Editar un símbolo](../Editing-a-Symbol/) para cambiar los gráficos, los pines y los atributos de un símbolo.
- Consulte [Símbolos](../Symbols/) para obtener información sobre la colocación una vez elegido un símbolo.

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

- Volver al [índice de v4](../)
