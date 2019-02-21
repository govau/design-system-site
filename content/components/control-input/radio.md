---
layout: component/code-demo
iframe: examples/example-radio
code:
  - HTML: |
      <!--
        Light:  <div class="au-control-input">
        Dark:   <div class="au-control-input au-control-input--dark">
      -->

      <div class="au-control-input">
        <input class="au-control-input__input" type="radio" name="radio-ex" id="radio-phone">
        <label class="au-control-input__text" for="radio-phone">Phone</label>
      </div>
      <div class="au-control-input">
        <input class="au-control-input__input" type="radio" name="radio-ex" id="radio-tablet" checked>
        <label class="au-control-input__text" for="radio-tablet">Tablet</label>
      </div>
  - React: |
      /*
        Light:  <AUradio>
        Dark:   <AUradio dark>
      */

      import { AUradio } from '@gov.au/control-input';

      <AUradio label="Phone" name="radio-ex" id="radio-phone-block" />
      <AUradio label="Tablet" name="radio-ex" id="radio-tablet-block" defaultChecked />
---
## Radio

Radio inputs allow users to select one item at a time.
