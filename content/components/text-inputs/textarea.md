---
layout: component/code-demo
example: examples/example-textarea
headline: Textarea
code:
  - HTML: |
      <label for="textc1">label text</label>
      <textarea class="au-text-input au-text-input--block" name="texta1" id="texta1">
        Value
      </textarea>
  - React: |
      TODO
---

Also known as a multiline input.

Textareas are for long form text inputs and can be scaled up or down in size by the user, in browsers that support the feature.

Because text areas are intended for free typing they should ideally use the majority of the available space by using the `.au-text-input--block` class.
