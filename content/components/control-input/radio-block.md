---
layout: component/code-demo
iframe: examples/example-radio-block
iframeFullwidth: true
code:
  - HTML: |
      <!--
        Light:  <div class="au-control-input au-control-input--block">
        Dark:   <div class="au-control-input au-control-input--block au-control-input--dark">
      -->

      <div class="au-control-input au-control-input--block">
        <input class="au-control-input__input" type="radio" name="radio-ex" id="phone-radio-block">
        <label class="au-control-input__text" for="phone-radio-block">Phone</label>
      </div>
      <div class="au-control-input au-control-input--block">
        <input class="au-control-input__input" type="radio" name="radio-ex" id="tablet-radio-block" checked>
        <label class="au-control-input__text" for="tablet-radio-block">Tablet</label>
      </div>
      <div class="au-control-input au-control-input--block">
        <input class="au-control-input__input" type="radio" name="radio-ex" id="laptop-radio-block">
        <label class="au-control-input__text" for="laptop-radio-block">Laptop</label>
      </div>
  - React: |
      /*
        Light:  <AUradio>
        Dark:   <AUradio dark>
      */

      import { AUradio } from '@gov.au/control-input';

      <AUradio label="Phone" name="radio-ex" id="radio-phone-block" block />
      <AUradio label="Tablet" name="radio-ex" id="radio-tablet-block" block defaultChecked />
      <AUradio label="Laptop" name="radio-ex" id="radio-laptop-block" block />
---
## Radio Block

Vertically stacked radio buttons.
