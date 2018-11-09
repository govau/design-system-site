---
layout: section
---

## React Usage

```jsx
import AUsideNav from './side-nav.js';

<AUsideNav
  dark
  alt
  linkComponent={ Link }
  accordionHeader="In this section"
  menuHeaderLink="#"
  menuHeader="Lodging your tax return"
  items={[
    {
      link: 'one',
      text: 'Change to route one',
      children: [
        {
          link: 'two',
          text: 'Change to route two',
        },
        {
          link: 'three',
          text: 'Change to route three',
        },
      ],
    },
    {
      link: 'four',
      text: 'Change to route four',
    },
  ]}
/>
```
