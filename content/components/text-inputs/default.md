---
layout: component/code-demo
iframe: examples/example-default
iframeFullwidth: true
headline: Default
code:
  - HTML: |
      <!--
        Light:  <input class="au-text-input">
        Dark:   <input class="au-text-input au-text-input--dark">
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
      <AUtextInput id="text-input" />
---

The default text inputs do not have a width applied to them.
