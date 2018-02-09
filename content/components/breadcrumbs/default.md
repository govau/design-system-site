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
      import AUbreadcrumbs from './breadcrumbs.js';

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

A singular method of expanding and collapsing a peice of content with a title. These are best used for transcripts of videos.
