---
layout: default
---
# Salida VHDL
{: #vhdl-output}

La salida VHDL en TinyCAD v4 funciona igual que en v3. TinyCAD utiliza la conectividad del esquema, las definiciones de pines de los símbolos y los símbolos orientados a VHDL para generar una descripción VHDL del diseño.

La exportación VHDL está disponible en la aplicación de escritorio. La versión del navegador no crea archivos VHDL actualmente.

## Para qué se usa VHDL
{: #what-vhdl-is-used-for}

VHDL significa lenguaje de descripción de hardware de circuitos integrados de muy alta velocidad (Very High Speed Integrated Circuit Hardware Description Language). Se utiliza para describir hardware digital, como puertas lógicas, contadores, máquinas de estados, buses y bloques reutilizables de mayor tamaño.

VHDL se utiliza habitualmente para:

- simular lógica digital antes de construir el hardware
- describir bloques de diseño reutilizables con entradas y salidas definidas
- crear diseños jerárquicos FPGA o ASIC a partir de módulos más pequeños
- transferir un diseño a herramientas posteriores de síntesis o verificación

En la práctica, un diseño VHDL suele definir:

- una **entidad**: los puertos externos del bloque
- una **arquitectura**: la lógica o estructura interna

La compatibilidad de TinyCAD con VHDL resulta especialmente útil cuando se desea representar la estructura de un diseño digital como esquema y exportarla en formato VHDL.

## Preparación del esquema
{: #preparing-the-schematic}

Para crear una salida VHDL, construya el esquema con símbolos de la biblioteca VHDL. Estos símbolos están diseñados para que TinyCAD pueda reconocer qué pines son entradas, salidas y conexiones con nombre.

También puede encontrar símbolos orientados a VHDL en [tinycad.net](https://www.tinycad.net/Search?key=%23vhdl).

Utilice los símbolos como cualquier otro símbolo de TinyCAD, pero preste especial atención a los nombres:

- Para las entradas y salidas de nivel superior, utilice los símbolos de la biblioteca VHDL y asigne a cada uno el nombre de señal requerido.
- Los cables internos deben tener nombres coherentes en todos los lugares en que deba conectarse la misma señal.
- Los nombres, las direcciones y los números de pin de los símbolos personalizados deben ser correctos.

TinyCAD asigna nombres automáticamente a los cables conectados, pero las etiquetas explícitas siguen siendo la forma más clara de controlar los nombres de señal exportados.

## Cómo empareja TinyCAD los símbolos con VHDL
{: #how-tinycad-pairs-symbols-with-vhdl}

TinyCAD se puede utilizar para el diseño jerárquico orientado a VHDL sin depender de la función de esquemas jerárquicos de varios archivos de TinyCAD.

El flujo de trabajo previsto es:

1. Cree o reúna los archivos VHDL que definen el comportamiento de los bloques reutilizables.
2. Cree símbolos de TinyCAD coincidentes para esos bloques en una biblioteca del proyecto.
3. Asigne a cada símbolo el mismo nombre que el archivo VHDL o la unidad de diseño correspondiente.
4. Asegúrese de que cada pin del símbolo tenga el nombre y la dirección correctos, además de un número de pin único.

Cada vez que coloque uno de esos símbolos en el esquema, TinyCAD podrá emparejar la instancia del símbolo con el bloque VHDL del mismo nombre.

Esto permite crear diseños de mayor tamaño a partir de módulos más pequeños definidos en VHDL y, al mismo tiempo, dibujar la estructura de nivel superior como un esquema.

## Trabajo con buses
{: #working-with-buses}

Para la salida VHDL, no utilice la función de dibujo de BUS de TinyCAD como definición lógica del bus. En su lugar, defina los buses asignando nombres directamente a los cables.

Ejemplos:

- `A(7:0)` define un bus de 8 bits llamado `A`
- `A(3)` hace referencia a un bit de ese bus
- `A(7:4)` hace referencia a una porción de ese bus

Utilice el mismo estilo de nombres en los símbolos de entrada y salida cuando representen buses.

Para los rangos de bus del tipo `A(i:j)`, mantenga `i` por encima de `j`.

Puede dibujar igualmente una unión de bus para mejorar la legibilidad, pero para la exportación VHDL lo importante son los nombres de los cables, no la representación gráfica del bus.

## Generación del archivo VHDL
{: #generating-the-vhdl-file}

Cuando el esquema esté listo, ejecute el comando Crear VHDL (Create VHDL) en TinyCAD.

TinyCAD ejecuta automáticamente una comprobación de las reglas de diseño como parte del proceso de exportación. También puede ejecutar primero la comprobación de las reglas de diseño si desea detectar problemas de cableado o de símbolos antes de generar la salida.

## Lista de comprobación práctica
{: #practical-checklist}

Antes de exportar, verifique lo siguiente:

- las entradas y salidas de nivel superior tienen exactamente los nombres que desea utilizar en VHDL
- los símbolos personalizados tienen las direcciones de pin correctas
- los números de pin son únicos en cada símbolo
- las redes que deben compartir conexión realmente tienen el mismo nombre
- los buses tienen nombres con rangos de estilo VHDL, como `DATA(15:0)`

Si el VHDL generado no es el esperado, normalmente se debe a una definición de pin incorrecta, a la falta de un nombre de cable o a nombres de bus incoherentes.

## Diseños de ejemplo
{: #example-designs}

El árbol de código fuente de TinyCAD incluye un pequeño ejemplo VHDL basado en el diseño de un procesador de 4 bits. Revisar esos archivos es una manera útil de entender los nombres de símbolos y la estructura del proyecto previstos.

El ejemplo está disponible en la [carpeta del repositorio de ejemplos VHDL de TinyCAD](https://github.com/matt123p/TinyCAD/tree/master/examples/vhdl).

- Volver a [Avanzado](../Advanced/)
- Volver al [índice de v4](../CONTENTS/)
