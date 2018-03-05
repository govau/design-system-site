---
layout: component/code-demo
example: examples/example-default
headline: Default
code:
  - HTML: |
      <header class="au-header" role="banner">
        <h1 class="au-header-heading">Page title</h1>
        <span class="au-header-subline">Service sub-title that could be a little longer</span>
      </header>
  - React: |
      import AUheader from '@gov.au/header';

      <AUheader title="Page title" subline="Service sub-title that could be a little longer" />
---

The header at the top of the page. Usually contains a Commonwealth Coat of Arms, branding and navigation.
