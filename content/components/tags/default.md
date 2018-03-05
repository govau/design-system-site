---
layout: component/code-demo
example: examples/example-default
headline: Tags using definition list
code:
  - HTML: |
      <dl class="au-tags">
        <dt>Tags:</dt>
          <dd><a href="#">foo</a></dd>
          <dd><a href="#">bar</a></dd>
          <dd><a href="#">baz</a></dd>
      </dl>
  - React: |
      import AUtags from '@gov.au/tags';

      <AUtags tags={[
        {
          link: '#',
          text: 'foo',
        },
        {
          link: '#',
          text: 'bar',
        },
        {
          link: '#',
          text: 'baz',
        },
      ]} />
---


Tags support use of the [`<dl>` HTML element]( https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dl). This is particularly useful when there are multiple lists of tags.

In a list of tags, each tag can be described by the `<dd>` (description detail) and titled with a `<dt>` (description term).
