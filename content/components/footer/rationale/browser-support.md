---
layout: component/rationale.js
heading: Screen Reader & Browser Support
---

 
We know that some of our users are browsing older browsers and screen readers, so we use both the HTML5 elements as well as ARIA roles to make sure the landmarks are [accessible and available](https://www.html5accessibility.com/) to as many people as possible. In the `footer` element, we add a `role="contentinfo"` to support the older browsers and screen readers that do not expose the `footer` as a landmark.

For example the screen reader does not [provide support](https://tink.uk/screen-reader-support-for-html5-sections/) to the `footer` element when using JAWS 14 and Internet explorer 9.
 

