---
layout: component/code-demo
iframe: examples/example-disabled
code:
  - HTML: |
      <!--
        Checkbox:  <input class="au-control-input__input" type="checkbox" name="checkbox-ex" disabled>
      -->
      
      <label class="au-control-input">
        <input class="au-control-input__input" type="radio" name="radio-ex">
        <span class="au-control-input__text">Phone</span>
      </label>
      <label class="au-control-input">
        <input class="au-control-input__input" type="radio" name="radio-ex" disabled>
        <span class="au-control-input__text">Tablet</span>
      </label>
  - React: |
      /*
        Checkbox:  <AUcheckbox disabled>
      */


      import { AUradio } from '@gov.au/control-input';

      <AUradio label="Phone"  name="radio-ex" />
      <AUradio label="Tablet" name="radio-ex" disabled />
---
## Disabled control inputs

Disabled control inputs can be used to indicate inputs that are no longer valid or expired.
