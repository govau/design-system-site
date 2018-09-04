---
layout: component/code-demo
example: examples/example-error
headline: Error
code:
  - HTML: |
      <!--
        Light:      <div role="alert" class="au-page-alerts au-page-alerts--error">
        Light Alt:  <div role="alert" class="au-page-alerts au-page-alerts--error au-page-alerts--alt">
        Dark:       <div role="alert" class="au-body au-body--dark au-page-alerts au-page-alerts--error au-page-alerts--dark >
        Dark Alt:   <div role="alert" class="au-body au-body--dark au-body--alt au-page-alerts au-page-alerts--error au-page-alerts--dark au-page-alerts--alt">
      -->

      <div role="alert" class="au-body au-page-alerts au-page-alerts--error">
        <h3>Error</h3>
        <p>Alert Content</p>
      </div>
  - React: |
      /*
        Light:      <AUpageAlert as='error'>
        Light Alt:  <AUpageAlert as='error' alt>
        Dark:       <AUpageAlert as='error' dark>
        Dark Alt:   <AUpageAlert as='error' dark alt>
      */

      import AUpageAlert from '@gov.au/page-alerts';

      <AUpageAlert as='error'>
        <h3>Error</h3>
        <p>Alert Content</p>
      </AUpageAlert>
---

The error page alert should be used with form validation errors or other errors which will block the user from completing their task.
