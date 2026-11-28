---
layout: default
---
# Análisis y ajustes de simulación
{: #simulation-analyses-and-settings}

Elija un análisis en la pestaña **Setup** de una [hoja de simulación](../Simulation/). Selecciónelo según la pregunta que quiera responder. Una onda sinusoidal en el dominio temporal y un barrido de frecuencia de CA son experimentos distintos, incluso cuando utilizan el mismo símbolo de fuente.

| Análisis | Pregunta | Resultado principal |
| --- | --- | --- |
| **Punto de operación** | ¿Cuáles son las tensiones y corrientes de polarización en CC? | Valores escalares |
| **Transitorio** | ¿Qué ocurre después de un cambio o a lo largo de ciclos repetidos? | Señales en función del tiempo |
| **CA** | ¿Cómo cambia una señal pequeña con la frecuencia? | Señales complejas en función de la frecuencia |
| **Barrido de CC** | ¿Cómo cambia el comportamiento en CC cuando varía una fuente independiente? | Señales en función del valor de la fuente |
| **Ruido** | ¿Qué ruido llega a la salida seleccionada? | Gráficas de ruido espectral e integrado |
| **Función de transferencia** | ¿Cuál es la transferencia de pequeña señal en CC desde una fuente con nombre? | Ganancia y resistencia de entrada/salida |
| **Polos y ceros** | ¿Dónde están los polos y ceros de la transferencia configurada? | Resultados complejos de polos y ceros |

## Punto de operación
{: #operating-point}

El punto de operación encuentra una solución estacionaria de CC. Los condensadores ideales son circuitos abiertos y los inductores ideales son cortocircuitos en CC. Los dispositivos no lineales, como diodos y transistores, se resuelven en sus condiciones de polarización. Compruebe este análisis antes de intentar obtener la respuesta en frecuencia de un amplificador con transistores: un transistor polarizado incorrectamente se linealizará alrededor del estado equivocado.

Use **Data** para consultar las tensiones de nodo y las corrientes de rama. La tensión se mide con respecto a tierra 0. El signo de la corriente sigue el orden de terminales declarado por el dispositivo; una corriente negativa de alimentación puede significar simplemente que está suministrando potencia. El [tutorial de CC](../SPICE-Tutorial-02/) explica paso a paso la tensión, la corriente y la potencia.

![Resultados escalares de tensión y corriente de una ejecución reciente del punto de operación del divisor](../Images/simulation/simulation-data.png)

## Transitorio: comportamiento a lo largo del tiempo
{: #transient-behaviour-over-time}

Ajuste **Duration** para que abarque el evento y la parte de la respuesta que necesita medir. Ajuste **Maximum step** para que sea lo bastante pequeño como para resolver la característica significativa más rápida. En el caso de un pulso, puede tratarse de su flanco y no de su período de repetición. Una visualización de aspecto suave no puede recuperar transiciones que el solucionador no haya resuelto.

En un circuito RC de carga, la constante de tiempo es `τ = R × C`. Unas cinco constantes de tiempo muestran la mayor parte de la respuesta de establecimiento de un sistema de primer orden. Para medir el rizado o el valor RMS, simule suficientes ciclos hasta alcanzar el régimen estacionario y mida una ventana posterior, en lugar de incluir involuntariamente el arranque.

El solucionador utiliza pasos de tiempo adaptativos. El paso máximo limita el tamaño de sus pasos; no garantiza una cuadrícula de muestras espaciada uniformemente. Los algoritmos de medición tienen en cuenta los tiempos de muestra reales. El zoom de la gráfica cambia la visualización, no el paso de adquisición.

De forma predeterminada, una ejecución transitoria primero encuentra un punto de operación de CC. La opción de condiciones iniciales que omite este paso corresponde a **UIC** de SPICE. Úsela deliberadamente cuando el estado inicial especificado forme parte del experimento; no es una solución general para un circuito conectado incorrectamente. Consulte [carga de un circuito RC](../SPICE-Tutorial-04/) y [rectificación y rizado](../SPICE-Tutorial-06/).

## CA: respuesta en frecuencia de pequeña señal
{: #ac-small-signal-frequency-response}

El análisis de CA primero encuentra el punto de operación, linealiza allí los dispositivos no lineales y calcula la respuesta a una perturbación sinusoidal pequeña. **No** barre una señal sinusoidal transitoria grande hasta llegar al recorte. Use el análisis transitorio para estudiar el recorte, la distorsión y las excursiones de gran señal.

Ajuste las frecuencias inicial y final, y el número de puntos por década. Un barrido logarítmico resulta útil al investigar varios órdenes de magnitud. Aumente la resolución en frecuencia alrededor de una resonancia estrecha o de frecuencias de corte muy próximas.

Ajuste la **amplitud de CA** y la fase de la fuente por separado de los ajustes de su forma de onda transitoria. Una amplitud de CA de **1 V** con una fase de **0°** facilita la interpretación de la transferencia de tensión con una sola entrada. La amplitud de una sinusoide transitoria por sí sola no habilita una señal de excitación de CA. Para una entrada general, calcule la relación compleja `V(out) / V(in)`; la tensión de salida por sí sola no siempre es la ganancia.

![Ajustes del barrido de CA para el filtro RC incluido](../Images/simulation/ac-setup.png)

Para un filtro pasa-bajos de primer orden con R = 1 kΩ y C = 1 µF, `fc = 1 / (2πRC) ≈ 159.15 Hz`. A esa frecuencia, un filtro con ganancia unitaria en la banda pasante tiene una ganancia de aproximadamente 0,707, o −3,0103 dB, y una fase de aproximadamente −45°. El [tutorial sobre filtros](../SPICE-Tutorial-05/) muestra la magnitud, los dB y la fase.

![Resultados reales de CA de una ejecución reciente en el navegador del ejemplo RC](../Images/simulation/ac-charts.png)

## Barrido de CC
{: #dc-sweep}

Elija la **referencia de la fuente**, como `V1`, e introduzca los valores inicial, final y de paso. La referencia identifica una fuente independiente de tensión o corriente; no es una etiqueta de red. Elija un paso que avance del valor inicial al final.

Un barrido de CC resuelve una sucesión de condiciones de polarización. Es útil para obtener la curva I–V de un diodo o la curva de transferencia estática de un amplificador. No modela la rapidez con que cambia la fuente ni la carga almacenada durante una rampa. Para ello, aplique una forma de onda variable en el tiempo y use el análisis transitorio.

Este análisis es distinto de un **barrido de una variable de Circuit Explorer**, que ejecuta repetidamente un análisis seleccionado mientras cambia un componente numérico o un parámetro de configuración. Por ejemplo, barra R1 por cinco valores mientras repite un análisis de CA para comparar las frecuencias de corte del filtro.

## Ruido
{: #noise}

Especifique la fuente de entrada y los nodos de salida/referencia, y luego el rango de frecuencias y la resolución. La salida es una diferencia de tensión; compruebe la referencia seleccionada. El análisis de ruido utiliza las contribuciones de ruido de pequeña señal alrededor del punto de operación. Necesita modelos de dispositivos compatibles con el análisis de ruido; no se asigna automáticamente el espectro de ruido de un dispositivo físico a un bloque comportamental ideal sin ruido.

Seleccione la gráfica de resultados correcta: la densidad **espectral** y el ruido **integrado** son magnitudes distintas. Respete las unidades de la gráfica; una densidad de amplitud en V/√Hz no es una tensión hasta que se integra en un ancho de banda definido. Consulte [investigaciones de diseño](../SPICE-Tutorial-10/).

## Función de transferencia y polos y ceros
{: #transfer-function-and-pole-zero}

**Función de transferencia** (`.tf`) utiliza una fuente independiente con nombre explícito y un puerto de salida para calcular la ganancia de pequeña señal en CC y la resistencia de entrada/salida. No es el barrido completo en frecuencia de un análisis de CA. Compruebe la referencia de la fuente y si la salida se mide con respecto al nodo correcto.

El análisis de **polos y ceros** investiga los polos y ceros de la transferencia de pequeña señal configurada. Las opciones de puerto y transferencia son importantes: no se trata de una búsqueda de todos los comportamientos posibles de un esquema. Interprete los resultados en el plano complejo junto con los resultados de CA y transitorios, en lugar de considerarlos un sustituto de un modelo correctamente polarizado.

## Temperatura, unidades y parámetros
{: #temperature-units-and-parameters}

La temperatura de configuración se expresa en **°C**. Afecta a los dispositivos cuyos modelos implementan la dependencia de la temperatura; no añade física térmica a un componente ideal. Los parámetros de configuración con nombre permiten reutilizar un valor numérico en expresiones SPICE y vínculos de exploración compatibles.

Los controles numéricos aceptan notación de ingeniería como `5ms`, `10us` y `1kHz`. En el **texto SPICE**, los sufijos siguen las reglas de SPICE: `k` significa kilo, `u` micro, `n` nano y **`m` o `M` significa mili**. Escriba **`Meg`** para mega, por ejemplo, `1Meg` para un megaohmio. No dé por sentado que `1M` significa un millón.

Un cálculo directo de la constante de tiempo o de la frecuencia de corte es una comprobación útil. No sustituye el análisis de la carga: la resistencia de salida de un generador, la resistencia de entrada de un medidor o la etapa siguiente pueden modificar la respuesta real.

Para consultar la sintaxis completa de análisis y el comportamiento de los modelos, consulte el [manual oficial de ngspice](https://ngspice.sourceforge.io/docs.html). Para los controles de TinyCAD, continúe con [fuentes e instrumentos](../Simulation-Sources-and-Instruments/) o [gráficas y mediciones](../Simulation-Charts-and-Measurements/).
