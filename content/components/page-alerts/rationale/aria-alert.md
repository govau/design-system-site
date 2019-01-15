---
layout: component/rationale.js
heading: ARIA alert role
---

We removed the ARIA alert role ( `role="alert"` ) from the Page Alert component as it was being used incorrectly. The ARIA role is now optional and we recommend it being used in certain situations.

Using `role="alert"` will immediately interrupt assistive technology to inform users of the alert and for this reason should be used sparingly.

We recommend only using the `role="alert"` when there is important time-sensitive information that would be detrimental for a user to miss.

[More about Using the alert role](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Techniques/Using_the_alert_role)
