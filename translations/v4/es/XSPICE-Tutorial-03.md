---
layout: default
title: 3. Propagation delay and logic hazards
---
# 3. Retardo de propagación y peligros lógicos
{: #propagation-delay-and-logic-hazards}

[Anterior](/v4/XSPICE-Tutorial-02/) · [Contenido](/v4/Simulation-Tutorials/) · [Siguiente](/v4/XSPICE-Tutorial-04/)

Los ejemplos de este capítulo se incluyen con TinyCAD. Elija **Abrir ejemplo (Open Example) → XSPICE and digital tutorial**, seleccione el ejemplo indicado y, a continuación, elija **Abrir dibujo (Open Drawing)**. No es necesario descargar nada.

Abra **logic-hazard**. Dentro de X1, una copia de A va
directamente a una puerta AND. Otra pasa por un inversor antes de llegar a la
otra entrada de la puerta AND. La expresión booleana es `A AND NOT A`, que siempre es cero
una vez que todo se estabiliza. Sin embargo, el transitorio puede contener un impulso.

![Impulsos de peligro calculados](/v4/images/simulation-tutorials/xspice/logic-hazard-results.png)

El inversor tiene un retardo de 100 ns y la puerta AND tiene un retardo de 10 ns. En un flanco
ascendente de la entrada, la ruta directa pasa a nivel alto mientras que la ruta invertida permanece alta
hasta que responde el inversor. Durante un breve intervalo, ambas entradas de la puerta AND están altas,
por lo que aparece un impulso positivo en la salida. En este modelo deliberadamente
sencillo, su anchura es de unos 100 ns. En el flanco de entrada opuesto, las dos rutas pasan por un período
durante el cual ambas entradas de la puerta AND están bajas, por lo que no se produce el mismo impulso
positivo.

## Medir en lugar de inferir la temporización a partir de los píxeles
{: #measure-rather-than-infer-timing-from-pixels}

Ejecute el análisis transitorio guardado de 3 µs con un paso máximo de 2 ns. Amplíe una zona alrededor de un flanco ascendente
cercano a 0,5 µs. Use un umbral de 2,5 V para medir el cruce de la entrada, el cruce de la salida
y la anchura del impulso de salida. La medición **Retardo (Delay)** de TinyCAD calcula el primer cruce ascendente de la salida menos el primer cruce ascendente de la referencia en la ventana seleccionada. La medición **Anchura del impulso (Pulse width)** necesita un impulso completo dentro de esa ventana.

El retardo total desde la entrada analógica hasta la salida analógica incluye el cruce del umbral,
el temporizado del puente ADC, el retardo de la puerta y el tiempo de transición del DAC. No es idéntico al
parámetro `rise_delay` de una sola puerta. Elija umbrales coincidentes al comparar
mediciones e indique el intervalo utilizado.

## Diferenciar tres magnitudes de tiempo
{: #separate-three-different-time-quantities}

| Magnitud | Significado |
| --- | --- |
| Retardo de propagación | Tiempo entre un evento desencadenante en la entrada y el evento resultante en la salida |
| Tiempo de subida/bajada | Tiempo que tarda una transición analógica entre los niveles especificados |
| Período | Tiempo entre repeticiones de la forma de onda |

Una transición ideal controlada por eventos puede ser instantánea en su dominio digital,
mientras que el puente DAC produce una pendiente analógica finita. Un paso de tiempo menor en la gráfica
no reduce el retardo de propagación configurado de la puerta.

Duplique el retardo del inversor a 200 ns en una copia del modelo de X1 y vuelva a ejecutar la simulación. El impulso
debería ensancharse en consecuencia. Luego aumente considerablemente el paso máximo y
compare lo que resuelve la gráfica. Es posible que el solucionador siga insertando puntos relacionados con eventos,
pero una configuración gruesa no es una estrategia fiable para medir flancos analógicos cortos. Restablezca 2 ns y compruebe que la anchura medida sea estable.

Esta es una demostración de un peligro lógico, no un generador de impulsos físicos recomendado.
Los retardos de la lógica real varían según el proceso, la tensión, la temperatura y la carga. Un impulso
que aparece de forma fiable en una simulación con retardos fijos puede desaparecer o cambiar de anchura
en el hardware. Use esta prueba para descubrir la sensibilidad a la temporización y, a continuación, elija un
diseño con requisitos de temporización explícitos y modelos adecuados.

## Descargar los circuitos de la lección
{: #download-the-lesson-circuits}

Los mismos ejemplos ya están disponibles en **Abrir ejemplo (Open Example)**. Para obtener una copia independiente, descargue un dibujo `.dzn` y use **Archivo (File) → Abrir (Open)** en TinyCAD. El archivo `.cir` complementario es texto SPICE para su inspección o para un simulador externo compatible, no un dibujo de TinyCAD. Los circuitos XSPICE requieren Desktop para ejecutar simulaciones nuevas.

| Ejemplo | Dibujo | Lista de conexiones |
| --- | --- | --- |
| logic-hazard | [Dibujo de TinyCAD](/v4/examples/simulation-tutorials/xspice/logic-hazard.dzn) | [Texto SPICE](/v4/examples/simulation-tutorials/xspice/logic-hazard.cir) |
