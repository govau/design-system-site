---
layout: component/code-demo
iframe: examples/example-radio
code:
  - HTML: |
      <!--
        Light:  <label class="au-control-input">
        Dark:   <label class="au-control-input au-control-input--dark">
      -->

      <label class="au-control-input">
        <input class="au-control-input__input" type="radio" name="radio-ex">
        <span class="au-control-input__text">Phone</span>
      </label>
      <label class="au-control-input">
        <input class="au-control-input__input" type="radio" name="radio-ex" checked>
        <span class="au-control-input__text">Phone</span>
      </label>
  - React: |
      /*
        Light:  <AUradio>
        Dark:   <AUradio dark>
      */

      import { AUradio } from '@gov.au/control-input';

      <AUradio label="Phone" name="radio-ex" />
      <AUradio label="Phone" name="radio-ex" checked />
---
## Radio

Radio inputs allow users to select one item at a time.
