---
layout: default
---
# Editor de lista de redes
{: #netlist-editor}

El `Netlist Editor` es una nueva función de TinyCAD v4.

Use esta función cuando quiera:

- ver cómo TinyCAD ha agrupado los cables y las etiquetas en redes
- encontrar dónde se usa una red en el dibujo
- asignar un tipo a una red
- cambiar el aspecto de un grupo de redes en el esquema

## Qué es la vista Lista de redes
{: #what-the-netlist-view-is}

El `Netlist Editor` es una lista dinámica de las redes del dibujo.

Una red es una conexión eléctrica. TinyCAD la determina a partir de:

- cables
- pines
- etiquetas
- símbolos de alimentación

La lista es dinámica y se actualiza automáticamente mientras edita el esquema.

## Cómo abrirla
{: #how-to-open-it}

1. Mire el panel inferior del editor.
2. Si ve `Symbols`, use el botón de modo y cambie a `Netlist`.

Si hay otro panel abierto porque hay algo seleccionado, anule primero la selección.

![Vista Lista de redes debajo del esquema del divisor, con la fila OUT resaltada](../images/netlist-editor/netlist-overview.png)

En este ejemplo de divisor incluido, la fila `OUT` conecta `R1.2` con `R2.1`.
Al pasar el cursor sobre esa fila, se resalta la conexión en el dibujo.

## Significado de cada columna
{: #what-each-column-means}

- `Net`: el nombre de la red o su número interno
- `Sheet`: la hoja donde se encontró el elemento principal de esa fila
- `Connections`: el número de conexiones de pines de esa red
- `Labels`: las etiquetas encontradas en esa red
- `Type`: el tipo de lista de redes asignado a esa red
- `Symbols`: las partes y los pines conectados a esa red

## Cómo usar la vista Lista de redes
{: #how-to-use-the-netlist-view}

### Buscar una red
{: #find-a-net}

Use el cuadro de búsqueda para filtrar la lista.

Puede buscar por:

- nombre de red
- nombre de hoja
- texto de etiqueta
- referencia de símbolo
- nombre del tipo

### Resaltar una red en el dibujo
{: #highlight-a-net-in-the-drawing}

Sitúe el cursor sobre una fila.

TinyCAD resalta los elementos de red correspondientes en el esquema para que pueda ver dónde está esa red.

### Ir a una red en el dibujo
{: #jump-to-a-net-in-the-drawing}

Haga clic en una fila.

TinyCAD va al elemento relacionado en la hoja correspondiente.

## Cómo asignar un tipo a una red
{: #how-to-assign-a-type-to-a-net}

Cada fila tiene un campo `Type`.

Para asignar un tipo:

1. Haga clic en el campo `Type` de la red.
2. Elija un tipo existente de la lista.
3. Para definir primero un tipo nuevo, use `Netlist Types` como se describe más abajo y, después, vuelva al campo `Type` de la red.

![Lista de redes filtrada por OUT, con el tipo control asignado](../images/netlist-editor/netlist-type-assignment.png)

Aquí, la búsqueda de `OUT` aísla la red de salida del divisor, y su `Type` está establecido en `control`.


## Qué es un tipo de red
{: #what-a-net-type-is}

Un tipo de red es una etiqueta reutilizable para un grupo de redes.

Puede usarlo para:

- organizar las redes en categorías
- asignar los mismos colores a las redes coincidentes
- dibujar ciertas redes con líneas más gruesas
- guardar notas adicionales como atributos

Ejemplos de posibles nombres de tipo:

- `power`
- `control`
- `logic`
- `analog`
- `high_current`

## Cómo abrir Tipos de lista de redes
{: #how-to-open-netlist-types}

1. Abra la vista `Netlist` de la barra inferior.
2. Haga clic en `Netlist Types`.

Se abrirá el editor de todas las definiciones de tipo disponibles.

## Qué puede hacer en Tipos de lista de redes
{: #what-you-can-do-in-netlist-types}

En la ventana `Netlist Types` puede:

- añadir un tipo nuevo
- duplicar un tipo existente
- cambiar el nombre de un tipo
- eliminar un tipo
- cambiar el color de los cables
- cambiar el color de las etiquetas
- cambiar el color de los símbolos de alimentación
- cambiar el grosor de los cables
- añadir atributos propios
- obtener una vista previa del resultado antes de guardarlo

## El tipo predeterminado
{: #the-default-type}

Siempre existe un tipo `default`.

Aspectos importantes:

- no se puede cambiar su nombre
- no se puede eliminar
- sus colores son los colores normales del dibujo

Si cambia los colores de la fila `default`, estará cambiando los colores normales de las redes del dibujo.

## Cómo crear un tipo nuevo
{: #how-to-create-a-new-type}

1. Abra `Netlist Types`.
2. Haga clic en `Add`.
3. Escriba un nombre.
4. Establezca los colores y el grosor de línea que quiera.
5. Haga clic en `OK` para guardar.

Después, podrá asignar el tipo nuevo a las redes desde la vista `Netlist` de la parte inferior.

![Editor de Tipos de lista de redes con los tipos predeterminado, control y alimentación, y un grosor de línea de 2 para control](../images/netlist-editor/netlist-types.png)

El ejemplo añade los tipos `control` y `power`. El tipo `control` tiene un grosor de línea de `2`; cada botón de color abre su propio editor.

## Cómo duplicar un tipo
{: #how-to-duplicate-a-type}

Esto resulta útil cuando quiere crear algo parecido a un tipo existente.

1. Seleccione la fila del tipo.
2. Haga clic en `Duplicate`.
3. Cambie el nombre del tipo nuevo.
4. Edite los colores o ajustes que quiera.
5. Haga clic en `OK`.

## Cómo cambiar los colores
{: #how-to-change-colors}

Cada tipo puede tener colores distintos para:

- cables
- etiquetas
- elementos de alimentación

Para cambiar un color:

1. Haga clic en la celda de color de la fila.
2. Active `Override colour` para un tipo distinto del predeterminado y, después, elija un color.
3. Haga clic en `OK` en el cuadro de diálogo de color.
4. Haga clic en `OK` en la ventana principal `Netlist Types`.

Los tipos distintos del predeterminado pueden usar su propio color o recurrir al color predeterminado del dibujo.

![Editor del color del cable con la opción Anular color activada y un cable verde en la vista previa](../images/netlist-editor/netlist-colour-preview.png)

La vista previa muestra el color seleccionado para el cable junto con los colores de la etiqueta y del símbolo de alimentación. Use las pestañas `Wire`, `Label` y `Power` para revisar cada ajuste antes de guardar.

## Cómo cambiar el grosor de los cables
{: #how-to-change-wire-thickness}

1. Busque la fila del tipo.
2. Cambie el valor `Wire Thickness`.
3. Haga clic en `OK`.

Esto afecta al modo en que se dibujan en el esquema los cables de las redes de ese tipo.

## Cómo añadir atributos
{: #how-to-add-attributes}

Los atributos son pares sencillos de nombre y valor que se guardan con el tipo.

Para añadirlos:

1. Haga clic en la celda `Attributes` del tipo.
2. Haga clic en `Add Attribute` y, después, introduzca el nombre y el valor del atributo. Repita el proceso para añadir más entradas.
3. Guarde los atributos.
4. Haga clic en `OK` en el cuadro de diálogo principal.

![Editor de atributos con entradas de propósito y notas para el tipo control](../images/netlist-editor/netlist-attributes.png)

Estas entradas de ejemplo describen el propósito del tipo y añaden una nota sobre el cableado. Pertenecen al tipo y se pueden compartir con todas las redes que tengan asignado ese tipo.

Por el momento, estos atributos se guardan principalmente con el dibujo. Son útiles para conservar información adicional sobre los tipos, aunque todavía no se utilicen en todos los formatos de salida.


## Páginas relacionadas
{: #related-pages}

- [Generar lista de redes](../Generate-Netlist/)
- [Lista de materiales](../Bill-Of-Materials/)
- [Comprobación de reglas de diseño](../Design-Rules-Check/)
- [Salida SPICE](../SPICE-output/)
- [Salida VHDL](../VHDL-output/)

- Volver a [Avanzado](../Advanced/)
- Volver a [Contenido de v4](../)
