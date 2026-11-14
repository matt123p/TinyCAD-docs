---
layout: default
---
# Simulación y SPICE
{: #simulation-and-spice}

TinyCAD puede ejecutar simulaciones de circuitos electrónicos, representar gráficamente los resultados y medir el comportamiento del circuito sin salir del dibujo. El motor integrado es **ngspice**. Tanto el navegador como la aplicación de escritorio incluyen un motor; no necesita instalar ngspice por separado para el flujo de trabajo integrado.

¿Es nuevo en simulación? Empiece con el [curso guiado de SPICE ](../SPICE-Tutorial/). Para obtener rápidamente un primer resultado, siga los pasos del divisor que aparecen a continuación. Esta referencia explica los controles y cómo interpretar sus resultados.

## Qué calcula un simulador de circuitos
{: #what-a-circuit-simulator-calculates}

SPICE significa *Simulation Program with Integrated Circuit Emphasis* (programa de simulación con énfasis en circuitos integrados). Un simulador resuelve un modelo matemático de un circuito conectado: las resistencias relacionan la tensión y la corriente, los condensadores y los inductores almacenan energía, y los modelos de semiconductores describen comportamientos no lineales. Puede hallar el punto de polarización de CC, calcular formas de onda a lo largo del tiempo e investigar la respuesta en frecuencia de pequeña señal.

Un esquema proporciona **conectividad**; un modelo SPICE proporciona **comportamiento**; un análisis especifica **qué calcular**. Los tres deben ser correctos. Una imagen realista de un amplificador o procesador no implica que contenga un modelo de simulación. Por el contrario, un triángulo o rectángulo sencillo puede contener un modelo comportamental útil.

La simulación sirve para comprobar una idea, comparar valores de componentes y entender una respuesta inesperada. El resultado depende del modelo y de las condiciones que proporcione. Los cables ideales no tienen resistencia ni inductancia parásitas; un modelo genérico de transistor no es una especificación completa para todos los transistores. La carga, la impedancia de alimentación, las tolerancias y la temperatura solo se incluyen en la medida en que los representen los modelos elegidos.

## Motores del navegador y de la aplicación de escritorio
{: #browser-and-desktop-engines}

| Funcionalidad | Navegador | Aplicación de escritorio |
| --- | --- | --- |
| SPICE analógico, gráficos, mediciones y exploración | ngspice WebAssembly incluido, en un proceso de trabajo | ngspice nativo incluido, mediante un proceso auxiliar |
| Bibliotecas portátiles y modeladas de lógica digital / bloques funcionales / sensores e interfaces | Sí | Sí |
| Modelos de código XSPICE controlados por eventos | No compatible¹ | Sí, bibliotecas nativas de modelos de código incluidas |
| Ventanas emergentes de gráficos | Sí | Sí |
| Ventanas emergentes de instrumentos virtuales | No | Sí |

¹ Las versiones para navegador pueden abrir un dibujo que contenga resultados XSPICE guardados para visualizarlos. La ejecución de XSPICE requiere la aplicación de escritorio.

Los cálculos se ejecutan localmente en el motor del navegador o de la aplicación de escritorio. La búsqueda en bibliotecas en línea es una función independiente. El motor incluido actualmente se basa en ngspice 47; el historial de ejecuciones identifica el motor y la compilación utilizados para una adquisición. Consulte el manual ascendente correspondiente cuando compruebe la sintaxis de los modelos o las diferencias entre motores.

## Ejecute su primera simulación
{: #run-your-first-simulation}

1. Abra **Open Example** en la barra de título del navegador, o **File → Open Example** en la aplicación de escritorio.
2. Seleccione **SPICE tutorial → divider → Open drawing**.
3. Examine el circuito: una fuente de 5 V alimenta dos resistencias de 1 kΩ en serie. **OUT** es su punto medio y el cable inferior es tierra **0**.
4. Seleccione la **hoja de simulación divider** en la tira de hojas. Su icono con forma de reloj la distingue de una hoja de esquema. Abra **Setup** y deje seleccionado **Operating Point**.
5. Seleccione **Run**. Cuando termine, abra **History** y seleccione la nueva adquisición completada.
6. Abra **Data**. El punto medio está a **2.5 V**. La corriente de la fuente es de **−2.5 mA** porque la referencia de corriente de las fuentes de tensión de ngspice apunta hacia su terminal positivo; en este circuito, una fuente que suministra energía tiene corriente negativa.
7. Cambie una resistencia y vuelva a ejecutar. Compare el nuevo resultado con la adquisición original.

{% include video-player.html src="/v4/videos/simulation/first-simulation.mp4" poster="/v4/videos/simulation/first-simulation.jpg" caption="Abra el divisor incluido, examine su configuración y ejecute una nueva adquisición con ngspice en el navegador. La tabla Data confirma 2.5 V en OUT y −2.5 mA a través de la fuente." %}

El ejemplo incluye una adquisición de referencia conservada. Ver un resultado inmediatamente después de abrirlo no significa que se haya ejecutado un nuevo cálculo. **History** distingue esa evidencia guardada de la adquisición que se crea al seleccionar Run.

## Cree una simulación nueva
{: #build-a-new-simulation}

1. Coloque componentes modelados desde **Standard → SPICE essentials**, o use el submenú **Simulation → SPICE components** de la barra de herramientas. **More…** abre la colección completa de elementos esenciales de SPICE.
2. Conecte los pines con cables y asigne etiquetas legibles a los nodos importantes. Incluya una conexión real a tierra **0**: **Simulation → SPICE → Insert Ground** proporciona el símbolo de alimentación correcto.
3. Añada una señal de excitación con **Simulation → SPICE → Insert Source**. Configure su tipo de tensión o corriente y su forma de onda. Añada [sondas](../Simulation-Sources-and-Instruments/#probes-and-ground) si quiere gráficos prácticos.
4. Seleccione **Simulation → Simulate** para añadir una **hoja de simulación**.
5. Seleccione un análisis y sus ajustes en **Setup**. Configure los parámetros o adjunte texto de modelo personalizado si el circuito lo necesita.
6. Elija señales, ejecute la simulación y examine el panel **Simulation charts**, además de las vistas **Data**, **History** y **Diagnostics** de la hoja. Corrija los errores de cableado o de modelo indicados antes de confiar en los valores.

En una hoja de simulación, **Run** y **Stop** aparecen en la barra de herramientas principal. La hoja comienza en **Setup**. **History** y **Diagnostics** aparecen cuando se ejecuta una simulación; **Measurements** y **Data** aparecen cuando hay datos numéricos disponibles. Las herramientas de Circuit Explorer están debajo de los ajustes del análisis en Setup; añada solo las herramientas que necesite mediante **Add tools**.

Todas las hojas de esquema de un dibujo forman **un solo circuito**. Cada hoja de simulación tiene su propia configuración: análisis, parámetros, modelos adjuntos, selecciones de señales, instrucciones e historial de ejecuciones. Añadir una segunda hoja de simulación no crea un segundo circuito esquemático aislado. Permite investigar el mismo circuito de otra manera, por ejemplo, con un análisis de CA junto a un análisis transitorio.

Use un nombre de configuración distinto para cada investigación. Al duplicar una configuración se copian sus definiciones, pero no sus adquisiciones. Solo se ejecuta una adquisición a la vez; los barridos y estudios ejecutan sus casos secuencialmente.

## Tierra, conexiones y modelos
{: #ground-connections-and-models}

La referencia de tensión de SPICE es el nodo **0**. Un símbolo de alimentación o una etiqueta de red con ese valor exacto establece la referencia. La palabra **GND** por sí sola es un nombre de red normal, a menos que también se conecte al nodo 0. Los circuitos flotantes, los pines de alimentación de modelos sin alimentar y los retornos de fuente sin conectar son problemas habituales en la primera ejecución.

Los cables deben llegar a los pines en sus puntos de conexión. El texto cercano no establece una conexión. Un cable que toque el extremo de otro cable o el zócalo de un componente puede crear una unión aunque no fuera su intención. Use [conectividad de cables](../Wires/) y la lista de redes generada para resolver dibujos ambiguos.

Cada componente simulado necesita una plantilla, un modelo y una asignación de pines válidos. Use las propiedades **SPICE** del componente colocado para inspeccionarlos. Consulte [Modelos SPICE y salida de la lista de redes](../SPICE-output/) antes de adjuntar modelos de proveedores o adaptar un símbolo de solo dibujo.

## Setup, Run y Stop
{: #setup-run-and-stop}

**Run** inicia una nueva adquisición usando el circuito y la configuración actuales. Los gráficos pueden actualizarse a medida que llegan los datos. **Stop** termina la adquisición y conserva los datos que ya hayan llegado; el estado de la ejecución y la disponibilidad indican qué se retuvo. No es un control de pausa y reanudación. Inicie otra ejecución para volver a calcular.

Las modificaciones del circuito, el modelo o la configuración convierten el resultado anterior en un dato histórico. TinyCAD marca los resultados que requieren volver a ejecutarse, en lugar de presentar valores antiguos como mediciones del circuito modificado. El historial registra la identidad del circuito y los ajustes, el motor, la hora y el resultado. Al seleccionar una adquisición anterior se selecciona evidencia anterior; no se restaura el esquema antiguo como una operación de deshacer.

## Guarde y comparta resultados
{: #save-and-share-results}

Guarde el dibujo para conservar el circuito, los modelos, las configuraciones y los resultados adquiridos. TinyCAD usa automáticamente **`.dzn`** cuando un dibujo contiene componentes, ajustes o resultados de simulación. **Save without results** conserva las definiciones de simulación y los metadatos capturados de escalares e informes, pero omite las matrices numéricas de formas de onda; los gráficos que las necesiten requerirán entonces una nueva adquisición.

Los datos numéricos conservados están limitados a 64 MiB por ejecución y 256 MiB por dibujo, con hasta 1,000 ejecuciones por configuración. Los estudios largos con pasos de tiempo pequeños pueden alcanzar estos límites. Exporte los gráficos y los datos CSV importantes, y elimine los resultados que ya no necesite. Guarde los modelos adjuntos con el dibujo para que quien lo reciba no necesite sus rutas de archivo locales.

## Dibujos de simulación `.dzn`
{: #dzn-simulation-drawings}
{: #dzn-simulation-drawings}

**`.dzn` es el formato comprimido de dibujo de TinyCAD, compatible desde TinyCAD v4.** Empaqueta el esquema, los símbolos incrustados, las hojas de simulación, los ajustes de las fuentes, el texto de los modelos adjuntos y las adquisiciones conservadas en un único archivo basado en ZIP. Los datos numéricos de formas de onda se almacenan de forma eficiente en el contenedor, incluidos los resultados complejos de CA. Se abre y guarda mediante los comandos habituales **File → Open**, **Save** y **Save As**; no hace falta extraer nada manualmente.

Los dibujos normales usan el formato XML **`.dsn`**. TinyCAD elige automáticamente `.dzn` cuando hay contenido de simulación, incluidas fuentes, sondas, instrumentos virtuales, atributos SPICE, tierra denominada `0`, hojas de simulación o resultados. **Save without results** sigue usando `.dzn` cuando conserva la configuración de simulación: elimina las matrices grandes de formas de onda, no las definiciones del experimento.

Use **Save without results** para crear una copia más pequeña para compartir cuando quien la reciba pueda volver a ejecutar la simulación. Conserve los resultados si quiere que pueda inspeccionar la adquisición, las mediciones y los detalles del motor sin volver a ejecutarla. Una adquisición guardada describe el circuito en el momento en que se ejecutó; no sustituye a volver a ejecutarla después de una modificación.

TinyCAD v3 no puede abrir archivos `.dzn`. Cambiar la extensión a `.dsn` no convierte el formato ni hace que los nuevos registros de simulación sean compatibles con v3. Conserve una copia original cuando intercambie un diseño con una versión anterior de TinyCAD. Una exportación `.cir` es texto SPICE para un simulador; es distinta de ambos formatos de dibujo de TinyCAD.

## Continúe con la referencia
{: #continue-with-the-reference}

- [Análisis y ajustes](../Simulation-Analyses/) — CC, transitorio, CA, ruido, función de transferencia y polos y ceros.
- [Fuentes, sondas e instrumentos virtuales](../Simulation-Sources-and-Instruments/) — señales de excitación, conexiones de medición y carga.
- [Gráficos, mediciones y Circuit Explorer](../Simulation-Charts-and-Measurements/) — ajuste, barridos, requisitos y estudios.
- [Modelos SPICE y salida de la lista de redes](../SPICE-output/) — plantillas, archivos de modelo y simulación externa.
- [XSPICE y simulación digital](../XSPICE/) — modelos de eventos y de señal mixta en la aplicación de escritorio.
- [Solución de problemas](../Simulation-Troubleshooting/) — diagnóstico de conectividad, modelos y problemas numéricos.
- [Tutoriales](../Simulation-Tutorials/) — los cursos completos existentes de SPICE y XSPICE con dibujos ejecutables.

Para consultar la referencia del lenguaje y de los dispositivos del propio simulador, use la [documentación oficial de ngspice](https://ngspice.sourceforge.io/docs.html), el [manual de usuario en PDF](https://ngspice.sourceforge.io/docs/ngspice-manual.pdf) y el [manual HTML](https://ngspice.sourceforge.io/docs/ngspice-html-manual/manual.xhtml). El manual describe ngspice en su totalidad; TinyCAD ofrece los flujos de trabajo integrados compatibles que se describen aquí, no un intérprete de comandos sin restricciones.
