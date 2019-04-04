---
layout: component/code-demo
iframe: examples/example-field-errors
code:
  - HTML: |
        <label class="au-label" for="email">Email</label>
        <span class="au-error-text" id="email-error-text">Enter an email address in the correct format, like name@example.com</span>
        <input type="email" class="au-text-input au-text-input--invalid" id="email" aria-invalid="true" aria-describedby="email-error-text" />
  - React: |
        import { AUlabel, AUerrorText } from '@gov.au/form';
        import { AUtextInput } from '@gov.au/text-inputs';

        <AUlabel text="Email" htmlFor="email" />
        <AUerrorText type="email" text="Enter an email address in the correct format, like name@example.com" id="email -error" />
        <AUtextInput id="email" aria-describedby="email-error" status="invalid" />
---
## Error messages

Error messages are used to notify the user when a form field has not passed validation. Use clear messages to explain what went wrong and how to fix it.
