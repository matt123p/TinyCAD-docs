---
layout: default
title: 3. Choosing and configuring signal generators
---
# 3. Elección y configuración de generadores de señal
{: #choosing-and-configuring-signal-generators}

[Anterior](/v4/SPICE-Tutorial-02/) · [Contenido](/v4/Simulation-Tutorials/) · [Siguiente](/v4/SPICE-Tutorial-04/)

Los ejemplos de este capítulo se incluyen con TinyCAD. Elija **Open Example → SPICE tutorial**, seleccione el ejemplo indicado y, a continuación, elija **Open Drawing**. No es necesario descargar nada.

Una señal de excitación describe qué impulsa el circuito. Seleccione el cuerpo de una fuente en la hoja Circuit para abrir su configuración. **Signal type** cambia la forma de onda y muestra sus parámetros correspondientes. La vista previa muestra la forma de onda programada; la simulación calcula qué sucede cuando el circuito carga esa fuente.

Todos los dibujos siguientes están listos para una simulación transitoria de 5 ms. Cada fuente de tensión alimenta una carga de 1 kΩ. Úselos para aprender una configuración cada vez antes de aplicar una forma de onda a un circuito más complejo.

| Dibujo | Señal de excitación guardada | Comportamiento esperado |
| --- | --- | --- |
| **source-dc** (CC) | 5 V | Tensión constante de 5 V y corriente de carga de 5 mA |
| **source-sine** (Senoidal) | Desplazamiento de 1 V, amplitud de pico de 2 V, 1 kHz | De −1 a +3 V, período de 1 ms |
| **source-pulse** (Pulso) | De 0 a 5 V, subida/bajada de 10 µs, meseta alta de 300 µs, período de 1 ms | Pulsos repetidos con flancos finitos |
| **source-triangle** (Triangular) | De −1 a +1 V, período de 1 ms | Rampas lineales ascendentes y descendentes |
| **source-pwl** (Lineal por tramos) | 0 V hasta 1 ms, rampa hasta 3 V a los 2 ms, se mantiene hasta los 3 ms, desciende a los 4 ms | Secuencia programada de arranque y apagado |
| **source-exponential** (Exponencial) | De 0 a 5 V, subida a partir de 1 ms, bajada a partir de 3 ms | Transiciones exponenciales con constantes de tiempo de 300 µs y 500 µs |
| **source-fm** (FM) | Amplitud de 1 V, portadora de 5 kHz, modulación de 500 Hz, índice 2 | Amplitud constante con frecuencia instantánea variable |
| **source-current** (Pulso de corriente) | De 0 a 1 mA hacia una carga de retorno de 1 kΩ | Aproximadamente de 0 a −1 V con la orientación de fuente suministrada |


Estos son gráficos del simulador de los archivos suministrados. El resultado de la fuente de corriente es negativo porque la fuente extrae corriente de OUT hacia tierra, y la resistencia proporciona su camino de retorno. Invierta la fuente si se necesita una tensión de carga positiva. Una fuente de corriente ideal impone la corriente; la red determina su tensión en los terminales. No tiene un límite automático de tensión de cumplimiento.

## Vídeo: configuración de la fuente y vista previa de la forma de onda
{: #video-source-settings-and-waveform-preview}

Cambio del desplazamiento, la amplitud de pico y la frecuencia del seno; después, se vuelve a ejecutar el análisis transitorio.

{% include video-player.html src="/v4/videos/simulation-tutorials/spice/source-settings.mp4" poster="/v4/videos/simulation-tutorials/spice/source-settings.jpg" caption="Configuración de la fuente y vista previa de la forma de onda." %}

[Ver o descargar el vídeo](/v4/videos/simulation-tutorials/spice/source-settings.mp4).

### Circuito y resultados de referencia
{: #circuit-and-reference-results}

![Ejemplos de formas de onda medidas](/v4/Images/simulation-tutorials/spice/source-waveforms.png)

## Amplitud, desplazamiento y temporización
{: #amplitude-offset-and-timing}

Para una señal senoidal, `v(t) = offset + amplitude × sin(2πft + phase)` antes de considerar el retardo y el amortiguamiento opcionales. La amplitud es un valor de **pico**, no de pico a pico ni RMS. Una senoide con desplazamiento cero y un pico de 2 V tiene 4 V de pico a pico y 1,414 V RMS. Con un desplazamiento de 1 V, su valor RMS total pasa a ser `sqrt(1² + 2²/2) = 1.732 V`.

El ancho del pulso describe la meseta alta; los flancos finitos afectan al ancho medido en un umbral. Para el pulso suministrado, la duración por encima de 2,5 V es de aproximadamente 310 µs, lo que da un ciclo de trabajo de aproximadamente el 31 %. Evite los flancos de duración cero al estudiar un circuito analógico. Introducen un ancho de banda ilimitado y dificultan los cálculos numéricos, además de no representar un generador real.

Los datos lineales por tramos usan un par de tiempo/valor creciente por línea. Son útiles para rampas de alimentación, perfiles de sensores y secuencias de prueba no periódicas. Una fuente exponencial impone una forma de onda exponencial; no añade una red RC física.

## La excitación de CA es una configuración independiente
{: #ac-excitation-is-a-separate-setting}

**AC amplitude** y **AC phase** controlan el análisis de respuesta en frecuencia de CA. El campo de frecuencia senoidal no define el intervalo de frecuencias de un barrido de CA. Del mismo modo, una amplitud de CA de 1 V no genera una senoide transitoria de 1 V. Tenga presentes estas diferencias cuando utilice la misma fuente de entrada para estudios de polarización, CA y transitorios.

Una fuente independiente ideal tiene impedancia de salida cero si es una fuente de tensión, e impedancia de salida infinita si es una fuente de corriente. **Lab Equipment → Function generator** de TinyCAD incluye, en cambio, una resistencia de salida configurable (normalmente de 50 Ω). Una carga adaptada de 50 Ω recibe la mitad de la tensión en circuito abierto del generador.

## Fuentes controladas y aplicaciones prácticas
{: #controlled-sources-and-practical-uses}

El menú de inserción de SPICE también proporciona una fuente de tensión controlada por tensión y una fuente de corriente controlada por tensión. La primera implementa `Vout = gain × Vcontrol`; la segunda implementa `Iout = transconductance × Vcontrol`. Sus terminales de control y de salida son independientes. Abra **controlled-source** para utilizar una fuente de tensión controlada por tensión, lista para ejecutar, con ganancia 2. Una entrada con un pico de 1 V produce una salida con un pico de 2 V sobre 1 kΩ. La fuente ideal no modela recorte ni potencia de alimentación.

Las fuentes controladas pueden representar un amplificador ideal,
un transductor o una carga dependiente, pero no adquieren límites de alimentación ni ancho de banda a menos que el modelo los incluya explícitamente.

Pruebe a cambiar solo la amplitud de la senoide y, después, solo su desplazamiento. Prediga el nuevo mínimo, máximo y valor RMS antes de volver a ejecutarla. A continuación, duplique la frecuencia y reduzca a la mitad el paso de tiempo máximo para comprobar que la forma de onda mostrada sigue teniendo una resolución adecuada.

Referencia: la sintaxis de las fuentes y las definiciones de las formas de onda están documentadas en el
[manual de ngspice](https://ngspice.sourceforge.io/docs.html).

## Descargar los circuitos de la lección
{: #download-the-lesson-circuits}

Los mismos ejemplos ya están disponibles en **Open Example**. Para obtener una copia independiente, descargue un dibujo `.dzn` y use **File → Open** en TinyCAD. El archivo complementario `.cir` contiene texto SPICE para su inspección o para usarlo en un simulador externo compatible; no es un dibujo de TinyCAD. Los circuitos XSPICE requieren Desktop para ejecutar simulaciones nuevas.

| Ejemplo | Dibujo | Lista de conexiones |
| --- | --- | --- |
| source-dc | [Dibujo de TinyCAD](/v4/examples/simulation-tutorials/spice/source-dc.dzn) | [Texto SPICE](/v4/examples/simulation-tutorials/spice/source-dc.cir) |
| source-current | [Dibujo de TinyCAD](/v4/examples/simulation-tutorials/spice/source-current.dzn) | [Texto SPICE](/v4/examples/simulation-tutorials/spice/source-current.cir) |
| source-sine | [Dibujo de TinyCAD](/v4/examples/simulation-tutorials/spice/source-sine.dzn) | [Texto SPICE](/v4/examples/simulation-tutorials/spice/source-sine.cir) |
| source-pulse | [Dibujo de TinyCAD](/v4/examples/simulation-tutorials/spice/source-pulse.dzn) | [Texto SPICE](/v4/examples/simulation-tutorials/spice/source-pulse.cir) |
| source-triangle | [Dibujo de TinyCAD](/v4/examples/simulation-tutorials/spice/source-triangle.dzn) | [Texto SPICE](/v4/examples/simulation-tutorials/spice/source-triangle.cir) |
| source-pwl | [Dibujo de TinyCAD](/v4/examples/simulation-tutorials/spice/source-pwl.dzn) | [Texto SPICE](/v4/examples/simulation-tutorials/spice/source-pwl.cir) |
| source-exponential | [Dibujo de TinyCAD](/v4/examples/simulation-tutorials/spice/source-exponential.dzn) | [Texto SPICE](/v4/examples/simulation-tutorials/spice/source-exponential.cir) |
| source-fm | [Dibujo de TinyCAD](/v4/examples/simulation-tutorials/spice/source-fm.dzn) | [Texto SPICE](/v4/examples/simulation-tutorials/spice/source-fm.cir) |
| controlled-source | [Dibujo de TinyCAD](/v4/examples/simulation-tutorials/spice/controlled-source.dzn) | [Texto SPICE](/v4/examples/simulation-tutorials/spice/controlled-source.cir) |
