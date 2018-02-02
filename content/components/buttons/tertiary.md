---
layout: component/code-demo
example: tertiary
headline: Tertiary Buttons
code:
  - HTML: |
      <button class="au-btn au-btn--tertiary">tertiary button</button>
  - React: |
      import AUbutton from '@gov.au/buttons';

      <AUbutton tertiary>Continue</AUbutton>
---

A `light` button style used for tertiary actions on a screen such as a `Cancel` button on a form. (A tertiary button assumes there is already a secondary
button.) Typically it performs the opposite action to the secondary button (e.g. `Cancel` vs `Save`).
