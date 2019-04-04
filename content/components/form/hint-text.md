---
layout: component/code-demo
iframe: examples/example-hint-text
code:
  - HTML: |
      <label class="au-label" for="email">Email</label>
      <span class="au-hint-text" id="email-hint">We will only use this to respond to your query</span>
      <input type="email" class="au-text-input" id="email" name="email" aria-describedby="email-hint"/>
  - React: |
      import { AUlabel, AUhintText } from "@gov.au/form";
      import { AUtextInput } from "@gov.au/text-inputs";

      <AUlabel text="Email" htmlFor="email" />
      <AUhintText text="We will only use this to respond to your query" id="hint-text"/>
      <AUtextInput type="email" id="email" aria-describedby="hint-text" status="invalid" />
---
## Hint text

Hint text can be used to provide more context that will help the user successfully complete the form field.
