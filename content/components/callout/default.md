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

      <p class="au-callout">
        A callout.
      </p>
  - React: |
      /*
        Light:  <AUcalloutCalendar>
        Dark:   <AUcalloutCalendar dark>
      */

      import { AUcallout } from '@gov.au/callout';

      <AUcallout>
        <p>A callout<p>
      </AUcallout>
---
## Default

Use callout to notify and alert users of important snippets of information.