---
layout: default
---

# Design Rules Check

In v4, **Design Rules Check works the same way as in v3**.

Use Design Rules Check to find gross schematic connectivity problems before
generating outputs such as netlists or VHDL.

It checks wiring and pin-type combinations for common electrical mistakes (for
example, conflicting outputs connected together). It does **not** guarantee the
circuit is functionally correct.

## Run Design Rules Check

1. Open your design.
2. Run **Check Design Rules** from the Special tools/menu.
3. In the rules dialog, enable or disable the rule checks you want.
4. Select **OK** to run the check.

## Reading the results

- Each detected error is marked on the schematic with a red circle.
- An error list appears next to the design.
- Selecting an error in the list centers that location in the drawing.
- Using **Edit Item** and clicking an error marker highlights the matching entry
	in the list.

## Clear and re-check

- Select **Done** in the error list to remove all current error markers.
- If no errors are found, TinyCAD reports that result in the same list area.
- Error circles are temporary review markers: they are not saved with the
	design.

## Tips

- Use no-connect markers for intentionally unused pins to avoid false DRC
	issues.
- Re-run Design Rules Check after edits that affect wiring, labels, buses, or
	symbols.

- Back to [Advanced](../Advanced/)
- Back to [v4 contents](../CONTENTS/)
