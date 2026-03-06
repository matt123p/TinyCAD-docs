---
layout: default
---

# Using SPICE with TinyCAD

TinyCAD now has built-in SPICE file generation system. Currently there are *no* libraries supplied with TinyCAD for use with SPICE.  However, you will find SPICE symbols on [tinycad.net](https://www.tinycad.net/Search?key=%23spice)

You must understand the SPICE file format in order to understand how to use TinyCAD with SPICE. There are many good explanations of SPICE on the web, and if you are interested in electrical simulation I suggest you start with one of the many free SPICE engines, and hand-craft a few SPICE files before trying to create your own SPICE libraries in TinyCAD.

_Remember there is always help!_

The creation of SPICE simulation circuits is not trivial, but it should be straight forward if you already know something about SPICE. If you get stuck, then use the TinyCAD forum to get some support.

## The TinyCAD SPICE system

TinyCAD generates SPICE files by using a string template system. A SPICE enabled symbol has 3 parts to it:

* The “model” template – this is the string that is inserted into the SPICE file for every instance of the component in the circuit.
* The “prolog” template – this is the string that is inserted into the top of the SPICE file. It is only inserted once per component type.
* The “epilog” template – this is the string that is inserted into bottom of the SPICE file. It is only inserted once per component type.

These three templates can be found on the new “SPICE” tab that is on the symbol properties. Right click on the symbol in the library thumbnail view and select “Symbol Properties”.

The SPICE circuit diagram itself requires 3 parts:

* The circuit must be constructed using only SPICE enabled symbols
* The circuit must have a special “RUN” symbol (which will need to be created by you).
* The circuit must have a special “0” node, which is a requirement of a SPICE circuit.

Once all of these requirements have been met, you can use the new option in the &quot;Special&quot; menu to generate the SPICE file.

## The SPICE template strings

This is written into the output spice file whenever this symbol appears in the net. This line is a template string of what should be written.

For example, for the resistor we would have:

R$(refnum) %(1) %(2) $(NAME)

This means output this line into the SPICE file, however, substitute %() with the net for those pins and substitute $() with attributes with those names. For example if the resistor was connecting nets 7 and 9 together and has a name of 10K then TinyCAD would output:

R3 7 9 10K

Notice how each of the $() and %() parts of the line have been replaced by the net information.

NOTE: The observant will spot there is a subtlety in the way it generated the “refnum”. This is the symbols reference, which would normally be something like “R3”, however, we have included the “R” in the template. What has happened is that the “refnum” template string is treated specially; the preceding reference character (in this case the “R”) has been stripped. This is so that the spice model character is always an “R”. If the resistor had a reference of “Q3”, then TinyCAD would still output “R3”, enforcing the correct SPICE model. If the reference where “MyRef”, then TinyCAD would output “RMyRef”.

## The Spice Prologue and Epilogue

The SPICE Prologues and Epilogues for each symbol have identical syntax to the model template strings, except that you cannot use the pin numbers (the %() syntax) and may only use the attribute expansions (the $() syntax).

Prologues and epilogues will only be included if they are not identical to any other, so you can include the symbol multiple times in your design but only get one prologue and one epilogue for each one.

You can set the order in which the prologues and epilogues are included in the file by using the priorities. These are the numbers at the side the template strings in the Symbol properties dialogue.

For the prologue, anything with a priority of zero will be put into the file first, and then everything with a priority of 1 and so on up to 9.

For the epilogue, anything with a priority of zero will be put into the file last, and just before it anything with a priority of 1 and so on up to 9.

The default priority for the prologue and epilogues is 5 (i.e. the middle).

## The SPICE RUN node

Normally a spice file contains not only the circuit but also commands to tell the SPICE simulator what to do with it.

You can insert these special commands at the head and end of a file by using a special SPICE symbol called the “Run” node. As no SPICE symbols are included with TinyCAD you will have to create the Run node yourself.

The RUN node is a normal TinyCAD symbol, except it has no pins and has no SPICE model. It does have a SPICE prologue and epilogue template.

You must set a priority of 0 for both the prologue and epilogue. This means its prologue will always go first (assuming no other run nodes) and its epilogue will always go last.

This special symbol will then expand into your run-time parameters and place the correct epilogue for the SPICE file.

If you want to add your special line at the head of the file, simply add it to the run node's prologue - remember it will expand any $(attributes) you put in.

You must place one RUN node on every SPICE simulation circuit, and this will add the correct SPICE lines to for the SPICE engine.

In your library you may have more than one type of Run node, each one instructing SPICE to perform slightly different operations, however, you should not place more than one Run node on each circuit.

## The “0” net

Every SPICE circuit requires a “0” node. This is the ground for the circuit. You must make sure one of your connections is nominated as the ground.

This is done in TinyCAD by using the facility to name net. You can do this in one of two ways:

* Use a label. Any connections with a label will use the label’s name in the SPICE net
* Use a power symbol (which look like ~ on the toolbar). Any connections with a power connection will use it’s value as the name of the SPICE net.

So to create the special “0” net, simply place a power symbol with a value of 0 on the ground connection.

## Generation of the SPICE file

Once you have met all of the requirements for SPICE file generation, it is a simple matter to create the SPICE output. Go to the “Special” menu and select the “Create SPICE file” option.

There are no options in the SPICE file creation dialogue, because you should use the special “Run” node to for this purpose. This gives you maximum flexibility for the SPICE file generation.

## Advanced SPICE file generation with conditional statements

For really sophisticated uses of TinyCAD’s SPICE engine, you may use conditional statements in your templates. There are three basic types of conditional statement, these are:

* Test to see if an attribute is defined on the symbol
* Test to see if an attribute is an empty string on the symbol
* Test to see if a pin of the symbol is connected

For each conditional statement, you may specify a “true string” and a “false string”. If the condition is true then the macro will evaluate to the “true string”, and the entire macro will be replaced by the “true string”, otherwise the entire macro will be replaced by the “false string”.

You can embed one conditional macro statement inside another one, there is no special syntax required for this.

The syntax for the conditional statements is:

?( defined( attributename ), true string, false string )

?( not_defined( attributename ), true string, false string )

?( empty( attributename ), true string, false string )

?( not_empty( attributename ), true string, false string )

?( connected( pinnumber ), true string, false string )

?( not_connected( pinnumber ), true string, false string )

If you wish to place a question mark ( “?” ) into your template, then you can escape it by placing the a “\” in front of it.
