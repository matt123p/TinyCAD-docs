---
layout: default
---
# Bibliotecas incluidas
{: #bundled-libraries}

Las bibliotecas incluidas son colecciones de símbolos listos para colocar que se suministran con TinyCAD tanto en el navegador como en la aplicación de escritorio. Abarcan distribuciones de equipos y circuitos electrónicos. Puedes usarlas sin iniciar sesión, descargar un archivo de biblioteca ni configurar una carpeta de bibliotecas.

## Buscar y colocar un componente
{: #find-and-place-a-component}

1. Abre el panel de bibliotecas de la izquierda. Si está contraído, usa el botón para expandirlo.
2. Selecciona **Estándar**. **En línea** busca en la colección en línea; **Mis bibliotecas** contiene tus propios archivos de biblioteca.
3. Usa **Elegir una biblioteca estándar** para seleccionar una colección. TinyCAD carga una biblioteca estándar a la vez y recuerda tu elección en este dispositivo.
4. Explora la lista o escribe un nombre o una descripción en **Buscar bibliotecas...**. Cada resultado incluye una vista previa de la ilustración. Selecciona un resultado para ver su vista previa ampliada y su descripción.
5. Arrastra la vista previa del componente al dibujo. Colócalo en la cuadrícula; pulsa **Escape** o haz clic con el botón derecho cuando termines de colocar copias.

Cambiar la biblioteca seleccionada no elimina los componentes que ya hayas colocado. Sus definiciones están incrustadas en el dibujo, por lo que quien lo abra no tendrá que cargar las mismas bibliotecas. Las bibliotecas estándar son de solo lectura; usa [bibliotecas personalizadas](../Custom-symbol-libraries/) cuando quieras mantener tus propias definiciones de símbolos.

{% include video-player.html src="/v4/videos/simulation/libraries.mp4" poster="/v4/videos/simulation/libraries.jpg" caption="Elige una biblioteca incluida, busca un switch de ocho puertos y arrástralo a un dibujo." %}

## Bibliotecas de equipos y distribuciones
{: #equipment-and-layout-libraries}

Estas bibliotecas muestran la disposición física de equipos, placas, terminales y tomas. Te ayudan a explicar **qué se conecta con qué**. No incluyen firmware ejecutable, simulación mecánica ni modelos SPICE.

| Biblioteca | Contenido | Uso habitual |
| --- | --- | --- |
| **Distribución de red** — 47 símbolos | Routers, switches y puntos de acceso para consumidores; switches, routers, cortafuegos, paneles de parcheo y paneles ciegos de rack de 19 pulgadas correspondientes | Cableado de oficinas, redes domésticas y planos de racks |
| **Procesadores integrados y hogar inteligente** — 44 símbolos | Diez placas de control, 26 módulos de sensores/actuadores y ocho pantallas | Prototipos de una estación de sensores, domótica o un proyecto integrado |
| **Audio y música** — 99 símbolos | Micrófonos, mezcladores, interfaces, instrumentos, MIDI, ordenadores, conectores, auriculares, altavoces, amplificadores y equipos de escenario | Conciertos, estudios, pódcast, grabación doméstica, iglesias y escuelas |
| **Pruebas y medición** — 78 símbolos | Fuentes de alimentación, cargas, osciloscopios, medidores, instrumentos de RF, sondas, adquisición de datos, calentadores, relés, controles, bombas y aparatos de banco | Conexiones de laboratorio y montajes experimentales |
| **Motores y movimiento** — 66 símbolos | Motores de CC y sin escobillas, motores paso a paso, servos, placas controladoras, encoders, finales de carrera, solenoides, actuadores eléctricos/neumáticos y piezas mecánicas | Robótica, automatización y cableado de control de movimiento |
| **Energía solar y baterías** — 52 símbolos | Paneles, conjuntos, inversores, baterías, cargadores para vehículos eléctricos, equipos de respaldo, protección, monitorización y cargas domésticas | Sistema conceptual de energía doméstica y sus conexiones de potencia/control |

### Distribución de red
{: #network-layout}

Los puntos de conexión Ethernet están centrados en las tomas. Un punto representa un **cable completo**, no los ocho conductores Ethernet individuales. Los switches de sobremesa abarcan 4, 5, 8, 16 y 24 puertos de cobre, incluidas opciones PoE y mixtas de cobre/fibra. Las distribuciones de rack incluyen configuraciones de 8/16/24/48 puertos con enlaces ascendentes SFP+ de dos o cuatro jaulas, además de otras distribuciones genéricas para planificación con 10 y 32 puertos de cobre. Considéralas opciones de símbolos disponibles, no una afirmación de que todas las configuraciones sean igual de habituales. Lee el nombre del símbolo y las etiquetas del panel frontal para elegir el número de puertos y la configuración de enlaces ascendentes que necesites.

Los paneles de rack de 19 pulgadas y 1U tienen un tamaño común. Mantén su escala predeterminada y apílalos verticalmente a **120 unidades de dibujo** para formar un rack. El [ejemplo de red de oficina pequeña](../Bundled-Examples/#equipment-and-layout-examples) muestra cuatro paneles correspondientes y tramos más largos hasta un punto de acceso y un switch de escritorio. Dibuja cada latiguillo hasta el punto de conexión de su toma; la ilustración del panel no conecta automáticamente entre sí las distintas tomas.

### Procesadores integrados y hogar inteligente
{: #embedded-processors-and-smart-home}

Las placas de control incluyen ESP32 DevKitC V4, ESP32-S3 DevKitC-1, NodeMCU ESP8266, LOLIN D1 mini, Raspberry Pi 3/4/5 y variantes de Arduino Uno/Nano/Mega. Los módulos de sensores incluyen sensores de temperatura, humedad, luz, presión, tacto e infrarrojos pasivos, junto con salidas como zumbadores. La PCB, las almohadillas de los conectores y las etiquetas de los pines siguen visibles; un pequeño icono de función identifica el sensor en lugar de un rectángulo de chip anónimo.

Las opciones de pantalla incluyen una LCD1602 I2C y una OLED de 128×64, una LCD SPI Waveshare de 1,8 pulgadas y una LCD táctil capacitiva de 2,8 pulgadas, una pantalla táctil UART Nextion de 2,8 pulgadas y conjuntos de pantallas de tinta electrónica Waveshare de 2,13/2,9/4,2 pulgadas. Cada símbolo combina dos vistas de **un dispositivo**: la parte frontal de la pantalla a la izquierda y los contactos traseros/de la hilera de pines a la derecha. Solo los contactos traseros son puntos de conexión eléctrica. Las hileras repetidas pueden exponer las mismas señales de hardware; no son canales independientes adicionales. Sigue las etiquetas y la revisión indicada.

Comprueba la revisión indicada de la placa antes de cablear. En los conectores de Raspberry Pi, **los números de pines físicos y los nombres de GPIO BCM son sistemas de numeración diferentes**. Las posiciones de los pines de la placa son útiles para un diagrama de cableado, pero la ilustración no es una huella de PCB ni un plano de fabricación. Aun así, hay que comprobar las líneas de alimentación, los niveles lógicos, los límites de corriente y las resistencias pull-up con la documentación del módulo real.

### Conexiones de audio, laboratorio y movimiento
{: #audio-laboratory-and-motion-connections}

En los diagramas de audio, la mayoría de las tomas representan cables completos. Etiqueta las rutas de micrófono, línea, altavoz, auriculares y MIDI para dejar claro su propósito. Dibujar un conector no garantiza que dos dispositivos tengan niveles compatibles, cableado equilibrado o requisitos compatibles de alimentación phantom.

Los símbolos de laboratorio y movimiento distinguen entre conductores eléctricos individuales, cables completos y mangueras de fluidos. Por ejemplo, las conexiones BNC/USB representan cables, mientras que los terminales de potencia, lógica y motor de un controlador de motor son conductores separados. Las piezas exclusivamente mecánicas pueden no tener terminales eléctricos. Usa las etiquetas de los pines y la descripción del símbolo en lugar de dar por sentado que cada elemento visible es una conexión.

**Los símbolos de equipos de Pruebas y medición son ilustraciones para diagramas de montajes.** Para instrumentos que adquieren señales simuladas, usa **Simulación → Equipo de laboratorio**; consulta [fuentes e instrumentos virtuales](../Simulation-Sources-and-Instruments/).

Los símbolos solares representan cables completos o enlaces lógicos. Describen la arquitectura del sistema; no especifican terminales de instalación individuales, capacidades nominales de los cables ni un esquema completo de protección.

## Bibliotecas con modelos de simulación
{: #libraries-with-simulation-models}

Usa estas colecciones cuando quieras [ejecutar una simulación de circuito](../Simulation/).

| Biblioteca | Contenido | Propósito del modelado |
| --- | --- | --- |
| **Elementos esenciales de SPICE** — 29 símbolos | Componentes pasivos, fuentes, diodos, LED, transistores, transformador, resonadores, 741, LM358 y LM324 | Componentes analógicos con un [modelo incluido y asignación de pines predefinida](../Bundled-SPICE-Models/) |
| **Lógica digital** — 28 símbolos | Puertas, contadores y elementos de almacenamiento | Comportamiento lógico configurable implementado mediante modelos analógicos SPICE portátiles |
| **Bloques funcionales** — 17 símbolos | ADC/DAC, interfaces de comunicación, máquinas de estados y bloques de E/S programables | Explorar el comportamiento a nivel de sistema sin implementar un chip completo |
| **Sensores e interfaces** — 10 símbolos | Sensores modelados, un punto de prueba, un interruptor analógico y un modulador AM | Relacionar un estímulo configurado con una salida eléctrica |

Estos modelos son aproximaciones para explorar el comportamiento. No garantizan el rendimiento de un dispositivo de un fabricante concreto. Los bloques funcionales de microcontrolador, PLC o FPGA no ejecutan firmware ni HDL. La biblioteca **Lógica digital** usa modelos analógicos de comportamiento y puede ejecutarse en el navegador; el [curso de XSPICE](../XSPICE-Tutorial/) independiente usa el motor basado en eventos de Desktop.

Lee las propiedades, las unidades y la asignación de pines de cada modelo. Los modelos lógicos pueden tener pines de alimentación ocultos llamados **VCC** y **VSS**. Proporciona las redes de alimentación correspondientes y conecta **VSS** a la tierra SPICE **0**. Una etiqueta que contenga la palabra GND no crea por sí sola el nodo 0.

## Evitar ambigüedades en el cableado
{: #make-wiring-unambiguous}

Mantén activada la cuadrícula y termina los cables en los puntos de conexión reales. Un cable que toque una toma no relacionada o el extremo de otro cable puede crear una conexión eléctrica. Traza el recorrido evitando esos puntos; una línea que parezca ordenada no basta para establecer la netlist prevista.

Las tomas de equipo sin usar pueden dejarse abiertas. Algunos avisos del comprobador de circuitos sobre cables que entran en los contornos físicos de los paneles son esperables en estos dibujos, pero deben corregirse los cortocircuitos y las uniones no deseados. Consulta [Cables](../Wires/) para obtener información sobre la conectividad eléctrica y [Ejemplos incluidos](../Bundled-Examples/) para ver distribuciones de ejemplo que usan estas colecciones.
