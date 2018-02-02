---
layout: component/code-demo
example: block
headline: Block Buttons
code:
  - HTML: |
      <button class="au-btn au-btn--block">
        primary button
      </button>
      <button class="au-btn au-btn--block au-btn--secondary">
        secondary button
      </button>
      <button class="au-btn au-btn--block au-btn--tertiary">
        tertiary button
      </button>
  - React: |
      import AUbutton from '@gov.au/buttons';

      <AUbutton secondary>Continue</AUbutton>
---

A block-level button uses 100% of the available width of the container or parent element.
A block- level button is used for visual prominence.
