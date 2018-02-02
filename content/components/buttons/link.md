---
layout: component/code-demo
example: examples/example-link
headline: Link Buttons
code:
  - HTML: |
      <a href="/buy-now" class="au-btn">
        Primary link button
      </a>

      <a href="/buy-now" class="au-btn au-btn--secondary">
        Secondary link button
      </a>

      <a href="/buy-now" class="au-btn au-btn--tertiary">
        Tertiary link button
      </a>
  - React: |
      import AUbutton from '@gov.au/buttons';

      <AUbutton href="buy-now">
        Primary link button
      </AUbutton>

      <AUbutton secondary href="buy-now">
        Secondary link button
      </AUbutton>

      <AUbutton tertiary href="buy-now">
        Tertiary link button
      </AUbutton>
---

Simple links don’t always catch a user’s attention when they’re scanning a website. So a link is sometimes styled to look like a button where you want to give
it greater prominence.
