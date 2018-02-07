---
layout: component/code-demo
example: examples/example-dark
headline: Dark theme
code:
  - HTML: |
      <ul class="au-progress-indicator au-progress-indicator--dark">
        <li>
          <a class="au-progress-indicator__link au-progress-indicator__link--doing" href="#url">
            <span class="au-progress-indicator__status">Doing</span>
            Introduction
          </a>
        </li>
        <li>
          <a class="au-progress-indicator__link au-progress-indicator__link--todo" href="#url">
            <span class="au-progress-indicator__status">To do</span>
            Business Contacts
          </a>
        </li>
        <li>
          <a class="au-progress-indicator__link au-progress-indicator__link--done" href="#url">
            <span class="au-progress-indicator__status">Done</span>
            Case Studies
          </a>
        </li>
      </ul>
  - React: |
      import AUbutton from '@gov.au/progress-indicator';

      <AUprogressIndicator dark items={[
        {
          link: '#url',
          text: 'Introduction',
          status: 'doing',
        },
        {
          link: '#url',
          text: 'Business Contacts',
          status: 'todo',
        },
        {
          link: '#url',
          text: 'Case Studies',
          status: 'done',
        },
      ]} />
---

TODO
