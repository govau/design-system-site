---
layout: component/code-demo
example: examples/example-calendar
headline: Calendar
code:
  - HTML: |
      <section class="au-callout au-callout--calendar-event" aria-label="Callout calendar">
        <span class="au-callout--calendar-event__lede">The next public holiday is:</span>
        <time class="au-callout--calendar-event__time" datetime="2017-01-01T00:00:00+00:00">Sunday 1 January</time>
        <span class="au-callout--calendar-event__name">New Year’s Day</span>
      </section>
  - React: |
      import { CalloutCalendar } from './callout.js';

      <CalloutCalendar
        description="Callout calendar"
        datetime="2017-01-01T00:00:00+00:00"
        time="Sunday 1 Jan"
        subline="The next public holiday is"
        name="New Year's Day"
      />
---

Use a calendar callout to notify and alert users of important dates and events.
