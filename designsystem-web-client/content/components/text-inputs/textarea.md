---
layout: component/code-demo
iframe: examples/example-textarea
code:
  - HTML: |
      <!--
        Light:  <textarea class="au-text-input au-text-input--block">
        Dark:   <textarea class="au-text-input au-text-input--block au-text-input--dark">
      -->

      <label for="textarea">label text</label>
      <textarea class="au-text-input au-text-input--block" name="textarea" id="textarea">
        Value
      </textarea>
  - React: |
      /*
        Light:  <AUtextInput block>
        Dark:   <AUtextInput block dark>
      */

      import AUtextInput from '@gov.au/text-inputs';

      <label htmlFor="textarea" block >label text</label>
      <AUtextInput as="textarea" id="textarea" block />
---
## Text area

Also known as a multiline input.

Text areas are for long form text inputs and can be scaled up or down in size by the user, in browsers that support the feature.

Because text areas are intended for free typing they should ideally use the majority of the available space by using the `.au-text-input--block` class.
