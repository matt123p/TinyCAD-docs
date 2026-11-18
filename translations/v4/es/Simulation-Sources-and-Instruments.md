---
layout: default
---
# Fuentes, sondas e instrumentos virtuales
{: #sources-probes-and-virtual-instruments}

El menú **Simulation** de la barra de herramientas contiene herramientas de inserción de **SPICE** y **Lab Equipment**. Elija una herramienta y colóquela en un esquema. Haga clic con el botón derecho o pulse Escape para cancelar la colocación. Las herramientas seleccionadas desde una hoja Simulation cambian a un esquema para colocarlas; sus definiciones se integran en el dibujo.

## Fuentes independientes
{: #independent-sources}

Elija **Simulation → SPICE → Insert Source**. El editor se abre antes de colocar la fuente. Seleccione tensión o corriente y un tipo de señal. Seleccione el cuerpo de una fuente ya colocada para volver a abrir su editor inferior.

| Tipo de señal | Útil para | Ajustes que conviene comprobar |
| --- | --- | --- |
| DC | Polarización y alimentación estable | Valor y polaridad de CC |
| Sine | Una entrada analógica periódica | Desplazamiento, amplitud de pico, frecuencia, fase, retardo y amortiguamiento |
| Square/pulse | Conmutación y temporización | Niveles bajo/alto, retardo, tiempo de subida/bajada, anchura y período del pulso |
| Triangle | Una rampa repetitiva | Niveles, período y temporización de la rampa |
| Piecewise-linear (PWL) | Una secuencia especificada | Pares de tiempo/valor crecientes, un par por línea |
| Exponential | Una transición conformada | Niveles, retardos y constantes de tiempo |
| FM | Modulación de frecuencia | Ajustes de portadora y modulación |

![El editor de fuente senoidal y la vista previa de la forma de onda](../images/simulation/source-settings.png)

La vista previa refleja los ajustes numéricos de la forma de onda. Úsela para detectar desplazamientos, picos o temporizaciones inesperados antes de ejecutar la simulación. Los ajustes no válidos impiden el inicio. El icono de una fuente cambia según su forma de onda, y una fuente de corriente conserva su flecha de dirección.

**La amplitud y la fase de CA son ajustes independientes** para el análisis de frecuencia de pequeña señal. Son independientes de la amplitud de la senoide transitoria. También deben elegirse deliberadamente la polarización de CC de la fuente y la forma de onda transitoria. Consulte [los análisis](../Simulation-Analyses/) y [el tutorial de fuentes](../SPICE-Tutorial-03/).

Las nuevas fuentes y sondas utilizan una separación compacta de terminales de 8 mm. Los controles antiguos de mayor tamaño ofrecen **Use compact symbol** en su editor inferior. La conversión mantiene anclado el primer terminal y extiende las conexiones existentes hasta los terminales redimensionados como una sola operación que se puede deshacer. Inspeccione esas conexiones después de cambiar el tamaño.

## Sondas y tierra
{: #probes-and-ground}

| Herramienta en **Simulation → SPICE** | Conexión | Significado |
| --- | --- | --- |
| **Insert Probe** | Una punta en una red | Tensión relativa a tierra 0 |
| **Insert Differential Probe** | + y − en dos redes | `V(+) − V(−)` |
| **Insert Current Probe** | En serie con una rama | Corriente de + hacia − |
| **Insert Ground** | En la red de referencia del circuito | Conecta el símbolo de alimentación Earth con valor 0 |

La inserción de sondas/tierra se ajusta a un cable y lo divide en el punto de conexión. Compruebe la ubicación real de la punta y la polaridad. Una sonda de corriente es una **fuente ideal de tensión de cero voltios**: debe conectarse en serie. Colocarla en paralelo con una fuente de alimentación provoca un cortocircuito. Al insertar una medición en serie, quite o interrumpa el cable paralelo original.

Los paneles de sonda permiten seleccionar el modo de adquisición y visualización. Las señales del punto de operación pueden mostrar lecturas escalares; los resultados complejos de CA pueden mostrarse como valores reales, magnitud, dB y fase. Si el resultado solicitado no está disponible o corresponde a un circuito modificado, el panel explica por qué no está disponible o por qué hay que volver a ejecutar la simulación.

### Fuentes controladas
{: #controlled-sources}

**Insert Controlled Source** proporciona una fuente de tensión controlada por tensión (**E**) o una fuente de corriente controlada por tensión (**G**). Los terminales de salida son +/−, numerados 1/2; los terminales de control son C+/C−, numerados 3/4. Conecte ambos lados de la entrada de control y compruebe la característica de transferencia en el editor. Un puerto de control no es un terminal de alimentación de salida.

## Instrumentos de laboratorio virtuales
{: #virtual-laboratory-equipment}

Elija estos instrumentos en **Simulation → Lab Equipment**. Son modelos operativos con controles de adquisición. Las imágenes con nombres similares en **Standard → Test & Measurement** sirven para dibujar la distribución de un banco físico y no realizan mediciones de simulación.

Para un circuito ya cableado, descargue [Virtual laboratory.dzn](../examples/simulation/virtual-laboratory.dzn) y use **File → Open**. Este es un archivo de demostración complementario, no una entrada con nombre en el explorador de ejemplos incluido.

### Osciloscopio
{: #oscilloscope}

El osciloscopio tiene dos canales diferenciales: **1 A+**, **2 A−**, **3 B+**, **4 B−**. Conecte cada entrada negativa además de la positiva. La carga de entrada predeterminada es de **1 MΩ**; puede afectar a un circuito de alta impedancia.

Use los controles de tiempo/div y voltios/div con la pantalla de diez divisiones horizontales por ocho verticales. Los modos de disparo son **Auto**, **Normal** y **Single**. **Acquire** solicita diez divisiones de tiempo de datos transitorios con un paso máximo aproximado de tiempo/div dividido por 100. Cambiar la escala de visualización después de una ejecución no crea una nueva adquisición ni recupera flancos que faltan.

El acoplamiento de CA elimina la media ponderada en el tiempo de la señal visualizada; no es un modelo físico de entrada analógica pasaaltos. El acoplamiento GND muestra cero mientras la carga del instrumento sigue conectada. Los controles de tiempo/nivel del osciloscopio ayudan a examinar los datos; no convierten una simulación con muestreo insuficiente en una medición temporal válida.

### Multímetro
{: #multimeter}

Use **VΩ y COM** para medir tensión o resistencia, y **A y COM** para medir corriente. La medición de corriente debe realizarse en serie. La entrada de tensión predeterminada es de **10 MΩ**; el modo de corriente utiliza una **resistencia de carga de 1 Ω** y una fuente de detección de cero voltios. Por tanto, cambiar de modo modifica la carga del circuito y requiere una nueva ejecución.

DC muestra la magnitud estacionaria/media correspondiente. AC utiliza el valor eficaz ponderado en el tiempo, sin la componente de CC. Los valores fuera de rango muestran **OL**. Estos comportamientos del instrumento son simulados, pero no se simulan fallos de fusible ni térmicos.

La prueba de resistencia es una prueba temporal independiente, sin alimentación. Para la prueba se suprimen las fuentes independientes y se desconectan las conexiones del instrumento. La red compatible incluye R/C/L y sondas: los condensadores se comportan como circuitos abiertos en CC y los inductores como cortocircuitos. Los componentes activos o las plantillas no compatibles hacen que la prueba de resistencia no esté disponible. No la interprete como una lectura de resistencia en circuito de un dispositivo electrónico arbitrario con alimentación.

### Generador de funciones
{: #function-generator}

El generador proporciona formas de onda senoidal, de pulso/cuadrada, triangular y PWL, con controles de amplitud, desplazamiento, frecuencia y temporización. La vista previa muestra la forma de onda **en circuito abierto**. Su **resistencia de salida predeterminada de 50 Ω** implica que una carga conectada puede reducir la amplitud en los terminales.

Output Off aproxima un puerto abierto con una fuga de **1 TΩ**. La amplitud de CA de pequeña señal sigue siendo independiente de la amplitud transitoria. Compruebe si la amplitud requerida es de pico, pico a pico o eficaz antes de comparar la forma de onda programada con un valor medido.

### Fuente de alimentación de banco
{: #bench-supply}

Ajuste la tensión, el límite de corriente, la resistencia de salida, la habilitación y el tiempo de rampa opcional. El modelo utiliza un límite de corriente conductual suave y una resistencia finita; el panel indica los valores medidos de V/I y el funcionamiento **CV/CC**. Si se reduce el límite de corriente por debajo de lo que requiere la carga, disminuye la tensión suministrada.

Puede suministrar o absorber corriente dentro del mismo límite. No es un modelo de fuente de alimentación conmutada de un fabricante ni un modelo térmico. La salida deshabilitada utiliza una aproximación de fuga de 1 TΩ. La rampa afecta al análisis transitorio; el punto de operación de CC utiliza la tensión final programada.

Las propiedades numéricas del generador y de la fuente de alimentación se pueden vincular a [Circuit Explorer](../Simulation-Charts-and-Measurements/) para ajustes temporales o condiciones de prueba. En Desktop, los paneles de instrumentos pueden abrirse en ventanas separadas; las ventanas independientes de gráficos están disponibles en ambos productos.

## La carga forma parte del experimento
{: #loading-is-part-of-the-experiment}

Una sonda de tensión perfecta y una entrada de osciloscopio con carga no producen el mismo circuito. Antes de comparar resultados, tenga en cuenta la impedancia del generador, la resistencia de carga del multímetro, la carga de entrada del osciloscopio y los retornos compartidos. Use una medición diferencial cuando ninguno de los extremos de la señal esté conectado a tierra. Si la simulación falla después de añadir un instrumento, inspeccione su cableado y modo antes de cambiar los ajustes del solucionador.
