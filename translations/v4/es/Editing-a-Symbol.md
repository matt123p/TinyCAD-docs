---
layout: default
---
# Edición de un símbolo
{: #editing-a-symbol}

## Cómo funcionan los símbolos en TinyCAD
{: #how-symbols-work-in-tinycad}

Los símbolos se crean a partir de objetos normales disponibles en la barra de herramientas. Pueden contener
cualquiera de estos objetos, excepto otros símbolos.

Si el símbolo contiene objetos con funciones especiales (como un elemento de alimentación
o un cable), esos objetos se tratarán como si fueran
anotaciones.

Todas sus funciones especiales se pierden al usarlos en un símbolo. Solo los **pines** definen
puntos de conexión eléctrica.

Resumen:
- un símbolo es un gráfico reutilizable con atributos
- la conectividad eléctrica se define mediante **pines**
- y los símbolos se almacenan en **bibliotecas** (`.tclib`)

## Antes de empezar
{: #before-you-start}

Esta página presupone que ya tienes abierta una biblioteca para editar. Los pasos para
abrir o crear una biblioteca dependen de si usas TinyCAD Web o
la aplicación de escritorio; por tanto, empieza por [Bibliotecas de símbolos personalizadas](../Custom-symbol-libraries/).

Si buscas examinar y colocar símbolos, en lugar de editarlos, consulta [Uso de bibliotecas de símbolos](../Using-Symbol-Libraries/).

## Abrir o crear el símbolo
{: #open-or-create-the-symbol}

1. Abre la biblioteca.
2. Para editar un símbolo existente, haz clic en él en la lista de símbolos de la biblioteca.
3. Para crear un símbolo nuevo, haz clic en el botón `+` de la lista de símbolos.
4. El símbolo seleccionado o nuevo se carga en el lienzo del editor.

A continuación, puedes modificar los gráficos, los pines y los atributos del símbolo.

{% include video-player.html
	src="/v4/images/video/Video 12.mp4"
	width=1532
	height=978
	caption="Tutorial en vídeo que muestra cómo editar una biblioteca."
%}


## Dibujar la forma del símbolo (gráficos)
{: #drawing-the-symbol-shape-graphics}

Usa las herramientas de dibujo estándar para crear el contorno del símbolo:

- líneas/polilíneas para los bordes del cuerpo,
- rectángulos/elipses/arcos para contornos de encapsulado habituales,
- texto para marcas internas opcionales.

Procura que el símbolo sea legible con el nivel de zoom normal del esquema. Las formas sencillas suelen funcionar
mejor que los dibujos muy ornamentados.

## Añadir pines
{: #adding-pins}

Los pines son la única parte eléctricamente activa de un símbolo.

Para cada pin, establece:

- **Número de pin** (obligatorio y único dentro de una unidad),
- **Nombre de pin** (opcional, pero muy recomendable),
- **Tipo eléctrico** (necesario para un DRC preciso),
- **Estilo/forma del pin** (estilo visual),
- **Visibilidad** del texto del nombre/número del pin, según sea necesario.

Coloca los pines con cuidado sobre la cuadrícula para que sea sencillo cablear el esquema.

{% include video-player.html
	src="/v4/images/video/Video 13.mp4"
	width=1532
	height=978
	caption="Tutorial en vídeo que muestra cómo añadir pines."
%}


## Panel de pines
{: #pin-panel}

Puedes editar los pines en el panel **Pin**, en el área del **panel inferior**.

Los cambios del panel Pin son **inmediatos**: cada cambio de campo envía al instante
una acción de actualización del pin (no hay un paso independiente de Aceptar/Aplicar).

Secciones del panel Pin:

1. **Nombre**
	- Casilla Mostrar (`show_name`)
	- Campo de texto Nombre (`name`)
	- Casilla Centrar en el pin (`centre_name`)
2. **Número**
	- Casilla Mostrar (`show_number`)
	- Campo de texto Número (`number`)
	- Campo numérico Desplazamiento (`number_pos`)
3. **Tipo**
	- Menú desplegable Forma (`which`)
	- Menú desplegable Eléctrico (`elec`)
	- Campo numérico Longitud (`length`, intervalo de la interfaz: 5..50)

Notas:

- La forma controla la apariencia del símbolo y algunos comportamientos visuales especiales.
- Las formas `Cross` y los tipos eléctricos `Not Connected` dibujan un marcador en forma de cruz.
- Los estilos de forma `Power` y `Hidden` se representan con el color de los pines ocultos.

## Tipos eléctricos de pin y comportamiento del DRC
{: #pin-electrical-types-and-drc-behavior}

Seleccionar el tipo eléctrico correcto es esencial. El DRC usa estos tipos para detectar
errores de conexión.

Valores actuales en el código fuente de TinyCAD v4 (`elec`):

- `0` Entrada
- `1` Salida
- `2` Triestado
- `3` Colector abierto
- `4` Pasivo
- `5` Entrada/Salida
- `6` Sin conexión
- `7` Libre
- `8` Sin especificar
- `9` Entrada de alimentación
- `10` Salida de alimentación
- `11` Emisor abierto

Recomendaciones generales:

- Marca las señales realmente activas como **Salida**.
- Marca las señales que solo reciben como **Entrada**.
- Usa **Entrada de alimentación/Salida de alimentación** cuando la semántica de suministro eléctrico sea relevante para el DRC.
- Usa **Sin conexión** solo para indicar que el pin debe permanecer intencionadamente sin conectar.
- Usa **Libre**/**Sin especificar** con cautela y de forma coherente en toda la biblioteca.

Implicaciones prácticas para el DRC:

- Un tipo de pin incorrecto puede provocar errores DRC falsos (o impedir que se detecten errores reales).
- Los nombres de los pines de alimentación deben coincidir con los nombres de alimentación previstos para que el comportamiento automático funcione.

## Pines de alimentación y ocultos
{: #power-and-hidden-pins}

Los pines de alimentación y los pines ocultos se muestran al editar el símbolo, pero normalmente
se ocultan cuando el símbolo se coloca en un dibujo.

En el caso concreto de los **pines de alimentación**:

- El nombre del pin actúa como nombre de la red de alimentación.
- La conectividad es automática cuando coinciden los nombres de alimentación.
- Normalmente no se dibujan cables directamente hasta estos pines de alimentación ocultos en la vista del símbolo
	colocado.

En el caso de los **pines ocultos**:

- Siguen estando eléctricamente activos.
- Úsalos cuando quieras dibujar tu propia forma de pin y sus etiquetas.

## Símbolos multiparte (unidades por encapsulado)
{: #multi-part-symbols-parts-per-package}

TinyCAD admite dispositivos con varias unidades lógicas en un mismo encapsulado (por
ejemplo, puertas cuádruples).

Se utilizan dos estilos de símbolos multiparte:

1. Símbolos multiparte **homogéneos**:
	 - las unidades comparten el mismo contorno,
	 - normalmente solo se diferencian por los números de pin.
2. Símbolos multiparte **heterogéneos**:
	 - las unidades pueden tener contornos distintos,
	 - también pueden tener conjuntos de pines/funciones distintos.

Usa unidades homogéneas cuando sean intercambiables; usa unidades heterogéneas cuando cada una
tenga una función distinta.

### Flujo de trabajo multiparte
{: #multi-part-workflow}

1. Decide primero si serán homogéneos o heterogéneos.
2. Establece el número de unidades por encapsulado.

Para unidades homogéneas:
- La primera unidad define la forma del símbolo y la disposición de los pines

Para unidades heterogéneas:
- Puedes dibujar una forma distinta para cada unidad

## Atributos y propiedades del símbolo
{: #symbol-attributes-and-properties}

Puedes editar los atributos del símbolo en el panel **Symbol**, en el **panel inferior**.

Además de los gráficos y los pines, define cuidadosamente los atributos del símbolo:

- Nombre principal del símbolo (y alias, si se usan),
- Formato predeterminado de **Ref** (por ejemplo `U?`, `R?`, `C?`),
- **Nombre/Valor** predeterminado,
- Atributos/parámetros adicionales (por ejemplo, campos de encapsulado/footprint, modelo de
	simulación o metadatos específicos del proyecto).

## Guardar, duplicar, cambiar el nombre y eliminar
{: #save-duplicate-rename-delete}

Acciones habituales para administrar símbolos al editar una biblioteca:

- **Guardar/actualizar** el símbolo actual para guardar los cambios.
- **Duplicar** para crear variantes (recomendado en lugar de modificar de forma
	destructiva un símbolo base).
- **Cambiar el nombre** para normalizar la nomenclatura.
- **Eliminar** símbolos obsoletos (deshacer si se eliminan por accidente).

Usa la duplicación para crear variantes de encapsulado/valor que compartan los gráficos, pero difieran en
los valores predeterminados.

## Lista de comprobación antes de publicar un símbolo
{: #validation-checklist-before-publishing-a-symbol}

Antes de usar un símbolo de forma generalizada, comprueba que:

1. Los pines estén sobre la cuadrícula y sean fáciles de cablear.
2. Los números de pin estén completos y sean únicos para cada unidad.
3. Los tipos eléctricos estén correctamente definidos para todos los pines.
4. El comportamiento de los pines de alimentación/ocultos sea intencionado.
5. La configuración multiparte (si la hay) sea correcta.
6. Los valores predeterminados del nombre/referencia sean adecuados.
7. El símbolo sea legible con el nivel de zoom normal del dibujo.

A continuación, coloca el símbolo en un esquema de prueba y ejecuta el DRC.

## Consejos para la resolución de problemas
{: #troubleshooting-tips}

- **Los cables no se conectan al símbolo:** comprueba la ubicación de los extremos de los pines y
	la alineación con la cuadrícula.
- **Errores DRC inesperados:** verifica el tipo eléctrico de cada pin.
- **Comportamiento incorrecto de una unidad en símbolos multiparte:** vuelve a comprobar la selección de unidades y la numeración de pines
	de cada unidad.
- **La alimentación no se conecta automáticamente:** comprueba que los nombres de los pines de alimentación coincidan con los nombres
	de red previstos.

## Páginas relacionadas
{: #related-pages}

- [Bibliotecas de símbolos personalizadas](../Custom-symbol-libraries/)
- [Uso de bibliotecas de símbolos](../Using-Symbol-Libraries/)
- [Símbolos](../Symbols/)
- [Comprobación de reglas de diseño](../Design-Rules-Check/)

- Volver a [Símbolos y bibliotecas](../Symbols-and-Libraries/)
- Volver al [contenido de v4](../CONTENTS/)
