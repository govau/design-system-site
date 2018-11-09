---
layout: component/code-demo
iframe: examples/example-links
iframeFullwidth: true
code:
  - HTML: |
      <!--
        Light:  <ul class="au-link-list au-keyword-list">
        Dark:   <ul class="au-link-list au-keyword-list au-keyword-list--dark">
      -->

      <ul class="au-keyword-list au-link-list">
        <li>
          <a href="#">
            <small class="au-keyword-list__small">Department of </small>
            Agriculture and Water Resources
          </a>
        </li>
        <li>
          <a href="#">
            <small class="au-keyword-list__small">Department of </small>
            Communications and the Arts
          </a>
        </li>
      </ul>
  - React: |
      /*
        Light:  <AUkeywordList repeatedName='repeated text'
        Dark:   <AUkeywordList dark repeatedName='repeated text'
      */

      import AUkeywordList from '@gov.au/keyword-list';

      <AUkeywordList repeatedName='Department of' items={[
        {
          link: '#url',
          name: 'Agriculture and Water Resources',
        },
        {
          link: '#url',
          name: 'Communications and the Arts',
        },
      ]} />
---
## With links

The keyword list also supports links which span both the key and value pair in the text.
