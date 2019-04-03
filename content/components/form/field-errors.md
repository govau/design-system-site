---
layout: component/code-demo
iframe: examples/example-field-errors
iframeFullwidth: true
code:
  - HTML: |
        <label class="au-label" for="text-input-error">Email</label>
        <span class="au-error-text" id="error-text">Enter an email address in the correct format, like name@example.com</span>
        <input type="email" class="au-text-input au-text-input--invalid" id="text-input-error" name="text-input-error" aria-invalid="true" aria-describedby="error-text hint-text-e" />
  - React: |
        import { AUlabel, AUerrorText } from '@gov.au/form';
        import { AUtextInput } from '@gov.au/text-inputs';

        <AUlabel text="Email" htmlFor="email-with-error" />
        <AUerrorText type="email" text="Enter an email address in the correct format, like name@example.com" id="error-text" />
        <AUtextInput id="email-with-error" aria-describedby="error-text hint-text-with-error" status="invalid" />
---
## Field errors

Field errors are used for validation where the form input isn't correct.
