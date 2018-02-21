---
layout: component/code-demo
example: examples/example-inline
headline: Inline
code:
  - HTML: |
      <ul class="au-link-list au-link-list--inline">
        <li><a href="#">Options</a></li>
        <li><a href="#">Help</a></li>
        <li><a href="#">Sign Out</a></li>
      </ul>
  - React: |
      import AUlinkList from '@gov.au/link-list';

      <AUlinkList inline items={[
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

The Inline link list is simply a modifier to the default link list which makes the links run inline/horizontally.
