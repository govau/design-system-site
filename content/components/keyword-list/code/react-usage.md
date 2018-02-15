---
layout: section
---

## React Usage

```jsx
import AUkeywordList from './keyword-list';

<AUkeywordList
  repeatedName='Department of'
  items={[
    {
      link: 'http://www.agriculture.gov.au/',
      name: 'Agriculture and Water Resources',
    },
    {
      link: 'https://www.communications.gov.au/',
      name: 'Communications and the Arts',
      li: {
        className: 'li-wrapping-class',
      },
    },
    {
      link: 'https://www.finance.gov.au/',
      name: 'Finance',
    },
  ]}
/>
```
