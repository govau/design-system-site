---
layout: component/code-demo
example: disabled
headline: Disabled Buttons
code:
  - HTML: |
      <button class="au-btn" disabled>Disabled button</button>
      <button class="au-btn au-btn--secondary" disabled>Disabled button</button>
      <button class="au-btn au-btn--tertiary" disabled>Disabled button</button>
  - React: |
      import AUbutton from '@gov.au/buttons';

      <AUbutton secondary disabled>Continue</AUbutton>
---

A button that can’t be clicked and doesn’t react to hover. A disabled button is typically greyed out to indicate to users that they cannot undertake the action
associated with it. This is usually for page logic reasons.
