---
layout: default
---
# Cables
{: #wires}

Los cables son las conexiones eléctricamente activas de un esquema de TinyCAD.

Si necesita conectividad para la comprobación de reglas de diseño (DRC), la generación de listas de conexiones (netlist), la exportación a SPICE/PCB o los
vínculos entre hojas, use objetos de cable (no líneas de anotación).

## Por qué son importantes los cables
{: #why-wires-matter}

- Los cables definen redes eléctricas.
- Los cables se ajustan a los pines de los símbolos y a otros puntos de conexión válidos.
- TinyCAD utiliza la conectividad de los cables para comprobar reglas y generar resultados.

El uso de líneas de anotación en lugar de cables puede parecer correcto visualmente, pero las herramientas considerarán que el circuito está desconectado.

## Modos de trazado de cables
{: #wire-routing-modes}
{: #wire-routing-modes}

En TinyCAD v4.0.11, use el selector junto a Cable para elegir cómo se dibujan los nuevos segmentos.

| Modo | Comportamiento |
|---|---|
| **90°** | Trazado horizontal y vertical. |
| **45°** | Trazado restringido a las direcciones de 45° de TinyCAD. |
| **Libre** | Segmentos rectos en cualquier ángulo. |

Al elegir un modo, se activa Cable y se conserva cualquier vista previa de cable activa. Puede cambiar de modo antes de colocar el siguiente segmento. El ajuste a la cuadrícula sigue siendo una opción independiente. Para el trazado automático entre dos puntos de conexión, use la herramienta vecina [Cable punto a punto](#auto-routing).

![Selector de la barra de herramientas para cables que muestra las opciones 90°, 45° y Libre.](../images/wire-routing-modes.png)

## Colocación de cables
{: #placing-wires}
{: #placing-wires}

1. Seleccione la herramienta Cable.
2. Haga clic para comenzar desde un punto de conexión válido, aunque no es estrictamente necesario. Puede colocar un cable en cualquier lugar. Sabrá si el punto de conexión es válido porque un círculo rojo indicará la conexión.
3. Haga clic para colocar las esquinas o los segmentos que necesite.
4. Termine en otro punto de conexión válido O BIEN
5. Haga clic con el botón derecho para salir del modo de cableado.


{% include video-player.html
	src="/v4/images/video/Video 4.mp4"
	width=1602
	height=696
	caption="Vídeo explicativo que muestra cómo colocar cables."
%}

<p>
	<a href="/v4/examples/Simple%20Drawing.dsn" class="btn btn-primary" download>
		<i class="bi bi-download me-1" aria-hidden="true"></i>&nbsp;Descargar
	</a>
</p>


## Trazado automático con Cable punto a punto
{: #auto-routing-with-point-to-point-wire}
{: #auto-routing}

**Cable punto a punto** elige una ruta entre dos puntos de conexión y coloca
los segmentos de cable por usted. Es útil para el trabajo cotidiano con el ratón y, especialmente, en una pantalla táctil, donde es más fácil tocar dos extremos que colocar cada esquina.

1. Seleccione **Cable punto a punto**, junto al selector de modo Cable de la barra de herramientas.
2. Haga clic o toque el pin de inicio de un símbolo o un cable existente. Un círculo rojo marca
   un punto de conexión válido.
3. Mueva el cursor al pin o cable de destino para obtener una vista previa de la ruta automática.
4. Haga clic o toque el destino para colocar la conexión completa. TinyCAD selecciona
   los nuevos segmentos de cable y sale de la herramienta de trazado. Seleccione **Cable
   punto a punto** de nuevo para crear otra conexión.

A diferencia de la herramienta Cable normal, ambos extremos deben ser puntos de conexión válidos;
si hace clic en un espacio vacío, no se coloca una esquina. Haga clic con el botón derecho para cancelar una ruta sin terminar. Si quiere elegir las esquinas usted mismo, use [Cable](#placing-wires).

Pruebe el [dibujo de ejemplo de trazado automático](../examples/Auto-route%20example.dsn).
La resistencia y el LED están en la cuadrícula y la conexión entre ellos está sin completar.

Primero, seleccione Cable punto a punto y elija el pin derecho de R1.

![1. Empiece con R1 y D1 desconectados. El círculo rojo marca el pin de inicio de R1.](../images/wire-auto-route-start.png){: width="435" style="max-width: 50%;"}

A continuación, apunte al pin superior de D1. La vista previa muestra la ruta y su esquina antes de
confirmarla.

![2. Obtenga una vista previa de la ruta automática hasta D1. El círculo rojo marca el pin de destino.](../images/wire-auto-route.png){: width="435" style="max-width: 50%;"}

Por último, haga clic o toque el pin de D1. TinyCAD coloca todos los segmentos en una sola operación.

![3. Confirme el destino para colocar la conexión completa, incluida su esquina.](../images/wire-auto-route-complete.png){: width="435" style="max-width: 50%;"}

En una pantalla táctil, puede tocar directamente los dos extremos. Para pines pequeños o muy juntos,
use la [lupa](../Touch-controls/#precise-placement-with-the-loupe): apunte
a cada extremo y pulse **Clic**. No es necesario arrastrar a lo largo de la ruta ni
tocar sus esquinas. Compruebe la conexión terminada y ajuste sus segmentos si es necesario.

## Ajuste y uniones
{: #snapping-and-junctions}

- Los cables se atraen magnéticamente a los pines y a los cables existentes.
- Las uniones se añaden automáticamente cuando es necesario.
- Los cables que se cruzan no se conectan a menos que haya una unión.

## Ordenar un diseño existente
{: #tidying-an-existing-layout}

Use [Ordenar diseño (Auto-layout)](../Layout-Tidy-Up/) para reorganizar los componentes, cables y etiquetas existentes en una hoja completa o dentro de una selección. Cable punto a punto crea una conexión nueva; Auto-layout ordena las conexiones existentes.

## Edición de cables
{: #editing-wires}

Para editar un cable, simplemente haga clic en él. Ahora puede arrastrar el segmento de cable completo arrastrándolo directamente, o mover sus extremos arrastrando los cuadros de movimiento.

- Volver a [Dibujo](../User-guide/)
- Volver al [índice de v4](../CONTENTS/)
