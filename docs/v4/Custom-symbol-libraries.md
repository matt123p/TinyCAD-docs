---
layout: default
---

# Custom Libraries

Symbols form a very important part of laying out designs. Symbols are collected
together in symbol libraries. You may edit and create your own new symbols and
libraries.

The library file can be stored on your computer or (in the case of Google integration) on Google Drive.

Libraries use the `.tclib` extension and are cross compatible between the desktop version of TinyCAD and
the browser version.

You can also load libraries that were written by the legacy v3 version of TinyCAD.

<div class="manual-tabset" data-tabset="product-mode" data-tabset-label="Choose your TinyCAD product" data-default-tab="Browser" markdown="1">

### Browser

#### Using existing libraries (local files)

1. Open another TinyCAD web tab/window.
2. Use **Open** to open a `.tclib` library file.
3. Drag and drop symbols from that window into your drawing.

#### Using existing libraries (Google Drive)

If you already have libraries created with desktop TinyCAD, grant TinyCAD web
access to each one:

1. In Google Drive, right-click the `.tclib` file.
2. Choose **Open with -> TinyCAD**.

<img src="/v4/images/media2/image1.png" alt="Google Drive context menu showing Open with TinyCAD for a library file" style="width: 6.26806in; height: 4.54514in;" />

Repeat this for **every** library you want available.

This action opens the library for editing. If you only need access, you can
close that tab/window afterward.

**Note:** Google Drive may sometimes behave case-sensitively. If `TinyCAD`
does not appear in **Open with**, ensure `.tclib` is lowercase.

Back in your drawing session:

1. Open **My Libraries**.
2. Click **Refresh** next to **My Libraries**.

<img src="/v4/images/media2/image2.png" alt="My Libraries panel with the Refresh button used to reload available libraries" style="width: 3.09375in; height: 1.10417in;" />

After refresh, libraries are listed:

<img src="/v4/images/media2/image3.png" alt="My Libraries panel listing available custom symbol libraries" style="width: 3.26042in; height: 5.4375in;" />

You can browse libraries by expanding them, search for symbols, or open symbol
preview with the magnifying glass button:

<img src="/v4/images/media2/image4.png" alt="Library browser showing symbol search results and a preview button" style="width: 3.375in; height: 2.28125in;" />

#### Creating a new library

Use the menu item **New Custom Library**:

<img src="/v4/images/media2/image5.png" alt="Menu with the New Custom Library command selected" style="width: 2.44792in; height: 3.1875in;" />

#### Editing a library

Edit an existing library by opening it in TinyCAD web via:

- **Open** button in TinyCAD web, or
- Google Drive **Open with -> TinyCAD**

##### Editing a symbol

Click a symbol in the library side panel to load it into the editor, then edit
as needed.

##### Adding a symbol

Click the `+` button at the end of the symbol list in the side panel.

When creating symbols, use proper **Pin** objects for electrical connection
points. Correct pin usage is essential for expected behavior in schematics.

Pin size, shape, and type are configured in the side panel:

<img src="/v4/images/media2/image6.png" alt="Pin properties panel showing pin type, shape, and size settings" style="width: 4.44792in; height: 5.32292in;" />

##### Deleting a symbol

Use the symbol menu button and choose **Delete**.

Deletion can be undone using toolbar **Undo**.

##### Duplicating a symbol

Use the symbol menu button and choose **Duplicate**.

##### Renaming a symbol

Rename by editing symbol properties and changing the **Name** field.

### Desktop App


#### Selecting libraries

Before any symbols can be used from a library, the library must be added to the
list of libraries, under "My Libraries".

![Side panel of My Libraries](/v4/images/media/image9.png)

To add a library to this list click on the Add button. A file selection
dialogue will appear. Select a library file (with a `.tclib` file
extension).

To remove a library from the list, click on the edit icon (a pencil) on the 
library in the list to bring up the Library Edit dialog and then click on the
Remove button. This does not, in any way, delete the file - it just removes it
from the list.

#### Editing libraries

Use the Library Edit Dialogue to select the library and then click the Edit button. 
A new window will open with a thumbnail view of the library. 

![Library editor showing symbol thumbnails](/v4/images/media/image10.png)

Use the library editing window to:

- See all of the thumbnails of the symbols in the library
- Add new symbols to the library
- Delete and rename symbols in the library
- Edit a symbol's names and attributes
- Move symbols from one library to another

You can select symbols in the library by clicking on them. Once selected you
can use the buttons to duplicate or delete the symbol. 

Once selected a you can edit a symbol by drawing in the main window.

When you have finised editing the library you can save it by using the normal
Save or Save As in the menu.

#### Creating a new symbol library

Creating a new library is easy. Use the **New** button on the library panel. 
A new window will open with an empty library.

</div>

- Back to [Symbols & Libraries](../Symbols-and-Libraries/)
- Back to [v4 contents](../CONTENTS/)
