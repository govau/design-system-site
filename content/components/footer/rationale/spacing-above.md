---
layout: component/rationale.js
heading: Spacing above footer
---
The footer does not add any spacing above it. The default behaviour is that your main content area will touch the footer.

If there was a `margin-top` on the footer new issues would arise in relation to sections of the website now having a visible gap due to the margin.

Due to this we allow the developer to add the spacing above the `<footer>` however they see fit. We recommend adding `padding-bottom` to the `<main>` element when it is the previous sibling of the footer.
