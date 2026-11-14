---
layout: default
title: 4. D flip-flops, clocks and reset
---
# 4. Biestables D, relojes y reinicio
{: #d-flip-flops-clocks-and-reset}

[Anterior](/v4/XSPICE-Tutorial-03/) · [Contenido](/v4/Simulation-Tutorials/) · [Siguiente](/v4/XSPICE-Tutorial-05/)

Los ejemplos de este capítulo se incluyen con TinyCAD. Elija **Abrir ejemplo (Open Example) → XSPICE and digital tutorial**, seleccione el ejemplo indicado y, a continuación, elija **Abrir dibujo (Open Drawing)**. No es necesario descargar nada.

Abra **logic-dff**. Proporciona estímulos analógicos independientes
para D, CLK y RESET. Dentro de X1, unos puentes alimentan un biestable D de XSPICE;
Q y NQ se convierten de nuevo en salidas analógicas para representarlas en una gráfica.

![Circuito de prueba del biestable D](/v4/images/simulation-tutorials/xspice/logic-dff-circuit.png)
![Reloj, datos, reinicio y Q calculados](/v4/images/simulation-tutorials/xspice/logic-dff-results.png)

Ejecute el análisis transitorio de 8 µs. En cada flanco ascendente del reloj, Q captura D y luego mantiene
ese estado entre flancos. NQ es su complemento una vez transcurrido el tiempo de propagación. El
primer flanco ascendente del reloj se produce cerca de 0.5 µs. D ya está en nivel alto, por lo que Q pasa a nivel alto
tras el retardo de reloj a salida del modelo. En este ejemplo activado por flanco positivo, los flancos descendentes del reloj no capturan datos nuevos.

## Leer la interfaz real del modelo
{: #read-the-actual-model-interface}

La instancia interna es:

```spice
Aff dd dc NULL dr dq dn flip
.model flip d_dff(ic=0 clk_delay=20n reset_delay=20n
+ rise_delay=5n fall_delay=5n)
```

Sus puertos son datos, reloj, activación asíncrona, reinicio asíncrono, salida y
salida invertida. `NULL` deja sin usar la entrada opcional de activación. El estado inicial
se establece explícitamente en cero. El orden de los puertos forma parte del contrato del modelo; la posición de los pines en
el bloque visible no lo define por sí sola.

## Probar el reinicio asíncrono
{: #test-asynchronous-reset}

RESET pasa a nivel alto cerca de 6 µs durante aproximadamente 0.5 µs. Q se pone a cero sin esperar al siguiente
flanco ascendente del reloj. Mientras el reinicio está activo, inspeccione la salida antes de interpretar
el comportamiento del reloj. Tras liberar el reinicio, los flancos de reloj posteriores reanudan la captura
de datos. Este ejemplo prueba el reinicio por separado de la forma de onda normal de D.

Use una ventana de medición breve alrededor del primer flanco de captura para medir
el retardo de reloj a Q a 2.5 V. El retardo analógico medido incluye los puentes,
no solo `clk_delay`. Use otra ventana alrededor del reinicio para examinar el borrado asíncrono.
Evite pedir a una única medición del primer flanco que resuma varios
sucesos de activación distintos.

## Suposiciones sobre el estado inicial y los tiempos de establecimiento y mantenimiento
{: #initial-state-and-setuphold-assumptions}

Establecer `ic=0` hace que este tutorial sea reproducible. En un diseño cuyo estado real al encender no esté
especificado, suponer convenientemente un estado inicial cero puede ocultar la necesidad de un
reinicio. Pruebe un pulso de reinicio explícito al arrancar y compárelo con
confiar en el ajuste de condición inicial del modelo.

A continuación, acerque una transición de datos a un flanco de reloj. Observe cómo el modelo funcional
ordena los eventos, pero no considere un resultado digital limpio como prueba de que un
dispositivo real cumple los tiempos de establecimiento y mantenimiento. Este modelo funcional sencillo no es un
modelo de metastabilidad a nivel de transistor ni permite determinar una probabilidad de resolución de la metastabilidad. Las restricciones de temporización del fabricante y un modelo de dispositivo
adecuado siguen siendo datos independientes para un análisis de temporización eléctrica.

Un caso de prueba registrado útil contiene la forma de onda de datos, la convención de flanco del reloj,
la polaridad y temporización del reinicio, la suposición sobre el estado inicial, la secuencia capturada esperada
y el umbral de medición. Esto aporta más información que una captura de pantalla de Q por sí sola.

## Descargar los circuitos de la lección
{: #download-the-lesson-circuits}

Los mismos ejemplos ya están disponibles en **Abrir ejemplo (Open Example)**. Para obtener una copia independiente, descargue un dibujo `.dzn` y use **Archivo (File) → Abrir (Open)** en TinyCAD. El archivo complementario `.cir` es texto SPICE para inspeccionarlo o usarlo en un simulador externo compatible; no es un dibujo de TinyCAD. Para ejecutar desde cero circuitos XSPICE se requiere Desktop.

| Ejemplo | Dibujo | Lista de conexiones |
| --- | --- | --- |
| logic-dff | [Dibujo de TinyCAD](/v4/examples/simulation-tutorials/xspice/logic-dff.dzn) | [Texto SPICE](/v4/examples/simulation-tutorials/xspice/logic-dff.cir) |
