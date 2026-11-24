---
layout: default
---
# Simulación y SPICE
{: #simulation-and-spice}

TinyCAD puede ejecutar simulaciones electrónicas, representar gráficamente los resultados y medir el comportamiento del circuito sin salir del dibujo. El motor integrado es **ngspice**. Tanto el navegador como la aplicación de escritorio incluyen un motor; no necesita instalar ngspice por separado para el flujo de trabajo integrado.

¿Es nuevo en simulación? Empiece con el [curso guiado de SPICE ](../SPICE-Tutorial/). Para obtener rápidamente un primer resultado, siga los pasos del divisor que aparecen a continuación. Esta referencia explica los controles y cómo interpretar sus resultados.

## Qué calcula un simulador de circuitos
{: #what-a-circuit-simulator-calculates}

SPICE significa *Simulation Program with Integrated Circuit Emphasis*. Un simulador resuelve un modelo matemático de un circuito conectado: las resistencias relacionan la tensión y la corriente, los condensadores y las inductancias almacenan energía, y los modelos de semiconductores describen el comportamiento no lineal. Puede hallar la polarización de CC, calcular formas de onda a lo largo del tiempo e investigar la respuesta en frecuencia de pequeña señal.

Un esquema proporciona **conectividad**; un modelo SPICE proporciona **comportamiento**; un análisis especifica **qué calcular**. Los tres deben ser correctos. Una imagen realista de un amplificador o procesador no implica que contenga un modelo de simulación. A la inversa, un triángulo o rectángulo sencillo puede contener un modelo de comportamiento útil.

La simulación resulta útil para comprobar una idea, comparar valores de componentes y comprender una respuesta inesperada. El resultado depende del modelo y las condiciones que proporcione. Los cables ideales no tienen resistencia ni inductancia parásitas; un modelo genérico de transistor no constituye una especificación completa de todos los transistores. La carga, la impedancia de alimentación, las tolerancias y la temperatura solo se tienen en cuenta en la medida en que los representen los modelos elegidos.

## Motores del navegador y de escritorio
{: #browser-and-desktop-engines}

| Capacidad | Navegador | Aplicación de escritorio |
| --- | --- | --- |
| SPICE analógico, gráficos, mediciones y exploración | ngspice WebAssembly incluido, ejecutado en un worker | ngspice nativo incluido, mediante un proceso auxiliar |
| Bibliotecas portátiles de lógica digital modelada / bloques funcionales / sensores e interfaces | Sí | Sí |
| Modelos de código XSPICE controlados por eventos | No compatible¹ | Sí, bibliotecas nativas de modelos de código incluidas |
| Ventanas emergentes de gráficos | Sí | Sí |
| Ventanas emergentes de instrumentos virtuales | No | Sí |

¹ Las compilaciones para navegador pueden abrir un dibujo que contenga resultados XSPICE guardados para visualizarlos. La ejecución de XSPICE requiere la aplicación de escritorio.

Los cálculos se ejecutan localmente en el motor del navegador o de escritorio. La búsqueda en bibliotecas en línea es una función independiente. El motor incluido actualmente se basa en ngspice 47; el historial de ejecuciones identifica el motor y la compilación utilizados para una adquisición. Consulte el manual correspondiente del proyecto original para comprobar la sintaxis de los modelos o las diferencias entre motores.

## Ejecutar la primera simulación
{: #run-your-first-simulation}

1. Abra **Abrir ejemplo (Open Example)** en la barra de título del navegador, o **Archivo → Abrir ejemplo (File → Open Example)** en la aplicación de escritorio.
2. Seleccione **Tutorial de SPICE → divisor → Abrir dibujo (SPICE tutorial → divider → Open drawing)**.
3. Examine el circuito: una fuente de 5 V alimenta dos resistencias de 1 kΩ en serie. **OUT** es su punto medio y el cable inferior es tierra **0**.
4. Seleccione la **hoja de simulación divider** en la franja de hojas. Su icono parecido a un reloj la distingue de una hoja de esquema. Abra **Configuración (Setup)** y deje seleccionado **Punto de funcionamiento (Operating Point)**.
5. Seleccione **Ejecutar (Run)**. Cuando termine, abra **Historial (History)** y seleccione la nueva adquisición completada.
6. Abra **Datos (Data)**. El punto medio está a **2.5 V**. La corriente de la fuente es **−2.5 mA** porque la referencia de corriente de la fuente de tensión de ngspice apunta hacia su terminal positivo; en este circuito, una fuente que suministra corriente tiene corriente negativa.
7. Cambie una resistencia y vuelva a ejecutar. Compare el nuevo resultado con la adquisición original.

{% include video-player.html src="/v4/videos/simulation/first-simulation.mp4" poster="/v4/videos/simulation/first-simulation.jpg" caption="Abra el divisor incluido, examine su configuración y ejecute una adquisición nueva con ngspice en el navegador. La tabla Datos confirma 2.5 V en OUT y −2.5 mA a través de la fuente." %}

El ejemplo incluye una adquisición de referencia conservada. Ver un resultado inmediatamente después de abrirlo no significa que se haya ejecutado un nuevo cálculo. **Historial (History)** distingue esa evidencia guardada de la adquisición que se crea al seleccionar Ejecutar.

## Crear una simulación nueva
{: #build-a-new-simulation}

1. Coloque componentes modelados desde **Estándar → Elementos esenciales de SPICE (Standard → SPICE essentials)**, o use el submenú **Simulación → Componentes SPICE (Simulation → SPICE components)** de la barra de herramientas. **Más… (More…)** abre la colección completa de elementos esenciales de SPICE. Sus símbolos ya tienen un [modelo incluido y asignación de pines](../Bundled-SPICE-Models/).
2. Conecte los pines con cables y asigne etiquetas legibles a los nodos importantes. Incluya una conexión real a tierra **0**: **Simulación → SPICE → Insertar tierra (Simulation → SPICE → Insert Ground)** proporciona el símbolo de alimentación correcto.
3. Añada una señal de excitación con **Simulación → SPICE → Insertar fuente (Simulation → SPICE → Insert Source)**. Configure su tipo de tensión/corriente y forma de onda. Añada [sondas](../Simulation-Sources-and-Instruments/#probes-and-ground) si desea disponer de gráficos prácticos.
4. Seleccione **Simulación → Simular (Simulation → Simulate)** para añadir una **hoja de simulación**.
5. Seleccione un análisis y configure sus opciones en **Configuración (Setup)**. Establezca los parámetros o adjunte texto de modelo personalizado si el circuito lo necesita.
6. Elija las señales, ejecute la simulación y examine el panel **Gráficos de simulación (Simulation charts)**, así como las vistas **Datos (Data)**, **Historial (History)** y **Diagnósticos (Diagnostics)** de la hoja. Corrija los errores de cableado o de modelo indicados antes de confiar en los valores.

En una hoja de simulación, **Ejecutar (Run)** y **Detener (Stop)** aparecen en la barra de herramientas principal. La hoja comienza con **Configuración (Setup)**. **Historial (History)** y **Diagnósticos (Diagnostics)** aparecen cuando hay una ejecución; **Mediciones (Measurements)** y **Datos (Data)** aparecen cuando hay datos numéricos disponibles. Las herramientas del Explorador de circuitos están debajo de la configuración del análisis, en Configuración; añada solo las que necesite mediante **Añadir herramientas (Add tools)**.

Todas las hojas de esquema de un dibujo forman **un solo circuito**. Cada hoja de simulación tiene una configuración independiente: análisis, parámetros, modelos adjuntos, selección de señales, instrucciones e historial de ejecuciones. Añadir una segunda hoja de simulación no crea un segundo circuito de esquema aislado. Permite investigar el mismo circuito de otra manera, por ejemplo, con un análisis de CA junto a uno transitorio.

Use un nombre de configuración distinto para cada investigación. Al duplicar una configuración, se copian sus definiciones, pero no sus adquisiciones. Solo se ejecuta una adquisición a la vez; los barridos y estudios ejecutan sus casos secuencialmente.

## Tierra, conexiones y modelos
{: #ground-connections-and-models}

La referencia de tensión de SPICE es el nodo **0**. Un símbolo de alimentación o una etiqueta de red con ese valor exacto establece la referencia. La palabra **GND** por sí sola es un nombre de red ordinario, a menos que también se conecte al nodo 0. Los circuitos flotantes, los pines de alimentación de modelos sin alimentar y los retornos de fuentes sin conectar son problemas habituales en la primera ejecución.

Los cables deben llegar a los pines en sus puntos de conexión. El texto cercano no constituye una conexión. Un cable que toque el extremo de otro cable o el terminal de un componente puede crear una unión aunque no fuera su intención. Use la [conectividad de cables](../Wires/) y la lista de conexiones generada para resolver dibujos ambiguos.

Cada componente simulado necesita una plantilla, un modelo y una asignación de pines válidos. Use las propiedades **SPICE** del componente colocado para examinarlos. Consulte [Modelos SPICE y salida de la lista de conexiones](../SPICE-output/) antes de adjuntar modelos de fabricantes o adaptar un símbolo que solo se use en dibujos.

## Configurar, ejecutar y detener
{: #setup-run-and-stop}

**Ejecutar (Run)** inicia una adquisición nueva con el circuito y la configuración actuales. Los gráficos pueden actualizarse a medida que llegan los datos. **Detener (Stop)** termina la adquisición y conserva los datos que ya hayan llegado; el estado y la disponibilidad de la ejecución indican qué se ha conservado. No es un control para pausar y reanudar. Inicie otra ejecución para volver a calcular.

Las modificaciones del circuito, del modelo o de la configuración convierten el resultado anterior en histórico. TinyCAD marca los resultados que requieren volver a ejecutarse, en lugar de presentar valores antiguos como mediciones del circuito modificado. El historial registra la identidad del circuito y la configuración, el motor, la hora y el resultado. Seleccionar una adquisición anterior muestra evidencia anterior; no restaura el esquema antiguo como si se tratara de una operación de deshacer.

## Guardar y compartir resultados
{: #save-and-share-results}

Guarde el dibujo para conservar el circuito, los modelos, las configuraciones y los resultados adquiridos. TinyCAD usa automáticamente **`.dzn`** cuando un dibujo contiene componentes, configuraciones o resultados de simulación. **Guardar sin resultados (Save without results)** conserva las definiciones de simulación y los metadatos capturados de escalares e informes, pero omite las matrices numéricas de las formas de onda; los gráficos que necesiten esas matrices requerirán entonces una nueva adquisición.

Los datos numéricos conservados están limitados a 64 MiB por ejecución y 256 MiB por dibujo, con un máximo de 1.000 ejecuciones por configuración. Los estudios prolongados con pasos de tiempo pequeños pueden alcanzar estos límites. Exporte los gráficos importantes y los datos CSV, y elimine los resultados que ya no necesite. Guarde los modelos adjuntos con el dibujo para que el destinatario no necesite las rutas de archivo locales.

## Dibujos de simulación `.dzn`
{: #dzn-simulation-drawings}
{: #dzn-simulation-drawings}

**`.dzn` es el formato comprimido de dibujo de TinyCAD, compatible desde TinyCAD v4.** Empaqueta el esquema, los símbolos incrustados, las hojas de simulación, la configuración de las fuentes, el texto de los modelos adjuntos y las adquisiciones conservadas en un único archivo basado en ZIP. Los datos numéricos de las formas de onda se almacenan de forma eficiente en el contenedor, incluidos los resultados complejos de CA. Se abre y se guarda mediante los comandos habituales **Archivo → Abrir (File → Open)**, **Guardar (Save)** y **Guardar como (Save As)**; no es necesario extraer nada manualmente.

Los dibujos normales usan el formato XML **`.dsn`**. TinyCAD selecciona automáticamente `.dzn` cuando hay contenido de simulación, incluidas fuentes, sondas, instrumentos virtuales, atributos SPICE, tierra con el nombre `0`, hojas de simulación o resultados. **Guardar sin resultados (Save without results)** sigue usando `.dzn` cuando conserva la configuración de simulación: elimina las grandes matrices de formas de onda, no las definiciones del experimento.

Use **Guardar sin resultados (Save without results)** para crear una copia más pequeña para compartir cuando el destinatario pueda volver a ejecutar la simulación. Conserve los resultados si desea que el destinatario pueda inspeccionar su adquisición, mediciones y detalles del motor sin volver a ejecutarla. Una adquisición guardada describe el circuito tal como estaba cuando se ejecutó; no sustituye a volver a ejecutarla después de una modificación.

TinyCAD v3 no puede abrir archivos `.dzn`. Cambiar la extensión a `.dsn` no convierte el formato ni hace que los nuevos registros de simulación sean compatibles con v3. Conserve una copia original cuando intercambie un diseño con una versión anterior de TinyCAD. Una exportación `.cir` es texto SPICE para un simulador; es distinta de ambos formatos de dibujo de TinyCAD.

## Continúe con la referencia
{: #continue-with-the-reference}

- [Análisis y configuración](../Simulation-Analyses/) — CC, transitorio, CA, ruido, función de transferencia y polos-cero.
- [Fuentes, sondas e instrumentos virtuales](../Simulation-Sources-and-Instruments/) — señales de excitación, conexiones de medición y carga.
- [Gráficos, mediciones y Explorador de circuitos](../Simulation-Charts-and-Measurements/) — ajuste, barridos, requisitos y estudios.
- [Modelos SPICE incluidos](../Bundled-SPICE-Models/) — buscar, adjuntar y personalizar un modelo.
- [Modelos SPICE y salida de la lista de conexiones](../SPICE-output/) — plantillas, archivos de modelo y simulación externa.
- [XSPICE y simulación digital](../XSPICE/) — modelos de escritorio controlados por eventos y de señal mixta.
- [Solución de problemas](../Simulation-Troubleshooting/) — diagnóstico de problemas de conectividad, modelos y cálculo numérico.
- [Tutoriales](../Simulation-Tutorials/) — los cursos existentes completos de SPICE y XSPICE con dibujos ejecutables.

Para consultar el lenguaje y la referencia de dispositivos del propio simulador, use la [documentación oficial de ngspice](https://ngspice.sourceforge.io/docs.html), el [manual del usuario en PDF](https://ngspice.sourceforge.io/docs/ngspice-manual.pdf) y el [manual HTML](https://ngspice.sourceforge.io/docs/ngspice-html-manual/manual.xhtml). El manual describe ngspice en su conjunto; TinyCAD expone los flujos de trabajo integrados compatibles que se describen aquí, no un intérprete de comandos sin restricciones.
