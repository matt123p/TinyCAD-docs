---
layout: default
title: "4. Transient analysis: charging a capacitor"
---
# 4. Análisis transitorio: carga de un condensador
{: #transient-analysis-charging-a-capacitor}

[Anterior](/v4/SPICE-Tutorial-03/) · [Contenido](/v4/Simulation-Tutorials/) · [Siguiente](/v4/SPICE-Tutorial-05/)

Los ejemplos de este capítulo se incluyen con TinyCAD. Seleccione **Open Example (Abrir ejemplo) → SPICE tutorial**, elija el ejemplo indicado y, a continuación, seleccione **Open Drawing (Abrir dibujo)**. No es necesario descargar nada.

Abra **rc-step**. Una fuente pasa de 0 a 1 V a través de una resistencia de
1 kΩ hasta un condensador de 1 µF. El análisis transitorio guardado dura 5 ms, con un paso máximo
de 5 µs. Represente IN y OUT juntos.


## Vídeo: carga de rc y constante de tiempo
{: #video-rc-charging-and-time-constant}

Ajuste del paso de tiempo máximo y medición de OUT a 1 ms y de la constante de tiempo RC.

{% include video-player.html src="/v4/videos/simulation-tutorials/spice/rc-transient.mp4" poster="/v4/videos/simulation-tutorials/spice/rc-transient.jpg" caption="Carga RC y constante de tiempo." %}

[Ver o descargar el vídeo](/v4/videos/simulation-tutorials/spice/rc-transient.mp4).

### Circuito y resultados de referencia
{: #circuit-and-reference-results}

![Circuito de carga RC](/v4/images/simulation-tutorials/spice/rc-step-circuit.png)

![Curva calculada de carga del condensador](/v4/images/simulation-tutorials/spice/rc-step-results.png)

## Por qué la salida sigue una curva en lugar de dar un salto
{: #why-the-output-curves-rather-than-jumps}

La corriente del condensador es `i = C × dv/dt`. Inmediatamente después de que cambia la entrada, el
condensador sigue cerca de 0 V, por lo que casi toda la tensión de entrada aparece en R1. La
corriente inicial es aproximadamente `1 V / 1 kΩ = 1 mA`. A medida que se carga el condensador,
disminuyen la tensión en la resistencia y la corriente. La salida se aproxima a 1 V en lugar
de alcanzarlo instantáneamente.

La constante de tiempo es `τ = R × C = 1 ms`. Para un escalón ideal y un condensador inicialmente
descargado, `VOUT(t) = 1 − exp(−t/τ)` voltios.

| Tiempo desde el escalón | OUT esperada |
| --- | --- |
| 1 ms = 1τ | 0.632 V |
| 2 ms = 2τ | 0.865 V |
| 3 ms = 3τ | 0.950 V |
| 5 ms = 5τ | 0.993 V |

La fuente suministrada sube durante 1 µs, así que cabe esperar una pequeña diferencia respecto de la
ecuación para un escalón instantáneo. Use el cursor del gráfico o una medición **Value (Valor)**
a 1 ms. Una medición **Time constant (Constante de tiempo)** con valores inicial de 0 V y final de 1 V debería
dar aproximadamente 1 ms. Una medición **Rise time (Tiempo de subida)** usa el intervalo del 10 al 90 %: su
valor esperado es `ln(9) × τ ≈ 2.197 ms`, no 1 ms.

## La duración y el paso máximo responden a preguntas distintas
{: #duration-and-maximum-step-answer-different-questions}

La duración determina cuánto tiempo se ejecuta el experimento. El paso máximo limita el
espaciado del solucionador entre puntos temporales. El solucionador puede dar pasos más pequeños cerca de los
flancos o de eventos no lineales. Por tanto, el número de muestras no tiene por qué ser igual a
la duración dividida por el paso máximo.

Si la duración es demasiado corta, no se verá el asentamiento. Con un paso de tiempo demasiado grande,
los flancos y los picos pueden medirse mal aunque el gráfico parezca plausible. Reduzca
el paso máximo de 5 µs a 2.5 µs y compare la lectura a 1 ms; un resultado estable
debería cambiar muy poco. Esto es una comprobación de convergencia de la medición, no
solo una comprobación de que el solucionador indique que terminó correctamente.

## Condiciones iniciales y energía
{: #initial-conditions-and-energy}

Normalmente, SPICE calcula un punto de operación de CC antes de iniciar el análisis transitorio.
Al marcar **initial conditions (condiciones iniciales)** se solicita la ruta alternativa de inicio con condiciones iniciales
(`uic`). Úsela deliberadamente, con condiciones iniciales apropiadas para el condensador o el inductor;
no es una solución universal para los problemas de convergencia.
Este ejemplo no la necesita porque el valor inicial de la entrada es cero.

A 1 V, el condensador almacena `E = ½CV² = 0.5 µJ`. Durante la carga, R1 disipa
energía y la fuente suministra tanto la energía almacenada como la disipada. La potencia instantánea
y la energía acumulada son mediciones distintas: integre la potencia durante
el intervalo elegido para obtener julios.

Pruebe con 2.2 kΩ, prediga una constante de tiempo de 2.2 ms y amplíe la duración a 11 ms. Después,
restablezca R1 y reduzca C1 a la mitad: la constante de tiempo debería reducirse a la mitad. Estos cambios ilustran
cómo diseñar un experimento que permita distinguir el efecto de un componente de un artefacto
de representación gráfica.

## Descargar los circuitos de la lección
{: #download-the-lesson-circuits}

Los mismos ejemplos ya están disponibles en **Open Example (Abrir ejemplo)**. Para obtener una copia independiente, descargue un dibujo `.dzn` y use **File → Open (Archivo → Abrir)** en TinyCAD. El archivo `.cir` complementario es texto SPICE para inspeccionarlo o usarlo en un simulador externo compatible; no es un dibujo de TinyCAD. Los circuitos XSPICE requieren Desktop para ejecutarse de nuevo.

| Ejemplo | Dibujo | Lista de conexiones |
| --- | --- | --- |
| rc-step | [Dibujo de TinyCAD](/v4/examples/simulation-tutorials/spice/rc-step.dzn) | [Texto SPICE](/v4/examples/simulation-tutorials/spice/rc-step.cir) |
