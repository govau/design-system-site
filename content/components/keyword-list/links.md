---
layout: component/code-demo
example: examples/example-links
headline: With links
code:
  - HTML: |
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

The keyword list also supports links which span both the key and value pair in the text.
