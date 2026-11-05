---
layout: default
---
# Salida de SPICE
{: #spice-output}

La compatibilidad con SPICE en TinyCAD v4 funciona igual que en v3: TinyCAD genera un archivo de texto SPICE a partir del esquema mediante plantillas a nivel de símbolo.

## Para qué se usa SPICE
{: #what-spice-is-used-for}

SPICE (Simulation Program with Integrated Circuit Emphasis) es una familia de formatos y herramientas de simulación de circuitos. Un simulador SPICE permite probar el comportamiento de un circuito antes de construir el hardware, por ejemplo:

- Puntos de funcionamiento en CC y condiciones de polarización
- Comportamiento transitorio (en el dominio del tiempo)
- Respuesta en CA/frecuencia
- Barridos de parámetros y análisis de «qué pasaría si»

TinyCAD no ejecuta la simulación. En su lugar, exporta un archivo SPICE que se ejecuta en el motor SPICE que elija.

## Formato y estructura general de los archivos SPICE
{: #spice-file-format-and-general-layout}

Los distintos motores SPICE varían ligeramente, pero la mayoría de los archivos SPICE siguen la misma estructura general:

1. Encabezado/comentarios opcionales
2. Inclusiones y definiciones de dispositivos/modelos
3. Líneas de elementos del circuito (una línea por instancia de componente)
4. Comandos de análisis/control
5. Marcador de fin (normalmente `.end`)

En la práctica, esto significa que el archivo exportado suele contener:

- Texto de «Configuración» en la parte superior (modelos, inclusiones, opciones)
- Un cuerpo con los componentes generados y sus redes conectadas
- Texto de «Ejecución» o de análisis en la parte inferior

La generación de SPICE de TinyCAD está diseñada para adaptarse directamente a esta estructura.

## Cómo genera TinyCAD el código SPICE
{: #how-tinycad-generates-spice}

TinyCAD utiliza un sistema de plantillas de cadenas en cada símbolo habilitado para SPICE. Cada símbolo puede definir:

- **Plantilla de modelo**: se inserta para cada instancia de ese componente en el esquema
- **Plantilla de prólogo**: se inserta cerca de la parte superior del archivo, una vez por tipo de componente
- **Plantilla de epílogo**: se inserta cerca de la parte inferior del archivo, una vez por tipo de componente

Abra estos campos desde las propiedades del símbolo en el editor de la biblioteca de símbolos (pestaña SPICE).

### Expansión de plantillas
{: #template-expansion}

Las plantillas pueden incluir:

- `%(pin)` para sustituciones de pines/redes
- `$(attribute)` para sustituciones de atributos del símbolo

Ejemplo de plantilla de modelo para una resistencia:

`R$(refnum) %(1) %(2) $(NAME)`

Si la referencia de la instancia de resistencia es `R3`, está conectada entre las redes `7` y `9`, y tiene `NAME=10K`, TinyCAD escribe:

`R3 7 9 10K`

`refnum` se gestiona de forma especial para conservar la letra del dispositivo SPICE de la plantilla.

### Orden y eliminación de duplicados de prólogos/epílogos
{: #prologueepilogue-order-and-deduplication}

- Los prólogos y epílogos idénticos se eliminan de forma que solo quede uno
- Cada uno tiene una prioridad (de `0` a `9`)
- Los prólogos se escriben de menor a mayor prioridad
- Los epílogos se escriben de modo que la prioridad `0` aparezca al final del archivo

Esto permite controlar dónde aparece el texto de configuración y análisis.

## Configuración necesaria del esquema para exportar a SPICE
{: #required-schematic-setup-for-spice-export}

Para generar un archivo SPICE válido, el dibujo debe incluir:

- Símbolos habilitados para SPICE para el circuito simulado
- Un símbolo especial **RUN**
- Una red llamada **0** (tierra de SPICE)

### Símbolo RUN
{: #run-symbol}

El símbolo RUN es un símbolo normal de TinyCAD sin pines ni plantilla de modelo, pero con texto de prólogo/epílogo que se utiliza para insertar instrucciones de control de la simulación.

Establezca las prioridades del prólogo y el epílogo de RUN en `0` para que su texto aparezca al principio y al final del archivo generado, respectivamente.

Utilice un símbolo RUN por circuito de simulación.

### La red `0`
{: #the-0-net}

SPICE requiere que la tierra sea la red `0`.

En TinyCAD, créela asignando el nombre `0` a una conexión mediante una de estas opciones:

- Una etiqueta de red, o
- Un símbolo de alimentación con el valor `0`

## Creación de la salida SPICE
{: #creating-the-spice-output}

Una vez colocados los símbolos, el nodo RUN y la red `0`, genere la salida SPICE mediante el comando de exportación de SPICE de la interfaz de usuario de TinyCAD.

Las opciones de exportación son intencionadamente mínimas, ya que se espera que el comportamiento en tiempo de ejecución se controle mediante las plantillas del símbolo RUN.

## Condicionales avanzadas de plantillas
{: #advanced-template-conditionals}

Se admiten condicionales de plantillas para símbolos más avanzados (con el mismo comportamiento que en v3), incluidas pruebas para:

- Atributo presente/no presente
- Atributo vacío/no vacío
- Pin conectado/no conectado

Sintaxis condicional:

- `?( defined(attributename), true string, false string )`
- `?( not_defined(attributename), true string, false string )`
- `?( empty(attributename), true string, false string )`
- `?( not_empty(attributename), true string, false string )`
- `?( connected(pinnumber), true string, false string )`
- `?( not_connected(pinnumber), true string, false string )`

Los condicionales pueden anidarse.

- Volver a [Avanzado](../Advanced/)
- Volver a [contenido de v4](../CONTENTS/)
