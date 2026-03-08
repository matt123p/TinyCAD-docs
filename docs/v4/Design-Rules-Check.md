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

Aim for zero design errors to increase confidence in schematic correctness.

## Run Design Rules Check

1. Open your design.
2. Run **Check Design Rules** from the Special tools menu.
3. In the rules dialog, enable or disable the rule checks you want.
4. Select **OK** to run the check.

{% include video-player.html
	src="/v4/images/video/Video 8.mp4"
	width=1622
	height=952
	caption="Video walkthrough showing how to run and use the design rules checker."
%}


## Reading the results

- Each detected error is marked on the schematic with a red circle.
- An error list appears next to the design.
- Selecting an error in the list centers that location in the drawing.

## Clear and re-check

- Select **Close** in the error list to remove all current error markers.
- Error circles are temporary review markers: they are not saved with the
	design.

- Back to [Advanced](../Advanced/)
- Back to [v4 contents](../CONTENTS/)
