---
layout: default
title: Simulation tutorials for TinyCAD
---
# Tutoriales de simulación
{: #simulation-tutorials}

Comience con [Cómo usar estos tutoriales y abrir los ejemplos incluidos](/v4/Tutorial-Start-Here/),
y continúe con [SPICE: introducción y su primera simulación](/v4/SPICE-Tutorial-01/).
Para lógica controlada por eventos, comience con el [curso independiente de XSPICE y sistemas digitales](/v4/XSPICE-Tutorial-01/).

Hay un capítulo introductorio común, once capítulos de SPICE y seis capítulos de XSPICE.
Los cursos completos, los dibujos ejecutables, las imágenes y las grabaciones están incluidos en este manual. Todos los ejemplos de los tutoriales se incluyen con TinyCAD; no es necesario descargar nada para seguirlos. Elija **Abrir ejemplo (Open Example)** en la barra de título del navegador o **Archivo → Abrir ejemplo (File → Open Example)** en la versión de escritorio; seleccione
**Tutorial de SPICE** o **Tutorial de XSPICE y sistemas digitales**, elija el ejemplo indicado en el capítulo y, a continuación, seleccione **Abrir dibujo (Open Drawing)**. Esto abre una copia editable;
use **Guardar como (Save As)** para conservar sus pruebas y vuelva a abrir el ejemplo integrado
para empezar de nuevo. Los dibujos incluyen símbolos integrados, definiciones de modelos,
configuración del análisis y una adquisición de referencia conservada.

## SPICE
{: #spice}

1. [Introducción y primera ejecución](/v4/SPICE-Tutorial-01/)
2. [Tensión, corriente y potencia en CC](/v4/SPICE-Tutorial-02/)
3. [Generadores de señal y estímulos](/v4/SPICE-Tutorial-03/)
4. [Análisis transitorio y carga de RC ](/v4/SPICE-Tutorial-04/)
5. [Respuesta en frecuencia y filtros](/v4/SPICE-Tutorial-05/)
6. [Diodos, rectificación y rizado](/v4/SPICE-Tutorial-06/)
7. [Reconstrucción de AMP.DSN](/v4/SPICE-Tutorial-07/)
8. [Ganancia y ancho de banda del amplificador](/v4/SPICE-Tutorial-08/)
9. [Salida, recorte y potencia del amplificador](/v4/SPICE-Tutorial-09/)
10. [Barridos, ruido e investigaciones de diseño](/v4/SPICE-Tutorial-10/)
11. [Cómo implementa TinyCAD SPICE: motores, símbolos y flujo de trabajo](/v4/SPICE-Tutorial-11/)

## Recorridos en vídeo
{: #video-walkthroughs}

Cinco vídeos breves muestran los pasos en los que resulta más útil ver los controles.
Los vídeos usan TinyCAD en el navegador con ngspice incluido. Reprodúzcalos en el
reproductor integrado de la lección o use estos enlaces en un visor Markdown:

| Lección | Demostración |
| --- | --- |
| 1 | [Abrir, ejecutar y modificar un divisor](/v4/videos/simulation-tutorials/spice/first-run.mp4) |
| 3 | [Configuración de la fuente y vista previa de la forma de onda](/v4/videos/simulation-tutorials/spice/source-settings.mp4) |
| 4 | [Carga de RC, paso temporal y constante de tiempo](/v4/videos/simulation-tutorials/spice/rc-transient.mp4) |
| 5 | [Magnitud de CA, dB, fase y frecuencia de corte](/v4/videos/simulation-tutorials/spice/ac-response.mp4) |
| 6 | [Medición del rizado estabilizado del rectificador](/v4/videos/simulation-tutorials/spice/rectifier-ripple.mp4) |

Los vídeos complementan las instrucciones escritas y las figuras. Consulte el texto del capítulo
para ver las ecuaciones, los supuestos y los valores esperados. Los menús de la versión de escritorio son distintos de los del navegador; allí, use Archivo → Abrir ejemplo.

## XSPICE y simulación digital
{: #xspice-and-digital-simulation}

1. [Modelos, puentes y primera ejecución](/v4/XSPICE-Tutorial-01/)
2. [Puertas y tablas de verdad](/v4/XSPICE-Tutorial-02/)
3. [Retardo de propagación y riesgos](/v4/XSPICE-Tutorial-03/)
4. [Flip-flops, relojes y reinicio](/v4/XSPICE-Tutorial-04/)
5. [Contadores y relojes divididos](/v4/XSPICE-Tutorial-05/)
6. [Filtrado de señales mixtas y estados desconocidos](/v4/XSPICE-Tutorial-06/)

Los ejemplos de XSPICE requieren el motor nativo de TinyCAD Desktop. Los ejemplos SPICE habituales usan modelos analógicos, pero la validación numérica de este paquete
se realizó con ngspice 47 nativo incluido. Que una ejecución nativa sea satisfactoria no significa que se hayan probado todas las combinaciones de navegador y versión.

Las figuras de circuitos se generan a partir de dibujos de TinyCAD reabiertos. Las figuras de resultados
son gráficos de datos reales del solucionador, no formas de onda esperadas dibujadas a mano. Los pies de figura
identifican por separado las capturas de pantalla de la aplicación. Es normal que haya pequeñas diferencias numéricas respecto a los valores impresos cuando cambian el modelo, la temperatura, el paso temporal o la versión del motor.


## Referencia del manual
{: #manual-reference}

Para consultar los controles actuales, los modelos, la configuración del análisis, los gráficos y la solución de problemas, consulte [Simulación](/v4/Simulation/) y [Ejemplos incluidos](/v4/Bundled-Examples/). En la versión de escritorio, acceda mediante **Archivo → Abrir ejemplo (File → Open Example)** y **Ver → Ver explicación (View → View Explanation)**.

## Descargas de dibujos analógicos
{: #analogue-drawing-downloads}

Use el explorador de ejemplos integrado o descargue aquí un dibujo y ábralo en TinyCAD. Los netlists se proporcionan por separado como texto.

| Ejemplo | Dibujo | Netlist |
| --- | --- | --- |
| amp-ac | [Dibujo de TinyCAD](/v4/examples/simulation-tutorials/spice/amp-ac.dzn) | [Texto SPICE](/v4/examples/simulation-tutorials/spice/amp-ac.cir) |
| amp-bias | [Dibujo de TinyCAD](/v4/examples/simulation-tutorials/spice/amp-bias.dzn) | [Texto SPICE](/v4/examples/simulation-tutorials/spice/amp-bias.cir) |
| amp-clipping | [Dibujo de TinyCAD](/v4/examples/simulation-tutorials/spice/amp-clipping.dzn) | [Texto SPICE](/v4/examples/simulation-tutorials/spice/amp-clipping.cir) |
| amp-small-signal | [Dibujo de TinyCAD](/v4/examples/simulation-tutorials/spice/amp-small-signal.dzn) | [Texto SPICE](/v4/examples/simulation-tutorials/spice/amp-small-signal.cir) |
| controlled-source | [Dibujo de TinyCAD](/v4/examples/simulation-tutorials/spice/controlled-source.dzn) | [Texto SPICE](/v4/examples/simulation-tutorials/spice/controlled-source.cir) |
| dc-sweep | [Dibujo de TinyCAD](/v4/examples/simulation-tutorials/spice/dc-sweep.dzn) | [Texto SPICE](/v4/examples/simulation-tutorials/spice/dc-sweep.cir) |
| divider | [Dibujo de TinyCAD](/v4/examples/simulation-tutorials/spice/divider.dzn) | [Texto SPICE](/v4/examples/simulation-tutorials/spice/divider.cir) |
| rc-ac | [Dibujo de TinyCAD](/v4/examples/simulation-tutorials/spice/rc-ac.dzn) | [Texto SPICE](/v4/examples/simulation-tutorials/spice/rc-ac.cir) |
| rc-noise | [Dibujo de TinyCAD](/v4/examples/simulation-tutorials/spice/rc-noise.dzn) | [Texto SPICE](/v4/examples/simulation-tutorials/spice/rc-noise.cir) |
| rc-pz | [Dibujo de TinyCAD](/v4/examples/simulation-tutorials/spice/rc-pz.dzn) | [Texto SPICE](/v4/examples/simulation-tutorials/spice/rc-pz.cir) |
| rc-step | [Dibujo de TinyCAD](/v4/examples/simulation-tutorials/spice/rc-step.dzn) | [Texto SPICE](/v4/examples/simulation-tutorials/spice/rc-step.cir) |
| rc-tf | [Dibujo de TinyCAD](/v4/examples/simulation-tutorials/spice/rc-tf.dzn) | [Texto SPICE](/v4/examples/simulation-tutorials/spice/rc-tf.cir) |
| rectifier | [Dibujo de TinyCAD](/v4/examples/simulation-tutorials/spice/rectifier.dzn) | [Texto SPICE](/v4/examples/simulation-tutorials/spice/rectifier.cir) |
| source-current | [Dibujo de TinyCAD](/v4/examples/simulation-tutorials/spice/source-current.dzn) | [Texto SPICE](/v4/examples/simulation-tutorials/spice/source-current.cir) |
| source-dc | [Dibujo de TinyCAD](/v4/examples/simulation-tutorials/spice/source-dc.dzn) | [Texto SPICE](/v4/examples/simulation-tutorials/spice/source-dc.cir) |
| source-exponential | [Dibujo de TinyCAD](/v4/examples/simulation-tutorials/spice/source-exponential.dzn) | [Texto SPICE](/v4/examples/simulation-tutorials/spice/source-exponential.cir) |
| source-fm | [Dibujo de TinyCAD](/v4/examples/simulation-tutorials/spice/source-fm.dzn) | [Texto SPICE](/v4/examples/simulation-tutorials/spice/source-fm.cir) |
| source-pulse | [Dibujo de TinyCAD](/v4/examples/simulation-tutorials/spice/source-pulse.dzn) | [Texto SPICE](/v4/examples/simulation-tutorials/spice/source-pulse.cir) |
| source-pwl | [Dibujo de TinyCAD](/v4/examples/simulation-tutorials/spice/source-pwl.dzn) | [Texto SPICE](/v4/examples/simulation-tutorials/spice/source-pwl.cir) |
| source-sine | [Dibujo de TinyCAD](/v4/examples/simulation-tutorials/spice/source-sine.dzn) | [Texto SPICE](/v4/examples/simulation-tutorials/spice/source-sine.cir) |
| source-triangle | [Dibujo de TinyCAD](/v4/examples/simulation-tutorials/spice/source-triangle.dzn) | [Texto SPICE](/v4/examples/simulation-tutorials/spice/source-triangle.cir) |

## Descargas de dibujos de XSPICE
{: #xspice-drawing-downloads}

Use el explorador de ejemplos integrado o descargue aquí un dibujo y ábralo en TinyCAD. Los netlists se proporcionan por separado como texto.

| Ejemplo | Dibujo | Netlist |
| --- | --- | --- |
| logic-buffer | [Dibujo de TinyCAD](/v4/examples/simulation-tutorials/xspice/logic-buffer.dzn) | [Texto SPICE](/v4/examples/simulation-tutorials/xspice/logic-buffer.cir) |
| logic-counter | [Dibujo de TinyCAD](/v4/examples/simulation-tutorials/xspice/logic-counter.dzn) | [Texto SPICE](/v4/examples/simulation-tutorials/xspice/logic-counter.cir) |
| logic-dff | [Dibujo de TinyCAD](/v4/examples/simulation-tutorials/xspice/logic-dff.dzn) | [Texto SPICE](/v4/examples/simulation-tutorials/xspice/logic-dff.cir) |
| logic-filter | [Dibujo de TinyCAD](/v4/examples/simulation-tutorials/xspice/logic-filter.dzn) | [Texto SPICE](/v4/examples/simulation-tutorials/xspice/logic-filter.cir) |
| logic-hazard | [Dibujo de TinyCAD](/v4/examples/simulation-tutorials/xspice/logic-hazard.dzn) | [Texto SPICE](/v4/examples/simulation-tutorials/xspice/logic-hazard.cir) |
| logic-nand | [Dibujo de TinyCAD](/v4/examples/simulation-tutorials/xspice/logic-nand.dzn) | [Texto SPICE](/v4/examples/simulation-tutorials/xspice/logic-nand.cir) |
| logic-unknown | [Dibujo de TinyCAD](/v4/examples/simulation-tutorials/xspice/logic-unknown.dzn) | [Texto SPICE](/v4/examples/simulation-tutorials/xspice/logic-unknown.cir) |
