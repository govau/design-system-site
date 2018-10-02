---
layout: component/code-demo
iframe: examples/example-secondary
headline: Secondary
code:
  - HTML: |
      <!--
        Light:  <div class="au-btn au-btn--secondary">
        Dark:   <div class="au-btn au-btn--secondary au-btn--dark">
      -->

      <button class="au-btn au-btn--secondary">
        Secondary button
      </button>
  - React: |
      /*
        Light:  <AUbutton as='secondary'>
        Dark:   <AUbutton as='secondary' dark>
      */

      import AUbutton from '@gov.au/buttons';

      <AUbutton as='secondary'>
        Secondary button
      </AUbutton>
---

A `standard` button style used to highlight an important action such as a `Save` button on a form. (A secondary button assumes there is already a primary
button.)
