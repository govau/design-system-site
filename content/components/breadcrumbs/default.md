---
layout: component/code-demo
example: examples/example-default
headline: Default
code:
  - HTML: |
      <nav class="au-breadcrumbs" aria-label="breadcrumb">
        <ul class="au-link-list au-link-list--inline">
          <li><a href="#">Home</a></li>
          <li><a href="#">Parent</a></li>
          <li>Current page</li>
        </ul>
      </nav>
  - React: |
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

Breadcrumbs show users where they are in the website hierarchy and how to navigate back/up to
previous levels or content.
