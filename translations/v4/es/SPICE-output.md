---
layout: default
---
# Modelos SPICE y salida de netlist
{: #spice-models-and-netlist-output}

TinyCAD admite tanto la [simulación integrada con ngspice](../Simulation/) como la exportación de netlists SPICE para un simulador externo. Ambas dependen de las plantillas SPICE y de la asignación de pines del componente. La apariencia de un símbolo, por sí sola, no describe su comportamiento eléctrico.

Para elegir un modelo que ya esté incluido en TinyCAD, consulte [Modelos SPICE incluidos](../Bundled-SPICE-Models/).

## Modelos, plantillas y orden de pines
{: #models-templates-and-pin-order}

Una resistencia puede usar un elemento SPICE nativo. Un transistor puede necesitar un `.model`; un dispositivo más complejo puede usar un `.subckt`. La configuración SPICE de un símbolo colocado conecta sus números de pin físicos con los terminales que espera el modelo. Examine la pestaña **SPICE** en las propiedades del símbolo; los atributos de instancia pueden sustituir los valores predeterminados del símbolo.

Las plantillas usan:

- **`%(pin)`** para la red conectada al número de pin especificado de TinyCAD.
- **`$(attribute)`** para un atributo del componente.
- **`refnum`** como sufijo de referencia con un tratamiento especial, para conservar el prefijo de dispositivo SPICE de la plantilla.

Por ejemplo, una plantilla de resistencia podría ser:

```text
R$(refnum) %(1) %(2) $(Value)
```

Para la referencia R3, las redes 7 y 9, y Value `10k`, genera:

```spice
R3 7 9 10k
```

El atributo subyacente de plantilla de modelo es **`$$SPICE`**; el texto de prólogo es **`$$SPICE_PROLOG`**. Una plantilla puede cambiar el orden de los pines: no dé por sentado que el pin 1 del esquema es el primer terminal de SPICE. Un elemento BJT espera **colector, base, emisor**. Si un símbolo numera la base como 1, el emisor como 2 y el colector como 3, la plantilla debe sustituir `%(3) %(1) %(2)` en ese orden. Un subcircuito usa el orden declarado en su línea `.subckt`, que puede diferir del de un encapsulado de dispositivo.

Lea conjuntamente el símbolo y el modelo reales. Los pines de alimentación, los pines ocultos, las variantes de transistores y los modelos de amplificadores operacionales son fuentes frecuentes de incompatibilidades. Un modelo conductual genérico de estilo 741 no es un macromodelo 741 completo y cualificado por el fabricante.

## Usar un modelo en la simulación integrada
{: #use-a-model-in-integrated-simulation}

1. Empiece con un [modelo incluido](../Bundled-SPICE-Models/) o añada una plantilla Custom apropiada al símbolo. Confirme que la asignación de pines coincide con el orden de terminales del modelo.
2. TinyCAD resuelve automáticamente los modelos incluidos vinculados. Si un modelo Custom necesita texto externo, use **Configuración → Modelos SPICE (Setup → SPICE models)** para adjuntarlo con un nombre de archivo lógico, como `part.lib`, `part.cir` o `part.mod`.
3. Resuelva las dependencias `.include` y `.lib` mediante esos adjuntos. Guarde el dibujo para conservar con él las definiciones necesarias.
4. Conecte la tierra **0**, configure el análisis en **Configuración (Setup)**, ejecútelo y examine los diagnósticos.

El motor administrado no descarga un modelo de un sitio web ni lee una ruta absoluta arbitraria de su equipo. Proporcione explícitamente las dependencias. Tampoco ejecuta comandos de shell arbitrarios, scripts `.control`, archivos de inicio, módulos nativos suministrados externamente ni dependencias de dispositivo basadas en archivos. Puede que sea necesario adaptar un modelo de fabricante que use sintaxis específica de un simulador; «compatible con SPICE» no garantiza que los dialectos sean idénticos.

La hoja Simulation de TinyCAD administra los comandos de análisis y el `.end` final. **No se necesita un símbolo RUN heredado.** Traslade la configuración de análisis antigua a Setup y elimine el símbolo RUN heredado al adaptar un dibujo orientado a la exportación. Quite las instrucciones de análisis y `.end` de los atributos de cualquier componente restante; esos comandos se rechazan en la ruta integrada de plantillas de componentes.

Compruebe la licencia del modelo del fabricante antes de redistribuirlo. Examine el orden de pines documentado, las unidades, los supuestos del modelo y los simuladores compatibles. Conserve la documentación del fabricante junto con sus notas de modelado.

## Examinar y exportar un netlist SPICE
{: #inspect-and-export-a-spice-netlist}

Un netlist es una descripción textual de los dispositivos y los nodos que los conectan. La tierra se denomina `0`. El contenido típico incluye definiciones de modelos y configuración, líneas de componentes, directivas de análisis y un `.end` final. Entre las comprobaciones útiles se incluyen:

- ¿Cada componente hace referencia al modelo y al valor previstos?
- ¿Los pines conectados comparten los nombres de red esperados?
- ¿Están presentes las redes de alimentación y retorno, incluida la 0?
- ¿Es correcto el orden de terminales del semiconductor o subcircuito?
- ¿Están disponibles para el motor seleccionado todas las definiciones de modelos y el texto incluido?

Para la configuración integrada, abra **Hoja Simulation → Diagnósticos (Diagnostics) → Generar texto del circuito (Generate circuit text)**, examine el deck expandido y, a continuación, seleccione **Exportar circuito (Export circuit)** para guardar `simulation.cir`. Esto incluye el análisis administrado y puede hacer referencia a archivos de modelo separados con `.include`. Un simulador externo necesita copias de esos archivos en las ubicaciones indicadas.

Para la exportación heredada basada en plantillas, use el comando independiente **Generar Spice NetList (Generate Spice NetList)** en el menú File del navegador o en el menú Desktop Tools. Es distinto del cuadro de diálogo [Generar Netlist](../Generate-Netlist/), orientado a PCB. Este comando incorpora las definiciones incluidas a las que se hace referencia. Proporcione las dependencias externas que usen las plantillas Custom y compruebe que las directivas de análisis y ejecución sean adecuadas para el motor externo. También se puede examinar directamente un archivo `.cir` del tutorial complementario. **Abra un dibujo `.dzn` en TinyCAD; un netlist `.cir` no es un archivo de dibujo de TinyCAD.**

### Plantillas de exportación heredadas
{: #legacy-export-templates}

El sistema de plantillas orientado a la exportación admite un cuerpo de modelo por instancia, además de prólogo y epílogo por símbolo. Los prólogos y epílogos idénticos se eliminan de forma duplicada. Las prioridades van de 0 a 9: los prólogos se ejecutan de menor a mayor prioridad; los epílogos se ordenan dejando la prioridad 0 al final.

Los dibujos antiguos pueden usar un símbolo **RUN** sin pines cuyo prólogo o epílogo proporciona las directivas de análisis y finalización de un deck exportado. Esta es una convención de exportación, no una instrucción para añadir RUN a una hoja Simulation integrada. Revise esas instrucciones antes de ejecutar el archivo exportado en un simulador independiente.

### Plantillas condicionales
{: #conditional-templates}

Para las plantillas personalizadas o de exportación, se admiten las siguientes formas condicionales:

```text
?( defined(attribute), true text, false text )
?( not_defined(attribute), true text, false text )
?( empty(attribute), true text, false text )
?( not_empty(attribute), true text, false text )
?( connected(pin), true text, false text )
?( not_connected(pin), true text, false text )
```

Se pueden anidar las condiciones. Examine el deck expandido en lugar de juzgar una plantilla compleja solo por su texto de origen.

## Notación numérica y portabilidad
{: #numerical-notation-and-portability}

En el texto SPICE, **`M` significa mili**, igual que `m`; use **`Meg`** para mega. `1k`, `100n` y `10u` son valores comunes. Use parámetros y referencias de modelo explícitos en lugar de depender de valores predeterminados no especificados de un simulador.

La documentación de la línea de comandos de ngspice externo abarca un entorno más amplio que el motor integrado de TinyCAD. Para consultar la sintaxis completa de los elementos, los modelos, los análisis y las notas de compatibilidad, vea la [documentación oficial de ngspice](https://ngspice.sourceforge.io/docs.html) y el [manual del usuario](https://ngspice.sourceforge.io/docs/ngspice-manual.pdf). Continúe con [cómo implementa TinyCAD SPICE](../SPICE-Tutorial-11/) para obtener una explicación detallada de los motores, los símbolos y los netlists.
