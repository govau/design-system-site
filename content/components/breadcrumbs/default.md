---
layout: component/code-demo
iframe: examples/example-default
code:
  - HTML: |
      <!--
        Light:  <nav class="au-breadcrumbs" aria-label="breadcrumb">
        Dark:   <nav class="au-breadcrumbs au-breadcrumbs--dark" aria-label="breadcrumb">
      -->

      <nav class="au-breadcrumbs" aria-label="breadcrumb">
        <ul class="au-link-list au-link-list--inline">
          <li><a href="#">Home</a></li>
          <li><a href="#">Parent</a></li>
          <li>Current page</li>
        </ul>
      </nav>
  - React: |
      /*
        Light:  <AUbreadcrumbs>
        Dark:   <AUbreadcrumbs dark>
      */

      import AUbreadcrumbs from '@gov.au/breadcrumbs';

      <AUbreadcrumbs label="Breadcrumb for this page"
        items={[
          {
            link: '#',
            text: 'Home',
          },
          {
            link: '#',
            text: 'Parent',
          },
          {
            text: 'Current page',
          },
        ]}
      />
---
## Default

Breadcrumbs show users where they are in the website hierarchy and how to navigate back/up to
previous levels or content.
