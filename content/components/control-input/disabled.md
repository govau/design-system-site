---
layout: component/code-demo
iframe: examples/example-disabled
code:
  - HTML: |
      <label class="au-control-input">
        <input class="au-control-input__input" type="checkbox" name="checkbox-ex">
        <span class="au-control-input__text">Phone</span>
      </label>
      <label class="au-control-input au-control-input--dark">
        <input class="au-control-input__input" type="checkbox" name="checkbox-ex" disabled>
        <span class="au-control-input__text">Tablet</span>
      </label>
  - React: |
      /*
        Light:  <AUcheckbox>
        Dark:   <AUcheckbox dark>
      */

      import { AUcheckbox } from '@gov.au/control-input';

      <AUcheckbox label="Phone"  name="checkbox-ex" />
      <AUcheckbox label="Tablet" name="checkbox-ex" disabled />
---
## Disabled control inputs

Disabled control inputs can be used to indicate inputs that are no longer valid or expired.
