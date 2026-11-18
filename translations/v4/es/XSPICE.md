---
layout: default
---
# XSPICE y simulación digital
{: #xspice-and-digital-simulation}

XSPICE amplía ngspice con modelos de código y un sistema de simulación dirigido por eventos, coordinado con el solucionador analógico. Es útil para puertas, relojes, almacenamiento y sistemas analógicos/digitales mixtos. Consulta la [descripción general oficial de XSPICE](https://ngspice.sourceforge.io/xspice.html) para conocer la arquitectura del proyecto original.

**XSPICE es compatible con TinyCAD Desktop y no es compatible con las versiones para navegador.** El motor nativo de Desktop incluye las bibliotecas de modelos de código integradas.

*Visualización de resultados guardados:* un navegador puede abrir un dibujo que contenga una adquisición XSPICE anterior. Esto permite inspeccionar los resultados guardados; para ejecutar la simulación se necesita Desktop.

## Elegir el modelo lógico adecuado
{: #choose-the-right-logic-model}

| Enfoque | Cómo funciona | Dónde utilizarlo |
| --- | --- | --- |
| **Lógica digital** y **Bloques funcionales** integrados | Modelos SPICE de comportamiento analógico portátiles, con fuentes de alimentación y umbrales configurados | Análisis de sistemas de nivel superior en el navegador y en Desktop |
| Símbolos/modelos del tutorial de XSPICE | Lógica dirigida por eventos, retardos, almacenamiento y puentes analógico/digital explícitos | Simulación nativa de señales mixtas en Desktop |

Por tanto, una puerta de aspecto similar puede tener un contrato de modelado distinto. No sustituyas una por otra basándote únicamente en su apariencia. Ninguno de estos enfoques hace que una imagen de una placa ESP32, Raspberry Pi o Arduino ejecute firmware. La integración de TinyCAD no es un entorno general de ejecución de HDL ni de software integrado.

## Nodos analógicos y digitales
{: #analogue-and-digital-nodes}

Los nodos analógicos transportan tensiones/corrientes de valores continuos. Los nodos digitales de eventos transportan estados. Un **puente ADC** aplica umbrales para convertir la entrada analógica en estados digitales; un **puente DAC** convierte un estado digital de nuevo en un nivel de salida analógico. Estos puentes describen la conversión entre dominios del simulador, no necesariamente un dispositivo ADC/DAC físico completo.

Comprueba los umbrales, los niveles de alimentación y la carga de salida. Una tensión situada entre umbrales lógicos válidos puede producir un estado desconocido. El almacenamiento puede permanecer en estado desconocido hasta que las condiciones de reloj/restablecimiento lo establezcan. Un estado desconocido es información de diagnóstico útil; sustituirlo por un 0 supuesto puede ocultar un problema real de temporización o inicialización.

El retardo de propagación hace que el tiempo importe. Las puertas con distintos retardos de ruta pueden producir un hazard aunque una tabla de verdad estática parezca correcta. Elige un paso máximo transitorio que permita resolver la respuesta analógica y la temporización que quieras medir. No deduzcas un retardo de evento basándote únicamente en una visualización con una resolución temporal baja.

## Seguir el curso digital
{: #run-the-digital-course}

1. En Desktop, selecciona **Archivo → Abrir ejemplo → Tutorial de XSPICE y simulación digital**.
2. Abre el dibujo indicado en la lección. Se incluyen los símbolos, las declaraciones de modelos de código y los resultados conservados.
3. Lee la explicación mediante **Ver → Ver explicación** y selecciona su hoja Simulation.
4. Selecciona **Ejecutar** para realizar una nueva adquisición nativa y, a continuación, compara los estados y la temporización con la lección.
5. Guarda una copia antes de cambiar los umbrales, los retardos, el restablecimiento o la temporización del reloj.

El [tutorial de XSPICE de seis capítulos](../XSPICE-Tutorial/) trata sobre puentes y la primera ejecución, puertas y tablas de verdad, hazards, flip-flops, contadores y filtrado de señales mixtas. Incluye diagramas de circuitos, gráficos del solucionador y archivos complementarios descargables.

## Referencia del proyecto original
{: #upstream-reference}

Consulta la [documentación y el manual oficiales de ngspice](https://ngspice.sourceforge.io/docs.html) para conocer la sintaxis de los modelos de código y los puertos compatibles. La [guía HOWTO de XSPICE](https://ngspice.sourceforge.io/xspicehowto.html) trata sobre el desarrollo de modelos de código, y el [uso de XSPICE](https://ngspice.sourceforge.io/xspiceusage.html) ofrece más ejemplos e información de contexto. Esos recursos describen ngspice en su conjunto. TinyCAD utiliza sus módulos nativos integrados; no carga modelos de código compilados arbitrarios proporcionados por el usuario mediante un archivo adjunto al dibujo.
