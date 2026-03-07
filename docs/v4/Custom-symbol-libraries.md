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

Before any symbols can be used from a library, the library must be selected as
in use. This is done by using the Libraries option in the Library menu.

![Libraries dialog showing the list of symbol libraries currently in use](/v3/images/image10.png)

This dialogue displays a list of libraries in use. Before a library can be
edited or before a symbol can be extracted from a library it must be listed
here. Once the library is listed then you can extract symbols from it using the
Get option on the Toolbar.

To add a library to this list click on the Add button. A file selection
dialogue will appear. Select a library index file (with a `.idx` file
extension) or database file (with `.mdb` extension). The selected library will
be added to the list.

To remove a library from the list, click on the library in the list to select
it and then click on the Remove button. This does not, in any way, delete the
file and library is still available to others. To actually delete the library
you must use Windows Explorer.

Libraries that do not exist can also be listed here. If the library does not
exist, then you will be informed every time the library's index is read. This
normally occurs when TinyCAD is first started and re-read libraries option in
the Library menu is selected.

You can open the thumbnail view of the library by double clicking on the
library name in the list box, or by selecting it and then clicking on the edit
button.

Upgrading a library converts it from the old format to the new Microsoft Access
database format. This format creates a slightly larger file, however, it will
enable TinyCAD to have more features in the future.

As of TinyCAD 1.90.00, the **Tidy** option is no longer required for the new
library format, and so has been removed from this dialogue.

#### Editing and printing libraries

Use the library dialogue to select the library to edit. Once selected you will
see a new window with a thumbnail view of the library. If the library is a
brand new library then the window will be blank.

![Library editor showing symbol thumbnails](/v3/images/image11.png)

Use the library editing window to:

- See all of the thumbnails of the symbols in the library
- Add new symbols to the library
- Delete and rename symbols in the library
- Edit a symbol's names and attributes
- Move symbols from one library to another
- Export symbols into an XML file
- Import an XML file of symbols into this library

You can select symbols in the library by clicking on them. Once selected you
can use the **Symbol** menu to edit or delete the symbol. You may also
right-click on thumbnails to bring up a context menu, which is a shortcut for
going to the symbol menu.

Use the symbol menu or the context menu to add a new symbol to the library.

A shortcut to editing a symbol is to double-click on it.

#### Editing and adding symbols

Symbols are created from normal objects found on the Toolbar. They may contain
any of these objects except other symbols.

If the symbol does contain any objects with special functions (such as a power
item or a wire) then these object will be treated as though they were
annotation. All their special functions are lost when used in a symbol.

To edit an existing symbol, first select the library you wish to edit in the
Libraries option of the Library menu.

Next select the symbol to edit in the Library thumbnail view by clicking on it.
A new symbol editing window will open with the symbol in it. The symbol may be
edited in the same way that a normal design can be edited, with the exception
no symbols may be inserted but pins may be added.

When you have finished use the Save option in the File menu or simply close the
window. This will enable you to save the new symbol back to the library. The
dialogue box automatically remembers the details of the symbol selected. If you
enter a different name here then the symbol will be store under the new name,
making a copy of the symbol. If you enter the name of an existing symbol then
it will replace the old symbol in the library.

##### Symbol pins

Connections to a symbol is via its pins. It is important to correctly select
the type of each pin. This enables the Netlist generation and Check Design
Rules in the Special menu to operate correctly. The pins also enable the
part-per-package feature to work correctly.

The design rules determine the type of each pin and can determine if you have
made a mistake in your design. For example it can check that every net has at
least one pin of type **output** connected if the net also has one or more pins
of type **input**. To do this you have to select the correct electrical type of
each pin when you create the symbol.

##### Multiple parts per package

Some semiconductors have multiple parts per package. You can define a different
set of pins per package and optionally outlines for each symbol. When you
insert the symbol in to your design, you can select which package to use from
the symbol.

There are two types of symbols with multiple parts per package. These are
homogeneous and heterogeneous symbols:

1. A homogeneous symbol has the same outline, but different pins for each part
	in the package.
2. A heterogeneous symbol has a different outline and different pins for each
	of the parts in the package.

Use homogeneous symbols when the parts are interchangeable. Use heterogeneous
symbols when the different parts represent different aspects of the symbol and
therefore cannot be interchanged.

Before drawing your symbol decide which type it is to be and then use the
**Homogeneous** or **Heterogeneous** option in the Library menu or right click
on the tabs at the bottom of the view. These options will only work before you
have set the number of parts per package.

Then use the **Set part per package** option in the Library menu or right click
on the tabs at the bottom of the view. This option will enable to select the
number of parts per package for the symbol. Use the tabs at the bottom of the
symbol to select between editing the different parts.

For a homogeneous symbol, any edits to the outline will be for all parts. For a
heterogeneous symbol you may have a different outline for each part.

![Multi-part symbol editor showing package parts tabs](/v3/images/image12.png)

For example, the 7402 has 4 parts per package. These parts are labelled A, B,
C and D. This is a homogeneous symbol and so the only difference between each
part is the pin numbers.

#### Creating a new symbol library

Creating a new library is easy. Use the **New** button on the library editing
dialogue. A blank library will be created with the name that you specify.

Double click on the library to edit it. You may now add your first new symbol.

#### Symbol properties

![Symbol properties dialog with names and default attributes](/v3/images/image13.png)

This dialogue is used to edit the symbol's names and default attributes. As of
version 2.00.00 of TinyCAD you can now give the symbol more than one name.
Associated with each name of the symbol can be as many different default
attributes as required. There is no restriction on the symbol name, you may use
upper or lower case and the name may include spaces.

You can access this dialogue in two ways. Either right click on the symbol in
the thumbnail view and select **Symbol Properties**, or it is displayed after
you edit a symbol when you close or save the window.

If you wish the symbol to have more than one name in the library then use the
**Add name** option. Each name has its own set of default attributes and
description. You can use additional names to give different attributes to the
same basic symbol. For example you may wish to have a different name for a
capacitor for each of the different PCB packages (footprint) that you use in
your PCB program.

You can also add any number of extra parameters to the symbol. Use the **Add**
and **Delete** buttons to add new parameters to the symbol. You cannot delete
the name or the reference, as these are always required by a symbol.

You must enter the default reference for the symbol. This is the text that
appears in the reference field of the symbol when it is first extracted from
the library using the Get command. Remember that the reference should normally
be a single letter followed by a `?`. For example: `U?`

These extra parameters can be used to store any information you like. For
example, PCB layout information or SPICE information. This information is shown
to the user when the symbol is placed into the design. The parameters are also
written out in the netlist (see the Special menu).

Click the **OK** button to store the symbol, or **Cancel** to exit without
changing the symbol.

</div>

- Back to [Symbols & Libraries](../Symbols-and-Libraries/)
- Back to [v4 contents](../CONTENTS/)
