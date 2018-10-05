---
layout: component/code-demo
iframe: examples/example-tertiary
code:
  - HTML: |
      <!--
        Light:  <div class="au-btn au-btn--tertiary">
        Dark:   <div class="au-btn au-btn--tertiary au-btn--dark">
      -->

      <button class="au-btn au-btn--tertiary">
        Tertiary button
      </button>
  - React: |
      /*
        Light:  <AUbutton as='tertiary'>
        Dark:   <AUbutton as='tertiary' dark>
      */

      import AUbutton from '@gov.au/buttons';

      <AUbutton as='tertiary'>
        Tertiary button
      </AUbutton>
---
## Tertiary

A `light` button style used for tertiary actions on a screen such as a `Cancel` button on a form. (A tertiary button assumes there is already a secondary button.) Typically it performs the opposite action to the secondary button (e.g. `Cancel` vs `Save`).
