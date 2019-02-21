---
layout: component/code-demo
iframe: examples/example-checkbox
code:
  - HTML: |
      <!--
        Light:  <div class="au-control-input">
        Dark:   <div class="au-control-input au-control-input--dark">
      -->

      <div class="au-control-input">
        <input class="au-control-input__input" type="checkbox" name="checkbox-ex" id="cb-phone">
        <label class="au-control-input__text" for="cb-phone">Phone</label>
      </div>
      <div class="au-control-input">
        <input class="au-control-input__input" type="checkbox" name="checkbox-ex" id="cb-tablet" checked>
        <label class="au-control-input__text" for="cb-tablet">Tablet</label>
      </div>
  - React: |
      /*
        Light:  <AUcheckbox>
        Dark:   <AUcheckbox dark>
      */

      import { AUcheckbox } from '@gov.au/control-input';

      <AUcheckbox label="Phone" name="checkbox-ex" id="cb-phone"/>
      <AUcheckbox label="Tablet" name="checkbox-ex" id="cb-tablet" defaultChecked />
---
## Checkbox

Check boxes allow users to select one or more items.
