---
layout: component/code-demo
example: examples/example-success
headline: Success
code:
  - HTML: |
      <div role="alert" class="au-body au-page-alerts au-page-alerts--success">
        <h3>Alert title</h3>
        <p>Alert Content</p>
      </div>
  - React: |
      import AUpageAlert from './page-alerts';

      <AUpageAlert as='success'>
        <h3>Alert title</h3>
        <p>Alert Content</p>
      </AUpageAlert>
---

The success page alert is used for notifying the user that a task is fully completed.
