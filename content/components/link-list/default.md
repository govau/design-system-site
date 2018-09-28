---
layout: component/code-demo
iframe: examples/example-default
iframeFullwidth: true
headline: Default
code:
  - HTML: |
      <!--
        Light:  Inherited from .au-body
        Dark:   Inherited from .au-body.au-body--dark
      -->

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
