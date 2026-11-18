---
layout: default
---
# Bibliotecas de símbolos personalizadas
{: #custom-symbol-libraries}

Esta página trata las tareas relacionadas con las bibliotecas: añadir bibliotecas a TinyCAD, abrirlas
para editarlas, crear archivos de biblioteca y realizar acciones sencillas de administración de símbolos,
como añadir, duplicar, cambiar el nombre y eliminar.

Para explorar bibliotecas y colocar símbolos en un dibujo, consulta [Uso de las bibliotecas de
símbolos](../Using-Symbol-Libraries/). Para dibujar o modificar el símbolo,
 incluidos los pines y las propiedades del símbolo, consulta [Edición de un
símbolo](../Editing-a-Symbol/).

El [Asistente de IA (AI assistant)](../AI-Assistant/) puede añadir componentes a una biblioteca abierta para editarla. Primero crea o abre la biblioteca y, después, describe las piezas necesarias y adjunta sus hojas de datos. Revisa los símbolos generados y guarda la biblioteca de la forma habitual.

Los archivos de biblioteca utilizan la extensión `.tclib` y se pueden almacenar en el ordenador o,
con la integración de Google, en Google Drive. Son compatibles entre sí con la
versión de escritorio de TinyCAD y la versión para navegador.

También puedes cargar bibliotecas creadas con la versión heredada v3 de TinyCAD.

<div class="manual-tabset" data-tabset="product-mode" data-tabset-label="Choose your TinyCAD product" data-default-tab="Browser" markdown="1">

### Navegador
{: #browser}

#### Abrir una biblioteca existente desde un archivo local
{: #open-an-existing-library-from-a-local-file}

1. Abre otra pestaña o ventana de TinyCAD web.
2. Usa **Abrir (Open)** para abrir un archivo de biblioteca `.tclib`.
3. Mantén esa pestaña abierta mientras trabajas con la biblioteca.

Una vez abierta la biblioteca, puedes explorarla o arrastrar símbolos desde esa ventana hasta
tu dibujo, o editar las definiciones de los símbolos de la biblioteca.

#### Hacer que una biblioteca de Google Drive esté disponible
{: #make-a-google-drive-library-available}

Si ya tienes bibliotecas creadas con TinyCAD de escritorio, concede a TinyCAD web
acceso a cada una de ellas:

1. En Google Drive, haz clic con el botón derecho en el archivo `.tclib`.
2. Selecciona **Abrir con (Open with) -> TinyCAD**.

<img src="/v4/images/media2/image1.png" alt="Google Drive context menu showing Open with TinyCAD for a library file" style="width: 6.26806in; height: 4.54514in;" />

Repite este proceso para **todas** las bibliotecas que quieras tener disponibles.

Esta acción abre la biblioteca para editarla. Si solo necesitas acceder a ella, puedes
cerrar esa pestaña o ventana después.

**Nota:** Google Drive a veces puede distinguir entre mayúsculas y minúsculas. Si `TinyCAD`
no aparece en **Abrir con (Open with)**, asegúrate de que `.tclib` esté en minúsculas.

En la sesión de dibujo:

1. Abre **Mis bibliotecas (My Libraries)**.
2. Haz clic en **Actualizar (Refresh)** junto a **Mis bibliotecas (My Libraries)**.

<img src="/v4/images/media2/image2.png" alt="My Libraries panel with the Refresh button used to reload available libraries" />

Después de actualizar, las bibliotecas aparecerán en la lista:

<img src="/v4/images/media2/image4.png" alt="My Libraries panel listing available custom symbol libraries"  />

Puedes explorar las bibliotecas desplegándolas:

<img src="/v4/images/media2/image3.png" alt="Library browser showing symbol search results and a preview button"  />

#### Crear una biblioteca nueva
{: #creating-a-new-library}

Usa el elemento de menú **Nueva biblioteca personalizada (New Custom Library)**:

<img src="/v4/images/media2/image5.png" alt="Menu with the New Custom Library command"/>

#### Editar una biblioteca
{: #edit-a-library}

Edita una biblioteca existente abriéndola en TinyCAD web con el botón **Editar (Edit)** de la biblioteca.

### Aplicación de escritorio
{: #desktop-app}

#### Añadir o quitar bibliotecas
{: #add-or-remove-libraries}

Antes de poder utilizar símbolos de una biblioteca, hay que añadirla a la
lista de bibliotecas, en **Mis bibliotecas (My Libraries)**.

![Panel lateral de Mis bibliotecas (My Libraries)](/v4/images/media/image9.png)

Para añadir una biblioteca a esta lista, haz clic en **Añadir (Add)**. Aparecerá un cuadro de diálogo de selección de archivos.
Selecciona un archivo de biblioteca con la extensión `.tclib`.

Para quitar una biblioteca de la lista, haz clic en el icono de edición de la biblioteca para abrir
el cuadro de diálogo de la biblioteca y, después, haz clic en **Quitar (Remove)**. Esto no elimina el archivo; solo
lo quita de la lista.

#### Editar una biblioteca
{: #edit-a-library-1}

Usa el cuadro de diálogo de edición de bibliotecas para seleccionar la biblioteca y haz clic en **Editar (Edit)**. Se abrirá una nueva
ventana con una vista en miniatura de la biblioteca.

![Editor de bibliotecas con miniaturas de símbolos](/v4/images/media/image10.png)

Usa la ventana de edición de bibliotecas para:

- Ver miniaturas de los símbolos de la biblioteca
- Añadir símbolos a la biblioteca
- Eliminar, duplicar y cambiar el nombre de los símbolos de la biblioteca
- Editar los gráficos, pines, nombres y atributos de un símbolo
- Mover símbolos de una biblioteca a otra

Selecciona un símbolo haciendo clic en él. Una vez seleccionado, puedes editarlo en la ventana principal
o usar los controles para duplicarlo o eliminarlo.

Cuando termines de editar la biblioteca, guárdala con los comandos habituales **Guardar (Save)**
o **Guardar como (Save As)**.

Para conocer el flujo de trabajo de edición de símbolos, consulta [Edición de un símbolo](../Editing-a-Symbol/).

#### Crear una biblioteca de símbolos
{: #creating-a-new-symbol-library}

Usa el botón **Nuevo (New)** del panel de bibliotecas. Se abrirá una nueva ventana con una
biblioteca vacía.

</div>

- Volver a [Símbolos y bibliotecas](../Symbols-and-Libraries/)
- Volver al [contenido de v4](../CONTENTS/)
