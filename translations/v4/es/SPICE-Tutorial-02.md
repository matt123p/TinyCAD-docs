---
layout: default
title: 2. Measuring DC voltage, current and power
---
# 2. Medición de tensión, corriente y potencia en CC
{: #measuring-dc-voltage-current-and-power}

[Anterior](/v4/SPICE-Tutorial-01/) · [Índice](/v4/Simulation-Tutorials/) · [Siguiente](/v4/SPICE-Tutorial-03/)

Los ejemplos de este capítulo se incluyen con TinyCAD. Elija **Abrir ejemplo → Tutorial de SPICE**, seleccione el ejemplo indicado y, a continuación, elija **Abrir dibujo**. No es necesario descargar nada.

Abra **divider**. Mantenga la fuente nominal de 5 V y las dos
resistencias de 1 kΩ. El objetivo es distinguir la tensión de nodo, la tensión entre los terminales de un dispositivo,
la corriente que lo atraviesa y la potencia que disipa.

## Medición de tensión
{: #voltage-measurements}

`out` significa la tensión de OUT con respecto al nodo 0. La tensión entre los terminales de R1 es
`VIN − VOUT`, que aquí también es 2,5 V. Esta igualdad es accidental: tras cambiar
R2 a 2 kΩ, R1 tiene 1,667 V, mientras que R2 tiene 3,333 V.

Use **Simulación → SPICE → Insertar sonda** para medir la tensión de un nodo. Una sonda diferencial
mide la tensión de su terminal positivo menos la de su terminal negativo. Conecte la
punta positiva a IN y la negativa a OUT para medir R1. Invertir las puntas
invierte el resultado. Una sonda diferencial resulta especialmente útil cuando ninguno de los
terminales está conectado a tierra, como en un condensador de acoplamiento o en la salida de un puente.

## Medición de corriente
{: #current-measurements}

Use una sonda de corriente en serie: interrumpa un cable e inserte la sonda en el
recorrido. Se modela como una fuente de cero voltios: la corriente la atraviesa sin
caída de tensión ideal. Si la conectara en paralelo con la fuente, provocaría un cortocircuito.
La corriente positiva de la sonda sigue el orden de sus terminales positivo y negativo.
Las corrientes de rama de las fuentes, como `v1#branch`, también están disponibles directamente.

En este divisor, la corriente fluye desde V1 a través de R1 y R2 hacia tierra. Las corrientes
por ambas resistencias son de 2,5 mA; la corriente de rama de V1 es −2,5 mA porque suministra
aquella corriente desde su terminal positivo.

## Potencia y comprobación del balance de energía
{: #power-and-an-energy-balance-check}

Use la convención pasiva de signos: `P = V × I`, con la corriente entrando por el terminal
en el que la tensión se define como positiva. La potencia positiva se absorbe; la negativa
se entrega.

| Dispositivo | Cálculo | Resultado nominal |
| --- | --- | --- |
| R1 | `(2.5 V)² / 1 kΩ` | +6,25 mW |
| R2 | `(2.5 V)² / 1 kΩ` | +6,25 mW |
| V1 | `5 V × (−2.5 mA)` | −12,5 mW |
| Suma | Fuente más cargas | 0 W |

Este balance es una herramienta útil para depurar. Un factor de 1000 suele indicar un
error de prefijo. Un signo incorrecto suele indicar que la orientación de la sonda está invertida.
Una carga adicional inexplicada puede revelar una unión involuntaria o una conexión del medidor.

Los controles de **Mediciones** de TinyCAD permiten seleccionar la tensión, la corriente y la
potencia de los componentes cuando el modelo las admite. Si no está disponible un vector de corriente compatible,
se indica que no está disponible; no debe interpretarse como un consumo nulo.

## Barrer la fuente
{: #sweep-the-supply}

Abra **dc-sweep**. El **Barrido de CC** guardado usa V1,
con un valor inicial de 0 V, un valor final de 10 V y un incremento de 0,5 V. Ejecute la simulación y grafique OUT.

![Curva de transferencia de CC calculada](/v4/Images/simulation-tutorials/spice/dc-sweep-results.png)

El eje horizontal corresponde al valor de la fuente barrida, no al tiempo. Los valores esperados son
0 V, 2,5 V y 5 V para valores de la fuente de 0 V, 5 V y 10 V. La pendiente es de 0,5 V/V.
Esta prueba es útil para comprobar redes de polarización e interfaces de sensores antes de
añadir estímulos que varíen con el tiempo.

## Investigar la carga
{: #investigate-loading}

Añada otra resistencia de 1 kΩ entre OUT y tierra. R2 y la nueva carga están en paralelo,
por lo que su resistencia equivalente es de 500 Ω. La salida esperada es ahora
`5 × 500 / (1000 + 500) = 1.667 V`. Un divisor de tensión no es una fuente de tensión
ideal: su salida cambia cuando suministra corriente.

Para crear una lista de comprobación de mediciones, anote los nombres de los nodos, el sentido de referencia, las unidades,
los ajustes de la fuente y el análisis. Esa información permite reproducir un resultado y
ayuda a otros lectores a distinguir un cambio en el circuito de un cambio en la gráfica.

## Descargar los circuitos de la lección
{: #download-the-lesson-circuits}

Los mismos ejemplos ya están disponibles en **Abrir ejemplo**. Para obtener una copia independiente, descargue un dibujo `.dzn` y use **Archivo → Abrir** en TinyCAD. El archivo `.cir` complementario es texto SPICE para inspeccionarlo o usarlo con un simulador externo compatible; no es un dibujo de TinyCAD. Los circuitos XSPICE requieren Desktop para ejecutarse desde cero.

| Ejemplo | Dibujo | Lista de conexiones |
| --- | --- | --- |
| divider | [Dibujo de TinyCAD](/v4/examples/simulation-tutorials/spice/divider.dzn) | [Texto SPICE](/v4/examples/simulation-tutorials/spice/divider.cir) |
