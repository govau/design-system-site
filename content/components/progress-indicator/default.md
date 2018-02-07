---
layout: component/code-demo
example: examples/example-default
headline: Default
code:
  - HTML: |
      <ul class="au-progress-indicator">
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

      <AUprogressIndicator items={[
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

Our design system provides a progress indicator for larger tasks that can be
completed out of order and returned to at a later date, like doing a tax
return or applying for a driver’s licence.

The individual tasks or steps are shown as either:

- `open` – the task is available for the user to do
- `partly finished` – the task has been started
- `finished` – the task has been completed
- `not yet started` – the user has to do something before the task can be started.
