---
layout: component/code-demo
iframe: examples/example-sr-heading
iframeFullwidth: true
code:
  - HTML: |
      <!--
        Light:  <section class="au-callout">
        Dark:   <section class="au-callout au-callout--dark">
      -->
      <section class="au-callout">
          <h2 class="au-callout__heading au-callout__heading--sronly">Title of the callout</h2>
          <p>Description of the callout</p>
      </section>

  - React: |
      /*
        Light:  <AUcalloutCalendar>
        Dark:   <AUcalloutCalendar dark>
      */

      import { AUcallout } from '@gov.au/callout';

      <AUcallout srOnlyTitle title="Title of the callout">
        <p>Description of the callout</p>
      </AUcallout>
---
## Callout heading screen reader only

A callout with a heading that can be read by screen readers. Markup for the title is included for screen reader users.
