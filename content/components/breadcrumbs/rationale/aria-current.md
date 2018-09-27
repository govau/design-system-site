---
layout: component/rationale.js
heading: Aria-current
---

In our approach, the final item in the breadcrumbs is not a link. Another design pattern for breadcrumbs is making the last item an anchor element with the `aria-current="page"` attribute. Screenreaders will announce to the user that they are on a link which is the current page.

[Both approaches are valid](https://www.w3.org/TR/wai-aria-practices/#breadcrumb), however the "aria-current" attribute is not supported by all [browser/screen reader combinations](http://design-patterns.tink.uk/aria-current/).

It is useful to have current page being read out on the final item of the breadcrumbs list, but it is also useful being told that the last item is not a link, as the user is already on this page. We are trying our best to balance these two approaches.
