---
layout: default
---

# Netlist Editor

TinyCAD can generate netlist output for downstream tools. Full editor-specific
documentation is not written yet, but the workflow below covers the current
use case.

## Typical workflow

1. Run design checks first so the schematic is electrically consistent.
2. Generate the netlist from the relevant export command.
3. Review the output before importing it into PCB or simulation tools.

## What to review

- Component references are unique and complete.
- Package or footprint fields are present where required.
- Net names are sensible and match the destination tool expectations.
- Power and hidden-pin behavior produced the expected output.

## Related pages

- [Bill Of Materials](../Bill-Of-Materials/)
- [Design Rules Check](../Design-Rules-Check/)
- [SPICE output](../SPICE-output/)

- Back to [Advanced](../Advanced/)
- Back to [v4 contents](../CONTENTS/)
