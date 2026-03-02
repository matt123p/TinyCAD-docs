---
layout: default
---

# FAQ

### 1. I have created my drawing and tried to create a Net List, but I did not know about Package Attributes. The manual does not explain how to add these attributes to the symbols on the drawing I have made. It says click ADD, but in what? The package attributes would be different for each component you place on the drawing but I can't see how you add these attributes.
**A.** After the symbol is placed on the schematic select it and a 'xxx Tool Options' window opens.
In this there is a list of the current parameters and their values. If a 'Package' parameter is not present click the 'Add' button at the bottom. This will put a line in which reads 'Other Yes ...' .
Change 'Other' to 'Package' and '...' to the name of the footprint for that symbol to use in the layout. You also have the option whether to display it or not.
The process is similar for library symbols:
In the Library editor you can edit the 'Symbol Properties' to change or insert a package definition. If you have the correct 'Package' definition in the library symbol it will carry over to the schematic automatically.
The same 'Package' definition may be used for several different symbols and there may also be similar symbols with different 'Package' definitions. You have to decide what package you will use for the symbol. Of course you can change your mind at any stage so long as what you end up with works.
Bear in mind that the TinyCAD pin numbers used must match the pin numbers in the footprint referenced by the 'Package' parameter. That is how things are connected.
Please read the User's Manual section 'Help/Get more from TinyCAD/Exporting to PCB programs'.

### 2. How do I enter a pin name or other text if I want a bar over the text to signify the NOT function?
**A.** For each letter of the text string that you want to be shown with a bar over it, enter the non-shifted version of the tilda character ('\¬') before the letter that you want to have an overbar appearance. This little used character is also known as the grave accent, from the Latin word “gravis”, meaning heavy. By requiring a special character for each overbar character, you gain the possibility of specifying mixed names such as “UP/DOWN”. For this particular name, you would enter “UP/\¬D\¬O\¬W\¬N”. This special character, on English language keyboards, is usually located near the upper left hand corner of a full keyboard, underneath the ESC key. It is also usually on the same key as the tilda character ('~'). On European keyboards, it will most likely be in a different location or not present on a key directly at all. You must use the &lt;Alt&gt; numeric keypad method (&lt;Alt&gt; 096). If any user wants to email us and let us know where it is located in other languages, we will add it to this answer for the convenience of all of our users.

### 3. When I create a new symbol and I want to save it to my Lib it does not allow me to change the name when I'm clicking on add name. How do I give it the name that I want?
**A.** At some point you should see the 'Update Library Symbol' window. In this window there is a 'Name' parameter. (Right hand panel). If you change the 'New Symbol' text to be the name of your new symbol it will get saved in the selected library under that name when you click '\[Store\]'. You can add a 'Name' parameter with the '\[Add\]' button but you can't use that, it has to be the default one.
If you edit a symbol and change its 'Name' parameter it does not create a copy when you '\[Store\]' it, just the symbol name changes.
If you want to add a modified version of symbol XXX, select the symbol in the library list, &lt;right click&gt; and use 'Duplicate' to create a 'Copy of XXX'. Select that and edit the 'Name' parameter text in it.
The 'Add Name' button creates an alias for the current symbol which can then have a different set of properties but the same graphic. Select the symbol name in the left column to access its properties in the right panel. Both alias names will show in the schematic selection list.

### 4. I have a medium sized schematic in TinyCAD. Something appears to have gone wrong with it in that there is a duplicate of every symbol directly underneath the original one but has no connections. For example, there is a resistor with wires connected, if you drag it away there is another one with the same references etc. directly underneath. This has happened with every symbol on my schematic including labels. 

If I select all and try to move or delete it does not get rid of the duplicates as they are selected too.

How can I get rid of the duplicate symbols?

My only method so far is to move each symbol to the side, delete the one underneath and then put the original back. As you can imagine, this is going to be time consuming and error prone.

**A.** I did this once by copying all of the blocks on the page and then while pasting, I accidentally “dropped” the block on top of itself. Of course, you can “undo” this by hitting the Ctrl-Z key just as in any other Windows editor up until when you panic and hit “save” ;-) Once saved to disk, it can be fixed, but not so easily.
I recommend that you do this fix only with TinyCAD version 2.80.01 or later as earlier versions will make it a lot harder to delete the duplicate symbols.

Step 1: Working from left to right, top to bottom, you must methodically select and then delete each symbol, each net label, each text object, and each power label once (assuming that you accidentally only pasted a single copy of the block). Don’t worry about net lines as these will get automatically fixed later. If you select and then delete a symbol and it disappears entirely, then hit Ctrl-Z to undo it as this symbol did not have a duplicate (either you already deleted it or it wasn’t part of the original copy/paste mistake). Don’t worry about which symbol is connected to the net line and which one isn’t – it won’t matter. Notice carefully that when 2 symbols are on top of each other, you will get an auto-junction connection dot on top of the active end of each pin. Deleting one of the symbols will not automatically make this go away, thus the instruction to work \_methodically\_ from left to right, top to bottom. This will all get fixed in the next step, but you first have to successfully remove every duplicated object with the exception of the net lines and auto-junction connection dots. Again, when 2 identical objects are on top of each other, it doesn’t matter which one that you delete. The way the selection mechanism works, you will always select the top object in the Z axis. This is usually the one that the net lines are routed to, but again, it doesn’t matter.

Step 2: You now have removed all of the duplicate symbols, but you still have a mess of auto-connection dots that did not get automatically removed when you deleted the duplicate symbol (this should actually get turned in as a bug – the auto-connection dots should be automatically removed when no longer needed, but TinyCAD apparently doesn’t do this presently). Now you have to trick TinyCAD into re-evaluating the auto-junction connection dots. This can be done by selecting everything on the page by holding the left mouse button down and dragging the selection rectangle until it covers all of the objects on the page. Let go of the mouse button and this will leave all of the objects selected. Now put the cursor over one of the symbols and again press the left mouse button down, hold it, and very carefully drag the selected objects a small amount in any direction. Notice that the net lines will not all drag appropriately – this is because the auto-connect dots are not yet correct and TinyCAD is confused by the jumble of objects. Very carefully drag the selection so that it is exactly back on top of itself and then (and only then!) let the mouse button go. The graphics will appear unchanged at this point.

Step 3: Move the mouse over some empty spot on the schematic and click the left mouse button once so that the selected objects are no longer selected. As soon as all of the objects are de-selected, the auto-junction connection dots will then be recalculated and will now be fixed graphically and your schematic is now repaired. If you still see a few auto-junction connection dots on the symbol pin ends that shouldn’t be there, that tells you that you missed some of the duplicate symbols so simply repeat this process until all of the duplicates have been deleted and the auto-junction connection dots have all been recalculated.

Step 4: You should save your design at this point!

### 5. I have a complex hierarchical schematic design with many levels of hierarchy and the net list is not correct. What do I need to do to get a correct hierarchical netlist?

**A.** As of TinyCAD version 2.80.03, hierarchical netlisting is working accurately, but there are several “gotchas” that you need to watch out for:

a. You must assign reference designators to each sub-design separately as TinyCAD does not automatically number across hierarchical levels presently. You do not need to assign flattened unique designators to each sub-design – it is ok to start numbering each sub-design with “1” if that's what you want.

b. You must make sure that each hierarchical symbol instance is assigned a designator. TinyCAD will concatenate the hierarchical symbol instance's designator separated by underscores for each hierarchical level so that flattened instances can be easily identified. If a hierarchical symbol is undesignated, you will get malformed and aliased net names in your netlist. In addition to this, TinyCAD does not presently check for missing hierarchical symbol designators in the ERC check – that only works for normal symbols.

c. You must absolutely make sure that no symbol including hierarchical symbols has duplicate pin numbers. While a hierarchical symbol doesn't assign any specific meaning to hierarchical symbol pin numbers, they are none the less important in creating the flattened netlist. Duplicate pin numbers are not presently flagged by the ERC check and will cause net names to become malformed and incorrect. Unfortunately, TinyCAD greys out the pin number box when editing the pins in a hierarchical symbol, preventing you from correcting a duplicate pin number. TinyCAD starts numbering hierarchical pins with the number 1 each time that the editor is started, so if you have added hierarchical pins over the course of several edits, you will almost certainly have duplicate pin numbers. The only way to fix this is to either add all of the hierarchical symbol's pins in a single edit, or manually edit the .dsn file with a text editor such as Notepad++ (from [www.sourceforge.net](http://www.sourceforge.net/)) or with the standard Windows Notepad editor. The .dsn files are in XML format which is easily edited with an ASCII editor. Hint: if you use a programmer's editor such as Notepad++ or Visual Studio, tell the editor that the .dsn extension is an XML file and the structure of the file will be color coded to make it easier to edit.

### 6. Can someone please explain, in the window “Attributes/Display method”, the choices “Show Value (Extra nly)”, “Show Name=Value when present”, and so on?

**A.** A TinyCAD parameter has 2 parts: the name of the parameter and the value of the parameter. With the exception of the special "Show Value (Extra Only)" entry, the choices work as follows:

Consider a parameter named "Footprint" with the value assigned as "DIP16".

The choice "Show Name=Value" will display on the schematic as "Footprint=DIP16".

The choice "Show Name=Value when present" will display on the schematic as "Footprint=DIP16" for this example. If the value was empty, then it would not display at all until after you assigned a value to it.

The choice "Show Value Only" will display on the schematic as "DIP16" or as nothing at all if the value is empty.

The choice "Hide Value" will never display anything on the schematic.

The choice "Show Value when present" will display on the schematic as "DIP16" or as nothing at all if the value is empty.

The choice "Show Name=Value" will display on the schematic as "Footprint=DIP16" if it is present and will display as "Footprint=" if it is empty.

The choice "Show Name=Value (Extra Only)" is an unfortunate holdover from the very earliest version of TinyCAD. Just ignore it. It is used as a special flag to force a parameter to be displayed even if it is flagged as "Never Show". It can be set from the schematic (unlike the other flags which are all set in the library editor. If from the schematic you later choose to display the parameter, it will return to its previous value taken from the library.

### 7.  **Q.** I sometimes have problems with symbols changing their insertion point in a schematic when I turn on or turn off the show power pins feature or when I switch from one part in a package to a differently shaped part in the same package. Is there a way to make the symbols insert at the same point each time?

**A.** The symbol origin marker was introduced relatively recently and there is precious little documentation on it. You can use the symbol origin marker to give each symbol a defined origin that is repeatable and not subject to grid limitations. You will find it to be very intuitive, once you know where to look for the tool bar!
While editing a symbol, look in the upper left corner of the editing area where the horizontal ruler is located. You will notice a small box with a cross in it that simply looks decorative. The cross is actually a toolbar button that you can click and the cursor will change to a full screen pair of horizontal and vertical lines with a very tiny circle over the active cursor location, somewhat like a scope sight on a rifle. This tool will either place a manual symbol origin at any location that you click or move the existing manual symbol origin to a new location. This manual symbol origin overrides the automatic determination of a symbol’s origin that was so trouble prone in TinyCAD’s early years. Manually defining the symbol’s origin will allow you to overcome many of the changing symbol “insertion point” issues that occurred in earlier versions of TinyCAD.

