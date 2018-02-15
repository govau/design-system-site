---
layout: component/code-demo
example: examples/example-hero
headline: Hero
code:
  - HTML: |
      <header class="au-header au-header--hero" role="banner">
        <h1 class="au-header-heading">Page title</h1>
        <span class="au-header-subline">Service sub-title that could be a little longer</span>
      </header>
  - React: |
      import AUheader from './header';
      
      <AUheader title="Page title" hero subline="Service sub-title that could be a little longer" />
---

A hero version of the header. This version has larger spacing to help users focus on the content.
