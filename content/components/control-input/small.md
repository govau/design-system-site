---
layout: component/code-demo
iframe: examples/example-small
code:
  - HTML: |
      <label class="au-control-input au-control-input--small">
        <input class="au-control-input__input" type="radio" name="radio-ex">
        <span class="au-control-input__text">Phone</span>
      </label>
      <label class="au-control-input au-control-input--dark au-control-input--small">
        <input class="au-control-input__input" type="radio" name="radio-ex" checked>
        <span class="au-control-input__text">Tablet</span>
      </label>
  - React: |
      /*
        Light:  <AUradio>
        Dark:   <AUradio dark>
      */

      import { AUradio } from '@gov.au/control-input';

      <AUradio label="Phone"  name="radio-ex" />
      <AUradio label="Tablet" name="radio-ex" defaultChecked />
---
## Small inputs

These are smaller versions of control inputs.
