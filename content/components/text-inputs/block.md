---
layout: component/code-demo
example: examples/example-block
headline: Block Text Inputs
code:
  - HTML: |
      <label for="textin-b1">label text</label>
      <input class="au-text-input au-text-input--block" name="textin-b1" id="textin-b1" type="text" value="value">
  - React: |
      import AUtextInput from './text-inputs';

      <label htmlFor="textin-b1">label text</label>
      <AUtextInput id="textin-b1" block />
---

The 'block' text inputs use an `.au-text-input--block` class to make them fill the available space.
