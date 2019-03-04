---
layout: component/code-demo
iframe: examples/example-small
code:
  - HTML: |
      <!--
        Checkbox:  <input class="au-control-input__input" type="checkbox" name="checkbox-ex">
      -->

      <div class="au-control-input au-control-input--small">
        <input class="au-control-input__input" type="radio" id="phone-class-small" name="radio-ex">
        <label class="au-control-input__text" for="phone-class-small">Phone</label>
      </div>
      <div class="au-control-input au-control-input--small">
        <input class="au-control-input__input" type="radio" name="radio-ex" id="tablet-class-small" checked>
        <label class="au-control-input__text" for="tablet-class-small">Tablet</label>
      </div>
  - React: |
      /*
        Checkbox:  <AUcheckbox small>
      */

      import { AUradio } from '@gov.au/control-input';

      <AUradio label="Phone"  name="radio-ex" id="cb-phone-sm" small />
      <AUradio label="Tablet" name="radio-ex" id="cb-tablet-sm" small defaultChecked />
---
## Small inputs

Smaller versions of control inputs.