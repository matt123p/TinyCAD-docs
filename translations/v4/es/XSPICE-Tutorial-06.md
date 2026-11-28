---
layout: default
title: 6. Mixed-signal filtering and unknown states
---
# 6. Filtrado de señales mixtas y estados desconocidos
{: #mixed-signal-filtering-and-unknown-states}

[Anterior](/v4/XSPICE-Tutorial-05/) · [Contenido del curso](/v4/Simulation-Tutorials/)

Los ejemplos de este capítulo se incluyen con TinyCAD. Elija **Open Example → XSPICE and digital tutorial**, seleccione el ejemplo indicado y, a continuación, elija **Open Drawing**. No es necesario descargar nada.

Abra **logic-filter**. Un tren de pulsos de 0–5 V y 10 kHz
pasa por el búfer XSPICE y el puente DAC y, después, acciona un filtro paso bajo
SPICE físico de 1 kΩ/1 µF. El nivel alto dura 25 µs en un período de 100 µs, por lo que
el ciclo de trabajo nominal es de aproximadamente el 25 %. Los flancos de entrada finitos hacen que el ciclo de trabajo
preciso, definido por umbral, sea ligeramente distinto.

![Circuito de filtro digital y analógico mixto](/v4/Images/simulation-tutorials/xspice/logic-filter-circuit.png)
![PWM calculada y salida filtrada](/v4/Images/simulation-tutorials/xspice/logic-filter-results.png)

Ejecute el análisis transitorio de 5 ms. Trace A, Y y FILTERED. La ruta digital conserva la
función de pulso; la red RC calcula su promedio, conservando parte del rizado.
El promedio a largo plazo se aproxima a `5 V × 0.25 ≈ 1.25 V`. Como τ = 1 ms,
el arranque tarda varios milisegundos.

## Medir con rigor una adquisición finita
{: #measure-the-finite-acquisition-honestly}

En la ventana de 4–5 ms, la media de referencia de la señal filtrada es de aproximadamente **1.242 V**, con
un rizado pico a pico de aproximadamente **0.108 V** (alrededor de 1.187–1.295 V). Todavía no
ha alcanzado del todo el promedio ideal a largo plazo. Amplíe la duración a 10 ms y compare
la ventana final de 1 ms. Una constante de tiempo de filtrado mayor reduce el rizado, pero aumenta
el tiempo de establecimiento, igual que en las lecciones de circuitos RC analógicos.

Este es un modelo útil para comprender la conversión de PWM a tensión. No es
un modelo completo de la salida de un microcontrolador: el puente DAC tiene una capacidad de excitación de salida idealizada y no define explícitamente el límite de corriente de alimentación. Añada una resistencia de salida adecuada
o un modelo del dispositivo cuando sean importantes la corriente de carga y las pérdidas de la etapa de salida.

## Explorar un nivel lógico indefinido
{: #explore-an-undefined-logic-level}

Abra **logic-unknown**. Su entrada PWL se mantiene en
0 V, luego en 2 V y después en 5 V. Ejecute 3 µs e inspeccione la meseta intermedia.

![Representación analógica calculada de un estado digital indefinido](/v4/Images/simulation-tutorials/xspice/logic-unknown-results.png)

Los umbrales bajo y alto del puente ADC son 1 V y 3 V. La meseta de 2 V queda
entre ellos, por lo que la entrada controlada por eventos queda indefinida. Ese estado desconocido se propaga
a través del búfer. El puente DAC lo asigna a **2.5 V** porque su parámetro `out_undef`
solicita explícitamente ese nivel de visualización.

No interprete esos 2.5 V como una predicción de que una puerta física se mantendrá
a la mitad de la tensión de alimentación. Es una codificación elegida para hacer visible el estado desconocido en un gráfico
analógico. El modelo tampoco reproduce el traqueteo por umbral inducido por ruido
ni la física de la metastabilidad. Un receptor de entrada real puede requerir
histéresis, una familia de umbrales especificada y un modelo eléctrico más detallado.

## Lista de comprobación para señales mixtas
{: #a-mixed-signal-checklist}

Antes de confiar en un experimento, identifique qué conexiones transportan tensiones y
corrientes y cuáles transportan eventos. Identifique todas las conversiones entre dominios.
Registre los umbrales, la asignación de estados indefinidos, los retardos de propagación, los tiempos de flanco de salida
y las condiciones iniciales. Compruebe tanto la función en régimen permanente como el comportamiento durante las transiciones. Use una adquisición lo bastante larga para incluir los ciclos o la ventana de establecimiento
que requiera la medición.

El mismo enfoque se aplica a un comparador que alimenta lógica digital, a un reloj dividido que controla un interruptor o a una forma de onda lógica que acciona un filtro analógico.
En los enlaces de [HOWTO oficial de XSPICE](https://ngspice.sourceforge.io/xspicehowto.html) encontrará aplicaciones XSPICE más complejas, incluidos ejemplos de bucles de enganche de fase y delta-sigma.
Empiece por validar cada dominio y cada interfaz por separado antes de ensamblar el sistema completo.

Ya ha utilizado puertas funcionales, peligros, almacenamiento, reinicio, conteo y una ruta analógica/digital mixta. Para estudiar la potencia eléctrica, el comportamiento no lineal de los amplificadores
y la respuesta en frecuencia, vuelva al [curso de SPICE](/v4/SPICE-Tutorial-01/).

## Descargar los circuitos de la lección
{: #download-the-lesson-circuits}

Los mismos ejemplos ya están disponibles en **Open Example**. Para obtener una copia independiente, descargue un dibujo `.dzn` y use **File → Open** en TinyCAD. El archivo complementario `.cir` es texto SPICE para inspeccionarlo o usarlo en un simulador externo compatible; no es un dibujo de TinyCAD. Los circuitos XSPICE requieren Desktop para ejecutar nuevas simulaciones.

| Ejemplo | Dibujo | Lista de conexiones |
| --- | --- | --- |
| logic-filter | [Dibujo de TinyCAD](/v4/examples/simulation-tutorials/xspice/logic-filter.dzn) | [Texto SPICE](/v4/examples/simulation-tutorials/xspice/logic-filter.cir) |
| logic-unknown | [Dibujo de TinyCAD](/v4/examples/simulation-tutorials/xspice/logic-unknown.dzn) | [Texto SPICE](/v4/examples/simulation-tutorials/xspice/logic-unknown.cir) |
