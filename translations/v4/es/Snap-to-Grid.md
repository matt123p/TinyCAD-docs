---
layout: default
---
# Ajustar a la cuadrícula
{: #snap-to-grid}

Ajustar a la cuadrícula hace que la posición del ratón se ajuste al punto de cuadrícula más cercano mientras
dibujas o colocas elementos. Esto mantiene alineados los símbolos y los cables, y ayuda a garantizar que
las conexiones lleguen exactamente a puntos de conexión válidos.

## Por qué es importante
{: #why-it-matters}

- Mantiene conectados los extremos de los cables y los pines de los símbolos: si no usas Ajustar a la cuadrícula, corres
    el riesgo de que los cables no se conecten a los pines.
- Evita desalineaciones visuales que pueden parecer correctas, pero que no están conectadas eléctricamente
	para las herramientas de TinyCAD.

Para el trabajo habitual con esquemas, Ajustar a la cuadrícula debe permanecer activado.

## Mostrar la cuadrícula y activar el ajuste
{: #showing-the-grid-and-enabling-snapping}

Abre el menú de la barra de herramientas **Settings** y elige **Settings** para cambiar estas
opciones independientes:

- **Show the grid** controla los puntos visibles de la cuadrícula. Desactivarlo no desactiva el ajuste.
- **Snap to grid** controla la alineación al colocar y mover objetos. Desactivarlo no oculta la cuadrícula.

Es posible que los puntos de la cuadrícula no se muestren cuando el nivel de zoom sea demasiado bajo para verlos con claridad.

![Cuadro de diálogo Settings con casillas independientes para Show the grid y Snap to grid.](../images/grid-settings.png)

Con los objetos seleccionados, las teclas de flecha los mueven según el espaciado de la cuadrícula cuando el ajuste
está activado. Si el ajuste está desactivado, se mueven en pasos pequeños sin que sus posiciones se
redondeen nuevamente a la cuadrícula. Mantén pulsada la tecla **Ctrl** para usar pasos pequeños, independientemente de la configuración del ajuste.
Si no hay nada seleccionado, las teclas de flecha desplazan la vista.

## Espaciado de la cuadrícula
{: #grid-spacing}

TinyCAD admite 3 modos de espaciado de la cuadrícula:

- **Normal grid spacing**: lo más adecuado para la mayoría de las tareas de edición de esquemas.
- **Fine grid spacing**: mayor densidad de puntos (el doble de puntos), útil
	para anotaciones y dibujo de símbolos.
- **User grid spacing**: valor de espaciado personalizado introducido en el cuadro de diálogo de configuración,
	en mm o pulgadas, según las unidades actuales.

Se recomienda usar **Fine grid** para todos los dibujos.

- Volver a [Dibujo](../User-guide/)
- Volver a [Contenido de v4](../CONTENTS/)
