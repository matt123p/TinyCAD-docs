---
layout: default
---
# Editor de listas de conexiones
{: #netlist-editor}

`Netlist Editor` es una nueva función de TinyCAD v4.

Usa esta función cuando quieras:

- ver cómo TinyCAD ha agrupado los cables y las etiquetas en redes
- encontrar dónde se utiliza una red en el dibujo
- asignar un tipo a una red
- cambiar el aspecto de un grupo de redes en el esquema

## Qué es la vista Lista de conexiones
{: #what-the-netlist-view-is}

`Netlist Editor` es una lista dinámica de las redes del dibujo.

Una red es una conexión eléctrica. TinyCAD la determina a partir de:

- los cables
- los pines
- las etiquetas
- los símbolos de alimentación

La lista es dinámica y se actualiza automáticamente mientras editas el esquema.

## Cómo abrirla
{: #how-to-open-it}

1. Mira el panel inferior del editor.
2. Si ves `Symbols`, usa el botón de modo y cambia a `Netlist`.

Si hay otro panel abierto porque hay algo seleccionado, anula primero la selección.

![Vista Lista de conexiones debajo del esquema del divisor, con la fila OUT resaltada](../images/netlist-editor/netlist-overview.png)

En este ejemplo del divisor incluido, la fila `OUT` conecta `R1.2` con `R2.1`.
Al pasar el cursor por esa fila, se resalta la conexión en el dibujo.

## Qué significa cada columna
{: #what-each-column-means}

- `Net`: el nombre de la red o su número interno
- `Sheet`: la hoja donde se encontró el elemento principal de esa fila
- `Connections`: el número de conexiones de pines de esa red
- `Labels`: las etiquetas encontradas en esa red
- `Type`: el tipo de lista de conexiones asignado a esa red
- `Symbols`: los componentes y pines conectados a esa red

## Cómo usar la vista Lista de conexiones
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

Pasa el cursor por una fila.

TinyCAD resalta los elementos correspondientes a la red en el esquema para que puedas ver dónde se encuentra.

### Ir a una red en el dibujo
{: #jump-to-a-net-in-the-drawing}

Haz clic en una fila.

TinyCAD va al elemento correspondiente en la hoja adecuada.

## Cómo asignar un tipo a una red
{: #how-to-assign-a-type-to-a-net}

Con la vista **Lista de conexiones** abierta, haz clic en un cable del esquema para resaltar la fila de su red. Usa la lista **Tipo** de esa fila para elegir un tipo existente. Para crear un tipo con un estilo de cable propio, abre **Tipos de lista de conexiones** y define primero el estilo.

Un tipo de red es un conjunto reutilizable de estilos de dibujo. Asigna el mismo tipo a varias redes para darles el mismo aspecto. Al editar ese tipo, se actualizan todas las redes que lo utilizan. También puedes asignar a las redes de un tipo sus propios colores de etiqueta y de símbolo de alimentación, o guardar notas como atributos. El estilo modifica el aspecto del dibujo sin alterar sus conexiones eléctricas.

## Ejemplo: poner en verde y engrosar el cable OUT del divisor
{: #example--make-the-dividers-out-wire-green-and-thicker}

Abre el dibujo `divider` incluido desde **Abrir ejemplo** → **Tutorial de SPICE** y amplía el circuito. En el panel inferior, cambia de **Símbolos** a **Lista de conexiones**. La etiqueta **OUT** identifica la red entre los pines **R1.2** y **R2.1**. Al principio tiene el tipo `default` y el grosor de cable normal.

![Divisor antes de aplicar el estilo; se muestra el cable OUT azul y fino entre R1 y R2](../images/netlist-editor/netlist-wire-before.png)

### Crear el estilo de cable
{: #create-the-wire-style}

1. Haz clic en **Tipos de lista de conexiones**, haz clic en **Añadir** y asigna al nuevo tipo el nombre `control`.
2. En la fila `control`, establece **Grosor del cable** en `4`. El valor `1` corresponde al grosor de línea normal. Pulsa **Tab** para confirmar el valor.
3. En la misma fila, haz clic en la celda **Color del cable**. Marca **Anular color** e introduce `007F5F` en el campo **Hexadecimal** para obtener el color verde. La vista previa muestra el cable con ambos ajustes.
4. Haz clic en **Aceptar** en el selector de color. Comprueba la muestra verde y el valor del grosor en la fila `control` y, a continuación, haz clic en **Aceptar** en **Tipos de lista de conexiones** para guardar el tipo.

![Selector de color del cable de control, con Anular color marcado y el cable verde visible en la vista previa](../images/netlist-editor/netlist-wire-colour.png)

![Tipos de lista de conexiones, con la muestra verde de Color del cable y un Grosor del cable de 4 en la fila de control](../images/netlist-editor/netlist-wire-type.png)

### Aplicar el estilo a OUT
{: #apply-the-style-to-out}

1. Haz clic en el cable justo encima de **R2** en el esquema. TinyCAD resalta la fila **OUT** en el panel **Lista de conexiones**.
2. Abre la lista **Tipo** de la fila resaltada y elige `control`.
3. Haz clic en una zona vacía del esquema para anular la selección. El cable entre **R1.2** y **R2.1** ahora es verde y más grueso. Elige `default` en la lista **Tipo** para restaurar el estilo de cable normal.

![Cable OUT seleccionado en el esquema y su fila resaltada en la lista de conexiones con control seleccionado](../images/netlist-editor/netlist-wire-assignment.png)

![Divisor después de aplicar el estilo; se muestra el cable OUT verde y más grueso entre R1 y R2](../images/netlist-editor/netlist-wire-after.png)

Usa **Guardar como** para conservar la copia editada del ejemplo.

### Ver el tutorial paso a paso
{: #watch-the-walkthrough}

{% include video-player.html src="/v4/videos/netlist-editor/netlist-editor.webm" type="video/webm" poster="/v4/images/netlist-editor/netlist-walkthrough-start.png" caption="Cambia a Lista de conexiones, crea un estilo de cable verde y, a continuación, haz clic en el cable OUT para encontrar su fila y aplicar el estilo." %}

## Qué puedes hacer en Tipos de lista de conexiones
{: #what-you-can-do-in-netlist-types}

En la ventana `Netlist Types` puedes:

- añadir un tipo nuevo
- duplicar un tipo existente
- cambiar el nombre de un tipo
- eliminar un tipo
- cambiar el color del cable
- cambiar el color de la etiqueta
- cambiar el color del símbolo de alimentación
- cambiar el grosor del cable
- añadir atributos propios
- previsualizar el resultado antes de guardarlo

## El tipo predeterminado
{: #the-default-type}

El tipo `default` tiene un nombre fijo y un grosor de cable de `1`. TinyCAD usa los colores de esta fila como colores normales de las redes del dibujo. Las redes sin un tipo asignado usan `default`.

## Cómo duplicar un tipo
{: #how-to-duplicate-a-type}

Esto resulta útil cuando quieres crear algo parecido a un tipo existente.

1. Selecciona la fila del tipo.
2. Haz clic en `Duplicate`.
3. Cambia el nombre de la copia y ajusta sus colores o su grosor.
4. Haz clic en `OK`.

## Colores de las etiquetas y los símbolos de alimentación
{: #label-and-power-symbol-colours}

Usa las pestañas **Cable**, **Etiqueta** y **Alimentación** del selector de color para editar cada color por separado. Para un tipo personalizado, activa **Anular color** en cada pestaña que quieras personalizar. Si se desactiva la anulación en una pestaña, se usa el color predeterminado del dibujo para ese elemento.

## Cómo añadir atributos
{: #how-to-add-attributes}

Los atributos son entradas sencillas de nombre y valor que se guardan con el tipo.

Para añadirlos:

1. Haz clic en la celda `Attributes` del tipo.
2. Haz clic en `Add Attribute` y, a continuación, introduce el nombre y el valor del atributo. Repite el proceso para añadir más entradas.
3. Guarda los atributos.
4. Haz clic en `OK` en el cuadro de diálogo principal.

![Editor de atributos con entradas de finalidad y notas para el tipo de control](../images/netlist-editor/netlist-attributes.png)

Estas entradas de ejemplo describen la finalidad del tipo y añaden una nota sobre el cableado. Pertenecen al tipo y pueden compartirse entre todas las redes que lo tengan asignado.

Por ahora, estos atributos se guardan principalmente con el dibujo. Son útiles para conservar información adicional sobre el tipo, aunque todavía no todos los formatos de salida los utilicen.


## Páginas relacionadas
{: #related-pages}

- [Generar lista de conexiones](../Generate-Netlist/)
- [Lista de materiales](../Bill-Of-Materials/)
- [Comprobación de reglas de diseño](../Design-Rules-Check/)
- [Salida SPICE](../SPICE-output/)
- [Salida VHDL](../VHDL-output/)

- Volver a [Avanzado](../Advanced/)
- Volver a [Contenido de v4](../)
