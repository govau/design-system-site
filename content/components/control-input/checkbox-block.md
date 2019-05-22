---
layout: component/code-demo
iframe: examples/example-checkbox-block
iframeFullwidth: true
code:
  - HTML: |
      <!--
        Light:  <div class="au-control-input au-control-input--block">
        Dark:   <div class="au-control-input au-control-input--block au-control-input--dark">
      -->

      <div class="au-control-input au-control-input--block">
        <input class="au-control-input__input" type="checkbox" name="checkbox-ex" id="phone-cb-block">
        <label class="au-control-input__text" for="phone-cb-block">Phone
      </div>
      <div class="au-control-input au-control-input--block">
        <input class="au-control-input__input" type="checkbox" name="checkbox-ex" id="tablet-cb-block" checked>
        <label class="au-control-input__text" for="tablet-cb-block">Tablet
      </div>
      <div class="au-control-input au-control-input--block">
        <input class="au-control-input__input" type="checkbox" name="checkbox-ex" id="laptop-cb-block" checked>
        <label class="au-control-input__text" for="laptop-cb-block">Laptop
      </div>
  - React: |
      /*
        Light:  <AUcheckbox>
        Dark:   <AUcheckbox dark>
      */

      import { AUcheckbox } from '@gov.au/control-input';

      <AUcheckbox label="Phone" name="checkbox-ex" id="cb-phone" block />
      <AUcheckbox label="Tablet" name="checkbox-ex" id="cb-tablet" block defaultChecked />
      <AUcheckbox label="Laptop" name="checkbox-ex" id="cb-laptop" block defaultChecked />
---
## Checkbox Block

Inline checkbox options can sometimes be difficult to scan. Users may find it challenging to determine with which label the checkbox option corresponds: the one before the checkbox or the one after. Vertical positioning of checkbox,  with one choice per line, eliminates this potential cause for confusion.


