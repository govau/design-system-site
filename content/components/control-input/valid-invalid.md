---
layout: component/code-demo
iframe: examples/example-valid-invalid
code:
  - HTML: |
      <!--
        Valid:    <div class="au-control-input au-control-input--valid">
        Invalid:  <div class="au-control-input au-control-input--invalid">
      -->

      <div class="au-control-input au-control-input--valid">
        <input class="au-control-input__input" type="radio" name="radio-ex" id="phone-invalid>
        <label class="au-control-input__text" for="phone-invalid">Phone</label>
      </div>
      <div class="au-control-input au-control-input--invalid">
        <input class="au-control-input__input" type="radio" name="radio-ex" id="tablet-invalid" checked>
        <label class="au-control-input__text" for="tablet-invalid">Tablet</label>
      </div>
  - React: |
      /*
        Valid:  <AUradio status="valid">
        Invalid:   <AUradio status="invalid">
      */

      import { AUradio } from '@gov.au/control-input';

      <AUradio label="Phone" status="valid" name="radio-ex" id="radio-phone-invalid"/>
      <AUradio label="Tablet" status="invalid" name="radio-ex" id="radio-tablet-invalid" defaultChecked />
---
## Valid and invalid states

Add a border around the control inputs to indicate valid or invalid selections.
