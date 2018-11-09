---
layout: component/code-demo
iframe: examples/example-inline
code:
  - HTML: |
      <!--
        Light:  Inherited from .au-body
        Dark:   Inherited from .au-body.au-body--dark
      -->

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
## Inline

The Inline link list is simply a modifier to the default link list which makes the links run inline/horizontally.
