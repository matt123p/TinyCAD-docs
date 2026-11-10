---
layout: default
---
# Cables
{: #wires}

Los cables son las conexiones eléctricamente activas de un esquema de TinyCAD.

Si necesita conectividad para la comprobación de reglas de diseño (DRC), la generación de listas de conexiones, la exportación a SPICE/PCB o los
vínculos entre hojas, utilice objetos de cable (no líneas de anotación).

## Por qué son importantes los cables
{: #why-wires-matter}

- Los cables definen redes eléctricas.
- Los cables se ajustan a los pines de los símbolos y a otros puntos de conexión válidos.
- TinyCAD utiliza la conectividad de los cables para comprobar las reglas y generar los archivos de salida.

El uso de líneas de anotación en lugar de cables puede parecer correcto visualmente, pero las herramientas considerarán que el circuito está desconectado.

## Modos de trazado de cables
{: #wire-routing-modes}

En TinyCAD v4.0.11, use el selector situado junto a Cable (Wire) para elegir cómo se dibujan los nuevos segmentos.

| Modo | Comportamiento |
|---|---|
| **90°** | Trazado horizontal y vertical. |
| **45°** | Trazado limitado a las direcciones de 45° de TinyCAD. |
| **Libre (Free)** | Segmentos rectos con cualquier ángulo. |

Elegir un modo activa Cable y conserva la vista previa del cable en curso. Puede cambiar de modo antes de colocar el siguiente segmento. El ajuste a la cuadrícula sigue siendo una opción independiente. La herramienta contigua de cableado punto a punto es independiente de este selector.

![Selector de la barra de cables con las opciones 90°, 45° y Libre (Free).](../images/wire-routing-modes.png)

## Colocación de cables
{: #placing-wires}

1. Seleccione la herramienta Cable.
2. Haga clic para iniciar desde un punto de conexión válido, aunque no es estrictamente necesario. Puede colocar un cable en cualquier lugar. Sabrá si el punto de conexión es válido porque un círculo rojo indicará la conexión.
3. Haga clic para colocar esquinas o segmentos según sea necesario.
4. Termine en otro punto de conexión válido O
5. Haga clic con el botón derecho para finalizar el modo de cableado.


{% include video-player.html
	src="/v4/images/video/Video 4.mp4"
	width=1602
	height=696
	caption="Tutorial en vídeo que muestra cómo colocar cables."
%}

<p>
	<a href="/v4/examples/Simple%20Drawing.dsn" class="btn btn-primary" download>
		<i class="bi bi-download me-1" aria-hidden="true"></i>&nbsp;Descargar
	</a>
</p>


## Ajuste y uniones
{: #snapping-and-junctions}

- Los cables se ajustan magnéticamente a los pines y a los cables existentes.
- Las uniones se añaden automáticamente cuando es necesario.
- Los cables que se cruzan no están conectados a menos que haya una unión.

## Edición de cables
{: #editing-wires}

Para editar un cable, simplemente haga clic en él. Ahora puede arrastrar el segmento de cable completo arrastrando el propio cable, o mover sus extremos arrastrando los cuadros de movimiento.

- Volver a [Dibujo](../User-guide/)
- Volver a [Contenido de v4](../CONTENTS/)
