---
layout: component/code-demo
example: examples/example-default
headline: Default
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

A key and value pair used to display a small subtitle above a larger title.
