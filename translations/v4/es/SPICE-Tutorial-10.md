---
layout: default
title: "10. Design investigations: sweeps, tolerances, noise and diagnosis"
---
# 10. Investigaciones de diseño: barridos, tolerancias, ruido y diagnóstico
{: #design-investigations-sweeps-tolerances-noise-and-diagnosis}

[Anterior](/v4/SPICE-Tutorial-09/) · [Contenido](/v4/Simulation-Tutorials/) · [Siguiente: SPICE en TinyCAD](/v4/SPICE-Tutorial-11/)

Los ejemplos de este capítulo se incluyen con TinyCAD. Elija **Abrir ejemplo → Tutorial de SPICE**, seleccione el ejemplo indicado y, a continuación, elija **Abrir dibujo**. No hace falta descargar nada.

Un informe de simulación útil registra la pregunta, la versión del circuito/modelo,
el análisis, la excitación, la ventana de medición y el criterio de aceptación. Un
grÁfico convincente sin esos detalles es difícil de reproducir.

## Barridos de parámetros y tolerancias
{: #parameter-sweeps-and-tolerances}

Vuelva a **rc-ac**. En **Ajuste / barrido**, ejecute los valores preparados de
R1: 1 kΩ, 2.2 kΩ y 4.7 kΩ. Sus frecuencias de corte previstas son 159.15, 72.34 y
33.86 Hz. Se trata de un barrido de parámetros: permite analizar cómo afectan a la respuesta
las elecciones deliberadas de componentes. Es distinto del **barrido de CC** del capítulo 2, que cambia
el valor de CC de una fuente independiente durante un análisis.

Para las tolerancias, use **Laboratorio de análisis → Estudios de tolerancia**. Defina los enlaces de R1 y C1,
elija una distribución y una semilla, y añada un requisito para la frecuencia de corte. Con valores
independientes acotados a ±5 %, los extremos de RC producen aproximadamente
144.36–176.35 Hz. Una muestra Monte Carlo no necesariamente alcanza ninguno de los extremos.
La desviación estándar de una distribución normal no es un límite estricto de ±. Registre
la convención que seleccionó y si las variables están correlacionadas.

TinyCAD puede conservar las condiciones de los casos de prueba y las definiciones de mediciones/requisitos.
Use **Aplicar** solo si quiere que el ajuste temporal se convierta en una modificación real del esquema.
Guarde una revisión de circuito separada si cambia la topología o el texto del modelo;
un hash de adquisición es un identificador, no una revisión recuperable del esquema.

## Ruido: un tipo de salida diferente
{: #noise-a-different-kind-of-output}

Abra **rc-noise**. Este solicita el ruido de salida en OUT,
referido a la fuente de entrada independiente V1, de 1 Hz a 100 kHz a 27 °C.
La fuente ideal no genera ruido; R1 contribuye ruido térmico filtrado por C1.

![Densidad espectral de ruido de salida RC calculada](/v4/Images/simulation-tutorials/spice/rc-noise-results.png)

El ruido total de salida es aproximadamente **64.2 nV RMS** en esa banda. Para un
circuito RC ideal integrado desde cero hasta una frecuencia infinita, el ruido cuadrático medio del condensador es `kT/C`, lo que da unos 64.4 nV RMS a 300.15 K y 1 µF.
La banda de simulación finita explica la pequeña diferencia. La densidad espectral
tiene unidades de V/√Hz; su integral se calcula a partir de la densidad al cuadrado y el ancho
de banda en frecuencia, y luego se obtiene la raíz cuadrada. No es la suma aritmética de las
muestras de densidad mostradas. El total referido a la entrada es un resultado diferente.

## Funciones de transferencia y polos
{: #transfer-functions-and-poles}

Abra **rc-tf**. El resultado de transferencia de pequeña señal en CC es
1 V/V, la resistencia de salida es 1 kΩ y la resistencia de entrada es efectivamente infinita,
porque el condensador está abierto en CC. Una resistencia de entrada impresa muy grande,
como `1e20`, representa un resultado numérico de circuito abierto, no una resistencia física medida de 100 exaohmios.

Abra **rc-pz**. El polo es aproximadamente **−1000 rad/s**,
coincidente con `s = −1/(RC)`. Divida su magnitud por `2π` para obtener 159.15 Hz. Un polo
en el semiplano izquierdo del plano complejo s representa el decaimiento en este sistema lineal.
La ausencia de un cero finito es lo esperado para esta función de transferencia pasa-bajos de primer orden.

Estos análisis operan sobre el modelo linealizado. No sustituyen las pruebas transitorias
de recorte, conmutación o arranque. Una ganancia arbitraria entre salida y entrada tampoco
es lo mismo que la ganancia del lazo de realimentación; las mediciones de estabilidad requieren una
configuración de prueba del lazo deliberada.

## Menú práctico de mediciones
{: #a-practical-measurement-menu}

| Tarea | Magnitudes adecuadas |
| --- | --- |
| Acondicionamiento de sensores | Ganancia, offset, ruido, frecuencia de corte, tiempo de establecimiento |
| Interfaz de pulsos | Tiempo de subida/bajada, retardo, ancho de pulso, ciclo de trabajo |
| Amplificador | Polarización, ganancia/fase, ancho de banda, salida RMS, potencia, recorte |
| Etapa de potencia | Rizado, corriente de pico, potencia media, energía, eficiencia |
| Variación de componentes | Superposiciones de barridos, peores valores observados, resultados de requisitos |

TinyCAD también ofrece un osciloscopio virtual, un multímetro, un generador de funciones y
una fuente de alimentación de laboratorio con limitación de corriente en **Equipo de laboratorio**. Sus impedancias y
límites importan: por ejemplo, el generador de funciones normalmente tiene una resistencia de salida de 50 Ω.
Ofrecen otro flujo de trabajo para las mismas cuestiones eléctricas.

## Diagnosticar una ejecución fallida o inverosímil
{: #diagnose-a-failed-or-implausible-run}

Compruebe primero la tierra, los cortocircuitos involuntarios y los nodos flotantes. Confirme la
asignación de pines de los componentes y los nombres de los modelos. Para CA, verifique la amplitud de CA de la fuente independiente;
para transitorios, verifique la duración, el paso máximo y los flancos finitos de la excitación. Lea
el registro del solucionador y confirme que la ejecución alcanzó el tiempo final solicitado. Una forma de onda
parcial no es un resultado completo.

Pruebe un análisis de punto de operación más sencillo o una prueba de una etapa aislada antes de cambiar los ajustes
numéricos. Documente cualquier resistencia de fuga, resistencia de fuente o capacitancia parásita que añada:
modifica el circuito además de ayudar a la convergencia. Exporte a CSV
cuando necesite un cálculo especializado y conserve las unidades y las columnas complejas.

Lectura adicional: el [tutorial del lenguaje de control de ngspice](https://ngspice.sourceforge.io/ngspice-control-language-tutorial.html)
muestra la automatización desde la línea de comandos. El modelo de documento de TinyCAD intencionadamente no
ejecuta scripts arbitrarios de `.control`; use los controles de análisis y estudio compatibles,
o exporte una lista de conexiones para usar ngspice por separado.

## Descargar los circuitos de la lección
{: #download-the-lesson-circuits}

Los mismos ejemplos ya están disponibles en **Abrir ejemplo**. Para obtener una copia independiente, descargue un
dibujo de `.dzn` y use **Archivo → Abrir** en TinyCAD. El archivo complementario `.cir` es texto SPICE para inspeccionarlo o usarlo en un simulador externo compatible, no un dibujo de TinyCAD. Los circuitos XSPICE requieren Desktop para ejecutarse desde cero.

| Ejemplo | Dibujo | Lista de conexiones |
| --- | --- | --- |
| rc-ac | [Dibujo de TinyCAD](/v4/examples/simulation-tutorials/spice/rc-ac.dzn) | [Texto SPICE](/v4/examples/simulation-tutorials/spice/rc-ac.cir) |
| dc-sweep | [Dibujo de TinyCAD](/v4/examples/simulation-tutorials/spice/dc-sweep.dzn) | [Texto SPICE](/v4/examples/simulation-tutorials/spice/dc-sweep.cir) |
| rc-noise | [Dibujo de TinyCAD](/v4/examples/simulation-tutorials/spice/rc-noise.dzn) | [Texto SPICE](/v4/examples/simulation-tutorials/spice/rc-noise.cir) |
| rc-tf | [Dibujo de TinyCAD](/v4/examples/simulation-tutorials/spice/rc-tf.dzn) | [Texto SPICE](/v4/examples/simulation-tutorials/spice/rc-tf.cir) |
| rc-pz | [Dibujo de TinyCAD](/v4/examples/simulation-tutorials/spice/rc-pz.dzn) | [Texto SPICE](/v4/examples/simulation-tutorials/spice/rc-pz.cir) |
