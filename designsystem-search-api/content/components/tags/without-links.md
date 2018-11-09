---
layout: component/code-demo
iframe: examples/example-nolink
code:
  - HTML: |
      <!--
        Light:  <ul class="au-tags">
        Dark:   <ul class="au-tags au-tags--dark">
      -->

      <h2>Tags:</h2>
      <ul class="au-tags">
        <li>foo</li>
        <li>bar</li>
        <li>baz</li>
      </ul>
  - React: |
      /*
        Light:  <AUtags tags={[
        Dark:   <AUtags dark tags={[
      */

      import AUtags from '@gov.au/tags';

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
## Tags without links

A list of related tags without links.
