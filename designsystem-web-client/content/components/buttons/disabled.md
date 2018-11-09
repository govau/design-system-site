---
layout: component/code-demo
iframe: examples/example-disabled
iframeFullwidth: true
code:
  - HTML: |
      <!--
        Light:  <div class="au-btn" disabled>
        Dark:   <div class="au-btn au-btn--dark" disabled>
      -->

      <button class="au-btn" disabled>
        Disabled button
      </button>

      <button class="au-btn au-btn--secondary" disabled>
        Disabled secondary button
      </button>

      <button class="au-btn au-btn--tertiary" disabled>
        Disabled tertiary button
      </button>
  - React: |
      /*
        Light:  <AUbutton disabled>
        Dark:   <AUbutton disabled dark>
      */

      import AUbutton from '@gov.au/buttons';

      <AUbutton disabled>
        Disabled button
      </AUbutton>

      <AUbutton secondary disabled>
        Disabled secondary button
      </AUbutton>

      <AUbutton tertiary disabled>
        Disabled tertiary button
      </AUbutton>
---
## Disabled

A button that can’t be clicked and doesn’t react to hover. A disabled button is typically greyed out to indicate to users that they cannot undertake the action associated with it. This is usually for page logic reasons.
