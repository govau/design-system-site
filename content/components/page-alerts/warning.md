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
      import AUpageAlert from './page-alerts';

      <AUpageAlert as='warning'>
        <h3>Alert title</h3>
        <p>Alert Content</p>
      </AUpageAlert>
---

Warning page alerts can be used to notify the user of something which is urgent and likely to be harmful if not seen.
