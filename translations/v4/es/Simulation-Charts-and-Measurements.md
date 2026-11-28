---
layout: default
---
# Gráficas, mediciones y Circuit Explorer
{: #charts-measurements-and-circuit-explorer}

Después de una [ejecución de simulación](../Simulation/), use las gráficas para explorar la forma de onda y las mediciones con nombre para registrar magnitudes reproducibles. Circuit Explorer añade ajuste temporal, ejecuciones repetidas, requisitos e informes de estudio.

Abra **Hoja de simulación → Configuración** y desplácese hasta **Circuit Explorer**. Use **Añadir herramientas** para agregar Mediciones, Ajustar / barrer, Requisitos, Superposición de CC o Laboratorio de análisis cuando sea necesario. Las herramientas configuradas aparecen en la lista de la izquierda. **Ocultar herramienta** oculta sus controles sin perder la configuración guardada. Las gráficas permanecen en el panel separado de la derecha.

## Mostrar y organizar gráficas
{: #show-and-arrange-charts}

Tanto en el navegador como en la versión de escritorio, elija **Simulación → Mostrar gráficas** en la barra de herramientas. La versión de escritorio también ofrece **Vista → Mostrar gráficas**. Arrastre el borde izquierdo del panel **Gráficas de simulación** de la derecha para cambiar su tamaño. Seleccione una configuración y una adquisición; use **Ejecutar** o **Detener** sin salir del esquema.

Las gráficas de las sondas se añaden automáticamente. Si no hay sondas, se asigna una gráfica de salida a la configuración. Use **Añadir gráfica** para agregar otra sonda o una vista personalizada y, después, **Elegir señales**. Los títulos de las gráficas se pueden editar. Un análisis con varias gráficas, como el de ruido, dispone de un selector de gráficas de resultados.

Haga clic en las entradas de la leyenda para ocultar las trazas. La tensión, la corriente y otras unidades utilizan ejes etiquetados; no lea una corriente en la escala de tensión. Los datos complejos de CA pueden mostrar partes real/imaginaria, magnitud, dB o fase. La magnitud de salida en dB no es automáticamente una ganancia de transferencia, a menos que la entrada esté normalizada adecuadamente.

Use la rueda o el gesto de pellizcar para acercar, arrastre para desplazarse, **Mayús y arrastrar** para seleccionar una región y **Ajustar** para restaurar la vista. Los cursores numéricos permiten inspeccionar posiciones de las muestras. Los resultados grandes usan datos de visualización reducidos para ofrecer una vista general ágil; al ampliar la vista, esta se refina. Las líneas base fijadas compatibles aparecen como superposiciones discontinuas.

### Ventanas independientes y exportación
{: #pop-out-and-export}

**Separar gráfica** abre una ventana independiente en cualquiera de las versiones del producto. Se pueden separar varias gráficas. Al cerrar una ventana separada, la gráfica vuelve al panel; × en una gráfica acoplada la elimina. Las gráficas separadas comparten los datos del resultado actual y no inician simulaciones independientes.

**Descargar CSV** exporta todas las muestras conservadas de las señales seleccionadas y su escala, incluidos los valores imaginarios. Es independiente del zoom de visualización o del muestreo. Las gráficas principales también ofrecen una descarga **PNG**. Incluya la configuración, la adquisición y las unidades seleccionadas en el informe para que otros lectores sepan qué experimento describen los datos.

## Pruebe la investigación RC preparada
{: #try-the-prepared-rc-investigation}

Descargue [RC low-pass.dzn](../examples/simulation/rc-low-pass.dzn), ábralo mediante **Archivo → Abrir** y ejecútelo. Este archivo complementario es independiente del ejemplo de tutorial incluido, llamado **rc-ac**. Incluye definiciones preparadas de mediciones, requisitos y ajustes.

Con R1 = 1 kΩ y C = 1 µF, la frecuencia de corte nominal es de unos 159.15 Hz. **Mediciones** incluye la frecuencia de corte, la ganancia a 100 Hz y la fase en la frecuencia de corte ideal; **Requisitos** comprueba que la frecuencia de corte esté entre 150–170 Hz.

![Controles de ajuste de Circuit Explorer en el esquema RC complementario](../Images/simulation/explorer-tuning.png)

## Ajustar sin modificar el circuito guardado
{: #tune-without-changing-the-saved-circuit}

En **Ajustar / barrer**, seleccione un componente y una propiedad numérica y, después, **Añadir control de ajuste**. Al seleccionar un componente del esquema, este queda preseleccionado en el selector. También puede enlazar parámetros admitidos de fuentes/instrumentos y parámetros con nombre de la configuración. El texto arbitrario, las expresiones y el contenido de los archivos de modelo no se pueden usar como objetivos de los controles deslizantes.

Los controles admiten unidades, límites, escalas lineales/logarítmicas y ajuste a valores preferidos E12/E24/E96. Después de un cambio, se programa una ejecución tras unos 500 ms. Los valores temporales son independientes de los valores guardados del componente.

- **Deshacer ajuste** vuelve a la anulación temporal anterior.
- **Restablecer** restaura los valores originales y la adquisición.
- **Aplicar** escribe las anulaciones en el dibujo como una única edición que se puede deshacer.

Una propiedad numérica solo afecta al circuito si la plantilla SPICE del componente realmente la utiliza. No dé por sentado que cambiar un atributo no utilizado modifica el modelo.

### Barridos de una variable
{: #one-variable-sweeps}

Despliegue **Barrido de una variable** y elija un control. Use entre 2 y 100 puntos lineales/logarítmicos o entre 1 y 100 valores explícitos, separados por espacios o punto y coma. **Ejecutar barrido** ejecuta el análisis seleccionado para cada valor. **Cancelar** detiene la programación de más casos y conserva los resultados completados.

El archivo RC complementario prepara 1 kΩ, 2.2 kΩ, 4.7 kΩ, 6.8 kΩ y 10 kΩ. Sus frecuencias de corte ideales son aproximadamente 159.15, 72.34, 33.86, 23.41 y 15.92 Hz. Compare las superposiciones o una métrica con nombre con el valor del parámetro. Esto es distinto del [análisis de barrido de CC](../Simulation-Analyses/#dc-sweep), que varía una fuente independiente dentro de un análisis de CC.

Las definiciones de barrido, los valores, las unidades, el estado de ejecución y las métricas capturadas se guardan en `.dzn`. **Barrido guardado** permite volver a consultar un grupo. Al eliminar los resultados sin procesar se eliminan las superposiciones de formas de onda, pero se pueden conservar las tablas escalares capturadas y los metadatos del informe. Se conservan hasta 100 grupos de barrido, sujetos a los límites habituales de adquisición y datos.

## Definir mediciones con nombre
{: #define-named-measurements}

En **Mediciones**, añada un nombre, seleccione una señal/componente y despliegue su configuración. Establezca una ventana de tiempo/frecuencia significativa y los niveles o referencias necesarios. Los enlaces a componentes/sondas utilizan la identidad de la hoja y la referencia, por lo que pueden mantenerse al volver a abrir el archivo.

![Mediciones preparadas de frecuencia de corte, ganancia y fase](../Images/simulation/explorer-measurements.png)

| Medición | Interpretación |
| --- | --- |
| Valor, mínimo, máximo, pico a pico | Valor de una señal en una posición o extremos dentro de la ventana elegida |
| Media, RMS, RMS de rizado | Magnitudes transitorias ponderadas en el tiempo; el RMS de rizado elimina la media |
| Integral | Área respecto al tiempo; al integrar vatios se obtienen julios |
| Tiempo de subida/bajada | Primera transición completa del 10–90 % entre los niveles bajo/alto declarados |
| Periodo, frecuencia, ciclo de trabajo, anchura de pulso | Primer ciclo/pulso completo usando un umbral explícito o el nivel medio de la ventana |
| Retardo | Primer cruce ascendente de la salida menos el primer cruce de referencia, con el mismo umbral |
| Sobreimpulso/subimpulso | Excursión respecto a los niveles inicial/final declarados y la amplitud del escalón |
| Tiempo de establecimiento | Última entrada en la banda de tolerancia del valor final, medida desde el inicio de la ventana |
| Constante de tiempo | Primer cruce de inicial + (final − inicial) × (1 − 1/e), medido desde el inicio de la ventana |
| Ganancia/fase de CA | Cociente complejo de salida/entrada en la frecuencia elegida |
| Frecuencia de corte/ancho de banda | Cruces de media potencia, −3.0103 dB respecto a la referencia de ganancia elegida |
| Resonancia | Pico de magnitud interior más alto; un máximo en el límite no constituye una resonancia resuelta |
| Métricas de respuesta adicionales | Rizado de banda pasante, atenuación de banda eliminada, magnitud de impedancia de puerto y retardo de grupo |

La integración transitoria respeta los pasos de tiempo desiguales y los extremos de ventana interpolados. RMS incluye CC; el RMS de rizado la elimina. El retardo puede ser negativo cuando el cruce de salida precede al de referencia. Las métricas temporales necesitan que una parte suficiente de la transición o el ciclo correspondiente esté dentro de la ventana.

Declare los niveles inicial/final para las métricas de escalón. Un nivel final incorrecto hace que el tiempo de establecimiento y el sobreimpulso sean engañosos. Una última muestra sin estabilizar, un cruce ausente, un enlace ambiguo, una unidad que no coincide o una ventana no válida producen **no disponible**, no un cero inventado.

Para la frecuencia de corte, use una ganancia de referencia lineal explícita o **pico**. Una referencia de unidad es adecuada para el filtro RC sencillo, pero un amplificador con ganancia 20 necesita otra referencia. El ancho de banda requiere dos cruces válidos; la interpolación de frecuencia es logarítmica. Un pico arbitrario en el extremo del barrido no demuestra una resonancia.

## Requisitos y superposiciones de CC
{: #requirements-and-dc-overlays}

Use **Requisitos** para comprobar una medición con nombre frente a **como mínimo**, **como máximo** o un intervalo inclusivo **entre**. Las unidades deben coincidir. Los resultados son **aprobado**, **fallido** o **no disponible**; una métrica no disponible no equivale a un requisito aprobado.

![El requisito de frecuencia de corte RC con un intervalo aceptable explícito](../Images/simulation/explorer-requirements.png)

Seleccione una medición disponible para inspeccionar sus datos justificativos y el resaltado aplicable en el esquema. Conserve las definiciones de medición, las ventanas y los umbrales junto con los resultados exportados. El resaltado bidireccional general de sondas no está completo para todos los tipos de señales o modelos.

La superposición del esquema de CC requiere una adquisición reciente y completada del punto de funcionamiento. La tensión es relativa a 0; la dirección de la corriente sigue el orden de terminales configurado. La potencia consumida es positiva, por lo que una fuente que suministra energía puede tener potencia negativa. La corriente de una resistencia ideal se puede derivar de V/R; las corrientes no admitidas de dispositivos se omiten en lugar de inventarse.

## Laboratorio de análisis
{: #analysis-lab}

![Flujos de trabajo del laboratorio de análisis en Circuit Explorer](../Images/simulation/analysis-lab.png)

### Respuesta en frecuencia y de amplificadores
{: #frequency-and-amplifier-response}

Elija la entrada/salida, el intervalo de frecuencia y la frecuencia de lectura. Ejecute CA para inspeccionar la ganancia, la fase, la frecuencia de corte, el ancho de banda, la resonancia, Q de paso de banda y el retardo de grupo. Q de paso de banda significa `f₀ / half-power bandwidth`. Los cálculos de función de transferencia utilizan una señal de excitación con nombre explícito. La impedancia de puerto requiere una configuración deliberada de prueba de tensión/corriente; un cociente arbitrario de nodos no es una medición de ganancia de lazo.

### Tolerancias y esquinas
{: #tolerance-and-corners}

Un estudio de Monte Carlo repite ejecuciones con distribuciones de componentes configuradas: uniforme acotada con tolerancia ± o normal no acotada especificada mediante desviación estándar. Establezca una semilla aleatoria sin signo y entre 2 y 100 casos. Reutilizar la semilla y la configuración hace que el muestreo sea reproducible. Los grupos totalmente correlacionados de forma positiva comparten una extracción normalizada y deben usar un único tipo de distribución.

Los valores muestreados no positivos de resistencia, capacitancia, inductancia o frecuencia físicas son casos fallidos. Inspeccione los fallos en lugar de excluirlos silenciosamente. La media, la desviación estándar muestral y los histogramas describen los resultados muestreados, no todas las piezas que podrían fabricarse.

La búsqueda de esquinas enumera hasta seis variables independientes, o 64 esquinas. Ignora los grupos de correlación de Monte Carlo. El peor resultado observado que se informa no demuestra que sea el peor caso global entre las esquinas. El rendimiento es ilustrativo bajo los supuestos de modelo/distribución introducidos; un estudio sin requisitos evaluables no ofrece una estimación de rendimiento.

### Casos de prueba
{: #test-cases}

Capture un análisis, parámetros, definiciones de trazas/mediciones/requisitos y enlaces como un caso. Asigne a los casos diferentes temperaturas o anulaciones de parámetros, señales de excitación y cargas, y luego ejecute la suite. Los casos comparten el **esquema y los modelos actuales**; no son revisiones históricas independientes del circuito. Cada ejecución registra la identidad de sus entradas.

Los informes JSON contienen condiciones, resultados e historial del estudio. Los estudios se ejecutan secuencialmente y se pueden cancelar; los casos fallidos o sin convergencia siguen siendo visibles. Las definiciones, la semilla, las condiciones de los casos y las referencias a grupos persisten en `.dzn`. Se conservan los últimos 100 grupos de estudio, dentro de los límites habituales de resultados.

### Potencia, eficiencia y esfuerzo
{: #power-efficiency-and-stress}

Elija señales de potencia de componentes admitidas y límites explícitos para tensión, corriente o potencia pico. Las mediciones Media/RMS/Integral proporcionan la potencia media, la corriente RMS y la energía. La eficiencia requiere un límite de entrada suministradora con el signo correcto y un límite de carga útil consumidora. Las corrientes de dispositivos no admitidas o ambiguas hacen que el resultado no esté disponible.

El análisis de CA de pequeña señal no es una prueba de esfuerzo de gran señal. Un límite numérico introducido en TinyCAD no añade un modelo térmico de encapsulado, una especificación de impulsos ni un mecanismo de protección. Use condiciones transitorias y modelos adecuados a la pregunta, y conserve sus supuestos junto con el informe.

## Límites actuales
{: #current-limits}

Los flujos de trabajo implementados no incluyen análisis de FFT/distorsión armónica, inyección automática de fallos, barridos multidimensionales sin restricciones, optimización automática ni Live/Pause cooperativos. Al revisar los resultados, use el estado de ejecución completada/detenida/fallida y la disponibilidad real de los datos. Consulte [solución de problemas](../Simulation-Troubleshooting/) si una métrica o adquisición no está disponible.
