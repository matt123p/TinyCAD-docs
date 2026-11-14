---
layout: default
title: 9. Amplifier waveform, clipping and power usage
---
# 9. Forma de onda del amplificador, recorte y consumo de potencia
{: #amplifier-waveform-clipping-and-power-usage}

[Anterior](/v4/SPICE-Tutorial-08/) · [Contenido](/v4/Simulation-Tutorials/) · [Siguiente](/v4/SPICE-Tutorial-10/)

Los ejemplos de este capítulo se incluyen con TinyCAD. Elija **Abrir ejemplo (Open Example) → Tutorial de SPICE (SPICE tutorial)**, seleccione el ejemplo indicado y, a continuación, elija **Abrir dibujo (Open Drawing)**. No es necesario descargar nada.

Abra **amp-small-signal**. VIN proporciona una
senoide de 10 mV de pico y 1 kHz. El análisis transitorio dura 12 ms, con un paso máximo de 2 µs.
Compare IN y OUT y, a continuación, mida los cuatro ciclos finales, de 8 ms a 12 ms.

![Formas de onda medidas del amplificador de pequeña señal](/v4/images/simulation-tutorials/spice/amp-small-signal-results.png)

El resultado de CA predice aproximadamente 8,92 mV de pico en OUT, invertidos con respecto a la entrada.
El análisis transitorio da aproximadamente de −8,87 a +8,99 mV durante la ventana de medición,
con **6,304 mV RMS**. La pequeña diferencia entre los picos positivo y negativo
refleja el modelo no lineal y los efectos transitorios residuales.

## Calcular la potencia de carga y el consumo de la fuente
{: #calculate-load-power-and-supply-consumption}

Para RL, que es puramente resistiva, la potencia instantánea es `pL(t) = vOUT(t)² / 8`.
Por lo tanto, la potencia media de carga equivale a `VOUT,RMS² / 8`, incluida cualquier contribución de CC
durante el intervalo seleccionado. Con la entrada pequeña, es aproximadamente **4,97 µW**.

La potencia suministrada por la fuente es `−12 × mean(i(VCC))`, aproximadamente **264,61 mW**.
La mayor parte de la potencia se consume en el circuito polarizado incluso cuando la señal de audio es minúscula.
La relación entre la potencia de carga y la potencia suministrada es de apenas **0,00188 %** con esta entrada.
Esta es la eficiencia eléctrica para el límite del sistema y la ventana elegidos, no una
eficiencia acústica ni una clasificación general del circuito.

En TinyCAD, añada mediciones de potencia de los componentes VCC y RL y, a continuación, elija **Media (Mean)**
con Desde/Hasta configurados en 8 ms y 12 ms. Una fuente que suministra potencia tiene potencia absorbida negativa;
use su valor negativo como potencia de entrada suministrada. La **Integral** de la potencia da
energía en julios. No sustituya por un cero estimado una métrica de corriente o potencia que no esté disponible para un modelo.

## Aumentar la entrada hasta que falle la predicción lineal
{: #increase-input-until-the-linear-prediction-fails}

Abra **amp-clipping**. Solo cambia la amplitud de VIN,
a 500 mV de pico. Una extrapolación lineal predeciría aproximadamente 446 mV de pico en OUT
en ambas direcciones. La forma de onda calculada no se comporta así.

![Salida calculada asimétrica de gran señal](/v4/images/simulation-tutorials/spice/amp-clipping-results.png)

En la misma ventana de 8–12 ms, la salida de referencia abarca aproximadamente
de **−0,162 a +0,389 V**, con **0,2126 V RMS**. El consumo de la fuente es aproximadamente
**315,23 mW**; la potencia total en la carga resistiva es **5,65 mW**, lo que da una eficiencia
eléctrica de aproximadamente **1,79 %** en esta ventana. El valor medio de la salida es aproximadamente
de 31 mV en esta adquisición de duración finita. Para obtener la potencia de CA únicamente en la carga, reste la media
antes de elevar al cuadrado: use el valor RMS de la ondulación, no el RMS total.

El seguidor de emisor puede suministrar corriente activamente, pero su camino de descarga
está limitado por la red de polarización. La resistencia de carga muy baja pone de manifiesto esa
asimetría. No califique sin más toda región que parezca plana como «saturación contra el raíl de alimentación»:
inspeccione EMITTER, COLLECTOR y las corrientes de los dispositivos para identificar el mecanismo.

## Hacer que la medición sea defendible
{: #make-the-measurement-defensible}

Use ciclos completos, indique la ventana de tiempo y excluya el arranque si estudia
el funcionamiento en régimen permanente. Repita el análisis con una ejecución más larga para comprobar si la media y la potencia de la ventana
se estabilizan. Reduzca el paso máximo y compare los extremos y el RMS; las muestras del solucionador
por lo general no están espaciadas uniformemente, así que use cálculos ponderados por tiempo.
Una media aritmética de todos los valores de las muestras puede sesgar el resultado hacia los bordes,
donde el solucionador toma más muestras.

Las formas de onda distorsionadas no pueden convertirse de pico a RMS mediante `peak/√2`.
Esa fórmula se aplica a una sinusoide. Del mismo modo, la potencia eléctrica del transistor
no predice automáticamente su temperatura: la resistencia térmica, las condiciones ambientales
y los modelos dependientes de la temperatura son datos adicionales.

Pruebe a aumentar RL a 80 Ω y compare la simetría de la forma de onda, la ganancia de tensión y
la potencia suministrada. Una excursión de tensión mayor no implica necesariamente más potencia,
porque también cambió la resistencia de carga.

## Descargar los circuitos de la lección
{: #download-the-lesson-circuits}

Los mismos ejemplos ya están disponibles en **Abrir ejemplo (Open Example)**. Para obtener una copia independiente, descargue un dibujo `.dzn` y use **Archivo (File) → Abrir (Open)** en TinyCAD. El archivo complementario `.cir` es texto SPICE para su inspección o para un simulador externo compatible, no un dibujo de TinyCAD. Los circuitos XSPICE requieren Desktop para ejecutarse desde cero.

| Ejemplo | Dibujo | Lista de conexiones |
| --- | --- | --- |
| amp-small-signal | [Dibujo de TinyCAD](/v4/examples/simulation-tutorials/spice/amp-small-signal.dzn) | [Texto SPICE](/v4/examples/simulation-tutorials/spice/amp-small-signal.cir) |
| amp-clipping | [Dibujo de TinyCAD](/v4/examples/simulation-tutorials/spice/amp-clipping.dzn) | [Texto SPICE](/v4/examples/simulation-tutorials/spice/amp-clipping.cir) |
