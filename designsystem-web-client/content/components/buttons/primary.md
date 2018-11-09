---
layout: component/code-demo
iframe: examples/example-default
code:
  - HTML: |
      <!--
        Light:  <div class="au-btn">
        Dark:   <div class="au-btn au-btn--dark">
      -->

      <button class="au-btn">
        Primary button
      </button>
  - React: |
      /*
        Light:  <AUbutton>
        Dark:   <AUbutton dark>
      */

      import AUbutton from '@gov.au/buttons';

      <AUbutton>
        Primary button
      </AUbutton>
---
## Default

A `strong` button style used for primary actions on a screen such as a `Submit` button on a form, or other actions that are critical in a user workflow. A
primary button should be only used once per view.
