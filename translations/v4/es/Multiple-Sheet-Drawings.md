---
layout: default
---
# Dibujos con varias hojas
{: #multiple-sheet-drawings}

Un dibujo de TinyCAD puede contener varias hojas de esquema en **un solo archivo**. Cada hoja tiene su propia área de dibujo y una pestaña debajo del lienzo. Usa las pestañas para trabajar en una hoja a la vez; en conjunto, las hojas de esquema describen un circuito.

## ¿Por qué usar varias hojas?
{: #why-use-multiple-sheets}

Las hojas múltiples te permiten organizar un diseño en secciones fáciles de entender, en lugar de reducirlo todo para que quepa en una página abarrotada. Por ejemplo:

| Hoja | Qué podría contener |
| --- | --- |
| **Alimentación** | Conector de entrada, protección, reguladores y líneas de alimentación |
| **Control** | Procesador, reloj, reinicio y conexiones de programación |
| **Sensores** | Entradas de medición y sus circuitos de interfaz |
| **Salidas** | Controladores, relés, motores, pantallas o conectores externos |

Así es más fácil dibujar, revisar e imprimir cada sección en un tamaño legible. Puedes mantener juntos los componentes relacionados, asignar un propósito claro a cada página y ordenar las páginas en una secuencia de lectura útil. Para un diseño pequeño, una sola hoja puede seguir siendo más clara.

Una hoja forma parte del dibujo actual; no es un archivo ni una pestaña del navegador aparte. Abrir dos archivos de dibujo que no están relacionados no los conecta, aunque contengan etiquetas idénticas.

## Crear y cambiar de hoja
{: #create-and-switch-sheets}

1. Abre el dibujo y busca las pestañas de hoja debajo del lienzo.
2. Elige **+** junto a las pestañas. Su descripción emergente es **Add new sheet**.
3. Introduce un **Sheet Name**, como `Control`, y elige **Add**.
4. La nueva hoja se activa. Coloca allí componentes y cables, o mueve elementos seleccionados desde otra hoja con Cortar y Pegar.
5. Selecciona la pestaña de cualquier hoja para volver a ella. Cambiar de hoja no descarta su contenido.

Usa nombres distintivos y descriptivos para que quien lea el esquema pueda encontrar la sección que necesita.

## Cambiar el nombre de una hoja
{: #rename-a-sheet}

1. Selecciona la pestaña de la hoja.
2. Abre el pequeño menú de flecha junto a su nombre.
3. Elige **Rename**, introduce el nuevo **Sheet Name** y, a continuación, elige **Rename** en el cuadro de diálogo.

Cambiar el nombre modifica el nombre de la página. No cambia las referencias de los componentes ni las etiquetas de red, y tampoco modifica las conexiones eléctricas.

## Cambiar el orden de las hojas
{: #change-the-sheet-order}

Arrastra una pestaña de hoja sobre otra para moverla a esa posición. También puedes seleccionar una pestaña, abrir su menú de flecha y elegir **Move left** o **Move right** para moverla una posición cada vez.

Cambiar el orden modifica la secuencia de las páginas, no los componentes ni las conexiones del circuito. Úsalo para colocar primero la sección de alimentación, agrupar funciones relacionadas o poner las páginas auxiliares después del circuito principal. Arrastra la **pestaña** para reordenar las páginas; si arrastras un componente, moverás ese componente.

## Vídeo: organizar hojas y conectarlas con etiquetas
{: #video-organise-sheets-and-connect-them-with-labels}

El tutorial comienza con **Open Example → SPICE tutorial → divider**. Cambia el nombre de la hoja Circuit a Power, crea Control, reordena las pestañas y luego mueve R2 a Control. Las etiquetas OUT coincidentes y las conexiones a tierra denominadas 0 vuelven a conectar el divisor entre las dos hojas de esquema. La vista Netlist confirma que R1 y R2 comparten la red OUT.

{% include video-player.html src="/v4/videos/simulation/multiple-sheets.mp4" poster="/v4/videos/simulation/multiple-sheets.jpg" caption="Crea, cambia el nombre y reordena las hojas; luego usa etiquetas coincidentes para conectar un divisor entre Power y Control." %}

El ejemplo también contiene una hoja Simulation marcada con un icono de reloj. Esa hoja almacena ajustes y resultados de análisis; es distinta de una página de esquema. Todas las hojas de esquema siguen contribuyendo al mismo circuito simulado.

## Crear conexiones entre hojas
{: #make-connections-between-sheets}

Un cable no puede continuar físicamente en otra página. En su lugar, usa **etiquetas eléctricamente activas con el mismo nombre** en los puntos que quieras conectar. TinyCAD trata esos puntos como una misma red en todas las hojas de esquema del dibujo.

Por ejemplo, una salida de regulador etiquetada `+3V3` en Power puede alimentar una entrada del procesador etiquetada `+3V3` en Control. Una señal etiquetada `RESET` puede conectar un circuito de reinicio en una hoja con un procesador en otra. Las etiquetas deben estar unidas a los cables o pines previstos.

### Colocar una etiqueta de red compartida
{: #place-a-shared-net-label}

1. En la primera hoja, dibuja el cable local hasta el pin del componente como de costumbre.
2. Selecciona la herramienta **Label** y coloca su punto de conexión eléctrica sobre ese cable o pin. No basta con dibujar texto cerca.
3. Edita el texto de la etiqueta para asignarle un nombre claro, como `RESET` o `I2C_SDA`. Selecciona el texto de la etiqueta para editarlo; sustituye el texto predeterminado `Label`.
4. Cambia a la otra hoja y coloca otra etiqueta Label en el cable o pin que deba unirse a la misma red.
5. Introduce el **mismo nombre exacto**, con la misma ortografía, espacios y mayúsculas y minúsculas.
6. Repite el proceso en las demás hojas donde se necesite esa misma red eléctrica.

Usa la [herramienta Label](../Labels/), no la [herramienta Text](../Text/). Una nota que diga RESET documenta el dibujo; una etiqueta Label que diga RESET crea una conexión eléctrica.

### Ejemplo práctico: un divisor en dos hojas
{: #worked-example-a-divider-on-two-sheets}

Divide el divisor convencional de 5 V en una sección de alimentación y otra de carga:

| Hoja | Componentes | Conexiones compartidas |
| --- | --- | --- |
| **Power** | V1 = 5 V y R1 = 1 kΩ | El cable de salida de R1 lleva la etiqueta **OUT**; el retorno de V1 se conecta a tierra **0**. |
| **Control** | R2 = 1 kΩ | El pin superior de R2 lleva la etiqueta **OUT** y el inferior se conecta a un símbolo de alimentación de tierra llamado **0**. |

OUT conecta R1 con R2 entre las hojas. Los nombres de tierra coincidentes conectan el retorno de R2 a la tierra 0 de Power. No hay ningún cable dibujado entre las páginas, pero el circuito eléctrico sigue siendo V1 → R1 → R2 → retorno. Con los valores originales, la salida del punto de operación sigue siendo 2.5 V.

En el vídeo, R2 se mueve con **Cut and Paste**, conservando su referencia en lugar de crear otro R2. Al añadir más componentes, mantén las referencias únicas en todo el dibujo para que las listas de redes e informes identifiquen la pieza prevista.

## Los nombres de las etiquetas se aplican a todo el dibujo
{: #label-names-apply-to-the-whole-drawing}

Los nombres compartidos son útiles, pero también facilitan la conexión accidental de secciones no relacionadas. Una etiqueta llamada `OUT` en tres hojas distintas conecta las tres ubicaciones; no es local a cada página. Usa nombres más específicos, como `SENSOR_OUT` y `AUDIO_OUT`, cuando las señales deban permanecer separadas.

Los nombres y el orden de las hojas no proporcionan aislamiento eléctrico. La forma de una etiqueta también es solo una convención visual: las etiquetas sencillas, de entrada, de salida y bidireccionales con el mismo nombre pertenecen a la misma red. Elige las formas para ayudar a los lectores a seguir la dirección prevista de la señal, y los nombres para definir la conectividad.

[Los símbolos de alimentación](../Power-symbols/) también proporcionan conexiones de alimentación compartidas con nombre. Mantén los nombres coherentes: `+3V3` y `3V3` son nombres distintos. Para SPICE, usa una conexión real al nodo **0**; una red separada llamada GND no se convierte automáticamente en la referencia de tierra del simulador.

## Comprobar las conexiones entre hojas
{: #check-the-cross-sheet-connections}

Usa el menú de modo del panel de lista inferior para cambiar de **Symbols** a **Netlist**. Busca la etiqueta compartida e inspecciona las referencias de componentes y los números de pin conectados. La columna Sheet indica el elemento principal representado por la fila; la columna Symbols puede incluir componentes de otras hojas que pertenezcan a esa misma red. En el ejemplo, OUT incluye tanto R1 como R2.

Si falta la conexión, comprueba el punto de unión de la etiqueta y que su texto sea exactamente igual en ambas páginas. Si hay componentes no relacionados que comparten una red, busca si se ha reutilizado el nombre de alguna etiqueta en otra parte del dibujo. [La comprobación de reglas de diseño (Design Rules Check)](../Design-Rules-Check/) puede ayudar a identificar problemas eléctricos, pero no puede determinar si querías que dos redes con el mismo nombre estuvieran separadas.

Consulta [Netlist Editor](../Netlist-Editor/) y [Labels](../Labels/) para obtener más detalles. En un dibujo de simulación, vuelve a ejecutar el análisis después de cambiar el circuito para que el resultado refleje todas las hojas de esquema actuales.

## Guardar el dibujo completo
{: #save-the-complete-drawing}

**Save** guarda todas las hojas juntas. Los dibujos normales usan `.dsn`; los dibujos que contienen contenido de simulación usan [`.dzn`](../Simulation/#dzn-simulation-drawings). No es necesario guardar cada hoja por separado.

- Volver a [Drawing](../User-guide/)
