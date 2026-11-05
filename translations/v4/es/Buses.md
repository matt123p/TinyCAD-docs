---
layout: default
---
# Buses
{: #buses}

Un bus es una ayuda de dibujo de esquemas que permite mostrar grupos de señales relacionadas. Los buses
mejoran la legibilidad, especialmente cuando muchos cables similares discurren juntos.

En TinyCAD, la conectividad eléctrica real se establece mediante **cables y etiquetas de red**. Un bus por sí solo no conecta eléctricamente las señales.

## Ejemplo de dibujo
{: #example-drawing}

<img src="/v4/images/Image 1.svg" alt="A example of using Buses" />

<p>
	<a href="/v4/examples/Bus%20Example.dsn" class="btn btn-primary" download>
		<i class="bi bi-download me-1" aria-hidden="true"></i>&nbsp;Descargar
	</a>
</p>


## Flujo de trabajo con buses
{: #bus-workflow}

1. Dibuje la línea del bus por donde deban discurrir las señales agrupadas.
2. Coloque entradas de bus en los puntos donde se bifurquen las señales individuales.
3. Dibuje cables desde cada entrada de bus hasta los pines de los símbolos o los puntos de conexión.
4. Coloque etiquetas en esos cables (por ejemplo, `D0`, `D1`, `D2`...).
5. Repita las etiquetas y los cables en el bus de destino usando los mismos nombres.

Cuando las etiquetas coinciden, esas redes quedan conectadas.

## Objetos de bus en TinyCAD
{: #bus-objects-in-tinycad}

- **Bus**: ruta principal agrupada; útil para organizar muchas conexiones.
- **Entrada de bus**: entrada/salida visual del bus a un único cable.
- **Nombre de bus**: texto a lo largo de un bus (por ejemplo, `Data Bus` o el número de conductores).

Los nombres de bus describen la intención para las personas; las etiquetas de los cables indican la identidad eléctrica de la red para las herramientas.

## Consejos sobre nombres y repetición
{: #naming-and-repeat-tips}

- Mantenga coherentes de un extremo a otro las etiquetas de las señales del bus (`A0..A15`, `D0..D7`, etc.).
- Use las opciones de repetición para agilizar la colocación de entradas y la asignación de etiquetas secuenciales.
- El orden de los nombres de las señales puede variar en cada extremo, siempre que coincidan los nombres.

## Uniones
{: #junctions}

Los buses no requieren puntos de unión en la propia línea del bus.

## Buses y dibujos con varias hojas
{: #buses-and-multi-sheet-drawings}

En distintas hojas, reutilice las mismas etiquetas de señal para conectar las redes correspondientes.
Los gráficos y nombres de bus facilitan la legibilidad, mientras que los nombres de las etiquetas definen la conectividad
para la generación de listas de redes y la verificación de reglas de diseño (DRC).

- Volver a [Dibujo](../User-guide/)
- Volver a [contenido de v4](../CONTENTS/)
