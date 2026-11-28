---
layout: default
title: 11. How TinyCAD implements SPICE
---
# 11. Cómo implementa TinyCAD SPICE
{: #how-tinycad-implements-spice}

[Anterior: investigaciones de diseño](/v4/SPICE-Tutorial-10/) · [Contenido](/v4/Simulation-Tutorials/) · [Curso de XSPICE](/v4/XSPICE-Tutorial-01/)

TinyCAD proporciona el editor de esquemas, la configuración de simulación, los instrumentos, los gráficos
y las mediciones. **ngspice** es el motor de resolución de circuitos que hay debajo.
Dibujas y configuras el experimento en TinyCAD; TinyCAD lo traduce a texto de circuito
SPICE, ejecuta ngspice y presenta los resultados obtenidos.

Los ejemplos de este capítulo se incluyen con TinyCAD. Elige **Abrir ejemplo (Open Example) →
Tutorial de SPICE (SPICE tutorial)**, selecciona **divider** o **rc-ac** y, a continuación, elige **Abrir dibujo (Open Drawing)**.
Para la demostración digital, usa **Abrir ejemplo (Open Example) → Tutorial de XSPICE y digital (XSPICE and digital tutorial) →
logic-buffer → Abrir dibujo (Open Drawing)**. No es necesario descargar tutoriales ni modelos.

## SPICE, ngspice y XSPICE
{: #spice-ngspice-and-xspice}

SPICE describe los circuitos mediante componentes, nodos conectados y modelos matemáticos de dispositivos.
Un análisis del punto de operación resuelve sus ecuaciones de CC. El análisis transitorio
sigue su comportamiento a lo largo del tiempo simulado. El análisis de CA linealiza
el circuito en torno a su punto de polarización para calcular la respuesta en frecuencia de pequeña señal.
Por tanto, seleccionar el análisis forma parte de la definición del experimento.

ngspice es un simulador de circuitos de señal mixta de código abierto, derivado de Berkeley
SPICE. TinyCAD incluye su motor, en lugar de exigir que instales y ejecutes
un simulador de línea de comandos por separado. El motor usado para validar estos tutoriales
es **ngspice 47**; la vista **Diagnósticos (Diagnostics)** de una ejecución identifica su motor y compilación.
Consulta la [descripción general oficial de ngspice](https://ngspice.sourceforge.io/presentation.html)
para conocer los antecedentes del proyecto original.

**XSPICE es una extensión integrada en ngspice**, no otra aplicación que haya que
iniciar. Añade modelos de código, incluidos bloques analógicos funcionales y lógica digital
cuyos eventos se coordinan con el solucionador analógico. Por tanto, un cambio de estado digital
puede afectar a un circuito analógico dentro de la misma simulación. La
[introducción oficial a XSPICE](https://ngspice.sourceforge.io/xspice.html)
explica esta diferencia.

| Entorno de TinyCAD | Cómo se ejecuta el motor | Qué ejemplos usar |
| --- | --- | --- |
| Escritorio | Un proceso de solucionador nativo independiente, con bibliotecas de modelos de código XSPICE incluidas | SPICE analógico y el curso de XSPICE |
| Navegador | ngspice compilado a WebAssembly, ejecutándose en un trabajador web independiente | SPICE analógico y modelos de comportamiento analógico compatibles; esta compilación excluye XSPICE |

TinyCAD elige el motor para su entorno. No hace falta localizar un
archivo ejecutable de ngspice ni seleccionar un simulador externo para los ejemplos incluidos.
Un dibujo XSPICE puede contener sus definiciones de modelo, pero sigue necesitando las
bibliotecas nativas de modelos de código que se proporcionan con la versión de Escritorio. Copiar el dibujo
al navegador no añade esa capacidad al motor.

## Del dibujo al resultado
{: #from-drawing-to-result}

Las etapas principales son:

1. **Determinar las conexiones eléctricas.** TinyCAD determina qué pines de los componentes
   comparten una red a partir de los cables, las uniones y las etiquetas de red. Un cruce de cables no es una
   conexión a menos que el dibujo una realmente las redes. Las etiquetas de red coincidentes
   conectan puntos distantes; el texto dibujado cerca de un cable no lo hace.
2. **Expandir las definiciones de los componentes.** Cada símbolo simulado proporciona una plantilla
   SPICE. TinyCAD sustituye su referencia, los nombres de los nodos conectados y los valores,
   e incluye las definiciones necesarias de dispositivos o subcircuitos.
3. **Añadir el experimento.** La hoja Simulation proporciona el análisis,
   la temperatura, los parámetros, los modelos adjuntos y las señales solicitadas. TinyCAD
   comprueba si faltan modelos, hay pines sin resolver, referencias duplicadas y otros
   errores detectables de configuración antes de enviar el circuito.
4. **Ejecutar ngspice.** El solucionador calcula las tensiones, corrientes y otras magnitudes
   solicitadas. Devuelve datos y un registro de diagnóstico; TinyCAD los reúne en
   una adquisición asociada a la configuración y la identidad del motor de esa ejecución.
5. **Inspeccionar y medir.** TinyCAD presenta gráficos, datos numéricos y mediciones calculadas.
   Por ejemplo, una medición de frecuencia de corte se deriva de los datos de CA;
   no es otro componente insertado en el esquema.

Esto explica por qué un dibujo que parece correcto no es suficiente: un transistor necesita
un modelo y una asignación correcta de pines, mientras que dos cables deben estar conectados eléctricamente
aunque sus extremos parezcan cercanos con el nivel de zoom actual.

## ¿Qué símbolos debo usar?
{: #which-symbols-should-i-use}

Abre el **icono con forma de pulso** de la barra de herramientas. Su texto al pasar el cursor es **Simulation**.
En las instrucciones siguientes, **Simulation → …** significa el menú de este icono.

| Lo que necesitas | Dónde encontrarlo | Qué comprobar |
| --- | --- | --- |
| Resistencia, condensador, inductor, diodo, LED, transistor NPN/PNP o amplificador operacional 741 | **Simulation → SPICE components**, o la biblioteca **SPICE essentials** | Valor, polaridad, alimentación y supuestos del modelo |
| Excitación independiente de tensión/corriente | **Simulation → SPICE → Insert Source** | Tipo de fuente, forma de señal, unidades y dirección de conexión |
| Nodo de referencia | **Simulation → SPICE → Insert Ground** | Conéctalo eléctricamente; la referencia de SPICE es el nodo `0` |
| Observación de tensión | **Insert Probe** o **Insert Differential Probe** en el submenú SPICE | Una tensión de terminal único es relativa a tierra; una sonda diferencial mide entre sus terminales |
| Observación de corriente de rama | **Simulation → SPICE → Insert Current Probe** | Insértala en serie y comprueba la dirección positiva |
| Fuente dependiente | **Simulation → SPICE → Insert Controlled Source** | Terminales de control, terminales de salida y ganancia/transconductancia |
| Instrumentos de estilo banco | **Simulation → Lab Equipment** | Ajustes del osciloscopio, multímetro, generador de funciones y fuente de alimentación de banco; su carga y sus límites son importantes |
| Lógica modelada ordinaria | La biblioteca **Digital logic** | Estos modelos SPICE portátiles configurables son distintos de los ejemplos XSPICE basados en eventos; inspecciona los pines de alimentación y las propiedades del modelo |
| Lógica XSPICE basada en eventos | Los ejemplos incrustados de **XSPICE and digital tutorial** | Usa la versión de Escritorio y conserva los puentes analógico/digital del modelo |

La biblioteca SPICE essentials proporciona ejemplos ya configurados de dispositivos habituales.
Un transistor genérico o un modelo de tipo 741 resulta útil para aprender, pero
su comportamiento simulado no coincide automáticamente con las especificaciones de una pieza concreta
de un fabricante. Los capítulos sobre amplificadores documentan explícitamente los modelos genéricos
sustituidos por los dispositivos `AMP.DSN` originales.

Un símbolo de otra biblioteca puede ser solo gráfico. Selecciona el símbolo colocado
e inspecciona la pestaña **SPICE** de sus propiedades. Necesita una plantilla SPICE válida
y las definiciones de modelo a las que haga referencia esa plantilla. Un nombre, encapsulado o
imagen coincidentes no añaden esas definiciones. Del mismo modo, una etiqueta llamada `VCC` nombra una
red; no crea una tensión de alimentación. Conecta una fuente real a esa red.

## Ejecutar un experimento existente
{: #run-an-existing-experiment}

1. Elige **Abrir ejemplo (Open Example) → Tutorial de SPICE (SPICE tutorial) → divider → Abrir dibujo (Open Drawing)**.
2. Selecciona su hoja **Simulation**. En **Setup**, el análisis guardado es
   **Medir CC — Punto de operación (Measure DC — Operating Point)**. El circuito usa una fuente de 5 V y dos
   resistencias de 1 kΩ.
3. Elige **Ejecutar (Run)**. Usa **Simulation → Mostrar gráficos (Show charts)** si el panel de gráficos está oculto.
4. Inspecciona `in`, `out` y `v1#branch`. Se esperan **5 V**, **2.5 V** y
   **−2.5 mA**, respectivamente. La corriente de la fuente se define hacia el terminal
   positivo, por lo que una fuente que entrega potencia tiene aquí una corriente negativa.
5. Cambia R2 a `2k` en la hoja del circuito y vuelve a ejecutar. Se espera que OUT pase a ser
   aproximadamente **3.333 V**. Una adquisición anterior conservada sigue describiendo
   el circuito previo; cambiar un valor no modifica sus resultados.

![Hoja Simulation de TinyCAD con el análisis de CA de RC y el resultado de frecuencia de corte](/v4/Images/simulation-tutorials/spice/tinycad-ac-setup.png)

Esta captura de pantalla de la aplicación muestra la vista **Setup** de **rc-ac**, otro
Ejemplo incrustado. Su filtro de 1 kΩ/1 µF tiene una frecuencia de corte cercana a **159.15 Hz**. Ábrelo
para comparar un experimento en el dominio de la frecuencia con el único punto de CC del divisor.

**Ejecutar (Run)** inicia una adquisición finita con el análisis seleccionado. **Detener (Stop)** termina
el solucionador y conserva las muestras aceptadas; esas muestras son un resultado parcial,
no una prueba de que se haya completado la duración solicitada. Estas compilaciones no ofrecen
pausa/reanudación ni un solucionador activo indefinidamente. Usa **Historial (History)** para inspeccionar ejecuciones anteriores y **Diagnósticos (Diagnostics)** para leer el registro del solucionador.

Para una demostración, mira [abrir, ejecutar y cambiar un divisor](/v4/videos/simulation-tutorials/spice/first-run.mp4)
y [respuesta de CA y frecuencia de corte](/v4/videos/simulation-tutorials/spice/ac-response.mp4). Ambas muestran los controles reales del escritorio,
adquisiciones nativas completadas y resultados numéricos, con subtítulos.

## Crear tu primera simulación
{: #build-your-own-first-simulation}

Coloca dos resistencias desde **Simulation → SPICE components**, una fuente mediante **Insert Source**
y una tierra mediante **Insert Ground**. Dispónlas como un divisor: positivo de la fuente
a R1, R1 a R2 y R2 de vuelta al negativo de la fuente y a tierra. Asigna a ambas resistencias
`1k`, configura la fuente a 5 V CC y etiqueta la alimentación como `IN` y el punto medio como `OUT`.
Asegúrate de que cada componente tenga una referencia única, como R1, R2 y V1.

Elige **Simulation → Simulate** para crear una hoja Simulation. Selecciona
**Medir CC — Punto de operación (Measure DC — Operating Point)** en **Setup** y, a continuación, **Run**. Deberías obtener
los mismos valores que con el divisor incrustado. Si falla, compara las conexiones,
los ajustes de la fuente y las propiedades SPICE con ese ejemplo funcional.

Para un experimento transitorio, selecciona **En el tiempo — Transitorio (Over time — Transient)**, establece la duración
y el paso máximo, y configura una fuente variable en el tiempo. Para CA, selecciona
**Respuesta en frecuencia — CA (Frequency response — AC)**, establece el intervalo de frecuencias y los puntos por década,
y asigna a la fuente de entrada una **amplitud de CA (AC amplitude)** distinta de cero, normalmente 1 V. Su frecuencia sinusoidal
y amplitud transitoria no determinan el barrido de CA. TinyCAD también ofrece
análisis de barrido de CC, ruido, función de transferencia y polos y ceros; los capítulos anteriores
muestran cuándo es útil cada uno.

## Inspeccionar el SPICE generado y añadir modelos
{: #inspect-the-generated-spice-and-add-models}

Tras ejecutar el divisor, abre **Diagnósticos (Diagnostics) → Generar texto del circuito (Generate circuit text)**.
Las líneas importantes se parecen a estas; TinyCAD también añade directivas de temperatura y de señales guardadas:

```spice
R1 IN OUT 1k
R2 OUT 0 1k
V1 IN 0 DC 5 AC 0 0
.op
.end
```

`R1 IN OUT 1k` significa una resistencia de 1 kΩ entre los nodos IN y OUT. `0` es el
nodo de referencia. Este texto hace explícitas las conexiones y la polaridad de la fuente.
Usa **Exportar circuito (Export circuit)** si necesitas inspeccionar o ejecutar la lista de conexiones por separado.
La hoja Simulation de TinyCAD contiene `.op`, `.tran`, `.ac` y los demás comandos de análisis; no pegues esos comandos ni `.end` en las propiedades SPICE de un componente.

Para una pieza que ya está en el catálogo de TinyCAD, usa [Modelos SPICE incluidos](../Bundled-SPICE-Models/) para elegir una definición y verificar la asignación de pines. Para un archivo externo necesario para una definición personalizada, despliega **Setup → SPICE models**. Elige un archivo `.lib`, `.cir` o `.mod`, o introduce su nombre de archivo y el texto del modelo. En ambos casos,
elige **Guardar modelo (Save model)** para adjuntarlo. Usa un nombre de archivo sencillo, como
`device.lib`. Después configura la
plantilla SPICE del símbolo para instanciar el dispositivo o `.SUBCKT` correspondiente,
e incluye el archivo adjunto donde sea necesario, por ejemplo con `.include device.lib`
en su prólogo. Adjuntar un archivo por sí solo no lo asigna a un símbolo.

Comprueba el orden de terminales del modelo frente a los **números de pin** del símbolo, no frente a
la posición aparente de los pines en la página. Un modelo de transistor de tres terminales y un subcircuito
de fabricante pueden usar órdenes de nodos diferentes. Verifica también cualquier referencia a modelos
anidados: los archivos incluidos también deben adjuntarse a la hoja Simulation.
Las definiciones y los archivos de modelo adjuntos se guardan con el dibujo.

TinyCAD admite texto de modelo incrustado, no scripts arbitrarios de comandos de ngspice ni
módulos ejecutables externos. Los bloques `.control`, los comandos de shell, la carga de módulos externos
y las señales/modelos basados en archivos quedan excluidos de este flujo de trabajo. Usa
los controles de fuente y análisis admitidos, o exporta el circuito para un experimento de ngspice
independiente desde la línea de comandos. Puede que sea necesario adaptar un modelo de fabricante
escrito para otro dialecto de SPICE antes de que ngspice lo acepte.

## Cómo encajan las simulaciones digitales
{: #how-digital-simulations-fit-in}

Abre **XSPICE and digital tutorial → logic-buffer** en la versión de Escritorio. Su modelo X1
contiene un puente de analógico a digital, un búfer basado en eventos y un
puente de digital a analógico. La fuente ordinaria impulsa la entrada analógica;
los puentes hacen que los estados lógicos estén disponibles como tensiones en los gráficos de TinyCAD.

![Entrada y salida calculadas del búfer XSPICE incrustado](/v4/Images/simulation-tutorials/xspice/logic-buffer-results.png)

Ejecuta el análisis transitorio guardado. Se esperan pulsos de 0–5 V con un período de 1 µs y una transición
de salida retrasada aproximadamente 20 ns, con flancos finitos. Acerca la vista para inspeccionar
el retardo. Esta figura muestra resultados reales del solucionador obtenidos del ejemplo.

Los nodos digitales del modelo no son nodos de tensión ordinarios. Los umbrales del puente
y su representación de un estado indefinido son decisiones deliberadas de modelado.
Una puerta de comportamiento creada con expresiones SPICE analógicas puede parecer similar en un
gráfico, pero usa un método de simulación distinto. Continúa con la
[descripción general de XSPICE](/v4/XSPICE-Tutorial-01/) para aprender sobre puentes, temporización, almacenamiento y
circuitos de señal mixta.

## Guardar, comparar y solucionar problemas
{: #save-compare-and-troubleshoot}

Guarda tu experimento con **Guardar como (Save As)** para conservar una copia editable del ejemplo incrustado.
TinyCAD puede conservar adquisiciones junto con el dibujo; **Guardar sin
resultados (Save without results)** mantiene el circuito y la configuración, pero omite los resultados guardados.
Usa las exportaciones **Datos (Data)** para obtener datos CSV, JSON o SPICE raw cuando necesites
más análisis. Anota qué adquisición, modelo y ventana de medición has utilizado.

| Síntoma | Primera comprobación |
| --- | --- |
| Falta información SPICE | Usa un símbolo modelado o configura su pestaña SPICE |
| Falta un modelo o subcircuito | Nombre del modelo, archivos adjuntos, instrucción include y orden de terminales |
| Circuito flotante o falta la tierra | Una tierra SPICE conectada y rutas de retorno de CC adecuadas |
| Etiqueta de alimentación, pero sin tensión de alimentación | Conecta una fuente de tensión o una fuente de alimentación de banco a la red etiquetada |
| Respuesta de CA vacía/nula | Amplitud de CA de entrada y señales seleccionadas |
| Modelo XSPICE no disponible en el navegador | Ejecuta el ejemplo en TinyCAD Desktop |
| El gráfico no coincide con los valores editados | Vuelve a ejecutar y selecciona la nueva adquisición |
| Error de convergencia o forma de onda incompleta | Lee Diagnósticos, simplifica el circuito y comprueba los flancos de excitación, el paso de tiempo y la validez del modelo |

El [manual de ngspice](https://ngspice.sourceforge.io/docs.html) es la referencia
para la semántica de dispositivos y modelos. Los controles de TinyCAD determinan cuáles de esas
capacidades están disponibles mediante su flujo de trabajo integrado.

## Descargar los circuitos de las lecciones
{: #download-the-lesson-circuits}

Los mismos ejemplos ya están disponibles en **Abrir ejemplo (Open Example)**. Para obtener una copia independiente, descarga un dibujo `.dzn` y usa **Archivo → Abrir (File → Open)** en TinyCAD. El archivo complementario `.cir` es texto SPICE para inspeccionarlo o usarlo con un simulador externo compatible, no un dibujo de TinyCAD. Para ejecutar circuitos XSPICE nuevos se necesita la versión de Escritorio.

| Ejemplo | Dibujo | Lista de conexiones |
| --- | --- | --- |
| divider | [Dibujo de TinyCAD](/v4/examples/simulation-tutorials/spice/divider.dzn) | [Texto SPICE](/v4/examples/simulation-tutorials/spice/divider.cir) |
| logic-buffer | [Dibujo de TinyCAD](/v4/examples/simulation-tutorials/xspice/logic-buffer.dzn) | [Texto SPICE](/v4/examples/simulation-tutorials/xspice/logic-buffer.cir) |
