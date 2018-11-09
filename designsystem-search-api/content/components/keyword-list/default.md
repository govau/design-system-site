---
layout: component/code-demo
iframe: examples/example-default
iframeFullwidth: true
code:
  - HTML: |
      <!--
        Light:  <ul class="au-link-list au-keyword-list">
        Dark:   <ul class="au-link-list au-keyword-list au-keyword-list--dark">
      -->

      <ul class="au-keyword-list au-link-list">
        <li>
          <small class="au-keyword-list__small">Department of </small>
          Agriculture and Water Resources
        </li>
        <li>
          <small class="au-keyword-list__small">Department of </small>
          Communications and the Arts
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
          name: 'Agriculture and Water Resources',
        },
        {
          name: 'Communications and the Arts',
        },
      ]} />
---
## Default

A key and value pair used to display a small subtitle above a larger title.
