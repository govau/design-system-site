---
layout: component/code-demo
example: examples/example-default
headline: Info
code:
  - HTML: |
      <div role="alert" class="au-body au-page-alerts au-page-alerts--info">
        <h3>Alert title</h3>
        <p>Alert Content</p>
      </div>
  - React: |
      import AUpageAlert from './page-alerts';

      <AUpageAlert as='info'>
        <h3>Alert title</h3>
        <p>Alert Content</p>
      </AUpageAlert>
---

Page alerts are intended for important time-sensitive information only and should be used sparingly.
