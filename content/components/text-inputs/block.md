---
layout: component/code-demo
example: examples/example-block
headline: Block text inputs
code:
  - HTML: |
      <!--
        Light:  <ul class="au-text-input au-text-input--block">
        Dark:   <ul class="au-text-input au-text-input--block au-text-input--dark">
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

The 'block' text inputs use an `.au-text-input--block` class to make them fill the available space.
