---
layout: default
---
# Controles táctiles
{: #touch-controls}

En una pantalla táctil, puedes editar el dibujo directamente o usar la lupa para
colocar elementos con mayor precisión. Estos controles funcionan en el navegador y
el editor de escritorio.

## Toque directo
{: #direct-touch}

- Toca para seleccionar o colocar un objeto con la herramienta activa.
- Arrastra con un dedo para mover objetos o realizar una selección, igual que con el ratón.
- Mantén un dedo quieto durante aproximadamente un segundo para abrir el menú contextual del dibujo.
- Mueve dos dedos juntos para desplazar el dibujo; sepáralos o júntalos para
  acercar o alejar el lienzo alrededor del gesto.
- Arrastra una vista previa de símbolo desde el panel de biblioteca hasta el dibujo para colocarlo.

## Enrutar cables automáticamente con dos toques
{: #auto-route-wires-with-two-taps}
{: #auto-route-wires}

Usa **Cable de punto a punto (Point-to-Point Wire)** en la barra de herramientas para conectar dos pines, o un pin y un cable existente, sin colocar cada esquina. Toca el punto de conexión inicial y luego toca el destino. TinyCAD elige la ruta y coloca los segmentos de cable.
Esto también resulta útil con un ratón, pero es especialmente práctico en una pantalla táctil porque reduce la cantidad de colocaciones precisas.

Si los extremos son pequeños o están muy juntos, usa el control **Clic (Click)** de la lupa en cada extremo en lugar de tocar directamente los pines. Consulta [enrutamiento automático de cables](../Wires/#auto-routing)
para ver el procedimiento completo y un ejemplo.

## Colocación precisa con la lupa
{: #precise-placement-with-the-loupe}
{: #precise-placement-with-the-loupe}

La lupa amplía el área alrededor de una mira, para que tu dedo no cubra el punto de conexión que intentas alcanzar.

1. Si es necesario, toca el dibujo para mostrar **Mostrar lupa (Show Loupe)** y, a continuación, toca ese botón en la parte inferior del dibujo.
2. Desliza un dedo por el lienzo para orientar la mira. El movimiento es más lento que el de tu dedo, para ofrecer un control más preciso; al levantar el dedo, la mira permanece en su sitio.
3. Usa los controles etiquetados debajo de la lente:

   | Control | Acción |
   |---|---|
   | **Clic (Click)** | Haz clic en la mira para seleccionar un objeto o colocar un punto con la herramienta activa. |
   | **Arrastrar (Drag)** | Comienza a arrastrar desde la mira. Desliza un dedo por el lienzo para mover el puntero. |
   | **Soltar (Drop)** | Finaliza el arrastre. Este control sustituye a **Arrastrar (Drag)** mientras hay un arrastre activo. |
   | **Menú (Menu)** | Abre el menú contextual en la mira. |
   | **Cerrar (Close)** | Cierra la lupa y vuelve al toque directo. |

4. Toca **Ocultar lupa (Hide Loupe)** para volver al toque directo.

![Lupa táctil que muestra un área de conexión ampliada, una mira y los controles Clic, Arrastrar y Menú.](../images/touch-loupe.png)

Por ejemplo, para dibujar un cable, elige **Cable (Wire)**, orienta la mira hacia el pin inicial y toca **Clic (Click)**. Desliza el dedo para orientar la mira hacia el siguiente punto y vuelve a tocar **Clic (Click)**.
Usa **Menú (Menu)** para acceder a los comandos contextuales de la herramienta cuando quieras terminar o cancelar.

El desplazamiento con dos dedos y el zoom mediante pellizco también funcionan con la lupa abierta. Finaliza cualquier arrastre activo con **Soltar (Drop)** antes de cambiar la vista.

- Volver a [Dibujo](../User-guide/)
- Volver a [contenido de v4](../CONTENTS/)
