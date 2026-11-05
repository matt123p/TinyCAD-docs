---
layout: default
---
# Importación de símbolos de KiCad
{: #importing-symbols-from-kicad}

La importación de símbolos desde una biblioteca de símbolos de KiCad es una nueva función de TinyCAD v4.

## Información general sobre KiCad
{: #kicad-background}

[KiCad](https://www.kicad.org/) es un popular paquete de diseño electrónico de código abierto. Su editor de símbolos almacena símbolos esquemáticos en archivos de bibliotecas de símbolos. En las versiones actuales de KiCad, estas bibliotecas de símbolos suelen utilizar el moderno formato `.kicad_sym` basado en expresiones S.

## Qué puede importar TinyCAD
{: #what-tinycad-can-import}

Actualmente, TinyCAD importa símbolos de:

- archivos `.kicad_sym`

El archivo debe ser una biblioteca de símbolos de KiCad con una raíz `kicad_symbol_lib`. En la práctica, esto significa lo siguiente:

- Compatible: bibliotecas de símbolos modernas de KiCad guardadas como `.kicad_sym`
- No compatible: bibliotecas de símbolos `.lib` heredadas de KiCad
- No compatible: huellas de KiCad, archivos de PCB, proyectos, esquemas ni otros archivos que no sean de símbolos

## Dónde está el comando en la interfaz
{: #where-the-command-is-in-the-ui}

El comando de importación se llama **Import KiCad Symbols** (Importar símbolos de KiCad).

Según cómo esté ejecutando TinyCAD, lo encontrará en uno de estos lugares:

- Aplicación de escritorio (Electron): **File > Import > KiCad Symbols...** (Archivo > Importar > Símbolos de KiCad...)
- Modo de navegador/sistema de archivos: en el menú **File** (Archivo) de la barra de herramientas, seleccione **Import KiCad Symbols** (Importar símbolos de KiCad)

Después de elegir un archivo `.kicad_sym`, TinyCAD lee todos los símbolos de esa biblioteca y muestra uno de dos cuadros de diálogo de importación, según lo que esté editando en ese momento.

## Dos modos de importación
{: #two-import-modes}

El proceso de importación se comporta de manera diferente según esté editando un diseño o una biblioteca.

### Importar a un diseño
{: #import-into-a-design}

Use esta opción cuando quiera colocar un símbolo de KiCad en el esquema actual sin guardarlo primero en una biblioteca de TinyCAD.

Qué ocurre:

- TinyCAD abre el cuadro de diálogo **Import Symbol** (Importar símbolo).
- Puede elegir un símbolo del archivo `.kicad_sym` seleccionado.
- Al hacer clic en **Insert** (Insertar), TinyCAD inserta ese símbolo directamente en el dibujo actual.
- El símbolo se inserta en la posición actual del ratón.
- Esto **no** añade el símbolo a ninguna de sus bibliotecas externas `.tclib`.

Es la forma más rápida cuando solo necesita un símbolo para el diseño actual.

### Importar a una biblioteca
{: #import-into-a-library}

Use esta opción cuando quiera conservar los símbolos de KiCad importados como símbolos reutilizables de una biblioteca de TinyCAD.

Qué ocurre:

- Primero debe abrir una biblioteca de TinyCAD para editarla.
- TinyCAD abre el cuadro de diálogo **Import KiCad Symbols** (Importar símbolos de KiCad).
- Todos los símbolos importados aparecen seleccionados de forma predeterminada.
- Puede marcar o desmarcar símbolos, o usar **Select all** (Seleccionar todo).
- Al hacer clic en **Import selected** (Importar seleccionados), esos símbolos se combinan con la biblioteca de TinyCAD actual.
- TinyCAD abre automáticamente en el editor de bibliotecas el último símbolo importado.
- A continuación, guarde la biblioteca como de costumbre.

Esta es la opción adecuada si quiere reutilizar los símbolos importados en varios dibujos.

## Paso a paso: importar a un diseño
{: #step-by-step-import-into-a-design}

1. Abra el diseño esquemático en el que quiere trabajar.
2. Ejecute **Import KiCad Symbols** (Importar símbolos de KiCad) desde el menú File (Archivo).
3. Elija un archivo `.kicad_sym` de KiCad.
4. En el cuadro de diálogo **Import Symbol** (Importar símbolo), haga clic en el símbolo que quiera.
5. Revise la pequeña línea de metadatos que se muestra para cada símbolo:
   - el prefijo de referencia, como `U?`
   - el número de unidades, para símbolos de varias unidades
6. Haga clic en **Insert** (Insertar).
7. El símbolo se coloca en el dibujo actual, en la posición actual del ratón.
8. Si es necesario, ajuste el texto, la visibilidad de los pines o los gráficos después de la importación.

## Paso a paso: importar a una biblioteca
{: #step-by-step-import-into-a-library}

1. Abra o cree una biblioteca de TinyCAD para editarla.
2. Si está usando la aplicación de escritorio, una forma habitual de hacerlo es:
   - abrir el panel **Libraries** (Bibliotecas)
   - usar **Add** (Añadir) para cargar una biblioteca existente, o **New** (Nueva) para crear una
   - abrir esa biblioteca en modo de edición
3. Ejecute **Import KiCad Symbols** (Importar símbolos de KiCad).
4. Elija un archivo `.kicad_sym` de KiCad.
5. En el cuadro de diálogo **Import KiCad Symbols** (Importar símbolos de KiCad), deje todos los símbolos seleccionados o desmarque los que no quiera.
6. Haga clic en **Import selected** (Importar seleccionados).
7. Revise los símbolos importados en el editor de bibliotecas.
8. Guarde la biblioteca.

## Características de los símbolos compatibles
{: #supported-symbol-features}

Actualmente, TinyCAD importa estas características de los símbolos de KiCad:

- Nombres de símbolos, prefijos de referencia y descripciones
- Propiedades adicionales de los símbolos como atributos de TinyCAD
- Estado oculto o visible de campos comunes como Value (Valor) y Reference (Referencia)
- Pines, incluidos los nombres y números de pin, la longitud del pin, el tipo eléctrico y varias formas de pin
- Símbolos de varias unidades
- Símbolos heredados que utilizan el mecanismo `extends` de KiCad
- Variantes de estilo De Morgan, importadas como un símbolo independiente con ` (De Morgan)` añadido al nombre
- Gráficos básicos usados en los cuerpos de los símbolos:
  - rectángulos
  - círculos
  - polilíneas
  - arcos
  - curvas de Bézier
  - texto
- Estilos de línea básicos y estados de relleno cuando TinyCAD dispone de un equivalente

## Qué no funcionará o podría no coincidir exactamente
{: #what-will-not-work-or-may-not-match-exactly}

El importador resulta útil, pero no es un motor completo de conversión de KiCad a TinyCAD. Estas son las principales limitaciones de la implementación actual.

### Limitaciones del formato de archivo
{: #file-format-limits}

- Solo se aceptan archivos `.kicad_sym`.
- Si el archivo está vacío, tiene un formato incorrecto o no es una biblioteca de símbolos de KiCad, la importación falla.

### Limitaciones de los gráficos y la disposición
{: #graphics-and-layout-limits}

- Solo se importan las primitivas gráficas enumeradas anteriormente.
- Se ignora cualquier contenido de símbolos de KiCad que no utilice esas primitivas compatibles.
- Los símbolos importados a una biblioteca se reubican para que queden en la página de TinyCAD con un margen e intenten alinearse con la cuadrícula de TinyCAD.
- Algunos elementos geométricos pueden verse ligeramente distintos porque KiCad y TinyCAD utilizan modelos de dibujo internos diferentes.
- Los arcos de KiCad se aproximan mediante puntos de curva de TinyCAD.

### Limitaciones del texto y el estilo
{: #text-and-styling-limits}

- No se conserva la familia tipográfica; el texto importado utiliza la configuración de fuente de TinyCAD.
- No se conservan por completo los detalles de disposición del texto, como la justificación.
- La rotación del texto se adapta al modelo de orientación más sencillo de TinyCAD, en lugar de conservar cualquier ángulo arbitrario.
- No se conserva el color del texto de los pines.

### Diferencias en el comportamiento de los símbolos
{: #symbol-behavior-differences}

- Al importar a un diseño, el símbolo se inserta únicamente en el dibujo actual. No se crea ni se actualiza una entrada reutilizable de la biblioteca `.tclib`.
- Al importar a una biblioteca, se crean entradas reutilizables de TinyCAD, pero después hay que guardar la biblioteca.
- Si los nombres de los símbolos importados coinciden con nombres existentes en la biblioteca de destino, TinyCAD cambia automáticamente los nombres de las nuevas entradas añadiendo un sufijo numérico.
- Si un símbolo de KiCad incluye una variante De Morgan, TinyCAD la importa como una entrada de símbolo independiente en lugar de como una opción dinámica de estilo.

## Consejos prácticos
{: #practical-advice}

- Si solo necesita un símbolo una vez, impórtelo al diseño.
- Si piensa reutilizar el símbolo, impórtelo a una biblioteca.
- Empiece primero con una biblioteca pequeña `.kicad_sym` para comprobar cómo se ven en TinyCAD los trazos, el texto y la ubicación de los pines.
- Después de la importación, revise detenidamente las piezas de varias unidades y las variantes De Morgan.
- Si un símbolo no se ve bien, ábralo en el editor de bibliotecas de TinyCAD y corrija manualmente la ubicación del texto, los trazos o los atributos.

## Resumen
{: #summary}

La importación de KiCad de TinyCAD está pensada para incorporar rápidamente a TinyCAD bibliotecas de símbolos modernas de KiCad, especialmente símbolos esquemáticos estándar creados con pines, texto y primitivas de dibujo sencillas. Funciona mejor con archivos `.kicad_sym` y resulta especialmente práctica cuando quiere:

- colocar un símbolo directamente en el dibujo actual, o
- migrar símbolos de KiCad seleccionados a una biblioteca de TinyCAD para reutilizarlos

Para cualquier uso más avanzado, prevea dedicar un breve tiempo a realizar ajustes manuales después de la importación.

## Páginas relacionadas
{: #related-pages}

- [Edición de un símbolo](../Editing-a-Symbol/)
- [Uso de bibliotecas de símbolos](../Using-Symbol-Libraries/)

- Volver a [Símbolos y bibliotecas](../Symbols-and-Libraries/)
- Volver a [contenido de v4](../CONTENTS/)
