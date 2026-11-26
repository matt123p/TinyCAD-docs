---
layout: default
title: "5. AC analysis: gain, phase and an RC filter"
---
# 5. Análisis de CA: ganancia, fase y un filtro RC
{: #ac-analysis-gain-phase-and-an-rc-filter}

[Anterior](/v4/SPICE-Tutorial-04/) · [Contenido](/v4/Simulation-Tutorials/) · [Siguiente](/v4/SPICE-Tutorial-06/)

Los ejemplos de este capítulo se incluyen con TinyCAD. Elija **Abrir ejemplo (Open Example) → Tutorial de SPICE (SPICE tutorial)**, seleccione el ejemplo indicado y, a continuación, elija **Abrir dibujo (Open Drawing)**. No es necesario descargar nada.

Abra **rc-ac**. Utiliza la misma red de 1 kΩ/1 µF que la
lección sobre la carga, pero plantea una pregunta distinta: ¿qué parte de una señal sinusoidal pequeña llega a OUT en cada frecuencia?

La fuente tiene una amplitud de CA de 1 V. El barrido de CA guardado va de 1 Hz a 100 kHz,
con 100 puntos por década. Ejecútelo, seleccione la traza derivada **OUT / IN** y
consulte la magnitud, los dB y la fase. Utilice un eje de frecuencia logarítmico.


## Vídeo: respuesta de CA y frecuencia de corte
{: #video-ac-response-and-cutoff}

Comprobar la configuración de CA, leer la frecuencia de corte y cambiar entre magnitud, decibelios y fase.

{% include video-player.html src="/v4/videos/simulation-tutorials/spice/ac-response.mp4" poster="/v4/videos/simulation-tutorials/spice/ac-response.jpg" caption="Respuesta de CA y frecuencia de corte." %}

[Ver o descargar el vídeo](/v4/videos/simulation-tutorials/spice/ac-response.mp4).

### Circuito y resultados de referencia
{: #circuit-and-reference-results}

![Respuesta de magnitud y fase calculada](/v4/Images/simulation-tutorials/spice/rc-ac-results.png)

## Interpretar el resultado complejo
{: #interpret-the-complex-result}

El análisis de CA linealiza el circuito en su punto de operación de CC y resuelve
las amplitudes complejas. No es una simulación transitoria en la que un generador sinusoidal
cambia gradualmente de frecuencia. Para este circuito,

`H(jω) = VOUT / VIN = 1 / (1 + jωRC)`.

La magnitud indica la relación de amplitudes; la fase indica la temporización relativa
dentro de un ciclo. Aquí, la salida se retrasa respecto a la entrada. La frecuencia de corte es
`fc = 1 / (2πRC) = 159.155 Hz`. En la frecuencia de corte, la magnitud es `1/√2 = 0.7071`
y la fase es −45°. La ganancia de tensión en decibelios es `20 log10(|H|)`, lo que da
−3.0103 dB en la frecuencia de corte.

| Frecuencia | Ganancia aproximada | Fase aproximada |
| --- | --- | --- |
| 10 Hz | 0.9980, −0.017 dB | −3.60° |
| 159.155 Hz | 0.7071, −3.01 dB | −45° |
| 1 kHz | 0.1572, −16.07 dB | −80.96° |

La medición **Cutoff** guardada usa OUT con respecto a IN y una ganancia de referencia
de 1. Debería devolver aproximadamente 159.15 Hz. La interpolación entre muestras puede hacer
que los últimos dígitos difieran del resultado de la ecuación.

## Evitar tres errores comunes
{: #avoid-three-common-mistakes}

En primer lugar, representar solo la componente real no equivale a representar la amplitud. Para un
resultado complejo, utilice la magnitud o dB. En segundo lugar, una ganancia de −3 dB no es una relación de tensión
de −3: los decibelios expresan logarítmicamente una magnitud positiva. En tercer lugar, el signo
menos de una ganancia inversora real corresponde a la fase, no a una
magnitud negativa.

Usar CA de 1 hace que, en este caso sencillo, la tensión de salida sea numéricamente igual a la ganancia. Sin embargo,
representar OUT/IN es más robusto: sigue expresando la ganancia
cuando cambia la amplitud de entrada. El resultado de CA de un amplificador no lineal sigue siendo un
resultado de pequeña señal aunque la amplitud de CA se establezca en un valor grande. No
predice el recorte ni la potencia de salida física.

## Comparar opciones de componentes
{: #compare-component-choices}

En **Ajustar / barrer (Tune / sweep)**, el control R1 suministrado ofrece un barrido por lista de 1 kΩ,
2.2 kΩ y 4.7 kΩ. Ejecute el barrido y compare las curvas y la tabla de frecuencias de corte.
Las frecuencias de corte esperadas son 159.15, 72.34 y 33.86 Hz. El ajuste temporal no modifica
la resistencia guardada hasta que se utiliza **Aplicar (Apply)**.

Un filtro RC puede suprimir el rizado de conmutación antes de un ADC o reducir el ruido de alta frecuencia de un sensor.
También ralentiza la señal deseada. Compare la respuesta en frecuencia de este capítulo con el mayor tiempo de carga
que provoca el aumento de R1 en el capítulo anterior: son dos perspectivas de la misma compensación física.

Referencia: el [ejemplo de CA del tutorial para principiantes de ngspice](https://ngspice.sourceforge.io/ngspice-tutorial.html)
también distingue la excitación de CA de la forma de onda de la fuente transitoria.

## Descargar los circuitos de la lección
{: #download-the-lesson-circuits}

Los mismos ejemplos ya están disponibles en **Abrir ejemplo (Open Example)**. Para obtener una copia independiente, descargue un dibujo `.dzn` y use **Archivo → Abrir (File → Open)** en TinyCAD. El archivo complementario `.cir` es texto SPICE para su inspección o para usarlo en un simulador externo compatible, no es un dibujo de TinyCAD. Los circuitos XSPICE requieren Desktop para ejecutarse desde cero.

| Ejemplo | Dibujo | Lista de conexiones |
| --- | --- | --- |
| rc-ac | [Dibujo de TinyCAD](/v4/examples/simulation-tutorials/spice/rc-ac.dzn) | [Texto SPICE](/v4/examples/simulation-tutorials/spice/rc-ac.cir) |
