---
layout: default
title: 2. Gates and truth tables
---
# 2. Puertas y tablas de verdad
{: #gates-and-truth-tables}

[Anterior](/v4/XSPICE-Tutorial-01/) · [Contenido](/v4/Simulation-Tutorials/) · [Siguiente](/v4/XSPICE-Tutorial-03/)

Los ejemplos de este capítulo se incluyen con TinyCAD. Elija **Abrir ejemplo → Tutorial de XSPICE y lógica digital**, seleccione el ejemplo indicado y, a continuación, elija **Abrir dibujo**. No es necesario descargar nada.

Abra **logic-nand**. X1 contiene puentes ADC, una puerta NAND XSPICE de
dos entradas y un puente de salida DAC. Fuentes de pulsos independientes estimulan
A y B a distintas velocidades. Ejecute el análisis transitorio de 8 µs y muestre A, B e Y.

![Circuito de prueba NAND](/v4/images/simulation-tutorials/xspice/logic-nand-circuit.png)
![Formas de onda NAND calculadas](/v4/images/simulation-tutorials/xspice/logic-nand-results.png)

La función booleana es `Y = NOT(A AND B)`:

| A | B | Y estabilizada |
| --- | --- | --- |
| 0 | 0 | 1 |
| 0 | 1 | 1 |
| 1 | 0 | 1 |
| 1 | 1 | 0 |

En la representación analógica trazada, cero significa aproximadamente 0 V y uno
significa aproximadamente 5 V. La salida pasa a nivel bajo solo cuando ambas entradas están
a nivel alto. Observe la parte central de cada intervalo estable, no el instante exacto en que
una entrada cruza un umbral. La puerta tiene retardos de propagación de 20 ns para los flancos
ascendentes y descendentes; los puentes y sus flancos finitos aportan retardos adicionales.

## Realice un experimento deliberado con la tabla de verdad
{: #run-a-deliberate-truth-table-experiment}

Use los cursores de la gráfica para identificar un intervalo estable para cada fila. Anote A, B e Y
después de que la salida se haya estabilizado. Si una combinación de entrada muy breve se produce solo
mientras cambian dos entradas, no use esa transición como prueba de una fila estable de la
tabla de verdad. Para hacer una comprobación manual inequívoca, cambie las dos fuentes a CC
0 V o 5 V, vuelva a ejecutar el análisis transitorio y pruebe las cuatro combinaciones por separado.

En el modelo SPICE integrado de X1, las instrucciones principales son:

```spice
Ag [da db] dy ng
.model ng d_nand(rise_delay=20n fall_delay=20n)
```

Los corchetes agrupan un vector de puertos de entrada. `da`, `db` y `dy` son
nodos internos controlados por eventos. No son redes eléctricas ordinarias a las que se pueda
conectar directamente una resistencia. Los puentes conectan estos nodos internos
a los terminales analógicos visibles en el dibujo.

Para experimentar con otra función, haga una copia del dibujo y cambie
el tipo de modelo dentro del prólogo SPICE de X1 por una puerta compatible, como `d_and`.
Mantenga compatible la interfaz de puertos vectoriales/escalares. La tabla de verdad de AND debe
ser la inversa del resultado de NAND una vez estabilizadas las transiciones.

## Qué no demuestra este ejemplo
{: #what-this-example-does-not-establish}

El modelo no representa un circuito integrado encapsulado concreto, sus diodos ESD, límites de carga,
picos de corriente de alimentación ni los tiempos del fabricante en función de la carga. El retardo de 20 ns es
un parámetro de entrada de este experimento. Una tabla de verdad correcta demuestra la lógica funcional
para los estados probados, no la compatibilidad eléctrica con otro chip.

Si algo no funciona, inspeccione primero los niveles de las fuentes guardados, después los umbrales de los puentes
y, por último, el modelo de puerta y el orden de los puertos. Una entrada mantenida a 2 V no está definida
con estos ajustes de puente y no se le puede asignar ninguno de los valores booleanos simplemente
porque esté más cerca de uno de los niveles de alimentación.

Las definiciones de modelos y las convenciones de puertos se documentan en el capítulo de modelos de código XSPICE
del [manual de ngspice](https://ngspice.sourceforge.io/docs.html).

## Descargar los circuitos de la lección
{: #download-the-lesson-circuits}

Los mismos ejemplos ya están disponibles en **Abrir ejemplo**. Para obtener una copia independiente, descargue un dibujo `.dzn` y use **Archivo → Abrir** en TinyCAD. El complemento `.cir` es texto SPICE para inspeccionarlo o utilizarlo con un simulador externo compatible; no es un dibujo de TinyCAD. Para ejecutar desde cero circuitos XSPICE se requiere Desktop.

| Ejemplo | Dibujo | Lista de conexiones |
| --- | --- | --- |
| logic-nand | [Dibujo de TinyCAD](/v4/examples/simulation-tutorials/xspice/logic-nand.dzn) | [Texto SPICE](/v4/examples/simulation-tutorials/xspice/logic-nand.cir) |
