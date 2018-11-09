---
layout: component/code-demo
iframe: examples/example-default
iframeFullwidth: true
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
## Default

Use callout to notify and alert users of important snippets of information.
