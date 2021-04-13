---
layout: component/code-demo
iframe: examples/example-default
code:
  - HTML: |
      <!--
        Light:  <span class="au-tag">
        Dark:   <span class="au-tag au-tag--dark">
      -->

      <h2>Tags:</h2>
      <ul class="au-tag-list">
        <li><a href="#" class="au-tag">foo</a></li>
        <li><a href="#" class="au-tag">bar</a></li>
        <li><a href="#" class="au-tag">baz</a></li>
      </ul>
  - React: |
      /*
        Light:  <AUtagList tags={[
        Dark:   <AUtagList dark tags={[
      */

      import AUtagList, {AUtag} from '@gov.au/tags';

      <AUtagList tags={[
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
          className: ''
          attributeOptions: {
            onClick: () => {console.log('clicked')},
          }
        },
      ]} />
---
## Tags with links

A list of related tags that use links.

**Note:** An [appropriate heading level](https://www.w3.org/TR/WCAG20-TECHS/G141.html) should be used to introduce the purpose of the list.
