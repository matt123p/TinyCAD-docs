---
layout: default
---
# Edición de un símbolo
{: #editing-a-symbol}

Para generar un símbolo a partir de una hoja de datos o añadir varios componentes a una biblioteca abierta, consulta la [guía del asistente de IA](../AI-Assistant/). Puedes perfeccionar los resultados con las herramientas de edición de esta página.

## Cómo funcionan los símbolos en TinyCAD
{: #how-symbols-work-in-tinycad}

Los símbolos se crean a partir de objetos normales de la barra de herramientas. Pueden contener
cualquiera de estos objetos, excepto otros símbolos.

Si el símbolo contiene objetos con funciones especiales (como un elemento de alimentación
o un cable), esos objetos se tratarán como anotaciones.

Todas sus funciones especiales se pierden al usarlos en un símbolo. Solo los **pines** definen
puntos de conexión eléctrica.

Resumen:
- un símbolo es un gráfico reutilizable más atributos
- la conectividad eléctrica se define mediante **pines**
- y los símbolos se almacenan en **bibliotecas** (`.tclib`)

## Antes de empezar
{: #before-you-start}

Esta página presupone que ya tienes una biblioteca abierta para editarla. Los pasos para
abrir o crear una biblioteca dependen de si usas TinyCAD Web o la aplicación de escritorio,
así que empieza por [Bibliotecas de símbolos personalizadas](../Custom-symbol-libraries/).

Si buscas cómo explorar y colocar símbolos en lugar de editarlos, consulta [Uso de bibliotecas de símbolos](../Using-Symbol-Libraries/).

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
	caption="Vídeo explicativo sobre cómo editar una biblioteca."
%}


## Dibujar la forma del símbolo (gráficos)
{: #drawing-the-symbol-shape-graphics}

Usa las herramientas de dibujo estándar para crear el contorno del símbolo:

- líneas/polilíneas para los bordes del cuerpo,
- rectángulos/elipses/arcos para los contornos habituales de encapsulados,
- texto para las marcas internas opcionales.

Procura que el símbolo sea legible con el nivel de zoom normal del esquema. Las formas sencillas suelen funcionar
mejor que los diseños muy ornamentados.

## Añadir pines
{: #adding-pins}

Los pines son la única parte eléctricamente activa de un símbolo.

Para cada pin, establece:

- **Número de pin** (obligatorio y único dentro de una unidad),
- **Nombre del pin** (opcional, pero muy recomendable),
- **Tipo eléctrico** (obligatorio para un DRC preciso),
- **Estilo/forma del pin** (estilo visual),
- **Visibilidad** del texto del nombre/número del pin según sea necesario.

Coloca los pines cuidadosamente en la cuadrícula para que sea sencillo cablear el esquema.

{% include video-player.html
	src="/v4/images/video/Video 13.mp4"
	width=1532
	height=978
	caption="Vídeo explicativo sobre cómo añadir pines."
%}


## Panel de pines
{: #pin-panel}

Puedes editar los pines en el panel **Pin**, en el área del **panel inferior**.

Los cambios del panel Pin se aplican **en tiempo real**: cada cambio de campo ejecuta de inmediato
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
	- Lista desplegable Forma (`which`)
	- Lista desplegable Eléctrico (`elec`)
	- Campo numérico Longitud (`length`, intervalo de la interfaz: 5..50)

Notas:

- La forma controla la apariencia del símbolo y algunos comportamientos visuales especiales.
- Tanto la forma `Cross` como el tipo eléctrico `Not Connected` dibujan una marca en forma de cruz.
- Los estilos de forma `Power` y `Hidden` se muestran con el color de los pines ocultos.

## Tipos eléctricos de pin y comportamiento del DRC
{: #pin-electrical-types-and-drc-behavior}

Seleccionar el tipo eléctrico correcto es fundamental. El DRC usa estos tipos para detectar
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

Pautas generales:

- Marca las señales realmente accionadas como **Salida**.
- Marca las señales que solo reciben como **Entrada**.
- Usa **Entrada de alimentación/Salida de alimentación** cuando la semántica de accionamiento de alimentación sea importante para el DRC.
- Usa **Sin conexión** solo para pines que deban permanecer intencionadamente sin conexión.
- Usa **Libre**/**Sin especificar** con precaución y de forma coherente en toda la biblioteca.

Implicaciones prácticas para el DRC:

- Asignar un tipo incorrecto a un pin puede provocar errores de DRC falsos (o pasar por alto errores reales).
- Los nombres de los pines de alimentación deben coincidir con los nombres de alimentación previstos para que funcione el comportamiento automático.

## Pines de alimentación y ocultos
{: #power-and-hidden-pins}

Los pines de alimentación y los ocultos se muestran al editar el símbolo, pero normalmente
se ocultan cuando el símbolo se coloca en un dibujo.

En el caso concreto de los **pines de alimentación**:

- El nombre del pin actúa como nombre de la red de alimentación.
- La conectividad es automática cuando coinciden los nombres de alimentación.
- Normalmente no se dibujan cables directamente hasta estos pines de alimentación ocultos en la
	vista del símbolo colocado.

En el caso de los **pines ocultos**:

- Siguen estando eléctricamente activos.
- Úsalos cuando quieras dibujar tu propia forma de pin y sus etiquetas.

## Símbolos multipartes (unidades por encapsulado)
{: #multi-part-symbols-parts-per-package}

TinyCAD admite dispositivos con varias unidades lógicas en un mismo encapsulado (por
ejemplo, puertas cuádruples).

Se utilizan dos estilos de símbolos multipartes:

1. Símbolos multipartes **homogéneos**:
	 - las unidades comparten el mismo contorno,
	 - normalmente solo se diferencian en los números de pin.
2. Símbolos multipartes **heterogéneos**:
	 - las unidades pueden tener contornos diferentes,
	 - también pueden tener conjuntos de pines o funciones diferentes.

Usa el estilo homogéneo cuando las unidades sean intercambiables; usa el heterogéneo cuando cada unidad
tenga una función distinta.

### Flujo de trabajo con símbolos multipartes
{: #multi-part-workflow}

1. Decide primero si usarás el estilo homogéneo o heterogéneo.
2. Establece el número de unidades por encapsulado.

Para las unidades homogéneas:
- La primera unidad define la forma del símbolo y la disposición de los pines

Para las unidades heterogéneas:
- Puedes dibujar una forma diferente para cada unidad

## Atributos y propiedades del símbolo
{: #symbol-attributes-and-properties}

Puedes editar los atributos del símbolo en el panel **Symbol**, en el **panel inferior**.

Además de los gráficos y los pines, define cuidadosamente los atributos del símbolo:

- Nombre principal del símbolo (y alias, si se usan),
- Formato predeterminado de **Ref** (por ejemplo, `U?`, `R?`, `C?`),
- **Nombre/Valor** predeterminado,
- Atributos/parámetros adicionales (por ejemplo, campos de encapsulado/huella, campos del modelo de
	simulación o metadatos específicos del proyecto).

## Guardar, duplicar, cambiar el nombre y eliminar
{: #save-duplicate-rename-delete}

Acciones habituales para administrar símbolos al editar una biblioteca:

- **Guardar/actualizar** el símbolo actual para guardar los cambios.
- **Duplicar** para crear variantes (se recomienda en lugar de modificar destructivamente un símbolo base).
- **Cambiar el nombre** al estandarizar la nomenclatura.
- **Eliminar** símbolos obsoletos (deshaz la acción si los eliminas por accidente).

Usa la duplicación para crear variantes de encapsulado/valor que compartan los gráficos, pero tengan
valores predeterminados diferentes.

## Lista de comprobación para validar un símbolo antes de publicarlo
{: #validation-checklist-before-publishing-a-symbol}

Antes de usar ampliamente un símbolo, comprueba que:

1. Los pines estén en la cuadrícula y sean fáciles de cablear.
2. Los números de pin estén completos y sean únicos en cada unidad.
3. Los tipos eléctricos estén correctamente asignados a todos los pines.
4. El comportamiento de los pines de alimentación/ocultos sea intencionado.
5. La configuración multipartes (si la hay) sea correcta.
6. Los valores predeterminados del nombre y la referencia sean adecuados.
7. El símbolo sea legible con el nivel de zoom normal del dibujo.

A continuación, coloca el símbolo en un esquema de prueba y ejecuta el DRC.

## Consejos para solucionar problemas
{: #troubleshooting-tips}

- **Los cables no se conectan al símbolo:** comprueba la posición de los extremos de los pines y su
	alineación con la cuadrícula.
- **Errores de DRC inesperados:** verifica el tipo eléctrico de todos los pines.
- **Comportamiento incorrecto de una unidad en símbolos multipartes:** vuelve a comprobar la selección de la unidad y la
	numeración de los pines de cada unidad.
- **La alimentación no se conecta automáticamente:** comprueba que los nombres de los pines de alimentación coincidan con los nombres de red
	previstos.

## Páginas relacionadas
{: #related-pages}

- [Bibliotecas de símbolos personalizadas](../Custom-symbol-libraries/)
- [Uso de bibliotecas de símbolos](../Using-Symbol-Libraries/)
- [Símbolos](../Symbols/)
- [Comprobación de reglas de diseño](../Design-Rules-Check/)

- Volver a [Símbolos y bibliotecas](../Symbols-and-Libraries/)
- Volver al [índice de v4](../CONTENTS/)
