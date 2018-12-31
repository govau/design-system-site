---
layout: component/rationale.js
heading: Aria-current
---

In our approach, the final item in the breadcrumb list is not a link. Another way to approach breadcrumbs is making the last item a link with the `aria-current="page"` attribute. Screenreaders will announce to the user that they are on the current page.

[Both approaches are valid](https://www.w3.org/TR/wai-aria-practices/#breadcrumb), however the "aria-current" attribute is [currently not supported by older browsers and screen readers](https://design-patterns.tink.uk/aria-current/).

It is useful to hear that the user is on the current page when they reach the final item of the breadcrumb list, however references to the current page can be confusing to a user when they hear that it is a link. We are trying our best to balance these two approaches.
