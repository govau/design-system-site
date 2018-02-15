---
layout: component/code-demo
example: examples/example-nolink
headline: Tags without links
code:
  - HTML: |
      <span>Tags:</span>
      <ul class="au-tags">
        <li>foo</li>
        <li>bar</li>
        <li>baz</li>
      </ul>
  - React: |
      import AUtags from './tags.js';

      <AUtags tags={[
        {
          text: 'foo',
        },
        {
          text: 'bar',
        },
        {
          text: 'baz',
        },
      ]} />
---

A list of tags showing there relation without links.
