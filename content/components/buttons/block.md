---
layout: component/code-demo
example: examples/example-block
headline: Block
code:
  - HTML: |
      <!--
        Light:  <div class="au-btn au-btn--block">
        Dark:   <div class="au-btn au-btn--block au-btn--dark">
      -->

      <button class="au-btn au-btn--block">
        Primary block button
      </button>

      <button class="au-btn au-btn--block au-btn--secondary">
        Secondary block button
      </button>

      <button class="au-btn au-btn--block au-btn--tertiary">
        Tertiary block button
      </button>
  - React: |
      /*
        Light:  <AUbutton disabled block>
        Dark:   <AUbutton disabled block dark>
      */

      import AUbutton from '@gov.au/buttons';

      <AUbutton secondary>
        Primary block button
      </AUbutton>

      <AUbutton secondary>
        Secondary block button
      </AUbutton>

      <AUbutton tertiary>
        Tertiary block button
      </AUbutton>
---

A block-level button uses 100% of the available width of the container or parent element.
A block- level button is used for visual prominence.
