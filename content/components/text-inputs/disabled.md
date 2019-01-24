---
layout: component/code-demo
iframe: examples/example-disabled
iframeFullwidth: true
code:
  - HTML: |
      <!--
        Light:  <input class="au-text-input" disabled>
        Dark:   <input class="au-text-input au-text-input--dark" disabled>
      -->

      <label for="text-input">label text</label>
      <input class="au-text-input" name="text-input" id="text-input" type="text" value="value">
  - React: |
      /*
        Light:  <AUtextInput>
        Dark:   <AUtextInput dark>
      */

      import AUtextInput from '@gov.au/text-inputs';

      <label htmlFor="text-input" >label text</label>
      <AUtextInput disabled />
---

## Disabled

Disabled input elements are unusable and can not be clicked. This prevents a user from interacting with the input element until another action is complete. Disabled input elements in a form will not be submitted.
