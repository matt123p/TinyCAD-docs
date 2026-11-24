---
layout: default
---
# Importar símbolos de KiCad
{: #importing-symbols-from-kicad}

La importación de símbolos desde una biblioteca de símbolos de KiCad es una nueva función de TinyCAD v4.

## Antecedentes de KiCad
{: #kicad-background}

[KiCad](https://www.kicad.org/) es un conjunto de herramientas de diseño electrónico de código abierto muy popular. Su editor de símbolos almacena símbolos esquemáticos en archivos de bibliotecas de símbolos. En las versiones actuales de KiCad, esas bibliotecas de símbolos suelen utilizar el formato moderno basado en expresiones S `.kicad_sym`.

## Qué puede importar TinyCAD
{: #what-tinycad-can-import}

Actualmente, TinyCAD importa símbolos de:

- archivos `.kicad_sym`

El archivo debe ser un archivo de biblioteca de símbolos de KiCad con un elemento raíz `kicad_symbol_lib`. En la práctica, esto significa:

- Compatible: bibliotecas de símbolos modernas de KiCad guardadas como `.kicad_sym`
- No compatible: bibliotecas de símbolos `.lib` heredadas de KiCad
- No compatible: huellas de KiCad, archivos PCB, proyectos, esquemas ni otros archivos que no sean de símbolos

## Dónde está el comando en la interfaz
{: #where-the-command-is-in-the-ui}

El comando de importación se llama **Import KiCad Symbols** (Importar símbolos de KiCad).

Según cómo esté ejecutando TinyCAD, lo encontrará en uno de estos lugares:

- Aplicación de escritorio (Electron): **File > Import > KiCad Symbols...** (Archivo > Importar > Símbolos de KiCad...)
- Modo de navegador/sistema de archivos: el menú **File** (Archivo) de la barra de herramientas y luego **Import KiCad Symbols** (Importar símbolos de KiCad)

Seleccione una biblioteca `.kicad_sym` y cualquier archivo SPICE complementario que necesite. TinyCAD lee la biblioteca y muestra el cuadro de diálogo de importación para el dibujo actual o el editor de bibliotecas.

## Dos modos de importación
{: #two-import-modes}

La importación se comporta de forma diferente según si está editando un diseño o una biblioteca.

### Importar en un diseño
{: #import-into-a-design}

Use esta opción si quiere colocar un símbolo de KiCad en el esquema actual sin guardarlo primero en una biblioteca de TinyCAD.

Qué ocurre:

- TinyCAD abre un cuadro de diálogo **Import Symbol** (Importar símbolo).
- Puede elegir un símbolo del archivo `.kicad_sym` seleccionado.
- Al hacer clic en **Insert** (Insertar), TinyCAD inserta ese símbolo directamente en el dibujo actual.
- El símbolo se inserta en la posición actual del ratón.
- Esto **no** añade el símbolo a ninguna de sus bibliotecas `.tclib` externas.

Esta es la forma más rápida si solo necesita un símbolo para el diseño actual.

### Importar en una biblioteca
{: #import-into-a-library}

Use esta opción si quiere conservar los símbolos de KiCad importados como símbolos reutilizables de una biblioteca de TinyCAD.

Qué ocurre:

- Primero debe abrir una biblioteca de TinyCAD para editarla.
- TinyCAD abre el cuadro de diálogo **Import KiCad Symbols** (Importar símbolos de KiCad).
- Todos los símbolos importados aparecen seleccionados de forma predeterminada.
- Puede marcar o desmarcar símbolos, o usar **Select all** (Seleccionar todo).
- Al hacer clic en **Import selected** (Importar seleccionados), esos símbolos se combinan con la biblioteca actual de TinyCAD.
- TinyCAD abre automáticamente en el editor de bibliotecas el último símbolo importado.
- A continuación, guarde la biblioteca como de costumbre.

Esta es la opción adecuada si quiere reutilizar los símbolos importados en varios dibujos.

## Paso a paso: importar en un diseño
{: #step-by-step-import-into-a-design}

1. Abra el diseño esquemático en el que quiere trabajar.
2. Ejecute **Import KiCad Symbols** (Importar símbolos de KiCad) desde el menú File (Archivo).
3. Elija un archivo `.kicad_sym` de KiCad.
4. En el cuadro de diálogo **Import Symbol** (Importar símbolo), haga clic en el símbolo que quiera.
5. Revise la breve línea de metadatos que se muestra para cada símbolo:
   - el prefijo de referencia, como `U?`
   - el número de unidades, para los símbolos de varias unidades
6. Haga clic en **Insert** (Insertar).
7. El símbolo se coloca en el dibujo actual, en la posición actual del ratón.
8. Si es necesario, ajuste el texto, la visibilidad de los pines o los gráficos después de la importación.

## Paso a paso: importar en una biblioteca
{: #step-by-step-import-into-a-library}

1. Abra o cree una biblioteca de TinyCAD para editarla.
2. Si usa la aplicación de escritorio, una forma habitual de hacerlo es:
   - abra el panel **Libraries** (Bibliotecas)
   - use **Add** (Añadir) para cargar una biblioteca existente o **New** (Nueva) para crear una
   - abra esa biblioteca en modo de edición
3. Ejecute **Import KiCad Symbols** (Importar símbolos de KiCad).
4. Elija un archivo `.kicad_sym` de KiCad.
5. En el cuadro de diálogo **Import KiCad Symbols** (Importar símbolos de KiCad), deje todos los símbolos seleccionados o desmarque los que no quiera.
6. Haga clic en **Import selected** (Importar seleccionados).
7. Revise los símbolos importados en el editor de bibliotecas.
8. Guarde la biblioteca.

## Importar modelos SPICE con los símbolos
{: #import-spice-models-with-symbols}

TinyCAD lee los modelos SPICE compatibles incrustados en una biblioteca de símbolos moderna de KiCad. Para los modelos almacenados por separado, seleccione los archivos de modelo junto con el archivo `.kicad_sym` en el selector de archivos. Incluya también todos los archivos de modelo a los que haga referencia `.include`.

Si no se pudo importar una definición SPICE, el cuadro de diálogo muestra **SPICE model skipped** (Modelo SPICE omitido) junto con el motivo. Aun así, puede importar los gráficos y las propiedades del símbolo. Abra los ajustes **SPICE → Custom** (SPICE → Personalizado) del símbolo importado para revisar la plantilla de instancia y cualquier texto de modelo en **Prologue** (Prólogo). TinyCAD usa las asignaciones de pines y las sobrescrituras de parámetros de KiCad para construir la definición.

Las entradas compatibles incluyen símbolos de una unidad con tarjetas de modelo o subcircuitos convencionales, resistencias, condensadores e inductores ideales, y fuentes de tensión o corriente de CC. Para una definición SPICE heredada de KiCad, ábrala y guárdela primero en una versión reciente de KiCad. Si necesita otro modelo, use el [selector de modelos incluido](../Bundled-SPICE-Models/).

## Características de símbolos compatibles
{: #supported-symbol-features}

TinyCAD importa actualmente estas características de símbolos de KiCad:

- Nombres de símbolos, prefijos de referencia y descripciones
- Propiedades adicionales de los símbolos como atributos de TinyCAD
- Estado oculto o visible de campos comunes, como Value y Reference
- Pines, incluidos los nombres y números de pin, la longitud del pin, el tipo eléctrico y varias formas de pin
- Símbolos de varias unidades
- Símbolos heredados que usan el mecanismo `extends` de KiCad
- Variantes del estilo De Morgan, importadas como un símbolo independiente con ` (De Morgan)` añadido al nombre
- Gráficos básicos utilizados en los cuerpos de los símbolos:
  - rectángulos
  - círculos
  - polilíneas
  - arcos
  - curvas de Bézier
  - texto
- Estilos de línea básicos y estados de relleno cuando TinyCAD dispone de un equivalente

## Qué no funcionará o puede no coincidir exactamente
{: #what-will-not-work-or-may-not-match-exactly}

El importador es útil, pero no es un motor completo de conversión de KiCad a TinyCAD. Estas son las principales limitaciones de la implementación actual.

### Límites del formato de archivo
{: #file-format-limits}

- Solo se aceptan archivos `.kicad_sym`.
- Si el archivo está vacío, mal formado o no es una biblioteca de símbolos de KiCad, la importación falla.

### Límites de gráficos y diseño
{: #graphics-and-layout-limits}

- Solo se importan las primitivas gráficas indicadas anteriormente.
- Se ignora cualquier contenido de símbolo de KiCad que no esté entre esas primitivas compatibles.
- Los símbolos de biblioteca importados se reubican para que queden en la página de TinyCAD con un margen y se intenta alinearlos con la cuadrícula de TinyCAD.
- Algunas geometrías pueden verse ligeramente distintas porque KiCad y TinyCAD usan modelos de dibujo internos diferentes.
- Los arcos de KiCad se aproximan mediante puntos de curva de TinyCAD.

### Límites de texto y estilo
{: #text-and-styling-limits}

- No se conserva la familia tipográfica; el texto importado usa los ajustes de fuente de TinyCAD.
- Los detalles precisos de diseño del texto, como la justificación, no se conservan por completo.
- La rotación del texto se reduce al modelo de orientación más sencillo de TinyCAD, en lugar de conservar todos los ángulos arbitrarios.
- No se conserva el color del texto de los pines.

### Diferencias en el comportamiento de los símbolos
{: #symbol-behavior-differences}

- La importación en un diseño inserta el símbolo solo en el dibujo actual. No crea ni actualiza una entrada reutilizable en una biblioteca `.tclib`.
- La importación en una biblioteca crea entradas reutilizables de TinyCAD, pero después hay que guardar la biblioteca.
- Si los nombres de los símbolos importados coinciden con nombres existentes en la biblioteca de destino, TinyCAD cambia automáticamente el nombre de las nuevas entradas añadiendo un sufijo numérico.
- Si un símbolo de KiCad incluye una variante De Morgan, TinyCAD la importa como una entrada de símbolo independiente en lugar de como un cambio de estilo dinámico.

## Consejos prácticos
{: #practical-advice}

- Si solo necesita un símbolo una vez, impórtelo en el diseño.
- Si prevé reutilizar el símbolo, impórtelo en una biblioteca.
- Empiece primero con una biblioteca `.kicad_sym` pequeña para comprobar cómo se ven en TinyCAD los trazos, el texto y la ubicación de los pines.
- Después de la importación, revise detenidamente las piezas de varias unidades y las variantes De Morgan.
- Si un símbolo se ve mal, ábralo en el editor de bibliotecas de TinyCAD y corrija manualmente la ubicación del texto, los trazos o los atributos.

## Resumen
{: #summary}

La importación de KiCad de TinyCAD está orientada a incorporar rápidamente bibliotecas de símbolos modernas de KiCad en TinyCAD, especialmente símbolos esquemáticos estándar creados con pines, texto y primitivas de dibujo sencillas. Funciona mejor con archivos `.kicad_sym` y resulta especialmente práctica si quiere:

- colocar un símbolo directamente en el dibujo actual, o
- migrar símbolos de KiCad seleccionados a una biblioteca de TinyCAD para reutilizarlos

Para cualquier operación más avanzada, prevea dedicar un breve tiempo a realizar ajustes manuales después de la importación.

## Páginas relacionadas
{: #related-pages}

- [Editar un símbolo](../Editing-a-Symbol/)
- [Usar bibliotecas de símbolos](../Using-Symbol-Libraries/)

- Volver a [Símbolos y bibliotecas](../Symbols-and-Libraries/)
- Volver a [contenido de v4](../CONTENTS/)
