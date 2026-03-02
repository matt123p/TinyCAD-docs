# Using Multiple Sheet Schematics

There are two ways that you can spread a complex schematic over more than one sheet in TinyCAD:

1. You may use multiple sheets (much like Excel sheets)
2. You may use hierarchical drawings (that is insert one file into another drawing)

The two different techniques can be used in the same drawings.

## Using multiple sheets

To add another sheet to a drawing, you need only right-click on the “Sheet 1” sheet selection layout at the bottom of the screen and select “Insert Sheet”. This will create a new blank sheet in the same drawing for you.

All of the sheets in the same drawing must have the same page size, however, each one may have it’s own design details. When the design is saved all of the sheets are saved in to the same file. This is the simplest way to create multiple sheet schematics and is very effective for smaller circuit diagrams.

When a netlist is generated for a PCB program the sheets are linked together. Any labels with the same names are considered connected between the sheets. Use the labels to make connections across sheets.

You may of course, remove and rename sheets by right clicking on the sheet name at the bottom of the screen. If you delete a sheet this cannot be undone, so do so with care!

## Using hierarchical designs

You can use the Hierarchical drawing system to embed one design into another sheet. The embedded sheet has a symbol associated with it, much like a part from a library.

First you must add a symbol to the file you wish to embed, by using the “Special-&gt;Add Hierarchical Symbol” menu option. This will add a new special sheet to your drawing. In this special sheet draw the symbol for the design. If you wish to make connections from the parent design to this design, you must place pins on the symbol. These pins are almost identical to library symbol pins except they may not have pin numbers, just pin names.

To link between the pins on the symbol and the schematic on the other sheets, use labels. Any labels with the same names as the pins will be considered connected to the pins when the netlist is generated.

Once you have your hierarchical symbol added to your design, you may embed it into other drawings. Do this by selecting the “Special-&gt;Insert Another design as a Symbol” menu option. This will allow you to select a previously saved drawing that has a symbol associated with it.

The embedded drawing acts much like a library symbol and can be placed, rotated have connections made to it. The difference is that when the netlist is generated from the top-level design the lower designs will be included and linked using the pins.

## Using both hierarchical designs and multiple sheets

There are no special requirements for using both techniques for really complex designs. You may have many sheets in each of the files, and include as many drawings as you need to create your design.

