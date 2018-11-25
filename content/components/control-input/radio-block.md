---
layout: component/code-demo
iframe: examples/example-radio-block
iframeFullwidth: true
code:
  - HTML: |
      <!--
        Light:  <label class="au-control-input au-control-input--block">
        Dark:   <label class="au-control-input au-control-input--block au-control-input--dark">
      -->

      <label class="au-control-input au-control-input--block">
        <input class="au-control-input__input" type="radio" name="radio-ex">
        <span class="au-control-input__text">Phone</span>
      </label>
      <label class="au-control-input au-control-input--block">
        <input class="au-control-input__input" type="radio" name="radio-ex" checked>
        <span class="au-control-input__text">Tablet</span>
      </label>
      <label class="au-control-input au-control-input--block">
        <input class="au-control-input__input" type="radio" name="radio-ex">
        <span class="au-control-input__text">Laptop</span>
      </label>
  - React: |
      /*
        Light:  <AUradio>
        Dark:   <AUradio dark>
      */

      import { AUradio } from '@gov.au/control-input';

      <AUradio label="Phone" name="radio-ex" block />
      <AUradio label="Tablet" name="radio-ex" block defaultChecked />
      <AUradio label="Laptop" name="radio-ex" block />
---
## Radio Block

Vertically stacked radio buttons.
