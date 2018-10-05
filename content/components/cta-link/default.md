---
layout: component/code-demo
iframe: examples/example-default
iframeFullwidth: true
code:
  - HTML: |
      <!--
        Light:  <a class="au-cta-link" href="#">
        Dark:   <a class="au-cta-link au-cta-link--dark" href="#">
      -->

      <a class="au-cta-link" href="#">Sign up</a>
  - React: |
      /*
        Light:  <AUctaLink>
        Dark:   <AUctaLink dark>
      */

      import AUctaLink from '@gov.au/cta-link';

      <AUctaLink link="/signup" text="Sign up" />
---
## Default

A simple and clear link to direct users to a preferred action.
