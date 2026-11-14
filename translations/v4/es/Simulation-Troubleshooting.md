---
layout: default
---
# Solución de problemas de simulación
{: #simulation-troubleshooting}

Lea el estado de adquisición y la salida de diagnóstico antes de cambiar los ajustes. Distinga entre **una ejecución fallida**, **una ejecución válida con un comportamiento inesperado** y **una medición no disponible en el resultado seleccionado**. Cada caso requiere comprobaciones distintas.

## La simulación no se inicia
{: #the-simulation-will-not-start}

| Síntoma | Comprobación |
| --- | --- |
| Falta la tierra / circuito flotante | Conecte un símbolo de alimentación o una etiqueta con el valor **0**. Una etiqueta GND independiente no es automáticamente el nodo 0. Compruebe los retornos de las fuentes y los subcircuitos aislados. |
| Falta el modelo del componente | Use una pieza de biblioteca con modelo o proporcione una plantilla y un modelo. Las imágenes de equipos no son modelos de simulación. |
| Faltan atributos o el mapeo de pines no es válido | Revise las propiedades SPICE del componente y el orden real de los terminales del modelo. Las sobrescrituras de instancia pueden cambiar los valores predeterminados. |
| No se encuentra el modelo o el archivo include | Adjunte el texto del modelo y sus dependencias a la hoja Simulation usando nombres de archivo lógicos coincidentes. No se obtienen automáticamente las rutas absolutas locales ni las URL web. |
| Directivas de análisis en un componente | Elimine `.op`, `.tran`, `.ac`, `.end` heredados y el texto de control de ejecución de los atributos del componente. La hoja integrada Simulation es la que administra los ajustes de análisis. |
| El modelo XSPICE no está disponible en el navegador | Abra el dibujo en Desktop para realizar una nueva ejecución nativa. Sigue siendo posible inspeccionar los resultados guardados en el navegador. |
| Fuente o rango no válidos | Compruebe los campos de forma de onda, los tiempos PWL crecientes, los valores de inicio y parada, la dirección del barrido y que las cantidades de frecuencia y tiempo sean positivas. |

## El resultado es incorrecto o el solucionador no converge
{: #a-result-is-wrong-or-the-solver-does-not-converge}

**Inspeccione primero el circuito.** Una línea que sobrepasa el extremo de un cable o una toma sin usar puede crear una conexión accidental. Compruebe las uniones en T, los extremos reales de los pines, las etiquetas de red y las alimentaciones ocultas. Un medidor o una sonda de corriente colocado entre los terminales de una fuente puede cortocircuitarla. Use la netlist generada para determinar qué recibió el simulador.

Compruebe la orientación y el orden del modelo: polaridad del diodo, colector/base/emisor del BJT, pines de alimentación del amplificador operacional y orden de los pines del subcircuito. Use referencias únicas y descriptivas, y confirme que la referencia de fuente en el ajuste de barrido/ruido/transferencia apunta a la fuente prevista.

Verifique la polarización de CC con Operating Point antes de investigar el análisis de CA. Los lazos de fuentes ideales, los nodos flotantes, las transiciones ideales abruptas y los parámetros de modelo poco razonables pueden dificultar o imposibilitar la resolución de un circuito. Añada resistencias justificadas físicamente o tiempos de flanco finitos cuando representen el experimento real. Reduzca un circuito complejo a la sección mínima que falla antes de modificar las opciones numéricas.

Compruebe los sufijos numéricos: **1M en texto SPICE significa 1 miliunidad, no una megaunidad**; use `1Meg` para mega. Revise por separado la temperatura, el valor de CC de la fuente y los ajustes de transitorio/CA. La amplitud transitoria de una fuente no se convierte automáticamente en su amplitud de CA de pequeña señal.

## La forma de onda parece incompleta
{: #the-waveform-looks-incomplete}

- Aumente la duración del transitorio si el arranque aún no se ha estabilizado o si el ciclo requerido queda fuera de la ejecución.
- Reduzca el paso máximo para resolver flancos rápidos o pulsos estrechos. El zoom de visualización no puede recuperar muestras que faltan.
- Compruebe el ajuste seleccionado, la adquisición, el gráfico de resultados, la visibilidad de la leyenda, las unidades y el rango de los ejes.
- Para CA, use suficientes puntos cerca de una resonancia estrecha y la relación correcta entre entrada y salida.
- Si la ejecución se detuvo o falló, inspeccione la disponibilidad real de los datos; una traza parcial no es un experimento completado.

## Los gráficos o las lecturas de las sondas están desactualizados
{: #charts-or-probe-readings-are-stale}

Si edita el cableado, los valores, el texto del modelo o el ajuste, es necesario volver a **Ejecutar (Run)**. Las adquisiciones guardadas describen sus entradas originales. La selección del historial no deshace los cambios en el dibujo. Un tutorial incluido puede abrirse con un resultado de referencia conservado antes de que usted ejecute nada.

Use **Simulation → Mostrar gráficos (Show charts)** o, en Desktop, **View → Mostrar gráficos (Show Charts)** si el panel está oculto. Si elimina un gráfico de sonda automático, permanecerá eliminado hasta que lo vuelva a añadir explícitamente. Al cerrar una ventana emergente de gráfico, este vuelve al panel.

## Una medición no está disponible
{: #a-measurement-is-unavailable}

Compruebe su vinculación de señal, unidad, ventana, umbral y niveles inicial y final explícitos. Las mediciones temporales necesitan cruces/ciclos completos. Una medición de establecimiento debe terminar dentro de la banda final declarada. El corte requiere el cruce solicitado y la referencia de ganancia; el ancho de banda requiere dos cruces. Una resonancia en el límite del barrido no está resuelta. No se infieren vectores de corriente/potencia de dispositivos no admitidos.

Un requisito no disponible no es un aprobado. Exporte las condiciones y el estado de fallo con los informes del estudio, y mantenga visibles los casos de tolerancia que no convergen. Si un estudio no tiene requisitos evaluables, no tiene una estimación del rendimiento.

## Guardar y reproducir una investigación
{: #saving-and-reproducing-an-investigation}

Mantenga juntos el dibujo, los adjuntos de modelo, los ajustes de análisis, los ajustes de las fuentes, la temperatura y las adquisiciones pertinentes. Si guardó sin resultados numéricos o los eliminó para reducir el tamaño del archivo, vuelva a ejecutar para restaurar los gráficos. Las instantáneas conservadas de valores escalares e informes no recrean las matrices de formas de onda que faltan.

Un informe reproducible indica las hipótesis del modelo, el motor, la ventana de medición y las condiciones. Compare con los [valores esperados del tutorial](../Simulation-Tutorials/) y el manual oficial de [ngspice](https://ngspice.sourceforge.io/docs.html) al aislar un problema del lenguaje del simulador.
