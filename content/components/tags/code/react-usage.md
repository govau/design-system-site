---
layout: section
---

## React Usage

```jsx
import AUtagList, { AUtag } from '@gov.au/tags';

{/* Single tag component */}
<AUtag text="Single tag" />
<AUtag text="Single tag anchor" link="#" />


{/* Tag list component */}
<AUtagList dark tags={[
        {
            link: '#url',
            text: 'foo',
        },
        {
            link: '#url',
            text: 'bar',
            //attribute options on the tag
            attributeOptions: {
                role: "link",
                className: "extra class",
                onClick: event => { event.preventDefault(); console.log('This function is called when the tag is clicked') },
            },
            // attribute options on the li element
            li: {
                className: 'li-wrapping-class',
            }
        },
        {
            link: '#url',
            text: 'baz',
        },
        {
            //non-link tag
            text: 'boing',
        },
]} />
```
