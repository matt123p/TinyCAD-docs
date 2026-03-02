---
layout: default
---

# File menu 

## New 

This gets rid of the current design. All drawings in the current design are removed. If the current design has not been saved then you are asked to confirm before the design is lost.

## Open 

This option opens a previously saved design for editing or printing. If there is already a design being edited it will be lost. If the current design has not been saved then you will be asked to confirm before continuing.

## Close 

Close the current window. This option will prompt you save any changes if you have made any.

## Save 

This option saves the current design, its page set up and the design details are all saved in a single file. If the design has already a file name associated with it then it will be saved using this file name without prompting. If the design has never been saved then you will be prompted for a new file name before it is saved.

## Save As 

This option is similar to the Save menu option; however, you will always be prompted for a file name. Using this option you can save the current design using a new file name or place it into a different directory.

## Design Details 

![Image](/v3/images/image17.png)

Each design has details of its full title, the author, ''etc''. This option allows you to change these details. When the design is next saved, these details are saved with the design.

If the Display Details box is checked then these details will be displayed and printed in the bottom right hand corner of your design.

## Import 

Using this option you can place into the current design another previously saved or exported design.

When selected you will be prompted to enter the file name of a saved design. This design will be loaded and displayed. You can move the positioning of the imported design with the mouse. Place the design using the left mouse button or cancel the operation using the right mouse button.

## Save as bitmap 

Using this option you can save a copy of the design as a PNG file for sharing with people who do not have TinyCAD installed on their computers. If you have an area of the design selected then just that area will be saved into the PNG file. If nothing is selected on the design then the entire design, including the design details and design rulers will be written into the bitmap.

## Print 

Use this option print to any installed the windows printer.

If the drawing is larger than the paper size of the printer, then it is split up over as many pages as it takes to print the design in tiles.

## Print Preview 

This option is to show you how the design would be printed on your printer. You can use this option to see if it will be printed the way you want before you actually print on paper.

## Page Setup 

![Image](/v3/images/image18.png)

This option allows you to select the total size of the design.

Some commonly used values are given. If you prefer you can enter your own size in millimeters of the page. Selecting Portrait will ensure the design is taller than it is wide; selecting Landscape will ensure the design is wider than it is tall.

The printer setup option is used with the printer setup button. Click on the printer setup button and select the printer and the type of paper you will use. Now when you return to the Set Page Size dialogue the width and height of the design will be set to match exactly the printable area of the printer.

The page size is saved with the current design when it is saved. The last page size entered here will be remembered for the next new design you start.

## Exit 

This option will exit the program and remove it from memory.

# Edit menu 

## Undo 

This option undoes the last action or sequence of actions performed on the design. For example, you can Undo the last drawing operation or undo the last deletion.

You may select this option repeatedly. This will cause the design to return to even more distant versions.

The opposite of this option is Redo.

## Redo 

This option is the opposite of the Undo option. If you select Undo then the last operation of the design will be undone. If you then change you mind about the Undo, selecting Redo will reverse the action of Undo.

## Repeat 

If the last object placed in the design was repeatable, this option creates another copy of it in a new location (depending on the repeat direction).

Only wires, line, dashed lines, buses and bus entries can be repeated.

They are repeated above, below, to the left of, or to the right of, the last placed object. This can be selected by the Up, Down, Left, Right option in the repeat directions menu.

## Cut 

This option enables you to move parts of the design which have been selected to the clipboard. Once it has been moved to the clipboard you may use paste to re-insert them into a different part of the design, and may paste again and again to duplicate a part of the design.

To select objects in the design use the edit item option on the toolbar.

You may also paste into other Windows applications such as Microsoft Word.

## Paste 

This option takes a previously copied or cut part of a design and enable you to place it into the current design.

Once this option has been selected the pasted design will be displayed at the mouse pointer. To paste it in click with the left mouse button, to cancel click with the right mouse button.

## Copy 

This option enables you to copy parts of the design which have been selected to the clipboard. Once it has been copied to the clipboard you may use paste to re-insert them into a different part of the design, and may paste again and again to duplicate a part of the design.

To select objects in the design use the edit item option on the toolbar.

You may also paste into other Windows applications such as Microsoft Word.

## Copy to... 

Using this option you can save just part of the current design. This part can be loaded as a design in its own right, or imported into another design.

Only the current selection will be written into the output file. A dialogue box will prompt you to enter the file name to save the export design. Remember, this dialogue can be moved out of the way to see which parts of the design have been selected.

## Find 

This options can be used to find specific uses of text in the design. The user enters the text to be found. This text is then searched for in the design. Each occurrence of the string is has a marker placed on it and all the occurrences are placed in the design marker dialog.

The markers are removed from the design when the dialog box is close. Clicking on the text in the dialog box moves the associated marker to the center of the design window.

## Tag 

This option prompts you to name the selected area, and adds the tag to the design. When the tag is re-selected using the Tags option, this same area of the design is displayed in the design window.

## Set Tag 

This option prompts you to name the selected area, and adds the tag to the design. When the tag is re-selected using the Tags option, this same area of the design is displayed in the design window.

By naming different parts of the design, a large design can still be navigated using these tags.

## Zoom In 

Increase the size of the drawing to show more detail. You can also zoom in using the mouse scroll-wheel or by using the zoom tool from the drawing toolbar.

## Zoom Out 

Increase the size of the drawing to show more of the drawing. You can also zoom out using the mouse scroll-wheel or by using the zoom tool from the drawing toolbar.

# Library menu 

## Libraries 

This option brings up the dialogue box which allows the setting up and editing of libraries.

![Image](/v3/images/image10.png)

The list in the dialogue box is a list of libraries searched when the Get option (in the Library menu) is used. You may add or remove these libraries from this list using the buttons at the side of the list.

The Add button in the dialogue allows a library not currently being searched to entered into the search list. When this option is selected a file selection dialogue appears. Select the index file (those files with .idx extensions), which belongs to the library you wish to use. The library is then added to the list box.

The Remove button removes a library from the search list. It does not delete it! Select the library you wish to remove by clicking on it in the list box, then click on the remove button.

The Edit button allows you to:<br />
- View &amp; Print thumbnails of the symbols<br />
- Add new symbols to this library<br />
- Edit existing symbols in the library

The Tidy button causes a library to be tidied up. Select a library to tidy by clicking on it in the list, then click on the Tidy button. When the library has been tidied a message box will appear informing you of this.

Libraries will need tidying after they have been extensively edited. Tidying the library will make it smaller by removing the unwanted old (now deleted) symbols in the library.

## Refresh symbols from libraries 

Normally symbols are saved with the design, so any changes to the libraries do not effect your design straight away.

This option causes all the libraries currently in use to be re-read, and any changes displayed in the current design. This only effects the design in the current window.

## Part in Package 

This option can only be used when you are editing a library symbol.

When a symbol has more than one part per package, this option allows you to edit each part individually.

Each part in the package must have the same symbol outline, but with different pins. Therefore this option only effects the pins in the symbol.

When you select a new part per package, which has not yet been defined, you will be given the option to copy over the pins in the current part into the new part. Select Yes, if you wish to have the pins in the same layout for each part in the package. This is highly recommended. Once the pins have been copied, you can edit their pin numbers using the Edit Item option in the Edit menu.

## Add Pin 

This option can only be selected when you are editing a library symbol.

Pins are used to show where the connections to each symbol are.

Pins of various shapes are provided, however, these shapes are for cosmetic purposes only. They do not effect how each pin is considered to be connected.

There are various types of pin. These type govern how the electrical rules checker operates. The electrical rules checker checks which pins of what type are connected together and determines whether or not this will produce a correct circuit.

All pins must have a pin number. If the device is not one that has pins numbers (such a capacitor), then what the numbers are is arbitrary - but they must all be different. Pin numbers can also include letters. This is so the pins of a Pin Grid Array device can be correctly labelled.

Pins can optionally have a name. This is not necessary however.

The pin number and name can be shown or hidden. To hide the text click on the check box next to the text in the dialogue box.

Pins of type power are special. Although they are shown when editing a symbol, when the symbol is placed in a design these pins are hidden. Once the symbol is placed in a design pins are automatically connected to the power of the same value as their name. Therefore these pins must have a name. This can be used in conjunction with the parts per package option to allow the placing of, for example, logic gates, without need to show the power connection explicitly. A power pin cannot be connected to normally, all connections to this pin will be done automatically.

A pin of type hidden will be shown when editing a symbol, as with power pins, and hidden when the symbol is placed into a design. However, the normal connections are expected to be made to this pin, even though it is unseen. The symbol design must indicate where these pins are to allow easy connection.

Each pin is associated with a part per package. A single symbol may have more than one part per package. For example a 7400, consists of 4 NAND gates. Each part has different pin numbers on each pin. To select which part per package the pin you are placing belongs to use the Part in Package option in the Library menu.

To place a pin click with the left mouse button in the design window. When a pin has been placed, the pin number in the dialogue box will automatically be advanced for you.

Placing can be cancelled by clicking with the right mouse button.

Once a pin is placed the pin number is either incremented or decremented, automatically for you. The Pin Increment/Pin Decrement options in the repeat directions menu (in the Edit menu) select which way the pin number is changed.

Also if the pin name has a number at then end of it then it too is also incremented or decremented. The Name Increment/Name Decrement options in the repeat directions menu (in the Edit menu) select which way the pin name is changed.

Pins can be edited. To edit them select the Edit Item option in the Edit menu, then click on the end of the pin (the same end as you placed, and would connect a wire to).

Pins can also be moved or deleted.

# Symbol menu 

_This menu is only visible when you are viewing symbol thumbnails in a library editing window._

## New symbol 

Add a new symbol to this library. A symbol editing window will open and you can start designing your symbol in it. Use the “file save” menu option to save the new symbol back to the library.

You can use any of the drawing tools to create your new symbol. The circuit drawing items lose their special significance in a symbol and all of the drawn objects are treated as annotations. For example, if you place a wire in the symbol then it is not treated as a wire in when the symbol is placed into a design. The only drawing objects that have any significance in a symbol are pins.

Use the “Add Pin” option in the library menu to place a pin into a symbol.

The new symbol will not appear in the library until the symbol has been saved.

## Edit Symbol 

Select a symbol thumbnail in the library edit window and then use this option to edit it. The symbol is loaded into a symbol edit window so that you may alter it. See the “New Symbol” option for more information about editing symbols.

You can also use this option to copy symbols. Edit the symbol and then save it under a different name.

## Rename symbol 

Select a symbol thumbnail in the library edit window and then use this option to rename it. If you wish to make a copy of the symbol under a different name use the “Edit Symbol”.

## Delete 

Select a symbol thumbnail in the library edit window and then use this option to delete it. Once it has been delete it is not immediately possible to undo the change, however, you have the option not to save the changes when you close the library editing window.

# Special menu 

## Create Net List for PCB Programs 

A net list is a file which contains a list of all the connections made in a circuit diagram. All objects which are connected together are in a single list, called a net. For symbols each objects pin is considered a different object. Each net is given a different name.

Net lists are useful for programs such a PCB layout tools which can check you layout to see if it matches the layout of the circuit diagram, or even suggest a PCB layout from the net list. These more advanced features will be better supported by this program in future releases.

As of version 1.95.15, there are multiple netlist formats supported. The original TinyCAD format is still there, along with PADS-PCB, Protel and Eagle SCR output format.

PCB programs require the footprint to be specified. Do this by adding an attribute to the symbol that has a name “Package”, and the value is the value name of the footprint in the PCB program.

## Check Design Rules 

This option will cause the current design to be checked against a list of rules it must obey.

The rules test for gross errors in the design. For example, they will tell you if two outputs are connected together. They do not tell you if the design will work or not. However, if the design has errors in it picked up by this tool, then it is properly incorrectly drawn.

Once selected a dialogue box will appear. Each rule that is checked can be turned on or off before the test is done in this dialogue box.

Once the OK is selected the design is checked. Any errors are circled by a red ring. A list of errors is displayed at the side of the design. Clicking on any item in the list will cause that error to be moved to the center of the design window.

Selecting Edit Item in the Edit menu, then clicking on an error will cause it to be highlighted and also cause the error name in the error list to be highlighted.

If the Done button in the list is selected all the errors will be removed from the design.

If no errors are found then a list will appear stating so. This list can be removed by selecting the Done button.

Error circles can edited, moved or deleted. Error circles will not be saved with the design.

## Generate Symbol References 

This option changes the symbol references in your design. It relieves you of the task of ensuring each symbol has its own unique reference.

One this option has been selected a dialogue box will allow several options to be changed. You can either add or remove the current references. Removing references can be useful if you wish to integrate this design into another.

You can apply the changes to all references, that is the entire design will have potentially all of it references changed. Use this option if you do have not yet built the design, or have not issued any copies of the design to others.

You can apply the changes to only un-numbered references. This will ensure only new symbols with references with a ? in them will be changed. Use this option if you are modifying an existing design, and wish to leave existing components with their original references.

You can apply the changes to only references matching a give reference. This will apply to all references matching the one entered, even if the symbol has already been assigned a reference. Use this option, for example, to renumber all the capacitors without renumbering any other symbol.

If you wish you can allow this tool to determine what the correct symbol reference for the symbols is. Alternatively you can enter your own.

When you select the OK button the options will be applied to the design. Each symbol specified will be given a new reference. If you select remove references then each symbol will have its references changed back to one with a ? instead of a value.

You may select Cancel to not apply the reference generator.

## Create Parts List 

This option creates a list of all the parts used in the design. This list is sorted by symbol reference, and all parts of the same type are listed together.

Essentially this is a list of parts that need to be purchased to make the design.

The parts list is store in a simple text file, which can be edited and printed using notepad.

Tidy Design

This option improves the way the design is stored without effecting the way it looks.

In this release it does this by removing unseen object from the design.

This includes:

- Wires, buses, arcs and lines with zero length.

- Labels and text with no text in them.

- Rectangles and ellipses with no area.

This option removes errors than can creep in during editing which are difficult to remove yourself because they are unseen.

# Options menu 

## Settings 

# Show Grid 

![Image](/v3/images/image19.png)

This causes the grid to be displayed. If the grid is too fine to show at the current zoom then it will not be displayed. To see the grid zoom in. If the fine grid is enabled then the points which lie on the normal grid as well are shown as crosses.

# Snap to Grid 

This option should under normal conditions be selected. This option makes any mouse position snap to the nearest point on a grid. This allows the easy alignment of objects. It also ensures when you attempt to connect a wire to a symbol that the connection is made correctly. For this reason snap to grid should always be on.

If the snap to grid feature is turned off then when you attempt to connect a wire to a symbol it is very difficult to ensure both the end of the wire and symbols connection point are on the same point. With snap to grid this is made easy. If they are not on the same point, not only does it look untidy when printed but it will also be considered unconnected by the special tools.

# Normal, Fine, User grid spacing 

In most cases you will wish to use normal grid spacing. A fine grid has twice as many points to a normal grid and is especially useful for annotating a design and drawing symbols. If you wish you may specify your own grid spacing by entering the spacing in the dialog box. You may enter the units in inches or mm, depending on the Units setting (as described below).

# Units in mm or units in inches 

This defines which units are used by the whole program inches or mm. The ruler and show position dialog will reflect the changes.

# Scroll bar increments 

This determines by how much the design will be scrolled when the arrows at the side of each scroll bar is clicked.

## Colors 

This option will cause a dialogue box to be displayed with the current colors in use by the current design. If you wish to change any of the colors for the objects shown, simply click on the color and then select a new one. This will change the color for that object in the entire design. Currently you may change the colors of: wires, junctions, no-connects, buses, pins and power elements.

If you wish to return the colors to the TinyCAD default, select the “defaults” button in the dialogue.

## Show Position 

This option will cause a dialogue box to be displayed with the current co-ordinates of the mouse pointer in the design.

The position is displayed in either inches or mm depending which units are selected by the Grid Settings option in the Options menu.

To remove the dialogue box select this option again.

## Snap to Grid 

Turn the snap to grid on or off. This is a short-cut for the same option in the Grid Settings dialogue.

## Repeat Directions 

This option is a sub-menu with options for the repeat command, and options for use when placing labels, text and placing pins.

The Up, Down, Left, Right options specify where an object is placed when it is repeated.

The Name Increment/Name Decrement options specify how label names, text or pin names are altered after they are placed.

The Pin Increment/Pin Decrement options specify how the pin numbers are altered after placing a pin. Note that you can only place pins when editing a library symbol.
