---
layout: default
---

# Importing Symbols from KiCAD

Detailed KiCAD import instructions are not written yet, but the current workflow
is straightforward once you know what to expect.

## Current workflow

1. Export the symbol or library from KiCAD in a format TinyCAD can read.
2. Open the import option in TinyCAD.
3. Review the imported pins, names, and electrical types before reuse.

## What to validate after import

- Pin numbers still match the original part.
- Pin electrical types are correct for DRC.
- Hidden power pins and alternate names still behave as expected.
- The symbol renders cleanly at normal zoom levels.

## Related pages

- [Editing a Symbol](../Editing-a-Symbol/)
- [Using Symbol Libraries](../Using-Symbol-Libraries/)

- Back to [Symbols & Libraries](../Symbols-and-Libraries/)
- Back to [v4 contents](../CONTENTS/)
