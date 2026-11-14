---
layout: default
---
# Registro de cambios de TinyCAD
{: #tinycad-changelog}


## Sin publicar
{: #unreleased}
{: #unreleased}

### Añadido
{: #added}

- [Simulación integrada](../Simulation/) mediante ngspice local en el navegador y en Desktop, con análisis de punto de operación, transitorio, CA, barrido de CC, ruido, función de transferencia y polos y ceros. [XSPICE](../XSPICE/) basado en eventos es compatible con Desktop.
- [Fuentes, sondas e instrumentos virtuales](../Simulation-Sources-and-Instruments/), incluidos osciloscopios, multímetros, generadores de funciones y fuentes de alimentación de banco.
- [Explorador de circuitos](../Simulation-Charts-and-Measurements/) para ajustar parámetros, realizar barridos, definir mediciones con nombre, requisitos, superposiciones de CC, estudios de tolerancias, casos de prueba e investigaciones de potencia y esfuerzo.
- [Dibujos `.dzn` comprimidos](../Simulation/#dzn-simulation-drawings) que mantienen juntos el circuito, los modelos, los ajustes de simulación y los resultados opcionales. El historial de ejecuciones y las exportaciones de resultados permiten comparar y compartir; Guardar sin resultados crea una copia más pequeña.
- [Bibliotecas incluidas](../Bundled-Libraries/) para diseños de redes, placas integradas y módulos de hogar inteligente, audio, equipo de laboratorio, motores y movimiento, y planificación solar y de baterías, además de colecciones modeladas de SPICE, lógica, funciones y sensores. Selecciónelas en la pestaña Estándar del selector de bibliotecas.
- [Siete ejemplos de dibujos editables](../Bundled-Examples/), sobre el amplificador de transistores original, una red de oficina, una estación de clima y pantalla ESP32, una vivienda con energía solar y baterías, un estudio de pódcast, un banco de laboratorio y un banco de control de motores, con símbolos y explicaciones integrados.
- [Tutoriales de SPICE y XSPICE ](../Simulation-Tutorials/): once capítulos analógicos y seis digitales, con 28 dibujos ejecutables distintos, definiciones de modelos, ajustes de análisis y adquisiciones de referencia conservadas.
- [Ordenación del diseño](../Layout-Tidy-Up/) para hojas completas o elementos seleccionados, con intensidad Baja/Media/Alta, cancelación, comprobaciones de conexiones y Deshacer en un solo paso.

### Cambiado
{: #changed}

- Abrir ejemplo y Explicación están en la barra de título del navegador. Desktop ofrece Archivo → Abrir ejemplo y Ver → Ver explicación.
- El menú Ver de Desktop incluye Mostrar gráficos; el menú Simulación de la barra de herramientas conserva su control para mostrar u ocultar los gráficos.
- Ordenación automática aparece junto a Simulación en la barra de herramientas y también está disponible en el menú Herramientas de Desktop.

### Corregido
{: #fixed}

- Se restauraron las vistas previas arrastrables de los gráficos de componentes en los resultados de los selectores Estándar, Mis bibliotecas y En línea.
- Se redujo el tamaño de los gráficos de controladores integrados, sensores y pantallas a dimensiones prácticas para el diseño de página, conservando la identidad de los pines y las posiciones del cableado.
- Se impidió que los cambios de diseño crearan conexiones no deseadas en extremos de cables, codos o zócalos; se mejoraron las salidas de los pines y se eliminaron desvíos innecesarios.
- Se eliminaron pequeños cuadros de etiquetas de terminal que se superponían al texto en los símbolos de laboratorio y control de movimiento, y se actualizaron los ejemplos afectados.
- Se mejoraron los informes de errores y diagnósticos de simulación, las ejecuciones de amplificadores en el navegador, las ventanas emergentes de gráficos y los paneles independientes de explicación de ejemplos.

### Manual
{: #manual}

- Se añadieron guías para encontrar y utilizar las bibliotecas y los ejemplos incluidos, y se sustituyó la descripción de SPICE, limitada a la exportación, por el flujo de trabajo de simulación integrada.
- Se añadieron referencias de análisis, modelos, instrumentos, gráficos, mediciones y resolución de problemas, con enlaces a la documentación oficial de ngspice y XSPICE.
- Se incluyeron los cursos existentes completos, dibujos/listas de redes descargables y diez vídeos explicativos sobre bibliotecas, ejemplos, ordenación del diseño, conexiones entre varias hojas y SPICE.
- Se aclararon las [diferencias entre funciones](../Feature-Differences/), incluida la compatibilidad con `.dzn` y los cuadros de texto Markdown, y la compatibilidad con XSPICE en el navegador.
- Se actualizó el manual en los ocho idiomas admitidos, incluida la navegación, las nuevas páginas de referencia, el texto de los tutoriales y los subtítulos de los vídeos.

## v4.0.11
{: #v4011}
{: #v4011}

Esta versión añade notas Markdown con formato, salida vectorial SVG y controles de trazado de cables.

- [Cuadros de texto Markdown](../Text/#markdown-text-boxes): notas con formato, listas, listas de tareas y bloques de código; el mismo renderizador vectorial para el dibujo, la exportación SVG y PDF.
- El formato del texto de origen en tiempo real mantiene visibles los marcadores editables y sigue la fuente base seleccionada, con posición del cursor, selección y ajuste de línea coincidentes.
- [Modos de trazado de cables](../Wires/#wire-routing-modes): un selector compacto para los modos de trazado de 90°, 45° y Libre, que conserva la vista previa activa.
- El botón de lupa solo aparece después de usar la entrada táctil en el lienzo de dibujo.

## v4.0.10 — 6 de noviembre de 2026
{: #v4010--6-november-2026}
{: #v4010}

- Se mantiene visible la barra de herramientas del editor cuando los paneles de bibliotecas o esquemas necesitan más espacio vertical.

## v4.0.9 — 4 de noviembre de 2026
{: #v409--4-november-2026}

### Añadido
{: #added-1}

- [Controles táctiles](../Touch-controls/), incluidos la edición directa, el desplazamiento con dos dedos
  y el zoom mediante pellizco, y una lupa con los controles Clic, Arrastrar/Soltar, Menú y Cerrar
  para colocar elementos con precisión.
- [Panel de bibliotecas redimensionable y ordenación de símbolos](../Using-Symbol-Libraries/),
  incluida la ordenación alfabética de los resultados de búsqueda.
- [Ocultación temporal de objetos seleccionados](../User-guide/#temporarily-hiding-objects)
  y un comando para restaurar todos los objetos ocultos de la hoja actual.
- Traducción de la interfaz al polaco y texto traducido en el cuadro de diálogo Reemplazar símbolo.

### Corregido
{: #fixed-1}

- [La visibilidad de la cuadrícula y el ajuste a ella](../Snap-to-Grid/) funcionan de forma independiente, y
  el movimiento con el teclado respeta la opción de ajuste desactivada.
- Las imágenes de mapa de bits se muestran en los símbolos de bibliotecas colocados.
- [Escape cancela las acciones de dibujo y colocación](../Shortcuts/), incluso cuando
  los controles de la barra de herramientas tienen el foco.
- Al cancelar el aviso de cambios sin guardar de Desktop, se anula la salida pendiente.
- El zoom mediante pellizco en el lienzo ya no se acumula con el zoom de página del navegador.
- Se mejoraron la posición de la lupa táctil, la respuesta del puntero, la gestión de gestos y el arrastre.
- Se mejoró el comportamiento del cuadro de diálogo Acerca de en Desktop y macOS.

### Empaquetado y mantenimiento
{: #packaging-and-maintenance}

- Se actualizaron las dependencias para corregir vulnerabilidades de seguridad.
- Se eliminaron los paquetes Linux ARMv7 porque el entorno de ejecución de Electron es compatible con Linux x64
  y ARM64. Los paquetes Snap son para x64; los paquetes Debian, para x64 y ARM64.

[Descargas de la versión](https://github.com/matt123p/TinyCADv4/releases/tag/v4.0.9)
· [Cambios en el código fuente](https://github.com/matt123p/TinyCADv4/compare/v4.0.8...v4.0.9)

## v4.0.8 — 3 de mayo de 2026
{: #v408--3-may-2026}

- Se corrigió la rotación de los símbolos de alimentación al guardar y volver a abrir un dibujo.
- Se conservaron los tipos de red de los cables al guardar y cargar, manteniendo la coherencia de los colores de los cables.

[Descargas de la versión](https://github.com/matt123p/TinyCADv4/releases/tag/v4.0.8)
· [Cambios en el código fuente](https://github.com/matt123p/TinyCADv4/compare/v4.0.7...v4.0.8)

## v4.0.7 — 13 de abril de 2026
{: #v407--13-april-2026}

- Se corrigió la impresión en la aplicación de escritorio.
- Se mejoró el comportamiento del zoom mediante pellizco para evitar aumentos de zoom descontrolados.
- Se añadió el renderizado en el servidor de los símbolos de bibliotecas.
- Se automatizó el etiquetado de compilaciones de producción y la creación de versiones de GitHub.

[Descargas de la versión](https://github.com/matt123p/TinyCADv4/releases/tag/v4.0.7)
· [Cambios en el código fuente](https://github.com/matt123p/TinyCADv4/compare/4.0.6...v4.0.7)

## v4.0.6 — 29 de marzo de 2026
{: #v406--29-march-2026}

Esta versión incluye los cambios de desarrollo realizados con la versión 4.0.5; no existe
una etiqueta 4.0.5 independiente ni una versión publicada en GitHub.

### Añadido
{: #added-2}

- Trazado automático de cables.
- Reemplazar símbolo para cambiar un componente existente por otro símbolo de biblioteca.
- Desplazamiento automático mientras se arrastra cerca del borde del dibujo.
- Selección de un cable completo con doble clic y selección más allá de uniones y derivaciones en T con triple clic.
- Una opción para desactivar el indicador de conexión de etiquetas.

### Corregido y mejorado
{: #fixed-and-improved}

- Las carpetas de bibliotecas se abren de forma predeterminada y se expanden al buscar.
- Se mejoraron la edición de texto, los atajos del portapapeles, las teclas de navegación y los aceleradores de teclado cuando el dibujo tiene el foco.
- Se corrigieron la selección con Ctrl+clic, el arrastre de varios objetos seleccionados y los controles de giro.
- Los rectángulos de dibujo y selección se pueden arrastrar en ambas direcciones.
- Se corrigió la salida en macOS y se redujo la carga duplicada de bibliotecas en macOS.
- Se corrigieron la posición de las etiquetas, la traducción del selector de color y el procesamiento en segundo plano de las listas de redes.
- Se corrigieron los nombres del instalador de Windows y de las compilaciones AppX.

[Descargas de la versión](https://github.com/matt123p/TinyCADv4/releases/tag/4.0.6)
· [Cambios en el código fuente](https://github.com/matt123p/TinyCADv4/compare/4.0.4...4.0.6)

## v4.0.4 — etiqueta de código fuente, 19 de marzo de 2026
{: #v404--source-tag-19-march-2026}

- Se añadieron [carpetas de bibliotecas](../Library-Folders/) para organizar las bibliotecas de símbolos.
- Se añadió la traducción de la interfaz al neerlandés.
- Se añadieron artefactos de compilación para el navegador y el despliegue en GitHub Pages.
- Se corrigió el empaquetado Snap.

[Cambios en el código fuente](https://github.com/matt123p/TinyCADv4/compare/4.0.3...4.0.4)

## v4.0.3 — etiqueta de código fuente, 15 de marzo de 2026
{: #v403--source-tag-15-march-2026}

- Se ajustó la gestión del inicio de macOS para solucionar un problema de arranque.

La etiqueta del código fuente es 4.0.3, aunque los metadatos del paquete siguen indicando 4.0.2.

[Cambios en el código fuente](https://github.com/matt123p/TinyCADv4/compare/4.0.2...4.0.3)

## v4.0.2 — 14 de marzo de 2026
{: #v402--14-march-2026}

- Se corrigió el cuadro de diálogo de cierre con cambios sin guardar en Linux.
- Se añadieron paquetes Debian x64 junto a las compilaciones ARM existentes.
- Se actualizaron las herramientas de compilación y la configuración de empaquetado.

[Descargas de la versión](https://github.com/matt123p/TinyCADv4/releases/tag/4.0.2)
· [Cambios en el código fuente](https://github.com/matt123p/TinyCADv4/compare/4.0.1...4.0.2)

## v4.0.1 — etiqueta inicial del código fuente, 13 de marzo de 2026
{: #v401--initial-source-tag-13-march-2026}

La primera instantánea del código fuente ya incluye la reescritura de TinyCAD para uso en el navegador y
el escritorio, con edición de esquemas, bibliotecas de símbolos, compatibilidad con archivos `.dsn` y `.tclib` existentes y flujos de exportación. El desarrollo anterior no está
registrado en este repositorio.

[Instantánea inicial del código fuente](https://github.com/matt123p/TinyCADv4/tree/4.0.1)

- Volver al [contenido de v4](../CONTENTS/)
