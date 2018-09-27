---
layout: component/code-demo
example: examples/example-default
exampleFullwidth: true
headline: Default
code:
  - HTML: |
      <!--
        Light:  <p class="au-callout">
        Dark:   <p class="au-callout au-callout--dark">
      -->

      <p class="au-callout" aria-label="Callout description1">
        A callout.
      </p>
  - React: |
      /*
        Light:  <AUcalloutCalendar>
        Dark:   <AUcalloutCalendar dark>
      */

      import { AUcallout } from '@gov.au/callout';

      <AUcallout description="description for first callout">
        A callout.
      </AUcallout>
---

Use callout to notify and alert users of important snippets of information.
