---
layout: component/code-demo
iframe: examples/example-warning
iframeFullwidth: true
code:
  - HTML: |
      <!--
        Light:      <div class="au-page-alerts au-page-alerts--warning">
        Light Alt:  <div class="au-page-alerts au-page-alerts--warning au-page-alerts--alt">
        Dark:       <div class="au-body au-body--dark au-page-alerts au-page-alerts--warning au-page-alerts--dark >
        Dark Alt:   <div class="au-body au-body--dark au-body--alt au-page-alerts au-page-alerts--warning au-page-alerts--dark au-page-alerts--alt">
      -->

      <div class="au-body au-page-alerts au-page-alerts--warning">
        <h3>Browser out of date</h3>
        <p>Your web browser is out of date.</p>
      </div>
  - React: |
      /*
        Light:      <AUpageAlert as='warning'>
        Light Alt:  <AUpageAlert as='warning' alt>
        Dark:       <AUpageAlert as='warning' dark>
        Dark Alt:   <AUpageAlert as='warning' dark alt>
      */

      import AUpageAlert from '@gov.au/page-alerts';

      <AUpageAlert as='warning'>
        <h3>Browser out of date</h3>
        <p>Your web browser is out of date.</p>
      </AUpageAlert>
---
## Warning

Use warning page alerts to tell the user something urgent. Only use an alert if the information will help the user avoid a problem.
