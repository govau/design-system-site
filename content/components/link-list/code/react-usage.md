---
layout: section
---

## React Usage

```jsx
import AUlinkList from './link-list';

<AUlinkList items={[
  {
    link: 'link/one/',
    text: 'Link 1',
  },
  {
    link: 'link/two/',
    text: 'Link 2',
    className: 'is-active',
    li: {
      className: 'li-wrapping-class',
    },
  },
  {
    text: 'Link 3',
    onClick: () => console.log('You clicked me!'),
  },
]} />
```
