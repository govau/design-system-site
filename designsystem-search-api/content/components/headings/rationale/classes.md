---
layout: component/rationale.js
heading: Helper classes
---

Classes and the SCSS `fontgrid` mixin are provided to help separate semantic meaning from visual appearance in order to better support [WCAG2.0 Criterion 1.3.2](https://www.w3.org/TR/UNDERSTANDING-WCAG20/content-structure-separation-sequence.html).

> _1.3.2 Meaningful Sequence: When the sequence in which content is presented affects its meaning, **a correct reading sequence can be programmatically determined.** (Level A)_

This means developers using the design system can continue to use the correct heading level for the page structure while retaining a style that doesn't interfere with visual comprehension. For example, having a H2 in a sidebar that look as small as a H4.
