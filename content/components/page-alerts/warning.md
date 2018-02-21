---
layout: component/code-demo
example: examples/example-warning
headline: Warning
code:
  - HTML: |
      <div role="alert" class="au-body au-page-alerts au-page-alerts--warning">
        <h3>Alert title</h3>
        <p>Alert Content</p>
      </div>
  - React: |
      import AUpageAlert from '@gov.au/page-alerts';

      <AUpageAlert as='warning'>
        <h3>Alert title</h3>
        <p>Alert Content</p>
      </AUpageAlert>
---

Use warning page alerts to tell the user something urgent. Only use an alert if
the information will help the user avoid a problem.
