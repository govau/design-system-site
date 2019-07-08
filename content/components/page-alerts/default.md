---
layout: component/code-demo
iframe: examples/example-default
iframeFullwidth: true
code:
  - HTML: |
      <!--
        Light:      <div class="au-page-alerts au-page-alerts--info">
        Light Alt:  <div class="au-page-alerts au-page-alerts--info au-page-alerts--alt">
        Dark:       <div class="au-body au-body--dark au-page-alerts au-page-alerts--info au-page-alerts--dark >
        Dark Alt:   <div class="au-body au-body--dark au-body--alt au-page-alerts au-page-alerts--info au-page-alerts--dark au-page-alerts--alt">
      -->

      <div class="au-body au-page-alerts au-page-alerts--info">
        <h3>Notice</h3>
        <p>All vacancies close on the advertised closing date unless otherwise specified.</p>
      </div>
  - React: |
      /*
        Light:      <AUpageAlert as='info'>
        Light Alt:  <AUpageAlert as='info' alt>
        Dark:       <AUpageAlert as='info' dark>
        Dark Alt:   <AUpageAlert as='info' dark alt>
      */

      import AUpageAlert from '@gov.au/page-alerts';

      <AUpageAlert as='info'>
       <h3>Notice</h3>
       <p>All vacancies close on the advertised closing date unless otherwise specified.</p>
      </AUpageAlert>
---
## Info

Page alerts are intended for important time-sensitive information only and should be used sparingly.
