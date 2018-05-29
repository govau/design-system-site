---
layout: component/code-demo
example: examples/example-hero
exampleFullwidth: true
headline: Hero
code:
  - HTML: |
      <!--
        Light:  <header class="au-header au-header--hero" role="banner">
        Dark:   <header class="au-header au-header--hero au-header--dark" role="banner">
      -->

      <header class="au-header au-header--hero" role="banner">
        <h1 class="au-header-heading">Page title</h1>
        <span class="au-header-subline">Service sub-title that could be a little longer</span>
      </header>
  - React: |
      /*
        Light:  <AUheader>
        Dark:   <AUheader dark>
      */

      import AUheader from '@gov.au/header';

      <AUheader title="Page title" hero subline="Service sub-title that could be a little longer" />
---

A ‘hero’ version of the header. This version has larger spacing for more visual prominence. Examples of use might be a home page, or promotional page.
