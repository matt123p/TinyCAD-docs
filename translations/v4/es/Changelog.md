---
layout: default
---
# Registro de cambios de TinyCAD v4
{: #tinycad-v4-changelog}


## v4.0.11
{: #v4011}

Esta versión añade notas Markdown con formato, salida SVG vectorial y controles de trazado de cables.

- [Cuadros de texto Markdown](../Text-and-Annotations/#markdown-text-boxes): notas con formato, listas, listas de tareas y bloques de código; el mismo renderizador vectorial para el dibujo, la exportación SVG y el PDF.
- El formato del código fuente en tiempo real mantiene visibles los marcadores editables y sigue la fuente base elegida, con cursor, selección y ajuste de línea correspondientes.
- [Modos de trazado de cables](../Wires/#wire-routing-modes): selector compacto para trazado a 90°, 45° y libre que conserva la vista previa activa.
- El botón de lupa solo aparece después de una entrada táctil en el lienzo de dibujo.

## v4.0.10 — 6 de noviembre de 2026
{: #v4010}

- Mantener visible la barra de herramientas del editor cuando los paneles de biblioteca o esquema necesitan más espacio vertical.

## v4.0.9 — 4 de noviembre de 2026
{: #v409--4-november-2026}

### Añadido
{: #added}

- [Controles táctiles](../Touch-controls/), incluidos la edición directa, el desplazamiento con dos dedos
  y el zoom mediante pellizco, además de una lupa con controles para hacer clic,
  arrastrar y soltar, abrir el menú y cerrar, que permiten colocar objetos con precisión.
- [Panel de bibliotecas redimensionable y ordenación de símbolos](../Using-Symbol-Libraries/),
  incluido el orden alfabético de los resultados de búsqueda.
- [Ocultación temporal de los objetos seleccionados](../User-guide/#temporarily-hiding-objects)
  y un comando para restaurar todos los objetos ocultos en la hoja actual.
- Traducción de la interfaz al polaco y traducción del texto del cuadro de diálogo Reemplazar símbolo.

### Corregido
{: #fixed}

- [La visibilidad de la cuadrícula y el ajuste a la cuadrícula](../Snap-to-Grid/) funcionan de forma independiente, y
  el movimiento con el teclado respeta la desactivación del ajuste.
- Las imágenes de mapa de bits se muestran en los símbolos de biblioteca colocados.
- [Escape cancela las acciones de dibujo y colocación](../Shortcuts/), incluso cuando
  los controles de la barra de herramientas tienen el foco.
- Cancelar el aviso de cambios sin guardar de la aplicación de escritorio elimina la solicitud de cierre pendiente.
- El zoom mediante pellizco en el lienzo ya no se acumula con el zoom de página del navegador.
- Se mejoró la posición de la lupa táctil, la respuesta del puntero, el manejo de gestos y el arrastre.
- Se mejoró el comportamiento del cuadro de diálogo Acerca de en la aplicación de escritorio y en macOS.

### Empaquetado y mantenimiento
{: #packaging-and-maintenance}

- Se actualizaron las dependencias para corregir vulnerabilidades de seguridad.
- Se eliminaron los paquetes para Linux ARMv7 porque el entorno de ejecución de Electron admite Linux x64
  y ARM64. Los paquetes Snap son para x64; los paquetes Debian, para x64 y ARM64.

[Descargas de la versión](https://github.com/matt123p/TinyCADv4/releases/tag/v4.0.9)
· [Cambios en el código fuente](https://github.com/matt123p/TinyCADv4/compare/v4.0.8...v4.0.9)

## v4.0.8 — 3 de mayo de 2026
{: #v408--3-may-2026}

- Se corrigió la rotación de los símbolos de alimentación al guardar y volver a abrir un dibujo.
- Se conservaron los tipos de red de los cables al guardar y cargar, manteniendo la coherencia de sus colores.

[Descargas de la versión](https://github.com/matt123p/TinyCADv4/releases/tag/v4.0.8)
· [Cambios en el código fuente](https://github.com/matt123p/TinyCADv4/compare/v4.0.7...v4.0.8)

## v4.0.7 — 13 de abril de 2026
{: #v407--13-april-2026}

- Se corrigió la impresión en la aplicación de escritorio.
- Se mejoró el comportamiento del zoom mediante pellizco para evitar aumentos de zoom incontrolados.
- Se añadió la representación de símbolos de biblioteca en el servidor.
- Se automatizaron el etiquetado de las compilaciones de producción y la creación de versiones de GitHub.

[Descargas de la versión](https://github.com/matt123p/TinyCADv4/releases/tag/v4.0.7)
· [Cambios en el código fuente](https://github.com/matt123p/TinyCADv4/compare/4.0.6...v4.0.7)

## v4.0.6 — 29 de marzo de 2026
{: #v406--29-march-2026}

Esta versión incluye los cambios de desarrollo realizados con la versión 4.0.5; no hay
ninguna etiqueta 4.0.5 independiente ni una versión de GitHub publicada.

### Añadido
{: #added-1}

- Enrutamiento automático de cables.
- Reemplazar símbolo para cambiar un componente existente por otro símbolo de biblioteca.
- Desplazamiento automático mientras se arrastra cerca del borde del dibujo.
- Selección con doble clic de un cable completo y selección con triple clic más allá
  de las uniones y las derivaciones en T.
- Una opción para desactivar el indicador de conexión de etiquetas.

### Corregido y mejorado
{: #fixed-and-improved}

- Las carpetas de bibliotecas se abren de forma predeterminada y se expanden al buscar.
- Se mejoraron la edición de texto, los atajos del portapapeles, las teclas de navegación y los aceleradores
  de teclado mientras el dibujo tiene el foco.
- Se corrigieron la selección con Ctrl+clic, el arrastre de varios objetos seleccionados y los controles de giro.
- Los rectángulos de dibujo y selección se pueden arrastrar en ambas direcciones.
- Se corrigió el cierre en macOS y se redujo la carga duplicada de bibliotecas en macOS.
- Se corrigieron la posición de las etiquetas, la traducción del selector de color y el procesamiento en segundo plano de la lista de conexiones.
- Se corrigieron los nombres del instalador de Windows y de las compilaciones AppX.

[Descargas de la versión](https://github.com/matt123p/TinyCADv4/releases/tag/4.0.6)
· [Cambios en el código fuente](https://github.com/matt123p/TinyCADv4/compare/4.0.4...4.0.6)

## v4.0.4 — etiqueta del código fuente, 19 de marzo de 2026
{: #v404--source-tag-19-march-2026}

- Se añadieron [carpetas de bibliotecas](../Library-Folders/) para organizar las bibliotecas de símbolos.
- Se añadió la traducción de la interfaz al neerlandés.
- Se añadieron artefactos de compilación para navegador y su implementación en GitHub Pages.
- Se corrigió el empaquetado Snap.

[Cambios en el código fuente](https://github.com/matt123p/TinyCADv4/compare/4.0.3...4.0.4)

## v4.0.3 — etiqueta del código fuente, 15 de marzo de 2026
{: #v403--source-tag-15-march-2026}

- Se ajustó la gestión del inicio en macOS para resolver un problema de arranque.

La etiqueta del código fuente es 4.0.3, aunque los metadatos del paquete siguen indicando 4.0.2.

[Cambios en el código fuente](https://github.com/matt123p/TinyCADv4/compare/4.0.2...4.0.3)

## v4.0.2 — 14 de marzo de 2026
{: #v402--14-march-2026}

- Se corrigió el cuadro de diálogo de cierre por cambios sin guardar en Linux.
- Se añadieron paquetes Debian x64 junto a las compilaciones ARM existentes.
- Se actualizaron las herramientas de compilación y la configuración del empaquetado.

[Descargas de la versión](https://github.com/matt123p/TinyCADv4/releases/tag/4.0.2)
· [Cambios en el código fuente](https://github.com/matt123p/TinyCADv4/compare/4.0.1...4.0.2)

## v4.0.1 — etiqueta inicial del código fuente, 13 de marzo de 2026
{: #v401--initial-source-tag-13-march-2026}

La primera instantánea del código fuente ya contiene la reescritura de TinyCAD para su uso en navegador y
escritorio, con edición de esquemas, bibliotecas de símbolos, compatibilidad con archivos
`.dsn` y `.tclib` existentes y flujos de trabajo de exportación. El desarrollo anterior no
está registrado en este repositorio.

[Instantánea inicial del código fuente](https://github.com/matt123p/TinyCADv4/tree/4.0.1)

- Volver al [contenido de v4](../CONTENTS/)
