---
layout: default
---

# Your first drawing

This page will take you through the steps of drawing your first circuit diagram with TinyCAD.

At its simplest level, a TinyCAD drawing is a collection of symbols linked
using wires.  In this example, you will place some symbols and then join them up with wires.

## Example circuit

Here is a simple circuit to draw:

<img src="/v4/images/media/image1.png" alt="Simple battery, resistor, and LED circuit used in the tutorial" style="width: 2.13542in; height: 1.13542in;" />

<p>
	<a href="/v4/examples/First%20Drawing.dsn" class="btn btn-primary" download>
		<i class="bi bi-download me-1" aria-hidden="true"></i>&nbsp;Download
	</a>
</p>


## Video Walkthrough

{% include video-player.html
	src="/v4/images/video/Video 2.mp4"
	width=1618
	height=922
	caption="Video walkthrough showing how to edit and reposition symbol text."
%}

# Step by step guide

## Symbol libraries

1. Type `battery` in the search box.
2. Select **Multi Cell Battery**.
3. Drag the symbol from the symbol panel onto the drawing.

Now place a resistor and an LED.

Use the toolbar rotate/flip controls to orient symbols:

<img src="/v4/images/media/image5.png" alt="Rotate and flip controls used to change symbol orientation" />

If you make a mistake, use Undo/Redo:

<img src="/v4/images/media/image6.png" alt="Undo and Redo toolbar buttons" />

Your drawing should look similar to:

<img src="/v4/images/media/image7.png" alt="Battery, resistor, and LED symbols placed on the drawing before wiring" style="width: 3.76042in; height: 2.52083in;" />

## Wiring up a circuit

1. Select the **Wire** tool.
2. Click a battery terminal to start a wire.
3. Move to the resistor terminal and click again to place the wire.

Wires snap to valid symbol connection points. A red circle indicates a snap
location.

Tip: press `W` on the keyboard to re-enter wire mode quickly.

After wiring, it should look similar to:

<img src="/v4/images/media/image8.png" alt="Example circuit after the battery, resistor, and LED have been wired together" style="width: 3.40625in; height: 2.38542in;" />

## Annotating the drawing

Symbols need component values and references. In TinyCAD these are typically
the symbol **Name** and **Ref** fields.

1. Click the battery.
2. Go to the **Symbol** panel at the bottom.
3. Change `BATTERY_2` to `9V`.
4. Change reference `Z?` to `B1`.

Repeat for the other parts:

- Resistor: Name `1K`, Ref `R1`
- LED: Name `Red Led`, Ref `D1`

If a name/reference is hidden, use the checkbox controls to show or hide text
on the drawing.

## Loading and saving

<div class="manual-tabset" data-tabset="product-mode" data-tabset-label="Choose your TinyCAD product" data-default-tab="Browser" markdown="1">

### Browser Local Files

To save your drawing use the "Save As" or "Save" buttons on the toolbar:

<img src="/v4/images/media/image2.png" alt="The toolbar buttons for Save and Save As"  />


### Browser Google

Your first drawing is complete. To rename it:

1. Click the drawing name at the top (for example `tCad1.dsn`).
2. Rename it to `First Drawing.dsn`.
3. Press Enter.

<img src="/v4/images/media/image13.png" alt="Editable drawing title field used to rename the current design" style="width: 4.15625in; height: 0.92708in;" />

Save to Google Drive using the **Save** icon.

To load it again from Google Drive:

1. Open <https://drive.google.com/drive/>.
2. Find the drawing.
3. Right-click and choose **Open with -> TinyCAD**.

<img src="/v4/images/media/image14.png" alt="Google Drive context menu showing Open with TinyCAD for a drawing file" style="width: 5.09138in; height: 3.90625in;" />

You can also rename and delete TinyCAD designs in Google Drive.

### Desktop App

Your first drawing is complete. To save it from the desktop app:

1. Open **File -> Save As**.
2. Choose a folder on your computer.
3. Save the drawing as `First Drawing.dsn`.

To load it again later:

1. Open **File -> Open**.
2. Browse to `First Drawing.dsn`.
3. Select the file and open it.

TinyCAD desktop uses the same `.dsn` format as TinyCAD in the browser. You can
download a drawing from Google Drive and open it in the desktop app.

Likewise, you can use drawings you have done on the Desktop version of TinyCAD with
the Browser based version.

</div>

## Further reading

For custom symbols and libraries, continue with
[Custom symbol libraries](../Custom-symbol-libraries/).

- Back to [Drawing](../User-guide/)
- Back to [v4 contents](../CONTENTS/)
