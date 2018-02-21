---
layout: component/code-demo
example: examples/example-textarea
headline: Text area
code:
  - HTML: |
      <label for="textc1">label text</label>
      <textarea class="au-text-input au-text-input--block" name="textc1" id="textc1">
        Value
      </textarea>
  - React: |
      import AUtextInput from '@gov.au/text-inputs';

      <label htmlFor="textin-c1" block >label text</label>
      <AUtextInput type="textarea" id="textin-c1" block />
---

Also known as a multiline input.

Text areas are for long form text inputs and can be scaled up or down in size by the user, in browsers that support the feature.

Because text areas are intended for free typing they should ideally use the majority of the available space by using the `.au-text-input--block` class.
