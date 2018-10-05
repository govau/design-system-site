---
layout: component/code-demo
iframe: examples/example-default
iframeFullwidth: true
code:
  - HTML: |
      <!--
        Light:  <a href="#" class="au-direction-link">
        Dark:   <a href="#" class="au-direction-link au-direction-link--dark">
      -->

      <a class="au-direction-link au-direction-link--left" href="#">Back</a>
      <a class="au-direction-link" href="#">Next</a>
      <a class="au-direction-link au-direction-link--up" href="#">Top</a>
      <a class="au-direction-link au-direction-link--down" href="#">Skip to footer</a>
  - React: |
      /*
        Light:  <AUdirectionLink>
        Dark:   <AUdirectionLink dark>
      */

      import AUdirectionLink from '@gov.au/direction-links';

      <AUdirectionLink link="#url" text="Back" direction="left" />
      <AUdirectionLink link="#url" text="Next" />
      <AUdirectionLink link="#url" text="Top" direction="up" />
      <AUdirectionLink link="#url" text="Skip to footer" direction="down" />
---
## Default

Use direction links to indicate a physical direction, such as:
- Linking 'up' or 'down' within the page.
- Going 'back' to a parent page.
- Showing the 'next' or 'previous' pages.
