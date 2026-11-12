---
layout: default
---
# Cables
{: #wires}

Los cables son las conexiones eléctricamente activas de un esquema de TinyCAD.

Si necesita conectividad para la comprobación de reglas de diseño (DRC), la generación de listas de conexiones, la exportación a SPICE/PCB o
la vinculación entre hojas, utilice objetos de cable (no líneas de anotación).

## Por qué son importantes los cables
{: #why-wires-matter}

- Los cables definen las redes eléctricas.
- Los cables se ajustan a los pines de los símbolos y a otros puntos de conexión válidos.
- TinyCAD utiliza la conectividad de los cables para comprobar reglas y generar resultados.

El uso de líneas de anotación en lugar de cables puede parecer correcto visualmente, pero las herramientas considerarán que el circuito está desconectado.

## Modos de trazado de cables
{: #wire-routing-modes}
{: #wire-routing-modes}

En TinyCAD v4.0.11, utilice el selector situado junto a Cable (Wire) para elegir cómo se dibujan los nuevos segmentos.

| Modo | Comportamiento |
|---|---|
| **90°** | Trazado horizontal y vertical. |
| **45°** | Trazado restringido a las direcciones de 45° de TinyCAD. |
| **Libre** | Segmentos rectos en cualquier ángulo. |

Al elegir un modo, se activa la herramienta Cable y se conserva cualquier vista previa de cable activa. Puede cambiar de modo antes de colocar el siguiente segmento. El ajuste a la cuadrícula es una opción independiente. Para el trazado automático entre dos puntos de conexión, utilice la [herramienta Cable punto a punto](#auto-routing) adyacente.

![Selector de la barra de herramientas de cables que muestra las opciones 90°, 45° y Libre.](../images/wire-routing-modes.png)

## Colocación de cables
{: #placing-wires}
{: #placing-wires}

1. Seleccione la herramienta Cable.
2. Haga clic para iniciar desde un punto de conexión válido, aunque no es estrictamente necesario. Puede colocar un cable en cualquier lugar. Sabrá si el punto de conexión es válido porque un círculo rojo indicará la conexión.
3. Haga clic para colocar las esquinas o los segmentos que necesite.
4. Termine en otro punto de conexión válido O
5. Haga clic con el botón derecho para finalizar el modo de cableado.


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

**Cable punto a punto (Point-to-Point Wire)** elige una ruta entre dos puntos de conexión y coloca los segmentos de cable por usted. Es útil para el trabajo habitual con el ratón y, especialmente, en una pantalla táctil, donde resulta más fácil tocar dos extremos que colocar cada esquina.

1. Seleccione **Cable punto a punto (Point-to-Point Wire)**, junto al selector del modo Cable en la barra de herramientas.
2. Haga clic o toque el pin de símbolo inicial o un cable existente. Un círculo rojo indica
   que se trata de un punto de conexión válido.
3. Desplácese hasta el pin o cable de destino para obtener una vista previa de la ruta automática.
4. Haga clic o toque el destino para colocar la conexión completa. TinyCAD selecciona
   los nuevos segmentos de cable y sale de la herramienta de trazado. Vuelva a seleccionar **Cable punto a punto
   (Point-to-Point Wire)** para realizar otra conexión.

A diferencia de la herramienta Cable normal, ambos extremos deben ser puntos de conexión válidos;
hacer clic en un espacio vacío no coloca una esquina. Haga clic con el botón derecho para cancelar una ruta sin terminar. Si quiere elegir las esquinas usted mismo, utilice [Cable](#placing-wires).

Pruebe el [dibujo de ejemplo de trazado automático](../examples/Auto-route%20example.dsn). La resistencia y el LED están en la cuadrícula, con la conexión entre ambos aún abierta.

Primero, seleccione Point-to-Point Wire y elija el pin derecho de R1.

![1. Comience con R1 y D1 sin conectar entre sí. El círculo rojo marca el pin inicial de R1.](../images/wire-auto-route-start.png){: width="435" style="max-width: 50%;"}

Después, apunte al pin superior de D1. La vista previa muestra el recorrido y su esquina antes de confirmar la conexión.

![2. Previsualice el trazado automático hasta D1. El círculo rojo marca el pin de destino.](../images/wire-auto-route.png){: width="435" style="max-width: 50%;"}

Por último, haga clic o toque el pin de D1. TinyCAD coloca todos los segmentos en una sola operación.

![3. Confirme el destino para colocar la conexión completa, incluida su esquina.](../images/wire-auto-route-complete.png){: width="435" style="max-width: 50%;"}

En una pantalla táctil, puede tocar directamente los dos extremos. Para pines pequeños o muy juntos,
utilice la [lupa](../Touch-controls/#precise-placement-with-the-loupe): apunte
a cada extremo y pulse **Hacer clic**. No es necesario arrastrar a lo largo de la ruta ni tocar sus esquinas. Compruebe la conexión completada y ajuste sus segmentos si es necesario.

## Ajuste y uniones
{: #snapping-and-junctions}

- Los cables se ajustan magnéticamente a los pines y a los cables existentes.
- Las uniones se añaden automáticamente cuando es necesario.
- Los cables que se cruzan no se conectan a menos que haya una unión.

## Edición de cables
{: #editing-wires}

Para editar un cable, simplemente haga clic en él. A continuación, puede arrastrar el propio cable para mover todo el segmento, o arrastrar los cuadros de movimiento para mover sus extremos.

- Volver a [Dibujo](../User-guide/)
- Volver a [contenido de v4](../CONTENTS/)
