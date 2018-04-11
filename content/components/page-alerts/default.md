---
layout: component/code-demo
example: examples/example-default
headline: Info
code:
  - HTML: |
      <!--
        Light:      <div role="alert" class="au-page-alerts au-page-alerts--info">
        Light Alt:  <div role="alert" class="au-page-alerts au-page-alerts--info au-page-alerts--alt">
        Dark:       <div role="alert" class="au-body au-body--dark au-page-alerts au-page-alerts--info au-page-alerts--dark >
        Dark Alt:   <div role="alert" class="au-body au-body--dark au-body--alt au-page-alerts au-page-alerts--info au-page-alerts--dark au-page-alerts--alt">
      -->

      <div role="alert" class="au-body au-page-alerts au-page-alerts--info">
        <h3>Alert title</h3>
        <p>Alert Content</p>
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
        <h3>Alert title</h3>
        <p>Alert Content</p>
      </AUpageAlert>
---

Page alerts are intended for important time-sensitive information only and should be used sparingly.
