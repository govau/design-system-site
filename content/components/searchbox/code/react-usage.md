---
layout: section
---

## React Usage

```jsx
import AUsearchbox from '@gov.au/searchbox';

<AUsearchbox 
    label="Search" 
    btnText="Search"
    responsive={true}
    id="def-search"
    btnProps={{ onClick: () => console.log('hello'), className: 'blah', type: 'button' }}
/>
```
