---
layout: component/code-demo
iframe: examples/example-groups
iframeFullwidth: true
height: 300
code:
  - HTML: |
        <fieldset class="au-fieldset">
            <legend class="au-fieldset__legend">
                <h1>Which devices do you use?</h1>
                <span class="au-hint-text">You may select more than one</span>
            </legend>
            <div class="au-control-input">
                <input class="au-control-input__input" type="checkbox" name="checkbox-ex" id="cb-phone" checked>
                <label class="au-control-input__text" for="cb-phone">Phone</label>
            </div>
            <div class="au-control-input">
                <input class="au-control-input__input" type="checkbox" name="checkbox-ex" id="cb-tablet">
                <label class="au-control-input__text" for="cb-tablet">Tablet</label>
            </div>
            <div class="au-control-input">
                <input class="au-control-input__input" type="checkbox" name="checkbox-ex" id="cb-laptop" checked>
                <label class="au-control-input__text" for="cb-laptop">Laptop</label>
            </div>
        </fieldset>
  - React: |
        import { AUfieldset, AUlegend } from '@gov.au/form';
        import { AUcheckbox } from '@gov.au/control-input';

        <AUfieldset>
            <AUlegend>
                <h1>Which devices do you use?</h1>
                <span className="au-hint-text">You may select more than one</span>
            </AUlegend>
            <AUcheckbox label="Phone" name="checkbox-ex" id="cb-phone" block checked/>
            <AUcheckbox label="Tablet" name="checkbox-ex" id="cb-tablet" block/>
            <AUcheckbox label="Laptop" name="checkbox-ex" id="cb-laptop" block checked/>
        </AUfieldset>
---
## Groups

