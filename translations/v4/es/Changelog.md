---
layout: default
---
# Registro de cambios de TinyCAD
{: #tinycad-changelog}


## v4.0.11
{: #v4011}
{: #v4011}

Esta versión añade notas Markdown con formato, salida vectorial SVG y controles de enrutamiento de cables.

- [Cuadros de texto Markdown](../Text/#markdown-text-boxes): notas con formato, listas, listas de tareas y bloques de código; el mismo renderizador vectorial para el dibujo, la exportación SVG y PDF.
- El formato en vivo del código fuente mantiene visibles los marcadores editables y sigue la fuente base elegida, con posición del cursor, selección y ajuste de línea correspondientes.
- [Modos de enrutamiento de cables](../Wires/#wire-routing-modes): un selector compacto para el enrutamiento a 90°, 45° y libre, que conserva una vista previa activa.
- El botón de lupa aparece solo después de la entrada táctil en el lienzo de dibujo.

## v4.0.10 — 6 de noviembre de 2026
{: #v4010--6-november-2026}
{: #v4010}

- Mantiene visible la barra de herramientas del editor cuando los paneles de biblioteca o de esquemas necesitan más espacio vertical.

## v4.0.9 — 4 de noviembre de 2026
{: #v409--4-november-2026}

### Añadido
{: #added}

- [Controles táctiles](../Touch-controls/), incluida la edición directa, el desplazamiento panorámico con dos dedos
  y el zoom mediante pellizco, y una lupa con controles de Clic, Arrastrar/soltar, Menú y Cerrar
  para una colocación precisa.
- [Panel de biblioteca redimensionable y ordenación de símbolos](../Using-Symbol-Libraries/),
  incluida la ordenación alfabética de los resultados de búsqueda.
- [Ocultación temporal de objetos seleccionados](../User-guide/#temporarily-hiding-objects)
  y un comando para restaurar todos los objetos ocultos en la hoja actual.
- Traducción al polaco de la interfaz y traducción del texto del cuadro de diálogo Reemplazar símbolo.

### Corregido
{: #fixed}

- [La visibilidad de la cuadrícula y el ajuste a ella](../Snap-to-Grid/) funcionan de forma independiente, y
  el movimiento con el teclado respeta el ajuste desactivado.
- Las imágenes de mapa de bits se muestran en los símbolos de biblioteca insertados.
- [Escape cancela las acciones de dibujo y colocación](../Shortcuts/), incluso cuando
  los controles de la barra de herramientas tienen el foco.
- Al cancelar el aviso de cambios sin guardar del escritorio, se anula la salida pendiente.
- El zoom mediante pellizco en el lienzo ya no se acumula con el zoom de página del navegador.
- Se mejoraron el posicionamiento de la lupa táctil, la respuesta del puntero, la gestión de gestos y el arrastre.
- Se mejoró el comportamiento del cuadro de diálogo Acerca de en escritorio y macOS.

### Empaquetado y mantenimiento
{: #packaging-and-maintenance}

- Se actualizaron las dependencias para solucionar vulnerabilidades de seguridad.
- Se eliminaron los paquetes para Linux ARMv7 porque el entorno de ejecución de Electron es compatible con Linux x64
  y ARM64. Los paquetes Snap están destinados a x64; los paquetes Debian, a x64 y ARM64.

[Descargas de versiones](https://github.com/matt123p/TinyCADv4/releases/tag/v4.0.9)
· [Cambios en el código fuente](https://github.com/matt123p/TinyCADv4/compare/v4.0.8...v4.0.9)

## v4.0.8 — 3 de mayo de 2026
{: #v408--3-may-2026}

- Se corrigió la rotación de los símbolos de alimentación al guardar y volver a abrir un dibujo.
- Se conservaron los tipos de red de los cables al guardar y cargar, manteniendo la coherencia de sus colores.

[Descargas de versiones](https://github.com/matt123p/TinyCADv4/releases/tag/v4.0.8)
· [Cambios en el código fuente](https://github.com/matt123p/TinyCADv4/compare/v4.0.7...v4.0.8)

## v4.0.7 — 13 de abril de 2026
{: #v407--13-april-2026}

- Se corrigió la impresión en la aplicación de escritorio.
- Se mejoró el comportamiento del zoom con pellizco para evitar aumentos incontrolados.
- Se añadió la representación en el servidor de los símbolos de la biblioteca.
- Se automatizó el etiquetado de las compilaciones de producción y la creación de versiones en GitHub.

[Descargas de versiones](https://github.com/matt123p/TinyCADv4/releases/tag/v4.0.7)
· [Cambios en el código fuente](https://github.com/matt123p/TinyCADv4/compare/4.0.6...v4.0.7)

## v4.0.6 — 29 de marzo de 2026
{: #v406--29-march-2026}

Esta versión incluye los cambios de desarrollo realizados en la versión 4.0.5; no hay
ninguna etiqueta 4.0.5 independiente ni una versión publicada en GitHub.

### Añadido
{: #added-1}

- Enrutamiento automático de cables.
- Reemplazar símbolo (Replace Symbol) para cambiar un componente existente por otro símbolo de la biblioteca.
- Desplazamiento automático mientras se arrastra cerca del borde del dibujo.
- Selección de un cable completo con doble clic y selección más allá de las
  uniones y derivaciones con triple clic.
- Una opción para desactivar el indicador de conexión de las etiquetas.

### Corregido y mejorado
{: #fixed-and-improved}

- Las carpetas de bibliotecas se abren de forma predeterminada y se expanden al buscar.
- Se mejoraron la edición de texto, los atajos del portapapeles, las teclas de navegación y los
  aceleradores de teclado cuando el dibujo tiene el foco.
- Se corrigieron la selección con Ctrl+clic, el arrastre de varios objetos seleccionados y los controles giratorios.
- Los rectángulos de dibujo y selección se pueden arrastrar en cualquier dirección.
- Se corrigió el cierre en macOS y se redujo la carga duplicada de bibliotecas en macOS.
- Se corrigieron el posicionamiento de etiquetas, la traducción del selector de color y el procesamiento en segundo plano de la netlist.
- Se corrigieron los nombres del instalador de Windows y de la compilación AppX.

[Descargas de la versión](https://github.com/matt123p/TinyCADv4/releases/tag/4.0.6)
· [Cambios en el código fuente](https://github.com/matt123p/TinyCADv4/compare/4.0.4...4.0.6)

## v4.0.4 — etiqueta del código fuente, 19 de marzo de 2026
{: #v404--source-tag-19-march-2026}

- Se añadieron [carpetas de bibliotecas](../Library-Folders/) para organizar las bibliotecas de símbolos.
- Se añadió la traducción de la interfaz al neerlandés.
- Se añadieron artefactos de compilación para el navegador y el despliegue en GitHub Pages.
- Se corrigió el empaquetado de Snap.

[Cambios en el código fuente](https://github.com/matt123p/TinyCADv4/compare/4.0.3...4.0.4)

## v4.0.3 — etiqueta del código fuente, 15 de marzo de 2026
{: #v403--source-tag-15-march-2026}

- Se ajustó la gestión del inicio en macOS para solucionar un problema de arranque.

La etiqueta del código fuente es 4.0.3, aunque los metadatos del paquete siguen indicando 4.0.2.

[Cambios en el código fuente](https://github.com/matt123p/TinyCADv4/compare/4.0.2...4.0.3)

## v4.0.2 — 14 de marzo de 2026
{: #v402--14-march-2026}

- Se corrigió el diálogo para cerrar con cambios sin guardar en Linux.
- Se añadieron paquetes Debian x64 junto con las compilaciones ARM existentes.
- Se actualizaron las herramientas de compilación y la configuración de empaquetado.

[Descargas de la versión](https://github.com/matt123p/TinyCADv4/releases/tag/4.0.2)
· [Cambios en el código fuente](https://github.com/matt123p/TinyCADv4/compare/4.0.1...4.0.2)

## v4.0.1 — etiqueta inicial del código fuente, 13 de marzo de 2026
{: #v401--initial-source-tag-13-march-2026}

La primera instantánea del código fuente ya incluye la reescritura de TinyCAD para su uso en navegadores y
ordenadores de escritorio, con edición de esquemas, bibliotecas de símbolos, compatibilidad con los archivos `.dsn` y `.tclib` existentes, y flujos de trabajo de exportación. El desarrollo anterior no está
registrado en este repositorio.

[Instantánea inicial del código fuente](https://github.com/matt123p/TinyCADv4/tree/4.0.1)

- Volver al [índice de v4](../CONTENTS/)
