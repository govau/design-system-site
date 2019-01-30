---
layout: component/code-demo
iframe: examples/example-valid-invalid
iframeFullwidth: true
code:
  - HTML: |
      <!--
        Valid:  <input class="au-text-input au-text-input--valid">
        Invalid:   <input class="au-text-input au-text-input--invalid">
      -->

      <label for="text-input">label text</label>
      <input class="au-text-input au-text-input--valid" name="text-input" id="text-input" type="text" value="value">
  - React: |
      /*
        Valid: <AUtextInput status="valid" />
        Invalid: <AUtextInput status="invalid" />
      */

      import AUtextInput from '@gov.au/text-inputs';

      <label htmlFor="text-input" >label text</label>
      <AUtextInput status="valid" />
---

## Valid and invalid inputs

Add a border to text inputs and text areas to indicate whether user input is valid (validates according to the elements settings) or invalid (does not validate according to the elements settings).
