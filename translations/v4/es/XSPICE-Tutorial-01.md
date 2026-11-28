---
layout: default
title: 1. XSPICE and digital simulation
---
# 1. XSPICE y simulación digital
{: #xspice-and-digital-simulation}

[Cómo usar los tutoriales](/v4/Tutorial-Start-Here/) · [Contenido del curso](/v4/Simulation-Tutorials/) · [Siguiente: puertas](/v4/XSPICE-Tutorial-02/)

Los ejemplos de este capítulo se incluyen con TinyCAD. Elija **Abrir ejemplo (Open Example) → Tutorial de XSPICE y simulación digital**, seleccione el ejemplo indicado y, a continuación, elija **Abrir dibujo (Open Drawing)**. No es necesario descargar nada.

XSPICE amplía ngspice con modelos de código y un sistema de simulación dirigido por eventos.
Un circuito analógico se resuelve en términos de tensiones y corrientes; una red digital
dirigida por eventos propaga cambios de estados lógicos a través de modelos funcionales. La
simulación de señales mixtas coordina ambos tipos. Esto puede hacer que una función lógica
sea mucho más sencilla de simular que una implementación a nivel de transistores, pero no
proporciona la misma información sobre la corriente de alimentación, el esfuerzo de los
transistores ni la temporización física.

Use **TinyCAD Desktop** para este curso. Su motor nativo incluido contiene los
modelos de código necesarios. El motor de navegador/WASM de TinyCAD no incluye XSPICE.
Los modelos suministrados están incrustados en los dibujos, pero las bibliotecas de modelos
de código ejecutables siguen procediendo de la instalación del motor nativo.

[Cómo implementa TinyCAD SPICE](/v4/SPICE-Tutorial-11/) explica cómo encajan
los motores, las definiciones de símbolos y la hoja Simulation.

## Primera ejecución: un búfer dirigido por eventos
{: #first-run-an-event-driven-buffer}

Abra **logic-buffer**. Ejecute el análisis transitorio guardado de 8 µs
y grafique A e Y. A es una forma de onda de 0–5 V con un período de 1 µs. Y la sigue tras un
pequeño retardo de propagación y con flancos de salida finitos.

![Circuito de prueba del búfer XSPICE](/v4/Images/simulation-tutorials/xspice/logic-buffer-circuit.png)
![Entrada y salida calculadas del búfer](/v4/Images/simulation-tutorials/xspice/logic-buffer-results.png)

X1 es un subcircuito incrustado con tres etapas internas explícitas:

```text
Analogue A → adc_bridge → digital d_buffer → dac_bridge → analogue Y
```

El dibujo expone deliberadamente terminales analógicos: así, el sistema de gráficos
habitual de TinyCAD puede mostrar la entrada y la salida en voltios. Dentro de X1, el búfer es
un modelo XSPICE real dirigido por eventos, no una expresión de umbral de tensión que
pretende ser una puerta digital. Abra las propiedades SPICE de X1 para inspeccionar las etapas.

## Significado de los puentes
{: #what-the-bridges-mean}

El puente ADC interpreta las tensiones de entrada de hasta 1 V como bajas y las de 3 V o más
como altas. El intervalo entre ellas no está definido. Se trata de una interfaz de dominio lógico,
no de un ADC multibit muestreado con reloj, resolución y código de cuantización.

El puente DAC asigna 0 V al nivel bajo, 5 V al nivel alto y 2,5 V al estado indefinido, para su observación.
Sus tiempos de transición de subida y bajada son de 5 ns. Por lo tanto, una salida de 2,5 V en este curso
puede representar un estado digital desconocido; no es necesariamente una señal analógica válida
a mitad del riel. Estos umbrales y tensiones son opciones para el tutorial,
no especificaciones de un dispositivo TTL o CMOS concreto.

La salida ideal del puente no tiene un pin de alimentación modelado. No calcule
el consumo real de un chip lógico a partir de ella. Para investigar la potencia, use un modelo
con una alimentación explícita y un comportamiento apropiado del dispositivo.

## Una división práctica del nivel de detalle de modelado
{: #a-useful-division-of-modelling-detail}

Use puertas dirigidas por eventos para comprobar tablas de verdad, secuencias de reloj y
temporización funcional. Use modelos de transistores o del fabricante para el comportamiento
eléctrico de carga y del dispositivo cuando esos modelos admitan el efecto necesario. Use
interfaces explícitas al cruzar entre dominios analógicos y digitales. Que un símbolo tenga
un aspecto similar no determina qué tipo de modelo contiene.

Como primer experimento, cambie el período de entrada de 1 µs a 2 µs y vuelva a ejecutar.
La frecuencia de repetición se reduce a la mitad; el retardo de propagación especificado del modelo debería
permanecer prácticamente sin cambios. El período y el retardo de propagación son propiedades independientes.

Referencias: [Introducción a XSPICE](https://ngspice.sourceforge.io/xspice.html),
[ejemplos oficiales de XSPICE y HOWTO](https://ngspice.sourceforge.io/xspicehowto.html).

## Descargar los circuitos de la lección
{: #download-the-lesson-circuits}

Los mismos ejemplos ya están disponibles en **Abrir ejemplo (Open Example)**. Para obtener una copia independiente, descargue un dibujo `.dzn` y use **Archivo (File) → Abrir (Open)** en TinyCAD. El archivo complementario `.cir` es texto SPICE para inspeccionarlo o usarlo con un simulador externo compatible; no es un dibujo de TinyCAD. Para ejecutar de nuevo circuitos XSPICE se necesita Desktop.

| Ejemplo | Dibujo | Lista de conexiones |
| --- | --- | --- |
| logic-buffer | [Dibujo de TinyCAD](/v4/examples/simulation-tutorials/xspice/logic-buffer.dzn) | [Texto SPICE](/v4/examples/simulation-tutorials/xspice/logic-buffer.cir) |
