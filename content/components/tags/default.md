---
layout: component/code-demo
example: examples/example-default
headline: Tags with links
code:
  - HTML: |
      <!--
        Light:  <ul class="au-tags">
        Dark:   <ul class="au-tags au-tags--dark">
      -->

      <h2>Tags:</h2>
      <ul class="au-tags">
        <li><a href="#">foo</a></li>
        <li><a href="#">bar</a></li>
        <li><a href="#">baz</a></li>
      </ul>
  - React: |
      /*
        Light:  <AUtags tags={[
        Dark:   <AUtags dark tags={[
      */

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

A list of related tags that use links.

**Note:** An [appropriate heading level](https://www.w3.org/TR/WCAG20-TECHS/G141.html) should be used to introduce the purpose of the list.
