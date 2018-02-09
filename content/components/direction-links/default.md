---
layout: component/code-demo
example: examples/example-default
headline: Default
code:
  - HTML: |
      <a class="au-direction-link au-direction-link--left" href="#">Back</a>
      <a class="au-direction-link" href="#">Next</a>
      <a class="au-direction-link au-direction-link--up" href="#">Top</a>
      <a class="au-direction-link au-direction-link--down" href="#">Skip to footer</a>
  - React: |
      import AUdirectionLinks from './direction-links.js';

      <AUdirectionLink link="#url" text="Back" direction="left" />
      <AUdirectionLink link="#url" text="Next" />
      <AUdirectionLink link="#url" text="Top" direction="up" />
      <AUdirectionLink link="#url" text="Skip to footer" direction="down" />
---

Use direction links to link up and down within the DOM or back to a parent page.
