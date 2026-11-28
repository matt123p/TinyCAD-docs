---
layout: default
title: "Start here: how to use these tutorials"
---
# Empieza aquí: cómo usar estos tutoriales
{: #start-here-how-to-use-these-tutorials}

[Contenido](/v4/Simulation-Tutorials/) · [Siguiente: tu primera simulación SPICE](/v4/SPICE-Tutorial-01/)

Estos tutoriales combinan explicaciones con circuitos que puedes ejecutar y modificar en
TinyCAD. **Los ejemplos ya vienen incluidos con TinyCAD.** No necesitas
descargar un ZIP del tutorial, buscar un dibujo en el disco ni instalar un programa
SPICE aparte para seguir las lecciones.

Empieza con el curso de SPICE si la simulación es nueva para ti. Comienza con tensión,
corriente y circuitos sencillos, y luego avanza a formas de onda, filtros, amplificadores
e investigaciones de diseño. El curso independiente de XSPICE trata la lógica basada en eventos
y la simulación de señales mixtas. Usa **TinyCAD Desktop** para ese curso; el motor
del navegador no incluye XSPICE.

## Buscar y abrir los ejemplos incluidos
{: #find-and-open-the-bundled-examples}

1. Abre TinyCAD y busca **Open Example** a la derecha de la barra de título del navegador, o **Archivo → Abrir ejemplo** en Desktop. Tiene un
   icono de carpeta abierta. Esto abre el navegador de ejemplos.
2. Elige **SPICE tutorial** para las lecciones analógicas o **XSPICE and digital
   tutorial** para las lecciones digitales. Los grupos también aparecen en el área de
   navegación del navegador.
3. En la lista **Drawings** del grupo, selecciona el ejemplo mencionado en la lección.
   Para tu primer experimento, selecciona **divider** en **SPICE tutorial**.
4. Lee su descripción y comprueba la vista previa del circuito. Al seleccionar el ejemplo
   se muestran sus detalles; todavía no se sustituye tu dibujo.
5. Elige **Open drawing** en la parte inferior del navegador. TinyCAD abre una
   copia editable del ejemplo. Si tienes trabajo sin guardar, resuelve el aviso para
   guardar antes de continuar.

La instrucción breve **Open Example → SPICE tutorial → divider → Open drawing**
indica estos mismos pasos. Un nombre como **divider**, **rc-ac** o **logic-counter**
es el nombre del ejemplo en este navegador, no un nombre de archivo que debas buscar.

Usa **Search groups and examples** para buscar un ejemplo por nombre. Si un filtro oculta
lo que necesitas, borra la búsqueda y usa **All groups** para volver a la lista de grupos.
**Open drawing** estará disponible después de seleccionar un ejemplo.
La entrada **Empieza aquí — uso de los tutoriales** también muestra esta guía y
abre el mismo primer circuito divisor.

Mira [abrir, ejecutar y modificar un divisor](/v4/videos/simulation-tutorials/spice/first-run.mp4) para ver una guía
con subtítulos de estos pasos y de tus dos primeras adquisiciones.

## Seguir una lección junto con su circuito
{: #follow-a-lesson-alongside-its-circuit}

Mantén el capítulo disponible en el manual o en el visor Markdown mientras trabajas en
TinyCAD. El navegador de ejemplos también muestra la descripción de la lección asociada.
Cada capítulo comienza indicando los ejemplos integrados que utiliza. Algunos capítulos usan
varios: por ejemplo, el capítulo sobre generadores de señal ofrece ejemplos independientes
de fuentes para que puedas estudiar una forma de onda a la vez.

Sigue este procedimiento para cada experimento:

1. **Lee la pregunta.** Identifica qué estás investigando: una tensión de CC,
   el tiempo de carga, la frecuencia de corte, un estado lógico u otra magnitud.
2. **Inspecciona el circuito.** Localiza la fuente, la tierra, los valores de los
   componentes y las señales con nombre. Las etiquetas como IN y OUT identifican nodos
   eléctricos; las referencias como R1 y C1 identifican componentes.
3. **Comprueba la configuración guardada.** Selecciona la hoja **Simulation** y consulta
   **Setup**. Los ejemplos ya contienen los ajustes de análisis y los modelos
   necesarios para la lección.
4. **Predice el resultado**, usando la explicación o la ecuación del capítulo.
5. **Elige Run** y compara la nueva adquisición con los valores y gráficos esperados.
   Inspecciona tanto los números como la forma de la traza.
6. **Cambia una sola cosa** según sugiera la lección, predice su efecto y vuelve a ejecutar.
   Anota el ajuste que cambiaste y lo que ocurrió.

Después de abrir un ejemplo, elige **Explanation** en la barra de título del navegador, o **Vista → Ver explicación** en Desktop, para mantener sus
instrucciones junto al dibujo. El panel de explicación aparece junto a los gráficos de
simulación y se puede redimensionar o cerrar por separado. Elige
**Explanation** otra vez en la barra de título del navegador, o **Vista → Ver explicación** en Desktop, para volver a abrirlo.

El icono con forma de pulso de la barra de herramientas muestra el texto emergente
**Simulation**. Cuando una lección indique **Simulation → Show charts** o **Simulation → SPICE components**, abre
el menú de ese icono. La **hoja Simulation** es una pestaña independiente dentro del dibujo;
contiene las vistas de configuración y resultados del experimento.

![TinyCAD con el primer circuito divisor y su panel de gráficos de simulación](/v4/Images/simulation-tutorials/spice/tinycad-first-run.png)

Esta captura de pantalla de la aplicación muestra el divisor después de abrirlo, con las pestañas
de hoja debajo del circuito y el panel de gráficos a la derecha. Los puntos de partida clave
son el circuito, la hoja Simulation y **Run**.

## Entender los resultados esperados
{: #understand-the-expected-outputs}

Las imágenes de circuitos muestran la disposición y las conexiones que hay que buscar. Los gráficos
de resultados muestran datos de referencia calculados por el solucionador. Las capturas de pantalla
de la aplicación muestran dónde trabajar en TinyCAD. El tamaño de tu ventana, el zoom y los colores
de los gráficos pueden variar; compara los valores del circuito, las señales, las unidades y los
ajustes de análisis.

En el ejemplo **divider** sin modificar, la fuente es de 5 V y ambas resistencias son de
1 kΩ. Tras ejecutar un análisis del punto de operación, espera IN = **5 V**, OUT = **2.5 V** y
la corriente de la fuente `v1#branch` = **−2.5 mA**. Un punto de operación tiene un solo valor por
señal, por lo que no produce una forma de onda variable en el tiempo. La primera lección explica
el signo de la corriente y el cálculo del divisor de tensión.

Los dibujos incluyen adquisiciones de referencia conservadas, por lo que los resultados podrían
estar visibles antes de que pulses **Run**. Son resultados almacenados de una ejecución anterior.
Después de editar el circuito o sus ajustes, vuelve a ejecutar y examina la nueva adquisición.
Las pequeñas diferencias numéricas son normales; una diferencia grande requiere comprobar los
valores de los componentes, las suposiciones del modelo, las unidades y las ventanas de medición.

## Conservar los experimentos y volver al original
{: #keep-experiments-and-return-to-the-original}

Los ejemplos integrados se abren como copias editables. Usa **Save As** para guardar tu trabajo
con un nombre significativo, como un divisor con una resistencia inferior diferente.
Guardar tu copia no modifica el original incluido.

Para restablecer un experimento, vuelve a abrir el ejemplo por su nombre mediante **Open Example**.
Guarda los cambios que quieras conservar cuando se te solicite. Así se restaura el circuito,
los ajustes y los resultados de referencia conservados originales del ejemplo. Usa el mismo proceso
cuando un capítulo pase a otro ejemplo.

El guardado normal puede conservar las adquisiciones con el dibujo. **Save without
results** conserva el circuito y los ajustes, pero omite los resultados almacenados; vuelve a
 ejecutar la simulación cuando los necesites de nuevo.

## Elegir tu recorrido por el material
{: #choose-your-route-through-the-material}

| Tu objetivo | Por dónde empezar |
| --- | --- |
| Aprender simulación desde el principio | [Capítulo 1 de SPICE](/v4/SPICE-Tutorial-01/) y luego seguir los capítulos en orden |
| Entender los motores, símbolos y controles de TinyCAD | [Cómo implementa TinyCAD SPICE](/v4/SPICE-Tutorial-11/) |
| Elegir una forma de onda de entrada | [Generadores de señal](/v4/SPICE-Tutorial-03/) |
| Investigar el amplificador AMP.DSN reconstruido | [Polarización del amplificador](/v4/SPICE-Tutorial-07/), seguido de ganancia y potencia |
| Aprender simulación digital basada en eventos | [Capítulo 1 de XSPICE](/v4/XSPICE-Tutorial-01/), usando Desktop |

Los enlaces de la parte superior de cada capítulo vuelven al contenido o avanzan a la siguiente
lección. Puedes volver a un ejemplo anterior en cualquier momento. Si falla un experimento,
lee su vista **Diagnostics** y compáralo con un ejemplo integrado recién abierto antes de hacer
más cambios.

## Controles actuales de Circuit Explorer
{: #current-circuit-explorer-controls}

Selecciona la hoja Simulation, abre **Setup** y desplázate hasta **Circuit Explorer**. Usa **Add tools** para añadir Measurements, Tune / sweep, Requirements, DC overlay o Analysis lab. Las herramientas configuradas aparecen a la izquierda; el panel de gráficos sigue siendo una vista independiente. **Run** y **Stop** están en la barra de herramientas principal cuando se selecciona una hoja Simulation. Consulta [Gráficos, mediciones y Circuit Explorer](/v4/Simulation-Charts-and-Measurements/) para obtener la referencia actual.
