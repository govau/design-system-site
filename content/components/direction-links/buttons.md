---
layout: component/code-demo
example: examples/example-buttons
headline: Buttons
code:
  - HTML: |
      <button class="au-direction-link">Next</button>
  - React: |
      import AUdirectionLink from './direction-links';

      <AUdirectionLink text="Next" onClick={ () => console.log('This function will be called on click') } />
---

Sometimes direction is needed inside a form. Buttons offer a way to direct users to the next or previous section inside a form.
