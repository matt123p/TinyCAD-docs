---
layout: default
---
# Asistente de IA
{: #ai-assistant}

El asistente de IA de TinyCAD convierte instrucciones escritas, hojas de datos e imágenes de circuitos en símbolos y dibujos editables. Funciona junto con el editor habitual: puedes pedirle que cree un circuito, añada componentes al dibujo que ya está abierto, cree una biblioteca de símbolos o explique una conexión existente.

**Solo para escritorio:** El asistente de IA (chatbot) solo está disponible en la aplicación de escritorio de TinyCAD. No está disponible en la versión para navegador.

Para usarlo, abre **Chat** en la barra de herramientas de la aplicación de escritorio. Conecta un proveedor de IA antes de enviar tu primer mensaje; a continuación se explican las opciones de conexión.

## Qué puede hacer
{: #what-it-can-do}

| Tarea | Cómo ayuda el asistente |
| --- | --- |
| **Crear un símbolo de componente** | Generar gráficos editables, números físicos de patilla, nombres de patilla y tipos eléctricos a partir de un componente y encapsulado especificados. Adjunta la hoja de datos del fabricante cuando sea importante conocer la asignación de patillas. |
| **Crear o ampliar una biblioteca de símbolos** | Añadir varios componentes reutilizables a la biblioteca `.tclib` abierta para editar, incluidos nombres, descripciones y asignaciones de patillas. Se pueden crear colecciones más grandes en lotes sucesivos. |
| **Dibujar un circuito** | Buscar símbolos adecuados, colocar componentes, establecer valores y referencias, conectar patillas con cables y etiquetas, y añadir notas explicativas. |
| **Ampliar un dibujo existente** | Añadir un conector, un condensador de desacoplo, un sensor, un controlador u otro bloque funcional, conservando el resto del dibujo. |
| **Explicar o inspeccionar un circuito** | Leer el dibujo y la netlist actuales, describir las rutas de señal, identificar las patillas de una red e investigar la conectividad o los errores de las reglas de diseño. |
| **Reconstruir un dibujo a partir de un documento** | Leer un PDF adjunto o una imagen de circuito y crear un punto de partida editable, preguntando sobre las partes o conexiones que no estén claras. |
| **Ordenar una disposición** | Reorganizar una hoja completa o una parte especificada, usando las comprobaciones de disposición y conexión de TinyCAD. |
| **Exportar un resultado** | Generar un dibujo o una biblioteca de símbolos descargables cuando pidas explícitamente un archivo. |

Los resultados son objetos de TinyCAD que puedes seleccionar, editar, cablear y guardar. En un dibujo, los símbolos recién creados se colocan listos para conectarlos. En una biblioteca, los componentes nuevos pasan a formar parte de ella. No tienes que copiar XML de la conversación ni configurar un servidor MCP aparte.

El asistente busca primero en las [bibliotecas incluidas](../Bundled-Libraries/) y, si es necesario, busca después en la colección pública de TinyCAD.net. Puede buscar en colecciones incluidas que no estén seleccionadas actualmente en el selector de bibliotecas. La búsqueda de símbolos públicos requiere conexión a Internet, incluso cuando usas un modelo de IA local.

Para componentes reutilizables, primero [crea o abre una biblioteca personalizada para editarla](../Custom-symbol-libraries/) y, a continuación, abre Chat en esa ventana de biblioteca. Para un circuito, mantén activa la ventana del dibujo previsto. Indica al asistente a qué hoja, referencias de componentes o bloque funcional te refieres. La recuperación y colocación de símbolos con IA actuales admiten **símbolos de una sola unidad**; usa el editor de símbolos habitual para las piezas de varias unidades que el asistente no pueda importar.

{% include video-player.html src="/v4/videos/ai-assistant/ai-assistant-demo.mp4" poster="/v4/images/ai-assistant/chat-open-desktop.png" caption="Crea un símbolo a partir de una hoja de datos en TinyCAD Desktop. Las esperas de procesamiento de IA se muestran a 12× de velocidad y se indican en pantalla; la interacción y los resultados se muestran a velocidad normal." %}

## Configurar una conexión
{: #set-up-a-connection}

### 1. Elegir un proveedor
{: #choose-a-provider}

1. Abre **Chat** en la barra de herramientas.
2. Haz clic en **Haz clic aquí para iniciar sesión y usar la IA**, o en el engranaje de **Configuración de IA** en el encabezado del panel.
3. En **Paso 1 — Elegir proveedor**, selecciona un proveedor y haz clic en **Siguiente**.

![Configuración de IA, con el paso Proveedor](../images/ai-assistant/setup-provider.png)

Puedes conectar un proveedor a la vez.

| Proveedor en TinyCAD | Qué necesitas |
| --- | --- |
| **ChatGPT** | Una cuenta de ChatGPT de pago que cumpla los requisitos y usar **Iniciar sesión con ChatGPT**, o una clave de API de OpenAI usando **Usar clave de API**. El inicio de sesión de cuenta está disponible en la aplicación de escritorio. |
| **Anthropic Claude** | Una clave de API de la [consola de Claude](https://platform.claude.com/settings/keys), con acceso a la API y facturación para los modelos que uses. |
| **Google Gemini** | Una clave de API de [Google AI Studio](https://aistudio.google.com/apikey). Algunos modelos tienen un nivel gratuito de API limitado; se aplican requisitos de disponibilidad y cuotas. |
| **Compatible con OpenAI** | La clave de API del servicio, la URL base de la API y un modelo que admita llamadas a herramientas. |
| **Ollama (alojado localmente)** | Un servidor local de Ollama en ejecución y un modelo instalado compatible con herramientas. Los modelos locales no requieren una clave de API. |

Una suscripción al sitio web de chat habitual de un proveedor no incluye automáticamente facturación de API ni una clave de API. La opción explícita de inicio de sesión de cuenta de ChatGPT es un método de conexión independiente. Para Gemini, el asistente de configuración usa una clave de API; iniciar sesión en el almacenamiento de Google Drive de TinyCAD no conecta su asistente de IA.

### 2. Conectar una cuenta o una clave de API
{: #connect-an-account-or-api-key}

#### Usar una cuenta de ChatGPT
{: #use-a-chatgpt-account}

En TinyCAD Desktop, elige **ChatGPT** y, a continuación, **Iniciar sesión con ChatGPT** en el paso 2.

1. Haz clic en **Iniciar sesión con ChatGPT**. Completa el inicio de sesión en el navegador externo.
2. Cuando se te solicite, autoriza el uso de tu plan de ChatGPT. Iniciar sesión sin habilitar el uso del plan no basta para enviar solicitudes de IA.
3. Vuelve a TinyCAD y elige un modelo cuando el asistente avance al paso 3.

Si se recuerda una cuenta, la pantalla ofrece **Continuar como …** o **Iniciar sesión con otra cuenta**. TinyCAD conserva una cuenta a la vez. Una vez conectado, encima del cuadro de mensaje aparecen **Usando el plan de ChatGPT** y **Administrar uso**. El mensaje que aparece la primera vez explica que las solicitudes utilizan la asignación de tu plan o los créditos disponibles.

![Configuración de IA de escritorio que ofrece Iniciar sesión con ChatGPT o Usar clave de API](../images/ai-assistant/setup-chatgpt-desktop.png)

Para iniciar sesión en ChatGPT se necesita una cuenta de pago que cumpla los requisitos; siguen aplicándose los límites de cuenta, espacio de trabajo y aplicación. No cambia silenciosamente a la facturación con clave de API si se rechaza una solicitud. Consulta la [documentación de OpenAI sobre iniciar sesión con ChatGPT](https://developers.openai.com/siwc/token-sharing-open-source) para obtener información sobre la conexión con el plan de cuenta.

#### Usar una clave de API
{: #use-an-api-key}

1. Crea una clave mediante el enlace del proveedor que aparece en el paso 2. Comprueba que el proyecto o la cuenta tenga acceso a los modelos que quieres usar.
2. Para **ChatGPT**, selecciona **Usar clave de API**. Las páginas de los demás proveedores alojados muestran directamente el campo para introducir la clave.
3. Pega la clave en **Clave de API**. Está enmascarada; **Mostrar clave de API** la muestra mientras escribes, si es necesario.
4. Para **Compatible con OpenAI**, introduce también la **URL base de la API** del servicio.
5. Haz clic en **Siguiente**. TinyCAD comprueba la conexión y obtiene automáticamente los modelos disponibles.

![Campo de clave de API de ChatGPT con la clave enmascarada e instrucciones del proveedor](../images/ai-assistant/setup-api-key.png)

Si un punto de conexión no puede enumerar los modelos, TinyCAD solicita un **ID del modelo** en el paso 2. Introduce el identificador exacto del proveedor y vuelve a hacer clic en **Siguiente**; un breve saludo lo comprueba. Estas comprobaciones pueden consumir cuota del proveedor. Si falla la conexión, se mantiene el paso 2 y se muestra el error.

Para Gemini, crea o selecciona un proyecto en Google AI Studio y copia su clave de API en TinyCAD. La [página de precios de la API de Gemini de Google](https://ai.google.dev/gemini-api/docs/pricing) explica qué modelos y usos cumplen los requisitos del nivel gratuito. Los modelos de pago o un uso más elevado pueden requerir facturación.

![Configuración de Google Gemini con el enlace a la clave de Google AI Studio](../images/ai-assistant/setup-gemini.png)

### 3. Elegir un modelo y el nivel de razonamiento
{: #pick-a-model-and-thinking-level}

Tras conectarte correctamente, elige un modelo en **Paso 3 — Elegir modelo**, ajusta **Razonamiento** y haz clic en **Finalizar**.

![Selección de modelo y control deslizante de Razonamiento en el paso final de configuración](../images/ai-assistant/setup-model.png)

La lista de modelos de esta ilustración es solo un ejemplo; la lista que veas depende del proveedor, el punto de conexión y la cuenta. ChatGPT muestra los modelos Sol, Luna y Astra compatibles que devuelve tu conexión. Las versiones más recientes aparecen primero; las opciones anteriores están en **Más modelos**, y se recuerdan hasta seis opciones recientes.

Elige un modelo que admita **herramientas** para que pueda inspeccionar y editar documentos de TinyCAD. Para interpretar imágenes de circuitos u hojas de datos que contengan diagramas, elige también un modelo que admita **visión**. Un punto de conexión de chat de texto general no basta para todas las tareas.

El nivel de **Razonamiento** va de **Mínimo** a **Máximo** y empieza en **Medio**. Los niveles disponibles dependen del proveedor. Los ajustes más altos pueden tardar más y consumir más de la asignación; Máximo significa el nivel más alto que admite ese proveedor. Puedes cambiar el modelo y el nivel de razonamiento entre respuestas mediante el icono del modelo junto al cuadro de mensaje.

### Alternativa: usar Ollama local
{: #alternative-use-local-ollama}

1. [Instala Ollama](https://ollama.com/download) e inicia su servidor.
2. Descarga un modelo compatible con [llamadas a herramientas](https://docs.ollama.com/capabilities/tool-calling), usando `ollama pull MODEL_NAME` con el nombre real del modelo. Para tareas con imágenes/PDF, comprueba también la compatibilidad con visión y la capacidad de contexto.
3. En el paso del proveedor de TinyCAD, elige **Ollama (alojado localmente)**.
4. Usa **URL de la API de Ollama**, normalmente `http://localhost:11434/v1`, y haz clic en **Siguiente** para enumerar los modelos instalados.
5. Elige un modelo y un nivel de razonamiento y, a continuación, haz clic en **Finalizar**.

![Configuración de Ollama que muestra la URL de la API local y las indicaciones sobre el origen del navegador](../images/ai-assistant/setup-ollama.png)

La conexión de Ollama acepta URL de localhost/bucle local. Para un servidor remoto, elige **Compatible con OpenAI**. Asigna a un modelo local contexto suficiente para la conversación y las herramientas de TinyCAD; consulta la [configuración del contexto de Ollama](https://docs.ollama.com/api/openai-compatibility#setting-the-local-context-size).

Las solicitudes a Ollama local van directamente al servidor local. Para inferencia local, elige un modelo que se ejecute localmente: los modelos en la nube configurados a través de un servidor de Ollama pueden seguir usando un servicio en la nube.

## Usar el asistente mientras dibujas
{: #use-the-assistant-while-drawing}

Escribe una solicitud en el cuadro de mensaje y haz clic en **Enviar**, o pulsa **Enter**. Usa **Shift+Enter** para añadir otra línea. Empieza con una tarea acotada, revisa el resultado y luego pide el siguiente cambio.

![Panel de chat conectado con una solicitud de ejemplo lista para enviar](../images/ai-assistant/chat-ready.png)

Especifica la hoja, las referencias, los valores y las conexiones de destino. «Conecta la parte superior de R2 a OUT en la hoja Control» es más fácil de comprobar que «arregla el cable». Indica qué debe permanecer sin cambios al ampliar un circuito existente.

El asistente puede inspeccionar el contenido sin guardar del editor. Guarda el dibujo o la biblioteca como de costumbre después de revisar su trabajo. Los dibujos incorporan sus símbolos; guarda las definiciones reutilizables en una biblioteca personalizada si quieres volver a usarlas en otros proyectos.

**En curso** agrupa la actividad de las herramientas y las actualizaciones intermedias en una fila contraíble. Ábrela para ver los detalles del progreso, los resultados de las herramientas y las imágenes inspeccionadas por el modelo. La respuesta final aparece por separado. Cuando la conexión lo admite, el asistente puede mostrar resúmenes de razonamiento proporcionados por el proveedor; esto no es un ajuste que revele todos los pasos del razonamiento interno.

Usa **Detener** para cancelar la solicitud actual. Los cambios ya aplicados permanecen en el documento. **Deshacer** y **Rehacer** funcionan con las ediciones de IA igual que con las ediciones normales; una solicitud con varios pasos puede generar varios cambios que se pueden deshacer. Si editas el dibujo mientras trabaja el asistente, puede rechazarse una escritura posterior porque su origen está desactualizado. Pídele que vuelva a leer el dibujo y continúe.

El icono **Nuevo chat** del encabezado borra la conversación, el borrador y los adjuntos. No deshace los cambios del dibujo. Cambiar de modelo conserva la conversación; conectar otro proveedor o clave inicia un chat nuevo.

### Adjuntar hojas de datos e imágenes de circuitos
{: #attach-datasheets-and-circuit-images}

Usa **Importar PDF/imagen** junto a los controles de mensaje para adjuntar archivos PDF, PNG, JPEG o WebP. Puedes adjuntar hasta **seis archivos, con un total de 10 MiB**; también se aplican los límites del proveedor. Pide la variante exacta del componente, el encapsulado y las páginas pertinentes del PDF, e indica si el diagrama de patillas muestra una vista superior o inferior.

Para puntos de conexión compatibles y Ollama, **Páginas del PDF** permite seleccionar las páginas que se van a convertir localmente en imágenes, por ejemplo `1-4,12`; déjalo en blanco para todas las páginas dentro del límite de conversión de 20 páginas. Elige menos páginas si las imágenes convertidas superan los 10 MiB. ChatGPT/OpenAI, Claude y Gemini reciben los PDF directamente. La capacidad de leer diagramas también depende del modelo elegido.

La búsqueda en la biblioteca pública de símbolos de TinyCAD está disponible independientemente de la navegación web general. La investigación web nativa está disponible para las conexiones aptas de **Iniciar sesión con ChatGPT** cuando la política del modelo o de la cuenta lo permite; las citas aparecen como enlaces en la respuesta. Las conexiones con clave de API y los demás proveedores no obtienen actualmente búsqueda web general a través de TinyCAD. Adjunta la hoja de datos o la imagen pertinente si el asistente no puede abrir el sitio web del fabricante.

## Ejemplos de solicitudes
{: #example-prompts}

Úsalos como punto de partida. Sustituye el componente, el encapsulado, los números de patilla y los requisitos de alimentación por los de tu proyecto.

### Crear un símbolo a partir de una hoja de datos
{: #create-a-symbol-from-a-datasheet}

Abre el dibujo previsto y adjunta la hoja de datos:

> Crea un símbolo compacto para el NE555P en encapsulado PDIP de 8 patillas a partir de esta hoja de datos. Verifica todos los números físicos de patilla, nombres y tipos eléctricos. Busca primero símbolos existentes. Coloca las patillas de alimentación arriba y tierra abajo, valida el símbolo y colócalo en este dibujo, listo para cablear. Indica todo lo que no puedas verificar.

Para un módulo físico, en lugar del contorno convencional de un CI:

> Usa el diagrama de patillas adjunto para esta revisión exacta de la placa del sensor y crea un símbolo editable que muestre el contorno de la PCB y los contactos del conector etiquetados en su orden físico. Hazlo lo bastante compacto para un plano de cableado A4. Coloca puntos de conexión en las almohadillas del conector y usa un pequeño icono de temperatura para identificar su función.

### Crear una biblioteca reutilizable
{: #build-a-reusable-library}

Primero crea o abre una `.tclib` personalizada para editarla:

> Añade una pequeña biblioteca de componentes de interfaz de una sola unidad: un PC817 en DIP-4, un ULN2003A en DIP-16 y un conector de terminales de 4 vías y 2,54 mm. Usa las hojas de datos adjuntas para las asignaciones de patillas de los CI. Asigna a cada componente un nombre claro, una descripción y un prefijo de referencia, valídalo y añádelo a esta biblioteca abierta. Conserva el símbolo que estoy editando actualmente.

Continúa con otro lote después de comprobar el primero. Guarda `.tclib` como de costumbre, o solicita explícitamente una biblioteca descargable si eso es lo que necesitas.

### Crear un circuito completo
{: #create-a-complete-circuit}

> En la hoja actual, dibuja un oscilador astable NE555 de 5 V con el componente PDIP-8. Busca una frecuencia aproximada de 1 Hz. Incluye las resistencias y el condensador de temporización, la conexión de reset, el condensador de la patilla de control, el desacoplo de alimentación y un LED de salida con una resistencia limitadora de corriente. Explica el cálculo de temporización, comprueba las conexiones de las patillas físicas y ordena la disposición. Enumera las suposiciones y cualquier problema de reglas de diseño sin resolver.

Esto solicita un diseño editable y cálculos. Para establecer el comportamiento simulado, revisa los modelos y usa tú mismo [Simulación](../Simulation/); una explicación de IA convincente no equivale a una ejecución registrada del simulador.

### Añadir componentes sin redibujar el circuito
{: #add-parts-without-redrawing-the-circuit}

> Añade un condensador de desacoplo de 100 nF entre la alimentación y tierra de U1, cerca de U1. Identifica sus patillas de alimentación reales antes de cablear. Mantén sin cambios el resto del circuito, las referencias y los valores; después, comprueba las redes afectadas.

> Añade un conector etiquetado de 4 patillas para +3V3, GND, SDA y SCL en la hoja Sensors. Conecta SDA y SCL a las redes etiquetadas existentes. Usa las resistencias pull-up existentes si las hay e indícame si se necesitan más antes de añadir ninguna.

### Reconstruir un diagrama adjunto
{: #reconstruct-an-attached-diagram}

> Recrea el circuito de la página 3 del PDF adjunto con componentes y cables de TinyCAD editables en una hoja nueva. Conserva los valores y las etiquetas mostrados. Pregunta sobre los valores ilegibles o los cruces de cables ambiguos en lugar de adivinar. Compara las redes reconstruidas con la imagen y ordena la hoja terminada.

### Explicar, inspeccionar o mejorar un dibujo existente
{: #explain-inspect-or-improve-an-existing-drawing}

> Explica la ruta de señal desde J1 hasta U2 y enumera los componentes y las patillas físicas conectados a OUT. No modifiques el dibujo.

> Comprueba si el dibujo actual tiene patillas obligatorias sin conectar, salidas en conflicto y etiquetas de alimentación incoherentes. Indica la hoja y la referencia de cada problema, y propone cambios antes de aplicarlos.

> Ordena solo el bloque del controlador de motor alrededor de U3 y J4. Mantén sin cambios sus conexiones y valores, y deja en su sitio el bloque de entrada de alimentación.

## Configuración, privacidad y guardado
{: #settings-privacy-and-saving}

El engranaje de **Configuración de IA** muestra el proveedor y el método de conexión actuales, además de los controles de modelo/razonamiento y **Guardar**. Para una conexión con clave, ofrece **Borrar clave de API**; para una cuenta de ChatGPT, ofrece **Cerrar sesión**; para Ollama local, ofrece **Desconectar Ollama**. Desconéctate primero para configurar otro proveedor. **Cancelar** conserva la conexión y la configuración guardadas existentes.

![Configuración de IA para una conexión existente con clave de API](../images/ai-assistant/connection-settings.png)

Las claves de API y el historial de conversaciones permanecen en la memoria de la aplicación; las claves no se guardan en las preferencias ni en los dibujos. Tienes que volver a introducir una clave de API después de recargar o reiniciar. Las preferencias no secretas del proveedor, el punto de conexión, el modelo y el razonamiento se pueden recordar. La autorización de la cuenta de ChatGPT se administra por separado mediante el entorno de ejecución local y puede persistir tras los reinicios; Desktop usa cifrado seguro del sistema operativo cuando está disponible.

Para la IA alojada, los mensajes, los adjuntos y el contenido o las vistas previas del documento que soliciten sus herramientas se envían al proveedor seleccionado. Las conexiones alojadas con clave de API envían las solicitudes directamente al punto de conexión seleccionado; TinyCAD no proporciona un relé de proveedor. Los servicios compatibles deben permitir el acceso desde el navegador (CORS) y normalmente usar HTTPS; localhost es la excepción. Para un flujo de trabajo completamente local, usa un modelo de Ollama local y documentos de referencia locales, y evita las búsquedas de símbolos en línea o los modelos en la nube.

Los componentes y circuitos generados aún requieren revisión de ingeniería. Comprueba las asignaciones exactas de patillas del encapsulado, las potencias nominales, la tensión de alimentación, los niveles lógicos y los límites de funcionamiento con las hojas de datos reales. La validación estructural, las comprobaciones de reglas de diseño y las comprobaciones de conexiones de la disposición de TinyCAD ayudan a encontrar errores; no demuestran que el circuito funcione, no sustituyen la simulación ni establecen que se haya probado el hardware.

## Solución de problemas
{: #troubleshooting}

| Síntoma | Qué comprobar |
| --- | --- |
| **Chat no está disponible o no aparece** | Usa una versión actual de TinyCAD v4. Abre el dibujo o la biblioteca previstos y busca Chat en su barra de herramientas. |
| **El inicio de sesión de cuenta de ChatGPT no está disponible** | Usa Desktop o una versión alojada localmente con el entorno de ejecución de cuenta. En la aplicación pública alojada, elige Usar clave de API. Permite la ventana de inicio de sesión externa y habilita el uso del plan de ChatGPT durante la autorización. |
| **No se puede avanzar desde el paso 2** | Lee el error de conexión. Comprueba la clave, el acceso al modelo, la facturación/cuota de la API, la URL del punto de conexión y la conexión a Internet. TinyCAD realiza esta comprobación al hacer clic en Siguiente. |
| **No aparecen modelos** | Comprueba el acceso del proveedor. Para puntos de conexión sin detección de modelos, introduce el ID del modelo solicitado. Instala un modelo compatible con herramientas antes de conectar Ollama. |
| **Ollama local no se puede conectar** | Inicia el servidor, comprueba la URL de la API local, permite el origen exacto de TinyCAD mediante OLLAMA_ORIGINS, reinicia Ollama y permite el acceso a la red local desde el navegador si se solicita. |
| **El asistente responde, pero no puede editar ni leer imágenes** | Comprueba la compatibilidad del modelo con herramientas/visión. Adjunta un recorte legible o menos páginas del PDF. |
| **Una herramienta indica que el dibujo ha cambiado** | Deja que el asistente vuelva a leer el estado actual e inténtalo de nuevo. Los cambios aplicados anteriormente siguen disponibles mediante Deshacer. |
| **Una respuesta se detiene al alcanzar un límite del proveedor** | Prueba una tarea más pequeña o un nivel de razonamiento inferior. TinyCAD puede volver a intentar automáticamente las respuestas incompletas; los reintentos pueden consumir asignación adicional. Los cambios completados se pueden deshacer. |

Continúa con [bibliotecas de símbolos personalizadas](../Custom-symbol-libraries/), [edición de símbolos](../Editing-a-Symbol/), [ordenar la disposición](../Layout-Tidy-Up/) o [simulación](../Simulation/).
