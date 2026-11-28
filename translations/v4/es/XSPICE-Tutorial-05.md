---
layout: default
title: 5. Counters and divided clocks
---
# 5. Contadores y relojes divisores
{: #counters-and-divided-clocks}

[Anterior](/v4/XSPICE-Tutorial-04/) · [Contenido](/v4/Simulation-Tutorials/) · [Siguiente](/v4/XSPICE-Tutorial-06/)

Los ejemplos de este capítulo se incluyen con TinyCAD. Elija **Abrir ejemplo (Open Example) → XSPICE and digital tutorial**, seleccione el ejemplo indicado y, a continuación, elija **Abrir dibujo (Open Drawing)**. No es necesario descargar nada.

Abra **logic-counter**. X1 contiene cuatro biestables D.
Cada uno realimenta su salida invertida a D, de modo que conmuta cuando recibe un
reloj. La primera etapa recibe CLK; las etapas posteriores reciben como reloj la
salida invertida de la etapa anterior. Esto forma un contador binario ascendente
en cascada.

![Circuito de prueba de contador de cuatro bits](/v4/Images/simulation-tutorials/xspice/logic-counter-circuit.png)
![Salidas de reloj dividido calculadas](/v4/Images/simulation-tutorials/xspice/logic-counter-results.png)

El período de entrada es de 1 µs. El reinicio pone a cero las etapas cerca del
inicio, y el primer flanco de conteo se produce cerca de 0.5 µs. Ejecute el análisis
transitorio guardado de 18 µs. Lea cada valor después de que se estabilice la
propagación, por ejemplo, a 0.8 µs, 1.8 µs, 2.8 µs, etc.

La secuencia decimal esperada es:

```text
1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 0
```

Para el orden de bits Q3 Q2 Q1 Q0, los cuatro primeros valores son 0001, 0010, 0011 y 0100.
Convierta usando `count = Q0 + 2Q1 + 4Q2 + 8Q3`, interpretando como uno lógico un voltaje estabilizado superior a
2.5 V en esta gráfica.

## División de frecuencia
{: #frequency-division}

Q0 conmuta una vez por ciclo de entrada, por lo que su período completo abarca dos ciclos de entrada.
Q1 divide por cuatro, Q2 por ocho y Q3 por dieciséis.

| Salida | Período | Frecuencia |
| --- | --- | --- |
| Q0 | 2 µs | 500 kHz |
| Q1 | 4 µs | 250 kHz |
| Q2 | 8 µs | 125 kHz |
| Q3 | 16 µs | 62.5 kHz |

La adquisición suministrada de 18 µs muestra el desbordamiento, pero quizá no
contenga dos flancos ascendentes completos de Q3 después del reinicio. Amplíe la
duración a 35 µs antes de solicitar una medición de frecuencia basada en el primer
ciclo completo de esa salida. Es apropiado que la frecuencia no esté disponible
cuando la adquisición no contiene suficientes datos.

## Por qué importa la propagación en cascada
{: #why-ripple-matters}

Los bits no cambian simultáneamente. Cada etapa responde después de la transición
de salida de la etapa anterior. Amplíe la transición de siete a ocho:
aparecen combinaciones intermedias temporales de bits mientras se propaga el
acarreo. Por tanto, un decodificador combinacional conectado a esos bits podría
producir glitches.

Esta no es la misma arquitectura que la de un contador síncrono, en el que todas
las etapas comparten un reloj. Que la secuencia de conteo estabilizada sea correcta
no significa que el contador en cascada sea adecuado para todas las aplicaciones
sensibles a la temporización. Use este ejemplo para distinguir el conteo funcional
de la temporización de las transiciones.

Pruebe a duplicar el período del reloj. La secuencia de conteo se mantiene, pero
todas las frecuencias de salida se reducen a la mitad; los retardos de propagación
configurados permanecen fijos. Después, sitúe el reinicio a mitad de la ejecución
y compruebe que todos los bits se ponen a cero antes de que se reanude el conteo
normal. Anote la temporización del reinicio y deje tiempo suficiente para que se
estabilicen el reinicio y los puentes DAC antes de muestrear un estado.

Para probar un diseño, defina tanto un requisito funcional (conteo estabilizado
correcto) como un requisito de temporización (retardo máximo de estabilización
permitido después del reloj). Responden a preguntas distintas y deben comprobarse
por separado.

## Descargar los circuitos de la lección
{: #download-the-lesson-circuits}

Los mismos ejemplos ya están disponibles en **Abrir ejemplo (Open Example)**. Para obtener una copia independiente, descargue un dibujo `.dzn` y use **Archivo → Abrir (File → Open)** en TinyCAD. El archivo complementario `.cir` es texto SPICE para inspeccionarlo o usarlo con un simulador externo compatible, no un dibujo de TinyCAD. Para ejecutar circuitos XSPICE desde cero se necesita Desktop.

| Ejemplo | Dibujo | Lista de conexiones |
| --- | --- | --- |
| logic-counter | [Dibujo de TinyCAD](/v4/examples/simulation-tutorials/xspice/logic-counter.dzn) | [Texto SPICE](/v4/examples/simulation-tutorials/xspice/logic-counter.cir) |
