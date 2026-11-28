---
layout: default
---
# Símbolos
{: #symbols}

Los símbolos son los bloques fundamentales de un esquema de TinyCAD. Coloque símbolos de las bibliotecas, configure sus atributos y conecte sus pines para crear un diseño eléctricamente válido.

El selector de bibliotecas de la izquierda ofrece tres fuentes: **Estándar** para las bibliotecas incluidas, **En línea** para buscar en TinyCAD.net y **Mis bibliotecas** para sus propios archivos de biblioteca.

El [asistente de IA](../AI-Assistant/) también puede buscar o crear un símbolo a partir de una hoja de datos y colocarlo directamente en el dibujo. Abra una biblioteca personalizada para editarla cuando quiera que el asistente cree componentes reutilizables para la biblioteca.

## Buscar un símbolo
{: #find-a-symbol}

### Usar las bibliotecas incluidas
{: #use-the-bundled-libraries}

Seleccione **Estándar** y, a continuación, elija una colección en **Elegir una biblioteca estándar**. Examine sus componentes o escriba un nombre en **Buscar bibliotecas...** para filtrar la colección seleccionada. Puede cambiar de colección sin quitar los símbolos que ya haya colocado en el dibujo.

Las [bibliotecas incluidas](../Bundled-Libraries/) contienen componentes de circuito modelados, así como equipos físicos para diseños de redes, sistemas embebidos, audio, laboratorio, control de movimiento y energía solar. Se incluyen con TinyCAD tanto en el navegador como en la aplicación de escritorio; no se necesita una cuenta, una descarga aparte ni importar bibliotecas. Consulte la guía de bibliotecas para conocer el contenido y la finalidad de cada colección.

### Buscar en línea
{: #search-online}

Si las colecciones incluidas no contienen lo que necesita, seleccione **En línea** y escriba el nombre de un componente o su número de pieza en **Buscar bibliotecas...**. TinyCAD busca en la colección de símbolos de TinyCAD.net y muestra los símbolos coincidentes con vistas previas de sus gráficos. La búsqueda en línea requiere una conexión a Internet.

Seleccione un resultado para examinar su vista previa y descripción y, a continuación, arrastre sus gráficos al dibujo. No es necesario descargar primero una biblioteca aparte. Compruebe que los nombres y números de los pines coincidan con el componente y el encapsulado que piensa utilizar.

### Si no encuentra el símbolo que busca
{: #if-you-cannot-find-the-symbol-you-want}

Use [Bibliotecas de símbolos personalizadas](../Custom-symbol-libraries/) para crear una biblioteca `.tclib` o abrir una que ya tenga. Sus bibliotecas estarán disponibles en **Mis bibliotecas**, dentro del selector.

Puede dibujar un símbolo nuevo o adaptar una copia de otro existente que resulte adecuado; consulte [Editar un símbolo](../Editing-a-Symbol/) para obtener información sobre sus gráficos, pines y propiedades. También puede [importar símbolos de KiCad](../Importing-Symbols-from-KiCAD/) a una biblioteca personalizada. Las bibliotecas incluidas son de solo lectura; guarde sus propias definiciones en una biblioteca personalizada.

## Colocar el símbolo elegido
{: #place-the-chosen-symbol}

1. Elija **Estándar**, **En línea** o **Mis bibliotecas** y, a continuación, examine o busque en esa fuente.
2. Seleccione un resultado para ver su vista previa ampliada y descripción.
3. Arrastre los gráficos del símbolo desde la lista o la vista previa al dibujo y, a continuación, colóquelos en la cuadrícula.
4. Pulse **Escape** o haga clic con el botón derecho cuando haya terminado de colocar copias.

El vídeo siguiente muestra cómo buscar y colocar un símbolo. Para obtener más información sobre cómo examinar y gestionar el selector, consulte [Usar bibliotecas de símbolos](../Using-Symbol-Libraries/).

{% include video-player.html
	src="/v4/Images/video/Video 6.mp4"
	width=1280
	height=822
	caption="Vídeo explicativo que muestra cómo buscar y colocar un símbolo."
%}



## Orientación durante la colocación
{: #orientation-while-placing}

Al colocar un símbolo, defina su orientación con los botones de rotación y volteo de la barra de herramientas.

<img src="/v4/Images/media/image5.png" alt="Rotate and flip controls used to change symbol orientation" />


## Editar y mover el texto de los símbolos
{: #editing-and-moving-symbol-text}

Después de colocarlo, puede mover el símbolo completo arrastrándolo.

También puede mover por separado los campos de texto del símbolo (por ejemplo, valor/nombre/referencia): seleccione el símbolo y arrastre cada campo a una ubicación más adecuada.

Puede editar el texto haciendo clic en él.

{% include video-player.html
	src="/v4/Images/video/Video 1.mp4"
	width=284
	height=248
	caption="Vídeo explicativo que muestra cómo editar y reubicar el texto de un símbolo."
%}

## Atributos de los símbolos en un esquema
{: #symbol-attributes-in-a-schematic}

Los símbolos colocados suelen incluir estos atributos clave:

- **Nombre/Valor**: qué tipo de componente es (por ejemplo, `10k`, `100nF`, tipo de dispositivo)
- **Referencia**: designador único en la hoja o el proyecto (por ejemplo, `R1`, `U3`)
- **Encapsulado** (opcional): identificador de huella/encapsulado utilizado en los procesos de exportación posteriores

Las referencias deben ser únicas. Cuando sea necesario, las herramientas de TinyCAD pueden ayudar a generar referencias automáticamente o a volver a anotarlas.

Puede añadir atributos adicionales según sea necesario para los metadatos del proyecto, el flujo de trabajo de PCB o los metadatos de simulación.

## Páginas relacionadas
{: #related-pages}

- [Cables](../Wires/)
- [Etiquetas](../Labels/)
- [Sin conexión](../No-Connects/)
- [Editar un símbolo](../Editing-a-Symbol/)

- Volver a [Dibujo](../User-guide/)
- Volver al [índice de v4](../CONTENTS/)
