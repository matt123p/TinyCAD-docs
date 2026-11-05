---
layout: default
---
# Editor de listas de redes
{: #netlist-editor}

`Netlist Editor` es una nueva función de TinyCAD v4.

Usa esta función cuando quieras:

- ver cómo TinyCAD ha agrupado los cables y las etiquetas en redes
- encontrar dónde se utiliza una red en el dibujo
- asignar un tipo a una red
- cambiar el aspecto de un grupo de redes en el esquema

## Qué es la vista Lista de redes
{: #what-the-netlist-view-is}

`Netlist Editor` es una lista dinámica de las redes del dibujo.

Una red es una conexión eléctrica. TinyCAD la determina a partir de:

- cables
- pines
- etiquetas
- símbolos de alimentación

La lista es dinámica y se actualiza automáticamente mientras editas el esquema.

## Cómo abrirla
{: #how-to-open-it}

1. Mira el panel inferior del editor.
2. Si ves `Symbols`, usa el botón de modo y cambia a `Netlist`.

Si hay otro panel abierto porque hay algo seleccionado, anula primero la selección.

## Qué significa cada columna
{: #what-each-column-means}

- `Net`: el nombre de la red o su número interno
- `Sheet`: la hoja donde se encontró el elemento principal de esa fila
- `Connections`: el número de conexiones de pines en esa red
- `Labels`: las etiquetas encontradas en esa red
- `Type`: el tipo de lista de redes asignado a esa red
- `Symbols`: los componentes y pines conectados a esa red

## Cómo usar la vista Lista de redes
{: #how-to-use-the-netlist-view}

### Buscar una red
{: #find-a-net}

Usa el cuadro de búsqueda para filtrar la lista.

Puedes buscar por:

- nombre de red
- nombre de hoja
- texto de etiqueta
- referencia del símbolo
- nombre del tipo

### Resaltar una red en el dibujo
{: #highlight-a-net-in-the-drawing}

Pasa el ratón por encima de una fila.

TinyCAD resalta los elementos de la red correspondiente en el esquema para que puedas ver dónde está.

### Ir a una red en el dibujo
{: #jump-to-a-net-in-the-drawing}

Haz clic en una fila.

TinyCAD va al elemento correspondiente en la hoja correcta.

## Cómo asignar un tipo a una red
{: #how-to-assign-a-type-to-a-net}

Cada fila tiene un campo `Type`.

Para asignar un tipo:

1. Haz clic en el campo `Type` de la red.
2. Elige un tipo existente de la lista o escribe un nombre nuevo.
3. Haz clic fuera del campo para aplicar el cambio.


## Qué es un tipo de red
{: #what-a-net-type-is}

Un tipo de red es una etiqueta reutilizable para un grupo de redes.

Puedes usarlo para:

- organizar las redes en categorías
- asignar los mismos colores a las redes coincidentes
- dibujar con más grosor determinadas redes
- guardar notas adicionales como atributos

Ejemplos de posibles nombres de tipos:

- `power`
- `control`
- `logic`
- `analog`
- `high_current`

## Cómo abrir Tipos de lista de redes
{: #how-to-open-netlist-types}

1. Abre la vista `Netlist` de la barra inferior.
2. Haz clic en `Netlist Types`.

Se abrirá el editor de todas las definiciones de tipos disponibles.

## Qué puedes hacer en Tipos de lista de redes
{: #what-you-can-do-in-netlist-types}

En la ventana `Netlist Types` puedes:

- añadir un tipo nuevo
- duplicar un tipo existente
- cambiar el nombre de un tipo
- eliminar un tipo
- cambiar el color de los cables
- cambiar el color de las etiquetas
- cambiar el color de los símbolos de alimentación
- cambiar el grosor de los cables
- añadir atributos propios
- previsualizar el resultado antes de guardar

## El tipo predeterminado
{: #the-default-type}

Siempre hay un tipo `default`.

Aspectos importantes que debes saber:

- no se puede cambiar su nombre
- no se puede eliminar
- sus colores son los colores normales del dibujo

Si cambias los colores de la fila `default`, estarás cambiando los colores normales de las redes que se usan en el dibujo.

## Cómo crear un tipo nuevo
{: #how-to-create-a-new-type}

1. Abre `Netlist Types`.
2. Haz clic en `Add`.
3. Introduce un nombre.
4. Configura los colores y el grosor de los cables que quieras.
5. Haz clic en `OK` para guardar.

Después, podrás asignar el tipo nuevo a las redes desde la vista inferior `Netlist`.

## Cómo duplicar un tipo
{: #how-to-duplicate-a-type}

Esto resulta útil cuando quieres crear algo parecido a un tipo existente.

1. Selecciona la fila del tipo.
2. Haz clic en `Duplicate`.
3. Cambia el nombre nuevo.
4. Modifica los colores o ajustes que quieras.
5. Haz clic en `OK`.

## Cómo cambiar los colores
{: #how-to-change-colors}

Cada tipo puede tener colores distintos para:

- cables
- etiquetas
- elementos de alimentación

Para cambiar un color:

1. Haz clic en la celda de color de la fila.
2. Elige el color en el cuadro de diálogo de colores.
3. Cierra el cuadro de diálogo de colores.
4. Haz clic en `OK` en la ventana principal `Netlist Types`.

Los tipos no predeterminados pueden usar su propio color o recurrir al color predeterminado del dibujo.

## Cómo cambiar el grosor de los cables
{: #how-to-change-wire-thickness}

1. Busca la fila del tipo.
2. Cambia el valor `Wire Thickness`.
3. Haz clic en `OK`.

Esto afecta a cómo se dibujan en el esquema los cables de las redes de ese tipo.

## Cómo añadir atributos
{: #how-to-add-attributes}

Los atributos son pares sencillos de nombre y valor que se guardan con el tipo.

Para añadirlos:

1. Haz clic en la celda `Attributes` del tipo.
2. Añade o modifica los nombres y valores de los atributos.
3. Guarda los atributos.
4. Haz clic en `OK` en el cuadro de diálogo principal.

Por el momento, estos atributos se guardan principalmente con el dibujo. Son útiles para conservar información adicional sobre los tipos, aunque todavía no los utilicen todos los formatos de salida.


## Páginas relacionadas
{: #related-pages}

- [Generar lista de redes](../Generate-Netlist/)
- [Lista de materiales](../Bill-Of-Materials/)
- [Comprobación de reglas de diseño](../Design-Rules-Check/)
- [Salida SPICE](../SPICE-output/)
- [Salida VHDL](../VHDL-output/)

- Volver a [Avanzado](../Advanced/)
- Volver al [Índice de v4](../CONTENTS/)
