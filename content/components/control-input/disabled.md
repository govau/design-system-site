---
layout: component/code-demo
iframe: examples/example-disabled
code:
  - HTML: |
      <!--
        Checkbox:  <input class="au-control-input__input" type="checkbox" name="checkbox-ex" disabled>
      -->
      
      <div class="au-control-input">
        <input class="au-control-input__input" type="radio" name="radio-ex" id="phone-disabled" disabled>
        <label class="au-control-input__text" for="phone-disabled">Phone</label>
      </div>
      <div class="au-control-input">
        <input class="au-control-input__input" type="radio" name="radio-ex" id="tablet-disabled" disabled>
        <label class="au-control-input__text" for="tablet-disabled">Tablet</label>
      </div>
  - React: |
      /*
        Checkbox:  <AUcheckbox disabled>
      */


      import { AUradio } from '@gov.au/control-input';

      <AUradio label="Phone"  name="radio-ex" id="radio-phone" disabled/>
      <AUradio label="Tablet" name="radio-ex" id="radio-tablet" disabled />
---
## Disabled control inputs

Disabled control inputs can be used to indicate inputs that are no longer valid or expired.
