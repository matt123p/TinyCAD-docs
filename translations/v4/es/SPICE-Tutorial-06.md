---
layout: default
title: 6. Diodes, rectification and ripple
---
# 6. Diodos, rectificación y rizado
{: #diodes-rectification-and-ripple}

[Anterior](/v4/SPICE-Tutorial-05/) · [Contenido](/v4/Simulation-Tutorials/) · [Siguiente](/v4/SPICE-Tutorial-07/)

Los ejemplos de este capítulo se incluyen con TinyCAD. Elija **Open Example → SPICE tutorial**, seleccione el ejemplo indicado y, a continuación, elija **Open Drawing**. No es necesario descargar nada.

Abra **rectifier**. Una señal sinusoidal de 5 V de pico y 50 Hz alimenta un
diodo, un condensador de reserva de 100 µF y una carga de 1 kΩ. Ejecute el análisis transitorio guardado de 200 ms y trace IN y OUT.


## Siga la corriente a lo largo de un ciclo
{: #follow-the-current-through-a-cycle}

Cuando la entrada supera suficientemente la tensión del condensador, el diodo
conduce y repone la carga del condensador. Después del pico de entrada, el
diodo se bloquea. El condensador alimenta entonces la carga y su tensión cae
hasta el siguiente intervalo de carga. Los semiciclos negativos de entrada no
hacen que la tensión del condensador sea negativa, porque el diodo bloquea la
conducción inversa a estas tensiones.

El diodo no es un interruptor ideal con una caída fija de 0,7 V. Su modelo `TC_D`
incorporado incluye una ley no lineal de corriente/tensión y una resistencia
en serie. La caída en directa varía con la corriente, la temperatura y los
parámetros del modelo. El tutorial usa un modelo genérico, que no garantiza el
comportamiento de un diodo adquirido.

## Mida un intervalo estabilizado
{: #measure-a-settled-window}

Los primeros ciclos incluyen el arranque. Para medir el rizado de forma
reproducible, use **From = 160 ms** y **To = 200 ms**. La simulación de referencia da:

| Medición en OUT | Resultado aproximado |
| --- | --- |
| Tensión media | 3.90 V |
| Mínimo | 3.56 V |
| Máximo | 4.24 V |
| Rizado pico a pico | 0.684 V |
| RMS total | 3.908 V |

La media es el nivel de CC. El RMS total incluye ese nivel y el rizado.
El **RMS del rizado** elimina la media antes de calcular el RMS; por tanto, es
una magnitud distinta. Un RMS total alto no implica un rizado de CA grande.

La estimación aproximada `ΔV ≈ Iload / (f × C)` da unos 0.78 V usando 3.9 mA,
50 Hz y 100 µF. La diferencia respecto a los 0.684 V simulados es instructiva:
supone una corriente de carga prácticamente constante y una recarga instantánea,
mientras que la corriente por la resistencia cambia y el diodo conduce durante
un intervalo finito.

## Vídeo: medir el rizado estabilizado del rectificador
{: #video-measuring-settled-rectifier-ripple}

Ajustar una ventana de medición de 160–200 ms y comparar la tensión media con el rizado pico a pico.

{% include video-player.html src="/v4/videos/simulation-tutorials/spice/rectifier-ripple.mp4" poster="/v4/videos/simulation-tutorials/spice/rectifier-ripple.jpg" caption="Medición del rizado estabilizado del rectificador." %}

[Ver o descargar el vídeo](/v4/videos/simulation-tutorials/spice/rectifier-ripple.mp4).

### Circuito y resultados de referencia
{: #circuit-and-reference-results}

![Rectificador de media onda y condensador de reserva](/v4/Images/simulation-tutorials/spice/rectifier-circuit.png)

![Rizado calculado durante el arranque y en régimen permanente](/v4/Images/simulation-tutorials/spice/rectifier-results.png)

## Experimentos que muestran las ventajas y desventajas
{: #experiments-that-reveal-the-trade-offs}

Duplique C1 a 200 µF. El rizado debería disminuir, pero la carga se produce en
impulsos más breves y concentrados. Reduzca a la mitad la resistencia de carga,
a 500 Ω: la carga consume más corriente, la tensión media disminuye y el rizado
aumenta. Para inspeccionar la corriente del diodo, solicite la medición de
corriente del componente, si está disponible, o inserte una sonda de corriente
en serie en el trayecto del diodo. Reduzca el paso de tiempo máximo para comprobar
que se resuelven los picos breves de conducción.

La fuente utilizada aquí es ideal. Un transformador, generador o fuente de
alimentación real tiene una impedancia que modifica la corriente de carga y la
caída de tensión. Añada una resistencia en serie para explorar ese efecto. La
potencia de los componentes y la corriente de pico son resultados útiles de la
simulación, pero este modelo sencillo no predice automáticamente el calentamiento
del condensador, los valores nominales de sobretensión ni la temperatura de la
unión del diodo.

## Por qué el análisis de CA no es la primera prueba adecuada
{: #why-ac-analysis-is-not-the-right-first-test}

El comportamiento principal consiste en una gran excursión no lineal en la que
la conducción se activa y se desactiva. Un análisis de CA de pequeña señal en
torno a un punto de polarización no puede reproducir la rectificación, el
arranque ni el rizado. Para esas cuestiones, use el análisis transitorio. En
cambio, los barridos de CC son útiles para trazar la característica estática de
corriente/tensión de un diodo. Seleccione el análisis según la cuestión física,
y no según el gráfico que resulte más fácil de generar.

## Descargar los circuitos de la lección
{: #download-the-lesson-circuits}

Los mismos ejemplos ya están disponibles en **Open Example**. Para obtener una
copia independiente, descargue un dibujo `.dzn` y use **File → Open** en TinyCAD. El archivo complementario `.cir` es texto SPICE para inspeccionarlo o utilizarlo en un simulador externo compatible, no un dibujo de TinyCAD. Para ejecutar circuitos XSPICE desde cero se requiere Desktop.

| Ejemplo | Dibujo | Lista de conexiones |
| --- | --- | --- |
| rectifier | [Dibujo de TinyCAD](/v4/examples/simulation-tutorials/spice/rectifier.dzn) | [Texto SPICE](/v4/examples/simulation-tutorials/spice/rectifier.cir) |
