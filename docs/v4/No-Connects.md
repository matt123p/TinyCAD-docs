---
layout: default
---

# No Connects

No-connect markers indicate that a pin is intentionally left unconnected.

Use them when a symbol pin is not used in your design, but you want to make
that explicit to anyone reading the schematic and to the design rules checker.

## What no-connects are for

- document intentional unused pins,
- reduce ambiguity during review,
- avoid DRC warnings/errors for pins left open by design.

Typical examples include unused logic inputs, spare op-amp channels, or unused
connector pins.

## How to place no-connects

1. Select the No Connect tool.
2. Place the marker directly on the unused pin (or intended open point).
3. Repeat for each intentionally unconnected pin.

No-connects are simple markers: they can be moved or deleted after placement,
but are not otherwise edited.

## Best practices

- Use no-connects consistently on all intentionally open pins.
- Do not place no-connects on pins that should be wired later.
- Run DRC after major edits to catch newly unconnected pins.

- Back to [Drawing](../User-guide/)
- Back to [v4 contents](../CONTENTS/)
