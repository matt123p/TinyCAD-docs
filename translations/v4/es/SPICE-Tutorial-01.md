---
layout: default
title: "1. SPICE: overview and your first simulation"
---
# 1. SPICE: descripción general y tu primera simulación
{: #spice-overview-and-your-first-simulation}

[Cómo usar los tutoriales](/v4/Tutorial-Start-Here/) · [Contenido del curso](/v4/Simulation-Tutorials/) · [Siguiente: mediciones de CC](/v4/SPICE-Tutorial-02/)

Los ejemplos de este capítulo se incluyen con TinyCAD. Elige **Abrir ejemplo (Open Example) → Tutorial de SPICE (SPICE tutorial)**, selecciona el ejemplo indicado y, a continuación, elige **Abrir dibujo (Open Drawing)**. No hace falta descargar nada.

SPICE calcula el comportamiento eléctrico de un circuito descrito mediante componentes conectados y sus modelos matemáticos. Puede encontrar un punto de polarización de CC, seguir las tensiones y corrientes a lo largo del tiempo o calcular la respuesta en frecuencia de pequeña señal. No deduce un modelo eléctrico a partir del dibujo de un componente. Un símbolo de resistencia necesita un valor de resistencia y una plantilla de SPICE; un transistor también necesita parámetros que describan su comportamiento.

Este curso comienza con circuitos que se pueden comprobar a mano. En capítulos posteriores se reconstruye el `AMP.DSN` original de TinyCAD y se investigan sus limitaciones. El objetivo es aprender a plantear una pregunta precisa, elegir el análisis adecuado y juzgar si la respuesta tiene sentido.

Para obtener una guía sobre el motor, las bibliotecas de símbolos y los controles, consulta
[Cómo implementa TinyCAD SPICE ](/v4/SPICE-Tutorial-11/). Explica la distinción
entre ngspice y XSPICE y muestra paso a paso cómo crear tu propia simulación.

## Abrir y ejecutar el primer circuito
{: #open-and-run-the-first-circuit}

Abre **divider**. Su fuente de 5 V alimenta dos resistencias de 1 kΩ
conectadas en serie. La etiqueta `OUT` da nombre a su unión; `IN` da nombre a la alimentación.


1. Usa **Abrir ejemplo (Open Example) → Tutorial de SPICE (SPICE tutorial)**, selecciona **divider** y, a continuación, elige **Abrir dibujo (Open Drawing)**.
2. Selecciona la hoja Simulation. El análisis guardado es **Punto de operación (Operating Point)**.
3. Elige **Ejecutar (Run)**. Si los gráficos están ocultos, usa **Simulación (Simulation) → Mostrar gráficos (Show charts)**.
4. Inspecciona `in`, `out` y `v1#branch`. Un punto de operación contiene un valor por señal, por lo que una lectura numérica resulta más útil que un gráfico temporal.
5. Selecciona R2 en la hoja Circuit, cambia **Valor (Value)** de `1k` a `2k` y vuelve a ejecutar la simulación. Restablece `1k` antes de continuar o vuelve a abrir **divider** desde **Abrir ejemplo (Open Example)**.

La adquisición de referencia incluida te permite inspeccionar los resultados de inmediato. Después de editar el circuito, vuelve a ejecutar la simulación: los resultados conservados describen el circuito tal como estaba en el momento de la adquisición.
Al guardar se conservan la configuración y los resultados guardados; **Guardar sin resultados (Save without results)** crea una copia más pequeña para compartir, conservando el circuito y los ajustes de simulación.

Los gráficos del punto de operación contienen un único punto; para obtener lecturas precisas, usa los datos numéricos.

## Vídeo: abrir, ejecutar y modificar un divisor
{: #video-open-run-and-change-a-divider}

Abrir el ejemplo integrado, comprobar los valores de CC, cambiar R2 y ejecutar una nueva adquisición.

{% include video-player.html src="/v4/videos/simulation-tutorials/spice/first-run.mp4" poster="/v4/videos/simulation-tutorials/spice/first-run.jpg" caption="Abrir, ejecutar y modificar un divisor." %}

[Ver o descargar el vídeo](/v4/videos/simulation-tutorials/spice/first-run.mp4).

### Circuito y resultados de referencia
{: #circuit-and-reference-results}

![Circuito divisor de tensión generado a partir del dibujo guardado](/v4/Images/simulation-tutorials/spice/divider-circuit.png)

## Predice el resultado
{: #predict-the-answer}

La corriente es `I = 5 / (1000 + 1000) = 2.5 mA`. Por tanto, la resistencia inferior tiene `VOUT = I × 1000 = 2.5 V`. Al cambiar R2 a 2 kΩ, la ecuación del divisor da `VOUT = 5 × 2000 / (1000 + 2000) = 3.333 V`.

![Resultados calculados del punto de operación](/v4/Images/simulation-tutorials/spice/divider-results.png)

La corriente de la fuente es −2,5 mA. No se trata de un error de cableado: SPICE define la corriente de la fuente como entrante por su terminal positivo. Según esta convención, una fuente que suministra energía tiene corriente negativa. En el capítulo 2 se utiliza el signo para calcular correctamente la potencia.

## Cuatro fundamentos
{: #four-foundations}

- **La masa es el nodo `0`.** Las tensiones son diferencias; el solucionador necesita una referencia.
  Un cable con la etiqueta `GND` no la sustituye, a menos que esté conectado realmente a la masa de SPICE. Usa la herramienta **Insertar masa (Insert Ground)** de TinyCAD.
- **La conectividad es eléctrica.** Un punto de unión conecta las ramas. Los cables que se cruzan sin conexión no necesariamente se unen. Las etiquetas de red idénticas conectan puntos distantes; una nota de texto cercana no lo hace.
- **Las unidades y los prefijos importan.** Usa `1k`, `10u`, `100n` y `1Meg` en los valores de SPICE.
  En SPICE, `m` significa mili, no mega. Los controles de fuentes de TinyCAD también aceptan valores con unidades, como `1kHz` y `5ms`.
- **Los modelos tienen un alcance definido.** Una resistencia ideal no tiene inductancia parásita ni falla térmica, a menos que esos efectos se modelen explícitamente.

## Elige el análisis que responde a la pregunta
{: #choose-the-analysis-that-answers-the-question}

| Pregunta | Análisis |
| --- | --- |
| ¿A qué valores se estabilizan las tensiones y corrientes de CC? | Punto de operación (Operating Point) |
| ¿Qué ocurre tras un escalón o durante una forma de onda? | Transitorio (Transient) |
| ¿Cómo varía con la frecuencia la ganancia de pequeña señal? | CA (AC) |
| ¿Cómo cambia la solución de CC al variar una fuente? | Barrido de CC (DC sweep) |
| ¿Qué ruido llega a una salida en una banda de frecuencias? | Ruido (Noise) |
| ¿Cuáles son la ganancia de pequeña señal en CC y las resistencias de puerto? | Función de transferencia (Transfer function) |
| ¿Dónde están los polos y ceros del sistema linealizado? | Polos y ceros (Pole-zero) |

Que una simulación converja es solo el comienzo de la validación. Comprueba la polaridad, las unidades, la carga y el tipo de análisis comparándolos con una estimación sencilla.

Para ampliar la información: el [tutorial oficial para principiantes de ngspice](https://ngspice.sourceforge.io/ngspice-tutorial.html)
ofrece una introducción complementaria basada en netlists.

## Descargar los circuitos de la lección
{: #download-the-lesson-circuits}

Los mismos ejemplos ya están disponibles en **Abrir ejemplo (Open Example)**. Si quieres una copia independiente, descarga un dibujo de `.dzn` y usa **Archivo (File) → Abrir (Open)** en TinyCAD. El archivo complementario `.cir` contiene texto SPICE para inspeccionarlo o usarlo en un simulador externo compatible; no es un dibujo de TinyCAD. Para ejecutar de nuevo circuitos XSPICE se necesita Desktop.

| Ejemplo | Dibujo | Netlist |
| --- | --- | --- |
| divider | [Dibujo de TinyCAD](/v4/examples/simulation-tutorials/spice/divider.dzn) | [Texto de SPICE](/v4/examples/simulation-tutorials/spice/divider.cir) |
