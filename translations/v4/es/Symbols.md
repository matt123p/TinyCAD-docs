---
layout: default
---
# Símbolos
{: #symbols}

Los símbolos son los elementos fundamentales de un esquema de TinyCAD. Coloca símbolos desde las bibliotecas, configura sus atributos y conecta sus pines con cables para crear un diseño eléctricamente válido.

El selector de bibliotecas de la izquierda ofrece tres fuentes: **Standard** para las bibliotecas incluidas, **Online** para buscar en TinyCAD.net y **My Libraries** para tus propios archivos de biblioteca.

## Buscar un símbolo
{: #find-a-symbol}

### Usar las bibliotecas incluidas
{: #use-the-bundled-libraries}

Selecciona **Standard** y elige una colección en **Choose a standard library**. Explora sus componentes o escribe un nombre en **Search libraries...** para filtrar la colección seleccionada. Puedes cambiar de colección sin quitar del dibujo los símbolos que ya hayas colocado.

Las [bibliotecas incluidas](../Bundled-Libraries/) contienen componentes de circuitos modelados, así como equipos físicos para diseños de redes, sistemas integrados, audio, laboratorio, control de movimiento y energía solar. Se proporcionan con TinyCAD tanto en el navegador como en la aplicación de escritorio; no necesitas una cuenta, una descarga aparte ni importar bibliotecas. Consulta la guía de bibliotecas para conocer el contenido y el propósito de cada colección.

### Buscar en línea
{: #search-online}

Si las colecciones incluidas no contienen lo que necesitas, selecciona **Online** e introduce el nombre de un componente o su número de pieza en **Search libraries...**. TinyCAD busca en la colección de símbolos de TinyCAD.net y muestra los símbolos coincidentes con vistas previas de sus gráficos. La búsqueda en línea requiere conexión a Internet.

Selecciona un resultado para consultar su vista previa y descripción y, a continuación, arrastra sus gráficos al dibujo. No es necesario descargar antes una biblioteca aparte. Comprueba que los nombres y números de los pines coincidan con el componente y el encapsulado que tienes previsto utilizar.

### Si no encuentras el símbolo que buscas
{: #if-you-cannot-find-the-symbol-you-want}

Usa [Bibliotecas de símbolos personalizadas](../Custom-symbol-libraries/) para crear una biblioteca `.tclib` o abrir una que ya tengas. Tus bibliotecas están disponibles en **My Libraries**, dentro del selector.

Puedes dibujar un símbolo nuevo o adaptar una copia de uno existente adecuado; consulta [Editar un símbolo](../Editing-a-Symbol/) para obtener información sobre sus gráficos, pines y propiedades. También puedes [importar símbolos de KiCad](../Importing-Symbols-from-KiCAD/) a una biblioteca personalizada. Las bibliotecas incluidas son de solo lectura, así que guarda tus propias definiciones en una biblioteca personalizada.

## Colocar el símbolo elegido
{: #place-the-chosen-symbol}

1. Elige **Standard**, **Online** o **My Libraries** y, a continuación, explora o busca en esa fuente.
2. Selecciona un resultado para consultar su vista previa ampliada y su descripción.
3. Arrastra los gráficos del símbolo desde la lista o la vista previa hasta el dibujo y, después, colócalo en la cuadrícula.
4. Pulsa **Escape** o haz clic con el botón derecho cuando hayas terminado de colocar copias.

El vídeo siguiente muestra cómo buscar y colocar un símbolo. Para obtener más información sobre cómo explorar y administrar el selector, consulta [Usar bibliotecas de símbolos](../Using-Symbol-Libraries/).

{% include video-player.html
	src="/v4/images/video/Video 6.mp4"
	width=1280
	height=822
	caption="Vídeo explicativo que muestra cómo buscar y colocar un símbolo."
%}



## Orientación durante la colocación
{: #orientation-while-placing}

Al colocar un símbolo, establece su orientación con los botones de rotación y volteo de la barra de herramientas.

<img src="/v4/images/media/image5.png" alt="Rotate and flip controls used to change symbol orientation" />


## Editar y mover el texto de los símbolos
{: #editing-and-moving-symbol-text}

Una vez colocado, puedes mover el símbolo entero arrastrándolo.

También puedes mover los campos de texto del símbolo (por ejemplo, valor/nombre/referencia) de forma independiente: selecciona el símbolo y arrastra cada campo a una posición más adecuada.

Puedes editar el texto haciendo clic en él.

{% include video-player.html
	src="/v4/images/video/Video 1.mp4"
	width=284
	height=248
	caption="Vídeo explicativo que muestra cómo editar y reubicar el texto de un símbolo."
%}

## Atributos de los símbolos en un esquema
{: #symbol-attributes-in-a-schematic}

Los símbolos colocados suelen incluir estos atributos principales:

- **Nombre/Valor**: qué es el componente (por ejemplo `10k`, `100nF`, tipo de dispositivo)
- **Referencia**: designador único en la hoja o el proyecto (por ejemplo `R1`, `U3`)
- **Encapsulado** (opcional): identificador de huella/encapsulado que se utiliza en los flujos de exportación posteriores

Las referencias deben ser únicas. Las herramientas de TinyCAD pueden ayudar a generarlas automáticamente o a volver a anotarlas cuando sea necesario.

Puedes añadir atributos adicionales para los metadatos del proyecto, el flujo de trabajo de PCB o los metadatos de simulación, según sea necesario.

## Páginas relacionadas
{: #related-pages}

- [Cables](../Wires/)
- [Etiquetas](../Labels/)
- [Sin conexión](../No-Connects/)
- [Editar un símbolo](../Editing-a-Symbol/)

- Volver a [Dibujo](../User-guide/)
- Volver al [índice de v4](../CONTENTS/)
