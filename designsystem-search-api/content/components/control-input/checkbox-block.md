---
layout: component/code-demo
iframe: examples/example-checkbox-block
iframeFullwidth: true
code:
  - HTML: |
      <!--
        Light:  <label class="au-control-input au-control-input--block">
        Dark:   <label class="au-control-input au-control-input--block au-control-input--dark">
      -->

      <label class="au-control-input">
        <input class="au-control-input__input" type="checkbox" name="checkbox-ex">
        <span class="au-control-input__text">Phone</span>
      </label>
      <label class="au-control-input">
        <input class="au-control-input__input" type="checkbox" name="checkbox-ex" checked>
        <span class="au-control-input__text">Tablet</span>
      </label>
      <label class="au-control-input">
        <input class="au-control-input__input" type="checkbox" name="checkbox-ex" checked>
        <span class="au-control-input__text">Laptop</span>
      </label>
  - React: |
      /*
        Light:  <AUcheckbox>
        Dark:   <AUcheckbox dark>
      */

      import { AUcheckbox } from '@gov.au/control-input';

      <AUcheckbox label="Phone" name="checkbox-ex" block />
      <AUcheckbox label="Tablet" name="checkbox-ex" block checked />
      <AUcheckbox label="Laptop" name="checkbox-ex" block checked />
---
## Checkbox Block

Inline checkbox options can sometimes be difficult to scan. Users may find it challenging to determine with which label the checkbox option corresponds: the one before the checkbox or the one after. Vertical positioning of checkbox,  with one choice per line, eliminates this potential cause for confusion.


