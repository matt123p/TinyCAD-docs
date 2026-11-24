---
layout: default
---
# Solución de problemas de simulación
{: #simulation-troubleshooting}

Lea el estado de adquisición y la salida de diagnóstico antes de cambiar la configuración. Distinga entre **una ejecución fallida**, **una ejecución válida con un comportamiento inesperado** y **una medición no disponible a partir del resultado seleccionado**. Cada caso requiere comprobaciones distintas.

## La simulación no se inicia
{: #the-simulation-will-not-start}

| Síntoma | Comprobación |
| --- | --- |
| Falta la conexión a tierra / circuito flotante | Conecte un símbolo de alimentación o una etiqueta cuyo valor sea **0**. Una etiqueta GND independiente no es automáticamente el nodo 0. Compruebe los retornos de las fuentes y los subcircuitos aislados. |
| Falta el modelo de un componente | Seleccione el símbolo y compruebe **SPICE**. Use una pieza de biblioteca con modelo o [adjunte una definición incluida o personalizada](../Bundled-SPICE-Models/). |
| Ningún modelo coincide con la búsqueda | Borre la búsqueda o pruebe con un alias de pieza o una familia de dispositivos. Un símbolo de elementos esenciales de SPICE solo muestra sus modelos verificados. |
| Faltan atributos o la asignación de pines no es válida | Inspeccione las propiedades SPICE del componente y el orden real de los terminales del modelo. Las anulaciones de instancia pueden cambiar los valores predeterminados. |
| No se encuentra el modelo o archivo include | Adjunte el texto del modelo y sus dependencias a la hoja Simulation usando nombres de archivo lógicos coincidentes. No se obtiene automáticamente un archivo mediante una ruta absoluta local ni una URL web. |
| Directivas de análisis en un componente | Elimine `.op`, `.tran`, `.ac`, `.end` heredados y el texto de control de ejecución de los atributos de los componentes. La hoja Simulation integrada es la que contiene la configuración del análisis. |
| Modelo XSPICE no disponible en el navegador | Abra el dibujo en Desktop para ejecutar una simulación nativa nueva. Sigue siendo posible inspeccionar los resultados guardados en el navegador. |
| Fuente o intervalo no válido | Compruebe los campos de forma de onda, que los tiempos PWL sean crecientes, los valores de inicio y fin, la dirección del barrido y que las magnitudes de frecuencia/tiempo sean positivas. |

## Un resultado es incorrecto o el solucionador no converge
{: #a-result-is-wrong-or-the-solver-does-not-converge}

**Inspeccione primero el circuito.** Una línea que sobrepasa el extremo de un cable o un conector sin usar puede crear una conexión accidental. Compruebe las uniones en T, los extremos reales de los pines, las etiquetas de red y las alimentaciones ocultas. Un sondeo de corriente o un medidor colocado en paralelo con una fuente puede cortocircuitarla. Use la lista de conexiones generada para determinar qué recibió el simulador.

Compruebe la orientación y el orden del modelo: polaridad del diodo, colector/base/emisor del BJT, pines de alimentación del amplificador operacional y orden de pines del subcircuito. Use referencias únicas y significativas, y confirme que la referencia de fuente de una configuración de barrido/ruido/transferencia apunte a la fuente prevista.

Verifique la polarización de CC con el análisis de punto de funcionamiento antes de investigar el análisis de CA. Los lazos de fuentes ideales, los nodos flotantes, las transiciones ideales abruptas y los parámetros de modelo poco razonables pueden hacer que un circuito sea difícil o imposible de resolver. Añada una resistencia físicamente justificada o tiempos de flanco finitos cuando representen el experimento real. Reduzca un circuito complejo a la sección más pequeña que presente el fallo antes de modificar las opciones numéricas.

Compruebe los sufijos numéricos: **1M en texto SPICE equivale a 1 miliunidad, no a una megaunidad**; use `1Meg` para mega. Revise por separado la temperatura, el valor de CC de la fuente y la configuración transitoria/CA. La amplitud transitoria de una fuente no se convierte automáticamente en su amplitud de CA de pequeña señal.

## La forma de onda parece incompleta
{: #the-waveform-looks-incomplete}

- Aumente la duración transitoria si el arranque aún no se ha estabilizado o si el ciclo requerido queda fuera de la ejecución.
- Reduzca el paso máximo para resolver flancos rápidos o pulsos estrechos. El zoom de la visualización no puede recuperar muestras que faltan.
- Compruebe la configuración seleccionada, la adquisición, el gráfico de resultados, la visibilidad de la leyenda, las unidades y el intervalo del eje.
- En CA, use suficientes puntos cerca de una resonancia estrecha y la relación correcta entre entrada y salida.
- Si la ejecución se detuvo o falló, inspeccione la disponibilidad real de los datos; una traza parcial no es un experimento completado.

## Los gráficos o las lecturas de las sondas están desactualizados
{: #charts-or-probe-readings-are-stale}

La edición del cableado, los valores, el texto del modelo o la configuración requiere otra ejecución (**Run**). Las adquisiciones guardadas describen sus entradas originales. Seleccionar un elemento del historial no deshace los cambios en el dibujo. Es posible que un tutorial incluido se abra con un resultado de referencia conservado antes de que usted ejecute nada.

Use **Simulation → Mostrar gráficos (Show charts)** o, en Desktop, **View → Mostrar gráficos (Show Charts)** si el panel está oculto. Si elimina un gráfico de sonda automático, permanecerá eliminado hasta que lo vuelva a añadir explícitamente. Al cerrar una ventana de gráfico independiente, este vuelve al panel.

## Una medición no está disponible
{: #a-measurement-is-unavailable}

Compruebe su asociación de señal, unidad, ventana, umbral y niveles inicial/final explícitos. Las mediciones de tiempo requieren cruces/ciclos completos. Una medición de estabilización debe terminar dentro de la banda final declarada. Para determinar el corte se necesitan el cruce solicitado y la referencia de ganancia; el ancho de banda requiere dos cruces. Una resonancia en el límite del barrido no queda resuelta. No se infieren vectores de corriente/potencia de dispositivo no admitidos.

Un requisito no disponible no equivale a un aprobado. Exporte las condiciones y el estado de fallo con los informes de estudio, y mantenga visibles los casos de tolerancia que no convergen. Si un estudio no tiene requisitos evaluables, no dispone de una estimación de rendimiento.

## Guardar y reproducir una investigación
{: #saving-and-reproducing-an-investigation}

Mantenga juntos el dibujo, los archivos de modelo adjuntos, la configuración del análisis, la configuración de las fuentes, la temperatura y las adquisiciones pertinentes. Si guardó sin resultados numéricos o los eliminó para reducir el tamaño del archivo, vuelva a ejecutar la simulación para restaurar los gráficos. Las instantáneas conservadas de valores escalares o informes no recrean los arreglos de forma de onda que faltan.

Un informe reproducible indica las hipótesis del modelo, el motor, la ventana de medición y las condiciones. Compare con los [valores esperados del tutorial](../Simulation-Tutorials/) y el [manual oficial de ngspice](https://ngspice.sourceforge.io/docs.html) para aislar un problema relacionado con el lenguaje del simulador.
