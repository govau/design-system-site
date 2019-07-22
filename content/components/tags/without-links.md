---
layout: component/code-demo
iframe: examples/example-nolink
code:
  - HTML: |
      <!--
        Light:  <span class="au-tag">
        Dark:   <span class="au-tag au-tag--dark">
      -->

      <h2>Tags:</h2>
      <ul class="au-tag-list">
        <li><span class="au-tag au-tag--dark">foo</span></li>
        <li><span class="au-tag au-tag--dark">bar</span></li>
        <li><span class="au-tag au-tag--dark">baz</span></li>
      </ul>
  - React: |
      /*
        Light:  <AUtagList tags={[
        Dark:   <AUtagList dark tags={[
      */

      import AUtagList, {AUtag} from '@gov.au/tags';

      <AUtagList tags={[
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
