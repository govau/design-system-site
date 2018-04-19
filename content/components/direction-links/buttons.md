---
layout: component/code-demo
example: examples/example-buttons
headline: Buttons
code:
  - HTML: |
      <!--
        Light:  <button class="au-direction-link">
        Dark:   <button class="au-direction-link au-direction-link--dark">
      -->

      <button class="au-direction-link">Next</button>
  - React: |
      /*
        Light:  <AUdirectionLink>
        Dark:   <AUdirectionLink dark>
      */

      import AUdirectionLink from '@gov.au/direction-links';

      <AUdirectionLink text="Next" />
---

Sometimes direction is needed inside a form. Buttons offer a way to direct users to the next or previous section inside a form.
