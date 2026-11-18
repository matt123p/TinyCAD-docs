---
layout: default
---
# Imágenes
{: #images}

Añada imágenes a un dibujo para incluir logotipos, imágenes de referencia o diagramas escaneados. Puede pegar una imagen desde el portapapeles o seleccionar un archivo mediante **Archivo → Importar → Imagen…** tanto en TinyCAD Desktop como en la aplicación web.

Las imágenes son elementos gráficos de la hoja. No crean componentes, pines ni conexiones eléctricas. Para convertir la imagen de un circuito en símbolos y cables editables, use en su lugar el [asistente de IA de TinyCAD Desktop](../AI-Assistant/).

## Copiar y pegar
{: #copy-and-paste}

1. En otra aplicación, copie la imagen en sí, no su nombre de archivo ni un enlace. Por ejemplo, use **Copiar imagen** en un navegador o copie una selección en un editor de imágenes.
2. Vuelva a TinyCAD y haga clic en el área de dibujo para asegurarse de que no está editando un campo de texto.
3. Pulse **Ctrl+V** (**Cmd+V** en macOS).
4. Seleccione la imagen pegada y arrástrela hasta la posición deseada.

Se admiten imágenes del portapapeles en formato PNG o JPEG. Si no se puede pegar una imagen, guárdela como archivo y use Importar. También puede copiar y pegar imágenes que ya estén colocadas en un dibujo de TinyCAD.

## Importar desde un archivo
{: #import-from-a-file}

1. Abra **Archivo → Importar → Imagen…**. En la aplicación web, abra el menú **Archivo** mediante el icono del documento de la barra de herramientas.
2. Seleccione un archivo de imagen y confirme en el selector de archivos.
3. La imagen aparecerá en la hoja actual. Selecciónela para moverla, cambiar su tamaño o recortarla.

Los archivos PNG y JPEG se incrustan directamente. Otros formatos que el navegador pueda decodificar, como GIF, WebP, BMP y SVG, se convierten a PNG. Las imágenes importadas siguen siendo imágenes estáticas; no se conserva la animación. La compatibilidad con los formatos depende del navegador o del motor de navegador incluido con TinyCAD Desktop. Si el archivo no se puede leer o no es compatible, se mostrará un error.

También puede arrastrar un archivo PNG o JPEG al dibujo para colocarlo en la posición de destino.

## Mover y cambiar el tamaño
{: #move-and-resize}

Haga clic en una imagen para seleccionarla. Arrastre su cuerpo para moverla o arrastre un tirador de esquina o de borde para cambiar su tamaño.

La barra de propiedades inferior muestra una sección **Imagen** cuando hay una imagen seleccionada. Active **Proporción de aspecto fija** para mantener la relación actual entre el ancho y el alto al cambiar el tamaño. Desactívela para cambiar el ancho y el alto de forma independiente. Mover la imagen no modifica sus proporciones.

**Restablecer proporción de aspecto** restaura las proporciones originales de la imagen visible, teniendo en cuenta cualquier recorte. Mantiene el ancho y la posición superior izquierda actuales, y ajusta el alto. La casilla Proporción de aspecto fija conserva su configuración actual. Puede deshacer el restablecimiento.

## Recortar los bordes
{: #clip-the-edges}

Use **Recorte izquierdo (px)**, **Recorte derecho (px)**, **Recorte superior (px)** y **Recorte inferior (px)** en las propiedades de Imagen para ocultar bordes no deseados o partes de una imagen.

- Los valores son píxeles enteros medidos en la imagen original, independientemente de su tamaño mostrado o de la cuadrícula del dibujo.
- Por ejemplo, si establece **Recorte izquierdo (px)** en **20**, se ocultan los 20 píxeles más a la izquierda de la imagen de origen.
- El recorte mantiene los píxeles restantes a su escala y posición actuales; el límite visible se desplaza hacia dentro en lugar de estirar la imagen.
- Debe quedar al menos un píxel en cada dirección. Los controles limitan cada borde en consecuencia.
- Vuelva a establecer un borde en **0** para restaurarlo. El recorte no elimina píxeles del original incrustado.

**Deshacer** y **Rehacer** se aplican tanto a la inserción de imágenes y los cambios de propiedades como al movimiento y al cambio de tamaño.

## Guardar y exportar
{: #saving-and-output}

Las imágenes se incrustan en el archivo de dibujo, por lo que el archivo original no tiene que permanecer en la ubicación desde la que se importó. Guarde el dibujo con normalidad para conservar sus imágenes, la configuración de proporción fija y los recortes. Estos ajustes se conservan al volver a abrir el archivo y también en los dibujos comprimidos de `.dzn`.

El recorte se aplica a cada imagen colocada, por lo que las copias pueden mostrar partes distintas de la misma imagen. La imagen visible se incluye en la impresión y en la salida PDF y SVG.

- Volver a [Dibujo](../User-guide/)
- Volver al [contenido de v4](../CONTENTS/)
