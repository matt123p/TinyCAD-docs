---
layout: default
---
# Asistente de IA
{: #ai-assistant}

El asistente de IA de TinyCAD convierte instrucciones escritas, hojas de datos e imágenes de circuitos en símbolos y dibujos editables. Funciona junto con el editor normal: puedes pedirle que cree un circuito, añada componentes al dibujo abierto, cree una biblioteca de símbolos o explique una conexión existente.

**Solo para escritorio:** El asistente de IA (chatbot) solo está disponible en la aplicación TinyCAD Desktop. No está disponible en la versión para navegador.

Abre **Chat** en la barra de herramientas de la aplicación Desktop para usarlo. Conecta un proveedor de IA antes de enviar tu primer mensaje; las opciones de conexión se explican a continuación.

## Qué puede hacer
{: #what-it-can-do}

| Tarea | Cómo ayuda el asistente |
| --- | --- |
| **Crear un símbolo de componente** | Genera ilustraciones editables, números de patilla físicos, nombres de patillas y tipos eléctricos a partir de un componente y encapsulado especificados. Adjunta la hoja de datos del fabricante cuando sea importante conocer la asignación de patillas. |
| **Crear o ampliar una biblioteca de símbolos** | Añade varios componentes reutilizables a la biblioteca `.tclib` abierta para edición, incluidos nombres, descripciones y asignaciones de patillas. Las colecciones más grandes pueden crearse en varias tandas sucesivas. |
| **Dibujar un circuito** | Busca símbolos adecuados, coloca componentes, establece valores y referencias, conecta patillas con cables y etiquetas, y añade notas explicativas. |
| **Ampliar un dibujo existente** | Añade un conector, un condensador de desacoplamiento, un sensor, un controlador u otro bloque funcional sin modificar el resto del dibujo. |
| **Explicar o inspeccionar un circuito** | Lee el dibujo y la netlist actuales, describe las rutas de señal, identifica las patillas de una red e investiga la conectividad o los errores de las reglas de diseño. |
| **Reconstruir un dibujo a partir de un documento** | Lee un PDF o una imagen de circuito adjuntos y crea un punto de partida editable, preguntando por las partes o conexiones que no estén claras. |
| **Ordenar una disposición** | Reorganiza una hoja completa o una parte especificada de ella, utilizando las comprobaciones de disposición y conexión de TinyCAD. |
| **Exportar un resultado** | Genera un dibujo o una biblioteca de símbolos descargable cuando solicites explícitamente un archivo. |

Los resultados son objetos de TinyCAD que puedes seleccionar, editar, cablear y guardar. En un dibujo, los símbolos recién creados se colocan listos para conectarse. En una biblioteca, los componentes nuevos pasan a formar parte de ella. No tienes que copiar XML de la conversación ni configurar un servidor MCP aparte.

El asistente busca primero en las [bibliotecas incluidas](../Bundled-Libraries/) y, si es necesario, después en la colección pública de TinyCAD.net. Puede buscar en colecciones incluidas que no estén seleccionadas actualmente en el selector de bibliotecas. La búsqueda de símbolos públicos requiere conexión a Internet, incluso si utilizas un modelo de IA local.

Para componentes reutilizables, primero [crea o abre una biblioteca personalizada para editarla](../Custom-symbol-libraries/) y, después, abre Chat en esa ventana de biblioteca. Para un circuito, mantén activa la ventana del dibujo que quieras usar. Indica al asistente a qué hoja, referencias de componentes o bloque funcional te refieres. La recuperación y colocación de símbolos mediante IA actualmente admite **símbolos de una sola unidad**; usa el editor de símbolos normal para componentes multiunidad que el asistente no pueda importar.

{% include video-player.html src="/v4/videos/ai-assistant/ai-assistant-demo.mp4" poster="/v4/images/ai-assistant/chat-open-desktop.png" caption="Crea un símbolo a partir de una hoja de datos en TinyCAD Desktop. Las esperas de procesamiento de IA se muestran a velocidad 12× y se indican en pantalla; la interacción y los resultados se muestran a velocidad normal." %}

## Configurar una conexión
{: #set-up-a-connection}

### 1. Elegir un proveedor
{: #choose-a-provider}

1. Abre **Chat** en la barra de herramientas.
2. Haz clic en **Haz clic aquí para iniciar sesión y usar IA** (Click here to Sign in to use AI) o en el icono de engranaje de **Configuración de IA** (AI settings) del encabezado del panel.
3. En **Paso 1 — Elegir proveedor** (Step 1 — Choose provider), selecciona un proveedor y haz clic en **Siguiente** (Next).

![Configuración de IA con el paso Proveedor](../images/ai-assistant/setup-provider.png)

Puedes conectar un proveedor a la vez.

| Proveedor en TinyCAD | Qué necesitas |
| --- | --- |
| **ChatGPT** | Una cuenta de ChatGPT de pago que cumpla los requisitos, usando **Iniciar sesión con ChatGPT** (Sign In with ChatGPT), o una clave de API de OpenAI usando **Usar clave de API** (Use API Key). El inicio de sesión de cuenta está disponible en la aplicación Desktop. |
| **Anthropic Claude** | Una clave de API de la [Consola de Claude](https://platform.claude.com/settings/keys), con acceso a la API y facturación para los modelos que utilices. |
| **Google Gemini** | Una clave de API de [Google AI Studio](https://aistudio.google.com/apikey). Algunos modelos tienen un nivel gratuito limitado de API; se aplican condiciones de disponibilidad y cuotas. |
| **Compatible con OpenAI** | La clave de API del servicio, la URL base de la API y un modelo compatible con llamadas a herramientas. |
| **Ollama (alojado localmente)** | Un servidor Ollama local en ejecución y un modelo instalado compatible con herramientas. Los modelos locales no requieren una clave de API. |

Una suscripción al sitio web de chat normal de un proveedor no incluye automáticamente facturación de API ni una clave de API. La opción explícita de inicio de sesión de cuenta de ChatGPT es un método de conexión distinto. Para Gemini, el asistente de configuración utiliza una clave de API; iniciar sesión en el almacenamiento de Google Drive de TinyCAD no conecta su asistente de IA.

### 2. Conectar una cuenta o una clave de API
{: #connect-an-account-or-api-key}

#### Usar una cuenta de ChatGPT
{: #use-a-chatgpt-account}

En TinyCAD Desktop, elige **ChatGPT** y, en el paso 2, **Iniciar sesión con ChatGPT** (Sign In with ChatGPT).

1. Haz clic en **Iniciar sesión con ChatGPT** (Sign in with ChatGPT). Completa el inicio de sesión en el navegador externo.
2. Cuando se te solicite, aprueba el uso de tu plan de ChatGPT. Iniciar sesión sin habilitar el uso del plan no basta para enviar solicitudes de IA.
3. Vuelve a TinyCAD y elige un modelo cuando el asistente de configuración avance al paso 3.

Si se recuerda una cuenta, la pantalla ofrece **Continuar como …** (Continue as …) o **Iniciar sesión con otra cuenta** (Sign in with a different account). TinyCAD conserva una cuenta a la vez. Tras conectarte, aparecen **Usando el plan de ChatGPT** (Using ChatGPT plan) y **Administrar uso** (Manage usage) sobre el cuadro de mensajes. El mensaje de primer uso explica que las solicitudes utilizan la asignación de tu plan o los créditos disponibles.

![Configuración de IA de Desktop con las opciones Iniciar sesión con ChatGPT o Usar clave de API](../images/ai-assistant/setup-chatgpt-desktop.png)

El inicio de sesión de ChatGPT requiere una cuenta de pago que cumpla los requisitos; siguen aplicándose los límites de cuenta, espacio de trabajo y aplicación. No cambia silenciosamente a facturación con clave de API si se rechaza una solicitud. Consulta la [documentación de inicio de sesión con ChatGPT de OpenAI](https://developers.openai.com/siwc/token-sharing-open-source) para obtener información sobre la conexión con el plan de cuenta.

#### Usar una clave de API
{: #use-an-api-key}

1. Crea una clave mediante el enlace del proveedor que se muestra en el paso 2. Comprueba que el proyecto o la cuenta tengan acceso a los modelos que quieres utilizar.
2. Para **ChatGPT**, selecciona **Usar clave de API** (Use API Key). Los demás proveedores alojados muestran directamente la página de introducción de la clave.
3. Pega la clave en **Clave de API** (API key). Se muestra enmascarada; **Mostrar clave de API** (Show API key) la revela mientras escribes, si es necesario.
4. Para **Compatible con OpenAI**, introduce también la **URL base de la API** (API base URL) del servicio.
5. Haz clic en **Siguiente** (Next). TinyCAD comprueba la conexión y recupera automáticamente los modelos disponibles.

![Introducción de la clave de API de ChatGPT con un campo de clave enmascarado e instrucciones del proveedor](../images/ai-assistant/setup-api-key.png)

Si un endpoint no puede enumerar los modelos, TinyCAD solicita un **ID de modelo** (Model ID) en el paso 2. Introduce el identificador exacto del proveedor y vuelve a hacer clic en **Siguiente** (Next); un breve saludo lo comprueba. Estas comprobaciones pueden consumir cuota del proveedor. Si la conexión falla, se permanece en el paso 2 y se muestra el error.

Para Gemini, crea o selecciona un proyecto en Google AI Studio y copia su clave de API en TinyCAD. La [página de precios de la API de Gemini de Google](https://ai.google.dev/gemini-api/docs/pricing) explica qué modelos y usos cumplen los requisitos para el nivel gratuito. Los modelos de pago o un uso más elevado pueden requerir facturación.

![Configuración de Google Gemini con el enlace a la clave de Google AI Studio](../images/ai-assistant/setup-gemini.png)

### 3. Elegir un modelo y un nivel de razonamiento
{: #pick-a-model-and-thinking-level}

Tras conectarte correctamente, elige un modelo en **Paso 3 — Elegir modelo** (Step 3 — Pick Model), ajusta **Razonamiento** (Thinking) y haz clic en **Finalizar** (Finish).

![Selección de modelo y control deslizante de Razonamiento en el paso final de configuración](../images/ai-assistant/setup-model.png)

La lista de modelos de esta ilustración es solo un ejemplo; la tuya depende del proveedor, el endpoint y la cuenta. ChatGPT muestra los modelos Sol, Luna y Astra compatibles que devuelve tu conexión. Las versiones más recientes aparecen primero; las opciones anteriores están en **Más modelos** (More models) y se recuerdan hasta seis opciones recientes.

Elige un modelo compatible con **herramientas** para que pueda inspeccionar y editar documentos de TinyCAD. Para interpretar imágenes de circuitos u hojas de datos que contengan diagramas, elige también un modelo compatible con **visión**. Un endpoint de chat de texto general no es suficiente para todas las tareas.

**Razonamiento** va de **Mínimo** (Minimal) a **Máximo** (Max) y comienza en **Medio** (Medium). Los niveles disponibles dependen del proveedor. Los ajustes más altos pueden tardar más y consumir más cuota; Máximo significa el nivel más alto admitido por ese proveedor. Puedes cambiar el modelo y el nivel de razonamiento entre respuestas mediante el icono del modelo situado junto al cuadro de mensajes.

### Alternativa: usar Ollama local
{: #alternative-use-local-ollama}

1. [Instala Ollama](https://ollama.com/download) e inicia su servidor.
2. Descarga un modelo compatible con [llamadas a herramientas](https://docs.ollama.com/capabilities/tool-calling), usando `ollama pull MODEL_NAME` con el nombre real del modelo. Para tareas con imágenes o PDF, comprueba también que admita visión y cuál es su capacidad de contexto.
3. En el paso de proveedor de TinyCAD, elige **Ollama (alojado localmente)** (Ollama (hosted locally)).
4. Usa **URL de la API de Ollama** (Ollama API URL), normalmente `http://localhost:11434/v1`; después, haz clic en **Siguiente** (Next) para enumerar los modelos instalados.
5. Elige un modelo y un nivel de razonamiento y, luego, haz clic en **Finalizar** (Finish).

![Configuración de Ollama con la URL de la API local e indicaciones sobre el origen del navegador](../images/ai-assistant/setup-ollama.png)

La conexión con Ollama acepta URL de localhost/loopback. Para un servidor remoto, elige **Compatible con OpenAI** (OpenAI compatible). Proporciona al modelo local suficiente contexto para la conversación y las herramientas de TinyCAD; consulta la [configuración del contexto de Ollama](https://docs.ollama.com/api/openai-compatibility#setting-the-local-context-size).

Las solicitudes a Ollama local van directamente al servidor local. Para inferencia local, elige un modelo que se ejecute localmente: los modelos en la nube configurados mediante un servidor Ollama pueden seguir usando un servicio en la nube.

## Usar el asistente mientras dibujas
{: #use-the-assistant-while-drawing}

Escribe una solicitud en el cuadro de mensajes y haz clic en **Enviar** (Send) o pulsa **Enter**. Usa **Shift+Enter** para añadir otra línea. Empieza con una tarea acotada, revisa el resultado y luego pide el siguiente cambio.

![Panel de chat conectado con una solicitud de ejemplo lista para enviar](../images/ai-assistant/chat-ready.png)

Especifica la hoja, las referencias, los valores y las conexiones de destino. «Conecta la parte superior de R2 a OUT en la hoja Control» es más fácil de comprobar que «arregla el cable». Indica qué debe permanecer sin cambios al ampliar un circuito existente.

El asistente puede inspeccionar el contenido sin guardar del editor. Guarda el dibujo o la biblioteca de la forma habitual después de revisar su trabajo. Los dibujos incorporan sus símbolos; guarda las definiciones reutilizables en una biblioteca personalizada si quieres volver a utilizarlas en otros proyectos.

**En curso** (Working) agrupa la actividad de las herramientas y las actualizaciones intermedias en una fila que se puede contraer. Ábrela para ver detalles del progreso, resultados de herramientas e imágenes inspeccionadas por el modelo. La respuesta final aparece por separado. Cuando la conexión lo permite, el asistente puede mostrar resúmenes de razonamiento proporcionados por el proveedor; esto no es un ajuste que revele todos los pasos internos de razonamiento.

Usa **Detener** (Stop) para cancelar la solicitud actual. Los cambios ya aplicados permanecen en el documento. **Deshacer** (Undo) y **Rehacer** (Redo) funcionan con las ediciones de IA igual que con la edición normal; una solicitud de varios pasos puede crear varios cambios que se pueden deshacer. Si editas el dibujo mientras el asistente trabaja, es posible que se rechace una escritura posterior porque su origen está desactualizado. Pídele que vuelva a leer el dibujo y continúe.

El icono **Nuevo chat** (New chat) del encabezado borra la conversación, el borrador y los adjuntos. No deshace los cambios en el dibujo. Cambiar de modelo conserva la conversación; conectar otro proveedor o clave inicia un chat nuevo.

### Adjuntar hojas de datos e imágenes de circuitos
{: #attach-datasheets-and-circuit-images}

Usa **Importar PDF/imagen** (Import PDF/image) junto a los controles de mensajes para adjuntar archivos PDF, PNG, JPEG o WebP. Puedes adjuntar hasta **seis archivos con un total de 10 MiB**; también se aplican los límites del proveedor. Pregunta por la variante exacta del componente, el encapsulado y las páginas pertinentes del PDF, e indica si el diagrama de patillas muestra una vista superior o inferior.

En endpoints compatibles y Ollama, **Páginas PDF** (PDF pages) permite seleccionar las páginas que se convertirán localmente en imágenes; por ejemplo, `1-4,12`. Déjalo en blanco para usar todas las páginas dentro del límite de conversión de 20 páginas. Elige menos páginas si las imágenes convertidas superan los 10 MiB. ChatGPT/OpenAI, Claude y Gemini reciben los PDF directamente. La capacidad para leer diagramas también depende del modelo elegido.

La búsqueda en la biblioteca pública de símbolos de TinyCAD está disponible independientemente de la navegación web general. La investigación web nativa está disponible para las conexiones **Iniciar sesión con ChatGPT** (Sign in with ChatGPT) que cumplan los requisitos, cuando la política del modelo o la cuenta lo permita; las citas aparecen como enlaces en la respuesta. Las conexiones con clave de API y los demás proveedores actualmente no obtienen búsqueda web general a través de TinyCAD. Adjunta la hoja de datos o la imagen pertinente cuando el asistente no pueda abrir el sitio web del fabricante.

## Ejemplos de solicitudes
{: #example-prompts}

Úsalos como punto de partida. Sustituye el componente, el encapsulado, los números de patilla y los requisitos de alimentación por los de tu proyecto.

### Crear un símbolo a partir de una hoja de datos
{: #create-a-symbol-from-a-datasheet}

Abre el dibujo previsto y adjunta la hoja de datos:

> Crea un símbolo compacto para el NE555P en encapsulado PDIP de 8 patillas a partir de esta hoja de datos. Verifica el número físico, el nombre y el tipo eléctrico de cada patilla. Busca primero símbolos existentes. Coloca las patillas de alimentación arriba y la tierra abajo, valida el símbolo y colócalo en este dibujo listo para cablearlo. Indica cualquier dato que no puedas verificar.

Para un módulo físico en lugar del contorno convencional de un CI:

> Usa el diagrama de patillas adjunto de esta revisión exacta de la placa del sensor para crear un símbolo editable que muestre el contorno de la PCB y los contactos del conector de cabecera etiquetados en su orden físico. Hazlo lo bastante compacto para un plano de cableado A4. Coloca puntos de conexión en las almohadillas del conector y usa un pequeño icono de temperatura para identificar su función.

### Crear una biblioteca reutilizable
{: #build-a-reusable-library}

Primero crea o abre una `.tclib` personalizada para editarla:

> Añade una pequeña biblioteca de componentes de interfaz de una sola unidad: un PC817 en DIP-4, un ULN2003A en DIP-16 y un conector de terminales de 4 vías con paso de 2,54 mm. Usa las hojas de datos adjuntas para las asignaciones de patillas de los CI. Asigna a cada componente un nombre, una descripción y un prefijo de referencia claros, valídalo y añádelo a esta biblioteca abierta. Conserva el símbolo que estoy editando actualmente.

Continúa con otra tanda después de revisar la primera. Guarda normalmente el `.tclib` o solicita explícitamente una biblioteca descargable si eso es lo que necesitas.

### Crear un circuito completo
{: #create-a-complete-circuit}

> En la hoja actual, dibuja un oscilador astable NE555 de 5 V con el componente PDIP-8. Apunta a aproximadamente 1 Hz. Incluye las resistencias y el condensador de temporización, la conexión de reset, el condensador de la patilla de control, el desacoplamiento de alimentación y un LED de salida con una resistencia limitadora de corriente. Explica el cálculo de temporización, comprueba las conexiones de las patillas físicas y ordena la disposición. Enumera las suposiciones y cualquier problema de reglas de diseño que no se haya resuelto.

Esto solicita un diseño editable y cálculos. Para establecer el comportamiento simulado, revisa los modelos y usa tú mismo [Simulación](../Simulation/); una explicación convincente de la IA no equivale a una ejecución registrada del simulador.

### Buscar o adjuntar un modelo SPICE
{: #find-or-attach-a-spice-model}

Solicita explícitamente compatibilidad con SPICE o simulación. El asistente puede buscar [modelos SPICE incluidos](../Bundled-SPICE-Models/) sin realizar una búsqueda web e inspeccionar sus fuentes, suposiciones y orden de terminales. Si el modelo exacto no está disponible, pídele que evalúe un sustituto compatible documentado o una aproximación genérica. Confirma de forma independiente la asignación de patillas del encapsulado.

> Busca un modelo SPICE incluido para Q1 y dime cómo se corresponden sus terminales con el símbolo. No modifiques el dibujo hasta que revise la fuente y las suposiciones.

Para cambiar el dibujo, pide al asistente que adjunte el modelo después de comprobar la asignación de patillas. Si le pides que cree un componente de biblioteca reutilizable con compatibilidad SPICE, puede establecer una definición incluida o personalizada para futuras colocaciones.

### Añadir componentes sin volver a dibujar el circuito
{: #add-parts-without-redrawing-the-circuit}

> Añade un condensador de desacoplamiento de 100 nF entre la alimentación y tierra de U1, cerca de U1. Identifica sus patillas de alimentación reales antes de cablearlo. Mantén sin cambios el resto del circuito, las referencias y los valores; después, comprueba las redes afectadas.

> Añade un conector etiquetado de 4 patillas para +3V3, GND, SDA y SCL en la hoja Sensors. Conecta SDA y SCL a las redes etiquetadas existentes. Usa las resistencias pull-up existentes, si las hay, y dime si hacen falta otras antes de añadir alguna.

### Reconstruir un diagrama adjunto
{: #reconstruct-an-attached-diagram}

> Reconstruye el circuito de la página 3 del PDF adjunto como componentes y cables editables de TinyCAD en una hoja nueva. Conserva los valores y las etiquetas que se muestran. Pregunta por los valores ilegibles o los cruces de cables ambiguos en lugar de adivinarlos. Compara las redes reconstruidas con la imagen y ordena la hoja terminada.

### Explicar, inspeccionar o mejorar un dibujo existente
{: #explain-inspect-or-improve-an-existing-drawing}

> Explica la ruta de señal desde J1 hasta U2 y enumera los componentes y las patillas físicas conectados a OUT. No modifiques el dibujo.

> Comprueba si el dibujo actual tiene patillas obligatorias sin conectar, salidas en conflicto y etiquetas de alimentación incoherentes. Informa de la hoja y la referencia de cada problema, y propone cambios antes de aplicarlos.

> Ordena solo el bloque del controlador del motor alrededor de U3 y J4. Conserva sus conexiones y valores y deja el bloque de entrada de alimentación donde está.

## Configuración, privacidad y guardado
{: #settings-privacy-and-saving}

El engranaje de **Configuración de IA** (AI settings) muestra el proveedor y el método de conexión actuales, con controles de modelo/razonamiento y **Guardar** (Save). Para una conexión con clave, ofrece **Borrar clave de API** (Clear API key); para una cuenta de ChatGPT, ofrece **Cerrar sesión** (Sign out); para Ollama local, ofrece **Desconectar Ollama** (Disconnect Ollama). Desconéctate primero para configurar otro proveedor. **Cancelar** (Cancel) conserva la conexión existente y la configuración guardada.

![Configuración de IA para una conexión existente con clave de API](../images/ai-assistant/connection-settings.png)

Las claves de API y el historial de conversaciones permanecen en la memoria de la aplicación; las claves no se guardan con las preferencias ni los dibujos. Debes volver a introducir la clave de API después de recargar o reiniciar. Las preferencias no secretas de proveedor, endpoint, modelo y razonamiento se pueden recordar. La autorización de la cuenta de ChatGPT se administra por separado mediante el entorno de ejecución local y puede conservarse tras reiniciar; Desktop utiliza cifrado seguro del sistema operativo cuando está disponible.

Para la IA alojada, los mensajes, los adjuntos y el contenido del documento o las vistas previas que soliciten sus herramientas se envían al proveedor seleccionado. Las conexiones alojadas con clave de API envían las solicitudes directamente al endpoint seleccionado; TinyCAD no proporciona un intermediario para el proveedor. Los servicios compatibles deben permitir el acceso desde el navegador (CORS) y normalmente usar HTTPS; localhost es la excepción. Para un flujo de trabajo completamente local, usa un modelo local de Ollama y documentos de referencia locales proporcionados por ti, y evita las búsquedas de símbolos en línea o los modelos en la nube.

Los componentes y circuitos generados aún requieren revisión de ingeniería. Comprueba las asignaciones de patillas exactas del encapsulado, la potencia nominal, la tensión de alimentación, los niveles lógicos y los límites de funcionamiento con las hojas de datos reales. La validación estructural de TinyCAD, las comprobaciones de reglas de diseño y las comprobaciones de conexión de la disposición ayudan a encontrar errores; no demuestran que el circuito funcione, no sustituyen la simulación ni acreditan que se haya probado el hardware.

## Solución de problemas
{: #troubleshooting}

| Síntoma | Qué comprobar |
| --- | --- |
| **Chat no está disponible o no aparece** | Usa una versión actual de TinyCAD v4. Abre el dibujo o la biblioteca previstos y busca Chat en su barra de herramientas. |
| **El inicio de sesión de cuenta de ChatGPT no está disponible** | Usa Desktop o una compilación alojada localmente con el entorno de ejecución de cuenta. En la aplicación pública alojada, elige Usar clave de API. Permite la ventana de inicio de sesión externa y habilita el uso del plan de ChatGPT durante el consentimiento. |
| **El paso 2 no avanza** | Lee el error de conexión. Comprueba la clave, el acceso al modelo, la facturación/cuota de la API, la URL del endpoint y la conexión a Internet. TinyCAD realiza esta comprobación al pulsar Siguiente. |
| **No aparecen modelos** | Comprueba el acceso del proveedor. Para endpoints sin detección de modelos, introduce el ID de modelo solicitado. Instala un modelo compatible con herramientas antes de conectar Ollama. |
| **Ollama local no se puede conectar** | Inicia el servidor, comprueba la URL de la API local, permite el origen exacto de TinyCAD mediante OLLAMA_ORIGINS, reinicia Ollama y permite el acceso de red local del navegador si se solicita. |
| **El asistente responde, pero no puede editar ni leer imágenes** | Comprueba la compatibilidad del modelo con herramientas/visión. Adjunta un recorte legible o menos páginas del PDF. |
| **Una herramienta indica que el dibujo ha cambiado** | Deja que el asistente vuelva a leer el estado actual y lo intente de nuevo. Los cambios aplicados anteriormente siguen disponibles mediante Deshacer. |
| **Una respuesta se detiene al alcanzar un límite del proveedor** | Prueba una tarea más pequeña o un nivel de razonamiento más bajo. TinyCAD puede volver a intentar automáticamente las respuestas incompletas; los reintentos pueden consumir cuota adicional. Los cambios completados se pueden deshacer. |

Continúa con [bibliotecas de símbolos personalizadas](../Custom-symbol-libraries/), [edición de símbolos](../Editing-a-Symbol/), [ordenar la disposición](../Layout-Tidy-Up/) o [simulación](../Simulation/).
