---
layout: component/code-demo
example: examples/example-error
headline: Error
code:
  - HTML: |
      <div role="alert" class="au-body au-page-alerts au-page-alerts--error">
        <h3>Alert title</h3>
        <p>Alert Content</p>
      </div>
  - React: |
      import AUpageAlert from '@gov.au/page-alerts';

      <AUpageAlert as='error'>
        <h3>Alert title</h3>
        <p>Alert Content</p>
      </AUpageAlert>
---

The error page alert should be used with form validation errors or other errors which will block the user from completing their task.
