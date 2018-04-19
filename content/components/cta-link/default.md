---
layout: component/code-demo
example: examples/example-default
headline: Default
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

A simple and clear link to direct users to a preferred action.
