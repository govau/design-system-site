---
layout: component/code-demo
example: examples/example-radio
headline: Radio
code:
  - HTML: |
      <label class="au-control-input">
        <input class="au-control-input__input" type="radio" name="radio-ex">
        <span class="au-control-input__text">Phone</span>
      </label>
      <label class="au-control-input">
        <input class="au-control-input__input" type="radio" name="radio-ex" checked>
        <span class="au-control-input__text">Phone</span>
      </label>
  - React: |
      import { AUradio } from '@gov.au/control-input';

      <AUradio label="Phone" name="radio-ex" />
      <AUradio label="Phone" name="radio-ex" checked />
---

Radio inputs allow users to select one item at a time.
