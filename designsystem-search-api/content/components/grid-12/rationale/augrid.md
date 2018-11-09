---
layout: component/rationale.js
heading: Why does the au-grid class exist?
---

The `.au-grid` class is added for specificity. If a developer or designer is using another grid system which uses the same classes or has an element with the class of `.container` it means they do not inherit those styles. This was a fundamental decision we made when creating this design system as we didn't want styles to leak onto elements unintentionally.
