---
layout: component/code-demo
iframe: examples/example-default
iframeFullwidth: true
height: 300
code:
  - HTML: |
      <form>
        <fieldset class="au-fieldset">
            <legend class="au-fieldset__legend">
                <h1>Which devices do you use?</h1>
                <span class="au-hint-text">You may select more than one</span>
            </legend>
            <label class="au-control-input au-control-input--block">
                <input class="au-control-input__input" type="checkbox" name="checkbox-ex" checked>
                <span class="au-control-input__text">Phone</span>
            </label>
            <label class="au-control-input au-control-input--block">
                <input class="au-control-input__input" type="checkbox" name="checkbox-ex">
                <span class="au-control-input__text">Tablet</span>
            </label>
            <label class="au-control-input au-control-input--block">
                <input class="au-control-input__input" type="checkbox" name="checkbox-ex" checked>
                <span class="au-control-input__text">Laptop</span>
            </label>
        </fieldset>
      </form>
  - React: |
      <AUform>
        <AUfieldset>
            <AUlegend>
                <h1>Which devices do you use?</h1>
                <span className="au-hint-text">You may select more than one</span>
            </AUlegend>
            <AUcheckbox label="Phone" name="checkbox-ex-err" id="cb-phone-err" block checked/>
            <AUcheckbox label="Tablet" name="checkbox-ex-err" id="cb-tablet-err" block/>
            <AUcheckbox label="Laptop" name="checkbox-ex-err" id="cb-laptop-err" block checked/>
        </AUfieldset>
      </AUform>
---
## Default

The form component is intended to be used as a collection of seperate form elements.

### Tips

- When coupling input and labels, utilise the `for` and `id` relationship arguments over nesting the elements together.
- Divide long forms into smaller, more manageable forms.
