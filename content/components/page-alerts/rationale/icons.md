---
layout: component/rationale.js
heading: Visual Design
---

The visual design of the page-alerts was a challenging problem to resolve due to the considerations which needed to be balanced.

1. The component should use conventional alert/warning colours.
2. The component can't rely on colours to indicate meaning.
3. The component also comes in light and dark themes.

The solution relies on a few factors:

**Icon shape.** The icons selected use different background shapes to convey some meaning and draw inspiration from the shape of Australian traffic signals to convey severity.

**Icon symbols.** The colour of the icon symbols is the same as the text-colour, and the background for the symbol is always the same as the background colour. This guarantees that the icon symbol will always pass colour contrast ratio (provided that the default text and background do).

**Alert title.** We can't simply rely on icons and colour to convey meaning, so an alert title should always accompany the alert text.
