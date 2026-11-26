---
layout: default
title: 8. Measuring amplifier gain and bandwidth
---
# 8. Medición de la ganancia y el ancho de banda del amplificador
{: #measuring-amplifier-gain-and-bandwidth}

[Anterior](/v4/SPICE-Tutorial-07/) · [Contenido](/v4/Simulation-Tutorials/) · [Siguiente](/v4/SPICE-Tutorial-09/)

Los ejemplos de este capítulo se incluyen con TinyCAD. Elija **Open Example → SPICE tutorial**, seleccione el ejemplo indicado y, a continuación, elija **Open Drawing**. No es necesario descargar nada.

Abra **amp-ac**. Es el amplificador reconstruido, con una
amplitud de CA de 1 en VIN y un barrido de CA de 1 Hz a 100 MHz, con 60 puntos por década.
El amplio límite superior permite ver el decaimiento del modelo genérico del transistor;
no demuestra que el hardware original se comporte con precisión en RF.

Seleccione **Voltage gain**, la traza derivada OUT/IN guardada. Visualice la magnitud en dB
y la fase. En sus notas, mantenga diferenciadas las tensiones de nodo y la ganancia adimensional.

![Ganancia y fase calculadas del amplificador](/v4/Images/simulation-tutorials/spice/amp-ac-results.png)

## Interprete el resultado antes de explicarlo
{: #read-the-result-before-explaining-it}

Con RL = 8 Ω y la división eléctrica de R6 en 0,5, la ganancia de referencia a 1 kHz es
de aproximadamente **0,892 V/V**, o **−0,995 dB**, con una fase aproximadamente invertida.
La magnitud máxima muestreada también es de aproximadamente 0,892. Los cruces de media potencia
con respecto a ese máximo se sitúan cerca de **24 Hz** y **2,9 MHz**; estos valores redondeados reflejan
el barrido muestreado y el modelo genérico elegido.

No son cruces de ganancia unitaria. El ancho de banda de −3 dB se mide respecto a
la ganancia de banda pasante o a la ganancia máxima del amplificador, no necesariamente respecto a 1 V/V. En
la medición de ancho de banda con nombre de TinyCAD, seleccione OUT e IN y establezca la ganancia de referencia
en `peak` al analizar esta respuesta con forma de pasabanda. Una medición de ancho de banda
requiere que ambos cruces estén dentro del intervalo de frecuencias adquirido.

## Por qué la ganancia de tensión global es inferior a uno
{: #why-the-overall-voltage-gain-is-below-one}

VIN se mide antes del potenciómetro de volumen. La tensión del cursor se reduce
aún más debido a la impedancia de entrada finita del amplificador. Q1 proporciona entonces una
ganancia de tensión inversora. Q2 excita una carga muy baja de 8 Ω a través de C2, y su impedancia
de salida finita causa atenuación adicional. La relación global incluye todas las etapas.

Compare BASE/IN, COLLECTOR/BASE y OUT/COLLECTOR como relaciones derivadas independientes.
Cada una responde a una pregunta distinta. Una etapa puede proporcionar ganancia de tensión mientras que
la trayectoria completa de entrada a carga tiene una ganancia inferior a la unidad. Un seguidor de emisor
puede proporcionar una ganancia de corriente útil incluso cuando su ganancia de tensión es inferior a uno.

## Identifique las causas de los límites de baja y alta frecuencia
{: #find-the-causes-of-the-low--and-high-frequency-limits}

C1 y C2 son condensadores de acoplamiento en serie. Su reactancia aumenta a bajas
frecuencias, por lo que atenúan la señal. La resistencia efectiva de C2 incluye
tanto la carga como la impedancia de salida de la etapa; usar solo `1/(2π × 8 Ω × C2)`
no describe por completo el circuito cargado. A altas frecuencias, las capacitancias del transistor
y el tiempo de tránsito del modelo reducen la respuesta y modifican la fase.

Pruebe los siguientes cambios controlados y restaure el valor original después de cada uno:

1. Cambie RL de 8 Ω a 80 Ω. Compare la ganancia de banda pasante y la frecuencia de corte inferior.
2. Duplique C2. Compruebe si la frecuencia de corte inferior se desplaza lo esperado si C2
   es el elemento dominante; C1 y la carga también pueden influir.
3. Cambie la división eléctrica de R6. Registre por separado la ganancia desde IN y la ganancia desde BASE
   para no confundir la atenuación del volumen con la ganancia de la etapa del transistor.
4. Aumente los puntos por década cerca de un cruce y compruebe que la frecuencia de corte indicada
   se haya estabilizado antes de dar más cifras.

El análisis de CA predice la respuesta a una perturbación suficientemente pequeña alrededor del
punto de polarización. No limita la amplitud de salida a la excursión disponible de la fuente de alimentación.
El próximo capítulo utiliza una entrada transitoria finita para determinar en qué punto la predicción de pequeña señal
deja de describir la forma de onda real.

## Descargar los circuitos de la lección
{: #download-the-lesson-circuits}

Los mismos ejemplos ya están disponibles en **Open Example**. Para obtener una copia independiente, descargue un dibujo `.dzn` y use **File → Open** en TinyCAD. El archivo complementario `.cir` es texto SPICE para inspeccionarlo o usarlo en un simulador externo compatible; no es un dibujo de TinyCAD. Los circuitos XSPICE requieren Desktop para ejecutarse desde cero.

| Ejemplo | Dibujo | Lista de conexiones |
| --- | --- | --- |
| amp-ac | [Dibujo de TinyCAD](/v4/examples/simulation-tutorials/spice/amp-ac.dzn) | [Texto SPICE](/v4/examples/simulation-tutorials/spice/amp-ac.cir) |
