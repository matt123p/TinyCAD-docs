---
layout: default
---
# Ordenar el diseño
{: #layout-tidy-up}

**Auto-layout** ordena un esquema existente ajustando la posición de los componentes, los cables y las etiquetas. Úselo para facilitar la lectura de un circuito saturado, reducir los codos innecesarios o mejorar el espaciado de las referencias y los valores.

Funciona en la **hoja de esquema actual**, tanto en el navegador como en Desktop App. Conserva las conexiones eléctricas existentes; no deduce qué conexiones pretendía dibujar ni crea un circuito desde cero.

## Abrir Auto-layout
{: #open-auto-layout}

En cualquiera de los dos productos, elija **Auto-layout** en la barra de herramientas, justo al lado de **Simulation**. En Desktop también puede elegir **Tools → Auto-layout**.

Seleccione primero una hoja de esquema. La herramienta no está disponible mientras se edita una biblioteca o se visualiza una hoja de Simulation.

## Elegir qué ordenar
{: #choose-what-to-tidy}

La opción **Apply to** del cuadro de diálogo ofrece:

- **Whole sheet** — ordena los elementos de circuito compatibles de la hoja actual.
- **Selected Items** — ordena solo los elementos de circuito seleccionados, mantiene fijos los elementos fuera de la selección y conserva las conexiones en su límite.

Para trabajar en un área pequeña, seleccione juntos sus componentes y los cables y etiquetas que quiera ajustar antes de abrir el cuadro de diálogo. Selected Items es la opción predeterminada cuando la selección contiene un elemento de circuito compatible. Está deshabilitada si la selección contiene solo objetos no compatibles, como cuadros de notas o formas de dibujo, o si no hay nada seleccionado.

La selección puede incluir símbolos, cables, etiquetas de red, símbolos de alimentación, marcadores de no conexión y uniones. Un componente fuera de la selección no se mueve simplemente por estar conectado a un componente seleccionado.

## Elegir la intensidad
{: #choose-the-strength}

**Strength** controla cuánto puede cambiar la ubicación de los componentes:

| Intensidad | Qué puede cambiar |
| --- | --- |
| **Low** | Mantiene fijos los componentes grandes; los componentes pequeños, los cables y las etiquetas aún pueden moverse. |
| **Medium** | Permite mover hasta dos componentes grandes, además de los componentes pequeños, los cables y las etiquetas. Es la opción predeterminada. |
| **High** | Permite mover todos los componentes aptos, junto con los cables y las etiquetas. |

Empiece con Low si quiere conservar la disposición principal. Use Medium o High cuando el circuito necesite más espacio para reorganizarse. Low no es una opción exclusiva para las etiquetas: también puede cambiar la posición de los componentes pequeños y el trazado de los cables.

El tamaño «grande» se determina a partir de la geometría del símbolo y del número de pines, no de su importancia eléctrica. Cambiar la intensidad no rota, redimensiona ni sustituye los componentes, ni cambia sus referencias, valores o ajustes del modelo.

## Ejecutar y revisar el resultado
{: #run-and-review-the-result}

1. Abra un dibujo o una copia editable de un [ejemplo incluido](../Bundled-Examples/).
2. Seleccione el área que quiera ordenar si desea limitar la operación.
3. Abra **Auto-layout**, elija **Apply to** y **Strength** y, a continuación, seleccione **Go**.
4. Espere mientras se muestra **Arranging layout…**. Si el resultado es satisfactorio, se aplica inmediatamente y el cuadro de diálogo se cierra.
5. Inspeccione el resultado. Use **Undo** para revertir todo el ordenamiento en un solo paso si prefiere la disposición original.

{% include video-player.html src="/v4/videos/simulation/layout-tidy-up.mp4" poster="/v4/videos/simulation/layout-tidy-up.jpg" caption="Abra Auto-layout, elija el ámbito y la intensidad, ordene el ejemplo del amplificador y, después, deshaga el cambio." %}

**Cancel** detiene el cálculo y cierra el cuadro de diálogo sin aplicar los cambios. Si la hoja cambia mientras se ejecuta la herramienta, se descarta el resultado; vuelva a ejecutarla para la hoja actual.

**No layout improvements were found** significa que la herramienta no encontró cambios aceptables dentro del ámbito y la intensidad elegidos. El dibujo queda sin cambios. Puede cerrar el cuadro de diálogo, seleccionar otra área, probar otra intensidad o realizar un ajuste manual.

## Qué mejora la herramienta
{: #what-the-tool-improves}

Auto-layout busca varios tipos de mejora:

- Posiciones más legibles para el texto de referencia/valor de los componentes, manteniendo juntos los campos y apartándolos de los elementos gráficos, los cables y otros textos cercanos.
- Mejores posiciones para las etiquetas de red simples a lo largo de los cables que las sostienen, con etiquetas relacionadas alineadas cuando sea posible.
- Trazados ortogonales más sencillos, desvíos innecesarios más cortos y salidas más claras desde los pines de los componentes.
- Una ubicación más compacta de los componentes conectados y un espaciado regular de los componentes repetidos.
- Trazados paralelos ordenados para cables relacionados cuando sus conexiones y el espacio disponible lo permitan.

No rediseña cuadros de notas, buses, indicadores de puerto con formas, elementos gráficos de bibliotecas ni elementos decorativos de página. Algunos símbolos densos o poco habituales aún requieren ajustes manuales. Un cable más largo puede ser un mejor resultado si deja espacio para una etiqueta o mantiene clara una conexión.

## Comprobar las conexiones antes de ordenar
{: #check-connections-before-tidying}

Auto-layout toma la **conectividad existente del dibujo como punto de partida**. Comprueba tanto la pertenencia a redes eléctricas como las conexiones físicas de los cables antes de aceptar cambios. Las etiquetas de red con nombre no pueden ocultar un cable físicamente interrumpido en esas comprobaciones.

Un cable que pasa por el extremo de otro cable o por un zócalo puede crear una conexión eléctrica incluso sin un punto de unión visible. Si ese contacto es accidental, corríjalo antes de ejecutar Auto-layout: la herramienta no puede determinar que una conexión existente fue un error de dibujo. No mueve uniones ambiguas para conectar redes que antes estaban separadas.

Después de ordenar, inspeccione las ramificaciones, las conexiones a los pines y los trazados alrededor de los zócalos sin usar. Use [Design Rules Check](../Design-Rules-Check/) cuando corresponda y compare el circuito con las conexiones previstas. Si un dibujo de simulación aparece marcado como modificado, [vuelva a ejecutarla](../Simulation/) antes de considerar los resultados anteriores como mediciones del dibujo actual.

## ¿Auto-layout o Point-to-Point Wire?
{: #auto-layout-or-point-to-point-wire}

Use **Auto-layout** para ordenar la geometría que ya existe en el esquema. Use [Point-to-Point Wire](../Wires/#auto-routing) cuando quiera crear una nueva conexión trazada entre dos extremos. La [herramienta Wire](../Wires/#placing-wires) habitual le permite elegir cada codo manualmente.

Vea también [Snap to Grid](../Snap-to-Grid/), [Labels](../Labels/) y [Page Size](../Page-Size/).
