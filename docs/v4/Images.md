---
layout: default
---

# Images

Add images to a drawing for logos, reference pictures or scanned diagrams. You can paste an image from the clipboard or select a file using **File → Import → Image…** in both TinyCAD Desktop and the browser app.

Images are artwork on the sheet. They do not create components, pins or electrical connections. To turn a circuit image into editable symbols and wires, use the Desktop [AI assistant](../AI-Assistant/) instead.

## Copy and paste

1. In another application, copy the image itself, rather than its file name or a link. For example, use **Copy image** in a browser or copy a selection in an image editor.
2. Return to TinyCAD and click the drawing area so that you are not editing a text field.
3. Press **Ctrl+V** (**Cmd+V** on macOS).
4. Select the pasted image and drag it to the required position.

Clipboard images in PNG or JPEG format are supported. If an image will not paste, save it as a file and use Import instead. You can also copy and paste images already placed in a TinyCAD drawing.

## Import from a file

1. Open **File → Import → Image…**. In the browser app, open the **File** menu using the document icon on the toolbar.
2. Select an image file and confirm the file picker.
3. The image appears on the current sheet. Select it to move, resize or clip it.

PNG and JPEG files are embedded directly. Other formats that the browser can decode, such as GIF, WebP, BMP and SVG, are converted to PNG. Imported images are still pictures; animation is not retained. Format support depends on the browser, or the browser engine included with TinyCAD Desktop. An unreadable or unsupported file produces an error.

You can also drag a PNG or JPEG file onto the drawing to place it at the drop position.

## Move and resize

Click an image to select it. Drag its body to move it, or drag a corner or edge handle to resize it.

The bottom properties bar shows an **Image** section when an image is selected. Enable **Fixed aspect ratio** to keep its current width-to-height proportions while resizing. Disable it to resize the width and height independently. Moving the image does not change its proportions.

**Reset aspect ratio** restores the original proportions of the visible image, accounting for any clipping. It keeps the current width and top-left position and adjusts the height. The Fixed aspect ratio checkbox keeps its current setting. You can undo the reset.

## Clip the edges

Use **Left clipping (px)**, **Right clipping (px)**, **Top clipping (px)** and **Bottom clipping (px)** in the Image properties to hide unwanted borders or parts of a picture.

- Values are whole pixels measured in the original image, independently of its displayed size or the drawing's grid.
- For example, setting **Left clipping (px)** to **20** hides the leftmost 20 pixels of the source image.
- Clipping keeps the remaining pixels at their existing scale and position; the visible boundary moves inward instead of stretching the picture.
- At least one pixel must remain in each direction. The controls limit each edge accordingly.
- Set an edge back to **0** to restore it. Clipping does not remove pixels from the embedded original.

**Undo** and **Redo** apply to image insertion and property changes as well as movement and resizing.

## Saving and output

Images are embedded in the drawing file, so the original file does not need to remain at its import location. Save the drawing normally to keep its images, fixed-aspect settings and clipping. These settings survive reopening and are also retained in compressed `.dzn` drawings.

Clipping belongs to each placed image, so separate copies can show different parts of the same picture. The visible image is included in printing, PDF and SVG output.

- Back to [Drawing](../User-guide/)
- Back to [v4 contents](../CONTENTS/)
