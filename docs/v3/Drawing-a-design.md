---
layout: default
---

# Drawing a design

Designs are created from built-in objects such as wires, junctions, etc., and from imported component symbols, such as diodes, transistors, etc.

## To place symbols in to your design


1. Use the Symbol picker on the left of the screen to browse and select the symbols that you need for your design.

2. If you don't know the name of the symbol you want then you can use the search facility on the dialogue. Enter a word describing the component. As you do so the list of components will be reduced to include just those that contain the text in either their name or description. If the symbol isn’t present, then you will have to create a new one – this is described in the section on libraries.

3. Place the symbols on the design, by selecting them as the current tool. Do this by either double clicking on the name, selecting the “Get” button on the symbol picker or click on the preview of the symbol.

4. You place the symbol by clicking the location of where you wish to place the symbol. You can rotate the symbol by using the tool dialogue that normally sits at the top right of the drawing area. Select “Up”, “Down”, “Left” or “Right” to orientate the symbol.

5. Once you have finished placing symbols of that type, right click with the mouse to end.

You can move a symbol’s text fields around. First select the symbol for editing, and then you can drag any of the symbol’s fields with the mouse to a new position on the drawing.

At any one time a certain number of symbol libraries are in use. The libraries to be searched are listed in the libraries option of the Library Menu. Before you can start using symbols at least one symbol library must be listed here. (See the Library Menu, in the menu reference for more help on adding a library to this list).

## To replace a symbol in your design

If you edit a symbol or change which symbol you want to use then you may wish to change all of the similar symbols in your
design to match.

The function you are looking for is "Replace symbol".

Right click on the symbol you wish to change and select the option "Replace symbol" from the menu.  The dialog will 
suggest a new symbol, however, you can change the symbol by using the built in search function.

You then have the option to replace all symbols or just this single one.


## To wire up your design

1. Use the wire tool, which is the blue line on the toolbar.

2. Move the mouse over the start point of your wire, a small red circle will highlight any active points on a symbol or another wire that it is suitable to start wiring from.

3. Every time you click with the left mouse button you will place a corner in your wire.

4. Continue drawing the wire. To end, select another active point (which is shown with the red circle).

5. Notice how the wire tool is magnetic towards symbols’ pins and other wires.

6. When you place a wire connecting to another wire a junction is placed for you automatically.

It is a common mistake to use polygon lines instead of wires to wire up components. This should be avoided because TinyCAD will not be able to use the special features for you. Wires automatically snap to symbols, and without wires you cannot export your circuit to a PCB design program.


## Editing your drawing

![Image](/v3/images/image4.png)

Once a symbol has been placed you may want to change its properties. The edit tool in the drawing toolbar is use for editing already placed objects. Normally you don’t have to select the edit tool as it is the default tool after you have finished with a different tool. To select it manually click on the white mouse arrow toolbar button.

Whilst drawing an object you may wish to move to another area of the design, so that you can move the object to a part of the design not currently shown. Do this by dragging with the middle mouse button (normally the scroll-wheel) to pan the drawing, or use the scroll-bars. You can also use the scroll-wheel to zoom in and out on your drawing.

Use the edit tool in the normal Windows' way – click on objects to select them, or select multiple objects using the Ctrl-key or dragging out an area. If you have just one item selected then its options dialogue will be shown to let you change the options of that object.

You can move objects in the normal Windows' way, which is to select the objects and then drag them. By default the connected wires come too, however, if you wish to unhook a symbol from its wires then drag with the Ctrl-key held down.

To delete selected objects use the delete option on the drawing toolbar (a red cross) or use the delete key. The normal cut, copy and paste options are also available to you. You can access these from the edit menu or use the right-mouse button to bring up the context menu.

If you prefer you don't have to use the new Windows' editing features of TinyCAD, still available to you are the block move, block drag, and duplicate block tools. These can be found in the block toolbar.

If you wish to rotate part of a design (by 90 degrees), then you have to use the block rotate object in the block toolbar. Outline the area you wish to rotate and then use the tool buttons to rotate the selected area.

There is a full undo/redo buffer built into TinyCAD. If you make a mistake you can undo your changes with the “Undo” command in the Edit menu.

Whilst you are editing your drawing it is saved automatically for you so you don’t lose any work should TinyCAD crash. The default for Autosave is to save your drawing every 10 minutes. The backup drawing is saved in the same directory as the original but with an “autosave” extension.

## Symbol attributes

![Image](/v3/images/image5.png)

Each symbol has at least two text attributes associated with it.

### The Name attribute

This is the name or type of the component that the symbol represents. If the component has a value then insert the value here. For example, if it were a resistor then the name might be 330R or 4k7. If the symbol represents a phono connector then the name might be Phono.

### The Reference attribute

This is an identifier that is unique to the whole design, typical values might be R1 or Q3 etc. There may be many resistors each with a Name field of 330R, however, each resistor must have a unique Reference. There should only be one symbol with reference R1 in a design.

This field can normally be left as it is, you can use the Special tools to set the references automatically. Either use the reference painter to “paint” each reference or use the add symbol references automatically.

### The Package attribute

This is the attribute is used for PCB netlist export. The PCB layout program will use this attribute to determine which pad layout to use. There is no fixed naming convention for this attribute and it is entirely dependent on the footprint libraries supplied with your PCB layout program.

Not all symbols have the package attribute by default. You must add it if you wish to export to a PCB program. To add it, simply click on the “Add” button, and then rename the new attribute to Package.

### Other attributes

You may add additional attributes to a symbol from the symbol's tool dialogue. There is no real limit to the number of attributes you add. You may use these references for almost any purpose, for example you may wish to add PCB layout instructions here.

All of the the symbols in the supplied libraries have an “other” attribute already defined for you. However, you can add more if you wish. Either add them by default by editing the symbol in the library or add them individually to each symbol at placement time.

## Automatic junction placement

Junctions are placed automatically for you, so normally you don't need to use the junction tool.

Where two wires cross they are not considered joined unless a junction is used at the crossing point. Junctions are also required when a pin is connected to the middle of a wire.

If you wish to place junctions manually, then switch automatic junction placement off, in the Options → Settings dialogue, and then the junction tool will be available to you.

When automatic junction placement is on, you cannot select junctions.

# Advanced drawing techniques

For the more advanced schematics, TinyCAD has more advanced features.

## No Connects

Normally all of the pins on a symbol must be connected. There may be times when you wish to leave a pin unconnected but wish to show that you haven't forgotten the pin and it is intentionally left unconnected.

If you do not wish to connect to a certain pin then use the no-connect option on the Toolbar. Place a no-connect on every pin that is not to be connected to anything else.

Any unconnected pins can be found by using the the Design Rules Checker in the Special menu.

## Adding power

![Image](/v3/images/image6.png)

Power objects in your design show where power is connected into your circuit. Various shapes of power symbols are defined.

You must always make the connection to power at the end of the power object's pin. A junction may be necessary if the connection is to the center of a wire or where wires cross. If a junction is necessary it will be placed automatically for you.

The shape of the power object is ignored - it is the value of the power item which is important. All items connected to power objects of the same value are considered connected together.

Some component symbols, such as the 74 TTL library symbols, are automatically connected to power. To ensure the power is correctly connected, always use the same power names that are used in the library. For example, when using the 74 TTL library use the power names GND and VCC for 0v and 5v respectively.

## Using labels

![Image](/v3/images/image7.png)

You may use the rotate left or right or flip shortcut keys while placing labels.

All wires with the same label name will be considered connected together. This way a connection between the wires is formed without you having to actually draw it.

Use labels to connect wires between sheets in the same files or to connect wires that are not fully drawn as connected on the same page due to schematic crowding or personal preference.

## Adding buses

![Image](/v3/images/image8.png)

Buses can be used to indicate a large number of connections. To help you draw a bus the repeat options are present.

To create a bus, first draw the bus near where you wish to connect it. Now add a bus entry to the bus. Press 'R' (for repeat in the Edit Menu) to repeat this as necessary for the number of entries you wish to make.

Draw a wire from the bus entry to the connection point. Now press 'R' again, to complete all the wire connections.

Finally you must add the labels. Place the first label. Depending on your repeat options the label name will be updated automatically. Place a label over each wire.

Now the bus connection is complete!

Use the same names for the bus entries on all connections to bus; however, the order of the names is unimportant. Buses do not require junctions anywhere on them.

Once a bus is in place, you may name the bus using the Bus Name tool. You may use this to place some text next to the bus. The name can indicate how many conductors the bus represents, by specifying just a single number, or it may qualify what the bus is for example by calling it &quot;Data Bus&quot; etc.

# Adding text and annotations

You may add the following annotations: text, lines, rectangles, ellipses and arcs. All these objects will be ignored by the special tools.

Annotations may cross wires, symbols and junctions without affecting them. How these objects are used is completely up to you.

![Image](/v3/images/image9.png)

## Drawing rectangles and ellipses

Rectangles and ellipses can be filled and TinyCAD now uses the Windows' default color selection dialogue which gives you access to all of the colors.

To draw a rectangle or ellipse, select the correct tool in the annotation toolbar, and then drag the outline of the shape with the left mouse button. When you release the mouse button the shape will be selected, ready for repositioning if required.

The shapes can be edited by selecting them, by clicking on them and then using the handles to move and resize the shape.

You may also select the styles of the lines and the fill color by using the tool dialogue, normally displayed in the top right hand corner of the drawing.

## Drawing polygons &amp; polylines

A polyline is a set of connected lines, all of which have to be the same width and color. A polygon is a closed set of connected lines, which is filled.

To draw either a polygon or polyline first select the tool in the annotation toolbar. Then draw the shape by clicking with the left mouse button to place each corner of the shape. When you have finished place the last corner by either double-clicking or by using the right-click context menu.

When finished, the shape will be selected ready for editing. You may select a fill for the shape and select the line style using the tool dialogue normally displayed in the top right hand corner of the drawing. When filling an open polyline, an additional line will be added, from the end point to the start point, closing the loop and creating a closed set of lines, a polygon.

You may add arc'ed segments to the outline of the shape by either using the tool dialogue, or by using the right-click context menu.

### Editing Polygons and Polylines

Once placed the polygon or polyline can:

* Be resized as a complete shape
* have any of the corners moved
* have a new corner added
* have a corner deleted
* have a side changed from straight to arc'ed

Resize and move the polygon or polyline using the handles displayed once the shape is selected.

To add a corner, right click on the location you wish to add the corner and select new handle from the menu.

To remove a corner, right click on the handle of the corner you wish to remove and select delete handle.

To change a line from straight to arc'ed or back again, right click on the line you wish to change and select one of the arc options from the menu.

# Changing the drawing order

If one of your annotations is obscured by another then right-click on it and use the “Z-Order” menu to bring it the top of the drawing order or send it back behind all other annotations.
