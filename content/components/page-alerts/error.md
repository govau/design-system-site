---
layout: component/code-demo
iframe: examples/example-error
iframeFullwidth: true
code:
  - HTML: |
      <!--
        Light:      <div class="au-page-alerts au-page-alerts--error">
        Light Alt:  <div class="au-page-alerts au-page-alerts--error au-page-alerts--alt">
        Dark:       <div class="au-body au-body--dark au-page-alerts au-page-alerts--error au-page-alerts--dark >
        Dark Alt:   <div class="au-body au-body--dark au-body--alt au-page-alerts au-page-alerts--error au-page-alerts--dark au-page-alerts--alt">
      -->

      <div class="au-body au-page-alerts au-page-alerts--error">
        <h3>There is a problem</h3>
        <ul>
            <li><a href="#">Full name must not be empty</a></li>
            <li><a href="#">Email must not be empty</a></li>
            <li><a href="#">Description must not be empty</a></li>
        </ul>
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
        <h3>There is a problem</h3>
        <ul>
            <li><a href="#">Full name must not be empty</a></li>
            <li><a href="#">Email must not be empty</a></li>
            <li><a href="#">Description must not be empty</a></li>
        </ul>
      </AUpageAlert>
---
## Error

The error page alert should be used with form validation errors or other errors which will block the user from completing their task.
