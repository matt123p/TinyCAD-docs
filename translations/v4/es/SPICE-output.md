---
layout: default
---
# Modelos SPICE y salida de listas de conexiones
{: #spice-models-and-netlist-output}

TinyCAD admite tanto la [simulación ngspice integrada](../Simulation/) como la exportación de listas de conexiones SPICE para un simulador externo. Ambas dependen de las plantillas SPICE del componente y de la asignación de pines. La apariencia de un símbolo por sí sola no describe su comportamiento eléctrico.

## Modelos, plantillas y orden de pines
{: #models-templates-and-pin-order}

Una resistencia puede usar un elemento SPICE nativo. Un transistor puede necesitar un `.model`; un dispositivo más complejo puede usar un `.subckt`. La configuración SPICE de un símbolo colocado conecta sus números de pin físicos con los terminales que espera ese modelo. Examine la pestaña **SPICE** en las propiedades del símbolo; los atributos de instancia pueden sobrescribir los valores predeterminados del símbolo.

Las plantillas usan:

- **`%(pin)`** para la red conectada al número de pin especificado de TinyCAD.
- **`$(attribute)`** para un atributo del componente.
- **`refnum`** como sufijo de referencia con tratamiento especial, de modo que se conserva el prefijo de dispositivo SPICE de la plantilla.

Por ejemplo, una plantilla de resistencia puede ser:

```text
R$(refnum) %(1) %(2) $(NAME)
```

Para la referencia R3, las redes 7 y 9, y NAME `10k`, genera:

```spice
R3 7 9 10k
```

El atributo de plantilla de modelo subyacente es **`$$SPICE`**; el texto del prólogo es **`$$SPICE_PROLOG`**. Una plantilla puede reordenar los pines: no suponga que el pin 1 del esquema es el primer terminal de SPICE. Un elemento BJT espera **colector, base, emisor**. Si un símbolo numera la base como 1, el emisor como 2 y el colector como 3, la plantilla debe sustituir `%(3) %(1) %(2)` en ese orden. Un subcircuito usa el orden declarado en su línea `.subckt`, que puede diferir del de un encapsulado de dispositivo.

Lea conjuntamente el símbolo y el modelo reales. Los pines de alimentación, los pines ocultos, las variantes de transistores y los modelos de amplificadores operacionales son fuentes frecuentes de discrepancias. Un modelo de comportamiento genérico de estilo 741 no es un macromodelo 741 completo y cualificado por el fabricante.

## Usar un modelo en la simulación integrada
{: #use-a-model-in-integrated-simulation}

1. Empiece con un símbolo modelado de una [biblioteca de simulación incluida](../Bundled-Libraries/#libraries-with-simulation-models), o añada una plantilla SPICE adecuada a un símbolo personalizado.
2. Confirme que cada plantilla hace referencia a atributos existentes y a los pines correctos.
3. En la hoja Simulation, adjunte cualquier **texto** de modelo necesario y asigne nombres de archivo lógicos a los adjuntos. Las extensiones habituales de los archivos de texto son `.lib`, `.cir` y `.mod`.
4. Resuelva las dependencias de `.include` y `.lib` mediante esos adjuntos. Mantenga las definiciones necesarias junto con el dibujo.
5. Conecte la tierra **0**, configure el análisis en **Setup**, ejecútelo y examine los diagnósticos.

El motor administrado no descarga un modelo de un sitio web ni lee una ruta absoluta arbitraria de su equipo. Proporcione las dependencias explícitamente. Tampoco ejecuta comandos arbitrarios de shell, scripts `.control`, archivos de inicio, módulos nativos proporcionados externamente ni dependencias de dispositivos basadas en archivos. Puede que sea necesario adaptar un modelo de fabricante que use sintaxis específica de un simulador; «compatible con SPICE» no garantiza que los dialectos sean idénticos.

La hoja Simulation integrada de TinyCAD administra los comandos de análisis y el `.end` final. **No se necesita un símbolo RUN heredado.** Traslade la configuración de análisis antigua a Setup y elimine el símbolo RUN heredado al adaptar un dibujo orientado a la exportación. Elimine las instrucciones de análisis y `.end` de los atributos de componentes que queden; esos comandos se rechazan en el flujo integrado de plantillas de componentes.

Compruebe la licencia de un modelo de fabricante antes de redistribuirlo. Examine el orden de pines documentado, las unidades, las hipótesis del modelo y el simulador admitido. Conserve la documentación del fabricante junto con sus notas de modelado.

## Examinar y exportar una lista de conexiones SPICE
{: #inspect-and-export-a-spice-netlist}

Una lista de conexiones es una descripción textual de los dispositivos y los nodos que los conectan. La tierra se denomina `0`. El contenido habitual incluye definiciones de modelos/configuración, líneas de componentes, directivas de análisis y un `.end` final. Entre las comprobaciones útiles se incluyen:

- ¿Hace referencia cada componente al modelo y valor previstos?
- ¿Comparten los pines conectados los nombres de red esperados?
- ¿Están presentes las redes de alimentación/retorno, incluida la 0?
- ¿Es correcto el orden de terminales del semiconductor o subcircuito?
- ¿Están disponibles para el motor seleccionado todas las definiciones de modelos y el texto incluido?

Para la configuración integrada, abra **Simulation sheet → Diagnostics → Generate circuit text**, examine el circuito expandido y, a continuación, elija **Export circuit** para guardar `simulation.cir`. Esto incluye el análisis administrado.

Para la exportación heredada basada en plantillas, use el comando independiente **Generate Spice NetList** del menú File del navegador o del menú Desktop Tools. Es independiente del diálogo [Generate Netlist](../Generate-Netlist/) orientado a PCB. Las directivas de análisis/ejecución exportadas deben ser adecuadas para el motor externo. También se puede inspeccionar directamente un archivo `.cir` complementario del tutorial. **Abra un dibujo `.dzn` en TinyCAD; una lista de conexiones `.cir` no es un archivo de dibujo de TinyCAD.**

### Plantillas de exportación heredadas
{: #legacy-export-templates}

El sistema de plantillas orientado a la exportación admite un cuerpo de modelo por instancia y un prólogo y epílogo por símbolo. Los prólogos/epílogos idénticos se deduplican. Las prioridades van de 0 a 9: los prólogos se ejecutan de menor a mayor prioridad; los epílogos se ordenan con la prioridad 0 al final.

Los dibujos antiguos pueden usar un símbolo **RUN** sin pines, cuyo prólogo/epílogo proporciona las directivas de análisis y terminación para un circuito exportado. Esta es una convención de exportación, no una instrucción para añadir RUN a una hoja Simulation integrada. Revise esas instrucciones antes de ejecutar el archivo exportado en un simulador independiente.

### Plantillas condicionales
{: #conditional-templates}

Para las plantillas personalizadas/orientadas a la exportación, se admiten las siguientes formas condicionales:

```text
?( defined(attribute), true text, false text )
?( not_defined(attribute), true text, false text )
?( empty(attribute), true text, false text )
?( not_empty(attribute), true text, false text )
?( connected(pin), true text, false text )
?( not_connected(pin), true text, false text )
```

Las condicionales se pueden anidar. Examine el circuito expandido en lugar de juzgar una plantilla compleja solo por su texto de origen.

## Notación numérica y portabilidad
{: #numerical-notation-and-portability}

En el texto SPICE, **`M` significa mili**, igual que `m`; use **`Meg`** para mega. `1k`, `100n` y `10u` son valores habituales. Use parámetros y referencias explícitos del modelo en lugar de depender de los valores predeterminados no especificados de un simulador.

La documentación de la línea de comandos de ngspice externo abarca un entorno más amplio que el motor integrado de TinyCAD. Para consultar la sintaxis completa de los elementos, los modelos, los análisis y las notas de compatibilidad, vea la [documentación oficial de ngspice](https://ngspice.sourceforge.io/docs.html) y el [manual del usuario](https://ngspice.sourceforge.io/docs/ngspice-manual.pdf). Continúe con [cómo implementa TinyCAD SPICE](../SPICE-Tutorial-11/) para una explicación práctica de los motores, los símbolos y las listas de conexiones.
