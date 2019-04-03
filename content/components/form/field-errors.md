---
layout: component/code-demo
iframe: examples/example-field-errors
iframeFullwidth: true
code:
  - HTML: |
        <label class="au-label" for="text-input-error">Email</label>
        <span class="au-hint-text" id="hint-text-e">We will only use this to respond to your request</span>
        <span class="au-error-text" id="error-text">Enter an email address in the correct format, like name@example.com</span>
        <input type="email" class="au-text-input au-text-input--invalid" id="text-input-error" name="text-input-error" aria-invalid="true" aria-describedby="error-text hint-text-e" />
  - React: |
        import { AUlabel, AUhintText, AUerrorText } from '@gov.au/form';
        import { AUtextInput } from '@gov.au/text-inputs';

        <AUlabel text="Email" htmlFor="email-with-error" />
        <AUhintText text="We will only use this to respond to your request" id="hint-text-with-error"/>
        <AUerrorText type="email" text="Enter an email address in the correct format, like name@example.com" id="error-text" />
        <AUtextInput id="email-with-error" aria-describedby="error-text hint-text-with-error" status="invalid" />
---
## Field errors

