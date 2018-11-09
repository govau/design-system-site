---
layout: section
---

## React Usage

```jsx
import { AUinpageNavLinks, AUinpageNavSection } from '@gov.au/inpage-nav';

<AUinpageNavLinks sections={[
  {
    link: 'section1',
    title: 'Section 1',
  },
  {
    link: 'section2',
    title: 'Section 2',
    li: {
      className: 'li-wrapping-class',
    },
  },
]} />

<AUinpageNavSection title="Section 1 headline" link="section1">
</AUinpageNavSection>

<AUinpageNavSection title="Section 2 headline" link="section2">
</AUinpageNavSection>
```
