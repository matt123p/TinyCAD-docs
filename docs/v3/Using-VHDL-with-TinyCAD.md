---
layout: default
---

## Making the Design

In order to make the schematic you should use the symbols in the VHDL library. You can also find these symbol on [tinycad.net](https://www.tinycad.net/Search?key=%23vhdl).

Just use them as any TinyCad symbols. For inputs and outputs of the schematic you use the library symbols, giving the symbol the name of the input or output. The wires connect to input and outputs are automatically named. You can connect two wires by given them the same name.

## VHDL-Schematic Pairing

VHDL schematic paring can be used to create a hierarchical design, without using the hierarchical schematics of TinyCad. Every symbol you use in TinyCad should have a corresponding VHDL file that describes its behavior. This is also true for all the symbols in the VHDL library. So, doing a hierarchical design is simple, you just need to create a library for your project and create a symbol for each VHDL file you use. Then each time you use that symbol it will be linked with the VHDL file with the same name. Don’t forget to give the correct names to the pins and to mark then as input or output. Also, give a number to the pins and be careful not to give the same number to two different pins.

## Working with Buses

To work with Buses don’t use the BUS feature of TinyCad. Instead just give the wire a name like A(7:0). This will create the BUS A with 8 bits from 7 to 0. In a BUS of the form A(i:j) i should always be higher than j. You can access a BUS wire by giving a wire the name A(i) and a set of wires in the BUS by writing A(i:j). This is the only way to access an element of a BUS. If you want, you can connect the BUS and the wire with a BUS join but this is merely esthetical. This is also valid for inputs and outputs. To make an input or output a BUS just give the symbol a name like A(7:0).

## Generating the VHDL File
To generate the VHDL just run the Create VHDL command, it will automatically run a design rules check, but it can also run this before by running the corresponding command.

## Examples
You have the code of a small 4-bit processor (nibbles) as a design example. Looking at the files should help in learning out to use TinyCad with VHDL.

The example is available [here](https://github.com/matt123p/TinyCAD/tree/master/examples/vhdl).

