---
layout: default
---

# Bill Of Materials

The tool creates a list of all parts used in the current design. The output is
sorted by symbol reference, with like parts grouped together.

## Generate a BOM (parts list)

1. Open the completed schematic.
2. Run **Create Parts List** from the Special tools/menu.
3. Save the generated list.

## What the output is for

- It is effectively a purchasing/build list for the design.
- It helps review references and grouped component types before build.

## Output format

The parts list is written as a simple text file. You can open, edit, and print
it with standard text editors.

## Tips

- Run Design Rules Check before generating a BOM to catch connectivity errors
	early.
- Re-generate the BOM after changing symbols, references, or values.

- Back to [Drawing](../User-guide/)
- Back to [v4 contents](../CONTENTS/)
