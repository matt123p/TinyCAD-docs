---
layout: default
---
# Comprobación de reglas de diseño
{: #design-rules-check}

En v4, **la comprobación de reglas de diseño funciona igual que en v3**.

Use la comprobación de reglas de diseño para encontrar problemas graves de conectividad en el esquema antes de generar resultados como listas de conexiones o VHDL.

Comprueba el cableado y las combinaciones de tipos de pin para detectar errores eléctricos comunes (por ejemplo, salidas en conflicto conectadas entre sí). **No** garantiza que el circuito funcione correctamente.

Procure que no haya errores de diseño para aumentar la confianza en la corrección del esquema.

## Ejecutar la comprobación de reglas de diseño
{: #run-design-rules-check}

1. Abra el diseño.
2. Ejecute **Comprobar reglas de diseño (Check Design Rules)** en el menú Herramientas especiales.
3. En el cuadro de diálogo de reglas, active o desactive las comprobaciones de reglas que desee.
4. Seleccione **Aceptar (OK)** para ejecutar la comprobación.

{% include video-player.html
	src="/v4/images/video/Video 8.mp4"
	width=1622
	height=952
	caption="Vídeo explicativo que muestra cómo ejecutar y utilizar el comprobador de reglas de diseño."
%}


## Interpretar los resultados
{: #reading-the-results}

- Cada error detectado se marca en el esquema con un círculo rojo.
- Junto al diseño aparece una lista de errores.
- Al seleccionar un error de la lista, se centra esa ubicación en el dibujo.

## Borrar y volver a comprobar
{: #clear-and-re-check}

- Seleccione **Cerrar (Close)** en la lista de errores para quitar todos los marcadores de error actuales.
- Los círculos de error son marcadores temporales de revisión: no se guardan con el diseño.

- Volver a [Avanzado](../Advanced/)
- Volver al [contenido de v4](../CONTENTS/)
