---
layout: default
title: 11. How TinyCAD implements SPICE
---
# 11. Cómo implementa TinyCAD SPICE
{: #how-tinycad-implements-spice}

[Anterior: investigaciones de diseño](/v4/SPICE-Tutorial-10/) · [Contenido](/v4/Simulation-Tutorials/) · [Curso de XSPICE](/v4/XSPICE-Tutorial-01/)

TinyCAD proporciona el editor de esquemas, la configuración de simulación, los instrumentos, los gráficos
y las mediciones. **ngspice** es el motor de resolución de circuitos que los sustenta.
Dibuje y configure el experimento en TinyCAD; TinyCAD lo traduce a texto de circuito
SPICE, ejecuta ngspice y presenta los resultados devueltos.

Los ejemplos de este capítulo se incluyen con TinyCAD. Elija **Abrir ejemplo →
Tutorial de SPICE**, seleccione **divider** o **rc-ac** y, a continuación, elija **Abrir dibujo**.
Para la demostración digital, use **Abrir ejemplo → Tutorial de XSPICE y digital →
logic-buffer → Abrir dibujo**. No es necesario descargar ningún tutorial ni modelo.

## SPICE, ngspice y XSPICE
{: #spice-ngspice-and-xspice}

SPICE describe los circuitos mediante componentes, nodos conectados y modelos matemáticos de dispositivos.
Un análisis del punto de operación resuelve sus ecuaciones de CC. El análisis transitorio
sigue su comportamiento a lo largo del tiempo simulado. El análisis de CA linealiza
el circuito en torno a su punto de polarización para calcular la respuesta en frecuencia de pequeña señal.
Por tanto, seleccionar el análisis forma parte de definir el experimento.

ngspice es un simulador de circuitos de señal mixta de código abierto, derivado de Berkeley
SPICE. TinyCAD incluye su motor, de modo que no es necesario instalar ni ejecutar
un simulador independiente desde la línea de comandos. El motor usado para validar estos tutoriales
es **ngspice 47**; la vista **Diagnósticos** de una ejecución identifica su backend y compilación.
Consulte la [descripción general oficial de ngspice](https://ngspice.sourceforge.io/presentation.html)
para conocer los antecedentes del proyecto original.

**XSPICE es una extensión integrada en ngspice**, no otra aplicación que haya que
iniciar. Añade modelos de código, incluidos bloques analógicos funcionales y lógica digital,
cuyos eventos se coordinan con el solucionador analógico. Por tanto, un cambio de estado digital
puede afectar a un circuito analógico en la misma simulación. La
[introducción oficial a XSPICE](https://ngspice.sourceforge.io/xspice.html)
describe esta distinción.

| Entorno de TinyCAD | Cómo se ejecuta el motor | Qué ejemplos usar |
| --- | --- | --- |
| Escritorio | Un proceso de solucionador nativo independiente, con bibliotecas de modelos de código XSPICE incluidas | SPICE analógico y el curso de XSPICE |
| Navegador | ngspice compilado a WebAssembly, ejecutándose en un trabajador web independiente | SPICE analógico y modelos de comportamiento analógicos compatibles; esta compilación no incluye XSPICE |

TinyCAD selecciona el backend correspondiente a su entorno. No hace falta localizar un
archivo ejecutable de ngspice ni seleccionar un simulador externo para los ejemplos incluidos.
Un esquema XSPICE puede contener sus definiciones de modelo, pero sigue necesitando las
bibliotecas de modelos de código nativas que se suministran con la versión de Escritorio. Copiar el dibujo
al navegador no añade esa capacidad al motor.

## Del dibujo al resultado
{: #from-drawing-to-result}

Las etapas principales son:

1. **Determinar las conexiones eléctricas.** TinyCAD determina qué pines de componentes
   comparten una red a partir de los cables, las uniones y las etiquetas de red. Un cruce de cables no es una
   conexión a menos que el dibujo una realmente las redes. Las etiquetas de red coincidentes
   conectan puntos distantes; el texto colocado cerca de un cable no lo hace.
2. **Expandir las definiciones de componentes.** Cada símbolo simulado proporciona una plantilla
   SPICE. TinyCAD sustituye la referencia, los nombres de los nodos conectados y los valores,
   e incluye las definiciones necesarias de dispositivos o subcircuitos.
3. **Añadir el experimento.** La hoja de simulación proporciona el análisis,
   la temperatura, los parámetros, los modelos adjuntos y las señales solicitadas. TinyCAD
   comprueba si faltan modelos, hay pines sin resolver, referencias duplicadas y otros
   errores de configuración detectables antes de enviar el circuito.
4. **Ejecutar ngspice.** El solucionador calcula las tensiones, las corrientes y otras magnitudes
   solicitadas. Devuelve datos y un registro de diagnóstico; TinyCAD los recopila en
   una adquisición asociada a la configuración y la identidad del motor de la ejecución.
5. **Inspeccionar y medir.** TinyCAD presenta gráficos, datos numéricos y mediciones calculadas.
   Por ejemplo, una medición de frecuencia de corte se deriva de los datos de CA;
   no es otro componente insertado en el esquema.

Esto explica por qué un dibujo que parece correcto no basta: un transistor necesita
un modelo y una asignación de pines correcta, mientras que dos cables deben estar conectados eléctricamente,
incluso si sus extremos parecen próximos con el nivel de zoom actual.

## ¿Qué símbolos debo usar?
{: #which-symbols-should-i-use}

Abra el **icono con forma de pulso** de la barra de herramientas. El texto al pasar el cursor es **Simulation**.
En las instrucciones siguientes, **Simulation → …** significa el menú de este icono.

| Lo que necesita | Dónde encontrarlo | Qué comprobar |
| --- | --- | --- |
| Resistor, condensador, inductor, diodo, LED, transistor NPN/PNP o amplificador operacional 741 | **Simulation → Componentes SPICE**, o la biblioteca **Elementos esenciales de SPICE** | Valor, polaridad, alimentación y supuestos del modelo |
| Excitación independiente de tensión/corriente | **Simulation → SPICE → Insertar fuente** | Tipo de fuente, forma de onda, unidades y sentido de conexión |
| Nodo de referencia | **Simulation → SPICE → Insertar tierra** | Conéctelo eléctricamente; la referencia de SPICE es el nodo `0` |
| Observación de tensión | **Insertar sonda** o **Insertar sonda diferencial** en el submenú SPICE | Una tensión de un solo terminal se mide respecto a tierra; una sonda diferencial mide entre sus terminales |
| Observación de corriente de rama | **Simulation → SPICE → Insertar sonda de corriente** | Insértela en serie y compruebe el sentido positivo |
| Fuente dependiente | **Simulation → SPICE → Insertar fuente controlada** | Terminales de control, terminales de salida y ganancia/transconductancia |
| Instrumentos de banco | **Simulation → Equipo de laboratorio** | Configuración del osciloscopio, multímetro, generador de funciones y fuente de alimentación de banco; importan su carga y sus límites |
| Lógica modelada normal | La biblioteca **Lógica digital** | Estos modelos SPICE portátiles configurables son distintos de los ejemplos XSPICE controlados por eventos; inspeccione los pines de alimentación y las propiedades del modelo |
| Lógica XSPICE controlada por eventos | Los ejemplos integrados del **Tutorial de XSPICE y digital** | Use Escritorio y conserve los puentes analógico/digital en el modelo |

La biblioteca de elementos esenciales de SPICE proporciona ejemplos preconfigurados de dispositivos comunes.
Un transistor genérico o un modelo de tipo 741 resulta útil para aprender, pero
su comportamiento simulado no corresponde automáticamente a las especificaciones de una pieza concreta
de un fabricante. Los capítulos sobre amplificadores documentan explícitamente los modelos genéricos
que sustituyen a los dispositivos `AMP.DSN` originales.

Un símbolo de otra biblioteca puede ser solo gráfico. Seleccione el símbolo colocado
e inspeccione la pestaña **SPICE** de sus propiedades. Necesita una plantilla SPICE válida
y las definiciones de modelo a las que haga referencia esa plantilla. Un nombre, encapsulado o
imagen coincidente no añade esas definiciones. Del mismo modo, una etiqueta llamada `VCC` nombra una
red; no crea una tensión de alimentación. Conecte una fuente real a esa red.

## Ejecutar un experimento existente
{: #run-an-existing-experiment}

1. Elija **Abrir ejemplo → Tutorial de SPICE → divider → Abrir dibujo**.
2. Seleccione su hoja **Simulation**. En **Setup**, el análisis guardado es
   **Medición de CC — Punto de operación**. El circuito usa una fuente de 5 V y dos
   resistores de 1 kΩ.
3. Elija **Run**. Use **Simulation → Mostrar gráficos** si el panel de gráficos está oculto.
4. Inspeccione `in`, `out` y `v1#branch`. Los valores esperados son **5 V**, **2.5 V** y
   **−2.5 mA**, respectivamente. La corriente de la fuente se define hacia el terminal
   positivo, por lo que una fuente que entrega potencia tiene aquí corriente negativa.
5. Cambie R2 a `2k` en la hoja del circuito y vuelva a ejecutar. Se espera que OUT pase a
   aproximadamente **3.333 V**. Una adquisición anterior conservada sigue describiendo
   el circuito previo; cambiar un valor no modifica sus resultados.

![Hoja Simulation de TinyCAD con el análisis de CA del circuito RC y el resultado de frecuencia de corte](/v4/images/simulation-tutorials/spice/tinycad-ac-setup.png)

Esta captura de pantalla de la aplicación muestra la vista **Setup** de **rc-ac**,
otro ejemplo integrado. Su filtro de 1 kΩ/1 µF tiene una frecuencia de corte cercana a **159.15 Hz**. Ábralo
para comparar un experimento en el dominio de la frecuencia con el único punto de CC del divisor.

**Run** inicia una adquisición finita con el análisis seleccionado. **Stop** detiene
el solucionador y conserva las muestras aceptadas; esas muestras son un resultado parcial,
no una prueba de que se haya completado la duración solicitada. Estas compilaciones no ofrecen
pausa/reanudación ni un solucionador activo indefinidamente. Use **History** para inspeccionar ejecuciones anteriores
y **Diagnostics** para leer el registro del solucionador.

Para una demostración, vea [abrir, ejecutar y cambiar un divisor](/v4/videos/simulation-tutorials/spice/first-run.mp4)
y [respuesta de CA y frecuencia de corte](/v4/videos/simulation-tutorials/spice/ac-response.mp4). Ambos vídeos muestran los controles reales
de escritorio, adquisiciones nativas completadas y resultados numéricos, con subtítulos.

## Crear su primera simulación
{: #build-your-own-first-simulation}

Coloque dos resistores desde **Simulation → Componentes SPICE**, una fuente con **Insert Source**
y una tierra con **Insert Ground**. Dispóngalos como un divisor: positivo de la fuente
hacia R1, R1 hacia R2, y R2 de vuelta al negativo de la fuente y a tierra. Asigne a ambos resistores
`1k`, configure la fuente como 5 V CC y etiquete la alimentación como `IN` y el punto medio como `OUT`.
Asegúrese de que cada componente tenga una referencia única, como R1, R2 y V1.

Elija **Simulation → Simulate** para crear una hoja Simulation. Seleccione
**Medición de CC — Punto de operación** en **Setup** y, a continuación, **Run**. Debería obtener
los mismos valores que en el divisor integrado. Si falla, compare las conexiones,
la configuración de la fuente y las propiedades SPICE con el ejemplo funcional.

Para un experimento transitorio, seleccione **A lo largo del tiempo — Transitorio**, establezca la duración
y el paso máximo, y configure una fuente variable en el tiempo. Para CA, seleccione
**Respuesta en frecuencia — CA**, establezca el intervalo de frecuencias y los puntos por década,
y asigne a la fuente de entrada una **amplitud de CA** distinta de cero, normalmente 1 V. Su frecuencia
sinusoidal y amplitud transitoria no determinan el barrido de CA. TinyCAD también ofrece
análisis de barrido de CC, ruido, función de transferencia y polos y ceros; los capítulos anteriores
explican cuándo resulta útil cada uno.

## Inspeccionar el SPICE generado y añadir modelos
{: #inspect-the-generated-spice-and-add-models}

Tras ejecutar el divisor, abra **Diagnostics → Generar texto del circuito**.
Las líneas importantes tienen este aspecto; TinyCAD también añade directivas de temperatura y de señales guardadas:

```spice
R1 IN OUT 1k
R2 OUT 0 1k
V1 IN 0 DC 5 AC 0 0
.op
.end
```

`R1 IN OUT 1k` significa un resistor de 1 kΩ entre los nodos IN y OUT. `0` es el
nodo de referencia. Este texto hace explícitas las conexiones y la polaridad de la fuente.
Use **Exportar circuito** si necesita inspeccionar o ejecutar la lista de conexiones por separado.
La hoja Simulation de TinyCAD contiene `.op`, `.tran`, `.ac` y los demás comandos de análisis; no pegue esos comandos ni `.end` en las propiedades SPICE de un componente.

Para añadir un modelo de dispositivo, despliegue **Setup → Modelos SPICE**. Elija un archivo
`.lib`, `.cir` o `.mod`, o introduzca su nombre de archivo y el texto del modelo. En ambos
casos, elija **Guardar modelo** para adjuntarlo. Use un nombre de archivo sencillo, como
`device.lib`. Después, configure la plantilla SPICE del
símbolo para instanciar el dispositivo o `.SUBCKT` correspondiente,
e incluya el archivo adjunto cuando sea necesario, por ejemplo con `.include device.lib`
en su prólogo. Adjuntar un archivo por sí solo no lo asigna a un símbolo.

Compruebe el orden de terminales del modelo con los **números de pin** del símbolo,
no con la posición aparente de los pines en la página. Un modelo de transistor de tres terminales
y un subcircuito de fabricante pueden usar órdenes de nodos distintos. Verifique también las referencias
a modelos anidados: los archivos incluidos también deben adjuntarse a la hoja Simulation.
Las definiciones de modelo y los archivos adjuntos se conservan con el dibujo guardado.

TinyCAD admite texto de modelo integrado, no scripts arbitrarios de comandos ngspice ni
módulos ejecutables externos. Los bloques `.control`, los comandos de shell, la carga de módulos externos
y las excitaciones/modelos basados en archivos quedan excluidos de este flujo de trabajo. Use
los controles de fuente y análisis compatibles, o exporte el circuito para realizar un experimento ngspice
independiente desde la línea de comandos. Es posible que un modelo de proveedor escrito para otro
lenguaje SPICE deba adaptarse antes de que ngspice lo acepte.

## Cómo encajan las simulaciones digitales
{: #how-digital-simulations-fit-in}

Abra **Tutorial de XSPICE y digital → logic-buffer** en Escritorio. Su modelo X1
contiene un puente de analógico a digital, un búfer controlado por eventos y un
puente de digital a analógico. La fuente normal acciona la entrada analógica;
los puentes hacen que los estados lógicos se muestren como tensiones en los gráficos de TinyCAD.

![Entrada y salida calculadas del búfer XSPICE integrado](/v4/images/simulation-tutorials/xspice/logic-buffer-results.png)

Ejecute el análisis transitorio guardado. Se esperan pulsos de 0–5 V con un período de 1 µs y una transición
de salida retrasada aproximadamente 20 ns, con flancos finitos. Amplíe la vista para inspeccionar
el retardo. Esta figura representa resultados reales del solucionador del ejemplo.

Los nodos digitales del modelo no son nodos de tensión normales. Los umbrales de los puentes
y su representación de un estado indefinido son decisiones de modelado deliberadas.
Una puerta de comportamiento creada con expresiones SPICE analógicas puede parecer similar en un
gráfico, pero usa un método de simulación diferente. Continúe con la
[descripción general de XSPICE](/v4/XSPICE-Tutorial-01/) para ver puentes, temporización, almacenamiento y
circuitos de señal mixta.

## Guardar, comparar y solucionar problemas
{: #save-compare-and-troubleshoot}

Guarde el experimento con **Save As** para conservar una copia editable del ejemplo integrado.
TinyCAD puede conservar adquisiciones con el dibujo; **Save without
results** conserva el circuito y la configuración, pero omite los resultados almacenados.
Use las exportaciones de **Data** para obtener datos CSV, JSON o SPICE raw cuando se necesite
un análisis adicional. Anote qué adquisición, modelo y ventana de medición utilizó.

| Síntoma | Primera comprobación |
| --- | --- |
| Falta información SPICE | Use un símbolo modelado o configure su pestaña SPICE |
| Falta el modelo o subcircuito | Nombre del modelo, archivos adjuntos, instrucción include y orden de terminales |
| Circuito flotante o sin tierra | Una tierra SPICE conectada y rutas de retorno de CC adecuadas |
| Etiqueta de alimentación, pero sin tensión de alimentación | Conecte una fuente de tensión o una fuente de alimentación de banco a la red etiquetada |
| Respuesta de CA vacía o nula | Amplitud de CA de entrada y señales seleccionadas |
| Modelo XSPICE no disponible en el navegador | Ejecute el ejemplo en TinyCAD Desktop |
| El gráfico no coincide con los valores editados | Vuelva a ejecutar y seleccione la nueva adquisición |
| Error de convergencia o forma de onda incompleta | Lea Diagnostics, simplifique el circuito y compruebe los flancos de excitación, el paso temporal y la validez del modelo |

El [manual de ngspice](https://ngspice.sourceforge.io/docs.html) es la referencia
para la semántica de dispositivos y modelos. Los controles de TinyCAD determinan cuáles de esas
capacidades están disponibles a través de su flujo de trabajo integrado.

## Descargar los circuitos de la lección
{: #download-the-lesson-circuits}

Los mismos ejemplos ya están disponibles en **Open Example**. Para obtener una copia independiente, descargue un dibujo `.dzn` y use **File → Open** en TinyCAD. El archivo complementario `.cir` es texto SPICE para inspeccionarlo o usarlo en un simulador externo compatible, no un dibujo de TinyCAD. Para ejecutar de nuevo los circuitos XSPICE se necesita la versión de Escritorio.

| Ejemplo | Dibujo | Lista de conexiones |
| --- | --- | --- |
| divider | [Dibujo de TinyCAD](/v4/examples/simulation-tutorials/spice/divider.dzn) | [Texto SPICE](/v4/examples/simulation-tutorials/spice/divider.cir) |
| logic-buffer | [Dibujo de TinyCAD](/v4/examples/simulation-tutorials/xspice/logic-buffer.dzn) | [Texto SPICE](/v4/examples/simulation-tutorials/xspice/logic-buffer.cir) |
