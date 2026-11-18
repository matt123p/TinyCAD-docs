---
layout: default
---
# Etiquetas
{: #labels}

Las etiquetas son nombres de red eléctricamente activos. Todos los cables con el mismo nombre de etiqueta se
consideran conectados, incluso cuando no hay ningún cable físico dibujado entre ellos.

Use etiquetas para:

- conectar puntos muy alejados en la misma hoja,
- reducir el desorden visual en esquemas densos,
- conectar redes entre hojas del mismo dibujo,
- enlazar los pines de símbolos jerárquicos con redes internas.

## Cómo funcionan las etiquetas
{: #how-labels-work}

- Una etiqueta se conecta al cable que tiene debajo.
- La conectividad se basa en el **texto de la etiqueta**, no en la ubicación.
- La **forma** de la etiqueta es solo un estilo visual y no cambia la conectividad,
	la generación de listas de redes ni el comportamiento de DRC.
- Use el mismo nombre en todos los lugares que deban formar una única red eléctrica.

## Directrices para nombrar etiquetas
{: #label-naming-guidelines}

- Use nombres de red claros, como `RESET`, `SCL`, `+5V`, `ADC_IN0`.
- Mantenga una nomenclatura coherente en todo el diseño.
- Evite variaciones accidentales (`GND` frente a `GN D`, `CLK` frente a `Clk`), porque estas
	crean redes distintas.
- Si los nombres incluyen números, al colocar etiquetas repetidamente se pueden incrementar o reducir
	los sufijos numéricos mediante las opciones de nombre de Repeat Direction.

## Formas de las etiquetas y por qué usarlas
{: #label-shapes-and-why-to-use-them}

TinyCAD ofrece varias formas de etiqueta en las opciones de la herramienta de etiquetas. Elija la forma
por legibilidad y estilo de dibujo; todas las formas son eléctricamente equivalentes.

Motivos habituales para usar formas distintas:

- separar las redes que se reutilizan con frecuencia de las redes locales de uso puntual,
- hacer que las conexiones fuera de hoja o entre bloques destaquen visualmente,
- indicar la dirección o la finalidad de la señal a los lectores,
- ajustarse al estilo de esquemas de su equipo o empresa.

Regla práctica: elija un conjunto reducido de formas y úselas de manera coherente para que los lectores
puedan revisar rápidamente el diagrama.

## Colocar y editar etiquetas
{: #placing-and-editing-labels}

1. Seleccione la herramienta Etiqueta (Label).
2. Introduzca el nombre de la red.
3. Elija la orientación y la forma según sea necesario.
4. Coloque la etiqueta en el cable de destino.
5. Repita el proceso en todos los lugares que deban conectarse a esa red.


## Etiquetas en dibujos de varias hojas
{: #labels-with-multi-sheet-drawings}

En un archivo de dibujo de varias hojas, las etiquetas son el método habitual para conectar redes entre
hojas. Consulte [Dibujos de varias hojas](../Multiple-Sheet-Drawings/) para ver un ejemplo práctico y un vídeo sobre la gestión de hojas y las etiquetas entre hojas.

- El mismo nombre de etiqueta en distintas hojas representa la misma red eléctrica.
- Este enlace entre hojas se utiliza al generar listas de redes.
- Use nombres estables e inequívocos para las redes compartidas (`+3V3`, `GND`, `I2C_SDA`,
	`I2C_SCL`, etc.).

Flujo de trabajo recomendado:

1. Defina de antemano los nombres de red comunes.
2. Reutilice exactamente esos nombres en cada hoja.
3. Ejecute las comprobaciones de DRC y de la lista de redes para detectar pronto los errores de nomenclatura.

- Volver a [Dibujo](../User-guide/)
- Volver a [contenido de v4](../)
