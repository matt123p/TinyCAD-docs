---
layout: default
---
# Generar lista de conexiones
{: #generate-netlist}

TinyCAD puede generar un archivo de lista de conexiones para usarlo en el diseño de PCB y con otras herramientas posteriores.

Una lista de conexiones es una descripción de texto de dos elementos principales:

- qué instancias de componentes hay en el diseño
- qué pines están conectados entre sí en cada red

TinyCAD lee las conexiones eléctricas del esquema de su dibujo y escribe esa información en el formato de salida que elija.

## Para qué sirve una lista de conexiones generada
{: #what-a-generated-netlist-is-for}

La lista de conexiones generada se utiliza principalmente para transferir un esquema terminado a otra herramienta, especialmente a un programa de diseño de PCB.

Entre los usos habituales se incluyen:

- importar el circuito a una herramienta de PCB
- comprobar que las conexiones de la PCB coincidan con el esquema
- revisar las referencias de los componentes y los nombres de las redes en un formato de texto sin formato

TinyCAD no coloca los componentes en la PCB por usted. Exporta los datos de conectividad para que otra herramienta pueda utilizarlos.

## Antes de generar la lista de conexiones
{: #before-generating-the-netlist}

La exportación de la lista de conexiones depende de que el esquema esté conectado eléctricamente de la forma que TinyCAD espera. Es buena práctica ejecutar primero [Comprobación de reglas de diseño (Design Rules Check)](../Design-Rules-Check/).

## El atributo `Package`
{: #the-package-attribute}

Para exportar a PCB, muchas herramientas de destino necesitan que cada componente tenga asignado el nombre de una huella o encapsulado.

En TinyCAD, esto suele almacenarse como un atributo del símbolo denominado `Package`.

Al exportar la lista de conexiones, TinyCAD escribe ese atributo en el archivo de salida para que el programa de PCB pueda asignar al símbolo del esquema la huella correcta.

Un mismo símbolo puede utilizar distintos valores de encapsulado en diferentes partes de un diseño, así que compruebe el atributo del componente colocado, no solo el valor predeterminado de la biblioteca.

## Cómo generar la lista de conexiones
{: #how-to-generate-the-netlist}

1. Abra el diseño que desea exportar.
2. Ejecute el comando de exportación de la lista de conexiones desde las herramientas de exportación de la interfaz de usuario de TinyCAD.
3. Elija el formato de salida que requiera la herramienta de destino.
4. Elija el nombre de archivo y guarde el archivo exportado.


## Formatos del cuadro de diálogo Generar lista de conexiones
{: #formats-in-the-generate-netlist-dialog}

El cuadro de diálogo ofrece actualmente estos formatos:

- `PADS-PCB`
- `PADS-PCB-WITH-VALUE`
- `Eagle SCR`
- `Protel`
- `gEDA PCB`

## Qué significan los formatos
{: #what-the-formats-mean}

### PADS-PCB
{: #pads-pcb}

Crea un archivo de lista de conexiones con formato PADS.

### PADS-PCB-WITH-VALUE
{: #pads-pcb-with-value}

Crea un archivo de lista de conexiones con formato PADS e incluye también el valor del componente cuando está disponible.

### Eagle SCR
{: #eagle-scr}

Crea un archivo de script de Eagle.

### Protel
{: #protel}

Crea un archivo de lista de conexiones con formato Protel.

### gEDA PCB
{: #geda-pcb}

Crea un archivo de lista de conexiones de gEDA PCB.

## SPICE y VHDL
{: #spice-and-vhdl}

Las exportaciones de SPICE y VHDL se gestionan por separado del cuadro de diálogo principal `Generate Netlist`.

Si las necesita, utilice:

- `Generate Spice NetList`
- `Create VHDL File`

Estos comandos también generan primero los datos de las redes, pero utilizan sus propios exportadores específicos.

## Qué nombre de archivo se utiliza
{: #what-file-name-is-used}

TinyCAD utiliza el nombre del dibujo actual y cambia la extensión del archivo para que coincida con el formato de exportación.

Ejemplos:

- `.net`
- `.scr`
- `.cir`
- `.vhdl`


## Qué comprobar después de exportar
{: #what-to-check-after-export}

Como las listas de conexiones son archivos de texto, es fácil examinarlas en un editor de texto.

Revise al menos estos puntos:

- las referencias de los componentes están presentes y son únicas
- aparecen en el archivo los nombres de red esperados
- están presentes los valores de encapsulado o huella cuando son necesarios
- no faltan componentes ni conexiones evidentes

Si el resultado parece incorrecto, la causa suele estar en los datos del esquema y no en el proceso de exportación.

## Causas habituales de listas de conexiones incorrectas
{: #common-causes-of-incorrect-netlists}

- se utilizó una línea de dibujo en lugar de un cable
- un cable termina cerca de un pin, pero no está realmente ajustado a él
- a un componente le falta una referencia
- falta un atributo `Package` obligatorio o no es coherente
- las etiquetas que debían conectarse no coinciden exactamente

## Páginas relacionadas
{: #related-pages}

- [Editor de listas de conexiones](../Netlist-Editor/)
- [Comprobación de reglas de diseño](../Design-Rules-Check/)
- [Salida SPICE](../SPICE-output/)

- Volver a [Avanzado](../Advanced/)
- Volver al [índice de v4](../CONTENTS/)
