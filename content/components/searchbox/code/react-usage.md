---
layout: section
---

## React Usage

```jsx
import AUsearchbox from '@gov.au/searchbox';

<AUsearchbox
    aria-label="sitewide"
    label="Search this website" 
    btnText="Search"
    responsive={true}
    id="search-site"
    btnProps={{ onClick: () => console.log('hello'), className: 'blah', type: 'button' }}
/>
```
