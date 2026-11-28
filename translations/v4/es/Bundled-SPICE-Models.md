---
layout: default
---
# Modelos SPICE incluidos
{: #bundled-spice-models}

TinyCAD incluye un catálogo sin conexión de modelos SPICE. Use un modelo incluido para simular un componente con ngspice, comparar dispositivos candidatos o iniciar un modelo Custom a partir de una definición conocida y funcional. Los modelos están disponibles tanto en TinyCAD Web como en la aplicación de escritorio. El selector se ejecuta localmente una vez cargada la aplicación.

## Empezar con un símbolo modelado
{: #start-with-a-modelled-symbol}

Abra **Standard → SPICE essentials** en el panel lateral o use **Simulation → SPICE components** en la barra de herramientas. Elija **More…** para explorar la biblioteca completa de símbolos. Los 29 símbolos de SPICE essentials tienen un modelo incluido y una asignación de pines preestablecida. La mayoría usan un modelo **TinyCAD Basic**. Los modelos LM358 y LM324 usan modelos completos de encapsulado OpenJellyBean.

Coloque un símbolo, selecciónelo en el dibujo y abra **SPICE** en el panel inferior **Symbol**. **Bundled** muestra el modelo vinculado y su origen. Los campos habituales del símbolo, como **Value**, **Wiper** e **Initial Voltage**, siguen controlando los modelos TinyCAD Basic que usan esos campos. Por ejemplo, establezca **Value** de una resistencia en `10k` para simular 10 kΩ con su modelo predeterminado **Ideal resistor**.

![La pestaña SPICE del símbolo colocado muestra Bundled seleccionado y enlaces al modelo TinyCAD Basic de LED amarillo.](/v4/Images/simulation/bundled-spice-properties.png)

Para probarlo en un circuito completo, elija **Open Example → SPICE tutorial → divider** y seleccione una de las resistencias. Su pestaña **SPICE** muestra el enlace **Ideal resistor**. Cambie el valor de la resistencia y vuelva a ejecutar la configuración de punto de operación del ejemplo. El resultado conservado representa el circuito anterior a la edición.

## Elegir y asociar un modelo
{: #choose-and-attach-a-model}

1. Abra la pestaña **SPICE** del símbolo. Seleccione **Bundled** y luego **Find SPICE model…**.
2. Introduzca un número de pieza, alias, ID de modelo o familia de dispositivos. Borre el campo de búsqueda para ver las opciones disponibles para ese símbolo.
3. Seleccione una fila. Los detalles debajo de la tabla muestran la descripción del modelo, el origen, el orden de terminales y los parámetros ajustables, si los hay. Despliegue **View SPICE definition** para ver la plantilla de instancia y las tarjetas de modelo o subcircuitos que utiliza. Seleccione el enlace del origen para consultar la definición original o el archivo de archivo ascendente y el nombre del miembro.
4. Revise la asignación de pines y establezca las anulaciones de parámetros que necesite. Elija **Select SPICE model**. En un dibujo, esto cambia la colocación seleccionada y se puede deshacer.

![Diálogo Find SPICE model para un LED amarillo. El modelo circsim seleccionado muestra su origen y los números de pin verificados del ánodo y el cátodo.](/v4/Images/simulation/bundled-spice-picker.png)

Los **símbolos SPICE essentials** solo muestran modelos con asignaciones verificadas para la disposición de pines de ese símbolo. Algunos símbolos solo tienen el modelo Basic predeterminado. Por ejemplo, un LED amarillo ofrece su modelo Basic y el LED amarillo circsim. Un transistor NPN estándar puede usar el modelo genérico o una alternativa, como `2N3904_OJ` de OpenJellyBean, con el colector, la base y el emisor ya asignados a los pines 3, 1 y 2.

**Otros símbolos**, incluidas las colocaciones antiguas sin la identidad de biblioteca, pueden explorar el catálogo completo de su edición. Revise las coincidencias sugeridas y seleccione un pin físico distinto para cada terminal del modelo. Incluya los pines de alimentación, aunque estén ocultos en el esquema. Use el pinout verificado del encapsulado del símbolo y el orden de terminales del modelo. Deje fuera de la asignación los pines físicos que el modelo omita. Un símbolo temporal con un número o una función de pines incorrectos debe corregirse antes de poder representar el dispositivo.

![Asignación manual de pines para un símbolo 741 de una biblioteca personalizada, con los cinco terminales circsim LM741 asignados a los pines físicos 3, 2, 6, 7 y 4.](/v4/Images/simulation/bundled-spice-pin-mapping.png)

El ejemplo asigna el modelo circsim `LM741` a un símbolo 741 mediante los pines 3 (no inversor), 2 (inversor), 6 (salida), 7 (alimentación positiva) y 4 (alimentación negativa). El modelo omite los pines de ajuste de offset. Para un símbolo de biblioteca multiparte, TinyCAD ofrece los números de pin compartidos por las partes que usarán la plantilla. Elija un modelo de encapsulado completo si el símbolo y la simulación necesitan el encapsulado completo.

Si el selector muestra **No models match this search**, borre la búsqueda o pruebe un término más general. Un símbolo etiquetado puede ofrecer únicamente sus opciones verificadas. Para usar otro modelo, compruebe el pinout del dispositivo y use un [símbolo de biblioteca personalizado](../Custom-symbol-libraries/) apropiado o una definición Custom.

## Elegir el nivel de detalle adecuado
{: #choose-the-right-level-of-detail}

| Qué desea averiguar | Con qué modelo empezar |
| --- | --- |
| Comprobar un divisor, una constante de tiempo RC o el comportamiento básico de un circuito | Use TinyCAD Basic. Los modelos ideales son útiles cuando las parasitarias y las tolerancias quedan fuera del objetivo. |
| Explorar la polarización, la ganancia, la caída directa de un diodo o la conmutación con una pieza concreta | Busque la pieza exacta o un equivalente documentado. Revise la descripción y las hipótesis del modelo para su tensión, corriente, temperatura y frecuencia. |
| Explorar un sustituto cuando no hay un modelo exacto disponible | Use un candidato documentado de sustitución directa o un modelo genérico de la familia del dispositivo. Verifique por separado las funciones de los pines del encapsulado, la polaridad de alimentación y los límites de funcionamiento. Anote qué comportamientos está aproximando. |
| Investigar un límite, como el ruido, el rango de modo común de entrada, la deriva térmica o una esquina de proceso | Compruebe si el modelo cubre explícitamente ese efecto. Cuando sea necesario, use un modelo adecuado del fabricante o de proceso como [definición Custom](../SPICE-output/#models-templates-and-pin-order). |

Los modelos incluidos describen el comportamiento típico. Por ejemplo, el 741 de circsim representa la ganancia nominal, el ancho de banda, la velocidad de respuesta, el offset y la corriente de alimentación. Usa una etapa de entrada de alta impedancia. El LED amarillo circsim modela el comportamiento eléctrico alrededor de un ajuste de 2.10 V a 20 mA. La salida luminosa, las especificaciones nominales del dispositivo y el comportamiento en las peores condiciones requieren pruebas propias.

## Establecer un valor predeterminado de biblioteca o editar una copia Custom
{: #set-a-library-default-or-edit-a-custom-copy}

- **Para futuras colocaciones**, abra una biblioteca `.tclib` editable y seleccione el símbolo. Abra su pestaña **SPICE** y use el mismo selector de modelos. Guarde la biblioteca. La definición elegida se convierte en el valor predeterminado para futuras colocaciones desde esa entrada. Las colocaciones existentes conservan sus definiciones guardadas.
- **Para una sola colocación**, selecciónela en el esquema y cambie sus propiedades **SPICE**. Esto resulta útil para comparar dos modelos lado a lado en el mismo dibujo.
- **Para editar el texto del modelo**, seleccione **Custom** en un símbolo vinculado. TinyCAD copia la plantilla de instancia y las definiciones necesarias en campos editables con los pines asignados. En los modelos con definiciones, la copia local usa nombres delimitados al ámbito de la colocación, para que pueda ejecutarse junto con el original incluido. Para una resistencia ideal, basta con la plantilla de instancia.

Volver a **Bundled** restaura el modelo vinculado. Cambie de nuevo a **Custom** para recuperar sus ediciones. El modo seleccionado determina qué definición se usa y ambas configuraciones se conservan al guardar y volver a abrir. **Remove attached model** elimina el vínculo y restaura la plantilla anterior, si se había guardado.

Una [importación de SPICE de KiCad](../Importing-Symbols-from-KiCAD/#import-spice-models-with-symbols) compatible aparece en **Custom**. Si desea conservar esa definición importada para futuras colocaciones, impórtela en una biblioteca editable y guárdela.

## Ejecutar, guardar y compartir
{: #run-save-and-share}

1. Conecte los pines asignados y las alimentaciones, incluida una conexión a tierra SPICE **0**.
2. Cree o abra una [hoja de simulación](../Simulation/), seleccione el análisis en **Setup** y elija **Run**. Los modelos incluidos activos se resuelven automáticamente. Use **Setup → SPICE models** para asociar archivos adicionales que requiera un modelo Custom.
3. Abra **Diagnostics → Generate circuit text** para inspeccionar las líneas de instancia expandidas y las referencias a modelos. Compruebe el orden de los pines y las redes de alimentación si un resultado parece incorrecto.

Los dibujos conservan la revisión de cada modelo, los pines asignados y los ajustes de parámetros, con una copia guardada de cada paquete referenciado. Guarde el dibujo para compartir el circuito y sus definiciones de modelo. Los modelos XSPICE exclusivos de escritorio siguen requiriendo el motor de escritorio para ejecutarse. **Generate Spice NetList** incorpora las definiciones incluidas referenciadas en la salida SPICE. Consulte [Modelos SPICE y salida de netlist](../SPICE-output/#inspect-and-export-a-spice-netlist) para ver las opciones de exportación y la diferencia entre un archivo de simulación y un dibujo.

## Contenido y fuentes del catálogo
{: #catalog-contents-and-sources}

TinyCAD Web incluye 97 modelos de catálogo. La aplicación de escritorio añade tres definiciones que requieren XSPICE nativo. Use el enlace de los detalles de cada modelo para consultar la fuente precisa del modelo. TinyCAD incluye los avisos de licencia con los paquetes; también están disponibles en **About TinyCAD**.

| Paquete | Modelos | Ejemplos |
| --- | ---: | --- |
| TinyCAD Basic | 20 | Resistencias, condensadores e inductores ideales, fuentes independientes, plantillas de potenciómetro y transformador, semiconductores genéricos, 741 y resonadores |
| OpenJellyBean | 42 | BJT, MOSFET, JFET, diodos de señal y Schottky, zéneres, LED, canales y encapsulados de amplificadores operacionales, y un potenciómetro |
| circsim | 15 | LM741, LED amarillo, LM393, LM339, NE5532, NE555, optoacopladores, reguladores y MOSFET de potencia |
| Spice_Files | 14 | Diodos y LED genéricos, puente rectificador, optoacopladores, interruptor, relé, cristal de 16 MHz y transformador 10:1 |
| ngspice special models | 1 | Generador de formas de onda ICL8038 |
| ngspice special models (Desktop) | 3 | Inversor de tensión LTC1044HV, regulador LR8 y su amplificador operacional auxiliar |
| SkyWater SKY130 | 1 | Transistor PNP integrado nominal con terminal de sustrato |
| GlobalFoundries GF180MCU | 3 | Condensadores MIM nominales de 1.0, 1.5 y 2.0 fF/µm² |
| IHP SG13G2 | 1 | Transistor PNP integrado nominal pnpMPA |

Las entradas de fundiciones son modelos nominales seleccionados. Los kits de proceso completos proporcionan árboles de modelos, esquinas y configuración del simulador independientes. Consulte la [referencia del catálogo](https://github.com/matt123p/TinyCADv4/blob/main/docs/bundled-spice-models.md#catalog-sources) para ver el inventario de fuentes, las licencias y las alternativas verificadas para SPICE essentials.

## Preguntar al asistente de IA de escritorio
{: #ask-the-desktop-ai-assistant}

Cuando solicite explícitamente ayuda con SPICE, el [asistente de IA de escritorio](../AI-Assistant/) puede buscar en el catálogo local, inspeccionar el texto y las fuentes de los modelos, y revisar la asignación a su símbolo. Puede asociar un modelo a un componente colocado o guardar un modelo como predeterminado al añadir una nueva pieza de biblioteca. Pregunta antes de reemplazar una plantilla Custom existente. Para el trabajo habitual con esquemas o símbolos, conserva los valores predeterminados proporcionados.

Para una comparación de solo lectura, pruebe: «Busca un modelo SPICE incluido para Q1. Compara el orden de sus terminales y sus limitaciones con la pieza prevista. No modifiques el dibujo».

Para solicitar una edición, pruebe: «Asocia el modelo 2N3904 incluido a Q1 después de comprobar la asignación de sus pines físicos. Muéstrame la fuente y las hipótesis».
