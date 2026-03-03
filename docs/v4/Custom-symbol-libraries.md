---
layout: default
---

# Custom Libraries

TinyCAD for the web supports custom symbols stored in symbol libraries.
Libraries use the `.tclib` extension and are compatible with desktop TinyCAD.

## Using existing libraries (local files)

1. Open another TinyCAD web tab/window.
2. Use **Open** to open a `.tclib` library file.
3. Drag and drop symbols from that window into your drawing.

## Using existing libraries (Google Drive)

If you already have libraries created with desktop TinyCAD, grant TinyCAD web
access to each one:

1. In Google Drive, right-click the `.tclib` file.
2. Choose **Open with -> TinyCAD**.

<img src="/v4/images/media2/image1.png" alt="Open library with TinyCAD" style="width: 6.26806in; height: 4.54514in;" />

Repeat this for **every** library you want available.

This action opens the library for editing. If you only need access, you can
close that tab/window afterward.

**Note:** Google Drive may sometimes behave case-sensitively. If `TinyCAD`
does not appear in **Open with**, ensure `.tclib` is lowercase.

Back in your drawing session:

1. Open **My Libraries**.
2. Click **Refresh** next to **My Libraries**.

<img src="/v4/images/media2/image2.png" alt="Refresh libraries" style="width: 3.09375in; height: 1.10417in;" />

After refresh, libraries are listed:

<img src="/v4/images/media2/image3.png" alt="My libraries list" style="width: 3.26042in; height: 5.4375in;" />

You can browse libraries by expanding them, search for symbols, or open symbol
preview with the magnifying glass button:

<img src="/v4/images/media2/image4.png" alt="Library symbol preview" style="width: 3.375in; height: 2.28125in;" />

## Creating a new library

Use the menu item **New Custom Library**:

<img src="/v4/images/media2/image5.png" alt="New custom library menu" style="width: 2.44792in; height: 3.1875in;" />

## Editing a library

Edit an existing library by opening it in TinyCAD web via:

- **Open** button in TinyCAD web, or
- Google Drive **Open with -> TinyCAD**

### Editing a symbol

Click a symbol in the library side panel to load it into the editor, then edit
as needed.

### Adding a symbol

Click the `+` button at the end of the symbol list in the side panel.

When creating symbols, use proper **Pin** objects for electrical connection
points. Correct pin usage is essential for expected behavior in schematics.

Pin size, shape, and type are configured in the side panel:

<img src="/v4/images/media2/image6.png" alt="Pin properties" style="width: 4.44792in; height: 5.32292in;" />

### Deleting a symbol

Use the symbol menu button and choose **Delete**.

Deletion can be undone using toolbar **Undo**.

### Duplicating a symbol

Use the symbol menu button and choose **Duplicate**.

### Renaming a symbol

Rename by editing symbol properties and changing the **Name** field.

- Back to [Symbols & Libraries](../Symbols-and-Libraries/)
- Back to [v4 contents](../CONTENTS/)
