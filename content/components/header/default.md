---
layout: component/code-demo
example: examples/example-default
exampleFullwidth: true
headline: Default
code:
  - HTML: |
      <!--
        Light:  <header class="au-header" role="banner">
        Dark:   <header class="au-header au-header--dark" role="banner">
      -->

      <header class="au-header" role="banner">
        <h1 class="au-header-heading">Page title</h1>
        <span class="au-header-subline">Service sub-title that could be a little longer</span>
      </header>
  - React: |
      /*
        Light:  <AUheader>
        Dark:   <AUheader dark>
      */

      import AUheader from '@gov.au/header';

      <AUheader title="Page title" subline="Service sub-title that could be a little longer" />
---

The header at the top of the page. Usually contains a Commonwealth Coat of Arms, branding and navigation.
