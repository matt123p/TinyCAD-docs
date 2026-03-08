---
layout: default
---

# Importing Symbols from KiCAD

Importing Symbols from a KiCAD symbol library is a new feature for TinyCAD v4.

## KiCad background

[KiCad](https://www.kicad.org/) is a popular open-source electronics design suite. Its symbol editor stores schematic symbols in symbol library files. In current KiCad releases, those symbol libraries normally use the modern S-expression based `.kicad_sym` format.

## What TinyCAD can import

TinyCAD currently imports symbols from:

- `.kicad_sym` files

The file must be a KiCad symbol library file with a `kicad_symbol_lib` root. In practice, that means:

- Supported: modern KiCad symbol libraries saved as `.kicad_sym`
- Not supported: legacy KiCad `.lib` symbol libraries
- Not supported: KiCad footprints, PCB files, projects, schematics, or other non-symbol files

## Where the command is in the UI

The import command is named **Import KiCad Symbols**.

Depending on how you are running TinyCAD, you will find it in one of these places:

- Desktop app (Electron): **File > Import > KiCad Symbols...**
- Browser/file-system mode: the toolbar **File** menu, then **Import KiCad Symbols**

After you choose a `.kicad_sym` file, TinyCAD reads all symbols in that library and then shows one of two import dialogs depending on what you are editing at the time.

## Two import modes

The import behaves differently depending on whether you are editing a design or editing a library.

### Import into a design

Use this when you want to place a KiCad symbol into the current schematic without first saving it into a TinyCAD library.

What happens:

- TinyCAD opens an **Import Symbol** dialog.
- You can choose one symbol from the selected `.kicad_sym` file.
- When you click **Insert**, TinyCAD inserts that symbol directly into the current drawing.
- The symbol is inserted at the current mouse position.
- This does **not** add the symbol to one of your external `.tclib` libraries.

This is the fastest route when you only need a symbol for the current design.

### Import into a library

Use this when you want to keep imported KiCad symbols as reusable TinyCAD library symbols.

What happens:

- You must first open a TinyCAD library for editing.
- TinyCAD opens an **Import KiCad Symbols** dialog.
- All imported symbols are pre-selected.
- You can tick or untick symbols, or use **Select all**.
- Clicking **Import selected** merges those symbols into the current TinyCAD library.
- TinyCAD automatically opens the last imported symbol in the library editor.
- You then save the library as usual.

This is the right route if you want to reuse imported symbols across multiple drawings.

## Step-by-step: import into a design

1. Open the schematic design you want to work on.
2. Run **Import KiCad Symbols** from the File menu.
3. Choose a KiCad `.kicad_sym` file.
4. In the **Import Symbol** dialog, click the symbol you want.
5. Review the small metadata line shown for each symbol:
   - the reference prefix, such as `U?`
   - the number of parts, for multi-unit symbols
6. Click **Insert**.
7. The symbol is placed into the current drawing at the current mouse position.
8. Adjust text, pin visibility, or graphics if needed after import.

## Step-by-step: import into a library

1. Open or create a TinyCAD library for editing.
2. If you are in the desktop app, one common route is:
   - open the **Libraries** panel
   - use **Add** to load an existing library, or **New** to create one
   - open that library in edit mode
3. Run **Import KiCad Symbols**.
4. Choose a KiCad `.kicad_sym` file.
5. In the **Import KiCad Symbols** dialog, leave all symbols selected or untick the ones you do not want.
6. Click **Import selected**.
7. Review the imported symbols in the library editor.
8. Save the library.

## Supported symbol features

TinyCAD currently imports these KiCad symbol features:

- Symbol names, reference prefixes, and descriptions
- Additional symbol properties as TinyCAD attributes
- Hidden or visible state for common fields such as Value and Reference
- Pins, including pin names, pin numbers, pin length, electrical type, and several pin shapes
- Multi-unit symbols
- Inherited symbols that use KiCad's `extends` mechanism
- De Morgan style variants, imported as a separate symbol with ` (De Morgan)` added to the name
- Basic graphics used in symbol bodies:
  - rectangles
  - circles
  - polylines
  - arcs
  - bezier curves
  - text
- Basic line styles and fill states where TinyCAD has an equivalent

## What will not work, or may not match exactly

The importer is useful, but it is not a full KiCad-to-TinyCAD conversion engine. These are the main limitations visible from the current implementation.

### File format limits

- Only `.kicad_sym` files are accepted.
- If the file is empty, malformed, or not a KiCad symbol library, the import fails.

### Graphics and layout limits

- Only the graphic primitives listed above are imported.
- Any KiCad symbol content outside those supported primitives is ignored.
- Imported library symbols are repositioned so they sit on the TinyCAD page with a margin and try to stay aligned to TinyCAD's grid.
- Some geometry can look slightly different because KiCad and TinyCAD use different internal drawing models.
- KiCad arcs are approximated into TinyCAD curve points.

### Text and styling limits

- Font family is not preserved; imported text uses TinyCAD's font settings.
- Fine text layout details such as justification are not fully preserved.
- Text rotation is reduced to TinyCAD's simpler orientation model rather than preserving every arbitrary angle.
- Pin text color is not preserved.

### Symbol behavior differences

- Importing into a design inserts the symbol into the current drawing only. It does not create or update a reusable `.tclib` library entry.
- Importing into a library creates reusable TinyCAD library entries, but you still need to save the library afterward.
- If imported symbol names clash with existing names in the destination library, TinyCAD automatically renames the new entries by adding a numeric suffix.
- If a KiCad symbol includes a De Morgan variant, TinyCAD imports that as a separate symbol entry instead of a live style toggle.

## Practical advice

- If you only need one symbol once, import into the design.
- If you expect to reuse the symbol, import into a library.
- Start with a small `.kicad_sym` library first so you can check how line art, text, and pin placement look in TinyCAD.
- After import, inspect multi-unit parts and De Morgan variants carefully.
- If a symbol looks wrong, open it in the TinyCAD library editor and clean up text placement, line art, or attributes manually.

## Summary

TinyCAD's KiCad import is focused on bringing modern KiCad symbol libraries into TinyCAD quickly, especially for standard schematic symbols built from pins, text, and simple drawing primitives. It works best with `.kicad_sym` files and is especially practical when you either:

- want to drop a symbol straight into the current drawing, or
- want to migrate selected KiCad symbols into a TinyCAD library for reuse

For anything more advanced, expect a short manual tidy-up pass after import.

## Related pages

- [Editing a Symbol](../Editing-a-Symbol/)
- [Using Symbol Libraries](../Using-Symbol-Libraries/)

- Back to [Symbols & Libraries](../Symbols-and-Libraries/)
- Back to [v4 contents](../CONTENTS/)
