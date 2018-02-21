---
layout: component/code-demo
example: examples/example-default
headline: Default
code:
  - HTML: |
      <ul class="au-link-list">
        <li><a href="#">Options</a></li>
        <li><a href="#">Help</a></li>
        <li><a href="#">Sign Out</a></li>
      </ul>
  - React: |
      import AUlinkList from '@gov.au/link-list';

      <AUlinkList items={[
        {
          link: '#',
          text: 'Options',
        },
        {
          link: '#',
          text: 'Help',
        },
        {
          link: '#',
          text: 'Sign Out',
        },
      ]} />
---

The default link list component removes the normal bullets and spacing associated with a list.
