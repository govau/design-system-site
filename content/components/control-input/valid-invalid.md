---
layout: component/code-demo
iframe: examples/example-valid-invalid
code:
  - HTML: |
      <!--
        Valid:  <label class="au-control-input au-control-input--valid">
        Invalid:   <label class="au-control-input au-control-input--invalid">
      -->

      <label class="au-control-input au-control-input--valid">
        <input class="au-control-input__input" type="radio" name="radio-ex">
        <span class="au-control-input__text">Phone</span>
      </label>
      <label class="au-control-input au-control-input--invalid">
        <input class="au-control-input__input" type="radio" name="radio-ex" checked>
        <span class="au-control-input__text">Tablet</span>
      </label>
  - React: |
      /*
        Valid:  <AUradio status="valid">
        Invalid:   <AUradio status="invalid">
      */

      import { AUradio } from '@gov.au/control-input';

      <AUradio label="Phone" status="valid" name="radio-ex" />
      <AUradio label="Tablet" status="invalid" name="radio-ex" defaultChecked />
---
## Valid invalid

Add highlighting for to indicate valid or invalid control inputs. 
