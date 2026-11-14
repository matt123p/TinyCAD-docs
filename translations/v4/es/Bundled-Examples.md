---
layout: default
---
# Ejemplos incluidos
{: #bundled-examples}

Los ejemplos incluidos son dibujos editables que se suministran con TinyCAD. Muestran cómo utilizar las bibliotecas, explican las opciones de conexión y proporcionan circuitos para los [tutoriales de simulación](../Simulation-Tutorials/). No es necesario descargar sus símbolos por separado.

## Abrir un ejemplo
{: #open-an-example}

<div class="manual-tabset" data-tabset="product-mode" data-tabset-label="Choose your TinyCAD product" data-default-tab="Browser" markdown="1">

### Navegador
{: #browser}

Elija **Abrir ejemplo (Open Example)** a la derecha de la barra de título oscura. Tras abrir un ejemplo con instrucciones, aparecerá **Explicación (Explanation)** junto a él. Use ese botón para mostrar u ocultar el panel de explicación.

### Aplicación de escritorio
{: #desktop-app}

Elija **Archivo → Abrir ejemplo (File → Open Example)**, debajo de **Abrir recientes (Open Recent)**. Use **Ver → Ver explicación (View → View Explanation)** para mostrar u ocultar las instrucciones del ejemplo actual. El comando no está disponible si el dibujo no tiene una explicación asociada.

</div>

1. Elija un grupo: **Ejemplos (Examples)**, **Tutorial de SPICE (SPICE tutorial)** o **Tutorial de XSPICE y digital (XSPICE and digital tutorial)**.
2. Seleccione un dibujo para ver su vista previa y descripción. Esta selección aún no reemplaza el dibujo actual.
3. Elija **Abrir dibujo (Open drawing)**. Si tiene cambios sin guardar, responda al aviso para guardarlos antes de continuar.
4. Lea la explicación, examine las conexiones y modifique la copia editable. Use **Guardar como (Save As)** para conservar su versión.

Use **Buscar grupos y ejemplos (Search groups and examples)** para encontrar un elemento por su nombre. Borre la búsqueda y elija **Todos los grupos (All groups)** si un filtro oculta un grupo que necesita.

{% include video-player.html src="/v4/videos/simulation/examples.mp4" poster="/v4/videos/simulation/examples.jpg" caption="Abra el ejemplo de red y muestre su explicación junto al dibujo." %}

## Ejemplos de equipos y diseños
{: #equipment-and-layout-examples}

Elija el grupo **Ejemplos (Examples)** para acceder a estos siete dibujos.

| Dibujo | Qué muestra | Qué probar |
| --- | --- | --- |
| **Amplificador con transistor** | El esquema de amplificador con transistor original AMP.dsn | Siga las trayectorias de polarización y de la señal. Para obtener una reconstrucción modelada y ejecutable, use el [capítulo 7 del tutorial de SPICE](../SPICE-Tutorial-07/). |
| **Red de pequeña oficina** | Router, switch PoE, panel de conexiones y panel ciego en un rack, con un terminal del ISP, un punto de acceso y un switch de escritorio | Siga el enlace ascendente del rack y los recorridos de los cables de la oficina; añada otro panel 1U igual. |
| **Estación climática y de visualización ESP32** | Conexiones del controlador, el sensor y el módulo de visualización | Siga los pines de alimentación y señal etiquetados y, después, adapte los módulos elegidos. |
| **Plan de energía solar y batería para el hogar** | Generación solar, almacenamiento y equipos de energía doméstica en una página A3 | Siga las trayectorias de alimentación por separado de los enlaces de monitorización y control. |
| **Estudio de pódcast para dos personas** | Micrófonos, mezclador/interfaz, ordenador de grabación y monitorización | Siga las entradas de micrófono, la salida de grabación y las conexiones de auriculares. |
| **Banco de carga de CC y formas de onda** | Conexiones de la fuente de alimentación física, la carga, el generador de formas de onda, el osciloscopio y el medidor | Distinga los cables completos de los instrumentos de los conductores individuales. |
| **Banco de motor de CC y control de límites** | Un controlador de motor, un motorreductor, conexiones de control e interruptores de límite | Siga la alimentación del motor por separado de las señales PWM/dirección y de límite. |

Los seis diseños de equipos incluyen explicaciones de sus conexiones, supuestos y posibles ampliaciones. Son dibujos físicos o de sistemas, sin modelos SPICE. El amplificador original también es un ejemplo de dibujo; abrirlo no lo convierte automáticamente en una simulación ejecutable.

Los conectores abiertos pueden ser intencionales. Los cables que tocan otros extremos o conectores crean conexiones reales; por tanto, examínelos detenidamente al adaptar un diseño. Los gráficos y pines incrustados hacen que estos ejemplos sean portátiles, pero no sustituyen la documentación de cableado del dispositivo real.

## Ejemplos de simulación
{: #simulation-examples}

### Tutorial de SPICE
{: #spice-tutorial}

Este grupo sigue el [curso de SPICE de once capítulos](../SPICE-Tutorial/). Comienza con un divisor de tensión y luego aborda fuentes, carga RC, filtros de CA, rectificación con diodos, un amplificador con transistor reconstruido e investigaciones de diseño. La entrada **Empiece aquí — uso de los tutoriales (Start here — using the tutorials)** abre el primer divisor y explica el flujo de trabajo.

Los dibujos incorporan sus símbolos, el texto de los modelos, la configuración de análisis y los resultados de referencia conservados. Por ello, es posible que se vea una forma de onda **antes de la primera ejecución**. Elija **Ejecutar (Run)** para obtener datos nuevos con el circuito y la configuración actuales. Consulte los valores previstos en el capítulo y realice los cambios sugeridos para ver por qué cambia el resultado.

### Tutorial de XSPICE y digital
{: #xspice-and-digital-tutorial}

Use **TinyCAD Desktop** para este grupo. El [curso de XSPICE de seis capítulos](../XSPICE-Tutorial/) aborda tablas de verdad lógica, retardo de propagación, riesgos, flip-flops, contadores, interfaces analógicas/digitales y estados desconocidos. XSPICE no es compatible con las versiones para navegador. Aun así, un navegador puede abrir dibujos que contengan resultados XSPICE guardados para visualizarlos.

Hay 28 dibujos de simulación distintos entre los dos grupos de tutoriales. La entrada adicional «Empiece aquí» lleva al mismo divisor utilizado en el primer capítulo de SPICE. Cada lección enlaza a dibujos descargables `.dzn` y a netlists complementarias `.cir` como alternativa a abrir la copia incluida. Abra los archivos `.dzn` en TinyCAD; los archivos `.cir` son texto para inspeccionarlos o utilizarlos con un simulador externo compatible.

## Conserve sus experimentos
{: #keep-your-experiments}

El original incluido no cambia cuando edita la copia abierta. Si vuelve a abrir el mismo ejemplo incluido, obtendrá un punto de partida nuevo. Guarde su propio dibujo con otro nombre para conservar los cambios y guarde los resultados de simulación si desea conservar pruebas numéricas.

El panel **Explicación (Explanation)** y los **Gráficos de simulación (Simulation charts)** son independientes. Cerrar uno no requiere cerrar el otro. En Desktop, puede acceder a los gráficos mediante **Ver → Mostrar gráficos (View → Show Charts)**; en ambos productos, use **Simulación → Mostrar gráficos (Simulation → Show charts)** en la barra de herramientas.

Al distribuir un dibujo guardado, incluya las notas aparte que necesiten sus lectores. La explicación incluida está asociada a la apertura del ejemplo; no dé por sentado que se restaurará al abrir una copia guardada de forma independiente. Las notas de texto incrustadas en el propio dibujo siguen formando parte del archivo.

Continúe con [su primera simulación](../Simulation/#run-your-first-simulation) o con [la guía de inicio del tutorial](../Tutorial-Start-Here/).
