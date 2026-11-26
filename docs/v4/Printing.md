---
layout: default
---

# Printing and exporting

<div class="manual-tabset" data-tabset="product-mode" data-tabset-label="Choose your TinyCAD product" data-default-tab="Browser" markdown="1">

### Browser

In the File menu, choose **Export to PDF**. TinyCAD opens the drawing as a PDF in a new tab. Use the PDF viewer's print controls to print it.

<img src="/v4/Images/media/image12.png" alt="The File menu"  />


### Desktop App

Choose **File → Print** to open **Print Preview**. The drawing appears on the left and the printer settings appear on the right.

<img src="/v4/Images/desktop-print-preview.png" alt="TinyCAD Print Preview showing a drawing, printer settings and sheet selection" />

#### Print directly

1. If the drawing contains multiple sheets, use **Prev** and **Next** to preview them. All sheets are selected initially. Clear the checkboxes under **Sheets to Print** for any sheets you want to omit.
2. Choose a **Printer**, or leave **System default printer** selected. Set **Paper Size**, **Orientation**, **Copies**, **Colour mode** and **Double-sided printing**. Choose **Match drawing** to use the orientation of the first selected sheet.
3. Select **Print** to send the selected sheets directly to the printer. To reuse your settings next time, select **Save printer settings** before printing.

The **Paper Size** in Print Preview applies to the print job. To change the drawing's sheet dimensions, open [Page Size](../Page-Size/) in the **Settings** menu. You can enter the dimensions in millimetres or inches.

#### Advanced Print

Select **Advanced Print…** to create a PDF of the selected sheets at their drawing sizes. On Windows and macOS, TinyCAD opens the PDF in your default PDF viewer. Use that viewer's print controls to choose the printer and any additional options. On Linux, TinyCAD opens the PDF and shows the system print dialog. If you cancel that dialog, the PDF stays open.

**Advanced Print…** is also available when TinyCAD finds no printers. To save a PDF file for later, use **File → Export → Export to PDF**.

</div>

## SVG export

You can also export SVG. SVG is useful for embedding in documents/web pages.
Notes:

- SVG export contains the current sheet only (single page format)
- Free SVG-to-DXF converters are available online
- See [Page Size](../Page-Size/) if you need to adjust the sheet dimensions before printing or exporting.
- See [Design Details box](../Design-Details-box/) if you want title block details included in the output.
- See [Multiple Sheet Drawings](../Multiple-Sheet-Drawings/) if your design uses more than one sheet.

- Back to [Drawing](../User-guide/)
- Back to [v4 contents](../CONTENTS/)
