---
layout: component/rationale.js
heading: Round corners
---

It was discovered during usability observation that the [secondary button](/components/buttons/#secondary-buttons) and [text inputs](/components/text-inputs/) could sometimes be mistaken for layout or design elements with borders. The border-width was increased, and a border-radius was added to interactive elements.

**Note** The border-radius is removed on focus. This is because the focus outline does not receive the radius.

**Note** The border-radius is [not supported in IE8.](http://caniuse.com/#feat=border-radius)
