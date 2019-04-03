---
layout: component/code-demo
iframe: examples/example-label
iframeFullwidth: true
code:
  - HTML: |
      <!--
        Inline:  <label class="au-label au-label--inline">
      -->

      <label class="au-label" for="text-input-block-label">Email</label>
      <input type="text" class="au-text-input" id="text-input-block-label" name="text-input-block-label">
  - React: |
      /*
        Inline:  <AULabel inline />
      */

      import { AUlabel } from '@gov.au/form';
      import { AUtextInput } from '@gov.au/text-inputs';

      <AUlabel htmlFor="label" text="Email" />
      <AUtextInput type="email" id="label" />
       
---

### Label

Use labels to associate text with a form control. This is done using the `for` and `id` attributes on the label and the form control, respectively.
