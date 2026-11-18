---
layout: default
---
# Registro de cambios de TinyCAD
{: #tinycad-changelog}


## Próximamente
{: #unreleased}
{: #unreleased}

### Añadido
{: #added}

- [Edición de símbolos, bibliotecas y circuitos asistida por IA](../AI-Assistant/), incluidas hojas de datos e imágenes adjuntas, búsqueda de símbolos integrada y en línea, edición directa del documento activo, cambios que se pueden deshacer, ajustes de proveedor/modelo y conexiones locales con Ollama.

- [Simulación integrada](../Simulation/) con ngspice local en el navegador y en la aplicación de escritorio, con análisis de punto de funcionamiento, transitorio, CA, barrido de CC, ruido, función de transferencia y polos y ceros. [XSPICE basado en eventos](../XSPICE/) es compatible con la aplicación de escritorio.
- [Fuentes, sondas e instrumentos virtuales](../Simulation-Sources-and-Instruments/), incluidos osciloscopios, multímetros, generadores de funciones y fuentes de alimentación de laboratorio.
- [Explorador de circuitos](../Simulation-Charts-and-Measurements/) para ajustes, barridos, mediciones con nombre, requisitos, superposiciones de CC, estudios de tolerancia, casos de prueba e investigaciones de potencia/estrés.
- Dibujos [`.dzn` comprimidos](../Simulation/#dzn-simulation-drawings) que mantienen juntos el circuito, los modelos, los ajustes de simulación y los resultados opcionales. El historial de ejecuciones y las exportaciones de resultados permiten compararlos y compartirlos; Guardar sin resultados crea una copia más pequeña.
- [Bibliotecas incluidas](../Bundled-Libraries/) para diseños de red, placas integradas y módulos de hogar inteligente, audio, equipos de laboratorio, motores/movimiento y planificación solar y de baterías, además de colecciones SPICE modeladas, lógicas, funcionales y de sensores. Selecciónelas en la pestaña Estándar del selector de bibliotecas.
- [Siete ejemplos de dibujos editables](../Bundled-Examples/), que abarcan el amplificador de transistores original, una red de oficina, una estación de clima/pantalla ESP32, una vivienda solar con baterías, un estudio de pódcast, una mesa de laboratorio y una mesa de control de motores, con símbolos integrados y explicaciones.
- [Tutoriales de SPICE y XSPICE](../Simulation-Tutorials/): once capítulos analógicos y seis digitales, con 28 dibujos ejecutables distintos, definiciones de modelos, ajustes de análisis y adquisiciones de referencia conservadas.
- [Ordenación del diseño](../Layout-Tidy-Up/) para hojas completas o elementos seleccionados, con niveles de intensidad Bajo/Medio/Alto, cancelación, comprobaciones de conexiones y Deshacer en un paso.

### Cambiado
{: #changed}

- Abrir ejemplo y Explicación están en la barra de título del navegador. La aplicación de escritorio ofrece Archivo → Abrir ejemplo y Ver → Ver explicación.
- El menú Ver de la aplicación de escritorio incluye Mostrar gráficos; el menú Simulación de la barra de herramientas conserva su opción para mostrar gráficos.
- La opción Diseño automático está junto a Simulación en la barra de herramientas y también está disponible en el menú Herramientas de la aplicación de escritorio.

### Corregido
{: #fixed}

- Restauradas las vistas previas arrastrables de los gráficos de componentes en los resultados de los selectores Estándar, Mis bibliotecas y En línea.
- Reducido el tamaño de los gráficos de controladores integrados, sensores y pantallas a dimensiones prácticas para el diseño de páginas, conservando la identidad de los pines y las posiciones de cableado.
- Evita que los cambios de diseño creen conexiones no deseadas en los extremos de los cables, los codos o los zócalos; mejora las salidas de los pines y elimina desvíos innecesarios.
- Eliminados los pequeños recuadros de etiquetas de terminal que se superponían al texto en los símbolos de laboratorio y control de movimiento, y actualizados los ejemplos afectados.
- Mejorados los informes de errores y diagnósticos de simulación, las ejecuciones de amplificadores en el navegador, las ventanas emergentes de gráficos y los paneles independientes de explicación de ejemplos.

### Manual
{: #manual}

- Añadida una [guía de imágenes](../Images/) que abarca copiar y pegar, importar archivos y convertir formatos, mantener la relación de aspecto, recortar píxeles y guardar imágenes con el dibujo.

- Añadida una [guía completa del asistente de IA](../AI-Assistant/) que abarca la creación de símbolos/bibliotecas y circuitos, la configuración de proveedores con capturas de pantalla, Ollama local, archivos adjuntos al documento, ejemplos de indicaciones y la revisión de resultados generados.

- Añadidas guías para encontrar y utilizar las bibliotecas y los ejemplos incluidos, y sustituida la descripción de SPICE limitada a la exportación por el flujo de trabajo de simulación integrada.
- Añadidas referencias de análisis, modelos, instrumentos, gráficos, mediciones y resolución de problemas, con enlaces a la documentación oficial de ngspice y XSPICE.
- Incluidos los cursos existentes completos, dibujos/netlists descargables y diez videotutoriales sobre bibliotecas, ejemplos, ordenación del diseño, conexiones entre varias hojas y SPICE.
- Aclaradas las [diferencias entre funciones](../Feature-Differences/), incluida la compatibilidad de `.dzn` y de los cuadros de texto Markdown, y la compatibilidad del navegador con XSPICE.
- Actualizado el manual en los ocho idiomas admitidos, incluidos la navegación, las nuevas páginas de referencia, el texto de los tutoriales y los subtítulos de los vídeos.

## v4.0.11
{: #v4011}
{: #v4011}

Esta versión añade notas Markdown con formato, salida vectorial SVG y controles de trazado de cables.

- [Cuadros de texto Markdown](../Text/#markdown-text-boxes): notas con formato, listas, listas de tareas y bloques de código; el mismo renderizador vectorial para el dibujo, la exportación SVG y PDF.
- El formato dinámico del código fuente mantiene visibles los marcadores editables y sigue la fuente base elegida, con la posición del cursor, la selección y el ajuste de línea correspondientes.
- [Modos de trazado de cables](../Wires/#wire-routing-modes): un selector compacto para trazado de 90°, 45° y libre, que conserva la vista previa activa.
- El botón de lupa aparece solo después de usar la entrada táctil en el lienzo de dibujo.

## v4.0.10 — 6 de noviembre de 2026
{: #v4010--6-november-2026}
{: #v4010}

- Mantiene visible la barra de herramientas del editor cuando los paneles de bibliotecas o esquemas necesitan más espacio vertical.

## v4.0.9 — 4 de noviembre de 2026
{: #v409--4-november-2026}

### Añadido
{: #added-1}

- [Controles táctiles](../Touch-controls/), incluida la edición directa, el desplazamiento con dos dedos
y el zoom con pellizco, además de una lupa con controles de Clic, Arrastrar/soltar, Menú y Cerrar
para una colocación precisa.
- [Panel de bibliotecas redimensionable y ordenación de símbolos](../Using-Symbol-Libraries/),
  incluida la ordenación alfabética de los resultados de búsqueda.
- [Ocultación temporal de objetos seleccionados](../User-guide/#temporarily-hiding-objects)
y un comando para restaurar todos los objetos ocultos de la hoja actual.
- Traducción de la interfaz al polaco y traducción del texto del cuadro de diálogo Reemplazar símbolo.

### Corregido
{: #fixed-1}

- [La visibilidad y el ajuste a la cuadrícula](../Snap-to-Grid/) funcionan de forma independiente, y
  el movimiento con el teclado respeta la opción de ajuste desactivada.
- Las imágenes de mapa de bits se muestran en los símbolos de biblioteca colocados.
- [Escape cancela las acciones de dibujo y colocación](../Shortcuts/), incluso cuando
  los controles de la barra de herramientas tienen el foco.
- Al cancelar el aviso de cambios sin guardar en la aplicación de escritorio se elimina la solicitud de salida pendiente.
- El zoom con pellizco en el lienzo ya no se acumula con el zoom de página del navegador.
- Mejoras en la posición de la lupa táctil, la respuesta del puntero, el manejo de gestos y el arrastre.
- Mejor comportamiento del cuadro de diálogo Acerca de en las versiones de escritorio y macOS.

### Empaquetado y mantenimiento
{: #packaging-and-maintenance}

- Dependencias actualizadas para corregir vulnerabilidades de seguridad.
- Se eliminaron los paquetes Linux ARMv7 porque el entorno de ejecución de Electron admite Linux x64
y ARM64. Los paquetes Snap están destinados a x64; los paquetes Debian, a x64 y ARM64.

[Descargas de la versión](https://github.com/matt123p/TinyCADv4/releases/tag/v4.0.9)
· [Cambios en el código fuente](https://github.com/matt123p/TinyCADv4/compare/v4.0.8...v4.0.9)

## v4.0.8 — 3 de mayo de 2026
{: #v408--3-may-2026}

- Corregida la rotación de los símbolos de alimentación al guardar y volver a abrir un dibujo.
- Conservados los tipos de red de los cables al guardar y cargar, manteniendo coherentes sus colores.

[Descargas de la versión](https://github.com/matt123p/TinyCADv4/releases/tag/v4.0.8)
· [Cambios en el código fuente](https://github.com/matt123p/TinyCADv4/compare/v4.0.7...v4.0.8)

## v4.0.7 — 13 de abril de 2026
{: #v407--13-april-2026}

- Corregida la impresión en la aplicación de escritorio.
- Mejorado el comportamiento del zoom con pellizco para evitar aumentos descontrolados.
- Añadido el renderizado de símbolos de biblioteca en el servidor.
- Automatizadas la asignación de etiquetas a las compilaciones de producción y la creación de versiones en GitHub.

[Descargas de la versión](https://github.com/matt123p/TinyCADv4/releases/tag/v4.0.7)
· [Cambios en el código fuente](https://github.com/matt123p/TinyCADv4/compare/4.0.6...v4.0.7)

## v4.0.6 — 29 de marzo de 2026
{: #v406--29-march-2026}

Esta versión incluye los cambios de desarrollo realizados en la versión 4.0.5; no
hay una etiqueta 4.0.5 independiente ni una versión publicada en GitHub.

### Añadido
{: #added-2}

- Trazado automático de cables.
- Reemplazar símbolo para cambiar un componente existente por otro símbolo de biblioteca.
- Desplazamiento automático mientras se arrastra cerca del borde del dibujo.
- Selección de un cable completo con doble clic y selección más allá de las uniones y derivaciones en T con triple clic.
- Opción para desactivar el indicador de conexión de etiquetas.

### Corregido y mejorado
{: #fixed-and-improved}

- Las carpetas de bibliotecas se abren de forma predeterminada y se expanden al buscar.
- Mejoras en la edición de texto, los atajos del portapapeles, las teclas de navegación y los aceleradores de teclado cuando el dibujo tiene el foco.
- Corregida la selección con Ctrl y clic, el arrastre de varios objetos seleccionados y los controles de giro.
- Los rectángulos de dibujo y selección se pueden arrastrar en cualquier dirección.
- Corregida la salida en macOS y reducido el número de cargas duplicadas de bibliotecas en macOS.
- Corregidos el posicionamiento de etiquetas, la traducción del selector de color y el procesamiento en segundo plano de las listas de redes.
- Corregidos los nombres de compilación del instalador de Windows y de AppX.

[Descargas de la versión](https://github.com/matt123p/TinyCADv4/releases/tag/4.0.6)
· [Cambios en el código fuente](https://github.com/matt123p/TinyCADv4/compare/4.0.4...4.0.6)

## v4.0.4 — etiqueta de código fuente, 19 de marzo de 2026
{: #v404--source-tag-19-march-2026}

- Añadidas [carpetas de bibliotecas](../Library-Folders/) para organizar bibliotecas de símbolos.
- Añadida la traducción de la interfaz al neerlandés.
- Añadidos artefactos de compilación para el navegador y su publicación en GitHub Pages.
- Corregido el empaquetado Snap.

[Cambios en el código fuente](https://github.com/matt123p/TinyCADv4/compare/4.0.3...4.0.4)

## v4.0.3 — etiqueta de código fuente, 15 de marzo de 2026
{: #v403--source-tag-15-march-2026}

- Ajustado el inicio en macOS para resolver un problema de arranque.

La etiqueta del código fuente es 4.0.3, aunque los metadatos del paquete siguen indicando 4.0.2.

[Cambios en el código fuente](https://github.com/matt123p/TinyCADv4/compare/4.0.2...4.0.3)

## v4.0.2 — 14 de marzo de 2026
{: #v402--14-march-2026}

- Corregido el cuadro de diálogo de cierre por cambios sin guardar en Linux.
- Añadidos paquetes Debian x64 junto con las compilaciones ARM existentes.
- Actualizadas las herramientas de compilación y la configuración del empaquetado.

[Descargas de la versión](https://github.com/matt123p/TinyCADv4/releases/tag/4.0.2)
· [Cambios en el código fuente](https://github.com/matt123p/TinyCADv4/compare/4.0.1...4.0.2)

## v4.0.1 — etiqueta inicial del código fuente, 13 de marzo de 2026
{: #v401--initial-source-tag-13-march-2026}

La primera instantánea del código fuente ya incluye la reescritura de TinyCAD para uso en el navegador y en la aplicación de escritorio, con edición de esquemas, bibliotecas de símbolos, compatibilidad con archivos existentes
`.dsn` y `.tclib` y flujos de trabajo de exportación. El desarrollo anterior no está
registrado en este repositorio.

[Instantánea inicial del código fuente](https://github.com/matt123p/TinyCADv4/tree/4.0.1)

- Volver al [contenido de v4](../CONTENTS/)
