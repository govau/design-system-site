---
layout: component/code-demo
iframe: examples/example-block
iframeFullwidth: true
code:
  - HTML: |
      <!--
        Light:  <input class="au-text-input au-text-input--block">
        Dark:   <input class="au-text-input au-text-input--block au-text-input--dark">
      -->

      <label for="text-input-block">label text</label>
      <input class="au-text-input au-text-input--block" name="text-input-block" id="text-input-block" type="text" value="value">
  - React: |
      /*
        Light:  <AUtextInput block>
        Dark:   <AUtextInput block dark>
      */

      import AUtextInput from '@gov.au/text-inputs';

      <label htmlFor="text-input-block">label text</label>
      <AUtextInput id="text-input-block" block />
---
## Block text inputs

The 'block' text inputs use an `.au-text-input--block` class to make them fill the available space.
