---
layout: default
---
# Tu primer dibujo
{: #your-first-drawing}

Esta página te guiará por los pasos para dibujar tu primer esquema de circuito con TinyCAD.

En su forma más sencilla, un dibujo de TinyCAD es una colección de símbolos conectados
mediante cables. En este ejemplo, colocarás algunos símbolos y luego los conectarás con cables.

## Circuito de ejemplo
{: #example-circuit}

Este es un circuito sencillo para dibujar:

<img src="/v4/images/media/image1.png" alt="Simple battery, resistor, and LED circuit used in the tutorial" style="width: 2.13542in; height: 1.13542in;" />

<p>
	<a href="/v4/examples/First%20Drawing.dsn" class="btn btn-primary" download>
		<i class="bi bi-download me-1" aria-hidden="true"></i>&nbsp;Descargar
	</a>
</p>


## Recorrido en vídeo
{: #video-walkthrough}

{% include video-player.html
	src="/v4/images/video/Video 2.mp4"
	width=1618
	height=922
	caption="Vídeo explicativo que muestra cómo editar y reubicar el texto de los símbolos."
%}

# Guía paso a paso
{: #step-by-step-guide}

## Bibliotecas de símbolos
{: #symbol-libraries}

1. Escribe `battery` en el cuadro de búsqueda.
2. Selecciona **Multi Cell Battery**.
3. Arrastra el símbolo desde el panel de símbolos hasta el dibujo.

Ahora coloca una resistencia y un LED.

Usa los controles de rotación e inversión de la barra de herramientas para orientar los símbolos:

<img src="/v4/images/media/image5.png" alt="Rotate and flip controls used to change symbol orientation" />

Si cometes un error, usa Deshacer/Rehacer (Undo/Redo):

<img src="/v4/images/media/image6.png" alt="Undo and Redo toolbar buttons" />

Tu dibujo debería tener un aspecto similar a este:

<img src="/v4/images/media/image7.png" alt="Battery, resistor, and LED symbols placed on the drawing before wiring" style="width: 3.76042in; height: 2.52083in;" />

## Cableado de un circuito
{: #wiring-up-a-circuit}

1. Selecciona la herramienta **Wire**.
2. Haz clic en un terminal de la batería para iniciar un cable.
3. Desplázate hasta el terminal de la resistencia y vuelve a hacer clic para colocar el cable.

Los cables se ajustan a los puntos de conexión válidos de los símbolos. Un círculo rojo indica
un punto de ajuste.

Consejo: pulsa `W` en el teclado para volver rápidamente al modo de cableado.

Una vez cableado, debería tener un aspecto similar a este:

<img src="/v4/images/media/image8.png" alt="Example circuit after the battery, resistor, and LED have been wired together" style="width: 3.40625in; height: 2.38542in;" />

## Anotación del dibujo
{: #annotating-the-drawing}

Los símbolos necesitan valores de componentes y referencias. En TinyCAD, normalmente se trata
de los campos **Name** y **Ref** del símbolo.

1. Haz clic en la batería.
2. Ve al panel **Symbol** de la parte inferior.
3. Cambia `BATTERY_2` por `9V`.
4. Cambia la referencia `Z?` por `B1`.

Repite el proceso para los demás componentes:

- Resistencia: Name `1K`, Ref `R1`
- LED: Name `Red Led`, Ref `D1`

Si el nombre o la referencia están ocultos, usa las casillas de verificación para mostrar u ocultar el texto
en el dibujo.

## Cargar y guardar
{: #loading-and-saving}

<div class="manual-tabset" data-tabset="product-mode" data-tabset-label="Choose your TinyCAD product" data-default-tab="Browser" markdown="1">

### Archivos locales del navegador
{: #browser-local-files}

Para guardar el dibujo, usa los botones «Save As» o «Save» de la barra de herramientas:

<img src="/v4/images/media/image2.png" alt="The toolbar buttons for Save and Save As"  />


### Google en el navegador
{: #browser-google}

Tu primer dibujo está completo. Para cambiarle el nombre:

1. Haz clic en el nombre del dibujo en la parte superior (por ejemplo, `tCad1.dsn`).
2. Cámbiale el nombre a `First Drawing.dsn`.
3. Pulsa Enter.

<img src="/v4/images/media/image13.png" alt="Editable drawing title field used to rename the current design" style="width: 4.15625in; height: 0.92708in;" />

Guárdalo en Google Drive con el icono **Save**.

Para volver a cargarlo desde Google Drive:

1. Abre <https://drive.google.com/drive/>.
2. Busca el dibujo.
3. Haz clic con el botón derecho y elige **Open with -> TinyCAD**.

<img src="/v4/images/media/image14.png" alt="Google Drive context menu showing Open with TinyCAD for a drawing file" style="width: 5.09138in; height: 3.90625in;" />

También puedes cambiar el nombre y eliminar diseños de TinyCAD en Google Drive.

### Aplicación de escritorio
{: #desktop-app}

Tu primer dibujo está completo. Para guardarlo desde la aplicación de escritorio:

1. Abre **File -> Save As**.
2. Elige una carpeta de tu ordenador.
3. Guarda el dibujo como `First Drawing.dsn`.

Para volver a cargarlo más adelante:

1. Abre **File -> Open**.
2. Ve a `First Drawing.dsn`.
3. Selecciona el archivo y ábrelo.

TinyCAD para escritorio usa el mismo formato `.dsn` que TinyCAD en el navegador. Puedes
descargar un dibujo de Google Drive y abrirlo en la aplicación de escritorio.

Del mismo modo, puedes usar en la versión de TinyCAD basada en el navegador los dibujos que hayas creado con
la versión de escritorio.

</div>

## Lecturas adicionales
{: #further-reading}

Para obtener información sobre símbolos y bibliotecas personalizados, continúa con
[Bibliotecas de símbolos personalizadas](../Custom-symbol-libraries/).

- Volver a [Dibujo](../User-guide/)
- Volver al [índice de v4](../CONTENTS/)
