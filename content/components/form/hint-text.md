---
layout: component/code-demo
iframe: examples/example-hint-text
iframeFullwidth: true
code:
  - HTML: |
      <label class="au-label" for="phone-input">Phone</label>
      <span class="au-hint-text">Maximum 10 digits</span>
      <input type="phone" class="au-text-input" id="phone-input" name="phone-input" />
  - React: |
      import { AUlabel, AUhintText } from "@gov.au/form";
      import { AUtextInput } from "@gov.au/text-inputs";

      <AUlabel text="Phone" htmlFor="txt-phone" />
      <AUhintText text="Maximum 10 digits" id="hint-text-with-error-inline"/>
      <AUtextInput type="phone" id="phone-with-error-inline" aria-describedby="phone-text-inline hint-text-with-error-inline" status="invalid" />
---
## Hint text

Hint text can be used to provide more context that will help the user successfully complete the form field.
