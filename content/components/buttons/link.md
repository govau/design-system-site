---
layout: component/code-demo
example: link
headline: Link Buttons
code:
  - HTML: |
      <a href="/buy-now" class="au-btn">Buy Now</a>
      <a href="/buy-now" class="au-btn au-btn--secondary">Buy Now</a>
      <a href="/buy-now" class="au-btn au-btn--tertiary">Buy Now</a>
  - React: |
      import AUbutton from '@gov.au/buttons';

      <AUbutton secondary href="buy-now">Continue</AUbutton>
---

Simple links don’t always catch a user’s attention when they’re scanning a website. So a link is sometimes styled to look like a button where you want to give
it greater prominence.
