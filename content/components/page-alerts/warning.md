---
layout: component/code-demo
example: examples/example-warning
headline: Warning
code:
  - HTML: |
      <!--
        Light:      <div role="alert" class="au-page-alerts au-page-alerts--warning">
        Light Alt:  <div role="alert" class="au-page-alerts au-page-alerts--warning au-page-alerts--alt">
        Dark:       <div role="alert" class="au-body au-body--dark au-page-alerts au-page-alerts--warning au-page-alerts--dark >
        Dark Alt:   <div role="alert" class="au-body au-body--dark au-body--alt au-page-alerts au-page-alerts--warning au-page-alerts--dark au-page-alerts--alt">
      -->

      <div role="alert" class="au-body au-page-alerts au-page-alerts--warning">
        <h3>Warning</h3>
        <p>Alert Content</p>
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
        <h3>Warning</h3>
        <p>Alert Content</p>
      </AUpageAlert>
---

Use warning page alerts to tell the user something urgent. Only use an alert if
the information will help the user avoid a problem.
