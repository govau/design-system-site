---
layout: component/code-demo
example: examples/example-default
exampleFullwidth: true
headline: Default
code:
  - HTML: |
      TODO HTML
      Get from https://github.com/govau/uikit
  - React: |
      TODO React
      Get from https://github.com/govau/uikit
---

The main navigation component is intended to be used as the primary means of navigation around the website. It typically accommodates the top level of the information architecture.

Most sites will require some form of navigation to help users find the information they’re looking for. While a horizontal navigation bar is just one option for navigation design, it is one of the most visible and familiar ways of helping users navigate a site.

The main navigation component is designed to to work closely with the [header](/components/header/) component and collapses down to a conventional open/close menu button on smaller devices.

**Note:** Because the main navigation component is a horizontal list, it doesn’t accommodate a large amount of items. If you need more space, consider another navigation component such as the [side nav](/components/side-nav/).

### Tips

- Avoid using hover to expand dropdown lists. Hover is difficult for some users and won’t work on touch screens.

- Model your navigation according to the tasks and information your users most frequently need to access.

- Use descriptive, recognisable link labels. Don’t label links with jargon or unfamiliar terms.

- Present links in priority order: Higher-demand links should appear farther to the left, and lower-demand links should appear farther to the right.
