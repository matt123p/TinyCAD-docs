---
layout: default
---
# Símbolos
{: #symbols}

Los símbolos son los bloques de construcción fundamentales de un esquema de TinyCAD. Coloque símbolos desde bibliotecas, configure sus atributos y, a continuación, conecte sus pines para crear un diseño eléctricamente válido.

Puede usar sus propios símbolos o descargar símbolos directamente del sitio web TinyCAD.net.

Véase también:

- [Uso de bibliotecas de símbolos](../Using-Symbol-Libraries/)
- [Bibliotecas de símbolos personalizadas](../Custom-symbol-libraries/)

## Buscar y colocar símbolos
{: #find-and-place-symbols}

1. Escriba el nombre del símbolo que busca en el cuadro de búsqueda
2. Seleccione los símbolos para verlos y elija el que quiera
3. Arrastre el símbolo desde la vista previa hasta el dibujo

{% include video-player.html
	src="/v4/images/video/Video 6.mp4"
	width=1280
	height=822
	caption="Video explicativo que muestra cómo buscar y colocar un símbolo."
%}



## Orientación al colocar
{: #orientation-while-placing}

Al colocar un símbolo, establezca su orientación con los botones de rotación y volteo de la barra de herramientas.

<img src="/v4/images/media/image5.png" alt="Rotate and flip controls used to change symbol orientation" />


## Editar y mover el texto de los símbolos
{: #editing-and-moving-symbol-text}

Después de colocarlo, puede mover el símbolo completo arrastrándolo.

También puede mover los campos de texto del símbolo (por ejemplo, valor/nombre/referencia) de forma independiente: seleccione el símbolo y arrastre cada campo hasta una ubicación más adecuada.

Puede editar el texto haciendo clic en él.

{% include video-player.html
	src="/v4/images/video/Video 1.mp4"
	width=284
	height=248
	caption="Video explicativo que muestra cómo editar y reubicar el texto de un símbolo."
%}

## Atributos de los símbolos en un esquema
{: #symbol-attributes-in-a-schematic}

Los símbolos colocados suelen incluir estos atributos principales:

- **Nombre/Valor**: qué componente es (por ejemplo, `10k`, `100nF`, tipo de dispositivo)
- **Referencia**: designador único en la hoja/el proyecto (por ejemplo, `R1`, `U3`)
- **Encapsulado** (opcional): identificador de huella/encapsulado utilizado en los flujos de exportación posteriores

Las referencias deben ser únicas. Las herramientas de TinyCAD pueden ayudar a generar referencias automáticamente o a renumerarlas cuando sea necesario.

Puede añadir atributos adicionales para los metadatos del proyecto, el flujo de PCB o los metadatos de simulación, según sea necesario.

## Páginas relacionadas
{: #related-pages}

- [Cables](../Wires/)
- [Etiquetas](../Labels/)
- [Sin conexión](../No-Connects/)
- [Editar un símbolo](../Editing-a-Symbol/)

- Volver a [Dibujo](../User-guide/)
- Volver a [Contenido de v4](../CONTENTS/)
