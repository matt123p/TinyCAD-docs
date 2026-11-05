---
layout: default
---
# Símbolos de alimentación
{: #power-symbols}

Los símbolos de alimentación indican la conexión a redes de alimentación con nombre, como `GND`, `+5V`,
`VCC` o `+3V3`.

Todos los símbolos de alimentación con el mismo nombre se consideran conectados eléctricamente.

{% include video-player.html
	src="/v4/images/video/Video 5.mp4"
	width=1596
	height=700
	caption="Vídeo explicativo que muestra cómo colocar símbolos de alimentación."
%}

<p>
	<a href="/v4/examples/Simple%20Drawing.dsn" class="btn btn-primary" download>
		<i class="bi bi-download me-1" aria-hidden="true"></i>&nbsp;Descargar
	</a>
</p>

## Cómo funcionan los símbolos de alimentación
{: #how-power-symbols-work}

- La conectividad de la red se basa en el **nombre de alimentación**.
- La **forma** es solo visual y no cambia la conectividad.
- Las opciones de orientación y forma sirven para mejorar la legibilidad y definir el estilo de dibujo.

Use nombres coherentes en todo el diseño para evitar dividir las redes de alimentación.

## Reglas de colocación
{: #placement-rules}

1. Seleccione la herramienta Alimentación (Power).
2. Elija la orientación, la forma y el nombre.
3. Coloque el símbolo y conecte el cable al extremo del pin del símbolo.

Conecte los cables al extremo del pin del símbolo de alimentación (no solo cerca del gráfico) para que se reconozca la
conexión.

## Pines de alimentación ocultos en los símbolos
{: #hidden-power-pins-on-symbols}

Algunos símbolos de biblioteca usan pines de alimentación ocultos (por ejemplo, muchas familias lógicas).
Estos pines se conectan automáticamente a las redes de alimentación con nombres coincidentes.

Use los mismos nombres que espera la biblioteca de símbolos (por ejemplo, `VCC`/`GND` cuando
sea necesario) para que las conexiones automáticas de alimentación funcionen correctamente.

## Edición y estilos
{: #editing-and-styles}

Puede cambiar la forma de un símbolo de alimentación seleccionándolo y, a continuación, eligiendo una nueva forma en
la barra de herramientas.

## Comportamiento en varias hojas
{: #multi-sheet-behavior}

Los nombres de las redes de alimentación son globales dentro del contexto de diseño usado para generar la lista de conexiones.
El uso de nombres coherentes en todas las hojas garantiza la conectividad de alimentación prevista.

- Volver a [Dibujo](../User-guide/)
- Volver a [contenido de v4](../CONTENTS/)
