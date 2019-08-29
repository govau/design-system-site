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

      <a class="au-direction-link" href="#">
        <span class="au-direction-link__arrow au-direction-link__arrow--left" aria-hidden="true"></span>Back
      </a>
      <a class="au-direction-link" href="#">
        Next<span class="au-direction-link__arrow" aria-hidden="true"></span>
      </a>
      <a class="au-direction-link" href="#">
        Top<span class="au-direction-link__arrow au-direction-link__arrow--up" aria-hidden="true"></span>
      </a>
      <a class="au-direction-link" href="#">
        Skip to footer<span class="au-direction-link__arrow au-direction-link__arrow--down" aria-hidden="true"></span>
      </a>
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
