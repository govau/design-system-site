---
layout: component/code-demo
iframe: examples/example-label
code:
  - HTML: |
      <!--
        Inline:  <label class="au-label au-label--inline">
      -->

      <label class="au-label" for="email">Email</label>
      <input type="email" class="au-text-input" id="email" name="email">
  - React: |
      /*
        Inline:  <AULabel inline />
      */

      import { AUlabel } from '@gov.au/form';
      import { AUtextInput } from '@gov.au/text-inputs';

      <AUlabel htmlFor="email" text="Email" />
      <AUtextInput type="email" id="email" />
       
---

### Label

Use labels to associate text with a form control. This is done using the `for` and `id` attributes on the label and the form control, respectively.
