---
layout: component/code-demo
iframe: examples/example-success
iframeFullwidth: true
code:
  - HTML: |
      <!--
        Light:      <div class="au-page-alerts au-page-alerts--success">
        Light Alt:  <div class="au-page-alerts au-page-alerts--success au-page-alerts--alt">
        Dark:       <div class="au-body au-body--dark au-page-alerts au-page-alerts--success au-page-alerts--dark >
        Dark Alt:   <div class="au-body au-body--dark au-body--alt au-page-alerts au-page-alerts--success au-page-alerts--dark au-page-alerts--alt">
      -->

      <div class="au-body au-page-alerts au-page-alerts--success">
        <h3>Submission successful</h3>
        <p>Your application has been successfully submitted.</p>
      </div>
  - React: |
      /*
        Light:      <AUpageAlert as='success'>
        Light Alt:  <AUpageAlert as='success' alt>
        Dark:       <AUpageAlert as='success' dark>
        Dark Alt:   <AUpageAlert as='success' dark alt>
      */

      import AUpageAlert from '@gov.au/page-alerts';

      <AUpageAlert as='success'>
        <h3>Submission successful</h3>
        <p>Your application has been successfully submitted.</p>
      </AUpageAlert>
---
## Success

The success page alert is used for notifying the user that a task is fully completed.
